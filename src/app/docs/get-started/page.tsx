export default function GetStartedPage() {
  return (
    <div className="mx-auto w-full min-w-0 max-w-3xl space-y-10">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Get Started</h1>
        <p className="text-lg text-muted-foreground">
          Get up and running with Qalvin UI in minutes.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Prerequisites</h2>
        <ul className="space-y-2 text-muted-foreground list-disc pl-6">
          <li><strong className="text-foreground font-semibold">Node.js 18+</strong> - Required for the CLI and development server</li>
          <li><strong className="text-foreground font-semibold">React 19</strong> - Qalvin UI is built for React 19</li>
          <li><strong className="text-foreground font-semibold">Tailwind CSS v4</strong> - Used for styling components</li>
          <li><strong className="text-foreground font-semibold">TypeScript</strong> - Recommended for better developer experience</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Step 1: Initialize Your Project</h2>
        <p className="text-muted-foreground">
          Run the init command to set up Qalvin UI in your project:
        </p>
        <div className="rounded-lg border bg-muted/50 p-4 font-mono text-sm">
          <p className="text-foreground/80">pnpm dlx @alvinahmad/ui init</p>
        </div>
        <p className="text-sm text-muted-foreground">
          This will create a <code className="bg-muted px-1.5 py-0.5 rounded">components.json</code> file in your project root and configure the necessary settings.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Step 2: Add Components</h2>
        <p className="text-muted-foreground">
          Add the components you need to your project:
        </p>
        <div className="rounded-lg border bg-muted/50 p-4 font-mono text-sm space-y-2">
          <p className="text-foreground/80"># Add individual components</p>
          <p className="text-foreground/80">pnpm dlx @alvinahmad/ui add button card input</p>
          <p className="text-foreground/80"></p>
          <p className="text-foreground/80"># Add all components</p>
          <p className="text-foreground/80">pnpm dlx @alvinahmad/ui add --all</p>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Step 3: Import and Use</h2>
        <p className="text-muted-foreground">
          Import the components you need in your application:
        </p>
        <div className="rounded-lg border bg-muted/50 p-4 font-mono text-sm overflow-x-auto">
          <pre className="text-foreground/80">{`import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function MyApp() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome to Qalvin UI</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Get Started</Button>
      </CardContent>
    </Card>
  )
}`}</pre>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Step 4: Customize Your Theme</h2>
        <p className="text-muted-foreground">
          Customize the look and feel by editing the CSS variables in your global CSS file:
        </p>
        <div className="rounded-lg border bg-muted/50 p-4 font-mono text-sm overflow-x-auto">
          <pre className="text-foreground/80">{`:root {
  --background: 0 0% 100%;
  --foreground: 0 0% 3.9%;
  --primary: 0 0% 9%;
  --primary-foreground: 0 0% 98%;
  /* Add more variables as needed */
}`}</pre>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Next Steps</h2>
        <ul className="space-y-2 text-muted-foreground list-disc pl-6">
          <li>Browse the <a href="/docs/components" className="underline font-medium text-foreground">Components</a> directory</li>
          <li>Learn about <a href="/docs/theming" className="underline font-medium text-foreground">Theming</a> options</li>
          <li>Explore <a href="/docs/cli" className="underline font-medium text-foreground">CLI commands</a></li>
          <li>Check out <a href="/docs/examples" className="underline font-medium text-foreground">Examples</a> for inspiration</li>
        </ul>
      </div>
    </div>
  )
}
