"use client";

import React, { useState } from "react";
import { Check, Copy, ExternalLink, FileText, Image, MoreHorizontal, Search, Settings } from "lucide-react";
import { Group, GroupSeparator, GroupText, ButtonGroup } from "@/components/ui/group";
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

export default function GroupDocPage() {
  const [tab, setTab] = useState<"preview" | "code">("preview");
  const [copiedMarkdown, setCopiedMarkdown] = useState(false);

  const copyMarkdown = () => {
    navigator.clipboard.writeText(`# Group\n\nA component for visually grouping a series of controls.\n\n\`\`\`tsx\nimport { Group } from "@/components/ui/group";\n\`\`\``);
    setCopiedMarkdown(true);
    toast.success("Markdown copied to clipboard");
    setTimeout(() => setCopiedMarkdown(false), 2000);
  };

  const previewCode = `import { Group } from "@/components/ui/group";
import { Button } from "@/components/ui/button";
import { FileText, Image, MoreHorizontal } from "lucide-react";

export function GroupDemo() {
  return (
    <Group>
      <Button variant="outline" size="sm" className="gap-2">
        <FileText className="h-4 w-4" /> Files
      </Button>
      <Button variant="outline" size="sm" className="gap-2">
        <Image className="h-4 w-4" /> Media
      </Button>
      <Button variant="outline" size="sm" className="px-2.5">
        <MoreHorizontal className="h-4 w-4" />
      </Button>
    </Group>
  );
}`;

  return (
    <div className="mx-auto w-full min-w-0 max-w-3xl space-y-10 pb-16">
      {/* Title & Actions */}
      <div className="space-y-4">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">Group</h1>
          <p className="text-lg text-muted-foreground">
            A component for visually grouping a series of controls.
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
            <Group>
              <Button variant="outline" size="sm" className="gap-2">
                <FileText className="h-4 w-4" /> Files
              </Button>
              <Button variant="outline" size="sm" className="gap-2">
                <Image className="h-4 w-4" /> Media
              </Button>
              <Button variant="outline" size="sm" className="px-2.5">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </Group>
          </div>
        ) : (
          <CodeBlock code={previewCode} />
        )}
      </div>

      {/* Installation */}
      <div className="space-y-4">
        <h2 id="installation" className="text-2xl font-bold tracking-tight">Installation</h2>
        <div className="relative rounded-lg border bg-muted/50 p-4 font-mono text-sm">
          <code>npx @alvinahmad/ui add group</code>
        </div>
      </div>

      {/* Usage */}
      <div className="space-y-4">
        <h2 id="usage" className="text-2xl font-bold tracking-tight">Usage</h2>
        <CodeBlock code={`import { Group, GroupSeparator, GroupText } from "@/components/ui/group";`} />
      </div>

      {/* Accessibility */}
      <div className="space-y-4">
        <h2 id="accessibility" className="text-2xl font-bold tracking-tight">Accessibility</h2>
        <h3 id="group-vs-togglegroup" className="text-lg font-semibold tracking-tight">Group vs ToggleGroup</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          The <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">Group</code> component is a visual container using ARIA <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">role=&quot;group&quot;</code> to establish grouping semantics between related independent buttons or input controls. If you require mutually exclusive selection (like a single option pill selector), use <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">SegmentedControl</code> or <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">ToggleGroup</code> instead.
        </p>
      </div>

      {/* API Reference */}
      <div className="space-y-6">
        <h2 id="api-reference" className="text-2xl font-bold tracking-tight">API Reference</h2>
        
        <div className="space-y-2">
          <h3 id="group" className="text-lg font-semibold">Group</h3>
          <p className="text-sm text-muted-foreground">The container component that applies joined border radii and seamless borders to child elements.</p>
        </div>

        <div className="space-y-2">
          <h3 id="groupseparator" className="text-lg font-semibold">GroupSeparator</h3>
          <p className="text-sm text-muted-foreground">A vertical or horizontal separator element between group members.</p>
        </div>

        <div className="space-y-2">
          <h3 id="grouptext" className="text-lg font-semibold">GroupText</h3>
          <p className="text-sm text-muted-foreground">An inline text label or prefix/suffix segment styled seamlessly within the group.</p>
        </div>
      </div>

      {/* Examples */}
      <div className="space-y-8">
        <h2 id="examples" className="text-2xl font-bold tracking-tight">Examples</h2>

        <div className="space-y-3">
          <h3 id="with-input" className="text-lg font-semibold">With Input</h3>
          <div className="p-6 border rounded-xl flex items-center justify-center">
            <Group className="w-full max-w-sm">
              <GroupText>https://</GroupText>
              <Input placeholder="example.com" className="rounded-none" />
              <Button variant="secondary">Copy</Button>
            </Group>
          </div>
        </div>

        <div className="space-y-3">
          <h3 id="small-size" className="text-lg font-semibold">Small Size</h3>
          <div className="p-6 border rounded-xl flex items-center justify-center">
            <Group>
              <Button size="sm" variant="outline">Day</Button>
              <Button size="sm" variant="outline">Week</Button>
              <Button size="sm" variant="outline">Month</Button>
              <Button size="sm" variant="outline">Year</Button>
            </Group>
          </div>
        </div>

        <div className="space-y-3">
          <h3 id="large-size" className="text-lg font-semibold">Large Size</h3>
          <div className="p-6 border rounded-xl flex items-center justify-center">
            <Group>
              <Button size="lg" variant="outline">Profile</Button>
              <Button size="lg" variant="outline">Settings</Button>
              <Button size="lg" variant="outline">Billing</Button>
            </Group>
          </div>
        </div>

        <div className="space-y-3">
          <h3 id="with-disabled-button" className="text-lg font-semibold">With Disabled Button</h3>
          <div className="p-6 border rounded-xl flex items-center justify-center">
            <Group>
              <Button variant="outline">Active</Button>
              <Button variant="outline" disabled>Disabled</Button>
              <Button variant="outline">Review</Button>
            </Group>
          </div>
        </div>

        <div className="space-y-3">
          <h3 id="vertical" className="text-lg font-semibold">Vertical</h3>
          <div className="p-6 border rounded-xl flex items-center justify-center">
            <Group orientation="vertical" className="w-36">
              <Button variant="outline" className="w-full justify-start">Top</Button>
              <Button variant="outline" className="w-full justify-start">Middle</Button>
              <Button variant="outline" className="w-full justify-start">Bottom</Button>
            </Group>
          </div>
        </div>
      </div>
    </div>
  );
}
