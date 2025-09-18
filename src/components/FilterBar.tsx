import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown, ChevronUp, Filter, RotateCcw, Search } from "lucide-react";
import FilterChip from "./FilterChip";
import QuickFilters from "./QuickFilters";
import { EnhancedFact } from "@/lib/api";

interface FilterBarProps {
  facts: EnhancedFact[];
  filteredCount: number;
  totalCount: number;
  onFilterChange: (filters: FilterState) => void;
  activeFilters: FilterState;
}

export interface FilterState {
  category: string | null;
  stillTaught: boolean | null;
  debunkedDecade: string | null;
  recentlyDebunked: string | null;
  persistent: string | null;
  topVoted: string | null;
  sortBy: string;
}

const FilterBar = ({ facts, filteredCount, totalCount, onFilterChange, activeFilters }: FilterBarProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Extract unique categories from facts
  const categories = Array.from(new Set(facts.map(fact => fact.category))).sort();

  // Extract unique decades from debunked years
  const decades = Array.from(
    new Set(
      facts
        .filter(fact => fact.debunkedYear)
        .map(fact => `${Math.floor(fact.debunkedYear! / 10) * 10}s`)
    )
  ).sort();

  const sortOptions = [
    { value: "chronological", label: "Chronological (oldest first)" },
    { value: "recent", label: "Recently debunked first" },
    { value: "category", label: "By subject" },
    { value: "votes", label: "Most helpful first" },
  ];

  const handleFilterUpdate = (key: keyof FilterState, value: any) => {
    const newFilters = { ...activeFilters, [key]: value };
    onFilterChange(newFilters);
  };

  const handleQuickFilter = (filterType: string, value: any) => {
    handleFilterUpdate(filterType as keyof FilterState, value);
  };

  const clearAllFilters = () => {
    const clearedFilters: FilterState = {
      category: null,
      stillTaught: null,
      debunkedDecade: null,
      recentlyDebunked: null,
      persistent: null,
      topVoted: null,
      sortBy: "chronological",
    };
    onFilterChange(clearedFilters);
  };

  const getActiveFilterChips = () => {
    const chips = [];

    if (activeFilters.category) {
      chips.push({
        label: activeFilters.category,
        onRemove: () => handleFilterUpdate('category', null)
      });
    }

    if (activeFilters.stillTaught) {
      chips.push({
        label: "Still Taught Today",
        onRemove: () => handleFilterUpdate('stillTaught', null),
        variant: "destructive" as const
      });
    }

    if (activeFilters.debunkedDecade) {
      chips.push({
        label: `Debunked in ${activeFilters.debunkedDecade}`,
        onRemove: () => handleFilterUpdate('debunkedDecade', null)
      });
    }

    if (activeFilters.recentlyDebunked) {
      chips.push({
        label: "Recently Debunked",
        onRemove: () => handleFilterUpdate('recentlyDebunked', null),
        variant: "outline" as const
      });
    }

    if (activeFilters.persistent) {
      chips.push({
        label: "Long-Lived Myths",
        onRemove: () => handleFilterUpdate('persistent', null),
        variant: "outline" as const
      });
    }

    if (activeFilters.topVoted) {
      chips.push({
        label: "Most Helpful",
        onRemove: () => handleFilterUpdate('topVoted', null),
        variant: "outline" as const
      });
    }

    return chips;
  };

  const activeFilterChips = getActiveFilterChips();
  const hasActiveFilters = activeFilterChips.length > 0;

  return (
    <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg shadow-sm">
      <div className="p-4">
        {/* Header with results count and expand toggle */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Search className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm font-medium">
                Showing {filteredCount} of {totalCount} facts
              </span>
            </div>

            {hasActiveFilters && (
              <Button
                variant="ghost"
                size="sm"
                onClick={clearAllFilters}
                className="text-xs text-muted-foreground hover:text-foreground"
              >
                <RotateCcw className="h-3 w-3 mr-1" />
                Clear all
              </Button>
            )}
          </div>

          <Collapsible open={isExpanded} onOpenChange={setIsExpanded}>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                <span className="text-sm">Filters</span>
                {isExpanded ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </Button>
            </CollapsibleTrigger>
          </Collapsible>
        </div>

        {/* Active filter chips */}
        {hasActiveFilters && (
          <div className="flex flex-wrap gap-2 mb-4">
            {activeFilterChips.map((chip, index) => (
              <FilterChip
                key={index}
                label={chip.label}
                onRemove={chip.onRemove}
                variant={chip.variant || "secondary"}
              />
            ))}
          </div>
        )}

        {/* Expandable filter controls */}
        <Collapsible open={isExpanded} onOpenChange={setIsExpanded}>
          <CollapsibleContent className="space-y-6">
            {/* Quick filters */}
            <QuickFilters
              onFilterSelect={handleQuickFilter}
              activeFilters={activeFilters}
            />

            <div className="border-t border-border/30 pt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Category filter */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">
                    Subject
                  </label>
                  <Select
                    value={activeFilters.category || ""}
                    onValueChange={(value) =>
                      handleFilterUpdate('category', value === "all" ? null : value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="All subjects" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All subjects</SelectItem>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Debunked decade filter */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">
                    Debunked in
                  </label>
                  <Select
                    value={activeFilters.debunkedDecade || ""}
                    onValueChange={(value) =>
                      handleFilterUpdate('debunkedDecade', value === "all" ? null : value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Any decade" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Any decade</SelectItem>
                      {decades.map((decade) => (
                        <SelectItem key={decade} value={decade}>
                          {decade}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Sort options */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">
                    Sort by
                  </label>
                  <Select
                    value={activeFilters.sortBy}
                    onValueChange={(value) => handleFilterUpdate('sortBy', value)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {sortOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Empty space for better grid layout */}
                <div />
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </div>
  );
};

export default FilterBar;