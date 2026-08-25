import * as React from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

export interface NativeSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {}

export const NativeSelect = React.forwardRef<HTMLSelectElement, NativeSelectProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div className="relative inline-block w-full">
        <select
          ref={ref}
          className={cn(
            "flex h-10 w-full appearance-none rounded-xl border border-input bg-card px-3.5 py-2 text-sm shadow-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 pr-9 cursor-pointer hover:bg-muted/30 text-foreground",
            className
          )}
          {...props}
        >
          {children}
        </select>
        <ChevronDown className="pointer-events-none absolute right-3 top-3 h-4 w-4 text-muted-foreground opacity-70" />
      </div>
    );
  }
);
NativeSelect.displayName = "NativeSelect";
