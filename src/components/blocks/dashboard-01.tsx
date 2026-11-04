"use client";

import React from "react";
import { LayoutDashboard, RotateCw, PieChart, FileText, Users } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Dashboard01Props {
  className?: string;
  forceMode?: "desktop" | "tablet" | "mobile";
}

export function Dashboard01({ className, forceMode }: Dashboard01Props) {
  const isMobile = forceMode === "mobile";

  return (
    <div
      className={cn(
        "rounded-xl border bg-background shadow-sm overflow-hidden flex min-h-[480px]",
        isMobile ? "flex-col" : "flex-col md:flex-row",
        className
      )}
    >
      {/* Sidebar */}
      <div
        className={cn(
          "border-r bg-muted/20 p-4 flex flex-col gap-6",
          isMobile ? "w-full border-b border-r-0" : "w-full md:w-64"
        )}
      >
        <div className="flex items-center gap-2 font-semibold">
          <div className="h-6 w-6 rounded-full border border-foreground flex items-center justify-center">
            <div className="h-3 w-3 rounded-full bg-foreground" />
          </div>
          Acme Inc.
        </div>
        <button className="w-full rounded-md bg-foreground text-background py-2 text-sm font-medium flex items-center justify-between px-3 cursor-pointer hover:bg-foreground/90 transition-colors">
          Quick Create <span className="h-4 w-4 bg-background/20 rounded flex items-center justify-center text-[10px]">+</span>
        </button>
        <nav className="flex flex-col gap-1 text-sm font-medium text-muted-foreground">
          <a href="#" className="flex items-center gap-2 text-foreground bg-muted p-2 rounded-md">
            <LayoutDashboard className="h-4 w-4" /> Dashboard
          </a>
          <a href="#" className="flex items-center gap-2 p-2 hover:text-foreground hover:bg-muted/50 rounded-md">
            <RotateCw className="h-4 w-4" /> Lifecycle
          </a>
          <a href="#" className="flex items-center gap-2 p-2 hover:text-foreground hover:bg-muted/50 rounded-md">
            <PieChart className="h-4 w-4" /> Analytics
          </a>
          <a href="#" className="flex items-center gap-2 p-2 hover:text-foreground hover:bg-muted/50 rounded-md">
            <FileText className="h-4 w-4" /> Projects
          </a>
          <a href="#" className="flex items-center gap-2 p-2 hover:text-foreground hover:bg-muted/50 rounded-md">
            <Users className="h-4 w-4" /> Team
          </a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 flex flex-col gap-6 bg-muted/5">
        <div className="flex items-center justify-between border-b pb-4">
          <div className="flex items-center gap-4 text-sm font-medium">
            <span className="flex items-center gap-2">
              <FileText className="h-4 w-4" /> Documents
            </span>
          </div>
          <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">Q1 2026</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-card p-5 shadow-xs flex flex-col gap-3">
            <div className="flex justify-between items-center text-sm">
              <span className="text-muted-foreground">Total Revenue</span>
              <span className="text-emerald-500 font-semibold text-xs">+12.5%</span>
            </div>
            <div className="text-2xl md:text-3xl font-bold">$1,250.00</div>
          </div>
          <div className="rounded-xl border bg-card p-5 shadow-xs flex flex-col gap-3">
            <div className="flex justify-between items-center text-sm">
              <span className="text-muted-foreground">New Customers</span>
              <span className="text-rose-500 font-semibold text-xs">-2.4%</span>
            </div>
            <div className="text-2xl md:text-3xl font-bold">1,234</div>
          </div>
          <div className="rounded-xl border bg-card p-5 shadow-xs flex flex-col gap-3">
            <div className="flex justify-between items-center text-sm">
              <span className="text-muted-foreground">Active Accounts</span>
              <span className="text-emerald-500 font-semibold text-xs">+18.2%</span>
            </div>
            <div className="text-2xl md:text-3xl font-bold">45,678</div>
          </div>
          <div className="rounded-xl border bg-card p-5 shadow-xs flex flex-col gap-3">
            <div className="flex justify-between items-center text-sm">
              <span className="text-muted-foreground">Growth Rate</span>
              <span className="text-emerald-500 font-semibold text-xs">+4.5%</span>
            </div>
            <div className="text-2xl md:text-3xl font-bold">4.5%</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard01;
