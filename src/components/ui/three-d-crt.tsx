"use client";

import React, { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { Maximize2, Minimize2, ExternalLink, RotateCcw, Monitor } from "lucide-react";

export type CrtVariant = "terminal" | "cinematic" | "blue-screen" | "nintendo";

export interface ThreeDCrtProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  height?: string | number;
  variant?: CrtVariant;
  speed?: number;
  typeSpeed?: number;
  motion?: number;
  hue?: number;
  saturation?: number;
  brightness?: number;
  opacity?: number;
  showControls?: boolean;
  children?: React.ReactNode;
}

/**
 * ThreeDCrt (CrtBackground) — Retro Cathode Ray Tube Phosphor & Shadow-Mask Display.
 * Procedural WebGL scanlines, shadow-mask phosphor grille, chromatic aberration,
 * barrel distortion curvature, film grain, and authentic retro terminal / cinematic / blue screen presets.
 */
export function ThreeDCrt({
  className,
  height = "640px",
  variant = "terminal",
  speed = 1.0,
  typeSpeed = 1.0,
  motion = 1.0,
  hue = 0,
  saturation = 1.0,
  brightness = 1.0,
  opacity = 1.0,
  showControls = true,
  children,
  ...props
}: ThreeDCrtProps) {
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

  const params = new URLSearchParams({
    variant,
    speed: speed.toString(),
    typeSpeed: typeSpeed.toString(),
    motion: motion.toString(),
    hue: hue.toString(),
    saturation: saturation.toString(),
    brightness: brightness.toString(),
    opacity: opacity.toString(),
  });

  const sceneSrc = `/3d-scenes/3d-crt.html?${params.toString()}`;

  return (
    <div
      ref={containerRef}
      className={cn(
        "group relative w-full rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-[#030806] shadow-xl transition-all",
        isFullscreen && "fixed inset-0 z-50 rounded-none border-0",
        className
      )}
      style={{ height: isFullscreen ? "100vh" : height }}
      {...props}
    >
      {/* Loading Spinner */}
      {!loaded && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-[#030806] text-zinc-400">
          <div className="relative size-12">
            <div className="absolute inset-0 rounded-full border-2 border-emerald-500/20" />
            <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-emerald-400" />
            <div className="absolute inset-2 flex items-center justify-center">
              <Monitor className="size-4 text-emerald-400 animate-pulse" />
            </div>
          </div>
          <span className="font-mono text-xs tracking-wider uppercase text-emerald-400/80">
            Memuat CRT Phosphor Display...
          </span>
        </div>
      )}

      {/* Standalone Scene Iframe */}
      <iframe
        ref={iframeRef}
        src={sceneSrc}
        title="3D CRT Phosphor Display"
        className={cn(
          "h-full w-full border-0 transition-opacity duration-700",
          loaded ? "opacity-100" : "opacity-0"
        )}
        onLoad={() => setLoaded(true)}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      />

      {/* Controls Overlay */}
      {showControls && (
        <div className="absolute top-4 right-4 z-20 flex items-center gap-2 opacity-0 transition-opacity duration-200 group-hover:opacity-100 focus-within:opacity-100">
          <div className="flex items-center gap-1 rounded-lg border border-zinc-800 bg-zinc-950/80 p-1 backdrop-blur-md shadow-lg">
            <button
              onClick={reloadScene}
              className="rounded p-1.5 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100 transition-colors"
              title="Reset Tampilan"
              aria-label="Reset Tampilan"
            >
              <RotateCcw className="size-4" />
            </button>
            <button
              onClick={toggleFullscreen}
              className="rounded p-1.5 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100 transition-colors"
              title={isFullscreen ? "Keluar Layar Penuh" : "Layar Penuh"}
              aria-label={isFullscreen ? "Keluar Layar Penuh" : "Layar Penuh"}
            >
              {isFullscreen ? (
                <Minimize2 className="size-4" />
              ) : (
                <Maximize2 className="size-4" />
              )}
            </button>
            <a
              href={sceneSrc}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded p-1.5 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100 transition-colors"
              title="Buka di Tab Baru"
              aria-label="Buka di Tab Baru"
            >
              <ExternalLink className="size-4" />
            </a>
          </div>
        </div>
      )}

      {/* Children overlay */}
      {children && (
        <div className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center p-6 text-center">
          <div className="pointer-events-auto max-w-2xl">{children}</div>
        </div>
      )}
    </div>
  );
}

export const CrtBackground = ThreeDCrt;
export default ThreeDCrt;
