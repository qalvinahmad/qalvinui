import Link from "next/link";
import { headers } from "next/headers";

function NavLink({ href, children, isNew = false }: { href: string; children: React.ReactNode, isNew?: boolean }) {
  // We can add logic to highlight the active link based on current path if needed,
  // but for simplicity, we'll just render it normally for now.
  return (
    <Link href={href} className="flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground">
      {children}
      {isNew && <span className="ml-2 rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-xs leading-none text-[#000000] no-underline group-hover:no-underline">New</span>}
    </Link>
  );
}

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sections = [
    { title: "Ai Sdk", href: "/docs/ai-sdk" },
    { title: "Api Reference", href: "/docs/api-reference" },
    { title: "Authentication", href: "/docs/authentication" },
    { title: "Changelog", href: "/docs/changelog" },
    { title: "Cli", href: "/docs/cli" },
    { title: "Components Json", href: "/docs/components-json" },
    { title: "Dark Mode", href: "/docs/dark-mode" },
    { title: "Dynamic Search", href: "/docs/dynamic-search" },
    { title: "Examples", href: "/docs/examples" },
    { title: "Figma", href: "/docs/figma" },
    { title: "Formisch", href: "/docs/formisch" },
    { title: "Forms", href: "/docs/forms" },
    { title: "Get Started", href: "/docs/get-started" },
    { title: "Github Registries", href: "/docs/github-registries" },
    { title: "Installation", href: "/docs/installation" },
    { title: "Introduction", href: "/docs/introduction" },
    { title: "Javascript", href: "/docs/javascript" },
    { title: "Legacy Docs", href: "/docs/legacy-docs" },
    { title: "Llms Txt", href: "/docs/llms-txt" },
    { title: "Mcp Server", href: "/docs/mcp-server" },
    { title: "Monorepo", href: "/docs/monorepo" },
    { title: "Namespaces", href: "/docs/namespaces" },
    { title: "Open In V0", href: "/docs/open-in-v0" },
    { title: "Package Imports", href: "/docs/package-imports" },
    { title: "React Hook Form", href: "/docs/react-hook-form" },
    { title: "Registry", href: "/docs/registry" },
    { title: "Registry Directory", href: "/docs/registry-directory" },
    { title: "Registry Item Json", href: "/docs/registry-item-json" },
    { title: "Registry Json", href: "/docs/registry-json" },
    { title: "Scroll Fade", href: "/docs/scroll-fade" },
    { title: "Shadcn Helpers", href: "/docs/shadcn-helpers" },
    { title: "Shadcn React", href: "/docs/shadcn-react" },
    { title: "Shimmer", href: "/docs/shimmer" },
    { title: "Skills", href: "/docs/skills" },
    { title: "Tanstack Ai", href: "/docs/tanstack-ai" },
    { title: "Tanstack Form", href: "/docs/tanstack-form" },
    { title: "Theming", href: "/docs/theming" },
    { title: "Typeset", href: "/docs/typeset" },
    { title: "Utilities", href: "/docs/utilities" }
  ];

  const components = [
    { title: "Accordion", href: "/docs/components/accordion" },
    { title: "Alert", href: "/docs/components/alert" },
    { title: "Alert Dialog", href: "/docs/components/alert-dialog" },
    { title: "Aspect Ratio", href: "/docs/components/aspect-ratio" },
    { title: "Attachment", href: "/docs/components/attachment" },
    { title: "Avatar", href: "/docs/components/avatar" },
    { title: "Badge", href: "/docs/components/badge" },
    { title: "Breadcrumb", href: "/docs/components/breadcrumb" },
    { title: "Bubble", href: "/docs/components/bubble" },
    { title: "Button", href: "/docs/components/button" },
    { title: "Button Group", href: "/docs/components/button-group" },
    { title: "Calendar", href: "/docs/components/calendar" },
    { title: "Card", href: "/docs/components/card" },
    { title: "Carousel", href: "/docs/components/carousel" },
    { title: "Chart", href: "/docs/components/chart" },
    { title: "Checkbox", href: "/docs/components/checkbox" },
    { title: "Collapsible", href: "/docs/components/collapsible" },
    { title: "Combobox", href: "/docs/components/combobox" },
    { title: "Command", href: "/docs/components/command" },
    { title: "Context Menu", href: "/docs/components/context-menu" },
    { title: "Data Table", href: "/docs/components/data-table" },
    { title: "Date Picker", href: "/docs/components/date-picker" },
    { title: "Dialog", href: "/docs/components/dialog" },
    { title: "Direction", href: "/docs/components/direction" },
    { title: "Drawer", href: "/docs/components/drawer" },
    { title: "Dropdown Menu", href: "/docs/components/dropdown-menu" },
    { title: "Empty", href: "/docs/components/empty" },
    { title: "Field", href: "/docs/components/field" },
    { title: "Hover Card", href: "/docs/components/hover-card" },
    { title: "Input", href: "/docs/components/input" },
    { title: "Input Group", href: "/docs/components/input-group" },
    { title: "Input Otp", href: "/docs/components/input-otp" },
    { title: "Item", href: "/docs/components/item" },
    { title: "Kbd", href: "/docs/components/kbd" },
    { title: "Label", href: "/docs/components/label" },
    { title: "Marker", href: "/docs/components/marker" },
    { title: "Menubar", href: "/docs/components/menubar" },
    { title: "Message", href: "/docs/components/message" },
    { title: "Message Scroller", href: "/docs/components/message-scroller" },
    { title: "Native Select", href: "/docs/components/native-select" },
    { title: "Navigation Menu", href: "/docs/components/navigation-menu" },
    { title: "Pagination", href: "/docs/components/pagination" },
    { title: "Popover", href: "/docs/components/popover" },
    { title: "Progress", href: "/docs/components/progress" },
    { title: "Questionnaire", href: "/docs/components/questionnaire" },
    { title: "Radio Group", href: "/docs/components/radio-group" },
    { title: "Resizable", href: "/docs/components/resizable" },
    { title: "Scroll Area", href: "/docs/components/scroll-area" },
    { title: "Select", href: "/docs/components/select" },
    { title: "Separator", href: "/docs/components/separator" },
    { title: "Sheet", href: "/docs/components/sheet" },
    { title: "Sidebar", href: "/docs/components/sidebar" },
    { title: "Skeleton", href: "/docs/components/skeleton" },
    { title: "Slider", href: "/docs/components/slider" },
    { title: "Spinner", href: "/docs/components/spinner" },
    { title: "Switch", href: "/docs/components/switch" },
    { title: "Table", href: "/docs/components/table" },
    { title: "Tabs", href: "/docs/components/tabs" },
    { title: "Textarea", href: "/docs/components/textarea" },
    { title: "Toast", href: "/docs/components/toast" },
    { title: "Toggle", href: "/docs/components/toggle" },
    { title: "Toggle Group", href: "/docs/components/toggle-group" },
    { title: "Tooltip", href: "/docs/components/tooltip" },
    { title: "Typography", href: "/docs/components/typography" }
  ];

  return (
    <div className="container mx-auto px-4 max-w-screen-2xl">
      <div className="flex flex-col md:flex-row gap-6 md:gap-10 py-8">
        <aside className="w-full md:w-[220px] lg:w-[240px] shrink-0">
          <div className="sticky top-20 h-[calc(100vh-5rem)] overflow-y-auto pb-10">
            <div className="space-y-6">
              <div className="py-2">
                <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold">Getting Started</h4>
                <div className="grid grid-flow-row auto-rows-max text-sm">
                  {sections.map((item) => (
                    <NavLink key={item.href} href={item.href}>{item.title}</NavLink>
                  ))}
                </div>
              </div>
              
              <div className="py-2">
                <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold">Components</h4>
                <div className="grid grid-flow-row auto-rows-max text-sm">
                  {components.map((item) => (
                    <NavLink key={item.href} href={item.href}>{item.title}</NavLink>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </aside>
        
        <main className="flex-1 w-full min-w-0">
          {children}
        </main>
      </div>
    </div>
  );
}
