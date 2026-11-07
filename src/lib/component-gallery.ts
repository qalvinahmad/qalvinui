export type GalleryComponent = {
  name: string;
  description: string;
};

/**
 * Canonical list of base components used by the landing page
 * and the /docs/components gallery page (coss.com/ui style).
 */
export const GALLERY_COMPONENTS: GalleryComponent[] = [
  { name: "Accordion", description: "A set of collapsible panels with headings and content." },
  { name: "Alert", description: "A callout for displaying important information." },
  { name: "Alert Dialog", description: "A dialog that requires user response to proceed." },
  { name: "Autocomplete", description: "An input that suggests options as you type." },
  { name: "Avatar", description: "An image element with a fallback for representing the user." },
  { name: "Badge", description: "A badge or a component that looks like a badge." },
  { name: "Breadcrumb", description: "Displays the path to the current resource using a hierarchy of links." },
  { name: "Button", description: "A button or a component that looks like a button." },
  { name: "Calendar", description: "A date field component that allows users to enter and edit date." },
  { name: "Card", description: "Displays a card with header, content, and footer." },
  { name: "Checkbox", description: "A control that allows the user to toggle between checked and not checked." },
  { name: "Checkbox Group", description: "A set of checkboxes grouped together with shared validation." },
  { name: "Collapsible", description: "An interactive component which expands/collapses a panel." },
  { name: "Composer", description: "A rich input composer for messages, attachments, and actions." },
  { name: "Dialog", description: "A window overlaid on the primary content." },
  { name: "Drawer", description: "A panel that slides out from the edge of the screen." },
  { name: "Dropdown Menu", description: "Displays a menu to the user triggered by a button." },
  { name: "Fieldset", description: "Groups related form controls under a common legend." },
  { name: "Form", description: "Accessible form container with validation handling." },
  { name: "Frame", description: "A structured panel frame container with header, panel, and footer." },
  { name: "Group", description: "A component for visually grouping a series of controls." },
  { name: "Input", description: "A form control for entering text." },
  { name: "Label", description: "Renders an accessible label associated with form controls." },
  { name: "Menu", description: "Displays a nested menu with items, checkboxes, radios, and shortcuts." },
  { name: "Meter", description: "A graphical display of a numeric value within a range." },
  { name: "Number Field", description: "A numeric input with increment, decrement, and scrub capabilities." },
  { name: "OTP Field", description: "One-time passcode input with segmented digit inputs." },
  { name: "Popover", description: "Displays rich content in a portal, triggered by a button." },
  { name: "Preview Card", description: "For displaying rich popover preview content on hover." },
  { name: "Progress", description: "Shows completion progress of a task." },
  { name: "Segmented Control", description: "A linear set of mutually exclusive options." },
  { name: "Select", description: "Displays a list of options for the user to pick from." },
  { name: "Separator", description: "Visually or semantically separates content." },
  { name: "Sheet", description: "A window overlaid on the primary content that slides from the edge." },
  { name: "Skeleton", description: "Use to show a placeholder while content is loading." },
  { name: "Slider", description: "A slider component for selecting a value from a range." },
  { name: "Spinner", description: "An animated loading spinner indicator." },
  { name: "Switch", description: "A control that allows the user to toggle between on and off." },
  { name: "Table", description: "A responsive table component." },
  { name: "Tabs", description: "A set of layered sections of content, known as tab panels." },
  { name: "Textarea", description: "A form control for entering multi-line text." },
  { name: "Toast", description: "A succinct message that is displayed temporarily." },
  { name: "Toggle", description: "A two-state button that can be either on or off." },
  { name: "Toggle Group", description: "A set of two-state buttons that can be toggled on or off." },
  { name: "Tooltip", description: "A popup that displays information related to an element on hover." },
];

export function slugifyComponentName(name: string) {
  return name.toLowerCase().replace(/\s+/g, "-");
}
