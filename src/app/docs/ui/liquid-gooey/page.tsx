"use client";

import { useState } from "react";
import { Check, Copy, Flame, Sparkles, Layers, Sliders, RefreshCw, Plus, Minus } from "lucide-react";
import { Liquid } from "@/components/ui/liquid-gooey";
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

const COLORS = [
  { id: "#6366f1", label: "Indigo", bg: "bg-indigo-500" },
  { id: "#f43f5e", label: "Rose", bg: "bg-rose-500" },
  { id: "#10b981", label: "Emerald", bg: "bg-emerald-500" },
  { id: "#8b5cf6", label: "Violet", bg: "bg-violet-500" },
];

export default function LiquidGooeyDocPage() {
  const [tab, setTab] = useState<"preview" | "code">("preview");
  const [isSplit, setIsSplit] = useState(false);
  const [distance, setDistance] = useState(40);
  const [blur, setBlur] = useState(8);
  const [contrast, setContrast] = useState(20);
  const [fillColor, setFillColor] = useState("#6366f1");

  const usageCode = `import { Liquid } from "@/components/ui/liquid-gooey";
import { useState } from "react";

export function LiquidGooeyDemo() {
  const [open, setOpen] = useState(false);

  return (
    <Liquid
      blur={${blur}}
      contrast={${contrast}}
      fill="${fillColor}"
      shadow="0 8px 24px rgba(0,0,0,0.18)"
      className="relative flex items-center justify-center min-h-[220px]"
    >
      <Liquid.Item
        x={open ? -60 : 0}
        transition="bouncy"
      >
        <button
          onClick={() => setOpen(!open)}
          className="w-16 h-16 rounded-full text-white font-bold flex items-center justify-center shadow-lg"
        >
          {open ? "1" : "Menu"}
        </button>
      </Liquid.Item>

      <Liquid.Item
        x={open ? 60 : 0}
        transition="bouncy"
      >
        <button
          onClick={() => setOpen(!open)}
          className="w-16 h-16 rounded-full text-white font-bold flex items-center justify-center shadow-lg"
        >
          2
        </button>
      </Liquid.Item>
    </Liquid>
  );
}`;

  const cliInstallCode = `npx @alvinahmad/qalvinui add liquid-gooey`;

  // Calculated coordinates based on state or slider
  const leftX = isSplit ? -Math.max(distance, 50) : -distance / 2;
  const rightX = isSplit ? Math.max(distance, 50) : distance / 2;

  return (
    <div className="space-y-10 max-w-4xl">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-rose-500/10 text-rose-500 border border-rose-500/20">
            Fluid Physics
          </span>
          <span className="text-xs text-muted-foreground font-mono">ui/liquid-gooey</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight">Liquid Gooey</h1>
        <p className="text-lg text-muted-foreground">
          Fluid metaball fusion and molten elasticity for React UI. Renders dynamic SVG-filter silhouette layers behind crisp DOM content with realistic fluid bridging.
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
            {/* Interactive Liquid Canvas */}
            <div className="w-full flex flex-col items-center justify-center min-h-[300px] rounded-2xl bg-muted/20 border border-border/50 relative overflow-hidden p-8">
              <Liquid
                key={`${blur}-${contrast}-${fillColor}`}
                blur={blur}
                contrast={contrast}
                fill={fillColor}
                shadow="0 10px 30px rgba(0,0,0,0.22)"
                className="relative flex items-center justify-center w-full min-h-[160px]"
              >
                {/* Droplet 1 */}
                <Liquid.Item
                  x={leftX}
                  transition="bouncy"
                >
                  <button
                    onClick={() => setIsSplit(!isSplit)}
                    className="w-16 h-16 rounded-full text-white font-bold flex flex-col items-center justify-center cursor-pointer transition-transform hover:scale-105 active:scale-95 shadow-md"
                  >
                    <Flame className="w-5 h-5 mb-0.5" />
                    <span className="text-[10px]">Blob A</span>
                  </button>
                </Liquid.Item>

                {/* Droplet 2 */}
                <Liquid.Item
                  x={rightX}
                  transition="bouncy"
                >
                  <button
                    onClick={() => setIsSplit(!isSplit)}
                    className="w-16 h-16 rounded-full text-white font-bold flex flex-col items-center justify-center cursor-pointer transition-transform hover:scale-105 active:scale-95 shadow-md"
                  >
                    <Sparkles className="w-5 h-5 mb-0.5" />
                    <span className="text-[10px]">Blob B</span>
                  </button>
                </Liquid.Item>
              </Liquid>

              <div className="mt-8 flex items-center gap-3">
                <button
                  onClick={() => setIsSplit(!isSplit)}
                  className="px-5 py-2 rounded-xl bg-foreground text-background font-medium text-xs shadow cursor-pointer hover:opacity-90 transition-opacity"
                >
                  {isSplit ? "Merge Droplets" : "Split Droplets"}
                </button>
                <span className="text-xs text-muted-foreground">or drag slider below</span>
              </div>
            </div>

            {/* Interactive Controls */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {/* Distance Slider */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-muted-foreground">Droplet Distance</span>
                  <span className="font-mono text-muted-foreground">{distance}px</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="120"
                  value={distance}
                  onChange={(e) => {
                    setDistance(Number(e.target.value));
                    setIsSplit(false);
                  }}
                  className="w-full accent-primary cursor-pointer"
                />
                <p className="text-[11px] text-muted-foreground">
                  Move slider to observe liquid surface bridge and necking dynamics.
                </p>
              </div>

              {/* Viscosity (Blur) */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-muted-foreground">Gooey Viscosity (Blur)</span>
                  <span className="font-mono text-muted-foreground">{blur}px</span>
                </div>
                <input
                  type="range"
                  min="4"
                  max="16"
                  value={blur}
                  onChange={(e) => setBlur(Number(e.target.value))}
                  className="w-full accent-primary cursor-pointer"
                />
                <p className="text-[11px] text-muted-foreground">
                  Controls how far apart blobs begin fusing together.
                </p>
              </div>

              {/* Color Theme */}
              <div className="space-y-2 sm:col-span-2">
                <span className="text-xs font-semibold text-muted-foreground">Liquid Color Theme</span>
                <div className="flex flex-wrap gap-2 pt-1">
                  {COLORS.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => setFillColor(c.id)}
                      className={cn(
                        "px-3 py-1.5 rounded-lg border text-xs font-medium flex items-center gap-2 cursor-pointer transition-colors",
                        fillColor === c.id
                          ? "border-foreground bg-muted text-foreground"
                          : "border-border text-muted-foreground hover:text-foreground"
                      )}
                    >
                      <span className={cn("w-3 h-3 rounded-full", c.bg)} />
                      <span>{c.label}</span>
                    </button>
                  ))}
                </div>
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
                <td className="px-4 py-3 font-mono text-foreground font-semibold">blur</td>
                <td className="px-4 py-3 font-mono text-xs">number</td>
                <td className="px-4 py-3 font-mono text-xs">6</td>
                <td className="px-4 py-3">Goo blur sigma in px — how far apart pieces begin bridging.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-foreground font-semibold">contrast</td>
                <td className="px-4 py-3 font-mono text-xs">number</td>
                <td className="px-4 py-3 font-mono text-xs">18</td>
                <td className="px-4 py-3">Alpha-contrast slope determining edge sharpness of the liquid mass.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-foreground font-semibold">fill</td>
                <td className="px-4 py-3 font-mono text-xs">string</td>
                <td className="px-4 py-3 font-mono text-xs">"#fff"</td>
                <td className="px-4 py-3">Fill color of the merged liquid silhouette.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-foreground font-semibold">shadow</td>
                <td className="px-4 py-3 font-mono text-xs">string</td>
                <td className="px-4 py-3 font-mono text-xs">-</td>
                <td className="px-4 py-3">Standard box-shadow string rendered on the merged silhouette.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
