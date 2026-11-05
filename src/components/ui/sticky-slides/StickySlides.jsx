"use client";

import React from "react";

export const DEFAULT_STICKY_SLIDES = [
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

export function StickySlides({
  slides = DEFAULT_STICKY_SLIDES,
  children,
  className = "",
  slideHeightClass = "h-screen",
}) {
  if (children) {
    return <div className={`relative w-full ${className}`}>{children}</div>;
  }

  return (
    <div className={`relative w-full ${className}`}>
      {slides.map((slide, index) => (
        <div
          key={slide.id || index}
          className={`sticky top-0 w-full flex flex-col items-center justify-center p-6 text-center select-none overflow-hidden ${slideHeightClass} ${
            slide.bgGradient ? `bg-gradient-to-b ${slide.bgGradient}` : "bg-background"
          } ${slide.textColor || "text-foreground"} ${slide.className || ""}`}
        >
          {slide.content ? (
            slide.content
          ) : (
            <div className="max-w-xl mx-auto space-y-3 z-10">
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
                {slide.title}
              </h2>
              {slide.subtitle && (
                <p className="text-base sm:text-lg opacity-85 font-medium mt-2">
                  {slide.subtitle}
                </p>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export function StickySlide({
  children,
  bgGradient = "",
  textColor = "",
  className = "",
  heightClass = "h-screen",
}) {
  return (
    <div
      className={`sticky top-0 w-full flex flex-col items-center justify-center p-6 text-center ${heightClass} ${
        bgGradient ? `bg-gradient-to-b ${bgGradient}` : ""
      } ${textColor} ${className}`}
    >
      {children}
    </div>
  );
}

export default StickySlides;
