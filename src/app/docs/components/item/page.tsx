"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/custom-tabs";
import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Item } from "@/components/ui/item";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Bell, Shield, Smartphone } from "lucide-react";

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

function ItemDemo() {
  return (
    <div className="flex flex-col gap-2.5 w-full max-w-sm">
      <Item
        icon={<Bell className="h-4 w-4" />}
        title="Push Notifications"
        subtitle="Receive alerts for updates"
        action={<Switch defaultChecked />}
      />
      <Item
        icon={<Shield className="h-4 w-4" />}
        title="Two-Factor Auth"
        subtitle="Enhanced security protection"
        action={<Badge variant="secondary">Enabled</Badge>}
        showChevron
      />
      <Item
        icon={<Smartphone className="h-4 w-4" />}
        title="Connected Devices"
        subtitle="3 active sessions"
        showChevron
      />
    </div>
  );
}

export default function ItemDocPage() {
  const codeTsx = `import { Item } from "@/components/ui/item"
import { Bell } from "lucide-react"

export function ItemDemo() {
  return (
    <Item
      icon={<Bell />}
      title="Notification Item"
      subtitle="Details text"
      showChevron
    />
  )
}`;
  const codeTs = `// Types & Utility Definition for Item
import { type VariantProps } from "class-variance-authority";

export interface itemConfig {
  disabled?: boolean;
  className?: string;
  onAction?: (event: CustomEvent) => void;
}

export type itemState = "idle" | "loading" | "success" | "error";

export function handleitemState(state: itemState): boolean {
  return state === "success";
}`;
  const codeJsx = `import { Item } from "@/components/ui/item"
import { Bell } from "lucide-react"

export function ItemDemo() {
  return (
    <Item
      icon={<Bell />}
      title="Notification Item"
      subtitle="Details text"
      showChevron
    />
  )
}`;
  const codeJs = `// Vanilla JavaScript Helper for Item
export const defaultitemConfig = {
  disabled: false,
  className: "",
  onAction: (event) => {
    console.log("Item action triggered", event);
  },
};

export function checkitemReady(config = defaultitemConfig) {
  return !config.disabled;
}`;

  const manualSource = `import * as React from "react";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

export interface ItemProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
  showChevron?: boolean;
}

export function Item({
  className,
  icon,
  title,
  subtitle,
  action,
  showChevron = false,
  ...props
}: ItemProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-between gap-3 p-3.5 rounded-xl border border-border/80 bg-card hover:bg-muted/40 transition-colors shadow-xs cursor-pointer",
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-3 min-w-0">
        {icon && (
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted text-foreground shrink-0">
            {icon}
          </div>
        )}
        <div className="min-w-0">
          <div className="text-xs font-semibold text-foreground truncate">{title}</div>
          {subtitle && <div className="text-[11px] text-muted-foreground truncate">{subtitle}</div>}
        </div>
      </div>
      <div className="flex items-center gap-2 shrink-0">
        {action}
        {showChevron && <ChevronRight className="h-4 w-4 text-muted-foreground" />}
      </div>
    </div>
  );
}
`;
  const manualDeps = `npm i @base-ui/react clsx tailwind-merge class-variance-authority lucide-react`;


  return (
    <div className="mx-auto w-full min-w-0 max-w-3xl space-y-10">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Item</h1>
        <p className="text-lg text-muted-foreground">
          A list or menu item row component with leading icon, title, subtitle, and actions.
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
              <ItemDemo />
            </div>
          </TabsContent>
          <TabsContent value="react-aria" className="mt-6 border rounded-lg overflow-hidden">
            <div className="flex min-h-[350px] w-full items-center justify-center p-10 bg-background">
              <ItemDemo />
            </div>
          </TabsContent>
          <TabsContent value="radix" className="mt-6 border rounded-lg overflow-hidden">
            <div className="flex min-h-[350px] w-full items-center justify-center p-10 bg-background">
              <ItemDemo />
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
              <TabsContent value="pnpm" className="mt-4"><CodeBlock code="pnpm dlx @alvinahmad/ui add item" language="bash" /></TabsContent>
              <TabsContent value="npm" className="mt-4"><CodeBlock code="npx @alvinahmad/ui add item" language="bash" /></TabsContent>
              <TabsContent value="yarn" className="mt-4"><CodeBlock code="npx @alvinahmad/ui add item" language="bash" /></TabsContent>
              <TabsContent value="bun" className="mt-4"><CodeBlock code="bunx @alvinahmad/ui add item" language="bash" /></TabsContent>
            </Tabs>
          </TabsContent>
          <TabsContent value="manual" className="mt-6 space-y-6">
            <div className="space-y-2">
              <p className="text-xs font-semibold text-foreground">1. Install the required dependencies:</p>
              <CodeBlock code={manualDeps} language="bash" />
            </div>
            <div className="space-y-2">
              <p className="text-xs font-semibold text-foreground">2. Copy and paste the following code into <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">components/ui/item.tsx</code>:</p>
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
