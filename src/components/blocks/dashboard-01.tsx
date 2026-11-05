"use client";

import React, { useState } from "react";
import {
  LayoutDashboard,
  RotateCw,
  PieChart,
  FileText,
  Users,
  Plus,
  X,
  TrendingUp,
  FolderPlus,
  CheckCircle2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export interface Dashboard01Props {
  className?: string;
  forceMode?: "desktop" | "tablet" | "mobile";
}

type TabType = "dashboard" | "lifecycle" | "analytics" | "projects" | "team";

export function Dashboard01({ className, forceMode }: Dashboard01Props) {
  const isMobile = forceMode === "mobile";
  const [activeTab, setActiveTab] = useState<TabType>("dashboard");
  const [isQuickCreateOpen, setIsQuickCreateOpen] = useState(false);
  const [projectName, setProjectName] = useState("");
  const [projectBudget, setProjectBudget] = useState("5000");
  const [projectsCount, setProjectsCount] = useState(12);
  const [revenue, setRevenue] = useState(1250);

  const handleCreateProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!projectName.trim()) {
      toast.error("Please enter a project name");
      return;
    }
    setProjectsCount((prev) => prev + 1);
    setRevenue((prev) => prev + Number(projectBudget || 0));
    toast.success(`Project "${projectName}" created successfully!`);
    setIsQuickCreateOpen(false);
    setProjectName("");
  };

  interface NavItem {
    id: TabType;
    label: string;
    icon: React.ComponentType<{ className?: string }>;
    badge?: number;
  }

  const navItems: NavItem[] = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "lifecycle", label: "Lifecycle", icon: RotateCw },
    { id: "analytics", label: "Analytics", icon: PieChart },
    { id: "projects", label: "Projects", icon: FileText, badge: projectsCount },
    { id: "team", label: "Team", icon: Users },
  ];

  return (
    <div
      className={cn(
        "rounded-xl border bg-background shadow-sm overflow-hidden flex min-h-[480px] relative",
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

        <button
          onClick={() => setIsQuickCreateOpen(true)}
          className="w-full rounded-md bg-foreground text-background py-2 text-sm font-medium flex items-center justify-between px-3 cursor-pointer hover:bg-foreground/90 transition-colors shadow-2xs active:scale-[0.98]"
        >
          Quick Create{" "}
          <span className="h-4 w-4 bg-background/20 rounded flex items-center justify-center text-[10px]">
            +
          </span>
        </button>

        <nav className="flex flex-col gap-1 text-sm font-medium text-muted-foreground">
          {navItems.map(({ id, label, icon: Icon, badge }) => {
            const isActive = activeTab === id;
            return (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={cn(
                  "flex items-center justify-between p-2 rounded-md transition-colors cursor-pointer text-left",
                  isActive
                    ? "text-foreground bg-muted font-semibold"
                    : "hover:text-foreground hover:bg-muted/50"
                )}
              >
                <span className="flex items-center gap-2">
                  <Icon className="h-4 w-4" /> {label}
                </span>
                {badge !== undefined && (
                  <span className="text-[10px] font-mono bg-background border px-1.5 py-0.2 rounded-full font-bold">
                    {badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-6 flex flex-col gap-6 bg-muted/5">
        <div className="flex items-center justify-between border-b pb-4">
          <div className="flex items-center gap-4 text-sm font-medium">
            <span className="flex items-center gap-2 capitalize">
              <FileText className="h-4 w-4" /> {activeTab} View
            </span>
          </div>
          <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
            Q1 2026
          </span>
        </div>

        {activeTab === "dashboard" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-xl border bg-card p-5 shadow-xs flex flex-col gap-3">
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">Total Revenue</span>
                <span className="text-emerald-500 font-semibold text-xs flex items-center gap-0.5">
                  <TrendingUp className="h-3 w-3" /> +12.5%
                </span>
              </div>
              <div className="text-2xl md:text-3xl font-bold font-mono">
                ${revenue.toLocaleString("en-US", { minimumFractionDigits: 2 })}
              </div>
            </div>

            <div className="rounded-xl border bg-card p-5 shadow-xs flex flex-col gap-3">
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">Active Projects</span>
                <span className="text-blue-500 font-semibold text-xs">Live</span>
              </div>
              <div className="text-2xl md:text-3xl font-bold font-mono">
                {projectsCount}
              </div>
            </div>

            <div className="rounded-xl border bg-card p-5 shadow-xs flex flex-col gap-3">
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">Active Accounts</span>
                <span className="text-emerald-500 font-semibold text-xs">+18.2%</span>
              </div>
              <div className="text-2xl md:text-3xl font-bold font-mono">
                45,678
              </div>
            </div>

            <div className="rounded-xl border bg-card p-5 shadow-xs flex flex-col gap-3">
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">Growth Rate</span>
                <span className="text-emerald-500 font-semibold text-xs">+4.5%</span>
              </div>
              <div className="text-2xl md:text-3xl font-bold font-mono">
                4.5%
              </div>
            </div>
          </div>
        )}

        {activeTab === "projects" && (
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <h4 className="text-sm font-semibold">Active Workspaces ({projectsCount})</h4>
              <Button size="sm" onClick={() => setIsQuickCreateOpen(true)} className="gap-1 cursor-pointer">
                <Plus className="h-3.5 w-3.5" /> New Project
              </Button>
            </div>
            <div className="border rounded-xl divide-y bg-card text-xs">
              <div className="p-3 flex justify-between items-center">
                <span className="font-medium">Design System Refactor</span>
                <span className="text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full font-medium">In Progress</span>
              </div>
              <div className="p-3 flex justify-between items-center">
                <span className="font-medium">API Microservices v3</span>
                <span className="text-blue-500 bg-blue-500/10 px-2 py-0.5 rounded-full font-medium">Review</span>
              </div>
              <div className="p-3 flex justify-between items-center">
                <span className="font-medium">Qalvin UI Component Kit</span>
                <span className="text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full font-medium">Active</span>
              </div>
            </div>
          </div>
        )}

        {activeTab !== "dashboard" && activeTab !== "projects" && (
          <div className="flex-1 flex flex-col items-center justify-center border border-dashed rounded-xl p-8 text-center text-muted-foreground">
            <CheckCircle2 className="h-8 w-8 mb-2 text-primary opacity-60" />
            <h4 className="font-semibold text-sm capitalize">{activeTab} Connected</h4>
            <p className="text-xs max-w-xs mt-1">Live metrics and telemetry are active and syncing with cloud endpoints.</p>
          </div>
        )}
      </div>

      {/* Quick Create Dialog Modal */}
      {isQuickCreateOpen && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-2xs p-4">
          <div className="w-full max-w-sm rounded-xl border bg-background p-5 shadow-xl space-y-4">
            <div className="flex items-center justify-between border-b pb-2">
              <h3 className="font-semibold text-sm flex items-center gap-1.5">
                <FolderPlus className="h-4 w-4" /> Quick Create Project
              </h3>
              <button
                onClick={() => setIsQuickCreateOpen(false)}
                className="text-muted-foreground hover:text-foreground cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <form onSubmit={handleCreateProject} className="space-y-3">
              <div className="space-y-1">
                <label className="text-xs font-medium">Project Name</label>
                <input
                  type="text"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  placeholder="e.g. Next.js Mobile App"
                  className="w-full h-8 px-2.5 text-xs rounded-md border bg-background"
                  autoFocus
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-medium">Initial Value ($)</label>
                <input
                  type="number"
                  value={projectBudget}
                  onChange={(e) => setProjectBudget(e.target.value)}
                  className="w-full h-8 px-2.5 text-xs rounded-md border bg-background"
                />
              </div>
              <div className="flex justify-end gap-2 pt-2">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => setIsQuickCreateOpen(false)}
                  className="cursor-pointer"
                >
                  Cancel
                </Button>
                <Button type="submit" size="sm" className="cursor-pointer">
                  Create Project
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard01;
