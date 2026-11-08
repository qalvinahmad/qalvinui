"use client";

import { useState } from "react";
import { ThreeDGlassButton } from "@/components/ui/three-d-glass-button";
import { InstallTabs } from "@/components/docs/install-tabs";
import { Eye, Code, Sparkles } from "lucide-react";

export default function ThreeDGlassButtonDocPage() {
  const [tab, setTab] = useState<"preview" | "code">("preview");

  const usageCode = `import { ThreeDGlassButton, GlassAiButton } from "@/components/ui/3d-glass-button";

export function GlassAiButtonDemo() {
  return (
    <div className="flex items-center justify-center p-8 bg-slate-900 rounded-3xl">
      <ThreeDGlassButton
        height="520px"
        showControls={true}
      />
    </div>
  );
}`;

  return (
    <div className="space-y-10 max-w-4xl pb-16">
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/20">
            WebGL & Physical Glass
          </span>
          <span className="text-xs text-muted-foreground font-mono">ui/3d-glass-button</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">3D Glass AI Button</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Tombol fisik kaca 3D interaktif bertenaga Three.js dengan refraksi optik realistis, bola galaksi spiral partikel di dalam badan kaca, efek kaustik dinamis, serta respon fisika kemiringan pointer dan sensasi penekanan tombol (*press depth*).
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Installation</h2>
        <InstallTabs slug="3d-glass-button" />
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between border-b pb-2">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setTab("preview")}
              className={`flex items-center gap-1.5 pb-2 px-3 text-sm font-medium border-b-2 -mb-2.5 transition-colors cursor-pointer ${
                tab === "preview"
                  ? "border-primary text-foreground font-semibold"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              <Eye className="size-4" />
              Preview
            </button>
            <button
              onClick={() => setTab("code")}
              className={`flex items-center gap-1.5 pb-2 px-3 text-sm font-medium border-b-2 -mb-2.5 transition-colors cursor-pointer ${
                tab === "code"
                  ? "border-primary text-foreground font-semibold"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              <Code className="size-4" />
              Code
            </button>
          </div>
          <span className="text-xs text-muted-foreground font-mono hidden sm:inline">
            Interactive Three.js Scene
          </span>
        </div>

        {tab === "preview" ? (
          <div className="space-y-4">
            <ThreeDGlassButton
              height="520px"
              showControls={true}
            />
            <p className="text-xs text-muted-foreground text-center">
              Arahkan kursor untuk memiringkan tombol, atau klik/tekan untuk memicu animasi ledakan partikel galaksi (*particle burst*).
            </p>
          </div>
        ) : (
          <div className="relative rounded-2xl bg-zinc-950 p-4 border border-zinc-800 text-zinc-100 font-mono text-sm overflow-x-auto">
            <pre>
              <code>{usageCode}</code>
            </pre>
          </div>
        )}
      </div>

      {/* Props documentation */}
      <div className="space-y-4 pt-4 border-t">
        <h2 className="text-2xl font-bold tracking-tight">Props & Konfigurasi</h2>
        <div className="border rounded-xl overflow-hidden">
          <table className="w-full text-sm text-left">
            <thead className="bg-muted text-muted-foreground border-b text-xs uppercase tracking-wider">
              <tr>
                <th className="p-3">Prop</th>
                <th className="p-3">Tipe</th>
                <th className="p-3">Default</th>
                <th className="p-3">Deskripsi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="p-3 font-mono text-xs">height</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">string | number</td>
                <td className="p-3 font-mono text-xs">"520px"</td>
                <td className="p-3 text-muted-foreground">Tinggi container kanvas tombol kaca.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-xs">showControls</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">boolean</td>
                <td className="p-3 font-mono text-xs">true</td>
                <td className="p-3 text-muted-foreground">Tampilkan kontrol fullscreen, refresh, dan link tab baru di pojok kanan atas.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-xs">children</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">ReactNode</td>
                <td className="p-3 font-mono text-xs">undefined</td>
                <td className="p-3 text-muted-foreground">Elemen opsional yang dirender di atas kanvas.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
