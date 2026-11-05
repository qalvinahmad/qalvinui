"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, Bot, Layers, Waves, Flame, Box, Zap } from "lucide-react";

const uiComponents = [
  {
    name: "Sticky Slides",
    slug: "sticky-slides",
    description: "Full-viewport sticky stacked presentation slides using pure CSS and Tailwind with gradient transitions.",
    tag: "Scroll Presentation",
    icon: Layers,
    color: "text-emerald-400",
  },
  {
    name: "Thinking Orb",
    slug: "thinking-orb",
    description: "Multi-state particle orb visualizing AI reasoning, thinking, audio listening, and error states.",
    tag: "AI Reasoning",
    icon: Bot,
    color: "text-cyan-400",
  },
  {
    name: "Metal FX",
    slug: "metal-fx",
    description: "GPU shader materials with real-time chrome, gold, liquid mercury, and mouse-reactive lighting.",
    tag: "WebGL Shaders",
    icon: Sparkles,
    color: "text-yellow-400",
  },
  {
    name: "Image FX",
    slug: "img-fx",
    description: "Animated mosaic pixel reveal and gradient sweep shader transitions for AI image generation cards.",
    tag: "AI Generation",
    icon: Zap,
    color: "text-purple-400",
  },
  {
    name: "Border Beam",
    slug: "border-beam",
    description: "Multi-path animated laser beam with gradient pulse drivers for high-tech borders and cards.",
    tag: "Motion Effects",
    icon: Box,
    color: "text-blue-400",
  },
  {
    name: "Voice Glow",
    slug: "voice-glow",
    description: "Audio-reactive voice assistant aura and reactive ambient waveforms for speech-enabled interfaces.",
    tag: "Audio & Voice",
    icon: Waves,
    color: "text-emerald-400",
  },
  {
    name: "Liquid Gooey",
    slug: "liquid-gooey",
    description: "Organic metaball fluid fusion, elastic morphing, and molten silhouette filters with real shadows.",
    tag: "Fluid Physics",
    icon: Flame,
    color: "text-rose-400",
  },
];

export default function UiOverviewPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-medium text-primary">
          <Sparkles className="h-3.5 w-3.5" />
          <span>New in Qalvin UI 2.0</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Specialized UI & Creative Effects</h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          High-performance interactive 3D WebGL shaders, AI agent indicators, fluid physics, and generative visual components ready to copy and paste into your React & Next.js applications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {uiComponents.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.slug}
              href={`/docs/ui/${item.slug}`}
              className="group relative flex flex-col justify-between rounded-2xl border bg-card/60 backdrop-blur-sm p-6 hover:bg-muted/40 hover:border-foreground/30 transition-all duration-200"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-muted/60 border border-border/50 text-foreground group-hover:scale-110 transition-transform">
                    <Icon className={`h-5 w-5 ${item.color}`} />
                  </div>
                  <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-muted text-muted-foreground border">
                    {item.tag}
                  </span>
                </div>

                <div>
                  <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-border/40 flex items-center justify-between text-xs font-medium text-muted-foreground group-hover:text-foreground">
                <span>View Documentation</span>
                <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
