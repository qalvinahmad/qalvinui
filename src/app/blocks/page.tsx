"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Monitor,
  Tablet,
  Smartphone,
  Maximize,
  Minimize2,
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

type DeviceMode = "desktop" | "tablet" | "mobile";

export default function BlocksPage() {
  const [selectedCategory, setSelectedCategory] = useState("Featured");
  const [activeTab, setActiveTab] = useState<{ [key: string]: "preview" | "code" }>({
    shiningText: "preview",
    checkout: "preview",
    dashboard: "preview",
    sidebar: "preview",
    login: "preview",
    signup: "preview",
  });

  const [deviceMode, setDeviceMode] = useState<{ [key: string]: DeviceMode }>({
    shiningText: "desktop",
    checkout: "desktop",
    dashboard: "desktop",
    sidebar: "desktop",
    login: "desktop",
    signup: "desktop",
  });

  const [isExpanded, setIsExpanded] = useState<{ [key: string]: boolean }>({});
  const [reloadKeys, setReloadKeys] = useState<{ [key: string]: number }>({});
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const setBlockDevice = (blockKey: string, mode: DeviceMode) => {
    setDeviceMode((prev) => ({ ...prev, [blockKey]: mode }));
  };

  const toggleExpand = (blockKey: string) => {
    setIsExpanded((prev) => ({ ...prev, [blockKey]: !prev[blockKey] }));
  };

  const handleReload = (blockKey: string) => {
    setReloadKeys((prev) => ({ ...prev, [blockKey]: (prev[blockKey] || 0) + 1 }));
  };

  const getDeviceContainerClass = (blockKey: string) => {
    const mode = deviceMode[blockKey] || "desktop";
    if (mode === "mobile") {
      return "max-w-[390px] mx-auto transition-all duration-300 shadow-xl border-2 border-border/80 rounded-3xl overflow-hidden";
    }
    if (mode === "tablet") {
      return "max-w-[768px] mx-auto transition-all duration-300 shadow-lg border-2 border-border/60 rounded-2xl overflow-hidden";
    }
    return "w-full transition-all duration-300";
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
              className={`py-2 transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? "text-foreground border-b-2 border-foreground font-semibold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <button
          onClick={() => setSelectedCategory("Featured")}
          className="inline-flex items-center justify-center rounded-md bg-muted px-4 py-2 text-sm font-medium hover:bg-muted/80 shrink-0 cursor-pointer"
        >
          Browse all blocks
        </button>
      </div>

      {/* Blocks List */}
      <div className="space-y-16">
        
        {/* Block: Shining Text */}
        {(selectedCategory === "Featured" || selectedCategory === "Text & Motion") && (
          <div id="shining-text-block" className="space-y-4 scroll-mt-24">
            <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="inline-flex items-center rounded-md border bg-muted p-1">
                  <button
                    onClick={() => setActiveTab((prev) => ({ ...prev, shiningText: "preview" }))}
                    className={`rounded-sm px-3 py-1 text-sm font-medium transition-all cursor-pointer ${
                      activeTab.shiningText === "preview"
                        ? "bg-background text-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Preview
                  </button>
                  <button
                    onClick={() => setActiveTab((prev) => ({ ...prev, shiningText: "code" }))}
                    className={`rounded-sm px-3 py-1 text-sm font-medium transition-all cursor-pointer ${
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
                  <button
                    onClick={() => setBlockDevice("shiningText", "desktop")}
                    className={`p-2 rounded-md transition-colors cursor-pointer ${
                      deviceMode.shiningText === "desktop" ? "bg-muted text-foreground" : "hover:text-foreground hover:bg-muted/50"
                    }`}
                    title="Desktop View"
                  >
                    <Monitor className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setBlockDevice("shiningText", "tablet")}
                    className={`p-2 rounded-md transition-colors cursor-pointer ${
                      deviceMode.shiningText === "tablet" ? "bg-muted text-foreground" : "hover:text-foreground hover:bg-muted/50"
                    }`}
                    title="Tablet View"
                  >
                    <Tablet className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setBlockDevice("shiningText", "mobile")}
                    className={`p-2 rounded-md transition-colors cursor-pointer ${
                      deviceMode.shiningText === "mobile" ? "bg-muted text-foreground" : "hover:text-foreground hover:bg-muted/50"
                    }`}
                    title="Mobile View"
                  >
                    <Smartphone className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => toggleExpand("shiningText")}
                    className="p-2 hover:text-foreground rounded-md hover:bg-muted cursor-pointer"
                    title={isExpanded.shiningText ? "Collapse" : "Expand"}
                  >
                    {isExpanded.shiningText ? <Minimize2 className="h-4 w-4" /> : <Maximize className="h-4 w-4" />}
                  </button>
                  <button
                    onClick={() => handleReload("shiningText")}
                    className="p-2 hover:text-foreground rounded-md hover:bg-muted cursor-pointer transition-transform active:rotate-180"
                    title="Reload Preview"
                  >
                    <RotateCw className="h-4 w-4" />
                  </button>
                </div>
                <div className="flex items-center gap-2 pl-2">
                  <button
                    onClick={() => copyToClipboard("npx @alvinahmad/ui add shining-text", "shining-cmd")}
                    className="inline-flex items-center gap-2 rounded-md border bg-muted/50 px-3 py-1.5 text-xs text-muted-foreground font-mono hover:bg-muted/80 transition-colors cursor-pointer"
                  >
                    <span className="text-foreground">{">_"}</span> npx @alvinahmad/ui add shining-text
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
              <div className={`rounded-2xl border bg-muted/10 p-4 md:p-8 flex items-center justify-center min-h-[480px] ${isExpanded.shiningText ? "min-h-[700px]" : ""}`}>
                <div key={reloadKeys.shiningText || 0} className={getDeviceContainerClass("shiningText")}>
                  <ShiningTextBlock />
                </div>
              </div>
            ) : (
              <div className="rounded-2xl border bg-zinc-950 text-zinc-100 p-6 font-mono text-xs overflow-x-auto">
                <div className="flex justify-between items-center pb-4 border-b border-zinc-800 mb-4">
                  <span className="text-zinc-400">src/components/ui/shining-text.tsx</span>
                  <button
                    onClick={() => copyToClipboard('import { ShiningText } from "@/components/ui/shining-text";\n\nexport default function Example() {\n  return (\n    <h1 className="text-4xl font-bold">\n      <ShiningText duration={3}>Shining Text Animation</ShiningText>\n    </h1>\n  );\n}', "shining-code")}
                    className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-zinc-100 bg-zinc-800/80 px-2.5 py-1 rounded cursor-pointer"
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
                    className={`rounded-sm px-3 py-1 text-sm font-medium transition-all cursor-pointer ${
                      activeTab.checkout === "preview"
                        ? "bg-background text-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Preview
                  </button>
                  <button
                    onClick={() => setActiveTab((prev) => ({ ...prev, checkout: "code" }))}
                    className={`rounded-sm px-3 py-1 text-sm font-medium transition-all cursor-pointer ${
                      activeTab.checkout === "code"
                        ? "bg-background text-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Code
                  </button>
                </div>
                <span className="text-sm font-medium hidden md:inline-flex items-center gap-2 border-l pl-4 border-border text-foreground">
                  <CreditCard className="h-4 w-4 text-muted-foreground" /> Interactive checkout flow with animated cart, dynamic item counters & live total price
                </span>
              </div>

              <div className="flex items-center gap-2 overflow-x-auto pb-2 xl:pb-0">
                <div className="hidden md:flex items-center gap-1 border-r pr-2 border-border text-muted-foreground">
                  <button
                    onClick={() => setBlockDevice("checkout", "desktop")}
                    className={`p-2 rounded-md transition-colors cursor-pointer ${
                      deviceMode.checkout === "desktop" ? "bg-muted text-foreground" : "hover:text-foreground hover:bg-muted/50"
                    }`}
                    title="Desktop View"
                  >
                    <Monitor className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setBlockDevice("checkout", "tablet")}
                    className={`p-2 rounded-md transition-colors cursor-pointer ${
                      deviceMode.checkout === "tablet" ? "bg-muted text-foreground" : "hover:text-foreground hover:bg-muted/50"
                    }`}
                    title="Tablet View"
                  >
                    <Tablet className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setBlockDevice("checkout", "mobile")}
                    className={`p-2 rounded-md transition-colors cursor-pointer ${
                      deviceMode.checkout === "mobile" ? "bg-muted text-foreground" : "hover:text-foreground hover:bg-muted/50"
                    }`}
                    title="Mobile View"
                  >
                    <Smartphone className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => toggleExpand("checkout")}
                    className="p-2 hover:text-foreground rounded-md hover:bg-muted cursor-pointer"
                    title={isExpanded.checkout ? "Collapse" : "Expand"}
                  >
                    {isExpanded.checkout ? <Minimize2 className="h-4 w-4" /> : <Maximize className="h-4 w-4" />}
                  </button>
                  <button
                    onClick={() => handleReload("checkout")}
                    className="p-2 hover:text-foreground rounded-md hover:bg-muted cursor-pointer transition-transform active:rotate-180"
                    title="Reload Preview"
                  >
                    <RotateCw className="h-4 w-4" />
                  </button>
                </div>
                <div className="flex items-center gap-2 pl-2">
                  <button
                    onClick={() => copyToClipboard("npx @alvinahmad/ui add interactive-checkout", "checkout-cmd")}
                    className="inline-flex items-center gap-2 rounded-md border bg-muted/50 px-3 py-1.5 text-xs text-muted-foreground font-mono hover:bg-muted/80 transition-colors cursor-pointer"
                  >
                    <span className="text-foreground">{">_"}</span> npx @alvinahmad/ui add interactive-checkout
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
              <div className={`rounded-2xl border bg-muted/10 p-4 md:p-8 flex items-center justify-center min-h-[580px] ${isExpanded.checkout ? "min-h-[750px]" : ""}`}>
                <div key={reloadKeys.checkout || 0} className={getDeviceContainerClass("checkout")}>
                  <InteractiveCheckout />
                </div>
              </div>
            ) : (
              <div className="rounded-2xl border bg-zinc-950 text-zinc-100 p-6 font-mono text-xs overflow-x-auto">
                <div className="flex justify-between items-center pb-4 border-b border-zinc-800 mb-4">
                  <span className="text-zinc-400">src/components/ui/interactive-checkout.tsx</span>
                  <button
                    onClick={() => copyToClipboard('import { InteractiveCheckout, Product } from "@/components/ui/interactive-checkout";\n\nconst defaultProducts: Product[] = [\n  {\n    id: "1",\n    name: "Air Max 90",\n    price: 129.99,\n    category: "Running",\n    image: "https://ferf1mheo22r9ira.public.blob.vercel-storage.com/shoes-d2GWFGnVlkkUneRD3x2xDbUVHO1qMp",\n    color: "Black/White",\n  },\n  {\n    id: "2",\n    name: "Ultra Boost",\n    price: 179.99,\n    category: "Performance",\n    image: "https://ferf1mheo22r9ira.public.blob.vercel-storage.com/shoes-d2GWFGnVlkkUneRD3x2xDbUVHO1qMp",\n    color: "Grey/Blue",\n  },\n  {\n    id: "3",\n    name: "Classic Trainer",\n    price: 89.99,\n    category: "Casual",\n    image: "https://ferf1mheo22r9ira.public.blob.vercel-storage.com/shoes-d2GWFGnVlkkUneRD3x2xDbUVHO1qMp",\n    color: "White/Red",\n  },\n];\n\nexport function InteractiveCheckoutDemo() {\n  return <InteractiveCheckout products={defaultProducts} />;\n}', "code-snippet")}
                    className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-zinc-100 bg-zinc-800/80 px-2.5 py-1 rounded cursor-pointer"
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

        {/* Block: Dashboard 01 */}
        {(selectedCategory === "Featured" || selectedCategory === "Sidebar") && (
          <div id="dashboard-block" className="space-y-4 scroll-mt-24">
            <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="inline-flex items-center rounded-md border bg-muted p-1">
                  <button
                    onClick={() => setActiveTab((prev) => ({ ...prev, dashboard: "preview" }))}
                    className={`rounded-sm px-3 py-1 text-sm font-medium transition-all cursor-pointer ${
                      activeTab.dashboard === "preview"
                        ? "bg-background text-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Preview
                  </button>
                  <button
                    onClick={() => setActiveTab((prev) => ({ ...prev, dashboard: "code" }))}
                    className={`rounded-sm px-3 py-1 text-sm font-medium transition-all cursor-pointer ${
                      activeTab.dashboard === "code"
                        ? "bg-background text-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Code
                  </button>
                </div>
                <span className="text-sm font-medium hidden md:inline-block border-l pl-4 border-border text-foreground">
                  A dashboard with sidebar, summary metrics, and analytics grid
                </span>
              </div>
              <div className="flex items-center gap-2 overflow-x-auto pb-2 xl:pb-0">
                <div className="hidden md:flex items-center gap-1 border-r pr-2 border-border text-muted-foreground">
                  <button
                    onClick={() => setBlockDevice("dashboard", "desktop")}
                    className={`p-2 rounded-md transition-colors cursor-pointer ${
                      deviceMode.dashboard === "desktop" ? "bg-muted text-foreground" : "hover:text-foreground hover:bg-muted/50"
                    }`}
                    title="Desktop View"
                  >
                    <Monitor className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setBlockDevice("dashboard", "tablet")}
                    className={`p-2 rounded-md transition-colors cursor-pointer ${
                      deviceMode.dashboard === "tablet" ? "bg-muted text-foreground" : "hover:text-foreground hover:bg-muted/50"
                    }`}
                    title="Tablet View"
                  >
                    <Tablet className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setBlockDevice("dashboard", "mobile")}
                    className={`p-2 rounded-md transition-colors cursor-pointer ${
                      deviceMode.dashboard === "mobile" ? "bg-muted text-foreground" : "hover:text-foreground hover:bg-muted/50"
                    }`}
                    title="Mobile View"
                  >
                    <Smartphone className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => toggleExpand("dashboard")}
                    className="p-2 hover:text-foreground rounded-md hover:bg-muted cursor-pointer"
                    title={isExpanded.dashboard ? "Collapse" : "Expand"}
                  >
                    {isExpanded.dashboard ? <Minimize2 className="h-4 w-4" /> : <Maximize className="h-4 w-4" />}
                  </button>
                  <button
                    onClick={() => handleReload("dashboard")}
                    className="p-2 hover:text-foreground rounded-md hover:bg-muted cursor-pointer transition-transform active:rotate-180"
                    title="Reload Preview"
                  >
                    <RotateCw className="h-4 w-4" />
                  </button>
                </div>
                <div className="flex items-center gap-2 pl-2">
                  <button
                    onClick={() => copyToClipboard("npx @alvinahmad/ui add dashboard-01", "dash-cmd")}
                    className="inline-flex items-center gap-2 rounded-md border bg-muted/50 px-3 py-1.5 text-xs text-muted-foreground font-mono hover:bg-muted/80 transition-colors cursor-pointer"
                  >
                    <span className="text-foreground">{">_"}</span> npx @alvinahmad/ui add dashboard-01
                    {copiedId === "dash-cmd" ? (
                      <Check className="h-3.5 w-3.5 text-emerald-500" />
                    ) : (
                      <Copy className="h-3.5 w-3.5" />
                    )}
                  </button>
                </div>
              </div>
            </div>
            
            {/* Preview Container 1 */}
            {activeTab.dashboard === "preview" ? (
              <div className={`rounded-2xl border bg-muted/10 p-2 md:p-6 overflow-hidden ${isExpanded.dashboard ? "min-h-[750px]" : ""}`}>
                <div key={reloadKeys.dashboard || 0} className={getDeviceContainerClass("dashboard")}>
                  <div className="rounded-xl border bg-background shadow-sm overflow-hidden flex flex-col md:flex-row min-h-[480px]">
                    {/* Sidebar */}
                    <div className="w-full md:w-64 border-r bg-muted/20 p-4 flex flex-col gap-6">
                      <div className="flex items-center gap-2 font-semibold">
                        <div className="h-6 w-6 rounded-full border border-foreground flex items-center justify-center">
                          <div className="h-3 w-3 rounded-full bg-foreground" />
                        </div>
                        Acme Inc.
                      </div>
                      <button className="w-full rounded-md bg-foreground text-background py-2 text-sm font-medium flex items-center justify-between px-3">
                        Quick Create <span className="h-4 w-4 bg-background/20 rounded flex items-center justify-center text-[10px]">+</span>
                      </button>
                      <nav className="flex flex-col gap-1 text-sm font-medium text-muted-foreground">
                        <a href="#" className="flex items-center gap-2 text-foreground bg-muted p-2 rounded-md"><LayoutDashboard className="h-4 w-4" /> Dashboard</a>
                        <a href="#" className="flex items-center gap-2 p-2 hover:text-foreground rounded-md"><RotateCw className="h-4 w-4" /> Lifecycle</a>
                        <a href="#" className="flex items-center gap-2 p-2 hover:text-foreground rounded-md"><PieChart className="h-4 w-4" /> Analytics</a>
                        <a href="#" className="flex items-center gap-2 p-2 hover:text-foreground rounded-md"><FileText className="h-4 w-4" /> Projects</a>
                        <a href="#" className="flex items-center gap-2 p-2 hover:text-foreground rounded-md"><Users className="h-4 w-4" /> Team</a>
                      </nav>
                    </div>
                    {/* Main Content */}
                    <div className="flex-1 p-6 flex flex-col gap-6 bg-muted/5">
                      <div className="flex items-center justify-between border-b pb-4">
                        <div className="flex items-center gap-4 text-sm font-medium">
                          <span className="flex items-center gap-2"><FileText className="h-4 w-4" /> Documents</span>
                        </div>
                        <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">Q1 2026</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="rounded-xl border bg-card p-5 shadow-xs flex flex-col gap-3">
                          <div className="flex justify-between items-center text-sm">
                            <span className="text-muted-foreground">Total Revenue</span>
                            <span className="text-emerald-500 font-semibold text-xs">+12.5%</span>
                          </div>
                          <div className="text-2xl md:text-3xl font-bold">$1,250.00</div>
                        </div>
                        <div className="rounded-xl border bg-card p-5 shadow-xs flex flex-col gap-3">
                          <div className="flex justify-between items-center text-sm">
                            <span className="text-muted-foreground">New Customers</span>
                            <span className="text-rose-500 font-semibold text-xs">-2.4%</span>
                          </div>
                          <div className="text-2xl md:text-3xl font-bold">1,234</div>
                        </div>
                        <div className="rounded-xl border bg-card p-5 shadow-xs flex flex-col gap-3">
                          <div className="flex justify-between items-center text-sm">
                            <span className="text-muted-foreground">Active Accounts</span>
                            <span className="text-emerald-500 font-semibold text-xs">+18.2%</span>
                          </div>
                          <div className="text-2xl md:text-3xl font-bold">45,678</div>
                        </div>
                        <div className="rounded-xl border bg-card p-5 shadow-xs flex flex-col gap-3">
                          <div className="flex justify-between items-center text-sm">
                            <span className="text-muted-foreground">Growth Rate</span>
                            <span className="text-emerald-500 font-semibold text-xs">+4.5%</span>
                          </div>
                          <div className="text-2xl md:text-3xl font-bold">4.5%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="rounded-2xl border bg-zinc-950 text-zinc-100 p-6 font-mono text-xs overflow-x-auto">
                <div className="flex justify-between items-center pb-4 border-b border-zinc-800 mb-4">
                  <span className="text-zinc-400">src/components/blocks/dashboard-01.tsx</span>
                  <button
                    onClick={() => copyToClipboard(`import { LayoutDashboard, RotateCw, PieChart, FileText, Users } from "lucide-react";

export function Dashboard() {
  return (
    <div className="rounded-xl border bg-background shadow-sm overflow-hidden flex min-h-[500px]">
      <div className="w-64 border-r bg-muted/20 p-4 flex flex-col gap-6">
        <div className="flex items-center gap-2 font-semibold">Acme Inc.</div>
        <nav className="flex flex-col gap-2 text-sm font-medium text-muted-foreground">
          <a href="#" className="flex items-center gap-2 text-foreground bg-muted p-2 rounded-md"><LayoutDashboard className="h-4 w-4" /> Dashboard</a>
          <a href="#" className="flex items-center gap-2 p-2 hover:text-foreground"><PieChart className="h-4 w-4" /> Analytics</a>
        </nav>
      </div>
      <div className="flex-1 p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-xl border bg-card p-6 shadow-sm">
          <span className="text-muted-foreground text-sm">Total Revenue</span>
          <div className="text-3xl font-bold mt-2">$1,250.00</div>
        </div>
      </div>
    </div>
  );
}`, "dash-code")}
                    className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-zinc-100 bg-zinc-800/80 px-2.5 py-1 rounded cursor-pointer"
                  >
                    {copiedId === "dash-code" ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                    Copy Code
                  </button>
                </div>
                <pre className="text-zinc-300">
{`import { LayoutDashboard, RotateCw, PieChart, FileText, Users } from "lucide-react";

export function Dashboard() {
  return (
    <div className="rounded-xl border bg-background shadow-sm overflow-hidden flex flex-col md:flex-row min-h-[500px]">
      <div className="w-64 border-r bg-muted/20 p-4 flex flex-col gap-6">
        <div className="flex items-center gap-2 font-semibold">Acme Inc.</div>
        <nav className="flex flex-col gap-2 text-sm font-medium text-muted-foreground">
          <a href="#" className="flex items-center gap-2 text-foreground bg-muted p-2 rounded-md">
            <LayoutDashboard className="h-4 w-4" /> Dashboard
          </a>
          <a href="#" className="flex items-center gap-2 p-2 hover:text-foreground">
            <PieChart className="h-4 w-4" /> Analytics
          </a>
        </nav>
      </div>
      <div className="flex-1 p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-xl border bg-card p-6 shadow-sm">
          <span className="text-muted-foreground text-sm">Total Revenue</span>
          <div className="text-3xl font-bold mt-2">$1,250.00</div>
        </div>
        <div className="rounded-xl border bg-card p-6 shadow-sm">
          <span className="text-muted-foreground text-sm">New Customers</span>
          <div className="text-3xl font-bold mt-2">1,234</div>
        </div>
      </div>
    </div>
  );
}`}
                </pre>
              </div>
            )}
          </div>
        )}

        {/* Block: Sidebar Collapsible */}
        {(selectedCategory === "Featured" || selectedCategory === "Sidebar") && (
          <div id="sidebar-block" className="space-y-4 scroll-mt-24">
            <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="inline-flex items-center rounded-md border bg-muted p-1">
                  <button
                    onClick={() => setActiveTab((prev) => ({ ...prev, sidebar: "preview" }))}
                    className={`rounded-sm px-3 py-1 text-sm font-medium transition-all cursor-pointer ${
                      activeTab.sidebar === "preview"
                        ? "bg-background text-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Preview
                  </button>
                  <button
                    onClick={() => setActiveTab((prev) => ({ ...prev, sidebar: "code" }))}
                    className={`rounded-sm px-3 py-1 text-sm font-medium transition-all cursor-pointer ${
                      activeTab.sidebar === "code"
                        ? "bg-background text-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Code
                  </button>
                </div>
                <span className="text-sm font-medium hidden md:inline-block border-l pl-4 border-border text-foreground">
                  A compact sidebar that collapses cleanly to icons
                </span>
              </div>
              <div className="flex items-center gap-2 overflow-x-auto pb-2 xl:pb-0">
                <div className="hidden md:flex items-center gap-1 border-r pr-2 border-border text-muted-foreground">
                  <button
                    onClick={() => setBlockDevice("sidebar", "desktop")}
                    className={`p-2 rounded-md transition-colors cursor-pointer ${
                      deviceMode.sidebar === "desktop" ? "bg-muted text-foreground" : "hover:text-foreground hover:bg-muted/50"
                    }`}
                    title="Desktop View"
                  >
                    <Monitor className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setBlockDevice("sidebar", "tablet")}
                    className={`p-2 rounded-md transition-colors cursor-pointer ${
                      deviceMode.sidebar === "tablet" ? "bg-muted text-foreground" : "hover:text-foreground hover:bg-muted/50"
                    }`}
                    title="Tablet View"
                  >
                    <Tablet className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setBlockDevice("sidebar", "mobile")}
                    className={`p-2 rounded-md transition-colors cursor-pointer ${
                      deviceMode.sidebar === "mobile" ? "bg-muted text-foreground" : "hover:text-foreground hover:bg-muted/50"
                    }`}
                    title="Mobile View"
                  >
                    <Smartphone className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => toggleExpand("sidebar")}
                    className="p-2 hover:text-foreground rounded-md hover:bg-muted cursor-pointer"
                    title={isExpanded.sidebar ? "Collapse" : "Expand"}
                  >
                    {isExpanded.sidebar ? <Minimize2 className="h-4 w-4" /> : <Maximize className="h-4 w-4" />}
                  </button>
                  <button
                    onClick={() => handleReload("sidebar")}
                    className="p-2 hover:text-foreground rounded-md hover:bg-muted cursor-pointer transition-transform active:rotate-180"
                    title="Reload Preview"
                  >
                    <RotateCw className="h-4 w-4" />
                  </button>
                </div>
                <div className="flex items-center gap-2 pl-2">
                  <button
                    onClick={() => copyToClipboard("npx @alvinahmad/ui add sidebar-07", "sidebar-cmd")}
                    className="inline-flex items-center gap-2 rounded-md border bg-muted/50 px-3 py-1.5 text-xs text-muted-foreground font-mono hover:bg-muted/80 transition-colors cursor-pointer"
                  >
                    <span className="text-foreground">{">_"}</span> npx @alvinahmad/ui add sidebar-07
                    {copiedId === "sidebar-cmd" ? (
                      <Check className="h-3.5 w-3.5 text-emerald-500" />
                    ) : (
                      <Copy className="h-3.5 w-3.5" />
                    )}
                  </button>
                </div>
              </div>
            </div>
            
            {/* Preview Container 2 */}
            {activeTab.sidebar === "preview" ? (
              <div className={`rounded-2xl border bg-muted/10 p-2 md:p-6 overflow-hidden ${isExpanded.sidebar ? "min-h-[600px]" : ""}`}>
                <div key={reloadKeys.sidebar || 0} className={getDeviceContainerClass("sidebar")}>
                  <div className="rounded-xl border bg-background shadow-sm overflow-hidden flex min-h-[400px]">
                    <div className="w-16 border-r bg-muted/10 p-4 flex flex-col items-center gap-6">
                      <div className="h-8 w-8 rounded-full border border-foreground flex items-center justify-center bg-foreground text-background font-bold text-xs">
                        A
                      </div>
                      <nav className="flex flex-col gap-4 text-muted-foreground">
                        <button className="p-2 rounded-md bg-muted text-foreground"><LayoutDashboard className="h-5 w-5" /></button>
                        <button className="p-2 rounded-md hover:bg-muted hover:text-foreground"><Users className="h-5 w-5" /></button>
                        <button className="p-2 rounded-md hover:bg-muted hover:text-foreground"><Settings className="h-5 w-5" /></button>
                      </nav>
                    </div>
                    <div className="flex-1 p-6 flex flex-col gap-4 bg-muted/5">
                      <div className="flex gap-4">
                        <div className="h-32 flex-1 rounded-xl border bg-card/60" />
                        <div className="h-32 flex-1 rounded-xl border bg-card/60" />
                        <div className="h-32 flex-1 rounded-xl border bg-card/60 hidden sm:block" />
                      </div>
                      <div className="flex-1 rounded-xl border bg-card/60 min-h-[140px]" />
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="rounded-2xl border bg-zinc-950 text-zinc-100 p-6 font-mono text-xs overflow-x-auto">
                <div className="flex justify-between items-center pb-4 border-b border-zinc-800 mb-4">
                  <span className="text-zinc-400">src/components/blocks/sidebar-07.tsx</span>
                  <button
                    onClick={() => copyToClipboard(`import { LayoutDashboard, Users, Settings } from "lucide-react";

export function CollapsedSidebar() {
  return (
    <div className="rounded-xl border bg-background shadow-sm overflow-hidden flex min-h-[400px]">
      <div className="w-16 border-r bg-muted/10 p-4 flex flex-col items-center gap-6">
        <div className="h-8 w-8 rounded-full bg-foreground text-background font-bold text-xs flex items-center justify-center">A</div>
        <nav className="flex flex-col gap-4 text-muted-foreground">
          <button className="p-2 rounded-md bg-muted text-foreground"><LayoutDashboard className="h-5 w-5" /></button>
          <button className="p-2 rounded-md hover:bg-muted hover:text-foreground"><Users className="h-5 w-5" /></button>
          <button className="p-2 rounded-md hover:bg-muted hover:text-foreground"><Settings className="h-5 w-5" /></button>
        </nav>
      </div>
      <div className="flex-1 p-6">Content area</div>
    </div>
  );
}`, "sidebar-code")}
                    className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-zinc-100 bg-zinc-800/80 px-2.5 py-1 rounded cursor-pointer"
                  >
                    {copiedId === "sidebar-code" ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                    Copy Code
                  </button>
                </div>
                <pre className="text-zinc-300">
{`import { LayoutDashboard, Users, Settings } from "lucide-react";

export function CollapsedSidebar() {
  return (
    <div className="rounded-xl border bg-background shadow-sm overflow-hidden flex min-h-[400px]">
      <div className="w-16 border-r bg-muted/10 p-4 flex flex-col items-center gap-6">
        <div className="h-8 w-8 rounded-full bg-foreground text-background font-bold text-xs flex items-center justify-center">A</div>
        <nav className="flex flex-col gap-4 text-muted-foreground">
          <button className="p-2 rounded-md bg-muted text-foreground"><LayoutDashboard className="h-5 w-5" /></button>
          <button className="p-2 rounded-md hover:bg-muted hover:text-foreground"><Users className="h-5 w-5" /></button>
          <button className="p-2 rounded-md hover:bg-muted hover:text-foreground"><Settings className="h-5 w-5" /></button>
        </nav>
      </div>
      <div className="flex-1 p-6">Content area</div>
    </div>
  );
}`}
                </pre>
              </div>
            )}
          </div>
        )}

        {/* Block: Login */}
        {(selectedCategory === "Featured" || selectedCategory === "Login") && (
          <div id="login-block" className="space-y-4 scroll-mt-24">
            <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="inline-flex items-center rounded-md border bg-muted p-1">
                  <button
                    onClick={() => setActiveTab((prev) => ({ ...prev, login: "preview" }))}
                    className={`rounded-sm px-3 py-1 text-sm font-medium transition-all cursor-pointer ${
                      activeTab.login === "preview"
                        ? "bg-background text-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Preview
                  </button>
                  <button
                    onClick={() => setActiveTab((prev) => ({ ...prev, login: "code" }))}
                    className={`rounded-sm px-3 py-1 text-sm font-medium transition-all cursor-pointer ${
                      activeTab.login === "code"
                        ? "bg-background text-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Code
                  </button>
                </div>
                <span className="text-sm font-medium hidden md:inline-flex items-center gap-2 border-l pl-4 border-border text-foreground">
                  <Lock className="h-4 w-4 text-muted-foreground" /> Modern login form with social providers and validation
                </span>
              </div>
              <div className="flex items-center gap-2 overflow-x-auto pb-2 xl:pb-0">
                <div className="hidden md:flex items-center gap-1 border-r pr-2 border-border text-muted-foreground">
                  <button
                    onClick={() => setBlockDevice("login", "desktop")}
                    className={`p-2 rounded-md transition-colors cursor-pointer ${
                      deviceMode.login === "desktop" ? "bg-muted text-foreground" : "hover:text-foreground hover:bg-muted/50"
                    }`}
                    title="Desktop View"
                  >
                    <Monitor className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setBlockDevice("login", "tablet")}
                    className={`p-2 rounded-md transition-colors cursor-pointer ${
                      deviceMode.login === "tablet" ? "bg-muted text-foreground" : "hover:text-foreground hover:bg-muted/50"
                    }`}
                    title="Tablet View"
                  >
                    <Tablet className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setBlockDevice("login", "mobile")}
                    className={`p-2 rounded-md transition-colors cursor-pointer ${
                      deviceMode.login === "mobile" ? "bg-muted text-foreground" : "hover:text-foreground hover:bg-muted/50"
                    }`}
                    title="Mobile View"
                  >
                    <Smartphone className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => toggleExpand("login")}
                    className="p-2 hover:text-foreground rounded-md hover:bg-muted cursor-pointer"
                    title={isExpanded.login ? "Collapse" : "Expand"}
                  >
                    {isExpanded.login ? <Minimize2 className="h-4 w-4" /> : <Maximize className="h-4 w-4" />}
                  </button>
                  <button
                    onClick={() => handleReload("login")}
                    className="p-2 hover:text-foreground rounded-md hover:bg-muted cursor-pointer transition-transform active:rotate-180"
                    title="Reload Preview"
                  >
                    <RotateCw className="h-4 w-4" />
                  </button>
                </div>
                <div className="flex items-center gap-2 pl-2">
                  <button
                    onClick={() => copyToClipboard("npx @alvinahmad/ui add login-01", "login-cmd")}
                    className="inline-flex items-center gap-2 rounded-md border bg-muted/50 px-3 py-1.5 text-xs text-muted-foreground font-mono hover:bg-muted/80 transition-colors cursor-pointer"
                  >
                    <span className="text-foreground">{">_"}</span> npx @alvinahmad/ui add login-01
                    {copiedId === "login-cmd" ? (
                      <Check className="h-3.5 w-3.5 text-emerald-500" />
                    ) : (
                      <Copy className="h-3.5 w-3.5" />
                    )}
                  </button>
                </div>
              </div>
            </div>
            
            {/* Preview Container - Login */}
            {activeTab.login === "preview" ? (
              <div className={`rounded-2xl border bg-muted/10 p-4 md:p-8 flex items-center justify-center min-h-[500px] ${isExpanded.login ? "min-h-[700px]" : ""}`}>
                <div key={reloadKeys.login || 0} className={getDeviceContainerClass("login")}>
                  <div className="rounded-xl border bg-background shadow-sm overflow-hidden flex items-center justify-center p-8">
                    <div className="w-full max-w-md space-y-6">
                      <div className="text-center space-y-2">
                        <h2 className="text-2xl font-bold">Welcome back</h2>
                        <p className="text-muted-foreground text-sm">Sign in to your account to continue</p>
                      </div>
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-3">
                          <button className="inline-flex items-center justify-center gap-2 rounded-md border bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors cursor-pointer">
                            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                            GitHub
                          </button>
                          <button className="inline-flex items-center justify-center gap-2 rounded-md border bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors cursor-pointer">
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
                            <input type="password" placeholder="••••••••" className="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" />
                          </div>
                        </div>
                        <button className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full cursor-pointer">
                          Sign In
                        </button>
                      </div>
                      <p className="text-center text-sm text-muted-foreground">
                        Don&apos;t have an account? <a href="#" className="underline underline-offset-4 hover:text-primary">Sign up</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="rounded-2xl border bg-zinc-950 text-zinc-100 p-6 font-mono text-xs overflow-x-auto">
                <div className="flex justify-between items-center pb-4 border-b border-zinc-800 mb-4">
                  <span className="text-zinc-400">src/components/blocks/login-01.tsx</span>
                  <button
                    onClick={() => copyToClipboard(`export function LoginForm() {
  return (
    <div className="w-full max-w-md space-y-6 mx-auto">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">Welcome back</h2>
        <p className="text-muted-foreground text-sm">Sign in to your account</p>
      </div>
      <div className="space-y-4">
        <input type="email" placeholder="m@example.com" className="h-10 w-full rounded-md border px-3" />
        <input type="password" placeholder="••••••••" className="h-10 w-full rounded-md border px-3" />
        <button className="h-10 w-full rounded-md bg-primary text-primary-foreground">Sign In</button>
      </div>
    </div>
  );
}`, "login-code")}
                    className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-zinc-100 bg-zinc-800/80 px-2.5 py-1 rounded cursor-pointer"
                  >
                    {copiedId === "login-code" ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                    Copy Code
                  </button>
                </div>
                <pre className="text-zinc-300">
{`export function LoginForm() {
  return (
    <div className="w-full max-w-md space-y-6 mx-auto">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">Welcome back</h2>
        <p className="text-muted-foreground text-sm">Sign in to your account</p>
      </div>
      <div className="space-y-4">
        <input type="email" placeholder="m@example.com" className="h-10 w-full rounded-md border px-3" />
        <input type="password" placeholder="••••••••" className="h-10 w-full rounded-md border px-3" />
        <button className="h-10 w-full rounded-md bg-primary text-primary-foreground">Sign In</button>
      </div>
    </div>
  );
}`}
                </pre>
              </div>
            )}
          </div>
        )}

        {/* Block: Signup */}
        {(selectedCategory === "Featured" || selectedCategory === "Signup") && (
          <div id="signup-block" className="space-y-4 scroll-mt-24">
            <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="inline-flex items-center rounded-md border bg-muted p-1">
                  <button
                    onClick={() => setActiveTab((prev) => ({ ...prev, signup: "preview" }))}
                    className={`rounded-sm px-3 py-1 text-sm font-medium transition-all cursor-pointer ${
                      activeTab.signup === "preview"
                        ? "bg-background text-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Preview
                  </button>
                  <button
                    onClick={() => setActiveTab((prev) => ({ ...prev, signup: "code" }))}
                    className={`rounded-sm px-3 py-1 text-sm font-medium transition-all cursor-pointer ${
                      activeTab.signup === "code"
                        ? "bg-background text-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Code
                  </button>
                </div>
                <span className="text-sm font-medium hidden md:inline-flex items-center gap-2 border-l pl-4 border-border text-foreground">
                  <UserPlus className="h-4 w-4 text-muted-foreground" /> Registration form with password strength indicator
                </span>
              </div>
              <div className="flex items-center gap-2 overflow-x-auto pb-2 xl:pb-0">
                <div className="hidden md:flex items-center gap-1 border-r pr-2 border-border text-muted-foreground">
                  <button
                    onClick={() => setBlockDevice("signup", "desktop")}
                    className={`p-2 rounded-md transition-colors cursor-pointer ${
                      deviceMode.signup === "desktop" ? "bg-muted text-foreground" : "hover:text-foreground hover:bg-muted/50"
                    }`}
                    title="Desktop View"
                  >
                    <Monitor className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setBlockDevice("signup", "tablet")}
                    className={`p-2 rounded-md transition-colors cursor-pointer ${
                      deviceMode.signup === "tablet" ? "bg-muted text-foreground" : "hover:text-foreground hover:bg-muted/50"
                    }`}
                    title="Tablet View"
                  >
                    <Tablet className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setBlockDevice("signup", "mobile")}
                    className={`p-2 rounded-md transition-colors cursor-pointer ${
                      deviceMode.signup === "mobile" ? "bg-muted text-foreground" : "hover:text-foreground hover:bg-muted/50"
                    }`}
                    title="Mobile View"
                  >
                    <Smartphone className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => toggleExpand("signup")}
                    className="p-2 hover:text-foreground rounded-md hover:bg-muted cursor-pointer"
                    title={isExpanded.signup ? "Collapse" : "Expand"}
                  >
                    {isExpanded.signup ? <Minimize2 className="h-4 w-4" /> : <Maximize className="h-4 w-4" />}
                  </button>
                  <button
                    onClick={() => handleReload("signup")}
                    className="p-2 hover:text-foreground rounded-md hover:bg-muted cursor-pointer transition-transform active:rotate-180"
                    title="Reload Preview"
                  >
                    <RotateCw className="h-4 w-4" />
                  </button>
                </div>
                <div className="flex items-center gap-2 pl-2">
                  <button
                    onClick={() => copyToClipboard("npx @alvinahmad/ui add signup-01", "signup-cmd")}
                    className="inline-flex items-center gap-2 rounded-md border bg-muted/50 px-3 py-1.5 text-xs text-muted-foreground font-mono hover:bg-muted/80 transition-colors cursor-pointer"
                  >
                    <span className="text-foreground">{">_"}</span> npx @alvinahmad/ui add signup-01
                    {copiedId === "signup-cmd" ? (
                      <Check className="h-3.5 w-3.5 text-emerald-500" />
                    ) : (
                      <Copy className="h-3.5 w-3.5" />
                    )}
                  </button>
                </div>
              </div>
            </div>
            
            {/* Preview Container - Signup */}
            {activeTab.signup === "preview" ? (
              <div className={`rounded-2xl border bg-muted/10 p-4 md:p-8 flex items-center justify-center min-h-[500px] ${isExpanded.signup ? "min-h-[700px]" : ""}`}>
                <div key={reloadKeys.signup || 0} className={getDeviceContainerClass("signup")}>
                  <div className="rounded-xl border bg-background shadow-sm overflow-hidden flex items-center justify-center p-8">
                    <div className="w-full max-w-md space-y-6">
                      <div className="text-center space-y-2">
                        <h2 className="text-2xl font-bold">Create an account</h2>
                        <p className="text-muted-foreground text-sm">Enter your details to get started</p>
                      </div>
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-3">
                          <button className="inline-flex items-center justify-center gap-2 rounded-md border bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors cursor-pointer">
                            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                            GitHub
                          </button>
                          <button className="inline-flex items-center justify-center gap-2 rounded-md border bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors cursor-pointer">
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
                              <input type="text" placeholder="John" className="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" />
                            </div>
                            <div className="space-y-2">
                              <label className="text-sm font-medium leading-none">Last name</label>
                              <input type="text" placeholder="Doe" className="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium leading-none">Email</label>
                            <input type="email" placeholder="m@example.com" className="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium leading-none">Password</label>
                            <input type="password" placeholder="••••••••" className="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" />
                            <div className="flex gap-1 mt-2">
                              <div className="h-1 flex-1 rounded-full bg-emerald-500" />
                              <div className="h-1 flex-1 rounded-full bg-emerald-500" />
                              <div className="h-1 flex-1 rounded-full bg-emerald-500" />
                              <div className="h-1 flex-1 rounded-full bg-muted" />
                            </div>
                            <p className="text-xs text-muted-foreground">Password strength: Strong</p>
                          </div>
                        </div>
                        <button className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full cursor-pointer">
                          Create Account
                        </button>
                      </div>
                      <p className="text-center text-sm text-muted-foreground">
                        Already have an account? <a href="#" className="underline underline-offset-4 hover:text-primary">Sign in</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="rounded-2xl border bg-zinc-950 text-zinc-100 p-6 font-mono text-xs overflow-x-auto">
                <div className="flex justify-between items-center pb-4 border-b border-zinc-800 mb-4">
                  <span className="text-zinc-400">src/components/blocks/signup-01.tsx</span>
                  <button
                    onClick={() => copyToClipboard(`export function SignupForm() {
  return (
    <div className="w-full max-w-md space-y-6 mx-auto">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">Create an account</h2>
      </div>
      <div className="space-y-4">
        <input type="text" placeholder="Full name" className="h-10 w-full rounded-md border px-3" />
        <input type="email" placeholder="m@example.com" className="h-10 w-full rounded-md border px-3" />
        <input type="password" placeholder="••••••••" className="h-10 w-full rounded-md border px-3" />
        <button className="h-10 w-full rounded-md bg-primary text-primary-foreground">Create Account</button>
      </div>
    </div>
  );
}`, "signup-code")}
                    className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-zinc-100 bg-zinc-800/80 px-2.5 py-1 rounded cursor-pointer"
                  >
                    {copiedId === "signup-code" ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                    Copy Code
                  </button>
                </div>
                <pre className="text-zinc-300">
{`export function SignupForm() {
  return (
    <div className="w-full max-w-md space-y-6 mx-auto">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">Create an account</h2>
      </div>
      <div className="space-y-4">
        <input type="text" placeholder="Full name" className="h-10 w-full rounded-md border px-3" />
        <input type="email" placeholder="m@example.com" className="h-10 w-full rounded-md border px-3" />
        <input type="password" placeholder="••••••••" className="h-10 w-full rounded-md border px-3" />
        <button className="h-10 w-full rounded-md bg-primary text-primary-foreground">Create Account</button>
      </div>
    </div>
  );
}`}
                </pre>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
