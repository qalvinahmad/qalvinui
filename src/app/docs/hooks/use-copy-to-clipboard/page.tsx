"use client";

import React, { useState } from "react";
import { Check, Copy, ExternalLink, Sparkles, Terminal, CheckCircle2 } from "lucide-react";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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

export default function UseCopyToClipboardDocPage() {
  const [tab, setTab] = useState<"preview" | "code">("preview");
  const [copiedMarkdown, setCopiedMarkdown] = useState(false);
  const [customText, setCustomText] = useState("pnpm dlx @alvinahmad/ui add button");

  const { isCopied, copy, copiedText } = useCopyToClipboard({
    timeout: 2500,
    onSuccess: (text) => toast.success(`Copied "${text}" to clipboard`),
    onError: () => toast.error("Failed to copy"),
  });

  const copyMarkdown = () => {
    navigator.clipboard.writeText(`# useCopyToClipboard\n\nA React hook that provides copy-to-clipboard functionality with status feedback and fallback.\n\n\`\`\`tsx\nimport { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";\n\nconst { isCopied, copy } = useCopyToClipboard();\n\`\`\``);
    setCopiedMarkdown(true);
    toast.success("Markdown copied to clipboard");
    setTimeout(() => setCopiedMarkdown(false), 2000);
  };

  const previewCode = `import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";

export function CopySnippet() {
  const { isCopied, copy } = useCopyToClipboard();

  return (
    <Button
      variant="outline"
      onClick={() => copy("pnpm dlx @alvinahmad/ui init")}
      className="gap-2"
    >
      {isCopied ? <Check className="h-4 w-4 text-emerald-500" /> : <Copy className="h-4 w-4" />}
      {isCopied ? "Copied to clipboard!" : "Copy command"}
    </Button>
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
          <h1 className="text-4xl font-bold tracking-tight">useCopyToClipboard</h1>
          <p className="text-lg text-muted-foreground">
            A hook for copying text to the clipboard with status feedback, auto-reset timeouts, and fallback for non-secure contexts.
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

      {/* Interactive Live Demo */}
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
            <div className="space-y-2">
              <label className="text-xs font-semibold text-muted-foreground uppercase">Enter text to copy</label>
              <div className="flex gap-2">
                <Input
                  value={customText}
                  onChange={(e) => setCustomText(e.target.value)}
                  className="font-mono text-sm"
                  placeholder="Type anything..."
                />
                <Button
                  onClick={() => copy(customText)}
                  className="gap-2 min-w-32 cursor-pointer"
                >
                  {isCopied ? <Check className="h-4 w-4 text-emerald-300" /> : <Copy className="h-4 w-4" />}
                  {isCopied ? "Copied!" : "Copy"}
                </Button>
              </div>
            </div>

            {copiedText && (
              <div className="p-3 bg-muted/40 rounded-xl border border-border/60 text-xs flex items-center justify-between">
                <span className="text-muted-foreground">Last copied string:</span>
                <code className="font-mono font-semibold text-foreground truncate max-w-xs">{copiedText}</code>
              </div>
            )}
          </div>
        ) : (
          <CodeBlock code={previewCode} />
        )}
      </div>

      {/* Installation */}
      <div className="space-y-4">
        <h2 id="installation" className="text-2xl font-bold tracking-tight">Installation</h2>
        <div className="relative rounded-lg border bg-muted/50 p-4 font-mono text-sm">
          <code>pnpm dlx @alvinahmad/ui add use-copy-to-clipboard</code>
        </div>
      </div>

      {/* Usage */}
      <div className="space-y-4">
        <h2 id="usage" className="text-2xl font-bold tracking-tight">Usage</h2>
        <CodeBlock code={`import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";

export function Component() {
  const { isCopied, copy } = useCopyToClipboard({ timeout: 2000 });

  return (
    <button onClick={() => copy("Text to copy")}>
      {isCopied ? "Copied!" : "Click to copy"}
    </button>
  );
}`} />
      </div>

      {/* API Reference */}
      <div className="space-y-6">
        <h2 id="api-reference" className="text-2xl font-bold tracking-tight">API Reference</h2>

        <div className="space-y-2">
          <h3 id="options" className="text-lg font-semibold">Options</h3>
          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
            <li><code className="text-foreground font-mono">timeout</code>: Number of milliseconds before <code className="text-xs bg-muted px-1 py-0.5 rounded">isCopied</code> resets back to <code className="text-xs bg-muted px-1 py-0.5 rounded">false</code>. Default: <code className="text-xs bg-muted px-1 py-0.5 rounded">2000</code>.</li>
            <li><code className="text-foreground font-mono">onSuccess</code>: Callback fired when copy succeeds.</li>
            <li><code className="text-foreground font-mono">onError</code>: Callback fired if clipboard API fails.</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h3 id="returns" className="text-lg font-semibold">Returns</h3>
          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
            <li><code className="text-foreground font-mono">copy(text: string): Promise&lt;boolean&gt;</code>: Copies the string and triggers status update.</li>
            <li><code className="text-foreground font-mono">isCopied: boolean</code>: Status flag active for duration of timeout.</li>
            <li><code className="text-foreground font-mono">copiedText: string | null</code>: Most recently copied text string.</li>
            <li><code className="text-foreground font-mono">reset(): void</code>: Instantly resets status before timeout expires.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
