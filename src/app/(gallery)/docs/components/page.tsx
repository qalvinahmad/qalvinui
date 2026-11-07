import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ComponentCard } from "@/components/ui/component-card";
import {
  GALLERY_COMPONENTS,
  slugifyComponentName,
} from "@/lib/component-gallery";

export default function Page() {
  return (
    <div className="pb-10">
      {/* Page Header */}
      <div className="space-y-2 pb-10 md:pb-12">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Components</h1>
        <p className="max-w-3xl text-base text-muted-foreground sm:text-lg">
          Browse the collection of built-in components. Each component is accessible,
          customizable, and follows WAI-ARIA patterns.
        </p>
        <p className="pt-1 text-sm text-muted-foreground">
          Looking for creative effects?{" "}
          <Link
            href="/docs/ui"
            className="inline-flex items-center gap-1 font-medium text-foreground underline decoration-zinc-300 underline-offset-4 transition-colors hover:decoration-zinc-400 dark:decoration-zinc-600 dark:hover:decoration-zinc-500"
          >
            Explore the specialized UI collection
            <ArrowRight className="size-3.5" />
          </Link>
        </p>
      </div>

      {/* Gallery Grid */}
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
    </div>
  );
}
