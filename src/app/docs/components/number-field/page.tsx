"use client";

import React, { useState } from "react";
import { Check, Copy, ExternalLink } from "lucide-react";
import {
  NumberField,
  NumberFieldGroup,
  NumberFieldDecrement,
  NumberFieldIncrement,
  NumberFieldInput,
} from "@/components/ui/number-field";
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

export default function NumberFieldDocPage() {
  const [tab, setTab] = useState<"preview" | "code">("preview");
  const [copiedMarkdown, setCopiedMarkdown] = useState(false);
  const [val, setVal] = useState(5);

  const copyMarkdown = () => {
    navigator.clipboard.writeText(`# Number Field\n\nA numeric input component with increment and decrement step buttons.\n\n\`\`\`tsx\nimport { NumberField, NumberFieldGroup, NumberFieldDecrement, NumberFieldIncrement, NumberFieldInput } from "@/components/ui/number-field";\n\`\`\``);
    setCopiedMarkdown(true);
    toast.success("Markdown copied to clipboard");
    setTimeout(() => setCopiedMarkdown(false), 2000);
  };

  const previewCode = `import {
  NumberField,
  NumberFieldGroup,
  NumberFieldDecrement,
  NumberFieldIncrement,
  NumberFieldInput,
} from "@/components/ui/number-field";

export function NumberFieldDemo() {
  return (
    <NumberField defaultValue={5} min={0} max={100} step={1}>
      <NumberFieldGroup>
        <NumberFieldDecrement />
        <NumberFieldInput />
        <NumberFieldIncrement />
      </NumberFieldGroup>
    </NumberField>
  );
}`;

  return (
    <div className="mx-auto w-full min-w-0 max-w-3xl space-y-10 pb-16">
      <div className="space-y-4">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">Number Field</h1>
          <p className="text-lg text-muted-foreground">
            A numeric input component with increment and decrement step buttons.
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
            <div className="w-full max-w-xs space-y-2">
              <label className="text-sm font-medium">Quantity</label>
              <NumberField value={val} onValueChange={(n) => n !== null && setVal(n)} min={1} max={99}>
                <NumberFieldGroup>
                  <NumberFieldDecrement />
                  <NumberFieldInput />
                  <NumberFieldIncrement />
                </NumberFieldGroup>
              </NumberField>
              <p className="text-xs text-muted-foreground">Current value: {val}</p>
            </div>
          </div>
        ) : (
          <CodeBlock code={previewCode} />
        )}
      </div>

      <div className="space-y-4">
        <h2 id="installation" className="text-2xl font-bold tracking-tight">Installation</h2>
        <div className="relative rounded-lg border bg-muted/50 p-4 font-mono text-sm">
          <code>npx @alvinahmad/ui add number-field</code>
        </div>
      </div>

      <div className="space-y-4">
        <h2 id="usage" className="text-2xl font-bold tracking-tight">Usage</h2>
        <CodeBlock code={`import { NumberField, NumberFieldGroup, NumberFieldDecrement, NumberFieldIncrement, NumberFieldInput } from "@/components/ui/number-field";`} />
      </div>

      <div className="space-y-6">
        <h2 id="api-reference" className="text-2xl font-bold tracking-tight">API Reference</h2>
        
        <div className="space-y-2">
          <h3 id="numberfield" className="text-lg font-semibold">NumberField</h3>
          <p className="text-sm text-muted-foreground">Root numeric primitive managing state, bounds (min, max), and step increments.</p>
        </div>

        <div className="space-y-2">
          <h3 id="numberfielddecrement" className="text-lg font-semibold">NumberFieldDecrement</h3>
          <p className="text-sm text-muted-foreground">Decrement button stepping down the value.</p>
        </div>

        <div className="space-y-2">
          <h3 id="numberfieldincrement" className="text-lg font-semibold">NumberFieldIncrement</h3>
          <p className="text-sm text-muted-foreground">Increment button stepping up the value.</p>
        </div>
      </div>
    </div>
  );
}
