"use client";

import React, { useState } from "react";
import { Copy, Check, Sparkles, Palette, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

interface ColorScale {
  name: string;
  category: "Neutrals" | "Colors" | "Semantics";
  shades: {
    step: string;
    hex: string;
    textColor: string;
  }[];
}

const PALETTES: ColorScale[] = [
  {
    name: "Zinc",
    category: "Neutrals",
    shades: [
      { step: "50", hex: "#fafafa", textColor: "#18181b" },
      { step: "100", hex: "#f4f4f5", textColor: "#18181b" },
      { step: "200", hex: "#e4e4e7", textColor: "#18181b" },
      { step: "300", hex: "#d4d4d8", textColor: "#18181b" },
      { step: "400", hex: "#a1a1aa", textColor: "#18181b" },
      { step: "500", hex: "#71717a", textColor: "#ffffff" },
      { step: "600", hex: "#52525b", textColor: "#ffffff" },
      { step: "700", hex: "#3f3f46", textColor: "#ffffff" },
      { step: "800", hex: "#27272a", textColor: "#ffffff" },
      { step: "900", hex: "#18181b", textColor: "#ffffff" },
      { step: "950", hex: "#09090b", textColor: "#ffffff" },
    ],
  },
  {
    name: "Slate",
    category: "Neutrals",
    shades: [
      { step: "50", hex: "#f8fafc", textColor: "#0f172a" },
      { step: "100", hex: "#f1f5f9", textColor: "#0f172a" },
      { step: "200", hex: "#e2e8f0", textColor: "#0f172a" },
      { step: "300", hex: "#cbd5e1", textColor: "#0f172a" },
      { step: "400", hex: "#94a3b8", textColor: "#0f172a" },
      { step: "500", hex: "#64748b", textColor: "#ffffff" },
      { step: "600", hex: "#475569", textColor: "#ffffff" },
      { step: "700", hex: "#334155", textColor: "#ffffff" },
      { step: "800", hex: "#1e293b", textColor: "#ffffff" },
      { step: "900", hex: "#0f172a", textColor: "#ffffff" },
      { step: "950", hex: "#020617", textColor: "#ffffff" },
    ],
  },
  {
    name: "Blue",
    category: "Colors",
    shades: [
      { step: "50", hex: "#eff6ff", textColor: "#1e3a8a" },
      { step: "100", hex: "#dbeafe", textColor: "#1e3a8a" },
      { step: "200", hex: "#bfdbfe", textColor: "#1e3a8a" },
      { step: "300", hex: "#93c5fd", textColor: "#1e3a8a" },
      { step: "400", hex: "#60a5fa", textColor: "#000000" },
      { step: "500", hex: "#3b82f6", textColor: "#ffffff" },
      { step: "600", hex: "#2563eb", textColor: "#ffffff" },
      { step: "700", hex: "#1d4ed8", textColor: "#ffffff" },
      { step: "800", hex: "#1e40af", textColor: "#ffffff" },
      { step: "900", hex: "#1e3a8a", textColor: "#ffffff" },
      { step: "950", hex: "#172554", textColor: "#ffffff" },
    ],
  },
  {
    name: "Emerald",
    category: "Colors",
    shades: [
      { step: "50", hex: "#ecfdf5", textColor: "#064e3b" },
      { step: "100", hex: "#d1fae5", textColor: "#064e3b" },
      { step: "200", hex: "#a7f3d0", textColor: "#064e3b" },
      { step: "300", hex: "#6ee7b7", textColor: "#064e3b" },
      { step: "400", hex: "#34d399", textColor: "#000000" },
      { step: "500", hex: "#10b981", textColor: "#ffffff" },
      { step: "600", hex: "#059669", textColor: "#ffffff" },
      { step: "700", hex: "#047857", textColor: "#ffffff" },
      { step: "800", hex: "#065f46", textColor: "#ffffff" },
      { step: "900", hex: "#064e3b", textColor: "#ffffff" },
      { step: "950", hex: "#022c22", textColor: "#ffffff" },
    ],
  },
  {
    name: "Rose",
    category: "Colors",
    shades: [
      { step: "50", hex: "#fff1f2", textColor: "#881337" },
      { step: "100", hex: "#ffe4e6", textColor: "#881337" },
      { step: "200", hex: "#fecdd3", textColor: "#881337" },
      { step: "300", hex: "#fda4af", textColor: "#881337" },
      { step: "400", hex: "#fb7185", textColor: "#000000" },
      { step: "500", hex: "#f43f5e", textColor: "#ffffff" },
      { step: "600", hex: "#e11d48", textColor: "#ffffff" },
      { step: "700", hex: "#be123c", textColor: "#ffffff" },
      { step: "800", hex: "#9f1239", textColor: "#ffffff" },
      { step: "900", hex: "#881337", textColor: "#ffffff" },
      { step: "950", hex: "#4c0519", textColor: "#ffffff" },
    ],
  },
  {
    name: "Purple",
    category: "Colors",
    shades: [
      { step: "50", hex: "#faf5ff", textColor: "#581c87" },
      { step: "100", hex: "#f3e8ff", textColor: "#581c87" },
      { step: "200", hex: "#e9d5ff", textColor: "#581c87" },
      { step: "300", hex: "#d8b4fe", textColor: "#581c87" },
      { step: "400", hex: "#c084fc", textColor: "#000000" },
      { step: "500", hex: "#a855f7", textColor: "#ffffff" },
      { step: "600", hex: "#9333ea", textColor: "#ffffff" },
      { step: "700", hex: "#7e22ce", textColor: "#ffffff" },
      { step: "800", hex: "#6b21a8", textColor: "#ffffff" },
      { step: "900", hex: "#581c87", textColor: "#ffffff" },
      { step: "950", hex: "#3b0764", textColor: "#ffffff" },
    ],
  },
  {
    name: "Amber",
    category: "Colors",
    shades: [
      { step: "50", hex: "#fffbeb", textColor: "#78350f" },
      { step: "100", hex: "#fef3c7", textColor: "#78350f" },
      { step: "200", hex: "#fde68a", textColor: "#78350f" },
      { step: "300", hex: "#fcd34d", textColor: "#78350f" },
      { step: "400", hex: "#fbbf24", textColor: "#000000" },
      { step: "500", hex: "#f59e0b", textColor: "#000000" },
      { step: "600", hex: "#d97706", textColor: "#ffffff" },
      { step: "700", hex: "#b45309", textColor: "#ffffff" },
      { step: "800", hex: "#92400e", textColor: "#ffffff" },
      { step: "900", hex: "#78350f", textColor: "#ffffff" },
      { step: "950", hex: "#451a03", textColor: "#ffffff" },
    ],
  },
];

export default function ColorsPage() {
  const [format, setFormat] = useState<"HEX" | "Class">("HEX");
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  const copyColor = (paletteName: string, step: string, hex: string) => {
    const textToCopy = format === "HEX" ? hex : `bg-${paletteName.toLowerCase()}-${step}`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedHex(hex);
    toast.success(`Copied: ${textToCopy}`);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  return (
    <div className="container mx-auto px-4 py-10 max-w-screen-xl space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b pb-6">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border bg-muted/50 text-xs font-semibold text-muted-foreground">
            <Palette className="h-3.5 w-3.5 text-primary" /> Qalvin UI Design Tokens
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight">Colors</h1>
          <p className="text-muted-foreground text-base max-w-2xl">
            Tailwind CSS and OKLCH color palettes crafted for accessible high-contrast interfaces. Click any shade to copy.
          </p>
        </div>

        {/* Format Selector */}
        <div className="inline-flex rounded-xl border bg-muted/50 p-1 text-xs font-semibold">
          {(["HEX", "Class"] as const).map((fmt) => (
            <button
              key={fmt}
              onClick={() => setFormat(fmt)}
              className={cn(
                "px-3 py-1.5 rounded-lg transition-colors cursor-pointer",
                format === fmt
                  ? "bg-background text-foreground shadow-xs"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {fmt}
            </button>
          ))}
        </div>
      </div>

      {/* Semantic Tokens Grid */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold tracking-tight">Semantic Design Tokens</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3">
          {[
            { token: "background", label: "Background", bg: "bg-background", border: "border" },
            { token: "foreground", label: "Foreground", bg: "bg-foreground", text: "text-background" },
            { token: "card", label: "Card", bg: "bg-card", border: "border" },
            { token: "primary", label: "Primary", bg: "bg-primary", text: "text-primary-foreground" },
            { token: "secondary", label: "Secondary", bg: "bg-secondary", text: "text-secondary-foreground" },
            { token: "muted", label: "Muted", bg: "bg-muted", text: "text-muted-foreground" },
            { token: "destructive", label: "Destructive", bg: "bg-destructive", text: "text-white" },
            { token: "border", label: "Border", bg: "bg-border", text: "text-foreground" },
            { token: "ring", label: "Ring", bg: "bg-ring", text: "text-white" },
          ].map((item) => (
            <button
              key={item.token}
              onClick={() => {
                navigator.clipboard.writeText(`var(--${item.token})`);
                toast.success(`Copied var(--${item.token})`);
              }}
              className={cn(
                "h-20 rounded-xl p-3 flex flex-col justify-between text-left transition-transform hover:scale-105 cursor-pointer shadow-2xs",
                item.bg,
                item.text || "text-foreground",
                item.border && "border"
              )}
            >
              <span className="text-xs font-semibold">{item.label}</span>
              <span className="text-[10px] font-mono opacity-80">--{item.token}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Palette Scales */}
      <div className="space-y-8 pt-4">
        <h2 className="text-xl font-bold tracking-tight">Full Spectrum Scales</h2>
        <div className="space-y-6">
          {PALETTES.map((palette) => (
            <div key={palette.name} className="space-y-2">
              <div className="flex justify-between items-center text-sm font-semibold">
                <span>{palette.name}</span>
                <span className="text-xs text-muted-foreground font-mono">{palette.shades.length} shades</span>
              </div>

              <div className="grid grid-cols-6 sm:grid-cols-11 gap-1.5">
                {palette.shades.map((shade) => {
                  const isCopied = copiedHex === shade.hex;
                  return (
                    <button
                      key={shade.step}
                      onClick={() => copyColor(palette.name, shade.step, shade.hex)}
                      style={{ backgroundColor: shade.hex }}
                      className="group relative h-16 rounded-xl p-2 flex flex-col justify-between text-left transition-all duration-200 hover:scale-105 cursor-pointer shadow-2xs border border-black/5"
                    >
                      <span
                        style={{ color: shade.textColor }}
                        className="text-[11px] font-bold"
                      >
                        {shade.step}
                      </span>
                      <span
                        style={{ color: shade.textColor }}
                        className="text-[9px] font-mono opacity-70 truncate"
                      >
                        {format === "HEX" ? shade.hex : `${shade.step}`}
                      </span>

                      {isCopied && (
                        <div className="absolute inset-0 bg-black/40 rounded-xl flex items-center justify-center">
                          <Check className="h-4 w-4 text-white" />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
