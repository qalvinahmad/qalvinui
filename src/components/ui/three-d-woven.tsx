"use client";

import React, { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { Maximize2, Minimize2, ExternalLink, RotateCcw, Sparkles } from "lucide-react";

export interface ThreeDWovenProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  height?: string | number;
  showControls?: boolean;
  hue?: number;
  saturation?: number;
  brightness?: number;
  children?: React.ReactNode;
}

/**
 * ThreeDWoven (WovenCloth) — Interactive Kinetic Textiles & Cloth Simulation (Lumina Weavers Kyoto).
 * Features real-time Verlet cloth integration, dynamic wind physics, procedural slub-thread texture generator,
 * authentic Japanese textile typography, and GSAP reveal animations.
 */
export function ThreeDWoven({
  className,
  height = "640px",
  showControls = true,
  hue = 0,
  saturation = 1.0,
  brightness = 1.0,
  children,
  ...props
}: ThreeDWovenProps) {
  const [loaded, setLoaded] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

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
        "group relative w-full rounded-2xl overflow-hidden border border-zinc-200/80 dark:border-zinc-800 bg-[#1a0a0c] shadow-xl",
        className
      )}
      style={{
        height: isFullscreen ? "100vh" : height,
      }}
      {...props}
    >
      {/* Loading Skeleton & Spinner */}
      {!loaded && (
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#1a0a0c] text-[#e8dcc4] space-y-3">
          <div className="size-8 rounded-full border-2 border-[#b02330]/30 border-t-[#b02330] animate-spin" />
          <div className="flex items-center gap-2 text-xs font-serif tracking-widest uppercase text-[#b99a8f]">
            <Sparkles className="size-3.5 text-[#b02330]" />
            <span>Memuat 3D Woven Cloth Simulation...</span>
          </div>
        </div>
      )}

      {/* WebGL 3D Scene Iframe */}
      <iframe
        ref={iframeRef}
        src="/3d-scenes/3d-woven.html"
        title="Lumina Weavers — 3D Kinetic Woven Cloth"
        onLoad={() => setLoaded(true)}
        className="size-full border-0 outline-none select-none"
        allow="accelerometer; gyroscope"
      />

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
            href="/3d-scenes/3d-woven.html"
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

export const WovenCloth = ThreeDWoven;
export default ThreeDWoven;
