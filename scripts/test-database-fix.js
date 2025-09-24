#!/usr/bin/env node

/**
 * Test script to verify the database fix worked
 * Specifically checks the bulls_hate_red fact
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

async function testDatabaseFix() {
  console.log('🧪 Testing database fix for bulls_hate_red fact...');
  console.log('');

  try {
    await client.connect();

    // Test the specific fact we saw in the screenshot
    const result = await client.query(
      'SELECT id, fact_text, debunked_year, taught_until_year, still_taught FROM facts WHERE id = $1',
      ['bulls_hate_red']
    );

    if (result.rows.length === 0) {
      console.log('❌ bulls_hate_red fact not found in database!');
      return false;
    }

    const fact = result.rows[0];
    console.log('📋 Database state for bulls_hate_red:');
    console.log(`   ID: ${fact.id}`);
    console.log(`   Fact: "${fact.fact_text.substring(0, 60)}..."`);
    console.log(`   Debunked Year: ${fact.debunked_year}`);
    console.log(`   Taught Until Year: ${fact.taught_until_year || 'NULL'}`);
    console.log(`   Still Taught: ${fact.still_taught}`);
    console.log('');

    // Check if the fix worked
    const isFixed = fact.taught_until_year === null && fact.still_taught === true;

    if (isFixed) {
      console.log('✅ SUCCESS! The fix worked correctly:');
      console.log('   • taught_until_year is NULL (removed)');
      console.log('   • still_taught is true (kept)');
      console.log('   • No more conflicting badges should appear!');
    } else {
      console.log('❌ ISSUE: The fix did not work as expected:');
      if (fact.taught_until_year !== null) {
        console.log(`   • taught_until_year should be NULL but is: ${fact.taught_until_year}`);
      }
      if (fact.still_taught !== true) {
        console.log(`   • still_taught should be true but is: ${fact.still_taught}`);
      }
    }

    console.log('');

    // Test a few more random facts to ensure consistency
    console.log('🔍 Testing a few more facts for consistency...');
    const moreResults = await client.query(`
      SELECT id, debunked_year, taught_until_year, still_taught
      FROM facts
      WHERE still_taught = true
      LIMIT 5
    `);

    let allGood = true;
    moreResults.rows.forEach(f => {
      const hasConflict = f.taught_until_year !== null && f.still_taught === true;
      if (hasConflict) {
        console.log(`   ❌ ${f.id}: still has taught_until_year=${f.taught_until_year}`);
        allGood = false;
      } else {
        console.log(`   ✅ ${f.id}: taught_until_year=${f.taught_until_year || 'NULL'}, still_taught=${f.still_taught}`);
      }
    });

    if (allGood) {
      console.log('🎉 All tested facts look good! No conflicts detected.');
    } else {
      console.log('⚠️  Some facts still have conflicts.');
    }

    return isFixed && allGood;

  } catch (error) {
    console.error('❌ Error testing database:', error);
    return false;
  } finally {
    await client.end();
  }
}

// Run test if script is called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  testDatabaseFix()
    .then((success) => {
      console.log(`\n🏁 Database fix test ${success ? 'PASSED' : 'FAILED'}`);
      process.exit(success ? 0 : 1);
    })
    .catch((error) => {
      console.error('💥 Test failed:', error.message);
      process.exit(1);
    });
}