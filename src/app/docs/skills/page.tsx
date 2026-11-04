export default function Page() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Skills</h1>
        <p className="text-lg text-muted-foreground">
          Pre-built design patterns and component combinations for common use cases.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">What are Skills?</h2>
        <p className="text-muted-foreground">
          Skills are ready-to-use design patterns that combine multiple components and blocks into complete UI solutions. 
          They help you build common interfaces faster without having to compose components from scratch.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Available Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-lg border p-4 hover:bg-muted/50 transition-colors">
            <h3 className="font-semibold mb-2">Authentication Forms (<code className="text-primary text-sm font-mono">auth-form</code>)</h3>
            <p className="text-sm text-muted-foreground">
              Pre-built login and signup forms with Base UI and validation.
            </p>
          </div>
          <div className="rounded-lg border p-4 hover:bg-muted/50 transition-colors">
            <h3 className="font-semibold mb-2">Dashboard Layouts (<code className="text-primary text-sm font-mono">dashboard</code>)</h3>
            <p className="text-sm text-muted-foreground">
              Complete dashboard layouts with sidebar, header, stat cards, and content area.
            </p>
          </div>
          <div className="rounded-lg border p-4 hover:bg-muted/50 transition-colors">
            <h3 className="font-semibold mb-2">E-commerce Components (<code className="text-primary text-sm font-mono">ecommerce</code>)</h3>
            <p className="text-sm text-muted-foreground">
              Product cards, animated shopping cart counters, and interactive checkout flows.
            </p>
          </div>
          <div className="rounded-lg border p-4 hover:bg-muted/50 transition-colors">
            <h3 className="font-semibold mb-2">Creative AI & 3D Shaders (<code className="text-primary text-sm font-mono">creative-canvas</code>)</h3>
            <p className="text-sm text-muted-foreground">
              Generative 3D thinking orb, specular metal reflection shaders, glowing border beams, and voice reactivity.
            </p>
          </div>
          <div className="rounded-lg border p-4 hover:bg-muted/50 transition-colors md:col-span-2">
            <h3 className="font-semibold mb-2">Data Tables (<code className="text-primary text-sm font-mono">data-table</code>)</h3>
            <p className="text-sm text-muted-foreground">
              Advanced data tables with sorting, filtering, badges, and pagination.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Installation via CLI</h2>
        <p className="text-muted-foreground">
          Install skills directly into your project:
        </p>
        <div className="rounded-lg border bg-muted/50 p-4 font-mono text-sm space-y-2">
          <p className="text-foreground/80"># List available skills</p>
          <p className="text-foreground/80">npx @alvinahmad/ui skills list</p>
          <p className="text-foreground/80"># (or: pnpm dlx @alvinahmad/ui skills list)</p>
          <p className="text-foreground/80"></p>
          <p className="text-foreground/80"># Install a skill pattern</p>
          <p className="text-foreground/80">npx @alvinahmad/ui skills add auth-form</p>
          <p className="text-foreground/80">npx @alvinahmad/ui skills add ecommerce</p>
          <p className="text-foreground/80">npx @alvinahmad/ui skills add creative-canvas</p>
          <p className="text-foreground/80"></p>
          <p className="text-foreground/80"># Install all skills</p>
          <p className="text-foreground/80">npx @alvinahmad/ui skills add --all</p>
        </div>
      </div>
    </div>
  );
}
