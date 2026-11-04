"use client";

import { useState } from "react";
import { Check, Copy, Zap, Sparkles, RefreshCw } from "lucide-react";
import { ImageGeneration } from "@/components/ui/img-fx";
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
  { id: "pixels-organic", label: "Chromium Flow", desc: "Organic fluid pixel mosaic melt" },
  { id: "pixels-mechanic", label: "Nebula Mechanic", desc: "Structured quantum grid crystallization" },
  { id: "sweep-gradient", label: "Gradient Sweep", desc: "Silky soft directional gradient reveal" },
];

export default function ImageFxDocPage() {
  const [tab, setTab] = useState<"preview" | "code">("preview");
  const [preset, setPreset] = useState<string>("pixels-organic");

  const usageCode = `import { ImageGeneration } from "@/components/ui/img-fx";

export function ImageGenerationDemo() {
  return (
    <div className="relative w-80 h-80 rounded-2xl overflow-hidden border">
      <ImageGeneration
        preset="${preset}"   // "pixels-organic" | "pixels-mechanic" | "sweep-gradient"
        imageUrl="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800"
        theme="dark"
        loading={false}
      />
    </div>
  );
}`;

  const cliInstallCode = `npx @alvinahmad/qalvinui add img-fx`;

  return (
    <div className="space-y-10 max-w-4xl">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-purple-500/10 text-purple-500 border border-purple-500/20">
            AI Image FX
          </span>
          <span className="text-xs text-muted-foreground font-mono">ui/img-fx</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight">Image FX</h1>
        <p className="text-lg text-muted-foreground">
          Animated WebGL image-generation & reveal effects for AI cards, featuring dynamic mosaic cells, palette sampling, and custom easing transitions.
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
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 py-6">
              <div className="relative w-72 h-72 rounded-2xl overflow-hidden border border-border/60 shadow-xl bg-zinc-950">
                <ImageGeneration
                  key={preset}
                  preset={preset as any}
                  theme="auto"
                  className="w-full h-full"
                >
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-zinc-900/60">
                    <Sparkles className="w-10 h-10 text-purple-400 mb-2 animate-pulse" />
                    <span className="text-sm font-semibold text-white">AI Neural Canvas</span>
                    <span className="text-xs text-zinc-400 mt-1">Ready for generation</span>
                  </div>
                </ImageGeneration>
              </div>

              <div className="max-w-xs space-y-3">
                <h4 className="font-semibold text-sm">GPU Reveal Shader</h4>
                <p className="text-xs text-muted-foreground">
                  The shader continuously runs an animated noise mosaic grid that automatically extracts the vibrant color palette and dissolves into the generated image.
                </p>
                <div className="pt-2 flex flex-col gap-1 text-[11px] font-mono text-muted-foreground">
                  <span>• Preset: {preset}</span>
                  <span>• WebGL Canvas DPR: High DPI</span>
                  <span>• Frame Rate: 60 FPS capped</span>
                </div>
              </div>
            </div>

            {/* Presets */}
            <div className="space-y-2">
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Select Reveal Shader Preset
              </div>
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
                <td className="px-4 py-3 font-mono text-xs">PresetName</td>
                <td className="px-4 py-3 font-mono text-xs">"pixels-organic"</td>
                <td className="px-4 py-3">Mosaic shader choreography profile.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-foreground font-semibold">imageUrl</td>
                <td className="px-4 py-3 font-mono text-xs">string</td>
                <td className="px-4 py-3 font-mono text-xs">-</td>
                <td className="px-4 py-3">Target image URL revealed when generation completes.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-foreground font-semibold">theme</td>
                <td className="px-4 py-3 font-mono text-xs">"auto" | "light" | "dark"</td>
                <td className="px-4 py-3 font-mono text-xs">"auto"</td>
                <td className="px-4 py-3">Color theme mode for mosaic backgrounds.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-foreground font-semibold">loading</td>
                <td className="px-4 py-3 font-mono text-xs">boolean</td>
                <td className="px-4 py-3 font-mono text-xs">true</td>
                <td className="px-4 py-3">When true, loops generating cycle; when false, triggers reveal mask.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
