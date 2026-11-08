"use client";

import { useState } from "react";
import { ThreeDPaper, ThreeDPaperVariant } from "@/components/ui/three-d-paper";
import { InstallTabs } from "@/components/docs/install-tabs";
import { Eye, Code, FileText, Sparkles, Award } from "lucide-react";

export default function ThreeDPaperDocPage() {
  const [tab, setTab] = useState<"preview" | "code">("preview");
  const [activeVariant, setActiveVariant] = useState<ThreeDPaperVariant>("original");

  const usageCode = `import { ThreeDPaper } from "@/components/ui/3d-paper";

export function PaperDemo() {
  return (
    <ThreeDPaper
      height="620px"
      variant="${activeVariant}"
      showControls={true}
      showVariantSwitcher={true}
    >
      {/* Optional overlay elements */}
      <div className="space-y-2 bg-black/60 backdrop-blur-md p-4 sm:p-6 rounded-2xl border border-white/10 text-white max-w-md">
        <span className="text-xs uppercase tracking-widest text-zinc-400 font-semibold font-mono flex items-center gap-1.5">
          <FileText className="size-3 text-zinc-300" />
          Interactive 3D Paper Mesh
        </span>
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight">Nocturne Studio</h2>
        <p className="text-xs sm:text-sm text-zinc-300">
          Drag and hover over the sheet to interact with paper bending physics, specular light reflections, and tactile grain.
        </p>
      </div>
    </ThreeDPaper>
  );
}`;

  return (
    <div className="space-y-10 max-w-4xl pb-16">
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-zinc-500/10 text-zinc-400 border border-zinc-500/20">
            WebGL & 3D Interactive
          </span>
          <span className="text-xs text-muted-foreground font-mono">ui/3d-paper</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">3D Paper (Nocturne)</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Interactive 3D realistic paper & certificate mesh with authentic physical bending, depth-of-field blur, tactile paper grain, dynamic drag-to-turn physics, and specular spotlight tracking.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Installation</h2>
        <InstallTabs slug="3d-paper" />
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
            <ThreeDPaper
              height="620px"
              variant={activeVariant}
              onVariantChange={(v) => setActiveVariant(v)}
            >
              <div className="space-y-2 bg-black/60 backdrop-blur-md p-4 sm:p-6 rounded-2xl border border-white/10 text-white shadow-xl max-w-lg">
                <span className="text-xs uppercase tracking-widest text-zinc-400 font-semibold font-mono flex items-center gap-1.5">
                  <Award className="size-3.5 text-zinc-300" />
                  Tactile 3D Paper Physics
                </span>
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight">Interactive Paper & Certificate</h2>
                <p className="text-xs sm:text-sm text-zinc-300 line-clamp-2">
                  Tarik untuk memutar lembaran kertas dan gerakkan kursor untuk menyorotkan cahaya specular di atas tekstur kertas berpori.
                </p>
              </div>
            </ThreeDPaper>
          </div>
        ) : (
          <pre className="p-4 rounded-xl bg-zinc-950 text-zinc-100 font-mono text-xs sm:text-sm overflow-x-auto border border-zinc-800">
            <code>{usageCode}</code>
          </pre>
        )}
      </div>

      {/* Available Editions / Variants list */}
      <div className="space-y-4 pt-4 border-t">
        <h2 className="text-xl font-bold tracking-tight">Available Editions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div
            onClick={() => {
              setActiveVariant("original");
              setTab("preview");
            }}
            className={`p-4 rounded-xl border transition-all cursor-pointer ${
              activeVariant === "original"
                ? "border-primary/50 bg-primary/5 ring-1 ring-primary/20"
                : "border-border hover:border-border/80 bg-card"
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="font-semibold text-sm">Nocturne (Original)</span>
              <span className="text-xs font-mono text-muted-foreground">original</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Minimalist dark edition with giant background typography and deep ambient shadows.
            </p>
          </div>

          <div
            onClick={() => {
              setActiveVariant("site-of-the-year");
              setTab("preview");
            }}
            className={`p-4 rounded-xl border transition-all cursor-pointer ${
              activeVariant === "site-of-the-year"
                ? "border-primary/50 bg-primary/5 ring-1 ring-primary/20"
                : "border-border hover:border-border/80 bg-card"
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="font-semibold text-sm">Site of the Year</span>
              <span className="text-xs font-mono text-muted-foreground">site-of-the-year</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Awwwards-inspired celebration with laurel wreaths, crisp borders, and subtle foil luster.
            </p>
          </div>

          <div
            onClick={() => {
              setActiveVariant("japanese");
              setTab("preview");
            }}
            className={`p-4 rounded-xl border transition-all cursor-pointer ${
              activeVariant === "japanese"
                ? "border-primary/50 bg-primary/5 ring-1 ring-primary/20"
                : "border-border hover:border-border/80 bg-card"
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="font-semibold text-sm">認定証 (Japanese Certificate)</span>
              <span className="text-xs font-mono text-muted-foreground">japanese</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Traditional Japanese washi certificate with cinnabar red hanko seal and vertical kanji typography.
            </p>
          </div>

          <div
            onClick={() => {
              setActiveVariant("certificate");
              setTab("preview");
            }}
            className={`p-4 rounded-xl border transition-all cursor-pointer ${
              activeVariant === "certificate"
                ? "border-primary/50 bg-primary/5 ring-1 ring-primary/20"
                : "border-border hover:border-border/80 bg-card"
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="font-semibold text-sm">Certificate of Merit</span>
              <span className="text-xs font-mono text-muted-foreground">certificate</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Classical diploma edition with gold embellishments, ornate guilloche borders, and seal.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
