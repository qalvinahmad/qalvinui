"use client";

import { useState } from "react";
import { Check, Copy, Bot } from "lucide-react";

interface InstallTabsProps {
  slug: string;
  className?: string;
}

export function InstallTabs({ slug, className = "" }: InstallTabsProps) {
  const [activeTab, setActiveTab] = useState<"agent" | "bun" | "npm" | "pnpm">("agent");
  const [copied, setCopied] = useState(false);

  const commands = {
    agent: `> Add the ${slug} component from Qalvin UI to this project with npx @alvinahmad/ui add ${slug}, then show me how to use it.`,
    bun: `bunx --bun @alvinahmad/ui add ${slug}`,
    npm: `npx @alvinahmad/ui add ${slug}`,
    pnpm: `pnpm dlx @alvinahmad/ui add ${slug}`,
  };

  const currentCommand = commands[activeTab];

  const handleCopy = () => {
    navigator.clipboard.writeText(currentCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`w-full rounded-xl border border-border/60 bg-muted/20 overflow-hidden ${className}`}>
      <div className="flex items-center justify-between border-b border-border/40 px-3 py-2 bg-muted/40">
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setActiveTab("agent")}
            className={`flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-md transition-all cursor-pointer ${
              activeTab === "agent"
                ? "bg-background text-foreground shadow-xs font-semibold"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Bot className="h-3.5 w-3.5 text-primary" />
            Agent
          </button>
          <button
            onClick={() => setActiveTab("bun")}
            className={`px-3 py-1 text-xs font-medium rounded-md transition-all cursor-pointer ${
              activeTab === "bun"
                ? "bg-background text-foreground shadow-xs font-semibold"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            bun
          </button>
          <button
            onClick={() => setActiveTab("npm")}
            className={`px-3 py-1 text-xs font-medium rounded-md transition-all cursor-pointer ${
              activeTab === "npm"
                ? "bg-background text-foreground shadow-xs font-semibold"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            npm
          </button>
          <button
            onClick={() => setActiveTab("pnpm")}
            className={`px-3 py-1 text-xs font-medium rounded-md transition-all cursor-pointer ${
              activeTab === "pnpm"
                ? "bg-background text-foreground shadow-xs font-semibold"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            pnpm
          </button>
        </div>

        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer px-2.5 py-1 rounded-md hover:bg-muted"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5 text-green-500" />
              <span className="text-green-500 font-medium">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" />
              <span>Copy code</span>
            </>
          )}
        </button>
      </div>

      <div className="p-4 font-mono text-xs sm:text-sm overflow-x-auto text-zinc-100 bg-zinc-950 dark:bg-black">
        <code>{currentCommand}</code>
      </div>
    </div>
  );
}
