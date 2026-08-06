"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/custom-tabs";
import { useState } from "react";
import { ChevronDown, Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

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

function DummyAccordion() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div className="w-full max-w-md space-y-2">
      <div className="border-b">
        <button onClick={() => toggle("item-1")} className="flex w-full items-center justify-between py-4 font-medium transition-all hover:underline text-left">
          What are your shipping options?
          <ChevronDown className={cn("h-4 w-4 shrink-0 transition-transform duration-200", openItem === "item-1" ? "rotate-180" : "")} />
        </button>
        {openItem === "item-1" && (
          <div className="pb-4 text-sm text-muted-foreground animate-in slide-in-from-top-1 fade-in-0 duration-200">
            We offer standard and expedited shipping for all orders.
          </div>
        )}
      </div>
      <div className="border-b">
        <button onClick={() => toggle("item-2")} className="flex w-full items-center justify-between py-4 font-medium transition-all hover:underline text-left">
          What is your return policy?
          <ChevronDown className={cn("h-4 w-4 shrink-0 transition-transform duration-200", openItem === "item-2" ? "rotate-180" : "")} />
        </button>
        {openItem === "item-2" && (
          <div className="pb-4 text-sm text-muted-foreground animate-in slide-in-from-top-1 fade-in-0 duration-200">
            You can return any item within 30 days of receipt.
          </div>
        )}
      </div>
      <div className="border-b border-transparent">
        <button onClick={() => toggle("item-3")} className="flex w-full items-center justify-between py-4 font-medium transition-all hover:underline text-left">
          How can I contact customer support?
          <ChevronDown className={cn("h-4 w-4 shrink-0 transition-transform duration-200", openItem === "item-3" ? "rotate-180" : "")} />
        </button>
        {openItem === "item-3" && (
          <div className="pb-4 text-sm text-muted-foreground animate-in slide-in-from-top-1 fade-in-0 duration-200">
            You can reach our support team via email at support@example.com.
          </div>
        )}
      </div>
    </div>
  );
}

export default function AccordionPage() {
  const accordionCode = `import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

<Accordion defaultValue={["item-1"]}>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
</Accordion>`;

  return (
    <div className="mx-auto w-full min-w-0 max-w-3xl space-y-10">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Accordion</h1>
        <p className="text-lg text-muted-foreground">
          A vertically stacked set of interactive headings that each reveal a section of content.
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
              <DummyAccordion />
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
                <CodeBlock code="pnpm dlx @qalvinahmad/ui add accordion" language="bash" />
              </TabsContent>
              <TabsContent value="npm">
                <CodeBlock code="npx @qalvinahmad/ui add accordion" language="bash" />
              </TabsContent>
              <TabsContent value="yarn">
                <CodeBlock code="npx @qalvinahmad/ui add accordion" language="bash" />
              </TabsContent>
              <TabsContent value="bun">
                <CodeBlock code="bunx --bun @qalvinahmad/ui add accordion" language="bash" />
              </TabsContent>
            </Tabs>
          </TabsContent>
        </Tabs>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">Usage</h2>
        <Tabs defaultValue="tsx" className="w-full">
          <TabsList className="w-full justify-start border-b rounded-none bg-transparent p-0 gap-6">
            <TabsTrigger value="tsx" className="rounded-none border-b-2 border-transparent data-[state=active]:border-foreground bg-transparent px-0 pb-3 pt-2 shadow-none font-semibold">
              .tsx
            </TabsTrigger>
            <TabsTrigger value="ts" className="rounded-none border-b-2 border-transparent data-[state=active]:border-foreground bg-transparent px-0 pb-3 pt-2 shadow-none font-semibold">
              .ts
            </TabsTrigger>
            <TabsTrigger value="jsx" className="rounded-none border-b-2 border-transparent data-[state=active]:border-foreground bg-transparent px-0 pb-3 pt-2 shadow-none font-semibold">
              .jsx
            </TabsTrigger>
            <TabsTrigger value="js" className="rounded-none border-b-2 border-transparent data-[state=active]:border-foreground bg-transparent px-0 pb-3 pt-2 shadow-none font-semibold">
              .js
            </TabsTrigger>
          </TabsList>
          <TabsContent value="tsx" className="mt-6">
            <CodeBlock code={accordionCode} language="tsx" />
          </TabsContent>
          <TabsContent value="ts" className="mt-6">
            <CodeBlock code={accordionCode} language="ts" />
          </TabsContent>
          <TabsContent value="jsx" className="mt-6">
            <CodeBlock code={accordionCode} language="jsx" />
          </TabsContent>
          <TabsContent value="js" className="mt-6">
            <CodeBlock code={accordionCode} language="js" />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
