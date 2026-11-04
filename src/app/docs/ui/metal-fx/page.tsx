"use client";

import { useState } from "react";
import { Check, Copy, Sparkles, Layers } from "lucide-react";
import { MetalFx } from "@/components/ui/metal-fx";
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
          onClick={onCopy}
          className="flex h-8 w-8 items-center justify-center rounded-md border bg-background text-muted-foreground hover:bg-muted hover:text-foreground cursor-pointer"
        >
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </button>
      </div>
      <pre className="overflow-x-auto">
        <code className="text-foreground/80">{code}</code>
      </pre>
    </div>
  );
}

const PRESETS = [
  { id: "chrome", label: "Chrome", desc: "Reflective silver liquid mirror" },
  { id: "gold", label: "24K Gold", desc: "Warm luxury metallic sheen" },
  { id: "bronze", label: "Bronze", desc: "Deep copper burnished metallic" },
  { id: "iridescent", label: "Iridescent", desc: "Prismatic oil-slick dispersion" },
];

export default function MetalFxDocPage() {
  const [tab, setTab] = useState<"preview" | "code">("preview");
  const [preset, setPreset] = useState<string>("chrome");

  const usageCode = `import { MetalFx } from "@/components/ui/metal-fx";

export function MetalFxDemo() {
  return (
    <div className="relative h-64 w-full rounded-2xl overflow-hidden">
      <MetalFx
        preset="${preset}"   // "chrome" | "gold" | "bronze" | "iridescent"
        className="w-full h-full"
      />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h2 className="text-3xl font-extrabold text-white tracking-widest uppercase drop-shadow-md">
          Future Hardware
        </h2>
      </div>
    </div>
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
          Real-time GPU shader materials simulating liquid mercury, polished chrome, gold, and iridescent surface reflections that react dynamically to pointer movements.
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
          <div className="rounded-2xl border p-6 bg-card/40 space-y-6">
            <div className="relative h-72 w-full rounded-2xl overflow-hidden border border-border/50 bg-black shadow-xl">
              <MetalFx
                key={preset}
                preset={preset as any}
                className="w-full h-full"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none p-4 text-center">
                <span className="text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-black/60 border border-white/20 text-white/90 mb-2">
                  WebGL 2.0 Material
                </span>
                <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white drop-shadow-lg">
                  Next-Gen Surface
                </h3>
                <p className="text-xs text-white/70 mt-1 max-w-sm">
                  Hover and move your mouse across the canvas to interact with the specular light reflections
                </p>
              </div>
            </div>

            {/* Presets */}
            <div className="space-y-2">
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Select Metal Preset
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
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
                <td className="px-4 py-3 font-mono text-xs">string</td>
                <td className="px-4 py-3 font-mono text-xs">"chrome"</td>
                <td className="px-4 py-3">Metal shader material profile ("chrome", "gold", "bronze", "iridescent").</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-foreground font-semibold">className</td>
                <td className="px-4 py-3 font-mono text-xs">string</td>
                <td className="px-4 py-3 font-mono text-xs">-</td>
                <td className="px-4 py-3">Additional Tailwind styling classes for the WebGL canvas wrapper.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
