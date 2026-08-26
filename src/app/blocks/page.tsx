"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Monitor,
  Tablet,
  Smartphone,
  Maximize,
  RotateCw,
  LayoutDashboard,
  Settings,
  Users,
  FileText,
  PieChart,
  Copy,
  Check,
  CreditCard,
  Sparkles,
  Lock,
  UserPlus,
} from "lucide-react";
import { InteractiveCheckout } from "@/components/blocks/interactive-checkout";
import { ShiningTextBlock } from "@/components/blocks/shining-text-block";

export default function BlocksPage() {
  const [selectedCategory, setSelectedCategory] = useState("Featured");
  const [activeTab, setActiveTab] = useState<{ [key: string]: "preview" | "code" }>({
    checkout: "preview",
    shiningText: "preview",
    dashboard: "preview",
    sidebar: "preview",
  });
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="container mx-auto px-4 py-16 max-w-screen-xl">
      {/* Hero Section */}
      <div className="flex flex-col items-center text-center mb-16 space-y-6">
        <Link
          href="#shining-text-block"
          className="inline-flex items-center rounded-full bg-muted px-4 py-1.5 text-sm font-medium transition-colors hover:bg-muted/80"
        >
          ✨ New Shining Text component <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Building Blocks for the Web</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-[600px]">
          Clean, modern building blocks. Copy and paste into your apps. Works with all React frameworks. Open Source. Free forever.
        </p>
        <div className="flex items-center gap-4 pt-4">
          <Link
            href="#blocks-grid"
            className="inline-flex h-10 items-center justify-center rounded-md bg-foreground px-8 text-sm font-medium text-background shadow transition-colors hover:bg-foreground/90"
          >
            Browse Blocks
          </Link>
          <Link
            href="/components"
            className="inline-flex h-10 items-center justify-center rounded-md px-8 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            View Components
          </Link>
        </div>
      </div>

      {/* Categories Bar */}
      <div id="blocks-grid" className="flex items-center justify-between mb-8 overflow-x-auto pb-2 scroll-mt-20">
        <div className="flex items-center space-x-6 text-sm font-medium">
          {["Featured", "Text & Motion", "Checkout", "Sidebar", "Login", "Signup"].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`py-2 transition-colors ${
                selectedCategory === cat
                  ? "text-foreground border-b-2 border-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <button className="inline-flex items-center justify-center rounded-md bg-muted px-4 py-2 text-sm font-medium hover:bg-muted/80 shrink-0">
          Browse all blocks
        </button>
      </div>

      {/* Blocks List */}
      <div className="space-y-16">
        
        {/* Block: Shining Text (preetsuthar17/shining-text) */}
        {(selectedCategory === "Featured" || selectedCategory === "Text & Motion") && (
          <div id="shining-text-block" className="space-y-4 scroll-mt-24">
            <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="inline-flex items-center rounded-md border bg-muted p-1">
                  <button
                    onClick={() => setActiveTab((prev) => ({ ...prev, shiningText: "preview" }))}
                    className={`rounded-sm px-3 py-1 text-sm font-medium transition-all ${
                      activeTab.shiningText === "preview"
                        ? "bg-background text-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Preview
                  </button>
                  <button
                    onClick={() => setActiveTab((prev) => ({ ...prev, shiningText: "code" }))}
                    className={`rounded-sm px-3 py-1 text-sm font-medium transition-all ${
                      activeTab.shiningText === "code"
                        ? "bg-background text-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Code
                  </button>
                </div>
                <span className="text-sm font-medium hidden md:inline-flex items-center gap-2 border-l pl-4 border-border text-foreground">
                  <Sparkles className="h-4 w-4 text-muted-foreground" /> Shining text with interactive sweep speed, color presets & customizable inputs
                </span>
              </div>

              <div className="flex items-center gap-2 overflow-x-auto pb-2 xl:pb-0">
                <div className="hidden md:flex items-center gap-1 border-r pr-2 border-border text-muted-foreground">
                  <button className="p-2 hover:text-foreground rounded-md hover:bg-muted"><Monitor className="h-4 w-4" /></button>
                  <button className="p-2 hover:text-foreground rounded-md hover:bg-muted"><Tablet className="h-4 w-4" /></button>
                  <button className="p-2 hover:text-foreground rounded-md hover:bg-muted"><Smartphone className="h-4 w-4" /></button>
                  <button className="p-2 hover:text-foreground rounded-md hover:bg-muted"><Maximize className="h-4 w-4" /></button>
                  <button className="p-2 hover:text-foreground rounded-md hover:bg-muted"><RotateCw className="h-4 w-4" /></button>
                </div>
                <div className="flex items-center gap-2 pl-2">
                  <button
                    onClick={() => copyToClipboard("npx @21st-dev/cli add preetsuthar17/shining-text", "shining-cmd")}
                    className="inline-flex items-center gap-2 rounded-md border bg-muted/50 px-3 py-1.5 text-xs text-muted-foreground font-mono hover:bg-muted/80 transition-colors"
                  >
                    <span className="text-foreground">{">_"}</span> npx @21st-dev/cli add preetsuthar17/shining-text
                    {copiedId === "shining-cmd" ? (
                      <Check className="h-3.5 w-3.5 text-emerald-500" />
                    ) : (
                      <Copy className="h-3.5 w-3.5" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Block Content */}
            {activeTab.shiningText === "preview" ? (
              <div className="rounded-2xl border bg-muted/10 p-4 md:p-10 flex items-center justify-center min-h-[500px]">
                <ShiningTextBlock />
              </div>
            ) : (
              <div className="rounded-2xl border bg-zinc-950 text-zinc-100 p-6 font-mono text-xs overflow-x-auto">
                <div className="flex justify-between items-center pb-4 border-b border-zinc-800 mb-4">
                  <span className="text-zinc-400">src/components/ui/shining-text.tsx</span>
                  <button
                    onClick={() => copyToClipboard('import { ShiningText } from "@/components/ui/shining-text";\n\nexport default function Example() {\n  return (\n    <h1 className="text-4xl font-bold">\n      <ShiningText duration={3}>Shining Text Animation</ShiningText>\n    </h1>\n  );\n}', "shining-code")}
                    className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-zinc-100 bg-zinc-800/80 px-2.5 py-1 rounded"
                  >
                    {copiedId === "shining-code" ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                    Copy Code
                  </button>
                </div>
                <pre className="text-zinc-300">
{`import { ShiningText } from "@/components/ui/shining-text";

export default function Example() {
  return (
    <h1 className="text-4xl font-bold">
      <ShiningText duration={3}>
        Shining Text Animation
      </ShiningText>
    </h1>
  );
}`}
                </pre>
              </div>
            )}
          </div>
        )}

        {/* Block: Interactive Checkout */}
        {(selectedCategory === "Featured" || selectedCategory === "Checkout") && (
          <div id="checkout-block" className="space-y-4 scroll-mt-24">
            <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="inline-flex items-center rounded-md border bg-muted p-1">
                  <button
                    onClick={() => setActiveTab((prev) => ({ ...prev, checkout: "preview" }))}
                    className={`rounded-sm px-3 py-1 text-sm font-medium transition-all ${
                      activeTab.checkout === "preview"
                        ? "bg-background text-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Preview
                  </button>
                  <button
                    onClick={() => setActiveTab((prev) => ({ ...prev, checkout: "code" }))}
                    className={`rounded-sm px-3 py-1 text-sm font-medium transition-all ${
                      activeTab.checkout === "code"
                        ? "bg-background text-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Code
                  </button>
                </div>
                <span className="text-sm font-medium hidden md:inline-flex items-center gap-2 border-l pl-4 border-border text-foreground">
                  <CreditCard className="h-4 w-4 text-muted-foreground" /> Interactive checkout flow with animated card, shipping options & promo validator
                </span>
              </div>

              <div className="flex items-center gap-2 overflow-x-auto pb-2 xl:pb-0">
                <div className="hidden md:flex items-center gap-1 border-r pr-2 border-border text-muted-foreground">
                  <button className="p-2 hover:text-foreground rounded-md hover:bg-muted"><Monitor className="h-4 w-4" /></button>
                  <button className="p-2 hover:text-foreground rounded-md hover:bg-muted"><Tablet className="h-4 w-4" /></button>
                  <button className="p-2 hover:text-foreground rounded-md hover:bg-muted"><Smartphone className="h-4 w-4" /></button>
                  <button className="p-2 hover:text-foreground rounded-md hover:bg-muted"><Maximize className="h-4 w-4" /></button>
                  <button className="p-2 hover:text-foreground rounded-md hover:bg-muted"><RotateCw className="h-4 w-4" /></button>
                </div>
                <div className="flex items-center gap-2 pl-2">
                  <button
                    onClick={() => copyToClipboard("npx @qalvinahmad/ui add interactive-checkout", "checkout-cmd")}
                    className="inline-flex items-center gap-2 rounded-md border bg-muted/50 px-3 py-1.5 text-xs text-muted-foreground font-mono hover:bg-muted/80 transition-colors"
                  >
                    <span className="text-foreground">{">_"}</span> npx @qalvinahmad/ui add interactive-checkout
                    {copiedId === "checkout-cmd" ? (
                      <Check className="h-3.5 w-3.5 text-emerald-500" />
                    ) : (
                      <Copy className="h-3.5 w-3.5" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Block Content */}
            {activeTab.checkout === "preview" ? (
              <div className="rounded-2xl border bg-muted/10 p-4 md:p-10 flex items-center justify-center min-h-[600px]">
                <InteractiveCheckout />
              </div>
            ) : (
              <div className="rounded-2xl border bg-zinc-950 text-zinc-100 p-6 font-mono text-xs overflow-x-auto">
                <div className="flex justify-between items-center pb-4 border-b border-zinc-800 mb-4">
                  <span className="text-zinc-400">src/components/ui/interactive-checkout.tsx</span>
                  <button
                    onClick={() => copyToClipboard('import { InteractiveCheckout, Product } from "@/components/ui/interactive-checkout";\n\nconst defaultProducts: Product[] = [\n  {\n    id: "1",\n    name: "Air Max 90",\n    price: 129.99,\n    category: "Running",\n    image: "https://ferf1mheo22r9ira.public.blob.vercel-storage.com/shoes-d2GWFGnVlkkUneRD3x2xDbUVHO1qMp",\n    color: "Black/White",\n  },\n  {\n    id: "2",\n    name: "Ultra Boost",\n    price: 179.99,\n    category: "Performance",\n    image: "https://ferf1mheo22r9ira.public.blob.vercel-storage.com/shoes-d2GWFGnVlkkUneRD3x2xDbUVHO1qMp",\n    color: "Grey/Blue",\n  },\n  {\n    id: "3",\n    name: "Classic Trainer",\n    price: 89.99,\n    category: "Casual",\n    image: "https://ferf1mheo22r9ira.public.blob.vercel-storage.com/shoes-d2GWFGnVlkkUneRD3x2xDbUVHO1qMp",\n    color: "White/Red",\n  },\n];\n\nexport function InteractiveCheckoutDemo() {\n  return <InteractiveCheckout products={defaultProducts} />;\n}', "code-snippet")}
                    className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-zinc-100 bg-zinc-800/80 px-2.5 py-1 rounded"
                  >
                    {copiedId === "code-snippet" ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                    Copy Code
                  </button>
                </div>
                <pre className="text-zinc-300">
{`import { InteractiveCheckout, Product } from "@/components/ui/interactive-checkout";

const defaultProducts: Product[] = [
  {
    id: "1",
    name: "Air Max 90",
    price: 129.99,
    category: "Running",
    image: "https://ferf1mheo22r9ira.public.blob.vercel-storage.com/shoes-d2GWFGnVlkkUneRD3x2xDbUVHO1qMp",
    color: "Black/White",
  },
  {
    id: "2",
    name: "Ultra Boost",
    price: 179.99,
    category: "Performance",
    image: "https://ferf1mheo22r9ira.public.blob.vercel-storage.com/shoes-d2GWFGnVlkkUneRD3x2xDbUVHO1qMp",
    color: "Grey/Blue",
  },
  {
    id: "3",
    name: "Classic Trainer",
    price: 89.99,
    category: "Casual",
    image: "https://ferf1mheo22r9ira.public.blob.vercel-storage.com/shoes-d2GWFGnVlkkUneRD3x2xDbUVHO1qMp",
    color: "White/Red",
  },
];

export function InteractiveCheckoutDemo() {
  return <InteractiveCheckout products={defaultProducts} />;
}`}
                </pre>
              </div>
            )}
          </div>
        )}

        {/* Block 1 */}
        {(selectedCategory === "Featured" || selectedCategory === "Sidebar") && (
          <div className="space-y-4">
            <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="inline-flex items-center rounded-md border bg-muted p-1">
                  <button className="rounded-sm bg-background px-3 py-1 text-sm font-medium shadow-sm">Preview</button>
                  <button className="rounded-sm px-3 py-1 text-sm font-medium text-muted-foreground hover:text-foreground">Code</button>
                </div>
                <span className="text-sm font-medium hidden md:inline-block border-l pl-4 border-border">
                  A dashboard with sidebar, charts and data table
                </span>
              </div>
              <div className="flex items-center gap-2 overflow-x-auto pb-2 xl:pb-0">
                <div className="hidden md:flex items-center gap-1 border-r pr-2 border-border text-muted-foreground">
                  <button className="p-2 hover:text-foreground rounded-md hover:bg-muted"><Monitor className="h-4 w-4" /></button>
                  <button className="p-2 hover:text-foreground rounded-md hover:bg-muted"><Tablet className="h-4 w-4" /></button>
                  <button className="p-2 hover:text-foreground rounded-md hover:bg-muted"><Smartphone className="h-4 w-4" /></button>
                  <button className="p-2 hover:text-foreground rounded-md hover:bg-muted"><Maximize className="h-4 w-4" /></button>
                  <button className="p-2 hover:text-foreground rounded-md hover:bg-muted"><RotateCw className="h-4 w-4" /></button>
                </div>
                <div className="flex items-center gap-2 pl-2">
                  <div className="inline-flex items-center gap-2 rounded-md border bg-muted/50 px-3 py-1.5 text-sm text-muted-foreground font-mono">
                    <span className="text-foreground">{">_"}</span> npx @qalvinahmad/ui add dashboard-01
                  </div>
                  <button className="inline-flex h-8 items-center justify-center rounded-md bg-foreground px-4 text-xs font-medium text-background shadow hover:bg-foreground/90 shrink-0">
                    Open in v0
                  </button>
                </div>
              </div>
            </div>
            
            {/* Preview Container 1 */}
            <div className="rounded-xl border bg-background shadow-sm overflow-hidden flex min-h-[500px]">
               {/* Sidebar Dummy */}
               <div className="w-64 border-r bg-muted/20 p-4 hidden md:flex flex-col gap-6">
                  <div className="flex items-center gap-2 font-semibold">
                    <div className="h-6 w-6 rounded-full border border-foreground flex items-center justify-center">
                      <div className="h-3 w-3 rounded-full bg-foreground" />
                    </div>
                    Acme Inc.
                  </div>
                  <button className="w-full rounded-md bg-foreground text-background py-2 text-sm font-medium flex items-center justify-between px-3">
                    Quick Create <span className="h-4 w-4 bg-background/20 rounded flex items-center justify-center text-[10px]">+</span>
                  </button>
                  <nav className="flex flex-col gap-2 text-sm font-medium text-muted-foreground">
                    <a href="#" className="flex items-center gap-2 text-foreground bg-muted p-2 rounded-md"><LayoutDashboard className="h-4 w-4" /> Dashboard</a>
                    <a href="#" className="flex items-center gap-2 p-2 hover:text-foreground"><RotateCw className="h-4 w-4" /> Lifecycle</a>
                    <a href="#" className="flex items-center gap-2 p-2 hover:text-foreground"><PieChart className="h-4 w-4" /> Analytics</a>
                    <a href="#" className="flex items-center gap-2 p-2 hover:text-foreground"><FileText className="h-4 w-4" /> Projects</a>
                    <a href="#" className="flex items-center gap-2 p-2 hover:text-foreground"><Users className="h-4 w-4" /> Team</a>
                  </nav>
               </div>
               {/* Main Content Dummy */}
               <div className="flex-1 p-6 flex flex-col gap-6 bg-muted/5">
                  <div className="flex items-center justify-between border-b pb-4">
                    <div className="flex items-center gap-4 text-sm font-medium">
                      <span className="flex items-center gap-2"><FileText className="h-4 w-4" /> Documents</span>
                    </div>
                    <span className="text-sm text-muted-foreground">GitHub</span>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="rounded-xl border bg-card p-6 shadow-sm flex flex-col gap-4">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-muted-foreground">Total Revenue</span>
                        <span className="text-emerald-500 font-medium">+12.5%</span>
                      </div>
                      <div className="text-3xl font-bold">$1,250.00</div>
                    </div>
                    <div className="rounded-xl border bg-card p-6 shadow-sm flex flex-col gap-4">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-muted-foreground">New Customers</span>
                        <span className="text-rose-500 font-medium">-20%</span>
                      </div>
                      <div className="text-3xl font-bold">1,234</div>
                    </div>
                    <div className="rounded-xl border bg-card p-6 shadow-sm flex flex-col gap-4">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-muted-foreground">Active Accounts</span>
                        <span className="text-emerald-500 font-medium">+12.5%</span>
                      </div>
                      <div className="text-3xl font-bold">45,678</div>
                    </div>
                    <div className="rounded-xl border bg-card p-6 shadow-sm flex flex-col gap-4">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-muted-foreground">Growth Rate</span>
                        <span className="text-emerald-500 font-medium">+4.5%</span>
                      </div>
                      <div className="text-3xl font-bold">4.5%</div>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        )}

        {/* Block 2 */}
        {(selectedCategory === "Featured" || selectedCategory === "Sidebar") && (
          <div className="space-y-4">
            <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="inline-flex items-center rounded-md border bg-muted p-1">
                  <button className="rounded-sm bg-background px-3 py-1 text-sm font-medium shadow-sm">Preview</button>
                  <button className="rounded-sm px-3 py-1 text-sm font-medium text-muted-foreground hover:text-foreground">Code</button>
                </div>
                <span className="text-sm font-medium hidden md:inline-block border-l pl-4 border-border">
                  A sidebar that collapses to icons
                </span>
              </div>
              <div className="flex items-center gap-2 overflow-x-auto pb-2 xl:pb-0">
                <div className="hidden md:flex items-center gap-1 border-r pr-2 border-border text-muted-foreground">
                  <button className="p-2 hover:text-foreground rounded-md hover:bg-muted"><Monitor className="h-4 w-4" /></button>
                  <button className="p-2 hover:text-foreground rounded-md hover:bg-muted"><Tablet className="h-4 w-4" /></button>
                  <button className="p-2 hover:text-foreground rounded-md hover:bg-muted"><Smartphone className="h-4 w-4" /></button>
                  <button className="p-2 hover:text-foreground rounded-md hover:bg-muted"><Maximize className="h-4 w-4" /></button>
                  <button className="p-2 hover:text-foreground rounded-md hover:bg-muted"><RotateCw className="h-4 w-4" /></button>
                </div>
                <div className="flex items-center gap-2 pl-2">
                  <div className="inline-flex items-center gap-2 rounded-md border bg-muted/50 px-3 py-1.5 text-sm text-muted-foreground font-mono">
                    <span className="text-foreground">{">_"}</span> npx @qalvinahmad/ui add sidebar-07
                  </div>
                  <button className="inline-flex h-8 items-center justify-center rounded-md bg-foreground px-4 text-xs font-medium text-background shadow hover:bg-foreground/90 shrink-0">
                    Open in v0
                  </button>
                </div>
              </div>
            </div>
            
            {/* Preview Container 2 */}
            <div className="rounded-xl border bg-background shadow-sm overflow-hidden flex min-h-[400px]">
               {/* Sidebar Dummy */}
               <div className="w-16 border-r bg-muted/10 p-4 hidden md:flex flex-col items-center gap-6">
                  <div className="h-8 w-8 rounded-full border border-foreground flex items-center justify-center bg-foreground text-background font-bold text-xs">
                    A
                  </div>
                  <nav className="flex flex-col gap-4 text-muted-foreground">
                    <button className="p-2 rounded-md bg-muted text-foreground"><LayoutDashboard className="h-5 w-5" /></button>
                    <button className="p-2 rounded-md hover:bg-muted hover:text-foreground"><Users className="h-5 w-5" /></button>
                    <button className="p-2 rounded-md hover:bg-muted hover:text-foreground"><Settings className="h-5 w-5" /></button>
                  </nav>
               </div>
               {/* Main Content Dummy */}
               <div className="flex-1 p-6 flex flex-col gap-6 bg-muted/5">
                  <div className="flex gap-4">
                    <div className="h-40 flex-1 rounded-xl border bg-card/50" />
                    <div className="h-40 flex-1 rounded-xl border bg-card/50" />
                    <div className="h-40 flex-1 rounded-xl border bg-card/50" />
                  </div>
                  <div className="flex-1 rounded-xl border bg-card/50" />
               </div>
            </div>
          </div>
        )}

        {/* Block: Login */}
        {(selectedCategory === "Featured" || selectedCategory === "Login") && (
          <div className="space-y-4">
            <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="inline-flex items-center rounded-md border bg-muted p-1">
                  <button className="rounded-sm bg-background px-3 py-1 text-sm font-medium shadow-sm">Preview</button>
                  <button className="rounded-sm px-3 py-1 text-sm font-medium text-muted-foreground hover:text-foreground">Code</button>
                </div>
                <span className="text-sm font-medium hidden md:inline-flex items-center gap-2 border-l pl-4 border-border text-foreground">
                  <Lock className="h-4 w-4 text-muted-foreground" /> Modern login form with social providers and validation
                </span>
              </div>
              <div className="flex items-center gap-2 overflow-x-auto pb-2 xl:pb-0">
                <div className="hidden md:flex items-center gap-1 border-r pr-2 border-border text-muted-foreground">
                  <button className="p-2 hover:text-foreground rounded-md hover:bg-muted"><Monitor className="h-4 w-4" /></button>
                  <button className="p-2 hover:text-foreground rounded-md hover:bg-muted"><Tablet className="h-4 w-4" /></button>
                  <button className="p-2 hover:text-foreground rounded-md hover:bg-muted"><Smartphone className="h-4 w-4" /></button>
                  <button className="p-2 hover:text-foreground rounded-md hover:bg-muted"><Maximize className="h-4 w-4" /></button>
                  <button className="p-2 hover:text-foreground rounded-md hover:bg-muted"><RotateCw className="h-4 w-4" /></button>
                </div>
                <div className="flex items-center gap-2 pl-2">
                  <div className="inline-flex items-center gap-2 rounded-md border bg-muted/50 px-3 py-1.5 text-sm text-muted-foreground font-mono">
                    <span className="text-foreground">{">_"}</span> npx @qalvinahmad/ui add login-01
                  </div>
                  <button className="inline-flex h-8 items-center justify-center rounded-md bg-foreground px-4 text-xs font-medium text-background shadow hover:bg-foreground/90 shrink-0">
                    Open in v0
                  </button>
                </div>
              </div>
            </div>
            
            {/* Preview Container - Login */}
            <div className="rounded-xl border bg-background shadow-sm overflow-hidden flex min-h-[500px] items-center justify-center p-8">
              <div className="w-full max-w-md space-y-6">
                <div className="text-center space-y-2">
                  <h2 className="text-2xl font-bold">Welcome back</h2>
                  <p className="text-muted-foreground">Sign in to your account to continue</p>
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <button className="inline-flex items-center justify-center gap-2 rounded-md border bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors">
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                      GitHub
                    </button>
                    <button className="inline-flex items-center justify-center gap-2 rounded-md border bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors">
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>
                      Google
                    </button>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="space-y-2">
                      <label className="text-sm font-medium leading-none">Email</label>
                      <input type="email" placeholder="m@example.com" className="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium leading-none">Password</label>
                      <input type="password" className="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" />
                    </div>
                  </div>
                  <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full">
                    Sign In
                  </button>
                </div>
                <p className="text-center text-sm text-muted-foreground">
                  Don&apos;t have an account? <a href="#" className="underline underline-offset-4 hover:text-primary">Sign up</a>
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Block: Signup */}
        {(selectedCategory === "Featured" || selectedCategory === "Signup") && (
          <div className="space-y-4">
            <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="inline-flex items-center rounded-md border bg-muted p-1">
                  <button className="rounded-sm bg-background px-3 py-1 text-sm font-medium shadow-sm">Preview</button>
                  <button className="rounded-sm px-3 py-1 text-sm font-medium text-muted-foreground hover:text-foreground">Code</button>
                </div>
                <span className="text-sm font-medium hidden md:inline-flex items-center gap-2 border-l pl-4 border-border text-foreground">
                  <UserPlus className="h-4 w-4 text-muted-foreground" /> Registration form with password strength indicator
                </span>
              </div>
              <div className="flex items-center gap-2 overflow-x-auto pb-2 xl:pb-0">
                <div className="hidden md:flex items-center gap-1 border-r pr-2 border-border text-muted-foreground">
                  <button className="p-2 hover:text-foreground rounded-md hover:bg-muted"><Monitor className="h-4 w-4" /></button>
                  <button className="p-2 hover:text-foreground rounded-md hover:bg-muted"><Tablet className="h-4 w-4" /></button>
                  <button className="p-2 hover:text-foreground rounded-md hover:bg-muted"><Smartphone className="h-4 w-4" /></button>
                  <button className="p-2 hover:text-foreground rounded-md hover:bg-muted"><Maximize className="h-4 w-4" /></button>
                  <button className="p-2 hover:text-foreground rounded-md hover:bg-muted"><RotateCw className="h-4 w-4" /></button>
                </div>
                <div className="flex items-center gap-2 pl-2">
                  <div className="inline-flex items-center gap-2 rounded-md border bg-muted/50 px-3 py-1.5 text-sm text-muted-foreground font-mono">
                    <span className="text-foreground">{">_"}</span> npx @qalvinahmad/ui add signup-01
                  </div>
                  <button className="inline-flex h-8 items-center justify-center rounded-md bg-foreground px-4 text-xs font-medium text-background shadow hover:bg-foreground/90 shrink-0">
                    Open in v0
                  </button>
                </div>
              </div>
            </div>
            
            {/* Preview Container - Signup */}
            <div className="rounded-xl border bg-background shadow-sm overflow-hidden flex min-h-[500px] items-center justify-center p-8">
              <div className="w-full max-w-md space-y-6">
                <div className="text-center space-y-2">
                  <h2 className="text-2xl font-bold">Create an account</h2>
                  <p className="text-muted-foreground">Enter your details to get started</p>
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <button className="inline-flex items-center justify-center gap-2 rounded-md border bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors">
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                      GitHub
                    </button>
                    <button className="inline-flex items-center justify-center gap-2 rounded-md border bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors">
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>
                      Google
                    </button>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-2">
                        <label className="text-sm font-medium leading-none">First name</label>
                        <input type="text" className="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium leading-none">Last name</label>
                        <input type="text" className="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium leading-none">Email</label>
                      <input type="email" placeholder="m@example.com" className="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium leading-none">Password</label>
                      <input type="password" className="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" />
                      <div className="flex gap-1 mt-2">
                        <div className="h-1 flex-1 rounded-full bg-emerald-500" />
                        <div className="h-1 flex-1 rounded-full bg-emerald-500" />
                        <div className="h-1 flex-1 rounded-full bg-emerald-500" />
                        <div className="h-1 flex-1 rounded-full bg-muted" />
                      </div>
                      <p className="text-xs text-muted-foreground">Password must be at least 8 characters</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="terms" className="rounded border-gray-300" />
                    <label htmlFor="terms" className="text-sm text-muted-foreground">
                      I agree to the <a href="#" className="underline underline-offset-4 hover:text-primary">Terms of Service</a> and <a href="#" className="underline underline-offset-4 hover:text-primary">Privacy Policy</a>
                    </label>
                  </div>
                  <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full">
                    Create Account
                  </button>
                </div>
                <p className="text-center text-sm text-muted-foreground">
                  Already have an account? <a href="#" className="underline underline-offset-4 hover:text-primary">Sign in</a>
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
