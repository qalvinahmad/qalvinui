"use client";

import React, { useState } from "react";
import { Check, Copy, FileCode, Terminal } from "lucide-react";

export interface FileTab {
  name: string;
  path: string;
  language?: string;
  code: string;
  description?: string;
}

export interface BlockCodeViewerProps {
  files: FileTab[];
  defaultTab?: string;
}

export function BlockCodeViewer({ files, defaultTab }: BlockCodeViewerProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || files[0]?.name || "");
  const [copied, setCopied] = useState(false);

  const currentFile = files.find((f) => f.name === activeTab) || files[0];

  const handleCopy = () => {
    if (!currentFile) return;
    navigator.clipboard.writeText(currentFile.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-2xl border bg-zinc-950 text-zinc-100 overflow-hidden shadow-xl">
      {/* Tab Navigation */}
      <div className="flex flex-wrap items-center justify-between border-b border-zinc-800 bg-zinc-900/60 px-4 py-2.5 gap-2">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
          {files.map((file) => (
            <button
              key={file.name}
              onClick={() => setActiveTab(file.name)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                activeTab === file.name
                  ? "bg-zinc-800 text-zinc-100 font-medium shadow-sm border border-zinc-700/60"
                  : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/40"
              }`}
            >
              {file.name.includes("install") || file.name.includes("Install") ? (
                <Terminal className="h-3.5 w-3.5 text-amber-400" />
              ) : (
                <FileCode className="h-3.5 w-3.5 text-blue-400" />
              )}
              {file.name}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3 ml-auto">
          <span className="text-[11px] font-mono text-zinc-400 hidden sm:inline-block">
            {currentFile?.path}
          </span>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 text-xs text-zinc-300 hover:text-zinc-100 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700/80 px-3 py-1.5 rounded-lg transition-colors cursor-pointer shrink-0"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-emerald-400" />
                <span className="text-emerald-400 font-medium">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5 text-zinc-400" />
                <span>Copy Code</span>
              </>
            )}
          </button>
        </div>
      </div>

      {currentFile?.description && (
        <div className="bg-zinc-900/30 px-6 py-2 border-b border-zinc-800/60 text-xs text-zinc-400">
          {currentFile.description}
        </div>
      )}

      {/* Code Display */}
      <div className="p-6 overflow-x-auto max-h-[560px] overflow-y-auto font-mono text-xs leading-relaxed text-zinc-300">
        <pre className="tab-size-2">
          <code>{currentFile?.code}</code>
        </pre>
      </div>
    </div>
  );
}

export default BlockCodeViewer;
