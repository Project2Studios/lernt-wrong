// Fixed database setup script
import { neon } from '@neondatabase/serverless';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function setupDatabase() {
  if (!process.env.DATABASE_URL) {
    console.error('❌ DATABASE_URL environment variable is required');
    process.exit(1);
  }

  console.log('🔄 Setting up database...');
  const sql = neon(process.env.DATABASE_URL);

  try {
    // Read schema file
    console.log('📋 Reading schema...');
    const schemaSQL = fs.readFileSync(path.join(__dirname, '../database/schema.sql'), 'utf8');

    // Split into individual statements and execute them
    const statements = schemaSQL
      .split(';')
      .map(s => s.trim())
      .filter(s => s.length > 0 && !s.startsWith('--'));

    console.log(`📝 Executing ${statements.length} schema statements...`);

    for (let i = 0; i < statements.length; i++) {
      const statement = statements[i];
      if (statement) {
        try {
          console.log(`  ${i + 1}/${statements.length}: ${statement.substring(0, 50)}...`);
          await sql.unsafe(statement);
        } catch (error) {
          if (error.message.includes('already exists')) {
            console.log(`    ⚠️ Already exists, skipping`);
          } else {
            console.error(`    ❌ Error: ${error.message}`);
            throw error;
          }
        }
      }
    }

    console.log('✅ Schema created successfully');

    // Read and execute sample data
    console.log('📋 Adding sample data...');
    const sampleDataSQL = fs.readFileSync(path.join(__dirname, '../database/sample-data.sql'), 'utf8');

    const dataStatements = sampleDataSQL
      .split(';')
      .map(s => s.trim())
      .filter(s => s.length > 0 && !s.startsWith('--'));

    for (let i = 0; i < dataStatements.length; i++) {
      const statement = dataStatements[i];
      if (statement) {
        try {
          console.log(`  Adding data ${i + 1}/${dataStatements.length}...`);
          await sql.unsafe(statement);
        } catch (error) {
          if (error.message.includes('duplicate key')) {
            console.log(`    ⚠️ Data already exists, skipping`);
          } else {
            console.error(`    ❌ Error: ${error.message}`);
            throw error;
          }
        }
      }
    }

    console.log('✅ Sample data added successfully');

    // Verify setup
    console.log('🔍 Verifying setup...');
    const tables = await sql`
      SELECT table_name
      FROM information_schema.tables
      WHERE table_schema = 'public'
      ORDER BY table_name
    `;
    console.log('📋 Tables created:', tables.map(t => t.table_name).join(', '));

    const factCount = await sql`SELECT COUNT(*) as count FROM facts`;
    console.log(`📊 Database contains ${factCount[0].count} facts`);

    if (factCount[0].count > 0) {
      const sampleFacts = await sql`SELECT fact_text, category FROM facts LIMIT 2`;
      console.log('📝 Sample facts:');
      sampleFacts.forEach((fact, i) => {
        console.log(`  ${i + 1}. [${fact.category}] ${fact.fact_text.substring(0, 50)}...`);
      });
    }

    console.log('✅ Database setup complete!');

  } catch (error) {
    console.error('❌ Database setup failed:', error);
    process.exit(1);
  }
}

setupDatabase();