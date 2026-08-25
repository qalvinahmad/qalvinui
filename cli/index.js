#!/usr/bin/env node

const https = require("https");
const http = require("http");
const fs = require("fs");
const path = require("path");

const GITHUB_REPO = "qalvinahmad/qalvinui";
const GITHUB_RAW = "https://raw.githubusercontent.com";

const COMPONENTS = {
  "accordion": { file: "accordion.tsx", deps: ["@base-ui/react", "lucide-react"] },
  "alert-dialog": { file: "alert-dialog.tsx", deps: ["@base-ui/react", "lucide-react"] },
  "alert": { file: "alert.tsx", deps: ["lucide-react"] },
  "aspect-ratio": { file: "aspect-ratio.tsx", deps: ["@base-ui/react"] },
  "attachment": { file: "attachment.tsx", deps: ["@base-ui/react", "lucide-react"] },
  "avatar": { file: "avatar.tsx", deps: ["@base-ui/react"] },
  "badge": { file: "badge.tsx", deps: [] },
  "breadcrumb": { file: "breadcrumb.tsx", deps: ["lucide-react"] },
  "bubble": { file: "bubble.tsx", deps: [] },
  "button": { file: "button.tsx", deps: ["@base-ui/react", "class-variance-authority"] },
  "button-group": { file: "button-group.tsx", deps: ["@base-ui/react"] },
  "calendar": { file: "calendar.tsx", deps: ["react-day-picker", "lucide-react"] },
  "card": { file: "card.tsx", deps: [] },
  "carousel": { file: "carousel.tsx", deps: ["embla-carousel-react"] },
  "chart": { file: "chart.tsx", deps: ["recharts"] },
  "checkbox": { file: "checkbox.tsx", deps: ["@base-ui/react"] },
  "collapsible": { file: "collapsible.tsx", deps: ["@base-ui/react"] },
  "command": { file: "command.tsx", deps: ["cmdk", "lucide-react"] },
  "context-menu": { file: "context-menu.tsx", deps: ["@base-ui/react", "lucide-react"] },
  "dialog": { file: "dialog.tsx", deps: ["@base-ui/react", "lucide-react"] },
  "drawer": { file: "drawer.tsx", deps: ["@base-ui/react"] },
  "dropdown-menu": { file: "dropdown-menu.tsx", deps: ["@base-ui/react", "lucide-react"] },
  "empty": { file: "empty.tsx", deps: [] },
  "field": { file: "field.tsx", deps: ["@base-ui/react"] },
  "hover-card": { file: "hover-card.tsx", deps: ["@base-ui/react"] },
  "input": { file: "input.tsx", deps: [] },
  "input-group": { file: "input-group.tsx", deps: ["@base-ui/react"] },
  "input-otp": { file: "input-otp.tsx", deps: ["input-otp"] },
  "item": { file: "item.tsx", deps: ["@base-ui/react"] },
  "kbd": { file: "kbd.tsx", deps: [] },
  "label": { file: "label.tsx", deps: [] },
  "marker": { file: "marker.tsx", deps: [] },
  "menubar": { file: "menubar.tsx", deps: ["@base-ui/react", "lucide-react"] },
  "message": { file: "message.tsx", deps: [] },
  "message-scroller": { file: "message-scroller.tsx", deps: [] },
  "native-select": { file: "native-select.tsx", deps: ["@base-ui/react"] },
  "navigation-menu": { file: "navigation-menu.tsx", deps: ["@base-ui/react", "lucide-react"] },
  "pagination": { file: "pagination.tsx", deps: ["lucide-react"] },
  "popover": { file: "popover.tsx", deps: ["@base-ui/react"] },
  "progress": { file: "progress.tsx", deps: ["@base-ui/react"] },
  "questionnaire": { file: "questionnaire.tsx", deps: [] },
  "radio-group": { file: "radio-group.tsx", deps: ["@base-ui/react"] },
  "resizable": { file: "resizable.tsx", deps: ["react-resizable-panels"] },
  "scroll-area": { file: "scroll-area.tsx", deps: ["@base-ui/react"] },
  "scroll-fade": { file: "scroll-fade.tsx", deps: [] },
  "select": { file: "select.tsx", deps: ["@base-ui/react"] },
  "separator": { file: "separator.tsx", deps: ["@base-ui/react"] },
  "shimmer": { file: "shimmer.tsx", deps: [] },
  "sheet": { file: "sheet.tsx", deps: ["@base-ui/react", "lucide-react"] },
  "skeleton": { file: "skeleton.tsx", deps: [] },
  "slider": { file: "slider.tsx", deps: ["@base-ui/react"] },
  "spinner": { file: "spinner.tsx", deps: [] },
  "switch": { file: "switch.tsx", deps: ["@base-ui/react"] },
  "table": { file: "table.tsx", deps: [] },
  "tabs": { file: "tabs.tsx", deps: ["@base-ui/react"] },
  "textarea": { file: "textarea.tsx", deps: [] },
  "toast": { file: "toast.tsx", deps: ["sonner"] },
  "toggle": { file: "toggle.tsx", deps: ["@base-ui/react"] },
  "toggle-group": { file: "toggle-group.tsx", deps: ["@base-ui/react"] },
  "tooltip": { file: "tooltip.tsx", deps: ["@base-ui/react"] },
};

const UTILS_FILE = "utils.ts";

function fetch(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith("https") ? https : http;
    client.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return fetch(res.headers.location).then(resolve).catch(reject);
      }
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => resolve(data));
      res.on("error", reject);
    }).on("error", reject);
  });
}

function getOutputDir() {
  const args = process.argv.slice(2);
  const idx = args.indexOf("--dir");
  if (idx !== -1 && args[idx + 1]) return args[idx + 1];
  return path.join(process.cwd(), "components", "ui");
}

function getLibDir() {
  const args = process.argv.slice(2);
  const idx = args.indexOf("--lib");
  if (idx !== -1 && args[idx + 1]) return args[idx + 1];
  return path.join(process.cwd(), "lib");
}

async function downloadComponent(name) {
  const comp = COMPONENTS[name];
  if (!comp) {
    console.error(`\x1b[31mError: Unknown component "${name}"\x1b[0m`);
    console.log(`Available components: ${Object.keys(COMPONENTS).join(", ")}`);
    process.exit(1);
  }

  const outputDir = getOutputDir();
  const libDir = getLibDir();

  fs.mkdirSync(outputDir, { recursive: true });
  fs.mkdirSync(libDir, { recursive: true });

  // Download component file
  const componentUrl = `${GITHUB_RAW}/${GITHUB_REPO}/main/src/components/ui/${comp.file}`;
  console.log(`Downloading ${name}...`);
  const componentCode = await fetch(componentUrl);
  const outPath = path.join(outputDir, comp.file);
  fs.writeFileSync(outPath, componentCode);
  console.log(`\x1b[32mCreated\x1b[0m ${path.relative(process.cwd(), outPath)}`);

  // Download utils.ts if it doesn't exist
  const utilsPath = path.join(libDir, UTILS_FILE);
  if (!fs.existsSync(utilsPath)) {
    const utilsUrl = `${GITHUB_RAW}/${GITHUB_REPO}/main/src/lib/${UTILS_FILE}`;
    const utilsCode = await fetch(utilsUrl);
    fs.writeFileSync(utilsPath, utilsCode);
    console.log(`\x1b[32mCreated\x1b[0m ${path.relative(process.cwd(), utilsPath)}`);
  }

  // Report dependencies
  if (comp.deps.length > 0) {
    const existingDeps = getExistingDeps();
    const missing = comp.deps.filter((d) => !existingDeps[d]);
    if (missing.length > 0) {
      console.log(`\n\x1b[33mInstall missing dependencies:\x1b[0m`);
      console.log(`  npm install ${missing.join(" ")}`);
    }
  }

  console.log(`\n\x1b[32mDone!\x1b[0m Import from "@/components/ui/${name.replace("-", "/")}":`);
  const importName = name
    .split("-")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join("");
  console.log(`  import { ${importName} } from "@/components/ui/${name}";`);
}

function getExistingDeps() {
  try {
    const pkgPath = path.join(process.cwd(), "package.json");
    if (!fs.existsSync(pkgPath)) return {};
    const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf-8"));
    return { ...pkg.dependencies, ...pkg.devDependencies };
  } catch {
    return {};
  }
}

async function listComponents() {
  console.log("\nAvailable components:\n");
  Object.keys(COMPONENTS)
    .sort()
    .forEach((name) => {
      console.log(`  \x1b[36m${name}\x1b[0m`);
    });
  console.log(`\nTotal: ${Object.keys(COMPONENTS).length} components\n`);
}

function printHelp() {
  console.log(`
  \x1b[1m@alvinahmad/qalvinui\x1b[0m - Modern UI component library

  \x1b[1mUsage:\x1b[0m
    npx @alvinahmad/qalvinui add <component>    Add a component to your project
    npx @alvinahmad/qalvinui list                List all available components
    npx @alvinahmad/qalvinui --help              Show this help message

  \x1b[1mOptions:\x1b[0m
    --dir <path>    Output directory for components (default: ./components/ui)
    --lib <path>    Output directory for lib/utils (default: ./lib)

  \x1b[1mExamples:\x1b[0m
    npx @alvinahmad/qalvinui add button
    npx @alvinahmad/qalvinui add accordion
    npx @alvinahmad/qalvinui add dialog --dir src/components/ui
  `);
}

async function main() {
  const args = process.argv.slice(2);

  if (args.length === 0 || args.includes("--help") || args.includes("-h")) {
    printHelp();
    return;
  }

  const command = args[0];

  if (command === "list") {
    await listComponents();
    return;
  }

  if (command === "add") {
    const components = args.slice(1).filter((a) => !a.startsWith("--"));
    if (components.length === 0) {
      console.error("\x1b[31mError: No component specified\x1b[0m");
      console.log("Usage: npx @alvinahmad/qalvinui add <component>");
      return;
    }
    for (const name of components) {
      await downloadComponent(name);
    }
    return;
  }

  console.error(`\x1b[31mUnknown command: ${command}\x1b[0m`);
  printHelp();
}

main().catch((err) => {
  console.error("\x1b[31mError:\x1b[0m", err.message);
  process.exit(1);
});
