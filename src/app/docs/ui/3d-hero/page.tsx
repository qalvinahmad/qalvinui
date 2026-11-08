"use client";

import { useState } from "react";
import { ThreeDHero } from "@/components/ui/three-d-hero";
import { InstallTabs } from "@/components/docs/install-tabs";
import { Eye, Code, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ThreeDHeroDocPage() {
  const [tab, setTab] = useState<"preview" | "code">("preview");

  const usageCode = `import { ThreeDHero } from "@/components/ui/3d-hero";

export function HeroDemo() {
  return (
    <ThreeDHero height="640px">
      {/* Optional overlay elements */}
      <div className="space-y-3 bg-black/60 backdrop-blur-md p-6 rounded-2xl border border-white/10 text-white">
        <span className="text-xs uppercase tracking-widest text-red-400 font-semibold font-mono">
          Interactive WebGL
        </span>
        <h1 className="text-2xl sm:text-3xl font-bold">Kage — Night Walk</h1>
        <p className="text-sm text-zinc-300">
          A five-chapter night walk through a Kyoto mountain temple rendered live in WebGL.
        </p>
      </div>
    </ThreeDHero>
  );
}`;

  return (
    <div className="space-y-10 max-w-4xl pb-16">
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-red-500/10 text-red-500 border border-red-500/20">
            WebGL & 3D Hero
          </span>
          <span className="text-xs text-muted-foreground font-mono">ui/3d-hero</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">3D Hero (Kage)</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Interactive 3D Kyoto mountain temple night walk with charred cypress, lantern light, vermilion moon, live WebGL rendering, and audio atmosphere.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Installation</h2>
        <InstallTabs slug="3d-hero" />
      </div>

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
        </div>

        {tab === "preview" ? (
          <div className="p-2 sm:p-4 rounded-2xl border border-border/70 bg-muted/20">
            <ThreeDHero height="580px">
              <div className="space-y-2 bg-black/60 backdrop-blur-md p-4 sm:p-6 rounded-2xl border border-white/10 text-white shadow-xl">
                <span className="text-xs uppercase tracking-widest text-red-400 font-semibold font-mono">
                  Kyoto Night Walk
                </span>
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight">Kage — 影</h2>
                <p className="text-xs sm:text-sm text-zinc-300 line-clamp-2">
                  Gerakkan kursor atau klik chapter untuk menjelajahi kuil Kyoto dalam WebGL 3D interaktif.
                </p>
              </div>
            </ThreeDHero>
          </div>
        ) : (
          <pre className="p-4 rounded-xl bg-zinc-950 text-zinc-100 font-mono text-xs sm:text-sm overflow-x-auto border border-zinc-800">
            <code>{usageCode}</code>
          </pre>
        )}
      </div>
    </div>
  );
}
