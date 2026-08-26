"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/custom-tabs";
import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Attachment } from "@/components/ui/attachment";

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
          className="flex h-8 w-8 items-center justify-center rounded-md border bg-background text-muted-foreground hover:bg-muted hover:text-foreground"
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

function AttachmentDemo() {
  return (
    <div className="flex flex-col gap-3 w-full max-w-sm">
      <Attachment
        filename="project-specification-2026.pdf"
        size="4.8 MB"
        onDownload={() => alert("Downloading...")}
        onRemove={() => alert("Removed attachment")}
      />
      <Attachment
        filename="brand-assets-dark.svg"
        size="512 KB"
        onDownload={() => alert("Downloading...")}
      />
    </div>
  );
}

export default function AttachmentDocPage() {
  const codeTsx = `import { Attachment } from "@/components/ui/attachment"

export function AttachmentDemo() {
  return (
    <Attachment
      filename="invoice_march.pdf"
      size="2.4 MB"
      onDownload={() => {}}
    />
  )
}`;
  const codeTs = `// Types & Utility Definition for Attachment
import { type VariantProps } from "class-variance-authority";

export interface attachmentConfig {
  disabled?: boolean;
  className?: string;
  onAction?: (event: CustomEvent) => void;
}

export type attachmentState = "idle" | "loading" | "success" | "error";

export function handleattachmentState(state: attachmentState): boolean {
  return state === "success";
}`;
  const codeJsx = `import { Attachment } from "@/components/ui/attachment"

export function AttachmentDemo() {
  return (
    <Attachment
      filename="invoice_march.pdf"
      size="2.4 MB"
      onDownload={() => {}}
    />
  )
}`;
  const codeJs = `// Vanilla JavaScript Helper for Attachment
export const defaultattachmentConfig = {
  disabled: false,
  className: "",
  onAction: (event) => {
    console.log("Attachment action triggered", event);
  },
};

export function checkattachmentReady(config = defaultattachmentConfig) {
  return !config.disabled;
}`;

  const manualSource = `import * as React from "react";
import { cn } from "@/lib/utils";
import { Paperclip, FileText, Download, X } from "lucide-react";

export interface AttachmentProps extends React.HTMLAttributes<HTMLDivElement> {
  filename: string;
  size?: string;
  onRemove?: () => void;
  onDownload?: () => void;
}

export function Attachment({
  className,
  filename,
  size = "2.4 MB",
  onRemove,
  onDownload,
  ...props
}: AttachmentProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-3 rounded-xl border border-border bg-card p-3 shadow-xs text-xs font-medium text-foreground max-w-sm",
        className
      )}
      {...props}
    >
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
        <FileText className="h-5 w-5" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="truncate font-semibold text-foreground">{filename}</div>
        <div className="text-[11px] text-muted-foreground">{size}</div>
      </div>
      <div className="flex items-center gap-1">
        {onDownload && (
          <button
            onClick={onDownload}
            className="p-1 text-muted-foreground hover:text-foreground rounded"
            aria-label="Download attachment"
          >
            <Download className="h-4 w-4" />
          </button>
        )}
        {onRemove && (
          <button
            onClick={onRemove}
            className="p-1 text-muted-foreground hover:text-destructive rounded"
            aria-label="Remove attachment"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
}
`;
  const manualDeps = `npm i @base-ui/react clsx tailwind-merge class-variance-authority lucide-react`;


  return (
    <div className="mx-auto w-full min-w-0 max-w-3xl space-y-10">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Attachment</h1>
        <p className="text-lg text-muted-foreground">
          A component to display attached files or documents with actions.
        </p>
      </div>

      <div className="space-y-4">
        <Tabs defaultValue="base" className="w-full">
          <div className="border-b">
            <TabsList className="bg-transparent p-0 justify-start w-full gap-6">
              <TabsTrigger value="base" className="rounded-none border-b-2 border-transparent data-[state=active]:border-foreground bg-transparent px-0 pb-3 pt-2 font-semibold shadow-none">
                Base UI
              </TabsTrigger>
              <TabsTrigger value="react-aria" className="rounded-none border-b-2 border-transparent data-[state=active]:border-foreground bg-transparent px-0 pb-3 pt-2 font-semibold shadow-none">
                React Aria
              </TabsTrigger>
              <TabsTrigger value="radix" className="rounded-none border-b-2 border-transparent data-[state=active]:border-foreground bg-transparent px-0 pb-3 pt-2 font-semibold shadow-none">
                Radix UI
              </TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="base" className="mt-6 border rounded-lg overflow-hidden">
            <div className="flex min-h-[350px] w-full items-center justify-center p-10 bg-background">
              <AttachmentDemo />
            </div>
          </TabsContent>
          <TabsContent value="react-aria" className="mt-6 border rounded-lg overflow-hidden">
            <div className="flex min-h-[350px] w-full items-center justify-center p-10 bg-background">
              <AttachmentDemo />
            </div>
          </TabsContent>
          <TabsContent value="radix" className="mt-6 border rounded-lg overflow-hidden">
            <div className="flex min-h-[350px] w-full items-center justify-center p-10 bg-background">
              <AttachmentDemo />
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">Installation</h2>
        <Tabs defaultValue="command" className="w-full">
          <TabsList className="bg-muted p-1">
            <TabsTrigger value="command">Command</TabsTrigger>
            <TabsTrigger value="manual">Manual</TabsTrigger>
          </TabsList>
          <TabsContent value="command" className="mt-4">
            <Tabs defaultValue="pnpm" className="w-full">
              <div className="border-b">
                <TabsList className="bg-transparent p-0 justify-start w-full gap-6">
                  <TabsTrigger value="pnpm" className="rounded-none border-b-2 border-transparent data-[state=active]:border-foreground bg-transparent px-0 pb-3 pt-2 font-semibold shadow-none">pnpm</TabsTrigger>
                  <TabsTrigger value="npm" className="rounded-none border-b-2 border-transparent data-[state=active]:border-foreground bg-transparent px-0 pb-3 pt-2 font-semibold shadow-none">npm</TabsTrigger>
                  <TabsTrigger value="yarn" className="rounded-none border-b-2 border-transparent data-[state=active]:border-foreground bg-transparent px-0 pb-3 pt-2 font-semibold shadow-none">yarn</TabsTrigger>
                  <TabsTrigger value="bun" className="rounded-none border-b-2 border-transparent data-[state=active]:border-foreground bg-transparent px-0 pb-3 pt-2 font-semibold shadow-none">bun</TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="pnpm" className="mt-4"><CodeBlock code="pnpm dlx @alvinahmad/ui add attachment" language="bash" /></TabsContent>
              <TabsContent value="npm" className="mt-4"><CodeBlock code="npx @alvinahmad/ui add attachment" language="bash" /></TabsContent>
              <TabsContent value="yarn" className="mt-4"><CodeBlock code="npx @alvinahmad/ui add attachment" language="bash" /></TabsContent>
              <TabsContent value="bun" className="mt-4"><CodeBlock code="bunx @alvinahmad/ui add attachment" language="bash" /></TabsContent>
            </Tabs>
          </TabsContent>
          <TabsContent value="manual" className="mt-6 space-y-6">
            <div className="space-y-2">
              <p className="text-xs font-semibold text-foreground">1. Install the required dependencies:</p>
              <CodeBlock code={manualDeps} language="bash" />
            </div>
            <div className="space-y-2">
              <p className="text-xs font-semibold text-foreground">2. Copy and paste the following code into <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">components/ui/attachment.tsx</code>:</p>
              <CodeBlock code={manualSource} language="tsx" />
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">Usage</h2>
        <Tabs defaultValue="tsx" className="w-full">
          <TabsList className="bg-muted p-1">
            <TabsTrigger value="tsx">.tsx</TabsTrigger>
            <TabsTrigger value="ts">.ts</TabsTrigger>
            <TabsTrigger value="jsx">.jsx</TabsTrigger>
            <TabsTrigger value="js">.js</TabsTrigger>
          </TabsList>
          <TabsContent value="tsx" className="mt-4">
            <CodeBlock code={codeTsx} language="tsx" />
          </TabsContent>
          <TabsContent value="ts" className="mt-4">
            <CodeBlock code={codeTs} language="ts" />
          </TabsContent>
          <TabsContent value="jsx" className="mt-4">
            <CodeBlock code={codeJsx} language="jsx" />
          </TabsContent>
          <TabsContent value="js" className="mt-4">
            <CodeBlock code={codeJs} language="js" />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
