"use client";

import { useState } from "react";
import { Check, Copy, Waves, Mic, Radio } from "lucide-react";
import { VoiceBeam } from "@/components/ui/voice-glow";

function CodeBlock({ code, language = "tsx" }: { code: string; language?: string }) {
  const [copied, setCopied] = useState(false);

  const onCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative rounded-lg border bg-muted/50 p-4 font-mono text-sm">
      <div className="absolute right-4 top-4">
        <button
          onClick={onCopy}
          className="flex h-8 w-8 items-center justify-center rounded-md border bg-background text-muted-foreground hover:bg-muted hover:text-foreground cursor-pointer"
        >
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </button>
      </div>
      <pre className="overflow-x-auto">
        <code className="text-foreground/80">{code}</code>
      </pre>
    </div>
  );
}

export default function VoiceGlowDocPage() {
  const [tab, setTab] = useState<"preview" | "code">("preview");

  const usageCode = `import { VoiceBeam } from "@/components/ui/voice-glow";
import { Mic } from "lucide-react";

export function VoiceGlowDemo() {
  return (
    <div className="relative flex flex-col items-center justify-center p-12 rounded-3xl border bg-card">
      <VoiceBeam />
      <button className="z-10 p-4 rounded-full bg-primary text-primary-foreground shadow-lg">
        <Mic className="h-6 w-6" />
      </button>
    </div>
  );
}`;

  const cliInstallCode = `npx @alvinahmad/qalvinui add voice-glow`;

  return (
    <div className="space-y-10 max-w-4xl">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
            Voice & Audio
          </span>
          <span className="text-xs text-muted-foreground font-mono">ui/voice-glow</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight">Voice Glow</h1>
        <p className="text-lg text-muted-foreground">
          Dynamic audio-reactive glowing aura and waveform beam designed for voice assistants, real-time speech AI agents, and conversational voice interfaces.
        </p>
      </div>

      {/* Tabs */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 border-b">
          <button
            onClick={() => setTab("preview")}
            className={`pb-2 px-3 text-sm font-medium border-b-2 transition-colors cursor-pointer ${
              tab === "preview"
                ? "border-primary text-foreground"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            Preview
          </button>
          <button
            onClick={() => setTab("code")}
            className={`pb-2 px-3 text-sm font-medium border-b-2 transition-colors cursor-pointer ${
              tab === "code"
                ? "border-primary text-foreground"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            Code
          </button>
        </div>

        {tab === "preview" ? (
          <div className="rounded-2xl border p-12 bg-card/40 flex flex-col items-center justify-center gap-6">
            <div className="relative flex flex-col items-center justify-center min-h-[220px] w-full max-w-md">
              <VoiceBeam />
              <div className="z-10 flex flex-col items-center gap-3">
                <div className="p-4 rounded-full bg-primary text-primary-foreground shadow-2xl flex items-center justify-center animate-pulse">
                  <Mic className="h-6 w-6" />
                </div>
                <div className="text-center space-y-1">
                  <div className="text-sm font-semibold text-foreground flex items-center gap-1.5 justify-center">
                    <Radio className="w-3.5 h-3.5 text-emerald-400 animate-ping" />
                    <span>Listening to Voice Input</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Ambient acoustic radiation wave</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <CodeBlock code={usageCode} />
        )}
      </div>

      {/* Installation */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold tracking-tight">Installation</h2>
        <CodeBlock code={cliInstallCode} language="bash" />
      </div>

      {/* Props */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold tracking-tight">Props Reference</h2>
        <div className="rounded-xl border overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-muted/50 border-b text-xs uppercase text-muted-foreground">
              <tr>
                <th className="px-4 py-3">Prop</th>
                <th className="px-4 py-3">Type</th>
                <th className="px-4 py-3">Default</th>
                <th className="px-4 py-3">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y text-muted-foreground">
              <tr>
                <td className="px-4 py-3 font-mono text-foreground font-semibold">className</td>
                <td className="px-4 py-3 font-mono text-xs">string</td>
                <td className="px-4 py-3 font-mono text-xs">-</td>
                <td className="px-4 py-3">Custom styling classes applied to the glow aura container.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
