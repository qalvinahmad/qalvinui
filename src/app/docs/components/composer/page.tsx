"use client";

import React, { useState } from "react";
import { Check, Copy, ExternalLink, Paperclip, Send, Sparkles } from "lucide-react";
import { Composer } from "@/components/ui/composer";
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

export default function ComposerDocPage() {
  const [tab, setTab] = useState<"preview" | "code">("preview");
  const [copiedMarkdown, setCopiedMarkdown] = useState(false);

  const copyMarkdown = () => {
    navigator.clipboard.writeText(`# Composer\n\nA rich chat and prompt composer with attachment preview, actions bar, and submit controls.\n\n\`\`\`tsx\nimport { Composer } from "@/components/ui/composer";\n\`\`\``);
    setCopiedMarkdown(true);
    toast.success("Markdown copied to clipboard");
    setTimeout(() => setCopiedMarkdown(false), 2000);
  };

  const previewCode = `import { Composer } from "@/components/ui/composer";

export function ComposerDemo() {
  return (
    <Composer
      placeholder="Ask anything or generate UI..."
      onSubmit={(val) => console.log("Submitted:", val)}
      className="w-full max-w-lg"
    />
  );
}`;

  return (
    <div className="mx-auto w-full min-w-0 max-w-3xl space-y-10 pb-16">
      <div className="space-y-4">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">Composer</h1>
          <p className="text-lg text-muted-foreground">
            A rich chat and prompt composer with attachment preview, actions bar, and submit controls.
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
            <Composer
              placeholder="Ask anything or write a prompt..."
              onSubmit={(val) => toast.success(`Prompt sent: ${val}`)}
              className="w-full max-w-lg"
            />
          </div>
        ) : (
          <CodeBlock code={previewCode} />
        )}
      </div>

      <div className="space-y-4">
        <h2 id="installation" className="text-2xl font-bold tracking-tight">Installation</h2>
        <div className="relative rounded-lg border bg-muted/50 p-4 font-mono text-sm">
          <code>npx @alvinahmad/ui add composer</code>
        </div>
      </div>

      <div className="space-y-4">
        <h2 id="usage" className="text-2xl font-bold tracking-tight">Usage</h2>
        <CodeBlock code={`import { Composer } from "@/components/ui/composer";`} />
      </div>

      <div className="space-y-6">
        <h2 id="api-reference" className="text-2xl font-bold tracking-tight">API Reference</h2>
        
        <div className="space-y-2">
          <h3 id="composer" className="text-lg font-semibold">Composer</h3>
          <p className="text-sm text-muted-foreground">The full container managing text state, attachments, keyboard submit shortcuts (Enter / Cmd+Enter), and action triggers.</p>
        </div>
      </div>
    </div>
  );
}
