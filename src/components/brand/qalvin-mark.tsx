"use client";

import Link from "next/link";
import Image from "next/image";

/**
 * QalvinMark — Figma/Aceternity UI selection frame:
 * 4 blue corner handles with extended crosshair guidelines.
 * Rest: 2D flat squircle card with /icon.png.
 * Hover: transforms into 3D isometric stack with base card and elevated top card.
 */
export function QalvinMark() {
  return (
    <Link
      href="/"
      aria-label="Qalvin UI home"
      className="qalvin-mark group mr-2 flex shrink-0 items-center gap-2.5 transition-transform duration-150 ease-out active:scale-[0.96] motion-reduce:active:scale-100 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm md:mr-4"
    >
      {/* Outer bounding frame: 36x36px with 4px margin around 28x28px card */}
      <span className="relative block size-[36px] shrink-0" aria-hidden="true">
        {/* Extended Crosshair Guidelines (Screen-space 2D) */}
        {/* Horizontal top line extending 4px past each side */}
        <span className="pointer-events-none absolute left-0 right-0 top-[4px] h-[1px] bg-zinc-300/80 dark:bg-zinc-700/80" />
        {/* Horizontal bottom line extending 4px past each side */}
        <span className="pointer-events-none absolute left-0 right-0 bottom-[4px] h-[1px] bg-zinc-300/80 dark:bg-zinc-700/80" />
        {/* Vertical left line extending 4px above and below */}
        <span className="pointer-events-none absolute top-0 bottom-0 left-[4px] w-[1px] bg-zinc-300/80 dark:bg-zinc-700/80" />
        {/* Vertical right line extending 4px above and below */}
        <span className="pointer-events-none absolute top-0 bottom-0 right-[4px] w-[1px] bg-zinc-300/80 dark:bg-zinc-700/80" />

        {/* 4 Corner Selection Handles (Blue squares, screen-space 2D) */}
        <span className="pointer-events-none absolute left-[4px] top-[4px] size-[5.5px] -translate-x-1/2 -translate-y-1/2 rounded-[0.5px] border border-white bg-[#2563eb] shadow-2xs dark:border-zinc-950 dark:bg-[#3b82f6]" />
        <span className="pointer-events-none absolute right-[4px] top-[4px] size-[5.5px] -translate-y-1/2 translate-x-1/2 rounded-[0.5px] border border-white bg-[#2563eb] shadow-2xs dark:border-zinc-950 dark:bg-[#3b82f6]" />
        <span className="pointer-events-none absolute bottom-[4px] left-[4px] size-[5.5px] -translate-x-1/2 translate-y-1/2 rounded-[0.5px] border border-white bg-[#2563eb] shadow-2xs dark:border-zinc-950 dark:bg-[#3b82f6]" />
        <span className="pointer-events-none absolute bottom-[4px] right-[4px] size-[5.5px] translate-x-1/2 translate-y-1/2 rounded-[0.5px] border border-white bg-[#2563eb] shadow-2xs dark:border-zinc-950 dark:bg-[#3b82f6]" />

        {/* 3D Scene Container (inside the 28x28px selection area) */}
        <span
          className="qalvin-mark-scene absolute inset-[4px] block size-[28px]"
          style={{ perspective: 400 }}
        >
          {/* Base Card (underneath, emerges on hover) */}
          <span className="qalvin-mark-base absolute inset-0 block rounded-[7px] border border-zinc-200/90 bg-white/95 shadow-xs dark:border-zinc-700/80 dark:bg-zinc-800" />

          {/* Top Card (floats up on hover along Z-axis, housing /icon.png) */}
          <span className="qalvin-mark-top absolute inset-0 block overflow-hidden rounded-[7px] border border-zinc-200/90 bg-[#f3f3f3] shadow-xs dark:border-zinc-700/90 dark:bg-zinc-900">
            <Image
              src="/icon.png"
              alt=""
              width={28}
              height={28}
              priority
              className="size-full object-cover rounded-[6px] dark:invert"
            />
          </span>
        </span>
      </span>

      {/* Brand Label */}
      <span className="hidden text-base font-bold tracking-tight text-foreground sm:inline">
        qalvin<span className="font-semibold text-muted-foreground"> ui</span>
      </span>
    </Link>
  );
}
