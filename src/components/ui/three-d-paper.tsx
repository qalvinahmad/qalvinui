"use client";

import React, { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { Maximize2, Minimize2, ExternalLink, RotateCcw, FileText, Sparkles } from "lucide-react";

export type ThreeDPaperVariant =
  | "original"
  | "site-of-the-year"
  | "japanese"
  | "certificate";

export interface ThreeDPaperProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  height?: string | number;
  variant?: ThreeDPaperVariant;
  showControls?: boolean;
  showVariantSwitcher?: boolean;
  onVariantChange?: (variant: ThreeDPaperVariant) => void;
  children?: React.ReactNode;
}

const VARIANT_SCENES: Record<ThreeDPaperVariant, { src: string; label: string; desc: string }> = {
  original: {
    src: "/3d-scenes/3d-paper.html",
    label: "Nocturne",
    desc: "Original Nocturne typographic edition",
  },
  "site-of-the-year": {
    src: "/3d-scenes/3d-paper-site-of-the-year.html",
    label: "Site of the Year",
    desc: "Awwwards-inspired laurel celebration",
  },
  japanese: {
    src: "/3d-scenes/3d-paper-japanese.html",
    label: "認定証",
    desc: "Japanese traditional certificate with red hanko seal",
  },
  certificate: {
    src: "/3d-scenes/3d-paper-certificate.html",
    label: "Certificate",
    desc: "Classical gold-embossed certificate of merit",
  },
};

/**
 * ThreeDPaper — Interactive 3D Realistic Paper & Certificate Mesh (Nocturne).
 * Features realistic physical paper curl, tactile depth-of-field, subtle paper grain,
 * dynamic drag-to-turn physics, specular light tracking, and custom typographic editions.
 */
export function ThreeDPaper({
  className,
  height = "620px",
  variant: controlledVariant = "original",
  showControls = true,
  showVariantSwitcher = true,
  onVariantChange,
  children,
  ...props
}: ThreeDPaperProps) {
  const [selectedVariant, setSelectedVariant] = useState<ThreeDPaperVariant>(controlledVariant);
  const [loaded, setLoaded] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Sync if prop changes
  React.useEffect(() => {
    setSelectedVariant(controlledVariant);
  }, [controlledVariant]);

  const activeVariantConfig = VARIANT_SCENES[selectedVariant] || VARIANT_SCENES.original;

  const handleVariantSelect = (v: ThreeDPaperVariant) => {
    if (v === selectedVariant) return;
    setLoaded(false);
    setSelectedVariant(v);
    onVariantChange?.(v);
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  const reloadScene = () => {
    if (iframeRef.current) {
      setLoaded(false);
      iframeRef.current.src = iframeRef.current.src;
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "group relative w-full rounded-2xl overflow-hidden border border-zinc-200/80 dark:border-zinc-800 bg-[#08080a] shadow-xl",
        className
      )}
      style={{
        height: isFullscreen ? "100vh" : height,
      }}
      {...props}
    >
      {/* Loading Skeleton & Spinner */}
      {!loaded && (
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#08080a] text-zinc-300 space-y-3">
          <div className="size-8 rounded-full border-2 border-zinc-700 border-t-zinc-200 animate-spin" />
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-zinc-400">
            <FileText className="size-3.5 text-zinc-300" />
            <span>Memuat 3D Paper ({activeVariantConfig.label})...</span>
          </div>
        </div>
      )}

      {/* WebGL 3D Scene Iframe */}
      <iframe
        ref={iframeRef}
        key={selectedVariant}
        src={activeVariantConfig.src}
        title={`3D Paper — ${activeVariantConfig.label}`}
        onLoad={() => setLoaded(true)}
        className="size-full border-0 outline-none select-none"
        allow="accelerometer; gyroscope"
      />

      {/* Variant Selector Tabs (Bottom Left or Top Left) */}
      {showVariantSwitcher && (
        <div className="absolute top-4 left-4 z-30 flex items-center gap-1 p-1 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 opacity-90 transition-opacity">
          {(Object.keys(VARIANT_SCENES) as ThreeDPaperVariant[]).map((v) => {
            const isActive = v === selectedVariant;
            return (
              <button
                key={v}
                onClick={() => handleVariantSelect(v)}
                className={cn(
                  "px-2.5 py-1 rounded-lg text-xs font-medium transition-all",
                  isActive
                    ? "bg-white/20 text-white shadow-sm border border-white/10"
                    : "text-zinc-400 hover:text-zinc-200 hover:bg-white/5"
                )}
              >
                {VARIANT_SCENES[v].label}
              </button>
            );
          })}
        </div>
      )}

      {/* Action Controls Bar */}
      {showControls && (
        <div className="absolute top-4 right-4 z-30 flex items-center gap-1.5 p-1 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 opacity-80 group-hover:opacity-100 transition-opacity">
          <button
            onClick={reloadScene}
            title="Reload 3D Scene"
            aria-label="Reload 3D Scene"
            className="p-1.5 rounded-lg text-zinc-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            <RotateCcw className="size-4" />
          </button>
          <button
            onClick={toggleFullscreen}
            title="Toggle Fullscreen"
            aria-label="Toggle Fullscreen"
            className="p-1.5 rounded-lg text-zinc-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            {isFullscreen ? <Minimize2 className="size-4" /> : <Maximize2 className="size-4" />}
          </button>
          <a
            href={activeVariantConfig.src}
            target="_blank"
            rel="noopener noreferrer"
            title="Buka Scene di Tab Baru"
            aria-label="Buka Scene di Tab Baru"
            className="p-1.5 rounded-lg text-zinc-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            <ExternalLink className="size-4" />
          </a>
        </div>
      )}

      {/* Optional Overlay Content */}
      {children && (
        <div className="absolute inset-0 pointer-events-none z-10 flex flex-col justify-end p-6 md:p-10">
          <div className="pointer-events-auto">{children}</div>
        </div>
      )}
    </div>
  );
}

export default ThreeDPaper;
