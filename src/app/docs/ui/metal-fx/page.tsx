"use client";

import { useState } from "react";
import { Check, Copy, Sparkles, Layers, Cpu, ShieldCheck, Zap } from "lucide-react";
import { MetalFx } from "@/components/ui/metal-fx";
import type { MetalFxPreset, MetalFxVariant } from "@/components/ui/metal-fx/types";
import { cn } from "@/lib/utils";

function CodeBlock({ code, language = "tsx" }: { code: string; language?: string }) {
  const [copied, setCopied] = useState(false);

  const onCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative rounded-lg border bg-muted/50 p-4 font-mono text-sm">
      <div className="absolute right-4 top-4">
        <button
          type="button"
          onClick={onCopy}
          aria-label={copied ? "Code copied to clipboard" : "Copy code"}
          className="flex h-8 w-8 items-center justify-center rounded-md border border-border bg-background text-muted-foreground transition-[color,background-color,transform] duration-150 hover:bg-muted hover:text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 active:scale-[0.96] motion-reduce:active:scale-100 cursor-pointer"
        >
          {copied ? <Check className="h-4 w-4 text-emerald-500" /> : <Copy className="h-4 w-4" />}
        </button>
      </div>
      <pre className="overflow-x-auto">
        <code className="text-foreground/80">{code}</code>
      </pre>
    </div>
  );
}

const PRESETS: { id: MetalFxPreset; label: string; desc: string }[] = [
  { id: "chromatic", label: "Chromatic Liquid", desc: "Prismatic oil-slick and iridescent light dispersion" },
  { id: "silver", label: "Silver Chrome", desc: "Pure liquid mercury mirror reflections" },
  { id: "gold", label: "24K Gold", desc: "Warm luxury specular metallic sheen" },
];

export default function MetalFxDocPage() {
  const [tab, setTab] = useState<"preview" | "code">("preview");
  const [preset, setPreset] = useState<MetalFxPreset>("chromatic");
  const [variant, setVariant] = useState<MetalFxVariant>("button");
  const [clicks, setClicks] = useState(0);

  const usageCode = `import { MetalFx } from "@/components/ui/metal-fx";

export function MetalFxDemo() {
  return (
    <MetalFx preset="${preset}" variant="${variant}">
      <button className="px-6 py-3 rounded-full bg-zinc-950 text-white font-semibold text-sm border border-zinc-800 shadow-2xl flex items-center gap-2">
        <span>Initialize Engine</span>
      </button>
    </MetalFx>
  );
}`;

  const cliInstallCode = `npx @alvinahmad/qalvinui add metal-fx`;

  return (
    <div className="space-y-10 max-w-4xl">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-yellow-500/10 text-yellow-500 border border-yellow-500/20">
            WebGL Shaders
          </span>
          <span className="text-xs text-muted-foreground font-mono">ui/metal-fx</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight">Metal FX</h1>
        <p className="text-lg text-muted-foreground">
          Real-time GPU shader materials simulating liquid mercury, polished chrome, and gold surface reflections that react dynamically to cursor movements and lighting.
        </p>
      </div>

      {/* Tabs */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 border-b">
          <button
            onClick={() => setTab("preview")}
            className={`pb-2 px-3 text-sm font-medium border-b-2 transition-colors cursor-pointer ${
              tab === "preview"
                ? "border-primary text-foreground"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            Preview
          </button>
          <button
            onClick={() => setTab("code")}
            className={`pb-2 px-3 text-sm font-medium border-b-2 transition-colors cursor-pointer ${
              tab === "code"
                ? "border-primary text-foreground"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            Code
          </button>
        </div>

        {tab === "preview" ? (
          <div className="rounded-2xl border p-8 sm:p-12 bg-card/40 space-y-8 flex flex-col items-center justify-center">
            {/* Stage */}
            <div className="w-full flex flex-col items-center justify-center py-10 px-6 rounded-2xl bg-zinc-950 border border-zinc-800/80 relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900/60 via-zinc-950 to-black pointer-events-none" />

              <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-8">
                {/* Main Action Button with MetalFx */}
                <MetalFx
                  key={`${preset}-${variant}`}
                  preset={preset}
                  variant={variant}
                >
                  <button
                    onClick={() => setClicks((c) => c + 1)}
                    className={cn(
                      "transition-all duration-200 cursor-pointer flex items-center justify-center gap-2.5 font-medium shadow-2xl",
                      variant === "button"
                        ? "px-8 py-3.5 rounded-full bg-zinc-900 hover:bg-zinc-850 text-white text-sm border border-zinc-800"
                        : "w-16 h-16 rounded-full bg-zinc-900 text-white text-base border border-zinc-800"
                    )}
                  >
                    {variant === "button" ? (
                      <>
                        <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
                        <span>Interactive Specular ({clicks} clicks)</span>
                      </>
                    ) : (
                      <Zap className="w-6 h-6 text-amber-400" />
                    )}
                  </button>
                </MetalFx>

                {/* Second MetalFx Element to demonstrate shared WebGL loop */}
                {variant === "button" && (
                  <MetalFx
                    key={`${preset}-circle-sample`}
                    preset={preset}
                    variant="circle"
                  >
                    <button
                      onClick={() => setClicks((c) => c + 1)}
                      className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white cursor-pointer hover:scale-105 transition-transform"
                    >
                      <Cpu className="w-5 h-5 text-zinc-300" />
                    </button>
                  </MetalFx>
                )}
              </div>

              <p className="relative z-10 text-xs text-zinc-400 mt-8 text-center max-w-sm">
                Move your cursor across the button to watch the real-time specular reflections track pointer coordinates.
              </p>
            </div>

            {/* Controls */}
            <div className="w-full space-y-4">
              <div className="space-y-2">
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Preset Material
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {PRESETS.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => setPreset(p.id)}
                      className={cn(
                        "p-3 rounded-xl border text-left text-xs transition-all cursor-pointer",
                        preset === p.id
                          ? "bg-foreground text-background border-foreground shadow-sm font-semibold"
                          : "bg-muted/30 hover:bg-muted text-muted-foreground hover:text-foreground font-medium"
                      )}
                    >
                      <div>{p.label}</div>
                      <div className="text-[10px] opacity-75 truncate">{p.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2 text-xs">
                <span className="text-muted-foreground font-medium">Shape Variant:</span>
                {(["button", "circle"] as const).map((v) => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={cn(
                      "px-3 py-1 rounded-md text-xs font-medium cursor-pointer transition-colors capitalize",
                      variant === v ? "bg-foreground text-background" : "bg-muted text-muted-foreground"
                    )}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <CodeBlock code={usageCode} />
        )}
      </div>

      {/* Installation */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold tracking-tight">Installation</h2>
        <CodeBlock code={cliInstallCode} language="bash" />
      </div>

      {/* Props */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold tracking-tight">Props Reference</h2>
        <div className="rounded-xl border overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-muted/50 border-b text-xs uppercase text-muted-foreground">
              <tr>
                <th className="px-4 py-3">Prop</th>
                <th className="px-4 py-3">Type</th>
                <th className="px-4 py-3">Default</th>
                <th className="px-4 py-3">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y text-muted-foreground">
              <tr>
                <td className="px-4 py-3 font-mono text-foreground font-semibold">preset</td>
                <td className="px-4 py-3 font-mono text-xs">"chromatic" | "silver" | "gold"</td>
                <td className="px-4 py-3 font-mono text-xs">"chromatic"</td>
                <td className="px-4 py-3">Metal shader material profile.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-foreground font-semibold">variant</td>
                <td className="px-4 py-3 font-mono text-xs">"button" | "circle"</td>
                <td className="px-4 py-3 font-mono text-xs">"button"</td>
                <td className="px-4 py-3">Controls sampling scale and border ring profile.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-foreground font-semibold">children</td>
                <td className="px-4 py-3 font-mono text-xs">ReactNode</td>
                <td className="px-4 py-3 font-mono text-xs">-</td>
                <td className="px-4 py-3">Single host element wrapped by the metallic shader border.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
