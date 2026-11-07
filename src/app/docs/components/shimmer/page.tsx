"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/custom-tabs";
import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { ShiningText } from "@/components/ui/shining-text";

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

function ShimmerDemo() {
  return (
    <div className="space-y-3 text-center">
      <h2 className="text-3xl font-extrabold">
        <ShiningText duration={3}>
          ✨ Experience Next-Gen Shimmer UI
        </ShiningText>
      </h2>
    </div>
  );
}

export default function ShimmerShiningTextDocPage() {
  const codeTsx = `import { ShiningText } from "@/components/ui/shining-text"

export function ShimmerDemo() {
  return <ShiningText duration={3}>Shining Text</ShiningText>
}`;
  const codeTs = `// Types & Utility Definition for Shimmer / Shining Text
import { type VariantProps } from "class-variance-authority";

export interface shimmerConfig {
  disabled?: boolean;
  className?: string;
  onAction?: (event: CustomEvent) => void;
}

export type shimmerState = "idle" | "loading" | "success" | "error";

export function handleshimmerState(state: shimmerState): boolean {
  return state === "success";
}`;
  const codeJsx = `import { ShiningText } from "@/components/ui/shining-text"

export function ShimmerDemo() {
  return <ShiningText duration={3}>Shining Text</ShiningText>
}`;
  const codeJs = `// Vanilla JavaScript Helper for Shimmer / Shining Text
export const defaultshimmerConfig = {
  disabled: false,
  className: "",
  onAction: (event) => {
    console.log("Shimmer / Shining Text action triggered", event);
  },
};

export function checkshimmerReady(config = defaultshimmerConfig) {
  return !config.disabled;
}`;

  const manualSource = `"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface ShiningTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  duration?: number;
  shimmerColor?: string;
  className?: string;
}

export function ShiningText({
  children,
  duration = 3,
  shimmerColor = "rgba(255, 255, 255, 0.8)",
  className,
  ...props
}: ShiningTextProps) {
  return (
    <span
      className={cn(
        "relative inline-block bg-clip-text text-transparent select-none",
        "bg-[length:250%_100%] bg-no-repeat",
        "bg-gradient-to-r from-muted-foreground via-foreground to-muted-foreground",
        "dark:from-zinc-500 dark:via-zinc-100 dark:to-zinc-500",
        "animate-[shining-sweep_linear_infinite]",
        className
      )}
      style={{
        animationDuration: \`\${duration}s\`,
        backgroundImage: \`linear-gradient(110deg, currentColor 0%, currentColor 35%, \${shimmerColor} 50%, currentColor 65%, currentColor 100%)\`,
        ...props.style,
      }}
      {...props}
    >
      {children}
    </span>
  );
}
`;
  const manualDeps = `npm i clsx tailwind-merge`;


  return (
    <div className="mx-auto w-full min-w-0 max-w-3xl space-y-10">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Shimmer / Shining Text</h1>
        <p className="text-lg text-muted-foreground">
          An animated shimmering text and glow component.
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
              <ShimmerDemo />
            </div>
          </TabsContent>
          <TabsContent value="react-aria" className="mt-6 border rounded-lg overflow-hidden">
            <div className="flex min-h-[350px] w-full items-center justify-center p-10 bg-background">
              <ShimmerDemo />
            </div>
          </TabsContent>
          <TabsContent value="radix" className="mt-6 border rounded-lg overflow-hidden">
            <div className="flex min-h-[350px] w-full items-center justify-center p-10 bg-background">
              <ShimmerDemo />
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
              <TabsContent value="pnpm" className="mt-4"><CodeBlock code="pnpm dlx @alvinahmad/ui add shimmer" language="bash" /></TabsContent>
              <TabsContent value="npm" className="mt-4"><CodeBlock code="npx @alvinahmad/ui add shimmer" language="bash" /></TabsContent>
              <TabsContent value="yarn" className="mt-4"><CodeBlock code="npx @alvinahmad/ui add shimmer" language="bash" /></TabsContent>
              <TabsContent value="bun" className="mt-4"><CodeBlock code="bunx @alvinahmad/ui add shimmer" language="bash" /></TabsContent>
            </Tabs>
          </TabsContent>
          <TabsContent value="manual" className="mt-6 space-y-6">
            <div className="space-y-2">
              <p className="text-xs font-semibold text-foreground">1. Install the required dependencies:</p>
              <CodeBlock code={manualDeps} language="bash" />
            </div>
            <div className="space-y-2">
              <p className="text-xs font-semibold text-foreground">2. Copy and paste the following code into <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">components/ui/shining-text.tsx</code>:</p>
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
