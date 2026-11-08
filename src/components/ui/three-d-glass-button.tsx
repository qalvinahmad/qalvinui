"use client";

import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Maximize2, Minimize2, ExternalLink, RotateCcw, Sparkles } from "lucide-react";

export interface ThreeDGlassButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  height?: string | number;
  showControls?: boolean;
  children?: React.ReactNode;
}

/**
 * ThreeDGlassButton (GlassAiButton) — Photorealistic 3D Glass AI Pill Button.
 * Features realistic physical glass refraction, internal spiral galaxy particle orb,
 * dynamic caustic highlights, and physics-based press and tilt interactivity.
 */
export function ThreeDGlassButton({
  className,
  height = "520px",
  showControls = true,
  children,
  ...props
}: ThreeDGlassButtonProps) {
  const [loaded, setLoaded] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const handleLoad = () => setLoaded(true);
    const iframe = iframeRef.current;
    if (iframe) {
      if (iframe.contentDocument?.readyState === "complete") {
        setLoaded(true);
      }
      iframe.addEventListener("load", handleLoad);
      return () => iframe.removeEventListener("load", handleLoad);
    }
  }, []);

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

  const sceneSrc = "/3d-scenes/3d-glass-button.html";

  return (
    <div
      ref={containerRef}
      className={cn(
        "group relative w-full rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-[#a8b0bd] shadow-xl transition-all",
        isFullscreen && "fixed inset-0 z-50 rounded-none border-0",
        className
      )}
      style={{ height: isFullscreen ? "100vh" : height }}
      {...props}
    >
      {/* Loading Spinner */}
      {!loaded && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-[#a8b0bd] text-slate-800">
          <div className="relative size-12">
            <div className="absolute inset-0 rounded-full border-2 border-slate-900/20" />
            <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-slate-800" />
            <div className="absolute inset-2 flex items-center justify-center">
              <Sparkles className="size-4 text-slate-800 animate-pulse" />
            </div>
          </div>
          <span className="font-mono text-xs tracking-wider uppercase text-slate-800/80 font-semibold">
            Memuat 3D Glass AI Button...
          </span>
        </div>
      )}

      {/* Standalone Scene Iframe */}
      <iframe
        ref={iframeRef}
        src={sceneSrc}
        title="3D Glass AI Button"
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
          <div className="flex items-center gap-1 rounded-lg border border-slate-700/30 bg-slate-900/60 p-1 backdrop-blur-md shadow-lg text-white">
            <button
              onClick={reloadScene}
              className="rounded p-1.5 text-slate-200 hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
              title="Reset Tampilan"
              aria-label="Reset Tampilan"
            >
              <RotateCcw className="size-4" />
            </button>
            <button
              onClick={toggleFullscreen}
              className="rounded p-1.5 text-slate-200 hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
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
              className="rounded p-1.5 text-slate-200 hover:bg-white/10 hover:text-white transition-colors"
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

export const GlassAiButton = ThreeDGlassButton;
export default ThreeDGlassButton;
