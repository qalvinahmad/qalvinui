"use client";

import React, { useState } from "react";
import { ThinkingOrb, type OrbSize } from "@/components/ui/thinking-orb";
import { Sparkles, Bot, Zap, RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils";

const ORB_STATES = [
  { id: "working", label: "Working", desc: "Active background task or code execution" },
  { id: "searching", label: "Searching", desc: "Querying index, web, or vector database" },
  { id: "solving", label: "Solving", desc: "Multi-step reasoning and deduction" },
  { id: "listening", label: "Listening", desc: "Awaiting audio input or voice streaming" },
  { id: "connecting", label: "Connecting", desc: "Establishing websocket / peer connection" },
  { id: "composing", label: "Composing", desc: "Streaming LLM generative response" },
  { id: "breathing", label: "Breathing", desc: "Idle state waiting for user prompt" },
] as const;

export interface ThinkingOrbBlockProps {
  className?: string;
  forceMode?: "desktop" | "tablet" | "mobile";
}

export function ThinkingOrbBlock({ className, forceMode }: ThinkingOrbBlockProps) {
  const [selectedState, setSelectedState] = useState<string>("working");
  const [speed, setSpeed] = useState<number>(1);
  const [size, setSize] = useState<OrbSize>(64);

  const isMobile = forceMode === "mobile";

  const currentStateObj = ORB_STATES.find((s) => s.id === selectedState) || ORB_STATES[0];

  return (
    <div className={cn("w-full max-w-4xl mx-auto space-y-6", className)}>
      <div
        className={cn(
          "rounded-2xl border bg-card/60 backdrop-blur-md p-6 sm:p-8 shadow-sm flex gap-8 items-center justify-between",
          isMobile ? "flex-col" : "flex-col md:flex-row"
        )}
      >
        {/* Left: Orb Stage */}
        <div className="flex-1 flex flex-col items-center justify-center p-6 bg-muted/20 border border-border/40 rounded-2xl min-h-[260px] w-full">
          <div className="relative flex items-center justify-center">
            {/* Ambient glow behind orb */}
            <div className="absolute w-32 h-32 rounded-full bg-primary/20 blur-2xl animate-pulse pointer-events-none" />
            <ThinkingOrb
              key={`${selectedState}-${speed}-${size}`}
              state={selectedState as any}
              size={size}
              speed={speed}
              theme="auto"
            />
          </div>

          <div className="mt-6 text-center space-y-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-medium text-primary">
              <Bot className="h-3.5 w-3.5" />
              <span>{currentStateObj.label}</span>
            </div>
            <p className="text-xs text-muted-foreground">{currentStateObj.desc}</p>
          </div>
        </div>

        {/* Right: Interactive State Selector */}
        <div className={cn("flex flex-col gap-4", isMobile ? "w-full" : "w-full md:w-80")}>
          <div className="flex items-center gap-2 font-semibold text-sm">
            <Sparkles className="h-4 w-4 text-primary" />
            Agent Thought States
          </div>

          <div className="grid grid-cols-2 gap-2">
            {ORB_STATES.map((s) => (
              <button
                key={s.id}
                onClick={() => setSelectedState(s.id)}
                className={cn(
                  "px-3 py-2 text-xs font-medium rounded-lg text-left transition-all border cursor-pointer",
                  selectedState === s.id
                    ? "bg-primary text-primary-foreground border-primary shadow-xs"
                    : "bg-muted/40 text-muted-foreground border-border/60 hover:bg-muted hover:text-foreground"
                )}
              >
                {s.label}
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-border/60 space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground">Speed ({speed}x)</span>
              <div className="flex gap-1.5">
                {[0.5, 1, 1.5, 2].map((spd) => (
                  <button
                    key={spd}
                    onClick={() => setSpeed(spd)}
                    className={cn(
                      "px-2 py-0.5 rounded text-[11px] font-medium transition-colors cursor-pointer",
                      speed === spd
                        ? "bg-foreground text-background"
                        : "bg-muted text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {spd}x
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground">Size</span>
              <div className="flex gap-1.5">
                {([64, 20] as const).map((sz) => (
                  <button
                    key={sz}
                    onClick={() => setSize(sz)}
                    className={cn(
                      "px-2.5 py-0.5 rounded text-[11px] font-medium transition-colors cursor-pointer",
                      size === sz
                        ? "bg-foreground text-background"
                        : "bg-muted text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {sz === 64 ? "64px (Avatar)" : "20px (Inline)"}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThinkingOrbBlock;
