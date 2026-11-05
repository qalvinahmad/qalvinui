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
        "group relative flex flex-col justify-between rounded-2xl border border-zinc-200/80 dark:border-zinc-800 bg-card p-4 sm:p-5 transition-all duration-200 hover:border-zinc-400/80 dark:hover:border-zinc-700 hover:shadow-md hover:shadow-black/5",
        className
      )}
    >
      {/* Top Header */}
      <div className="space-y-1 mb-4">
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-semibold text-base tracking-tight text-foreground group-hover:text-primary transition-colors">
            {name}
          </h3>
          {tag && (
            <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-muted text-muted-foreground border border-border/50">
              {tag}
            </span>
          )}
        </div>
        <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed min-h-[34px]">
          {description}
        </p>
      </div>

      {/* Stylized Miniature Preview Canvas */}
      <div className="relative h-36 sm:h-40 w-full rounded-xl border border-zinc-100 dark:border-zinc-800/80 bg-zinc-50/70 dark:bg-zinc-900/50 flex items-center justify-center p-4 overflow-hidden group-hover:bg-zinc-100/60 dark:group-hover:bg-zinc-900/80 transition-colors">
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
            <div className="h-2 w-16 rounded-full bg-zinc-400 dark:bg-zinc-600 font-semibold" />
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
        <div className="px-5 py-2 rounded-xl bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 shadow-sm flex items-center justify-center">
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
          <div className="h-2.5 w-16 rounded-full bg-zinc-400 dark:bg-zinc-600 font-semibold" />
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
            <span className="h-1.5 w-14 rounded-full bg-foreground font-semibold block" />
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
            <div className="h-2 w-16 rounded-full bg-zinc-700 dark:bg-zinc-300 font-semibold" />
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

    // Specialized UI Components
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

    default:
      return (
        <div className="rounded-lg border border-zinc-200/80 dark:border-zinc-800 bg-background p-3 shadow-xs space-y-2">
          <span className="h-2 w-16 rounded-full bg-zinc-400 dark:bg-zinc-600 block" />
          <span className="h-1.5 w-24 rounded-full bg-zinc-200 dark:bg-zinc-800 block" />
        </div>
      );
  }
}
