<div align="center">

# 💫 Qalvin UI

<p align="center">
  <strong>The Next-Gen Open Source Design System & Component Library for Modern React & Next.js.</strong>
</p>

<p align="center">
  A curated collection of accessible, highly customizable UI components, rich animated shaders, and production-ready blocks crafted with <strong>React 19</strong>, <strong>Base UI</strong>, and <strong>Tailwind CSS v4</strong>. Copy and paste into your apps or install instantly via CLI.
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@alvinahmad/qalvinui">
    <img src="https://img.shields.io/npm/v/@alvinahmad/qalvinui.svg?style=for-the-badge&color=2563eb&logo=npm" alt="npm version" />
  </a>
  <a href="https://www.npmjs.com/package/@alvinahmad/qalvinui">
    <img src="https://img.shields.io/npm/dw/@alvinahmad/qalvinui?style=for-the-badge&logo=npm&color=22c55e" alt="npm weekly downloads" />
  </a>
  <a href="https://www.npmjs.com/package/@alvinahmad/qalvinui">
    <img src="https://img.shields.io/npm/dt/@alvinahmad/qalvinui?style=for-the-badge&logo=npm&color=06b6d4" alt="npm total downloads" />
  </a>
  <a href="https://github.com/qalvinahmad/qalvinui/stargazers">
    <img src="https://img.shields.io/github/stars/qalvinahmad/qalvinui?style=for-the-badge&logo=github&color=eab308" alt="GitHub stars" />
  </a>
  <a href="https://github.com/qalvinahmad/qalvinui/pulls">
    <img src="https://img.shields.io/badge/PRs-Welcome-brightgreen.svg?style=for-the-badge&logo=git" alt="PRs Welcome" />
  </a>
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/License-MIT-f59e0b.svg?style=for-the-badge" alt="License MIT" />
  </a>
</p>

<p align="center">
  <a href="https://nextjs.org/">
    <img src="https://img.shields.io/badge/Next.js-16.3-000000.svg?style=flat-square&logo=next.js" alt="Next.js" />
  </a>
  <a href="https://react.dev/">
    <img src="https://img.shields.io/badge/React-19.2-61DAFB.svg?style=flat-square&logo=react" alt="React 19" />
  </a>
  <a href="https://tailwindcss.com/">
    <img src="https://img.shields.io/badge/TailwindCSS-v4.0-38B2AC.svg?style=flat-square&logo=tailwind-css" alt="Tailwind CSS" />
  </a>
  <a href="https://base-ui.com/">
    <img src="https://img.shields.io/badge/Base_UI-1.7-6366f1.svg?style=flat-square" alt="Base UI" />
  </a>
  <a href="https://www.typescriptlang.org/">
    <img src="https://img.shields.io/badge/TypeScript-5.0-3178C6.svg?style=flat-square&logo=typescript" alt="TypeScript" />
  </a>
</p>

<br />

**[🌐 Documentation & Showcase](https://qalvinui.vercel.app/)** · **[🧱 Explore Blocks](https://qalvinui.vercel.app/blocks)** · **[🧩 Browse Components](https://qalvinui.vercel.app/components)** · **[📊 Interactive Charts](https://qalvinui.vercel.app/charts)** · **[Report Bug](https://github.com/qalvinahmad/qalvinui/issues)**

</div>

---

## ⚡ Highlights

- **♿ 100% Accessible & Keyboard First**: Built on top of `@base-ui/react` primitives adhering to WAI-ARIA standards.
- **🎨 Tailwind CSS v4 Native**: Utilizes modern `@theme` CSS variables, zero runtime CSS-in-JS, and frictionless dark mode.
- **📦 Instant Zero-Config CLI**: Add individual components or full-page blocks straight into your repo with a single command.
- **🧱 Production-Ready Blocks**: Fully responsive layouts including animated interactive checkout, SaaS dashboards, auth screens, and sidebar shells.
- **🔮 AI & 3D WebGL Shaders**: Next-generation generative canvas effects like **Thinking Orb**, **Metal FX**, **Border Beam**, and **Voice Glow**.
- **📊 Interactive Data Visualization**: Beautiful chart presets powered by Recharts (Area, Bar, Line, Pie, Radar, Radial).
- **🚀 Built for the Future**: Full support for React 19 Server Components and Next.js 16 App Router.

---

## 🚀 Quick Start & CLI

Add any component or block directly into your project using the official CLI:

### 1. Adding Pre-Built Blocks

```bash
# Animated interactive checkout flow with container queries & dynamic cart
npx @alvinahmad/ui add interactive-checkout

# Generative 3D thinking orb canvas block
npx @alvinahmad/ui add thinking-orb-block

# Specular metal reflection shader block
npx @alvinahmad/ui add metal-fx-block

# 3D interactive human atlas anatomy block
npx @alvinahmad/ui add human-atlas-block

# Full admin dashboard & sidebar templates
npx @alvinahmad/ui add dashboard-01
npx @alvinahmad/ui add sidebar-07
```

### 2. Adding Core UI Components

```bash
npx @alvinahmad/ui add button
npx @alvinahmad/ui add dialog
npx @alvinahmad/ui add dropdown-menu
npx @alvinahmad/ui add tabs
npx @alvinahmad/ui add thinking-orb
npx @alvinahmad/ui add metal-fx
npx @alvinahmad/ui add border-beam
npx @alvinahmad/ui add voice-glow
```

*(You can also use `npx @alvinahmad/qalvinui add <name>` interchangeably)*

### 3. Custom Output Directory

Control where components and utility files are installed:

```bash
npx @alvinahmad/ui add button --dir src/components/ui --lib src/lib
```

### 4. Discover Available Components

```bash
npx @alvinahmad/ui list
```

---

## 🧩 Component & Block Catalog

| Category | Highlights & Items |
| :--- | :--- |
| **🤖 AI & Creative Shaders** | `Thinking Orb`, `Metal FX`, `Border Beam`, `Voice Glow`, `Shining Text` |
| **🧱 Production Blocks** | `Interactive Checkout`, `Dashboard 01`, `Sidebar 07`, `Login Form`, `Signup Form`, `Human Atlas` |
| **🔘 Form & Inputs** | `Button`, `Button Group`, `Input`, `Input Group`, `Input OTP`, `Textarea`, `Checkbox`, `Radio Group`, `Switch`, `Slider`, `Select`, `Native Select`, `Field` |
| **📋 Data & Feedback** | `Card`, `Badge`, `Avatar`, `Table`, `Progress`, `Kbd`, `Separator`, `Skeleton`, `Spinner`, `Empty`, `Item`, `Marker`, `Sonner (Toast)` |
| **🪟 Overlays & Dialogs** | `Dialog`, `Alert Dialog`, `Alert`, `Drawer`, `Sheet`, `Popover`, `Tooltip`, `Hover Card`, `Context Menu`, `Dropdown Menu` |
| **🧭 Navigation & Layout** | `Navigation Menu`, `Menubar`, `Tabs`, `Pagination`, `Breadcrumb`, `Collapsible`, `Resizable`, `Scroll Area`, `Scroll Fade` |
| **📊 Interactive Charts** | `Area Chart`, `Bar Chart`, `Line Chart`, `Pie Chart`, `Radar Chart`, `Radial Chart` |

---

## 🛠️ Usage Example

Here is how simple it is to use Qalvin UI components in your React 19 / Next.js application:

```tsx
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { BorderBeam } from "@/components/ui/border-beam";

export default function DemoCard() {
  const [active, setActive] = useState(true);

  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold text-foreground">Pro Subscription</h3>
            <Badge variant="default">Active</Badge>
          </div>
          <p className="text-sm text-muted-foreground">Manage your plan preferences & billing.</p>
        </div>
        <Switch checked={active} onCheckedChange={setActive} />
      </div>

      <div className="mt-6 flex justify-end gap-3">
        <Button variant="outline">Learn More</Button>
        <Button variant="default">Manage Plan</Button>
      </div>

      {active && <BorderBeam size={250} duration={12} delay={9} />}
    </div>
  );
}
```

---

## 💻 Local Development

Clone the repository and spin up the preview website:

```bash
# 1. Clone the repository
git clone https://github.com/qalvinahmad/qalvinui.git
cd qalvinui

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the documentation and blocks showcase locally.

```bash
# Run linting
npm run lint

# Build for production
npm run build
```

---

## 🤝 Contributing

We love contributions! Whether it's adding new components, crafting new blocks, improving documentation, or fixing bugs:

1. **Fork** the repository
2. **Create** your feature branch (`git checkout -b feat/super-block`)
3. **Commit** your changes (`git commit -m 'feat: add super block'`)
4. **Push** to the branch (`git push origin feat/super-block`)
5. **Open** a Pull Request

Please make sure your code follows the existing formatting and adheres to Base UI & Tailwind CSS best practices.

---

## 🌟 Star History

[![Star History Chart](https://api.star-history.com/svg?repos=qalvinahmad/qalvinui&type=Date)](https://star-history.com/#qalvinahmad/qalvinui&Date)

---

## 📄 License

Distributed under the **MIT License**. See [LICENSE](LICENSE) for more information.

<br />

<div align="center">
  <sub>Built with passion by <a href="https://github.com/qalvinahmad">Alvin Ahmad</a> and the open-source community.</sub>
</div>
