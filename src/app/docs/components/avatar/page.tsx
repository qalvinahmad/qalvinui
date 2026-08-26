"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/custom-tabs";
import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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

function AvatarDemo() {
  return (
    <div className="flex items-center gap-4">
      <Avatar className="h-12 w-12">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar className="h-10 w-10">
        <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" alt="Sarah" />
        <AvatarFallback>SR</AvatarFallback>
      </Avatar>
      <Avatar className="h-8 w-8">
        <AvatarFallback className="bg-primary text-primary-foreground font-semibold">QA</AvatarFallback>
      </Avatar>
    </div>
  );
}

export default function AvatarDocPage() {
  const codeTsx = `import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

export function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  )
}`;
  const codeTs = `// Types & Utility Definition for Avatar
import { type VariantProps } from "class-variance-authority";

export interface avatarConfig {
  disabled?: boolean;
  className?: string;
  onAction?: (event: CustomEvent) => void;
}

export type avatarState = "idle" | "loading" | "success" | "error";

export function handleavatarState(state: avatarState): boolean {
  return state === "success";
}`;
  const codeJsx = `import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

export function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  )
}`;
  const codeJs = `// Vanilla JavaScript Helper for Avatar
export const defaultavatarConfig = {
  disabled: false,
  className: "",
  onAction: (event) => {
    console.log("Avatar action triggered", event);
  },
};

export function checkavatarReady(config = defaultavatarConfig) {
  return !config.disabled;
}`;

  const manualSource = `"use client"

import * as React from "react"
import { Avatar as AvatarPrimitive } from "@base-ui/react/avatar"

import { cn } from "@/lib/utils"

function Avatar({
  className,
  size = "default",
  ...props
}: AvatarPrimitive.Root.Props & {
  size?: "default" | "sm" | "lg"
}) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      data-size={size}
      className={cn(
        "group/avatar relative flex size-8 shrink-0 rounded-full select-none after:absolute after:inset-0 after:rounded-full after:border after:border-border after:mix-blend-darken data-[size=lg]:size-10 data-[size=sm]:size-6 dark:after:mix-blend-lighten",
        className
      )}
      {...props}
    />
  )
}

function AvatarImage({ className, ...props }: AvatarPrimitive.Image.Props) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn(
        "aspect-square size-full rounded-full object-cover",
        className
      )}
      {...props}
    />
  )
}

function AvatarFallback({
  className,
  ...props
}: AvatarPrimitive.Fallback.Props) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        "flex size-full items-center justify-center rounded-full bg-muted text-sm text-muted-foreground group-data-[size=sm]/avatar:text-xs",
        className
      )}
      {...props}
    />
  )
}

function AvatarBadge({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="avatar-badge"
      className={cn(
        "absolute right-0 bottom-0 z-10 inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground bg-blend-color ring-2 ring-background select-none",
        "group-data-[size=sm]/avatar:size-2 group-data-[size=sm]/avatar:[&>svg]:hidden",
        "group-data-[size=default]/avatar:size-2.5 group-data-[size=default]/avatar:[&>svg]:size-2",
        "group-data-[size=lg]/avatar:size-3 group-data-[size=lg]/avatar:[&>svg]:size-2",
        className
      )}
      {...props}
    />
  )
}

function AvatarGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="avatar-group"
      className={cn(
        "group/avatar-group flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background",
        className
      )}
      {...props}
    />
  )
}

function AvatarGroupCount({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="avatar-group-count"
      className={cn(
        "relative flex size-8 shrink-0 items-center justify-center rounded-full bg-muted text-sm text-muted-foreground ring-2 ring-background group-has-data-[size=lg]/avatar-group:size-10 group-has-data-[size=sm]/avatar-group:size-6 [&>svg]:size-4 group-has-data-[size=lg]/avatar-group:[&>svg]:size-5 group-has-data-[size=sm]/avatar-group:[&>svg]:size-3",
        className
      )}
      {...props}
    />
  )
}

export {
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarBadge,
}
`;
  const manualDeps = `npm i @base-ui/react clsx tailwind-merge class-variance-authority lucide-react`;


  return (
    <div className="mx-auto w-full min-w-0 max-w-3xl space-y-10">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Avatar</h1>
        <p className="text-lg text-muted-foreground">
          An image element with a fallback for representing the user.
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
              <AvatarDemo />
            </div>
          </TabsContent>
          <TabsContent value="react-aria" className="mt-6 border rounded-lg overflow-hidden">
            <div className="flex min-h-[350px] w-full items-center justify-center p-10 bg-background">
              <AvatarDemo />
            </div>
          </TabsContent>
          <TabsContent value="radix" className="mt-6 border rounded-lg overflow-hidden">
            <div className="flex min-h-[350px] w-full items-center justify-center p-10 bg-background">
              <AvatarDemo />
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
              <TabsContent value="pnpm" className="mt-4"><CodeBlock code="pnpm dlx @alvinahmad/ui add avatar" language="bash" /></TabsContent>
              <TabsContent value="npm" className="mt-4"><CodeBlock code="npx @alvinahmad/ui add avatar" language="bash" /></TabsContent>
              <TabsContent value="yarn" className="mt-4"><CodeBlock code="npx @alvinahmad/ui add avatar" language="bash" /></TabsContent>
              <TabsContent value="bun" className="mt-4"><CodeBlock code="bunx @alvinahmad/ui add avatar" language="bash" /></TabsContent>
            </Tabs>
          </TabsContent>
          <TabsContent value="manual" className="mt-6 space-y-6">
            <div className="space-y-2">
              <p className="text-xs font-semibold text-foreground">1. Install the required dependencies:</p>
              <CodeBlock code={manualDeps} language="bash" />
            </div>
            <div className="space-y-2">
              <p className="text-xs font-semibold text-foreground">2. Copy and paste the following code into <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">components/ui/avatar.tsx</code>:</p>
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
