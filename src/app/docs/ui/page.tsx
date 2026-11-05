"use client";

import Link from "next/link";
import { Sparkles } from "lucide-react";
import { ComponentCard } from "@/components/ui/component-card";

const uiComponents = [
  {
    name: "Sticky Slides",
    slug: "sticky-slides",
    description: "Full-viewport sticky stacked presentation slides using pure CSS and Tailwind with gradient transitions.",
    tag: "Scroll Presentation",
  },
  {
    name: "Thinking Orb",
    slug: "thinking-orb",
    description: "Multi-state particle orb visualizing AI reasoning, thinking, audio listening, and error states.",
    tag: "AI Reasoning",
  },
  {
    name: "Metal FX",
    slug: "metal-fx",
    description: "GPU shader materials with real-time chrome, gold, liquid mercury, and mouse-reactive lighting.",
    tag: "WebGL Shaders",
  },
  {
    name: "Image FX",
    slug: "img-fx",
    description: "Animated mosaic pixel reveal and gradient sweep shader transitions for AI image generation cards.",
    tag: "AI Generation",
  },
  {
    name: "Border Beam",
    slug: "border-beam",
    description: "Multi-path animated laser beam with gradient pulse drivers for high-tech borders and cards.",
    tag: "Motion Effects",
  },
  {
    name: "Voice Glow",
    slug: "voice-glow",
    description: "Audio-reactive voice assistant aura and reactive ambient waveforms for speech-enabled interfaces.",
    tag: "Audio & Voice",
  },
  {
    name: "Liquid Gooey",
    slug: "liquid-gooey",
    description: "Organic metaball fluid fusion, elastic morphing, and molten silhouette filters with real shadows.",
    tag: "Fluid Physics",
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {uiComponents.map((item) => (
          <ComponentCard
            key={item.slug}
            name={item.name}
            description={item.description}
            tag={item.tag}
            href={`/docs/ui/${item.slug}`}
          />
        ))}
      </div>
    </div>
  );
}
