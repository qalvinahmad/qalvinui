"use client";

import { useState } from "react";
import {
  TrendingUp,
  CreditCard,
  Zap,
  ArrowUpRight,
  ArrowDownRight,
  Shield,
  Layers,
  Sparkles,
  PieChart,
  Activity,
  CheckCircle2,
  RefreshCw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface TemplateProps {
  primaryColor?: string;
  fontFamily?: string;
}

export function SaaSAnalyticsTemplate({
  primaryColor = "#2563eb",
  fontFamily,
}: TemplateProps) {
  const [billingCycle, setBillingCycle] = useState("annual");

  const planTiers = [
    { name: "Starter Tier ($0/mo)", count: 3200, pct: 45, color: "#71717a" },
    { name: "Pro Tier ($19/mo)", count: 2450, pct: 38, color: primaryColor },
    { name: "Enterprise ($89/mo)", count: 420, pct: 17, color: "#10b981" },
  ];

  return (
    <div
      className="flex min-h-[850px] w-full flex-col bg-muted/20 text-foreground transition-colors p-6 md:p-8 space-y-6"
      style={fontFamily ? { fontFamily } : undefined}
    >
      {/* Top Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/60 pb-5">
        <div>
          <Badge variant="outline" className="mb-1 text-xs">SaaS Operations</Badge>
          <h1 className="text-2xl font-bold tracking-tight">Revenue & Subscription Analytics</h1>
          <p className="text-xs text-muted-foreground mt-0.5">
            Key metrics covering Monthly Recurring Revenue, cohort retention, and tier upgrades.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="h-9 gap-1.5 rounded-xl text-xs">
            <RefreshCw className="size-3.5" /> Refresh Real-time
          </Button>
          <Button
            size="sm"
            className="h-9 px-4 rounded-xl text-white font-medium shadow-xs"
            style={{ backgroundColor: primaryColor }}
          >
            Download P&L
          </Button>
        </div>
      </div>

      {/* 4 SaaS Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="border-border/70 p-5 shadow-2xs">
          <span className="text-xs text-muted-foreground font-medium">Monthly Recurring Revenue (MRR)</span>
          <div className="mt-2 text-3xl font-extrabold tracking-tight">$42,850.00</div>
          <div className="mt-1 flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
            <ArrowUpRight className="size-3.5" /> +18.2% vs last month
          </div>
        </Card>

        <Card className="border-border/70 p-5 shadow-2xs">
          <span className="text-xs text-muted-foreground font-medium">Annual Run Rate (ARR)</span>
          <div className="mt-2 text-3xl font-extrabold tracking-tight">$514,200.00</div>
          <div className="mt-1 flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
            <ArrowUpRight className="size-3.5" /> On track for $650k target
          </div>
        </Card>

        <Card className="border-border/70 p-5 shadow-2xs">
          <span className="text-xs text-muted-foreground font-medium">Gross Logo Churn Rate</span>
          <div className="mt-2 text-3xl font-extrabold tracking-tight">1.18%</div>
          <div className="mt-1 flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
            <ArrowDownRight className="size-3.5" /> -0.3% improvement
          </div>
        </Card>

        <Card className="border-border/70 p-5 shadow-2xs">
          <span className="text-xs text-muted-foreground font-medium">Average Revenue Per User (ARPU)</span>
          <div className="mt-2 text-3xl font-extrabold tracking-tight">$34.50</div>
          <div className="mt-1 flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
            <ArrowUpRight className="size-3.5" /> +$4.20 expansion
          </div>
        </Card>
      </div>

      {/* Plan Distribution + Live Meter */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="border-border/70 p-6 lg:col-span-2 shadow-2xs">
          <CardTitle className="text-base font-bold">Active Subscriptions by Tier</CardTitle>
          <CardDescription className="text-xs">Breakdown of paying accounts across customer tiers</CardDescription>

          <div className="mt-6 space-y-5">
            {planTiers.map((tier) => (
              <div key={tier.name} className="space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span className="font-semibold text-foreground">{tier.name}</span>
                  <span className="text-muted-foreground font-mono font-medium">
                    {tier.count.toLocaleString()} seats ({tier.pct}%)
                  </span>
                </div>
                <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all"
                    style={{ width: `${tier.pct}%`, backgroundColor: tier.color }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 border-t border-border/50 pt-4 flex flex-wrap gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full" style={{ backgroundColor: "#71717a" }} />
              Free Hobbyist
            </div>
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full" style={{ backgroundColor: primaryColor }} />
              Pro Developer
            </div>
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full" style={{ backgroundColor: "#10b981" }} />
              Enterprise Teams
            </div>
          </div>
        </Card>

        {/* Live Infrastructure Gauge Card */}
        <Card className="border-border/70 p-6 shadow-2xs flex flex-col justify-between">
          <div>
            <CardTitle className="text-base font-bold">API Compute Usage</CardTitle>
            <CardDescription className="text-xs">Current billing period query volume</CardDescription>

            <div className="mt-6 flex flex-col items-center justify-center p-4">
              <div
                className="size-28 rounded-full border-4 flex flex-col items-center justify-center shadow-inner"
                style={{ borderColor: primaryColor }}
              >
                <span className="text-3xl font-extrabold">64%</span>
                <span className="text-[10px] text-muted-foreground uppercase font-semibold">Allocated</span>
              </div>
              <p className="mt-4 text-xs text-center text-muted-foreground">
                6.4M of 10.0M monthly fast Edge requests consumed.
              </p>
            </div>
          </div>

          <Button variant="outline" className="w-full text-xs font-semibold">
            Manage Quota & Limits
          </Button>
        </Card>
      </div>

      {/* Subscription Event Stream */}
      <Card className="border-border/70 shadow-2xs overflow-hidden">
        <div className="p-5 border-b border-border/60">
          <CardTitle className="text-base font-bold">Real-time Upgrades & Activations</CardTitle>
          <CardDescription className="text-xs">Live webhook events from Stripe & LemonSqueezy</CardDescription>
        </div>
        <div className="divide-y divide-border/60 text-xs">
          <div className="p-4 flex items-center justify-between hover:bg-muted/30 transition-colors">
            <div className="flex items-center gap-3">
              <span className="size-2 rounded-full bg-emerald-500" />
              <div>
                <span className="font-semibold text-foreground">Acme Corp upgraded to Enterprise</span>
                <p className="text-[11px] text-muted-foreground">15 seats added • $1,068.00 / yr</p>
              </div>
            </div>
            <span className="text-[11px] text-muted-foreground">2 mins ago</span>
          </div>

          <div className="p-4 flex items-center justify-between hover:bg-muted/30 transition-colors">
            <div className="flex items-center gap-3">
              <span className="size-2 rounded-full bg-blue-500" />
              <div>
                <span className="font-semibold text-foreground">Nordic Design Studio subscribed to Pro</span>
                <p className="text-[11px] text-muted-foreground">1 seat added • $19.00 / mo</p>
              </div>
            </div>
            <span className="text-[11px] text-muted-foreground">14 mins ago</span>
          </div>

          <div className="p-4 flex items-center justify-between hover:bg-muted/30 transition-colors">
            <div className="flex items-center gap-3">
              <span className="size-2 rounded-full bg-emerald-500" />
              <div>
                <span className="font-semibold text-foreground">Cyberdyne Systems annual renewal</span>
                <p className="text-[11px] text-muted-foreground">Enterprise 50 seats • $4,200.00 / yr</p>
              </div>
            </div>
            <span className="text-[11px] text-muted-foreground">1 hour ago</span>
          </div>
        </div>
      </Card>
    </div>
  );
}
