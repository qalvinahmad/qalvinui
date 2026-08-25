import * as React from "react";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

export interface ItemProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
  showChevron?: boolean;
}

export function Item({
  className,
  icon,
  title,
  subtitle,
  action,
  showChevron = false,
  ...props
}: ItemProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-between gap-3 p-3.5 rounded-xl border border-border/80 bg-card hover:bg-muted/40 transition-colors shadow-xs cursor-pointer",
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-3 min-w-0">
        {icon && (
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted text-foreground shrink-0">
            {icon}
          </div>
        )}
        <div className="min-w-0">
          <div className="text-xs font-semibold text-foreground truncate">{title}</div>
          {subtitle && <div className="text-[11px] text-muted-foreground truncate">{subtitle}</div>}
        </div>
      </div>
      <div className="flex items-center gap-2 shrink-0">
        {action}
        {showChevron && <ChevronRight className="h-4 w-4 text-muted-foreground" />}
      </div>
    </div>
  );
}
