export default function RegistryJsonPage() {
  return (
    <div className="mx-auto w-full min-w-0 max-w-3xl space-y-10">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">registry.json</h1>
        <p className="text-lg text-muted-foreground">
          The format and structure of the registry.json file.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Overview</h2>
        <p className="text-muted-foreground">
          The <code className="bg-muted px-1.5 py-0.5 rounded text-sm">registry.json</code> file defines the metadata and structure of your component registry. 
          It is used by the CLI to discover and install components.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Basic Structure</h2>
        <div className="rounded-lg border bg-muted/50 p-4 font-mono text-sm overflow-x-auto">
          <pre className="text-foreground/80">{`{
  "$schema": "https://qalvinahmad.com/schema/registry.json",
  "name": "my-registry",
  "description": "My custom component registry",
  "version": "1.0.0",
  "homepage": "https://my-registry.com",
  "components": [
    {
      "name": "button",
      "type": "registry:ui",
      "description": "Displays a button or a component that looks like a button."
    },
    {
      "name": "card",
      "type": "registry:ui",
      "description": "Displays a card with header, content, and footer."
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
                <td className="p-3 text-sm text-muted-foreground">Registry name</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-sm">description</td>
                <td className="p-3 font-mono text-sm">string</td>
                <td className="p-3 font-mono text-sm">No</td>
                <td className="p-3 text-sm text-muted-foreground">Registry description</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-sm">version</td>
                <td className="p-3 font-mono text-sm">string</td>
                <td className="p-3 font-mono text-sm">No</td>
                <td className="p-3 text-sm text-muted-foreground">Semantic version</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">components</td>
                <td className="p-3 font-mono text-sm">array</td>
                <td className="p-3 font-mono text-sm">Yes</td>
                <td className="p-3 text-sm text-muted-foreground">List of components</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Component Entry</h2>
        <p className="text-muted-foreground">
          Each component entry in the registry has the following properties:
        </p>
        <div className="rounded-lg border bg-muted/50 p-4 font-mono text-sm overflow-x-auto">
          <pre className="text-foreground/80">{`{
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
      "type": "registry:ui"
    }
  ]
}`}</pre>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Component Types</h2>
        <ul className="space-y-2 text-muted-foreground list-disc pl-6">
          <li><code className="bg-muted px-1.5 py-0.5 rounded text-sm">registry:ui</code> - UI components (buttons, cards, inputs)</li>
          <li><code className="bg-muted px-1.5 py-0.5 rounded text-sm">registry:hook</code> - React hooks</li>
          <li><code className="bg-muted px-1.5 py-0.5 rounded text-sm">registry:util</code> - Utility functions</li>
          <li><code className="bg-muted px-1.5 py-0.5 rounded text-sm">registry:theme</code> - Theme configurations</li>
          <li><code className="bg-muted px-1.5 py-0.5 rounded text-sm">registry:block</code> - Complete page blocks</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Validation</h2>
        <p className="text-muted-foreground">
          Validate your registry.json file:
        </p>
        <div className="rounded-lg border bg-muted/50 p-4 font-mono text-sm">
          <p className="text-foreground/80">pnpm dlx @qalvinahmad/ui validate-registry</p>
        </div>
      </div>
    </div>
  )
}
