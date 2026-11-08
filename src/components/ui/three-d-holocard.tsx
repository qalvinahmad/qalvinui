"use client";

import React, { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { Maximize2, Minimize2, ExternalLink, RotateCcw, Sparkles } from "lucide-react";

export interface ThreeDHolocardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  height?: string | number;
  showControls?: boolean;
  children?: React.ReactNode;
}

/**
 * ThreeDHolocard — Interactive 3D Holographic Trading Card (The Ashen One).
 * Real-time WebGL shader rendering with greatsword filigree, runes,
 * glints, mouse-following tilt, drag rotation, and double-click flip.
 */
export function ThreeDHolocard({
  className,
  height = "580px",
  showControls = true,
  children,
  ...props
}: ThreeDHolocardProps) {
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
        "group relative w-full rounded-2xl overflow-hidden border border-zinc-200/80 dark:border-zinc-800 bg-[#050404] shadow-xl",
        className
      )}
      style={{
        height: isFullscreen ? "100vh" : height,
      }}
      {...props}
    >
      {/* Loading Skeleton */}
      {!loaded && (
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#050404] text-zinc-400 space-y-3">
          <div className="size-8 rounded-full border-2 border-amber-500/20 border-t-amber-500 animate-spin" />
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-amber-300/80">
            <Sparkles className="size-3.5 text-amber-500" />
            <span>Memuat 3D Holocard...</span>
          </div>
        </div>
      )}

      {/* WebGL 3D Holocard Iframe */}
      <iframe
        ref={iframeRef}
        src="/3d-scenes/3d-holocard.html"
        title="3D Holographic Card (The Ashen One)"
        onLoad={() => setLoaded(true)}
        className="size-full border-0 outline-none select-none"
        allow="accelerometer; gyroscope"
      />

      {/* Action Controls Bar */}
      {showControls && (
        <div className="absolute top-4 right-4 z-30 flex items-center gap-1.5 p-1 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 opacity-80 group-hover:opacity-100 transition-opacity">
          <button
            onClick={reloadScene}
            title="Reload 3D Card"
            aria-label="Reload 3D Card"
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
            href="/3d-scenes/3d-holocard.html"
            target="_blank"
            rel="noopener noreferrer"
            title="Open standalone scene"
            aria-label="Open standalone scene in new tab"
            className="p-1.5 rounded-lg text-zinc-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            <ExternalLink className="size-4" />
          </a>
        </div>
      )}

      {/* Optional React Children Overlay */}
      {children && (
        <div className="pointer-events-none absolute inset-0 z-10 flex flex-col justify-end p-6">
          <div className="pointer-events-auto">{children}</div>
        </div>
      )}
    </div>
  );
}

export default ThreeDHolocard;
