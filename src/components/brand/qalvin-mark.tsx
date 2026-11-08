"use client";

import Link from "next/link";

/**
 * QalvinMark — Figma-style 2D selection frame that morphs into a 3D isometric
 * stacked-layer icon on hover.
 *
 * REST  : Clean 2D flat card with "UI" text, Figma-style bounding box lines,
 *         and 4 blue corner handles — identical look to Aceternity UI logo.
 * HOVER : True 3D isometric stack. The whole scene tilts via CSS perspective
 *         transforms, revealing 3 stacked card layers and 4 blue corner dots
 *         at their real 3D positions, joined by vertical connecting lines.
 */
export function QalvinMark() {
  return (
    <Link
      href="/"
      aria-label="Qalvin UI home"
      className="qalvin-mark group mr-2 flex shrink-0 items-center gap-2.5 transition-transform duration-150 ease-out active:scale-[0.96] motion-reduce:active:scale-100 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm md:mr-4"
    >
      {/* ── Outer frame: perspective context ──────────────────────────────── */}
      <span
        className="relative block size-[36px] shrink-0"
        style={{ perspective: "600px", perspectiveOrigin: "50% 50%" }}
        aria-hidden="true"
      >
        {/*
         * ── The 3D scene container ─────────────────────────────────────────
         * At rest    → no rotation (flat 2D appearance)
         * On hover   → rotateX(54deg) rotateZ(-45deg) for true isometric look
         */}
        <span className="qalvin-mark-scene block size-full" style={{ transformStyle: "preserve-3d" }}>

          {/*
           * ── Bounding-box guide lines ──────────────────────────────────────
           * Visible at rest as thin 2D Figma-style crosshair lines.
           */}
          <span className="qm-guide pointer-events-none absolute left-0 right-0 top-[4px] h-[1px]" />
          <span className="qm-guide pointer-events-none absolute left-0 right-0 bottom-[4px] h-[1px]" />
          <span className="qm-guide pointer-events-none absolute top-0 bottom-0 left-[4px] w-[1px]" />
          <span className="qm-guide pointer-events-none absolute top-0 bottom-0 right-[4px] w-[1px]" />

          {/*
           * ── Layer 1: Base (floor) card ────────────────────────────────────
           * Wireframe outline at Z=0, fades in on hover.
           */}
          <span
            className="qalvin-mark-base pointer-events-none absolute inset-[4px] rounded-[7px] border"
            style={{ transformStyle: "preserve-3d" }}
          />

          {/*
           * ── Layer 2: Middle card ──────────────────────────────────────────
           * Translucent card at Z=8px, fades in on hover.
           */}
          <span
            className="qalvin-mark-mid pointer-events-none absolute inset-[4px] rounded-[7px] border"
            style={{ transformStyle: "preserve-3d" }}
          />

          {/*
           * ── Layer 3: Top card with 4 Blue Corner Handles & Connecting Pillars ──
           * Always visible. At rest: flat 2D squircle inside the frame.
           * On hover: lifts up to Z=16px carrying the 4 blue corner dots with it,
           * with 4 pillars extending straight down from Z=16px to Z=0px!
           */}
          <span
            className="qalvin-mark-top absolute inset-[4px]"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* The squircle surface */}
            <span className="absolute inset-0 rounded-[7px] border border-zinc-200/90 dark:border-zinc-700/90 bg-[#f4f4f5] dark:bg-[#18181b] shadow-xs flex items-center justify-center select-none overflow-hidden">
              <span className="font-bold text-[11px] tracking-tight text-foreground">
                UI
              </span>
            </span>

            {/* 4 Blue corner handles — attached to the 4 corners of the top card */}
            <span className="pointer-events-none absolute size-[5.5px] rounded-[1px] border border-white bg-[#2563eb] shadow-2xs dark:border-zinc-950 dark:bg-[#3b82f6] left-0 top-0 -translate-x-1/2 -translate-y-1/2" />
            <span className="pointer-events-none absolute size-[5.5px] rounded-[1px] border border-white bg-[#2563eb] shadow-2xs dark:border-zinc-950 dark:bg-[#3b82f6] right-0 top-0 translate-x-1/2 -translate-y-1/2" />
            <span className="pointer-events-none absolute size-[5.5px] rounded-[1px] border border-white bg-[#2563eb] shadow-2xs dark:border-zinc-950 dark:bg-[#3b82f6] left-0 bottom-0 -translate-x-1/2 translate-y-1/2" />
            <span className="pointer-events-none absolute size-[5.5px] rounded-[1px] border border-white bg-[#2563eb] shadow-2xs dark:border-zinc-950 dark:bg-[#3b82f6] right-0 bottom-0 translate-x-1/2 translate-y-1/2" />

            {/* 4 Vertical connecting pillars — extend from Z=16px down to Z=0px */}
            <span
              className="qm-pillar pointer-events-none absolute w-[1px] h-[16px] left-0 top-0"
              style={{
                transformOrigin: "0 0",
                transform: "rotateX(-90deg)",
                transformStyle: "preserve-3d",
              }}
            />
            <span
              className="qm-pillar pointer-events-none absolute w-[1px] h-[16px] right-0 top-0"
              style={{
                transformOrigin: "0 0",
                transform: "rotateX(-90deg)",
                transformStyle: "preserve-3d",
              }}
            />
            <span
              className="qm-pillar pointer-events-none absolute w-[1px] h-[16px] left-0 bottom-0"
              style={{
                transformOrigin: "0 0",
                transform: "rotateX(-90deg)",
                transformStyle: "preserve-3d",
              }}
            />
            <span
              className="qm-pillar pointer-events-none absolute w-[1px] h-[16px] right-0 bottom-0"
              style={{
                transformOrigin: "0 0",
                transform: "rotateX(-90deg)",
                transformStyle: "preserve-3d",
              }}
            />
          </span>

        </span>{/* /qalvin-mark-scene */}
      </span>

      {/* ── Brand label ──────────────────────────────────────────────────── */}
      <span className="hidden text-[17px] font-bold tracking-tight leading-none text-foreground sm:inline-flex items-baseline">
        <span>qalvin</span>
        <span className="ml-1 text-zinc-500 dark:text-zinc-400">ui</span>
      </span>
    </Link>
  );
}
