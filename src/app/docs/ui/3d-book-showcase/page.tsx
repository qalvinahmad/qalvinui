"use client";

import { useState } from "react";
import { ThreeDBookShowcase } from "@/components/ui/three-d-book-showcase";
import { InstallTabs } from "@/components/docs/install-tabs";
import { Eye, Code, BookOpen, Sparkles } from "lucide-react";

export default function ThreeDBookShowcaseDocPage() {
  const [tab, setTab] = useState<"preview" | "code">("preview");

  const usageCode = `import { ThreeDBookShowcase, BestsellersBookShowcase } from "@/components/ui/3d-book-showcase";

export function BookShowcaseDemo() {
  return (
    <ThreeDBookShowcase
      height="680px"
      primaryColor="#c3a47b"
      showControls={true}
    >
      {/* Optional overlay elements */}
      <div className="space-y-2 bg-black/60 backdrop-blur-md p-4 sm:p-6 rounded-2xl border border-white/10 text-[#eee2ca] max-w-md">
        <span className="text-xs uppercase tracking-widest text-[#c3a47b] font-semibold font-serif flex items-center gap-1.5">
          <BookOpen className="size-3 text-[#c3a47b]" />
          Field Manuals · Tools for Thought
        </span>
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight">Interactive 3D Library</h2>
        <p className="text-xs sm:text-sm text-zinc-300">
          Klik buku mana saja untuk membuka detail panduan teknis, animasi putaran buku 3D, dan simulasi kelopak bunga sakura.
        </p>
      </div>
    </ThreeDBookShowcase>
  );
}`;

  return (
    <div className="space-y-10 max-w-4xl pb-16">
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-500 border border-amber-500/20">
            WebGL & 3D Interactive
          </span>
          <span className="text-xs text-muted-foreground font-mono">ui/3d-book-showcase</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">3D Book Showcase (Field Manuals)</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Interactive 3D library gallery for books and manuals. Features realistic perspective cards, smooth page curl and fan mechanics, looping video covers, blossom particle physics, and inspectable deep-read documentation drawers.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Installation</h2>
        <InstallTabs slug="3d-book-showcase" />
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
        </div>

        {tab === "preview" ? (
          <div className="p-2 sm:p-4 rounded-2xl border border-border/70 bg-muted/20">
            <ThreeDBookShowcase height="640px" />
          </div>
        ) : (
          <pre className="p-4 rounded-xl bg-zinc-950 text-zinc-100 font-mono text-xs sm:text-sm overflow-x-auto border border-zinc-800">
            <code>{usageCode}</code>
          </pre>
        )}
      </div>

      {/* Feature highlights */}
      <div className="space-y-4 pt-4 border-t">
        <h2 className="text-xl font-bold tracking-tight">Features & Capabilities</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl border border-border bg-card space-y-1.5">
            <h3 className="font-semibold text-sm">3D Card Tilt & Fan Physics</h3>
            <p className="text-xs text-muted-foreground">
              Buku memiliki ketebalan nyata dengan halaman bertekstur, bayangan mendalam, serta efek bukaan sampul 3D saat dipilih.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-border bg-card space-y-1.5">
            <h3 className="font-semibold text-sm">Interactive Detail Drawer</h3>
            <p className="text-xs text-muted-foreground">
              Menampilkan panduan langkah demi langkah, blok prompt, ulasan kode, serta aksi bookmark bacaan interaktif.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-border bg-card space-y-1.5">
            <h3 className="font-semibold text-sm">Blossom Falling Particles</h3>
            <p className="text-xs text-muted-foreground">
              Kelopak bunga sakura prosedural melayang dengan rotasi 3D alami saat mode pembacaan buku diaktifkan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
