import { cn } from "@/lib/utils";

interface TerminalInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function TerminalInput({ label, className, ...props }: TerminalInputProps) {
  return (
    <div className="flex items-baseline gap-3">
      <label className="font-mono text-sm text-[#8B92A0] shrink-0" htmlFor={props.id}>
        {label}:
      </label>
      <input
        className={cn("terminal-input flex-1", className)}
        {...props}
      />
    </div>
  );
}

interface TerminalTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export function TerminalTextarea({ label, className, ...props }: TerminalTextareaProps) {
  return (
    <div className="flex items-start gap-3">
      <label className="font-mono text-sm text-[#8B92A0] shrink-0 pt-2" htmlFor={props.id}>
        {label}:
      </label>
      <textarea
        className={cn(
          "terminal-input flex-1 resize-none min-h-[80px]",
          className
        )}
        {...props}
      />
    </div>
  );
}
