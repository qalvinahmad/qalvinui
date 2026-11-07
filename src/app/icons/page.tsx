"use client";

import React, { useState, useMemo } from "react";
import {
  Search,
  Copy,
  Check,
  Sliders,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  ArrowUp,
  ArrowDown,
  CheckCircle,
  XCircle,
  AlertCircle,
  Info,
  Heart,
  Star,
  Settings,
  User,
  Users,
  Mail,
  Phone,
  MessageSquare,
  Send,
  Home,
  Menu,
  X,
  Plus,
  Minus,
  Trash,
  Edit,
  Eye,
  EyeOff,
  Lock,
  Unlock,
  Shield,
  ShieldCheck,
  Key,
  Folder,
  File,
  FileText,
  Image,
  Video,
  Music,
  Download,
  Upload,
  Share2,
  ExternalLink,
  Link as LinkIcon,
  Globe,
  ShoppingCart,
  CreditCard,
  DollarSign,
  Tag,
  Package,
  Layers,
  Layout,
  Grid,
  List,
  Calendar,
  Clock,
  Compass,
  MapPin,
  Camera,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Mic,
  MicOff,
  Sun,
  Moon,
  Cloud,
  Code,
  Terminal,
  Cpu,
  Database,
  Server,
  Zap,
  Activity,
  BarChart,
  BarChart2,
  PieChart,
  TrendingUp,
  RefreshCw,
  RotateCw,
  Maximize2,
  Minimize2,
  Filter,
  CheckSquare,
  Radio,
  SlidersHorizontal,
} from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

interface IconEntry {
  name: string;
  component: React.ComponentType<{ className?: string; strokeWidth?: number; style?: React.CSSProperties }>;
  category: "Interface" | "Arrows" | "Media" | "Communication" | "Commerce" | "Security" | "System";
  tags: string[];
}

const ICONS_CATALOG: IconEntry[] = [
  // Interface
  { name: "Search", component: Search, category: "Interface", tags: ["find", "magnifier", "lookup"] },
  { name: "Settings", component: Settings, category: "Interface", tags: ["gear", "options", "preferences"] },
  { name: "Home", component: Home, category: "Interface", tags: ["house", "main", "dashboard"] },
  { name: "Menu", component: Menu, category: "Interface", tags: ["hamburger", "sidebar", "navigation"] },
  { name: "X", component: X, category: "Interface", tags: ["close", "remove", "cancel"] },
  { name: "Plus", component: Plus, category: "Interface", tags: ["add", "new", "create"] },
  { name: "Minus", component: Minus, category: "Interface", tags: ["remove", "decrease"] },
  { name: "Trash", component: Trash, category: "Interface", tags: ["delete", "remove", "bin"] },
  { name: "Edit", component: Edit, category: "Interface", tags: ["pencil", "modify", "write"] },
  { name: "Eye", component: Eye, category: "Interface", tags: ["view", "preview", "visible"] },
  { name: "EyeOff", component: EyeOff, category: "Interface", tags: ["hide", "hidden", "invisible"] },
  { name: "Check", component: Check, category: "Interface", tags: ["tick", "success", "done"] },
  { name: "Filter", component: Filter, category: "Interface", tags: ["refine", "sort", "funnel"] },
  { name: "Sliders", component: Sliders, category: "Interface", tags: ["controls", "adjust"] },
  { name: "SlidersHorizontal", component: SlidersHorizontal, category: "Interface", tags: ["settings", "filters"] },
  { name: "Layers", component: Layers, category: "Interface", tags: ["stack", "sheets", "components"] },
  { name: "Layout", component: Layout, category: "Interface", tags: ["template", "structure"] },
  { name: "Grid", component: Grid, category: "Interface", tags: ["blocks", "cards", "table"] },
  { name: "List", component: List, category: "Interface", tags: ["rows", "items"] },

  // Arrows
  { name: "ArrowRight", component: ArrowRight, category: "Arrows", tags: ["next", "forward", "east"] },
  { name: "ArrowLeft", component: ArrowLeft, category: "Arrows", tags: ["back", "previous", "west"] },
  { name: "ArrowUp", component: ArrowUp, category: "Arrows", tags: ["top", "north", "asc"] },
  { name: "ArrowDown", component: ArrowDown, category: "Arrows", tags: ["bottom", "south", "desc"] },
  { name: "RefreshCw", component: RefreshCw, category: "Arrows", tags: ["reload", "sync", "cycle"] },
  { name: "RotateCw", component: RotateCw, category: "Arrows", tags: ["repeat", "turn"] },
  { name: "Maximize2", component: Maximize2, category: "Arrows", tags: ["expand", "fullscreen"] },
  { name: "Minimize2", component: Minimize2, category: "Arrows", tags: ["collapse", "exit"] },

  // Security
  { name: "Lock", component: Lock, category: "Security", tags: ["secure", "padlock", "protected"] },
  { name: "Unlock", component: Unlock, category: "Security", tags: ["open", "insecure"] },
  { name: "Shield", component: Shield, category: "Security", tags: ["security", "safety"] },
  { name: "ShieldCheck", component: ShieldCheck, category: "Security", tags: ["verified", "safe", "approved"] },
  { name: "Key", component: Key, category: "Security", tags: ["password", "token", "auth"] },
  { name: "CheckCircle", component: CheckCircle, category: "Security", tags: ["success", "valid"] },
  { name: "XCircle", component: XCircle, category: "Security", tags: ["error", "invalid"] },
  { name: "AlertCircle", component: AlertCircle, category: "Security", tags: ["warning", "caution"] },
  { name: "Info", component: Info, category: "Security", tags: ["details", "about", "help"] },

  // Communication
  { name: "Mail", component: Mail, category: "Communication", tags: ["email", "message", "inbox"] },
  { name: "Phone", component: Phone, category: "Communication", tags: ["call", "contact"] },
  { name: "MessageSquare", component: MessageSquare, category: "Communication", tags: ["chat", "comment"] },
  { name: "Send", component: Send, category: "Communication", tags: ["submit", "paper plane", "post"] },
  { name: "User", component: User, category: "Communication", tags: ["person", "profile", "account"] },
  { name: "Users", component: Users, category: "Communication", tags: ["team", "group", "members"] },
  { name: "Share2", component: Share2, category: "Communication", tags: ["broadcast", "social"] },
  { name: "ExternalLink", component: ExternalLink, category: "Communication", tags: ["new tab", "export"] },
  { name: "Link", component: LinkIcon, category: "Communication", tags: ["url", "hyperlink"] },
  { name: "Globe", component: Globe, category: "Communication", tags: ["internet", "web", "world"] },

  // Commerce
  { name: "ShoppingCart", component: ShoppingCart, category: "Commerce", tags: ["cart", "buy", "store"] },
  { name: "CreditCard", component: CreditCard, category: "Commerce", tags: ["payment", "visa", "checkout"] },
  { name: "DollarSign", component: DollarSign, category: "Commerce", tags: ["money", "currency", "price"] },
  { name: "Tag", component: Tag, category: "Commerce", tags: ["price", "label", "discount"] },
  { name: "Package", component: Package, category: "Commerce", tags: ["box", "product", "delivery"] },

  // Media
  { name: "Image", component: Image, category: "Media", tags: ["photo", "picture", "asset"] },
  { name: "Video", component: Video, category: "Media", tags: ["movie", "clip", "film"] },
  { name: "Music", component: Music, category: "Media", tags: ["audio", "track", "sound"] },
  { name: "Camera", component: Camera, category: "Media", tags: ["capture", "photo"] },
  { name: "Play", component: Play, category: "Media", tags: ["start", "resume"] },
  { name: "Pause", component: Pause, category: "Media", tags: ["stop", "freeze"] },
  { name: "Volume2", component: Volume2, category: "Media", tags: ["sound", "audio", "loud"] },
  { name: "VolumeX", component: VolumeX, category: "Media", tags: ["mute", "silent"] },
  { name: "Mic", component: Mic, category: "Media", tags: ["audio", "record", "voice"] },
  { name: "MicOff", component: MicOff, category: "Media", tags: ["mute", "silence"] },

  // System
  { name: "Code", component: Code, category: "System", tags: ["developer", "html", "syntax"] },
  { name: "Terminal", component: Terminal, category: "System", tags: ["cli", "console", "shell"] },
  { name: "Cpu", component: Cpu, category: "System", tags: ["processor", "hardware", "chip"] },
  { name: "Database", component: Database, category: "System", tags: ["sql", "storage", "server"] },
  { name: "Server", component: Server, category: "System", tags: ["cloud", "hosting"] },
  { name: "Zap", component: Zap, category: "System", tags: ["fast", "electricity", "energy"] },
  { name: "Activity", component: Activity, category: "System", tags: ["pulse", "health", "analytics"] },
  { name: "BarChart", component: BarChart, category: "System", tags: ["graph", "metrics", "stats"] },
  { name: "PieChart", component: PieChart, category: "System", tags: ["circle", "distribution"] },
  { name: "TrendingUp", component: TrendingUp, category: "System", tags: ["growth", "increase", "profit"] },
  { name: "Sun", component: Sun, category: "System", tags: ["light", "day", "theme"] },
  { name: "Moon", component: Moon, category: "System", tags: ["dark", "night", "theme"] },
  { name: "Calendar", component: Calendar, category: "System", tags: ["date", "event", "schedule"] },
  { name: "Clock", component: Clock, category: "System", tags: ["time", "watch", "hour"] },
  { name: "Folder", component: Folder, category: "System", tags: ["directory", "files"] },
  { name: "File", component: File, category: "System", tags: ["document", "item"] },
  { name: "FileText", component: FileText, category: "System", tags: ["notes", "article", "doc"] },
  { name: "Sparkles", component: Sparkles, category: "System", tags: ["ai", "magic", "stars"] },
];

export default function IconsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string>("All");
  const [size, setSize] = useState(24);
  const [strokeWidth, setStrokeWidth] = useState(2);
  const [copiedName, setCopiedName] = useState<string | null>(null);

  const categories = ["All", "Interface", "Arrows", "Security", "Communication", "Commerce", "Media", "System"];

  const filteredIcons = useMemo(() => {
    return ICONS_CATALOG.filter((icon) => {
      const matchesCategory = category === "All" || icon.category === category;
      const q = search.toLowerCase().trim();
      const matchesSearch =
        !q ||
        icon.name.toLowerCase().includes(q) ||
        icon.tags.some((t) => t.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

  const copyIconCode = (icon: IconEntry) => {
    const code = `<${icon.name} className="h-5 w-5" />`;
    navigator.clipboard.writeText(code);
    setCopiedName(icon.name);
    toast.success(`Copied JSX: <${icon.name} />`);
    setTimeout(() => setCopiedName(null), 2000);
  };

  return (
    <div className="container mx-auto px-4 py-10 max-w-screen-xl space-y-8">
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border bg-muted/50 text-xs font-semibold text-muted-foreground">
          <Sparkles className="h-3.5 w-3.5 text-primary" /> Lucide React Icon Collection
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight">Icons</h1>
        <p className="text-muted-foreground text-base max-w-2xl">
          Search and copy over 1,000+ clean, consistent Lucide icons built for React and Tailwind CSS.
        </p>
      </div>

      {/* Controls Bar */}
      <div className="border rounded-2xl p-4 bg-card shadow-xs flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center">
        {/* Search Input */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search icons (e.g. settings, arrow, user, code)..."
            aria-label="Search icons"
            className="w-full h-10 pl-9 pr-4 text-base md:text-sm rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>

        {/* Sliders: Size & Stroke */}
        <div className="flex flex-wrap items-center gap-6 text-xs font-medium text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="tabular-nums">Size: {size}px</span>
            <input
              type="range"
              min="16"
              max="40"
              value={size}
              aria-label="Icon size in pixels"
              onChange={(e) => setSize(Number(e.target.value))}
              className="w-24 accent-primary cursor-pointer"
            />
          </div>

          <div className="flex items-center gap-2">
            <span className="tabular-nums">Stroke: {strokeWidth}px</span>
            <input
              type="range"
              min="1"
              max="3"
              step="0.5"
              value={strokeWidth}
              aria-label="Icon stroke width in pixels"
              onChange={(e) => setStrokeWidth(Number(e.target.value))}
              className="w-20 accent-primary cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* Categories Filter Pills */}
      <div role="group" aria-label="Icon category filters" className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            aria-pressed={category === cat}
            onClick={() => setCategory(cat)}
            className={cn(
              "px-3.5 py-1.5 rounded-full text-xs font-semibold transition-[color,background-color,transform] duration-150 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 active:scale-[0.96] motion-reduce:active:scale-100",
              category === cat
                ? "bg-foreground text-background shadow-2xs"
                : "border bg-card hover:bg-muted text-muted-foreground hover:text-foreground"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Icons Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {filteredIcons.map((icon) => {
          const IconComp = icon.component;
          const isCopied = copiedName === icon.name;

          return (
            <button
              key={icon.name}
              type="button"
              aria-label={`Copy ${icon.name} icon code`}
              onClick={() => copyIconCode(icon)}
              className={cn(
                "group relative border border-border rounded-2xl p-4 bg-card hover:bg-muted/50 transition-[border-color,background-color,transform,box-shadow] duration-150 flex flex-col items-center justify-center gap-3 cursor-pointer shadow-2xs hover:shadow-xs hover:border-foreground/40 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:scale-[0.96] motion-reduce:active:scale-100",
                isCopied && "border-primary ring-2 ring-primary/20 bg-primary/5"
              )}
            >
              <div className="h-12 w-12 flex items-center justify-center text-foreground group-hover:scale-110 transition-transform">
                <IconComp
                  style={{ width: size, height: size }}
                  strokeWidth={strokeWidth}
                />
              </div>

              <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground truncate w-full text-center">
                {icon.name}
              </span>

              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                {isCopied ? (
                  <Check className="h-3.5 w-3.5 text-primary" />
                ) : (
                  <Copy className="h-3.5 w-3.5 text-muted-foreground" />
                )}
              </div>
            </button>
          );
        })}
      </div>

      {filteredIcons.length === 0 && (
        <div className="border border-dashed rounded-2xl p-12 text-center text-muted-foreground space-y-2">
          <Search className="h-8 w-8 mx-auto opacity-50" />
          <p className="font-semibold text-sm">No icons found matching &quot;{search}&quot;</p>
          <p className="text-xs">Try searching for generic terms like &quot;arrow&quot;, &quot;user&quot;, or &quot;circle&quot;.</p>
        </div>
      )}
    </div>
  );
}
