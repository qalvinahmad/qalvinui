"use client";

import React, { useState } from "react";
import { Layers, Activity, Eye, Compass, Info, ArrowUpRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const SYSTEMS = [
  { id: "skeletal", name: "Skeletal System", count: "206 Bones", color: "from-amber-500/20 to-amber-500/5", border: "border-amber-500/30", text: "text-amber-500" },
  { id: "muscular", name: "Muscular System", count: "600+ Muscles", color: "from-rose-500/20 to-rose-500/5", border: "border-rose-500/30", text: "text-rose-500" },
  { id: "nervous", name: "Nervous System", count: "Central & Peripheral", color: "from-sky-500/20 to-sky-500/5", border: "border-sky-500/30", text: "text-sky-500" },
  { id: "cardiovascular", name: "Cardiovascular", count: "Heart & Vessels", color: "from-red-500/20 to-red-500/5", border: "border-red-500/30", text: "text-red-500" },
  { id: "digestive", name: "Digestive & Visceral", count: "Gastrointestinal", color: "from-emerald-500/20 to-emerald-500/5", border: "border-emerald-500/30", text: "text-emerald-500" },
];

export interface HumanAtlasBlockProps {
  className?: string;
  forceMode?: "desktop" | "tablet" | "mobile";
}

export function HumanAtlasBlock({ className, forceMode }: HumanAtlasBlockProps) {
  const [activeSystem, setActiveSystem] = useState("skeletal");
  const [viewMode, setViewMode] = useState<"orbit" | "explode">("orbit");

  const isMobile = forceMode === "mobile";
  const activeSystemObj = SYSTEMS.find((s) => s.id === activeSystem) || SYSTEMS[0];

  return (
    <div className={cn("w-full max-w-4xl mx-auto space-y-6", className)}>
      <div
        className={cn(
          "rounded-3xl border bg-zinc-950 text-zinc-100 shadow-2xl overflow-hidden flex",
          isMobile ? "flex-col" : "flex-col lg:flex-row min-h-[520px]"
        )}
      >
        {/* Left Side: 3D Viewport Simulation / Stage */}
        <div className="flex-1 relative p-6 flex flex-col justify-between min-h-[380px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900 via-zinc-950 to-black">
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
                Orbit
              </button>
              <button
                onClick={() => setViewMode("explode")}
                className={cn(
                  "px-3 py-1 rounded-lg text-xs font-medium transition-colors cursor-pointer",
                  viewMode === "explode" ? "bg-zinc-800 text-white" : "text-zinc-400 hover:text-white"
                )}
              >
                Exploded View
              </button>
            </div>
          </div>

          {/* Central 3D Human Silhouette & Orbital Ring Graphic */}
          <div className="my-auto flex flex-col items-center justify-center text-center space-y-4 py-8">
            <div className="relative w-44 h-44 flex items-center justify-center">
              {/* Spinning 3D Orbital Rings */}
              <div className="absolute inset-0 rounded-full border border-zinc-700/60 animate-[spin_12s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border border-dashed border-zinc-600/40 animate-[spin_20s_linear_infinite_reverse]" />
              <div className="absolute inset-8 rounded-full bg-gradient-to-tr from-primary/20 to-transparent blur-xl" />

              {/* Anatomy Wireframe Symbol */}
              <div className="relative z-10 flex flex-col items-center">
                <Activity className={cn("w-16 h-16 transition-colors duration-500", activeSystemObj.text)} />
                <span className="mt-2 text-xs font-mono font-medium text-zinc-300 uppercase tracking-widest">
                  {activeSystemObj.name}
                </span>
              </div>
            </div>

            <p className="text-xs text-zinc-400 max-w-xs">
              Interactive high-precision 3D human anatomy model with coordinate inspection and multi-system layering.
            </p>
          </div>

          {/* Bottom HUD */}
          <div className="flex items-center justify-between z-10 pt-4 border-t border-zinc-900 text-xs text-zinc-400">
            <span className="flex items-center gap-1.5 font-mono">
              <Compass className="w-3.5 h-3.5 text-zinc-500" /> Cam: 35mm f/2.8
            </span>
            <span className="font-mono text-zinc-500">GLB • 14 Systems</span>
          </div>
        </div>

        {/* Right Side: Layers & Organ Controls */}
        <div
          className={cn(
            "p-6 bg-zinc-900/60 border-t lg:border-t-0 lg:border-l border-zinc-800 flex flex-col justify-between gap-6",
            isMobile ? "w-full" : "w-full lg:w-80"
          )}
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-primary" />
                <h4 className="text-sm font-semibold text-white">Anatomical Layers</h4>
              </div>
              <span className="text-[11px] font-mono text-zinc-500">v0.1.0</span>
            </div>

            <div className="space-y-2">
              {SYSTEMS.map((sys) => (
                <button
                  key={sys.id}
                  onClick={() => setActiveSystem(sys.id)}
                  className={cn(
                    "w-full text-left p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between",
                    activeSystem === sys.id
                      ? cn("bg-zinc-800 text-white shadow-md", sys.border)
                      : "bg-zinc-950/60 border-zinc-800/80 text-zinc-400 hover:text-white hover:bg-zinc-800/50"
                  )}
                >
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold">{sys.name}</span>
                    <span className="text-[11px] text-zinc-500">{sys.count}</span>
                  </div>
                  <Eye className={cn("w-4 h-4", activeSystem === sys.id ? sys.text : "text-zinc-600")} />
                </button>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-zinc-800/80 space-y-3">
            <div className="flex items-start gap-2.5 bg-zinc-950 p-3 rounded-xl border border-zinc-800 text-xs text-zinc-400">
              <Info className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <span>Full standalone template includes complete GLTF/mesh files and raycast pin interaction.</span>
            </div>

            <a
              href="https://github.com/qalvinahmad"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full h-10 rounded-xl bg-white text-zinc-950 font-medium text-xs hover:bg-zinc-200 transition-colors"
            >
              Explore Template Repository
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HumanAtlasBlock;
