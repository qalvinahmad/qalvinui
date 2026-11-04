"use client";

import { useState } from "react";
import { Check, Copy, Bot, Sparkles, RefreshCw, Zap } from "lucide-react";
import { ThinkingOrb, type OrbState, type OrbSize } from "@/components/ui/thinking-orb";
import { cn } from "@/lib/utils";

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

const STATES: { id: OrbState; label: string; desc: string }[] = [
  { id: "working", label: "Working", desc: "Particles flowing on tilted dual orbits" },
  { id: "searching", label: "Searching", desc: "Scan meridian sweeps a dotted globe" },
  { id: "solving", label: "Solving", desc: "Bands scramble in quarter turns then align" },
  { id: "listening", label: "Listening", desc: "Waveform rolls through latitude rings" },
  { id: "connecting", label: "Connecting", desc: "Constellation network wires itself" },
  { id: "breathing", label: "Breathing", desc: "Face-on harmonic ring slowly morphing" },
];

export default function ThinkingOrbDocPage() {
  const [tab, setTab] = useState<"preview" | "code">("preview");
  const [state, setState] = useState<OrbState>("working");
  const [size, setSize] = useState<OrbSize>(64);
  const [speed, setSpeed] = useState<number>(1);

  const usageCode = `import { ThinkingOrb } from "@/components/ui/thinking-orb";

export function ThinkingOrbDemo() {
  return (
    <ThinkingOrb
      state="working"    // "idle" | "thinking" | "working" | "listening" | "complete" | "error"
      size={64}          // 64 (avatar) | 20 (inline)
      speed={1}          // speed multiplier
      theme="auto"       // "auto" | "light" | "dark"
    />
  );
}`;

  const cliInstallCode = `npx @alvinahmad/qalvinui add thinking-orb`;

  return (
    <div className="space-y-10 max-w-4xl">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-cyan-500/10 text-cyan-500 border border-cyan-500/20">
            AI & Agent State
          </span>
          <span className="text-xs text-muted-foreground font-mono">ui/thinking-orb</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight">Thinking Orb</h1>
        <p className="text-lg text-muted-foreground">
          GPU canvas particle orb that visualizes AI reasoning, chain-of-thought, listening, and generation states with silky smooth 60fps animations.
        </p>
      </div>

      {/* Interactive Stage */}
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
          <div className="rounded-2xl border p-6 sm:p-8 bg-card/40 flex flex-col items-center justify-center gap-8">
            <div className="relative flex items-center justify-center p-8 bg-muted/20 border rounded-2xl w-full min-h-[220px]">
              <div className="absolute w-32 h-32 rounded-full bg-primary/20 blur-2xl animate-pulse pointer-events-none" />
              <ThinkingOrb
                key={`${state}-${size}-${speed}`}
                state={state}
                size={size}
                speed={speed}
                theme="auto"
              />
            </div>

            {/* State Picker */}
            <div className="w-full space-y-3">
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Select Agent State
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {STATES.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setState(s.id)}
                    className={cn(
                      "p-3 rounded-xl border text-left text-xs font-medium transition-all cursor-pointer",
                      state === s.id
                        ? "bg-foreground text-background border-foreground shadow-sm"
                        : "bg-muted/30 hover:bg-muted text-muted-foreground hover:text-foreground"
                    )}
                  >
                    <div className="font-semibold">{s.label}</div>
                    <div className="text-[10px] opacity-75 truncate">{s.desc}</div>
                  </button>
                ))}
              </div>

              {/* Size & Speed */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t text-xs">
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground">Size:</span>
                  {([64, 20] as const).map((sz) => (
                    <button
                      key={sz}
                      onClick={() => setSize(sz)}
                      className={cn(
                        "px-2.5 py-1 rounded-md text-xs font-medium cursor-pointer transition-colors",
                        size === sz ? "bg-foreground text-background" : "bg-muted text-muted-foreground"
                      )}
                    >
                      {sz === 64 ? "64px (Avatar)" : "20px (Inline)"}
                    </button>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground">Speed:</span>
                  {[0.5, 1, 1.5, 2].map((spd) => (
                    <button
                      key={spd}
                      onClick={() => setSpeed(spd)}
                      className={cn(
                        "px-2 py-1 rounded-md text-xs font-medium cursor-pointer transition-colors",
                        speed === spd ? "bg-foreground text-background" : "bg-muted text-muted-foreground"
                      )}
                    >
                      {spd}x
                    </button>
                  ))}
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
                <td className="px-4 py-3 font-mono text-foreground font-semibold">state</td>
                <td className="px-4 py-3 font-mono text-xs">OrbState</td>
                <td className="px-4 py-3 font-mono text-xs">"working"</td>
                <td className="px-4 py-3">Current active particle choreography ("idle", "thinking", "working", "listening", "complete", "error").</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-foreground font-semibold">size</td>
                <td className="px-4 py-3 font-mono text-xs">64 | 20</td>
                <td className="px-4 py-3 font-mono text-xs">64</td>
                <td className="px-4 py-3">Particle canvas diameter in CSS pixels.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-foreground font-semibold">speed</td>
                <td className="px-4 py-3 font-mono text-xs">number</td>
                <td className="px-4 py-3 font-mono text-xs">1</td>
                <td className="px-4 py-3">Animation speed multiplier.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-foreground font-semibold">theme</td>
                <td className="px-4 py-3 font-mono text-xs">"auto" | "light" | "dark"</td>
                <td className="px-4 py-3 font-mono text-xs">"auto"</td>
                <td className="px-4 py-3">Color scheme for particle blend modes.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
