"use client";

import { useState } from "react";
import { Check, Copy, Flame, Sparkles } from "lucide-react";
import { Liquid } from "@/components/ui/liquid-gooey";

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

export default function LiquidGooeyDocPage() {
  const [tab, setTab] = useState<"preview" | "code">("preview");

  const usageCode = `import { Liquid } from "@/components/ui/liquid-gooey";

export function LiquidGooeyDemo() {
  return (
    <Liquid className="relative flex items-center justify-center gap-6 p-10">
      <Liquid.Item className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-rose-500 to-amber-500 shadow-xl flex items-center justify-center text-white font-bold">
        1
      </Liquid.Item>
      <Liquid.Item className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-rose-500 to-amber-500 shadow-xl flex items-center justify-center text-white font-bold">
        2
      </Liquid.Item>
    </Liquid>
  );
}`;

  const cliInstallCode = `npx @alvinahmad/qalvinui add liquid-gooey`;

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
          Fluid metaball merge and molten elasticity for React. Combines SVG-filter silhouette layers with crisp foreground content and realistic fluid drop-shadows.
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
          <div className="rounded-2xl border p-12 bg-card/40 flex flex-col items-center justify-center gap-6">
            <div className="relative flex items-center justify-center gap-8 py-8">
              <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-rose-500 to-amber-500 shadow-2xl flex items-center justify-center text-white font-bold text-lg animate-bounce">
                Fluid A
              </div>
              <div className="w-24 h-24 rounded-3xl bg-gradient-to-tr from-pink-500 to-rose-600 shadow-2xl flex items-center justify-center text-white font-bold text-lg animate-pulse">
                Fluid B
              </div>
            </div>
            <p className="text-xs text-muted-foreground text-center">
              Items render merged gooey metaballs when touching and preserve sharp crisp text inside.
            </p>
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
                <td className="px-4 py-3 font-mono text-foreground font-semibold">children</td>
                <td className="px-4 py-3 font-mono text-xs">ReactNode</td>
                <td className="px-4 py-3 font-mono text-xs">-</td>
                <td className="px-4 py-3">The Liquid.Item elements contained within the fluid container.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-foreground font-semibold">className</td>
                <td className="px-4 py-3 font-mono text-xs">string</td>
                <td className="px-4 py-3 font-mono text-xs">-</td>
                <td className="px-4 py-3">Tailwind styling classes.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
