"use client";

import React, { useState } from "react";
import { Check, Copy, ExternalLink, Calendar, Grid, List } from "lucide-react";
import {
  SegmentedControl,
  SegmentedControlItem,
} from "@/components/ui/segmented-control";
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

export default function SegmentedControlDocPage() {
  const [tab, setTab] = useState<"preview" | "code">("preview");
  const [copiedMarkdown, setCopiedMarkdown] = useState(false);
  const [billing, setBilling] = useState("monthly");

  const copyMarkdown = () => {
    navigator.clipboard.writeText(`# Segmented Control\n\nA linear set of two or more segments, each functioning as a mutually exclusive option.\n\n\`\`\`tsx\nimport { SegmentedControl, SegmentedControlItem } from "@/components/ui/segmented-control";\n\`\`\``);
    setCopiedMarkdown(true);
    toast.success("Markdown copied to clipboard");
    setTimeout(() => setCopiedMarkdown(false), 2000);
  };

  const previewCode = `import {
  SegmentedControl,
  SegmentedControlItem,
} from "@/components/ui/segmented-control";

export function SegmentedControlDemo() {
  const [value, setValue] = useState("monthly");

  return (
    <SegmentedControl value={value} onValueChange={setValue}>
      <SegmentedControlItem value="monthly">Monthly</SegmentedControlItem>
      <SegmentedControlItem value="annually">Annually</SegmentedControlItem>
      <SegmentedControlItem value="lifetime">Lifetime</SegmentedControlItem>
    </SegmentedControl>
  );
}`;

  return (
    <div className="mx-auto w-full min-w-0 max-w-3xl space-y-10 pb-16">
      <div className="space-y-4">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">Segmented Control</h1>
          <p className="text-lg text-muted-foreground">
            A linear set of two or more segments, each functioning as a mutually exclusive option.
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
          <div className="flex min-h-[350px] w-full flex-col items-center justify-center p-10 border rounded-2xl bg-background/50 shadow-xs space-y-4">
            <SegmentedControl value={billing} onValueChange={setBilling}>
              <SegmentedControlItem value="monthly">Monthly</SegmentedControlItem>
              <SegmentedControlItem value="annually">Annually (Save 20%)</SegmentedControlItem>
              <SegmentedControlItem value="lifetime">Lifetime</SegmentedControlItem>
            </SegmentedControl>
            <p className="text-xs text-muted-foreground">Selected plan: <span className="font-semibold text-foreground capitalize">{billing}</span></p>
          </div>
        ) : (
          <CodeBlock code={previewCode} />
        )}
      </div>

      <div className="space-y-4">
        <h2 id="installation" className="text-2xl font-bold tracking-tight">Installation</h2>
        <div className="relative rounded-lg border bg-muted/50 p-4 font-mono text-sm">
          <code>npx @alvinahmad/ui add segmented-control</code>
        </div>
      </div>

      <div className="space-y-4">
        <h2 id="usage" className="text-2xl font-bold tracking-tight">Usage</h2>
        <CodeBlock code={`import { SegmentedControl, SegmentedControlItem } from "@/components/ui/segmented-control";`} />
      </div>

      <div className="space-y-6">
        <h2 id="api-reference" className="text-2xl font-bold tracking-tight">API Reference</h2>
        
        <div className="space-y-2">
          <h3 id="segmentedcontrol" className="text-lg font-semibold">SegmentedControl</h3>
          <p className="text-sm text-muted-foreground">The track container providing pill background and active segment indicator.</p>
        </div>

        <div className="space-y-2">
          <h3 id="segmentedcontrolitem" className="text-lg font-semibold">SegmentedControlItem</h3>
          <p className="text-sm text-muted-foreground">Interactive segment button supporting keyboard focus and state synchronization.</p>
        </div>
      </div>
    </div>
  );
}
