"use client";

import { useState } from "react";
import { ThreeDPlant } from "@/components/ui/three-d-plant";
import { InstallTabs } from "@/components/docs/install-tabs";
import { Eye, Code, Leaf } from "lucide-react";

export default function ThreeDPlantDocPage() {
  const [tab, setTab] = useState<"preview" | "code">("preview");

  const usageCode = `import { ThreeDPlant } from "@/components/ui/3d-plant";

export function PlantDemo() {
  return (
    <ThreeDPlant height="640px">
      {/* Optional overlay elements */}
      <div className="space-y-3 bg-black/60 backdrop-blur-md p-6 rounded-2xl border border-white/10 text-white">
        <span className="text-xs uppercase tracking-widest text-emerald-400 font-semibold font-mono">
          Living World Landscape
        </span>
        <h1 className="text-2xl sm:text-3xl font-bold">Sylva — Into the Living World</h1>
        <p className="text-sm text-zinc-300">
          Restoring wild places through patient design, native planting, and procedural Three.js botany.
        </p>
      </div>
    </ThreeDPlant>
  );
}`;

  return (
    <div className="space-y-10 max-w-4xl pb-16">
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
            WebGL & 3D Environment
          </span>
          <span className="text-xs text-muted-foreground font-mono">ui/3d-plant</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">3D Plant (Sylva)</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Interactive 3D procedural moss & living world landscape with swept tube root geometry, instanced moss blades, cursor-reactive pollen trails, and interactive butterflies.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Installation</h2>
        <InstallTabs slug="3d-plant" />
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
            <ThreeDPlant height="580px">
              <div className="space-y-2 bg-black/60 backdrop-blur-md p-4 sm:p-6 rounded-2xl border border-white/10 text-white shadow-xl">
                <span className="text-xs uppercase tracking-widest text-emerald-400 font-semibold font-mono flex items-center gap-1.5">
                  <Leaf className="size-3 text-emerald-400" />
                  Procedural Botany & Moss
                </span>
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight">Sylva — Living World</h2>
                <p className="text-xs sm:text-sm text-zinc-300 line-clamp-2">
                  Gerakkan kursor di atas rumput dan lumut untuk melihat efek pollen trail interaktif dan respon kupu-kupu secara realtime.
                </p>
              </div>
            </ThreeDPlant>
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
