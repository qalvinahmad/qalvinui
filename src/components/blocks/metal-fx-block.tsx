"use client";

import React, { useState } from "react";
import { MetalFx } from "@/components/ui/metal-fx";
import { Sparkles, ArrowRight, ShieldCheck, Crown } from "lucide-react";
import { cn } from "@/lib/utils";

type PresetType = "chromatic" | "silver" | "gold";

export interface MetalFxBlockProps {
  className?: string;
  forceMode?: "desktop" | "tablet" | "mobile";
}

export function MetalFxBlock({ className, forceMode }: MetalFxBlockProps) {
  const [preset, setPreset] = useState<PresetType>("gold");
  const [strength, setStrength] = useState<number>(0.9);

  const isMobile = forceMode === "mobile";

  return (
    <div className={cn("w-full max-w-4xl mx-auto space-y-6", className)}>
      <div
        className={cn(
          "rounded-2xl border bg-card/60 backdrop-blur-md p-6 sm:p-8 shadow-sm flex gap-8 items-center justify-between",
          isMobile ? "flex-col" : "flex-col md:flex-row"
        )}
      >
        {/* Metal Buttons Showcase */}
        <div className="flex-1 flex flex-col items-center justify-center p-8 bg-zinc-950 border border-zinc-800 rounded-2xl min-h-[260px] w-full text-center space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-zinc-400 font-mono font-semibold">
              WebGL Liquid Metallic Shader
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Elevate Your Call To Actions
            </h3>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <MetalFx preset={preset} strength={strength}>
              <button className="h-11 px-6 rounded-xl font-medium text-sm text-white bg-zinc-900 border border-white/20 flex items-center gap-2 cursor-pointer shadow-lg hover:scale-105 active:scale-95 transition-transform">
                <Crown className="w-4 h-4 text-amber-300" />
                Upgrade to Pro
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </MetalFx>

            <MetalFx preset={preset === "gold" ? "silver" : "gold"} strength={strength}>
              <button className="h-11 px-5 rounded-xl font-medium text-sm text-zinc-200 bg-zinc-900/80 border border-white/10 flex items-center gap-2 cursor-pointer shadow-md hover:scale-105 active:scale-95 transition-transform">
                <ShieldCheck className="w-4 h-4" />
                Enterprise
              </button>
            </MetalFx>
          </div>
        </div>

        {/* Controls */}
        <div className={cn("flex flex-col gap-4", isMobile ? "w-full" : "w-full md:w-72")}>
          <div className="flex items-center gap-2 font-semibold text-sm">
            <Sparkles className="h-4 w-4 text-amber-500" />
            Shader Customization
          </div>

          <div className="space-y-1.5">
            <label className="text-xs text-muted-foreground font-medium">Material Preset</label>
            <div className="grid grid-cols-3 gap-2">
              {(["gold", "silver", "chromatic"] as PresetType[]).map((p) => (
                <button
                  key={p}
                  onClick={() => setPreset(p)}
                  className={cn(
                    "px-3 py-2 text-xs font-medium rounded-lg capitalize transition-all border cursor-pointer",
                    preset === p
                      ? "bg-primary text-primary-foreground border-primary shadow-xs font-semibold"
                      : "bg-muted/40 text-muted-foreground border-border/60 hover:bg-muted hover:text-foreground"
                  )}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2 pt-2 border-t border-border/60">
            <div className="flex justify-between items-center text-xs">
              <span className="text-muted-foreground">Shine Strength</span>
              <span className="font-mono font-medium">{Math.round(strength * 100)}%</span>
            </div>
            <input
              type="range"
              min="0.2"
              max="1"
              step="0.05"
              value={strength}
              onChange={(e) => setStrength(parseFloat(e.target.value))}
              className="w-full h-1.5 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MetalFxBlock;
