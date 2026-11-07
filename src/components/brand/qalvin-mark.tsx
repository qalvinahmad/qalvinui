"use client";

import Link from "next/link";

/**
 * QalvinMark — the qalvinui logo: two component cards in an isometric stack
 * under a blue selection frame. Resting, the top card floats just above the
 * base; on hover it lifts higher, its slot waiting behind as a dashed outline.
 * The 3D is handled by `.qalvin-mark-*` classes in globals.css
 * (transform/opacity only, no perspective — orthographic like the hairline mark).
 */
export function QalvinMark() {
  const handles = [
    "-top-[2px] -left-[2px]",
    "-top-[2px] -right-[2px]",
    "-bottom-[2px] -left-[2px]",
    "-bottom-[2px] -right-[2px]",
  ];

  return (
    <Link
      href="/"
      aria-label="qalvinui home"
      className="qalvin-mark mr-2 flex shrink-0 items-center gap-2 transition-transform duration-150 ease-out active:scale-[0.96] motion-reduce:active:scale-100 md:mr-4"
    >
      <span className="relative block size-8 shrink-0" aria-hidden="true">
        {/* the isometric scene: rotate the ground plane, then lift along z */}
        <span className="qalvin-mark-scene absolute inset-0">
          {/* base card at the floor */}
          <span className="absolute inset-[4px] rounded-[5px] border bg-muted/60" />
          {/* the slot the top card rises from: dashed outline waits behind */}
          <span className="qalvin-mark-slot absolute inset-[4px] rounded-[5px] border border-dashed border-ring/70" />
          {/* the lifted top card with its four selection handles */}
          <span className="qalvin-mark-card absolute inset-[3px] rounded-[6px] border bg-background shadow-[0_1px_2px_rgba(0,0,0,0.12)]">
            {handles.map((pos) => (
              <span
                key={pos}
                className={`qalvin-mark-handle absolute size-[5px] rounded-[1.2px] bg-blue-500 ${pos}`}
              />
            ))}
          </span>
        </span>
      </span>
      <span className="hidden text-sm font-semibold tracking-tight sm:inline">
        qalvin<span className="text-muted-foreground">ui</span>
      </span>
    </Link>
  );
}
