export default function RegistryItemJsonPage() {
  return (
    <div className="mx-auto w-full min-w-0 max-w-3xl space-y-10">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">registry-item.json</h1>
        <p className="text-lg text-muted-foreground">
          The format and structure of individual component registry items.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Overview</h2>
        <p className="text-muted-foreground">
          Each component in the registry has its own <code className="bg-muted px-1.5 py-0.5 rounded text-sm">registry-item.json</code> file that defines its metadata, dependencies, and file structure.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Basic Structure</h2>
        <div className="rounded-lg border bg-muted/50 p-4 font-mono text-sm overflow-x-auto">
          <pre className="text-foreground/80">{`{
  "$schema": "https://qalvinahmad.com/schema/registry-item.json",
  "name": "button",
  "type": "registry:ui",
  "description": "Displays a button or a component that looks like a button.",
  "dependencies": [
    "@base-ui/react",
    "class-variance-authority",
    "clsx",
    "tailwind-merge"
  ],
  "files": [
    {
      "path": "components/ui/button.tsx",
      "type": "registry:ui",
      "content": "// Component source code..."
    }
  ]
}`}</pre>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Schema Properties</h2>
        <div className="rounded-lg border overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="p-3 text-left font-medium">Property</th>
                <th className="p-3 text-left font-medium">Type</th>
                <th className="p-3 text-left font-medium">Required</th>
                <th className="p-3 text-left font-medium">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-3 font-mono text-sm">$schema</td>
                <td className="p-3 font-mono text-sm">string</td>
                <td className="p-3 font-mono text-sm">Yes</td>
                <td className="p-3 text-sm text-muted-foreground">Schema URL for validation</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-sm">name</td>
                <td className="p-3 font-mono text-sm">string</td>
                <td className="p-3 font-mono text-sm">Yes</td>
                <td className="p-3 text-sm text-muted-foreground">Component name</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-sm">type</td>
                <td className="p-3 font-mono text-sm">string</td>
                <td className="p-3 font-mono text-sm">Yes</td>
                <td className="p-3 text-sm text-muted-foreground">Component type</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-sm">description</td>
                <td className="p-3 font-mono text-sm">string</td>
                <td className="p-3 font-mono text-sm">No</td>
                <td className="p-3 text-sm text-muted-foreground">Component description</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-sm">dependencies</td>
                <td className="p-3 font-mono text-sm">array</td>
                <td className="p-3 font-mono text-sm">No</td>
                <td className="p-3 text-sm text-muted-foreground">Required dependencies</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">files</td>
                <td className="p-3 font-mono text-sm">array</td>
                <td className="p-3 font-mono text-sm">Yes</td>
                <td className="p-3 text-sm text-muted-foreground">Component files</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">File Entry</h2>
        <p className="text-muted-foreground">
          Each file entry has the following properties:
        </p>
        <div className="rounded-lg border bg-muted/50 p-4 font-mono text-sm overflow-x-auto">
          <pre className="text-foreground/80">{`{
  "path": "components/ui/button.tsx",
  "type": "registry:ui",
  "content": "import { cva } from \\"class-variance-authority\\"\\n// ...",
  "target": "components/ui/button.tsx"
}`}</pre>
        </div>
        <div className="rounded-lg border overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="p-3 text-left font-medium">Property</th>
                <th className="p-3 text-left font-medium">Type</th>
                <th className="p-3 text-left font-medium">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-3 font-mono text-sm">path</td>
                <td className="p-3 font-mono text-sm">string</td>
                <td className="p-3 text-sm text-muted-foreground">Path to the source file</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-sm">type</td>
                <td className="p-3 font-mono text-sm">string</td>
                <td className="p-3 text-sm text-muted-foreground">File type</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-sm">content</td>
                <td className="p-3 font-mono text-sm">string</td>
                <td className="p-3 text-sm text-muted-foreground">Inline file content (optional)</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">target</td>
                <td className="p-3 font-mono text-sm">string</td>
                <td className="p-3 text-sm text-muted-foreground">Target installation path</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Example: Button Component</h2>
        <div className="rounded-lg border bg-muted/50 p-4 font-mono text-sm overflow-x-auto">
          <pre className="text-foreground/80">{`{
  "$schema": "https://qalvinahmad.com/schema/registry-item.json",
  "name": "button",
  "type": "registry:ui",
  "description": "Displays a button or a component that looks like a button.",
  "dependencies": [
    "@base-ui/react",
    "class-variance-authority",
    "clsx",
    "tailwind-merge"
  ],
  "files": [
    {
      "path": "components/ui/button.tsx",
      "type": "registry:ui",
      "content": "import { cva, type VariantProps } from \\"class-variance-authority\\"\\n\\nconst buttonVariants = cva(...)\\n\\nfunction Button(...) { ... }\\n\\nexport { Button, buttonVariants }"
    }
  ]
}`}</pre>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Creating Registry Items</h2>
        <p className="text-muted-foreground">
          Create a registry item for your component:
        </p>
        <div className="rounded-lg border bg-muted/50 p-4 font-mono text-sm space-y-2">
          <p className="text-foreground/80"># Create a registry item from an existing component</p>
          <p className="text-foreground/80">pnpm dlx @alvinahmad/ui create-registry-item button</p>
          <p className="text-foreground/80"></p>
          <p className="text-foreground/80"># Validate the registry item</p>
          <p className="text-foreground/80">pnpm dlx @alvinahmad/ui validate-registry-item button</p>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Best Practices</h2>
        <ul className="space-y-2 text-muted-foreground list-disc pl-6">
          <li><strong className="text-foreground font-semibold">Keep Files Small:</strong> Split large components into multiple files</li>
          <li><strong className="text-foreground font-semibold">List All Dependencies:</strong> Include all required packages</li>
          <li><strong className="text-foreground font-semibold">Use Consistent Naming:</strong> Follow the same naming conventions</li>
          <li><strong className="text-foreground font-semibold">Include Documentation:</strong> Add helpful descriptions for each component</li>
        </ul>
      </div>
    </div>
  )
}
