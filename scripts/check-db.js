// Quick script to check database contents
import { neon } from '@neondatabase/serverless';
import dotenv from 'dotenv';

dotenv.config();

async function checkDatabase() {
  if (!process.env.DATABASE_URL) {
    console.error('❌ DATABASE_URL not found');
    process.exit(1);
  }

  const sql = neon(process.env.DATABASE_URL);

  try {
    // Check if tables exist
    console.log('🔍 Checking tables...');
    const tables = await sql`
      SELECT table_name
      FROM information_schema.tables
      WHERE table_schema = 'public'
      ORDER BY table_name
    `;
    console.log('📋 Tables found:', tables.map(t => t.table_name).join(', '));

    // Check facts table
    console.log('\n🔍 Checking facts table...');
    const factCount = await sql`SELECT COUNT(*) as count FROM facts`;
    console.log(`📊 Facts in database: ${factCount[0].count}`);

    if (factCount[0].count > 0) {
      const sampleFacts = await sql`SELECT id, fact_text, category FROM facts LIMIT 3`;
      console.log('\n📝 Sample facts:');
      sampleFacts.forEach((fact, i) => {
        console.log(`${i + 1}. [${fact.category}] ${fact.fact_text.substring(0, 60)}...`);
      });
    }

    // Check if vote tables exist
    const voteCount = await sql`SELECT COUNT(*) as count FROM votes`;
    console.log(`\n🗳️ Votes in database: ${voteCount[0].count}`);

  } catch (error) {
    console.error('❌ Database error:', error.message);

    // Try a simpler query
    try {
      console.log('\n🔄 Trying simpler connection test...');
      const result = await sql`SELECT 1 as test`;
      console.log('✅ Database connection works!');
      console.log('❓ But tables might not be created properly');
    } catch (e) {
      console.log('❌ Cannot connect to database at all');
    }
  }
}

checkDatabase();