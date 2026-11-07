import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { ComponentCard } from "@/components/ui/component-card";
import {
  GALLERY_COMPONENTS,
  slugifyComponentName,
} from "@/lib/component-gallery";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-screen-2xl px-4 pb-16 pt-10 sm:px-6 md:pb-24 md:pt-16 lg:px-8">
      {/* Brand Header — coss.com/ui style */}
      <header className="pb-10 md:pb-14">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          qalvin
          <span className="font-medium text-zinc-400 dark:text-zinc-500"> ui</span>
        </h1>
        <p className="mt-3 max-w-2xl text-base text-muted-foreground sm:text-lg">
          Open-source components you can copy, paste, and make your own. Accessible,
          themeable, and shipped with complete source code.
        </p>
        <div className="flex flex-wrap items-center gap-2 pt-4 text-sm font-medium">
          <Link
            href="/docs/installation"
            className="rounded-full border border-border/80 px-3.5 py-1.5 text-muted-foreground transition-[color,border-color,background-color,transform] duration-150 hover:border-border hover:text-foreground active:scale-[0.96] motion-reduce:active:scale-100 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            Docs
          </Link>
          <Link
            href="/docs/components"
            className="rounded-full border border-border/80 px-3.5 py-1.5 text-muted-foreground transition-[color,border-color,background-color,transform] duration-150 hover:border-border hover:text-foreground active:scale-[0.96] motion-reduce:active:scale-100 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            Components
          </Link>
          <Link
            href="/docs/ui"
            className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3.5 py-1.5 text-primary transition-[opacity,transform] duration-150 hover:opacity-80 active:scale-[0.96] motion-reduce:active:scale-100 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <Sparkles className="size-3.5" />
            Specialized UI
          </Link>
        </div>
      </header>

      {/* Component Gallery Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
        {GALLERY_COMPONENTS.map((component) => (
          <ComponentCard
            key={component.name}
            name={component.name}
            description={component.description}
            href={`/docs/components/${slugifyComponentName(component.name)}`}
          />
        ))}
      </div>

      {/* UI Collection Link */}
      <div className="mt-10 md:mt-12">
        <Link
          href="/docs/ui"
          className="group inline-flex items-center gap-2 rounded-full border border-border/80 py-2 pl-4 pr-3 text-sm font-medium text-muted-foreground transition-[color,border-color,transform] duration-150 hover:border-border hover:text-foreground active:scale-[0.98] motion-reduce:active:scale-100 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <Sparkles className="size-4 text-primary" />
          <span>Explore the specialized UI collection — 80+ creative effects</span>
          <ArrowRight className="size-4 transition-transform duration-150 ease-out motion-safe:group-hover:translate-x-0.5" />
        </Link>
      </div>
    </div>
  );
}
