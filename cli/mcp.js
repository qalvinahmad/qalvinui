#!/usr/bin/env node

/**
 * Qalvin UI Model Context Protocol (MCP) Server
 * Enables AI assistants (Claude, Cursor, Continue, Antigravity) to:
 * - List all Qalvin UI components, blocks, and creative shaders
 * - Fetch source code and dependencies for any component
 * - List and retrieve high-level UI skills & design patterns
 * - Generate custom accessible Base UI + Tailwind CSS v4 components
 */

const readline = require("readline");
const fs = require("fs");
const path = require("path");

const PKG_VERSION = "0.2.0";

// Import components registry from cli/index.js or define local map
const COMPONENTS_FILE = path.join(__dirname, "index.js");

const SKILLS = {
  "auth-form": {
    name: "Authentication Forms",
    description: "Complete login and signup forms with Base UI and validation",
    components: ["login-01", "signup-01", "input", "button", "label", "checkbox"]
  },
  "dashboard": {
    name: "Dashboard Layouts",
    description: "Admin dashboards with collapsible sidebars, stat metrics, and charts",
    components: ["dashboard-01", "sidebar-07", "card", "button", "avatar", "chart"]
  },
  "ecommerce": {
    name: "E-commerce Components",
    description: "Interactive animated checkout flow with dynamic cart counter and container queries",
    components: ["interactive-checkout", "badge", "button"]
  },
  "creative-canvas": {
    name: "Creative AI & 3D Shaders",
    description: "Generative 3D thinking orb, specular metal reflection shaders, glowing border beams, and voice reactivity",
    components: ["thinking-orb", "thinking-orb-block", "metal-fx", "metal-fx-block", "border-beam", "voice-glow", "human-atlas-block"]
  },
  "data-table": {
    name: "Data Tables & Grids",
    description: "Advanced tables with sorting, pagination, and action menus",
    components: ["table", "pagination", "badge", "button", "dropdown-menu"]
  }
};

function getComponentList() {
  const cliContent = fs.readFileSync(COMPONENTS_FILE, "utf-8");
  const match = cliContent.match(/const COMPONENTS = ({[\s\S]*?\n};)/);
  if (match) {
    try {
      // Evaluate COMPONENTS safely
      const fn = new Function(`${match[0]}; return COMPONENTS;`);
      return fn();
    } catch {
      // Fallback
    }
  }
  return {};
}

function getComponentSource(name) {
  const components = getComponentList();
  const comp = components[name];
  if (!comp) return null;

  const folder = comp.folder || "ui";
  const candidates = [
    path.join(__dirname, "..", "src", "components", folder, comp.file),
    path.join(__dirname, "..", "src", "components", folder === "ui" ? "blocks" : "ui", comp.file)
  ];

  for (const candidate of candidates) {
    if (fs.existsSync(candidate)) {
      return {
        name,
        file: comp.file,
        folder,
        deps: comp.deps || [],
        uiDeps: comp.uiDeps || [],
        code: fs.readFileSync(candidate, "utf-8")
      };
    }
  }

  return {
    name,
    file: comp.file,
    folder,
    deps: comp.deps || [],
    uiDeps: comp.uiDeps || [],
    code: `// Source for ${name} available at https://github.com/qalvinahmad/qalvinui/tree/main/src/components/${folder}/${comp.file}`
  };
}

const TOOLS = [
  {
    name: "list_components",
    description: "List all available Qalvin UI components, blocks, and shaders with their categories and dependencies",
    inputSchema: {
      type: "object",
      properties: {
        category: {
          type: "string",
          description: "Optional filter: 'ui' for atomic components, 'blocks' for full-page blocks, or 'all'",
          enum: ["ui", "blocks", "all"]
        }
      }
    }
  },
  {
    name: "get_component",
    description: "Get the complete source code, required npm dependencies, and sub-components for any Qalvin UI component or block",
    inputSchema: {
      type: "object",
      properties: {
        name: {
          type: "string",
          description: "The component or block identifier (e.g. 'button', 'interactive-checkout', 'thinking-orb', 'dashboard-01')"
        }
      },
      required: ["name"]
    }
  },
  {
    name: "list_skills",
    description: "List all available high-level design pattern skills (e.g., 'auth-form', 'dashboard', 'ecommerce', 'creative-canvas')",
    inputSchema: {
      type: "object",
      properties: {}
    }
  },
  {
    name: "get_skill",
    description: "Get details and component list for a high-level skill",
    inputSchema: {
      type: "object",
      properties: {
        name: {
          type: "string",
          description: "Name of the skill (e.g., 'auth-form', 'dashboard', 'ecommerce', 'creative-canvas', 'data-table')"
        }
      },
      required: ["name"]
    }
  },
  {
    name: "generate_component",
    description: "Generate a new custom component using Base UI primitives and Tailwind CSS v4 conventions",
    inputSchema: {
      type: "object",
      properties: {
        name: {
          type: "string",
          description: "Component name in PascalCase (e.g. 'NotificationBanner', 'PriceCard')"
        },
        description: {
          type: "string",
          description: "What the component should do, look like, and its interactive states"
        }
      },
      required: ["name", "description"]
    }
  }
];

function handleToolCall(name, args) {
  if (name === "list_components") {
    const components = getComponentList();
    const filter = args?.category || "all";
    const result = {};

    for (const [key, val] of Object.entries(components)) {
      if (filter === "all" || val.folder === filter) {
        result[key] = {
          folder: val.folder || "ui",
          file: val.file,
          deps: val.deps || [],
          uiDeps: val.uiDeps || []
        };
      }
    }

    return {
      content: [
        {
          type: "text",
          text: JSON.stringify({ count: Object.keys(result).length, components: result }, null, 2)
        }
      ]
    };
  }

  if (name === "get_component") {
    const compName = args?.name;
    const comp = getComponentSource(compName);
    if (!comp) {
      return {
        isError: true,
        content: [
          {
            type: "text",
            text: `Component "${compName}" not found. Call list_components to see all available items.`
          }
        ]
      };
    }

    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(
            {
              name: comp.name,
              folder: comp.folder,
              file: comp.file,
              installCommand: `npx @alvinahmad/ui add ${comp.name}`,
              dependencies: comp.deps,
              uiDependencies: comp.uiDeps,
              code: comp.code
            },
            null,
            2
          )
        }
      ]
    };
  }

  if (name === "list_skills") {
    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(SKILLS, null, 2)
        }
      ]
    };
  }

  if (name === "get_skill") {
    const skillName = args?.name;
    const skill = SKILLS[skillName];
    if (!skill) {
      return {
        isError: true,
        content: [
          {
            type: "text",
            text: `Skill "${skillName}" not found. Available skills: ${Object.keys(SKILLS).join(", ")}`
          }
        ]
      };
    }

    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(
            {
              skill: skillName,
              name: skill.name,
              description: skill.description,
              installCommand: `npx @alvinahmad/ui skills add ${skillName}`,
              includedComponents: skill.components
            },
            null,
            2
          )
        }
      ]
    };
  }

  if (name === "generate_component") {
    const compName = args?.name || "CustomComponent";
    const desc = args?.description || "A modern UI component";

    const generated = `import * as React from "react";
import { cn } from "@/lib/utils";

export interface ${compName}Props extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "muted" | "outline";
}

/**
 * ${compName}
 * ${desc}
 * Built with Qalvin UI, Base UI, and Tailwind CSS v4
 */
export function ${compName}({
  className,
  variant = "default",
  children,
  ...props
}: ${compName}Props) {
  return (
    <div
      className={cn(
        "relative rounded-xl p-4 transition-colors",
        variant === "default" && "bg-card text-card-foreground border border-border shadow-sm",
        variant === "muted" && "bg-muted text-muted-foreground",
        variant === "outline" && "border border-border bg-transparent",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
`;

    return {
      content: [
        {
          type: "text",
          text: generated
        }
      ]
    };
  }

  return {
    isError: true,
    content: [
      {
        type: "text",
        text: `Unknown tool: ${name}`
      }
    ]
  };
}

function startServer() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
  });

  rl.on("line", (line) => {
    if (!line.trim()) return;

    let request;
    try {
      request = JSON.parse(line);
    } catch {
      return;
    }

    const { id, method, params } = request;

    if (method === "initialize") {
      const response = {
        jsonrpc: "2.0",
        id,
        result: {
          protocolVersion: "2024-11-05",
          capabilities: {
            tools: {}
          },
          serverInfo: {
            name: "qalvinui-mcp-server",
            version: PKG_VERSION
          }
        }
      };
      process.stdout.write(JSON.stringify(response) + "\n");
      return;
    }

    if (method === "notifications/initialized") {
      // Client handshake complete
      return;
    }

    if (method === "tools/list") {
      const response = {
        jsonrpc: "2.0",
        id,
        result: {
          tools: TOOLS
        }
      };
      process.stdout.write(JSON.stringify(response) + "\n");
      return;
    }

    if (method === "tools/call") {
      const toolName = params?.name;
      const toolArgs = params?.arguments || {};
      const toolResult = handleToolCall(toolName, toolArgs);

      const response = {
        jsonrpc: "2.0",
        id,
        result: toolResult
      };
      process.stdout.write(JSON.stringify(response) + "\n");
      return;
    }

    // Ping / generic method
    if (method === "ping") {
      process.stdout.write(JSON.stringify({ jsonrpc: "2.0", id, result: {} }) + "\n");
      return;
    }

    // Unknown method
    if (id !== undefined) {
      process.stdout.write(
        JSON.stringify({
          jsonrpc: "2.0",
          id,
          error: {
            code: -32601,
            message: `Method not found: ${method}`
          }
        }) + "\n"
      );
    }
  });

  process.stderr.write(`[Qalvin UI MCP Server v${PKG_VERSION}] Running on stdio...\n`);
}

module.exports = { startServer, TOOLS, SKILLS };

if (require.main === module) {
  startServer();
}
