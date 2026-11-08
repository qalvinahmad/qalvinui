"use client";

import { useState } from "react";
import { ThreeDSpace, StructureFlowCollection } from "@/components/ui/three-d-space";
import { InstallTabs } from "@/components/docs/install-tabs";
import { Eye, Code, Sparkles, Orbit } from "lucide-react";

export default function ThreeDSpaceDocPage() {
  const [tab, setTab] = useState<"preview" | "code">("preview");

  const usageCode = `import { ThreeDSpace, StructureFlowCollection } from "@/components/ui/3d-space";

export function SpaceDemo() {
  return (
    <ThreeDSpace
      variant="nebula"
      hue={0}
      saturation={1.00}
      brightness={1.00}
      height="640px"
      showControls={true}
    >
      {/* Optional overlay elements */}
      <div className="space-y-2 bg-black/60 backdrop-blur-md p-4 sm:p-6 rounded-2xl border border-white/10 text-white max-w-md">
        <span className="text-xs uppercase tracking-widest text-indigo-400 font-semibold font-mono flex items-center gap-1.5">
          <Sparkles className="size-3 text-indigo-400" />
          WebGL Deep Space Nebula
        </span>
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight">Digital Craftsman</h2>
        <p className="text-xs sm:text-sm text-zinc-300">
          Latar belakang nebula ungu indigo berbasis shader GLSL dengan pergerakan kursor interaktif dan tipografi Newsreader elegan.
        </p>
      </div>
    </ThreeDSpace>
  );
}`;

  return (
    <div className="space-y-10 max-w-4xl pb-16">
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            WebGL & GLSL Shaders
          </span>
          <span className="text-xs text-muted-foreground font-mono">ui/3d-space</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">3D Space (Indigo Nebula)</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Interactive deep indigo nebula WebGL experience. Built with Simplex Noise FBM warp coordinate mathematics, interactive pointer light drift, dynamic breathing pulses, and GSAP choreographed text reveals.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Installation</h2>
        <InstallTabs slug="3d-space" />
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
            <ThreeDSpace height="600px" />
          </div>
        ) : (
          <pre className="p-4 rounded-xl bg-zinc-950 text-zinc-100 font-mono text-xs sm:text-sm overflow-x-auto border border-zinc-800">
            <code>{usageCode}</code>
          </pre>
        )}
      </div>

      {/* Feature cards */}
      <div className="space-y-4 pt-4 border-t">
        <h2 className="text-xl font-bold tracking-tight">Architecture & Shader Highlights</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl border border-border bg-card space-y-1.5">
            <h3 className="font-semibold text-sm">FBM Noise Coordinate Warping</h3>
            <p className="text-xs text-muted-foreground">
              Empat lapis Fractional Brownian Motion menciptakan gelombang gas kosmik alami dengan responsivitas kursor halus.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-border bg-card space-y-1.5">
            <h3 className="font-semibold text-sm">Analog Film Grain & Vignette</h3>
            <p className="text-xs text-muted-foreground">
              Overlay SVG fractal noise mikroskopis menghasilkan tekstur permukaan organik tanpa membebani GPU.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-border bg-card space-y-1.5">
            <h3 className="font-semibold text-sm">GSAP Masked Typography</h3>
            <p className="text-xs text-muted-foreground">
              Animasi teks terpotong rapi dengan pelacakan scroll viewport dan transisi ease power4 yang sangat mulus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
