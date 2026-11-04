"use client";

import React from "react";
import { LayoutDashboard, Users, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Sidebar07Props {
  className?: string;
  forceMode?: "desktop" | "tablet" | "mobile";
}

export function Sidebar07({ className, forceMode }: Sidebar07Props) {
  const isMobile = forceMode === "mobile";

  return (
    <div
      className={cn(
        "rounded-xl border bg-background shadow-sm overflow-hidden flex min-h-[400px]",
        isMobile ? "flex-col" : "flex-row",
        className
      )}
    >
      <div
        className={cn(
          "border-r bg-muted/10 p-4 flex items-center gap-6",
          isMobile
            ? "w-full border-b border-r-0 flex-row justify-between"
            : "w-16 flex-col"
        )}
      >
        <div className="h-8 w-8 rounded-full border border-foreground flex items-center justify-center bg-foreground text-background font-bold text-xs shrink-0">
          A
        </div>
        <nav className={cn("flex gap-4 text-muted-foreground", isMobile ? "flex-row" : "flex-col")}>
          <button className="p-2 rounded-md bg-muted text-foreground cursor-pointer hover:bg-muted/80 transition-colors">
            <LayoutDashboard className="h-5 w-5" />
          </button>
          <button className="p-2 rounded-md hover:bg-muted hover:text-foreground cursor-pointer transition-colors">
            <Users className="h-5 w-5" />
          </button>
          <button className="p-2 rounded-md hover:bg-muted hover:text-foreground cursor-pointer transition-colors">
            <Settings className="h-5 w-5" />
          </button>
        </nav>
      </div>
      <div className="flex-1 p-6 flex flex-col gap-4 bg-muted/5">
        <div className="flex gap-4">
          <div className="h-32 flex-1 rounded-xl border bg-card/60" />
          <div className="h-32 flex-1 rounded-xl border bg-card/60" />
          <div className="h-32 flex-1 rounded-xl border bg-card/60 hidden sm:block" />
        </div>
        <div className="flex-1 rounded-xl border bg-card/60 min-h-[140px]" />
      </div>
    </div>
  );
}

export default Sidebar07;
