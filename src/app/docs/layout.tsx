import Link from "next/link";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto px-4 max-w-screen-2xl">
      <div className="flex flex-col md:flex-row gap-6 md:gap-10 py-8">
        <aside className="w-full md:w-[220px] lg:w-[240px] shrink-0">
          <div className="sticky top-20 h-[calc(100vh-5rem)] overflow-y-auto">
            <div className="space-y-4">
              <div className="py-2">
                <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold">Sections</h4>
                <div className="grid grid-flow-row auto-rows-max text-sm">
                  <Link href="/docs/introduction" className="flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground">Introduction</Link>
                  <Link href="/docs/components" className="flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground">Components</Link>
                  <Link href="/docs/installation" className="flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline font-medium text-foreground bg-muted">Installation</Link>
                  <Link href="/docs/theming" className="flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground">Theming</Link>
                  <Link href="/docs/cli" className="flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground">CLI</Link>
                  <Link href="/docs/typeset" className="flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground">Typeset</Link>
                  <Link href="/docs/skills" className="flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground">Skills</Link>
                  <Link href="/docs/registry" className="flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground">Registry</Link>
                  <Link href="/docs/changelog" className="flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground">Changelog <span className="ml-2 w-2 h-2 rounded-full bg-blue-500"></span></Link>
                </div>
              </div>
              
              <div className="py-2">
                <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold">Components</h4>
                <div className="grid grid-flow-row auto-rows-max text-sm">
                  <Link href="/docs/components/accordion" className="flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground">Accordion</Link>
                  <Link href="/docs/components/alert" className="flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground">Alert</Link>
                  <Link href="/docs/components/alert-dialog" className="flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground">Alert Dialog</Link>
                  <Link href="/docs/components/aspect-ratio" className="flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground">Aspect Ratio</Link>
                </div>
              </div>
            </div>
          </div>
        </aside>
        
        <main className="flex-1 w-full min-w-0">
          {children}
        </main>
      </div>
    </div>
  );
}
