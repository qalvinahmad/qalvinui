"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  Menu,
  Type,
  Shuffle,
  Copy,
  Check,
  Search,
  ChevronDown,
  X,
  Plus,
  Minus,
  Trash,
  Upload,
  ShoppingCart,
  ArrowLeft,
  ArrowRight,
  Settings,
  Info,
  Sliders,
  CheckCircle2,
  TrendingUp,
  Sparkles,
  ArrowLeftRight,
  CaseSensitive,
  MoveVertical,
  AlignJustify,
  Layers,
  Layout,
  LayoutDashboard,
  Users,
  LineChart,
  Palette,
  ExternalLink,
} from "lucide-react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { LandingPageTemplate } from "@/components/templates/landing-page-template";
import { AdminDashboardTemplate } from "@/components/templates/admin-dashboard-template";
import { CRMTemplate } from "@/components/templates/crm-template";
import { SaaSAnalyticsTemplate } from "@/components/templates/saas-analytics-template";

// Preset configurations for Theme Studio
const styles = ["Nova", "Classic", "Modern", "Minimal"];
const baseColors = ["Neutral", "Zinc", "Slate", "Stone", "Gray"];
const themes = [
  { name: "Neutral", primary: "#18181b", accent: "#71717a", light: "#f4f4f5" },
  { name: "Purple", primary: "#7c3aed", accent: "#a855f7", light: "#ede9fe" },
  { name: "Blue", primary: "#2563eb", accent: "#3b82f6", light: "#dbeafe" },
  { name: "Emerald", primary: "#059669", accent: "#10b981", light: "#d1fae5" },
  { name: "Rose", primary: "#e11d48", accent: "#f43f5e", light: "#ffe4e6" },
  { name: "Amber", primary: "#d97706", accent: "#f59e0b", light: "#fef3c7" },
];
const chartColors = [
  { name: "Neutral", bars: ["#27272a", "#52525b", "#71717a", "#a1a1aa", "#d4d4d8", "#e4e4e7"] },
  { name: "Purple", bars: ["#581c87", "#7e22ce", "#9333ea", "#a855f7", "#c084fc", "#e9d5ff"] },
  { name: "Blue", bars: ["#1e3a8a", "#1d4ed8", "#2563eb", "#3b82f6", "#60a5fa", "#bfdbfe"] },
  { name: "Emerald", bars: ["#064e3b", "#047857", "#059669", "#10b981", "#34d399", "#a7f3d0"] },
  { name: "Sunset", bars: ["#831843", "#be123c", "#e11d48", "#f43f5e", "#fb7185", "#fecdd3"] },
];
const headingFonts = [
  { name: "Inter", value: "'Inter', sans-serif" },
  { name: "Playfair Display", value: "'Playfair Display', serif" },
  { name: "Plus Jakarta Sans", value: "'Plus Jakarta Sans', sans-serif" },
  { name: "Outfit", value: "'Outfit', sans-serif" },
  { name: "Space Grotesk", value: "'Space Grotesk', sans-serif" },
  { name: "Cinzel", value: "'Cinzel', serif" },
  { name: "Geist", value: "'Geist', sans-serif" },
  { name: "Lora", value: "'Lora', serif" },
];

// Typography configurations
const fontFamilies = {
  heading: [
    { name: "Geist", value: "'Geist', sans-serif" },
    { name: "Playfair Display", value: "'Playfair Display', serif" },
    { name: "Cinzel", value: "'Cinzel', serif" },
    { name: "Plus Jakarta Sans", value: "'Plus Jakarta Sans', sans-serif" },
    { name: "Inter", value: "'Inter', sans-serif" },
    { name: "Outfit", value: "'Outfit', sans-serif" },
    { name: "Space Grotesk", value: "'Space Grotesk', sans-serif" },
    { name: "Syne", value: "'Syne', sans-serif" },
    { name: "Lora", value: "'Lora', serif" },
    { name: "Roboto", value: "'Roboto', sans-serif" },
    { name: "Open Sans", value: "'Open Sans', sans-serif" },
    { name: "Lato", value: "'Lato', sans-serif" },
  ],
  body: [
    { name: "Geist", value: "'Geist', sans-serif" },
    { name: "Inter", value: "'Inter', sans-serif" },
    { name: "Plus Jakarta Sans", value: "'Plus Jakarta Sans', sans-serif" },
    { name: "Lora", value: "'Lora', serif" },
    { name: "Merriweather", value: "'Merriweather', serif" },
    { name: "Roboto", value: "'Roboto', sans-serif" },
    { name: "Open Sans", value: "'Open Sans', sans-serif" },
    { name: "Lato", value: "'Lato', sans-serif" },
    { name: "Poppins", value: "'Poppins', sans-serif" },
  ],
  mono: [
    { name: "Geist Mono", value: "'Geist Mono', monospace" },
    { name: "JetBrains Mono", value: "'JetBrains Mono', monospace" },
    { name: "Fira Code", value: "'Fira Code', monospace" },
    { name: "Source Code Pro", value: "'Source Code Pro', monospace" },
    { name: "Space Mono", value: "'Space Mono', monospace" },
    { name: "IBM Plex Mono", value: "'IBM Plex Mono', monospace" },
  ],
};

const measures = ["65ch", "70ch", "75ch", "80ch", "85ch"];
const sizes = ["14px", "15px", "16px", "17px", "18px", "20px"];
const leadings = ["Tight (1.5)", "Regular (1.75)", "Relaxed (2.0)", "Loose (2.2)"];
const leadingMap: Record<string, string> = {
  "Tight (1.5)": "1.5",
  "Regular (1.75)": "1.75",
  "Relaxed (2.0)": "2.0",
  "Loose (2.2)": "2.2",
};
const flows = ["Tight (1.125em)", "Regular (1.25em)", "Relaxed (1.5em)", "Spacious (1.75em)"];
const flowMap: Record<string, string> = {
  "Tight (1.125em)": "1.125em",
  "Regular (1.25em)": "1.25em",
  "Relaxed (1.5em)": "1.5em",
  "Spacious (1.75em)": "1.75em",
};

function SettingRow({
  label,
  value,
  icon: Icon,
  onClick,
}: {
  label: string;
  value?: string;
  icon?: any;
  onClick?: () => void;
}) {
  return (
    <div
      onClick={onClick}
      role="button"
      tabIndex={0}
      className="flex items-center justify-between p-3.5 border-b border-white/10 hover:bg-white/5 cursor-pointer transition-colors select-none text-left w-full"
    >
      <div className="flex flex-col gap-0.5 min-w-0">
        <span className="text-[11px] text-white/60 font-medium">{label}</span>
        {value && <span className="text-sm font-semibold text-white truncate">{value}</span>}
      </div>
      {Icon ? (
        <Icon className="h-4 w-4 text-white/60 shrink-0 ml-2" />
      ) : (
        <div className="h-3.5 w-3.5 rounded-full border border-white/40 bg-transparent shrink-0 ml-2" />
      )}
    </div>
  );
}

interface StudioClientProps {
  initialTab?: "components" | "typeset" | "templates";
}

export function StudioClient({ initialTab = "components" }: StudioClientProps) {
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tab") as "components" | "typeset" | "templates" | null;
  const [activeTab, setActiveTab] = useState<"components" | "typeset" | "templates">(
    tabParam || initialTab
  );

  useEffect(() => {
    if (tabParam && ["components", "typeset", "templates"].includes(tabParam)) {
      setActiveTab(tabParam);
    }
  }, [tabParam]);

  // Theme Studio State
  const [activeStyle, setActiveStyle] = useState("Nova");
  const [activeBaseColor, setActiveBaseColor] = useState("Zinc");
  const [activeTheme, setActiveTheme] = useState("Purple");
  const [activeChartColor, setActiveChartColor] = useState("Neutral");
  const [activeHeading, setActiveHeading] = useState("Inter");

  // Interactive playground state
  const [sliderValue, setSliderValue] = useState(60);
  const [payoutAmount, setPayoutAmount] = useState(2500);
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(true);
  const [switchToggled, setSwitchToggled] = useState(true);
  const [selectedRadio, setSelectedRadio] = useState("option1");
  const [checkbox1, setCheckbox1] = useState(true);
  const [checkbox2, setCheckbox2] = useState(false);
  const [currency, setCurrency] = useState("USD — United States Dollar");
  const [trafficTab, setTrafficTab] = useState("01");
  const [inputName, setInputName] = useState("");
  const [inputMessage, setInputMessage] = useState("");
  const [copied, setCopied] = useState(false);
  const [isSecretsModalOpen, setIsSecretsModalOpen] = useState(false);
  const [secretsList, setSecretsList] = useState([
    { key: "DATABASE_URL", value: "postgresql://postgres:••••••••@ep-cold-wave.neon.tech/main", visible: false },
    { key: "NEXT_PUBLIC_APP_URL", value: "https://qalvinui.vercel.app", visible: true },
    { key: "STRIPE_SECRET_KEY", value: "sk_test_51Mz9••••••••••••••••", visible: false },
  ]);
  const [newKey, setNewKey] = useState("");
  const [newVal, setNewVal] = useState("");

  // Typeset State
  const [measure, setMeasure] = useState("80ch");
  const [typesetHeading, setTypesetHeading] = useState("Geist");
  const [typesetBody, setTypesetBody] = useState("Geist");
  const [typesetMono, setTypesetMono] = useState("Geist Mono");
  const [typesetSize, setTypesetSize] = useState("16px");
  const [typesetLeading, setTypesetLeading] = useState("Regular (1.75)");
  const [typesetFlow, setTypesetFlow] = useState("Regular (1.25em)");
  const [activeSpecimenPage, setActiveSpecimenPage] = useState(1);

  // Templates State
  const [selectedTemplate, setSelectedTemplate] = useState<"landing" | "admin" | "crm" | "saas">("landing");

  // Derived properties
  const currentTheme = themes.find((t) => t.name === activeTheme) || themes[1];
  const currentChart = chartColors.find((c) => c.name === activeChartColor) || chartColors[0];
  const currentHeadingFont = headingFonts.find((f) => f.name === activeHeading)?.value || "'Inter', sans-serif";

  const getHeadingFont = () =>
    fontFamilies.heading.find((f) => f.name === typesetHeading)?.value || "'Geist', sans-serif";
  const getBodyFont = () =>
    fontFamilies.body.find((f) => f.name === typesetBody)?.value || "'Geist', sans-serif";
  const getMonoFont = () =>
    fontFamilies.mono.find((f) => f.name === typesetMono)?.value || "'Geist Mono', monospace";

  const getBorderRadius = () => {
    switch (activeStyle) {
      case "Minimal":
        return "rounded-none";
      case "Classic":
        return "rounded-lg";
      case "Modern":
        return "rounded-3xl";
      default:
        return "rounded-2xl"; // Nova
    }
  };

  const handleShuffleTheme = () => {
    const nextStyle = styles[Math.floor(Math.random() * styles.length)];
    const nextBase = baseColors[Math.floor(Math.random() * baseColors.length)];
    const nextTheme = themes[Math.floor(Math.random() * themes.length)].name;
    const nextChart = chartColors[Math.floor(Math.random() * chartColors.length)].name;
    const nextHeading = headingFonts[Math.floor(Math.random() * headingFonts.length)].name;

    setActiveStyle(nextStyle);
    setActiveBaseColor(nextBase);
    setActiveTheme(nextTheme);
    setActiveChartColor(nextChart);
    setActiveHeading(nextHeading);
    toast.success(`Theme updated: ${nextStyle} • ${nextTheme} • ${nextHeading}`);
  };

  const handleShuffleTypeset = () => {
    setMeasure(measures[Math.floor(Math.random() * measures.length)]);
    setTypesetHeading(fontFamilies.heading[Math.floor(Math.random() * fontFamilies.heading.length)].name);
    setTypesetBody(fontFamilies.body[Math.floor(Math.random() * fontFamilies.body.length)].name);
    setTypesetMono(fontFamilies.mono[Math.floor(Math.random() * fontFamilies.mono.length)].name);
    setTypesetSize(sizes[Math.floor(Math.random() * sizes.length)]);
    setTypesetLeading(leadings[Math.floor(Math.random() * leadings.length)]);
    setTypesetFlow(flows[Math.floor(Math.random() * flows.length)]);
    toast.success("Typography rhythm shuffled!");
  };

  const handleCopyCode = () => {
    if (activeTab === "components") {
      const code = `// Qalvin UI Generated Theme Preset
export const themePreset = {
  style: "${activeStyle}",
  baseColor: "${activeBaseColor}",
  theme: "${activeTheme}",
  primaryColor: "${currentTheme.primary}",
  chartPalette: "${activeChartColor}",
  headingFont: "${activeHeading}",
};`;
      navigator.clipboard.writeText(code);
      setCopied(true);
      toast.success("Theme configuration copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    } else if (activeTab === "typeset") {
      const code = `// Typography Tokens
export const typography = {
  heading: "${typesetHeading}",
  body: "${typesetBody}",
  mono: "${typesetMono}",
  fontSize: "${typesetSize}",
  lineHeight: "${leadingMap[typesetLeading] || "1.75"}",
  paragraphSpacing: "${flowMap[typesetFlow] || "1.25em"}",
  measure: "${measure}",
};

/* CSS Variables */
:root {
  --font-heading: ${getHeadingFont()};
  --font-body: ${getBodyFont()};
  --font-mono: ${getMonoFont()};
  --font-size: ${typesetSize};
  --line-height: ${leadingMap[typesetLeading] || "1.75"};
  --paragraph-spacing: ${flowMap[typesetFlow] || "1.25em"};
  --max-width: ${measure};
}`;
      navigator.clipboard.writeText(code);
      setCopied(true);
      toast.success("Typography CSS tokens copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    } else {
      const importMap = {
        landing: `import { LandingPageTemplate } from "@/components/templates/landing-page-template";\n\nexport default function Page() {\n  return <LandingPageTemplate primaryColor="${currentTheme.primary}" fontFamily="${currentHeadingFont}" />;\n}`,
        admin: `import { AdminDashboardTemplate } from "@/components/templates/admin-dashboard-template";\n\nexport default function Page() {\n  return <AdminDashboardTemplate primaryColor="${currentTheme.primary}" fontFamily="${currentHeadingFont}" />;\n}`,
        crm: `import { CRMTemplate } from "@/components/templates/crm-template";\n\nexport default function Page() {\n  return <CRMTemplate primaryColor="${currentTheme.primary}" fontFamily="${currentHeadingFont}" />;\n}`,
        saas: `import { SaaSAnalyticsTemplate } from "@/components/templates/saas-analytics-template";\n\nexport default function Page() {\n  return <SaaSAnalyticsTemplate primaryColor="${currentTheme.primary}" fontFamily="${currentHeadingFont}" />;\n}`,
      };
      navigator.clipboard.writeText(importMap[selectedTemplate]);
      setCopied(true);
      toast.success("Template snippet copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const pageContents = [
    {
      title: "Building a Streaming Chatbot",
      content: `The useChat hook makes it effortless to create a conversational user interface for your chatbot application. It enables the streaming of chat messages from your AI provider, manages the chat state, and updates the UI automatically as new messages arrive.`,
    },
    {
      title: "Getting Started with React & Modern Web",
      content: `React is a JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called components. React uses a declarative paradigm that makes it easier to reason about your application.`,
    },
    {
      title: "Modern CSS & Typography Systems",
      content: `CSS has evolved significantly over the years. With features like CSS Grid, Flexbox, Custom Properties, and Container Queries, we can now create complex layouts and responsive designs with less code and more flexibility.`,
    },
    {
      title: "TypeScript Best Practices for Scaling",
      content: `TypeScript adds static type checking to JavaScript. By using interfaces, generics, and utility types, you can catch errors early, improve code documentation, and enhance the developer experience with better autocompletion.`,
    },
    {
      title: "Performance Optimization at Scale",
      content: `Web performance is crucial for user experience. Techniques like code splitting, lazy loading, image optimization, and caching strategies can significantly improve your application's loading time and runtime performance.`,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-[1600px] space-y-6" suppressHydrationWarning>
      {/* Studio Header & Navigation Switcher */}
      <div className="flex flex-col gap-4 border-b border-border/60 pb-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="text-xs">
              <Sparkles className="size-3 mr-1 text-primary" /> Qalvin UI Studio
            </Badge>
            <span className="text-xs text-muted-foreground font-mono">v2.0</span>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground mt-1">
            Component, Typography & Template Studio
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
            Design themes, tune optical typography, and preview production-ready templates in one workspace.
          </p>
        </div>

        {/* Studio Mode Tabs */}
        <div className="inline-flex rounded-2xl border border-border/80 bg-muted/40 p-1.5 shadow-2xs">
          <button
            type="button"
            onClick={() => setActiveTab("components")}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              activeTab === "components"
                ? "bg-background text-foreground shadow-2xs"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Palette className="size-3.5" /> Theme & UI
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("typeset")}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              activeTab === "typeset"
                ? "bg-background text-foreground shadow-2xs"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Type className="size-3.5" /> Typeset & Fonts
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("templates")}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              activeTab === "templates"
                ? "bg-background text-foreground shadow-2xs"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Layout className="size-3.5" /> Live Templates
          </button>
        </div>
      </div>

      {/* Main Studio Body: Sidebar + Dynamic Canvas */}
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Left Control Sidebar */}
        <aside className="w-full lg:w-72 shrink-0 bg-[#252525] text-white rounded-2xl overflow-hidden shadow-xl lg:sticky lg:top-20 flex flex-col border border-neutral-800 z-20">
          <div className="flex items-center justify-between p-4 border-b border-white/10">
            <span className="text-sm font-semibold flex items-center gap-2">
              <Menu className="h-4 w-4 text-white/60" />
              {activeTab === "components" && "Theme Controls"}
              {activeTab === "typeset" && "Typography Controls"}
              {activeTab === "templates" && "Template Theme"}
            </span>
            <Badge variant="outline" className="text-[10px] text-white/70 border-white/20 capitalize">
              {activeTab}
            </Badge>
          </div>

          {/* Sidebar Controls for Theme & UI */}
          {(activeTab === "components" || activeTab === "templates") && (
            <div className="flex flex-col divide-y divide-white/5">
              <SettingRow
                label="Style Radius"
                value={activeStyle}
                onClick={() => {
                  const next = (styles.indexOf(activeStyle) + 1) % styles.length;
                  setActiveStyle(styles[next]);
                }}
              />
              <SettingRow
                label="Base Color"
                value={activeBaseColor}
                onClick={() => {
                  const next = (baseColors.indexOf(activeBaseColor) + 1) % baseColors.length;
                  setActiveBaseColor(baseColors[next]);
                }}
              />
              <SettingRow
                label="Theme Accent"
                value={activeTheme}
                onClick={() => {
                  const names = themes.map((t) => t.name);
                  const next = (names.indexOf(activeTheme) + 1) % names.length;
                  setActiveTheme(names[next]);
                }}
              />
              <SettingRow
                label="Chart Palette"
                value={activeChartColor}
                onClick={() => {
                  const names = chartColors.map((c) => c.name);
                  const next = (names.indexOf(activeChartColor) + 1) % names.length;
                  setActiveChartColor(names[next]);
                }}
              />
              <SettingRow
                label="Heading Font"
                value={activeHeading}
                icon={Type}
                onClick={() => {
                  const names = headingFonts.map((f) => f.name);
                  const next = (names.indexOf(activeHeading) + 1) % names.length;
                  setActiveHeading(names[next]);
                }}
              />
            </div>
          )}

          {/* Sidebar Controls for Typography / Typeset */}
          {activeTab === "typeset" && (
            <div className="flex flex-col divide-y divide-white/5">
              <SettingRow
                label="Measure"
                value={measure}
                icon={ArrowLeftRight}
                onClick={() => {
                  const nextIndex = (measures.indexOf(measure) + 1) % measures.length;
                  setMeasure(measures[nextIndex]);
                }}
              />
              <SettingRow
                label="Heading"
                value={typesetHeading}
                icon={CaseSensitive}
                onClick={() => {
                  const fontNames = fontFamilies.heading.map((f) => f.name);
                  const nextIndex = (fontNames.indexOf(typesetHeading) + 1) % fontNames.length;
                  setTypesetHeading(fontNames[nextIndex]);
                }}
              />
              <SettingRow
                label="Body"
                value={typesetBody}
                icon={CaseSensitive}
                onClick={() => {
                  const fontNames = fontFamilies.body.map((f) => f.name);
                  const nextIndex = (fontNames.indexOf(typesetBody) + 1) % fontNames.length;
                  setTypesetBody(fontNames[nextIndex]);
                }}
              />
              <SettingRow
                label="Mono"
                value={typesetMono}
                icon={CaseSensitive}
                onClick={() => {
                  const fontNames = fontFamilies.mono.map((f) => f.name);
                  const nextIndex = (fontNames.indexOf(typesetMono) + 1) % fontNames.length;
                  setTypesetMono(fontNames[nextIndex]);
                }}
              />
              <SettingRow
                label="Base Font Size"
                value={typesetSize}
                icon={Type}
                onClick={() => {
                  const nextIndex = (sizes.indexOf(typesetSize) + 1) % sizes.length;
                  setTypesetSize(sizes[nextIndex]);
                }}
              />
              <SettingRow
                label="Leading (Line Height)"
                value={typesetLeading}
                icon={MoveVertical}
                onClick={() => {
                  const nextIndex = (leadings.indexOf(typesetLeading) + 1) % leadings.length;
                  setTypesetLeading(leadings[nextIndex]);
                }}
              />
              <SettingRow
                label="Flow (Paragraph)"
                value={typesetFlow}
                icon={AlignJustify}
                onClick={() => {
                  const nextIndex = (flows.indexOf(typesetFlow) + 1) % flows.length;
                  setTypesetFlow(flows[nextIndex]);
                }}
              />
            </div>
          )}

          {/* Action buttons at bottom of sidebar */}
          <div className="p-4 flex flex-col gap-2.5 bg-[#1e1e1e] border-t border-white/10">
            <button
              type="button"
              onClick={activeTab === "typeset" ? handleShuffleTypeset : handleShuffleTheme}
              className="w-full py-2.5 rounded-xl border border-white/20 hover:bg-white/10 text-xs font-semibold text-white transition-[color,background-color,transform] duration-150 flex items-center justify-center gap-2 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 active:scale-[0.96] motion-reduce:active:scale-100"
            >
              <Shuffle className="h-3.5 w-3.5" />
              {activeTab === "typeset" ? "Shuffle Typography" : "Shuffle Palette"}
            </button>
            <button
              type="button"
              onClick={handleCopyCode}
              style={{ backgroundColor: currentTheme.primary }}
              className="w-full py-2.5 rounded-xl text-white font-bold text-xs hover:opacity-90 transition-[opacity,transform] duration-150 flex items-center justify-center gap-2 cursor-pointer shadow-lg outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 active:scale-[0.96] motion-reduce:active:scale-100"
            >
              {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
              {copied ? "Copied to Clipboard!" : "Export Tokens / Snippet"}
            </button>
          </div>
        </aside>

        {/* Right Canvas: Changes Dynamically Based on Selected Tab */}
        <main className="flex-1 w-full min-w-0">
          {/* TAB 1: THEME & COMPONENTS PLAYGROUND */}
          {activeTab === "components" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* COLUMN 1 */}
              <div className="flex flex-col gap-6">
                {/* Theme & Palette Showcase Card */}
                <div className={`border bg-card p-6 shadow-sm ${getBorderRadius()} transition-all duration-300`}>
                  <h2
                    className="text-2xl font-bold tracking-tight mb-2 text-foreground"
                    style={{ fontFamily: currentHeadingFont }}
                  >
                    {activeStyle} - {activeHeading}
                  </h2>
                  <p className="text-sm text-muted-foreground mb-6">
                    Active Theme: <strong style={{ color: currentTheme.primary }}>{activeTheme}</strong> with{" "}
                    {activeBaseColor} base token foundation.
                  </p>

                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-3">
                      <div className="flex flex-col items-center gap-1.5">
                        <div
                          className="h-10 w-10 rounded-lg border shadow-xs transition-colors"
                          style={{ backgroundColor: currentTheme.primary }}
                        />
                        <span className="text-[10px] text-muted-foreground font-mono">primary</span>
                      </div>
                      <div className="flex flex-col items-center gap-1.5">
                        <div
                          className="h-10 w-10 rounded-lg border shadow-xs transition-colors"
                          style={{ backgroundColor: currentTheme.accent }}
                        />
                        <span className="text-[10px] text-muted-foreground font-mono">accent</span>
                      </div>
                      <div className="flex flex-col items-center gap-1.5">
                        <div
                          className="h-10 w-10 rounded-lg border shadow-xs transition-colors"
                          style={{ backgroundColor: currentTheme.light }}
                        />
                        <span className="text-[10px] text-muted-foreground font-mono">light</span>
                      </div>
                      <div className="flex flex-col items-center gap-1.5">
                        <div className="h-10 w-10 rounded-lg border shadow-xs bg-card" />
                        <span className="text-[10px] text-muted-foreground font-mono">card</span>
                      </div>
                    </div>

                    <div className="pt-2 border-t">
                      <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider block mb-2">
                        Chart Palette ({activeChartColor})
                      </span>
                      <div className="flex gap-2">
                        {currentChart.bars.map((bg, i) => (
                          <div
                            key={i}
                            className="h-7 flex-1 rounded-md shadow-2xs transition-colors"
                            style={{ backgroundColor: bg }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Typography Rhythm Preview */}
                <div className={`border bg-card p-6 shadow-sm ${getBorderRadius()} transition-all duration-300`}>
                  <div className="text-[10px] font-bold tracking-wider text-muted-foreground uppercase mb-2">
                    Typography Pairing
                  </div>
                  <h3
                    className="text-xl font-bold tracking-tight mb-2 text-foreground"
                    style={{ fontFamily: currentHeadingFont }}
                  >
                    The Quick Brown Fox Jumps Over The Lazy Dog
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Accessible, high-performance UI components built on standard React 19 primitives,
                    color-mix token pipelines, and fluid spring animations.
                  </p>
                </div>

                {/* Live Controls Card */}
                <div className={`border bg-card p-6 shadow-sm ${getBorderRadius()} space-y-4`}>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold">Two-Factor Authentication</span>
                    <button
                      type="button"
                      onClick={() => setTwoFactorEnabled(!twoFactorEnabled)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors cursor-pointer ${
                        twoFactorEnabled ? "bg-primary" : "bg-muted"
                      }`}
                      style={{ backgroundColor: twoFactorEnabled ? currentTheme.primary : undefined }}
                    >
                      <span
                        className={`inline-block size-4 transform rounded-full bg-white transition-transform ${
                          twoFactorEnabled ? "translate-x-6" : "translate-x-1"
                        }`}
                      />
                    </button>
                  </div>
                  <div className="pt-2">
                    <label className="text-xs text-muted-foreground flex justify-between mb-1.5">
                      <span>Volume Slider</span>
                      <span className="font-mono">{sliderValue}%</span>
                    </label>
                    <input
                      type="range"
                      min={0}
                      max={100}
                      value={sliderValue}
                      onChange={(e) => setSliderValue(Number(e.target.value))}
                      className="w-full accent-primary cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              {/* COLUMN 2 */}
              <div className="flex flex-col gap-6">
                {/* Traffic Dynamics Chart Card */}
                <div className={`border bg-card p-6 shadow-sm ${getBorderRadius()} space-y-4`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-base" style={{ fontFamily: currentHeadingFont }}>
                        Traffic Dynamics
                      </h4>
                      <p className="text-xs text-muted-foreground">Weekly visitor distribution</p>
                    </div>
                    <div className="inline-flex rounded-lg border bg-muted/40 p-1">
                      {["01", "02", "03"].map((tab) => (
                        <button
                          key={tab}
                          type="button"
                          onClick={() => setTrafficTab(tab)}
                          className={`px-2.5 py-0.5 text-xs font-semibold rounded-md transition-all ${
                            trafficTab === tab
                              ? "bg-background text-foreground shadow-2xs"
                              : "text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          {tab}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex h-36 items-end gap-2 pt-4 px-2">
                    {[45, 75, 50, 85, 60, 95, 70].map((val, idx) => (
                      <div key={idx} className="flex-1 flex flex-col items-center gap-1.5">
                        <div
                          className="w-full rounded-t-md transition-all shadow-2xs"
                          style={{
                            height: `${val}%`,
                            backgroundColor: currentChart.bars[idx % currentChart.bars.length],
                          }}
                        />
                        <span className="text-[10px] text-muted-foreground font-mono">
                          {["M", "T", "W", "T", "F", "S", "S"][idx]}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Form Controls Card */}
                <div className={`border bg-card p-6 shadow-sm ${getBorderRadius()} space-y-3.5`}>
                  <h4 className="font-bold text-sm" style={{ fontFamily: currentHeadingFont }}>
                    Interactive Inputs
                  </h4>
                  <input
                    type="text"
                    value={inputName}
                    onChange={(e) => setInputName(e.target.value)}
                    placeholder="Enter customer name..."
                    className="w-full h-9 px-3 rounded-xl border bg-background text-xs outline-none focus:ring-2 focus:ring-primary/20"
                  />
                  <textarea
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Notes or comments..."
                    rows={3}
                    className="w-full p-3 rounded-xl border bg-background text-xs outline-none focus:ring-2 focus:ring-primary/20 resize-none"
                  />
                  <Button
                    onClick={() => {
                      toast.success(`Form submitted for ${inputName || "Anonymous"}`);
                      setInputName("");
                      setInputMessage("");
                    }}
                    className="w-full text-white font-semibold text-xs h-9 rounded-xl shadow-xs"
                    style={{ backgroundColor: currentTheme.primary }}
                  >
                    Submit Data
                  </Button>
                </div>
              </div>

              {/* COLUMN 3 */}
              <div className="flex flex-col gap-6">
                {/* Instant Checkout Simulation */}
                <div className={`border bg-card p-6 shadow-sm ${getBorderRadius()} space-y-4`}>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-muted-foreground uppercase">Instant Cart</span>
                    <Badge variant="secondary" className="text-[10px]">Ready</Badge>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <div>
                      <p className="text-xs font-semibold">Qalvin UI Pro License</p>
                      <p className="text-[11px] text-muted-foreground">Annual seat access</p>
                    </div>
                    <span className="text-sm font-bold font-mono">$199.00</span>
                  </div>
                  <div className="flex justify-between items-center text-xs font-semibold">
                    <span>Total Due</span>
                    <span className="text-base font-bold text-foreground font-mono">$199.00</span>
                  </div>
                  <Button
                    onClick={() => toast.success("Checkout simulation triggered")}
                    className="w-full text-white font-semibold text-xs h-9 rounded-xl shadow-md"
                    style={{ backgroundColor: currentTheme.primary }}
                  >
                    Complete Checkout
                  </Button>
                </div>

                {/* Secrets Manager Card */}
                <div className={`border bg-card p-6 shadow-sm ${getBorderRadius()} space-y-3`}>
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-sm" style={{ fontFamily: currentHeadingFont }}>
                      Environment Secrets
                    </h4>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setIsSecretsModalOpen(true)}
                      className="h-7 text-xs rounded-lg"
                    >
                      Manage
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Store database URLs, Stripe API keys, and deployment endpoints safely.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: TYPOGRAPHY & TYPESET STUDIO */}
          {activeTab === "typeset" && (
            <div className="bg-card border border-border rounded-2xl shadow-sm min-h-[750px] relative p-8 md:p-14 lg:p-20 overflow-hidden flex flex-col justify-between">
              <div
                className="w-full transition-all duration-150"
                style={{
                  fontFamily: getBodyFont(),
                  fontSize: typesetSize,
                  lineHeight: leadingMap[typesetLeading] || "1.75",
                  maxWidth: measure,
                }}
              >
                <div className="mb-6 flex items-center gap-2">
                  <Badge variant="outline" className="text-xs font-mono">
                    Font: {typesetHeading} / {typesetBody}
                  </Badge>
                  <Badge variant="outline" className="text-xs font-mono">
                    Measure: {measure}
                  </Badge>
                </div>

                <h1
                  className="text-4xl md:text-5xl font-bold tracking-tight mb-8 text-foreground transition-all"
                  style={{
                    fontFamily: getHeadingFont(),
                  }}
                >
                  {pageContents[activeSpecimenPage - 1].title}
                </h1>

                <p className="text-muted-foreground" style={{ marginBottom: flowMap[typesetFlow] || "1.25em" }}>
                  The{" "}
                  <code
                    className="bg-muted px-2 py-0.5 rounded-md font-mono text-sm border text-foreground"
                    style={{ fontFamily: getMonoFont() }}
                  >
                    useChat
                  </code>{" "}
                  hook makes it effortless to create a conversational user interface for your application. It
                  enables the streaming of chat messages from your AI provider, manages the chat state, and updates
                  the UI automatically as new messages arrive.
                </p>

                <p className="text-muted-foreground" style={{ marginBottom: flowMap[typesetFlow] || "1.25em" }}>
                  {pageContents[activeSpecimenPage - 1].content}
                </p>

                <blockquote
                  className="pl-4 border-l-2 my-6 italic text-foreground/90 font-medium"
                  style={{ borderColor: currentTheme.primary }}
                >
                  "Good typography is invisible. Great typography creates emotional resonance while disappearing into
                  pure content consumption."
                </blockquote>
              </div>

              {/* Specimen Pagination */}
              <div className="flex items-center justify-between border-t border-border/60 pt-6 mt-12">
                <span className="text-xs text-muted-foreground">
                  Specimen Article {activeSpecimenPage} of {pageContents.length}
                </span>
                <div className="flex items-center gap-2">
                  {pageContents.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveSpecimenPage(idx + 1)}
                      className={`size-7 rounded-lg text-xs font-semibold transition-all ${
                        activeSpecimenPage === idx + 1
                          ? "bg-foreground text-background shadow-2xs"
                          : "border border-border/60 text-muted-foreground hover:bg-muted"
                      }`}
                    >
                      {idx + 1}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: LIVE TEMPLATES (LANDING, ADMIN, CRM, SAAS) */}
          {activeTab === "templates" && (
            <div className="space-y-6">
              {/* Template Switcher Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border/70 bg-card p-3 shadow-2xs">
                <div className="flex flex-wrap items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedTemplate("landing")}
                    className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                      selectedTemplate === "landing"
                        ? "bg-primary text-primary-foreground shadow-2xs"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    <Layout className="size-3.5" /> SaaS Landing
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedTemplate("admin")}
                    className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                      selectedTemplate === "admin"
                        ? "bg-primary text-primary-foreground shadow-2xs"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    <LayoutDashboard className="size-3.5" /> Admin Dashboard
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedTemplate("crm")}
                    className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                      selectedTemplate === "crm"
                        ? "bg-primary text-primary-foreground shadow-2xs"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    <Users className="size-3.5" /> Sales CRM
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedTemplate("saas")}
                    className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                      selectedTemplate === "saas"
                        ? "bg-primary text-primary-foreground shadow-2xs"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    <LineChart className="size-3.5" /> SaaS Analytics
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <Link href="/templates">
                    <Button variant="outline" size="sm" className="h-8 text-xs gap-1.5 rounded-lg">
                      <ExternalLink className="size-3.5" /> Standalone Page
                    </Button>
                  </Link>
                  <Button
                    size="sm"
                    onClick={handleCopyCode}
                    className="h-8 text-xs gap-1.5 rounded-lg text-white font-medium"
                    style={{ backgroundColor: currentTheme.primary }}
                  >
                    {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
                    Copy Template
                  </Button>
                </div>
              </div>

              {/* Template Canvas Container with Inherited Theme & Typography */}
              <div className="rounded-2xl border border-border/80 bg-background shadow-xl overflow-hidden">
                {selectedTemplate === "landing" && (
                  <LandingPageTemplate primaryColor={currentTheme.primary} fontFamily={currentHeadingFont} />
                )}
                {selectedTemplate === "admin" && (
                  <AdminDashboardTemplate primaryColor={currentTheme.primary} fontFamily={currentHeadingFont} />
                )}
                {selectedTemplate === "crm" && (
                  <CRMTemplate primaryColor={currentTheme.primary} fontFamily={currentHeadingFont} />
                )}
                {selectedTemplate === "saas" && (
                  <SaaSAnalyticsTemplate primaryColor={currentTheme.primary} fontFamily={currentHeadingFont} />
                )}
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Secrets Modal */}
      {isSecretsModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setIsSecretsModalOpen(false)}
        >
          <div
            className="w-full max-w-md rounded-2xl border bg-card p-6 shadow-xl space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-base">Secrets & Environment Variables</h3>
                <p className="text-xs text-muted-foreground mt-0.5">Manage production endpoints.</p>
              </div>
              <button
                type="button"
                onClick={() => setIsSecretsModalOpen(false)}
                className="rounded-full p-1 text-muted-foreground hover:bg-muted cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
              {secretsList.map((sec, idx) => (
                <div key={idx} className="flex items-center justify-between gap-3 p-2.5 rounded-xl border bg-muted/30 text-xs">
                  <div className="min-w-0 flex-1">
                    <p className="font-mono font-bold text-foreground truncate">{sec.key}</p>
                    <p className="font-mono text-[11px] text-muted-foreground truncate">
                      {sec.visible ? sec.value : "••••••••••••••••••••••••"}
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      onClick={() => {
                        setSecretsList((prev) =>
                          prev.map((s, i) => (i === idx ? { ...s, visible: !s.visible } : s))
                        );
                      }}
                      className="p-1 rounded hover:bg-muted text-muted-foreground hover:text-foreground cursor-pointer"
                      title={sec.visible ? "Hide" : "Show"}
                    >
                      <Info className="h-3.5 w-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        navigator.clipboard.writeText(sec.value);
                        toast.success(`Copied ${sec.key}`);
                      }}
                      className="p-1 rounded hover:bg-muted text-muted-foreground hover:text-foreground cursor-pointer"
                      title="Copy"
                    >
                      <Copy className="h-3.5 w-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setSecretsList((prev) => prev.filter((_, i) => i !== idx));
                        toast.error(`Deleted ${sec.key}`);
                      }}
                      className="p-1 rounded hover:bg-destructive/10 text-muted-foreground hover:text-destructive cursor-pointer"
                      title="Delete"
                    >
                      <Trash className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 border-t space-y-3">
              <span className="text-xs font-semibold text-muted-foreground">Add New Variable</span>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  value={newKey}
                  onChange={(e) => setNewKey(e.target.value.toUpperCase())}
                  placeholder="KEY_NAME"
                  className="h-8 px-2.5 text-xs rounded-lg border bg-background font-mono"
                />
                <input
                  type="text"
                  value={newVal}
                  onChange={(e) => setNewVal(e.target.value)}
                  placeholder="value..."
                  className="h-8 px-2.5 text-xs rounded-lg border bg-background font-mono"
                />
              </div>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => {
                    if (!newKey.trim()) {
                      toast.error("Please enter variable name");
                      return;
                    }
                    setSecretsList((prev) => [...prev, { key: newKey, value: newVal, visible: false }]);
                    setNewKey("");
                    setNewVal("");
                    toast.success(`Variable ${newKey} saved`);
                  }}
                  className="px-3 py-1.5 rounded-lg bg-foreground text-background text-xs font-semibold cursor-pointer"
                >
                  Save Variable
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
