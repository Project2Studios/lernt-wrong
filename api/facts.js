import { getAllFacts, getVoteCounts } from './_lib/database.js';

// Transform database fact to frontend format
function transformFact(dbFact, voteCounts) {
  return {
    id: dbFact.id,
    fact: dbFact.fact_text,
    correction: dbFact.correction,
    explanation: dbFact.explanation || undefined,
    category: dbFact.category,
    debunkedYear: dbFact.debunked_year || undefined,
    taughtUntilYear: dbFact.taught_until_year || undefined,
    stillTaught: dbFact.still_taught || false,
    source: dbFact.source || undefined,
    sourceUrl: dbFact.source_url || undefined,
    upvotes: voteCounts?.upvotes || 0,
    downvotes: voteCounts?.downvotes || 0,
    totalVotes: voteCounts?.total_votes || 0,
  };
}

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Get all facts from database
    const facts = await getAllFacts();

    // Get vote counts for all facts
    const factIds = facts.map(f => f.id);
    const voteCounts = await getVoteCounts(factIds);

    // Create a map for easy lookup
    const voteCountsMap = new Map(
      voteCounts.map(vc => [vc.fact_id, vc])
    );

    // Transform facts to frontend format
    const transformedFacts = facts.map(fact =>
      transformFact(fact, voteCountsMap.get(fact.id))
    );

    res.status(200).json({
      success: true,
      facts: transformedFacts,
      count: transformedFacts.length,
    });

  } catch (error) {
    console.error('Error fetching facts:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch facts',
    });
  }
};