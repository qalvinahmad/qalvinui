import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion"

import { cn } from "@/lib/utils"
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react"

function Accordion({ className, ...props }: AccordionPrimitive.Root.Props) {
  return (
    <AccordionPrimitive.Root
      data-slot="accordion"
      className={cn("flex w-full flex-col divide-y divide-border", className)}
      {...props}
    />
  )
}

function AccordionItem({ className, ...props }: AccordionPrimitive.Item.Props) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("border-b border-border/80 last:border-b-0", className)}
      {...props}
    />
  )
}

function AccordionTrigger({
  className,
  children,
  ...props
}: AccordionPrimitive.Trigger.Props) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "group/accordion-trigger relative flex flex-1 items-center justify-between py-4 text-left text-sm font-semibold transition-all outline-none hover:text-primary focus-visible:ring-2 focus-visible:ring-ring aria-disabled:pointer-events-none aria-disabled:opacity-50 cursor-pointer",
          className
        )}
        {...props}
      >
        <span>{children}</span>
        <ChevronDownIcon data-slot="accordion-trigger-icon" className="pointer-events-none size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-aria-expanded/accordion-trigger:hidden" />
        <ChevronUpIcon data-slot="accordion-trigger-icon" className="pointer-events-none hidden size-4 shrink-0 text-primary transition-transform duration-200 group-aria-expanded/accordion-trigger:inline" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({
  className,
  children,
  ...props
}: AccordionPrimitive.Panel.Props) {
  return (
    <AccordionPrimitive.Panel
      data-slot="accordion-content"
      className="overflow-hidden text-sm data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0"
      {...props}
    >
      <div
        className={cn(
          "pt-1 pb-4 text-sm text-muted-foreground leading-relaxed",
          className
        )}
      >
        {children}
      </div>
    </AccordionPrimitive.Panel>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
