import crypto from 'crypto';
import { createOrGetSession } from './_lib/database.js';

// Helper to hash IP addresses
function hashIP(ip) {
  return crypto.createHash('sha256').update(ip || 'unknown').digest('hex');
}

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { browserFingerprint } = req.body;

    // Generate session token
    const sessionToken = crypto.randomBytes(32).toString('hex');

    // Get IP and hash it
    const ip = req.headers['x-forwarded-for'] || req.connection?.remoteAddress || req.socket?.remoteAddress;
    const ipHash = hashIP(ip);

    // Create session
    const session = await createOrGetSession(
      sessionToken,
      ipHash,
      browserFingerprint || 'unknown'
    );

    res.status(200).json({
      success: true,
      sessionToken,
      expiresAt: session.expires_at,
    });

  } catch (error) {
    console.error('Error creating session:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to create session',
    });
  }
};