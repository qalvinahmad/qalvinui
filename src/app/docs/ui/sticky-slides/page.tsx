"use client";

import { useState } from "react";
import { Check, Copy, Layers, ArrowDown, FileCode, Sparkles } from "lucide-react";
import { StickySlides } from "@/components/ui/sticky-slides";
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

export default function StickySlidesDocPage() {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");
  const [codeFormat, setCodeFormat] = useState<"tsx" | "jsx" | "ts" | "js">("tsx");

  const tsxCode = `"use client";

import { StickySlides } from "@/components/ui/sticky-slides";

export function StickySlidesDemo() {
  return (
    <StickySlides
      slideHeightClass="h-screen"
      showIndicators={true}
    />
  );
}`;

  const jsxCode = `"use client";

import React from "react";
import { StickySlides } from "@/components/ui/sticky-slides";

export function StickySlidesDemo() {
  return (
    <StickySlides
      slideHeightClass="h-screen"
      showIndicators={true}
    />
  );
}`;

  const tsCode = `// TypeScript Slide Definition & HTML Generator
export interface SlideData {
  title: string;
  subtitle?: string;
  bgGradient: string;
  textColor?: string;
}

export const slides: SlideData[] = [
  {
    title: "The First slide",
    subtitle: "Scroll Down for next slide",
    bgGradient: "from-green-200 to-blue-200",
    textColor: "text-slate-900"
  },
  {
    title: "The Second slide",
    subtitle: "Scroll Down for next slide",
    bgGradient: "from-indigo-800 to-purple-800",
    textColor: "text-white"
  },
  {
    title: "The Third slide",
    subtitle: "Scroll Down",
    bgGradient: "from-purple-800 to-pink-800",
    textColor: "text-white"
  },
  {
    title: "The Fourth slide",
    bgGradient: "from-blue-200 to-indigo-100",
    textColor: "text-slate-900"
  }
];`;

  const jsCode = `<!-- Vanilla HTML + Tailwind CSS -->
<div class="relative">
  <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-green-200 to-blue-200 text-slate-900">
    <h2 class="text-4xl font-bold">The First slide</h2>
    <p class="mt-2">Scroll Down for next slide</p>
  </div>
  <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-indigo-800 to-purple-800 text-white">
    <h2 class="text-4xl font-bold">The Second slide</h2>
    <p class="mt-2">Scroll Down for next slide</p>
  </div>
  <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-800 to-pink-800 text-white">
    <h2 class="text-4xl font-bold">The Third slide</h2>
    <p class="mt-2">Scroll Down</p>
  </div>
  <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-200 to-indigo-100 text-black">
    <h2 class="text-4xl font-bold">The Fourth slide</h2>
  </div>
</div>

<script src="https://cdn.tailwindcss.com"></script>`;

  const cliInstallCode = `npx @alvinahmad/qalvinui add sticky-slides`;

  const getCodeSnippet = () => {
    switch (codeFormat) {
      case "tsx":
        return tsxCode;
      case "jsx":
        return jsxCode;
      case "ts":
        return tsCode;
      case "js":
        return jsCode;
    }
  };

  return (
    <div className="space-y-10 max-w-4xl">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
            Scroll Effects
          </span>
          <span className="text-xs text-muted-foreground font-mono">ui/sticky-slides</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight">Sticky Full Page Slides</h1>
        <p className="text-lg text-muted-foreground">
          Full-viewport scroll-driven presentation slides using pure CSS sticky stacking contexts with smooth gradient transitions. Available in .tsx, .jsx, .ts, and .js formats.
        </p>
      </div>

      {/* Tabs */}
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b pb-2">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab("preview")}
              className={`px-3 py-1 text-sm font-medium border-b-2 transition-colors cursor-pointer ${
                activeTab === "preview"
                  ? "border-primary text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              Preview
            </button>
            <button
              onClick={() => setActiveTab("code")}
              className={`px-3 py-1 text-sm font-medium border-b-2 transition-colors cursor-pointer ${
                activeTab === "code"
                  ? "border-primary text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              Code
            </button>
          </div>

          {activeTab === "code" && (
            <div className="flex items-center gap-1 bg-muted p-1 rounded-lg text-xs">
              {(["tsx", "jsx", "ts", "js"] as const).map((fmt) => (
                <button
                  key={fmt}
                  onClick={() => setCodeFormat(fmt)}
                  className={cn(
                    "px-2.5 py-0.5 rounded-md font-mono transition-all cursor-pointer",
                    codeFormat === fmt
                      ? "bg-background text-foreground font-semibold shadow-xs"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  .{fmt}
                </button>
              ))}
            </div>
          )}
        </div>

        {activeTab === "preview" ? (
          <div className="rounded-2xl border p-4 sm:p-6 bg-card/40 space-y-4">
            <div className="flex items-center justify-between text-xs text-muted-foreground px-2">
              <span className="flex items-center gap-1.5 font-medium">
                <Layers className="w-3.5 h-3.5 text-primary" /> Scroll container below to see sticky stacking
              </span>
              <span className="font-mono text-[11px] hidden sm:inline">CSS position: sticky; top: 0</span>
            </div>

            <div className="h-[460px] overflow-y-auto no-scrollbar rounded-2xl border border-border/80 relative shadow-inner scroll-smooth">
              <StickySlides
                slideHeightClass="h-[460px]"
                showIndicators={false}
              />
            </div>
          </div>
        ) : (
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>Showing: <strong>sticky-slides.{codeFormat}</strong></span>
              <span className="font-mono text-[11px]">Format: {codeFormat.toUpperCase()}</span>
            </div>
            <CodeBlock code={getCodeSnippet()} language={codeFormat === "js" ? "html" : "tsx"} />
          </div>
        )}
      </div>

      {/* Installation */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold tracking-tight">Installation</h2>
        <CodeBlock code={cliInstallCode} language="bash" />
      </div>

      {/* Props Reference */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold tracking-tight">Props Reference</h2>
        <div className="rounded-xl border overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-muted/50 border-b text-xs uppercase text-muted-foreground">
              <tr>
                <th className="px-4 py-3">Prop</th>
                <th className="px-4 py-3">Type</th>
                <th className="px-4 py-3">Default</th>
                <th className="px-4 py-3">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y text-muted-foreground">
              <tr>
                <td className="px-4 py-3 font-mono text-foreground font-semibold">slides</td>
                <td className="px-4 py-3 font-mono text-xs">StickySlideItem[]</td>
                <td className="px-4 py-3 font-mono text-xs">DEFAULT_STICKY_SLIDES</td>
                <td className="px-4 py-3">Array of slide items with title, subtitle, bgGradient, and textColor.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-foreground font-semibold">slideHeightClass</td>
                <td className="px-4 py-3 font-mono text-xs">string</td>
                <td className="px-4 py-3 font-mono text-xs">"h-screen"</td>
                <td className="px-4 py-3">Tailwind height utility class for each sticky slide ("h-screen", "h-[500px]").</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-foreground font-semibold">showIndicators</td>
                <td className="px-4 py-3 font-mono text-xs">boolean</td>
                <td className="px-4 py-3 font-mono text-xs">true</td>
                <td className="px-4 py-3">Renders vertical slide progress dots.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-foreground font-semibold">children</td>
                <td className="px-4 py-3 font-mono text-xs">ReactNode</td>
                <td className="px-4 py-3 font-mono text-xs">-</td>
                <td className="px-4 py-3">Optional custom slide children to compose freely inside the sticky wrapper.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
