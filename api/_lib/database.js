import { neon } from '@neondatabase/serverless';

// Database connection
const sql = neon(process.env.DATABASE_URL);

// Get all facts from database
async function getAllFacts() {
  try {
    const result = await sql`
      SELECT * FROM facts ORDER BY created_at DESC
    `;
    return result;
  } catch (error) {
    console.error('Database error in getAllFacts:', error);
    return [];
  }
}

// Get vote counts for facts
async function getVoteCounts(factIds) {
  try {
    if (!factIds || factIds.length === 0) {
      return [];
    }

    const result = await sql`
      SELECT
        f.id as fact_id,
        COALESCE(vc.upvotes, 0) as upvotes,
        COALESCE(vc.downvotes, 0) as downvotes,
        COALESCE(vc.total_votes, 0) as total_votes
      FROM facts f
      LEFT JOIN vote_counts vc ON f.id = vc.fact_id
      WHERE f.id = ANY(${factIds})
    `;
    return result;
  } catch (error) {
    console.error('Database error in getVoteCounts:', error);
    return [];
  }
}

// Create or get a session
async function createOrGetSession(sessionToken, ipHash, browserFingerprint) {
  try {
    const result = await sql`
      INSERT INTO vote_sessions (
        session_token,
        ip_hash,
        browser_fingerprint,
        vote_count,
        created_at,
        expires_at
      )
      VALUES (
        ${sessionToken},
        ${ipHash},
        ${browserFingerprint},
        0,
        NOW(),
        NOW() + INTERVAL '24 hours'
      )
      ON CONFLICT (session_token) DO UPDATE SET
        last_vote_at = NOW()
      RETURNING *
    `;
    return result[0];
  } catch (error) {
    console.error('Database error in createOrGetSession:', error);
    throw error;
  }
}

// Submit a vote
async function submitVote(factId, voteType, sessionToken, ipHash, browserFingerprint) {
  try {
    // Check if vote already exists
    const existingVote = await sql`
      SELECT id FROM votes
      WHERE fact_id = ${factId}
      AND session_token = ${sessionToken}
    `;

    if (existingVote.length > 0) {
      throw new Error('Already voted');
    }

    // Insert the vote
    await sql`
      INSERT INTO votes (
        fact_id,
        vote_type,
        session_token,
        ip_hash,
        browser_fingerprint,
        created_at,
        expires_at
      )
      VALUES (
        ${factId},
        ${voteType},
        ${sessionToken},
        ${ipHash},
        ${browserFingerprint},
        NOW(),
        NOW() + INTERVAL '30 days'
      )
    `;

    // Update vote count in session
    await sql`
      UPDATE vote_sessions
      SET vote_count = vote_count + 1,
          last_vote_at = NOW()
      WHERE session_token = ${sessionToken}
    `;

    // Refresh vote counts
    await sql`SELECT refresh_vote_counts()`;

    return true;
  } catch (error) {
    console.error('Database error in submitVote:', error);
    throw error;
  }
}

export {
  getAllFacts,
  getVoteCounts,
  createOrGetSession,
  submitVote
};