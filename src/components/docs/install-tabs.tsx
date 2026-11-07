"use client";

import { useState } from "react";
import { Check, Copy, Bot } from "lucide-react";

interface InstallTabsProps {
  slug: string;
  className?: string;
}

type TabKey = "agent" | "bun" | "npm" | "pnpm";

export function InstallTabs({ slug, className = "" }: InstallTabsProps) {
  const [activeTab, setActiveTab] = useState<TabKey>("agent");
  const [copied, setCopied] = useState(false);

  const commands: Record<TabKey, string> = {
    agent: `> Add the ${slug} component from Qalvin UI to this project with npx @alvinahmad/ui add ${slug}, then show me how to use it.`,
    bun: `bunx --bun @alvinahmad/ui add ${slug}`,
    npm: `npx @alvinahmad/ui add ${slug}`,
    pnpm: `pnpm dlx @alvinahmad/ui add ${slug}`,
  };

  const tabs: Array<{ key: TabKey; label: string; icon?: React.ReactNode }> = [
    { key: "agent", label: "Agent", icon: <Bot className="h-3.5 w-3.5 text-primary" /> },
    { key: "bun", label: "bun" },
    { key: "npm", label: "npm" },
    { key: "pnpm", label: "pnpm" },
  ];

  const currentCommand = commands[activeTab];

  const handleCopy = () => {
    navigator.clipboard.writeText(currentCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      const nextIndex = (index + 1) % tabs.length;
      setActiveTab(tabs[nextIndex].key);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      const prevIndex = (index - 1 + tabs.length) % tabs.length;
      setActiveTab(tabs[prevIndex].key);
    }
  };

  return (
    <div className={`w-full rounded-xl border border-border/80 bg-muted/20 overflow-hidden ${className}`}>
      <div className="flex items-center justify-between border-b border-border/50 px-3 py-1.5 bg-muted/40">
        <div
          role="tablist"
          aria-label="Package manager installation tabs"
          className="flex items-center gap-1 p-0.5 rounded-lg bg-muted/60"
        >
          {tabs.map((tab, idx) => {
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                role="tab"
                id={`tab-${tab.key}`}
                aria-selected={isActive}
                aria-controls="install-tab-panel"
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActiveTab(tab.key)}
                onKeyDown={(e) => handleKeyDown(e, idx)}
                className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-md transition-[color,background-color,box-shadow,transform] duration-150 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 active:scale-[0.96] motion-reduce:active:scale-100 ${
                  isActive
                    ? "bg-background text-foreground shadow-xs font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            );
          })}
        </div>

        <button
          onClick={handleCopy}
          type="button"
          aria-label="Copy installation command"
          className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-[color,background-color,transform] duration-150 cursor-pointer px-2.5 py-1 rounded-md hover:bg-muted/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring active:scale-[0.96] motion-reduce:active:scale-100"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5 text-emerald-500 animate-in fade-in duration-150" />
              <span className="text-emerald-500 font-medium">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5 opacity-70" />
              <span>Copy code</span>
            </>
          )}
        </button>
      </div>

      <div
        role="tabpanel"
        id="install-tab-panel"
        aria-labelledby={`tab-${activeTab}`}
        className="p-4 font-mono text-xs sm:text-sm overflow-x-auto text-zinc-100 bg-zinc-950 dark:bg-black selection:bg-primary selection:text-primary-foreground"
      >
        <code>{currentCommand}</code>
      </div>
    </div>
  );
}
