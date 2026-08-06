import { Button } from "@/components/ui/button";

export default function InstallationPage() {
  return (
    <div className="flex flex-col lg:flex-row gap-10">
      <div className="flex-1 w-full min-w-0 max-w-[800px]">
        <div className="flex items-center justify-between mb-2">
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Installation</h1>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="h-8 rounded-md text-xs">
              <span className="mr-2">⎘</span> Copy Page <span className="ml-2 opacity-50">▾</span>
            </Button>
            <Button variant="outline" size="sm" className="h-8 w-8 px-0 rounded-md">←</Button>
            <Button variant="outline" size="sm" className="h-8 w-8 px-0 rounded-md">→</Button>
          </div>
        </div>
        
        <p className="text-lg text-muted-foreground mb-8">
          How to install dependencies and structure your app.
        </p>

        <div className="rounded-lg border border-[#34d399]/30 bg-[#34d399]/10 p-4 text-[#065f46] dark:text-[#34d399] mb-8">
          <p className="text-sm">
            <strong>Recommended for new projects:</strong> Use <code className="bg-black/5 dark:bg-white/10 px-1 py-0.5 rounded text-xs">shadcn/create</code> to build your preset visually and generate the right setup command for your framework.
          </p>
        </div>

        <h3 className="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight mb-4">
          Choose the setup that matches your starting point.
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          <div className="rounded-xl border bg-card p-6 shadow-sm hover:border-primary/50 cursor-pointer transition-colors">
            <h4 className="font-semibold mb-2">Use shadcn/create</h4>
            <p className="text-sm text-muted-foreground">Build your preset visually and generate a setup command.</p>
          </div>
          <div className="rounded-xl border bg-card p-6 shadow-sm hover:border-primary/50 cursor-pointer transition-colors bg-muted/30">
            <h4 className="font-semibold mb-2">Use the CLI</h4>
            <p className="text-sm text-muted-foreground">Scaffold a supported template directly from the terminal.</p>
          </div>
          <div className="rounded-xl border bg-card p-6 shadow-sm hover:border-primary/50 cursor-pointer transition-colors bg-muted/30">
            <h4 className="font-semibold mb-2">Existing Project</h4>
            <p className="text-sm text-muted-foreground">Add shadcn/ui to an app you already created.</p>
          </div>
        </div>

        <h2 className="font-heading mt-10 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mb-4">
          Use shadcn/create
        </h2>
        
        <p className="leading-7 [&:not(:first-child)]:mt-6 mb-4 text-muted-foreground">
          Build your preset visually, preview your choices, and generate a framework-specific setup command.
        </p>

        <Button className="mb-6">Open shadcn/create</Button>

        <p className="text-sm text-muted-foreground">
          Available for Next.js, Vite, Laravel, React Router, Astro, and TanStack Start.
        </p>
      </div>

      <div className="hidden xl:block w-[250px] shrink-0">
        <div className="sticky top-20">
          <div className="mb-4 text-sm font-semibold">On This Page</div>
          <ul className="m-0 list-none text-sm space-y-2">
            <li>
              <a href="#" className="inline-block no-underline font-medium text-foreground">Use shadcn/create</a>
            </li>
            <li>
              <a href="#" className="inline-block no-underline text-muted-foreground hover:text-foreground">Use the CLI</a>
            </li>
            <li>
              <a href="#" className="inline-block no-underline text-muted-foreground hover:text-foreground">Existing Project</a>
            </li>
            <li>
              <a href="#" className="inline-block no-underline text-muted-foreground hover:text-foreground">Choose Your Framework</a>
            </li>
          </ul>

          <div className="mt-8 rounded-xl border bg-card text-card-foreground shadow-sm p-4">
            <h4 className="font-semibold mb-2 text-sm">Deploy your shadcn/ui app on Vercel</h4>
            <p className="text-xs text-muted-foreground mb-4">Trusted by OpenAI, Sonos, Adobe, and more.</p>
            <p className="text-xs text-muted-foreground mb-4">Vercel provides tools and infrastructure to deploy apps and features at scale.</p>
            <Button variant="outline" size="sm" className="w-full text-xs h-8">Deploy Now</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
