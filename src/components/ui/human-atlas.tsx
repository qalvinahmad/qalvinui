"use client";

import React, { useState } from "react";
import { Layers, Activity, Eye, Compass, Info, ArrowUpRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AnatomySystem {
  id: string;
  name: string;
  count: string;
  color: string;
  border: string;
  text: string;
}

export const ANATOMY_SYSTEMS: AnatomySystem[] = [
  { id: "skeletal", name: "Skeletal System", count: "206 Bones", color: "from-amber-500/20 to-amber-500/5", border: "border-amber-500/30", text: "text-amber-500" },
  { id: "muscular", name: "Muscular System", count: "600+ Muscles", color: "from-rose-500/20 to-rose-500/5", border: "border-rose-500/30", text: "text-rose-500" },
  { id: "nervous", name: "Nervous System", count: "Central & Peripheral", color: "from-sky-500/20 to-sky-500/5", border: "border-sky-500/30", text: "text-sky-500" },
  { id: "cardiovascular", name: "Cardiovascular", count: "Heart & Vessels", color: "from-red-500/20 to-red-500/5", border: "border-red-500/30", text: "text-red-500" },
  { id: "digestive", name: "Digestive & Visceral", count: "Gastrointestinal", color: "from-emerald-500/20 to-emerald-500/5", border: "border-emerald-500/30", text: "text-emerald-500" },
];

export interface HumanAtlasProps {
  className?: string;
  defaultSystem?: string;
  interactive?: boolean;
  onSystemSelect?: (system: AnatomySystem) => void;
}

export function HumanAtlas({
  className,
  defaultSystem = "skeletal",
  interactive = true,
  onSystemSelect,
}: HumanAtlasProps) {
  const [activeSystem, setActiveSystem] = useState(defaultSystem);
  const [viewMode, setViewMode] = useState<"orbit" | "explode">("orbit");

  const activeSystemObj = ANATOMY_SYSTEMS.find((s) => s.id === activeSystem) || ANATOMY_SYSTEMS[0];

  const handleSystemChange = (system: AnatomySystem) => {
    setActiveSystem(system.id);
    onSystemSelect?.(system);
  };

  return (
    <div className={cn("rounded-3xl border bg-zinc-950 text-zinc-100 shadow-2xl overflow-hidden flex flex-col lg:flex-row min-h-[480px]", className)}>
      {/* 3D Viewport simulation */}
      <div className="flex-1 relative p-6 flex flex-col justify-between min-h-[340px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900 via-zinc-950 to-black">
        {/* Top HUD */}
        <div className="flex items-center justify-between z-10">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>3D WebGL Engine Active</span>
          </div>
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setViewMode("orbit")}
              className={cn(
                "px-3 py-1 rounded-lg text-xs font-medium transition-colors cursor-pointer",
                viewMode === "orbit" ? "bg-zinc-800 text-white" : "text-zinc-400 hover:text-white"
              )}
            >
              Orbit View
            </button>
            <button
              onClick={() => setViewMode("explode")}
              className={cn(
                "px-3 py-1 rounded-lg text-xs font-medium transition-colors cursor-pointer",
                viewMode === "explode" ? "bg-zinc-800 text-white" : "text-zinc-400 hover:text-white"
              )}
            >
              Exploded
            </button>
          </div>
        </div>

        {/* Center Canvas / Silhouette */}
        <div className="relative flex-1 flex items-center justify-center py-8">
          <div className={cn(
            "w-48 h-64 rounded-full border border-dashed flex items-center justify-center transition-all duration-700 relative",
            activeSystemObj.border,
            viewMode === "explode" ? "scale-110 rotate-6" : "scale-100 rotate-0"
          )}>
            <div className={cn(
              "absolute inset-0 rounded-full blur-2xl opacity-40 bg-gradient-to-tr",
              activeSystemObj.color
            )} />
            <Activity className={cn("w-20 h-20 animate-pulse duration-1000", activeSystemObj.text)} />
            
            {/* Floating metric chips */}
            <div className="absolute -top-3 -right-3 px-2.5 py-1 rounded-md bg-zinc-900/90 border border-zinc-800 text-[11px] font-mono shadow-lg">
              {activeSystemObj.count}
            </div>
            <div className="absolute -bottom-3 -left-3 px-2.5 py-1 rounded-md bg-zinc-900/90 border border-zinc-800 text-[11px] font-mono shadow-lg flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-amber-400" />
              <span>Full Mesh LOD</span>
            </div>
          </div>
        </div>

        {/* Bottom Stage Controls */}
        <div className="flex items-center justify-between text-xs text-zinc-500 border-t border-zinc-900 pt-3 z-10">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Compass className="w-3.5 h-3.5" /> Drag to rotate
            </span>
            <span className="flex items-center gap-1">
              <Eye className="w-3.5 h-3.5" /> Scroll to zoom
            </span>
          </div>
          <span className="font-mono text-[10px]">60 FPS • WebGL 2.0</span>
        </div>
      </div>

      {/* Anatomy Layer Panel */}
      <div className="w-full lg:w-72 border-t lg:border-t-0 lg:border-l border-zinc-800/80 bg-zinc-950/70 p-5 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 flex items-center gap-2">
              <Layers className="w-3.5 h-3.5" /> Anatomical Layers
            </h4>
            <span className="text-[10px] text-zinc-500 font-mono">5 Systems</span>
          </div>

          <div className="space-y-1.5">
            {ANATOMY_SYSTEMS.map((system) => {
              const isSelected = activeSystem === system.id;
              return (
                <button
                  key={system.id}
                  onClick={() => handleSystemChange(system)}
                  className={cn(
                    "w-full text-left p-2.5 rounded-xl border text-xs font-medium transition-all duration-200 cursor-pointer flex items-center justify-between",
                    isSelected
                      ? "bg-zinc-900 border-zinc-700 text-white shadow-sm"
                      : "border-transparent text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/40"
                  )}
                >
                  <div className="flex items-center gap-2.5">
                    <span className={cn(
                      "w-2 h-2 rounded-full",
                      isSelected ? "bg-white" : "bg-zinc-600"
                    )} />
                    <span>{system.name}</span>
                  </div>
                  <span className="text-[10px] text-zinc-500 font-mono">{system.count}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-zinc-800/80">
          <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800 text-[11px] text-zinc-400 space-y-1">
            <div className="flex items-center gap-1 text-zinc-200 font-medium">
              <Info className="w-3.5 h-3.5" />
              <span>Current Selection</span>
            </div>
            <p className="text-zinc-400">{activeSystemObj.name} ({activeSystemObj.count})</p>
          </div>
        </div>
      </div>
    </div>
  );
}
