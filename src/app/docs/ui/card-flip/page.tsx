"use client";

import { useState } from "react";
import CardFlip from "@/components/ui/card-flip";
import { InstallTabs } from "@/components/docs/install-tabs";
import { Sparkles, Layers, Code, Eye } from "lucide-react";

export default function CardFlipDocPage() {
  const [tab, setTab] = useState<"preview" | "code">("preview");

  const usageCode = `import CardFlip from "@/components/ui/card-flip";

export function CardFlipDemo() {
  return (
    <div className="flex justify-center p-6">
      <CardFlip />
    </div>
  );
}`;

  return (
    <div className="space-y-10 max-w-4xl pb-16">
      {/* Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
            Cards & Widgets
          </span>
          <span className="text-xs text-muted-foreground font-mono">ui/card-flip</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Card Flip</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          3D perspective card flip with front and back interactive faces.
        </p>
      </div>

      {/* Package Manager / Agent Tabs */}
      <div className="space-y-3">
        <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Installation</h2>
        <InstallTabs slug="card-flip" />
      </div>

      {/* Interactive Preview & Code */}
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b pb-2">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setTab("preview")}
              className={`flex items-center gap-1.5 pb-2 px-3 text-sm font-medium border-b-2 -mb-2.5 transition-colors cursor-pointer ${
                tab === "preview"
                  ? "border-primary text-foreground font-semibold"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              <Eye className="h-4 w-4" />
              Preview
            </button>
            <button
              onClick={() => setTab("code")}
              className={`flex items-center gap-1.5 pb-2 px-3 text-sm font-medium border-b-2 -mb-2.5 transition-colors cursor-pointer ${
                tab === "code"
                  ? "border-primary text-foreground font-semibold"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              <Code className="h-4 w-4" />
              Code
            </button>
          </div>
          <span className="text-xs text-muted-foreground font-medium hidden sm:inline-block">
            Interactive Live Demo
          </span>
        </div>

        {tab === "preview" ? (
          <div className="relative rounded-2xl border bg-card/40 p-6 sm:p-10 flex items-center justify-center min-h-[380px] overflow-hidden shadow-xs">
            <div className="w-full flex items-center justify-center">
              <CardFlip />
            </div>
          </div>
        ) : (
          <div className="relative rounded-xl border bg-zinc-950 p-5 font-mono text-xs sm:text-sm text-zinc-100 overflow-x-auto shadow-sm">
            <pre><code>{usageCode}</code></pre>
          </div>
        )}
      </div>

      {/* Features Overview */}
      <div className="space-y-4 border-t pt-8">
        <h2 className="text-xl font-bold tracking-tight">Key Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl border bg-muted/20 space-y-1.5">
            <h3 className="font-semibold text-sm">React 19 & Tailwind CSS v4</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Designed from the ground up with native Tailwind CSS v4 design tokens and React 19 server/client boundaries.
            </p>
          </div>
          <div className="p-4 rounded-xl border bg-muted/20 space-y-1.5">
            <h3 className="font-semibold text-sm">Motion & Gestures</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Integrated fluid springs, gesture drag physics, and reduced-motion fallbacks for silky-smooth interactions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
