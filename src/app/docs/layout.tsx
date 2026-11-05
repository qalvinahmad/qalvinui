import Link from "next/link";
import { OnThisPage } from "@/components/docs/on-this-page";

function NavLink({ href, children, isNew = false }: { href: string; children: React.ReactNode, isNew?: boolean }) {
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
    {
        "title": "Introduction",
        "href": "/docs/introduction"
    },
    {
        "title": "Components",
        "href": "/docs/components"
    },
    {
        "title": "UI",
        "href": "/docs/ui"
    },
    {
        "title": "Installation",
        "href": "/docs/installation"
    },
    {
        "title": "Theming",
        "href": "/docs/theming"
    },
    {
        "title": "CLI",
        "href": "/docs/cli"
    },
    {
        "title": "Typeset",
        "href": "/docs/typeset"
    },
    {
        "title": "Skills",
        "href": "/docs/skills"
    },
    {
        "title": "Registry",
        "href": "/docs/registry"
    },
    {
        "title": "Changelog",
        "href": "/docs/changelog"
    }
];

  const components = [
    { title: "Accordion", href: "/docs/components/accordion" },
    { title: "Alert", href: "/docs/components/alert" },
    { title: "Alert Dialog", href: "/docs/components/alert-dialog" },
    { title: "Autocomplete", href: "/docs/components/autocomplete", isNew: true },
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
    { title: "Checkbox Group", href: "/docs/components/checkbox-group", isNew: true },
    { title: "Collapsible", href: "/docs/components/collapsible" },
    { title: "Composer", href: "/docs/components/composer", isNew: true },
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
    { title: "Fieldset", href: "/docs/components/fieldset", isNew: true },
    { title: "Frame", href: "/docs/components/frame", isNew: true },
    { title: "Group", href: "/docs/components/group", isNew: true },
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
    { title: "Menu", href: "/docs/components/menu", isNew: true },
    { title: "Meter", href: "/docs/components/meter", isNew: true },
    { title: "Native Select", href: "/docs/components/native-select" },
    { title: "Number Field", href: "/docs/components/number-field", isNew: true },
    { title: "OTP Field", href: "/docs/components/otp-field", isNew: true },
    { title: "Navigation Menu", href: "/docs/components/navigation-menu" },
    { title: "Pagination", href: "/docs/components/pagination" },
    { title: "Popover", href: "/docs/components/popover" },
    { title: "Preview Card", href: "/docs/components/preview-card", isNew: true },
    { title: "Progress", href: "/docs/components/progress" },
    { title: "Questionnaire", href: "/docs/components/questionnaire" },
    { title: "Radio Group", href: "/docs/components/radio-group" },
    { title: "Resizable", href: "/docs/components/resizable" },
    { title: "Scroll Area", href: "/docs/components/scroll-area" },
    { title: "Scroll Fade", href: "/docs/components/scroll-fade" },
    { title: "Segmented Control", href: "/docs/components/segmented-control", isNew: true },
    { title: "Select", href: "/docs/components/select" },
    { title: "Separator", href: "/docs/components/separator" },
    { title: "Sheet", href: "/docs/components/sheet" },
    { title: "Shimmer", href: "/docs/components/shimmer" },
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

  const uiItems = [
    { title: "Sticky Slides", href: "/docs/ui/sticky-slides", isNew: true },
    { title: "Thinking Orb", href: "/docs/ui/thinking-orb", isNew: true },
    { title: "Metal FX", href: "/docs/ui/metal-fx", isNew: true },
    { title: "Image FX", href: "/docs/ui/img-fx", isNew: true },
    { title: "Border Beam", href: "/docs/ui/border-beam", isNew: true },
    { title: "Voice Glow", href: "/docs/ui/voice-glow", isNew: true },
    { title: "Liquid Gooey", href: "/docs/ui/liquid-gooey", isNew: true },
  ];

  const registryItems = [
    {
        "title": "Registry",
        "href": "/docs/registry"
    },
    {
        "title": "Introduction",
        "href": "/docs/introduction"
    },
    {
        "title": "Getting Started",
        "href": "/docs/get-started"
    },
    {
        "title": "GitHub Registries",
        "href": "/docs/github-registries"
    },
    {
        "title": "Registry Directory",
        "href": "/docs/registry-directory"
    },
    {
        "title": "Examples",
        "href": "/docs/examples"
    },
    {
        "title": "Namespaces",
        "href": "/docs/namespaces"
    },
    {
        "title": "Authentication",
        "href": "/docs/authentication"
    },
    {
        "title": "Dynamic Search",
        "href": "/docs/dynamic-search"
    },
    {
        "title": "MCP Server",
        "href": "/docs/mcp-server"
    },
    {
        "title": "Open in v0",
        "href": "/docs/open-in-v0"
    },
    {
        "title": "API Reference",
        "href": "/docs/api-reference"
    },
    {
        "title": "registry.json",
        "href": "/docs/registry-json"
    },
    {
        "title": "registry-item.json",
        "href": "/docs/registry-item-json"
    }
];

  return (
    <div className="container mx-auto px-4 max-w-screen-2xl">
      <div className="flex flex-col md:flex-row gap-6 md:gap-10 py-8">
        <aside className="w-full md:w-[220px] lg:w-[240px] shrink-0">
          <div className="sticky top-20 h-[calc(100vh-5rem)] overflow-y-auto pb-10">
            <div className="space-y-6">
              
              {/* Sections */}
              <div className="py-2">
                <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold">Sections</h4>
                <div className="grid grid-flow-row auto-rows-max text-sm">
                  {sections.map((item) => (
                    <NavLink key={item.href} href={item.href}>{item.title}</NavLink>
                  ))}
                </div>
              </div>
              
              {/* Components */}
              <div className="py-2">
                <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold">Components</h4>
                <div className="grid grid-flow-row auto-rows-max text-sm">
                  {components.map((item) => (
                    <NavLink key={item.href} href={item.href}>{item.title}</NavLink>
                  ))}
                </div>
              </div>

              {/* UI */}
              <div className="py-2">
                <div className="flex items-center justify-between mb-1 px-2 py-1">
                  <h4 className="text-sm font-semibold">UI</h4>
                  <span className="rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-[10px] font-semibold text-[#000000]">New</span>
                </div>
                <div className="grid grid-flow-row auto-rows-max text-sm">
                  {uiItems.map((item) => (
                    <NavLink key={item.href} href={item.href} isNew={item.isNew}>{item.title}</NavLink>
                  ))}
                </div>
              </div>

              {/* Registry */}
              <div className="py-2">
                <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold">Registry</h4>
                <div className="grid grid-flow-row auto-rows-max text-sm">
                  {registryItems.map((item) => (
                    <NavLink key={item.href} href={item.href}>{item.title}</NavLink>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </aside>
        
        <main className="flex-1 w-full min-w-0 max-w-4xl">
          {children}
        </main>

        {/* Right Sidebar: Head Description Tracker ("On This Page") */}
        <aside className="hidden xl:block w-52 2xl:w-60 shrink-0">
          <div className="sticky top-20 h-[calc(100vh-5rem)] overflow-y-auto pb-10 pl-4 border-l border-border/40">
            <OnThisPage />
          </div>
        </aside>
      </div>
    </div>
  );
}
