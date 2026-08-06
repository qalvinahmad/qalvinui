import { Menu, Type, Maximize2, PaintBucket, Palette, Shuffle, Terminal, Search, User, Bell, ChevronDown, Check, Settings, Copy, Info, Trash, Upload, ShoppingCart, Minus, Plus, ArrowLeft, ArrowRight, X } from "lucide-react";

function SettingItem({ label, value, icon: Icon }: { label: string, value?: string, icon: any }) {
  return (
    <div className="flex items-center justify-between p-4 border-b border-white/10 hover:bg-white/5 cursor-pointer transition-colors">
      <div className="flex flex-col gap-1">
        <span className="text-xs text-white/60 font-medium">{label}</span>
        {value && <span className="text-sm font-medium">{value}</span>}
      </div>
      {Icon && <Icon className="h-4 w-4 text-white/60" />}
      {!Icon && <div className="h-4 w-4 rounded-full border border-white/40 bg-transparent"></div>}
    </div>
  )
}

function ColorBox({ label }: { label: string }) {
  return (
    <div className="flex flex-col gap-2 items-center">
      <div className="h-10 w-10 rounded-md border border-border shadow-sm bg-background"></div>
      <span className="text-[10px] text-muted-foreground font-mono">{label}</span>
    </div>
  )
}

function ColorBoxFilled({ label, bg }: { label: string, bg: string }) {
  return (
    <div className="flex flex-col gap-2 items-center">
      <div className="h-10 w-10 rounded-md shadow-sm border border-border" style={{ backgroundColor: bg }}></div>
      <span className="text-[10px] text-muted-foreground font-mono">{label}</span>
    </div>
  )
}

export default function CreatePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-[1600px]">
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Left Sidebar (Settings) */}
        <aside className="w-full lg:w-72 shrink-0 bg-[#252525] text-white rounded-xl overflow-hidden shadow-xl sticky top-24 flex flex-col z-20">
          <div className="flex items-center justify-between p-4 border-b border-white/10 hover:bg-white/5 cursor-pointer">
            <span className="text-sm font-medium">Menu</span>
            <Menu className="h-4 w-4 text-white/60" />
          </div>
          
          <div className="flex flex-col">
            <SettingItem label="Style" value="Nova" icon={null} />
            <SettingItem label="Base Color" value="Neutral" icon={null} />
            <SettingItem label="Theme" value="Neutral" icon={null} />
            <SettingItem label="Chart Color" value="Neutral" icon={null} />
            <SettingItem label="Heading" value="Inter" icon={Type} />
          </div>

          <div className="p-4 flex flex-col gap-3">
            <button className="w-full py-2.5 rounded-lg border border-white/20 hover:bg-white/10 text-sm font-medium transition-colors flex items-center justify-center gap-2">
              --preset b0
            </button>
            <button className="w-full py-2.5 rounded-lg border border-white/20 hover:bg-white/10 text-sm font-medium transition-colors flex items-center justify-center gap-2">
              Open Preset
            </button>
            <button className="w-full py-2.5 rounded-lg border border-white/20 hover:bg-white/10 text-sm font-medium transition-colors flex items-center justify-center gap-2">
              Shuffle
            </button>
            <button className="w-full py-2.5 rounded-lg bg-white text-black hover:bg-white/90 text-sm font-medium transition-colors flex items-center justify-center gap-2 mt-2">
              Get Code
            </button>
          </div>
        </aside>
        
        {/* Right Content Area (Masonry/Grid) */}
        <main className="flex-1 w-full relative">
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Column 1 */}
              <div className="flex flex-col gap-6">
                
                {/* Nova - Inter Card */}
                <div className="rounded-xl border bg-card p-6 shadow-sm">
                  <h2 className="text-2xl font-bold tracking-tight mb-2">Nova - Inter</h2>
                  <p className="text-sm text-muted-foreground mb-6">Designers love packing quirky glyphs into test phrases. This is a preview of the typography...</p>
                  
                  <div className="flex flex-wrap gap-4 mb-6">
                    <ColorBoxFilled label="--background" bg="hsl(var(--background))" />
                    <ColorBoxFilled label="--foreground" bg="hsl(var(--foreground))" />
                    <ColorBoxFilled label="--primary" bg="hsl(var(--primary))" />
                    <ColorBox label="--secondary" />
                    <ColorBox label="--muted" />
                    <ColorBox label="--accent" />
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <ColorBoxFilled label="--border" bg="hsl(var(--border))" />
                    <ColorBoxFilled label="--chart-1" bg="#e4e4e7" />
                    <ColorBoxFilled label="--chart-2" bg="#71717a" />
                    <ColorBoxFilled label="--chart-3" bg="#52525b" />
                    <ColorBoxFilled label="--chart-4" bg="#3f3f46" />
                    <ColorBoxFilled label="--chart-5" bg="#27272a" />
                  </div>
                </div>

                {/* Typography Card */}
                <div className="rounded-xl border bg-card p-6 shadow-sm">
                  <div className="text-[10px] font-semibold tracking-wider text-muted-foreground uppercase mb-2">INHERIT - INTER</div>
                  <h3 className="text-2xl font-bold leading-tight mb-4">Designing with rhythm and hierarchy.</h3>
                  <p className="text-sm text-muted-foreground mb-4">A strong body style keeps long-form content readable and balances the visual weight of headings.</p>
                  <p className="text-sm text-muted-foreground">Thoughtful spacing and cadence help paragraphs scan quickly without feeling dense.</p>
                </div>

                {/* Contribution History Card */}
                <div className="rounded-xl border bg-card p-6 shadow-sm mt-2">
                  <h3 className="font-semibold mb-1">Contribution History</h3>
                  <p className="text-sm text-muted-foreground mb-6">Last 6 months of activity</p>
                  
                  <div className="h-40 w-full flex items-end gap-2 mb-6 relative">
                    {/* Dummy bar chart */}
                    <div className="flex-1 bg-muted rounded-t-sm h-[40%]"></div>
                    <div className="flex-1 bg-muted rounded-t-sm h-[60%]"></div>
                    <div className="flex-1 bg-muted rounded-t-sm h-[45%]"></div>
                    <div className="flex-1 bg-muted rounded-t-sm h-[75%] relative">
                       {/* Tooltip */}
                       <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-popover text-popover-foreground text-xs rounded-md shadow-md py-1 px-2 flex items-center gap-2 z-10 whitespace-nowrap border">
                         <div className="h-2 w-2 bg-foreground rounded-sm"></div> Contribution <b>1,400</b>
                       </div>
                    </div>
                    <div className="flex-1 bg-muted rounded-t-sm h-[30%]"></div>
                    <div className="flex-1 bg-muted rounded-t-sm h-[85%]"></div>
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground px-2 mb-8">
                    <span>Dec</span><span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="rounded-lg bg-muted/50 p-4">
                      <div className="text-[10px] font-bold text-muted-foreground uppercase mb-1">Upcoming</div>
                      <div className="font-semibold text-sm">May 25, 2024</div>
                      <div className="text-xs text-muted-foreground mt-1">$1,000 scheduled</div>
                    </div>
                    <div className="rounded-lg bg-muted/50 p-4">
                      <div className="text-[10px] font-bold text-muted-foreground uppercase mb-1">Auto-save plan</div>
                      <div className="font-semibold text-sm">Accelerated</div>
                      <div className="text-xs text-muted-foreground mt-1">Recurring weekly</div>
                    </div>
                  </div>

                  <button className="w-full py-2.5 bg-foreground text-background rounded-md text-sm font-medium hover:bg-foreground/90">
                    View Full Report
                  </button>
                </div>
              </div>

              {/* Column 2 */}
              <div className="flex flex-col gap-6">
                
                {/* Toolbar */}
                <div className="rounded-xl border bg-card p-4 shadow-sm flex flex-wrap gap-2 justify-center">
                  {[Copy, Info, Trash, Upload, ShoppingCart, Minus, ArrowLeft, ArrowRight, Check, ChevronDown, ChevronDown, Search, Settings].map((Icon, i) => (
                    <button key={i} className="h-10 w-10 flex items-center justify-center rounded-md border bg-background hover:bg-muted text-foreground shadow-sm">
                      <Icon className="h-4 w-4" />
                    </button>
                  ))}
                  <button className="h-10 w-10 flex items-center justify-center rounded-md border border-dashed bg-background hover:bg-muted text-foreground shadow-sm">
                    <Plus className="h-4 w-4" />
                  </button>
                </div>

                {/* Interactive Controls */}
                <div className="rounded-xl border bg-card p-6 shadow-sm flex flex-col gap-6">
                  
                  <div className="flex flex-wrap gap-2">
                    <button className="px-4 py-2 bg-foreground text-background rounded-md text-sm font-medium">Button</button>
                    <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md text-sm font-medium">Secondary</button>
                    <button className="px-4 py-2 border rounded-md text-sm font-medium hover:bg-muted">Outline</button>
                    <button className="px-4 py-2 rounded-md text-sm font-medium hover:bg-muted">Ghost</button>
                  </div>

                  <div className="rounded-lg border p-4 flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-sm">Two-factor authentication</h4>
                      <p className="text-xs text-muted-foreground mt-1">Verify via email or phone number.</p>
                    </div>
                    <button className="px-3 py-1.5 bg-secondary text-secondary-foreground rounded-md text-xs font-medium">Enable</button>
                  </div>

                  {/* Slider */}
                  <div className="pt-2">
                    <div className="h-2 w-full bg-muted rounded-full relative">
                      <div className="absolute left-0 top-0 h-full w-[60%] bg-foreground rounded-full"></div>
                      <div className="absolute left-[60%] top-1/2 -translate-y-1/2 h-4 w-4 bg-background border-2 border-foreground rounded-full shadow"></div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="relative">
                      <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <input type="text" placeholder="Name" className="w-full h-10 px-3 py-2 rounded-md border text-sm focus:outline-none focus:ring-1 focus:ring-foreground" />
                    </div>
                    <textarea placeholder="Message" className="w-full h-24 px-3 py-2 rounded-md border text-sm focus:outline-none focus:ring-1 focus:ring-foreground resize-none"></textarea>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 bg-foreground text-background text-xs font-semibold rounded-full">Badge</span>
                    <span className="px-2.5 py-0.5 bg-secondary text-secondary-foreground text-xs font-semibold rounded-full">Secondary</span>
                    <span className="px-2.5 py-0.5 border text-foreground text-xs font-semibold rounded-full">Outline</span>
                    <div className="ml-auto flex items-center gap-2">
                      <div className="h-4 w-4 rounded-full border-4 border-foreground"></div>
                      <div className="h-4 w-4 rounded-full border border-muted bg-background"></div>
                      <div className="h-4 w-4 rounded bg-foreground flex items-center justify-center"><Check className="h-3 w-3 text-background" /></div>
                      <div className="h-4 w-4 rounded border"></div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div className="flex gap-2">
                      <button className="px-3 py-1.5 border rounded-md text-xs font-medium hover:bg-muted">Alert Dialog</button>
                      <button className="px-3 py-1.5 border rounded-md text-xs font-medium hover:bg-muted flex items-center gap-2">Button Group <ChevronDown className="h-3 w-3" /></button>
                    </div>
                    <div className="w-9 h-5 bg-foreground rounded-full relative cursor-pointer">
                      <div className="h-4 w-4 bg-background rounded-full absolute right-0.5 top-0.5 shadow-sm"></div>
                    </div>
                  </div>

                </div>

                {/* Payout Threshold Card */}
                <div className="rounded-xl border bg-card p-6 shadow-sm mt-2 relative">
                  <button className="absolute top-4 right-4 text-muted-foreground hover:bg-muted p-1 rounded-sm"><X className="h-4 w-4" /></button>
                  <h3 className="font-semibold mb-1">Payout Threshold</h3>
                  <p className="text-sm text-muted-foreground mb-6 max-w-[90%]">Set the minimum balance required before a payout is triggered.</p>
                  
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Preferred Currency</label>
                      <button className="w-full flex items-center justify-between border rounded-md px-3 py-2 text-sm bg-background">
                        USD — United States Dollar <ChevronDown className="h-4 w-4 text-muted-foreground" />
                      </button>
                    </div>

                    <div className="space-y-4">
                      <div className="flex justify-between items-end">
                        <label className="text-sm font-medium">Minimum Payout Amount</label>
                        <span className="text-2xl font-bold">$2500.00</span>
                      </div>
                      <div className="h-2 w-full bg-muted rounded-full relative">
                        <div className="absolute left-0 top-0 h-full w-[25%] bg-foreground rounded-full"></div>
                        <div className="absolute left-[25%] top-1/2 -translate-y-1/2 h-4 w-4 bg-background border-2 border-foreground rounded-full shadow"></div>
                      </div>
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>$50 (MIN)</span>
                        <span>$10,000 (MAX)</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Notes</label>
                      <textarea placeholder="Add any notes for this payout configuration..." className="w-full h-24 px-3 py-2 rounded-md border text-sm focus:outline-none focus:ring-1 focus:ring-foreground resize-none"></textarea>
                    </div>

                    <button className="w-full py-2.5 bg-foreground text-background rounded-md text-sm font-medium hover:bg-foreground/90">
                      Save Threshold
                    </button>
                  </div>
                </div>

              </div>

              {/* Column 3 */}
              <div className="flex flex-col gap-6">
                
                {/* Environment Variables */}
                <div className="rounded-xl border bg-card p-6 shadow-sm">
                  <h3 className="font-semibold mb-1">Environment Variables</h3>
                  <p className="text-sm text-muted-foreground mb-4">Production • 8 variables</p>
                  
                  <div className="space-y-2 mb-6 font-mono text-xs">
                    <div className="px-3 py-2 border rounded-md bg-muted/30">DATABASE_URL</div>
                    <div className="px-3 py-2 border rounded-md bg-muted/30">NEXT_PUBLIC_APP_URL</div>
                    <div className="px-3 py-2 border rounded-md bg-muted/30">STRIPE_SECRET_KEY</div>
                  </div>
                  
                  <button className="px-4 py-2 border rounded-md text-sm font-medium hover:bg-muted">Edit</button>
                </div>

                {/* Traffic Channel */}
                <div className="rounded-xl border bg-card p-6 shadow-sm">
                  <h3 className="font-semibold mb-1">Traffic channel</h3>
                  <p className="text-sm text-muted-foreground mb-6">Monthly desktop vs mobile visitors across 3 months—comparing performance.</p>
                  
                  <div className="h-32 w-full flex items-end gap-2">
                    <div className="flex-1 flex gap-1 justify-center items-end">
                      <div className="w-4 bg-muted h-[40%] rounded-sm"></div>
                      <div className="w-4 bg-foreground h-[60%] rounded-sm"></div>
                    </div>
                    <div className="flex-1 flex gap-1 justify-center items-end">
                      <div className="w-4 bg-muted h-[60%] rounded-sm"></div>
                      <div className="w-4 bg-foreground h-[80%] rounded-sm"></div>
                    </div>
                    <div className="flex-1 flex gap-1 justify-center items-end">
                      <div className="w-4 bg-muted h-[50%] rounded-sm"></div>
                      <div className="w-4 bg-foreground h-[70%] rounded-sm"></div>
                    </div>
                  </div>
                  <div className="border-t border-dashed mt-2 pt-4 flex justify-center">
                    <div className="inline-flex rounded-full bg-foreground text-background text-xs font-medium p-1">
                      <span className="px-3 py-1 rounded-full bg-background/20">01</span>
                      <span className="px-3 py-1 rounded-full text-background/60">02</span>
                    </div>
                  </div>
                </div>
                
                {/* Savings Target */}
                <div className="rounded-xl border bg-card p-6 shadow-sm">
                  <h3 className="font-semibold mb-1">Savings Target</h3>
                  <p className="text-sm text-muted-foreground mb-6">Active milestone tracking</p>
                  
                  <div className="space-y-6">
                    <div>
                      <div className="text-[10px] font-bold text-muted-foreground uppercase mb-1">RETIREMENT</div>
                      <div className="text-3xl font-bold mb-2">$420,000</div>
                      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-foreground w-[65%]"></div>
                      </div>
                      <div className="text-xs text-muted-foreground mt-2">65% achieved</div>
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-muted-foreground uppercase mb-1">REAL ESTATE</div>
                      <div className="text-3xl font-bold mb-2">$85,000</div>
                      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-foreground w-[32%]"></div>
                      </div>
                      <div className="text-xs text-muted-foreground mt-2">32% achieved</div>
                    </div>
                  </div>
                </div>

              </div>
           </div>
        </main>
      </div>
    </div>
  )
}
