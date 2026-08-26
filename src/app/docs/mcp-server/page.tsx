export default function McpServerPage() {
  return (
    <div className="mx-auto w-full min-w-0 max-w-3xl space-y-10">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">MCP Server</h1>
        <p className="text-lg text-muted-foreground">
          Set up a Model Context Protocol server for AI-powered component generation.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">What is MCP?</h2>
        <p className="text-muted-foreground">
          The Model Context Protocol (MCP) is a standard for AI models to interact with external tools and data sources. 
          By setting up an MCP server, you can enable AI assistants to generate and modify Qalvin UI components.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Installation</h2>
        <p className="text-muted-foreground">
          Install the MCP server package:
        </p>
        <div className="rounded-lg border bg-muted/50 p-4 font-mono text-sm">
          <p className="text-foreground/80">pnpm add @alvinahmad/mcp-server</p>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Configuration</h2>
        <p className="text-muted-foreground">
          Create an <code className="bg-muted px-1.5 py-0.5 rounded text-sm">mcp.json</code> file in your project root:
        </p>
        <div className="rounded-lg border bg-muted/50 p-4 font-mono text-sm overflow-x-auto">
          <pre className="text-foreground/80">{`{
  "mcpServers": {
    "qalvinui": {
      "command": "npx",
      "args": ["@alvinahmad/mcp-server"],
      "env": {
        "REGISTRY_PATH": "./registry"
      }
    }
  }
}`}</pre>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Available Tools</h2>
        <p className="text-muted-foreground">
          The MCP server provides the following tools:
        </p>
        <div className="rounded-lg border overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="p-3 text-left font-medium">Tool</th>
                <th className="p-3 text-left font-medium">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-3 font-mono text-sm">generate_component</td>
                <td className="p-3 text-sm text-muted-foreground">Generate a new component based on a description</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-sm">list_components</td>
                <td className="p-3 text-sm text-muted-foreground">List all available components in the registry</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-sm">get_component</td>
                <td className="p-3 text-sm text-muted-foreground">Get the source code of a specific component</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">modify_component</td>
                <td className="p-3 text-sm text-muted-foreground">Modify an existing component with new props or styles</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Usage Example</h2>
        <p className="text-muted-foreground">
          Here is an example of how to use the MCP server with an AI assistant:
        </p>
        <div className="rounded-lg border bg-muted/50 p-4 font-mono text-sm overflow-x-auto">
          <pre className="text-foreground/80">{`// AI Assistant can now use these tools:
// 1. Generate a new button component
await mcp.callTool("generate_component", {
  name: "SpecialButton",
  description: "A button with gradient background",
  props: ["variant", "size", "disabled"]
})

// 2. List all available components
const components = await mcp.callTool("list_components")

// 3. Get component source code
const buttonCode = await mcp.callTool("get_component", {
  name: "button"
})`}</pre>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Supported AI Platforms</h2>
        <ul className="space-y-2 text-muted-foreground list-disc pl-6">
          <li><strong className="text-foreground font-semibold">Claude:</strong> Use with Anthropic's Claude desktop app</li>
          <li><strong className="text-foreground font-semibold">Cursor:</strong> Integrated with Cursor IDE</li>
          <li><strong className="text-foreground font-semibold">Continue:</strong> Works with Continue.dev extension</li>
          <li><strong className="text-foreground font-semibold">Custom:</strong> Build your own MCP client</li>
        </ul>
      </div>
    </div>
  )
}
