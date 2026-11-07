"use client";

import React, { useState } from "react";
import { Check, Copy, ExternalLink, HardDrive, Cpu, BatteryCharging } from "lucide-react";
import {
  Meter,
  MeterTrack,
  MeterIndicator,
  MeterLabel,
  MeterValue,
} from "@/components/ui/meter";
import { toast } from "sonner";

function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const onCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    toast.success("Code copied to clipboard");
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

export default function MeterDocPage() {
  const [tab, setTab] = useState<"preview" | "code">("preview");
  const [copiedMarkdown, setCopiedMarkdown] = useState(false);

  const copyMarkdown = () => {
    navigator.clipboard.writeText(`# Meter\n\nA graphical display of a numeric value within a range.\n\n\`\`\`tsx\nimport { Meter, MeterTrack, MeterIndicator, MeterLabel, MeterValue } from "@/components/ui/meter";\n\`\`\``);
    setCopiedMarkdown(true);
    toast.success("Markdown copied to clipboard");
    setTimeout(() => setCopiedMarkdown(false), 2000);
  };

  const previewCode = `import {
  Meter,
  MeterTrack,
  MeterIndicator,
  MeterLabel,
  MeterValue,
} from "@/components/ui/meter";

export function MeterDemo() {
  return (
    <Meter value={75} className="w-full max-w-sm">
      <div className="flex justify-between items-center text-sm font-medium mb-2">
        <MeterLabel>Storage usage</MeterLabel>
        <MeterValue />
      </div>
      <MeterTrack>
        <MeterIndicator />
      </MeterTrack>
    </Meter>
  );
}`;

  return (
    <div className="mx-auto w-full min-w-0 max-w-3xl space-y-10 pb-16">
      {/* Title & Actions */}
      <div className="space-y-4">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">Meter</h1>
          <p className="text-lg text-muted-foreground">
            A graphical display of a numeric value within a range.
          </p>
        </div>

        <div className="flex items-center gap-2 pt-2">
          <a
            href="https://base-ui.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border bg-background px-3 py-1.5 text-xs font-medium text-foreground hover:bg-muted transition-colors"
          >
            <ExternalLink className="h-3.5 w-3.5" /> API Reference
          </a>
          <button
            onClick={copyMarkdown}
            className="inline-flex items-center gap-1.5 rounded-md border bg-background px-3 py-1.5 text-xs font-medium text-foreground hover:bg-muted transition-colors cursor-pointer"
          >
            {copiedMarkdown ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
            Copy Markdown
          </button>
        </div>
      </div>

      {/* Main Interactive Preview */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 border-b">
          <button
            onClick={() => setTab("preview")}
            className={`pb-2 text-sm font-semibold border-b-2 cursor-pointer transition-colors ${
              tab === "preview" ? "border-foreground text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            Preview
          </button>
          <button
            onClick={() => setTab("code")}
            className={`pb-2 text-sm font-semibold border-b-2 cursor-pointer transition-colors ${
              tab === "code" ? "border-foreground text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            Code
          </button>
        </div>

        {tab === "preview" ? (
          <div className="flex min-h-[350px] w-full items-center justify-center p-10 border rounded-2xl bg-background/50 shadow-xs">
            <Meter value={75} className="w-full max-w-sm">
              <div className="flex justify-between items-center text-sm font-medium mb-2">
                <MeterLabel>Storage usage</MeterLabel>
                <MeterValue />
              </div>
              <MeterTrack>
                <MeterIndicator />
              </MeterTrack>
            </Meter>
          </div>
        ) : (
          <CodeBlock code={previewCode} />
        )}
      </div>

      {/* Installation */}
      <div className="space-y-4">
        <h2 id="installation" className="text-2xl font-bold tracking-tight">Installation</h2>
        <div className="relative rounded-lg border bg-muted/50 p-4 font-mono text-sm">
          <code>npx @alvinahmad/ui add meter</code>
        </div>
      </div>

      {/* Usage */}
      <div className="space-y-4">
        <h2 id="usage" className="text-2xl font-bold tracking-tight">Usage</h2>
        <CodeBlock code={`import { Meter, MeterTrack, MeterIndicator, MeterLabel, MeterValue } from "@/components/ui/meter";`} />
      </div>

      {/* API Reference */}
      <div className="space-y-6">
        <h2 id="api-reference" className="text-2xl font-bold tracking-tight">API Reference</h2>
        
        <div className="space-y-2">
          <h3 id="meter" className="text-lg font-semibold">Meter</h3>
          <p className="text-sm text-muted-foreground">The root meter component managing numeric value, min, and max attributes.</p>
        </div>

        <div className="space-y-2">
          <h3 id="metertrack" className="text-lg font-semibold">MeterTrack</h3>
          <p className="text-sm text-muted-foreground">The background track containing the fill bar indicator.</p>
        </div>

        <div className="space-y-2">
          <h3 id="meterindicator" className="text-lg font-semibold">MeterIndicator</h3>
          <p className="text-sm text-muted-foreground">The dynamic filled portion visualizing the current value ratio.</p>
        </div>

        <div className="space-y-2">
          <h3 id="meterlabel" className="text-lg font-semibold">MeterLabel</h3>
          <p className="text-sm text-muted-foreground">Accessible label element for describing the measured value.</p>
        </div>

        <div className="space-y-2">
          <h3 id="metervalue" className="text-lg font-semibold">MeterValue</h3>
          <p className="text-sm text-muted-foreground">Formatted numerical readout of the current value.</p>
        </div>
      </div>

      {/* Examples */}
      <div className="space-y-8">
        <h2 id="examples" className="text-2xl font-bold tracking-tight">Examples</h2>

        <div className="space-y-3">
          <h3 id="without-label-and-value" className="text-lg font-semibold">Without Label and Value</h3>
          <div className="p-6 border rounded-xl flex items-center justify-center">
            <Meter value={40} className="w-full max-w-sm">
              <MeterTrack>
                <MeterIndicator />
              </MeterTrack>
            </Meter>
          </div>
        </div>

        <div className="space-y-3">
          <h3 id="with-formatted-value" className="text-lg font-semibold">With Formatted Value</h3>
          <div className="p-6 border rounded-xl flex items-center justify-center">
            <Meter value={84} className="w-full max-w-sm">
              <div className="flex justify-between items-center text-sm font-medium mb-2">
                <span className="flex items-center gap-1.5"><Cpu className="h-4 w-4 text-muted-foreground" /> CPU Load</span>
                <span className="text-xs font-mono font-semibold">84%</span>
              </div>
              <MeterTrack className="h-2.5">
                <MeterIndicator className="bg-amber-500" />
              </MeterTrack>
            </Meter>
          </div>
        </div>

        <div className="space-y-3">
          <h3 id="with-range" className="text-lg font-semibold">With Range</h3>
          <div className="p-6 border rounded-xl flex items-center justify-center">
            <Meter value={18} min={0} max={30} className="w-full max-w-sm">
              <div className="flex justify-between items-center text-sm font-medium mb-2">
                <span>Temperature</span>
                <span className="text-xs font-mono">18°C / 30°C</span>
              </div>
              <MeterTrack>
                <MeterIndicator className="bg-emerald-500" />
              </MeterTrack>
            </Meter>
          </div>
        </div>
      </div>
    </div>
  );
}
