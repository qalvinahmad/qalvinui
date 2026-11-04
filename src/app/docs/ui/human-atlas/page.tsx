"use client";

import { useState } from "react";
import { Check, Copy, Layers, Compass, Eye, Sparkles } from "lucide-react";
import { HumanAtlas } from "@/components/ui/human-atlas";

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

export default function HumanAtlasDocPage() {
  const [tab, setTab] = useState<"preview" | "code">("preview");

  const usageCode = `import { HumanAtlas } from "@/components/ui/human-atlas";

export function HumanAtlasDemo() {
  return (
    <HumanAtlas
      defaultSystem="skeletal"
      interactive={true}
      onSystemSelect={(system) => console.log("Selected:", system.name)}
    />
  );
}`;

  const cliInstallCode = `npx @alvinahmad/qalvinui add human-atlas`;

  return (
    <div className="space-y-10 max-w-4xl">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-amber-500/10 text-amber-500 border border-amber-500/20">
            3D WebGL
          </span>
          <span className="text-xs text-muted-foreground font-mono">ui/human-atlas</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight">Human Atlas</h1>
        <p className="text-lg text-muted-foreground">
          3D interactive anatomy & organ system visualization with multi-layer segmentation, orbit and exploded views, and anatomical telemetry.
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
          <div className="rounded-2xl border p-4 sm:p-6 bg-card/40">
            <HumanAtlas />
          </div>
        ) : (
          <CodeBlock code={usageCode} />
        )}
      </div>

      {/* Installation */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold tracking-tight">Installation</h2>
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">Add via Qalvin UI CLI:</p>
          <CodeBlock code={cliInstallCode} language="bash" />
        </div>
      </div>

      {/* Props Reference */}
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
                <td className="px-4 py-3 font-mono text-foreground font-semibold">defaultSystem</td>
                <td className="px-4 py-3 font-mono text-xs">string</td>
                <td className="px-4 py-3 font-mono text-xs">"skeletal"</td>
                <td className="px-4 py-3">Initial active anatomy layer (skeletal, muscular, nervous, cardiovascular, digestive).</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-foreground font-semibold">interactive</td>
                <td className="px-4 py-3 font-mono text-xs">boolean</td>
                <td className="px-4 py-3 font-mono text-xs">true</td>
                <td className="px-4 py-3">Enables orbit drag, zoom, and layer selection interactions.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-foreground font-semibold">onSystemSelect</td>
                <td className="px-4 py-3 font-mono text-xs">{"(system) => void"}</td>
                <td className="px-4 py-3 font-mono text-xs">-</td>
                <td className="px-4 py-3">Callback triggered when an anatomical system layer is selected.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
