export default function RegistryDirectoryPage() {
  return (
    <div className="mx-auto w-full min-w-0 max-w-3xl space-y-10">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Registry Directory</h1>
        <p className="text-lg text-muted-foreground">
          Browse and explore the components available in the registry.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Available Components</h2>
        <p className="text-muted-foreground">
          The registry contains the following components that you can install in your project:
        </p>
        <div className="rounded-lg border overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="p-3 text-left font-medium">Component</th>
                <th className="p-3 text-left font-medium">Description</th>
                <th className="p-3 text-left font-medium">Install</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-3 font-mono text-sm">button</td>
                <td className="p-3 text-sm text-muted-foreground">Displays a button or a component that looks like a button.</td>
                <td className="p-3"><code className="text-xs bg-muted px-1.5 py-0.5 rounded">add button</code></td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-sm">card</td>
                <td className="p-3 text-sm text-muted-foreground">Displays a card with header, content, and footer.</td>
                <td className="p-3"><code className="text-xs bg-muted px-1.5 py-0.5 rounded">add card</code></td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-sm">input</td>
                <td className="p-3 text-sm text-muted-foreground">A form control for entering text.</td>
                <td className="p-3"><code className="text-xs bg-muted px-1.5 py-0.5 rounded">add input</code></td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-sm">dialog</td>
                <td className="p-3 text-sm text-muted-foreground">A window overlaid on the primary content.</td>
                <td className="p-3"><code className="text-xs bg-muted px-1.5 py-0.5 rounded">add dialog</code></td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-sm">tabs</td>
                <td className="p-3 text-sm text-muted-foreground">A set of layered sections of content.</td>
                <td className="p-3"><code className="text-xs bg-muted px-1.5 py-0.5 rounded">add tabs</code></td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">form</td>
                <td className="p-3 text-sm text-muted-foreground">Form components with validation support.</td>
                <td className="p-3"><code className="text-xs bg-muted px-1.5 py-0.5 rounded">add form</code></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Browsing the Directory</h2>
        <p className="text-muted-foreground">
          You can browse the full directory of available components using the CLI:
        </p>
        <div className="rounded-lg border bg-muted/50 p-4 font-mono text-sm space-y-2">
          <p className="text-foreground/80"># List all available components</p>
          <p className="text-foreground/80">pnpm dlx @qalvinahmad/ui list</p>
          <p className="text-foreground-80"></p>
          <p className="text-foreground/80"># Search for a specific component</p>
          <p className="text-foreground/80">pnpm dlx @qalvinahmad/ui search button</p>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Component Categories</h2>
        <p className="text-muted-foreground">
          Components are organized into the following categories:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-lg border p-4">
            <h3 className="font-semibold mb-2">Form Components</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>Button, Input, Select, Checkbox, Radio</li>
              <li>Switch, Slider, Textarea, Form</li>
            </ul>
          </div>
          <div className="rounded-lg border p-4">
            <h3 className="font-semibold mb-2">Layout Components</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>Card, Tabs, Accordion, Collapsible</li>
              <li>Separator, Sheet, Dialog, Drawer</li>
            </ul>
          </div>
          <div className="rounded-lg border p-4">
            <h3 className="font-semibold mb-2">Data Display</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>Table, Badge, Avatar, Tooltip</li>
              <li>Calendar, DatePicker, Progress</li>
            </ul>
          </div>
          <div className="rounded-lg border p-4">
            <h3 className="font-semibold mb-2">Navigation</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>Breadcrumb, Menubar, NavigationMenu</li>
              <li>Pagination, Sidebar, DropdownMenu</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Installation Commands</h2>
        <p className="text-muted-foreground">
          Quick reference for installing components:
        </p>
        <div className="rounded-lg border bg-muted/50 p-4 font-mono text-sm space-y-2">
          <p className="text-foreground/80"># Install a single component</p>
          <p className="text-foreground/80">pnpm dlx @qalvinahmad/ui add [component-name]</p>
          <p className="text-foreground/80"></p>
          <p className="text-foreground/80"># Install multiple components</p>
          <p className="text-foreground/80">pnpm dlx @qalvinahmad/ui add [component1] [component2]</p>
          <p className="text-foreground/80"></p>
          <p className="text-foreground/80"># Install with a specific style</p>
          <p className="text-foreground/80">pnpm dlx @qalvinahmad/ui add [component] --style nova</p>
        </div>
      </div>
    </div>
  )
}
