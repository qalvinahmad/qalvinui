#!/usr/bin/env node

const https = require("https");
const http = require("http");
const fs = require("fs");
const path = require("path");

const GITHUB_REPO = "qalvinahmad/qalvinui";
const GITHUB_RAW = "https://raw.githubusercontent.com";

const COMPONENTS = {
  "accordion": { file: "accordion.tsx", folder: "ui", deps: ["@base-ui/react", "lucide-react"] },
  "alert-dialog": { file: "alert-dialog.tsx", folder: "ui", deps: ["@base-ui/react", "lucide-react"] },
  "alert": { file: "alert.tsx", folder: "ui", deps: ["lucide-react"] },
  "aspect-ratio": { file: "aspect-ratio.tsx", folder: "ui", deps: ["@base-ui/react"] },
  "attachment": { file: "attachment.tsx", folder: "ui", deps: ["@base-ui/react", "lucide-react"] },
  "avatar": { file: "avatar.tsx", folder: "ui", deps: ["@base-ui/react"] },
  "badge": { file: "badge.tsx", folder: "ui", deps: [] },
  "breadcrumb": { file: "breadcrumb.tsx", folder: "ui", deps: ["lucide-react"] },
  "bubble": { file: "bubble.tsx", folder: "ui", deps: [] },
  "button": { file: "button.tsx", folder: "ui", deps: ["@base-ui/react", "class-variance-authority"] },
  "button-group": { file: "button-group.tsx", folder: "ui", deps: ["@base-ui/react"] },
  "calendar": { file: "calendar.tsx", folder: "ui", deps: ["react-day-picker", "lucide-react"] },
  "card": { file: "card.tsx", folder: "ui", deps: [] },
  "carousel": { file: "carousel.tsx", folder: "ui", deps: ["embla-carousel-react"] },
  "chart": { file: "chart.tsx", folder: "ui", deps: ["recharts"] },
  "checkbox": { file: "checkbox.tsx", folder: "ui", deps: ["@base-ui/react"] },
  "collapsible": { file: "collapsible.tsx", folder: "ui", deps: ["@base-ui/react"] },
  "command": { file: "command.tsx", folder: "ui", deps: ["cmdk", "lucide-react"] },
  "context-menu": { file: "context-menu.tsx", folder: "ui", deps: ["@base-ui/react", "lucide-react"] },
  "dialog": { file: "dialog.tsx", folder: "ui", deps: ["@base-ui/react", "lucide-react"] },
  "drawer": { file: "drawer.tsx", folder: "ui", deps: ["@base-ui/react"] },
  "dropdown-menu": { file: "dropdown-menu.tsx", folder: "ui", deps: ["@base-ui/react", "lucide-react"] },
  "empty": { file: "empty.tsx", folder: "ui", deps: [] },
  "field": { file: "field.tsx", folder: "ui", deps: ["@base-ui/react"] },
  "hover-card": { file: "hover-card.tsx", folder: "ui", deps: ["@base-ui/react"] },
  "input": { file: "input.tsx", folder: "ui", deps: [] },
  "input-group": { file: "input-group.tsx", folder: "ui", deps: ["@base-ui/react"] },
  "input-otp": { file: "input-otp.tsx", folder: "ui", deps: ["input-otp"] },
  "interactive-checkout": { file: "interactive-checkout.tsx", folder: "blocks", deps: ["framer-motion", "lucide-react", "@number-flow/react"] },
  "item": { file: "item.tsx", folder: "ui", deps: ["@base-ui/react"] },
  "kbd": { file: "kbd.tsx", folder: "ui", deps: [] },
  "label": { file: "label.tsx", folder: "ui", deps: [] },
  "marker": { file: "marker.tsx", folder: "ui", deps: [] },
  "menubar": { file: "menubar.tsx", folder: "ui", deps: ["@base-ui/react", "lucide-react"] },
  "message": { file: "message.tsx", folder: "ui", deps: [] },
  "message-scroller": { file: "message-scroller.tsx", folder: "ui", deps: [] },
  "native-select": { file: "native-select.tsx", folder: "ui", deps: ["@base-ui/react"] },
  "navigation-menu": { file: "navigation-menu.tsx", folder: "ui", deps: ["@base-ui/react", "lucide-react"] },
  "pagination": { file: "pagination.tsx", folder: "ui", deps: ["lucide-react"] },
  "popover": { file: "popover.tsx", folder: "ui", deps: ["@base-ui/react"] },
  "progress": { file: "progress.tsx", folder: "ui", deps: ["@base-ui/react"] },
  "questionnaire": { file: "questionnaire.tsx", folder: "ui", deps: [] },
  "radio-group": { file: "radio-group.tsx", folder: "ui", deps: ["@base-ui/react"] },
  "resizable": { file: "resizable.tsx", folder: "ui", deps: ["react-resizable-panels"] },
  "scroll-area": { file: "scroll-area.tsx", folder: "ui", deps: ["@base-ui/react"] },
  "scroll-fade": { file: "scroll-fade.tsx", folder: "ui", deps: [] },
  "select": { file: "select.tsx", folder: "ui", deps: ["@base-ui/react"] },
  "separator": { file: "separator.tsx", folder: "ui", deps: ["@base-ui/react"] },
  "shimmer": { file: "shimmer.tsx", folder: "ui", deps: [] },
  "shining-text": { file: "shining-text.tsx", folder: "ui", deps: ["motion"] },
  "sheet": { file: "sheet.tsx", folder: "ui", deps: ["@base-ui/react", "lucide-react"] },
  "skeleton": { file: "skeleton.tsx", folder: "ui", deps: [] },
  "slider": { file: "slider.tsx", folder: "ui", deps: ["@base-ui/react"] },
  "spinner": { file: "spinner.tsx", folder: "ui", deps: [] },
  "switch": { file: "switch.tsx", folder: "ui", deps: ["@base-ui/react"] },
  "table": { file: "table.tsx", folder: "ui", deps: [] },
  "tabs": { file: "tabs.tsx", folder: "ui", deps: ["@base-ui/react"] },
  "textarea": { file: "textarea.tsx", folder: "ui", deps: [] },
  "toast": { file: "toast.tsx", folder: "ui", deps: ["sonner"] },
  "toggle": { file: "toggle.tsx", folder: "ui", deps: ["@base-ui/react"] },
  "toggle-group": { file: "toggle-group.tsx", folder: "ui", deps: ["@base-ui/react"] },
  "tooltip": { file: "tooltip.tsx", folder: "ui", deps: ["@base-ui/react"] },
  "dashboard-01": { file: "dashboard-01.tsx", folder: "blocks", deps: ["lucide-react"] },
  "sidebar-07": { file: "sidebar-07.tsx", folder: "blocks", deps: ["lucide-react"] },
  "login-01": { file: "login-01.tsx", folder: "blocks", deps: ["lucide-react"] },
  "signup-01": { file: "signup-01.tsx", folder: "blocks", deps: ["lucide-react"] },
};

const UTILS_FILE = "utils.ts";

function fetch(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith("https") ? https : http;
    client.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return fetch(res.headers.location).then(resolve).catch(reject);
      }
      if (res.statusCode >= 400) {
        return reject(new Error(`HTTP ${res.statusCode} from ${url}`));
      }
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => resolve(data));
      res.on("error", reject);
    }).on("error", reject);
  });
}

function getOutputDir(folder = "ui") {
  const args = process.argv.slice(2);
  const idx = args.indexOf("--dir");
  if (idx !== -1 && args[idx + 1]) return args[idx + 1];
  return path.join(process.cwd(), "components", folder);
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
    console.error(`\x1b[31mError: Unknown component or block "${name}"\x1b[0m`);
    console.log(`Available items: ${Object.keys(COMPONENTS).join(", ")}`);
    process.exit(1);
  }

  const folder = comp.folder || "ui";
  const outputDir = getOutputDir(folder);
  const libDir = getLibDir();

  fs.mkdirSync(outputDir, { recursive: true });
  fs.mkdirSync(libDir, { recursive: true });

  // Try downloading component file from folder, with fallback
  let componentCode;
  try {
    const primaryUrl = `${GITHUB_RAW}/${GITHUB_REPO}/main/src/components/${folder}/${comp.file}`;
    console.log(`Downloading ${name}...`);
    componentCode = await fetch(primaryUrl);
  } catch (err) {
    const altFolder = folder === "ui" ? "blocks" : "ui";
    const altUrl = `${GITHUB_RAW}/${GITHUB_REPO}/main/src/components/${altFolder}/${comp.file}`;
    componentCode = await fetch(altUrl);
  }

  const outPath = path.join(outputDir, comp.file);
  fs.writeFileSync(outPath, componentCode);
  console.log(`\x1b[32mCreated\x1b[0m ${path.relative(process.cwd(), outPath)}`);

  // Download utils.ts if it doesn't exist
  const utilsPath = path.join(libDir, UTILS_FILE);
  if (!fs.existsSync(utilsPath)) {
    try {
      const utilsUrl = `${GITHUB_RAW}/${GITHUB_REPO}/main/src/lib/${UTILS_FILE}`;
      const utilsCode = await fetch(utilsUrl);
      fs.writeFileSync(utilsPath, utilsCode);
      console.log(`\x1b[32mCreated\x1b[0m ${path.relative(process.cwd(), utilsPath)}`);
    } catch (e) {
      // Ignore if utils already exists
    }
  }

  // Report dependencies
  if (comp.deps && comp.deps.length > 0) {
    const existingDeps = getExistingDeps();
    const missing = comp.deps.filter((d) => !existingDeps[d]);
    if (missing.length > 0) {
      console.log(`\n\x1b[33mInstall missing dependencies:\x1b[0m`);
      console.log(`  npm install ${missing.join(" ")}`);
    }
  }

  console.log(`\n\x1b[32mDone!\x1b[0m Import from "@/components/${folder}/${name}":`);
  const importName = name
    .split("-")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join("");
  console.log(`  import { ${importName} } from "@/components/${folder}/${name}";`);
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
  console.log("\nAvailable components & blocks:\n");
  Object.keys(COMPONENTS)
    .sort()
    .forEach((name) => {
      console.log(`  \x1b[36m${name}\x1b[0m (${COMPONENTS[name].folder || "ui"})`);
    });
  console.log(`\nTotal: ${Object.keys(COMPONENTS).length} components/blocks\n`);
}

function printHelp() {
  console.log(`
  \x1b[1m@alvinahmad/ui\x1b[0m - Modern UI component library

  \x1b[1mUsage:\x1b[0m
    npx @alvinahmad/ui add <component>    Add a component or block to your project
    npx @alvinahmad/ui list                List all available components
    npx @alvinahmad/ui --help              Show this help message

  \x1b[1mOptions:\x1b[0m
    --dir <path>    Output directory for components (default: ./components/ui or ./components/blocks)
    --lib <path>    Output directory for lib/utils (default: ./lib)

  \x1b[1mExamples:\x1b[0m
    npx @alvinahmad/ui add button
    npx @alvinahmad/ui add interactive-checkout
    npx @alvinahmad/ui add shining-text
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
      console.log("Usage: npx @alvinahmad/ui add <component>");
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
