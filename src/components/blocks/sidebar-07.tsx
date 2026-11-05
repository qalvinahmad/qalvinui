"use client";

import React, { useState } from "react";
import {
  LayoutDashboard,
  Users,
  Settings,
  ChevronLeft,
  ChevronRight,
  PieChart,
  FolderGit2,
  Bell,
  LogOut,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

export interface Sidebar07Props {
  className?: string;
  forceMode?: "desktop" | "tablet" | "mobile";
}

export function Sidebar07({ className, forceMode }: Sidebar07Props) {
  const isMobile = forceMode === "mobile";
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState("dashboard");

  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "projects", label: "Projects", icon: FolderGit2, badge: "3" },
    { id: "analytics", label: "Analytics", icon: PieChart },
    { id: "team", label: "Team Members", icon: Users },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <div
      className={cn(
        "rounded-xl border bg-background shadow-sm overflow-hidden flex min-h-[420px]",
        isMobile ? "flex-col" : "flex-row",
        className
      )}
    >
      {/* Dynamic Collapsible Sidebar Rail */}
      <div
        className={cn(
          "border-r bg-muted/15 flex flex-col justify-between transition-all duration-300 relative",
          isMobile
            ? "w-full border-b border-r-0 p-3 flex-row items-center justify-between"
            : isCollapsed
            ? "w-16 p-3 items-center"
            : "w-56 p-4"
        )}
      >
        <div className="flex flex-col gap-5 w-full">
          {/* Header Brand & Collapse Toggle */}
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-2.5 overflow-hidden">
              <div className="h-8 w-8 rounded-lg border border-foreground/30 flex items-center justify-center bg-foreground text-background font-bold text-xs shrink-0 shadow-2xs">
                A
              </div>
              {!isCollapsed && !isMobile && (
                <div className="flex flex-col min-w-0">
                  <span className="font-semibold text-sm truncate leading-tight">Acme Studio</span>
                  <span className="text-[10px] text-muted-foreground truncate">Enterprise Hub</span>
                </div>
              )}
            </div>

            {!isMobile && (
              <button
                onClick={() => setIsCollapsed(!isCollapsed)}
                className="h-6 w-6 rounded-md hover:bg-muted text-muted-foreground hover:text-foreground flex items-center justify-center cursor-pointer transition-colors"
                title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
              >
                {isCollapsed ? <ChevronRight className="h-3.5 w-3.5" /> : <ChevronLeft className="h-3.5 w-3.5" />}
              </button>
            )}
          </div>

          {/* Navigation Links */}
          <nav className={cn("flex w-full gap-1", isMobile ? "flex-row" : "flex-col")}>
            {navItems.map(({ id, label, icon: Icon, badge }) => {
              const isActive = activeItem === id;
              return (
                <button
                  key={id}
                  onClick={() => setActiveItem(id)}
                  title={isCollapsed ? label : undefined}
                  className={cn(
                    "flex items-center rounded-lg text-sm font-medium transition-colors cursor-pointer",
                    isCollapsed
                      ? "h-10 w-10 justify-center mx-auto"
                      : "px-3 py-2 justify-between w-full",
                    isActive
                      ? "bg-foreground text-background font-semibold"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                  )}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <Icon className="h-4 w-4 shrink-0" />
                    {!isCollapsed && !isMobile && <span className="truncate">{label}</span>}
                  </div>
                  {!isCollapsed && !isMobile && badge && (
                    <span
                      className={cn(
                        "text-[10px] px-1.5 py-0.2 rounded-full font-bold font-mono",
                        isActive ? "bg-background/20 text-background" : "bg-muted text-foreground"
                      )}
                    >
                      {badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* User Footer Profile */}
        {!isMobile && (
          <div className="pt-4 border-t w-full flex items-center justify-between">
            <div className="flex items-center gap-2 min-w-0">
              <div className="h-7 w-7 rounded-full bg-muted border flex items-center justify-center font-bold text-[10px] shrink-0">
                JD
              </div>
              {!isCollapsed && (
                <div className="flex flex-col min-w-0">
                  <span className="text-xs font-semibold truncate leading-none">Jane Doe</span>
                  <span className="text-[10px] text-muted-foreground truncate">jane@acme.com</span>
                </div>
              )}
            </div>
            {!isCollapsed && (
              <button
                onClick={() => toast.info("Signing out...")}
                className="text-muted-foreground hover:text-destructive cursor-pointer p-1"
                title="Log out"
              >
                <LogOut className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
        )}
      </div>

      {/* Main Preview Container */}
      <div className="flex-1 p-6 flex flex-col gap-4 bg-muted/5">
        <div className="flex items-center justify-between border-b pb-3">
          <h4 className="font-semibold text-sm capitalize">{activeItem} Viewport</h4>
          <span className="text-xs text-muted-foreground">
            {isCollapsed ? "Sidebar: Collapsed (64px)" : "Sidebar: Expanded (224px)"}
          </span>
        </div>

        <div className="flex gap-4">
          <div className="h-28 flex-1 rounded-xl border bg-card/80 p-4 shadow-2xs flex flex-col justify-between">
            <span className="text-xs text-muted-foreground">Active Workflows</span>
            <span className="text-2xl font-bold font-mono">18</span>
          </div>
          <div className="h-28 flex-1 rounded-xl border bg-card/80 p-4 shadow-2xs flex flex-col justify-between">
            <span className="text-xs text-muted-foreground">Team Velocity</span>
            <span className="text-2xl font-bold font-mono text-emerald-600 dark:text-emerald-400">98.4%</span>
          </div>
          <div className="h-28 flex-1 rounded-xl border bg-card/80 p-4 shadow-2xs flex flex-col justify-between hidden sm:flex">
            <span className="text-xs text-muted-foreground">Deploy Status</span>
            <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-full w-fit">
              All Systems Nominal
            </span>
          </div>
        </div>

        <div className="flex-1 rounded-xl border bg-card/60 min-h-[140px] p-4 flex items-center justify-center text-xs text-muted-foreground">
          Workspace dashboard view for {activeItem}. Toggle the sidebar left arrow to test rail collapse.
        </div>
      </div>
    </div>
  );
}

export default Sidebar07;
