// Unified fact type definition for the application

export interface OutdatedFact {
  id: string;
  fact: string;
  correction: string;
  explanation?: string;
  category: string;
  debunkedYear?: number;
  taughtUntilYear?: number;
  stillTaught?: boolean;
  // Voting properties
  upvotes?: number;
  downvotes?: number;
  totalVotes?: number;
}

// Re-export for backward compatibility
export type { OutdatedFact as EnhancedFact };