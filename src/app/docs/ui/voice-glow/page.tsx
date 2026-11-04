"use client";

import { useState, useEffect, useRef } from "react";
import { Check, Copy, Waves, Mic, MicOff, Radio, Volume2, Sparkles, Send } from "lucide-react";
import { VoiceBeam } from "@/components/ui/voice-glow";
import type { VoiceBeamType } from "@/components/ui/voice-glow/types";
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

export default function VoiceGlowDocPage() {
  const [tab, setTab] = useState<"preview" | "code">("preview");
  const [isListening, setIsListening] = useState(true);
  const [audioLevel, setAudioLevel] = useState(0.65);
  const [voiceType, setVoiceType] = useState<VoiceBeamType>("default");
  const [inputText, setInputText] = useState("");
  const animFrameRef = useRef<number | null>(null);

  // When listening is active and not manually dragged, oscillate audio level to simulate human speech cadence
  useEffect(() => {
    if (!isListening) {
      setAudioLevel(0);
      return;
    }

    let t = 0;
    const loop = () => {
      t += 0.08;
      // Synthesize realistic speech envelope with harmonic frequency modulation
      const speech = Math.sin(t) * 0.25 + Math.sin(t * 2.3) * 0.15 + Math.cos(t * 0.7) * 0.15 + 0.45;
      setAudioLevel(Math.max(0.1, Math.min(0.95, speech)));
      animFrameRef.current = requestAnimationFrame(loop);
    };

    animFrameRef.current = requestAnimationFrame(loop);
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isListening]);

  const usageCode = `import { VoiceBeam } from "@/components/ui/voice-glow";
import { Mic } from "lucide-react";
import { useState } from "react";

export function VoiceGlowDemo() {
  const [active, setActive] = useState(true);
  const [level, setLevel] = useState(0.7); // 0 to 1 audio drive

  return (
    <VoiceBeam
      type="${voiceType}"
      active={active}
      level={level}
      className="p-1 rounded-2xl"
    >
      <div className="flex items-center gap-3 px-4 py-3 bg-zinc-950 rounded-2xl border border-zinc-800 text-white">
        <button
          onClick={() => setActive(!active)}
          className="p-2 rounded-full bg-primary text-primary-foreground shadow"
        >
          <Mic className="h-4 w-4" />
        </button>
        <input
          type="text"
          placeholder="Ask AI anything..."
          className="bg-transparent text-sm focus:outline-none flex-1 text-white"
        />
      </div>
    </VoiceBeam>
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
          Dynamic audio-reactive glowing aura and waveform beam designed for voice assistants, real-time speech AI agents, and conversational speech interfaces.
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
          <div className="rounded-2xl border p-8 sm:p-12 bg-card/40 space-y-8 flex flex-col items-center justify-center">
            {/* Interactive Voice Stage */}
            <div className="w-full flex flex-col items-center justify-center min-h-[300px] rounded-2xl bg-zinc-950 border border-zinc-800 relative overflow-hidden p-8 shadow-2xl">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900/60 via-zinc-950 to-black pointer-events-none" />

              <div className="relative z-10 w-full max-w-md flex flex-col items-center gap-6">
                {/* VoiceBeam Container Wrapping Child Element */}
                <VoiceBeam
                  key={voiceType}
                  type={voiceType}
                  active={isListening}
                  level={audioLevel}
                  className="w-full"
                >
                  <div className="relative flex items-center gap-3 px-4 py-3 bg-zinc-900/95 backdrop-blur-md rounded-2xl border border-zinc-800 shadow-2xl">
                    <button
                      onClick={() => setIsListening(!isListening)}
                      className={cn(
                        "p-2.5 rounded-full text-white cursor-pointer transition-all duration-300 shadow-lg flex items-center justify-center",
                        isListening
                          ? "bg-rose-500 hover:bg-rose-600 scale-105 animate-pulse"
                          : "bg-zinc-800 hover:bg-zinc-700 text-zinc-400"
                      )}
                      title={isListening ? "Mute Microphone" : "Start Voice Recording"}
                    >
                      {isListening ? <Mic className="h-4 w-4" /> : <MicOff className="h-4 w-4" />}
                    </button>

                    <input
                      type="text"
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                      placeholder={isListening ? "Listening... speak now or type" : "Voice muted. Click mic to speak..."}
                      className="bg-transparent text-sm focus:outline-none flex-1 text-white placeholder:text-zinc-500"
                    />

                    <button
                      onClick={() => setInputText("")}
                      className="p-2 rounded-xl bg-primary text-primary-foreground text-xs font-medium cursor-pointer hover:opacity-90"
                    >
                      <Send className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </VoiceBeam>

                {/* Status Indicator */}
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                  <span
                    className={cn(
                      "w-2 h-2 rounded-full",
                      isListening ? "bg-emerald-400 animate-ping" : "bg-zinc-600"
                    )}
                  />
                  <span>
                    {isListening
                      ? `Voice Stream Active • Level: ${Math.round(audioLevel * 100)}%`
                      : "Microphone Standby"}
                  </span>
                </div>
              </div>
            </div>

            {/* Interactive Controls */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {/* Mic Simulator Toggle */}
              <div className="space-y-2">
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Voice Activity Simulation
                </span>
                <div className="flex gap-2">
                  <button
                    onClick={() => setIsListening(true)}
                    className={cn(
                      "flex-1 p-3 rounded-xl border text-xs font-medium cursor-pointer transition-colors flex items-center justify-center gap-2",
                      isListening
                        ? "bg-foreground text-background font-semibold shadow-sm"
                        : "bg-muted/40 text-muted-foreground hover:text-foreground"
                    )}
                  >
                    <Mic className="h-4 w-4 text-emerald-400" />
                    <span>Live Audio Waves</span>
                  </button>
                  <button
                    onClick={() => setIsListening(false)}
                    className={cn(
                      "flex-1 p-3 rounded-xl border text-xs font-medium cursor-pointer transition-colors flex items-center justify-center gap-2",
                      !isListening
                        ? "bg-foreground text-background font-semibold shadow-sm"
                        : "bg-muted/40 text-muted-foreground hover:text-foreground"
                    )}
                  >
                    <MicOff className="h-4 w-4" />
                    <span>Mute / Idle</span>
                  </button>
                </div>
              </div>

              {/* Host Preset Type */}
              <div className="space-y-2">
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Host Geometry Preset
                </span>
                <div className="flex gap-2">
                  {(["default", "pill", "mobile"] as const).map((t) => (
                    <button
                      key={t}
                      onClick={() => setVoiceType(t)}
                      className={cn(
                        "flex-1 py-3 rounded-xl border text-xs font-medium capitalize cursor-pointer transition-colors",
                        voiceType === t
                          ? "bg-foreground text-background font-semibold shadow-sm"
                          : "bg-muted/40 text-muted-foreground hover:text-foreground"
                      )}
                    >
                      {t}
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
                <td className="px-4 py-3 font-mono text-foreground font-semibold">active</td>
                <td className="px-4 py-3 font-mono text-xs">boolean</td>
                <td className="px-4 py-3 font-mono text-xs">true</td>
                <td className="px-4 py-3">Whether the voice beam aura is active and running.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-foreground font-semibold">level</td>
                <td className="px-4 py-3 font-mono text-xs">number | (() =&gt; number)</td>
                <td className="px-4 py-3 font-mono text-xs">0</td>
                <td className="px-4 py-3">Manual audio volume amplitude from 0 (silent) to 1 (full speech peak).</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-foreground font-semibold">type</td>
                <td className="px-4 py-3 font-mono text-xs">"default" | "pill" | "mobile"</td>
                <td className="px-4 py-3 font-mono text-xs">"default"</td>
                <td className="px-4 py-3">Host preset geometry (chat input box, recording pill, or bottom screen wave).</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-foreground font-semibold">stream</td>
                <td className="px-4 py-3 font-mono text-xs">MediaStream</td>
                <td className="px-4 py-3 font-mono text-xs">-</td>
                <td className="px-4 py-3">Optional live microphone stream from getUserMedia to drive real audio analysis.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
