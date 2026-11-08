"use client";

import { useState } from "react";
import { ThreeDWoven, WovenCloth } from "@/components/ui/three-d-woven";
import { InstallTabs } from "@/components/docs/install-tabs";
import { Eye, Code, Sparkles, Feather } from "lucide-react";

export default function ThreeDWovenDocPage() {
  const [tab, setTab] = useState<"preview" | "code">("preview");

  const usageCode = `import { ThreeDWoven, WovenCloth } from "@/components/ui/3d-woven";

export function WovenDemo() {
  return (
    <ThreeDWoven
      height="640px"
      hue={0}
      saturation={1.0}
      brightness={1.0}
      showControls={true}
    >
      {/* Optional overlay elements */}
      <div className="space-y-2 bg-black/60 backdrop-blur-md p-4 sm:p-6 rounded-2xl border border-white/10 text-[#e8dcc4] max-w-md">
        <span className="text-xs uppercase tracking-widest text-[#b02330] font-semibold font-mono flex items-center gap-1.5">
          <Sparkles className="size-3 text-[#b02330]" />
          Kinetic Textiles · Kyoto Studio
        </span>
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight">Realtime Cloth Physics</h2>
        <p className="text-xs sm:text-sm text-zinc-300">
          Simulasi kain interaktif dengan integrasi Verlet 3D, hembusan angin dinamis, serta tekstur benang tenun prosedural.
        </p>
      </div>
    </ThreeDWoven>
  );
}`;

  return (
    <div className="space-y-10 max-w-4xl pb-16">
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-rose-500/10 text-rose-500 border border-rose-500/20">
            WebGL & Physics Simulation
          </span>
          <span className="text-xs text-muted-foreground font-mono">ui/3d-woven</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">3D Woven (Kinetic Textiles)</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Interactive real-time 3D cloth physics simulation inspired by traditional Kyoto kinetic weaving mills. Driven by high-performance Verlet constraints, dynamic wind oscillations, procedural thread slub generation, and GSAP typography reveals.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Installation</h2>
        <InstallTabs slug="3d-woven" />
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
            <ThreeDWoven height="600px" />
          </div>
        ) : (
          <pre className="p-4 rounded-xl bg-zinc-950 text-zinc-100 font-mono text-xs sm:text-sm overflow-x-auto border border-zinc-800">
            <code>{usageCode}</code>
          </pre>
        )}
      </div>

      {/* Capabilities */}
      <div className="space-y-4 pt-4 border-t">
        <h2 className="text-xl font-bold tracking-tight">Physics & Engineering</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl border border-border bg-card space-y-1.5">
            <h3 className="font-semibold text-sm">Verlet Constraint Solver</h3>
            <p className="text-xs text-muted-foreground">
              Grid mesh 40×26 disimulasikan menggunakan integrasi numerik Verlet dengan relaksasi jarak partikel multi-pass berkecepatan 60 FPS.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-border bg-card space-y-1.5">
            <h3 className="font-semibold text-sm">Harmonic Wind Gusts</h3>
            <p className="text-xs text-muted-foreground">
              Vektor angin multi-frekuensi menciptakan gelombang kain organik dengan tarikan gravitasi dan redaman aerodinamis realistis.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-border bg-card space-y-1.5">
            <h3 className="font-semibold text-sm">Procedural Canvas Weave</h3>
            <p className="text-xs text-muted-foreground">
              Tekstur kain sutra & linen dirender secara prosedural di kanvas resolusi tinggi dengan noise serat katun dan tipografi Kyoto.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
