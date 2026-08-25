"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/custom-tabs";
import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { ScrollFade } from "@/components/ui/scroll-fade";

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

function ScrollFadeDemo() {
  return (
    <ScrollFade className="w-full max-w-md">
      <div className="space-y-4 p-4">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="rounded-lg border p-4 bg-card">
            <h4 className="font-medium">Item {i + 1}</h4>
            <p className="text-sm text-muted-foreground">
              This is a scrollable content item. Scroll down to see the fade effect at the edges.
            </p>
          </div>
        ))}
      </div>
    </ScrollFade>
  );
}

export default function ScrollFadePage() {
  const codeTsx = `import { ScrollFade } from "@/components/ui/scroll-fade"

export function ScrollFadeDemo() {
  return (
    <ScrollFade className="w-full max-w-md">
      <div className="space-y-4 p-4">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="rounded-lg border p-4">
            <h4 className="font-medium">Item {i + 1}</h4>
            <p className="text-sm text-muted-foreground">
              Scrollable content item.
            </p>
          </div>
        ))}
      </div>
    </ScrollFade>
  )
}`;
  const codeTs = `import { ScrollFade } from "@/components/ui/scroll-fade"
import type { VariantProps } from "class-variance-authority"

// ScrollFade component props type
interface ScrollFadeProps {
  children: React.ReactNode
  fadeHeight?: number
  fadeColor?: string
  className?: string
}

export type { ScrollFadeProps }`;
  const codeJsx = `import { ScrollFade } from "@/components/ui/scroll-fade"

function ScrollFadeDemo() {
  return (
    <ScrollFade className="w-full max-w-md">
      <div className="space-y-4 p-4">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="rounded-lg border p-4">
            <h4 className="font-medium">Item {i + 1}</h4>
            <p className="text-sm text-muted-foreground">
              Scrollable content item.
            </p>
          </div>
        ))}
      </div>
    </ScrollFade>
  )
}

export default ScrollFadeDemo`;
  const codeJs = `// ScrollFade behavior in vanilla JavaScript
const scrollContainer = document.querySelector('[data-slot="scroll-fade"]')

if (scrollContainer) {
  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = scrollContainer
    const isAtTop = scrollTop === 0
    const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1
    
    // Update fade visibility
    const topFade = scrollContainer.previousElementSibling
    const bottomFade = scrollContainer.nextElementSibling
    
    if (topFade) topFade.style.display = isAtTop ? 'none' : 'block'
    if (bottomFade) bottomFade.style.display = isAtBottom ? 'none' : 'block'
  }
  
  scrollContainer.addEventListener('scroll', handleScroll)
  handleScroll()
}`;

  const manualSource = `"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface ScrollFadeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  fadeHeight?: number
  fadeColor?: string
}

function ScrollFade({ 
  children, 
  className, 
  fadeHeight = 40,
  fadeColor,
  ...props 
}: ScrollFadeProps) {
  const scrollRef = React.useRef<HTMLDivElement>(null)
  const [isAtTop, setIsAtTop] = React.useState(true)
  const [isAtBottom, setIsAtBottom] = React.useState(false)

  React.useEffect(() => {
    const scrollElement = scrollRef.current
    if (!scrollElement) return

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = scrollElement
      setIsAtTop(scrollTop === 0)
      setIsAtBottom(scrollTop + clientHeight >= scrollHeight - 1)
    }

    scrollElement.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => scrollElement.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className={cn("relative", className)} {...props}>
      {!isAtTop && (
        <div 
          className="absolute top-0 left-0 right-0 z-10 pointer-events-none"
          style={{ 
            height: fadeHeight,
            background: fadeColor || "linear-gradient(to bottom, var(--background), transparent)"
          }}
        />
      )}
      
      <div 
        ref={scrollRef}
        className="overflow-auto"
        style={{ maxHeight: "400px" }}
      >
        {children}
      </div>
      
      {!isAtBottom && (
        <div 
          className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none"
          style={{ 
            height: fadeHeight,
            background: fadeColor || "linear-gradient(to top, var(--background), transparent)"
          }}
        />
      )}
    </div>
  )
}

export { ScrollFade }
`;
  const manualDeps = `npm i clsx tailwind-merge`;


  return (
    <div className="mx-auto w-full min-w-0 max-w-3xl space-y-10">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Scroll Fade</h1>
        <p className="text-lg text-muted-foreground">
          A utility component that adds fade effects at the edges of scrollable content.
        </p>
      </div>

      <div className="space-y-4">
        <Tabs defaultValue="base" className="w-full">
          <div className="border-b">
            <TabsList className="bg-transparent p-0 justify-start w-full gap-6">
              <TabsTrigger value="base" className="rounded-none border-b-2 border-transparent data-[state=active]:border-foreground bg-transparent px-0 pb-3 pt-2 font-semibold shadow-none">
                Preview
              </TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="base" className="mt-6 border rounded-lg overflow-hidden">
            <div className="flex min-h-[350px] w-full items-center justify-center p-10 bg-background">
              <ScrollFadeDemo />
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
              <TabsContent value="pnpm" className="mt-4"><CodeBlock code="pnpm dlx @qalvinahmad/ui add scroll-fade" language="bash" /></TabsContent>
              <TabsContent value="npm" className="mt-4"><CodeBlock code="npx @qalvinahmad/ui add scroll-fade" language="bash" /></TabsContent>
              <TabsContent value="yarn" className="mt-4"><CodeBlock code="npx @qalvinahmad/ui add scroll-fade" language="bash" /></TabsContent>
              <TabsContent value="bun" className="mt-4"><CodeBlock code="bunx @qalvinahmad/ui add scroll-fade" language="bash" /></TabsContent>
            </Tabs>
          </TabsContent>
          <TabsContent value="manual" className="mt-6 space-y-6">
            <div className="space-y-2">
              <p className="text-xs font-semibold text-foreground">1. Install the required dependencies:</p>
              <CodeBlock code={manualDeps} language="bash" />
            </div>
            <div className="space-y-2">
              <p className="text-xs font-semibold text-foreground">2. Copy and paste the following code into <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">components/ui/scroll-fade.tsx</code>:</p>
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

      <div className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">API Reference</h2>
        <div className="rounded-lg border">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="p-3 text-left font-medium">Prop</th>
                <th className="p-3 text-left font-medium">Type</th>
                <th className="p-3 text-left font-medium">Default</th>
                <th className="p-3 text-left font-medium">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-3 font-mono text-sm">children</td>
                <td className="p-3 font-mono text-sm">ReactNode</td>
                <td className="p-3 font-mono text-sm">-</td>
                <td className="p-3 text-sm text-muted-foreground">The scrollable content</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-sm">fadeHeight</td>
                <td className="p-3 font-mono text-sm">number</td>
                <td className="p-3 font-mono text-sm">40</td>
                <td className="p-3 text-sm text-muted-foreground">Height of the fade effect in pixels</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-sm">fadeColor</td>
                <td className="p-3 font-mono text-sm">string</td>
                <td className="p-3 font-mono text-sm">auto</td>
                <td className="p-3 text-sm text-muted-foreground">Custom fade gradient color</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">className</td>
                <td className="p-3 font-mono text-sm">string</td>
                <td className="p-3 font-mono text-sm">-</td>
                <td className="p-3 text-sm text-muted-foreground">Additional CSS classes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">Features</h2>
        <ul className="space-y-2 text-muted-foreground list-disc pl-6">
          <li><strong className="text-foreground font-semibold">Automatic Detection:</strong> Automatically detects scroll position and shows/hides fade effects</li>
          <li><strong className="text-foreground font-semibold">Customizable Height:</strong> Adjust the height of the fade effect with the <code className="bg-muted px-1.5 py-0.5 rounded text-sm">fadeHeight</code> prop</li>
          <li><strong className="text-foreground font-semibold">Custom Colors:</strong> Use custom gradient colors with the <code className="bg-muted px-1.5 py-0.5 rounded text-sm">fadeColor</code> prop</li>
          <li><strong className="text-foreground font-semibold">Lightweight:</strong> Minimal bundle size with no external dependencies</li>
        </ul>
      </div>
    </div>
  );
}
