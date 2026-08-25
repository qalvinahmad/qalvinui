export default function Page() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Theming</h1>
        <p className="text-lg text-muted-foreground">
          Customize the look and feel of your application using CSS variables.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">CSS Variables</h2>
        <p className="text-muted-foreground">
          Qalvin UI uses CSS variables for theming. You can customize the following variables in your global CSS file:
        </p>
        <div className="rounded-lg border bg-muted/50 p-4 font-mono text-sm overflow-x-auto">
          <pre className="text-foreground/80">{`:root {
  --background: 0 0% 100%;
  --foreground: 0 0% 3.9%;
  --card: 0 0% 100%;
  --card-foreground: 0 0% 3.9%;
  --primary: 0 0% 9%;
  --primary-foreground: 0 0% 98%;
  --secondary: 0 0% 96.1%;
  --secondary-foreground: 0 0% 9%;
  --muted: 0 0% 96.1%;
  --muted-foreground: 0 0% 45.1%;
  --accent: 0 0% 96.1%;
  --accent-foreground: 0 0% 9%;
  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 0 0% 98%;
  --border: 0 0% 89.8%;
  --input: 0 0% 89.8%;
  --ring: 0 0% 3.9%;
  --radius: 0.5rem;
}`}</pre>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Dark Mode</h2>
        <p className="text-muted-foreground">
          To enable dark mode, add the following CSS variables inside a <code className="bg-muted px-1.5 py-0.5 rounded text-sm">.dark</code> selector:
        </p>
        <div className="rounded-lg border bg-muted/50 p-4 font-mono text-sm overflow-x-auto">
          <pre className="text-foreground/80">{`.dark {
  --background: 0 0% 3.9%;
  --foreground: 0 0% 98%;
  --card: 0 0% 3.9%;
  --card-foreground: 0 0% 98%;
  --primary: 0 0% 98%;
  --primary-foreground: 0 0% 9%;
  --secondary: 0 0% 14.9%;
  --secondary-foreground: 0 0% 98%;
  --muted: 0 0% 14.9%;
  --muted-foreground: 0 0% 63.9%;
  --accent: 0 0% 14.9%;
  --accent-foreground: 0 0% 98%;
  --destructive: 0 62.8% 30.6%;
  --destructive-foreground: 0 0% 98%;
  --border: 0 0% 14.9%;
  --input: 0 0% 14.9%;
  --ring: 0 0% 83.1%;
}`}</pre>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Component Variants</h2>
        <p className="text-muted-foreground">
          Each component supports multiple variants. For example, the Button component has the following variants:
        </p>
        <ul className="space-y-2 text-muted-foreground list-disc pl-6">
          <li><code className="bg-muted px-1.5 py-0.5 rounded text-sm">default</code> - Primary button style</li>
          <li><code className="bg-muted px-1.5 py-0.5 rounded text-sm">secondary</code> - Secondary button style</li>
          <li><code className="bg-muted px-1.5 py-0.5 rounded text-sm">outline</code> - Outline button style</li>
          <li><code className="bg-muted px-1.5 py-0.5 rounded text-sm">ghost</code> - Ghost button style</li>
          <li><code className="bg-muted px-1.5 py-0.5 rounded text-sm">destructive</code> - Destructive button style</li>
          <li><code className="bg-muted px-1.5 py-0.5 rounded text-sm">link</code> - Link button style</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Typography</h2>
        <p className="text-muted-foreground">
          Qalvin UI uses the Inter font family by default. You can customize the font by updating the CSS variables:
        </p>
        <div className="rounded-lg border bg-muted/50 p-4 font-mono text-sm overflow-x-auto">
          <pre className="text-foreground/80">{`:root {
  --font-sans: 'Inter', sans-serif;
  --font-mono: 'Geist Mono', monospace;
}`}</pre>
        </div>
      </div>
    </div>
  )
}
