// API service layer for communicating with backend

const API_BASE_URL = '/api';

// Enhanced fact interface that includes vote counts
export interface EnhancedFact {
  id: string;
  fact: string;
  correction: string;
  explanation?: string;
  category: string;
  debunkedYear?: number;
  taughtUntilYear?: number;
  stillTaught?: boolean;
  upvotes: number;
  downvotes: number;
  totalVotes: number;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

export interface FactsResponse {
  success: boolean;
  facts: EnhancedFact[];
  count: number;
}

export interface SessionResponse {
  success: boolean;
  sessionToken: string;
  expiresAt: string;
}

export interface VoteResponse {
  success: boolean;
  message?: string;
  error?: string;
  alreadyVoted?: boolean;
  newCounts?: {
    upvotes: number;
    downvotes: number;
    totalVotes: number;
  };
}

// Session management
let currentSessionToken: string | null = null;
let sessionExpiration: Date | null = null;

// Get or create session token
export async function getSessionToken(): Promise<string> {
  // Check if we have a valid session
  if (currentSessionToken && sessionExpiration && sessionExpiration > new Date()) {
    return currentSessionToken;
  }

  // Create new session
  try {
    const response = await fetch(`${API_BASE_URL}/session`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: SessionResponse = await response.json();

    if (data.success) {
      currentSessionToken = data.sessionToken;
      sessionExpiration = new Date(data.expiresAt);
      return data.sessionToken;
    } else {
      throw new Error('Failed to create session');
    }
  } catch (error) {
    console.error('Error creating session:', error);
    throw error;
  }
}

// Fetch all facts with vote counts
export async function fetchFacts(): Promise<EnhancedFact[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/facts`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: FactsResponse = await response.json();

    if (data.success) {
      return data.facts;
    } else {
      throw new Error('Failed to fetch facts');
    }
  } catch (error) {
    console.error('Error fetching facts:', error);
    throw error;
  }
}

// Submit a vote
export async function submitVote(
  factId: string,
  voteType: 'up' | 'down'
): Promise<VoteResponse> {
  try {
    const sessionToken = await getSessionToken();

    const response = await fetch(`${API_BASE_URL}/votes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        factId,
        voteType,
        sessionToken,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
    }

    const data: VoteResponse = await response.json();
    return data;
  } catch (error) {
    console.error('Error submitting vote:', error);
    throw error;
  }
}

// Import fallback data
import { outdatedFacts, getFactsForGraduationYear as getStaticFacts, type OutdatedFact } from '@/data/outdatedFacts';

// Transform static fact to enhanced fact format
function transformStaticFact(fact: OutdatedFact): EnhancedFact {
  return {
    ...fact,
    upvotes: 0,
    downvotes: 0,
    totalVotes: 0,
  };
}

// Enhanced fetchFacts with fallback to TypeScript data
export async function fetchFactsWithFallback(): Promise<{ facts: EnhancedFact[]; usingFallback: boolean }> {
  try {
    // Try to fetch from database first
    const dbFacts = await fetchFacts();

    // If we have database facts, use them
    if (dbFacts && dbFacts.length > 0) {
      console.log('✅ Using database facts:', dbFacts.length);
      return { facts: dbFacts, usingFallback: false };
    }

    // Fallback to TypeScript facts
    console.log('📁 Falling back to TypeScript facts');
    return { facts: getFallbackFacts(), usingFallback: true };

  } catch (error) {
    console.log('⚠️ Database unavailable, using TypeScript facts');
    return { facts: getFallbackFacts(), usingFallback: true };
  }
}

// Get all facts from TypeScript files and transform them
function getFallbackFacts(): EnhancedFact[] {
  const allFacts: EnhancedFact[] = [];

  // Convert all facts from all decades
  Object.values(outdatedFacts).forEach(decadeFacts => {
    decadeFacts.forEach(fact => {
      allFacts.push(transformStaticFact(fact));
    });
  });

  // Remove duplicates based on ID (since facts can appear in multiple decades)
  const uniqueFacts = allFacts.filter((fact, index, self) =>
    index === self.findIndex(f => f.id === fact.id)
  );

  return uniqueFacts;
}

// Filter facts by graduation year (works with both database and static facts)
export function getFactsForGraduationYear(facts: EnhancedFact[], year: number): EnhancedFact[] {
  // If we're using static facts, use the original filtering logic
  if (facts.length > 10) { // Assume static facts if we have many
    const staticFacts = getStaticFacts(year);
    return staticFacts.map(transformStaticFact);
  }

  // For database facts, return all for now (until full migration)
  return facts;
}