import { neon } from '@neondatabase/serverless';

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    // Check if DATABASE_URL exists
    if (!process.env.DATABASE_URL) {
      return res.status(500).json({
        error: 'DATABASE_URL environment variable not set',
        envVars: Object.keys(process.env).filter(k => k.includes('DATABASE')),
      });
    }

    // Test database connection
    const sql = neon(process.env.DATABASE_URL);

    // Simple query to test connection
    const result = await sql`SELECT 1 as test`;

    // Check if facts table exists and count
    const factCount = await sql`SELECT COUNT(*) as count FROM facts`;

    res.status(200).json({
      success: true,
      message: 'Database connection successful',
      testQuery: result[0],
      factCount: factCount[0],
      databaseUrl: process.env.DATABASE_URL ? 'Set (hidden)' : 'Not set',
    });

  } catch (error) {
    console.error('Database test error:', error);
    res.status(500).json({
      success: false,
      error: error.message,
      errorCode: error.code,
      errorDetail: error.detail,
      databaseUrl: process.env.DATABASE_URL ? 'Set (hidden)' : 'Not set',
    });
  }
}