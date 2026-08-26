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

  // Chart definitions for all categories
  const chartsData: Record<string, ChartItem[]> = {
    "Area Charts": [
      {
        id: "area-default",
        title: "Area Chart - Default",
        category: "Area Charts",
        description: "Showing total visitors for the last 6 months",
        trending: "Trending up by 5.2% this month",
        period: "January - June 2026",
        code: `import { Area, AreaChart, ResponsiveContainer, XAxis, Tooltip } from "recharts";

const data = [
  { month: "Jan", desktop: 186 },
  { month: "Feb", desktop: 305 },
  { month: "Mar", desktop: 237 },
  { month: "Apr", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "Jun", desktop: 214 },
];

export function AreaChartDefault() {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="var(--primary)" stopOpacity={0.1}/>
          </linearGradient>
        </defs>
        <XAxis dataKey="month" />
        <Tooltip />
        <Area type="natural" dataKey="desktop" fill="url(#fillDesktop)" stroke="var(--primary)" />
      </AreaChart>
    </ResponsiveContainer>
  );
}`,
        renderChart: () => (
          <div className="w-full h-full relative flex items-end">
            <svg viewBox="0 0 100 50" preserveAspectRatio="none" className="w-full h-full">
              <defs>
                <linearGradient id="areaGrad1" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.05" />
                </linearGradient>
              </defs>
              <path
                d="M0,38 C20,15 35,45 50,28 C65,12 80,30 100,18 L100,50 L0,50 Z"
                fill="url(#areaGrad1)"
              />
              <path
                d="M0,38 C20,15 35,45 50,28 C65,12 80,30 100,18"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="2"
              />
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
        code: `import { Area, AreaChart, ResponsiveContainer, XAxis, Tooltip } from "recharts";

const data = [
  { month: "Jan", desktop: 140 },
  { month: "Feb", desktop: 290 },
  { month: "Mar", desktop: 120 },
  { month: "Apr", desktop: 280 },
  { month: "May", desktop: 210 },
  { month: "Jun", desktop: 340 },
];

export function AreaChartLinear() {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <AreaChart data={data}>
        <XAxis dataKey="month" />
        <Tooltip />
        <Area type="linear" dataKey="desktop" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.2} />
      </AreaChart>
    </ResponsiveContainer>
  );
}`,
        renderChart: () => (
          <div className="w-full h-full relative flex items-end">
            <svg viewBox="0 0 100 50" preserveAspectRatio="none" className="w-full h-full">
              <polygon points="0,35 20,12 40,38 60,18 80,24 100,8 100,50 0,50" fill="#3b82f6" fillOpacity="0.2" />
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
        code: `import { Area, AreaChart, ResponsiveContainer, XAxis, Tooltip } from "recharts";

export function AreaChartStep() {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <AreaChart data={data}>
        <XAxis dataKey="month" />
        <Tooltip />
        <Area type="step" dataKey="desktop" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.2} />
      </AreaChart>
    </ResponsiveContainer>
  );
}`,
        renderChart: () => (
          <div className="w-full h-full relative flex items-end">
            <svg viewBox="0 0 100 50" preserveAspectRatio="none" className="w-full h-full">
              <path
                d="M0,35 L16.6,35 L16.6,15 L33.3,15 L33.3,28 L50,28 L50,42 L66.6,42 L66.6,22 L83.3,22 L83.3,12 L100,12 L100,50 L0,50 Z"
                fill="#3b82f6"
                fillOpacity="0.2"
              />
              <path
                d="M0,35 L16.6,35 L16.6,15 L33.3,15 L33.3,28 L50,28 L50,42 L66.6,42 L66.6,22 L83.3,22 L83.3,12 L100,12"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="2"
              />
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
        code: `import { Area, AreaChart, ResponsiveContainer, XAxis, Legend, Tooltip } from "recharts";

export function AreaChartLegend() {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <AreaChart data={data}>
        <XAxis dataKey="month" />
        <Tooltip />
        <Legend />
        <Area type="monotone" dataKey="desktop" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.3} />
        <Area type="monotone" dataKey="mobile" stroke="#10b981" fill="#10b981" fillOpacity={0.3} />
      </AreaChart>
    </ResponsiveContainer>
  );
}`,
        renderChart: () => (
          <div className="w-full h-full relative flex flex-col justify-between">
            <svg viewBox="0 0 100 50" preserveAspectRatio="none" className="w-full flex-1">
              <path
                d="M0,45 C20,25 35,48 50,32 C65,18 80,35 100,20 L100,50 L0,50 Z"
                fill="#3b82f6"
                fillOpacity="0.25"
              />
              <path
                d="M0,45 C20,25 35,48 50,32 C65,18 80,35 100,20"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="1.5"
              />
              <path
                d="M0,48 C20,38 35,42 50,22 C65,10 80,24 100,10 L100,50 L0,50 Z"
                fill="#10b981"
                fillOpacity="0.25"
              />
              <path
                d="M0,48 C20,38 35,42 50,22 C65,10 80,24 100,10"
                fill="none"
                stroke="#10b981"
                strokeWidth="1.5"
              />
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
        code: `import { Area, AreaChart, ResponsiveContainer, XAxis, Tooltip } from "recharts";

export function AreaChartStacked() {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <AreaChart data={data}>
        <XAxis dataKey="month" />
        <Tooltip />
        <Area type="monotone" dataKey="mobile" stackId="1" stroke="#10b981" fill="#10b981" fillOpacity={0.5} />
        <Area type="monotone" dataKey="desktop" stackId="1" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.5} />
      </AreaChart>
    </ResponsiveContainer>
  );
}`,
        renderChart: () => (
          <div className="w-full h-full relative flex items-end">
            <svg viewBox="0 0 100 50" preserveAspectRatio="none" className="w-full h-full">
              <path
                d="M0,30 C25,18 45,35 70,22 C85,15 95,20 100,14 L100,50 L0,50 Z"
                fill="#3b82f6"
                fillOpacity="0.4"
              />
              <path
                d="M0,42 C25,32 45,45 70,36 C85,28 95,34 100,28 L100,50 L0,50 Z"
                fill="#10b981"
                fillOpacity="0.5"
              />
            </svg>
          </div>
        ),
      },
      {
        id: "area-expanded",
        title: "Area Chart - Gradient Sweep",
        category: "Area Charts",
        description: "Smooth multi-stop gradient area visualization",
        trending: "Trending up by 15.1% this month",
        period: "January - June 2026",
        code: `import { Area, AreaChart, ResponsiveContainer, XAxis, Tooltip } from "recharts";

export function AreaChartGradient() {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <AreaChart data={data}>
        <XAxis dataKey="month" />
        <Tooltip />
        <Area type="monotone" dataKey="desktop" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.3} />
      </AreaChart>
    </ResponsiveContainer>
  );
}`,
        renderChart: () => (
          <div className="w-full h-full relative flex items-end">
            <svg viewBox="0 0 100 50" preserveAspectRatio="none" className="w-full h-full">
              <defs>
                <linearGradient id="purpleGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
              </defs>
              <path
                d="M0,42 C20,30 35,46 55,20 C75,8 85,25 100,12 L100,50 L0,50 Z"
                fill="url(#purpleGrad)"
                fillOpacity="0.3"
              />
              <path
                d="M0,42 C20,30 35,46 55,20 C75,8 85,25 100,12"
                fill="none"
                stroke="url(#purpleGrad)"
                strokeWidth="2"
              />
            </svg>
          </div>
        ),
      },
    ],

    "Bar Charts": [
      {
        id: "bar-default",
        title: "Bar Chart - Multiple",
        category: "Bar Charts",
        description: "Desktop vs Mobile monthly activity",
        trending: "Trending up by 18.2% this quarter",
        period: "January - June 2026",
        code: `import { Bar, BarChart, ResponsiveContainer, XAxis, Tooltip, Legend } from "recharts";

const data = [
  { month: "Jan", desktop: 186, mobile: 80 },
  { month: "Feb", desktop: 305, mobile: 200 },
  { month: "Mar", desktop: 237, mobile: 120 },
  { month: "Apr", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "Jun", desktop: 214, mobile: 140 },
];

export function BarChartMultiple() {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <BarChart data={data}>
        <XAxis dataKey="month" />
        <Tooltip />
        <Legend />
        <Bar dataKey="desktop" fill="#3b82f6" radius={4} />
        <Bar dataKey="mobile" fill="#10b981" radius={4} />
      </BarChart>
    </ResponsiveContainer>
  );
}`,
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
                <div style={{ height: `${bar.d}%` }} className="w-1/2 bg-blue-500 rounded-t-sm hover:brightness-110 transition-all" />
                <div style={{ height: `${bar.m}%` }} className="w-1/2 bg-emerald-500 rounded-t-sm hover:brightness-110 transition-all" />
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
        code: `import { Bar, BarChart, ResponsiveContainer, XAxis, Tooltip } from "recharts";

export function BarChartStacked() {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <BarChart data={data}>
        <XAxis dataKey="month" />
        <Tooltip />
        <Bar dataKey="desktop" stackId="a" fill="#3b82f6" />
        <Bar dataKey="mobile" stackId="a" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}`,
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
        code: `import { Bar, BarChart, ResponsiveContainer, YAxis, Tooltip } from "recharts";

export function BarChartHorizontal() {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <BarChart data={data} layout="vertical">
        <YAxis dataKey="month" type="category" />
        <Tooltip />
        <Bar dataKey="desktop" fill="#3b82f6" radius={4} />
      </BarChart>
    </ResponsiveContainer>
  );
}`,
        renderChart: () => (
          <div className="w-full h-full flex flex-col justify-between py-2 space-y-2">
            {[85, 65, 92, 45, 78].map((w, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="text-[10px] text-muted-foreground w-8">Cat {i + 1}</span>
                <div className="flex-1 bg-muted/40 h-4 rounded-full overflow-hidden">
                  <div style={{ width: `${w}%` }} className="bg-blue-500 h-full rounded-full transition-all duration-500" />
                </div>
              </div>
            ))}
          </div>
        ),
      },
    ],

    "Line Charts": [
      {
        id: "line-default",
        title: "Line Chart - Interactive",
        category: "Line Charts",
        description: "Continuous trend metric monitoring",
        trending: "Trending up by 14.2% this month",
        period: "January - June 2026",
        code: `import { Line, LineChart, ResponsiveContainer, XAxis, Tooltip, Dots } from "recharts";

export function LineChartDefault() {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <LineChart data={data}>
        <XAxis dataKey="month" />
        <Tooltip />
        <Line type="monotone" dataKey="desktop" stroke="#3b82f6" strokeWidth={2} dot={{ r: 4 }} />
      </LineChart>
    </ResponsiveContainer>
  );
}`,
        renderChart: () => (
          <div className="w-full h-full relative flex items-end">
            <svg viewBox="0 0 100 50" preserveAspectRatio="none" className="w-full h-full">
              <path
                d="M0,35 C20,15 35,45 50,25 C65,12 80,32 100,10"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="2.5"
              />
              <circle cx="20" cy="22" r="2.5" fill="#3b82f6" />
              <circle cx="50" cy="25" r="2.5" fill="#3b82f6" />
              <circle cx="80" cy="24" r="2.5" fill="#3b82f6" />
              <circle cx="100" cy="10" r="2.5" fill="#3b82f6" />
            </svg>
          </div>
        ),
      },
      {
        id: "line-multiple",
        title: "Line Chart - Multiple",
        category: "Line Charts",
        description: "Multi-series line comparison",
        trending: "Trending up by 6.3% this month",
        period: "January - June 2026",
        code: `import { Line, LineChart, ResponsiveContainer, XAxis, Tooltip, Legend } from "recharts";

export function LineChartMultiple() {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <LineChart data={data}>
        <XAxis dataKey="month" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="desktop" stroke="#3b82f6" strokeWidth={2} />
        <Line type="monotone" dataKey="mobile" stroke="#10b981" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  );
}`,
        renderChart: () => (
          <div className="w-full h-full relative flex items-end">
            <svg viewBox="0 0 100 50" preserveAspectRatio="none" className="w-full h-full">
              <path d="M0,38 C25,18 45,40 70,22 C85,15 100,8" fill="none" stroke="#3b82f6" strokeWidth="2" />
              <path d="M0,45 C25,35 45,22 70,38 C85,25 100,18" fill="none" stroke="#10b981" strokeWidth="2" />
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
        code: `import { Pie, PieChart, ResponsiveContainer, Cell, Tooltip } from "recharts";

const data = [
  { name: "Chrome", value: 580, fill: "#3b82f6" },
  { name: "Safari", value: 240, fill: "#10b981" },
  { name: "Firefox", value: 120, fill: "#f59e0b" },
  { name: "Edge", value: 80, fill: "#8b5cf6" },
];

export function PieChartDonut() {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <PieChart>
        <Tooltip />
        <Pie data={data} innerRadius={50} outerRadius={80} paddingAngle={4} dataKey="value">
          {data.map((entry, index) => (
            <Cell key={index} fill={entry.fill} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}`,
        renderChart: () => (
          <div className="w-full h-full flex items-center justify-center">
            <div className="relative w-36 h-36 flex items-center justify-center">
              <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                <circle cx="18" cy="18" r="14" fill="none" stroke="#3b82f6" strokeWidth="5" strokeDasharray="58 100" strokeDashoffset="0" />
                <circle cx="18" cy="18" r="14" fill="none" stroke="#10b981" strokeWidth="5" strokeDasharray="24 100" strokeDashoffset="-58" />
                <circle cx="18" cy="18" r="14" fill="none" stroke="#f59e0b" strokeWidth="5" strokeDasharray="12 100" strokeDashoffset="-82" />
                <circle cx="18" cy="18" r="14" fill="none" stroke="#8b5cf6" strokeWidth="5" strokeDasharray="6 100" strokeDashoffset="-94" />
              </svg>
              <div className="absolute text-center">
                <span className="text-base font-bold">1,020</span>
                <span className="block text-[9px] text-muted-foreground">Visitors</span>
              </div>
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
        code: `import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from "recharts";

const data = [
  { subject: "Speed", A: 120 },
  { subject: "Reliability", A: 98 },
  { subject: "Comfort", A: 86 },
  { subject: "Safety", A: 99 },
  { subject: "Efficiency", A: 85 },
];

export function RadarChartDefault() {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <RadarChart data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <Radar name="Metrics" dataKey="A" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.5} />
      </RadarChart>
    </ResponsiveContainer>
  );
}`,
        renderChart: () => (
          <div className="w-full h-full flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-36 h-36">
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
        code: `import { RadialBarChart, RadialBar, ResponsiveContainer, PolarAngleAxis } from "recharts";

export function RadialChartDefault() {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <RadialBarChart innerRadius="70%" outerRadius="100%" data={[{ value: 82 }]}>
        <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
        <RadialBar dataKey="value" cornerRadius={10} fill="#3b82f6" />
      </RadialBarChart>
    </ResponsiveContainer>
  );
}`,
        renderChart: () => (
          <div className="w-full h-full flex items-center justify-center">
            <div className="relative w-36 h-36 flex items-center justify-center">
              <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                <circle cx="18" cy="18" r="14" fill="none" stroke="currentColor" strokeOpacity="0.1" strokeWidth="4" />
                <circle cx="18" cy="18" r="14" fill="none" stroke="#3b82f6" strokeWidth="4" strokeDasharray="82 100" strokeLinecap="round" />
              </svg>
              <div className="absolute text-center">
                <span className="text-xl font-bold">82%</span>
                <span className="block text-[9px] text-muted-foreground">Completed</span>
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
        code: `import { ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

export function TooltipPreview() {
  return (
    <ChartTooltip content={<ChartTooltipContent indicator="dot" />} />
  );
}`,
        renderChart: () => (
          <div className="w-full h-full flex flex-col items-center justify-center p-4">
            <div className="rounded-xl border bg-background/95 backdrop-blur-sm p-3 shadow-xl border-border/80 text-xs space-y-1.5 w-44">
              <div className="font-semibold text-foreground border-b pb-1">April 2026</div>
              <div className="flex justify-between items-center text-muted-foreground">
                <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-blue-500" /> Revenue</span>
                <span className="font-bold text-foreground">$14,250</span>
              </div>
              <div className="flex justify-between items-center text-muted-foreground">
                <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-emerald-500" /> Growth</span>
                <span className="font-bold text-emerald-500">+18.4%</span>
              </div>
            </div>
          </div>
        ),
      },
    ],
  };

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

      {/* Featured Big Interactive Chart */}
      <div className="space-y-4 mb-16">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
            <BarChart2 className="h-4 w-4" /> Featured Interactive Display
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() =>
                copyToClipboard(
                  `npx @alvinahmad/ui add chart`,
                  "featured-copy"
                )
              }
              className="p-2 hover:bg-muted rounded-md text-muted-foreground hover:text-foreground cursor-pointer transition-colors"
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
                  id: "featured-main",
                  title: "Interactive Area Analytics",
                  category: "Area Charts",
                  description: "Full interactive Area Chart with dynamic filter and tooltip",
                  trending: "+18.4% growth",
                  period: "Q1 - Q3 2026",
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
                  renderChart: () => null,
                })
              }
              className="inline-flex items-center gap-1.5 rounded-md border bg-background px-3 py-1.5 text-sm font-medium shadow-xs hover:bg-accent hover:text-accent-foreground cursor-pointer"
            >
              <Code2 className="h-4 w-4" /> View Code
            </button>
          </div>
        </div>

        <div className="rounded-xl border bg-card shadow-sm overflow-hidden flex flex-col min-h-[420px]">
          <div className="p-6 pb-0 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b pb-6">
            <div>
              <h3 className="font-semibold text-lg">Area Chart - Interactive</h3>
              <p className="text-sm text-muted-foreground">Showing total visitors for {timeRange.toLowerCase()}</p>
            </div>
            
            {/* Interactive Time Filter Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="inline-flex items-center justify-between rounded-md border bg-background px-3 py-1.5 text-sm font-medium shadow-xs min-w-[160px] cursor-pointer hover:bg-muted/50 transition-colors"
              >
                {timeRange} <ChevronDown className="h-4 w-4 text-muted-foreground ml-2" />
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-1 w-44 rounded-lg border bg-popover text-popover-foreground shadow-lg z-20 py-1">
                  {["Last 3 months", "Last 30 days", "Last 7 days"].map((option) => (
                    <button
                      key={option}
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
            {/* Smooth Cubic Bezier Chart Visualization */}
            <div className="w-full h-64 relative overflow-hidden flex items-end">
              <svg viewBox="0 0 100 50" preserveAspectRatio="none" className="w-full h-full absolute bottom-0 left-0">
                <defs>
                  <linearGradient id="mainAreaGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.05" />
                  </linearGradient>
                  <linearGradient id="secAreaGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#10b981" stopOpacity="0.02" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,45 C15,25 30,48 45,28 C60,15 75,38 90,20 L100,28 L100,50 L0,50 Z"
                  fill="url(#mainAreaGrad)"
                />
                <path
                  d="M0,45 C15,25 30,48 45,28 C60,15 75,38 90,20 L100,28"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="1.5"
                />
                <path
                  d="M0,48 C15,35 30,42 45,20 C60,8 75,25 90,12 L100,18 L100,50 L0,50 Z"
                  fill="url(#secAreaGrad)"
                />
                <path
                  d="M0,48 C15,35 30,42 45,20 C60,8 75,25 90,12 L100,18"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
            <div className="flex justify-between mt-4 text-xs text-muted-foreground border-t pt-4">
              <span>Apr 6</span>
              <span>Apr 18</span>
              <span>Apr 30</span>
              <span>May 12</span>
              <span>May 24</span>
              <span>Jun 5</span>
              <span>Jun 17</span>
              <span>Jun 30</span>
            </div>
            <div className="flex items-center justify-center gap-6 mt-6 text-sm font-medium">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-blue-500" /> Desktop
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" /> Mobile
              </div>
            </div>
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
          <div className="bg-zinc-950 border border-zinc-800 rounded-2xl w-full max-w-2xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden text-zinc-100">
            <div className="flex items-center justify-between p-4 border-b border-zinc-800">
              <div>
                <h3 className="font-semibold text-sm">{activeCodeModal.title}</h3>
                <p className="text-xs text-zinc-400">React + Recharts Component</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => copyToClipboard(activeCodeModal.code, "modal-copy")}
                  className="flex items-center gap-1.5 text-xs text-zinc-300 hover:text-white bg-zinc-800 px-3 py-1.5 rounded-md cursor-pointer hover:bg-zinc-700 transition-colors"
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
                  onClick={() => setActiveCodeModal(null)}
                  className="p-1.5 text-zinc-400 hover:text-white rounded-md hover:bg-zinc-800 cursor-pointer"
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
