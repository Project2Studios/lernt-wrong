import { useState, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, BookOpen, Calendar, ArrowRight } from "lucide-react";
import { fetchFactsWithFallback, getFactsForGraduationYear, applyFilters, type EnhancedFact, type FilterOptions } from "@/lib/api";
import FactCard from "@/components/FactCard";
import AdCard from "@/components/AdCard";
import FilterBar, { type FilterState } from "@/components/FilterBar";
import Footer from "@/components/Footer";
import { AdService } from "@/lib/adService";
import type { NativeAd } from "@/types/ad";
import { toast } from "@/hooks/use-toast";

const Index = () => {
  const [graduationYear, setGraduationYear] = useState<string>("");
  const [allFacts, setAllFacts] = useState<EnhancedFact[]>([]);
  const [filteredFacts, setFilteredFacts] = useState<EnhancedFact[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingFacts, setIsLoadingFacts] = useState(true);
  const [usingFallback, setUsingFallback] = useState(false);
  const [localVotes, setLocalVotes] = useState<Record<string, { type: 'up' | 'down'; upvotes: number; downvotes: number }>>({});
  const [factsWithAds, setFactsWithAds] = useState<(EnhancedFact | NativeAd)[]>([]);

  // Filter state
  const [activeFilters, setActiveFilters] = useState<FilterState>({
    category: null,
    stillTaught: null,
    debunkedDecade: null,
    recentlyDebunked: null,
    persistent: null,
    topVoted: null,
    sortBy: "chronological",
  });

  // Apply filters to graduation-filtered facts, then add ads
  const finalFilteredFacts = useMemo(() => {
    const filtered = applyFilters(filteredFacts, activeFilters);

    // Get relevant ads and insert them into the stream
    if (filtered.length > 0) {
      const relevantAds = AdService.getRelevantAds(
        filtered,
        graduationYear ? parseInt(graduationYear) : undefined
      );
      return AdService.insertAdsIntoStream(filtered, relevantAds);
    }

    return filtered;
  }, [filteredFacts, activeFilters, graduationYear]);

  // Load facts from API on component mount
  useEffect(() => {
    const loadFacts = async () => {
      try {
        const { facts, usingFallback } = await fetchFactsWithFallback();
        setAllFacts(facts);
        setUsingFallback(usingFallback);

        if (usingFallback) {
          toast({
            title: "Using Local Facts",
            description: "Database unavailable - showing facts from TypeScript files with mock voting.",
          });
        }
      } catch (error) {
        console.error('Error loading facts:', error);
        toast({
          title: "Error",
          description: "Failed to load facts. Please refresh the page.",
          variant: "destructive",
        });
      } finally {
        setIsLoadingFacts(false);
      }
    };

    loadFacts();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const year = parseInt(graduationYear);

    if (!year || year < 1960 || year > 2030) {
      toast({
        title: "Invalid Year",
        description: "Please enter a valid graduation year between 1960 and 2030.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    // Simulate loading for better UX
    setTimeout(() => {
      const relevantFacts = getFactsForGraduationYear(allFacts, year);
      setFilteredFacts(relevantFacts);
      setShowResults(true);
      setIsLoading(false);

      toast({
        title: "Time Capsule Opened!",
        description: `Found ${relevantFacts.length} outdated concepts from your school days.`,
      });
    }, 1500);
  };

  const resetResults = () => {
    setShowResults(false);
    setFilteredFacts([]);
    setGraduationYear("");
    // Reset filters when going back to start
    setActiveFilters({
      category: null,
      stillTaught: null,
      debunkedDecade: null,
      recentlyDebunked: null,
      persistent: null,
      topVoted: null,
      sortBy: "chronological",
    });
  };

  const handleFilterChange = (newFilters: FilterState) => {
    setActiveFilters(newFilters);
  };

  const handleVoteUpdate = (factId: string, newCounts: { upvotes: number; downvotes: number; totalVotes: number }) => {
    if (usingFallback) {
      // For fallback mode, store votes locally
      setLocalVotes(prev => ({
        ...prev,
        [factId]: {
          type: newCounts.upvotes > (prev[factId]?.upvotes || 0) ? 'up' : 'down',
          upvotes: newCounts.upvotes,
          downvotes: newCounts.downvotes,
        }
      }));
    }

    // Update the local facts state with new vote counts
    setAllFacts(prev => prev.map(fact =>
      fact.id === factId
        ? { ...fact, ...newCounts }
        : fact
    ));

    setFilteredFacts(prev => prev.map(fact =>
      fact.id === factId
        ? { ...fact, ...newCounts }
        : fact
    ));
  };

  // Handle ad interactions
  const handleAdClick = (adId: string) => {
    AdService.trackClick(adId, graduationYear ? parseInt(graduationYear) : undefined);
  };

  const handleAdImpression = (adId: string) => {
    AdService.trackImpression(adId, graduationYear ? parseInt(graduationYear) : undefined);
  };

  if (showResults) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/30">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <Button 
                variant="outline" 
                onClick={resetResults}
                className="mb-6 hover:bg-secondary transition-colors"
              >
                ← Try Another Year
              </Button>
              
              <div className="flex items-center justify-center gap-3 mb-4">
                <BookOpen className="h-8 w-8 text-primary" />
                <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent">
                  Class of {graduationYear}
                </h1>
              </div>

              {usingFallback && (
                <div className="flex justify-center mb-4">
                  <div className="bg-orange-50 border border-orange-200 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                    🔄 Demo Mode - Using Local Facts
                  </div>
                </div>
              )}

              <p className="text-lg text-muted-foreground mb-6">
                Discovered {filteredFacts.length} "facts" from your school days
              </p>
            </div>

            {/* Filter Bar */}
            <FilterBar
              facts={filteredFacts}
              filteredCount={finalFilteredFacts.length}
              totalCount={filteredFacts.length}
              onFilterChange={handleFilterChange}
              activeFilters={activeFilters}
            />

            <div className="grid gap-6 md:gap-8 mt-8">
              {finalFilteredFacts.map((item, index) => {
                if (AdService.isAd(item)) {
                  return (
                    <AdCard
                      key={`ad-${item.id}`}
                      ad={item}
                      index={index}
                      onAdClick={handleAdClick}
                      onAdImpression={handleAdImpression}
                    />
                  );
                } else {
                  return (
                    <FactCard
                      key={item.id}
                      fact={item}
                      index={index}
                      onVoteUpdate={handleVoteUpdate}
                      fallbackMode={usingFallback}
                    />
                  );
                }
              })}
            </div>

            {/* Empty states */}
            {filteredFacts.length === 0 && (
              <Card className="text-center py-12 mt-8">
                <CardContent>
                  <GraduationCap className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                  <CardTitle className="text-xl mb-2">No outdated facts found</CardTitle>
                  <CardDescription>
                    Either you graduated too recently, or we haven't catalogued facts from your era yet!
                  </CardDescription>
                </CardContent>
              </Card>
            )}

            {filteredFacts.length > 0 && finalFilteredFacts.length === 0 && (
              <Card className="text-center py-12 mt-8">
                <CardContent>
                  <GraduationCap className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                  <CardTitle className="text-xl mb-2">No facts match your filters</CardTitle>
                  <CardDescription>
                    Try adjusting your filters or clearing them to see more results.
                  </CardDescription>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/30 flex flex-col">
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="w-full max-w-2xl mx-auto text-center space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center justify-center mb-6">
            <img
              src="/logo.png"
              alt="Taught Wrong Logo"
              className="h-32 md:h-40 w-auto"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-accent-foreground to-primary bg-clip-text text-transparent leading-tight">
            Science is always evolving.
            <span className="block mt-4">Let's catch up.</span>
          </h1>
          
          <p className="text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Enter your high school graduation year and discover the "facts" you learned 
            that have since been disproven by scientific progress.
          </p>
        </div>

        {/* Input Form */}
        <Card className="backdrop-blur-sm bg-card/50 border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300">
          <CardHeader>
            <div className="flex items-center justify-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              <CardTitle className="text-xl">Enter Your Graduation Year</CardTitle>
            </div>
            <CardDescription>
              We'll show you what "knowledge" from your textbooks has been updated
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <Input
                  type="number"
                  placeholder="e.g., 1995"
                  value={graduationYear}
                  onChange={(e) => setGraduationYear(e.target.value)}
                  className="text-center text-lg py-6 border-border/60 focus:border-primary transition-colors"
                  min="1960"
                  max="2030"
                />
              </div>
              
              <Button
                type="submit"
                size="lg"
                disabled={isLoading || !graduationYear || isLoadingFacts}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 group"
              >
                {isLoadingFacts ? (
                  <div className="flex items-center gap-2">
                    <div className="animate-spin h-4 w-4 border-2 border-primary-foreground border-t-transparent rounded-full" />
                    Loading facts...
                  </div>
                ) : isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="animate-spin h-4 w-4 border-2 border-primary-foreground border-t-transparent rounded-full" />
                    Opening Time Capsule...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    Reveal Outdated Facts
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Index;