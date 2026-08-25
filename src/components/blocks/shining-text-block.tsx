"use client";

import React, { useState } from "react";
import { ShiningText } from "@/components/ui/shining-text";
import { Sparkles, Sliders, Palette, Zap, ArrowRight, Check, Star } from "lucide-react";

export function ShiningTextBlock() {
  const [text, setText] = useState("Empowering Next Generation Interfaces");
  const [duration, setDuration] = useState(3);
  const [selectedTheme, setSelectedTheme] = useState<"chrome" | "violet" | "gold" | "emerald" | "cyan">("chrome");

  const themes = {
    chrome: {
      name: "Chrome Silver",
      color: "rgba(255, 255, 255, 0.9)",
      badgeBg: "bg-muted text-foreground border-border",
      textClass: "text-foreground",
    },
    violet: {
      name: "Violet Aurora",
      color: "rgba(216, 180, 254, 0.95)",
      badgeBg: "bg-purple-500/10 text-purple-400 border-purple-500/30",
      textClass: "from-purple-400 via-pink-300 to-purple-400",
    },
    gold: {
      name: "Sunset Gold",
      color: "rgba(254, 240, 138, 0.95)",
      badgeBg: "bg-amber-500/10 text-amber-400 border-amber-500/30",
      textClass: "from-amber-400 via-yellow-200 to-amber-500",
    },
    emerald: {
      name: "Cyber Emerald",
      color: "rgba(110, 231, 183, 0.95)",
      badgeBg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
      textClass: "from-emerald-400 via-teal-200 to-emerald-400",
    },
    cyan: {
      name: "Electric Cyan",
      color: "rgba(103, 232, 249, 0.95)",
      badgeBg: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
      textClass: "from-cyan-400 via-sky-200 to-cyan-400",
    },
  };

  const activeTheme = themes[selectedTheme];

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col gap-8">
      {/* Interactive Playground Canvas */}
      <div className="relative overflow-hidden rounded-3xl border border-border/80 bg-gradient-to-b from-background via-muted/20 to-background p-8 md:p-14 shadow-2xl flex flex-col items-center justify-center text-center gap-8">
        
        {/* Glow background orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-foreground/5 rounded-full blur-3xl pointer-events-none" />

        {/* Shiny Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border bg-background/80 backdrop-blur-md shadow-sm">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <ShiningText duration={duration} shimmerColor={activeTheme.color} className="text-xs font-medium tracking-wide">
            ✨ Shining Text 2.0 Released
          </ShiningText>
          <ArrowRight className="h-3 w-3 text-muted-foreground" />
        </div>

        {/* Main Shining Hero Headline */}
        <div className="max-w-2xl space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            <ShiningText
              duration={duration}
              shimmerColor={activeTheme.color}
              className="inline-block drop-shadow-sm font-sans"
            >
              {text}
            </ShiningText>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-lg mx-auto">
            Lightweight, high-performance shimmering text component built for modern web apps with silky smooth 60fps animations.
          </p>
        </div>

        {/* Action Showcase: Buttons & Cards */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <button className="group relative inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-2.5 text-sm font-medium text-background shadow-lg hover:bg-foreground/90 transition-all active:scale-[0.98]">
            <Sparkles className="h-4 w-4" />
            <ShiningText duration={duration} shimmerColor="rgba(255, 255, 255, 0.9)" className="font-semibold">
              Get Started Free
            </ShiningText>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
          </button>

          <button className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-5 py-2.5 text-sm font-medium text-foreground hover:bg-muted transition-colors backdrop-blur-sm">
            <Star className="h-4 w-4 text-amber-500" />
            <ShiningText duration={duration} shimmerColor={activeTheme.color}>
              Star on GitHub
            </ShiningText>
          </button>
        </div>
      </div>

      {/* Interactive Controls Panel */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-card/60 backdrop-blur-sm border border-border/80 rounded-2xl p-5 shadow-sm text-xs">
        
        {/* Text Input */}
        <div className="space-y-2">
          <label className="flex items-center gap-1.5 font-medium text-foreground">
            <Sliders className="h-3.5 w-3.5 text-muted-foreground" /> Edit Text
          </label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type your shining headline..."
            className="w-full rounded-xl border border-border bg-background px-3 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all"
          />
        </div>

        {/* Speed Selector */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <label className="flex items-center gap-1.5 font-medium text-foreground">
              <Zap className="h-3.5 w-3.5 text-muted-foreground" /> Shimmer Duration
            </label>
            <span className="font-mono text-muted-foreground">{duration}s</span>
          </div>
          <div className="grid grid-cols-3 gap-1.5">
            {[1.5, 3, 5].map((speed) => (
              <button
                key={speed}
                onClick={() => setDuration(speed)}
                className={`py-2 rounded-xl border font-medium transition-all ${
                  duration === speed
                    ? "border-foreground bg-foreground text-background"
                    : "border-border bg-background text-muted-foreground hover:text-foreground"
                }`}
              >
                {speed === 1.5 ? "Fast (1.5s)" : speed === 3 ? "Normal (3s)" : "Slow (5s)"}
              </button>
            ))}
          </div>
        </div>

        {/* Shimmer Color Themes */}
        <div className="space-y-2">
          <label className="flex items-center gap-1.5 font-medium text-foreground">
            <Palette className="h-3.5 w-3.5 text-muted-foreground" /> Shimmer Color Preset
          </label>
          <div className="flex items-center gap-2 flex-wrap pt-0.5">
            {(Object.keys(themes) as Array<keyof typeof themes>).map((key) => {
              const theme = themes[key];
              const isSelected = selectedTheme === key;
              return (
                <button
                  key={key}
                  onClick={() => setSelectedTheme(key)}
                  className={`px-2.5 py-1.5 rounded-lg border flex items-center gap-1.5 transition-all ${
                    isSelected
                      ? "border-foreground bg-muted font-semibold text-foreground"
                      : "border-border bg-background text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {isSelected && <Check className="h-3 w-3 text-emerald-500" />}
                  {theme.name}
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
