"use client";

import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

export interface StickySlideItem {
  id?: string | number;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  bgGradient?: string;
  textColor?: string;
  content?: React.ReactNode;
  className?: string;
}

export const DEFAULT_STICKY_SLIDES: StickySlideItem[] = [
  {
    id: 1,
    title: "The First slide",
    subtitle: "Scroll Down for next slide",
    bgGradient: "from-green-200 to-blue-200",
    textColor: "text-slate-900",
  },
  {
    id: 2,
    title: "The Second slide",
    subtitle: "Scroll Down for next slide",
    bgGradient: "from-indigo-800 to-purple-800",
    textColor: "text-white",
  },
  {
    id: 3,
    title: "The Third slide",
    subtitle: "Scroll Down",
    bgGradient: "from-purple-800 to-pink-800",
    textColor: "text-white",
  },
  {
    id: 4,
    title: "The Fourth slide",
    subtitle: "End of full page slides",
    bgGradient: "from-blue-200 to-indigo-100",
    textColor: "text-slate-900",
  },
];

export interface StickySlidesProps {
  slides?: StickySlideItem[];
  children?: React.ReactNode;
  className?: string;
  slideHeightClass?: string;
  showIndicators?: boolean;
}

export function StickySlides({
  slides = DEFAULT_STICKY_SLIDES,
  children,
  className,
  slideHeightClass = "h-screen",
  showIndicators = true,
}: StickySlidesProps) {
  const [activeSlide, setActiveSlide] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // If custom children are provided, render them in relative sticky layout
  if (children) {
    return <div className={cn("relative w-full", className)}>{children}</div>;
  }

  return (
    <div ref={containerRef} className={cn("relative w-full", className)}>
      {/* Floating Slide Indicator */}
      {showIndicators && (
        <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3 p-2 rounded-full bg-black/20 backdrop-blur-md border border-white/10 hidden sm:flex pointer-events-none">
          {slides.map((slide, idx) => (
            <span
              key={slide.id || idx}
              className={cn(
                "w-2.5 h-2.5 rounded-full transition-all duration-300",
                activeSlide === idx
                  ? "bg-white scale-125 shadow-md"
                  : "bg-white/40 hover:bg-white/70"
              )}
            />
          ))}
        </div>
      )}

      {/* Sticky Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id || index}
          className={cn(
            "sticky top-0 w-full flex flex-col items-center justify-center p-6 text-center select-none overflow-hidden",
            slideHeightClass,
            slide.bgGradient ? `bg-gradient-to-b ${slide.bgGradient}` : "bg-background",
            slide.textColor || "text-foreground",
            slide.className
          )}
        >
          {slide.content ? (
            slide.content
          ) : (
            <div className="max-w-xl mx-auto space-y-3 z-10">
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight drop-shadow-sm">
                {slide.title}
              </h2>
              {slide.subtitle && (
                <p className="text-base sm:text-lg opacity-85 font-medium flex items-center justify-center gap-1.5 mt-2">
                  <span>{slide.subtitle}</span>
                  {index < slides.length - 1 && (
                    <ChevronDown className="w-4 h-4 animate-bounce inline-block" />
                  )}
                </p>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export interface StickySlideProps {
  children: React.ReactNode;
  bgGradient?: string;
  textColor?: string;
  className?: string;
  heightClass?: string;
}

export function StickySlide({
  children,
  bgGradient,
  textColor,
  className,
  heightClass = "h-screen",
}: StickySlideProps) {
  return (
    <div
      className={cn(
        "sticky top-0 w-full flex flex-col items-center justify-center p-6 text-center",
        heightClass,
        bgGradient ? `bg-gradient-to-b ${bgGradient}` : "",
        textColor,
        className
      )}
    >
      {children}
    </div>
  );
}

export * from "./sticky-slides/sticky-slides";
export default StickySlides;
