import * as React from "react";
import { cn } from "@/lib/utils";

export interface KbdProps extends React.HTMLAttributes<HTMLElement> {
  keys?: string[];
}

export function Kbd({ className, children, keys, ...props }: KbdProps) {
  return (
    <kbd
      className={cn(
        "pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100 shadow-xs",
        className
      )}
      {...props}
    >
      {keys?.map((k, i) => (
        <span key={i} className="text-[11px]">{k}</span>
      ))}
      {children}
    </kbd>
  );
}
