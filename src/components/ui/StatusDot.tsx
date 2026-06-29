import { cn } from "@/lib/utils";

interface StatusDotProps {
  status: "live" | "in-progress" | "archived";
  className?: string;
}

const statusColors = {
  live: "bg-green-500",
  "in-progress": "bg-[#FFA63D]",
  archived: "bg-[#8B92A0]",
};

const statusLabels = {
  live: "live",
  "in-progress": "in-progress",
  archived: "archived",
};

export function StatusDot({ status, className }: StatusDotProps) {
  return (
    <span className={cn("inline-flex items-center gap-1.5", className)}>
      <span
        className={cn(
          "w-2 h-2 rounded-full",
          statusColors[status],
          status === "live" && "animate-pulse"
        )}
      />
      <span className="font-mono text-xs text-[#8B92A0]">{statusLabels[status]}</span>
    </span>
  );
}
