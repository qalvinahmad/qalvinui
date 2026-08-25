import Link from "next/link";
import { ArrowRight } from "lucide-react";

const components = [
  { name: "Accordion", description: "A collapsible content area." },
  { name: "Alert", description: "Displays a callout for important information." },
  { name: "Alert Dialog", description: "A modal dialog that interrupts the user with important content." },
  { name: "Avatar", description: "An image element with a fallback for representing the user." },
  { name: "Badge", description: "Displays a badge or a component that looks like a badge." },
  { name: "Button", description: "Displays a button or a component that looks like a button." },
  { name: "Calendar", description: "A date field component that allows users to enter and edit date." },
  { name: "Card", description: "Displays a card with header, content, and footer." },
  { name: "Checkbox", description: "A control that allows the user to toggle between checked and not checked." },
  { name: "Collapsible", description: "An interactive component which expands/collapses a panel." },
  { name: "Dialog", description: "A window overlaid on the primary content." },
  { name: "Drawer", description: "A panel that slides out from the edge of the screen." },
  { name: "Dropdown Menu", description: "Displays a menu to the user triggered by a button." },
  { name: "Input", description: "A form control for entering text." },
  { name: "Label", description: "Renders an accessible label associated with form controls." },
  { name: "Popover", description: "Displays rich content in a portal, triggered by a button." },
  { name: "Progress", description: "Shows completion progress of a task." },
  { name: "Select", description: "Displays a list of options for the user to pick from." },
  { name: "Separator", description: "Visually or semantically separates content." },
  { name: "Sheet", description: "A window overlaid on the primary content that slides from the edge." },
  { name: "Skeleton", description: "Use to show a placeholder while content is loading." },
  { name: "Slider", description: "A slider component for selecting a value from a range." },
  { name: "Switch", description: "A control that allows the user to toggle between on and off." },
  { name: "Table", description: "A responsive table component." },
  { name: "Tabs", description: "A set of layered sections of content, known as tab panels." },
  { name: "Textarea", description: "A form control for entering multi-line text." },
  { name: "Toast", description: "A succinct message that is displayed temporarily." },
  { name: "Toggle", description: "A two-state button that can be either on or off." },
  { name: "Toggle Group", description: "A set of two-state buttons that can be toggled on or off." },
  { name: "Tooltip", description: "A popup that displays information related to an element on hover." },
];

export default function Page() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Components</h1>
        <p className="text-lg text-muted-foreground">
          Browse the collection of built-in components. Each component is accessible, customizable, and follows WAI-ARIA patterns.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {components.map((component) => (
          <Link
            key={component.name}
            href={`/docs/components/${component.name.toLowerCase().replace(/\s+/g, "-")}`}
            className="group flex items-center justify-between rounded-lg border p-4 hover:bg-muted/50 transition-colors"
          >
            <div className="space-y-1">
              <h3 className="font-medium leading-none group-hover:text-foreground">{component.name}</h3>
              <p className="text-sm text-muted-foreground">{component.description}</p>
            </div>
            <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
          </Link>
        ))}
      </div>
    </div>
  )
}
