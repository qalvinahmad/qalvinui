"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const SHIMMER_KEYFRAMES = `
@keyframes qalvin-shimmer-sweep {
  from {
    background-position: 200% 0;
  }
  to {
    background-position: -200% 0;
  }
}
`;

const SWEEP_STYLE_ID = "qalvin-shimmer-sweep-style";

function useShimmerKeyframes() {
  React.useEffect(() => {
    if (typeof document === "undefined") return;
    if (document.getElementById(SWEEP_STYLE_ID)) return;
    const styleEl = document.createElement("style");
    styleEl.id = SWEEP_STYLE_ID;
    styleEl.textContent = SHIMMER_KEYFRAMES;
    document.head.appendChild(styleEl);
  }, []);
}

export interface ShimmerTextProps {
  children: React.ReactNode;
  duration?: number;
  shimmerColor?: string;
  className?: string;
}

export function ShimmerText({
  children,
  duration = 3,
  shimmerColor = "rgba(255, 255, 255, 0.8)",
  className,
}: ShimmerTextProps) {
  useShimmerKeyframes();

  return (
    <span
      className={cn(
        "relative inline-block select-none bg-clip-text text-transparent",
        "bg-no-repeat bg-[length:250%_100%] bg-gradient-to-r",
        "from-muted-foreground via-foreground to-muted-foreground",
        "dark:from-zinc-500 dark:via-zinc-100 dark:to-zinc-500",
        "animate-[qalvin-shimmer-sweep_linear_infinite]",
        className
      )}
      style={{
        animationDuration: `${duration}s`,
        backgroundImage: `linear-gradient(110deg, currentColor 0%, currentColor 35%, ${shimmerColor} 50%, currentColor 65%, currentColor 100%)`,
      }}
    >
      {children}
    </span>
  );
}

export interface ShimmerBoxProps {
  active?: boolean;
  duration?: number;
  className?: string;
  children?: React.ReactNode;
}

export function ShimmerBox({
  active = true,
  duration = 2,
  className,
  children,
}: ShimmerBoxProps) {
  useShimmerKeyframes();

  return (
    <div className={cn("relative overflow-hidden rounded-lg border bg-muted/40", className)}>
      {children}
      {active ? (
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-foreground/10 to-transparent animate-[qalvin-shimmer-sweep_linear_infinite]"
          style={{
            backgroundSize: "250% 100%",
            animationDuration: `${duration}s`,
          }}
        />
      ) : null}
    </div>
  );
}

export default ShimmerText;
