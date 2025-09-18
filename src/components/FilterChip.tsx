import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface FilterChipProps {
  label: string;
  onRemove: () => void;
  variant?: "default" | "secondary" | "outline" | "destructive";
  removable?: boolean;
}

const FilterChip = ({ label, onRemove, variant = "secondary", removable = true }: FilterChipProps) => {
  return (
    <Badge
      variant={variant}
      className="flex items-center gap-1 px-3 py-1 text-sm font-medium transition-colors"
    >
      <span>{label}</span>
      {removable && (
        <Button
          variant="ghost"
          size="sm"
          onClick={onRemove}
          className="h-auto p-0 ml-1 hover:bg-transparent"
        >
          <X className="h-3 w-3 hover:text-destructive transition-colors" />
        </Button>
      )}
    </Badge>
  );
};

export default FilterChip;