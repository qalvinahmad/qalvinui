"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { Search, Moon, Sun, FileText, Component, Palette, Terminal, BookOpen, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { QalvinMark } from "@/components/brand/qalvin-mark";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

const Github = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

interface SearchItem {
  title: string;
  description: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  category: string;
}

const searchItems: SearchItem[] = [
  // Documentation
  { title: "Introduction", description: "Welcome to Qalvin UI", href: "/docs/introduction", icon: FileText, category: "Documentation" },
  { title: "Get Started", description: "Get up and running with Qalvin UI", href: "/docs/get-started", icon: FileText, category: "Documentation" },
  { title: "Installation", description: "Install Qalvin UI in your project", href: "/docs/installation", icon: FileText, category: "Documentation" },
  { title: "Theming", description: "Customize the look and feel", href: "/docs/theming", icon: Palette, category: "Documentation" },
  { title: "CLI", description: "Command line interface", href: "/docs/cli", icon: Terminal, category: "Documentation" },
  { title: "Typeset", description: "Typography utilities", href: "/docs/typeset", icon: FileText, category: "Documentation" },
  { title: "Changelog", description: "Version history and updates", href: "/docs/changelog", icon: BookOpen, category: "Documentation" },
  
  // Registry
  { title: "Registry", description: "Component registry system", href: "/docs/registry", icon: Component, category: "Registry" },
  { title: "Get Started (Registry)", description: "Registry getting started guide", href: "/docs/get-started", icon: FileText, category: "Registry" },
  { title: "GitHub Registries", description: "Use components from GitHub", href: "/docs/github-registries", icon: Component, category: "Registry" },
  { title: "Registry Directory", description: "Browse available components", href: "/docs/registry-directory", icon: Component, category: "Registry" },
  { title: "Examples", description: "Example implementations", href: "/docs/examples", icon: FileText, category: "Registry" },
  { title: "Namespaces", description: "Organize components with namespaces", href: "/docs/namespaces", icon: Component, category: "Registry" },
  { title: "Authentication", description: "Build authentication flows", href: "/docs/authentication", icon: FileText, category: "Registry" },
  { title: "Dynamic Search", description: "Real-time search implementation", href: "/docs/dynamic-search", icon: Search, category: "Registry" },
  { title: "MCP Server", description: "AI-powered component generation", href: "/docs/mcp-server", icon: Terminal, category: "Registry" },
  { title: "Open in v0", description: "Export to v0.dev", href: "/docs/open-in-v0", icon: Component, category: "Registry" },
  { title: "API Reference", description: "Complete API documentation", href: "/docs/api-reference", icon: BookOpen, category: "Registry" },
  { title: "registry.json", description: "Registry file format", href: "/docs/registry-json", icon: FileText, category: "Registry" },
  { title: "registry-item.json", description: "Registry item format", href: "/docs/registry-item-json", icon: FileText, category: "Registry" },
  
  // Components
  { title: "Accordion", description: "A collapsible content area", href: "/docs/components/accordion", icon: Component, category: "Components" },
  { title: "Alert", description: "Displays a callout for important information", href: "/docs/components/alert", icon: Component, category: "Components" },
  { title: "Alert Dialog", description: "A modal dialog for important content", href: "/docs/components/alert-dialog", icon: Component, category: "Components" },
  { title: "Avatar", description: "An image element with a fallback", href: "/docs/components/avatar", icon: Component, category: "Components" },
  { title: "Badge", description: "Displays a badge or component", href: "/docs/components/badge", icon: Component, category: "Components" },
  { title: "Button", description: "Displays a button component", href: "/docs/components/button", icon: Component, category: "Components" },
  { title: "Calendar", description: "A date field component", href: "/docs/components/calendar", icon: Component, category: "Components" },
  { title: "Card", description: "Displays a card with header and content", href: "/docs/components/card", icon: Component, category: "Components" },
  { title: "Checkbox", description: "A control for toggling states", href: "/docs/components/checkbox", icon: Component, category: "Components" },
  { title: "Collapsible", description: "An expandable/collapsible panel", href: "/docs/components/collapsible", icon: Component, category: "Components" },
  { title: "Dialog", description: "A window overlaid on content", href: "/docs/components/dialog", icon: Component, category: "Components" },
  { title: "Drawer", description: "A panel that slides from the edge", href: "/docs/components/drawer", icon: Component, category: "Components" },
  { title: "Dropdown Menu", description: "A menu triggered by a button", href: "/docs/components/dropdown-menu", icon: Component, category: "Components" },
  { title: "Input", description: "A form control for entering text", href: "/docs/components/input", icon: Component, category: "Components" },
  { title: "Label", description: "Renders an accessible label", href: "/docs/components/label", icon: Component, category: "Components" },
  { title: "Popover", description: "Rich content in a portal", href: "/docs/components/popover", icon: Component, category: "Components" },
  { title: "Progress", description: "Shows completion progress", href: "/docs/components/progress", icon: Component, category: "Components" },
  { title: "Select", description: "Displays a list of options", href: "/docs/components/select", icon: Component, category: "Components" },
  { title: "Separator", description: "Visually separates content", href: "/docs/components/separator", icon: Component, category: "Components" },
  { title: "Sheet", description: "A window that slides from edge", href: "/docs/components/sheet", icon: Component, category: "Components" },
  { title: "Skeleton", description: "Placeholder while content loads", href: "/docs/components/skeleton", icon: Component, category: "Components" },
  { title: "Slider", description: "A slider for selecting values", href: "/docs/components/slider", icon: Component, category: "Components" },
  { title: "Switch", description: "A toggle between on and off", href: "/docs/components/switch", icon: Component, category: "Components" },
  { title: "Table", description: "A responsive table component", href: "/docs/components/table", icon: Component, category: "Components" },
  { title: "Tabs", description: "Layered sections of content", href: "/docs/components/tabs", icon: Component, category: "Components" },
  { title: "Textarea", description: "A form control for multi-line text", href: "/docs/components/textarea", icon: Component, category: "Components" },
  { title: "Toast", description: "A succinct temporary message", href: "/docs/components/toast", icon: Component, category: "Components" },
  { title: "Toggle", description: "A two-state button", href: "/docs/components/toggle", icon: Component, category: "Components" },
  { title: "Toggle Group", description: "A set of toggle buttons", href: "/docs/components/toggle-group", icon: Component, category: "Components" },
  { title: "Tooltip", description: "Information on hover", href: "/docs/components/tooltip", icon: Component, category: "Components" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const [stars, setStars] = useState<string>("...");
  const { setTheme, theme } = useTheme();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredItems = searchItems.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const groupedItems = filteredItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, SearchItem[]>);

  useEffect(() => {
    fetch("https://api.github.com/repos/qalvinahmad/qalvinui")
      .then((res) => res.json())
      .then((data) => {
        if (data.stargazers_count !== undefined) {
          const count = data.stargazers_count;
          if (count >= 1000) {
            setStars((count / 1000).toFixed(1) + "k");
          } else {
            setStars(count.toString());
          }
        } else {
          setStars("0");
        }
      })
      .catch(() => setStars("0"));
  }, []);

  // Keyboard shortcut listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsSearchOpen(true);
      }
      if (e.key === "Escape") {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Focus input when search opens
  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      setSearchQuery("");
      setSelectedIndex(0);
    }
  }, [isSearchOpen]);

  // Handle keyboard navigation in search results
  useEffect(() => {
    if (!isSearchOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex(prev => Math.min(prev + 1, filteredItems.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex(prev => Math.max(prev - 1, 0));
      } else if (e.key === "Enter" && filteredItems[selectedIndex]) {
        e.preventDefault();
        router.push(filteredItems[selectedIndex].href);
        setIsSearchOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isSearchOpen, selectedIndex, filteredItems, router]);

  const handleSelectItem = (href: string) => {
    router.push(href);
    setIsSearchOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-14 max-w-screen-2xl items-center px-4">
          <QalvinMark />
          <div className="mr-4 hidden md:flex">
            <nav className="flex items-center gap-4 text-sm lg:gap-6 font-medium">
              <Link
                href="/"
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname === "/" ? "text-foreground" : "text-foreground/60"
                )}
              >
                Home
              </Link>
              <Link
                href="/docs/installation"
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname?.startsWith("/docs") ? "text-foreground" : "text-foreground/60"
                )}
              >
                Docs
              </Link>
              <Link
                href="/docs/components/accordion"
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname?.startsWith("/docs/components") ? "text-foreground" : "text-foreground/60"
                )}
              >
                Components
              </Link>
              <Link
                href="/blocks"
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname?.startsWith("/blocks") ? "text-foreground" : "text-foreground/60"
                )}
              >
                Blocks
              </Link>
              <Link
                href="/charts"
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname?.startsWith("/charts") ? "text-foreground" : "text-foreground/60"
                )}
              >
                Charts
              </Link>
              <Link
                href="/typeset"
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname?.startsWith("/typeset") ? "text-foreground" : "text-foreground/60"
                )}
              >
                Typeset
              </Link>
              <Link
                href="/create"
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname?.startsWith("/create") ? "text-foreground" : "text-foreground/60"
                )}
              >
                Create
              </Link>
              <Link
                href="https://qalvinfont.vercel.app/"
                target="_blank"
                className={cn(
                  "transition-colors hover:text-foreground/80 text-foreground/60"
                )}
              >
                Font
              </Link>
              <Link
                href="https://qalvincolor.vercel.app/"
                target="_blank"
                className={cn(
                  "transition-colors hover:text-foreground/80 text-foreground/60"
                )}
              >
                Color
              </Link>
              <Link
                href="https://qalvinicon.vercel.app/"
                target="_blank"
                className={cn(
                  "transition-colors hover:text-foreground/80 text-foreground/60"
                )}
              >
                Icon
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            {/* Action group matching Image 3: [Cart] [Theme] [Search ⌘K] */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Link
                href="/blocks#checkout"
                aria-label="Shopping Cart and interactive checkout"
                className="inline-flex size-9 shrink-0 items-center justify-center rounded-xl border border-border/70 bg-background/95 text-foreground shadow-2xs transition-colors hover:bg-muted/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <ShoppingCart className="size-[17px] stroke-[1.8] text-foreground/80" />
              </Link>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Switch between light and dark theme"
                className="size-9 shrink-0 rounded-xl border border-border/70 bg-background/95 text-foreground shadow-2xs transition-colors hover:bg-muted/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              >
                <Sun className="size-[18px] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-foreground/80" />
                <Moon className="absolute size-[18px] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-foreground/80" />
                <span className="sr-only">Toggle theme</span>
              </Button>
              <button
                onClick={() => setIsSearchOpen(true)}
                aria-label="Search documentation and components (Press Cmd+K)"
                className="group relative inline-flex h-9 w-36 items-center justify-between rounded-xl border border-border/70 bg-background/95 px-3 text-sm text-muted-foreground shadow-2xs transition-colors hover:bg-muted/80 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:w-48 md:w-56"
              >
                <span className="flex items-center gap-2">
                  <Search className="size-4 shrink-0 opacity-60 transition-opacity group-hover:opacity-90" />
                  <span className="font-normal text-muted-foreground">Search</span>
                </span>
                <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-0.5 rounded-md border border-border/60 bg-muted/60 px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
                  <span className="text-xs">⌘</span>K
                </kbd>
              </button>
            </div>
            <nav className="flex items-center gap-2">
              <Link
                href="https://github.com/qalvinahmad/qalvinui"
                target="_blank"
                rel="noreferrer"
                aria-label="View Qalvin UI repository on GitHub (opens in new tab)"
                className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-xl"
              >
                <div className="inline-flex h-9 items-center gap-2 text-sm font-medium border border-border/70 rounded-xl px-3 bg-background/95 hover:bg-muted/80 transition-colors shadow-2xs">
                  <Github className="h-4 w-4" />
                  <span className="tabular-nums">{stars}</span>
                </div>
              </Link>
              <Link href="/create" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-xl">
                <Button size="sm" aria-label="Create new component" className="h-9 px-3.5 rounded-xl font-medium shadow-2xs">
                  + New
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Search Modal */}
      {isSearchOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Search documentation and components"
          className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm overscroll-contain"
          onClick={() => setIsSearchOpen(false)}
        >
          <div 
            className="fixed left-[50%] top-[20%] z-50 grid w-full max-w-lg translate-x-[-50%] gap-4 border bg-background shadow-lg sm:rounded-lg overflow-hidden overscroll-contain" 
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center border-b px-3">
              <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
              <input 
                ref={inputRef}
                aria-label="Search documentation and components"
                className="flex h-11 w-full rounded-md bg-transparent py-3 text-base md:text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50" 
                placeholder="Type a command or search..." 
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setSelectedIndex(0);
                }}
              />
              <kbd className="pointer-events-none ml-2 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                ESC
              </kbd>
            </div>
            <div className="max-h-[300px] overflow-y-auto p-2 overscroll-contain">
              {filteredItems.length === 0 ? (
                <div className="py-8 text-center text-sm text-muted-foreground">
                  <p className="font-medium text-foreground">No results found for &ldquo;{searchQuery}&rdquo;</p>
                  <p className="text-xs text-muted-foreground mt-1">Try searching for components, blocks, or documentation.</p>
                </div>
              ) : (
                Object.entries(groupedItems).map(([category, items]) => (
                  <div key={category} className="mb-2">
                    <div className="px-2 py-1 text-xs font-medium text-muted-foreground">
                      {category}
                    </div>
                    {items.map((item, index) => {
                      const Icon = item.icon;
                      const globalIndex = filteredItems.indexOf(item);
                      return (
                        <button
                          key={item.href}
                          onClick={() => handleSelectItem(item.href)}
                          className={cn(
                            "flex w-full items-center gap-3 rounded-md px-2 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground",
                            globalIndex === selectedIndex && "bg-accent text-accent-foreground"
                          )}
                        >
                          <Icon className="h-4 w-4 shrink-0 opacity-50" />
                          <div className="flex flex-col items-start">
                            <span className="font-medium">{item.title}</span>
                            <span className="text-xs text-muted-foreground">{item.description}</span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                ))
              )}
            </div>
            <div className="border-t px-3 py-2 text-xs text-muted-foreground">
              <span className="mr-4">↑↓ Navigate</span>
              <span className="mr-4">↵ Select</span>
              <span>ESC Close</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
