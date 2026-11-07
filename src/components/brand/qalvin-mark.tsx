"use client";

import Link from "next/link";
import Image from "next/image";

/**
 * QalvinMark — Figma-style 2D selection frame with 3D isometric stacked card.
 * Matches Image 1:
 * - 4 blue corner handles with extended crosshairs.
 * - Base wireframe outline card on the floor.
 * - Top card elevated in 3D along Z-axis with shadow and /icon.png.
 * - Brand label with bold black "qalvin" and bold gray "ui".
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
          {/* Base Card (Wireframe outline at the floor, transparent interior) */}
          <span className="qalvin-mark-base absolute inset-0 block rounded-[6px] border border-zinc-300/90 bg-transparent dark:border-zinc-600" />

          {/* Top Card (floats up on hover along Z-axis, housing /icon.png) */}
          <span className="qalvin-mark-top absolute inset-0 block overflow-hidden rounded-[6px] border border-zinc-200/90 bg-white shadow-xs dark:border-zinc-700/90 dark:bg-zinc-900">
            <Image
              src="/icon.png"
              alt=""
              width={28}
              height={28}
              priority
              className="size-full object-cover rounded-[5px] dark:invert"
            />
          </span>
        </span>
      </span>

      {/* Brand Label (Matches Image 1: bold black "qalvin" + bold gray "ui") */}
      <span className="hidden text-[17px] font-bold tracking-tight leading-none text-foreground sm:inline-flex items-baseline">
        <span>qalvin</span>
        <span className="ml-1 text-zinc-500 dark:text-zinc-400">ui</span>
      </span>
    </Link>
  );
}
