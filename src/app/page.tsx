import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex-1">
      <main className="container mx-auto px-4 pt-24 pb-8 flex flex-col items-center max-w-[64rem] text-center">
        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 mb-6">
          <Link href="/docs/installation" className="flex items-center gap-2">
            New Questionnaire component <span className="ml-1">&rarr;</span>
          </Link>
        </div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-6">
          The Foundation for your Design System
        </h1>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8 mb-8">
          A set of beautifully designed components that you can customize, extend,
          and build on. Start here then make it your own. Open Source. Open Code.
        </p>
        <div className="space-x-4">
          <Link href="/docs/installation">
            <Button size="lg" className="rounded-full">
              Build Your Own <span className="ml-2">&rarr;</span>
            </Button>
          </Link>
        </div>
      </main>

      <section className="container mx-auto px-4 py-8 md:py-12 lg:py-24 max-w-[1200px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Form mock */}
          <div className="rounded-xl border bg-card text-card-foreground shadow">
            <div className="p-6 flex flex-col gap-6">
              <div className="flex gap-2">
                <Button size="sm" className="rounded-full">Button &rarr;</Button>
                <Button size="sm" variant="secondary" className="rounded-full">Secondary</Button>
                <Button size="sm" variant="outline" className="rounded-full">Outline</Button>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <input className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" placeholder="Name" />
                </div>
                <div className="space-y-2">
                  <textarea className="flex min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" placeholder="Message" />
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">Badge</div>
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">Secondary</div>
                <div className="ml-auto flex gap-2">
                  <div className="w-4 h-4 rounded-full border-2 border-primary"></div>
                  <div className="w-4 h-4 rounded-full bg-primary/20"></div>
                  <div className="w-8 h-4 rounded-full bg-primary flex items-center justify-end px-0.5"><div className="w-3 h-3 bg-background rounded-full"></div></div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Chart mock */}
          <div className="rounded-xl border bg-card text-card-foreground shadow">
            <div className="p-6">
              <h3 className="font-semibold leading-none tracking-tight mb-2">Contribution History</h3>
              <p className="text-sm text-muted-foreground mb-6">Last 6 months of activity</p>
              <div className="flex items-end justify-between h-[200px] gap-2 pt-4">
                <div className="w-full bg-primary/20 rounded-sm h-[60%] hover:bg-primary/40 transition-colors"></div>
                <div className="w-full bg-primary/20 rounded-sm h-[80%] hover:bg-primary/40 transition-colors"></div>
                <div className="w-full bg-primary/20 rounded-sm h-[40%] hover:bg-primary/40 transition-colors"></div>
                <div className="w-full bg-primary/20 rounded-sm h-[90%] hover:bg-primary/40 transition-colors"></div>
                <div className="w-full bg-primary/20 rounded-sm h-[50%] hover:bg-primary/40 transition-colors"></div>
              </div>
              <div className="flex justify-between mt-4 text-xs text-muted-foreground px-2">
                <span>Dec</span><span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span>
              </div>
            </div>
          </div>

          {/* Card 3: QR Code mock */}
          <div className="rounded-xl border bg-card text-card-foreground shadow flex flex-col items-center justify-center p-6 text-center">
            <div className="bg-white p-4 rounded-xl mb-6">
              {/* Simple CSS Grid based QR Code mockup */}
              <div className="w-40 h-40 grid grid-cols-5 grid-rows-5 gap-1 bg-white">
                <div className="col-span-2 row-span-2 bg-black rounded-sm border-4 border-white ring-4 ring-black"></div>
                <div className="col-span-2 row-span-2 col-start-4 bg-black rounded-sm border-4 border-white ring-4 ring-black"></div>
                <div className="col-span-2 row-span-2 row-start-4 bg-black rounded-sm border-4 border-white ring-4 ring-black"></div>
                
                <div className="col-start-3 row-start-1 bg-black"></div>
                <div className="col-start-3 row-start-2 bg-black"></div>
                <div className="col-start-3 row-start-3 bg-black"></div>
                <div className="col-start-1 row-start-3 bg-black"></div>
                <div className="col-start-2 row-start-3 bg-black"></div>
                <div className="col-start-4 row-start-3 bg-black"></div>
                <div className="col-start-5 row-start-3 bg-black"></div>
                
                <div className="col-start-4 row-start-4 bg-black"></div>
                <div className="col-start-4 row-start-5 bg-black"></div>
                <div className="col-start-5 row-start-5 bg-black"></div>
                <div className="col-start-3 row-start-5 bg-black"></div>
                <div className="col-start-3 row-start-4 bg-black"></div>
              </div>
            </div>
            <p className="text-sm font-medium">Scan to connect your mobile device</p>
          </div>
        </div>
      </section>
    </div>
  );
}
