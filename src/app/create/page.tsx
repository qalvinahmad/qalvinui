"use client";

import { useState } from "react";
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
} from "lucide-react";
import { toast } from "sonner";

// Preset configurations
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

export default function CreatePage() {
  const [activeStyle, setActiveStyle] = useState("Nova");
  const [activeBaseColor, setActiveBaseColor] = useState("Zinc");
  const [activeTheme, setActiveTheme] = useState("Purple");
  const [activeChartColor, setActiveChartColor] = useState("Neutral");
  const [activeHeading, setActiveHeading] = useState("Inter");

  // Interactive controls inside the canvas
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
  const [previewScale, setPreviewScale] = useState(1);
  const [isSecretsModalOpen, setIsSecretsModalOpen] = useState(false);
  const [secretsList, setSecretsList] = useState([
    { key: "DATABASE_URL", value: "postgresql://postgres:••••••••@ep-cold-wave.neon.tech/main", visible: false },
    { key: "NEXT_PUBLIC_APP_URL", value: "https://qalvinui.vercel.app", visible: true },
    { key: "STRIPE_SECRET_KEY", value: "sk_test_51Mz9••••••••••••••••", visible: false },
  ]);
  const [newKey, setNewKey] = useState("");
  const [newVal, setNewVal] = useState("");

  const trafficData = {
    "01": [
      { desktop: 40, mobile: 60, month: "Q1" },
      { desktop: 65, mobile: 85, month: "Q2" },
      { desktop: 50, mobile: 75, month: "Q3" },
      { desktop: 80, mobile: 95, month: "Q4" },
    ],
    "02": [
      { desktop: 55, mobile: 70, month: "Jan" },
      { desktop: 60, mobile: 80, month: "Feb" },
      { desktop: 75, mobile: 90, month: "Mar" },
      { desktop: 85, mobile: 95, month: "Apr" },
    ],
    "03": [
      { desktop: 80, mobile: 40, month: "Desk" },
      { desktop: 35, mobile: 85, month: "Mob" },
      { desktop: 50, mobile: 60, month: "Tab" },
    ],
  }[trafficTab as "01" | "02" | "03"] || [
    { desktop: 40, mobile: 60, month: "Q1" },
    { desktop: 65, mobile: 85, month: "Q2" },
    { desktop: 50, mobile: 75, month: "Q3" },
  ];

  // Derived style properties
  const currentTheme = themes.find((t) => t.name === activeTheme) || themes[1];
  const currentChart = chartColors.find((c) => c.name === activeChartColor) || chartColors[0];
  const currentFont = headingFonts.find((f) => f.name === activeHeading)?.value || "'Inter', sans-serif";

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

  const handleShuffle = () => {
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
    toast.success(`Preset updated: ${nextStyle} • ${nextTheme} • ${nextHeading}`);
  };

  const handleCopyPreset = () => {
    const presetConfig = `// Qalvin UI Generated Theme Preset
export const themePreset = {
  style: "${activeStyle}",
  baseColor: "${activeBaseColor}",
  theme: "${activeTheme}",
  primaryColor: "${currentTheme.primary}",
  chartPalette: "${activeChartColor}",
  headingFont: "${activeHeading}",
};`;
    navigator.clipboard.writeText(presetConfig);
    setCopied(true);
    toast.success("Theme configuration copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-[1600px]" suppressHydrationWarning>
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Left Sidebar (Settings) */}
        <aside className="w-full lg:w-72 shrink-0 bg-[#252525] text-white rounded-2xl overflow-hidden shadow-xl lg:sticky lg:top-20 flex flex-col border border-neutral-800 z-20">
          <div className="flex items-center justify-between p-4 border-b border-white/10">
            <span className="text-sm font-semibold flex items-center gap-2">
              <Menu className="h-4 w-4 text-white/60" /> Customizer Menu
            </span>
          </div>

          <div className="flex flex-col divide-y divide-white/5">
            <SettingRow
              label="Style"
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
              label="Theme"
              value={activeTheme}
              onClick={() => {
                const names = themes.map((t) => t.name);
                const next = (names.indexOf(activeTheme) + 1) % names.length;
                setActiveTheme(names[next]);
              }}
            />
            <SettingRow
              label="Chart Color"
              value={activeChartColor}
              onClick={() => {
                const names = chartColors.map((c) => c.name);
                const next = (names.indexOf(activeChartColor) + 1) % names.length;
                setActiveChartColor(names[next]);
              }}
            />
            <SettingRow
              label="Heading"
              value={activeHeading}
              icon={Type}
              onClick={() => {
                const names = headingFonts.map((f) => f.name);
                const next = (names.indexOf(activeHeading) + 1) % names.length;
                setActiveHeading(names[next]);
              }}
            />
          </div>

          <div className="p-4 flex flex-col gap-2.5 bg-[#1e1e1e] border-t border-white/10">
            <button
              type="button"
              onClick={handleCopyPreset}
              className="w-full py-2.5 rounded-xl border border-white/20 hover:bg-white/10 text-xs font-semibold text-white transition-[color,background-color,transform] duration-150 flex items-center justify-center gap-2 cursor-pointer shadow-xs outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 active:scale-[0.96] motion-reduce:active:scale-100"
            >
              {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
              {copied ? "Copied!" : "--preset b0"}
            </button>
            <button
              type="button"
              onClick={() => toast.info(`Current Preset: ${activeStyle} - ${activeTheme}`)}
              className="w-full py-2.5 rounded-xl border border-white/20 hover:bg-white/10 text-xs font-semibold text-white transition-[color,background-color,transform] duration-150 flex items-center justify-center gap-2 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 active:scale-[0.96] motion-reduce:active:scale-100"
            >
              Open Preset
            </button>
            <button
              type="button"
              onClick={handleShuffle}
              className="w-full py-2.5 rounded-xl border border-white/20 hover:bg-white/10 text-xs font-semibold text-white transition-[color,background-color,transform] duration-150 flex items-center justify-center gap-2 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 active:scale-[0.96] motion-reduce:active:scale-100"
            >
              <Shuffle className="h-3.5 w-3.5" /> Shuffle
            </button>
            <button
              type="button"
              onClick={handleCopyPreset}
              style={{ backgroundColor: currentTheme.primary }}
              className="w-full py-2.5 rounded-xl text-white font-bold text-xs hover:opacity-90 transition-[opacity,transform] duration-150 flex items-center justify-center gap-2 cursor-pointer shadow-lg mt-1 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 active:scale-[0.96] motion-reduce:active:scale-100"
            >
              <Sparkles className="h-3.5 w-3.5" /> Get Theme Code
            </button>
          </div>
        </aside>

        {/* Right Content Area (Masonry / 3-Column Interactive Showcase) */}
        <main className="flex-1 w-full min-w-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* COLUMN 1 */}
            <div className="flex flex-col gap-6">
              {/* Theme & Palette Showcase Card */}
              <div className={`border bg-card p-6 shadow-sm ${getBorderRadius()} transition-all duration-300`}>
                <h2
                  className="text-2xl font-bold tracking-tight mb-2 text-foreground"
                  style={{ fontFamily: currentFont }}
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

              {/* Typography Rhythm Card */}
              <div className={`border bg-card p-6 shadow-sm ${getBorderRadius()} transition-all duration-300`}>
                <div className="text-[10px] font-bold tracking-wider text-muted-foreground uppercase mb-2">
                  INHERIT - {activeHeading.toUpperCase()}
                </div>
                <h3
                  className="text-2xl font-bold leading-tight mb-4 text-foreground"
                  style={{ fontFamily: currentFont }}
                >
                  Designing with rhythm and hierarchy.
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  A strong body style keeps long-form content readable and balances the visual weight of headings.
                </p>
                <p className="text-sm text-muted-foreground">
                  Thoughtful spacing and cadence help paragraphs scan quickly without feeling dense.
                </p>
              </div>

              {/* Interactive Contribution History Card */}
              <div className={`border bg-card p-6 shadow-sm ${getBorderRadius()} transition-all duration-300`}>
                <div className="flex justify-between items-center mb-1">
                  <h3 className="font-semibold text-foreground" style={{ fontFamily: currentFont }}>
                    Contribution History
                  </h3>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                    <TrendingUp className="h-3 w-3" /> +24%
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mb-6">Last 6 months of verified activity</p>

                <div className="h-36 w-full flex items-end gap-2 mb-4 relative">
                  {[40, 65, 45, 80, 35, 90].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 flex flex-col justify-end h-full items-center group cursor-pointer"
                    >
                      <div
                        style={{
                          height: `${h}%`,
                          backgroundColor: i === 3 ? currentTheme.primary : currentChart.bars[i] || "#71717a",
                        }}
                        className="w-full rounded-t-md transition-all duration-300 group-hover:opacity-80"
                      />
                    </div>
                  ))}
                </div>

                <div className="flex justify-between text-xs text-muted-foreground px-1 mb-6 font-medium">
                  <span>Dec</span>
                  <span>Jan</span>
                  <span>Feb</span>
                  <span>Mar</span>
                  <span>Apr</span>
                  <span>May</span>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="rounded-xl bg-muted/40 p-3.5 border">
                    <div className="text-[10px] font-bold text-muted-foreground uppercase mb-0.5">Upcoming</div>
                    <div className="font-bold text-sm text-foreground">May 25, 2026</div>
                    <div className="text-xs text-muted-foreground mt-0.5">$1,000 scheduled</div>
                  </div>
                  <div className="rounded-xl bg-muted/40 p-3.5 border">
                    <div className="text-[10px] font-bold text-muted-foreground uppercase mb-0.5">Auto-save plan</div>
                    <div className="font-bold text-sm text-foreground">Accelerated</div>
                    <div className="text-xs text-muted-foreground mt-0.5">Recurring weekly</div>
                  </div>
                </div>

                <button
                  onClick={() => toast.success("Opening full contribution analytics report...")}
                  style={{ backgroundColor: currentTheme.primary }}
                  className="w-full py-2.5 text-white rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity cursor-pointer shadow-sm"
                >
                  View Full Report
                </button>
              </div>
            </div>

            {/* COLUMN 2 */}
            <div className="flex flex-col gap-6">
              {/* Interactive Toolbar */}
              <div className={`border bg-card p-4 shadow-sm flex flex-wrap gap-2 justify-center ${getBorderRadius()}`}>
                {[
                  {
                    icon: Copy,
                    label: "Copy Config",
                    action: () => {
                      navigator.clipboard.writeText(
                        JSON.stringify(
                          { style: activeStyle, baseColor: activeBaseColor, theme: activeTheme, heading: activeHeading },
                          null,
                          2
                        )
                      );
                      toast.success("Theme JSON copied to clipboard");
                    },
                  },
                  { icon: Info, label: "Info", action: () => toast.info(`Active style: ${activeStyle}, Font: ${activeHeading}`) },
                  {
                    icon: Trash,
                    label: "Reset",
                    action: () => {
                      setSliderValue(60);
                      setPayoutAmount(2500);
                      setInputName("");
                      setInputMessage("");
                      toast.info("Controls reset to defaults");
                    },
                  },
                  { icon: Upload, label: "Deploy", action: () => toast.success("Theme exported to registry payload") },
                  { icon: ShoppingCart, label: "Cart", action: () => toast.info("Checkout demo available in Blocks") },
                  {
                    icon: Minus,
                    label: "Zoom",
                    action: () => {
                      setPreviewScale((s) => (s === 1 ? 0.95 : 1));
                      toast.info(`Preview scale: ${previewScale === 1 ? "95%" : "100%"}`);
                    },
                  },
                  { icon: ArrowLeft, label: "Previous Style", action: () => handleShuffle() },
                  { icon: ArrowRight, label: "Next Style", action: () => handleShuffle() },
                  { icon: Check, label: "Save", action: () => toast.success("Design system tokens saved") },
                  { icon: Search, label: "Search", action: () => toast.info("Search documentation: press ⌘K") },
                  { icon: Settings, label: "Manage Secrets", action: () => setIsSecretsModalOpen(true) },
                ].map(({ icon: Icon, label, action }, i) => (
                  <button
                    key={i}
                    onClick={action}
                    title={label}
                    className="h-9 w-9 flex items-center justify-center rounded-xl border bg-background hover:bg-muted text-foreground transition-colors shadow-2xs cursor-pointer active:scale-95"
                  >
                    <Icon className="h-4 w-4" />
                  </button>
                ))}
                <button
                  onClick={() => toast.success("New item added to toolbar")}
                  className="h-9 w-9 flex items-center justify-center rounded-xl border border-dashed bg-background hover:bg-muted text-foreground transition-colors shadow-2xs cursor-pointer"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>

              {/* Interactive Controls & Live Sliders */}
              <div className={`border bg-card p-6 shadow-sm flex flex-col gap-5 ${getBorderRadius()}`}>
                {/* Buttons Variants */}
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => toast.success("Primary clicked")}
                    style={{ backgroundColor: currentTheme.primary }}
                    className="px-3.5 py-1.5 text-white rounded-xl text-xs font-semibold hover:opacity-90 transition-opacity cursor-pointer shadow-xs"
                  >
                    Primary
                  </button>
                  <button
                    onClick={() => toast.info("Secondary clicked")}
                    className="px-3.5 py-1.5 bg-secondary text-secondary-foreground rounded-xl text-xs font-semibold hover:bg-secondary/80 transition-colors cursor-pointer"
                  >
                    Secondary
                  </button>
                  <button
                    onClick={() => toast.info("Outline clicked")}
                    className="px-3.5 py-1.5 border rounded-xl text-xs font-semibold hover:bg-muted transition-colors cursor-pointer"
                  >
                    Outline
                  </button>
                  <button
                    onClick={() => toast.info("Ghost clicked")}
                    className="px-3.5 py-1.5 rounded-xl text-xs font-semibold hover:bg-muted transition-colors cursor-pointer"
                  >
                    Ghost
                  </button>
                </div>

                {/* Interactive Two-Factor Toggle */}
                <div className="rounded-xl border p-3.5 flex items-center justify-between bg-muted/20">
                  <div>
                    <h4 className="font-semibold text-xs text-foreground">Two-factor authentication</h4>
                    <p className="text-[11px] text-muted-foreground mt-0.5">Verify via SMS or Authenticator App.</p>
                  </div>
                  <button
                    onClick={() => {
                      setTwoFactorEnabled(!twoFactorEnabled);
                      toast(twoFactorEnabled ? "2FA Disabled" : "2FA Enabled successfully");
                    }}
                    style={{
                      backgroundColor: twoFactorEnabled ? currentTheme.primary : undefined,
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      twoFactorEnabled ? "text-white shadow-xs" : "bg-muted text-muted-foreground hover:bg-muted/80"
                    }`}
                  >
                    {twoFactorEnabled ? "Enabled" : "Enable"}
                  </button>
                </div>

                {/* Interactive Slider */}
                <div className="space-y-2 pt-1">
                  <div className="flex justify-between items-center text-xs font-medium">
                    <span className="text-muted-foreground flex items-center gap-1.5">
                      <Sliders className="h-3.5 w-3.5" /> Performance Capacity
                    </span>
                    <span className="font-bold text-foreground">{sliderValue}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={sliderValue}
                    onChange={(e) => setSliderValue(Number(e.target.value))}
                    className="w-full accent-primary cursor-pointer h-2 bg-muted rounded-lg appearance-none"
                    style={{ accentColor: currentTheme.primary }}
                  />
                  <div className="flex justify-between text-[10px] text-muted-foreground font-mono">
                    <span>0% (Eco)</span>
                    <span>100% (Turbo)</span>
                  </div>
                </div>

                {/* Interactive Inputs */}
                <div className="space-y-3 pt-1">
                  <div className="relative">
                    <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                    <input
                      type="text"
                      value={inputName}
                      onChange={(e) => setInputName(e.target.value)}
                      placeholder="Search or enter project name..."
                      className="w-full h-10 px-3.5 pr-9 rounded-xl border bg-background text-xs focus:outline-none focus:ring-2 focus:ring-primary/40 text-foreground transition-all"
                    />
                  </div>
                  <textarea
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Write custom notes or instructions..."
                    className="w-full h-20 px-3.5 py-2.5 rounded-xl border bg-background text-xs focus:outline-none focus:ring-2 focus:ring-primary/40 text-foreground resize-none transition-all"
                  />
                </div>

                {/* Interactive Badges & Checkboxes / Radios */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-1 border-t">
                  <div className="flex items-center gap-2">
                    <span
                      style={{ backgroundColor: currentTheme.primary }}
                      className="px-2.5 py-0.5 text-white text-[11px] font-bold rounded-full shadow-2xs"
                    >
                      Active
                    </span>
                    <span className="px-2.5 py-0.5 bg-secondary text-secondary-foreground text-[11px] font-semibold rounded-full">
                      Preset
                    </span>
                  </div>

                  {/* Interactive Radios & Checkboxes */}
                  <div className="flex items-center gap-3">
                    {/* Radio 1 */}
                    <button
                      onClick={() => setSelectedRadio("option1")}
                      className="flex items-center gap-1 text-xs cursor-pointer select-none"
                    >
                      <div
                        className={`h-4 w-4 rounded-full border flex items-center justify-center transition-all ${
                          selectedRadio === "option1" ? "border-primary" : "border-muted-foreground/50"
                        }`}
                      >
                        {selectedRadio === "option1" && (
                          <div
                            className="h-2 w-2 rounded-full"
                            style={{ backgroundColor: currentTheme.primary }}
                          />
                        )}
                      </div>
                    </button>

                    {/* Checkbox 1 */}
                    <button
                      onClick={() => setCheckbox1(!checkbox1)}
                      className={`h-4 w-4 rounded-md border flex items-center justify-center transition-all cursor-pointer ${
                        checkbox1 ? "bg-primary text-primary-foreground border-primary" : "border-muted-foreground/50"
                      }`}
                      style={{ backgroundColor: checkbox1 ? currentTheme.primary : undefined }}
                    >
                      {checkbox1 && <Check className="h-3 w-3 text-white" />}
                    </button>

                    {/* Checkbox 2 */}
                    <button
                      onClick={() => setCheckbox2(!checkbox2)}
                      className={`h-4 w-4 rounded-md border flex items-center justify-center transition-all cursor-pointer ${
                        checkbox2 ? "bg-primary text-primary-foreground border-primary" : "border-muted-foreground/50"
                      }`}
                      style={{ backgroundColor: checkbox2 ? currentTheme.primary : undefined }}
                    >
                      {checkbox2 && <Check className="h-3 w-3 text-white" />}
                    </button>
                  </div>
                </div>

                {/* Switch & Buttons */}
                <div className="flex items-center justify-between pt-1">
                  <div className="flex gap-2">
                    <button
                      onClick={() => toast.success("Alert Dialog triggered!")}
                      className="px-3 py-1.5 border rounded-xl text-xs font-semibold hover:bg-muted transition-colors cursor-pointer"
                    >
                      Alert Dialog
                    </button>
                    <button
                      onClick={() => toast.info("Button Group option selected")}
                      className="px-3 py-1.5 border rounded-xl text-xs font-semibold hover:bg-muted flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      Button Group <ChevronDown className="h-3 w-3 text-muted-foreground" />
                    </button>
                  </div>

                  {/* Interactive Switch */}
                  <div
                    onClick={() => setSwitchToggled(!switchToggled)}
                    className={`w-10 h-6 rounded-full relative cursor-pointer transition-colors p-0.5 ${
                      switchToggled ? "bg-primary" : "bg-muted"
                    }`}
                    style={{ backgroundColor: switchToggled ? currentTheme.primary : undefined }}
                  >
                    <div
                      className={`h-5 w-5 bg-white rounded-full shadow-md transition-transform duration-200 ${
                        switchToggled ? "translate-x-4" : "translate-x-0"
                      }`}
                    />
                  </div>
                </div>
              </div>

              {/* Interactive Payout Threshold Card */}
              <div className={`border bg-card p-6 shadow-sm relative ${getBorderRadius()} transition-all duration-300`}>
                <button
                  onClick={() => toast.info("Payout card closed")}
                  className="absolute top-4 right-4 text-muted-foreground hover:bg-muted p-1.5 rounded-lg transition-colors cursor-pointer"
                >
                  <X className="h-4 w-4" />
                </button>
                <h3 className="font-semibold text-foreground mb-1" style={{ fontFamily: currentFont }}>
                  Payout Threshold
                </h3>
                <p className="text-xs text-muted-foreground mb-6 max-w-[85%]">
                  Set the minimum balance required before a payout is automatically triggered.
                </p>

                <div className="space-y-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-foreground">Preferred Currency</label>
                    <select
                      value={currency}
                      onChange={(e) => setCurrency(e.target.value)}
                      className="w-full flex items-center justify-between border rounded-xl px-3.5 py-2 text-xs bg-background text-foreground cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/40"
                    >
                      <option value="USD — United States Dollar">USD — United States Dollar ($)</option>
                      <option value="EUR — Euro (€)">EUR — Euro (€)</option>
                      <option value="GBP — British Pound (£)">GBP — British Pound (£)</option>
                      <option value="IDR — Indonesian Rupiah (Rp)">IDR — Indonesian Rupiah (Rp)</option>
                      <option value="JPY — Japanese Yen (¥)">JPY — Japanese Yen (¥)</option>
                    </select>
                  </div>

                  {/* Interactive Payout Amount Slider */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-end">
                      <label className="text-xs font-semibold text-foreground">Minimum Payout Amount</label>
                      <span
                        className="text-2xl font-extrabold"
                        style={{ color: currentTheme.primary, fontFamily: currentFont }}
                      >
                        ${payoutAmount.toLocaleString()}.00
                      </span>
                    </div>
                    <input
                      type="range"
                      min="50"
                      max="10000"
                      step="50"
                      value={payoutAmount}
                      onChange={(e) => setPayoutAmount(Number(e.target.value))}
                      className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer"
                      style={{ accentColor: currentTheme.primary }}
                    />
                    <div className="flex justify-between text-[11px] text-muted-foreground font-medium font-mono">
                      <span>$50 (MIN)</span>
                      <span>$10,000 (MAX)</span>
                    </div>
                  </div>

                  <button
                    onClick={() => toast.success(`Threshold saved: $${payoutAmount.toLocaleString()} in ${currency}`)}
                    style={{ backgroundColor: currentTheme.primary }}
                    className="w-full py-2.5 text-white rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity cursor-pointer shadow-md"
                  >
                    Save Threshold
                  </button>
                </div>
              </div>
            </div>

            {/* COLUMN 3 */}
            <div className="flex flex-col gap-6">
              {/* Environment Variables */}
              <div className={`border bg-card p-6 shadow-sm ${getBorderRadius()} transition-all duration-300`}>
                <div className="flex justify-between items-center mb-1">
                  <h3 className="font-semibold text-foreground" style={{ fontFamily: currentFont }}>
                    Environment Variables
                  </h3>
                  <span className="text-[10px] px-2 py-0.5 bg-muted rounded-full font-mono text-muted-foreground">
                    Production
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mb-4">8 active synced variables</p>

                <div className="space-y-2 mb-5 font-mono text-xs">
                  {secretsList.map((sec, idx) => (
                    <div key={idx} className="px-3 py-2 border rounded-xl bg-muted/30 text-foreground flex justify-between items-center">
                      <span className="font-semibold">{sec.key}</span>
                      <span className="text-[10px] text-muted-foreground">
                        {sec.visible ? sec.value : "••••••••••••"}
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => setIsSecretsModalOpen(true)}
                  className="px-4 py-2 border rounded-xl text-xs font-semibold hover:bg-muted transition-colors cursor-pointer"
                >
                  Manage Secrets
                </button>
              </div>

              {/* Traffic Channel Chart & Interactive Tabs */}
              <div className={`border bg-card p-6 shadow-sm ${getBorderRadius()} transition-all duration-300`}>
                <h3 className="font-semibold text-foreground mb-1" style={{ fontFamily: currentFont }}>
                  Traffic channel
                </h3>
                <p className="text-xs text-muted-foreground mb-6">
                  {trafficTab === "01" && "Quarterly desktop vs mobile visitors across 4 quarters."}
                  {trafficTab === "02" && "Monthly comparison across the active fiscal period."}
                  {trafficTab === "03" && "Device category telemetry breakdown."}
                </p>

                <div className="h-32 w-full flex items-end gap-3 mb-4">
                  {trafficData.map((item, idx) => (
                    <div key={idx} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                      <div className="flex gap-1.5 items-end h-full w-full justify-center">
                        <div
                          style={{ height: `${item.desktop}%` }}
                          className="w-4 bg-muted rounded-t-sm transition-all"
                        />
                        <div
                          style={{
                            height: `${item.mobile}%`,
                            backgroundColor: currentTheme.primary,
                          }}
                          className="w-4 rounded-t-sm transition-all shadow-xs"
                        />
                      </div>
                      <span className="text-[10px] font-semibold text-muted-foreground">{item.month}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-dashed pt-4 flex justify-center">
                  <div className="inline-flex rounded-full bg-muted p-1 border">
                    <button
                      onClick={() => setTrafficTab("01")}
                      className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                        trafficTab === "01"
                          ? "bg-foreground text-background shadow-xs"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      01 (Quarterly)
                    </button>
                    <button
                      onClick={() => setTrafficTab("02")}
                      className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                        trafficTab === "02"
                          ? "bg-foreground text-background shadow-xs"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      02 (Monthly)
                    </button>
                    <button
                      onClick={() => setTrafficTab("03")}
                      className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                        trafficTab === "03"
                          ? "bg-foreground text-background shadow-xs"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      03 (Devices)
                    </button>
                  </div>
                </div>
              </div>

              {/* Savings Target Milestones */}
              <div className={`border bg-card p-6 shadow-sm ${getBorderRadius()} transition-all duration-300`}>
                <div className="flex justify-between items-center mb-1">
                  <h3 className="font-semibold text-foreground" style={{ fontFamily: currentFont }}>
                    Savings Target
                  </h3>
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                </div>
                <p className="text-xs text-muted-foreground mb-6">Active financial milestone tracking</p>

                <div className="space-y-5">
                  <div>
                    <div className="text-[10px] font-bold text-muted-foreground uppercase mb-1">RETIREMENT</div>
                    <div className="text-3xl font-extrabold mb-2 text-foreground" style={{ fontFamily: currentFont }}>
                      $420,000
                    </div>
                    <div className="h-2.5 w-full bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{ width: "65%", backgroundColor: currentTheme.primary }}
                      />
                    </div>
                    <div className="text-xs text-muted-foreground mt-1.5 font-medium">65% achieved ($273,000 funded)</div>
                  </div>

                  <div className="pt-2 border-t">
                    <div className="text-[10px] font-bold text-muted-foreground uppercase mb-1">REAL ESTATE</div>
                    <div className="text-3xl font-extrabold mb-2 text-foreground" style={{ fontFamily: currentFont }}>
                      $85,000
                    </div>
                    <div className="h-2.5 w-full bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{ width: "32%", backgroundColor: currentTheme.accent }}
                      />
                    </div>
                    <div className="text-xs text-muted-foreground mt-1.5 font-medium">32% achieved ($27,200 funded)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Interactive Secrets Manager Modal */}
        {isSecretsModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-2xs p-4">
            <div className="w-full max-w-lg rounded-2xl border bg-background p-6 shadow-2xl space-y-5">
              <div className="flex items-center justify-between border-b pb-3">
                <div>
                  <h3 className="font-semibold text-base">Secrets & Environment Variables</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">Manage production encryption keys and database endpoints.</p>
                </div>
                <button
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

              {/* Add New Key */}
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
    </div>
  );
}
