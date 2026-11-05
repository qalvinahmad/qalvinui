"use client";

import React, { useState } from "react";
import { Check, Copy, ExternalLink, Bell, Mail, MessageSquare } from "lucide-react";
import { CheckboxGroup } from "@/components/ui/checkbox-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
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

export default function CheckboxGroupDocPage() {
  const [tab, setTab] = useState<"preview" | "code">("preview");
  const [copiedMarkdown, setCopiedMarkdown] = useState(false);
  const [selected, setSelected] = useState<string[]>(["email", "push"]);

  const copyMarkdown = () => {
    navigator.clipboard.writeText(`# Checkbox Group\n\nA set of checkboxes grouped together with shared validation and state management.\n\n\`\`\`tsx\nimport { CheckboxGroup } from "@/components/ui/checkbox-group";\nimport { Checkbox } from "@/components/ui/checkbox";\n\`\`\``);
    setCopiedMarkdown(true);
    toast.success("Markdown copied to clipboard");
    setTimeout(() => setCopiedMarkdown(false), 2000);
  };

  const previewCode = `import { CheckboxGroup } from "@/components/ui/checkbox-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export function CheckboxGroupDemo() {
  const [value, setValue] = useState(["email", "push"]);

  return (
    <CheckboxGroup value={value} onValueChange={setValue} className="space-y-3">
      <div className="flex items-center space-x-2">
        <Checkbox id="email" value="email" />
        <Label htmlFor="email">Email notifications</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="push" value="push" />
        <Label htmlFor="push">Push notifications</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="sms" value="sms" />
        <Label htmlFor="sms">SMS alerts</Label>
      </div>
    </CheckboxGroup>
  );
}`;

  return (
    <div className="mx-auto w-full min-w-0 max-w-3xl space-y-10 pb-16">
      <div className="space-y-4">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">Checkbox Group</h1>
          <p className="text-lg text-muted-foreground">
            A set of checkboxes grouped together with shared validation and state management.
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
            <CheckboxGroup value={selected} onValueChange={setSelected} className="space-y-4 w-full max-w-sm">
              <div className="flex items-center space-x-3">
                <Checkbox id="email" value="email" checked={selected.includes("email")} onCheckedChange={(c) => {
                  setSelected(c ? [...selected, "email"] : selected.filter(x => x !== "email"));
                }} />
                <Label htmlFor="email" className="cursor-pointer font-medium flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" /> Email updates
                </Label>
              </div>
              <div className="flex items-center space-x-3">
                <Checkbox id="push" value="push" checked={selected.includes("push")} onCheckedChange={(c) => {
                  setSelected(c ? [...selected, "push"] : selected.filter(x => x !== "push"));
                }} />
                <Label htmlFor="push" className="cursor-pointer font-medium flex items-center gap-2">
                  <Bell className="h-4 w-4 text-muted-foreground" /> Push notifications
                </Label>
              </div>
              <div className="flex items-center space-x-3">
                <Checkbox id="sms" value="sms" checked={selected.includes("sms")} onCheckedChange={(c) => {
                  setSelected(c ? [...selected, "sms"] : selected.filter(x => x !== "sms"));
                }} />
                <Label htmlFor="sms" className="cursor-pointer font-medium flex items-center gap-2">
                  <MessageSquare className="h-4 w-4 text-muted-foreground" /> SMS security codes
                </Label>
              </div>
            </CheckboxGroup>
          </div>
        ) : (
          <CodeBlock code={previewCode} />
        )}
      </div>

      <div className="space-y-4">
        <h2 id="installation" className="text-2xl font-bold tracking-tight">Installation</h2>
        <div className="relative rounded-lg border bg-muted/50 p-4 font-mono text-sm">
          <code>npx @alvinahmad/ui add checkbox-group</code>
        </div>
      </div>

      <div className="space-y-4">
        <h2 id="usage" className="text-2xl font-bold tracking-tight">Usage</h2>
        <CodeBlock code={`import { CheckboxGroup } from "@/components/ui/checkbox-group";`} />
      </div>

      <div className="space-y-6">
        <h2 id="api-reference" className="text-2xl font-bold tracking-tight">API Reference</h2>
        
        <div className="space-y-2">
          <h3 id="checkboxgroup" className="text-lg font-semibold">CheckboxGroup</h3>
          <p className="text-sm text-muted-foreground">The root primitive managing multiple boolean checkbox states in an array.</p>
        </div>
      </div>
    </div>
  );
}
