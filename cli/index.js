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
  "autocomplete": { file: "autocomplete.tsx", folder: "ui", deps: ["@base-ui/react", "lucide-react"] },
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
  "checkbox-group": { file: "checkbox-group.tsx", folder: "ui", deps: ["@base-ui/react"] },
  "composer": { file: "composer.tsx", folder: "ui", deps: ["lucide-react"] },
  "collapsible": { file: "collapsible.tsx", folder: "ui", deps: ["@base-ui/react"] },
  "command": { file: "command.tsx", folder: "ui", deps: ["cmdk", "lucide-react"] },
  "context-menu": { file: "context-menu.tsx", folder: "ui", deps: ["@base-ui/react", "lucide-react"] },
  "dialog": { file: "dialog.tsx", folder: "ui", deps: ["@base-ui/react", "lucide-react"] },
  "drawer": { file: "drawer.tsx", folder: "ui", deps: ["@base-ui/react"] },
  "dropdown-menu": { file: "dropdown-menu.tsx", folder: "ui", deps: ["@base-ui/react", "lucide-react"] },
  "empty": { file: "empty.tsx", folder: "ui", deps: [] },
  "field": { file: "field.tsx", folder: "ui", deps: ["@base-ui/react"] },
  "fieldset": { file: "fieldset.tsx", folder: "ui", deps: ["@base-ui/react"] },
  "form": { file: "form.tsx", folder: "ui", deps: [] },
  "frame": { file: "frame.tsx", folder: "ui", deps: [] },
  "group": { file: "group.tsx", folder: "ui", deps: ["class-variance-authority"] },
  "hover-card": { file: "hover-card.tsx", folder: "ui", deps: ["@base-ui/react"] },
  "input": { file: "input.tsx", folder: "ui", deps: [] },
  "input-group": { file: "input-group.tsx", folder: "ui", deps: ["@base-ui/react"] },
  "input-otp": { file: "input-otp.tsx", folder: "ui", deps: ["input-otp"] },
  "menu": { file: "menu.tsx", folder: "ui", deps: ["@base-ui/react", "lucide-react"] },
  "meter": { file: "meter.tsx", folder: "ui", deps: ["@base-ui/react"] },
  "number-field": { file: "number-field.tsx", folder: "ui", deps: ["@base-ui/react", "lucide-react"] },
  "otp-field": { file: "otp-field.tsx", folder: "ui", deps: ["@base-ui/react"] },
  "preview-card": { file: "preview-card.tsx", folder: "ui", deps: ["@base-ui/react"] },
  "segmented-control": { file: "segmented-control.tsx", folder: "ui", deps: [] },
  "interactive-checkout": {
    file: "interactive-checkout.tsx",
    folder: "blocks",
    deps: ["@number-flow/react", "framer-motion", "lucide-react"],
    uiDeps: ["button"],
  },
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
  "sonner": { file: "sonner.tsx", folder: "ui", deps: ["sonner", "next-themes", "lucide-react"] },
  "toast": { file: "sonner.tsx", folder: "ui", deps: ["sonner", "next-themes", "lucide-react"] },
  "toggle": { file: "toggle.tsx", folder: "ui", deps: ["@base-ui/react"] },
  "toggle-group": { file: "toggle-group.tsx", folder: "ui", deps: ["@base-ui/react"] },
  "tooltip": { file: "tooltip.tsx", folder: "ui", deps: ["@base-ui/react"] },
  "thinking-orb": { file: "thinking-orb.tsx", folder: "ui", deps: [] },
  "metal-fx": { file: "metal-fx.tsx", folder: "ui", deps: [] },
  "border-beam": { file: "border-beam.tsx", folder: "ui", deps: [] },
  "voice-glow": { file: "voice-glow.tsx", folder: "ui", deps: [] },
  "img-fx": { file: "img-fx.tsx", folder: "ui", deps: ["three"] },
  "liquid-gooey": { file: "liquid-gooey.tsx", folder: "ui", deps: [] },
  "sticky-slides": { file: "sticky-slides.tsx", folder: "ui", deps: ["lucide-react"] },
  "use-media-query": { file: "use-media-query.ts", folder: "hooks", deps: [] },
  "use-copy-to-clipboard": { file: "use-copy-to-clipboard.ts", folder: "hooks", deps: [] },
  "thinking-orb-block": { file: "thinking-orb-block.tsx", folder: "blocks", deps: ["lucide-react"], uiDeps: ["thinking-orb"] },
  "metal-fx-block": { file: "metal-fx-block.tsx", folder: "blocks", deps: ["lucide-react"], uiDeps: ["metal-fx"] },
  "sticky-slides-block": { file: "sticky-slides-block.tsx", folder: "blocks", deps: ["lucide-react"], uiDeps: ["sticky-slides"] },
  "chat-01": { file: "chat-01.tsx", folder: "blocks", deps: ["lucide-react"], uiDeps: ["avatar", "button", "badge", "scroll-area"] },
  "dashboard-01": { file: "dashboard-01.tsx", folder: "blocks", deps: ["lucide-react"] },
  "sidebar-07": { file: "sidebar-07.tsx", folder: "blocks", deps: ["lucide-react"] },
  "login-01": { file: "login-01.tsx", folder: "blocks", deps: ["lucide-react"] },
  "signup-01": { file: "signup-01.tsx", folder: "blocks", deps: ["lucide-react"] },

  // Helpful Aliases
  "chat": { file: "chat-01.tsx", folder: "blocks", deps: ["lucide-react"], uiDeps: ["avatar", "button", "badge", "scroll-area"] },
  "auth-form": { file: "login-01.tsx", folder: "blocks", deps: ["lucide-react"] },
  "dashboard": { file: "dashboard-01.tsx", folder: "blocks", deps: ["lucide-react"] },
  "sidebar": { file: "sidebar-07.tsx", folder: "blocks", deps: ["lucide-react"] },
  "login": { file: "login-01.tsx", folder: "blocks", deps: ["lucide-react"] },
  "signup": { file: "signup-01.tsx", folder: "blocks", deps: ["lucide-react"] },
  "checkout": { file: "interactive-checkout.tsx", folder: "blocks", deps: ["@number-flow/react", "framer-motion", "lucide-react"], uiDeps: ["button"] },
};

const SKILLS = {
  "chat": {
    name: "Chat Interface",
    description: "Composable real-time messaging UI with delivery receipts, message replies, and reaction chips",
    components: ["chat-01", "avatar", "button", "badge", "scroll-area"]
  },
  "auth-form": {
    name: "Authentication Forms",
    description: "Pre-built login and signup forms with Base UI and validation",
    components: ["login-01", "signup-01", "input", "button", "label", "checkbox"]
  },
  "dashboard": {
    name: "Dashboard Layouts",
    description: "Complete responsive dashboard layout with sidebar, header, and content area",
    components: ["dashboard-01", "sidebar-07", "card", "button", "avatar", "chart"]
  },
  "ecommerce": {
    name: "E-commerce Components",
    description: "Product cards, animated shopping cart, and interactive checkout flow",
    components: ["interactive-checkout", "badge", "button"]
  },
  "creative-canvas": {
    name: "Creative AI & 3D Shaders",
    description: "Generative 3D thinking orb, specular metal reflection shaders, glowing border beams, and voice reactivity",
    components: ["thinking-orb", "thinking-orb-block", "metal-fx", "metal-fx-block", "border-beam", "voice-glow", "sticky-slides-block", "sticky-slides", "img-fx", "liquid-gooey"]
  },
  "data-table": {
    name: "Data Tables",
    description: "Advanced data tables with sorting, filtering, and pagination",
    components: ["table", "pagination", "badge", "button"]
  }
};

const UTILS_FILE = "utils.ts";

const SUPPORTED_STYLES = ["nova", "default", "new-york"];

async function resolveComponentSource(comp, name, quiet) {
  const folder = comp.folder || "ui";
  const localCandidates = [
    folder === "hooks" ? path.join(__dirname, "..", "src", "hooks", comp.file) : path.join(__dirname, "..", "src", "components", folder, comp.file),
    path.join(__dirname, "..", "src", "components", folder, comp.file),
    path.join(__dirname, "..", "src", "components", folder === "ui" ? "blocks" : "ui", comp.file),
  ];
  const localFound = localCandidates.find((p) => fs.existsSync(p));

  if (localFound) {
    return fs.readFileSync(localFound, "utf-8");
  }

  const primaryUrl = folder === "hooks"
    ? `${GITHUB_RAW}/${GITHUB_REPO}/main/src/hooks/${comp.file}`
    : `${GITHUB_RAW}/${GITHUB_REPO}/main/src/components/${folder}/${comp.file}`;
  if (!quiet) console.log(`Downloading ${name}...`);
  try {
    return await fetch(primaryUrl);
  } catch {
    const altFolder = folder === "ui" ? "blocks" : "ui";
    const altUrl = `${GITHUB_RAW}/${GITHUB_REPO}/main/src/components/${altFolder}/${comp.file}`;
    try {
      return await fetch(altUrl);
    } catch {
      throw new Error(
        `Failed to download "${name}" from github.com/${GITHUB_REPO}. It may have been moved or removed - run \`list\` to see available components.`
      );
    }
  }
}

function findInstalledFile(comp) {
  if (comp.folder === "hooks") {
    const hookCandidates = [
      path.join(process.cwd(), "hooks", comp.file),
      path.join(process.cwd(), "src", "hooks", comp.file),
    ];
    return hookCandidates.find((p) => fs.existsSync(p));
  }
  const candidates = [
    path.join(process.cwd(), "components", comp.folder || "ui", comp.file),
    path.join(process.cwd(), "src", "components", comp.folder || "ui", comp.file),
  ];
  return candidates.find((p) => fs.existsSync(p));
}

function pascalCase(text) {
  return text
    .replace(/\.(tsx|jsx|ts|js)$/, "")
    .split(/-|_/)
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join("");
}

function recordStyle(style) {
  if (!style) return;
  if (!SUPPORTED_STYLES.includes(style)) {
    throw new Error(
      `Unsupported style "${style}". Supported styles: ${SUPPORTED_STYLES.join(", ")}`
    );
  }
  const cfgPath = path.join(process.cwd(), "components.json");
  let cfg = {};
  if (fs.existsSync(cfgPath)) {
    try {
      cfg = JSON.parse(fs.readFileSync(cfgPath, "utf-8"));
    } catch {
      cfg = {};
    }
  }
  cfg.style = style;
  fs.writeFileSync(cfgPath, JSON.stringify(cfg, null, 2) + "\n");
  console.log(
    `\x1b[36mStyle "${style}" recorded in components.json\x1b[0m (qalvinui ships the nova design language; default and new-york map to the same component code)`
  );
}

function fetch(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith("https") ? https : http;
    client.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return fetch(res.headers.location).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed to fetch ${url} (HTTP ${res.statusCode})`));
      }
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => resolve(data));
    }).on("error", reject);
  });
}

function getOutputDir(folder = "ui") {
  const args = process.argv.slice(2);
  const idx = args.indexOf("--dir");
  if (idx !== -1 && args[idx + 1]) return args[idx + 1];
  const shortIdx = args.indexOf("-d");
  if (shortIdx !== -1 && args[shortIdx + 1]) return args[shortIdx + 1];
  if (folder === "hooks") {
    if (fs.existsSync(path.join(process.cwd(), "src"))) {
      return path.join(process.cwd(), "src", "hooks");
    }
    return path.join(process.cwd(), "hooks");
  }
  return path.join(process.cwd(), "components", folder);
}

function getLibDir() {
  const args = process.argv.slice(2);
  const idx = args.indexOf("--lib");
  if (idx !== -1 && args[idx + 1]) return args[idx + 1];
  const shortIdx = args.indexOf("-l");
  if (shortIdx !== -1 && args[shortIdx + 1]) return args[shortIdx + 1];
  return path.join(process.cwd(), "lib");
}

async function downloadComponent(name, isSubDep = false) {
  const comp = COMPONENTS[name];
  if (!comp) {
    console.error(`\x1b[31mError: Unknown component or block "${name}"\x1b[0m`);
    console.log("Run `list` to see all available components and blocks.");
    return;
  }

  const folder = comp.folder || "ui";
  const outputDir = getOutputDir(folder);
  const libDir = getLibDir();

  fs.mkdirSync(outputDir, { recursive: true });
  fs.mkdirSync(libDir, { recursive: true });

  // 1. Resolve component source (local package first, then GitHub raw)
  const componentCode = await resolveComponentSource(comp, name, false);

  const outPath = path.join(outputDir, comp.file);
  fs.writeFileSync(outPath, componentCode);
  console.log(`\x1b[32mCreated\x1b[0m ${path.relative(process.cwd(), outPath)}`);

  // Download utils.ts if it doesn't exist
  const utilsPath = path.join(libDir, UTILS_FILE);
  if (!fs.existsSync(utilsPath)) {
    const localUtils = path.join(__dirname, "..", "src", "lib", UTILS_FILE);
    if (fs.existsSync(localUtils)) {
      fs.writeFileSync(utilsPath, fs.readFileSync(localUtils, "utf-8"));
      console.log(`\x1b[32mCreated\x1b[0m ${path.relative(process.cwd(), utilsPath)}`);
    } else {
      try {
        const utilsUrl = `${GITHUB_RAW}/${GITHUB_REPO}/main/src/lib/${UTILS_FILE}`;
        const utilsCode = await fetch(utilsUrl);
        fs.writeFileSync(utilsPath, utilsCode);
        console.log(`\x1b[32mCreated\x1b[0m ${path.relative(process.cwd(), utilsPath)}`);
      } catch (e) {
        // Ignore if failed
      }
    }
  }

  // Handle required sub-components (uiDeps)
  if (comp.uiDeps && comp.uiDeps.length > 0) {
    for (const depName of comp.uiDeps) {
      const depComp = COMPONENTS[depName];
      if (depComp) {
        const depDir = getOutputDir(depComp.folder || "ui");
        const depPath = path.join(depDir, depComp.file);
        if (!fs.existsSync(depPath)) {
          console.log(`\x1b[36mInstalling required dependency component: ${depName}...\x1b[0m`);
          await downloadComponent(depName, true);
        }
      }
    }
  }

  if (isSubDep) return;

  // Report dependencies
  if (comp.deps && comp.deps.length > 0) {
    const existingDeps = getExistingDeps();
    const missing = comp.deps.filter((d) => !existingDeps[d]);
    if (missing.length > 0) {
      console.log(`\n\x1b[33mInstall missing dependencies:\x1b[0m`);
      console.log(`  npm install ${missing.join(" ")}`);
    }
  }

  const baseName = comp.file.replace(/\.(tsx|jsx|ts|js)$/, "");
  const importName = baseName
    .split("-")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join("");
  console.log(`\n\x1b[32mDone!\x1b[0m Import from "@/components/${folder}/${baseName}":`);
  console.log(`  import { ${importName} } from "@/components/${folder}/${baseName}";`);
  if (process.argv.includes("--dir") || process.argv.includes("-d")) {
    console.log(`  \x1b[90m(installed to: ${path.relative(process.cwd(), outPath)})\x1b[0m`);
  }
  console.log("");
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

function listSkills() {
  console.log("\n\x1b[1mAvailable Skills & Design Patterns:\x1b[0m\n");
  for (const [key, skill] of Object.entries(SKILLS)) {
    console.log(`  \x1b[35m${key}\x1b[0m - ${skill.name}`);
    console.log(`    ${skill.description}`);
    console.log(`    \x1b[90mComponents: ${skill.components.join(", ")}\x1b[0m\n`);
  }
  console.log("Install a skill with: npx @alvinahmad/ui skills add <skill-name>\n");
}

async function installSkill(skillName) {
  if (skillName === "--all" || skillName === "all") {
    console.log("\nInstalling all available skills...");
    const allComponents = new Set();
    for (const skill of Object.values(SKILLS)) {
      skill.components.forEach((c) => allComponents.add(c));
    }
    for (const comp of allComponents) {
      try {
        await downloadComponent(comp);
      } catch (err) {
        console.error(`\x1b[31mFailed to install "${comp}": ${err.message}\x1b[0m`);
      }
    }
    console.log("\x1b[32mSuccessfully installed all skills!\x1b[0m\n");
    return;
  }

  const skill = SKILLS[skillName];
  if (!skill) {
    console.error(`\x1b[31mError: Unknown skill "${skillName}"\x1b[0m`);
    console.log(`Available skills: ${Object.keys(SKILLS).join(", ")}`);
    return;
  }

  console.log(`\nInstalling skill: \x1b[1m${skill.name}\x1b[0m...`);
  const skillFailed = [];
  for (const comp of skill.components) {
    try {
      await downloadComponent(comp);
    } catch (err) {
      skillFailed.push(comp);
      console.error(`\x1b[31mFailed to install "${comp}": ${err.message}\x1b[0m`);
    }
  }
  if (skillFailed.length > 0) process.exitCode = 1;
  console.log(`\x1b[32mSuccessfully installed skill "${skillName}"!\x1b[0m\n`);
}

function initProject() {
  const targetConfig = path.join(process.cwd(), "components.json");
  const config = {
    "$schema": "https://ui.shadcn.com/schema.json",
    "style": "nova",
    "rsc": true,
    "tsx": true,
    "tailwind": {
      "config": "tailwind.config.ts",
      "css": "src/app/globals.css",
      "baseColor": "neutral",
      "cssVariables": true,
      "prefix": ""
    },
    "aliases": {
      "components": "@/components",
      "utils": "@/lib/utils",
      "ui": "@/components/ui",
      "blocks": "@/components/blocks"
    }
  };

  if (fs.existsSync(targetConfig)) {
    console.log(`\x1b[33mConfiguration components.json already exists in ${process.cwd()}\x1b[0m`);
  } else {
    fs.writeFileSync(targetConfig, JSON.stringify(config, null, 2) + "\n");
    console.log(`\x1b[32mCreated\x1b[0m components.json`);
  }

  const libDir = getLibDir();
  const utilsPath = path.join(libDir, UTILS_FILE);
  if (!fs.existsSync(utilsPath)) {
    fs.mkdirSync(libDir, { recursive: true });
    const localUtils = path.join(__dirname, "..", "src", "lib", UTILS_FILE);
    if (fs.existsSync(localUtils)) {
      fs.writeFileSync(utilsPath, fs.readFileSync(localUtils, "utf-8"));
      console.log(`\x1b[32mCreated\x1b[0m ${path.relative(process.cwd(), utilsPath)}`);
    }
  }

  console.log(`\n\x1b[32mSuccess!\x1b[0m Initialized Qalvin UI in your project.`);
  console.log(`Run \x1b[36mnpx @alvinahmad/ui add button\x1b[0m to add your first component.\n`);
}

function searchComponents(query) {
  if (!query) {
    listComponents();
    return;
  }
  const q = query.toLowerCase();
  const matched = Object.keys(COMPONENTS).filter((k) => k.toLowerCase().includes(q));
  console.log(`\nFound ${matched.length} component(s) matching "${query}":\n`);
  matched.forEach((name) => {
    console.log(`  \x1b[36m${name}\x1b[0m (${COMPONENTS[name].folder || "ui"})`);
  });
  console.log("");
}

function printHelp() {
  console.log(`
  \x1b[1m@alvinahmad/ui\x1b[0m (or \x1b[1m@alvinahmad/qalvinui\x1b[0m) - Modern UI component library

  \x1b[1mUsage:\x1b[0m
    npx @alvinahmad/ui init                Initialize Qalvin UI configuration
    npx @alvinahmad/ui add <component>    Add a component or block to your project
    npx @alvinahmad/ui add --all          Add all available components & blocks
    npx @alvinahmad/ui add --registry <url> <component>
                                          Install a component from a hosted registry
    npx @alvinahmad/ui update [component] Update installed component(s) to the latest version
    npx @alvinahmad/ui export <component> --v0
                                          Export component code into ./v0-export for v0.dev
    npx @alvinahmad/ui create <name>      Scaffold a new empty component
    npx @alvinahmad/ui validate-registry [--file <path>]
                                          Validate a registry.json / registry item file
    npx @alvinahmad/ui create-registry <name>
                                          Scaffold a new local component registry
    npx @alvinahmad/ui add-to-registry <component>
                                          Embed a component into your local registry
    npx @alvinahmad/ui publish-registry   Validate & build the dist/ registry bundle
    npx @alvinahmad/ui create-registry-item <component>
                                          Emit a standalone registry item JSON
    npx @alvinahmad/ui validate-registry-item <name | path>
                                          Validate a registry item file
    npx @alvinahmad/ui list               List all available components & blocks
    npx @alvinahmad/ui search <query>     Search components by name
    npx @alvinahmad/ui skills list        List available UI design pattern skills
    npx @alvinahmad/ui skills add <skill> Install a skill pattern (e.g. auth-form, dashboard)
    npx @alvinahmad/ui mcp                Start Model Context Protocol server for AI tools
    npx @alvinahmad/ui --help             Show this help message

  \x1b[1mOptions:\x1b[0m
    --dir, -d <path>    Output directory for components (default: ./components/ui or ./components/blocks)
    --lib, -l <path>    Output directory for lib/utils (default: ./lib)
    --registry <url>    Registry URL (add) / registry directory (publish-registry)
    --style, -s <name>  Record component style (nova, default, new-york) in components.json

  \x1b[1mExamples:\x1b[0m
    npx @alvinahmad/ui add button
    npx @alvinahmad/ui add interactive-checkout
    npx @alvinahmad/ui add --registry qalvinahmad/qalvinui button
    npx @alvinahmad/ui add button --style nova
    npx @alvinahmad/ui update --all
    npx @alvinahmad/ui export button --v0
    npx @alvinahmad/ui create-registry my-registry && npx @alvinahmad/ui add-to-registry button
    npx @alvinahmad/ui skills add auth-form
    npx @alvinahmad/ui mcp
  `);
}

async function updateComponents(filterNames) {
  let names;
  if (filterNames.length === 0 || filterNames.includes("--all")) {
    names = Object.keys(COMPONENTS);
  } else {
    names = filterNames;
  }

  console.log("\nUpdating components to the latest version...\n");
  const failed = [];
  let updated = 0;

  for (const name of names) {
    try {
      const comp = COMPONENTS[name];
      if (!comp) {
        failed.push(name);
        console.error(`\x1b[31mUnknown component "${name}"\x1b[0m`);
        continue;
      }
      const installed = findInstalledFile(comp);
      if (!installed) {
        console.log(`\x1b[36m${name}\x1b[0m is not installed here, skipping (install with \`add ${name}\`)`);
        continue;
      }
      const code = await resolveComponentSource(comp, name, true);
      fs.writeFileSync(installed, code);
      updated++;
      console.log(`\x1b[32mUpdated\x1b[0m ${path.relative(process.cwd(), installed)}`);
    } catch (err) {
      failed.push(name);
      console.error(`\x1b[31mFailed to update "${name}": ${err.message}\x1b[0m`);
    }
  }

  if (failed.length > 0) {
    console.log(`\x1b[33m${failed.length} component(s) failed: ${failed.join(", ")}\x1b[0m\n`);
    process.exitCode = 1;
  } else {
    console.log(`\n\x1b[32mUpdated ${updated} component(s) to the latest version!\x1b[0m\n`);
  }
}

function collectDeps(comp) {
  const deps = [...(comp.deps || [])];
  for (const uiDep of comp.uiDeps || []) {
    const depComp = COMPONENTS[uiDep];
    if (depComp && depComp.deps) deps.push(...depComp.deps);
  }
  return [...new Set(deps)];
}

async function exportComponents(filterNames) {
  const targets = filterNames.filter((n) => COMPONENTS[n]);
  const unknown = filterNames.filter((n) => !COMPONENTS[n]);
  if (unknown.length > 0) {
    console.error(`\x1b[31mUnknown component(s): ${unknown.join(", ")}\x1b[0m`);
  }
  if (targets.length === 0) {
    console.error("\x1b[31mNothing to export.\x1b[0m Usage: npx @alvinahmad/ui export <component> --v0");
    process.exitCode = 1;
    return;
  }

  const outDir = path.join(process.cwd(), "v0-export");
  fs.mkdirSync(outDir, { recursive: true });

  console.log(`\nExporting ${targets.length} component(s) for v0...\n`);
  for (const name of targets) {
    const comp = COMPONENTS[name];
    const code = await resolveComponentSource(comp, name, true);
    const deps = collectDeps(comp);
    const header = [
      `// Exported by @alvinahmad/ui - paste this file into v0 (https://v0.dev/new)`,
      `// Registry item: ${name} (${comp.folder})`,
      deps.length > 0 ? `// Install dependencies first: npm install ${deps.join(" ")}` : "",
      comp.uiDeps && comp.uiDeps.length > 0 ? `// Also requires: ${comp.uiDeps.map((u) => `@/components/ui/${u}`).join(", ")}` : "",
      "",
    ]
      .filter(Boolean)
      .join("\n");

    const outPath = path.join(outDir, `${name}${path.extname(comp.file)}`);
    fs.writeFileSync(outPath, header + code);
    console.log(`\x1b[32mExported\x1b[0m ${path.relative(process.cwd(), outPath)}`);
  }

  const readme = `# v0 Export

Generated by \`qalvinui export <component> --v0\`.

1. Open https://v0.dev/new
2. Paste the contents of each \`.tsx\` file below into the prompt/code editor.
3. Resolve the external imports listed in the headers (install the dependencies, or add the referenced \`@/components/ui/*\` files from the CLI).
`;
  fs.writeFileSync(path.join(outDir, "README.md"), readme);
  console.log(`\x1b[32mWrote\x1b[0m ${path.join("v0-export", "README.md")}`);
  console.log("\nOpen https://v0.dev/new and paste the file contents. See v0-export/README.md.\n");
}

function createComponent(nameArg) {
  if (!nameArg || !/^[a-zA-Z][a-zA-Z0-9-]*$/.test(nameArg)) {
    console.error("\x1b[31mError: invalid component name\x1b[0m");
    console.log("Usage: npx @alvinahmad/ui create <my-component>");
    process.exitCode = 1;
    return;
  }
  const outDir = getOutputDir("ui");
  const outPath = path.join(outDir, `${nameArg}.tsx`);
  if (fs.existsSync(outPath)) {
    console.error(`\x1b[31mError: ${path.relative(process.cwd(), outPath)} already exists\x1b[0m`);
    process.exitCode = 1;
    return;
  }

  fs.mkdirSync(outDir, { recursive: true });
  const Pascal = pascalCase(nameArg);
  const template = `"use client";

import * as React from "react";

export interface ${Pascal}Props {
  className?: string;
  children?: React.ReactNode;
}

export function ${Pascal}({ className, children }: ${Pascal}Props) {
  return (
    <div className={className}>{children}</div>
  );
}

export default ${Pascal};
`;
  fs.writeFileSync(outPath, template);
  console.log(`\x1b[32mCreated\x1b[0m ${path.relative(process.cwd(), outPath)}`);
  console.log("Next steps:");
  console.log(`  1. Implement your component in ${path.relative(process.cwd(), outPath)}`);
  console.log(`  2. Share it: npx @alvinahmad/ui create-registry-item ${nameArg}`);
  console.log(`  3. Or publish a registry: npx @alvinahmad/ui publish-registry`);
}

function validateRegistryData(data, label) {
  const errors = [];
  const isItem = data && !Array.isArray(data.items) && Array.isArray(data.files);

  if (!isItem) {
    if (typeof data.name !== "string" || data.name.length === 0) {
      errors.push(`${label}: "name" must be a non-empty string`);
    }
    if (!Array.isArray(data.items)) {
      errors.push(`${label}: "items" must be an array`);
    } else {
      data.items.forEach((item, index) => {
        const itemLabel = `${label} -> items[${index}]`;
        validateRegistryData({ ...item, items: undefined }, itemLabel + " (item)");
      });
    }
    return errors;
  }

  if (typeof data.name !== "string" || data.name.length === 0) {
    errors.push(`${label}: item "name" must be a non-empty string`);
  }
  if (!Array.isArray(data.files) || data.files.length === 0) {
    errors.push(`${label}: "files" must be a non-empty array`);
  } else {
    data.files.forEach((file, index) => {
      if (typeof file.path !== "string" || file.path.length === 0) {
        errors.push(`${label} -> files[${index}]: "path" must be a non-empty string`);
      }
    });
  }
  return errors;
}

function validateRegistryFile(filePath) {
  if (!fs.existsSync(filePath)) {
    console.error(`\x1b[31mError: file not found: ${filePath}\x1b[0m`);
    return 1;
  }
  let data;
  try {
    data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  } catch (err) {
    console.error(`\x1b[31mInvalid JSON in ${filePath}: ${err.message}\x1b[0m`);
    return 1;
  }

  const errors = validateRegistryData(data, filePath);
  if (errors.length > 0) {
    console.error(`\x1b[31mValidation failed (${errors.length} problem(s)) in ${filePath}:\x1b[0m`);
    errors.forEach((e) => console.error(`  - ${e}`));
    return 1;
  }

  const itemCount = Array.isArray(data.items) ? data.items.length : 1;
  console.log(`\x1b[32mValid\x1b[0m ${filePath} (${itemCount} item(s))`);
  return 0;
}

function scaffoldNewComponentContent(name, comp, code) {
  const isBlock = comp.folder === "blocks";
  return {
    $schema: "https://qalvinahmad.com/schema/registry-item.json",
    name,
    type: isBlock ? "registry:block" : "registry:ui",
    component: pascalCase(name),
    files: [
      {
        path: `components/${isBlock ? "blocks" : "ui"}/${comp.file}`,
        type: isBlock ? "registry:block" : "registry:ui",
        content: code,
      },
    ],
    dependencies: comp.deps || [],
    internalComponentDependencies: comp.uiDeps || [],
  };
}

async function createRegistryItem(nameArg) {
  const comp = COMPONENTS[nameArg];
  if (!comp) {
    console.error(`\x1b[31mUnknown component or block "${nameArg}"\x1b[0m`);
    process.exitCode = 1;
    return;
  }
  const code = await resolveComponentSource(comp, nameArg, true);
  const item = scaffoldNewComponentContent(nameArg, comp, code);
  const outDir = path.join(process.cwd(), "registry");
  fs.mkdirSync(outDir, { recursive: true });
  const outPath = path.join(outDir, `${nameArg}.json`);
  fs.writeFileSync(outPath, JSON.stringify(item, null, 2) + "\n");
  console.log(`\x1b[32mCreated\x1b[0m ${path.relative(process.cwd(), outPath)} (files embed the component code)`);
}

function normalizeRegistryInput(input) {
  const trimmed = input.replace(/\/$/, "");
  // owner/repo shorthand
  if (/^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/.test(trimmed)) {
    return {
      registryUrl: `https://raw.githubusercontent.com/${trimmed}/main/registry.json`,
      baseDir: `https://raw.githubusercontent.com/${trimmed}/main`,
      fallbackBase: `https://raw.githubusercontent.com/${trimmed}/main`,
      isGitHubRepo: true,
    };
  }
  if (trimmed.startsWith("https://github.com/")) {
    const repoPath = trimmed.replace("https://github.com/", "");
    return {
      registryUrl: `https://raw.githubusercontent.com/${repoPath}/main/registry.json`,
      baseDir: `https://raw.githubusercontent.com/${repoPath}/main`,
      fallbackBase: `https://raw.githubusercontent.com/${repoPath}/main`,
      isGitHubRepo: true,
    };
  }
  const baseDir = trimmed.replace(/\/registry\.json\/?$/, "");
  return {
    registryUrl: `${baseDir}/registry.json`,
    baseDir,
    fallbackBase: baseDir,
    isGitHubRepo: false,
  };
}

async function fetchRegistryDefinition(def) {
  let items = [];
  try {
    const raw = await fetch(def.registryUrl);
    const data = JSON.parse(raw);
    if (Array.isArray(data) && data.every((entry) => typeof entry === "string")) {
      items = data.map((name) => ({ name, files: undefined, dependencies: [] }));
    } else if (Array.isArray(data.items)) {
      items = data.items;
    } else if (Array.isArray(data.components) && data.components.every((c) => typeof c === "string")) {
      items = data.components.map((name) => ({ name, files: undefined, dependencies: [] }));
    } else {
      items = data.items || [];
    }
  } catch {
    // registry.json unavailable - fall back to repo layout when possible
    items = [];
  }
  return items;
}

async function installFromRegistry(def, name) {
  const items = def.items;
  const item = (items || []).find(
    (candidate) => candidate && (candidate.name === name || candidate.id === name)
  );

  const written = [];
  if (item) {
    const manifestFiles = Array.isArray(item.files) ? item.files : [];
    const manifestRefs = manifestFiles.filter(
      (file) => typeof file === "string" && file.endsWith(".json")
    );
    let componentFiles = manifestFiles.filter(
      (file) =>
        typeof file === "object" &&
        file &&
        typeof file.path === "string"
    );

    if (manifestRefs.length > 0) {
      // Standard layout: registry.json references a sibling <name>.json manifest
      try {
        const itemJson = JSON.parse(await fetch(`${def.baseDir}/${manifestRefs[0]}`));
        componentFiles = Array.isArray(itemJson.files) ? itemJson.files : [];
      } catch {
        componentFiles = [];
      }
    }

    if (componentFiles.length === 0) {
      throw new Error(
        `Registry item "${name}" contains no files (from ${def.registryUrl}). Emit one with \`create-registry-item ${name}\`.`
      );
    }
    for (const file of componentFiles) {
      const content =
        typeof file === "object" && typeof file.content === "string"
          ? file.content
          : await fetch(`${def.baseDir}/${file.path}`);
      const outPath = path.join(process.cwd(), file.path);
      fs.mkdirSync(path.dirname(outPath), { recursive: true });
      fs.writeFileSync(outPath, content);
      written.push(path.relative(process.cwd(), outPath));
    }
    const deps = item.dependencies || [];
    if (deps.length > 0) {
      const existing = getExistingDeps();
      const missing = deps.filter((d) => !existing[d]);
      if (missing.length > 0) {
        console.log(`\n\x1b[33mInstall missing dependencies:\x1b[0m`);
        console.log(`  npm install ${missing.join(" ")}`);
      }
    }
    console.log(`\x1b[32mInstalled\x1b[0m ${name} from registry:`);
    written.forEach((p) => console.log(`  - ${p}`));
    return;
  }

  // Fallback: registry.json absent or name missing - resolve as qalvinui-style repo (github only)
  if (!def.isGitHubRepo) {
    throw new Error(
      `Component "${name}" not found in registry (${def.registryUrl}). Available: ${
        (items || []).map((i) => i.name).slice(0, 10).join(", ") || "none"
      }`
    );
  }
  const folders = ["ui", "blocks"];
  let componentCode = null;
  let usedFolder = "ui";
  for (const folder of folders) {
    try {
      componentCode = await fetch(`${def.fallbackBase}/src/components/${folder}/${name}.tsx`);
      usedFolder = folder;
      break;
    } catch {
      componentCode = null;
    }
  }
  if (componentCode === null) {
    throw new Error(`Component "${name}" not found in github registry (${def.fallbackBase})`);
  }
  const outPath = path.join(process.cwd(), "components", usedFolder, `${name}.tsx`);
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, componentCode);
  console.log(`\x1b[32mInstalled\x1b[0m ${name} from github registry:`);
  console.log(`  - ${path.relative(process.cwd(), outPath)}`);
}

async function addToRegistry(nameArgs, registryDirArg) {
  const regPath = locateLocalRegistry(registryDirArg);
  if (!regPath) {
    console.error(
      '\x1b[31mError: no local registry found.\x1b[0m Run `create-registry <name>` first (or pass --registry <dir>).'
    );
    process.exitCode = 1;
    return;
  }
  const regDir = path.dirname(regPath);
  const registryJson = JSON.parse(fs.readFileSync(regPath, "utf-8"));
  if (!Array.isArray(registryJson.items)) registryJson.items = [];

  const targets = nameArgs.filter((n) => !n.startsWith("--"));
  const failed = [];
  for (const name of targets) {
    try {
      const comp = COMPONENTS[name];
      if (!comp) {
        failed.push(name);
        console.error(`\x1b[31mUnknown component or block "${name}"\x1b[0m`);
        continue;
      }
      const code = await resolveComponentSource(comp, name, true);
      const item = scaffoldNewComponentContent(name, comp, code);
      const itemPath = path.join(regDir, `${name}.json`);
      fs.writeFileSync(itemPath, JSON.stringify(item, null, 2) + "\n");
      registryJson.items = registryJson.items.filter((entry) => entry.name !== name);
      registryJson.items.push({ name, files: [`${name}.json`], dependencies: comp.deps || [] });
      console.log(`\x1b[32mAdded\x1b[0m ${name} -> ${path.relative(process.cwd(), itemPath)}`);
    } catch (err) {
      failed.push(name);
      console.error(`\x1b[31mFailed to add "${name}": ${err.message}\x1b[0m`);
    }
  }
  fs.writeFileSync(regPath, JSON.stringify(registryJson, null, 2) + "\n");
  console.log(`\x1b[32mUpdated\x1b[0m ${path.relative(process.cwd(), regPath)} (${registryJson.items.length} items)`);
  if (failed.length > 0) process.exitCode = 1;
}

function locateLocalRegistry(registryDirArg) {
  const candidates = [];
  if (registryDirArg) {
    candidates.push(
      path.join(process.cwd(), registryDirArg, "registry.json"),
      path.isAbsolute(registryDirArg) ? path.join(registryDirArg, "registry.json") : null
    );
  }
  candidates.push(
    path.join(process.cwd(), "my-registry", "registry.json"),
    path.join(process.cwd(), "registry.json"),
    path.join(process.cwd(), "dist", "registry.json")
  );
  return candidates.filter(Boolean).find((p) => fs.existsSync(p));
}

async function createRegistry(nameArg) {
  if (!nameArg || !/^[a-zA-Z][a-zA-Z0-9-]*$/.test(nameArg)) {
    console.error("\x1b[31mError: invalid registry name\x1b[0m");
    console.log("Usage: npx @alvinahmad/ui create-registry <my-registry>");
    process.exitCode = 1;
    return;
  }
  const dir = path.join(process.cwd(), nameArg);
  if (fs.existsSync(path.join(dir, "registry.json"))) {
    console.error(`\x1b[31mError: registry already exists at ${nameArg}/registry.json\x1b[0m`);
    process.exitCode = 1;
    return;
  }
  fs.mkdirSync(dir, { recursive: true });
  const registryJson = {
    $schema: "https://qalvinahmad.com/schema/registry.json",
    name: nameArg,
    description: "",
    items: [],
  };
  fs.writeFileSync(
    path.join(dir, "registry.json"),
    JSON.stringify(registryJson, null, 2) + "\n"
  );
  const readme = `# ${nameArg}

Component registry generated by \`qalvinui create-registry\`.

## Commands

- \`qalvinui add-to-registry <component>\` - embed a component into this registry
- \`qalvinui publish-registry\` - validate & build the dist/ bundle for hosting
- \`qalvinui add --registry https://<host>/registry.json <component>\` - install from a hosted registry
`;
  fs.writeFileSync(path.join(dir, "README.md"), readme);
  console.log(`\x1b[32mCreated\x1b[0m ${nameArg}/registry.json and ${nameArg}/README.md`);
  console.log("Next steps:");
  console.log("  1. npx @alvinahmad/ui add-to-registry <component>");
  console.log("  2. npx @alvinahmad/ui publish-registry");
}

async function publishRegistry(registryDirArg) {
  const regPath = locateLocalRegistry(registryDirArg);
  if (!regPath) {
    console.error(
      '\x1b[31mError: no local registry found to publish.\x1b[0m Run `create-registry <name>` first, or use `npm publish` to publish the npm package.'
    );
    process.exitCode = 1;
    return;
  }
  const errors = validateRegistryFile(regPath);
  if (errors > 0) {
    console.error("\x1b[31mFix the problems above before publishing.\x1b[0m");
    process.exitCode = 1;
    return;
  }

  const registryJson = JSON.parse(fs.readFileSync(regPath, "utf-8"));
  const regDir = path.dirname(regPath);
  const distDir = path.join(process.cwd(), "dist");
  fs.mkdirSync(distDir, { recursive: true });
  fs.copyFileSync(regPath, path.join(distDir, "registry.json"));

  let itemFiles = 0;
  for (const item of registryJson.items || []) {
    const itemPath = path.join(regDir, `${item.name}.json`);
    if (fs.existsSync(itemPath)) {
      fs.copyFileSync(itemPath, path.join(distDir, `${item.name}.json`));
      itemFiles++;
    } else {
      console.log(`\x1b[33mWarning: item "${item.name}" is listed in registry.json but ${item.name}.json is missing\x1b[0m`);
    }
  }

  console.log(`\n\x1b[32mPublished registry bundle to dist/:\x1b[0m`);
  console.log(`  - dist/registry.json`);
  console.log(`  - dist/<component>.json (${itemFiles} item file(s))`);
  console.log("\nHost dist/ on any static host (Vercel, GitHub Pages, CDN), then install with:");
  console.log(`  npx @alvinahmad/ui add --registry https://<your-host>/registry.json <component>`);
  console.log("\nGitHub workflow: commit dist/ and push - raw.githubusercontent.com serves it directly.");
}

async function main() {
  const args = process.argv.slice(2);

  if (args.length === 0 || args.includes("--help") || args.includes("-h")) {
    printHelp();
    return;
  }

  const command = args[0];

  if (command === "mcp" || command === "mcp-server") {
    const { startServer } = require("./mcp");
    startServer();
    return;
  }

  if (command === "init") {
    initProject();
    return;
  }

  if (command === "list" || command === "ls") {
    await listComponents();
    return;
  }

  if (command === "search") {
    searchComponents(args[1]);
    return;
  }

  if (command === "skills" || command === "skill") {
    const subCommand = args[1] || "list";
    if (subCommand === "list" || subCommand === "ls") {
      listSkills();
      return;
    }
    if (subCommand === "add" || subCommand === "install") {
      const skillName = args[2];
      if (!skillName) {
        console.error("\x1b[31mError: No skill specified.\x1b[0m Usage: npx @alvinahmad/ui skills add <skill-name>");
        return;
      }
      await installSkill(skillName);
      return;
    }
    console.error(`\x1b[31mUnknown skills subcommand: ${subCommand}\x1b[0m`);
    console.log("Usage: npx @alvinahmad/ui skills list | skills add <skill-name>");
    return;
  }

  if (command === "add") {
    const components = [];
    let style = null;
    let registryUrl = null;
    for (let i = 1; i < args.length; i++) {
      const arg = args[i];
      if (arg === "--style" || arg === "-s") {
        style = args[i + 1] || null;
        i++;
      } else if (arg === "--registry") {
        registryUrl = args[i + 1] || null;
        i++;
      } else if (arg === "--dir" || arg === "-d" || arg === "--lib" || arg === "-l") {
        i++; // consumed by getOutputDir()/getLibDir() reading argv directly
      } else if (arg.startsWith("--")) {
        // ignore other flags
      } else {
        components.push(arg);
      }
    }

    try {
      recordStyle(style);
    } catch (err) {
      console.error(`\x1b[31mError: ${err.message}\x1b[0m`);
      process.exitCode = 1;
      return;
    }

    if (registryUrl) {
      const def = { ...normalizeRegistryInput(registryUrl), items: [] };
      try {
        def.items = await fetchRegistryDefinition(def);
      } catch (err) {
        console.error(`\x1b[31mFailed to load registry (${def.registryUrl}): ${err.message}\x1b[0m`);
        process.exitCode = 1;
        return;
      }

      const isAll = args.includes("--all");
      const targets = isAll && components.length === 0
        ? def.items.map((item) => item.name).filter(Boolean)
        : components;

      if (targets.length === 0) {
        console.error("\x1b[31mError: No component specified\x1b[0m");
        console.log("Usage: npx @alvinahmad/ui add --registry <url> <component>");
        process.exitCode = 1;
        return;
      }

      const failed = [];
      for (const name of targets) {
        try {
          await installFromRegistry(def, name);
        } catch (err) {
          failed.push(name);
          console.error(`\x1b[31mFailed to install "${name}": ${err.message}\x1b[0m`);
        }
      }
      if (failed.length > 0) process.exitCode = 1;
      return;
    }

    if (args.includes("--all")) {
      console.log("\nInstalling all available components and blocks...\n");
      const failed = [];
      for (const name of Object.keys(COMPONENTS)) {
        try {
          await downloadComponent(name);
        } catch (err) {
          failed.push(name);
          console.error(`\x1b[31mFailed to install "${name}": ${err.message}\x1b[0m`);
        }
      }
      if (failed.length > 0) {
        console.log(`\x1b[33m${failed.length} component(s) failed: ${failed.join(", ")}\x1b[0m\n`);
        process.exitCode = 1;
      } else {
        console.log("\x1b[32mSuccessfully installed all components!\x1b[0m\n");
      }
      return;
    }

    if (components.length === 0) {
      console.error("\x1b[31mError: No component specified\x1b[0m");
      console.log("Usage: npx @alvinahmad/ui add <component>");
      return;
    }
    const failed = [];
    for (const name of components) {
      try {
        await downloadComponent(name);
      } catch (err) {
        failed.push(name);
        console.error(`\x1b[31mFailed to install "${name}": ${err.message}\x1b[0m`);
      }
    }
    if (failed.length > 0) process.exitCode = 1;
    return;
  }

  if (command === "update" || command === "upgrade") {
    const names = args.slice(1).filter((a) => !a.startsWith("--"));
    await updateComponents(names);
    return;
  }

  if (command === "export") {
    const names = args.slice(1).filter((a) => !a.startsWith("--"));
    await exportComponents(names);
    return;
  }

  if (command === "create") {
    createComponent(args[1]);
    return;
  }

  if (command === "validate-registry") {
    let target = null;
    const rest = args.slice(1);
    for (let i = 0; i < rest.length; i++) {
      if (rest[i] === "--file" || rest[i] === "-f") {
        target = rest[i + 1] || null;
        i++;
      } else if (!rest[i].startsWith("--")) {
        target = target || rest[i];
      }
    }
    if (!target) {
      target = ["registry.json", "dist/registry.json"].map((p) => path.join(process.cwd(), p)).find((p) => fs.existsSync(p));
    }
    if (!target) {
      console.error("\x1b[31mError: no registry file found\x1b[0m");
      console.log("Usage: npx @alvinahmad/ui validate-registry [--file <path>]");
      process.exitCode = 1;
      return;
    }
    const errors = validateRegistryFile(target);
    if (errors > 0) process.exitCode = 1;
    return;
  }

  if (command === "validate-registry-item") {
    const targetArg = args[1];
    if (!targetArg) {
      console.error("\x1b[31mError: no registry item specified\x1b[0m");
      console.log("Usage: npx @alvinahmad/ui validate-registry-item <component | path/to/item.json>");
      process.exitCode = 1;
      return;
    }
    let target = targetArg;
    if (!target.endsWith(".json")) {
      const guessed = ["registry", "my-registry", "dist"].map((dir) => path.join(process.cwd(), dir, `${target}.json`));
      const found = guessed.find((p) => fs.existsSync(p));
      if (!found) {
        console.error(`\x1b[31mError: no registry item json found for "${target}"\x1b[0m`);
        console.log("Run: npx @alvinahmad/ui create-registry-item " + target);
        process.exitCode = 1;
        return;
      }
      target = found;
    }
    const errors = validateRegistryFile(target);
    if (errors > 0) process.exitCode = 1;
    return;
  }

  if (command === "create-registry") {
    await createRegistry(args[1]);
    return;
  }

  if (command === "add-to-registry") {
    let registryDirArg = null;
    const rest = args.slice(1).filter((a) => !a.startsWith("--"));
    const regIdx = args.indexOf("--registry");
    if (regIdx !== -1 && args[regIdx + 1]) registryDirArg = args[regIdx + 1];
    await addToRegistry(rest, registryDirArg);
    return;
  }

  if (command === "create-registry-item") {
    const names = args.slice(1).filter((a) => !a.startsWith("--"));
    if (names.length === 0) {
      console.error("\x1b[31mError: no component specified\x1b[0m");
      console.log("Usage: npx @alvinahmad/ui create-registry-item <component>");
      process.exitCode = 1;
      return;
    }
    for (const name of names) {
      await createRegistryItem(name);
    }
    return;
  }

  if (command === "publish" || command === "publish-registry") {
    let registryDirArg = null;
    const regIdx = args.indexOf("--registry");
    if (regIdx !== -1 && args[regIdx + 1]) registryDirArg = args[regIdx + 1];
    await publishRegistry(registryDirArg);
    return;
  }

  console.error(`\x1b[31mUnknown command: ${command}\x1b[0m`);
  printHelp();
}

main().catch((err) => {
  console.error("\x1b[31mError:\x1b[0m", err.message);
  process.exit(1);
});
