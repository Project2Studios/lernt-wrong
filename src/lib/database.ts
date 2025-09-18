import { neon } from '@neondatabase/serverless';

// Database connection
const sql = neon(process.env.DATABASE_URL!);

export { sql };

// Type definitions for database entities
export interface DatabaseFact {
  id: string;
  fact_text: string;
  correction: string;
  explanation?: string;
  category: string;
  debunked_year?: number;
  taught_until_year?: number;
  still_taught?: boolean;
  created_at: string;
  updated_at: string;
}

export interface DatabaseVote {
  id: string;
  fact_id: string;
  vote_type: 'up' | 'down';
  user_id?: string;
  session_token: string;
  ip_hash: string;
  browser_fingerprint: string;
  created_at: string;
  expires_at: string;
}

export interface VoteSession {
  session_token: string;
  ip_hash: string;
  browser_fingerprint: string;
  vote_count: number;
  last_vote_at?: string;
  created_at: string;
  expires_at: string;
}

export interface VoteCount {
  fact_id: string;
  upvotes: number;
  downvotes: number;
  total_votes: number;
}

// Utility functions for database operations
export async function getFactById(id: string): Promise<DatabaseFact | null> {
  const result = await sql`
    SELECT * FROM facts WHERE id = ${id}
  `;
  return (result[0] as DatabaseFact) || null;
}

export async function getAllFacts(): Promise<DatabaseFact[]> {
  const result = await sql`
    SELECT * FROM facts ORDER BY created_at DESC
  `;
  return result as DatabaseFact[];
}

export async function getVoteCounts(factIds?: string[]): Promise<VoteCount[]> {
  if (factIds && factIds.length > 0) {
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
    return result as VoteCount[];
  } else {
    const result = await sql`
      SELECT
        f.id as fact_id,
        COALESCE(vc.upvotes, 0) as upvotes,
        COALESCE(vc.downvotes, 0) as downvotes,
        COALESCE(vc.total_votes, 0) as total_votes
      FROM facts f
      LEFT JOIN vote_counts vc ON f.id = vc.fact_id
    `;
    return result as VoteCount[];
  }
}

export async function refreshVoteCounts(): Promise<void> {
  await sql`SELECT refresh_vote_counts()`;
}

export async function cleanupExpiredData(): Promise<void> {
  await sql`SELECT cleanup_expired_data()`;
}