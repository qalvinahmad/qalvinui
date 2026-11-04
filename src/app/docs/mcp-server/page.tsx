export default function McpServerPage() {
  return (
    <div className="mx-auto w-full min-w-0 max-w-3xl space-y-10">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">MCP Server</h1>
        <p className="text-lg text-muted-foreground">
          Model Context Protocol (MCP) server for AI-powered component generation, discovery, and modification.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">What is MCP?</h2>
        <p className="text-muted-foreground">
          The Model Context Protocol (MCP) is an open standard that allows AI assistants (such as Claude Desktop, Cursor, Continue, and Antigravity) to safely interact with external tools and component registries.
        </p>
        <p className="text-muted-foreground">
          The Qalvin UI MCP server is built directly into the library. You don't need to install any separate external package — simply run it via <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono">npx</code> or <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono">pnpm dlx</code>.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Quick Start & Testing</h2>
        <p className="text-muted-foreground">
          You can test and start the MCP server directly in your terminal:
        </p>
        <div className="rounded-lg border bg-muted/50 p-4 font-mono text-sm space-y-2">
          <p className="text-foreground/80"># Run with npx</p>
          <p className="text-foreground/80">npx @alvinahmad/qalvinui mcp</p>
          <p className="text-foreground/80"></p>
          <p className="text-foreground/80"># Or with pnpm</p>
          <p className="text-foreground/80">pnpm dlx @alvinahmad/qalvinui mcp</p>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Configuration for AI Assistants</h2>
        <p className="text-muted-foreground">
          Add Qalvin UI to your assistant configuration (e.g. <code className="bg-muted px-1.5 py-0.5 rounded text-sm">claude_desktop_config.json</code>, <code className="bg-muted px-1.5 py-0.5 rounded text-sm">.cursor/mcp.json</code>, or Continue):
        </p>
        <div className="rounded-lg border bg-muted/50 p-4 font-mono text-sm overflow-x-auto">
          <pre className="text-foreground/80">{`{
  "mcpServers": {
    "qalvinui": {
      "command": "npx",
      "args": ["-y", "@alvinahmad/qalvinui", "mcp"]
    }
  }
}`}</pre>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Available MCP Tools</h2>
        <p className="text-muted-foreground">
          When connected, your AI assistant will have access to these real-time tools:
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
                <td className="p-3 font-mono text-sm text-primary">list_components</td>
                <td className="p-3 text-sm text-muted-foreground">List all available Qalvin UI components, blocks, and 3D shaders with their dependencies</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-sm text-primary">get_component</td>
                <td className="p-3 text-sm text-muted-foreground">Get the complete source code, imports, and dependencies of any component or block</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-sm text-primary">list_skills</td>
                <td className="p-3 text-sm text-muted-foreground">List all available design pattern skills (auth-form, dashboard, ecommerce, creative-canvas, data-table)</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-sm text-primary">get_skill</td>
                <td className="p-3 text-sm text-muted-foreground">Retrieve all components and installation commands for a specific skill</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm text-primary">generate_component</td>
                <td className="p-3 text-sm text-muted-foreground">Generate a modern accessible React 19 + Base UI + Tailwind CSS v4 component template</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Usage Example</h2>
        <p className="text-muted-foreground">
          Your AI assistant can now automatically query components and generate customized code:
        </p>
        <div className="rounded-lg border bg-muted/50 p-4 font-mono text-sm overflow-x-auto">
          <pre className="text-foreground/80">{`// Example AI Prompts:
// "List all interactive 3D and shader components from Qalvin UI"
// -> AI calls: list_components({ category: "ui" })

// "Show me the source code and dependencies for interactive-checkout"
// -> AI calls: get_component({ name: "interactive-checkout" })

// "Give me the components needed for an auth flow"
// -> AI calls: get_skill({ name: "auth-form" })`}</pre>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Supported Platforms</h2>
        <ul className="space-y-2 text-muted-foreground list-disc pl-6">
          <li><strong className="text-foreground font-semibold">Claude Desktop:</strong> Anthropic's native desktop application</li>
          <li><strong className="text-foreground font-semibold">Cursor & Windsurf:</strong> AI IDEs with native MCP configuration</li>
          <li><strong className="text-foreground font-semibold">Continue.dev:</strong> Open-source VS Code and JetBrains AI assistant</li>
          <li><strong className="text-foreground font-semibold">Antigravity:</strong> Google Antigravity developer environment</li>
        </ul>
      </div>
    </div>
  );
}
