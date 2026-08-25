import * as React from "react";
import { cn } from "@/lib/utils";

export interface MarkerProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "success" | "warning" | "destructive" | "info";
  pulse?: boolean;
}

export function Marker({
  className,
  variant = "default",
  pulse = true,
  children,
  ...props
}: MarkerProps) {
  const variantStyles = {
    default: "bg-primary text-primary-foreground",
    success: "bg-emerald-500 text-white",
    warning: "bg-amber-500 text-white",
    destructive: "bg-rose-500 text-white",
    info: "bg-sky-500 text-white",
  };

  return (
    <span className={cn("inline-flex items-center gap-1.5 text-xs font-semibold px-2 py-0.5 rounded-full shadow-xs", variantStyles[variant], className)} {...props}>
      {pulse && <span className="h-1.5 w-1.5 rounded-full bg-current animate-ping" />}
      {children}
    </span>
  );
}
