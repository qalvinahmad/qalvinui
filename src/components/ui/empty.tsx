import * as React from "react";
import { cn } from "@/lib/utils";
import { Inbox } from "lucide-react";

export interface EmptyProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  action?: React.ReactNode;
}

export function Empty({
  className,
  icon = <Inbox className="h-10 w-10 text-muted-foreground" />,
  title,
  description,
  action,
  children,
  ...props
}: EmptyProps) {
  if (children) {
    return (
      <div
        className={cn(
          "flex flex-col items-center justify-center rounded-2xl border border-dashed border-border p-8 text-center bg-card/40 max-w-md mx-auto",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center rounded-2xl border border-dashed border-border p-8 text-center bg-card/40 max-w-md mx-auto",
        className
      )}
      {...props}
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted/60 mb-4 shadow-inner">
        {icon}
      </div>
      {title && <h3 className="text-lg font-bold text-foreground mb-1">{title}</h3>}
      {description && (
        <p className="text-xs text-muted-foreground mb-5 max-w-xs">{description}</p>
      )}
      {action && <div className="flex items-center gap-2">{action}</div>}
    </div>
  );
}

export function EmptyHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex flex-col items-center justify-center space-y-2", className)}
      {...props}
    />
  );
}

export function EmptyTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn("text-lg font-bold text-foreground tracking-tight", className)}
      {...props}
    />
  );
}

export function EmptyDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("text-sm text-muted-foreground max-w-sm", className)}
      {...props}
    />
  );
}

export function EmptyContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("mt-6 flex items-center justify-center gap-3", className)}
      {...props}
    />
  );
}
