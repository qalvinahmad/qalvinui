"use client";

import { useState } from "react";
import { ThreeDSection, ThreeDLayer } from "@/components/ui/three-d-section";
import { InstallTabs } from "@/components/docs/install-tabs";
import { Eye, Code, Layers, Sparkles, Move3d } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ThreeDSectionDocPage() {
  const [tab, setTab] = useState<"preview" | "code">("preview");
  const [demoMode, setDemoMode] = useState<"empty" | "populated" | "kibori">("empty");

  const usageCode = `import { ThreeDSection, ThreeDLayer } from "@/components/ui/3d-section";

// 1. Empty Section (Ready to be filled by you)
export function EmptyDemo() {
  return (
    <ThreeDSection
      intensity={14}
      placeholderTitle="Your 3D Section"
      placeholderDescription="Isi section ini dengan komponen Anda sendiri."
    />
  );
}

// 2. Populated Section with Multi-depth Parallax Layers
export function LayeredDemo() {
  return (
    <ThreeDSection intensity={16}>
      <div className="flex flex-col items-center justify-center py-12 px-6 text-center space-y-6">
        <ThreeDLayer depth={60}>
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary text-primary-foreground shadow-lg">
            3D Spatial Depth (+60px)
          </span>
        </ThreeDLayer>

        <ThreeDLayer depth={40}>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-foreground">
            Build Dimensional Experiences
          </h2>
        </ThreeDLayer>

        <ThreeDLayer depth={25}>
          <p className="text-base text-muted-foreground max-w-lg">
            Layer your UI elements into Z-depth for dynamic parallax and physical perspective.
          </p>
        </ThreeDLayer>

        <ThreeDLayer depth={50}>
          <button className="px-6 py-2.5 rounded-xl font-medium bg-foreground text-background shadow-xl hover:scale-105 transition-transform">
            Explore 3D
          </button>
        </ThreeDLayer>
      </div>
    </ThreeDSection>
  );
}

// 3. KIBORI WebGL Japanese Woodcraft 3D Scene
export function KiboriDemo() {
  return <ThreeDSection variant="kibori" height="600px" />;
}`;

  return (
    <div className="space-y-10 max-w-4xl pb-16">
      {/* Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
            Layout & Spatial
          </span>
          <span className="text-xs text-muted-foreground font-mono">ui/3d-section</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">3D Section</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Interactive 3D spatial viewport with real-time cursor tilt, multi-layer Z-depth parallax, and specular lighting. Isi kosong siap pakai untuk konten kustom Anda.
        </p>
      </div>

      {/* Package Manager / Agent Tabs */}
      <div className="space-y-3">
        <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Installation</h2>
        <InstallTabs slug="3d-section" />
      </div>

      {/* Interactive Preview & Code */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between border-b pb-2 gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setTab("preview")}
              className={`flex items-center gap-1.5 pb-2 px-3 text-sm font-medium border-b-2 -mb-2.5 transition-colors cursor-pointer ${
                tab === "preview"
                  ? "border-primary text-foreground font-semibold"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              <Eye className="h-4 w-4" />
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
              <Code className="h-4 w-4" />
              Code
            </button>
          </div>

          {/* Toggle Demo Mode (Empty vs Populated vs Kibori) */}
          {tab === "preview" && (
            <div className="flex flex-wrap items-center gap-1.5 bg-muted/70 p-1 rounded-xl border border-border/50 text-xs">
              <button
                onClick={() => setDemoMode("empty")}
                className={`px-3 py-1 rounded-lg font-medium transition-colors ${
                  demoMode === "empty"
                    ? "bg-background text-foreground shadow-2xs"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Isi Kosong (Default)
              </button>
              <button
                onClick={() => setDemoMode("populated")}
                className={`px-3 py-1 rounded-lg font-medium transition-colors ${
                  demoMode === "populated"
                    ? "bg-background text-foreground shadow-2xs"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Dengan Konten (3D Parallax)
              </button>
              <button
                onClick={() => setDemoMode("kibori")}
                className={`px-3 py-1 rounded-lg font-medium transition-colors ${
                  demoMode === "kibori"
                    ? "bg-background text-foreground shadow-2xs"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                KIBORI (WebGL Scene)
              </button>
            </div>
          )}
        </div>

        {tab === "preview" ? (
          <div className="p-2 sm:p-6 rounded-2xl border border-border/70 bg-muted/20">
            {demoMode === "empty" ? (
              <ThreeDSection intensity={14} />
            ) : demoMode === "kibori" ? (
              <ThreeDSection variant="kibori" height="580px" />
            ) : (
              <ThreeDSection intensity={16}>
                <div className="flex flex-col items-center justify-center py-10 px-4 text-center space-y-6">
                  <ThreeDLayer depth={60}>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary text-primary-foreground shadow-lg">
                      <Sparkles className="size-3.5" />
                      <span>Elevated Layer (Depth: +60px)</span>
                    </div>
                  </ThreeDLayer>

                  <ThreeDLayer depth={40}>
                    <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-foreground max-w-xl">
                      Dimensional Depth & Parallax
                    </h2>
                  </ThreeDLayer>

                  <ThreeDLayer depth={25}>
                    <p className="text-sm sm:text-base text-muted-foreground max-w-md mx-auto">
                      Semua elemen di dalam section ini dapat diberi depth berbeda menggunakan ThreeDLayer sehingga bereaksi terhadap posisi pointer Anda.
                    </p>
                  </ThreeDLayer>

                  <ThreeDLayer depth={50}>
                    <div className="flex items-center justify-center gap-3 pt-2">
                      <Button className="rounded-xl shadow-lg">Mulai Sekarang</Button>
                      <Button variant="outline" className="rounded-xl bg-background/80">Dokumentasi</Button>
                    </div>
                  </ThreeDLayer>
                </div>
              </ThreeDSection>
            )}
          </div>
        ) : (
          <pre className="p-4 rounded-xl bg-zinc-950 text-zinc-100 font-mono text-xs sm:text-sm overflow-x-auto border border-zinc-800">
            <code>{usageCode}</code>
          </pre>
        )}
      </div>

      {/* Props Table */}
      <div className="space-y-4 pt-6">
        <h2 className="text-xl font-bold tracking-tight">Props Reference</h2>
        <div className="overflow-x-auto border border-border rounded-xl">
          <table className="w-full text-sm text-left">
            <thead className="bg-muted/50 text-muted-foreground uppercase text-[11px] font-semibold border-b">
              <tr>
                <th className="px-4 py-3">Prop</th>
                <th className="px-4 py-3">Type</th>
                <th className="px-4 py-3">Default</th>
                <th className="px-4 py-3">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="px-4 py-3 font-mono text-xs font-semibold text-primary">children</td>
                <td className="px-4 py-3 font-mono text-xs text-muted-foreground">ReactNode</td>
                <td className="px-4 py-3 font-mono text-xs text-muted-foreground">undefined</td>
                <td className="px-4 py-3 text-muted-foreground">Konten dalam 3D stage. Jika kosong, merender placeholder interaktif.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs font-semibold text-primary">intensity</td>
                <td className="px-4 py-3 font-mono text-xs text-muted-foreground">number</td>
                <td className="px-4 py-3 font-mono text-xs text-muted-foreground">12</td>
                <td className="px-4 py-3 text-muted-foreground">Sudut kemiringan rotasi maksimum dalam derajat.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs font-semibold text-primary">perspective</td>
                <td className="px-4 py-3 font-mono text-xs text-muted-foreground">number</td>
                <td className="px-4 py-3 font-mono text-xs text-muted-foreground">1000</td>
                <td className="px-4 py-3 text-muted-foreground">Jarak perspektif 3D dalam satuan piksel.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs font-semibold text-primary">grid</td>
                <td className="px-4 py-3 font-mono text-xs text-muted-foreground">boolean</td>
                <td className="px-4 py-3 font-mono text-xs text-muted-foreground">true</td>
                <td className="px-4 py-3 text-muted-foreground">Menampilkan pola titik grid 3D di latar belakang.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs font-semibold text-primary">glare</td>
                <td className="px-4 py-3 font-mono text-xs text-muted-foreground">boolean</td>
                <td className="px-4 py-3 font-mono text-xs text-muted-foreground">true</td>
                <td className="px-4 py-3 text-muted-foreground">Menampilkan pantulan cahaya spekuler dinamis mengikuti kursor.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs font-semibold text-primary">depth</td>
                <td className="px-4 py-3 font-mono text-xs text-muted-foreground">number</td>
                <td className="px-4 py-3 font-mono text-xs text-muted-foreground">0</td>
                <td className="px-4 py-3 text-muted-foreground">Offset ketinggian dasar Z axis untuk seluruh adegan.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
