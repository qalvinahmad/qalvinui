"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Terminal,
  Layers,
  Sparkles,
  Palette,
  Bot,
  Copy,
  Check,
  Code2,
  Cpu,
  BookOpen,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

function CliBlock({ command }: { command: string }) {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    toast.success("Command copied to clipboard");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative flex items-center justify-between rounded-xl border bg-muted/40 px-4 py-3 font-mono text-xs sm:text-sm">
      <span className="text-foreground/90 select-all">$ {command}</span>
      <button
        onClick={copy}
        className="ml-3 p-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted cursor-pointer transition-colors"
      >
        {copied ? <Check className="h-4 w-4 text-primary" /> : <Copy className="h-4 w-4" />}
      </button>
    </div>
  );
}

export default function DocsPage() {
  return (
    <div className="mx-auto w-full min-w-0 max-w-4xl space-y-12 pb-16">
      {/* Hero */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border bg-muted/50 text-xs font-semibold text-muted-foreground">
          <BookOpen className="h-3.5 w-3.5 text-primary" /> Documentation & Architecture
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
          Qalvin UI Documentation
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          A high-performance design system and component engine built on Base UI primitives, Tailwind CSS v4, and AI Agent MCP integration.
        </p>
      </div>

      {/* Quick Start Installation */}
      <div className="space-y-4">
        <h2 id="quickstart" className="text-2xl font-bold tracking-tight">Quick Start</h2>
        <p className="text-sm text-muted-foreground">
          Initialize Qalvin UI in any modern Next.js, Vite, or React application with a single CLI command:
        </p>
        <CliBlock command="pnpm dlx @alvinahmad/ui init" />
        <p className="text-sm text-muted-foreground mt-2">
          Add any UI component directly into your workspace source code:
        </p>
        <CliBlock command="pnpm dlx @alvinahmad/ui add button autocomplete composer group" />
      </div>

      {/* Key Architectural Pillars */}
      <div className="space-y-4">
        <h2 id="architecture" className="text-2xl font-bold tracking-tight">Core Architecture</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border rounded-2xl p-5 bg-card shadow-xs space-y-2">
            <div className="h-8 w-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
              <Layers className="h-4 w-4" />
            </div>
            <h3 className="font-semibold text-base">Unstyled Base UI Primitives</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Powered by Base UI (MUI team). Delivers complete WAI-ARIA accessibility, robust focus management, keyboard navigation, and popover portals without opinionated style constraints.
            </p>
          </div>

          <div className="border rounded-2xl p-5 bg-card shadow-xs space-y-2">
            <div className="h-8 w-8 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
              <Palette className="h-4 w-4" />
            </div>
            <h3 className="font-semibold text-base">Tailwind CSS v4 & OKLCH</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Built on Tailwind CSS v4 featuring native CSS variables, lightning-fast compilation with Oxide engine, and perceptual uniform OKLCH color palettes.
            </p>
          </div>

          <div className="border rounded-2xl p-5 bg-card shadow-xs space-y-2">
            <div className="h-8 w-8 rounded-lg bg-blue-500/10 text-blue-600 flex items-center justify-center">
              <Sparkles className="h-4 w-4" />
            </div>
            <h3 className="font-semibold text-base">Creative Canvases & FX</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Includes WebGL GLSL shaders, 3D interactive thinking orbs, voice-reactive waveforms, and SVG gooey metaballs designed for AI interfaces.
            </p>
          </div>

          <div className="border rounded-2xl p-5 bg-card shadow-xs space-y-2">
            <div className="h-8 w-8 rounded-lg bg-purple-500/10 text-purple-600 flex items-center justify-center">
              <Bot className="h-4 w-4" />
            </div>
            <h3 className="font-semibold text-base">AI Model Context Protocol (MCP)</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Native MCP server enables Cursor, Claude Code, and Antigravity to discover, inspect, and scaffold Qalvin UI components and blocks automatically.
            </p>
          </div>
        </div>
      </div>

      {/* Explore Documentation Sections */}
      <div className="space-y-4">
        <h2 id="explore" className="text-2xl font-bold tracking-tight">Explore the Library</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link
            href="/docs/components"
            className="border rounded-2xl p-5 bg-card hover:bg-muted/40 transition-colors flex flex-col justify-between shadow-xs group"
          >
            <div>
              <h3 className="font-semibold text-base group-hover:text-primary transition-colors flex items-center justify-between">
                Components <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </h3>
              <p className="text-xs text-muted-foreground mt-1">Browse 40+ accessible UI components.</p>
            </div>
          </Link>

          <Link
            href="/docs/ui"
            className="border rounded-2xl p-5 bg-card hover:bg-muted/40 transition-colors flex flex-col justify-between shadow-xs group"
          >
            <div>
              <h3 className="font-semibold text-base group-hover:text-primary transition-colors flex items-center justify-between">
                Creative UI <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </h3>
              <p className="text-xs text-muted-foreground mt-1">Explore 3D shaders, voice glow, and effects.</p>
            </div>
          </Link>

          <Link
            href="/docs/skills"
            className="border rounded-2xl p-5 bg-card hover:bg-muted/40 transition-colors flex flex-col justify-between shadow-xs group"
          >
            <div>
              <h3 className="font-semibold text-base group-hover:text-primary transition-colors flex items-center justify-between">
                Agent Skills <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </h3>
              <p className="text-xs text-muted-foreground mt-1">Install full composable UI skills.</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
