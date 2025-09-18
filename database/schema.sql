-- Database schema for voting system
-- PostgreSQL

-- Extension for UUID generation
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Facts table
CREATE TABLE facts (
  id TEXT PRIMARY KEY,
  fact_text TEXT NOT NULL,
  correction TEXT NOT NULL,
  explanation TEXT,
  category VARCHAR(50) NOT NULL,
  debunked_year INTEGER,
  taught_until_year INTEGER,
  still_taught BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Votes table
CREATE TABLE votes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  fact_id TEXT NOT NULL REFERENCES facts(id) ON DELETE CASCADE,
  vote_type VARCHAR(10) NOT NULL CHECK (vote_type IN ('up', 'down')),
  user_id UUID NULL, -- For future authentication
  session_token VARCHAR(255) NOT NULL,
  ip_hash VARCHAR(64) NOT NULL,
  browser_fingerprint VARCHAR(128) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  expires_at TIMESTAMP NOT NULL,

  -- Prevent duplicate votes per session per fact
  UNIQUE(fact_id, session_token)
);

-- Vote sessions table for abuse prevention
CREATE TABLE vote_sessions (
  session_token VARCHAR(255) PRIMARY KEY,
  ip_hash VARCHAR(64) NOT NULL,
  browser_fingerprint VARCHAR(128) NOT NULL,
  vote_count INTEGER DEFAULT 0,
  last_vote_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW(),
  expires_at TIMESTAMP NOT NULL
);

-- Materialized view for performance (vote counts)
CREATE MATERIALIZED VIEW vote_counts AS
SELECT
  fact_id,
  COUNT(*) FILTER (WHERE vote_type = 'up') AS upvotes,
  COUNT(*) FILTER (WHERE vote_type = 'down') AS downvotes,
  COUNT(*) as total_votes
FROM votes
WHERE expires_at > NOW()
GROUP BY fact_id;

-- Indexes for performance
CREATE INDEX idx_votes_fact_id ON votes(fact_id);
CREATE INDEX idx_votes_session_token ON votes(session_token);
CREATE INDEX idx_votes_expires_at ON votes(expires_at);
CREATE INDEX idx_vote_sessions_ip_hash ON vote_sessions(ip_hash);
CREATE INDEX idx_vote_sessions_fingerprint ON vote_sessions(browser_fingerprint);
CREATE INDEX idx_facts_category ON facts(category);

-- Function to refresh vote counts
CREATE OR REPLACE FUNCTION refresh_vote_counts()
RETURNS VOID AS $$
BEGIN
  REFRESH MATERIALIZED VIEW vote_counts;
END;
$$ LANGUAGE plpgsql;

-- Function to clean up expired votes and sessions
CREATE OR REPLACE FUNCTION cleanup_expired_data()
RETURNS VOID AS $$
BEGIN
  DELETE FROM votes WHERE expires_at < NOW();
  DELETE FROM vote_sessions WHERE expires_at < NOW();
  PERFORM refresh_vote_counts();
END;
$$ LANGUAGE plpgsql;