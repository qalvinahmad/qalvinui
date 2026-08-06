"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/custom-tabs";
import { useState } from "react";
import { ChevronDown, Check, Copy } from "lucide-react";

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
              {/* Dummy Accordion Component for preview */}
              <div className="w-full max-w-md space-y-2">
                <div className="border-b">
                  <button className="flex w-full items-center justify-between py-4 font-medium transition-all hover:underline">
                    What are your shipping options?
                    <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
                  </button>
                </div>
                <div className="border-b">
                  <button className="flex w-full items-center justify-between py-4 font-medium transition-all hover:underline">
                    What is your return policy?
                    <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
                  </button>
                </div>
                <div className="border-b border-transparent">
                  <button className="flex w-full items-center justify-between py-4 font-medium transition-all hover:underline">
                    How can I contact customer support?
                    <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
                  </button>
                </div>
              </div>
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
        <CodeBlock code={accordionCode} />
      </div>
    </div>
  );
}
