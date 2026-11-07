"use client";

import { useState } from "react";
import { Check, Copy, Box, Sparkles } from "lucide-react";
import { BorderBeam } from "@/components/ui/border-beam";

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

export default function BorderBeamDocPage() {
  const [tab, setTab] = useState<"preview" | "code">("preview");

  const usageCode = `import { BorderBeam } from "@/components/ui/border-beam";

export function BorderBeamDemo() {
  return (
    <div className="relative flex h-48 w-full max-w-sm flex-col items-center justify-center overflow-hidden rounded-2xl border bg-card p-6 shadow-md">
      <span className="text-xl font-bold tracking-tight">Border Beam</span>
      <p className="text-xs text-muted-foreground text-center mt-1">
        High-velocity neon laser traveling along the border.
      </p>
      <BorderBeam size={150} duration={8} delay={9} />
    </div>
  );
}`;

  const cliInstallCode = `npx @alvinahmad/qalvinui add border-beam`;

  return (
    <div className="space-y-10 max-w-4xl">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-blue-500/10 text-blue-500 border border-blue-500/20">
            Card Effects
          </span>
          <span className="text-xs text-muted-foreground font-mono">ui/border-beam</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight">Border Beam</h1>
        <p className="text-lg text-muted-foreground">
          An animated laser beam traveling seamlessly along container borders, featuring custom gradient tails, anchors, and pulse driver physics.
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
          <div className="rounded-2xl border p-10 bg-card/40 flex items-center justify-center">
            <BorderBeam size="md" className="max-w-md w-full">
              <div className="relative flex h-52 w-full flex-col items-center justify-center overflow-hidden rounded-2xl border bg-background/80 backdrop-blur-md p-6 shadow-xl">
                <span className="text-2xl font-bold tracking-tight">Enterprise Pro</span>
                <p className="text-xs text-muted-foreground text-center mt-2 max-w-xs">
                  Active pulse beam running along the perimeter of the component.
                </p>
                <div className="mt-4 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                  Laser Highlight
                </div>
              </div>
            </BorderBeam>
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
                <td className="px-4 py-3 font-mono text-foreground font-semibold">className</td>
                <td className="px-4 py-3 font-mono text-xs">string</td>
                <td className="px-4 py-3 font-mono text-xs">-</td>
                <td className="px-4 py-3">Tailwind styling classes.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-foreground font-semibold">colorFrom</td>
                <td className="px-4 py-3 font-mono text-xs">string</td>
                <td className="px-4 py-3 font-mono text-xs">#ffaa40</td>
                <td className="px-4 py-3">Gradient start color for the traveling beam head.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-foreground font-semibold">colorTo</td>
                <td className="px-4 py-3 font-mono text-xs">string</td>
                <td className="px-4 py-3 font-mono text-xs">#9c40ff</td>
                <td className="px-4 py-3">Gradient tail color.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
