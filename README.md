<div align="center">

# Qalvin UI

<p align="center">
  <strong>The Next-Gen Design System & UI Component Library for Modern React and Next.js Applications.</strong>
</p>

<p align="center">
  A set of accessible, highly customizable UI components and building blocks crafted with React 19, Base UI, and Tailwind CSS v4. Copy and paste into your apps or install via CLI.
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@alvinahmad/qalvinui">
    <img src="https://img.shields.io/npm/v/@alvinahmad/qalvinui.svg?style=for-the-badge&color=2563eb&logo=npm" alt="npm version" />
  </a>
  <a href="https://github.com/qalvinahmad/qalvinui/actions">
    <img src="https://img.shields.io/badge/CI-Passing-10b981.svg?style=for-the-badge&logo=github-actions" alt="CI Build" />
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
</p>

<br />

**[🌐 Explore Documentation & Live Demo](https://qalvinui-a3bv-two.vercel.app/)** · **[Browse Components](https://qalvinui-a3bv-two.vercel.app/components)** · **[Explore Blocks](https://qalvinui-a3bv-two.vercel.app/blocks)** · **[Interactive Charts](https://qalvinui-a3bv-two.vercel.app/charts)**

</div>

---

## ✨ Features

- **♿ 100% Accessible**: Built on top of `@base-ui/react` with full ARIA compliance and keyboard navigation.
- **🎨 Tailwind CSS v4 Ready**: Clean CSS variables, zero runtime CSS-in-JS, and dark mode ready out of the box.
- **📦 Instant CLI Installer**: Add components and full-page blocks directly to your project in seconds.
- **🧩 50+ Modern Components**: From essential buttons and inputs to complex comboboxes, data tables, and date pickers.
- **🧱 Production-Ready Blocks**: Complete layouts including interactive checkout, dashboards, collapsibles, authentication, and shining text.
- **📊 Rich Interactive Charts**: Area, Bar, Line, Pie, Radar, and Radial charts powered by Recharts.
- **🚀 Ultra Fast**: Built for Next.js 16 (App Router & Turbopack) and React 19.

---

## 🚀 Quick Start & CLI

You can add any component directly into your repository with our official CLI tool:

### 1. Add Components

```bash
# Add essential components
npx @alvinahmad/ui add button
npx @alvinahmad/ui add dialog
npx @alvinahmad/ui add radio-group
npx @alvinahmad/ui add switch

# Add pre-built blocks
npx @alvinahmad/ui add interactive-checkout
npx @alvinahmad/ui add shining-text
npx @alvinahmad/ui add dashboard-01
```

### 2. Custom Output Directory

```bash
npx @alvinahmad/ui add button --dir src/components/ui --lib src/lib
```

### 3. List All Available Components

```bash
npx @alvinahmad/ui list
```

---

## 🛠️ Usage Example

```tsx
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";

export default function Example() {
  return (
    <div className="flex flex-col gap-4 p-6 border rounded-2xl max-w-sm">
      <Button variant="default">Click Me</Button>
      
      <RadioGroup defaultValue="opt-1" className="flex gap-2">
        <RadioGroupItem value="opt-1" />
        <RadioGroupItem value="opt-2" />
      </RadioGroup>

      <Switch defaultChecked />
    </div>
  );
}
```

---

## 📦 Component Library Overview

| Category | Components |
| :--- | :--- |
| **Form & Inputs** | `Button`, `Input`, `Textarea`, `Checkbox`, `Radio Group`, `Switch`, `Slider`, `Select`, `Input OTP`, `Input Group`, `Field` |
| **Data & Display** | `Card`, `Badge`, `Avatar`, `Table`, `Data Table`, `Progress`, `Kbd`, `Separator`, `Skeleton`, `Spinner`, `Empty` |
| **Feedback & Overlays** | `Alert`, `Alert Dialog`, `Dialog`, `Drawer`, `Sheet`, `Popover`, `Tooltip`, `Hover Card`, `Toast (Sonner)`, `Context Menu` |
| **Navigation & Layout** | `Breadcrumb`, `Navigation Menu`, `Menubar`, `Tabs`, `Pagination`, `Sidebar`, `Collapsible`, `Resizable`, `Scroll Area` |
| **Special Blocks** | `Interactive Checkout`, `Shining Text`, `Dashboard 01`, `Sidebar 07`, `Login Form`, `Signup Form` |
| **Charts** | `Area Charts`, `Bar Charts`, `Line Charts`, `Pie / Donut Charts`, `Radar Charts`, `Radial Charts` |

---

## 💻 Local Development

Clone the repository and start the development server:

```bash
git clone https://github.com/qalvinahmad/qalvinui.git
cd qalvinui

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build & Typecheck

```bash
# Typecheck
npx tsc --noEmit

# Production build
npm run build
```

---

## 🤝 Contributing

Contributions are always welcome! If you'd like to contribute:

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'feat: add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for more information.

<br />

<div align="center">
  <sub>Built with ❤️ by <a href="https://github.com/qalvinahmad">Alvin Ahmad</a> and the open-source community.</sub>
</div>