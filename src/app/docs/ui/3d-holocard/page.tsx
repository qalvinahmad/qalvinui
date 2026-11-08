"use client";

import { useState } from "react";
import { ThreeDHolocard } from "@/components/ui/three-d-holocard";
import { InstallTabs } from "@/components/docs/install-tabs";
import { Eye, Code, Sparkles } from "lucide-react";

export default function ThreeDHolocardDocPage() {
  const [tab, setTab] = useState<"preview" | "code">("preview");

  const usageCode = `import { ThreeDHolocard } from "@/components/ui/3d-holocard";

export function HolocardDemo() {
  return (
    <div className="flex justify-center p-6">
      <ThreeDHolocard height="580px" />
    </div>
  );
}`;

  return (
    <div className="space-y-10 max-w-4xl pb-16">
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-500 border border-amber-500/20">
            Shaders & Cards
          </span>
          <span className="text-xs text-muted-foreground font-mono">ui/3d-holocard</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">3D Holocard</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Interactive 3D holographic collectible trading card (The Ashen One). Custom WebGL shaders, gold filigree, runes, specular glints, pointer-tilt, drag-rotate, and double-click flip.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Installation</h2>
        <InstallTabs slug="3d-holocard" />
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
            <ThreeDHolocard height="580px" />
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
