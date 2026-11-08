"use client";

import { useState } from "react";
import { ThreeDCrt, CrtVariant } from "@/components/ui/three-d-crt";
import { InstallTabs } from "@/components/docs/install-tabs";
import { Eye, Code, Monitor, Terminal } from "lucide-react";

export default function ThreeDCrtDocPage() {
  const [tab, setTab] = useState<"preview" | "code">("preview");
  const [activeVariant, setActiveVariant] = useState<CrtVariant>("terminal");

  const usageCode = `import { ThreeDCrt, CrtBackground } from "@/components/ui/3d-crt";

export function CrtDemo() {
  return (
    <ThreeDCrt
      variant="${activeVariant}"
      speed={1.00}
      typeSpeed={1.00}
      motion={1.00}
      hue={0}
      saturation={1.00}
      brightness={1.00}
      opacity={1.00}
      height="640px"
      showControls={true}
    >
      {/* Optional overlay elements */}
      <div className="space-y-2 bg-black/70 backdrop-blur-md p-4 sm:p-6 rounded-2xl border border-emerald-500/20 text-white max-w-md">
        <span className="text-xs uppercase tracking-widest text-emerald-400 font-semibold font-mono flex items-center gap-1.5">
          <Terminal className="size-3 text-emerald-400" />
          CRT Phosphor Display
        </span>
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight">Retro Terminal Simulation</h2>
        <p className="text-xs sm:text-sm text-zinc-300">
          Scanlines prosedural, gril bayangan fosfor, aberasi kromatik, dan distorsi barrel tabung sinar katoda.
        </p>
      </div>
    </ThreeDCrt>
  );
}`;

  return (
    <div className="space-y-10 max-w-4xl pb-16">
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            Retro WebGL & Phosphor
          </span>
          <span className="text-xs text-muted-foreground font-mono">ui/3d-crt</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">3D CRT (Cathode Ray Tube)</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Autentik simulasi tabung sinar katoda (CRT) dengan scanlines presisi, shadow-mask phosphor grille, distorsi barrel cembung, aberasi kromatik, dan film grain. Tersedia dalam 4 preset legendaris: Terminal, Cinematic, Blue Screen, dan Nintendo.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Installation</h2>
        <InstallTabs slug="3d-crt" />
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
            variant: {activeVariant}
          </span>
        </div>

        {tab === "preview" ? (
          <div className="space-y-4">
            <ThreeDCrt
              key={activeVariant}
              variant={activeVariant}
              speed={1.0}
              typeSpeed={1.0}
              motion={1.0}
              height="640px"
              showControls={true}
            />

            {/* Variant Switcher */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {(
                [
                  { id: "terminal", title: "Terminal", desc: "Green Matrix phosphor terminal" },
                  { id: "cinematic", title: "Cinematic", desc: "Film countdown leader" },
                  { id: "blue-screen", title: "Blue Screen", desc: "VGA debug blue raster screen" },
                  { id: "nintendo", title: "Nintendo", desc: "Retro 8-bit game scene" },
                ] as const
              ).map((v) => (
                <button
                  key={v.id}
                  onClick={() => setActiveVariant(v.id)}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    activeVariant === v.id
                      ? "border-emerald-500 bg-emerald-500/10 shadow-sm"
                      : "border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 bg-card"
                  }`}
                >
                  <div className="font-semibold text-sm flex items-center justify-between">
                    <span>{v.title}</span>
                    {activeVariant === v.id && (
                      <span className="size-2 rounded-full bg-emerald-400" />
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                    {v.desc}
                  </p>
                </button>
              ))}
            </div>
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
                <td className="p-3 font-mono text-xs">variant</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">"terminal" | "cinematic" | "blue-screen" | "nintendo"</td>
                <td className="p-3 font-mono text-xs">"terminal"</td>
                <td className="p-3 text-muted-foreground">Preset tampilan tabung CRT retro.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-xs">speed</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">number</td>
                <td className="p-3 font-mono text-xs">1.0</td>
                <td className="p-3 text-muted-foreground">Kecepatan animasi shader scanlines & noise.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-xs">typeSpeed</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">number</td>
                <td className="p-3 font-mono text-xs">1.0</td>
                <td className="p-3 text-muted-foreground">Kecepatan typewriter teks terminal phosphor.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-xs">motion</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">number</td>
                <td className="p-3 font-mono text-xs">1.0</td>
                <td className="p-3 text-muted-foreground">Intensitas jitter dan rolling scan bar.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-xs">brightness</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">number</td>
                <td className="p-3 font-mono text-xs">1.0</td>
                <td className="p-3 text-muted-foreground">Tingkat kecerahan pendaran phosphor.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-xs">height</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">string | number</td>
                <td className="p-3 font-mono text-xs">"640px"</td>
                <td className="p-3 text-muted-foreground">Tinggi container kanvas CRT.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-xs">showControls</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">boolean</td>
                <td className="p-3 font-mono text-xs">true</td>
                <td className="p-3 text-muted-foreground">Tampilkan kontrol fullscreen, refresh, dan link tab baru.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
