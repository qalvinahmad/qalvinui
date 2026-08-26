export default function Page() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Introduction</h1>
        <p className="text-lg text-muted-foreground">
          Welcome to Qalvin UI - a modern component library built with React, Tailwind CSS, and Base UI.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">What is Qalvin UI?</h2>
        <p className="text-muted-foreground">
          Qalvin UI is a collection of re-usable components that you can copy and paste into your web applications. 
          It is built on top of Base UI, Tailwind CSS, and follows the WAI-ARIA design patterns for accessibility.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Features</h2>
        <ul className="space-y-2 text-muted-foreground list-disc pl-6">
          <li><strong className="text-foreground font-semibold">Accessible:</strong> Built with WAI-ARIA patterns for screen readers and keyboard navigation.</li>
          <li><strong className="text-foreground font-semibold">Customizable:</strong> Use CSS variables to theme every component to match your brand.</li>
          <li><strong className="text-foreground font-semibold">Open Source:</strong> Free to use in personal and commercial projects.</li>
          <li><strong className="text-foreground font-semibold">Beautiful Defaults:</strong> Sensible default styling that looks great out of the box.</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Installation</h2>
        <p className="text-muted-foreground">
          You can install Qalvin UI using your preferred package manager:
        </p>
        <div className="rounded-lg border bg-muted/50 p-4 font-mono text-sm">
          <p className="text-foreground/80">pnpm dlx @alvinahmad/ui init</p>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Technology Stack</h2>
        <ul className="space-y-2 text-muted-foreground list-disc pl-6">
          <li><strong className="text-foreground font-semibold">React 19:</strong> The latest version of React with improved performance.</li>
          <li><strong className="text-foreground font-semibold">Base UI:</strong> Unstyled, accessible components from MUI.</li>
          <li><strong className="text-foreground font-semibold">Tailwind CSS v4:</strong> Utility-first CSS framework for rapid styling.</li>
          <li><strong className="text-foreground font-semibold">TypeScript:</strong> Full type safety for all components.</li>
        </ul>
      </div>
    </div>
  )
}
