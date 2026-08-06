import Link from "next/link";
import { ArrowRight, BarChart2, Copy, TrendingUp, ChevronDown } from "lucide-react";

export default function ChartsPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-screen-xl">
      {/* Hero Section */}
      <div className="flex flex-col items-center text-center mb-16 space-y-6">
        <Link href="#" className="inline-flex items-center rounded-full bg-muted px-4 py-1.5 text-sm font-medium transition-colors hover:bg-muted/80">
          New Questionnaire component <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Beautiful Charts & Graphs</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-[600px]">
          A collection of ready-to-use chart components built with Recharts. From basic charts to rich data displays, copy and paste into your apps.
        </p>
        <div className="flex items-center gap-4 pt-4">
          <Link href="#" className="inline-flex h-10 items-center justify-center rounded-md bg-foreground px-8 text-sm font-medium text-background shadow transition-colors hover:bg-foreground/90">
            Browse Charts
          </Link>
          <Link href="#" className="inline-flex h-10 items-center justify-center rounded-md px-8 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground">
            Documentation
          </Link>
        </div>
      </div>

      {/* Categories Bar */}
      <div className="flex items-center mb-8 overflow-x-auto pb-2 border-b border-border">
        <div className="flex items-center space-x-6 text-sm font-medium">
          <button className="text-foreground border-b-2 border-foreground py-2 -mb-[2px]">Area Charts</button>
          <button className="text-muted-foreground hover:text-foreground py-2">Bar Charts</button>
          <button className="text-muted-foreground hover:text-foreground py-2">Line Charts</button>
          <button className="text-muted-foreground hover:text-foreground py-2">Pie Charts</button>
          <button className="text-muted-foreground hover:text-foreground py-2">Radar Charts</button>
          <button className="text-muted-foreground hover:text-foreground py-2">Radial Charts</button>
          <button className="text-muted-foreground hover:text-foreground py-2">Tooltips</button>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="space-y-16">
        
        {/* Interactive Chart */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <BarChart2 className="h-4 w-4" /> Area Chart
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-muted rounded-md text-muted-foreground hover:text-foreground">
                <Copy className="h-4 w-4" />
              </button>
              <button className="inline-flex items-center rounded-md border bg-background px-3 py-1.5 text-sm font-medium shadow-sm hover:bg-accent hover:text-accent-foreground">
                View Code
              </button>
            </div>
          </div>
          
          <div className="rounded-xl border bg-card shadow-sm overflow-hidden flex flex-col min-h-[400px]">
            <div className="p-6 pb-0 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b pb-6">
              <div>
                <h3 className="font-semibold text-lg">Area Chart - Interactive</h3>
                <p className="text-sm text-muted-foreground">Showing total visitors for the last 3 months</p>
              </div>
              <button className="inline-flex items-center justify-between rounded-md border bg-background px-3 py-1.5 text-sm font-medium shadow-sm min-w-[150px]">
                Last 3 months <ChevronDown className="h-4 w-4 text-muted-foreground" />
              </button>
            </div>
            
            <div className="flex-1 p-6 relative flex flex-col justify-end">
              {/* Dummy Chart Visualization */}
              <div className="w-full h-64 relative overflow-hidden flex items-end">
                <svg viewBox="0 0 100 50" preserveAspectRatio="none" className="w-full h-full absolute bottom-0 left-0">
                   {/* Background light blue line */}
                   <path d="M0,45 Q5,25 10,40 T20,20 T30,45 T40,15 T50,35 T60,10 T70,40 T80,25 T90,45 T100,5 L100,50 L0,50 Z" className="fill-blue-100 dark:fill-blue-900/20 stroke-blue-300 dark:stroke-blue-700 stroke-[0.5]" />
                   {/* Foreground dark blue line */}
                   <path d="M0,50 Q4,35 8,45 T16,30 T24,48 T32,25 T40,40 T48,20 T56,45 T64,15 T72,35 T80,10 T88,40 T96,25 L100,30 L100,50 L0,50 Z" className="fill-blue-500/20 stroke-blue-500 stroke-1" />
                </svg>
              </div>
              <div className="flex justify-between mt-4 text-xs text-muted-foreground border-t pt-4">
                <span>Apr 6</span>
                <span>Apr 12</span>
                <span>Apr 18</span>
                <span>Apr 24</span>
                <span>Apr 30</span>
                <span>May 6</span>
                <span>May 12</span>
                <span>May 18</span>
                <span>May 24</span>
                <span>May 30</span>
                <span>Jun 5</span>
                <span>Jun 11</span>
                <span>Jun 17</span>
                <span>Jun 23</span>
                <span>Jun 30</span>
              </div>
              <div className="flex items-center justify-center gap-4 mt-6 text-sm">
                <div className="flex items-center gap-2"><div className="h-2 w-2 rounded-sm bg-blue-300"></div> Desktop</div>
                <div className="flex items-center gap-2"><div className="h-2 w-2 rounded-sm bg-blue-500"></div> Mobile</div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Grid Charts Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="space-y-4">
            <div className="flex items-center justify-between text-sm font-medium text-muted-foreground">
              <div className="flex items-center gap-2"><BarChart2 className="h-4 w-4" /> Area Chart</div>
              <div className="flex items-center gap-2">
                <button className="p-1 hover:text-foreground"><Copy className="h-4 w-4" /></button>
                <button className="rounded-md border bg-background px-2 py-1 text-xs shadow-sm hover:bg-accent text-foreground">View Code</button>
              </div>
            </div>
            <div className="rounded-xl border bg-card shadow-sm p-6 flex flex-col h-[350px]">
              <div className="mb-4">
                <h3 className="font-semibold text-lg">Area Chart</h3>
                <p className="text-sm text-muted-foreground">Showing total visitors for the last 6 months</p>
              </div>
              <div className="flex-1 w-full relative flex items-end">
                <svg viewBox="0 0 100 50" preserveAspectRatio="none" className="w-full h-full">
                  <path d="M0,35 C20,10 30,50 50,40 C70,30 80,15 100,25 L100,50 L0,50 Z" className="fill-blue-500/20 stroke-blue-500 stroke-1" />
                </svg>
              </div>
              <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-2 font-medium text-sm">
                  Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                </div>
                <div className="text-xs text-muted-foreground mt-1">January - June 2024</div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="space-y-4">
            <div className="flex items-center justify-between text-sm font-medium text-muted-foreground">
              <div className="flex items-center gap-2"><BarChart2 className="h-4 w-4" /> Area Chart</div>
              <div className="flex items-center gap-2">
                <button className="p-1 hover:text-foreground"><Copy className="h-4 w-4" /></button>
                <button className="rounded-md border bg-background px-2 py-1 text-xs shadow-sm hover:bg-accent text-foreground">View Code</button>
              </div>
            </div>
            <div className="rounded-xl border bg-card shadow-sm p-6 flex flex-col h-[350px]">
              <div className="mb-4">
                <h3 className="font-semibold text-lg">Area Chart - Linear</h3>
                <p className="text-sm text-muted-foreground">Showing total visitors for the last 6 months</p>
              </div>
              <div className="flex-1 w-full relative flex items-end">
                <svg viewBox="0 0 100 50" preserveAspectRatio="none" className="w-full h-full">
                  <path d="M0,35 L25,15 L50,45 L75,25 L100,20 L100,50 L0,50 Z" className="fill-blue-500/20 stroke-blue-500 stroke-1" />
                </svg>
              </div>
              <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-2 font-medium text-sm">
                  Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                </div>
                <div className="text-xs text-muted-foreground mt-1">January - June 2024</div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="space-y-4">
            <div className="flex items-center justify-between text-sm font-medium text-muted-foreground">
              <div className="flex items-center gap-2"><BarChart2 className="h-4 w-4" /> Area Chart</div>
              <div className="flex items-center gap-2">
                <button className="p-1 hover:text-foreground"><Copy className="h-4 w-4" /></button>
                <button className="rounded-md border bg-background px-2 py-1 text-xs shadow-sm hover:bg-accent text-foreground">View Code</button>
              </div>
            </div>
            <div className="rounded-xl border bg-card shadow-sm p-6 flex flex-col h-[350px]">
              <div className="mb-4">
                <h3 className="font-semibold text-lg">Area Chart - Step</h3>
                <p className="text-sm text-muted-foreground">Showing total visitors for the last 6 months</p>
              </div>
              <div className="flex-1 w-full relative flex items-end">
                <svg viewBox="0 0 100 50" preserveAspectRatio="none" className="w-full h-full">
                  <path d="M0,35 L16.6,35 L16.6,15 L33.3,15 L33.3,25 L50,25 L50,45 L66.6,45 L66.6,30 L83.3,30 L83.3,20 L100,20 L100,50 L0,50 Z" className="fill-blue-500/20 stroke-blue-500 stroke-1" />
                </svg>
              </div>
              <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-2 font-medium text-sm">
                  Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                </div>
                <div className="text-xs text-muted-foreground mt-1">January - June 2024</div>
              </div>
            </div>
          </div>

        </div>

        {/* 3 Grid Charts Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Card 4 */}
          <div className="space-y-4">
            <div className="flex items-center justify-between text-sm font-medium text-muted-foreground">
              <div className="flex items-center gap-2"><BarChart2 className="h-4 w-4" /> Area Chart</div>
              <div className="flex items-center gap-2">
                <button className="p-1 hover:text-foreground"><Copy className="h-4 w-4" /></button>
                <button className="rounded-md border bg-background px-2 py-1 text-xs shadow-sm hover:bg-accent text-foreground">View Code</button>
              </div>
            </div>
            <div className="rounded-xl border bg-card shadow-sm p-6 flex flex-col h-[350px]">
              <div className="mb-4">
                <h3 className="font-semibold text-lg">Area Chart - Legend</h3>
                <p className="text-sm text-muted-foreground">Showing total visitors for the last 6 months</p>
              </div>
              <div className="flex-1 w-full relative flex items-end">
                <svg viewBox="0 0 100 50" preserveAspectRatio="none" className="w-full h-full">
                  <path d="M0,45 C20,20 30,50 50,40 C70,30 80,15 100,25 L100,50 L0,50 Z" className="fill-blue-100 dark:fill-blue-900/40 stroke-blue-300 dark:stroke-blue-700 stroke-1" />
                  <path d="M0,50 C20,30 30,55 50,45 C70,35 80,25 100,30 L100,50 L0,50 Z" className="fill-blue-500/40 stroke-blue-500 stroke-1" />
                </svg>
              </div>
              <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
              </div>
              <div className="flex items-center justify-center gap-4 mt-4 text-xs font-medium">
                <div className="flex items-center gap-1"><div className="h-2 w-2 rounded-sm bg-blue-300"></div> Desktop</div>
                <div className="flex items-center gap-1"><div className="h-2 w-2 rounded-sm bg-blue-500"></div> Mobile</div>
              </div>
              <div className="mt-4 border-t pt-4">
                <div className="flex items-center gap-2 font-medium text-sm">
                  Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                </div>
                <div className="text-xs text-muted-foreground mt-1">January - June 2024</div>
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="space-y-4">
            <div className="flex items-center justify-between text-sm font-medium text-muted-foreground">
              <div className="flex items-center gap-2"><BarChart2 className="h-4 w-4" /> Area Chart</div>
              <div className="flex items-center gap-2">
                <button className="p-1 hover:text-foreground"><Copy className="h-4 w-4" /></button>
                <button className="rounded-md border bg-background px-2 py-1 text-xs shadow-sm hover:bg-accent text-foreground">View Code</button>
              </div>
            </div>
            <div className="rounded-xl border bg-card shadow-sm p-6 flex flex-col h-[350px]">
              <div className="mb-4">
                <h3 className="font-semibold text-lg">Area Chart - Stacked</h3>
                <p className="text-sm text-muted-foreground">Showing total visitors for the last 6 months</p>
              </div>
              <div className="flex-1 w-full relative flex items-end">
                <svg viewBox="0 0 100 50" preserveAspectRatio="none" className="w-full h-full">
                  <path d="M0,35 C20,10 30,40 50,30 C70,20 80,15 100,25 L100,50 L0,50 Z" className="fill-blue-200 dark:fill-blue-900/50 stroke-blue-300 dark:stroke-blue-700 stroke-1" />
                  <path d="M0,50 C20,25 30,50 50,40 C70,30 80,35 100,45 L100,50 L0,50 Z" className="fill-blue-500/40 stroke-blue-500 stroke-1" />
                </svg>
              </div>
              <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-2 font-medium text-sm">
                  Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                </div>
                <div className="text-xs text-muted-foreground mt-1">January - June 2024</div>
              </div>
            </div>
          </div>

          {/* Card 6 */}
          <div className="space-y-4">
            <div className="flex items-center justify-between text-sm font-medium text-muted-foreground">
              <div className="flex items-center gap-2"><BarChart2 className="h-4 w-4" /> Area Chart</div>
              <div className="flex items-center gap-2">
                <button className="p-1 hover:text-foreground"><Copy className="h-4 w-4" /></button>
                <button className="rounded-md border bg-background px-2 py-1 text-xs shadow-sm hover:bg-accent text-foreground">View Code</button>
              </div>
            </div>
            <div className="rounded-xl border bg-card shadow-sm p-6 flex flex-col h-[350px]">
              <div className="mb-4">
                <h3 className="font-semibold text-lg">Area Chart - Stacked Expanded</h3>
                <p className="text-sm text-muted-foreground">Showing total visitors for the last 6 months</p>
              </div>
              <div className="flex-1 w-full relative flex items-end bg-blue-100 dark:bg-blue-950/20 rounded-md overflow-hidden">
                <svg viewBox="0 0 100 50" preserveAspectRatio="none" className="w-full h-full">
                  <path d="M0,50 L0,35 C20,40 30,10 50,25 C70,40 80,25 100,10 L100,50 Z" className="fill-blue-500/40 stroke-blue-500 stroke-1" />
                  <path d="M0,35 C20,40 30,10 50,25 C70,40 80,25 100,10" className="fill-none stroke-blue-600 dark:stroke-blue-400 stroke-1" />
                </svg>
              </div>
              <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-2 font-medium text-sm">
                  Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                </div>
                <div className="text-xs text-muted-foreground mt-1">January - June 2024</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
