import { Button } from "@/components/ui/button";
import { AlertTriangle, Clock, Star, TrendingUp } from "lucide-react";

interface QuickFiltersProps {
  onFilterSelect: (filterType: string, value: any) => void;
  activeFilters: Record<string, any>;
}

const QuickFilters = ({ onFilterSelect, activeFilters }: QuickFiltersProps) => {
  const quickFilterOptions = [
    {
      id: "stillTaught",
      label: "Still Taught Today",
      icon: AlertTriangle,
      description: "Most shocking - debunked but still in textbooks",
      color: "bg-red-50 text-red-700 border-red-200 hover:bg-red-100",
      activeColor: "bg-red-600 text-white border-red-600",
      value: true
    },
    {
      id: "recentlyDebunked",
      label: "Recently Debunked",
      icon: TrendingUp,
      description: "Discoveries from the last 10 years",
      color: "bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100",
      activeColor: "bg-blue-600 text-white border-blue-600",
      value: "recent"
    },
    {
      id: "persistent",
      label: "Long-Lived Myths",
      icon: Clock,
      description: "Taught for decades after being debunked",
      color: "bg-orange-50 text-orange-700 border-orange-200 hover:bg-orange-100",
      activeColor: "bg-orange-600 text-white border-orange-600",
      value: "persistent"
    },
    {
      id: "topVoted",
      label: "Most Helpful",
      icon: Star,
      description: "Highest rated by users",
      color: "bg-green-50 text-green-700 border-green-200 hover:bg-green-100",
      activeColor: "bg-green-600 text-white border-green-600",
      value: "topVoted"
    }
  ];

  return (
    <div className="space-y-3">
      <div className="text-sm font-medium text-muted-foreground">
        Quick Filters
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {quickFilterOptions.map((option) => {
          const Icon = option.icon;
          const isActive = activeFilters[option.id] === option.value;

          return (
            <Button
              key={option.id}
              variant="outline"
              className={`h-auto p-4 flex flex-col items-start gap-2 transition-all ${
                isActive ? option.activeColor : option.color
              }`}
              onClick={() => onFilterSelect(option.id, isActive ? null : option.value)}
            >
              <div className="flex items-center gap-2 w-full">
                <Icon className="h-4 w-4" />
                <span className="font-medium text-sm">{option.label}</span>
              </div>
              <p className="text-xs opacity-80 text-left leading-tight">
                {option.description}
              </p>
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default QuickFilters;