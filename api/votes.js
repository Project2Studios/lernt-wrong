import crypto from 'crypto';
import { submitVote, getVoteCounts } from './_lib/database.js';

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
    const { factId, voteType, sessionToken, browserFingerprint } = req.body;

    // Validate inputs
    if (!factId || !voteType || !sessionToken) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields',
      });
    }

    if (voteType !== 'up' && voteType !== 'down') {
      return res.status(400).json({
        success: false,
        error: 'Invalid vote type',
      });
    }

    // Get IP and hash it
    const ip = req.headers['x-forwarded-for'] || req.connection?.remoteAddress || req.socket?.remoteAddress;
    const ipHash = hashIP(ip);

    // Submit the vote
    await submitVote(
      factId,
      voteType,
      sessionToken,
      ipHash,
      browserFingerprint || 'unknown'
    );

    // Get updated counts
    const voteCounts = await getVoteCounts([factId]);
    const counts = voteCounts[0] || { upvotes: 0, downvotes: 0, total_votes: 0 };

    res.status(200).json({
      success: true,
      message: 'Vote recorded',
      counts: {
        upvotes: counts.upvotes,
        downvotes: counts.downvotes,
        totalVotes: counts.total_votes,
      },
    });

  } catch (error) {
    console.error('Error recording vote:', error);

    // Check for duplicate vote
    if (error.message === 'Already voted') {
      return res.status(400).json({
        success: false,
        error: 'You have already voted on this fact',
      });
    }

    res.status(500).json({
      success: false,
      error: 'Failed to record vote',
    });
  }
};