#!/usr/bin/env node

/**
 * Cleanup script to fix contradictory teaching status in database
 * Applies business logic: If still_taught=true, remove taught_until_year
 */

import pg from 'pg';
import dotenv from 'dotenv';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { auditContradictoryFacts } from './audit-contradictory-facts.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables
dotenv.config({ path: join(__dirname, '..', '.env') });

// Database connection
const client = new pg.Client({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
});

async function cleanupContradictoryFacts(dryRun = true) {
  console.log('🧹 Starting cleanup of contradictory teaching status...');
  console.log(`Mode: ${dryRun ? 'DRY RUN (no changes will be made)' : 'LIVE (changes will be applied)'}`);
  console.log('');

  try {
    await client.connect();

    // Get contradictory facts directly from database
    console.log('📊 Finding contradictory facts...');
    const auditQuery = `
      SELECT
        id,
        fact_text,
        category,
        debunked_year,
        taught_until_year,
        still_taught,
        source
      FROM facts
      WHERE taught_until_year IS NOT NULL
        AND still_taught = true
      ORDER BY category, id;
    `;

    const auditResult = await client.query(auditQuery);
    const contradictoryFacts = auditResult.rows;

    if (contradictoryFacts.length === 0) {
      console.log('✅ No contradictory facts found! Database is already clean.');
      return { fixed: 0, errors: 0 };
    }

    console.log(`\n🛠️  Applying business logic to ${contradictoryFacts.length} facts:`);
    console.log('   Rule: If still_taught=true, remove taught_until_year');
    console.log('   Rationale: Facts cannot have ended being taught if they are still taught today');
    console.log('');

    let fixedCount = 0;
    let errorCount = 0;

    const updateQuery = `
      UPDATE facts
      SET taught_until_year = NULL,
          updated_at = NOW()
      WHERE id = $1
        AND still_taught = true
        AND taught_until_year IS NOT NULL
    `;

    // Process each contradictory fact
    for (const fact of contradictoryFacts) {
      try {
        console.log(`${dryRun ? '🔍' : '🔧'} ${fact.id}: "${fact.fact_text.substring(0, 50)}..."`);
        console.log(`   Category: ${fact.category}`);
        console.log(`   Current: Debunked ${fact.debunked_year} | Taught until ${fact.taught_until_year} | Still taught: ${fact.still_taught}`);

        if (!dryRun) {
          // Apply the fix
          const result = await client.query(updateQuery, [fact.id]);

          if (result.rowCount > 0) {
            console.log(`   ✅ Fixed: Removed taught_until_year, kept still_taught=true`);
            fixedCount++;
          } else {
            console.log(`   ⚠️  No changes made (fact may have been fixed already)`);
          }
        } else {
          console.log(`   🔄 Would fix: Remove taught_until_year=${fact.taught_until_year}, keep still_taught=true`);
          fixedCount++; // Count for dry run
        }

        console.log('');

      } catch (error) {
        console.error(`   ❌ Error processing ${fact.id}:`, error.message);
        errorCount++;
      }
    }

    console.log('📈 Cleanup Summary:');
    console.log(`   • Facts processed: ${contradictoryFacts.length}`);
    console.log(`   • Facts ${dryRun ? 'would be ' : ''}fixed: ${fixedCount}`);
    console.log(`   • Errors: ${errorCount}`);
    console.log('');

    if (dryRun) {
      console.log('🔄 This was a DRY RUN. No changes were made to the database.');
      console.log('   To apply changes, run: node scripts/cleanup-contradictory-facts.js --live');
    } else {
      console.log('✅ Cleanup complete! Running post-cleanup audit...');

      // Run post-cleanup audit
      const postAuditResult = await client.query(auditQuery);
      const remainingFacts = postAuditResult.rows;

      if (remainingFacts.length === 0) {
        console.log('🎉 Success! No contradictory facts remain.');
      } else {
        console.log(`⚠️  ${remainingFacts.length} contradictory facts still remain. Manual review may be needed.`);
      }
    }

    return { fixed: fixedCount, errors: errorCount };

  } catch (error) {
    console.error('❌ Error during cleanup:', error);
    throw error;
  } finally {
    await client.end();
  }
}

// Run cleanup if script is called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  const isLive = process.argv.includes('--live');
  const dryRun = !isLive;

  if (isLive) {
    console.log('⚠️  WARNING: You are about to make changes to the production database!');
    console.log('   This will permanently modify fact records.');
    console.log('   Press Ctrl+C to cancel, or wait 5 seconds to continue...');
    console.log('');

    await new Promise(resolve => setTimeout(resolve, 5000));
  }

  cleanupContradictoryFacts(dryRun)
    .then((result) => {
      console.log(`\n🏁 Cleanup ${dryRun ? 'simulation' : 'operation'} complete.`);
      console.log(`   Fixed: ${result.fixed}, Errors: ${result.errors}`);
      process.exit(result.errors > 0 ? 1 : 0);
    })
    .catch((error) => {
      console.error('💥 Cleanup failed:', error.message);
      process.exit(1);
    });
}