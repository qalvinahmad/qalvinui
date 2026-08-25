export default function GitHubRegistriesPage() {
  return (
    <div className="mx-auto w-full min-w-0 max-w-3xl space-y-10">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">GitHub Registries</h1>
        <p className="text-lg text-muted-foreground">
          Use components directly from GitHub repositories as registries.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">What are GitHub Registries?</h2>
        <p className="text-muted-foreground">
          GitHub registries allow you to use components hosted in GitHub repositories directly in your project. 
          This is useful for sharing components across teams or using community-maintained component libraries.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Adding a GitHub Registry</h2>
        <p className="text-muted-foreground">
          To add a GitHub registry to your project:
        </p>
        <div className="rounded-lg border bg-muted/50 p-4 font-mono text-sm space-y-2">
          <p className="text-foreground/80"># Add a registry from GitHub</p>
          <p className="text-foreground/80">pnpm dlx @qalvinahmad/ui add --registry https://github.com/username/repo button</p>
          <p className="text-foreground/80"></p>
          <p className="text-foreground/80"># Add multiple components from a registry</p>
          <p className="text-foreground/80">pnpm dlx @qalvinahmad/ui add --registry https://github.com/username/repo button card input</p>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Registry Structure</h2>
        <p className="text-muted-foreground">
          A GitHub registry repository should have the following structure:
        </p>
        <div className="rounded-lg border bg-muted/50 p-4 font-mono text-sm overflow-x-auto">
          <pre className="text-foreground/80">{`my-registry/
├── registry.json          # Registry metadata
├── components/
│   ├── button/
│   │   ├── button.tsx
│   │   └── registry-item.json
│   ├── card/
│   │   ├── card.tsx
│   │   └── registry-item.json
│   └── ...
└── package.json`}</pre>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Example: Using a Community Registry</h2>
        <p className="text-muted-foreground">
          Here is an example of how to use a community-maintained registry:
        </p>
        <div className="rounded-lg border bg-muted/50 p-4 font-mono text-sm space-y-2">
          <p className="text-foreground/80"># Add the official Qalvin UI registry</p>
          <p className="text-foreground/80">pnpm dlx @qalvinahmad/ui add --registry https://github.com/qalvinahmad/qalvinui button</p>
          <p className="text-foreground/80"></p>
          <p className="text-foreground/80"># Or use a shorthand with the registry name</p>
          <p className="text-foreground/80">pnpm dlx @qalvinahmad/ui add --registry qalvinahmad/qalvinui button</p>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Creating Your Own Registry</h2>
        <p className="text-muted-foreground">
          To create your own GitHub registry:
        </p>
        <div className="rounded-lg border bg-muted/50 p-4 font-mono text-sm space-y-2">
          <p className="text-foreground/80"># Initialize a new registry</p>
          <p className="text-foreground/80">pnpm dlx @qalvinahmad/ui create-registry my-registry</p>
          <p className="text-foreground/80"></p>
          <p className="text-foreground/80"># Add components to your registry</p>
          <p className="text-foreground/80">pnpm dlx @qalvinahmad/ui add-to-registry button</p>
          <p className="text-foreground/80"></p>
          <p className="text-foreground/80"># Publish to GitHub</p>
          <p className="text-foreground/80">pnpm dlx @qalvinahmad/ui publish-registry</p>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Best Practices</h2>
        <ul className="space-y-2 text-muted-foreground list-disc pl-6">
          <li><strong className="text-foreground font-semibold">Versioning:</strong> Use semantic versioning for your registry releases</li>
          <li><strong className="text-foreground font-semibold">Documentation:</strong> Include clear documentation for each component</li>
          <li><strong className="text-foreground font-semibold">Dependencies:</strong> Clearly list all dependencies in registry-item.json</li>
          <li><strong className="text-foreground font-semibold">Testing:</strong> Test components before publishing to the registry</li>
        </ul>
      </div>
    </div>
  )
}
