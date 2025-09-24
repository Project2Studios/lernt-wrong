import { NativeAd, AdAnalytics } from '@/types/ad';
import { sampleAds, adConfig } from '@/data/sampleAds';
import { OutdatedFact } from '@/types/fact';

// Simple ad insertion service
export class AdService {
  private static sessionAdsShown: Set<string> = new Set();
  private static analytics: AdAnalytics[] = [];

  // Get relevant ads for the current context
  static getRelevantAds(
    facts: OutdatedFact[],
    graduationYear?: number,
    maxAds: number = adConfig.maxAdsPerSession
  ): NativeAd[] {
    if (!adConfig.enabled) return [];

    // Filter ads based on categories present in facts
    const factCategories = [...new Set(facts.map(fact => fact.category))];

    const relevantAds = sampleAds.filter(ad => {
      // Skip if already shown this session
      if (this.sessionAdsShown.has(ad.id)) return false;

      // Check category relevance
      if (adConfig.categories.includes(ad.category)) return true;

      // Check if ad category matches any fact category
      return factCategories.some(category =>
        category.toLowerCase().includes(ad.category.toLowerCase()) ||
        ad.category.toLowerCase().includes(category.toLowerCase())
      );
    });

    // Shuffle and limit
    const shuffled = relevantAds
      .sort(() => Math.random() - 0.5)
      .slice(0, maxAds);

    // Mark as shown
    shuffled.forEach(ad => this.sessionAdsShown.add(ad.id));

    return shuffled;
  }

  // Insert ads into fact stream at natural positions
  static insertAdsIntoStream(
    facts: OutdatedFact[],
    ads: NativeAd[]
  ): (OutdatedFact | NativeAd)[] {
    if (!ads.length) return facts;

    const combined: (OutdatedFact | NativeAd)[] = [];
    let adIndex = 0;

    facts.forEach((fact, index) => {
      combined.push(fact);

      // Insert ad every `frequency` facts, but not at the very beginning
      if (
        index > 0 && // Don't insert at position 0
        (index + 1) % adConfig.frequency === 0 &&
        adIndex < ads.length &&
        index < facts.length - 1 // Don't insert at the very end
      ) {
        combined.push(ads[adIndex]);
        adIndex++;
      }
    });

    return combined;
  }

  // Track ad impression
  static trackImpression(adId: string, graduationYear?: number) {
    const analytics: AdAnalytics = {
      adId,
      event: 'impression',
      timestamp: new Date(),
      graduationYear,
    };

    this.analytics.push(analytics);

    // In a real app, send to analytics service
    console.log('Ad impression tracked:', analytics);
  }

  // Track ad click
  static trackClick(adId: string, graduationYear?: number) {
    const analytics: AdAnalytics = {
      adId,
      event: 'click',
      timestamp: new Date(),
      graduationYear,
    };

    this.analytics.push(analytics);

    // In a real app, send to analytics service
    console.log('Ad click tracked:', analytics);
  }

  // Check if an item is an ad (type guard)
  static isAd(item: OutdatedFact | NativeAd): item is NativeAd {
    return 'sponsor' in item && 'targetUrl' in item;
  }

  // Reset session data (useful for testing)
  static resetSession() {
    this.sessionAdsShown.clear();
    this.analytics = [];
  }

  // Get analytics data
  static getAnalytics(): AdAnalytics[] {
    return [...this.analytics];
  }
}