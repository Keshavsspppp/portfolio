import { cn } from "@/lib/utils";

interface FileTabProps {
  filename: string;
  className?: string;
}

export function FileTab({ filename, className }: FileTabProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-4 py-2 rounded-t-lg",
        "bg-[#14171C] border border-b-0 border-[rgba(255,255,255,0.06)]",
        "font-mono text-xs text-[#8B92A0]",
        className
      )}
    >
      <span className="w-2 h-2 rounded-full bg-[#FFA63D]" />
      {filename}
    </div>
  );
}
