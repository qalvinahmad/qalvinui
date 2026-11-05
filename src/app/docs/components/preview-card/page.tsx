"use client";

import React, { useState } from "react";
import { Check, Copy, ExternalLink, Calendar, MapPin, Sparkles } from "lucide-react";
import {
  PreviewCard,
  PreviewCardTrigger,
  PreviewCardPopup,
} from "@/components/ui/preview-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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

export default function PreviewCardDocPage() {
  const [tab, setTab] = useState<"preview" | "code">("preview");
  const [copiedMarkdown, setCopiedMarkdown] = useState(false);

  const copyMarkdown = () => {
    navigator.clipboard.writeText(`# Preview Card\n\nA popover card providing a rich preview of a link or item on hover.\n\n\`\`\`tsx\nimport { PreviewCard, PreviewCardTrigger, PreviewCardPopup } from "@/components/ui/preview-card";\n\`\`\``);
    setCopiedMarkdown(true);
    toast.success("Markdown copied to clipboard");
    setTimeout(() => setCopiedMarkdown(false), 2000);
  };

  const previewCode = `import {
  PreviewCard,
  PreviewCardTrigger,
  PreviewCardPopup,
} from "@/components/ui/preview-card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function PreviewCardDemo() {
  return (
    <PreviewCard>
      <PreviewCardTrigger href="https://github.com/qalvinahmad" className="font-semibold underline underline-offset-4">
        @qalvinahmad
      </PreviewCardTrigger>
      <PreviewCardPopup className="w-80">
        <div className="flex gap-3">
          <Avatar className="h-10 w-10">
            <AvatarFallback>QA</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">Alvin Ahmad</h4>
            <p className="text-xs text-muted-foreground">Creator of Qalvin UI — Modern UI library with Base UI and Tailwind CSS v4.</p>
          </div>
        </div>
      </PreviewCardPopup>
    </PreviewCard>
  );
}`;

  return (
    <div className="mx-auto w-full min-w-0 max-w-3xl space-y-10 pb-16">
      <div className="space-y-4">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">Preview Card</h1>
          <p className="text-lg text-muted-foreground">
            A popover card providing a rich preview of a link or item on hover.
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
          <div className="flex min-h-[350px] w-full items-center justify-center p-10 border rounded-2xl bg-background/50 shadow-xs">
            <p className="text-sm text-muted-foreground">
              Built with precision by{" "}
              <PreviewCard>
                <PreviewCardTrigger href="https://github.com/qalvinahmad" className="font-semibold text-foreground underline underline-offset-4 cursor-pointer">
                  @qalvinahmad
                </PreviewCardTrigger>
                <PreviewCardPopup className="w-80">
                  <div className="flex gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback>QA</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold">Alvin Ahmad</h4>
                      <p className="text-xs text-muted-foreground">Creator of Qalvin UI — Modern UI library with Base UI and Tailwind CSS v4.</p>
                      <div className="flex items-center gap-2 pt-1 text-[11px] text-muted-foreground">
                        <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> Jakarta</span>
                        <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> Joined 2024</span>
                      </div>
                    </div>
                  </div>
                </PreviewCardPopup>
              </PreviewCard>{" "}
              for modern web apps.
            </p>
          </div>
        ) : (
          <CodeBlock code={previewCode} />
        )}
      </div>

      <div className="space-y-4">
        <h2 id="installation" className="text-2xl font-bold tracking-tight">Installation</h2>
        <div className="relative rounded-lg border bg-muted/50 p-4 font-mono text-sm">
          <code>npx @alvinahmad/ui add preview-card</code>
        </div>
      </div>

      <div className="space-y-4">
        <h2 id="usage" className="text-2xl font-bold tracking-tight">Usage</h2>
        <CodeBlock code={`import { PreviewCard, PreviewCardTrigger, PreviewCardPopup } from "@/components/ui/preview-card";`} />
      </div>

      <div className="space-y-6">
        <h2 id="api-reference" className="text-2xl font-bold tracking-tight">API Reference</h2>
        
        <div className="space-y-2">
          <h3 id="previewcard" className="text-lg font-semibold">PreviewCard</h3>
          <p className="text-sm text-muted-foreground">The root hover card container primitive.</p>
        </div>

        <div className="space-y-2">
          <h3 id="previewcardtrigger" className="text-lg font-semibold">PreviewCardTrigger</h3>
          <p className="text-sm text-muted-foreground">The hoverable anchor link or button.</p>
        </div>

        <div className="space-y-2">
          <h3 id="previewcardpopup" className="text-lg font-semibold">PreviewCardPopup</h3>
          <p className="text-sm text-muted-foreground">The floating portal card showing detailed metadata.</p>
        </div>
      </div>
    </div>
  );
}
