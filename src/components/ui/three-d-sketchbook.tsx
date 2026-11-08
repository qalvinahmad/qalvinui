"use client";

import React, { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { Maximize2, Minimize2, ExternalLink, RotateCcw, BookOpen } from "lucide-react";

export interface ThreeDSketchbookProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  height?: string | number;
  showControls?: boolean;
  children?: React.ReactNode;
}

/**
 * ThreeDSketchbook — Interactive 3D Botanical Flipbook & Sketchbook (Meng To).
 * Realistic page curl, paper wash, drag-to-turn pages, and delicate serif typography.
 */
export function ThreeDSketchbook({
  className,
  height = "620px",
  showControls = true,
  children,
  ...props
}: ThreeDSketchbookProps) {
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
        "group relative w-full rounded-2xl overflow-hidden border border-zinc-300/80 dark:border-zinc-800 bg-[#ece7dc] shadow-xl",
        className
      )}
      style={{
        height: isFullscreen ? "100vh" : height,
      }}
      {...props}
    >
      {/* Loading Skeleton */}
      {!loaded && (
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#ece7dc] text-[#2b2721] space-y-3">
          <div className="size-8 rounded-full border-2 border-[#9a6a3e]/30 border-t-[#9a6a3e] animate-spin" />
          <div className="flex items-center gap-2 text-xs font-serif tracking-widest uppercase text-[#9a6a3e]">
            <BookOpen className="size-3.5" />
            <span>Membuka 3D Sketchbook...</span>
          </div>
        </div>
      )}

      {/* WebGL 3D Sketchbook Iframe */}
      <iframe
        ref={iframeRef}
        src="/3d-scenes/3d-sketchbook.html"
        title="3D Botanical Sketchbook (Meng To)"
        onLoad={() => setLoaded(true)}
        className="size-full border-0 outline-none select-none"
        allow="accelerometer; gyroscope"
      />

      {/* Action Controls Bar */}
      {showControls && (
        <div className="absolute top-4 right-4 z-30 flex items-center gap-1.5 p-1 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 opacity-80 group-hover:opacity-100 transition-opacity">
          <button
            onClick={reloadScene}
            title="Reload Sketchbook"
            aria-label="Reload Sketchbook"
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
            href="/3d-scenes/3d-sketchbook.html"
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

export default ThreeDSketchbook;
