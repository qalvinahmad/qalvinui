export default function Page() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Registry</h1>
        <p className="text-lg text-muted-foreground">
          The registry system allows you to publish and share components across projects.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">How it Works</h2>
        <p className="text-muted-foreground">
          The registry is a JSON-based system that allows you to publish and share components. 
          Each component in the registry includes the component code, dependencies, and metadata.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Registry Structure</h2>
        <div className="rounded-lg border bg-muted/50 p-4 font-mono text-sm overflow-x-auto">
          <pre className="text-foreground/80">{`{
  "name": "my-component",
  "type": "registry:ui",
  "dependencies": [
    "@base-ui/react",
    "class-variance-authority",
    "clsx",
    "tailwind-merge"
  ],
  "files": [
    {
      "path": "components/my-component.tsx",
      "content": "...",
      "type": "registry:ui"
    }
  ]
}`}</pre>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Publishing to Registry</h2>
        <p className="text-muted-foreground">
          To publish a component to the registry:
        </p>
        <div className="rounded-lg border bg-muted/50 p-4 font-mono text-sm space-y-2">
          <p className="text-foreground/80"># Create a registry item</p>
          <p className="text-foreground/80">pnpm dlx @qalvinahmad/ui create my-component</p>
          <p className="text-foreground/80"></p>
          <p className="text-foreground/80"># Publish to registry</p>
          <p className="text-foreground/80">pnpm dlx @qalvinahmad/ui publish</p>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Using Registry Items</h2>
        <p className="text-muted-foreground">
          Install components from any registry:
        </p>
        <div className="rounded-lg border bg-muted/50 p-4 font-mono text-sm space-y-2">
          <p className="text-foreground/80"># From official registry</p>
          <p className="text-foreground/80">pnpm dlx @qalvinahmad/ui add button</p>
          <p className="text-foreground/80"></p>
          <p className="text-foreground/80"># From custom registry</p>
          <p className="text-foreground/80">pnpm dlx @qalvinahmad/ui add --registry https://my-registry.com button</p>
        </div>
      </div>
    </div>
  )
}
