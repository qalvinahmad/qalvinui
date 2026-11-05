export default function Page() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Changelog</h1>
        <p className="text-lg text-muted-foreground">
          A timeline of all the changes and updates to Qalvin UI.
        </p>
      </div>

      <div className="space-y-8">
        {/* v2.1.0 */}
        <div className="relative pl-8 border-l-2 border-primary">
          <div className="absolute w-3.5 h-3.5 bg-primary rounded-full -left-[8px] top-1.5 ring-4 ring-primary/20"></div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-primary">v2.1.0</h3>
              <span className="text-xs rounded-full bg-primary/10 px-2 py-0.5 font-medium text-primary">Latest</span>
              <span className="text-xs text-muted-foreground">November 2026</span>
            </div>
            <p className="text-sm font-medium text-foreground">
              Major UI Redesign, Autocomplete Primitive, Coss-Style Reusable Cards, and Chat UI Block.
            </p>
            <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-1">
              <li><strong>Coss-Style Component Cards:</strong> Implemented reusable <code className="text-xs bg-muted px-1 py-0.5 rounded">ComponentCard</code> with elegant miniature wireframe previews for all 30+ components across documentation and homepage.</li>
              <li><strong>Autocomplete Component:</strong> Added accessible Autocomplete with 11 interactive variants: disabled, small/large sizes, labels, auto-highlight, autofill, clear/trigger buttons, grouped tag collections, limited result status, and asynchronous IMDb movie search.</li>
              <li><strong>Chat UI Block (chat-01):</strong> New composable chat block inspired by modern messaging architectures, built with Qalvin UI components with delivery receipts (sent, delivered, read), thread reply references, reaction chips, typing indicators, and scenario testing.</li>
              <li><strong>Sticky Full Page Slides:</strong> Presentation slide component in 4 formats (.tsx, .jsx, .ts, .js) using pure CSS sticky stacking contexts.</li>
            </ul>
          </div>
        </div>

        {/* v2.0.0 */}
        <div className="relative pl-8 border-l-2 border-muted">
          <div className="absolute w-3 h-3 bg-foreground rounded-full -left-[7px] top-1.5"></div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <h3 className="font-semibold">v2.0.0</h3>
              <span className="text-xs text-muted-foreground">November 2026</span>
            </div>
            <p className="text-sm font-medium text-foreground">
              Major release: AI & 3D Shaders, Production Blocks, Built-in MCP Server, and Skills Engine.
            </p>
            <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-1">
              <li><strong>Interactive Blocks:</strong> Responsive Interactive Checkout flow with CSS Container Queries (<code className="text-xs bg-muted px-1 py-0.5 rounded">@container</code>) and dynamic cart counters.</li>
              <li><strong>AI & 3D Shaders:</strong> Added Thinking Orb (3D generative WebGL orb), Metal FX (specular reflections), Border Beam, Voice Glow, and Human Atlas 3D anatomy block.</li>
              <li><strong>Built-in MCP Server:</strong> Model Context Protocol server integrated into the CLI for Claude Desktop, Cursor, Continue, and Antigravity (<code className="text-xs bg-muted px-1 py-0.5 rounded">npx @alvinahmad/qalvinui mcp</code>).</li>
              <li><strong>Skills Pattern Engine:</strong> Added high-level design patterns (<code className="text-xs bg-muted px-1 py-0.5 rounded">skills list</code>, <code className="text-xs bg-muted px-1 py-0.5 rounded">skills add auth-form</code>, <code className="text-xs bg-muted px-1 py-0.5 rounded">skills add creative-canvas</code>).</li>
              <li><strong>Multi-file Source Viewer:</strong> Added multi-tab code viewer displaying block code, UI sub-components, and Tailwind configurations with one-click copy.</li>
              <li><strong>CLI Enhancements:</strong> Added <code className="text-xs bg-muted px-1 py-0.5 rounded">init</code>, <code className="text-xs bg-muted px-1 py-0.5 rounded">search</code>, <code className="text-xs bg-muted px-1 py-0.5 rounded">add --all</code>, and custom directory flags (<code className="text-xs bg-muted px-1 py-0.5 rounded">--dir</code>, <code className="text-xs bg-muted px-1 py-0.5 rounded">--lib</code>).</li>
            </ul>
          </div>
        </div>

        {/* v1.3.0 */}
        <div className="relative pl-8 border-l-2 border-muted">
          <div className="absolute w-3 h-3 bg-foreground rounded-full -left-[7px] top-1.5"></div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <h3 className="font-semibold">v1.3.0</h3>
              <span className="text-xs text-muted-foreground">March 2025</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Performance improvements and bug fixes.
            </p>
            <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-1">
              <li>Reduced bundle size by 30%</li>
              <li>Improved animation performance</li>
              <li>Fixed form validation issues</li>
              <li>Added skeleton loading component</li>
            </ul>
          </div>
        </div>

        {/* v1.2.0 */}
        <div className="relative pl-8 border-l-2 border-muted">
          <div className="absolute w-3 h-3 bg-foreground rounded-full -left-[7px] top-1.5"></div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <h3 className="font-semibold">v1.2.0</h3>
              <span className="text-xs text-muted-foreground">February 2025</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Enhanced theming capabilities and new variants.
            </p>
            <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-1">
              <li>Added dark mode support for all components</li>
              <li>Added new Button variants (destructive, ghost)</li>
              <li>Improved responsive design</li>
              <li>Added RTL support</li>
            </ul>
          </div>
        </div>

        {/* v1.1.0 */}
        <div className="relative pl-8 border-l-2 border-muted">
          <div className="absolute w-3 h-3 bg-foreground rounded-full -left-[7px] top-1.5"></div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <h3 className="font-semibold">v1.1.0</h3>
              <span className="text-xs text-muted-foreground">January 2025</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Added new components and improved accessibility.
            </p>
            <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-1">
              <li>Added Calendar and Date Picker components</li>
              <li>Added Select and Combobox components</li>
              <li>Improved keyboard navigation for all components</li>
              <li>Fixed TypeScript type definitions</li>
            </ul>
          </div>
        </div>

        {/* v1.0.0 */}
        <div className="relative pl-8 border-l-2 border-muted">
          <div className="absolute w-3 h-3 bg-foreground rounded-full -left-[7px] top-1.5"></div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <h3 className="font-semibold">v1.0.0</h3>
              <span className="text-xs text-muted-foreground">December 2024</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Initial release of Qalvin UI with 30+ components.
            </p>
            <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-1">
              <li>Button, Input, Label, and form components</li>
              <li>Dialog, Alert Dialog, and Sheet components</li>
              <li>Card, Badge, and Avatar components</li>
              <li>Tabs, Accordion, and Collapsible components</li>
              <li>Theme support with CSS variables</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
