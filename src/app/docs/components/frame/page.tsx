"use client";

import React, { useState } from "react";
import { Check, Copy, ExternalLink, Sparkles, Layers, Sliders } from "lucide-react";
import { Frame, FramePanel, FrameHeader, FrameTitle, FrameDescription, FrameFooter } from "@/components/ui/frame";
import { Button } from "@/components/ui/button";
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

export default function FrameDocPage() {
  const [tab, setTab] = useState<"preview" | "code">("preview");
  const [copiedMarkdown, setCopiedMarkdown] = useState(false);

  const copyMarkdown = () => {
    navigator.clipboard.writeText(`# Frame\n\nA structural layout frame container for dashboards, canvas previews, and isolated UI panels.\n\n\`\`\`tsx\nimport { Frame, FramePanel, FrameHeader, FrameTitle, FrameDescription, FrameFooter } from "@/components/ui/frame";\n\`\`\``);
    setCopiedMarkdown(true);
    toast.success("Markdown copied to clipboard");
    setTimeout(() => setCopiedMarkdown(false), 2000);
  };

  const previewCode = `import { Frame, FramePanel, FrameHeader, FrameTitle, FrameDescription, FrameFooter } from "@/components/ui/frame";
import { Button } from "@/components/ui/button";

export function FrameDemo() {
  return (
    <Frame className="w-full max-w-md">
      <FrameHeader>
        <FrameTitle>Project Canvas</FrameTitle>
        <FrameDescription>Interactive canvas workspace with isolated viewport</FrameDescription>
      </FrameHeader>
      <FramePanel className="h-44 flex items-center justify-center bg-muted/30">
        <span className="text-xs text-muted-foreground">Interactive Viewport Canvas</span>
      </FramePanel>
      <FrameFooter className="flex justify-between items-center">
        <span className="text-xs text-muted-foreground">Status: Ready</span>
        <Button size="sm">Export View</Button>
      </FrameFooter>
    </Frame>
  );
}`;

  return (
    <div className="mx-auto w-full min-w-0 max-w-3xl space-y-10 pb-16">
      <div className="space-y-4">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">Frame</h1>
          <p className="text-lg text-muted-foreground">
            A structural layout frame container for dashboards, canvas previews, and isolated UI panels.
          </p>
        </div>

        <div className="flex items-center gap-2 pt-2">
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
          <div className="flex min-h-[350px] w-full items-center justify-center p-10 border rounded-2xl bg-background/50 shadow-xs">
            <Frame className="w-full max-w-md">
              <FrameHeader>
                <FrameTitle>Project Canvas</FrameTitle>
                <FrameDescription>Interactive canvas workspace with isolated viewport</FrameDescription>
              </FrameHeader>
              <FramePanel className="h-44 flex items-center justify-center bg-muted/30">
                <span className="text-xs text-muted-foreground">Interactive Viewport Canvas</span>
              </FramePanel>
              <FrameFooter className="flex justify-between items-center">
                <span className="text-xs text-muted-foreground">Status: Ready</span>
                <Button size="sm">Export View</Button>
              </FrameFooter>
            </Frame>
          </div>
        ) : (
          <CodeBlock code={previewCode} />
        )}
      </div>

      <div className="space-y-4">
        <h2 id="installation" className="text-2xl font-bold tracking-tight">Installation</h2>
        <div className="relative rounded-lg border bg-muted/50 p-4 font-mono text-sm">
          <code>npx @alvinahmad/ui add frame</code>
        </div>
      </div>

      <div className="space-y-4">
        <h2 id="usage" className="text-2xl font-bold tracking-tight">Usage</h2>
        <CodeBlock code={`import { Frame, FramePanel, FrameHeader, FrameTitle, FrameDescription, FrameFooter } from "@/components/ui/frame";`} />
      </div>

      <div className="space-y-6">
        <h2 id="api-reference" className="text-2xl font-bold tracking-tight">API Reference</h2>
        
        <div className="space-y-2">
          <h3 id="frame" className="text-lg font-semibold">Frame</h3>
          <p className="text-sm text-muted-foreground">The main wrapper with border, background, and rounded corners.</p>
        </div>

        <div className="space-y-2">
          <h3 id="framepanel" className="text-lg font-semibold">FramePanel</h3>
          <p className="text-sm text-muted-foreground">The inner content region or canvas canvas viewport.</p>
        </div>

        <div className="space-y-2">
          <h3 id="frameheader" className="text-lg font-semibold">FrameHeader</h3>
          <p className="text-sm text-muted-foreground">Top title section with actions.</p>
        </div>

        <div className="space-y-2">
          <h3 id="framefooter" className="text-lg font-semibold">FrameFooter</h3>
          <p className="text-sm text-muted-foreground">Bottom control bar or status indicator section.</p>
        </div>
      </div>
    </div>
  );
}
