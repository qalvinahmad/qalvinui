"use client";

import { useState } from "react";
import {
  Users,
  Building2,
  DollarSign,
  TrendingUp,
  Plus,
  Search,
  Filter,
  Phone,
  Mail,
  Calendar,
  MoreVertical,
  CheckCircle2,
  Clock,
  ArrowRight,
  Sparkles,
  Tag,
  Kanban,
  ListFilter,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";

interface TemplateProps {
  primaryColor?: string;
  fontFamily?: string;
}

interface Deal {
  id: string;
  title: string;
  company: string;
  amount: number;
  contact: string;
  avatar: string;
  stage: "lead" | "contacted" | "proposal" | "won";
  score: number;
}

export function CRMTemplate({
  primaryColor = "#2563eb",
  fontFamily,
}: TemplateProps) {
  const [viewMode, setViewMode] = useState<"pipeline" | "contacts">("pipeline");
  const [searchQuery, setSearchQuery] = useState("");

  const deals: Deal[] = [
    {
      id: "D-101",
      title: "Design System Enterprise License",
      company: "Acme Cloud Inc.",
      amount: 48000,
      contact: "Sarah Jenkins",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
      stage: "lead",
      score: 85,
    },
    {
      id: "D-102",
      title: "Custom Component Migration",
      company: "Stark Industries",
      amount: 32000,
      contact: "Tony Rossi",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
      stage: "lead",
      score: 72,
    },
    {
      id: "D-103",
      title: "Global FinTech UI Portal",
      company: "Apex Capital Partners",
      amount: 95000,
      contact: "Elena Rostova",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100",
      stage: "contacted",
      score: 94,
    },
    {
      id: "D-104",
      title: "Mobile App Component Architecture",
      company: "Nordic Health Group",
      amount: 24500,
      contact: "Lars Lindqvist",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
      stage: "contacted",
      score: 68,
    },
    {
      id: "D-105",
      title: "Next.js 16 + Base UI Monorepo",
      company: "VentureScale Labs",
      amount: 62000,
      contact: "Marcus Chen",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100",
      stage: "proposal",
      score: 91,
    },
    {
      id: "D-106",
      title: "Multi-tenant Dashboard Framework",
      company: "OmniCorp Worldwide",
      amount: 110000,
      contact: "Jessica Miller",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100",
      stage: "won",
      score: 99,
    },
  ];

  const columns = [
    { key: "lead", label: "Qualified Lead", count: 2, total: "$80,000" },
    { key: "contacted", label: "Meeting / Discovery", count: 2, total: "$119,500" },
    { key: "proposal", label: "Proposal Sent", count: 1, total: "$62,000" },
    { key: "won", label: "Closed Won", count: 1, total: "$110,000" },
  ];

  return (
    <div
      className="flex min-h-[850px] w-full flex-col bg-muted/20 text-foreground transition-colors"
      style={fontFamily ? { fontFamily } : undefined}
    >
      {/* CRM Navigation Sub-header */}
      <header className="border-b border-border/70 bg-card/80 backdrop-blur px-6 py-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div
              className="size-9 rounded-xl flex items-center justify-center text-white shadow-xs font-bold"
              style={{ backgroundColor: primaryColor }}
            >
              <Users className="size-5" />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight">Sales CRM & Pipelines</h1>
              <p className="text-xs text-muted-foreground">Manage deal flow, customer accounts, and interactions.</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            {/* View Switcher */}
            <div className="inline-flex rounded-xl border border-border/70 bg-background p-1 shadow-2xs">
              <button
                type="button"
                onClick={() => setViewMode("pipeline")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  viewMode === "pipeline"
                    ? "bg-muted text-foreground shadow-2xs"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Kanban className="size-3.5" /> Pipeline View
              </button>
              <button
                type="button"
                onClick={() => setViewMode("contacts")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  viewMode === "contacts"
                    ? "bg-muted text-foreground shadow-2xs"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <ListFilter className="size-3.5" /> Contact Directory
              </button>
            </div>

            <Button
              size="sm"
              className="h-9 px-3.5 rounded-xl text-white font-medium shadow-xs"
              style={{ backgroundColor: primaryColor }}
            >
              <Plus className="size-4 mr-1.5" /> Add Deal
            </Button>
          </div>
        </div>

        {/* Quick KPI Bar */}
        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4 pt-4 border-t border-border/50">
          <div className="flex flex-col">
            <span className="text-[11px] text-muted-foreground font-medium">Total Pipeline Value</span>
            <span className="text-xl font-bold text-foreground mt-0.5">$371,500</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[11px] text-muted-foreground font-medium">Active Deals</span>
            <span className="text-xl font-bold text-foreground mt-0.5">6 Accounts</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[11px] text-muted-foreground font-medium">Win Rate</span>
            <span className="text-xl font-bold text-emerald-600 dark:text-emerald-400 mt-0.5">68.4%</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[11px] text-muted-foreground font-medium">Avg Sales Cycle</span>
            <span className="text-xl font-bold text-foreground mt-0.5">18 Days</span>
          </div>
        </div>
      </header>

      {/* Main CRM Area */}
      <main className="p-6 md:p-8 flex-1">
        {/* Search & Filter Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="relative w-full sm:w-72">
            <Search className="size-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search deals, company, contacts..."
              className="w-full h-9 pl-9 pr-3 rounded-xl border border-border/70 bg-card text-xs outline-none focus:ring-2 focus:ring-primary/20 shadow-2xs"
            />
          </div>

          <div className="flex items-center gap-2">
            <Badge variant="outline" className="h-8 px-2.5 text-xs font-normal">
              Stage: All
            </Badge>
            <Badge variant="outline" className="h-8 px-2.5 text-xs font-normal">
              Owner: Alvin Ahmad
            </Badge>
          </div>
        </div>

        {viewMode === "pipeline" ? (
          /* Kanban Board */
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 items-start">
            {columns.map((col) => {
              const stageDeals = deals.filter((d) => d.stage === col.key);

              return (
                <div key={col.key} className="flex flex-col gap-3 rounded-2xl border border-border/70 bg-card/60 p-3 shadow-2xs">
                  {/* Column Header */}
                  <div className="flex items-center justify-between pb-2 border-b border-border/50 px-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-foreground">{col.label}</span>
                      <Badge variant="secondary" className="size-5 rounded-full p-0 flex items-center justify-center text-[10px]">
                        {col.count}
                      </Badge>
                    </div>
                    <span className="text-[11px] font-semibold text-muted-foreground font-mono">{col.total}</span>
                  </div>

                  {/* Deals in Column */}
                  <div className="flex flex-col gap-3">
                    {stageDeals.map((deal) => (
                      <Card
                        key={deal.id}
                        className="border-border/80 bg-background p-4 shadow-2xs transition-all hover:border-foreground/30 hover:shadow-md cursor-pointer group"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <span className="text-xs font-semibold text-foreground group-hover:text-primary transition-colors">
                            {deal.title}
                          </span>
                        </div>

                        <div className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
                          <Building2 className="size-3.5 text-muted-foreground" />
                          <span>{deal.company}</span>
                        </div>

                        <div className="mt-3 flex items-center justify-between border-t border-border/40 pt-2.5">
                          <div className="flex items-center gap-2">
                            <Avatar className="size-6">
                              <AvatarImage src={deal.avatar} />
                              <AvatarFallback>{deal.contact.slice(0, 2)}</AvatarFallback>
                            </Avatar>
                            <span className="text-[11px] text-muted-foreground">{deal.contact}</span>
                          </div>
                          <span className="font-bold text-xs text-foreground font-mono">
                            ${deal.amount.toLocaleString()}
                          </span>
                        </div>

                        {/* Lead Score Progress */}
                        <div className="mt-2.5 flex items-center gap-2">
                          <Progress value={deal.score} className="h-1 flex-1" />
                          <span className="text-[10px] text-muted-foreground font-mono">{deal.score}%</span>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Contact Directory Table */
          <Card className="border-border/70 shadow-2xs overflow-hidden">
            <div className="p-4 border-b border-border/60">
              <h3 className="text-sm font-bold">All Accounts & Primary Contacts</h3>
            </div>
            <div className="divide-y divide-border/60">
              {deals.map((deal) => (
                <div key={deal.id} className="p-4 flex flex-wrap items-center justify-between gap-4 hover:bg-muted/30 transition-colors">
                  <div className="flex items-center gap-3">
                    <Avatar className="size-9">
                      <AvatarImage src={deal.avatar} />
                      <AvatarFallback>{deal.contact.slice(0, 2)}</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-foreground">{deal.contact}</span>
                      <span className="text-[11px] text-muted-foreground flex items-center gap-1.5">
                        <Building2 className="size-3" /> {deal.company}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="hidden sm:flex flex-col text-right">
                      <span className="text-xs font-mono font-bold">${deal.amount.toLocaleString()}</span>
                      <span className="text-[10px] text-muted-foreground capitalize">Stage: {deal.stage}</span>
                    </div>
                    <Badge variant={deal.stage === "won" ? "default" : "secondary"} className="capitalize">
                      {deal.stage}
                    </Badge>
                    <div className="flex items-center gap-1">
                      <Button variant="outline" size="icon" className="size-8 rounded-lg">
                        <Phone className="size-3.5" />
                      </Button>
                      <Button variant="outline" size="icon" className="size-8 rounded-lg">
                        <Mail className="size-3.5" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        )}
      </main>
    </div>
  );
}
