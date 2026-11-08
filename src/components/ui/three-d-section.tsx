"use client";

import React, { useRef, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { Box, Compass, Sparkles, Move3d, Maximize2, Minimize2, ExternalLink, RotateCcw } from "lucide-react";

export interface ThreeDSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  /** Section style variant: "custom" (interactive tilt canvas) or "kibori" (Japanese woodcraft WebGL scene). Defaults to "custom". */
  variant?: "custom" | "kibori";
  /** Height when variant is "kibori". Defaults to "620px". */
  height?: string | number;
  /** Max tilt rotation angle in degrees. Defaults to 12. */
  intensity?: number;
  /** Perspective in pixels. Defaults to 1000. */
  perspective?: number;
  /** Whether to render a 3D isometric perspective grid background. Defaults to true. */
  grid?: boolean;
  /** Whether to enable dynamic cursor-following specular glare. Defaults to true. */
  glare?: boolean;
  /** Base elevation offset along Z axis. Defaults to 0. */
  depth?: number;
  /** Custom container class name. */
  containerClassName?: string;
  /** Optional title shown in the empty placeholder state. */
  placeholderTitle?: string;
  /** Optional description shown in the empty placeholder state. */
  placeholderDescription?: string;
}

export interface ThreeDLayerProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  /** Elevation depth along the Z axis in pixels (e.g. 20, 40, 60). Defaults to 30. */
  depth?: number;
  className?: string;
}

/**
 * ThreeDLayer — Elevates nested child content into 3D z-depth inside a ThreeDSection.
 */
export function ThreeDLayer({
  children,
  depth = 30,
  className,
  style,
  ...props
}: ThreeDLayerProps) {
  return (
    <div
      style={{
        transform: `translateZ(${depth}px)`,
        transformStyle: "preserve-3d",
        ...style,
      }}
      className={cn("transition-transform duration-200 ease-out", className)}
      {...props}
    >
      {children}
    </div>
  );
}

/**
 * ThreeDSection — Interactive 3D spatial viewport with real-time cursor tilt,
 * parallax depth layers, and specular lighting.
 * If children are omitted, renders a clean interactive 3D placeholder ready to be filled.
 */
export function ThreeDSection({
  children,
  variant = "custom",
  height = "620px",
  intensity = 12,
  perspective = 1000,
  grid = true,
  glare = true,
  depth = 0,
  className,
  containerClassName,
  placeholderTitle = "3D Section Canvas",
  placeholderDescription = "Container 3D interaktif siap pakai. Masukkan komponen, kartu, hero, atau elemen apa pun di dalamnya.",
  ...props
}: ThreeDSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [kiboriLoaded, setKiboriLoaded] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Mouse coordinate springs (-0.5 to +0.5 normalized)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 220, mass: 0.6 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // RotateX is inverted from Y mouse movement (moving up tilts card forward)
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [intensity, -intensity]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-intensity, intensity]);

  // Glare position
  const glareX = useTransform(smoothX, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(smoothY, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    },
    [mouseX, mouseY]
  );

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  // Variant: Kibori (Japanese Woodcraft WebGL Scene)
  if (variant === "kibori") {
    return (
      <div
        ref={containerRef}
        className={cn(
          "group relative w-full rounded-2xl overflow-hidden border border-zinc-200/80 dark:border-zinc-800 bg-[#000] shadow-xl",
          containerClassName
        )}
        style={{
          height: isFullscreen ? "100vh" : height,
        }}
        {...props}
      >
        {!kiboriLoaded && (
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#000] text-zinc-400 space-y-3">
            <div className="size-8 rounded-full border-2 border-amber-500/20 border-t-amber-500 animate-spin" />
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-amber-300/80">
              <Sparkles className="size-3.5 text-amber-500" />
              <span>Memuat KIBORI 3D Section...</span>
            </div>
          </div>
        )}

        <iframe
          ref={iframeRef}
          src="/3d-scenes/3d-section.html"
          title="KIBORI 3D Japanese Woodcrafts Section"
          onLoad={() => setKiboriLoaded(true)}
          className="size-full border-0 outline-none select-none"
          allow="accelerometer; gyroscope"
        />

        <div className="absolute top-4 right-4 z-30 flex items-center gap-1.5 p-1 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 opacity-80 group-hover:opacity-100 transition-opacity">
          <button
            onClick={() => {
              if (iframeRef.current) {
                setKiboriLoaded(false);
                iframeRef.current.src = iframeRef.current.src;
              }
            }}
            title="Reload Scene"
            aria-label="Reload Scene"
            className="p-1.5 rounded-lg text-zinc-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            <RotateCcw className="size-4" />
          </button>
          <button
            onClick={() => {
              if (!containerRef.current) return;
              if (!document.fullscreenElement) {
                containerRef.current.requestFullscreen().catch(() => {});
                setIsFullscreen(true);
              } else {
                document.exitFullscreen().catch(() => {});
                setIsFullscreen(false);
              }
            }}
            title="Toggle Fullscreen"
            aria-label="Toggle Fullscreen"
            className="p-1.5 rounded-lg text-zinc-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            {isFullscreen ? <Minimize2 className="size-4" /> : <Maximize2 className="size-4" />}
          </button>
          <a
            href="/3d-scenes/3d-section.html"
            target="_blank"
            rel="noopener noreferrer"
            title="Open standalone scene"
            aria-label="Open standalone scene in new tab"
            className="p-1.5 rounded-lg text-zinc-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            <ExternalLink className="size-4" />
          </a>
        </div>

        {children && (
          <div className="pointer-events-none absolute inset-0 z-10 flex flex-col justify-end p-6">
            <div className="pointer-events-auto">{children}</div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative w-full rounded-2xl overflow-hidden py-10 px-4 sm:px-8",
        "bg-gradient-to-b from-zinc-50/70 via-background to-zinc-100/60",
        "dark:from-zinc-950/70 dark:via-background dark:to-zinc-900/60",
        "border border-zinc-200/80 dark:border-zinc-800/80 shadow-xs",
        containerClassName
      )}
      style={{
        perspective: `${perspective}px`,
      }}
      {...props}
    >
      {/* 3D Grid Floor Accent */}
      {grid && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-40 dark:opacity-25"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: "28px 28px",
            color: "rgba(161, 161, 170, 0.4)",
            maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
          }}
        />
      )}

      {/* 3D Viewport Scene */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          transformOrigin: "center center",
          z: depth,
        }}
        className={cn(
          "relative w-full min-h-[320px] rounded-xl flex flex-col items-center justify-center transition-shadow duration-300",
          className
        )}
      >
        {/* Dynamic Specular Glare Highlight */}
        {glare && isHovered && (
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-xl mix-blend-overlay opacity-50 transition-opacity"
            style={{
              background: `radial-gradient(circle 350px at ${glareX} ${glareY}, rgba(255, 255, 255, 0.45), transparent 70%)`,
            }}
          />
        )}

        {/* Content Slot: Either user's custom children or empty placeholder */}
        {children ? (
          <div className="w-full relative z-10" style={{ transformStyle: "preserve-3d" }}>
            {children}
          </div>
        ) : (
          <ThreeDSectionEmptyState
            title={placeholderTitle}
            description={placeholderDescription}
            isHovered={isHovered}
          />
        )}
      </motion.div>
    </div>
  );
}

/**
 * ThreeDSectionEmptyState — Elegant default placeholder when no children are provided.
 */
function ThreeDSectionEmptyState({
  title,
  description,
  isHovered,
}: {
  title: string;
  description: string;
  isHovered: boolean;
}) {
  return (
    <div
      className="w-full max-w-lg mx-auto p-8 rounded-2xl border border-dashed border-zinc-300 dark:border-zinc-700 bg-background/80 backdrop-blur-xs shadow-md text-center space-y-4"
      style={{
        transform: "translateZ(36px)",
        transformStyle: "preserve-3d",
      }}
    >
      {/* 3D Coordinate Axis Badge */}
      <div className="flex items-center justify-center gap-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-primary/10 text-primary border border-primary/20 shadow-2xs">
          <Move3d className="size-3.5" />
          <span>3D Stage (Z: +36px)</span>
        </div>
        <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-[11px] font-mono text-muted-foreground bg-muted/60 border border-border/40">
          <span className="text-red-500 font-bold">X</span>
          <span className="text-green-500 font-bold">Y</span>
          <span className="text-blue-500 font-bold">Z</span>
        </div>
      </div>

      {/* Floating Center Icon */}
      <div
        className="mx-auto size-14 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-gradient-to-br from-zinc-100 to-zinc-200/80 dark:from-zinc-900 dark:to-zinc-800/80 flex items-center justify-center shadow-md transition-transform duration-300"
        style={{
          transform: isHovered ? "translateZ(24px) scale(1.08)" : "translateZ(12px)",
        }}
      >
        <Box className="size-7 text-primary stroke-[1.8]" />
      </div>

      {/* Titles */}
      <div className="space-y-1.5">
        <h3 className="text-lg sm:text-xl font-bold tracking-tight text-foreground">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed max-w-md mx-auto">
          {description}
        </p>
      </div>

      {/* Interactive Helper Hint */}
      <div className="pt-2 flex items-center justify-center gap-2 text-xs text-muted-foreground">
        <Compass className="size-3.5 animate-spin" style={{ animationDuration: "8s" }} />
        <span>Gerakkan kursor untuk mengorbit 3D tilt interaktif</span>
      </div>
    </div>
  );
}

export default ThreeDSection;
