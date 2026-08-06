import { Menu, Type, Maximize2, ArrowLeftRight, WrapText, Heading1, CaseSensitive, MoveVertical, AlignJustify, Shuffle, Download } from "lucide-react";

function SettingItem({ label, value, icon: Icon }: { label: string, value?: string, icon: any }) {
  return (
    <div className="flex items-center justify-between p-4 border-b border-white/10 hover:bg-white/5 cursor-pointer transition-colors">
      <div className="flex flex-col gap-1">
        <span className="text-xs text-white/60 font-medium">{label}</span>
        {value && <span className="text-sm font-medium">{value}</span>}
      </div>
      <Icon className="h-4 w-4 text-white/60" />
    </div>
  )
}

export default function TypesetPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-[1400px]">
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Left Sidebar (Settings) */}
        <aside className="w-full lg:w-72 shrink-0 bg-[#252525] text-white rounded-xl overflow-hidden shadow-xl sticky top-24 flex flex-col">
          <div className="flex items-center justify-between p-4 border-b border-white/10 hover:bg-white/5 cursor-pointer">
            <span className="text-sm font-medium">Menu</span>
            <Menu className="h-4 w-4 text-white/60" />
          </div>
          
          <div className="flex flex-col">
            <SettingItem label="Measure" value="80ch" icon={ArrowLeftRight} />
            <SettingItem label="Heading" value="Geist" icon={CaseSensitive} />
            <SettingItem label="Body" value="Geist" icon={CaseSensitive} />
            <SettingItem label="Mono" value="Geist Mono" icon={CaseSensitive} />
            <SettingItem label="Size" value="15px" icon={Type} />
            <SettingItem label="Leading" value="Regular (1.75)" icon={MoveVertical} />
            <SettingItem label="Flow" value="Regular (1.25em)" icon={AlignJustify} />
          </div>

          <div className="p-4 flex flex-col gap-3">
            <button className="w-full py-2.5 rounded-lg border border-white/20 hover:bg-white/10 text-sm font-medium transition-colors flex items-center justify-center gap-2">
              <Shuffle className="h-4 w-4" /> Shuffle
            </button>
            <button className="w-full py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-sm font-medium transition-colors flex items-center justify-center gap-2">
              Get Code
            </button>
          </div>
        </aside>
        
        {/* Right Content Area (Preview) */}
        <main className="flex-1 w-full bg-card border rounded-xl shadow-sm min-h-[800px] relative">
           
           <div className="p-8 md:p-16 lg:px-24 max-w-4xl mx-auto prose prose-slate dark:prose-invert">
              <h1 className="text-4xl font-bold tracking-tight mb-8">Building a Streaming Chatbot</h1>
              
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                The <code className="bg-muted px-1.5 py-0.5 rounded text-sm">useChat</code> hook makes it effortless to create a conversational user interface for your chatbot application. It enables the streaming of chat messages from your AI provider, manages the chat state, and updates the UI automatically as new messages arrive.
              </p>
              
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                To summarize, the <code className="bg-muted px-1.5 py-0.5 rounded text-sm">useChat</code> hook provides the following features:
              </p>

              <ul className="space-y-4 text-lg text-muted-foreground list-disc pl-6 mb-8">
                <li><strong className="text-foreground font-semibold">Message Streaming:</strong> All the messages from the AI provider are streamed to the chat UI in real-time.</li>
                <li><strong className="text-foreground font-semibold">Managed States:</strong> The hook manages the states for input, messages, status, error and more for you.</li>
                <li><strong className="text-foreground font-semibold">Seamless Integration:</strong> Easily integrate your chat AI into any design or layout with minimal effort.</li>
              </ul>

              <p className="text-lg leading-relaxed text-muted-foreground">
                In this guide, you will learn how to use the <code className="bg-muted px-1.5 py-0.5 rounded text-sm">useChat</code> hook to create a chatbot application with real-time message streaming. Check out our <a href="#" className="underline font-medium text-foreground">chatbot with tools guide</a> to learn how to use tools in your chatbot.
              </p>
           </div>
           
           {/* Floating Bottom Nav */}
           <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-[#2C2C2C] text-white px-3 py-2 rounded-full text-sm font-medium shadow-2xl border border-white/10 z-10">
             <button className="h-7 w-7 rounded-full bg-white/20 flex items-center justify-center">01</button>
             <button className="h-7 w-7 rounded-full hover:bg-white/10 flex items-center justify-center text-white/70 transition-colors">02</button>
             <button className="h-7 w-7 rounded-full hover:bg-white/10 flex items-center justify-center text-white/70 transition-colors">03</button>
             <button className="h-7 w-7 rounded-full hover:bg-white/10 flex items-center justify-center text-white/70 transition-colors">04</button>
             <button className="h-7 w-7 rounded-full hover:bg-white/10 flex items-center justify-center text-white/70 transition-colors">05</button>
             <div className="w-px h-4 bg-white/20 mx-2"></div>
             <button className="hover:text-white/90 px-2 transition-colors rounded-full hover:bg-white/10 py-1">Open in New Tab</button>
           </div>
        </main>
      </div>
    </div>
  )
}
