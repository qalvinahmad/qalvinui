export default function ApiReferencePage() {
  return (
    <div className="mx-auto w-full min-w-0 max-w-3xl space-y-10">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">API Reference</h1>
        <p className="text-lg text-muted-foreground">
          Complete API reference for all Qalvin UI components and utilities.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Component Props</h2>
        <p className="text-muted-foreground">
          All Qalvin UI components extend the native HTML element props. Here are the common props shared across components:
        </p>
        <div className="rounded-lg border overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="p-3 text-left font-medium">Prop</th>
                <th className="p-3 text-left font-medium">Type</th>
                <th className="p-3 text-left font-medium">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-3 font-mono text-sm">className</td>
                <td className="p-3 font-mono text-sm">string</td>
                <td className="p-3 text-sm text-muted-foreground">Additional CSS classes</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-sm">children</td>
                <td className="p-3 font-mono text-sm">ReactNode</td>
                <td className="p-3 text-sm text-muted-foreground">Child elements</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-sm">asChild</td>
                <td className="p-3 font-mono text-sm">boolean</td>
                <td className="p-3 text-sm text-muted-foreground">Render as a different element</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">data-* </td>
                <td className="p-3 font-mono text-sm">string</td>
                <td className="p-3 text-sm text-muted-foreground">Data attributes for styling</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Button API</h2>
        <div className="rounded-lg border overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="p-3 text-left font-medium">Prop</th>
                <th className="p-3 text-left font-medium">Type</th>
                <th className="p-3 text-left font-medium">Default</th>
                <th className="p-3 text-left font-medium">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-3 font-mono text-sm">variant</td>
                <td className="p-3 font-mono text-sm">"default" | "secondary" | "outline" | "ghost" | "destructive" | "link"</td>
                <td className="p-3 font-mono text-sm">"default"</td>
                <td className="p-3 text-sm text-muted-foreground">Button variant</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-sm">size</td>
                <td className="p-3 font-mono text-sm">"default" | "sm" | "lg" | "icon"</td>
                <td className="p-3 font-mono text-sm">"default"</td>
                <td className="p-3 text-sm text-muted-foreground">Button size</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-sm">disabled</td>
                <td className="p-3 font-mono text-sm">boolean</td>
                <td className="p-3 font-mono text-sm">false</td>
                <td className="p-3 text-sm text-muted-foreground">Disable the button</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">asChild</td>
                <td className="p-3 font-mono text-sm">boolean</td>
                <td className="p-3 font-mono text-sm">false</td>
                <td className="p-3 text-sm text-muted-foreground">Render as a child element</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Input API</h2>
        <div className="rounded-lg border overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="p-3 text-left font-medium">Prop</th>
                <th className="p-3 text-left font-medium">Type</th>
                <th className="p-3 text-left font-medium">Default</th>
                <th className="p-3 text-left font-medium">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-3 font-mono text-sm">type</td>
                <td className="p-3 font-mono text-sm">"text" | "password" | "email" | "number" | ...</td>
                <td className="p-3 font-mono text-sm">"text"</td>
                <td className="p-3 text-sm text-muted-foreground">Input type</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-sm">placeholder</td>
                <td className="p-3 font-mono text-sm">string</td>
                <td className="p-3 font-mono text-sm">-</td>
                <td className="p-3 text-sm text-muted-foreground">Placeholder text</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-sm">disabled</td>
                <td className="p-3 font-mono text-sm">boolean</td>
                <td className="p-3 font-mono text-sm">false</td>
                <td className="p-3 text-sm text-muted-foreground">Disable the input</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">value</td>
                <td className="p-3 font-mono text-sm">string | number</td>
                <td className="p-3 font-mono text-sm">-</td>
                <td className="p-3 text-sm text-muted-foreground">Input value</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Utilities</h2>
        <p className="text-muted-foreground">
          Qalvin UI provides the following utility functions:
        </p>
        <div className="rounded-lg border bg-muted/50 p-4 font-mono text-sm overflow-x-auto">
          <pre className="text-foreground/80">{`import { cn } from "@/lib/utils"

// Merge class names with Tailwind CSS
cn("px-4 py-2", "bg-primary text-primary-foreground")
// => "px-4 py-2 bg-primary text-primary-foreground"

// Conditionally apply classes
cn("base-class", isActive && "active-class")
// => "base-class" or "base-class active-class"`}</pre>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Type Definitions</h2>
        <p className="text-muted-foreground">
          All components export their TypeScript types:
        </p>
        <div className="rounded-lg border bg-muted/50 p-4 font-mono text-sm overflow-x-auto">
          <pre className="text-foreground/80">{`import type { ButtonProps } from "@/components/ui/button"
import type { InputProps } from "@/components/ui/input"
import type { CardProps } from "@/components/ui/card"

// Use types in your components
function MyComponent({ variant, size }: ButtonProps) {
  return <Button variant={variant} size={size}>Click me</Button>
}`}</pre>
        </div>
      </div>
    </div>
  )
}
