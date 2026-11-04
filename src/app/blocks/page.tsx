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
  Compass,
} from "lucide-react";
import { InteractiveCheckout } from "@/components/blocks/interactive-checkout";
import { ShiningTextBlock } from "@/components/blocks/shining-text-block";
import { Dashboard01 } from "@/components/blocks/dashboard-01";
import { Sidebar07 } from "@/components/blocks/sidebar-07";
import { Login01 } from "@/components/blocks/login-01";
import { Signup01 } from "@/components/blocks/signup-01";
import { ThinkingOrbBlock } from "@/components/blocks/thinking-orb-block";
import { MetalFxBlock } from "@/components/blocks/metal-fx-block";
import { HumanAtlasBlock } from "@/components/blocks/human-atlas-block";
import { BlockCodeViewer } from "@/components/blocks/block-code-viewer";
import {
  checkoutFiles,
  shiningTextFiles,
  dashboardFiles,
  sidebarFiles,
  loginFiles,
  signupFiles,
  thinkingOrbFiles,
  metalFxFiles,
  humanAtlasFiles,
} from "@/components/blocks/blocks-code-data";

type DeviceMode = "desktop" | "tablet" | "mobile";

export default function BlocksPage() {
  const [selectedCategory, setSelectedCategory] = useState("Featured");
  const [activeTab, setActiveTab] = useState<{ [key: string]: "preview" | "code" }>({
    shiningText: "preview",
    checkout: "preview",
    thinkingOrb: "preview",
    metalFx: "preview",
    humanAtlas: "preview",
    dashboard: "preview",
    sidebar: "preview",
    login: "preview",
    signup: "preview",
  });

  const [deviceMode, setDeviceMode] = useState<{ [key: string]: DeviceMode }>({
    shiningText: "desktop",
    checkout: "desktop",
    thinkingOrb: "desktop",
    metalFx: "desktop",
    humanAtlas: "desktop",
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
      return "w-full max-w-[390px] mx-auto transition-all duration-300 shadow-2xl border-2 border-border/80 rounded-[32px] overflow-hidden p-4 bg-background max-h-[640px] overflow-y-auto";
    }
    if (mode === "tablet") {
      return "w-full max-w-[768px] mx-auto transition-all duration-300 shadow-xl border-2 border-border/60 rounded-2xl overflow-hidden p-5 bg-background";
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
          {["Featured", "AI & Agents", "Text & Motion", "Checkout", "3D & Templates", "Sidebar", "Login", "Signup"].map((cat) => (
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
              <BlockCodeViewer files={shiningTextFiles} defaultTab="shining-text.tsx" />
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
                  <InteractiveCheckout forceMode={deviceMode.checkout} />
                </div>
              </div>
            ) : (
              <BlockCodeViewer files={checkoutFiles} defaultTab="interactive-checkout.tsx" />
            )}
          </div>
        )}

        {/* Block: Thinking Orb */}
        {(selectedCategory === "Featured" || selectedCategory === "AI & Agents" || selectedCategory === "Text & Motion") && (
          <div id="thinking-orb-block" className="space-y-4 scroll-mt-24">
            <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="inline-flex items-center rounded-md border bg-muted p-1">
                  <button
                    onClick={() => setActiveTab((prev) => ({ ...prev, thinkingOrb: "preview" }))}
                    className={`rounded-sm px-3 py-1 text-sm font-medium transition-all cursor-pointer ${
                      activeTab.thinkingOrb === "preview"
                        ? "bg-background text-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Preview
                  </button>
                  <button
                    onClick={() => setActiveTab((prev) => ({ ...prev, thinkingOrb: "code" }))}
                    className={`rounded-sm px-3 py-1 text-sm font-medium transition-all cursor-pointer ${
                      activeTab.thinkingOrb === "code"
                        ? "bg-background text-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Code
                  </button>
                </div>
                <span className="text-sm font-medium hidden md:inline-flex items-center gap-2 border-l pl-4 border-border text-foreground">
                  <Sparkles className="h-4 w-4 text-primary" /> Dotted thought-orb loading indicators for AI & agent UIs with 9 tuned states
                </span>
              </div>

              <div className="flex items-center gap-2 overflow-x-auto pb-2 xl:pb-0">
                <div className="hidden md:flex items-center gap-1 border-r pr-2 border-border text-muted-foreground">
                  <button
                    onClick={() => setBlockDevice("thinkingOrb", "desktop")}
                    className={`p-2 rounded-md transition-colors cursor-pointer ${
                      deviceMode.thinkingOrb === "desktop" ? "bg-muted text-foreground" : "hover:text-foreground hover:bg-muted/50"
                    }`}
                    title="Desktop View"
                  >
                    <Monitor className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setBlockDevice("thinkingOrb", "tablet")}
                    className={`p-2 rounded-md transition-colors cursor-pointer ${
                      deviceMode.thinkingOrb === "tablet" ? "bg-muted text-foreground" : "hover:text-foreground hover:bg-muted/50"
                    }`}
                    title="Tablet View"
                  >
                    <Tablet className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setBlockDevice("thinkingOrb", "mobile")}
                    className={`p-2 rounded-md transition-colors cursor-pointer ${
                      deviceMode.thinkingOrb === "mobile" ? "bg-muted text-foreground" : "hover:text-foreground hover:bg-muted/50"
                    }`}
                    title="Mobile View"
                  >
                    <Smartphone className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => toggleExpand("thinkingOrb")}
                    className="p-2 hover:text-foreground rounded-md hover:bg-muted cursor-pointer"
                    title={isExpanded.thinkingOrb ? "Collapse" : "Expand"}
                  >
                    {isExpanded.thinkingOrb ? <Minimize2 className="h-4 w-4" /> : <Maximize className="h-4 w-4" />}
                  </button>
                  <button
                    onClick={() => handleReload("thinkingOrb")}
                    className="p-2 hover:text-foreground rounded-md hover:bg-muted cursor-pointer transition-transform active:rotate-180"
                    title="Reload Preview"
                  >
                    <RotateCw className="h-4 w-4" />
                  </button>
                </div>
                <div className="flex items-center gap-2 pl-2">
                  <button
                    onClick={() => copyToClipboard("npx @alvinahmad/ui add thinking-orb", "orb-cmd")}
                    className="inline-flex items-center gap-2 rounded-md border bg-muted/50 px-3 py-1.5 text-xs text-muted-foreground font-mono hover:bg-muted/80 transition-colors cursor-pointer"
                  >
                    <span className="text-foreground">{">_"}</span> npx @alvinahmad/ui add thinking-orb
                    {copiedId === "orb-cmd" ? (
                      <Check className="h-3.5 w-3.5 text-emerald-500" />
                    ) : (
                      <Copy className="h-3.5 w-3.5" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Block Content */}
            {activeTab.thinkingOrb === "preview" ? (
              <div className={`rounded-2xl border bg-muted/10 p-4 md:p-8 flex items-center justify-center min-h-[460px] ${isExpanded.thinkingOrb ? "min-h-[650px]" : ""}`}>
                <div key={reloadKeys.thinkingOrb || 0} className={getDeviceContainerClass("thinkingOrb")}>
                  <ThinkingOrbBlock forceMode={deviceMode.thinkingOrb} />
                </div>
              </div>
            ) : (
              <BlockCodeViewer files={thinkingOrbFiles} defaultTab="thinking-orb.tsx" />
            )}
          </div>
        )}

        {/* Block: Metal FX */}
        {(selectedCategory === "Featured" || selectedCategory === "Text & Motion") && (
          <div id="metal-fx-block" className="space-y-4 scroll-mt-24">
            <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="inline-flex items-center rounded-md border bg-muted p-1">
                  <button
                    onClick={() => setActiveTab((prev) => ({ ...prev, metalFx: "preview" }))}
                    className={`rounded-sm px-3 py-1 text-sm font-medium transition-all cursor-pointer ${
                      activeTab.metalFx === "preview"
                        ? "bg-background text-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Preview
                  </button>
                  <button
                    onClick={() => setActiveTab((prev) => ({ ...prev, metalFx: "code" }))}
                    className={`rounded-sm px-3 py-1 text-sm font-medium transition-all cursor-pointer ${
                      activeTab.metalFx === "code"
                        ? "bg-background text-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Code
                  </button>
                </div>
                <span className="text-sm font-medium hidden md:inline-flex items-center gap-2 border-l pl-4 border-border text-foreground">
                  <Sparkles className="h-4 w-4 text-amber-500" /> Animated WebGL liquid metallic chrome & gold shader effect for buttons
                </span>
              </div>

              <div className="flex items-center gap-2 overflow-x-auto pb-2 xl:pb-0">
                <div className="hidden md:flex items-center gap-1 border-r pr-2 border-border text-muted-foreground">
                  <button
                    onClick={() => setBlockDevice("metalFx", "desktop")}
                    className={`p-2 rounded-md transition-colors cursor-pointer ${
                      deviceMode.metalFx === "desktop" ? "bg-muted text-foreground" : "hover:text-foreground hover:bg-muted/50"
                    }`}
                    title="Desktop View"
                  >
                    <Monitor className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setBlockDevice("metalFx", "tablet")}
                    className={`p-2 rounded-md transition-colors cursor-pointer ${
                      deviceMode.metalFx === "tablet" ? "bg-muted text-foreground" : "hover:text-foreground hover:bg-muted/50"
                    }`}
                    title="Tablet View"
                  >
                    <Tablet className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setBlockDevice("metalFx", "mobile")}
                    className={`p-2 rounded-md transition-colors cursor-pointer ${
                      deviceMode.metalFx === "mobile" ? "bg-muted text-foreground" : "hover:text-foreground hover:bg-muted/50"
                    }`}
                    title="Mobile View"
                  >
                    <Smartphone className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => toggleExpand("metalFx")}
                    className="p-2 hover:text-foreground rounded-md hover:bg-muted cursor-pointer"
                    title={isExpanded.metalFx ? "Collapse" : "Expand"}
                  >
                    {isExpanded.metalFx ? <Minimize2 className="h-4 w-4" /> : <Maximize className="h-4 w-4" />}
                  </button>
                  <button
                    onClick={() => handleReload("metalFx")}
                    className="p-2 hover:text-foreground rounded-md hover:bg-muted cursor-pointer transition-transform active:rotate-180"
                    title="Reload Preview"
                  >
                    <RotateCw className="h-4 w-4" />
                  </button>
                </div>
                <div className="flex items-center gap-2 pl-2">
                  <button
                    onClick={() => copyToClipboard("npx @alvinahmad/ui add metal-fx", "metal-cmd")}
                    className="inline-flex items-center gap-2 rounded-md border bg-muted/50 px-3 py-1.5 text-xs text-muted-foreground font-mono hover:bg-muted/80 transition-colors cursor-pointer"
                  >
                    <span className="text-foreground">{">_"}</span> npx @alvinahmad/ui add metal-fx
                    {copiedId === "metal-cmd" ? (
                      <Check className="h-3.5 w-3.5 text-emerald-500" />
                    ) : (
                      <Copy className="h-3.5 w-3.5" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Block Content */}
            {activeTab.metalFx === "preview" ? (
              <div className={`rounded-2xl border bg-muted/10 p-4 md:p-8 flex items-center justify-center min-h-[460px] ${isExpanded.metalFx ? "min-h-[650px]" : ""}`}>
                <div key={reloadKeys.metalFx || 0} className={getDeviceContainerClass("metalFx")}>
                  <MetalFxBlock forceMode={deviceMode.metalFx} />
                </div>
              </div>
            ) : (
              <BlockCodeViewer files={metalFxFiles} defaultTab="metal-fx.tsx" />
            )}
          </div>
        )}

        {/* Block: Human Atlas */}
        {(selectedCategory === "Featured" || selectedCategory === "3D & Templates") && (
          <div id="human-atlas-block" className="space-y-4 scroll-mt-24">
            <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="inline-flex items-center rounded-md border bg-muted p-1">
                  <button
                    onClick={() => setActiveTab((prev) => ({ ...prev, humanAtlas: "preview" }))}
                    className={`rounded-sm px-3 py-1 text-sm font-medium transition-all cursor-pointer ${
                      activeTab.humanAtlas === "preview"
                        ? "bg-background text-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Preview
                  </button>
                  <button
                    onClick={() => setActiveTab((prev) => ({ ...prev, humanAtlas: "code" }))}
                    className={`rounded-sm px-3 py-1 text-sm font-medium transition-all cursor-pointer ${
                      activeTab.humanAtlas === "code"
                        ? "bg-background text-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Code
                  </button>
                </div>
                <span className="text-sm font-medium hidden md:inline-flex items-center gap-2 border-l pl-4 border-border text-foreground">
                  <Compass className="h-4 w-4 text-emerald-400" /> Interactive 3D Human Anatomy Studio template with multi-system dissection & orbit controls
                </span>
              </div>

              <div className="flex items-center gap-2 overflow-x-auto pb-2 xl:pb-0">
                <div className="hidden md:flex items-center gap-1 border-r pr-2 border-border text-muted-foreground">
                  <button
                    onClick={() => setBlockDevice("humanAtlas", "desktop")}
                    className={`p-2 rounded-md transition-colors cursor-pointer ${
                      deviceMode.humanAtlas === "desktop" ? "bg-muted text-foreground" : "hover:text-foreground hover:bg-muted/50"
                    }`}
                    title="Desktop View"
                  >
                    <Monitor className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setBlockDevice("humanAtlas", "tablet")}
                    className={`p-2 rounded-md transition-colors cursor-pointer ${
                      deviceMode.humanAtlas === "tablet" ? "bg-muted text-foreground" : "hover:text-foreground hover:bg-muted/50"
                    }`}
                    title="Tablet View"
                  >
                    <Tablet className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setBlockDevice("humanAtlas", "mobile")}
                    className={`p-2 rounded-md transition-colors cursor-pointer ${
                      deviceMode.humanAtlas === "mobile" ? "bg-muted text-foreground" : "hover:text-foreground hover:bg-muted/50"
                    }`}
                    title="Mobile View"
                  >
                    <Smartphone className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => toggleExpand("humanAtlas")}
                    className="p-2 hover:text-foreground rounded-md hover:bg-muted cursor-pointer"
                    title={isExpanded.humanAtlas ? "Collapse" : "Expand"}
                  >
                    {isExpanded.humanAtlas ? <Minimize2 className="h-4 w-4" /> : <Maximize className="h-4 w-4" />}
                  </button>
                  <button
                    onClick={() => handleReload("humanAtlas")}
                    className="p-2 hover:text-foreground rounded-md hover:bg-muted cursor-pointer transition-transform active:rotate-180"
                    title="Reload Preview"
                  >
                    <RotateCw className="h-4 w-4" />
                  </button>
                </div>
                <div className="flex items-center gap-2 pl-2">
                  <button
                    onClick={() => copyToClipboard("npx @alvinahmad/ui add human-atlas-block", "atlas-cmd")}
                    className="inline-flex items-center gap-2 rounded-md border bg-muted/50 px-3 py-1.5 text-xs text-muted-foreground font-mono hover:bg-muted/80 transition-colors cursor-pointer"
                  >
                    <span className="text-foreground">{">_"}</span> npx @alvinahmad/ui add human-atlas-block
                    {copiedId === "atlas-cmd" ? (
                      <Check className="h-3.5 w-3.5 text-emerald-500" />
                    ) : (
                      <Copy className="h-3.5 w-3.5" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Block Content */}
            {activeTab.humanAtlas === "preview" ? (
              <div className={`rounded-2xl border bg-muted/10 p-4 md:p-8 flex items-center justify-center min-h-[560px] ${isExpanded.humanAtlas ? "min-h-[750px]" : ""}`}>
                <div key={reloadKeys.humanAtlas || 0} className={getDeviceContainerClass("humanAtlas")}>
                  <HumanAtlasBlock forceMode={deviceMode.humanAtlas} />
                </div>
              </div>
            ) : (
              <BlockCodeViewer files={humanAtlasFiles} defaultTab="human-atlas-block.tsx" />
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
                  <Dashboard01 forceMode={deviceMode.dashboard} />
                </div>
              </div>
            ) : (
              <BlockCodeViewer files={dashboardFiles} defaultTab="dashboard-01.tsx" />
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
                  <Sidebar07 forceMode={deviceMode.sidebar} />
                </div>
              </div>
            ) : (
              <BlockCodeViewer files={sidebarFiles} defaultTab="sidebar-07.tsx" />
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
                  <Login01 forceMode={deviceMode.login} />
                </div>
              </div>
            ) : (
              <BlockCodeViewer files={loginFiles} defaultTab="login-01.tsx" />
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
                  <Signup01 forceMode={deviceMode.signup} />
                </div>
              </div>
            ) : (
              <BlockCodeViewer files={signupFiles} defaultTab="signup-01.tsx" />
            )}
          </div>
        )}

      </div>
    </div>
  );
}
