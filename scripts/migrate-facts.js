#!/usr/bin/env node

/**
 * Migration script to transfer facts from outdatedFacts.ts to the database
 * Run with: node scripts/migrate-facts.js
 */

import { readFileSync, writeFileSync, unlinkSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import pg from 'pg';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables
dotenv.config({ path: join(__dirname, '..', '.env') });

// Database connection
const client = new pg.Client({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
});

async function extractFactsFromFile() {
  console.log('📖 Reading facts from TypeScript file...');

  try {
    // Read the TypeScript file
    const filePath = join(__dirname, '..', 'src', 'data', 'outdatedFacts.ts');
    const tsContent = readFileSync(filePath, 'utf-8');

    // Create a temporary JavaScript file by converting the TypeScript
    const tempFilePath = join(__dirname, 'temp-facts-data.js');

    console.log('🔄 Converting TypeScript to JavaScript...');

    // Convert TypeScript to JavaScript
    let jsContent = tsContent
      // Remove TypeScript interface definitions
      .replace(/export interface.*?\{[\s\S]*?\}/g, '')
      // Remove type annotations
      .replace(/: Record<string, OutdatedFact\[\]>/g, '')
      .replace(/: OutdatedFact\[\]/g, '')
      .replace(/: number/g, '')
      .replace(/: string/g, '')
      .replace(/: boolean/g, '')
      .replace(/\?\s*:/g, ':')
      // Convert export const to regular const for the data
      .replace('export const outdatedFacts', 'const outdatedFacts')
      // Keep the function export
      .replace('export function getFactsForGraduationYear', 'function getFactsForGraduationYear');

    // Add our export function at the end
    jsContent += `

// Export function for migration
export function getAllUniqueFactsForMigration() {
  const allFacts = [];
  const seenIds = new Set();

  for (const [decade, facts] of Object.entries(outdatedFacts)) {
    for (const fact of facts) {
      if (!seenIds.has(fact.id)) {
        seenIds.add(fact.id);
        allFacts.push(fact);
      }
    }
  }

  return allFacts;
}
`;

    // Write the temporary JavaScript file
    writeFileSync(tempFilePath, jsContent);

    // Import the data
    const { getAllUniqueFactsForMigration } = await import(tempFilePath);
    const allFacts = getAllUniqueFactsForMigration();

    // Clean up temp file
    unlinkSync(tempFilePath);

    console.log(`✅ Successfully extracted ${allFacts.length} unique facts`);
    return allFacts;

  } catch (error) {
    console.error('❌ Error extracting facts:', error);

    // Clean up temp file if it exists
    const tempFilePath = join(__dirname, 'temp-facts-data.js');
    if (existsSync(tempFilePath)) {
      unlinkSync(tempFilePath);
    }

    throw new Error('Failed to extract facts from TypeScript file: ' + error.message);
  }
}

async function migrateFactsToDatabase(facts) {
  console.log('🗄️  Connecting to database...');
  await client.connect();

  try {
    // Clear existing facts (if any)
    console.log('🧹 Clearing existing facts...');
    await client.query('DELETE FROM facts');

    // Prepare insert statement
    const insertQuery = `
      INSERT INTO facts (
        id, fact_text, correction, explanation, category,
        debunked_year, taught_until_year, still_taught, source, source_url
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
    `;

    console.log('💾 Inserting facts into database...');
    let insertedCount = 0;

    for (const fact of facts) {
      try {
        // Convert camelCase to snake_case and prepare values
        const values = [
          fact.id,
          fact.fact,
          fact.correction,
          fact.explanation || null,
          fact.category,
          fact.debunkedYear || null,
          fact.taughtUntilYear || null,
          fact.stillTaught || false,
          fact.source || null,
          fact.sourceUrl || null
        ];

        await client.query(insertQuery, values);
        insertedCount++;

        if (insertedCount % 50 === 0) {
          console.log(`   📝 Inserted ${insertedCount}/${facts.length} facts...`);
        }
      } catch (error) {
        console.error(`❌ Error inserting fact ${fact.id}:`, error.message);
        console.error('   Fact data:', JSON.stringify(fact, null, 2));
      }
    }

    console.log(`✅ Successfully inserted ${insertedCount} facts`);

    // Refresh the materialized view
    console.log('🔄 Refreshing vote counts view...');
    await client.query('REFRESH MATERIALIZED VIEW vote_counts');

    // Get final count
    const result = await client.query('SELECT COUNT(*) as count FROM facts');
    console.log(`📊 Database now contains ${result.rows[0].count} facts`);

  } finally {
    await client.end();
  }
}

async function main() {
  try {
    console.log('🚀 Starting facts migration...');
    console.log('');

    // Check environment
    if (!process.env.DATABASE_URL) {
      throw new Error('DATABASE_URL environment variable is required');
    }

    // Extract facts from TypeScript file
    const facts = await extractFactsFromFile();
    console.log('');

    // Migrate to database
    await migrateFactsToDatabase(facts);
    console.log('');

    console.log('🎉 Migration completed successfully!');
    console.log('');
    console.log('Next steps:');
    console.log('1. Deploy to Vercel with environment variables configured');
    console.log('2. Test the API endpoints to ensure facts are being served correctly');
    console.log('3. The frontend will automatically use database facts when available');
    console.log('4. The outdatedFacts.ts file serves as a fallback for development');
    console.log('');
    console.log('⚠️  IMPORTANT: Make sure to set DATABASE_URL in Vercel environment variables!');

  } catch (error) {
    console.error('💥 Migration failed:', error.message);
    process.exit(1);
  }
}

// Run the migration
main();