import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ComponentCardProps {
  name: string;
  description: string;
  href: string;
  tag?: string;
  preview?: React.ReactNode;
  className?: string;
}

export function ComponentCard({
  name,
  description,
  href,
  tag,
  preview,
  className,
}: ComponentCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative flex flex-col rounded-2xl border border-zinc-200/80 bg-card p-1.5",
        "transition-all duration-200",
        "hover:border-zinc-300 dark:border-zinc-800/90 dark:hover:border-zinc-700",
        "hover:shadow-[0_6px_20px_-8px_rgba(0,0,0,0.12)]",
        className
      )}
    >
      {/* Header */}
      <div className="flex flex-col gap-1.5 px-3.5 pb-4 pt-3">
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="text-lg font-semibold tracking-tight text-foreground">
            {name}
          </h3>
          {tag && (
            <span className="shrink-0 rounded-full border border-border/50 bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
              {tag}
            </span>
          )}
        </div>
        <p className="line-clamp-2 min-h-[45px] text-sm leading-normal text-zinc-600 dark:text-zinc-400 sm:text-[15px]">
          {description}
        </p>
      </div>

      {/* Preview Canvas */}
      <div className="relative flex flex-1 items-center justify-center overflow-hidden rounded-xl border border-zinc-100 bg-zinc-50 p-5 transition-colors group-hover:bg-zinc-100/60 dark:border-zinc-800/60 dark:bg-zinc-900/40 dark:group-hover:bg-zinc-900/60 sm:min-h-[220px] xl:min-h-[240px] min-h-[200px]">
        {preview ? preview : <ComponentMiniPreview name={name} />}
      </div>
    </Link>
  );
}

export function ComponentMiniPreview({ name }: { name: string }) {
  const normalized = name.toLowerCase().replace(/[^a-z0-9]/g, "");

  switch (normalized) {
    case "accordion":
      return (
        <div className="w-full max-w-[180px] rounded-lg border border-zinc-200/90 dark:border-zinc-800 bg-background shadow-xs divide-y divide-zinc-100 dark:divide-zinc-800">
          <div className="flex items-center justify-between px-3 py-2 text-[10px] text-muted-foreground">
            <span className="h-2 w-16 rounded-full bg-zinc-300 dark:bg-zinc-700" />
            <span className="text-xs leading-none text-zinc-400">⌄</span>
          </div>
          <div className="px-3 py-2 space-y-1.5 bg-muted/20">
            <div className="flex items-center justify-between text-[10px] text-foreground font-medium">
              <span className="h-2 w-20 rounded-full bg-primary/60" />
              <span className="text-xs leading-none text-primary">⌃</span>
            </div>
            <span className="block h-1.5 w-24 rounded-full bg-zinc-200 dark:bg-zinc-800" />
          </div>
          <div className="flex items-center justify-between px-3 py-2 text-[10px] text-muted-foreground">
            <span className="h-2 w-14 rounded-full bg-zinc-300 dark:bg-zinc-700" />
            <span className="text-xs leading-none text-zinc-400">⌄</span>
          </div>
        </div>
      );

    case "alert":
      return (
        <div className="w-full max-w-[200px] flex items-center gap-2.5 rounded-full border border-zinc-200/90 dark:border-zinc-800 bg-background px-3 py-2 shadow-xs">
          <div className="size-4 rounded-full bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center text-[10px] font-bold">
            !
          </div>
          <div className="h-2 w-28 rounded-full bg-zinc-300 dark:bg-zinc-700" />
        </div>
      );

    case "alertdialog":
      return (
        <div className="w-full max-w-[190px] rounded-xl border border-zinc-200/90 dark:border-zinc-800 bg-background p-3 shadow-md space-y-2.5">
          <div className="space-y-1">
            <div className="h-2 w-16 rounded-full bg-zinc-400 dark:bg-zinc-600" />
            <div className="h-1.5 w-28 rounded-full bg-zinc-200 dark:bg-zinc-800" />
          </div>
          <div className="flex justify-end gap-1.5 pt-1">
            <div className="h-5 w-10 rounded-md bg-muted" />
            <div className="h-5 w-12 rounded-md bg-zinc-900 dark:bg-zinc-100" />
          </div>
        </div>
      );

    case "autocomplete":
      return (
        <div className="w-full max-w-[190px] space-y-1.5">
          <div className="flex items-center justify-between rounded-lg border border-zinc-300 dark:border-zinc-700 bg-background px-2.5 py-1.5 shadow-xs">
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-14 rounded-full bg-zinc-400 dark:bg-zinc-600" />
              <span className="inline-block w-0.5 h-3 bg-primary animate-pulse" />
            </div>
            <span className="text-[10px] text-muted-foreground">✕</span>
          </div>
          <div className="rounded-lg border border-zinc-200/80 dark:border-zinc-800 bg-background p-1 shadow-md space-y-1">
            <div className="flex items-center px-2 py-1 rounded bg-accent/60">
              <span className="h-1.5 w-16 rounded-full bg-primary" />
            </div>
            <div className="flex items-center px-2 py-1">
              <span className="h-1.5 w-20 rounded-full bg-zinc-200 dark:bg-zinc-800" />
            </div>
            <div className="flex items-center px-2 py-1">
              <span className="h-1.5 w-12 rounded-full bg-zinc-200 dark:bg-zinc-800" />
            </div>
          </div>
        </div>
      );

    case "avatar":
      return (
        <div className="flex items-center justify-center gap-2">
          <div className="size-11 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-400 shadow-xs">
            <svg className="size-6 text-zinc-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </div>
        </div>
      );

    case "avatarpicker":
      return (
        <div className="flex flex-col items-center gap-2.5">
          <div className="size-12 rounded-full border-2 border-primary/50 bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center shadow-xs">
            <svg className="size-6 text-zinc-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </div>
          <div className="flex gap-1.5">
            {[0, 1, 2, 3].map((i) => (
              <span
                key={i}
                className={cn(
                  "size-4 rounded-full",
                  i === 0 ? "bg-primary/40" : "bg-zinc-200 dark:bg-zinc-800"
                )}
              />
            ))}
          </div>
        </div>
      );

    case "badge":
      return (
        <div className="flex items-center gap-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-zinc-300 dark:border-zinc-700 bg-background shadow-xs">
            <span className="size-1.5 rounded-full bg-emerald-500" />
            <span className="h-2 w-12 rounded-full bg-zinc-400 dark:bg-zinc-600" />
          </div>
        </div>
      );

    case "breadcrumb":
      return (
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-8 rounded-full bg-zinc-300 dark:bg-zinc-700" />
          <span className="text-[10px] text-zinc-400">›</span>
          <span className="h-2 w-10 rounded-full bg-zinc-300 dark:bg-zinc-700" />
          <span className="text-[10px] text-zinc-400">›</span>
          <span className="h-2 w-12 rounded-full bg-zinc-800 dark:bg-zinc-200" />
        </div>
      );

    case "button":
      return (
        <div className="px-5 py-2.5 rounded-xl bg-zinc-900 dark:bg-zinc-100 shadow-sm flex items-center justify-center">
          <div className="h-2.5 w-14 rounded-full bg-zinc-100 dark:bg-zinc-900" />
        </div>
      );

    case "calendar":
      return (
        <div className="rounded-xl border border-zinc-200/90 dark:border-zinc-800 bg-background p-2.5 shadow-xs space-y-2">
          <div className="flex justify-between items-center px-1">
            <span className="h-2 w-12 rounded-full bg-zinc-400 dark:bg-zinc-600" />
            <div className="flex gap-1 text-[8px] text-zinc-400"><span>‹</span><span>›</span></div>
          </div>
          <div className="grid grid-cols-7 gap-1">
            {Array.from({ length: 14 }).map((_, i) => (
              <span
                key={i}
                className={cn(
                  "size-3 rounded-full flex items-center justify-center text-[7px]",
                  i === 6
                    ? "bg-primary text-primary-foreground font-bold"
                    : "bg-muted/50 text-muted-foreground"
                )}
              />
            ))}
          </div>
        </div>
      );

    case "card":
      return (
        <div className="w-full max-w-[170px] rounded-xl border border-zinc-200/90 dark:border-zinc-800 bg-background p-3 shadow-xs space-y-2">
          <div className="h-2.5 w-16 rounded-full bg-zinc-400 dark:bg-zinc-600" />
          <div className="space-y-1">
            <div className="h-1.5 w-full rounded-full bg-zinc-200 dark:bg-zinc-800" />
            <div className="h-1.5 w-20 rounded-full bg-zinc-200 dark:bg-zinc-800" />
          </div>
        </div>
      );

    case "checkbox":
      return (
        <div className="flex items-center gap-2">
          <div className="size-4 rounded border border-primary bg-primary text-primary-foreground flex items-center justify-center text-[10px]">
            ✓
          </div>
          <span className="h-2 w-16 rounded-full bg-zinc-400 dark:bg-zinc-600" />
        </div>
      );

    case "checkboxgroup":
      return (
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="size-3.5 rounded border border-primary bg-primary text-primary-foreground flex items-center justify-center text-[9px]">
              ✓
            </div>
            <span className="h-1.5 w-16 rounded-full bg-zinc-400 dark:bg-zinc-600" />
          </div>
          <div className="flex items-center gap-2">
            <div className="size-3.5 rounded border border-zinc-300 dark:border-zinc-700 bg-background" />
            <span className="h-1.5 w-12 rounded-full bg-zinc-300 dark:bg-zinc-700" />
          </div>
        </div>
      );

    case "composer":
      return (
        <div className="w-full max-w-[180px] rounded-xl border border-zinc-300 dark:border-zinc-700 bg-background p-2 shadow-xs space-y-2">
          <span className="h-1.5 w-20 rounded-full bg-zinc-300 dark:bg-zinc-700 block" />
          <div className="flex items-center justify-between pt-1 border-t border-border/50">
            <div className="flex gap-1">
              <span className="size-3 rounded bg-muted" />
              <span className="size-3 rounded bg-muted" />
            </div>
            <span className="size-4 rounded bg-primary" />
          </div>
        </div>
      );

    case "fieldset":
      return (
        <div className="w-full max-w-[170px] rounded-xl border border-dashed border-zinc-300 dark:border-zinc-700 p-2.5 relative">
          <span className="absolute -top-2 left-3 bg-background px-1 text-[8px] font-semibold text-foreground">
            LEGEND
          </span>
          <div className="space-y-1.5 mt-1">
            <div className="h-1.5 w-full rounded-full bg-zinc-200 dark:bg-zinc-800" />
            <div className="h-1.5 w-2/3 rounded-full bg-zinc-200 dark:bg-zinc-800" />
          </div>
        </div>
      );

    case "form":
      return (
        <div className="w-full max-w-[170px] space-y-2">
          <div className="h-4 rounded border border-zinc-300 dark:border-zinc-700 bg-background px-2 flex items-center">
            <span className="h-1.5 w-10 rounded-full bg-zinc-300 dark:bg-zinc-700" />
          </div>
          <div className="h-4 w-12 rounded bg-primary" />
        </div>
      );

    case "frame":
      return (
        <div className="w-full max-w-[170px] rounded-xl bg-muted/70 p-1 border border-border">
          <div className="rounded-lg bg-background p-2 shadow-xs space-y-1">
            <span className="h-1.5 w-14 rounded-full bg-foreground block" />
            <span className="h-1 w-20 rounded-full bg-muted-foreground block" />
          </div>
        </div>
      );

    case "group":
    case "buttongroup":
      return (
        <div className="inline-flex rounded-lg border border-zinc-300 dark:border-zinc-700 divide-x divide-zinc-200 dark:divide-zinc-800 overflow-hidden shadow-xs">
          <div className="px-2.5 py-1 bg-background text-[10px] font-medium text-foreground">
            Files
          </div>
          <div className="px-2.5 py-1 bg-background text-[10px] text-muted-foreground">
            Media
          </div>
          <div className="px-2 py-1 bg-background text-[10px] text-muted-foreground">
            •••
          </div>
        </div>
      );

    case "menu":
      return (
        <div className="w-full max-w-[160px] rounded-xl border border-zinc-200/90 dark:border-zinc-800 bg-background p-1.5 shadow-lg space-y-1">
          <div className="h-4 px-2 rounded bg-accent/60 flex items-center justify-between">
            <span className="h-1.5 w-12 rounded-full bg-primary" />
            <span className="text-[7px] text-muted-foreground">⌘K</span>
          </div>
          <div className="h-4 px-2 rounded flex items-center">
            <span className="h-1.5 w-16 rounded-full bg-zinc-300 dark:bg-zinc-700" />
          </div>
        </div>
      );

    case "meter":
      return (
        <div className="w-full max-w-[180px] space-y-2">
          <div className="flex items-center justify-between text-[9px] text-muted-foreground font-medium">
            <span>Storage</span>
            <span className="text-foreground">75%</span>
          </div>
          <div className="h-2 w-full rounded-full bg-zinc-200 dark:bg-zinc-800 overflow-hidden">
            <div className="h-full w-3/4 rounded-full bg-primary" />
          </div>
        </div>
      );

    case "numberfield":
      return (
        <div className="inline-flex items-center rounded-lg border border-zinc-300 dark:border-zinc-700 bg-background shadow-xs overflow-hidden">
          <span className="px-2 py-1 text-xs text-muted-foreground hover:bg-muted cursor-pointer">-</span>
          <span className="px-3 py-1 text-xs font-mono font-semibold text-foreground">42</span>
          <span className="px-2 py-1 text-xs text-muted-foreground hover:bg-muted cursor-pointer">+</span>
        </div>
      );

    case "otpfield":
      return (
        <div className="flex items-center gap-1.5">
          {["1", "8", "4", "9"].map((d, i) => (
            <div
              key={i}
              className="size-7 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-background flex items-center justify-center font-mono text-xs font-semibold shadow-2xs"
            >
              {d}
            </div>
          ))}
        </div>
      );

    case "previewcard":
      return (
        <div className="relative flex flex-col items-center">
          <div className="rounded-xl border border-zinc-200/90 dark:border-zinc-800 bg-background p-2.5 shadow-md space-y-1.5 w-32">
            <div className="size-4 rounded-full bg-primary/20" />
            <div className="h-1.5 w-20 rounded-full bg-zinc-400 dark:bg-zinc-600" />
          </div>
          <div className="w-2 h-2 bg-background border-r border-b border-zinc-200/90 dark:border-zinc-800 rotate-45 -mt-1" />
        </div>
      );

    case "segmentedcontrol":
      return (
        <div className="inline-flex rounded-xl border border-zinc-200/90 dark:border-zinc-800 bg-muted/60 p-1 gap-1">
          <div className="px-3 py-1 rounded-lg bg-background text-[10px] font-semibold text-foreground shadow-xs">
            Monthly
          </div>
          <div className="px-3 py-1 text-[10px] text-muted-foreground">
            Yearly
          </div>
        </div>
      );

    case "spinner":
      return (
        <div className="size-6 rounded-full border-2 border-primary border-t-transparent animate-spin" />
      );

    case "collapsible":
      return (
        <div className="w-full max-w-[170px] rounded-lg border border-zinc-200/90 dark:border-zinc-800 bg-background p-2.5 shadow-xs space-y-2">
          <div className="flex items-center justify-between">
            <span className="h-2 w-16 rounded-full bg-zinc-400 dark:bg-zinc-600" />
            <span className="text-[10px] text-zinc-400">↕</span>
          </div>
          <div className="h-6 rounded bg-muted/40 p-1.5">
            <div className="h-1.5 w-24 rounded-full bg-zinc-300 dark:bg-zinc-700" />
          </div>
        </div>
      );

    case "dialog":
      return (
        <div className="w-full max-w-[180px] rounded-xl border border-zinc-200/90 dark:border-zinc-800 bg-background p-3 shadow-lg space-y-2">
          <div className="h-2 w-20 rounded-full bg-zinc-800 dark:bg-zinc-200" />
          <div className="h-1.5 w-full rounded-full bg-zinc-200 dark:bg-zinc-800" />
          <div className="flex justify-end gap-1.5 pt-1">
            <div className="h-4 w-10 rounded bg-primary" />
          </div>
        </div>
      );

    case "drawer":
      return (
        <div className="w-full max-w-[180px] h-20 rounded-t-xl border-t border-x border-zinc-200/90 dark:border-zinc-800 bg-background p-2.5 shadow-md flex flex-col justify-between self-end">
          <div className="h-1 w-8 rounded-full bg-zinc-300 dark:bg-zinc-700 mx-auto" />
          <div className="space-y-1">
            <div className="h-2 w-16 rounded-full bg-zinc-400 dark:bg-zinc-600" />
            <div className="h-1.5 w-28 rounded-full bg-zinc-200 dark:bg-zinc-800" />
          </div>
        </div>
      );

    case "dropdownmenu":
      return (
        <div className="w-full max-w-[160px] rounded-lg border border-zinc-200/90 dark:border-zinc-800 bg-background p-1 shadow-lg space-y-0.5">
          <div className="h-5 px-2 rounded bg-accent/60 flex items-center justify-between">
            <span className="h-1.5 w-12 rounded-full bg-primary" />
            <span className="text-[8px] text-muted-foreground">⌘E</span>
          </div>
          <div className="h-5 px-2 rounded flex items-center">
            <span className="h-1.5 w-16 rounded-full bg-zinc-300 dark:bg-zinc-700" />
          </div>
          <div className="h-px bg-border my-0.5" />
          <div className="h-5 px-2 rounded flex items-center">
            <span className="h-1.5 w-10 rounded-full bg-rose-400" />
          </div>
        </div>
      );

    case "input":
      return (
        <div className="w-full max-w-[180px] rounded-lg border border-zinc-300 dark:border-zinc-700 bg-background px-3 py-2 shadow-xs flex items-center justify-between">
          <div className="flex items-center gap-1">
            <span className="h-2 w-16 rounded-full bg-zinc-400 dark:bg-zinc-600" />
            <span className="inline-block w-0.5 h-3 bg-primary animate-pulse" />
          </div>
        </div>
      );

    case "label":
      return (
        <div className="w-full max-w-[170px] space-y-1.5">
          <span className="h-2 w-12 rounded-full bg-zinc-800 dark:bg-zinc-200 block" />
          <div className="rounded-lg border border-zinc-300 dark:border-zinc-700 bg-background h-7" />
        </div>
      );

    case "popover":
      return (
        <div className="relative flex flex-col items-center">
          <div className="rounded-xl border border-zinc-200/90 dark:border-zinc-800 bg-background p-2.5 shadow-md space-y-1.5 w-36">
            <div className="h-2 w-14 rounded-full bg-zinc-500 dark:bg-zinc-500" />
            <div className="h-1.5 w-24 rounded-full bg-zinc-200 dark:bg-zinc-800" />
          </div>
          <div className="w-2.5 h-2.5 bg-background border-r border-b border-zinc-200/90 dark:border-zinc-800 rotate-45 -mt-1.5" />
        </div>
      );

    case "progress":
      return (
        <div className="w-full max-w-[180px] space-y-1.5">
          <div className="h-2.5 w-full rounded-full bg-zinc-200 dark:bg-zinc-800 overflow-hidden">
            <div className="h-full w-3/5 rounded-full bg-primary" />
          </div>
        </div>
      );

    case "select":
      return (
        <div className="w-full max-w-[180px] rounded-lg border border-zinc-300 dark:border-zinc-700 bg-background px-3 py-2 shadow-xs flex items-center justify-between">
          <span className="h-2 w-20 rounded-full bg-zinc-400 dark:bg-zinc-600" />
          <span className="text-[10px] text-zinc-400">⌄</span>
        </div>
      );

    case "separator":
      return (
        <div className="w-full max-w-[180px] space-y-2.5">
          <div className="h-2 w-24 rounded-full bg-zinc-300 dark:bg-zinc-700" />
          <div className="h-px w-full bg-zinc-300 dark:bg-zinc-700" />
          <div className="h-2 w-16 rounded-full bg-zinc-300 dark:bg-zinc-700" />
        </div>
      );

    case "sheet":
      return (
        <div className="w-full max-w-[180px] h-20 rounded-l-xl border-y border-l border-zinc-200/90 dark:border-zinc-800 bg-background p-2.5 shadow-md flex flex-col justify-between self-end ml-auto">
          <div className="h-2 w-14 rounded-full bg-zinc-400 dark:bg-zinc-600" />
          <div className="h-1.5 w-24 rounded-full bg-zinc-200 dark:bg-zinc-800" />
        </div>
      );

    case "skeleton":
      return (
        <div className="w-full max-w-[180px] space-y-2 animate-pulse">
          <div className="h-3 w-3/4 rounded-md bg-zinc-200 dark:bg-zinc-800" />
          <div className="h-2.5 w-full rounded-md bg-zinc-200 dark:bg-zinc-800" />
          <div className="h-2.5 w-1/2 rounded-md bg-zinc-200 dark:bg-zinc-800" />
        </div>
      );

    case "slider":
      return (
        <div className="w-full max-w-[180px] relative flex items-center">
          <div className="h-1.5 w-full rounded-full bg-zinc-200 dark:bg-zinc-800 overflow-hidden">
            <div className="h-full w-1/2 bg-primary" />
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 size-4 rounded-full border-2 border-primary bg-background shadow-xs" />
        </div>
      );

    case "switch":
      return (
        <div className="flex items-center gap-2">
          <div className="h-6 w-11 rounded-full bg-primary p-0.5 flex items-center justify-end">
            <div className="size-5 rounded-full bg-background shadow-xs" />
          </div>
        </div>
      );

    case "table":
      return (
        <div className="w-full max-w-[180px] rounded-lg border border-zinc-200/90 dark:border-zinc-800 bg-background shadow-xs overflow-hidden divide-y divide-zinc-100 dark:divide-zinc-800">
          <div className="flex justify-between px-2.5 py-1.5 bg-muted/40">
            <span className="h-1.5 w-8 rounded-full bg-zinc-400 dark:bg-zinc-600" />
            <span className="h-1.5 w-8 rounded-full bg-zinc-400 dark:bg-zinc-600" />
          </div>
          <div className="flex justify-between px-2.5 py-1.5">
            <span className="h-1.5 w-10 rounded-full bg-zinc-300 dark:bg-zinc-700" />
            <span className="h-1.5 w-6 rounded-full bg-zinc-300 dark:bg-zinc-700" />
          </div>
          <div className="flex justify-between px-2.5 py-1.5">
            <span className="h-1.5 w-12 rounded-full bg-zinc-300 dark:bg-zinc-700" />
            <span className="h-1.5 w-8 rounded-full bg-zinc-300 dark:bg-zinc-700" />
          </div>
        </div>
      );

    case "tabs":
      return (
        <div className="inline-flex rounded-lg border border-zinc-200/90 dark:border-zinc-800 bg-muted/40 p-1 gap-1">
          <div className="px-3 py-1 rounded-md bg-background shadow-xs">
            <span className="h-1.5 w-8 rounded-full bg-foreground block" />
          </div>
          <div className="px-3 py-1">
            <span className="h-1.5 w-8 rounded-full bg-muted-foreground/60 block" />
          </div>
        </div>
      );

    case "textarea":
      return (
        <div className="w-full max-w-[180px] rounded-lg border border-zinc-300 dark:border-zinc-700 bg-background p-2.5 shadow-xs space-y-1.5">
          <span className="h-1.5 w-24 rounded-full bg-zinc-400 dark:bg-zinc-600 block" />
          <span className="h-1.5 w-16 rounded-full bg-zinc-300 dark:bg-zinc-700 block" />
          <span className="h-1.5 w-20 rounded-full bg-zinc-200 dark:bg-zinc-800 block" />
        </div>
      );

    case "toast":
      return (
        <div className="w-full max-w-[180px] rounded-xl border border-zinc-200/90 dark:border-zinc-800 bg-background p-2.5 shadow-lg flex items-center gap-2">
          <span className="size-4 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-[10px]">
            ✓
          </span>
          <div className="space-y-1">
            <div className="h-2 w-16 rounded-full bg-zinc-700 dark:bg-zinc-300" />
            <div className="h-1.5 w-20 rounded-full bg-zinc-300 dark:bg-zinc-700" />
          </div>
        </div>
      );

    case "toggle":
      return (
        <div className="size-9 rounded-lg border border-primary bg-primary/10 text-primary flex items-center justify-center text-xs font-bold shadow-xs">
          B
        </div>
      );

    case "togglegroup":
      return (
        <div className="inline-flex rounded-lg border border-zinc-300 dark:border-zinc-700 divide-x divide-zinc-200 dark:divide-zinc-800 overflow-hidden shadow-xs">
          <div className="size-7 bg-primary text-primary-foreground flex items-center justify-center text-[10px] font-bold">
            B
          </div>
          <div className="size-7 bg-background flex items-center justify-center text-[10px] text-muted-foreground italic">
            I
          </div>
          <div className="size-7 bg-background flex items-center justify-center text-[10px] text-muted-foreground underline">
            U
          </div>
        </div>
      );

    case "tooltip":
      return (
        <div className="flex flex-col items-center">
          <div className="px-2.5 py-1 rounded-md bg-zinc-900 text-zinc-100 dark:bg-zinc-100 dark:text-zinc-900 shadow-md">
            <span className="h-1.5 w-12 rounded-full bg-zinc-200 dark:bg-zinc-800 block" />
          </div>
          <div className="w-2 h-2 bg-zinc-900 dark:bg-zinc-100 rotate-45 -mt-1" />
          <div className="mt-2 h-2 w-14 rounded-full bg-zinc-300 dark:bg-zinc-700" />
        </div>
      );

    /* ─── Specialized UI Collection ─── */

    case "stickyslides":
      return (
        <div className="relative w-full max-w-[160px] h-24 overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 bg-background flex flex-col justify-end">
          <div className="absolute inset-x-2 top-2 h-16 rounded-lg bg-gradient-to-r from-emerald-500/30 to-blue-500/30 border border-emerald-400/40 p-2 shadow-xs" />
          <div className="absolute inset-x-2 top-6 h-16 rounded-lg bg-gradient-to-r from-indigo-500/40 to-purple-500/40 border border-indigo-400/50 p-2 shadow-sm" />
          <div className="relative mx-2 mb-2 h-16 rounded-lg bg-gradient-to-r from-purple-500/50 to-pink-500/50 border border-purple-400/60 p-2 text-white shadow-md flex flex-col justify-between">
            <span className="h-1.5 w-12 rounded-full bg-white/80" />
            <span className="h-1 w-16 rounded-full bg-white/50" />
          </div>
        </div>
      );

    case "thinkingorb":
      return (
        <div className="relative flex items-center justify-center">
          <div className="size-16 rounded-full bg-gradient-to-tr from-cyan-500/30 via-indigo-500/20 to-purple-500/40 blur-md animate-pulse absolute" />
          <div className="relative size-12 rounded-full border border-cyan-400/60 bg-gradient-to-tr from-cyan-500/40 to-indigo-500/40 shadow-inner flex items-center justify-center">
            <div className="size-5 rounded-full bg-cyan-300 blur-[1px] animate-ping" />
          </div>
        </div>
      );

    case "metalfx":
      return (
        <div className="w-full max-w-[160px] h-20 rounded-xl bg-gradient-to-tr from-zinc-700 via-zinc-200 to-zinc-900 border border-zinc-400/50 shadow-md flex items-center justify-center overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 animate-pulse" />
          <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-900 bg-white/70 px-2 py-0.5 rounded backdrop-blur-xs">
            CHROME
          </span>
        </div>
      );

    case "imgfx":
      return (
        <div className="w-full max-w-[160px] h-20 rounded-xl border border-purple-400/40 bg-zinc-900 p-2 grid grid-cols-4 gap-1 overflow-hidden shadow-xs">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className={cn(
                "rounded-sm",
                i % 2 === 0
                  ? "bg-gradient-to-br from-purple-500 to-pink-500"
                  : "bg-zinc-800"
              )}
            />
          ))}
        </div>
      );

    case "borderbeam":
      return (
        <div className="relative w-full max-w-[160px] h-20 rounded-xl bg-background border border-primary/20 p-3 flex items-center justify-center shadow-xs overflow-hidden">
          <div className="absolute inset-0 rounded-xl border-2 border-primary/80 animate-pulse pointer-events-none" />
          <span className="h-2 w-16 rounded-full bg-primary/40" />
        </div>
      );

    case "voiceglow":
      return (
        <div className="flex items-center gap-1">
          <span className="w-1 h-3 rounded-full bg-emerald-400 animate-pulse" />
          <span className="w-1 h-6 rounded-full bg-emerald-500 animate-pulse delay-75" />
          <span className="w-1 h-9 rounded-full bg-emerald-400 animate-pulse delay-150" />
          <span className="w-1 h-5 rounded-full bg-emerald-500 animate-pulse delay-200" />
          <span className="w-1 h-2 rounded-full bg-emerald-400 animate-pulse delay-300" />
        </div>
      );

    case "liquidgooey":
      return (
        <div className="flex items-center gap-1 relative">
          <div className="size-8 rounded-full bg-rose-500 shadow-sm" />
          <div className="size-6 rounded-full bg-rose-500 shadow-sm -ml-3" />
        </div>
      );

    case "chat":
    case "chat01":
      return (
        <div className="w-full max-w-[180px] space-y-1.5">
          <div className="flex items-end gap-1.5">
            <div className="size-4 rounded-full bg-orange-400 text-[8px] flex items-center justify-center text-white">M</div>
            <div className="rounded-xl rounded-bl-xs bg-muted px-2.5 py-1 max-w-[110px]">
              <div className="h-1.5 w-16 rounded-full bg-zinc-400 dark:bg-zinc-600" />
            </div>
          </div>
          <div className="flex items-end justify-end gap-1.5">
            <div className="rounded-xl rounded-br-xs bg-primary px-2.5 py-1 max-w-[110px]">
              <div className="h-1.5 w-14 rounded-full bg-primary-foreground" />
            </div>
          </div>
        </div>
      );

    case "activityterrain":
      return (
        <div className="relative h-24 w-44">
          <svg viewBox="0 0 180 90" className="size-full text-zinc-300 dark:text-zinc-700" fill="none" stroke="currentColor" strokeWidth="1">
            {[0, 1, 2, 3, 4].map((i) => (
              <path key={i} d={`M0 ${52 + i * 8} Q 45 ${34 + i * 8}, 90 ${50 + i * 7} T 180 ${44 + i * 8}`} />
            ))}
            <path className="text-zinc-400 dark:text-zinc-600" d="M0 34 Q 45 14, 90 32 T 180 26" />
          </svg>
        </div>
      );

    case "aiautocomplete":
      return (
        <div className="w-full max-w-[180px] space-y-1.5">
          <div className="rounded-lg border border-zinc-300 dark:border-zinc-700 bg-background px-2.5 py-1.5 shadow-xs">
            <div className="flex items-center gap-1">
              <span className="h-2 w-12 rounded-full bg-zinc-700 dark:bg-zinc-300" />
              <span className="h-2 w-8 rounded-full bg-zinc-300 dark:bg-zinc-700" />
              <span className="inline-block w-0.5 h-3 bg-primary animate-pulse" />
            </div>
          </div>
          <div className="rounded-lg border border-zinc-200/80 dark:border-zinc-800 bg-background p-1 shadow-md space-y-1">
            <div className="flex items-center gap-1.5 rounded px-1.5 py-1 bg-muted/60">
              <span className="size-3 rounded-full bg-emerald-400/70" />
              <span className="h-1.5 w-16 rounded-full bg-zinc-300 dark:bg-zinc-700" />
            </div>
            <div className="flex items-center gap-1.5 px-1.5 py-1">
              <span className="size-3 rounded-full bg-zinc-200 dark:bg-zinc-800" />
              <span className="h-1.5 w-12 rounded-full bg-zinc-200 dark:bg-zinc-800" />
            </div>
          </div>
        </div>
      );

    case "aicitations":
      return (
        <div className="w-full max-w-[180px] rounded-xl border border-zinc-200/90 dark:border-zinc-800 bg-background p-2 shadow-md space-y-1.5">
          <div className="flex items-center gap-2">
            <span className="size-4 rounded-full border border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800" />
            <div className="flex-1 space-y-1">
              <span className="block h-1.5 w-20 rounded-full bg-zinc-400 dark:bg-zinc-600" />
              <span className="block h-1 w-14 rounded-full bg-zinc-200 dark:bg-zinc-800" />
            </div>
            <span className="text-[8px] font-semibold text-primary">1</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="size-4 rounded-full border border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800" />
            <div className="flex-1">
              <span className="block h-1.5 w-14 rounded-full bg-zinc-300 dark:bg-zinc-700" />
            </div>
            <span className="text-[8px] font-semibold text-primary">2</span>
          </div>
        </div>
      );

    case "aicontextmeter":
      return (
        <div className="w-full max-w-[180px] space-y-2">
          <div className="flex items-center justify-between text-[9px] font-medium text-muted-foreground">
            <span>Context</span>
            <span className="text-foreground">68%</span>
          </div>
          <div className="flex h-2 gap-0.5">
            <span className="flex-[7] rounded-full bg-primary/80" />
            <span className="flex-[3] rounded-full bg-zinc-200 dark:bg-zinc-800" />
          </div>
          <div className="flex items-center justify-between font-mono text-[8px] text-muted-foreground">
            <span>8k used</span>
            <span>128k window</span>
          </div>
        </div>
      );

    case "aidiffreview":
      return (
        <div className="w-full max-w-[180px] overflow-hidden rounded-lg border border-zinc-200/90 dark:border-zinc-800 bg-background font-mono shadow-xs">
          <div className="border-b border-zinc-100 dark:border-zinc-800 bg-zinc-100/70 dark:bg-zinc-800/60 px-2 py-1 text-[8px] text-muted-foreground">
            diff.tsx
          </div>
          <div className="space-y-0.5 px-2 py-1.5">
            <div className="rounded-sm bg-emerald-500/10 px-1 py-0.5 text-[8px] text-emerald-600 dark:text-emerald-400">+ change</div>
            <div className="rounded-sm bg-rose-500/10 px-1 py-0.5 text-[8px] text-rose-600 dark:text-rose-400">- removed</div>
            <div className="px-1 py-0.5 text-[8px] text-zinc-400 dark:text-zinc-600">&nbsp;</div>
          </div>
        </div>
      );

    case "aiinlineedit":
      return (
        <div className="w-full max-w-[180px]">
          <span className="block h-2 w-full rounded-full bg-zinc-300 dark:bg-zinc-700" />
          <span className="mt-1.5 block h-2 w-3/4 rounded-full bg-zinc-200 dark:bg-zinc-800" />
          <div className="mt-3 inline-flex items-center gap-1 rounded-lg border border-zinc-200/90 dark:border-zinc-800 bg-background px-1.5 py-1 shadow-lg">
            <span className="flex size-4 items-center justify-center rounded bg-primary/10 text-[8px] font-bold text-primary">B</span>
            <span className="flex size-4 items-center justify-center text-[8px] text-muted-foreground">I</span>
            <span className="mx-0.5 h-3 w-px bg-border" />
            <span className="rounded-md bg-primary px-1.5 py-0.5 text-[8px] font-medium text-primary-foreground">AI</span>
          </div>
        </div>
      );

    case "aiinputsearch":
      return (
        <div className="w-full max-w-[190px] space-y-2">
          <div className="flex items-center justify-between rounded-full border border-zinc-300 dark:border-zinc-700 bg-background px-3 py-2 shadow-md">
            <span className="inline-block h-3 w-0.5 bg-primary animate-pulse" />
            <span className="rounded-md border border-zinc-200 dark:border-zinc-800 bg-muted px-1.5 py-0.5 font-mono text-[8px] font-medium text-muted-foreground">
              ⌘K
            </span>
          </div>
          <div className="flex gap-1.5 px-1">
            <span className="h-1.5 w-14 rounded-full bg-zinc-300 dark:bg-zinc-700" />
            <span className="h-1.5 w-10 rounded-full bg-zinc-200 dark:bg-zinc-800" />
          </div>
        </div>
      );

    case "ailoading":
      return (
        <div className="w-full max-w-[180px] space-y-2">
          <div className="h-2.5 w-full animate-pulse rounded-full bg-gradient-to-r from-zinc-300 via-zinc-200 to-zinc-300 dark:from-zinc-700 dark:via-zinc-800 dark:to-zinc-700" />
          <div className="h-1.5 w-2/3 rounded-full bg-zinc-200 dark:bg-zinc-800" />
          <div className="h-1.5 w-1/3 rounded-full bg-zinc-200 dark:bg-zinc-800" />
        </div>
      );

    case "aimemory":
      return (
        <div className="w-full max-w-[180px] divide-y divide-zinc-100 dark:divide-zinc-800 rounded-xl border border-zinc-200/90 dark:border-zinc-800 bg-background p-1.5 shadow-xs">
          {[0, 1].map((i) => (
            <div key={i} className="flex items-center justify-between gap-2 px-1.5 py-1.5">
              <span className={cn("h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700", i === 0 ? "w-24" : "w-16")} />
              <span className="flex size-3.5 items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800 text-[7px] text-zinc-400">
                ×
              </span>
            </div>
          ))}
          <div className="px-1.5 py-1.5 text-[9px] font-medium text-muted-foreground">+ Add memory</div>
        </div>
      );

    case "aimessagequeue":
      return (
        <div className="w-full max-w-[180px] space-y-1.5">
          <div className="flex items-center justify-between rounded-lg border border-zinc-200/90 dark:border-zinc-800 bg-background px-2.5 py-1.5 shadow-xs">
            <span className="h-1.5 w-20 rounded-full bg-zinc-300 dark:bg-zinc-700" />
            <div className="flex items-center gap-0.5">
              <span className="size-1 rounded-full bg-emerald-500" />
              <span className="size-1 rounded-full bg-emerald-500/70" />
              <span className="size-1 rounded-full bg-emerald-500/40" />
            </div>
          </div>
          <div className="rounded-lg border border-zinc-200/90 dark:border-zinc-800 bg-background px-2.5 py-1.5 shadow-xs">
            <span className="h-1.5 w-12 rounded-full bg-zinc-200 dark:bg-zinc-800" />
          </div>
        </div>
      );

    case "aimodelselector":
      return (
        <div className="inline-flex items-center justify-between gap-2.5 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-background px-3 py-2 shadow-xs">
          <div className="flex items-center gap-2">
            <span className="size-4 rounded-md bg-zinc-900 dark:bg-zinc-100" />
            <span className="h-2 w-16 rounded-full bg-zinc-300 dark:bg-zinc-700" />
          </div>
          <span className="text-[9px] text-zinc-400">▾</span>
        </div>
      );

    case "aiprompt":
      return (
        <div className="w-full max-w-[190px] rounded-xl border border-zinc-300 dark:border-zinc-700 bg-background p-2 shadow-md space-y-1.5">
          <div className="space-y-1.5 px-0.5 py-1">
            <span className="block h-1.5 w-24 rounded-full bg-zinc-400 dark:bg-zinc-600" />
            <span className="block h-1.5 w-16 rounded-full bg-zinc-200 dark:bg-zinc-800" />
          </div>
          <div className="flex items-center justify-between border-t border-zinc-100 dark:border-zinc-800 pt-1.5">
            <div className="flex gap-1">
              <span className="size-3.5 rounded-md bg-muted" />
              <span className="size-3.5 rounded-md bg-muted" />
            </div>
            <span className="size-5 rounded-full bg-primary" />
          </div>
        </div>
      );

    case "aitoolapproval":
      return (
        <div className="w-full max-w-[180px] rounded-xl border border-zinc-200/90 dark:border-zinc-800 bg-background p-2.5 shadow-md space-y-2">
          <div className="flex items-center gap-1.5">
            <span className="size-3 rounded bg-zinc-900 dark:bg-zinc-100" />
            <span className="h-1.5 w-16 rounded-full bg-zinc-400 dark:bg-zinc-600" />
          </div>
          <div className="space-y-1">
            <span className="block h-1 w-full rounded-full bg-zinc-200 dark:bg-zinc-800" />
            <span className="block h-1 w-2/3 rounded-full bg-zinc-200 dark:bg-zinc-800" />
          </div>
          <div className="flex justify-end gap-1.5 pt-0.5">
            <span className="h-4 w-9 rounded-md bg-muted" />
            <span className="h-4 w-9 rounded-md bg-zinc-900 dark:bg-zinc-100" />
          </div>
        </div>
      );

    case "amountpad":
      return (
        <div className="grid w-36 grid-cols-3 gap-1.5">
          {["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((d) => (
            <span
              key={d}
              className="flex items-center justify-center rounded-lg border border-zinc-200/80 dark:border-zinc-800 bg-background py-1.5 font-mono text-[9px] text-zinc-500 dark:text-zinc-400 shadow-2xs"
            >
              {d}
            </span>
          ))}
        </div>
      );

    case "appleactivitycard":
      return (
        <div className="relative size-24">
          <span className="absolute inset-0 rounded-full border-[5px] border-rose-400/90" />
          <span className="absolute inset-2 rounded-full border-[5px] border-lime-400/90" />
          <span className="absolute inset-4 rounded-full border-[5px] border-cyan-400/90" />
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-mono text-[9px] font-bold text-zinc-600 dark:text-zinc-300">
            3
          </span>
        </div>
      );

    case "backgroundpaths":
      return (
        <div className="relative h-24 w-48">
          <svg viewBox="0 0 200 100" fill="none" className="size-full text-zinc-300 dark:text-zinc-700">
            <path d="M8 88 C 60 38, 120 96, 192 28" stroke="currentColor" strokeWidth="1.5" />
            <path d="M0 58 C 60 88, 140 18, 200 66" stroke="currentColor" strokeWidth="1" opacity="0.6" />
            <path d="M18 96 C 80 16, 130 106, 200 46" stroke="currentColor" strokeWidth="1" opacity="0.35" />
            <circle cx="64" cy="54" r="3" className="fill-zinc-400 dark:fill-zinc-500" />
          </svg>
        </div>
      );

    case "bellbutton":
      return (
        <div className="relative flex items-center justify-center">
          <div className="flex size-10 items-center justify-center rounded-xl border border-zinc-200/90 dark:border-zinc-800 bg-background shadow-xs">
            <svg className="size-5 text-zinc-700 dark:text-zinc-300" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
            </svg>
          </div>
          <span className="absolute right-7 top-7 size-2 rounded-full bg-rose-500" />
        </div>
      );

    case "bentogrid":
      return (
        <div className="grid w-44 grid-cols-3 gap-1.5">
          <span className="col-span-2 h-11 rounded-lg bg-zinc-200 dark:bg-zinc-800" />
          <span className="h-11 rounded-lg border border-zinc-200/70 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900" />
          <span className="h-11 rounded-lg border border-zinc-200/70 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900" />
          <span className="col-span-2 h-11 rounded-lg bg-zinc-200 dark:bg-zinc-800" />
        </div>
      );

    case "boardingpass":
      return (
        <div className="w-full max-w-[190px] overflow-hidden rounded-xl border border-zinc-200/90 dark:border-zinc-800 bg-background shadow-xs">
          <div className="flex items-center justify-between px-3 pt-2.5">
            <span className="h-1.5 w-10 rounded-full bg-zinc-400 dark:bg-zinc-600" />
            <span className="h-1.5 w-6 rounded-full bg-zinc-200 dark:bg-zinc-800" />
          </div>
          <div className="flex items-center justify-between px-3 py-2">
            <span className="h-2 w-8 rounded-full bg-zinc-800 dark:bg-zinc-300" />
            <span className="text-[8px] text-zinc-400">✈</span>
            <span className="h-2 w-8 rounded-full bg-zinc-300 dark:bg-zinc-700" />
          </div>
          <div className="flex gap-[3px] border-t border-dashed border-zinc-200 dark:border-zinc-800 px-3 py-2">
            {Array.from({ length: 18 }).map((_, i) => (
              <span
                key={i}
                className={cn(
                  "h-3.5 w-[2px] rounded-sm bg-zinc-300 dark:bg-zinc-700",
                  i % 4 === 0 && "h-4.5 bg-zinc-400 dark:bg-zinc-600"
                )}
              />
            ))}
          </div>
        </div>
      );

    case "cardfield":
      return (
        <div className="w-full max-w-[190px] rounded-xl border border-zinc-300 dark:border-zinc-700 bg-background p-2.5 shadow-xs space-y-2">
          <span className="block h-1.5 w-12 rounded-full bg-zinc-200 dark:bg-zinc-800" />
          <span className="block font-mono text-[11px] tracking-widest text-zinc-500 dark:text-zinc-400">
            4242 4242 4242
          </span>
          <div className="flex justify-between font-mono text-[8px] text-zinc-400">
            <span>12/28</span>
            <span>CVC</span>
          </div>
        </div>
      );

    case "cardflip":
      return (
        <div className="relative size-16">
          <div className="absolute inset-0 -rotate-6 rounded-xl border border-zinc-200/90 dark:border-zinc-800 bg-background shadow-xs p-2.5">
            <span className="block size-5 rounded-full bg-zinc-200 dark:bg-zinc-800" />
          </div>
          <div className="absolute inset-0 rotate-6 rounded-xl bg-zinc-900 dark:bg-zinc-100 shadow-md flex items-center justify-center">
            <span className="block h-1.5 w-8 rounded-full bg-zinc-100 dark:bg-zinc-900" />
          </div>
        </div>
      );

    case "cardstack":
      return (
        <div className="relative h-20 w-44">
          <div className="absolute inset-x-4 top-0 h-14 rounded-xl border border-zinc-200/70 dark:border-zinc-800/70 bg-background/80 shadow-2xs -rotate-2" />
          <div className="absolute inset-x-3 top-3 h-14 rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 bg-background shadow-xs rotate-1" />
          <div className="absolute inset-x-2 top-6 h-14 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-background shadow-md p-2.5 space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="h-2 w-14 rounded-full bg-zinc-400 dark:bg-zinc-600" />
              <span className="size-3.5 rounded-full bg-primary/30" />
            </div>
            <span className="block h-1.5 w-3/4 rounded-full bg-zinc-200 dark:bg-zinc-800" />
          </div>
        </div>
      );

    case "carouselcards":
      return (
        <div className="flex items-center gap-2">
          <div className="h-14 w-10 shrink-0 rounded-lg bg-zinc-200/80 dark:bg-zinc-800 opacity-60" />
          <div className="h-20 w-24 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-background shadow-md p-1.5">
            <span className="block h-full w-full rounded-lg bg-zinc-100 dark:bg-zinc-900" />
          </div>
          <div className="h-14 w-10 shrink-0 rounded-lg bg-zinc-200/80 dark:bg-zinc-800 opacity-60" />
        </div>
      );

    case "cartbutton":
      return (
        <div className="inline-flex items-center rounded-full border border-zinc-300 dark:border-zinc-700 bg-background shadow-xs overflow-hidden font-mono text-[10px]">
          <span className="border-r border-zinc-200 dark:border-zinc-800 px-3 py-1.5 font-medium text-primary">+</span>
          <span className="px-3 py-1.5 font-semibold text-foreground">2</span>
          <span className="border-l border-zinc-200 dark:border-zinc-800 px-3 py-1.5 font-medium text-muted-foreground">−</span>
        </div>
      );

    case "causticsbackground":
      return (
        <div className="relative h-24 w-44 overflow-hidden rounded-lg bg-zinc-50 dark:bg-zinc-900/60">
          <span className="absolute -top-2 left-4 h-14 w-20 rounded-full bg-white/70 blur-md dark:bg-zinc-100/10" />
          <span className="absolute left-16 top-7 h-10 w-24 rounded-full bg-white/50 blur-md dark:bg-zinc-100/5" />
          <span className="absolute bottom-1 left-2 h-8 w-16 rounded-full bg-white/70 blur-md dark:bg-zinc-100/15" />
        </div>
      );

    case "cliptrimmer":
      return (
        <div className="w-full max-w-[190px] space-y-2.5">
          <div className="relative h-2.5 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800">
            <div className="absolute left-1/4 right-1/4 top-0 h-full bg-primary/60" />
            <span className="absolute left-1/4 top-1/2 size-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-primary bg-background shadow-xs" />
            <span className="absolute right-1/4 top-1/2 size-4 translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-primary bg-background shadow-xs" />
          </div>
          <div className="flex gap-[2px] px-0.5">
            {Array.from({ length: 16 }).map((_, i) => (
              <span key={i} className="h-1.5 flex-1 rounded-full bg-zinc-200 dark:bg-zinc-800" />
            ))}
          </div>
        </div>
      );

    case "commandbutton":
      return (
        <div className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-background px-3 py-2 shadow-xs">
          <span className="rounded-md border border-zinc-200 dark:border-zinc-800 bg-muted px-1.5 py-0.5 font-mono text-[9px] font-semibold">⌘</span>
          <span className="rounded-md border border-zinc-200 dark:border-zinc-800 bg-muted px-1.5 py-0.5 font-mono text-[9px] font-semibold">K</span>
        </div>
      );

    case "currencytransfer":
      return (
        <div className="w-full max-w-[190px] space-y-1.5 rounded-xl border border-zinc-200/90 dark:border-zinc-800 bg-background p-2.5 shadow-xs">
          <div className="flex items-center justify-between rounded-lg border border-zinc-200/80 dark:border-zinc-800 px-2.5 py-1.5">
            <span className="h-2 w-8 rounded-full bg-zinc-300 dark:bg-zinc-700" />
            <span className="font-mono text-[10px] font-semibold text-zinc-700 dark:text-zinc-300">1,250.00</span>
          </div>
          <div className="flex justify-center">
            <span className="flex size-5 items-center justify-center rounded-full bg-muted text-[8px] text-zinc-500">↓</span>
          </div>
          <div className="flex items-center justify-between rounded-lg border border-zinc-200/80 dark:border-zinc-800 px-2.5 py-1.5">
            <span className="h-2 w-8 rounded-full bg-zinc-400 dark:bg-zinc-600" />
            <span className="font-mono text-[10px] font-semibold text-foreground">78.50</span>
          </div>
        </div>
      );

    case "detentdial":
      return (
        <div className="relative size-16 rounded-full border border-zinc-200/90 dark:border-zinc-800 bg-background shadow-xs">
          <span className="absolute left-0 top-1/2 h-0.5 w-2 -translate-y-1/2 bg-zinc-300 dark:bg-zinc-700" />
          <span className="absolute right-0 top-1/2 h-0.5 w-2 -translate-y-1/2 bg-zinc-300 dark:bg-zinc-700" />
          <span className="absolute bottom-0 left-1/2 h-2 w-0.5 -translate-x-1/2 bg-zinc-300 dark:bg-zinc-700" />
          <span className="absolute left-1/2 top-0 h-2 w-0.5 -translate-x-1/2 -translate-y-[1px] bg-rose-400" />
          <span className="absolute left-1/2 top-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-400" />
        </div>
      );

    case "dotfield":
      return (
        <div className="grid w-44 grid-cols-10 gap-x-2.5 gap-y-2.5">
          {Array.from({ length: 40 }).map((_, i) => (
            <span
              key={i}
              className={cn(
                "size-1 rounded-full",
                [4, 5, 14, 15].includes(i)
                  ? "bg-zinc-500 dark:bg-zinc-500"
                  : "bg-zinc-300/70 dark:bg-zinc-800"
              )}
            />
          ))}
        </div>
      );

    case "drapebackground":
      return (
        <div className="h-24 w-48 rounded-lg">
          <svg viewBox="0 0 190 90" fill="none" className="size-full text-zinc-300 dark:text-zinc-700">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <path key={i} d={`M0 ${i * 15} Q 48 ${i * 15 + 12}, 95 ${i * 15} T 190 ${i * 15}`} />
            ))}
          </svg>
        </div>
      );

    case "fileupload":
      return (
        <div className="flex w-full max-w-[190px] flex-col items-center gap-1.5 rounded-xl border-2 border-dashed border-zinc-300 dark:border-zinc-700 bg-zinc-50/60 p-4 dark:bg-zinc-900/40">
          <svg className="size-4 text-zinc-400" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
            <path d="M12 17V3m0 0-4 4m4-4 4 4M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="h-1.5 w-24 rounded-full bg-zinc-200 dark:bg-zinc-800" />
          <span className="h-1.5 w-1/2 rounded-full bg-primary/40" />
        </div>
      );

    case "flowfield":
      return (
        <div className="h-24 w-48">
          <svg viewBox="0 0 190 90" fill="none" className="size-full text-zinc-300 dark:text-zinc-700">
            <path d="M0 18 C 60 8, 90 56, 190 38" />
            <path d="M0 45 C 70 66, 110 12, 190 55" />
            <path d="M0 72 C 60 50, 120 80, 190 60" />
            <circle cx="94" cy="42" r="4" stroke="currentColor" className="stroke-zinc-500 dark:stroke-zinc-500" />
          </svg>
        </div>
      );

    case "focalpointpicker":
      return (
        <div className="relative h-20 w-28 rounded-xl border border-zinc-200/90 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-800/60">
          <span className="absolute left-1/2 top-1/2 size-5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/70" />
          <span className="absolute left-1/2 top-1/2 size-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary" />
        </div>
      );

    case "holdbutton":
      return (
        <div className="relative flex items-center justify-center">
          <svg viewBox="0 0 44 44" className="absolute size-12 -rotate-90">
            <circle cx="22" cy="22" r="20" fill="none" stroke="currentColor" className="text-zinc-200 dark:text-zinc-800" strokeWidth="3" />
            <circle
              cx="22"
              cy="22"
              r="20"
              fill="none"
              stroke="currentColor"
              className="text-rose-500"
              strokeWidth="3"
              strokeDasharray="125.6"
              strokeDashoffset="45"
              strokeLinecap="round"
            />
          </svg>
          <span className="font-mono text-[8px] font-semibold text-muted-foreground">HOLD</span>
        </div>
      );

    case "liquidgauge":
      return (
        <div className="relative size-20 overflow-hidden rounded-full border border-zinc-200/90 dark:border-zinc-800 bg-background shadow-xs">
          <svg viewBox="0 0 80 80" preserveAspectRatio="none" className="absolute inset-x-0 bottom-0 h-11 w-full text-cyan-400/60" fill="currentColor">
            <path d="M0 16 C 13 8, 27 24, 40 16 S 67 8, 80 16 L 80 80 L 0 80 Z" />
          </svg>
          <span className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded font-mono text-[9px] font-bold text-cyan-700 dark:text-cyan-300">
            62%
          </span>
        </div>
      );

    case "liquidglasscard":
      return (
        <div className="relative w-full max-w-[160px] overflow-hidden rounded-xl border border-zinc-200/60 dark:border-zinc-700/60 bg-zinc-900 p-3 shadow-md">
          <span className="absolute -left-3 -top-4 size-14 rounded-full bg-white/10 blur-sm" />
          <div className="relative flex items-center gap-2.5">
            <span className="size-8 shrink-0 rounded-full border border-white/20 bg-gradient-to-br from-zinc-300/80 to-zinc-500/60" />
            <div className="flex-1 space-y-1.5">
              <span className="block h-1.5 w-16 rounded-full bg-white/60" />
              <span className="block h-1 w-10 rounded-full bg-white/25" />
            </div>
          </div>
        </div>
      );

    case "locationpicker":
      return (
        <div className="relative h-20 w-32 overflow-hidden rounded-xl border border-zinc-200/90 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-800/50">
          <span className="absolute left-3 top-4 h-2 w-12 rounded-full bg-zinc-300/70 dark:bg-zinc-700" />
          <span className="absolute left-8 top-11 h-2 w-16 rounded-full bg-zinc-300/50 dark:bg-zinc-700/60" />
          <span className="absolute left-1/2 top-1/2 size-6 -translate-x-1/2 -translate-y-[80%] text-primary/80">
            <svg viewBox="0 0 24 24" className="size-full" fill="currentColor">
              <path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" />
            </svg>
          </span>
        </div>
      );

    case "markingmenu":
      return (
        <div className="relative size-20 rounded-full border border-dashed border-zinc-300 dark:border-zinc-700">
          {[0, 1, 2, 3, 4, 5].map((i) => {
            const angle = ((i * 60 - 90) * Math.PI) / 180;
            return (
              <span
                key={i}
                className={cn(
                  "absolute size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-sm",
                  i === 4 ? "bg-primary" : "bg-zinc-300 dark:bg-zinc-700"
                )}
                style={{
                  left: `${50 + 38 * Math.cos(angle)}%`,
                  top: `${50 + 38 * Math.sin(angle)}%`,
                }}
              />
            );
          })}
          <span className="absolute left-1/2 top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-zinc-400 dark:bg-zinc-500" />
        </div>
      );

    case "markertext":
      return (
        <div className="w-full max-w-[190px] space-y-2.5">
          <span className="block h-2 w-full rounded-full bg-zinc-300 dark:bg-zinc-700" />
          <span className="relative block h-2 w-2/3 rounded-full bg-zinc-200 dark:bg-zinc-800">
            <span className="absolute -inset-y-1 left-0 w-full rounded-sm bg-lime-300/60 -skew-y-1 dark:bg-lime-400/30" />
          </span>
          <span className="block h-2 w-full rounded-full bg-zinc-300 dark:bg-zinc-700" />
        </div>
      );

    case "metriccard":
      return (
        <div className="w-full max-w-[180px] rounded-xl border border-zinc-200/90 dark:border-zinc-800 bg-background p-3 shadow-xs space-y-2">
          <span className="block h-1.5 w-14 rounded-full bg-zinc-300 dark:bg-zinc-700" />
          <div className="flex items-end justify-between">
            <span className="font-mono text-lg font-bold leading-none text-foreground">12.4k</span>
            <span className="rounded-full bg-emerald-500/10 px-1.5 py-0.5 text-[9px] font-semibold text-emerald-500">+18%</span>
          </div>
          <div className="flex h-8 items-end gap-1">
            {[30, 50, 40, 80, 60, 100, 70].map((h, i) => (
              <span
                key={i}
                className={cn("flex-1 rounded-t-sm", i === 5 ? "bg-primary" : "bg-zinc-200 dark:bg-zinc-800")}
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
      );

    case "morphicnavbar":
      return (
        <div className="inline-flex items-center gap-3 rounded-full border border-zinc-200/90 dark:border-zinc-800 bg-background p-1.5 pl-3 shadow-md">
          <span className="h-1.5 w-8 rounded-full bg-zinc-800 dark:bg-zinc-300" />
          <span className="h-1.5 w-6 rounded-full bg-zinc-300 dark:bg-zinc-700" />
          <span className="h-1.5 w-6 rounded-full bg-zinc-300 dark:bg-zinc-700" />
          <span className="size-6 rounded-full bg-zinc-900 dark:bg-zinc-100" />
        </div>
      );

    case "morphpopover":
      return (
        <div className="relative pb-10">
          <span className="inline-flex rounded-xl bg-zinc-900 px-4 py-2 shadow-sm dark:bg-zinc-100">
            <span className="block h-1.5 w-12 rounded-full bg-zinc-100 dark:bg-zinc-900" />
          </span>
          <span className="absolute left-1/2 top-11 w-36 -translate-x-1/2 space-y-1.5 rounded-xl border border-zinc-200/90 dark:border-zinc-800 bg-background p-2.5 shadow-lg">
            <span className="block h-1.5 w-16 rounded-full bg-zinc-300 dark:bg-zinc-700" />
            <span className="block h-1.5 w-20 rounded-full bg-zinc-200 dark:bg-zinc-800" />
          </span>
        </div>
      );

    case "notificationstack":
      return (
        <div className="relative h-20 w-44">
          <div className="absolute inset-x-3 bottom-0 h-12 rounded-xl border border-zinc-200/70 dark:border-zinc-800/70 bg-background/70" />
          <div className="absolute inset-x-1.5 bottom-2 h-12 rounded-xl border border-zinc-200/80 dark:border-zinc-800 bg-background/90 shadow-2xs" />
          <div className="absolute inset-x-0 bottom-4 flex h-12 items-center gap-2 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-background p-2 shadow-md">
            <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-[9px] text-emerald-600 dark:text-emerald-400">✓</span>
            <span className="flex-1 space-y-1">
              <span className="block h-1.5 w-16 rounded-full bg-zinc-400 dark:bg-zinc-600" />
              <span className="block h-1 w-24 rounded-full bg-zinc-200 dark:bg-zinc-800" />
            </span>
          </div>
        </div>
      );

    case "particlebutton":
      return (
        <div className="relative flex items-center justify-center">
          {[-26, -13, 0, 13, 26].map((deg, i) => (
            <span
              key={i}
              className={cn("absolute size-1.5 rounded-full", i % 2 === 0 ? "bg-primary/70" : "bg-zinc-300 dark:bg-zinc-700")}
              style={{ transform: `rotate(${deg}deg) translateX(30px)` }}
            />
          ))}
          <span className="inline-flex rounded-xl bg-zinc-900 px-4 py-2 shadow-md dark:bg-zinc-100">
            <span className="block h-1.5 w-12 rounded-full bg-zinc-100 dark:bg-zinc-900" />
          </span>
        </div>
      );

    case "photostreighten":
      return (
        <div className="aspect-[4/3] w-36 -rotate-6 rounded-lg border-2 border-zinc-400 bg-zinc-50 p-1.5 transition-transform duration-300 group-hover:rotate-0 dark:border-zinc-600 dark:bg-zinc-900">
          <div className="h-full w-full rounded-sm bg-zinc-200 dark:bg-zinc-800" />
        </div>
      );

    case "profiledropdown":
      return (
        <div className="w-full max-w-[180px] space-y-0.5 rounded-xl border border-zinc-200/90 dark:border-zinc-800 bg-background p-1.5 shadow-lg">
          <div className="flex items-center gap-2 px-2 py-1.5">
            <span className="size-6 shrink-0 rounded-full bg-zinc-200 dark:bg-zinc-800" />
            <div className="flex-1 space-y-1">
              <span className="block h-1.5 w-14 rounded-full bg-zinc-400 dark:bg-zinc-600" />
              <span className="block h-1 w-10 rounded-full bg-zinc-200 dark:bg-zinc-800" />
            </div>
          </div>
          <div className="flex h-5 items-center rounded-md bg-accent/60 px-2">
            <span className="h-1.5 w-12 rounded-full bg-zinc-300 dark:bg-zinc-700" />
          </div>
          <div className="flex h-5 items-center px-2">
            <span className="h-1.5 w-9 rounded-full bg-zinc-200 dark:bg-zinc-800" />
          </div>
          <div className="flex h-5 items-center px-2">
            <span className="h-1.5 w-11 rounded-full bg-rose-400/80" />
          </div>
        </div>
      );

    case "receiptprinter":
      return (
        <div className="w-36 space-y-1.5 border-x border-zinc-200 bg-background px-3 py-2 shadow-xs dark:border-zinc-800">
          <span className="block font-mono text-[8px] text-zinc-400">RECEIPT #024</span>
          <span className="block h-1 w-full rounded-full bg-zinc-200 dark:bg-zinc-800" />
          <span className="block h-1 w-28 rounded-full bg-zinc-200 dark:bg-zinc-800" />
          <span className="block h-1 w-16 rounded-full bg-zinc-200 dark:bg-zinc-800" />
          <div className="border-t border-dashed border-zinc-200 pt-1.5 dark:border-zinc-800">
            <span className="block h-1.5 w-14 rounded-full bg-zinc-400 dark:bg-zinc-600" />
          </div>
        </div>
      );

    case "savebutton":
      return (
        <div className="inline-flex items-center gap-2 rounded-lg bg-primary px-3.5 py-2 text-primary-foreground shadow-sm">
          <span className="size-3 animate-spin rounded-full border-2 border-primary-foreground/40 border-t-primary-foreground" />
          <span className="block h-1.5 w-12 rounded-full bg-primary-foreground/70" />
        </div>
      );

    case "scrollindex":
      return (
        <div className="flex flex-col items-center gap-2.5">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={cn("w-1 rounded-full", i === 0 ? "h-5 bg-foreground" : "h-2 bg-zinc-300 dark:bg-zinc-700")}
            />
          ))}
        </div>
      );

    case "seatmap":
      return (
        <div className="grid w-36 grid-cols-6 gap-1.5">
          {Array.from({ length: 24 }).map((_, i) => (
            <span
              key={i}
              className={cn(
                "h-4 rounded-md border",
                i === 8
                  ? "border-zinc-400/60 dark:border-zinc-600 bg-zinc-400/30 dark:bg-zinc-600/40"
                  : "border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-800/60"
              )}
            />
          ))}
        </div>
      );

    case "shapehero":
      return (
        <div className="relative h-24 w-44 overflow-hidden">
          <span className="absolute left-5 top-7 size-10 rounded-full border border-zinc-300 dark:border-zinc-700" />
          <span className="absolute left-14 top-8 size-12 rotate-12 rounded-lg bg-zinc-200 dark:bg-zinc-800" />
          <span className="absolute right-5 top-3 size-8 -rotate-12 rounded-md border border-zinc-300 bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900" />
          <span className="absolute bottom-2 left-6 h-1.5 w-20 rounded-full bg-zinc-300 dark:bg-zinc-700" />
        </div>
      );

    case "signaturepad":
      return (
        <div className="w-full max-w-[180px] rounded-lg border border-zinc-200/90 dark:border-zinc-800 bg-background p-2 shadow-xs">
          <svg viewBox="0 0 140 40" fill="none" className="h-9 w-full text-zinc-500 dark:text-zinc-400">
            <path
              d="M4 28 C 20 8, 30 34, 40 20 S 60 8, 68 22 S 88 34, 98 16 S 122 26, 136 18"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
      );

    case "slidetextbutton":
      return (
        <div className="inline-flex items-center gap-2.5 rounded-xl bg-zinc-900 px-4 py-2 shadow-md dark:bg-zinc-100">
          <span className="block h-1.5 w-10 rounded-full bg-zinc-100 dark:bg-zinc-900" />
          <span className="text-[10px] leading-none text-zinc-100 dark:text-zinc-900">→</span>
        </div>
      );

    case "slotpicker":
      return (
        <div className="flex w-44 flex-wrap gap-1.5">
          {["09:00", "10:30", "13:00", "15:30", "17:00"].map((t, i) => (
            <span
              key={t}
              className={cn(
                "rounded-lg border px-2 py-1 font-mono text-[9px]",
                i === 1
                  ? "border-primary/50 bg-primary/10 font-semibold text-primary"
                  : "border-zinc-200 dark:border-zinc-800 bg-background text-zinc-500 dark:text-zinc-400"
              )}
            >
              {t}
            </span>
          ))}
        </div>
      );

    case "smoothdrawer":
      return (
        <div className="relative h-20 w-44">
          <span className="mx-auto mb-2 block h-1 w-8 rounded-full bg-zinc-300 dark:bg-zinc-700" />
          <div className="absolute inset-x-0 bottom-0 h-16 space-y-1.5 rounded-t-2xl border border-zinc-200 bg-background p-3 shadow-md dark:border-zinc-800">
            <span className="block h-2 w-16 rounded-full bg-zinc-400 dark:bg-zinc-600" />
            <span className="block h-1.5 w-24 rounded-full bg-zinc-200 dark:bg-zinc-800" />
            <span className="block h-1.5 w-20 rounded-full bg-zinc-200 dark:bg-zinc-800" />
          </div>
        </div>
      );

    case "spendingring":
      return (
        <div className="flex items-center gap-3">
          <div className="relative size-16 shrink-0">
            <svg viewBox="0 0 44 44" className="absolute inset-0 -rotate-90">
              <circle cx="22" cy="22" r="19" fill="none" stroke="currentColor" strokeWidth="5" className="text-zinc-200 dark:text-zinc-800" />
              <circle cx="22" cy="22" r="19" fill="none" stroke="currentColor" className="text-rose-400" strokeWidth="5" strokeDasharray="119.4" strokeDashoffset="36" />
              <circle cx="22" cy="22" r="12" fill="none" stroke="currentColor" className="text-emerald-400" strokeWidth="4" strokeDasharray="75.4" strokeDashoffset="24" />
              <circle cx="22" cy="22" r="5.5" fill="none" stroke="currentColor" className="text-violet-400" strokeWidth="3.5" strokeDasharray="34.6" strokeDashoffset="12" />
            </svg>
          </div>
          <div className="space-y-1.5">
            <span className="block h-1.5 w-14 rounded-full bg-zinc-300 dark:bg-zinc-700" />
            <span className="block h-1 w-10 rounded-full bg-zinc-200 dark:bg-zinc-800" />
            <span className="block h-1 w-12 rounded-full bg-zinc-200 dark:bg-zinc-800" />
          </div>
        </div>
      );

    case "stackpanel":
      return (
        <div className="w-full max-w-[180px] space-y-1.5">
          <div className="flex items-center justify-between rounded-lg border border-zinc-200 dark:border-zinc-800 bg-background px-2.5 py-1.5 shadow-xs">
            <span className="h-1.5 w-14 rounded-full bg-zinc-300 dark:bg-zinc-700" />
            <span className="text-[8px] text-zinc-400">⌄</span>
          </div>
          <div className="flex items-center justify-between rounded-lg border border-zinc-200/70 dark:border-zinc-800/70 bg-background/60 px-2.5 py-1 opacity-70">
            <span className="h-1.5 w-10 rounded-full bg-zinc-200 dark:bg-zinc-800" />
            <span className="text-[8px] text-zinc-400">⌃</span>
          </div>
        </div>
      );

    case "statusisland":
      return (
        <span className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-3.5 py-2 shadow-md dark:bg-zinc-100">
          <span className="size-2 shrink-0 rounded-full bg-lime-400" />
          <span className="block h-1.5 w-12 rounded-full bg-zinc-100/80 dark:bg-zinc-900/70" />
        </span>
      );

    case "staypicker":
      return (
        <div className="w-full max-w-[190px] rounded-xl border border-zinc-200/90 dark:border-zinc-800 bg-background p-2 shadow-xs">
          <div className="mb-1.5 flex items-center justify-between px-1">
            <span className="h-1.5 w-12 rounded-full bg-zinc-400 dark:bg-zinc-600" />
            <span className="text-[8px] text-zinc-400">‹ ›</span>
          </div>
          <div className="grid grid-cols-7 gap-1">
            {Array.from({ length: 21 }).map((_, i) => (
              <span
                key={i}
                className={cn(
                  "size-2.5 rounded-full",
                  i === 5 || i === 6
                    ? "bg-primary/70"
                    : i === 7
                      ? "bg-primary/25"
                      : "border border-zinc-200/60 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900"
                )}
              />
            ))}
          </div>
        </div>
      );

    case "switchbutton":
      return (
        <div className="flex items-center gap-2.5">
          <div className="flex h-6 w-12 rounded-full bg-zinc-900 p-0.5 dark:bg-zinc-100">
            <div className="size-5 rounded-full bg-background shadow-xs" />
          </div>
          <span className="h-1.5 w-10 rounded-full bg-zinc-300 dark:bg-zinc-700" />
        </div>
      );

    case "syncedtranscript":
      return (
        <div className="w-full max-w-[180px] space-y-2.5">
          <div className="flex items-end justify-center gap-1">
            {[3, 6, 9, 5, 7].map((h, i) => (
              <span
                key={i}
                className={cn("w-1 rounded-full", i === 2 ? "bg-primary" : "bg-primary/40")}
                style={{ height: `${h * 3}px` }}
              />
            ))}
          </div>
          <div className="space-y-1.5">
            <span className="block h-1.5 w-full rounded-full bg-zinc-300 dark:bg-zinc-700" />
            <span className="block h-1.5 w-2/3 rounded-full bg-zinc-200 dark:bg-zinc-800" />
          </div>
        </div>
      );

    case "teamselector":
      return (
        <div className="inline-flex items-center gap-2 rounded-full border border-zinc-300 dark:border-zinc-700 bg-background py-1 pl-1.5 pr-3 shadow-xs">
          <div className="flex -space-x-1.5">
            {["bg-rose-300 dark:bg-rose-800", "bg-amber-300 dark:bg-amber-800", "bg-sky-300 dark:bg-sky-800"].map((c, i) => (
              <span key={i} className={cn("size-5 shrink-0 rounded-full border-2 border-background", c)} />
            ))}
          </div>
          <span className="block h-1.5 w-16 rounded-full bg-zinc-300 dark:bg-zinc-700" />
          <span className="text-[9px] text-zinc-400">▾</span>
        </div>
      );

    case "tearbutton":
      return (
        <div className="inline-flex items-stretch">
          <span className="flex items-center rounded-l-xl bg-zinc-900 px-3.5 py-2 dark:bg-zinc-100">
            <span className="block h-1.5 w-10 rounded-full bg-zinc-100 dark:bg-zinc-900" />
          </span>
          <span className="my-0.5 border-2 border-dashed border-zinc-200 dark:border-zinc-800" />
          <span className="w-4 rounded-r-xl border-r border-t border-b border-zinc-100 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900" />
        </div>
      );

    case "timezoneplanner":
      return (
        <div className="flex gap-2.5">
          {["M12 12 L12 6", "M12 12 L16 16", "M12 12 L7 12"].map((d, i) => (
            <svg
              key={i}
              viewBox="0 0 24 24"
              className="size-11 rounded-full border border-zinc-200/90 bg-background p-1.5 text-zinc-500 shadow-xs dark:border-zinc-800 dark:text-zinc-400"
            >
              <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1" />
              <path d={d} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="12" cy="12" r="1" fill="currentColor" />
            </svg>
          ))}
        </div>
      );

    case "tipselector":
      return (
        <div className="flex gap-1.5">
          {["10%", "15%", "20%"].map((t, i) => (
            <span
              key={t}
              className={cn(
                "rounded-xl border px-2.5 py-1.5 font-mono text-[10px]",
                i === 1
                  ? "border-primary/50 bg-primary/10 font-semibold text-primary"
                  : "border-zinc-200 bg-background text-zinc-500 dark:border-zinc-800 dark:text-zinc-400"
              )}
            >
              {t}
            </span>
          ))}
        </div>
      );

    case "topobackground":
      return (
        <div className="h-24 w-48">
          <svg viewBox="0 0 190 90" fill="none" className="size-full text-zinc-300 dark:text-zinc-700">
            <circle cx="60" cy="45" r="10" />
            <circle cx="63" cy="45" r="20" />
            <circle cx="68" cy="45" r="30" />
            <circle cx="76" cy="44" r="40" />
            <circle cx="145" cy="65" r="12" />
            <circle cx="150" cy="65" r="24" />
          </svg>
        </div>
      );

    case "typewriter":
      return (
        <div className="inline-flex items-center gap-1 rounded-lg border border-zinc-200/90 bg-background px-3 py-2 font-mono shadow-xs dark:border-zinc-800">
          <span className="block h-2 w-20 rounded-full bg-zinc-300 dark:bg-zinc-700" />
          <span className="inline-block h-3 w-0.5 animate-pulse bg-foreground" />
        </div>
      );

    case "undobutton":
      return (
        <div className="relative flex items-center justify-center">
          <svg viewBox="0 0 40 40" className="absolute size-10 -rotate-90">
            <circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" className="text-rose-400/70" strokeWidth="2.5" strokeDasharray="113" strokeDashoffset="34" strokeLinecap="round" />
          </svg>
          <span className="flex size-8 items-center justify-center rounded-lg border border-zinc-300 bg-background text-[10px] text-muted-foreground shadow-xs dark:border-zinc-700">
            ↺
          </span>
        </div>
      );

    case "uptimecard":
      return (
        <div className="w-full max-w-[180px] space-y-2 rounded-xl border border-zinc-200/90 dark:border-zinc-800 bg-background p-2.5 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="h-1.5 w-12 rounded-full bg-zinc-300 dark:bg-zinc-700" />
            <span className="font-mono text-[9px] font-semibold text-emerald-500">99.98%</span>
          </div>
          <div className="flex gap-[2px]">
            {Array.from({ length: 22 }).map((_, i) => (
              <span
                key={i}
                className={cn(
                  "h-4 flex-1 rounded-full",
                  i === 7 || i === 17
                    ? "bg-amber-400/70"
                    : i === 12
                      ? "bg-rose-400/70"
                      : "bg-emerald-400/60"
                )}
              />
            ))}
          </div>
        </div>
      );

    case "wheelpicker":
      return (
        <div className="w-32 rounded-xl border border-zinc-200/90 dark:border-zinc-800 bg-background p-1 shadow-md">
          <div className="space-y-0.5 py-1">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className={cn("flex justify-center rounded-md py-0.5", i === 1 && "bg-muted/70")}>
                <span className={cn("block h-1.5 rounded-full", i === 1 ? "w-14 bg-foreground" : "w-10 bg-zinc-300/70 dark:bg-zinc-800")} />
              </div>
            ))}
          </div>
        </div>
      );

    default:
      return (
        <div className="w-full max-w-[200px] space-y-2">
          <div className="flex items-center gap-2">
            <span className="size-3.5 rounded-md bg-zinc-300 dark:bg-zinc-700" />
            <span className="h-2 w-24 rounded-full bg-zinc-300 dark:bg-zinc-700" />
          </div>
          <div className="space-y-1.5">
            <span className="block h-1.5 w-full rounded-full bg-zinc-200 dark:bg-zinc-800" />
            <span className="block h-1.5 w-3/4 rounded-full bg-zinc-200 dark:bg-zinc-800" />
          </div>
          <div className="h-8 rounded-lg border border-dashed border-zinc-200 bg-background/60 dark:border-zinc-800" />
        </div>
      );
  }
}
