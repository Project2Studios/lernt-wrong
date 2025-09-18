import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, ThumbsUp, ThumbsDown, ExternalLink } from "lucide-react";
import { OutdatedFact } from "@/types/fact";
import { submitVote } from "@/lib/api";
import { toast } from "@/hooks/use-toast";

interface FactCardProps {
  fact: OutdatedFact;
  index: number;
  onVoteUpdate?: (factId: string, newCounts: { upvotes: number; downvotes: number; totalVotes: number }) => void;
  fallbackMode?: boolean;
}

// Category to emoji mapping
const categoryEmojis: Record<string, string> = {
  "Astronomy": "🪐",
  "Biology": "🧬",
  "Physics": "⚛️",
  "Chemistry": "🧪",
  "Medicine": "💊",
  "Psychology": "🧠",
  "Nutrition": "🍎",
  "History": "📜",
  "Technology": "💻",
  "Climate Science": "🌡️",
  "Geology": "🪨",
  "Paleontology": "🦕",
  "Neuroscience": "🧠",
  "Animal Behavior": "🐺",
  "Health Science": "🏥",
  "Exercise Science": "💪",
  "Sports Science": "⚽",
  "Environmental Science": "🌱",
  "Media Studies": "📺",
  "Computer Science": "💻",
  "Genetics": "🧬",
  "Information Science": "📚",
  "Sociology": "👥",
  "Forensic Science": "🔍",
  "Education": "📚",
  "Sleep Science": "😴",
  "Entomology": "🐛",
  "Veterinary Medicine": "🐕",
  "Entertainment": "🎬",
  "Biotechnology": "🧪",
  "Food Science": "🍽️",
  "Music Industry": "🎵",
  "Linguistics": "💬",
  "Mental Health": "🧠",
  "Public Health": "🏥",
  "Health Informatics": "📊",
  "Cognitive Science": "🤔",
  "Cosmology": "🌌",
  "Energy Economics": "⚡",
  "Economics": "💰",
  "Social Media": "📱",
  "Entertainment Technology": "📺",
  "Educational Technology": "💻",
  "Workplace Psychology": "💼",
  "Virology": "🦠",
  "Transportation": "🚗",
  "Aerospace": "🚀",
  "Workplace Science": "💼",
  "Energy Science": "⚡",
  "Public Health Technology": "📱",
  "Religious Studies": "⛪",
  "Geography": "🌍"
};

const FactCard = ({ fact, index, onVoteUpdate, fallbackMode = false }: FactCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [userVote, setUserVote] = useState<'up' | 'down' | null>(null);
  const [isVoting, setIsVoting] = useState(false);
  const [voteCounts, setVoteCounts] = useState({
    upvotes: fact.upvotes || 0,
    downvotes: fact.downvotes || 0,
    totalVotes: fact.totalVotes || 0,
  });

  const emoji = categoryEmojis[fact.category] || "🤔";

  const handleVote = async (voteType: 'up' | 'down') => {
    if (isVoting || userVote) return; // Prevent duplicate voting

    setIsVoting(true);

    try {
      if (fallbackMode) {
        // Mock voting for fallback mode
        setTimeout(() => {
          const newCounts = {
            upvotes: voteType === 'up' ? voteCounts.upvotes + 1 : voteCounts.upvotes,
            downvotes: voteType === 'down' ? voteCounts.downvotes + 1 : voteCounts.downvotes,
            totalVotes: voteCounts.totalVotes + 1,
          };

          setUserVote(voteType);
          setVoteCounts(newCounts);
          onVoteUpdate?.(fact.id, newCounts);

          toast({
            title: "Vote recorded! (Demo mode)",
            description: `Thanks for rating this ${voteType === 'up' ? 'helpful' : 'not helpful'}. This is a demo using local facts.`,
          });

          setIsVoting(false);
        }, 500); // Simulate network delay

        return;
      }

      // Real voting for database mode
      const result = await submitVote(fact.id, voteType);

      if (result.success && result.counts) {
        // Update local state
        setUserVote(voteType);
        setVoteCounts(result.counts);

        // Notify parent component
        onVoteUpdate?.(fact.id, result.counts);

        toast({
          title: "Vote recorded!",
          description: `Thanks for rating this ${voteType === 'up' ? 'helpful' : 'not helpful'}.`,
        });
      } else if (result.alreadyVoted) {
        toast({
          title: "Already voted",
          description: "You've already voted on this fact.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Voting error:', error);
      toast({
        title: "Vote failed",
        description: "There was an error recording your vote. Please try again.",
        variant: "destructive",
      });
    } finally {
      if (!fallbackMode) {
        setIsVoting(false);
      }
    }
  };

  return (
    <Card
      className="overflow-hidden hover:shadow-lg transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <CardContent className="p-6 space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 space-y-4">
            {/* Category and Timeline Badges */}
            <div className="flex items-center gap-2 flex-wrap">
              <Badge variant="secondary" className="text-xs font-medium">
                {fact.category}
              </Badge>
              {fact.debunkedYear && (
                <Badge variant="outline" className="text-xs border-orange-500 text-orange-700 bg-orange-50">
                  Debunked in {fact.debunkedYear}
                </Badge>
              )}
              {fact.taughtUntilYear && (
                <Badge variant="outline" className="text-xs border-red-500 text-red-700 bg-red-50">
                  Taught until {fact.taughtUntilYear}
                </Badge>
              )}
              {fact.stillTaught && (
                <Badge variant="outline" className="text-xs border-red-600 text-red-800 bg-red-100 font-semibold">
                  Still taught today!
                </Badge>
              )}
            </div>

            {/* What you learned */}
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground font-medium">
                What you learned:
              </div>
              <div className="text-lg font-medium text-red-600">
                "{fact.fact}"
              </div>
            </div>

            {/* What we know now */}
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground font-medium">
                What we know now:
              </div>
              <div className="text-base text-foreground">
                {fact.correction}
              </div>
            </div>

            {/* Voting Section */}
            <div className="flex items-center justify-between pt-3 border-t border-border/50">
              <div className="flex items-center gap-3">
                <Button
                  variant={userVote === 'up' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => handleVote('up')}
                  disabled={isVoting || !!userVote}
                  className="flex items-center gap-2 h-8"
                >
                  <ThumbsUp className="h-3 w-3" />
                  <span className="text-xs font-medium">{voteCounts.upvotes}</span>
                </Button>

                <Button
                  variant={userVote === 'down' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => handleVote('down')}
                  disabled={isVoting || !!userVote}
                  className="flex items-center gap-2 h-8"
                >
                  <ThumbsDown className="h-3 w-3" />
                  <span className="text-xs font-medium">{voteCounts.downvotes}</span>
                </Button>

                {voteCounts.totalVotes > 0 && (
                  <span className="text-xs text-muted-foreground ml-2">
                    {voteCounts.totalVotes} vote{voteCounts.totalVotes !== 1 ? 's' : ''}
                  </span>
                )}
              </div>

              {userVote && (
                <span className="text-xs text-muted-foreground">
                  You voted {userVote === 'up' ? '👍' : '👎'}
                </span>
              )}
            </div>

            {/* Expandable explanation */}
            {fact.explanation && (
              <div className="space-y-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="p-0 h-auto text-blue-600 hover:text-blue-700 font-normal"
                >
                  {isExpanded ? (
                    <>
                      Hide explanation
                      <ChevronUp className="ml-1 h-4 w-4" />
                    </>
                  ) : (
                    <>
                      Show explanation
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </>
                  )}
                </Button>

                {isExpanded && (
                  <div className="text-sm text-muted-foreground leading-relaxed pt-2 border-t">
                    {fact.explanation}
                  </div>
                )}
              </div>
            )}

            {/* Source information */}
            {(fact.source || fact.sourceUrl) && (
              <div className="pt-2 border-t border-border/30">
                <div className="text-xs text-muted-foreground">
                  {fact.sourceUrl ? (
                    <a
                      href={fact.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 hover:text-foreground transition-colors"
                    >
                      Source: {fact.source || "Research Study"}
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  ) : (
                    <span>Source: {fact.source}</span>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Emoji */}
          <div className="text-4xl">{emoji}</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FactCard;