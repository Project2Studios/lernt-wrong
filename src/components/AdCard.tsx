import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Eye } from "lucide-react";
import { NativeAd } from "@/types/ad";

interface AdCardProps {
  ad: NativeAd;
  index: number;
  onAdClick?: (adId: string) => void;
  onAdImpression?: (adId: string) => void;
}

const AdCard = ({ ad, index, onAdClick, onAdImpression }: AdCardProps) => {
  const [hasBeenViewed, setHasBeenViewed] = useState(false);

  // Track impression when card enters viewport (simplified version)
  const handleCardVisible = () => {
    if (!hasBeenViewed) {
      setHasBeenViewed(true);
      onAdImpression?.(ad.id);
    }
  };

  const handleAdClick = () => {
    onAdClick?.(ad.id);
    // Open link in new tab
    window.open(ad.targetUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <Card
      className="overflow-hidden hover:shadow-lg transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 border-orange-200 bg-gradient-to-br from-orange-50 to-amber-50"
      style={{ animationDelay: `${index * 100}ms` }}
      onMouseEnter={handleCardVisible} // Simple impression tracking
    >
      <CardContent className="p-6 space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 space-y-4">
            {/* Sponsored badge and category */}
            <div className="flex items-center gap-2 flex-wrap">
              <Badge variant="secondary" className="text-xs font-medium bg-orange-100 text-orange-800 border-orange-300">
                Sponsored
              </Badge>
              <Badge variant="outline" className="text-xs">
                {ad.category}
              </Badge>
            </div>

            {/* Ad content styled like fact card */}
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground font-medium">
                Recommended for lifelong learners:
              </div>
              <div className="text-lg font-medium text-foreground">
                {ad.title}
              </div>
            </div>

            {/* Description styled like correction */}
            <div className="space-y-2">
              <div className="text-base text-foreground">
                {ad.description}
              </div>
            </div>

            {/* CTA and sponsor info */}
            <div className="flex items-center justify-between pt-3 border-t border-border/50">
              <Button
                onClick={handleAdClick}
                className="bg-orange-600 hover:bg-orange-700 text-white flex items-center gap-2"
                size="sm"
              >
                {ad.callToAction}
                <ExternalLink className="h-3 w-3" />
              </Button>

              <div className="text-xs text-muted-foreground flex items-center gap-1">
                <span>by {ad.sponsor}</span>
              </div>
            </div>

            {/* Analytics info (subtle) */}
            {(ad.impressions || ad.clicks) && (
              <div className="text-xs text-muted-foreground/70 pt-1">
                <div className="flex items-center gap-3">
                  {ad.impressions && (
                    <span className="flex items-center gap-1">
                      <Eye className="h-3 w-3" />
                      {ad.impressions.toLocaleString()} views
                    </span>
                  )}
                  {ad.clicks && (
                    <span>
                      {ad.clicks.toLocaleString()} clicks
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Emoji matching fact cards */}
          <div className="text-4xl">{ad.emoji || "📢"}</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AdCard;