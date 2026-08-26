export default function Page() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight mb-2">CLI</h1>
        <p className="text-lg text-muted-foreground">
          Use the Qalvin UI CLI to add components to your project with a single command.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Installation</h2>
        <p className="text-muted-foreground">
          Install the CLI globally using your preferred package manager:
        </p>
        <div className="rounded-lg border bg-muted/50 p-4 font-mono text-sm">
          <p className="text-foreground/80">pnpm add -g @alvinahmad/ui</p>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Initialize</h2>
        <p className="text-muted-foreground">
          Initialize Qalvin UI in your project:
        </p>
        <div className="rounded-lg border bg-muted/50 p-4 font-mono text-sm">
          <p className="text-foreground/80">pnpm dlx @alvinahmad/ui init</p>
        </div>
        <p className="text-sm text-muted-foreground">
          This will create a <code className="bg-muted px-1.5 py-0.5 rounded">components.json</code> file in your project root.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Add Components</h2>
        <p className="text-muted-foreground">
          Add components to your project using the following commands:
        </p>
        <div className="rounded-lg border bg-muted/50 p-4 font-mono text-sm space-y-2">
          <p className="text-foreground/80"># Add a single component</p>
          <p className="text-foreground/80">pnpm dlx @alvinahmad/ui add button</p>
          <p className="text-foreground/80"></p>
          <p className="text-foreground/80"># Add multiple components</p>
          <p className="text-foreground/80">pnpm dlx @alvinahmad/ui add button card input</p>
          <p className="text-foreground/80"></p>
          <p className="text-foreground/80"># Add all components</p>
          <p className="text-foreground/80">pnpm dlx @alvinahmad/ui add --all</p>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Update Components</h2>
        <p className="text-muted-foreground">
          Update all components to the latest version:
        </p>
        <div className="rounded-lg border bg-muted/50 p-4 font-mono text-sm">
          <p className="text-foreground/80">pnpm dlx @alvinahmad/ui update</p>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Configuration</h2>
        <p className="text-muted-foreground">
          The <code className="bg-muted px-1.5 py-0.5 rounded">components.json</code> file contains the following configuration:
        </p>
        <div className="rounded-lg border bg-muted/50 p-4 font-mono text-sm overflow-x-auto">
          <pre className="text-foreground/80">{`{
  "$schema": "https://qalvinahmad.com/schema.json",
  "style": "nova",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "src/globals.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils"
  }
}`}</pre>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Supported Package Managers</h2>
        <ul className="space-y-2 text-muted-foreground list-disc pl-6">
          <li><code className="bg-muted px-1.5 py-0.5 rounded text-sm">pnpm</code> - Recommended</li>
          <li><code className="bg-muted px-1.5 py-0.5 rounded text-sm">npm</code> - Supported</li>
          <li><code className="bg-muted px-1.5 py-0.5 rounded text-sm">yarn</code> - Supported</li>
          <li><code className="bg-muted px-1.5 py-0.5 rounded text-sm">bun</code> - Supported</li>
        </ul>
      </div>
    </div>
  )
}
