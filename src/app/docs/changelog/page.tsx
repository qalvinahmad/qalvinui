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
      </div>
    </div>
  )
}
