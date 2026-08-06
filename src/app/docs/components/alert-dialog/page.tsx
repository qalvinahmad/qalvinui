"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/custom-tabs";
import { useState } from "react";
import { Check, Copy } from "lucide-react";

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

export default function AlertDialogPage() {
  const code = `import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

<AlertDialog>
  <AlertDialogTrigger>Open</AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete your account.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`;

  return (
    <div className="mx-auto w-full min-w-0 max-w-3xl space-y-10">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Alert Dialog</h1>
        <p className="text-lg text-muted-foreground">
          A modal dialog that interrupts the user with important content and expects a response.
        </p>
      </div>

      <div className="space-y-4">
        <Tabs defaultValue="base" className="w-full">
          <div className="border-b">
            <TabsList className="bg-transparent p-0 justify-start w-full gap-6">
              <TabsTrigger
                value="base"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-foreground bg-transparent px-0 pb-3 pt-2 font-semibold shadow-none"
              >
                Base UI
              </TabsTrigger>
              <TabsTrigger
                value="react-aria"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-foreground bg-transparent px-0 pb-3 pt-2 font-semibold shadow-none"
              >
                React Aria
              </TabsTrigger>
              <TabsTrigger
                value="radix"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-foreground bg-transparent px-0 pb-3 pt-2 font-semibold shadow-none"
              >
                Radix UI
              </TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="base" className="mt-6 border rounded-lg overflow-hidden">
            <div className="flex min-h-[350px] w-full items-center justify-center p-10 bg-background">
              {/* Dummy Component for preview */}
              <button className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90">
                Show Dialog
              </button>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">Installation</h2>
        <Tabs defaultValue="cli" className="w-full">
          <TabsList className="w-full justify-start border-b rounded-none bg-transparent p-0 gap-6">
            <TabsTrigger value="cli" className="rounded-none border-b-2 border-transparent bg-transparent px-0 pb-3 pt-2 shadow-none font-semibold">
              Command
            </TabsTrigger>
            <TabsTrigger value="manual" className="rounded-none border-b-2 border-transparent bg-transparent px-0 pb-3 pt-2 shadow-none font-semibold text-muted-foreground">
              Manual
            </TabsTrigger>
          </TabsList>
          <TabsContent value="cli" className="mt-6">
            <Tabs defaultValue="pnpm" className="w-full relative">
              <TabsList className="absolute right-4 top-4 z-10 bg-background/50 backdrop-blur-md">
                <TabsTrigger value="pnpm">pnpm</TabsTrigger>
                <TabsTrigger value="npm">npm</TabsTrigger>
                <TabsTrigger value="yarn">yarn</TabsTrigger>
                <TabsTrigger value="bun">bun</TabsTrigger>
              </TabsList>
              <TabsContent value="pnpm">
                <CodeBlock code="pnpm dlx @qalvinahmad/ui add alert-dialog" language="bash" />
              </TabsContent>
              <TabsContent value="npm">
                <CodeBlock code="npx @qalvinahmad/ui add alert-dialog" language="bash" />
              </TabsContent>
              <TabsContent value="yarn">
                <CodeBlock code="npx @qalvinahmad/ui add alert-dialog" language="bash" />
              </TabsContent>
              <TabsContent value="bun">
                <CodeBlock code="bunx --bun @qalvinahmad/ui add alert-dialog" language="bash" />
              </TabsContent>
            </Tabs>
          </TabsContent>
        </Tabs>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">Usage</h2>
        <CodeBlock code={code} />
      </div>
    </div>
  );
}
