"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Code2, Copy, Sparkles, Smartphone } from "lucide-react";

export default function HooksIndexPage() {
  const hooks = [
    {
      name: "useMediaQuery",
      href: "/docs/hooks/use-media-query",
      description: "Track whether a CSS media query matches the current viewport reactively and SSR-safely.",
      icon: Smartphone,
    },
    {
      name: "useCopyToClipboard",
      href: "/docs/hooks/use-copy-to-clipboard",
      description: "Copy text to clipboard with reactive status feedback, auto-reset timeout, and fallback.",
      icon: Copy,
    },
  ];

  return (
    <div className="mx-auto w-full min-w-0 max-w-3xl space-y-10 pb-16">
      <div className="space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border bg-muted/50 text-xs font-semibold text-muted-foreground">
          <Sparkles className="h-3.5 w-3.5 text-primary" /> React Utilities
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight">Hooks</h1>
        <p className="text-lg text-muted-foreground">
          Essential, lightweight, and type-safe React custom hooks tailored for modern web apps.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {hooks.map((hook) => {
          const Icon = hook.icon;
          return (
            <Link
              key={hook.name}
              href={hook.href}
              className="border rounded-2xl p-5 bg-card hover:bg-muted/40 transition-colors flex flex-col justify-between shadow-xs group"
            >
              <div className="space-y-3">
                <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-base group-hover:text-primary transition-colors flex items-center justify-between">
                    {hook.name} <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    {hook.description}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
