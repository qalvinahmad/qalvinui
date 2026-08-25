"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface ShiningTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  duration?: number;
  shimmerColor?: string;
  className?: string;
}

export function ShiningText({
  children,
  duration = 3,
  shimmerColor,
  className,
  ...props
}: ShiningTextProps) {
  const dynamicStyle: React.CSSProperties = {
    animationDuration: `${duration}s`,
    ...(shimmerColor
      ? {
          backgroundImage: `linear-gradient(110deg, #64748b 40%, ${shimmerColor} 50%, #64748b 60%)`,
        }
      : {}),
    ...props.style,
  };

  return (
    <span
      className={cn(
        "inline-block bg-[length:250%_100%] bg-clip-text text-transparent animate-[shining-sweep_3s_linear_infinite]",
        "bg-[linear-gradient(110deg,#64748b,45%,#0f172a,55%,#64748b)] dark:bg-[linear-gradient(110deg,#71717a,45%,#ffffff,55%,#71717a)]",
        className
      )}
      style={dynamicStyle}
      {...props}
    >
      {children}
    </span>
  );
}
