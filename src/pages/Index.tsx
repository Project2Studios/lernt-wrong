import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, BookOpen, Calendar, ArrowRight } from "lucide-react";
import { fetchFactsWithFallback, getFactsForGraduationYear, type EnhancedFact } from "@/lib/api";
import FactCard from "@/components/FactCard";
import { toast } from "@/hooks/use-toast";

const Index = () => {
  const [graduationYear, setGraduationYear] = useState<string>("");
  const [allFacts, setAllFacts] = useState<EnhancedFact[]>([]);
  const [filteredFacts, setFilteredFacts] = useState<EnhancedFact[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingFacts, setIsLoadingFacts] = useState(true);
  const [usingFallback, setUsingFallback] = useState(false);
  const [localVotes, setLocalVotes] = useState<Record<string, { type: 'up' | 'down'; upvotes: number; downvotes: number }>>({})

  // Load facts from API on component mount
  useEffect(() => {
    const loadFacts = async () => {
      try {
        const facts = await fetchFactsWithFallback();
        setAllFacts(facts);

        // Check if we're using fallback (TypeScript) data
        const isUsingFallback = facts.length > 10; // Assume fallback if many facts
        setUsingFallback(isUsingFallback);

        if (isUsingFallback) {
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
                Here are {filteredFacts.length} "facts" you learned that science has since updated
              </p>
            </div>

            <div className="grid gap-6 md:gap-8">
              {filteredFacts.map((fact, index) => (
                <FactCard
                  key={fact.id}
                  fact={fact}
                  index={index}
                  onVoteUpdate={handleVoteUpdate}
                  fallbackMode={usingFallback}
                />
              ))}
            </div>

            {filteredFacts.length === 0 && (
              <Card className="text-center py-12">
                <CardContent>
                  <GraduationCap className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                  <CardTitle className="text-xl mb-2">No outdated facts found</CardTitle>
                  <CardDescription>
                    Either you graduated too recently, or we haven't catalogued facts from your era yet!
                  </CardDescription>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/30 flex items-center justify-center px-4">
      <div className="w-full max-w-2xl mx-auto text-center space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center justify-center gap-3 mb-6">
            <GraduationCap className="h-12 w-12 text-primary" />
            <BookOpen className="h-10 w-10 text-accent-foreground" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-accent-foreground to-primary bg-clip-text text-transparent leading-tight">
            What Did You Learn <br />That Isn't True?
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

        {/* Footer */}
        <div className="text-sm text-muted-foreground space-y-2">
          <p>
            Covering graduation years from 1960 to present • Facts sourced from peer-reviewed research
          </p>
          <p className="text-xs opacity-75">
            Science evolves, and so does our understanding of the world
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;