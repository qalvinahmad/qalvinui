"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/custom-tabs";
import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal, AlertCircle } from "lucide-react";

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

function AlertDemo() {
  return (
    <div className="w-full max-w-md space-y-3">
      <Alert>
        <Terminal className="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Your session has expired. Please log in again.
        </AlertDescription>
      </Alert>
    </div>
  );
}

export default function AlertDocPage() {
  const codeTsx = `import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Terminal } from "lucide-react"

export function AlertDemo() {
  return (
    <Alert>
      <Terminal className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
  )
}`;
  const codeTs = `// Types & Utility Definition for Alert
import { type VariantProps } from "class-variance-authority";

export interface alertConfig {
  disabled?: boolean;
  className?: string;
  onAction?: (event: CustomEvent) => void;
}

export type alertState = "idle" | "loading" | "success" | "error";

export function handlealertState(state: alertState): boolean {
  return state === "success";
}`;
  const codeJsx = `import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Terminal } from "lucide-react"

export function AlertDemo() {
  return (
    <Alert>
      <Terminal className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
  )
}`;
  const codeJs = `// Vanilla JavaScript Helper for Alert
export const defaultalertConfig = {
  disabled: false,
  className: "",
  onAction: (event) => {
    console.log("Alert action triggered", event);
  },
};

export function checkalertReady(config = defaultalertConfig) {
  return !config.disabled;
}`;

  const manualSource = `import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const alertVariants = cva(
  "group/alert relative grid w-full gap-0.5 rounded-lg border px-2.5 py-2 text-left text-sm has-data-[slot=alert-action]:relative has-data-[slot=alert-action]:pr-18 has-[>svg]:grid-cols-[auto_1fr] has-[>svg]:gap-x-2 *:[svg]:row-span-2 *:[svg]:translate-y-0.5 *:[svg]:text-current *:[svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground",
        destructive:
          "bg-card text-destructive *:data-[slot=alert-description]:text-destructive/90 *:[svg]:text-current",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Alert({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof alertVariants>) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  )
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        "font-medium group-has-[>svg]/alert:col-start-2 [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground",
        className
      )}
      {...props}
    />
  )
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        "text-sm text-balance text-muted-foreground md:text-pretty [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground [&_p:not(:last-child)]:mb-4",
        className
      )}
      {...props}
    />
  )
}

function AlertAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-action"
      className={cn("absolute top-2 right-2", className)}
      {...props}
    />
  )
}

export { Alert, AlertTitle, AlertDescription, AlertAction }
`;
  const manualDeps = `npm i @base-ui/react clsx tailwind-merge class-variance-authority lucide-react`;


  return (
    <div className="mx-auto w-full min-w-0 max-w-3xl space-y-10">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Alert</h1>
        <p className="text-lg text-muted-foreground">
          Displays a callout for user attention.
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
              <AlertDemo />
            </div>
          </TabsContent>
          <TabsContent value="react-aria" className="mt-6 border rounded-lg overflow-hidden">
            <div className="flex min-h-[350px] w-full items-center justify-center p-10 bg-background">
              <AlertDemo />
            </div>
          </TabsContent>
          <TabsContent value="radix" className="mt-6 border rounded-lg overflow-hidden">
            <div className="flex min-h-[350px] w-full items-center justify-center p-10 bg-background">
              <AlertDemo />
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
              <TabsContent value="pnpm" className="mt-4"><CodeBlock code="pnpm dlx @alvinahmad/ui add alert" language="bash" /></TabsContent>
              <TabsContent value="npm" className="mt-4"><CodeBlock code="npx @alvinahmad/ui add alert" language="bash" /></TabsContent>
              <TabsContent value="yarn" className="mt-4"><CodeBlock code="npx @alvinahmad/ui add alert" language="bash" /></TabsContent>
              <TabsContent value="bun" className="mt-4"><CodeBlock code="bunx @alvinahmad/ui add alert" language="bash" /></TabsContent>
            </Tabs>
          </TabsContent>
          <TabsContent value="manual" className="mt-6 space-y-6">
            <div className="space-y-2">
              <p className="text-xs font-semibold text-foreground">1. Install the required dependencies:</p>
              <CodeBlock code={manualDeps} language="bash" />
            </div>
            <div className="space-y-2">
              <p className="text-xs font-semibold text-foreground">2. Copy and paste the following code into <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">components/ui/alert.tsx</code>:</p>
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
