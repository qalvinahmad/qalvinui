"use client";

import React, { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { Maximize2, Minimize2, ExternalLink, RotateCcw, Zap } from "lucide-react";

export type WarpFieldVariant = "hyperspace" | "streaks" | "letters" | "keycaps";

export interface ThreeDWarpFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  height?: string | number;
  variant?: WarpFieldVariant;
  speed?: number;
  streakOpacity?: number;
  tileOpacity?: number;
  fov?: number;
  hue?: number;
  saturation?: number;
  brightness?: number;
  showControls?: boolean;
  children?: React.ReactNode;
}

/**
 * ThreeDWarpField (WarpFieldBackground) — Interactive 3D Starfield & Hyperspace Warp Tunnel.
 * Features 400+ dynamic light streaks, procedural glowing tunnel, flying monospace letter tiles,
 * and adjustable warp speed and field-of-view physics.
 */
export function ThreeDWarpField({
  className,
  height = "640px",
  variant = "hyperspace",
  speed = 15.0,
  streakOpacity = 0.6,
  tileOpacity = 0.9,
  fov = 75,
  hue = 0,
  saturation = 1.0,
  brightness = 1.0,
  showControls = true,
  children,
  ...props
}: ThreeDWarpFieldProps) {
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

  const sceneSrc = `/3d-scenes/3d-warp-field.html?variant=${variant}`;

  return (
    <div
      ref={containerRef}
      className={cn(
        "group relative w-full rounded-2xl overflow-hidden border border-zinc-200/80 dark:border-zinc-800 bg-[#02040a] shadow-xl",
        className
      )}
      style={{
        height: isFullscreen ? "100vh" : height,
      }}
      {...props}
    >
      {/* Loading Skeleton & Spinner */}
      {!loaded && (
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#02040a] text-zinc-300 space-y-3">
          <div className="size-8 rounded-full border-2 border-cyan-500/30 border-t-cyan-400 animate-spin" />
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-cyan-400/80">
            <Zap className="size-3.5 text-cyan-400" />
            <span>Memuat 3D Warp Field ({variant})...</span>
          </div>
        </div>
      )}

      {/* WebGL 3D Scene Iframe */}
      <iframe
        ref={iframeRef}
        key={variant}
        src={sceneSrc}
        title={`3D Warp Field — ${variant}`}
        onLoad={() => setLoaded(true)}
        className="size-full border-0 outline-none select-none"
        style={{
          filter: `hue-rotate(${hue}deg) saturate(${saturation}) brightness(${brightness})`,
        }}
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
            href={sceneSrc}
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

export const WarpFieldBackground = ThreeDWarpField;
export default ThreeDWarpField;
