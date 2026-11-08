"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Zap,
  Shield,
  Layers,
  ChevronRight,
  TrendingUp,
  Star,
  Users,
  Code2,
  Terminal,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

interface TemplateProps {
  primaryColor?: string;
  fontFamily?: string;
}

export function LandingPageTemplate({
  primaryColor = "#2563eb",
  fontFamily,
}: TemplateProps) {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <div
      className="w-full bg-background text-foreground transition-colors selection:bg-primary/20"
      style={fontFamily ? { fontFamily } : undefined}
    >
      {/* Mini Top Banner */}
      <div
        className="w-full py-2 px-4 text-center text-xs font-medium text-white transition-colors"
        style={{ backgroundColor: primaryColor }}
      >
        <span className="inline-flex items-center gap-1.5">
          <Sparkles className="size-3.5" />
          <span>Qalvin UI v2.0 is live with Base UI primitives & Tailwind v4</span>
          <ArrowRight className="size-3" />
        </span>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 pt-16 pb-20 md:px-8 md:pt-24 md:pb-28">
        <div className="mx-auto max-w-5xl text-center">
          <Badge
            variant="outline"
            className="mb-6 inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-xs font-semibold backdrop-blur-md"
          >
            <span
              className="size-2 rounded-full animate-pulse"
              style={{ backgroundColor: primaryColor }}
            />
            Production-Ready Component System
          </Badge>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">
            Build software that{" "}
            <span
              className="bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground/90 to-muted-foreground"
              style={{
                backgroundImage: `linear-gradient(135deg, var(--foreground) 30%, ${primaryColor} 100%)`,
              }}
            >
              feels right.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg md:text-xl leading-relaxed">
            Accessible, animated, and customizable UI components crafted with Base UI,
            framer-motion, and modern design engineering. Copy, paste, and ship faster.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
            <Button
              size="lg"
              className="h-11 px-6 font-semibold shadow-md text-white transition-all hover:opacity-95 active:scale-95"
              style={{ backgroundColor: primaryColor }}
            >
              Get Started Free <ArrowRight className="size-4 ml-1.5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-11 px-6 font-medium shadow-2xs hover:bg-muted/60"
            >
              <Terminal className="size-4 mr-1.5 text-muted-foreground" />
              pnpm dlx qalvinui add
            </Button>
          </div>

          {/* Metric / Stat Strip */}
          <div className="mt-14 grid grid-cols-2 gap-4 border-y border-border/60 py-6 sm:grid-cols-4">
            <div>
              <div className="text-2xl font-bold tracking-tight sm:text-3xl">100+</div>
              <div className="text-xs text-muted-foreground mt-0.5">Crafted Components</div>
            </div>
            <div>
              <div className="text-2xl font-bold tracking-tight sm:text-3xl">99.9%</div>
              <div className="text-xs text-muted-foreground mt-0.5">Accessible & WCAG</div>
            </div>
            <div>
              <div className="text-2xl font-bold tracking-tight sm:text-3xl">&lt; 10ms</div>
              <div className="text-xs text-muted-foreground mt-0.5">Interaction Latency</div>
            </div>
            <div>
              <div className="text-2xl font-bold tracking-tight sm:text-3xl">25k+</div>
              <div className="text-xs text-muted-foreground mt-0.5">Developers Active</div>
            </div>
          </div>
        </div>

        {/* Hero Interactive Preview Card */}
        <div className="mx-auto mt-12 max-w-5xl rounded-2xl border border-border/80 bg-card/60 p-2 shadow-2xl backdrop-blur-xl sm:p-4">
          <div className="rounded-xl border border-border/60 bg-background/95 p-6 shadow-inner">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/50 pb-4">
              <div className="flex items-center gap-2">
                <span className="size-3 rounded-full bg-red-500/80" />
                <span className="size-3 rounded-full bg-yellow-500/80" />
                <span className="size-3 rounded-full bg-green-500/80" />
                <span className="ml-2 text-xs font-mono text-muted-foreground">app.qalvinui.com/analytics</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="text-[11px]">Real-time</Badge>
                <div
                  className="size-2 rounded-full animate-ping"
                  style={{ backgroundColor: primaryColor }}
                />
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="border-border/60 shadow-2xs">
                <CardHeader className="p-4 pb-2">
                  <CardDescription className="text-xs">Monthly Recurring Revenue</CardDescription>
                  <CardTitle className="text-2xl font-bold">$48,250.00</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                    <TrendingUp className="size-3.5" /> +18.4% from last month
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/60 shadow-2xs">
                <CardHeader className="p-4 pb-2">
                  <CardDescription className="text-xs">Active Subscriptions</CardDescription>
                  <CardTitle className="text-2xl font-bold">1,842</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                    <TrendingUp className="size-3.5" /> +120 new this week
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/60 shadow-2xs">
                <CardHeader className="p-4 pb-2">
                  <CardDescription className="text-xs">Net Promoter Score</CardDescription>
                  <CardTitle className="text-2xl font-bold">78 / 100</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
                    <Star className="size-3.5 text-amber-500 fill-amber-500" /> Top 5% in industry
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Bento Grid */}
      <section className="border-t border-border/60 bg-muted/20 px-4 py-20 md:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <Badge variant="outline" className="mb-3">Architected for Craft</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Everything you need to ship world-class UI
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground sm:text-base">
              Every detail is engineered: spring physics, accessible keyboard navigation,
              zero layout thrashing, and strict type safety.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-border/70 p-6 md:col-span-2 shadow-xs">
              <div
                className="size-10 rounded-xl flex items-center justify-center text-white mb-4"
                style={{ backgroundColor: primaryColor }}
              >
                <Layers className="size-5" />
              </div>
              <h3 className="text-lg font-bold text-foreground">Base UI Unstyled Primitives</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Clean, unstyled, composable React 19 primitives with full keyboard navigation,
                screen reader announcements, and robust focus traps built from the ground up.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <Badge variant="secondary">Combobox</Badge>
                <Badge variant="secondary">Segmented Control</Badge>
                <Badge variant="secondary">Dialog</Badge>
                <Badge variant="secondary">Accordion</Badge>
                <Badge variant="secondary">Number Field</Badge>
              </div>
            </Card>

            <Card className="border-border/70 p-6 shadow-xs">
              <div
                className="size-10 rounded-xl flex items-center justify-center text-white mb-4"
                style={{ backgroundColor: primaryColor }}
              >
                <Zap className="size-5" />
              </div>
              <h3 className="text-lg font-bold text-foreground">Fluid Spring Motion</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Natural physics calibrated for responsiveness with Emil Kowalski motion principles
                and automatic prefers-reduced-motion fallbacks.
              </p>
            </Card>

            <Card className="border-border/70 p-6 shadow-xs">
              <div
                className="size-10 rounded-xl flex items-center justify-center text-white mb-4"
                style={{ backgroundColor: primaryColor }}
              >
                <Shield className="size-5" />
              </div>
              <h3 className="text-lg font-bold text-foreground">Design Token Harmony</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Color-mix OKLCH palettes, optical typography scales, and modular border radius tokens.
              </p>
            </Card>

            <Card className="border-border/70 p-6 md:col-span-2 shadow-xs">
              <div
                className="size-10 rounded-xl flex items-center justify-center text-white mb-4"
                style={{ backgroundColor: primaryColor }}
              >
                <Code2 className="size-5" />
              </div>
              <h3 className="text-lg font-bold text-foreground">Zero Runtime CLI Registry</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Add code directly into your repository with one command. No heavy black-box dependencies.
                You own 100% of the code.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="px-4 py-20 md:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <Badge variant="outline" className="mb-3">Pricing</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Simple, transparent pricing
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground sm:text-base">
              Start building for free today. Upgrade when you need unlimited blocks and team collaboration.
            </p>

            {/* Billing Toggle */}
            <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-border/80 bg-muted/40 p-1.5 shadow-2xs">
              <button
                type="button"
                onClick={() => setIsAnnual(false)}
                className={`rounded-full px-3 py-1 text-xs font-semibold transition-all ${
                  !isAnnual ? "bg-background text-foreground shadow-2xs" : "text-muted-foreground"
                }`}
              >
                Monthly
              </button>
              <button
                type="button"
                onClick={() => setIsAnnual(true)}
                className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold transition-all ${
                  isAnnual ? "bg-background text-foreground shadow-2xs" : "text-muted-foreground"
                }`}
              >
                Annual <span className="text-[10px] text-emerald-600 font-bold">Save 20%</span>
              </button>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Tier 1 */}
            <Card className="border-border/70 p-6 flex flex-col justify-between shadow-xs">
              <div>
                <h3 className="text-base font-bold">Starter</h3>
                <p className="text-xs text-muted-foreground mt-1">For hobbyists and indie hackers.</p>
                <div className="mt-6">
                  <span className="text-4xl font-extrabold">$0</span>
                  <span className="text-xs text-muted-foreground ml-1">/ forever</span>
                </div>
                <ul className="mt-6 space-y-2.5 text-xs text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 text-emerald-500" /> Access to 50+ Core UI primitives
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 text-emerald-500" /> CLI component installer
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 text-emerald-500" /> Community support on Discord
                  </li>
                </ul>
              </div>
              <Button variant="outline" className="mt-8 w-full font-semibold">
                Start Free
              </Button>
            </Card>

            {/* Tier 2 (Highlighted) */}
            <Card
              className="relative border-2 p-6 flex flex-col justify-between shadow-xl"
              style={{ borderColor: primaryColor }}
            >
              <div
                className="absolute -top-3 right-6 rounded-full px-2.5 py-0.5 text-[10px] font-bold text-white uppercase tracking-wider shadow-sm"
                style={{ backgroundColor: primaryColor }}
              >
                Most Popular
              </div>
              <div>
                <h3 className="text-base font-bold">Pro Developer</h3>
                <p className="text-xs text-muted-foreground mt-1">For freelancers and professional teams.</p>
                <div className="mt-6">
                  <span className="text-4xl font-extrabold">
                    {isAnnual ? "$19" : "$24"}
                  </span>
                  <span className="text-xs text-muted-foreground ml-1">/ month</span>
                </div>
                <ul className="mt-6 space-y-2.5 text-xs text-foreground">
                  <li className="flex items-center gap-2 font-medium">
                    <CheckCircle2 className="size-4" style={{ color: primaryColor }} /> All 100+ Components & Blocks
                  </li>
                  <li className="flex items-center gap-2 font-medium">
                    <CheckCircle2 className="size-4" style={{ color: primaryColor }} /> Full Template Suite (Admin, CRM, SaaS)
                  </li>
                  <li className="flex items-center gap-2 font-medium">
                    <CheckCircle2 className="size-4" style={{ color: primaryColor }} /> Figma Design Kit & Tokens
                  </li>
                  <li className="flex items-center gap-2 font-medium">
                    <CheckCircle2 className="size-4" style={{ color: primaryColor }} /> Lifetime updates & priority support
                  </li>
                </ul>
              </div>
              <Button
                className="mt-8 w-full font-semibold text-white shadow-md hover:opacity-95"
                style={{ backgroundColor: primaryColor }}
              >
                Upgrade to Pro
              </Button>
            </Card>

            {/* Tier 3 */}
            <Card className="border-border/70 p-6 flex flex-col justify-between shadow-xs">
              <div>
                <h3 className="text-base font-bold">Enterprise</h3>
                <p className="text-xs text-muted-foreground mt-1">For organizations building at scale.</p>
                <div className="mt-6">
                  <span className="text-4xl font-extrabold">
                    {isAnnual ? "$89" : "$99"}
                  </span>
                  <span className="text-xs text-muted-foreground ml-1">/ month</span>
                </div>
                <ul className="mt-6 space-y-2.5 text-xs text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 text-emerald-500" /> Unlimited team seats
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 text-emerald-500" /> Custom component audits & SLA
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 text-emerald-500" /> Dedicated engineering contact
                  </li>
                </ul>
              </div>
              <Button variant="outline" className="mt-8 w-full font-semibold">
                Contact Sales
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer Banner */}
      <footer className="border-t border-border/60 py-10 px-4 text-center text-xs text-muted-foreground">
        <p>© 2026 Qalvin UI. Open source primitives under MIT License.</p>
      </footer>
    </div>
  );
}
