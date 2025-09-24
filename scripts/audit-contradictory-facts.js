#!/usr/bin/env node

/**
 * Database audit script to find facts with contradictory teaching status
 * Identifies facts where taught_until_year and still_taught conflict
 */

import pg from 'pg';
import dotenv from 'dotenv';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables
dotenv.config({ path: join(__dirname, '..', '.env') });

// Database connection
const client = new pg.Client({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
});

async function auditContradictoryFacts() {
  console.log('🔍 Auditing database for contradictory teaching status...');
  console.log('');

  try {
    await client.connect();

    // Find facts with contradictory data
    const query = `
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

    const result = await client.query(query);
    const contradictoryFacts = result.rows;

    console.log(`📊 Found ${contradictoryFacts.length} facts with contradictory teaching status:`);
    console.log('');

    if (contradictoryFacts.length === 0) {
      console.log('✅ No contradictory facts found! Database is clean.');
      return [];
    }

    // Display each contradictory fact
    contradictoryFacts.forEach((fact, index) => {
      console.log(`${index + 1}. ${fact.id}`);
      console.log(`   Category: ${fact.category}`);
      console.log(`   Fact: "${fact.fact_text.substring(0, 80)}${fact.fact_text.length > 80 ? '...' : ''}"`);
      console.log(`   🔶 Debunked: ${fact.debunked_year || 'N/A'}`);
      console.log(`   ⚠️  CONFLICT: Taught until ${fact.taught_until_year} AND still taught today`);
      console.log(`   Source: ${fact.source || 'N/A'}`);
      console.log('');
    });

    console.log('🎯 Analysis Summary:');
    console.log(`   • Total contradictory facts: ${contradictoryFacts.length}`);
    console.log(`   • Categories affected: ${[...new Set(contradictoryFacts.map(f => f.category))].length}`);
    console.log('');

    console.log('💡 Recommended Actions:');
    console.log('1. Review each fact to determine if it\'s actually still taught today');
    console.log('2. For facts truly still taught: Remove taught_until_year, keep still_taught=true');
    console.log('3. For facts no longer taught: Keep taught_until_year, set still_taught=false');
    console.log('4. Run the cleanup script after manual review');

    return contradictoryFacts;

  } catch (error) {
    console.error('❌ Error auditing database:', error);
    throw error;
  } finally {
    await client.end();
  }
}

// Export for use in other scripts
export { auditContradictoryFacts };

// Run audit if script is called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  auditContradictoryFacts()
    .then((facts) => {
      console.log(`\n🏁 Audit complete. Found ${facts.length} contradictory facts.`);
      process.exit(facts.length > 0 ? 1 : 0); // Exit with error code if issues found
    })
    .catch((error) => {
      console.error('💥 Audit failed:', error.message);
      process.exit(1);
    });
}