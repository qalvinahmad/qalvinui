"use client";

import React, { useState } from "react";
import { Check, Copy, ExternalLink, ShieldCheck } from "lucide-react";
import {
  OTPField,
  OTPFieldInput,
  OTPFieldSeparator,
} from "@/components/ui/otp-field";
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

export default function OTPFieldDocPage() {
  const [tab, setTab] = useState<"preview" | "code">("preview");
  const [copiedMarkdown, setCopiedMarkdown] = useState(false);
  const [code, setCode] = useState("");

  const copyMarkdown = () => {
    navigator.clipboard.writeText(`# OTP Field\n\nA specialized one-time password and verification PIN input field.\n\n\`\`\`tsx\nimport { OTPField, OTPFieldInput, OTPFieldSeparator } from "@/components/ui/otp-field";\n\`\`\``);
    setCopiedMarkdown(true);
    toast.success("Markdown copied to clipboard");
    setTimeout(() => setCopiedMarkdown(false), 2000);
  };

  const previewCode = `import {
  OTPField,
  OTPFieldInput,
  OTPFieldSeparator,
} from "@/components/ui/otp-field";

export function OTPFieldDemo() {
  return (
    <OTPField length={6}>
      <OTPFieldInput />
      <OTPFieldInput />
      <OTPFieldInput />
      <OTPFieldSeparator />
      <OTPFieldInput />
      <OTPFieldInput />
      <OTPFieldInput />
    </OTPField>
  );
};`;

  return (
    <div className="mx-auto w-full min-w-0 max-w-3xl space-y-10 pb-16">
      <div className="space-y-4">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">OTP Field</h1>
          <p className="text-lg text-muted-foreground">
            A specialized one-time password and verification PIN input field.
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
          <div className="flex min-h-[350px] w-full flex-col items-center justify-center p-10 border rounded-2xl bg-background/50 shadow-xs space-y-6">
            <div className="text-center space-y-1">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                <ShieldCheck className="h-3.5 w-3.5" /> Two-Factor Authentication
              </span>
              <p className="text-sm font-medium">Enter the 6-digit verification code</p>
            </div>
            <OTPField length={6} value={code} onValueChange={setCode}>
              <OTPFieldInput />
              <OTPFieldInput />
              <OTPFieldInput />
              <OTPFieldSeparator />
              <OTPFieldInput />
              <OTPFieldInput />
              <OTPFieldInput />
            </OTPField>
            <Button
              size="sm"
              disabled={code.length < 6}
              onClick={() => toast.success(`Verifying code: ${code}`)}
            >
              Verify Code
            </Button>
          </div>
        ) : (
          <CodeBlock code={previewCode} />
        )}
      </div>

      <div className="space-y-4">
        <h2 id="installation" className="text-2xl font-bold tracking-tight">Installation</h2>
        <div className="relative rounded-lg border bg-muted/50 p-4 font-mono text-sm">
          <code>npx @alvinahmad/ui add otp-field</code>
        </div>
      </div>

      <div className="space-y-4">
        <h2 id="usage" className="text-2xl font-bold tracking-tight">Usage</h2>
        <CodeBlock code={`import { OTPField, OTPFieldInput, OTPFieldSeparator } from "@/components/ui/otp-field";`} />
      </div>

      <div className="space-y-6">
        <h2 id="api-reference" className="text-2xl font-bold tracking-tight">API Reference</h2>
        
        <div className="space-y-2">
          <h3 id="otpfield" className="text-lg font-semibold">OTPField</h3>
          <p className="text-sm text-muted-foreground">The root container coordinating character slots, clipboard paste, and keyboard arrow navigation.</p>
        </div>

        <div className="space-y-2">
          <h3 id="otpfieldinput" className="text-lg font-semibold">OTPFieldInput</h3>
          <p className="text-sm text-muted-foreground">Individual digit slot with auto-advance and backspace handling.</p>
        </div>

        <div className="space-y-2">
          <h3 id="otpfieldseparator" className="text-lg font-semibold">OTPFieldSeparator</h3>
          <p className="text-sm text-muted-foreground">Visual divider dot or dash between digit clusters.</p>
        </div>
      </div>
    </div>
  );
}
