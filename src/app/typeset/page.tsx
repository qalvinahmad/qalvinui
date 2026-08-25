"use client";

import { useState } from "react";
import {
  Menu,
  Type,
  ArrowLeftRight,
  CaseSensitive,
  MoveVertical,
  AlignJustify,
  Shuffle,
  Copy,
  Check,
} from "lucide-react";

const fontFamilies = {
  heading: [
    { name: "Geist", value: "'Geist', sans-serif" },
    { name: "Playfair Display", value: "'Playfair Display', serif" },
    { name: "Cinzel", value: "'Cinzel', serif" },
    { name: "Plus Jakarta Sans", value: "'Plus Jakarta Sans', sans-serif" },
    { name: "Inter", value: "'Inter', sans-serif" },
    { name: "Outfit", value: "'Outfit', sans-serif" },
    { name: "Space Grotesk", value: "'Space Grotesk', sans-serif" },
    { name: "Syne", value: "'Syne', sans-serif" },
    { name: "Lora", value: "'Lora', serif" },
    { name: "Roboto", value: "'Roboto', sans-serif" },
    { name: "Open Sans", value: "'Open Sans', sans-serif" },
    { name: "Lato", value: "'Lato', sans-serif" },
  ],
  body: [
    { name: "Geist", value: "'Geist', sans-serif" },
    { name: "Inter", value: "'Inter', sans-serif" },
    { name: "Plus Jakarta Sans", value: "'Plus Jakarta Sans', sans-serif" },
    { name: "Lora", value: "'Lora', serif" },
    { name: "Merriweather", value: "'Merriweather', serif" },
    { name: "Roboto", value: "'Roboto', sans-serif" },
    { name: "Open Sans", value: "'Open Sans', sans-serif" },
    { name: "Lato", value: "'Lato', sans-serif" },
    { name: "Poppins", value: "'Poppins', sans-serif" },
  ],
  mono: [
    { name: "Geist Mono", value: "'Geist Mono', monospace" },
    { name: "JetBrains Mono", value: "'JetBrains Mono', monospace" },
    { name: "Fira Code", value: "'Fira Code', monospace" },
    { name: "Source Code Pro", value: "'Source Code Pro', monospace" },
    { name: "Space Mono", value: "'Space Mono', monospace" },
    { name: "IBM Plex Mono", value: "'IBM Plex Mono', monospace" },
  ],
};

const measures = ["65ch", "70ch", "75ch", "80ch", "85ch"];
const sizes = ["14px", "15px", "16px", "17px", "18px", "20px"];
const leadings = ["Tight (1.5)", "Regular (1.75)", "Relaxed (2.0)", "Loose (2.2)"];
const leadingMap: Record<string, string> = {
  "Tight (1.5)": "1.5",
  "Regular (1.75)": "1.75",
  "Relaxed (2.0)": "2.0",
  "Loose (2.2)": "2.2",
};

const flows = ["Tight (1.125em)", "Regular (1.25em)", "Relaxed (1.5em)", "Spacious (1.75em)"];
const flowMap: Record<string, string> = {
  "Tight (1.125em)": "1.125em",
  "Regular (1.25em)": "1.25em",
  "Relaxed (1.5em)": "1.5em",
  "Spacious (1.75em)": "1.75em",
};

function SettingRow({
  label,
  value,
  icon: Icon,
  onClick,
}: {
  label: string;
  value?: string;
  icon: any;
  onClick?: () => void;
}) {
  return (
    <div
      onClick={onClick}
      role="button"
      tabIndex={0}
      className="flex items-center justify-between p-4 border-b border-white/10 hover:bg-white/5 cursor-pointer transition-colors select-none text-left w-full"
    >
      <div className="flex flex-col gap-0.5 min-w-0">
        <span className="text-xs text-white/60 font-medium">{label}</span>
        {value && <span className="text-sm font-semibold text-white truncate">{value}</span>}
      </div>
      <Icon className="h-4 w-4 text-white/60 shrink-0 ml-2" />
    </div>
  );
}

export default function TypesetPage() {
  const [measure, setMeasure] = useState("80ch");
  const [heading, setHeading] = useState("Geist");
  const [body, setBody] = useState("Geist");
  const [mono, setMono] = useState("Geist Mono");
  const [size, setSize] = useState("16px");
  const [leading, setLeading] = useState("Regular (1.75)");
  const [flow, setFlow] = useState("Regular (1.25em)");
  const [activePage, setActivePage] = useState(1);
  const [copied, setCopied] = useState(false);

  const getHeadingFont = () => fontFamilies.heading.find((f) => f.name === heading)?.value || "'Geist', sans-serif";
  const getBodyFont = () => fontFamilies.body.find((f) => f.name === body)?.value || "'Geist', sans-serif";
  const getMonoFont = () => fontFamilies.mono.find((f) => f.name === mono)?.value || "'Geist Mono', monospace";

  const handleShuffle = () => {
    setMeasure(measures[Math.floor(Math.random() * measures.length)]);
    setHeading(fontFamilies.heading[Math.floor(Math.random() * fontFamilies.heading.length)].name);
    setBody(fontFamilies.body[Math.floor(Math.random() * fontFamilies.body.length)].name);
    setMono(fontFamilies.mono[Math.floor(Math.random() * fontFamilies.mono.length)].name);
    setSize(sizes[Math.floor(Math.random() * sizes.length)]);
    setLeading(leadings[Math.floor(Math.random() * leadings.length)]);
    setFlow(flows[Math.floor(Math.random() * flows.length)]);
  };

  const handleGetCode = () => {
    const code = `// Typography Tokens
export const typography = {
  heading: "${heading}",
  body: "${body}",
  mono: "${mono}",
  fontSize: "${size}",
  lineHeight: "${leadingMap[leading] || '1.75'}",
  paragraphSpacing: "${flowMap[flow] || '1.25em'}",
  measure: "${measure}",
};

/* CSS Variables */
:root {
  --font-heading: ${getHeadingFont()};
  --font-body: ${getBodyFont()};
  --font-mono: ${getMonoFont()};
  --font-size: ${size};
  --line-height: ${leadingMap[leading] || '1.75'};
  --paragraph-spacing: ${flowMap[flow] || '1.25em'};
  --max-width: ${measure};
}`;

    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const pageContents = [
    {
      title: "Building a Streaming Chatbot",
      content: `The useChat hook makes it effortless to create a conversational user interface for your chatbot application. It enables the streaming of chat messages from your AI provider, manages the chat state, and updates the UI automatically as new messages arrive.`,
    },
    {
      title: "Getting Started with React & Modern Web",
      content: `React is a JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called components. React uses a declarative paradigm that makes it easier to reason about your application.`,
    },
    {
      title: "Modern CSS & Typography Systems",
      content: `CSS has evolved significantly over the years. With features like CSS Grid, Flexbox, Custom Properties, and Container Queries, we can now create complex layouts and responsive designs with less code and more flexibility.`,
    },
    {
      title: "TypeScript Best Practices for Scaling",
      content: `TypeScript adds static type checking to JavaScript. By using interfaces, generics, and utility types, you can catch errors early, improve code documentation, and enhance the developer experience with better autocompletion.`,
    },
    {
      title: "Performance Optimization at Scale",
      content: `Web performance is crucial for user experience. Techniques like code splitting, lazy loading, image optimization, and caching strategies can significantly improve your application's loading time and runtime performance.`,
    },
  ];

  const currentPageContent = pageContents[activePage - 1];

  return (
    <div className="container mx-auto px-4 py-8 max-w-[1400px]">
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Left Sidebar (Settings) */}
        <aside className="w-full lg:w-72 shrink-0 bg-[#252525] text-white rounded-2xl overflow-hidden shadow-xl lg:sticky lg:top-20 flex flex-col border border-neutral-800">
          <div className="flex items-center justify-between p-4 border-b border-white/10">
            <span className="text-sm font-semibold flex items-center gap-2">
              <Menu className="h-4 w-4 text-white/60" /> Typography Settings
            </span>
          </div>

          <div className="flex flex-col divide-y divide-white/5">
            <SettingRow
              label="Measure"
              value={measure}
              icon={ArrowLeftRight}
              onClick={() => {
                const nextIndex = (measures.indexOf(measure) + 1) % measures.length;
                setMeasure(measures[nextIndex]);
              }}
            />
            <SettingRow
              label="Heading"
              value={heading}
              icon={CaseSensitive}
              onClick={() => {
                const fontNames = fontFamilies.heading.map((f) => f.name);
                const nextIndex = (fontNames.indexOf(heading) + 1) % fontNames.length;
                setHeading(fontNames[nextIndex]);
              }}
            />
            <SettingRow
              label="Body"
              value={body}
              icon={CaseSensitive}
              onClick={() => {
                const fontNames = fontFamilies.body.map((f) => f.name);
                const nextIndex = (fontNames.indexOf(body) + 1) % fontNames.length;
                setBody(fontNames[nextIndex]);
              }}
            />
            <SettingRow
              label="Mono"
              value={mono}
              icon={CaseSensitive}
              onClick={() => {
                const fontNames = fontFamilies.mono.map((f) => f.name);
                const nextIndex = (fontNames.indexOf(mono) + 1) % fontNames.length;
                setMono(fontNames[nextIndex]);
              }}
            />
            <SettingRow
              label="Size"
              value={size}
              icon={Type}
              onClick={() => {
                const nextIndex = (sizes.indexOf(size) + 1) % sizes.length;
                setSize(sizes[nextIndex]);
              }}
            />
            <SettingRow
              label="Leading"
              value={leading}
              icon={MoveVertical}
              onClick={() => {
                const nextIndex = (leadings.indexOf(leading) + 1) % leadings.length;
                setLeading(leadings[nextIndex]);
              }}
            />
            <SettingRow
              label="Flow"
              value={flow}
              icon={AlignJustify}
              onClick={() => {
                const nextIndex = (flows.indexOf(flow) + 1) % flows.length;
                setFlow(flows[nextIndex]);
              }}
            />
          </div>

          <div className="p-4 flex flex-col gap-2.5 bg-[#1e1e1e] border-t border-white/10">
            <button
              onClick={handleShuffle}
              className="w-full py-2.5 rounded-xl border border-white/20 hover:bg-white/10 text-xs font-semibold text-white transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
            >
              <Shuffle className="h-4 w-4" /> Shuffle Typography
            </button>
            <button
              onClick={handleGetCode}
              className="w-full py-2.5 rounded-xl bg-primary text-primary-foreground hover:opacity-90 text-xs font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              {copied ? "Tokens Copied!" : "Get CSS Tokens"}
            </button>
          </div>
        </aside>

        {/* Right Content Area (Preview) */}
        <main className="flex-1 w-full min-w-0 bg-card border border-border rounded-2xl shadow-sm min-h-[750px] relative p-8 md:p-14 lg:p-20 overflow-hidden flex flex-col justify-between">
          <div
            className="w-full transition-all duration-150"
            style={{
              fontFamily: getBodyFont(),
              fontSize: size,
              lineHeight: leadingMap[leading] || "1.75",
              maxWidth: measure,
            }}
          >
            <h1
              className="text-4xl md:text-5xl font-bold tracking-tight mb-8 text-foreground transition-all"
              style={{
                fontFamily: getHeadingFont(),
              }}
            >
              {currentPageContent.title}
            </h1>

            <p className="text-muted-foreground" style={{ marginBottom: flowMap[flow] || "1.25em" }}>
              The{" "}
              <code
                className="bg-muted px-2 py-0.5 rounded-md font-mono text-sm border text-foreground"
                style={{ fontFamily: getMonoFont() }}
              >
                useChat
              </code>{" "}
              {currentPageContent.content}
            </p>

            <p className="text-muted-foreground" style={{ marginBottom: flowMap[flow] || "1.25em" }}>
              To summarize, the{" "}
              <code
                className="bg-muted px-2 py-0.5 rounded-md font-mono text-sm border text-foreground"
                style={{ fontFamily: getMonoFont() }}
              >
                useChat
              </code>{" "}
              hook provides the following core features:
            </p>

            <ul className="space-y-3.5 text-muted-foreground list-disc pl-6 mb-8">
              <li>
                <strong className="text-foreground font-semibold">Message Streaming:</strong> All the messages from the AI provider are streamed to the chat UI in real-time.
              </li>
              <li>
                <strong className="text-foreground font-semibold">Managed States:</strong> The hook manages the states for input, messages, status, error and more for you.
              </li>
              <li>
                <strong className="text-foreground font-semibold">Seamless Integration:</strong> Easily integrate your chat AI into any design or layout with minimal effort.
              </li>
            </ul>

            <p className="text-muted-foreground">
              In this guide, you will learn how to use the{" "}
              <code
                className="bg-muted px-2 py-0.5 rounded-md font-mono text-sm border text-foreground"
                style={{ fontFamily: getMonoFont() }}
              >
                useChat
              </code>{" "}
              hook to create a chatbot application with real-time message streaming. Check out our{" "}
              <a href="#" className="underline font-medium text-foreground">
                chatbot with tools guide
              </a>{" "}
              to learn how to use tools in your chatbot.
            </p>
          </div>

          {/* Floating Bottom Nav */}
          <div className="mt-16 flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-border/60">
            <div className="flex items-center gap-1.5 bg-muted/60 p-1 rounded-xl border border-border/80">
              {[1, 2, 3, 4, 5].map((page) => (
                <button
                  key={page}
                  onClick={() => setActivePage(page)}
                  className={`h-7 px-2.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    activePage === page
                      ? "bg-primary text-primary-foreground shadow-xs"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {String(page).padStart(2, "0")}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3 text-xs text-muted-foreground font-medium">
              <span>Heading: <strong className="text-foreground font-semibold">{heading}</strong></span>
              <span>•</span>
              <span>Body: <strong className="text-foreground font-semibold">{body}</strong></span>
              <span>•</span>
              <span>Mono: <strong className="text-foreground font-semibold">{mono}</strong></span>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
