"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { ArrowRight, TrendingUp, ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";
import { ComponentCard } from "@/components/ui/component-card";

export default function Home() {
  const [selectedRadio, setSelectedRadio] = useState("option-1");
  const [switchEnabled, setSwitchEnabled] = useState(true);
  const [biometricEnabled, setBiometricEnabled] = useState(true);
  const [hoveredMonth, setHoveredMonth] = useState<number | null>(null);

  const chartData = [
    { month: "Dec", commits: 45, prs: 20 },
    { month: "Jan", commits: 75, prs: 35 },
    { month: "Feb", commits: 38, prs: 18 },
    { month: "Mar", commits: 92, prs: 48 },
    { month: "Apr", commits: 60, prs: 28 },
    { month: "May", commits: 85, prs: 42 },
  ];

  return (
    <div className="flex-1">
      <main className="container mx-auto px-4 pt-24 pb-8 flex flex-col items-center max-w-[64rem] text-center">
        <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold transition-colors border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 mb-6">
          <Link href="/docs/installation" className="flex items-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            New Questionnaire component <span className="ml-1">&rarr;</span>
          </Link>
        </div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-6">
          The Foundation for your Design System
        </h1>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8 mb-8">
          A set of beautifully designed components that you can customize, extend,
          and build on. Start here then make it your own. Open Source. Open Code.
        </p>
        <div className="space-x-4">
          <Link href="/docs/installation">
            <Button size="lg" className="rounded-full">
              Build Your Own <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </main>

      <section className="container mx-auto px-4 py-8 md:py-12 lg:py-16 max-w-[1200px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          
          {/* Card 1: Interactive Form & Controls */}
          <div className="rounded-2xl border bg-card text-card-foreground shadow-sm flex flex-col justify-between p-6">
            <div className="space-y-5">
              <div className="flex flex-wrap items-center gap-2">
                <Button size="sm" className="rounded-full">
                  Button &rarr;
                </Button>
                <Button size="sm" variant="secondary" className="rounded-full">
                  Secondary
                </Button>
                <Button size="sm" variant="outline" className="rounded-full">
                  Outline
                </Button>
              </div>

              <div className="space-y-3">
                <Input placeholder="Your Name" defaultValue="Alex Morgan" />
                <Textarea
                  placeholder="Leave a message..."
                  defaultValue="Excited to build with Qalvin UI components!"
                  rows={2}
                  className="resize-none"
                />
              </div>
            </div>

            <div className="pt-5 mt-5 border-t flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <Badge variant="default">Badge</Badge>
                <Badge variant="secondary">Secondary</Badge>
              </div>

              <div className="flex items-center gap-3">
                {/* Real Interactive Radio Group */}
                <RadioGroup
                  value={selectedRadio}
                  onValueChange={setSelectedRadio}
                  className="flex items-center gap-1.5"
                >
                  <RadioGroupItem
                    value="option-1"
                    aria-label="Option 1"
                    className="cursor-pointer"
                  />
                  <RadioGroupItem
                    value="option-2"
                    aria-label="Option 2"
                    className="cursor-pointer"
                  />
                </RadioGroup>

                {/* Real Interactive Switch */}
                <Switch
                  checked={switchEnabled}
                  onCheckedChange={setSwitchEnabled}
                  aria-label="Toggle feature"
                  className="cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Card 2: Chart with Legend & Activity */}
          <div className="rounded-2xl border bg-card text-card-foreground shadow-sm flex flex-col justify-between p-6">
            <div>
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-semibold text-base leading-none tracking-tight">
                  Contribution History
                </h3>
                <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                  <TrendingUp className="h-3 w-3" /> +24.8%
                </span>
              </div>
              <p className="text-xs text-muted-foreground mb-4">
                Activity breakdown over the last 6 months
              </p>

              {/* Chart Bars */}
              <div className="flex items-end justify-between h-[150px] gap-2 pt-4 px-1">
                {chartData.map((item, index) => {
                  const isHovered = hoveredMonth === index;
                  return (
                    <div
                      key={item.month}
                      onMouseEnter={() => setHoveredMonth(index)}
                      onMouseLeave={() => setHoveredMonth(null)}
                      className="flex-1 flex flex-col items-center gap-1 h-full justify-end group cursor-pointer"
                    >
                      <div
                        className={`text-[10px] font-semibold transition-opacity duration-200 ${
                          isHovered ? "opacity-100 text-foreground" : "opacity-0"
                        }`}
                      >
                        {item.commits}
                      </div>
                      <div className="w-full flex items-end justify-center gap-1 h-full">
                        {/* Commits Bar */}
                        <div
                          style={{ height: `${item.commits}%` }}
                          className="w-1/2 bg-primary rounded-t-sm transition-all duration-300 group-hover:brightness-110"
                        />
                        {/* PRs Bar */}
                        <div
                          style={{ height: `${item.prs}%` }}
                          className="w-1/2 bg-emerald-500/80 rounded-t-sm transition-all duration-300 group-hover:bg-emerald-500"
                        />
                      </div>
                      <span className="text-[11px] font-medium text-muted-foreground mt-1">
                        {item.month}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Chart Legend (Jelas & Muncul) */}
            <div className="mt-4 pt-3 border-t flex items-center justify-center gap-6 text-xs font-medium">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                <span className="text-muted-foreground">Commits</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                <span className="text-muted-foreground">Pull Requests</span>
              </div>
            </div>
          </div>

          {/* Card 3: Security & Session Verification (Replaces Scan to Connect) */}
          <div className="rounded-2xl border bg-card text-card-foreground shadow-sm flex flex-col justify-between p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                    <ShieldCheck className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm leading-none">Security Access</h3>
                    <p className="text-[11px] text-muted-foreground mt-0.5">Two-Factor Authentication</p>
                  </div>
                </div>
                <Badge variant="outline" className="text-[10px] text-emerald-500 border-emerald-500/30 bg-emerald-500/10">
                  <CheckCircle2 className="h-3 w-3 mr-1" /> Active
                </Badge>
              </div>

              {/* Interactive Passcode Demo */}
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-muted-foreground">
                  Verification Code
                </label>
                <div className="flex gap-2 justify-between">
                  {["8", "4", "2", "9", "1", "7"].map((digit, i) => (
                    <div
                      key={i}
                      className="h-10 w-9 rounded-lg border border-input bg-muted/30 flex items-center justify-center font-mono font-bold text-sm shadow-2xs hover:border-primary transition-colors"
                    >
                      {digit}
                    </div>
                  ))}
                </div>
              </div>

              {/* Setting Toggles */}
              <div className="space-y-2.5 pt-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Biometric Authentication</span>
                  <Switch
                    checked={biometricEnabled}
                    onCheckedChange={setBiometricEnabled}
                    size="sm"
                    className="cursor-pointer"
                  />
                </div>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t">
              <Button size="sm" className="w-full font-medium">
                Verify & Continue
              </Button>
            </div>
          </div>

        </div>

        {/* Featured Component Cards Grid (Coss.com style) */}
        <div className="mt-16 sm:mt-24 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Explore the Components</h2>
              <p className="text-sm text-muted-foreground mt-1">
                Precision-engineered primitives and blocks built for modern web applications.
              </p>
            </div>
            <Link
              href="/docs/components"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
            >
              <span>View all 30+ components</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            <ComponentCard
              name="Autocomplete"
              description="An input that suggests options as you type with async loading and groupings."
              href="/docs/components/autocomplete"
            />
            <ComponentCard
              name="Accordion"
              description="A set of collapsible panels with headings and content."
              href="/docs/components/accordion"
            />
            <ComponentCard
              name="Alert Dialog"
              description="A modal dialog that interrupts the user with important content."
              href="/docs/components/alert-dialog"
            />
            <ComponentCard
              name="Thinking Orb"
              description="Multi-state particle orb visualizing AI reasoning, thinking, and errors."
              href="/docs/ui/thinking-orb"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
