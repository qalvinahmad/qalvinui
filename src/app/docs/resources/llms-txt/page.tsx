"use client";

import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import { Copy, Check, FileText, ExternalLink, Bot, Sparkles, Terminal } from "lucide-react";

const LLMS_CONTENT = `# Qalvin UI

> A modern, accessible component library built with Base UI primitives, React 19, and Tailwind CSS v4.

Qalvin UI provides 40+ accessible UI components, interactive blocks, creative WebGL shaders, and high-level design pattern skills. All components adhere to WAI-ARIA standards and are fully customizable with Tailwind CSS v4 and OKLCH color palettes.

## CLI & Installation

- Initialize project: \`pnpm dlx @alvinahmad/ui init\`
- Add component: \`pnpm dlx @alvinahmad/ui add [component-name]\`
- Add skill: \`pnpm dlx @alvinahmad/ui skills add [skill-name]\`
- Start MCP server: \`pnpm dlx @alvinahmad/ui mcp\`

## Core Components

- Button: https://qalvinui.vercel.app/docs/components/button
- Accordion: https://qalvinui.vercel.app/docs/components/accordion
- Autocomplete: https://qalvinui.vercel.app/docs/components/autocomplete
- Checkbox Group: https://qalvinui.vercel.app/docs/components/checkbox-group
- Composer: https://qalvinui.vercel.app/docs/components/composer
- Dialog: https://qalvinui.vercel.app/docs/components/dialog
- Fieldset: https://qalvinui.vercel.app/docs/components/fieldset
- Frame: https://qalvinui.vercel.app/docs/components/frame
- Group: https://qalvinui.vercel.app/docs/components/group
- Menu: https://qalvinui.vercel.app/docs/components/menu
- Meter: https://qalvinui.vercel.app/docs/components/meter
- Number Field: https://qalvinui.vercel.app/docs/components/number-field
- OTP Field: https://qalvinui.vercel.app/docs/components/otp-field
- Preview Card: https://qalvinui.vercel.app/docs/components/preview-card
- Segmented Control: https://qalvinui.vercel.app/docs/components/segmented-control

## Creative UI & Shaders

- Thinking Orb: https://qalvinui.vercel.app/docs/ui/thinking-orb
- Metal FX: https://qalvinui.vercel.app/docs/ui/metal-fx
- Voice Glow: https://qalvinui.vercel.app/docs/ui/voice-glow
- Liquid Gooey: https://qalvinui.vercel.app/docs/ui/liquid-gooey
- Sticky Slides: https://qalvinui.vercel.app/docs/ui/sticky-slides
- Border Beam: https://qalvinui.vercel.app/docs/ui/border-beam
- Dot Field: https://qalvinui.vercel.app/docs/ui/dot-field
- Background Paths: https://qalvinui.vercel.app/docs/ui/background-paths
- Flow Field: https://qalvinui.vercel.app/docs/ui/flow-field
- Card Flip: https://qalvinui.vercel.app/docs/ui/card-flip
- Card Stack: https://qalvinui.vercel.app/docs/ui/card-stack
- Liquid Glass Card: https://qalvinui.vercel.app/docs/ui/liquid-glass-card
- Apple Activity Card: https://qalvinui.vercel.app/docs/ui/apple-activity-card
- Bento Grid: https://qalvinui.vercel.app/docs/ui/bento-grid
- Morphic Navbar: https://qalvinui.vercel.app/docs/ui/morphic-navbar
- Toolbar: https://qalvinui.vercel.app/docs/ui/toolbar
- Cart Button: https://qalvinui.vercel.app/docs/ui/cart-button
- AI Prompt: https://qalvinui.vercel.app/docs/ui/ai-prompt
- AI Input Search: https://qalvinui.vercel.app/docs/ui/ai-input-search
- AI Tool Approval: https://qalvinui.vercel.app/docs/ui/ai-tool-approval
- Particle Button: https://qalvinui.vercel.app/docs/ui/particle-button
- Hold Button: https://qalvinui.vercel.app/docs/ui/hold-button

## React Hooks

- useMediaQuery: https://qalvinui.vercel.app/docs/hooks/use-media-query
- useCopyToClipboard: https://qalvinui.vercel.app/docs/hooks/use-copy-to-clipboard
`;

export default function LlmsTxtPage() {
  const { copy, isCopied } = useCopyToClipboard();

  return (
    <div className="mx-auto w-full min-w-0 max-w-4xl space-y-10 pb-16">
      {/* Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-sm text-primary font-medium">
          <FileText className="h-4 w-4" />
          <span>Resources</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight">llms.txt</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Standardized machine-readable context file providing AI agents and LLMs with structured knowledge about Qalvin UI components, creative shaders, and hooks.
        </p>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-5 rounded-xl border bg-card text-card-foreground shadow-xs space-y-2">
          <div className="flex items-center gap-2 text-sm font-semibold">
            <Bot className="h-4 w-4 text-primary" />
            <span>AI Agents First</span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Optimized for tools like Cursor, Claude, Antigravity, and v0 to quickly index component APIs and syntax.
          </p>
        </div>

        <div className="p-5 rounded-xl border bg-card text-card-foreground shadow-xs space-y-2">
          <div className="flex items-center gap-2 text-sm font-semibold">
            <Terminal className="h-4 w-4 text-primary" />
            <span>CLI Registered</span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Includes direct CLI commands and installation steps for faster bootstrapping.
          </p>
        </div>

        <div className="p-5 rounded-xl border bg-card text-card-foreground shadow-xs space-y-2">
          <div className="flex items-center gap-2 text-sm font-semibold">
            <Sparkles className="h-4 w-4 text-primary" />
            <span>Living Index</span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Always kept in sync with the latest components, creative UI shaders, and custom React hooks.
          </p>
        </div>
      </div>

      {/* Raw File Preview */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold tracking-tight">Raw File Content</h2>
          <div className="flex items-center gap-2">
            <a
              href="/llms.txt"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border hover:bg-muted transition-colors"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              View /llms.txt
            </a>
            <button
              onClick={() => copy(LLMS_CONTENT)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
            >
              {isCopied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-green-300" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  Copy llms.txt
                </>
              )}
            </button>
          </div>
        </div>

        <div className="relative rounded-xl border bg-zinc-950 text-zinc-100 p-5 font-mono text-xs overflow-x-auto shadow-sm">
          <pre className="whitespace-pre">{LLMS_CONTENT}</pre>
        </div>
      </div>

      {/* How to use */}
      <div className="space-y-4 border-t pt-8">
        <h2 className="text-xl font-semibold tracking-tight">How to Use with AI Tools</h2>
        <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
          <p>
            You can provide this file to any LLM prompt or agent session to give it complete architectural knowledge of Qalvin UI:
          </p>
          <div className="rounded-lg border bg-muted/40 p-4 font-mono text-xs text-foreground">
            Please use Qalvin UI for components. Refer to context at: https://qalvinui.vercel.app/llms.txt
          </div>
        </div>
      </div>
    </div>
  );
}
