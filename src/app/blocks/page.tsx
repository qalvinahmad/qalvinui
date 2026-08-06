import Link from "next/link";
import { ArrowRight, Monitor, Tablet, Smartphone, Maximize, RotateCw, Terminal, LayoutDashboard, Settings, Users, FileText, ChevronRight, PieChart } from "lucide-react";

export default function BlocksPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-screen-xl">
      {/* Hero Section */}
      <div className="flex flex-col items-center text-center mb-16 space-y-6">
        <Link href="#" className="inline-flex items-center rounded-full bg-muted px-4 py-1.5 text-sm font-medium transition-colors hover:bg-muted/80">
          New Questionnaire component <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Building Blocks for the Web</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-[600px]">
          Clean, modern building blocks. Copy and paste into your apps. Works with all React frameworks. Open Source. Free forever.
        </p>
        <div className="flex items-center gap-4 pt-4">
          <Link href="#" className="inline-flex h-10 items-center justify-center rounded-md bg-foreground px-8 text-sm font-medium text-background shadow transition-colors hover:bg-foreground/90">
            Browse Blocks
          </Link>
          <Link href="#" className="inline-flex h-10 items-center justify-center rounded-md px-8 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground">
            View Components
          </Link>
        </div>
      </div>

      {/* Categories Bar */}
      <div className="flex items-center justify-between mb-8 overflow-x-auto pb-2">
        <div className="flex items-center space-x-6 text-sm font-medium">
          <button className="text-foreground border-b-2 border-foreground py-2">Featured</button>
          <button className="text-muted-foreground hover:text-foreground py-2">Sidebar</button>
          <button className="text-muted-foreground hover:text-foreground py-2">Login</button>
          <button className="text-muted-foreground hover:text-foreground py-2">Signup</button>
        </div>
        <button className="inline-flex items-center justify-center rounded-md bg-muted px-4 py-2 text-sm font-medium hover:bg-muted/80 shrink-0">
          Browse all blocks
        </button>
      </div>

      {/* Blocks List */}
      <div className="space-y-16">
        
        {/* Block 1 */}
        <div className="space-y-4">
          <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="inline-flex items-center rounded-md border bg-muted p-1">
                <button className="rounded-sm bg-background px-3 py-1 text-sm font-medium shadow-sm">Preview</button>
                <button className="rounded-sm px-3 py-1 text-sm font-medium text-muted-foreground hover:text-foreground">Code</button>
              </div>
              <span className="text-sm font-medium hidden md:inline-block border-l pl-4 border-border">
                A dashboard with sidebar, charts and data table
              </span>
            </div>
            <div className="flex items-center gap-2 overflow-x-auto pb-2 xl:pb-0">
              <div className="hidden md:flex items-center gap-1 border-r pr-2 border-border text-muted-foreground">
                <button className="p-2 hover:text-foreground rounded-md hover:bg-muted"><Monitor className="h-4 w-4" /></button>
                <button className="p-2 hover:text-foreground rounded-md hover:bg-muted"><Tablet className="h-4 w-4" /></button>
                <button className="p-2 hover:text-foreground rounded-md hover:bg-muted"><Smartphone className="h-4 w-4" /></button>
                <button className="p-2 hover:text-foreground rounded-md hover:bg-muted"><Maximize className="h-4 w-4" /></button>
                <button className="p-2 hover:text-foreground rounded-md hover:bg-muted"><RotateCw className="h-4 w-4" /></button>
              </div>
              <div className="flex items-center gap-2 pl-2">
                <div className="inline-flex items-center gap-2 rounded-md border bg-muted/50 px-3 py-1.5 text-sm text-muted-foreground font-mono">
                  <span className="text-foreground">{'>_'}</span> npx @qalvinahmad/ui add dashboard-01
                </div>
                <button className="inline-flex h-8 items-center justify-center rounded-md bg-foreground px-4 text-xs font-medium text-background shadow hover:bg-foreground/90 shrink-0">
                  Open in v0
                </button>
              </div>
            </div>
          </div>
          
          {/* Preview Container 1 */}
          <div className="rounded-xl border bg-background shadow-sm overflow-hidden flex min-h-[500px]">
             {/* Sidebar Dummy */}
             <div className="w-64 border-r bg-muted/20 p-4 hidden md:flex flex-col gap-6">
                <div className="flex items-center gap-2 font-semibold">
                  <div className="h-6 w-6 rounded-full border border-foreground flex items-center justify-center">
                    <div className="h-3 w-3 rounded-full bg-foreground" />
                  </div>
                  Acme Inc.
                </div>
                <button className="w-full rounded-md bg-foreground text-background py-2 text-sm font-medium flex items-center justify-between px-3">
                  Quick Create <span className="h-4 w-4 bg-background/20 rounded flex items-center justify-center text-[10px]">+</span>
                </button>
                <nav className="flex flex-col gap-2 text-sm font-medium text-muted-foreground">
                  <a href="#" className="flex items-center gap-2 text-foreground bg-muted p-2 rounded-md"><LayoutDashboard className="h-4 w-4" /> Dashboard</a>
                  <a href="#" className="flex items-center gap-2 p-2 hover:text-foreground"><RotateCw className="h-4 w-4" /> Lifecycle</a>
                  <a href="#" className="flex items-center gap-2 p-2 hover:text-foreground"><PieChart className="h-4 w-4" /> Analytics</a>
                  <a href="#" className="flex items-center gap-2 p-2 hover:text-foreground"><FileText className="h-4 w-4" /> Projects</a>
                  <a href="#" className="flex items-center gap-2 p-2 hover:text-foreground"><Users className="h-4 w-4" /> Team</a>
                </nav>
             </div>
             {/* Main Content Dummy */}
             <div className="flex-1 p-6 flex flex-col gap-6 bg-muted/5">
                <div className="flex items-center justify-between border-b pb-4">
                  <div className="flex items-center gap-4 text-sm font-medium">
                    <span className="flex items-center gap-2"><FileText className="h-4 w-4" /> Documents</span>
                  </div>
                  <span className="text-sm text-muted-foreground">GitHub</span>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div className="rounded-xl border bg-card p-6 shadow-sm flex flex-col gap-4">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">Total Revenue</span>
                      <span className="text-emerald-500 font-medium">+12.5%</span>
                    </div>
                    <div className="text-3xl font-bold">$1,250.00</div>
                  </div>
                  <div className="rounded-xl border bg-card p-6 shadow-sm flex flex-col gap-4">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">New Customers</span>
                      <span className="text-rose-500 font-medium">-20%</span>
                    </div>
                    <div className="text-3xl font-bold">1,234</div>
                  </div>
                  <div className="rounded-xl border bg-card p-6 shadow-sm flex flex-col gap-4">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">Active Accounts</span>
                      <span className="text-emerald-500 font-medium">+12.5%</span>
                    </div>
                    <div className="text-3xl font-bold">45,678</div>
                  </div>
                  <div className="rounded-xl border bg-card p-6 shadow-sm flex flex-col gap-4">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">Growth Rate</span>
                      <span className="text-emerald-500 font-medium">+4.5%</span>
                    </div>
                    <div className="text-3xl font-bold">4.5%</div>
                  </div>
                </div>
             </div>
          </div>
        </div>

        {/* Block 2 */}
        <div className="space-y-4">
          <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="inline-flex items-center rounded-md border bg-muted p-1">
                <button className="rounded-sm bg-background px-3 py-1 text-sm font-medium shadow-sm">Preview</button>
                <button className="rounded-sm px-3 py-1 text-sm font-medium text-muted-foreground hover:text-foreground">Code</button>
              </div>
              <span className="text-sm font-medium hidden md:inline-block border-l pl-4 border-border">
                A sidebar that collapses to icons
              </span>
            </div>
            <div className="flex items-center gap-2 overflow-x-auto pb-2 xl:pb-0">
              <div className="hidden md:flex items-center gap-1 border-r pr-2 border-border text-muted-foreground">
                <button className="p-2 hover:text-foreground rounded-md hover:bg-muted"><Monitor className="h-4 w-4" /></button>
                <button className="p-2 hover:text-foreground rounded-md hover:bg-muted"><Tablet className="h-4 w-4" /></button>
                <button className="p-2 hover:text-foreground rounded-md hover:bg-muted"><Smartphone className="h-4 w-4" /></button>
                <button className="p-2 hover:text-foreground rounded-md hover:bg-muted"><Maximize className="h-4 w-4" /></button>
                <button className="p-2 hover:text-foreground rounded-md hover:bg-muted"><RotateCw className="h-4 w-4" /></button>
              </div>
              <div className="flex items-center gap-2 pl-2">
                <div className="inline-flex items-center gap-2 rounded-md border bg-muted/50 px-3 py-1.5 text-sm text-muted-foreground font-mono">
                  <span className="text-foreground">{'>_'}</span> npx @qalvinahmad/ui add sidebar-07
                </div>
                <button className="inline-flex h-8 items-center justify-center rounded-md bg-foreground px-4 text-xs font-medium text-background shadow hover:bg-foreground/90 shrink-0">
                  Open in v0
                </button>
              </div>
            </div>
          </div>
          
          {/* Preview Container 2 */}
          <div className="rounded-xl border bg-background shadow-sm overflow-hidden flex min-h-[400px]">
             {/* Sidebar Dummy */}
             <div className="w-16 border-r bg-muted/10 p-4 hidden md:flex flex-col items-center gap-6">
                <div className="h-8 w-8 rounded-full border border-foreground flex items-center justify-center bg-foreground text-background font-bold text-xs">
                  A
                </div>
                <nav className="flex flex-col gap-4 text-muted-foreground">
                  <button className="p-2 rounded-md bg-muted text-foreground"><LayoutDashboard className="h-5 w-5" /></button>
                  <button className="p-2 rounded-md hover:bg-muted hover:text-foreground"><Users className="h-5 w-5" /></button>
                  <button className="p-2 rounded-md hover:bg-muted hover:text-foreground"><Settings className="h-5 w-5" /></button>
                </nav>
             </div>
             {/* Main Content Dummy */}
             <div className="flex-1 p-6 flex flex-col gap-6 bg-muted/5">
                <div className="flex gap-4">
                  <div className="h-40 flex-1 rounded-xl border bg-card/50" />
                  <div className="h-40 flex-1 rounded-xl border bg-card/50" />
                  <div className="h-40 flex-1 rounded-xl border bg-card/50" />
                </div>
                <div className="flex-1 rounded-xl border bg-card/50" />
             </div>
          </div>
        </div>

      </div>
    </div>
  );
}
