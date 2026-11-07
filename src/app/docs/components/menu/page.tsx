"use client";

import React, { useState } from "react";
import { Check, Copy, ExternalLink, MoreVertical, Edit, Copy as CopyIcon, Trash, Share2 } from "lucide-react";
import {
  Menu,
  MenuTrigger,
  MenuPopup,
  MenuItem,
  MenuSeparator,
  MenuCheckboxItem,
  MenuRadioGroup,
  MenuRadioItem,
} from "@/components/ui/menu";
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

export default function MenuDocPage() {
  const [tab, setTab] = useState<"preview" | "code">("preview");
  const [copiedMarkdown, setCopiedMarkdown] = useState(false);

  const copyMarkdown = () => {
    navigator.clipboard.writeText(`# Menu\n\nA menu component displaying a list of choices on temporary surfaces.\n\n\`\`\`tsx\nimport { Menu, MenuItem, MenuSeparator } from "@/components/ui/menu";\n\`\`\``);
    setCopiedMarkdown(true);
    toast.success("Markdown copied to clipboard");
    setTimeout(() => setCopiedMarkdown(false), 2000);
  };

  const previewCode = `import {
  Menu,
  MenuTrigger,
  MenuPopup,
  MenuItem,
  MenuSeparator,
} from "@/components/ui/menu";
import { Button } from "@/components/ui/button";
import { MoreVertical, Edit, Copy, Trash, Share2 } from "lucide-react";

export function MenuDemo() {
  return (
    <Menu>
      <MenuTrigger render={<Button variant="outline" size="sm" className="gap-2">Options <MoreVertical className="h-4 w-4" /></Button>} />
      <MenuPopup>
        <MenuItem onClick={() => console.log("Edit clicked")}>
          <Edit className="h-4 w-4" /> Edit Page
        </MenuItem>
        <MenuItem onClick={() => console.log("Duplicated")}>
          <Copy className="h-4 w-4" /> Duplicate
        </MenuItem>
        <MenuItem onClick={() => console.log("Shared")}>
          <Share2 className="h-4 w-4" /> Share Link
        </MenuItem>
        <MenuSeparator />
        <MenuItem variant="destructive" onClick={() => console.log("Deleted")}>
          <Trash className="h-4 w-4" /> Delete
        </MenuItem>
      </MenuPopup>
    </Menu>
  );
};`;

  return (
    <div className="mx-auto w-full min-w-0 max-w-3xl space-y-10 pb-16">
      <div className="space-y-4">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">Menu</h1>
          <p className="text-lg text-muted-foreground">
            A menu component displaying a list of choices on temporary surfaces.
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
            <Menu>
              <MenuTrigger render={<Button variant="outline" className="gap-2">Options <MoreVertical className="h-4 w-4" /></Button>} />
              <MenuPopup>
                <MenuItem onClick={() => toast.info("Edit clicked")}>
                  <Edit className="h-4 w-4 mr-1.5" /> Edit Page
                </MenuItem>
                <MenuItem onClick={() => toast.info("Duplicated")}>
                  <CopyIcon className="h-4 w-4 mr-1.5" /> Duplicate
                </MenuItem>
                <MenuItem onClick={() => toast.info("Shared")}>
                  <Share2 className="h-4 w-4 mr-1.5" /> Share Link
                </MenuItem>
                <MenuSeparator />
                <MenuItem variant="destructive" onClick={() => toast.error("Deleted")}>
                  <Trash className="h-4 w-4 mr-1.5" /> Delete
                </MenuItem>
              </MenuPopup>
            </Menu>
          </div>
        ) : (
          <CodeBlock code={previewCode} />
        )}
      </div>

      <div className="space-y-4">
        <h2 id="installation" className="text-2xl font-bold tracking-tight">Installation</h2>
        <div className="relative rounded-lg border bg-muted/50 p-4 font-mono text-sm">
          <code>npx @alvinahmad/ui add menu</code>
        </div>
      </div>

      <div className="space-y-4">
        <h2 id="usage" className="text-2xl font-bold tracking-tight">Usage</h2>
        <CodeBlock code={`import { Menu, MenuItem, MenuSeparator } from "@/components/ui/menu";`} />
      </div>

      <div className="space-y-6">
        <h2 id="api-reference" className="text-2xl font-bold tracking-tight">API Reference</h2>
        
        <div className="space-y-2">
          <h3 id="menu" className="text-lg font-semibold">Menu</h3>
          <p className="text-sm text-muted-foreground">The root dropdown popup component.</p>
        </div>

        <div className="space-y-2">
          <h3 id="menuitem" className="text-lg font-semibold">MenuItem</h3>
          <p className="text-sm text-muted-foreground">Interactive action item with support for icons, shortcuts, and destructive styling.</p>
        </div>

        <div className="space-y-2">
          <h3 id="menuseparator" className="text-lg font-semibold">MenuSeparator</h3>
          <p className="text-sm text-muted-foreground">Horizontal rule dividing groups of menu actions.</p>
        </div>
      </div>
    </div>
  );
}
