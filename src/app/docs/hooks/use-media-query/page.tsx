"use client";

import React, { useState } from "react";
import { Check, Copy, ExternalLink, Smartphone, Tablet, Monitor, Sparkles } from "lucide-react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

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

export default function UseMediaQueryDocPage() {
  const [tab, setTab] = useState<"preview" | "code">("preview");
  const [copiedMarkdown, setCopiedMarkdown] = useState(false);

  // Live media queries
  const isSmall = useMediaQuery("(max-width: 640px)");
  const isMedium = useMediaQuery("(min-width: 641px) and (max-width: 1024px)");
  const isLarge = useMediaQuery("(min-width: 1025px)");
  const prefersDark = useMediaQuery("(prefers-color-scheme: dark)");
  const prefersReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");

  const copyMarkdown = () => {
    navigator.clipboard.writeText(`# useMediaQuery\n\nA React hook that tracks CSS media queries reactively and SSR-safely.\n\n\`\`\`tsx\nimport { useMediaQuery } from "@/hooks/use-media-query";\n\nconst isDesktop = useMediaQuery("(min-width: 1024px)");\n\`\`\``);
    setCopiedMarkdown(true);
    toast.success("Markdown copied to clipboard");
    setTimeout(() => setCopiedMarkdown(false), 2000);
  };

  const previewCode = `import { useMediaQuery } from "@/hooks/use-media-query";

export function ResponsiveWidget() {
  const isMobile = useMediaQuery("(max-width: 640px)");
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const prefersDark = useMediaQuery("(prefers-color-scheme: dark)");

  return (
    <div className="p-4 border rounded-xl">
      <p>Current Viewport: {isMobile ? "Mobile" : isDesktop ? "Desktop" : "Tablet"}</p>
      <p>Prefers Dark Mode: {prefersDark ? "Yes" : "No"}</p>
    </div>
  );
}`;

  return (
    <div className="mx-auto w-full min-w-0 max-w-3xl space-y-10 pb-16">
      {/* Title */}
      <div className="space-y-4">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border bg-muted/50 text-xs font-semibold text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-primary" /> React Hooks
          </div>
          <h1 className="text-4xl font-bold tracking-tight">useMediaQuery</h1>
          <p className="text-lg text-muted-foreground">
            A performant, SSR-safe React hook that tracks whether a CSS media query matches the current viewport window.
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

      {/* Interactive Live Preview */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 border-b">
          <button
            onClick={() => setTab("preview")}
            className={`pb-2 text-sm font-semibold border-b-2 cursor-pointer transition-colors ${
              tab === "preview" ? "border-foreground text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            Live Demo
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
          <div className="rounded-2xl border p-8 bg-card shadow-xs space-y-6">
            <div className="flex justify-between items-center border-b pb-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Active Breakpoint Detection (Resize Browser Window)
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold px-2 py-0.5 rounded-md bg-primary/10 text-primary">
                Live Listener
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div
                className={cn(
                  "p-4 rounded-xl border flex flex-col gap-2 transition-all duration-300",
                  isSmall ? "border-primary bg-primary/5 shadow-xs" : "border-border/60 bg-muted/20 opacity-60"
                )}
              >
                <div className="flex items-center justify-between">
                  <Smartphone className="h-5 w-5" />
                  <span className="text-xs font-mono font-bold">&le; 640px</span>
                </div>
                <span className="text-sm font-semibold">Mobile</span>
                <span className="text-xs text-muted-foreground">
                  Status: {isSmall ? "Active (Matched)" : "Inactive"}
                </span>
              </div>

              <div
                className={cn(
                  "p-4 rounded-xl border flex flex-col gap-2 transition-all duration-300",
                  isMedium ? "border-primary bg-primary/5 shadow-xs" : "border-border/60 bg-muted/20 opacity-60"
                )}
              >
                <div className="flex items-center justify-between">
                  <Tablet className="h-5 w-5" />
                  <span className="text-xs font-mono font-bold">641px - 1024px</span>
                </div>
                <span className="text-sm font-semibold">Tablet</span>
                <span className="text-xs text-muted-foreground">
                  Status: {isMedium ? "Active (Matched)" : "Inactive"}
                </span>
              </div>

              <div
                className={cn(
                  "p-4 rounded-xl border flex flex-col gap-2 transition-all duration-300",
                  isLarge ? "border-primary bg-primary/5 shadow-xs" : "border-border/60 bg-muted/20 opacity-60"
                )}
              >
                <div className="flex items-center justify-between">
                  <Monitor className="h-5 w-5" />
                  <span className="text-xs font-mono font-bold">&ge; 1025px</span>
                </div>
                <span className="text-sm font-semibold">Desktop</span>
                <span className="text-xs text-muted-foreground">
                  Status: {isLarge ? "Active (Matched)" : "Inactive"}
                </span>
              </div>
            </div>

            <div className="border-t pt-4 space-y-2 text-xs">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">System prefers-color-scheme dark:</span>
                <span className="font-mono font-semibold">{prefersDark ? "true" : "false"}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">System prefers-reduced-motion:</span>
                <span className="font-mono font-semibold">{prefersReducedMotion ? "true" : "false"}</span>
              </div>
            </div>
          </div>
        ) : (
          <CodeBlock code={previewCode} />
        )}
      </div>

      {/* Installation */}
      <div className="space-y-4">
        <h2 id="installation" className="text-2xl font-bold tracking-tight">Installation</h2>
        <div className="relative rounded-lg border bg-muted/50 p-4 font-mono text-sm">
          <code>pnpm dlx @alvinahmad/ui add use-media-query</code>
        </div>
      </div>

      {/* Usage */}
      <div className="space-y-4">
        <h2 id="usage" className="text-2xl font-bold tracking-tight">Usage</h2>
        <CodeBlock code={`import { useMediaQuery } from "@/hooks/use-media-query";

export function Component() {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const isTouch = useMediaQuery("(pointer: coarse)");

  return <div>{isDesktop ? "Desktop Layout" : "Mobile Drawer"}</div>;
}`} />
      </div>

      {/* API Reference */}
      <div className="space-y-6">
        <h2 id="api-reference" className="text-2xl font-bold tracking-tight">API Reference</h2>

        <div className="space-y-2">
          <h3 id="parameters" className="text-lg font-semibold">Parameters</h3>
          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
            <li><code className="text-foreground font-mono">query</code>: Standard CSS media query string (e.g. <code className="text-xs bg-muted px-1 py-0.5 rounded">&quot;(min-width: 768px)&quot;</code>).</li>
            <li><code className="text-foreground font-mono">defaultValue</code>: (Optional) Initial boolean value returned on server render before hydration. Default: <code className="text-xs bg-muted px-1 py-0.5 rounded">false</code>.</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h3 id="returns" className="text-lg font-semibold">Returns</h3>
          <p className="text-sm text-muted-foreground">
            A reactive <code className="text-foreground font-mono">boolean</code> that triggers a re-render whenever the window breakpoint crosses the query threshold.
          </p>
        </div>
      </div>
    </div>
  );
}
