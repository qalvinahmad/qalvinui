import * as React from "react";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

export interface SpinnerProps extends React.HTMLAttributes<SVGElement> {
  size?: "sm" | "default" | "lg" | "xl";
}

export function Spinner({ className, size = "default", ...props }: SpinnerProps) {
  const sizeClasses = {
    sm: "h-3.5 w-3.5",
    default: "h-5 w-5",
    lg: "h-8 w-8",
    xl: "h-12 w-12",
  };

  return (
    <Loader2
      className={cn("animate-spin text-muted-foreground", sizeClasses[size], className)}
      {...props}
    />
  );
}
