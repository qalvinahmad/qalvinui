"use client";

import React, { useState } from "react";
import { StickySlides, DEFAULT_STICKY_SLIDES } from "@/components/ui/sticky-slides";
import { Layers, Smartphone, Monitor, Tablet, ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface StickySlidesBlockProps {
  className?: string;
  forceMode?: "desktop" | "tablet" | "mobile";
}

export function StickySlidesBlock({ className, forceMode }: StickySlidesBlockProps) {
  const isMobile = forceMode === "mobile";
  const [slideMode, setSlideMode] = useState<"viewport" | "container">("container");

  return (
    <div className={cn("w-full max-w-4xl mx-auto space-y-4", className)}>
      {/* HUD Info */}
      <div className="flex items-center justify-between px-2 text-xs text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Sticky Stacking Context Active</span>
        </div>
        <div className="flex items-center gap-1.5 text-[11px] font-mono">
          <span>Scroll inside frame to see stacking effect</span>
          <ArrowDown className="w-3.5 h-3.5 text-primary animate-bounce" />
        </div>
      </div>

      {/* Frame Container */}
      <div className="rounded-3xl border border-border/80 bg-background shadow-2xl overflow-hidden relative">
        <div className="h-[480px] overflow-y-auto scroll-smooth">
          <StickySlides
            slideHeightClass="h-[480px]"
            showIndicators={true}
          />
        </div>
      </div>
    </div>
  );
}

export default StickySlidesBlock;
