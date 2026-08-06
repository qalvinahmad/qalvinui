"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Search, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
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

export function SiteHeader() {
  const pathname = usePathname();
  const [stars, setStars] = useState<string>("...");
  const { setTheme, theme } = useTheme();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

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

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-14 max-w-screen-2xl items-center px-4">
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
                href="/components"
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname?.startsWith("/components") ? "text-foreground" : "text-foreground/60"
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
                href="/themes"
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname?.startsWith("/themes") ? "text-foreground" : "text-foreground/60"
                )}
              >
                Themes
              </Link>
              <Link
                href="/examples"
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname?.startsWith("/examples") ? "text-foreground" : "text-foreground/60"
                )}
              >
                Examples
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <button 
                onClick={() => setIsSearchOpen(true)}
                className="inline-flex items-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground px-4 py-2 relative h-8 w-full justify-start rounded-[0.5rem] bg-muted/50 text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-64"
              >
                <span className="hidden lg:inline-flex">Search documentation...</span>
                <span className="inline-flex lg:hidden">Search...</span>
                <kbd className="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                  <span className="text-xs">⌘</span>K
                </kbd>
              </button>
            </div>
            <nav className="flex items-center gap-2">
              <Link href="https://github.com/qalvinahmad/qalvinui" target="_blank" rel="noreferrer">
                <div className="inline-flex items-center gap-2 text-sm font-medium border border-border/40 rounded-md px-3 py-1.5 bg-muted/50 hover:bg-muted/80 transition-colors">
                  <Github className="h-4 w-4" />
                  <span>{stars}</span>
                </div>
              </Link>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8 px-0"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              >
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
              <Button size="sm" className="h-8 ml-2 rounded-md">
                + New
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm" onClick={() => setIsSearchOpen(false)}>
          <div 
            className="fixed left-[50%] top-[20%] z-50 grid w-full max-w-lg translate-x-[-50%] gap-4 border bg-background shadow-lg sm:rounded-lg overflow-hidden" 
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center border-b px-3">
              <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
              <input 
                className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50" 
                placeholder="Type a command or search..." 
                autoFocus 
              />
            </div>
            <div className="py-6 text-center text-sm text-muted-foreground">
              No results found.
            </div>
          </div>
        </div>
      )}
    </>
  );
}
