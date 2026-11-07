"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BarChart2,
  Copy,
  Check,
  TrendingUp,
  ChevronDown,
  Code2,
  X,
  Sparkles,
} from "lucide-react";

interface ChartItem {
  id: string;
  title: string;
  category: string;
  description: string;
  trending: string;
  period: string;
  code: string;
  renderChart: (range?: string) => React.ReactNode;
}

interface FeaturedChartConfig {
  title: string;
  description: string;
  code: string;
  render: (range: string) => React.ReactNode;
}

export default function ChartsPage() {
  const [selectedCategory, setSelectedCategory] = useState("Area Charts");
  const [timeRange, setTimeRange] = useState("Last 3 months");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeCodeModal, setActiveCodeModal] = useState<ChartItem | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const categories = [
    "Area Charts",
    "Bar Charts",
    "Line Charts",
    "Pie Charts",
    "Radar Charts",
    "Radial Charts",
    "Tooltips",
  ];

  // Dynamic Featured Chart for each Category
  const featuredCharts: Record<string, FeaturedChartConfig> = {
    "Area Charts": {
      title: "Area Chart - Interactive",
      description: "Showing total visitors and device usage breakdown",
      code: `import { ResponsiveContainer, AreaChart, Area, XAxis, Tooltip, Legend } from "recharts";

export function InteractiveAreaAnalytics() {
  return (
    <div className="rounded-xl border bg-card p-6 shadow-sm">
      <h3 className="font-semibold text-lg">Area Chart - Interactive</h3>
      <ResponsiveContainer width="100%" height={260}>
        <AreaChart data={data}>
          <XAxis dataKey="date" />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="desktop" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.25} />
          <Area type="monotone" dataKey="mobile" stroke="#10b981" fill="#10b981" fillOpacity={0.25} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}`,
      render: (range = "Last 3 months") => {
        const is7d = range.includes("7");
        const is30d = range.includes("30");
        const labels = is7d
          ? ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
          : is30d
          ? ["Day 1", "Day 6", "Day 12", "Day 18", "Day 24", "Day 30"]
          : ["Apr 6", "Apr 18", "Apr 30", "May 12", "May 24", "Jun 5", "Jun 17", "Jun 30"];
        const d1 = is7d
          ? "M0,38 C15,20 30,35 45,15 C60,25 75,10 90,14 L100,20 L100,50 L0,50 Z"
          : is30d
          ? "M0,42 C20,28 40,32 60,16 C80,24 90,12 100,8 L100,50 L0,50 Z"
          : "M0,45 C15,25 30,48 45,28 C60,15 75,38 90,20 L100,28 L100,50 L0,50 Z";
        const l1 = is7d
          ? "M0,38 C15,20 30,35 45,15 C60,25 75,10 90,14 L100,20"
          : is30d
          ? "M0,42 C20,28 40,32 60,16 C80,24 90,12 100,8"
          : "M0,45 C15,25 30,48 45,28 C60,15 75,38 90,20 L100,28";
        const d2 = is7d
          ? "M0,44 C15,30 30,38 45,22 C60,32 75,18 90,24 L100,30 L100,50 L0,50 Z"
          : is30d
          ? "M0,46 C20,36 40,40 60,24 C80,30 90,20 100,16 L100,50 L0,50 Z"
          : "M0,48 C15,35 30,42 45,20 C60,8 75,25 90,12 L100,18 L100,50 L0,50 Z";
        const l2 = is7d
          ? "M0,44 C15,30 30,38 45,22 C60,32 75,18 90,24 L100,30"
          : is30d
          ? "M0,46 C20,36 40,40 60,24 C80,30 90,20 100,16"
          : "M0,48 C15,35 30,42 45,20 C60,8 75,25 90,12 L100,18";

        return (
          <div className="w-full h-64 relative overflow-hidden flex flex-col justify-end">
            <svg viewBox="0 0 100 50" preserveAspectRatio="none" className="w-full flex-1">
              <defs>
                <linearGradient id="mainAreaGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.02" />
                </linearGradient>
                <linearGradient id="secAreaGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#10b981" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#10b981" stopOpacity="0.02" />
                </linearGradient>
              </defs>
              <path d={d1} fill="url(#mainAreaGrad)" />
              <path d={l1} fill="none" stroke="#3b82f6" strokeWidth="1.5" />
              <path d={d2} fill="url(#secAreaGrad)" />
              <path d={l2} fill="none" stroke="#10b981" strokeWidth="1.5" />
            </svg>
            <div className="flex justify-between mt-3 text-xs text-muted-foreground border-t pt-3">
              {labels.map((lbl, idx) => (
                <span key={idx}>{lbl}</span>
              ))}
            </div>
            <div className="flex items-center justify-center gap-6 mt-4 text-xs font-medium">
              <div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-blue-500" /> Desktop</div>
              <div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-emerald-500" /> Mobile</div>
            </div>
          </div>
        );
      },
    },

    "Bar Charts": {
      title: "Bar Chart - Interactive Multi-Series",
      description: "Interactive grouped bar comparison with live data switching",
      code: `import { ResponsiveContainer, BarChart, Bar, XAxis, Tooltip, Legend } from "recharts";

export function InteractiveBarAnalytics() {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <BarChart data={data}>
        <XAxis dataKey="month" />
        <Tooltip />
        <Legend />
        <Bar dataKey="desktop" fill="#3b82f6" radius={[4, 4, 0, 0]} />
        <Bar dataKey="mobile" fill="#10b981" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}`,
      render: (range = "Last 3 months") => {
        const is7d = range.includes("7");
        const is30d = range.includes("30");
        const bars = is7d
          ? [
              { label: "Mon", d: 82, m: 54 },
              { label: "Tue", d: 68, m: 45 },
              { label: "Wed", d: 94, m: 72 },
              { label: "Thu", d: 85, m: 58 },
              { label: "Fri", d: 98, m: 76 },
              { label: "Sat", d: 52, m: 36 },
              { label: "Sun", d: 64, m: 42 },
            ]
          : is30d
          ? [
              { label: "Day 1-5", d: 72, m: 50 },
              { label: "Day 6-10", d: 86, m: 64 },
              { label: "Day 11-15", d: 80, m: 56 },
              { label: "Day 16-20", d: 95, m: 72 },
              { label: "Day 21-25", d: 88, m: 62 },
              { label: "Day 26-30", d: 100, m: 82 },
            ]
          : [
              { label: "Apr 6", d: 75, m: 45 },
              { label: "Apr 18", d: 90, m: 60 },
              { label: "Apr 30", d: 60, m: 35 },
              { label: "May 12", d: 95, m: 70 },
              { label: "May 24", d: 80, m: 50 },
              { label: "Jun 5", d: 88, m: 58 },
              { label: "Jun 17", d: 70, m: 40 },
              { label: "Jun 30", d: 100, m: 75 },
            ];

        return (
          <div className="w-full h-64 flex flex-col justify-end">
            <div className="flex-1 flex items-end justify-between gap-4 px-4 pt-4">
              {bars.map((bar, idx) => (
                <div key={idx} className="flex-1 flex flex-col items-center gap-1 h-full justify-end group cursor-pointer">
                  <div className="w-full flex items-end justify-center gap-1.5 h-full">
                    <div style={{ height: `${bar.d}%` }} className="w-1/2 bg-blue-500 rounded-t-sm group-hover:brightness-110 transition-all duration-300 shadow-2xs" />
                    <div style={{ height: `${bar.m}%` }} className="w-1/2 bg-emerald-500 rounded-t-sm group-hover:brightness-110 transition-all duration-300 shadow-2xs" />
                  </div>
                  <span className="text-[11px] text-muted-foreground mt-2">{bar.label}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center gap-6 mt-4 border-t pt-3 text-xs font-medium">
              <div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-blue-500" /> Desktop</div>
              <div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-emerald-500" /> Mobile</div>
            </div>
          </div>
        );
      },
    },

    "Line Charts": {
      title: "Line Chart - Interactive Multi-Metric",
      description: "Interactive continuous trend lines with point tooltips",
      code: `import { ResponsiveContainer, LineChart, Line, XAxis, Tooltip, Legend } from "recharts";

export function InteractiveLineAnalytics() {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <LineChart data={data}>
        <XAxis dataKey="month" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="desktop" stroke="#3b82f6" strokeWidth={2.5} dot={{ r: 4 }} />
        <Line type="monotone" dataKey="mobile" stroke="#10b981" strokeWidth={2.5} dot={{ r: 4 }} />
      </LineChart>
    </ResponsiveContainer>
  );
}`,
      render: (range = "Last 3 months") => {
        const is7d = range.includes("7");
        const is30d = range.includes("30");
        const labels = is7d
          ? ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
          : is30d
          ? ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"]
          : ["Apr 6", "Apr 18", "Apr 30", "May 12", "May 24", "Jun 5", "Jun 17", "Jun 30"];

        return (
          <div className="w-full h-64 flex flex-col justify-end">
            <svg viewBox="0 0 100 45" preserveAspectRatio="none" className="w-full flex-1">
              <path d="M0,35 C15,20 30,42 45,18 C60,10 75,28 90,14 L100,8" fill="none" stroke="#3b82f6" strokeWidth="2" />
              <circle cx="15" cy="27" r="1.5" fill="#3b82f6" />
              <circle cx="45" cy="18" r="1.5" fill="#3b82f6" />
              <circle cx="75" cy="24" r="1.5" fill="#3b82f6" />
              <circle cx="100" cy="8" r="1.5" fill="#3b82f6" />

              <path d="M0,42 C15,30 30,38 45,26 C60,18 75,34 90,22 L100,16" fill="none" stroke="#10b981" strokeWidth="2" />
              <circle cx="15" cy="34" r="1.5" fill="#10b981" />
              <circle cx="45" cy="26" r="1.5" fill="#10b981" />
              <circle cx="75" cy="30" r="1.5" fill="#10b981" />
              <circle cx="100" cy="16" r="1.5" fill="#10b981" />
            </svg>
            <div className="flex justify-between mt-3 text-xs text-muted-foreground border-t pt-3">
              {labels.map((lbl, idx) => (
                <span key={idx}>{lbl}</span>
              ))}
            </div>
            <div className="flex items-center justify-center gap-6 mt-4 text-xs font-medium">
              <div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-blue-500" /> Active Users</div>
              <div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-emerald-500" /> Conversions</div>
            </div>
          </div>
        );
      },
    },

    "Pie Charts": {
      title: "Pie Chart - Interactive Donut Distribution",
      description: "Interactive slice breakdown with total calculation",
      code: `import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

export function InteractivePieAnalytics() {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <PieChart>
        <Tooltip />
        <Legend />
        <Pie data={data} innerRadius={60} outerRadius={90} paddingAngle={4} dataKey="value">
          {data.map((entry, index) => <Cell key={index} fill={entry.fill} />)}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}`,
      render: (range = "Last 3 months") => {
        const is7d = range.includes("7");
        const is30d = range.includes("30");
        const total = is7d ? "14.2k" : is30d ? "58.6k" : "182.4k";

        return (
          <div className="w-full h-64 flex flex-col md:flex-row items-center justify-center gap-8 py-2">
            <div className="relative w-44 h-44 flex items-center justify-center">
              <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                <circle cx="18" cy="18" r="13" fill="none" stroke="#3b82f6" strokeWidth="5" strokeDasharray="52 100" strokeDashoffset="0" />
                <circle cx="18" cy="18" r="13" fill="none" stroke="#10b981" strokeWidth="5" strokeDasharray="26 100" strokeDashoffset="-52" />
                <circle cx="18" cy="18" r="13" fill="none" stroke="#f59e0b" strokeWidth="5" strokeDasharray="14 100" strokeDashoffset="-78" />
                <circle cx="18" cy="18" r="13" fill="none" stroke="#8b5cf6" strokeWidth="5" strokeDasharray="8 100" strokeDashoffset="-92" />
              </svg>
              <div className="absolute text-center">
                <span className="text-xl font-bold">{total}</span>
                <span className="block text-[10px] text-muted-foreground">Total Sessions</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-xs font-medium">
              <div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-blue-500" /> Chrome (52%)</div>
              <div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-emerald-500" /> Safari (26%)</div>
              <div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-amber-500" /> Firefox (14%)</div>
              <div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-purple-500" /> Edge (8%)</div>
            </div>
          </div>
        );
      },
    },

    "Radar Charts": {
      title: "Radar Chart - Interactive Performance Polygon",
      description: "Multi-axis capability rating across 6 dimensions",
      code: `import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar, Legend } from "recharts";

export function InteractiveRadarAnalytics() {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <RadarChart data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <Radar name="Performance" dataKey="score" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.5} />
      </RadarChart>
    </ResponsiveContainer>
  );
}`,
      render: () => (
        <div className="w-full h-64 flex items-center justify-center gap-8 py-2">
          <div className="relative w-48 h-48 flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <polygon points="50,8 90,34 80,82 50,96 20,82 10,34" fill="none" stroke="currentColor" strokeOpacity="0.15" />
              <polygon points="50,22 76,40 70,72 50,80 30,72 24,40" fill="none" stroke="currentColor" strokeOpacity="0.15" />
              <polygon points="50,36 64,48 60,64 50,70 40,64 36,48" fill="none" stroke="currentColor" strokeOpacity="0.15" />
              <polygon points="50,12 85,36 75,78 50,85 24,68 18,32" fill="#3b82f6" fillOpacity="0.35" stroke="#3b82f6" strokeWidth="1.5" />
              <polygon points="50,25 72,42 62,65 50,72 32,55 26,38" fill="#10b981" fillOpacity="0.35" stroke="#10b981" strokeWidth="1.5" />
            </svg>
          </div>
          <div className="space-y-2 text-xs font-medium">
            <div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-blue-500" /> Current Score (92/100)</div>
            <div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-emerald-500" /> Target Benchmark (85/100)</div>
          </div>
        </div>
      ),
    },

    "Radial Charts": {
      title: "Radial Chart - Multi-Layer Concentric Rings",
      description: "Goal tracking with nested progress meters",
      code: `import { ResponsiveContainer, RadialBarChart, RadialBar, PolarAngleAxis, Legend } from "recharts";

export function InteractiveRadialAnalytics() {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <RadialBarChart innerRadius="40%" outerRadius="100%" data={data}>
        <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
        <RadialBar dataKey="value" background cornerRadius={10} />
      </RadialBarChart>
    </ResponsiveContainer>
  );
}`,
      render: () => (
        <div className="w-full h-64 flex items-center justify-center gap-8 py-2">
          <div className="relative w-44 h-44 flex items-center justify-center">
            <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
              <circle cx="18" cy="18" r="14" fill="none" stroke="currentColor" strokeOpacity="0.1" strokeWidth="3" />
              <circle cx="18" cy="18" r="14" fill="none" stroke="#3b82f6" strokeWidth="3" strokeDasharray="88 100" strokeLinecap="round" />
              <circle cx="18" cy="18" r="10.5" fill="none" stroke="currentColor" strokeOpacity="0.1" strokeWidth="3" />
              <circle cx="18" cy="18" r="10.5" fill="none" stroke="#10b981" strokeWidth="3" strokeDasharray="74 100" strokeLinecap="round" />
              <circle cx="18" cy="18" r="7" fill="none" stroke="currentColor" strokeOpacity="0.1" strokeWidth="3" />
              <circle cx="18" cy="18" r="7" fill="none" stroke="#8b5cf6" strokeWidth="3" strokeDasharray="92 100" strokeLinecap="round" />
            </svg>
          </div>
          <div className="space-y-2 text-xs font-medium">
            <div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-blue-500" /> Revenue (88%)</div>
            <div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-emerald-500" /> Retention (74%)</div>
            <div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-purple-500" /> Conversion (92%)</div>
          </div>
        </div>
      ),
    },

    "Tooltips": {
      title: "Tooltips - Interactive Reactive Preview",
      description: "Custom hover inspection cards with live metrics and formatting",
      code: `import { ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

export function TooltipShowcase() {
  return (
    <ChartTooltip
      content={
        <ChartTooltipContent
          indicator="dot"
          labelFormatter={(value) => \`Date: \${value}\`}
        />
      }
    />
  );
}`,
      render: () => (
        <div className="w-full h-64 flex flex-col md:flex-row items-center justify-center gap-6 py-2">
          <div className="rounded-xl border bg-background/95 backdrop-blur-md p-4 shadow-xl border-border/80 text-xs space-y-2 w-56">
            <div className="font-semibold text-foreground border-b pb-1.5 flex justify-between items-center">
              <span>May 24, 2026</span>
              <span className="text-[10px] text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded font-mono">+24.8%</span>
            </div>
            <div className="flex justify-between items-center text-muted-foreground">
              <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-blue-500" /> Total Revenue</span>
              <span className="font-bold text-foreground font-mono">$18,420.00</span>
            </div>
            <div className="flex justify-between items-center text-muted-foreground">
              <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-emerald-500" /> New Orders</span>
              <span className="font-bold text-foreground font-mono">1,420</span>
            </div>
          </div>

          <div className="rounded-xl border bg-background/95 backdrop-blur-md p-4 shadow-xl border-border/80 text-xs space-y-2 w-56">
            <div className="font-semibold text-foreground border-b pb-1.5 flex justify-between items-center">
              <span>Performance</span>
              <span className="text-[10px] text-blue-500 bg-blue-500/10 px-1.5 py-0.5 rounded font-mono">Live</span>
            </div>
            <div className="flex justify-between items-center text-muted-foreground">
              <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-purple-500" /> Server Latency</span>
              <span className="font-bold text-foreground font-mono">24ms</span>
            </div>
            <div className="flex justify-between items-center text-muted-foreground">
              <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-amber-500" /> Error Rate</span>
              <span className="font-bold text-foreground font-mono">0.01%</span>
            </div>
          </div>
        </div>
      ),
    },
  };

  // Gallery items for each category
  const chartsData: Record<string, ChartItem[]> = {
    "Area Charts": [
      {
        id: "area-default",
        title: "Area Chart - Default",
        category: "Area Charts",
        description: "Showing total visitors for the last 6 months",
        trending: "Trending up by 5.2% this month",
        period: "January - June 2026",
        code: `import { Area, AreaChart, ResponsiveContainer, XAxis, Tooltip } from "recharts";\n\nexport function AreaChartDefault() {\n  return <AreaChart data={data}><Area dataKey="desktop" fill="#3b82f6" /></AreaChart>;\n}`,
        renderChart: () => (
          <div className="w-full h-full relative flex items-end">
            <svg viewBox="0 0 100 50" preserveAspectRatio="none" className="w-full h-full">
              <path d="M0,38 C20,15 35,45 50,28 C65,12 80,30 100,18 L100,50 L0,50 Z" fill="#3b82f6" fillOpacity="0.25" />
              <path d="M0,38 C20,15 35,45 50,28 C65,12 80,30 100,18" fill="none" stroke="#3b82f6" strokeWidth="2" />
            </svg>
          </div>
        ),
      },
      {
        id: "area-linear",
        title: "Area Chart - Linear",
        category: "Area Charts",
        description: "Linear slope area graph across 6 months",
        trending: "Trending up by 8.4% this month",
        period: "January - June 2026",
        code: `import { Area, AreaChart } from "recharts";\n\nexport function AreaChartLinear() {\n  return <AreaChart data={data}><Area type="linear" dataKey="desktop" fill="#3b82f6" /></AreaChart>;\n}`,
        renderChart: () => (
          <div className="w-full h-full relative flex items-end">
            <svg viewBox="0 0 100 50" preserveAspectRatio="none" className="w-full h-full">
              <polygon points="0,35 20,12 40,38 60,18 80,24 100,8 100,50 0,50" fill="#3b82f6" fillOpacity="0.25" />
              <polyline points="0,35 20,12 40,38 60,18 80,24 100,8" fill="none" stroke="#3b82f6" strokeWidth="2" />
            </svg>
          </div>
        ),
      },
      {
        id: "area-step",
        title: "Area Chart - Step",
        category: "Area Charts",
        description: "Discrete stepped area graph overview",
        trending: "Trending up by 4.1% this month",
        period: "January - June 2026",
        code: `import { Area, AreaChart } from "recharts";\n\nexport function AreaChartStep() {\n  return <AreaChart data={data}><Area type="step" dataKey="desktop" fill="#3b82f6" /></AreaChart>;\n}`,
        renderChart: () => (
          <div className="w-full h-full relative flex items-end">
            <svg viewBox="0 0 100 50" preserveAspectRatio="none" className="w-full h-full">
              <path d="M0,35 L16.6,35 L16.6,15 L33.3,15 L33.3,28 L50,28 L50,42 L66.6,42 L66.6,22 L83.3,22 L83.3,12 L100,12 L100,50 L0,50 Z" fill="#3b82f6" fillOpacity="0.25" />
              <path d="M0,35 L16.6,35 L16.6,15 L33.3,15 L33.3,28 L50,28 L50,42 L66.6,42 L66.6,22 L83.3,22 L83.3,12 L100,12" fill="none" stroke="#3b82f6" strokeWidth="2" />
            </svg>
          </div>
        ),
      },
      {
        id: "area-legend",
        title: "Area Chart - Legend",
        category: "Area Charts",
        description: "Showing comparison between Desktop and Mobile",
        trending: "Trending up by 12.3% this month",
        period: "January - June 2026",
        code: `import { Area, AreaChart, Legend } from "recharts";\n\nexport function AreaChartLegend() {\n  return <AreaChart data={data}><Legend /><Area dataKey="desktop" fill="#3b82f6" /><Area dataKey="mobile" fill="#10b981" /></AreaChart>;\n}`,
        renderChart: () => (
          <div className="w-full h-full relative flex flex-col justify-between">
            <svg viewBox="0 0 100 50" preserveAspectRatio="none" className="w-full flex-1">
              <path d="M0,45 C20,25 35,48 50,32 C65,18 80,35 100,20 L100,50 L0,50 Z" fill="#3b82f6" fillOpacity="0.25" stroke="#3b82f6" strokeWidth="1.5" />
              <path d="M0,48 C20,38 35,42 50,22 C65,10 80,24 100,10 L100,50 L0,50 Z" fill="#10b981" fillOpacity="0.25" stroke="#10b981" strokeWidth="1.5" />
            </svg>
            <div className="flex items-center justify-center gap-4 text-xs font-medium pt-2">
              <div className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-blue-500" /> Desktop</div>
              <div className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-emerald-500" /> Mobile</div>
            </div>
          </div>
        ),
      },
      {
        id: "area-stacked",
        title: "Area Chart - Stacked",
        category: "Area Charts",
        description: "Layered stacked distribution by device",
        trending: "Trending up by 9.7% this month",
        period: "January - June 2026",
        code: `import { Area, AreaChart } from "recharts";\n\nexport function AreaChartStacked() {\n  return <AreaChart data={data}><Area stackId="1" dataKey="mobile" fill="#10b981" /><Area stackId="1" dataKey="desktop" fill="#3b82f6" /></AreaChart>;\n}`,
        renderChart: () => (
          <div className="w-full h-full relative flex items-end">
            <svg viewBox="0 0 100 50" preserveAspectRatio="none" className="w-full h-full">
              <path d="M0,30 C25,18 45,35 70,22 C85,15 95,20 100,14 L100,50 L0,50 Z" fill="#3b82f6" fillOpacity="0.4" />
              <path d="M0,42 C25,32 45,45 70,36 C85,28 95,34 100,28 L100,50 L0,50 Z" fill="#10b981" fillOpacity="0.5" />
            </svg>
          </div>
        ),
      },
      {
        id: "area-gradient",
        title: "Area Chart - Gradient Sweep",
        category: "Area Charts",
        description: "Multi-stop gradient area visualization",
        trending: "Trending up by 15.1% this month",
        period: "January - June 2026",
        code: `import { Area, AreaChart } from "recharts";\n\nexport function AreaChartGradient() {\n  return <AreaChart data={data}><Area dataKey="desktop" fill="#8b5cf6" fillOpacity={0.3} /></AreaChart>;\n}`,
        renderChart: () => (
          <div className="w-full h-full relative flex items-end">
            <svg viewBox="0 0 100 50" preserveAspectRatio="none" className="w-full h-full">
              <path d="M0,42 C20,30 35,46 55,20 C75,8 85,25 100,12 L100,50 L0,50 Z" fill="#8b5cf6" fillOpacity="0.3" stroke="#8b5cf6" strokeWidth="2" />
            </svg>
          </div>
        ),
      },
    ],

    "Bar Charts": [
      {
        id: "bar-multiple",
        title: "Bar Chart - Multiple Grouped",
        category: "Bar Charts",
        description: "Desktop vs Mobile monthly activity",
        trending: "Trending up by 18.2% this quarter",
        period: "January - June 2026",
        code: `import { Bar, BarChart } from "recharts";\n\nexport function BarChartMultiple() {\n  return <BarChart data={data}><Bar dataKey="desktop" fill="#3b82f6" /><Bar dataKey="mobile" fill="#10b981" /></BarChart>;\n}`,
        renderChart: () => (
          <div className="w-full h-full flex items-end justify-between gap-3 px-2 pt-4">
            {[
              { d: 65, m: 35 },
              { d: 90, m: 60 },
              { d: 75, m: 45 },
              { d: 30, m: 70 },
              { d: 80, m: 50 },
              { d: 85, m: 55 },
            ].map((bar, i) => (
              <div key={i} className="flex-1 flex items-end justify-center gap-1 h-full">
                <div style={{ height: `${bar.d}%` }} className="w-1/2 bg-blue-500 rounded-t-sm" />
                <div style={{ height: `${bar.m}%` }} className="w-1/2 bg-emerald-500 rounded-t-sm" />
              </div>
            ))}
          </div>
        ),
      },
      {
        id: "bar-stacked",
        title: "Bar Chart - Stacked",
        category: "Bar Charts",
        description: "Stacked volume distribution over 6 months",
        trending: "Trending up by 11.5% this month",
        period: "January - June 2026",
        code: `import { Bar, BarChart } from "recharts";\n\nexport function BarChartStacked() {\n  return <BarChart data={data}><Bar dataKey="desktop" stackId="a" fill="#3b82f6" /><Bar dataKey="mobile" stackId="a" fill="#8b5cf6" /></BarChart>;\n}`,
        renderChart: () => (
          <div className="w-full h-full flex items-end justify-between gap-4 px-2 pt-4">
            {[60, 85, 70, 45, 95, 80].map((total, i) => (
              <div key={i} className="flex-1 flex flex-col justify-end h-full">
                <div style={{ height: `${total * 0.4}%` }} className="w-full bg-purple-500 rounded-t-sm" />
                <div style={{ height: `${total * 0.6}%` }} className="w-full bg-blue-500" />
              </div>
            ))}
          </div>
        ),
      },
      {
        id: "bar-horizontal",
        title: "Bar Chart - Horizontal",
        category: "Bar Charts",
        description: "Horizontal performance metrics by category",
        trending: "Trending up by 7.8% this month",
        period: "January - June 2026",
        code: `import { Bar, BarChart } from "recharts";\n\nexport function BarChartHorizontal() {\n  return <BarChart data={data} layout="vertical"><Bar dataKey="desktop" fill="#3b82f6" /></BarChart>;\n}`,
        renderChart: () => (
          <div className="w-full h-full flex flex-col justify-between py-2 space-y-2">
            {[85, 65, 92, 45, 78].map((w, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="text-[10px] text-muted-foreground w-8">Cat {i + 1}</span>
                <div className="flex-1 bg-muted/40 h-3 rounded-full overflow-hidden">
                  <div style={{ width: `${w}%` }} className="bg-blue-500 h-full rounded-full" />
                </div>
              </div>
            ))}
          </div>
        ),
      },
      {
        id: "bar-negative",
        title: "Bar Chart - Negative Values",
        category: "Bar Charts",
        description: "Profit and loss variance visualization",
        trending: "Net gain +14.6% this quarter",
        period: "January - June 2026",
        code: `import { Bar, BarChart, ReferenceLine } from "recharts";\n\nexport function BarChartNegative() {\n  return <BarChart data={data}><ReferenceLine y={0} /><Bar dataKey="profit" fill="#10b981" /></BarChart>;\n}`,
        renderChart: () => (
          <div className="w-full h-full flex items-center justify-between gap-3 px-2">
            {[40, -25, 60, -15, 80, 50].map((val, i) => (
              <div key={i} className="flex-1 flex flex-col items-center justify-center h-full">
                {val > 0 ? (
                  <div className="h-1/2 flex items-end w-full justify-center">
                    <div style={{ height: `${val * 1.8}%` }} className="w-4 bg-emerald-500 rounded-t-sm" />
                  </div>
                ) : (
                  <div className="h-1/2 flex items-start w-full justify-center">
                    <div style={{ height: `${Math.abs(val) * 1.8}%` }} className="w-4 bg-rose-500 rounded-b-sm" />
                  </div>
                )}
              </div>
            ))}
          </div>
        ),
      },
    ],

    "Line Charts": [
      {
        id: "line-default",
        title: "Line Chart - Default Curve",
        category: "Line Charts",
        description: "Continuous trend monitoring",
        trending: "Trending up by 14.2% this month",
        period: "January - June 2026",
        code: `import { Line, LineChart } from "recharts";\n\nexport function LineChartDefault() {\n  return <LineChart data={data}><Line type="monotone" dataKey="desktop" stroke="#3b82f6" /></LineChart>;\n}`,
        renderChart: () => (
          <div className="w-full h-full relative flex items-end">
            <svg viewBox="0 0 100 50" preserveAspectRatio="none" className="w-full h-full">
              <path d="M0,35 C20,15 35,45 50,25 C65,12 80,32 100,10" fill="none" stroke="#3b82f6" strokeWidth="2.5" />
              <circle cx="20" cy="22" r="2" fill="#3b82f6" />
              <circle cx="50" cy="25" r="2" fill="#3b82f6" />
              <circle cx="80" cy="24" r="2" fill="#3b82f6" />
              <circle cx="100" cy="10" r="2" fill="#3b82f6" />
            </svg>
          </div>
        ),
      },
      {
        id: "line-multiple",
        title: "Line Chart - Multiple Series",
        category: "Line Charts",
        description: "Multi-series line comparison",
        trending: "Trending up by 6.3% this month",
        period: "January - June 2026",
        code: `import { Line, LineChart } from "recharts";\n\nexport function LineChartMultiple() {\n  return <LineChart data={data}><Line dataKey="desktop" stroke="#3b82f6" /><Line dataKey="mobile" stroke="#10b981" /></LineChart>;\n}`,
        renderChart: () => (
          <div className="w-full h-full relative flex items-end">
            <svg viewBox="0 0 100 50" preserveAspectRatio="none" className="w-full h-full">
              <path d="M0,38 C25,18 45,40 70,22 C85,15 100,8" fill="none" stroke="#3b82f6" strokeWidth="2" />
              <path d="M0,45 C25,35 45,22 70,38 C85,25 100,16" fill="none" stroke="#10b981" strokeWidth="2" />
            </svg>
          </div>
        ),
      },
      {
        id: "line-step",
        title: "Line Chart - Step",
        category: "Line Charts",
        description: "Stepped line changes over intervals",
        trending: "Stable with +3.8% gain",
        period: "January - June 2026",
        code: `import { Line, LineChart } from "recharts";\n\nexport function LineChartStep() {\n  return <LineChart data={data}><Line type="step" dataKey="desktop" stroke="#3b82f6" /></LineChart>;\n}`,
        renderChart: () => (
          <div className="w-full h-full relative flex items-end">
            <svg viewBox="0 0 100 50" preserveAspectRatio="none" className="w-full h-full">
              <path d="M0,40 L20,40 L20,20 L40,20 L40,32 L60,32 L60,15 L80,15 L80,25 L100,25" fill="none" stroke="#3b82f6" strokeWidth="2" />
            </svg>
          </div>
        ),
      },
    ],

    "Pie Charts": [
      {
        id: "pie-donut",
        title: "Pie Chart - Donut Active",
        category: "Pie Charts",
        description: "Traffic source breakdown by browser",
        trending: "Chrome dominates with 58.2%",
        period: "Current Quarter",
        code: `import { Pie, PieChart } from "recharts";\n\nexport function PieChartDonut() {\n  return <PieChart><Pie innerRadius={50} outerRadius={80} data={data} /></PieChart>;\n}`,
        renderChart: () => (
          <div className="w-full h-full flex items-center justify-center">
            <div className="relative w-32 h-32 flex items-center justify-center">
              <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                <circle cx="18" cy="18" r="14" fill="none" stroke="#3b82f6" strokeWidth="5" strokeDasharray="58 100" />
                <circle cx="18" cy="18" r="14" fill="none" stroke="#10b981" strokeWidth="5" strokeDasharray="24 100" strokeDashoffset="-58" />
                <circle cx="18" cy="18" r="14" fill="none" stroke="#f59e0b" strokeWidth="5" strokeDasharray="18 100" strokeDashoffset="-82" />
              </svg>
              <div className="absolute text-center">
                <span className="text-sm font-bold">1,020</span>
              </div>
            </div>
          </div>
        ),
      },
      {
        id: "pie-simple",
        title: "Pie Chart - Solid Pie",
        category: "Pie Charts",
        description: "Full slice distribution across segments",
        trending: "Top segment leads with 45%",
        period: "Current Month",
        code: `import { Pie, PieChart } from "recharts";\n\nexport function PieChartSolid() {\n  return <PieChart><Pie data={data} /></PieChart>;\n}`,
        renderChart: () => (
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-32 h-32 rounded-full overflow-hidden flex items-center justify-center bg-blue-500 shadow-md relative">
              <div className="w-full h-full" style={{ background: "conic-gradient(#3b82f6 0% 45%, #10b981 45% 75%, #f59e0b 75% 90%, #8b5cf6 90% 100%)" }} />
            </div>
          </div>
        ),
      },
    ],

    "Radar Charts": [
      {
        id: "radar-default",
        title: "Radar Chart - Skills & Speed",
        category: "Radar Charts",
        description: "Multidimensional capability assessment",
        trending: "Performance score rated at 94/100",
        period: "Audited Q1 2026",
        code: `import { Radar, RadarChart } from "recharts";\n\nexport function RadarChartDefault() {\n  return <RadarChart data={data}><Radar dataKey="A" stroke="#3b82f6" fill="#3b82f6" /></RadarChart>;\n}`,
        renderChart: () => (
          <div className="w-full h-full flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-32 h-32">
              <polygon points="50,10 90,38 75,85 25,85 10,38" fill="none" stroke="currentColor" strokeOpacity="0.2" />
              <polygon points="50,25 75,42 65,72 35,72 25,42" fill="none" stroke="currentColor" strokeOpacity="0.2" />
              <polygon points="50,15 85,38 70,80 28,75 18,35" fill="#3b82f6" fillOpacity="0.4" stroke="#3b82f6" strokeWidth="1.5" />
            </svg>
          </div>
        ),
      },
    ],

    "Radial Charts": [
      {
        id: "radial-default",
        title: "Radial Chart - Progress Ring",
        category: "Radial Charts",
        description: "Goal completion ring indicator",
        trending: "82% completed towards milestone",
        period: "Current Sprint",
        code: `import { RadialBarChart, RadialBar } from "recharts";\n\nexport function RadialChartDefault() {\n  return <RadialBarChart data={[{ value: 82 }]}><RadialBar dataKey="value" fill="#3b82f6" /></RadialBarChart>;\n}`,
        renderChart: () => (
          <div className="w-full h-full flex items-center justify-center">
            <div className="relative w-32 h-32 flex items-center justify-center">
              <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                <circle cx="18" cy="18" r="14" fill="none" stroke="currentColor" strokeOpacity="0.1" strokeWidth="4" />
                <circle cx="18" cy="18" r="14" fill="none" stroke="#3b82f6" strokeWidth="4" strokeDasharray="82 100" strokeLinecap="round" />
              </svg>
              <div className="absolute text-center">
                <span className="text-lg font-bold">82%</span>
              </div>
            </div>
          </div>
        ),
      },
    ],

    "Tooltips": [
      {
        id: "tooltip-custom",
        title: "Tooltip - Dynamic Floating",
        category: "Tooltips",
        description: "Interactive tooltip with formatted currency & indicators",
        trending: "Real-time reactive inspection",
        period: "Active Preview",
        code: `import { ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";\n\nexport function TooltipPreview() {\n  return <ChartTooltip content={<ChartTooltipContent indicator="dot" />} />;\n}`,
        renderChart: () => (
          <div className="w-full h-full flex items-center justify-center">
            <div className="rounded-xl border bg-background/95 p-3 shadow-lg border-border/80 text-xs space-y-1 w-40">
              <div className="font-semibold text-foreground border-b pb-1">April 2026</div>
              <div className="flex justify-between items-center text-muted-foreground">
                <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-blue-500" /> Revenue</span>
                <span className="font-bold text-foreground">$14.2k</span>
              </div>
            </div>
          </div>
        ),
      },
    ],
  };

  const currentFeatured = featuredCharts[selectedCategory] || featuredCharts["Area Charts"];
  const currentCharts = chartsData[selectedCategory] || chartsData["Area Charts"];

  return (
    <div className="container mx-auto px-4 py-16 max-w-screen-xl">
      {/* Hero Section */}
      <div className="flex flex-col items-center text-center mb-16 space-y-6">
        <Link
          href="/docs/components/questionnaire"
          className="inline-flex items-center rounded-full bg-muted px-4 py-1.5 text-sm font-medium transition-colors hover:bg-muted/80"
        >
          <Sparkles className="h-3.5 w-3.5 mr-1.5 text-primary" />
          New Questionnaire component <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Beautiful Charts & Graphs</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-[600px]">
          A collection of ready-to-use chart components built with Recharts. From basic charts to rich data displays, copy and paste into your apps.
        </p>
        <div className="flex items-center gap-4 pt-4">
          <Link
            href="#charts-grid"
            className="inline-flex h-10 items-center justify-center rounded-md bg-foreground px-8 text-sm font-medium text-background shadow transition-colors hover:bg-foreground/90 cursor-pointer"
          >
            Browse Charts
          </Link>
          <Link
            href="/docs/components/chart"
            className="inline-flex h-10 items-center justify-center rounded-md border px-8 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground cursor-pointer"
          >
            Documentation
          </Link>
        </div>
      </div>

      {/* Categories Bar */}
      <div id="charts-grid" className="flex items-center mb-8 overflow-x-auto pb-2 border-b border-border scroll-mt-20">
        <div className="flex items-center space-x-6 text-sm font-medium">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`py-2 transition-colors cursor-pointer whitespace-nowrap ${
                selectedCategory === cat
                  ? "text-foreground border-b-2 border-foreground font-semibold -mb-[2px]"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Category-Specific Featured Interactive Chart */}
      <div className="space-y-4 mb-16">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
            <BarChart2 className="h-4 w-4" /> Featured {selectedCategory} Display
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() =>
                copyToClipboard(
                  `npx @alvinahmad/ui add chart`,
                  "featured-copy"
                )
              }
              aria-label="Copy CLI command"
              className="p-2 hover:bg-muted rounded-md text-muted-foreground hover:text-foreground cursor-pointer transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 active:scale-[0.96] motion-reduce:active:scale-100"
              title="Copy CLI command"
            >
              {copiedId === "featured-copy" ? (
                <Check className="h-4 w-4 text-emerald-500" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </button>
            <button
              onClick={() =>
                setActiveCodeModal({
                  id: `featured-${selectedCategory}`,
                  title: currentFeatured.title,
                  category: selectedCategory,
                  description: currentFeatured.description,
                  trending: "+18.4% growth",
                  period: "Q1 - Q3 2026",
                  code: currentFeatured.code,
                  renderChart: () => null,
                })
              }
              aria-label="View source code"
              className="inline-flex items-center gap-1.5 rounded-md border bg-background px-3 py-1.5 text-sm font-medium shadow-xs hover:bg-accent hover:text-accent-foreground cursor-pointer transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 active:scale-[0.96] motion-reduce:active:scale-100"
            >
              <Code2 className="h-4 w-4" /> View Code
            </button>
          </div>
        </div>

        <div className="rounded-xl border bg-card shadow-sm overflow-hidden flex flex-col min-h-[420px]">
          <div className="p-6 pb-0 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b pb-6">
            <div>
              <h3 className="font-semibold text-lg">{currentFeatured.title}</h3>
              <p className="text-sm text-muted-foreground">{currentFeatured.description} for {timeRange.toLowerCase()}</p>
            </div>
            
            {/* Interactive Time Filter Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                aria-haspopup="listbox"
                aria-expanded={isDropdownOpen}
                aria-label="Filter chart by time range"
                className="inline-flex items-center justify-between rounded-md border bg-background px-3 py-1.5 text-sm font-medium shadow-xs min-w-[160px] cursor-pointer hover:bg-muted/50 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1"
              >
                {timeRange} <ChevronDown className="h-4 w-4 text-muted-foreground ml-2" />
              </button>
              {isDropdownOpen && (
                <div role="listbox" aria-label="Time range options" className="absolute right-0 mt-1 w-44 rounded-lg border bg-popover text-popover-foreground shadow-lg z-20 py-1">
                  {["Last 3 months", "Last 30 days", "Last 7 days"].map((option) => (
                    <button
                      key={option}
                      role="option"
                      aria-selected={timeRange === option}
                      onClick={() => {
                        setTimeRange(option);
                        setIsDropdownOpen(false);
                      }}
                      className="w-full text-left px-3 py-1.5 text-xs hover:bg-accent hover:text-accent-foreground cursor-pointer"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="flex-1 p-6 relative flex flex-col justify-end">
            {currentFeatured.render(timeRange)}
          </div>
        </div>
      </div>

      {/* Grid of Current Category Charts */}
      <div className="space-y-6">
        <h2 className="text-xl font-bold tracking-tight">{selectedCategory} Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentCharts.map((chart) => (
            <div key={chart.id} className="space-y-3">
              <div className="flex items-center justify-between text-sm font-medium text-muted-foreground">
                <div className="flex items-center gap-2">
                  <BarChart2 className="h-4 w-4" /> {chart.category}
                </div>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => copyToClipboard(chart.code, chart.id)}
                    className="p-1.5 hover:text-foreground rounded-md hover:bg-muted cursor-pointer transition-colors"
                    title="Copy Code"
                  >
                    {copiedId === chart.id ? (
                      <Check className="h-3.5 w-3.5 text-emerald-500" />
                    ) : (
                      <Copy className="h-3.5 w-3.5" />
                    )}
                  </button>
                  <button
                    onClick={() => setActiveCodeModal(chart)}
                    className="rounded-md border bg-background px-2.5 py-1 text-xs shadow-2xs hover:bg-accent text-foreground cursor-pointer"
                  >
                    View Code
                  </button>
                </div>
              </div>

              <div className="rounded-xl border bg-card shadow-sm p-6 flex flex-col h-[360px] justify-between">
                <div>
                  <h3 className="font-semibold text-base leading-tight">{chart.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{chart.description}</p>
                </div>

                <div className="flex-1 w-full my-4 flex items-center justify-center min-h-[140px]">
                  {chart.renderChart(timeRange)}
                </div>

                <div className="border-t pt-3">
                  <div className="flex items-center gap-1.5 font-medium text-xs text-emerald-500">
                    <TrendingUp className="h-3.5 w-3.5" /> {chart.trending}
                  </div>
                  <div className="text-[11px] text-muted-foreground mt-0.5">{chart.period}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Code Modal Dialog */}
      {activeCodeModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`Source code for ${activeCodeModal.title}`}
            className="bg-zinc-950 border border-zinc-800 rounded-2xl w-full max-w-2xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden text-zinc-100 overscroll-contain"
          >
            <div className="flex items-center justify-between p-4 border-b border-zinc-800">
              <div>
                <h3 className="font-semibold text-sm">{activeCodeModal.title}</h3>
                <p className="text-xs text-zinc-400">React + Recharts Component</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => copyToClipboard(activeCodeModal.code, "modal-copy")}
                  aria-label="Copy chart source code to clipboard"
                  className="flex items-center gap-1.5 text-xs text-zinc-300 hover:text-white bg-zinc-800 px-3 py-1.5 rounded-md cursor-pointer hover:bg-zinc-700 transition-[color,background-color,transform] duration-150 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 active:scale-[0.96] motion-reduce:active:scale-100"
                >
                  {copiedId === "modal-copy" ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-400" /> Copied
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" /> Copy Code
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => setActiveCodeModal(null)}
                  aria-label="Close code dialog"
                  className="p-1.5 text-zinc-400 hover:text-white rounded-md hover:bg-zinc-800 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 active:scale-[0.96] motion-reduce:active:scale-100"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>
            <div className="p-4 overflow-y-auto font-mono text-xs text-zinc-300 bg-zinc-950">
              <pre>
                <code>{activeCodeModal.code}</code>
              </pre>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
