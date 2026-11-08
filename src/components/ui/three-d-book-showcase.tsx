"use client";

import React, { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { Maximize2, Minimize2, ExternalLink, RotateCcw, BookOpen } from "lucide-react";

export interface ThreeDBookShowcaseProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  height?: string | number;
  showControls?: boolean;
  primaryColor?: string;
  children?: React.ReactNode;
}

/**
 * ThreeDBookShowcase (BestsellersBookShowcase) — Interactive 3D Field Manuals & Book Gallery.
 * Features 3D perspective gallery, 3D rotating books with dynamic page curls and fan effects,
 * video cover motion, blossom petal simulation, deep inspectable detail reader, and mouse parallax.
 */
export function ThreeDBookShowcase({
  className,
  height = "680px",
  showControls = true,
  primaryColor = "#c3a47b",
  children,
  ...props
}: ThreeDBookShowcaseProps) {
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
        "group relative w-full rounded-2xl overflow-hidden border border-zinc-200/80 dark:border-zinc-800 bg-[#29251d] shadow-xl",
        className
      )}
      style={{
        height: isFullscreen ? "100vh" : height,
      }}
      {...props}
    >
      {/* Loading Skeleton & Spinner */}
      {!loaded && (
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#29251d] text-[#eee2ca] space-y-3">
          <div className="size-8 rounded-full border-2 border-[#c3a47b]/20 border-t-[#c3a47b] animate-spin" />
          <div className="flex items-center gap-2 text-xs font-serif tracking-widest uppercase text-[#c3a47b]">
            <BookOpen className="size-3.5 text-[#c3a47b]" />
            <span>Memuat 3D Book Showcase (Field Manuals)...</span>
          </div>
        </div>
      )}

      {/* WebGL / CSS 3D Scene Iframe */}
      <iframe
        ref={iframeRef}
        src="/3d-scenes/3d-book-showcase.html"
        title="Field Manuals — 3D Book Showcase"
        onLoad={() => setLoaded(true)}
        className="size-full border-0 outline-none select-none"
        allow="accelerometer; gyroscope; autoplay"
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
            href="/3d-scenes/3d-book-showcase.html"
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

export const BestsellersBookShowcase = ThreeDBookShowcase;
export default ThreeDBookShowcase;
