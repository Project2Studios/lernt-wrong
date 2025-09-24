// Ad type definitions for native advertising

export interface NativeAd {
  id: string;
  type: 'educational' | 'book' | 'course' | 'app' | 'general';
  title: string;
  description: string;
  callToAction: string;
  imageUrl?: string;
  targetUrl: string;
  sponsor: string;
  category: string; // Match fact categories for relevance
  relevantToGraduationYears?: number[]; // Optional targeting
  // Analytics
  impressions?: number;
  clicks?: number;
  // Visual styling to match fact cards
  emoji?: string;
}

export interface AdConfig {
  enabled: boolean;
  frequency: number; // Insert ad every N facts
  maxAdsPerSession: number;
  categories: string[]; // Which categories to show ads for
}

export interface AdAnalytics {
  adId: string;
  event: 'impression' | 'click';
  timestamp: Date;
  sessionId?: string;
  graduationYear?: number;
}