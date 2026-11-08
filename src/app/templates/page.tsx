"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Monitor,
  Tablet,
  Smartphone,
  Copy,
  Check,
  Sparkles,
  ArrowRight,
  ExternalLink,
  Sliders,
  Layout,
  LayoutDashboard,
  Users,
  LineChart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { LandingPageTemplate } from "@/components/templates/landing-page-template";
import { AdminDashboardTemplate } from "@/components/templates/admin-dashboard-template";
import { CRMTemplate } from "@/components/templates/crm-template";
import { SaaSAnalyticsTemplate } from "@/components/templates/saas-analytics-template";

export default function TemplatesPage() {
  const [selectedTemplate, setSelectedTemplate] = useState<
    "landing" | "admin" | "crm" | "saas"
  >("landing");
  const [viewport, setViewport] = useState<"desktop" | "tablet" | "mobile">(
    "desktop"
  );
  const [copied, setCopied] = useState(false);

  const templates = [
    {
      id: "landing",
      name: "SaaS Landing Page",
      description: "High-converting marketing landing page with Hero, Bento grid, pricing switch, and proof.",
      icon: Layout,
      badge: "Popular",
    },
    {
      id: "admin",
      name: "Admin Dashboard",
      description: "Full management portal with KPI metrics, revenue charts, orders data table, and audit trail.",
      icon: LayoutDashboard,
      badge: "Production",
    },
    {
      id: "crm",
      name: "Sales CRM Pipeline",
      description: "Customer relationship manager with deal Kanban stages, contact directory, and lead scores.",
      icon: Users,
      badge: "Enterprise",
    },
    {
      id: "saas",
      name: "SaaS & Subscriptions",
      description: "Revenue intelligence cockpit with MRR/ARR gauges, plan distribution, and upgrade feed.",
      icon: LineChart,
      badge: "Analytics",
    },
  ];

  const handleCopyCode = () => {
    const importMap = {
      landing: `import { LandingPageTemplate } from "@/components/templates/landing-page-template";\n\nexport default function Page() {\n  return <LandingPageTemplate />;\n}`,
      admin: `import { AdminDashboardTemplate } from "@/components/templates/admin-dashboard-template";\n\nexport default function Page() {\n  return <AdminDashboardTemplate />;\n}`,
      crm: `import { CRMTemplate } from "@/components/templates/crm-template";\n\nexport default function Page() {\n  return <CRMTemplate />;\n}`,
      saas: `import { SaaSAnalyticsTemplate } from "@/components/templates/saas-analytics-template";\n\nexport default function Page() {\n  return <SaaSAnalyticsTemplate />;\n}`,
    };

    navigator.clipboard.writeText(importMap[selectedTemplate]);
    setCopied(true);
    toast.success("Template component snippet copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  const getViewportWidth = () => {
    switch (viewport) {
      case "mobile":
        return "max-w-[375px]";
      case "tablet":
        return "max-w-[768px]";
      default:
        return "w-full";
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-[1600px] space-y-8">
      {/* Page Header */}
      <div className="flex flex-col gap-4 border-b border-border/60 pb-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Badge variant="outline" className="mb-2">
            <Sparkles className="size-3 mr-1 text-primary" /> Application Templates
          </Badge>
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
            Production-Ready Templates
          </h1>
          <p className="mt-2 text-sm text-muted-foreground sm:text-base max-w-2xl leading-relaxed">
            Full-featured page templates built with Qalvin UI components, Base UI accessibility, and
            Tailwind CSS v4. Customize styles in the Studio or copy directly into your project.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <Link href="/create?tab=templates">
            <Button variant="outline" className="h-9 gap-1.5 rounded-xl text-xs font-semibold shadow-2xs">
              <Sliders className="size-3.5" /> Open in Studio
            </Button>
          </Link>
          <Button
            onClick={handleCopyCode}
            className="h-9 gap-1.5 rounded-xl text-xs font-semibold shadow-xs"
          >
            {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
            {copied ? "Copied Snippet" : "Copy Template Code"}
          </Button>
        </div>
      </div>

      {/* Template Selector Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {templates.map((tpl) => {
          const Icon = tpl.icon;
          const isSelected = selectedTemplate === tpl.id;

          return (
            <button
              key={tpl.id}
              type="button"
              onClick={() => setSelectedTemplate(tpl.id as any)}
              className={`flex flex-col text-left p-4 rounded-2xl border transition-all cursor-pointer relative ${
                isSelected
                  ? "border-primary bg-primary/5 shadow-md ring-1 ring-primary/30"
                  : "border-border/70 bg-card hover:bg-muted/40 hover:border-border shadow-2xs"
              }`}
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                <div
                  className={`size-8 rounded-lg flex items-center justify-center transition-colors ${
                    isSelected ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"
                  }`}
                >
                  <Icon className="size-4" />
                </div>
                <Badge variant="secondary" className="text-[10px]">
                  {tpl.badge}
                </Badge>
              </div>
              <span className="text-sm font-bold text-foreground">{tpl.name}</span>
              <p className="mt-1 text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                {tpl.description}
              </p>
            </button>
          );
        })}
      </div>

      {/* Interactive Viewport Control Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border/70 bg-muted/30 p-2 shadow-2xs">
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => setViewport("desktop")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              viewport === "desktop"
                ? "bg-background text-foreground shadow-2xs"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Monitor className="size-3.5" /> Desktop (100%)
          </button>
          <button
            type="button"
            onClick={() => setViewport("tablet")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              viewport === "tablet"
                ? "bg-background text-foreground shadow-2xs"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Tablet className="size-3.5" /> Tablet (768px)
          </button>
          <button
            type="button"
            onClick={() => setViewport("mobile")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              viewport === "mobile"
                ? "bg-background text-foreground shadow-2xs"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Smartphone className="size-3.5" /> Mobile (375px)
          </button>
        </div>

        <div className="flex items-center gap-2 px-2 text-xs text-muted-foreground">
          <span>Active Template:</span>
          <span className="font-semibold text-foreground capitalize">{selectedTemplate}</span>
        </div>
      </div>

      {/* Main Canvas Viewport Container */}
      <div className="flex justify-center rounded-2xl border border-border/80 bg-zinc-950/5 dark:bg-zinc-950/40 p-4 sm:p-6 min-h-[900px] overflow-x-auto shadow-inner">
        <div
          className={`w-full transition-all duration-300 rounded-2xl border border-border/80 bg-background shadow-2xl overflow-hidden ${getViewportWidth()}`}
        >
          {selectedTemplate === "landing" && <LandingPageTemplate />}
          {selectedTemplate === "admin" && <AdminDashboardTemplate />}
          {selectedTemplate === "crm" && <CRMTemplate />}
          {selectedTemplate === "saas" && <SaaSAnalyticsTemplate />}
        </div>
      </div>
    </div>
  );
}
