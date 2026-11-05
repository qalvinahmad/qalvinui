"use client";

import * as React from "react";
import { Autocomplete as AutocompletePrimitive } from "@base-ui/react/autocomplete";
import { ChevronsUpDown, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";

export const Autocomplete: typeof AutocompletePrimitive.Root =
  AutocompletePrimitive.Root;

export function AutocompleteInput({
  className,
  showTrigger = false,
  showClear = false,
  startAddon,
  size = "default",
  triggerProps,
  clearProps,
  ...props
}: Omit<AutocompletePrimitive.Input.Props, "size"> & {
  showTrigger?: boolean;
  showClear?: boolean;
  startAddon?: React.ReactNode;
  size?: "sm" | "default" | "lg" | number;
  triggerProps?: AutocompletePrimitive.Trigger.Props;
  clearProps?: AutocompletePrimitive.Clear.Props;
}): React.ReactElement {
  const sizeValue = size ?? "default";

  const sizeClasses = {
    sm: "h-7 text-xs px-2.5",
    default: "h-8 text-sm px-3",
    lg: "h-10 text-base px-3.5",
  }[typeof sizeValue === "string" ? sizeValue : "default"] || "h-8 text-sm px-3";

  return (
    <AutocompletePrimitive.InputGroup
      className="relative not-has-[>*.w-full]:w-fit w-full text-foreground has-disabled:opacity-60"
      data-slot="autocomplete-input-group"
    >
      {startAddon && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 start-0 z-10 flex items-center ps-3 text-muted-foreground [&_svg]:size-4"
          data-slot="autocomplete-start-addon"
        >
          {startAddon}
        </div>
      )}
      <AutocompletePrimitive.Input
        className={cn(
          "w-full rounded-lg border border-input bg-transparent py-1 transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/40 disabled:cursor-not-allowed disabled:bg-muted/40",
          sizeClasses,
          startAddon && "ps-9",
          (showTrigger || showClear) && "pe-8",
          className
        )}
        data-slot="autocomplete-input"
        {...props}
      />
      {showTrigger && (
        <AutocompleteTrigger
          className="absolute top-1/2 end-1 -translate-y-1/2 inline-flex size-6 cursor-pointer items-center justify-center rounded-md text-muted-foreground hover:text-foreground transition-colors outline-none"
          {...triggerProps}
        >
          <ChevronsUpDown className="size-3.5" />
        </AutocompleteTrigger>
      )}
      {showClear && (
        <AutocompleteClear
          className="absolute top-1/2 end-1 -translate-y-1/2 inline-flex size-6 cursor-pointer items-center justify-center rounded-md text-muted-foreground hover:text-foreground transition-colors outline-none"
          {...clearProps}
        >
          <X className="size-3.5" />
        </AutocompleteClear>
      )}
    </AutocompletePrimitive.InputGroup>
  );
}

export function AutocompletePopup({
  className,
  children,
  side = "bottom",
  sideOffset = 4,
  align = "start",
  alignOffset,
  anchor,
  portalProps,
  ...props
}: AutocompletePrimitive.Popup.Props & {
  align?: AutocompletePrimitive.Positioner.Props["align"];
  sideOffset?: AutocompletePrimitive.Positioner.Props["sideOffset"];
  alignOffset?: AutocompletePrimitive.Positioner.Props["alignOffset"];
  side?: AutocompletePrimitive.Positioner.Props["side"];
  anchor?: AutocompletePrimitive.Positioner.Props["anchor"];
  portalProps?: AutocompletePrimitive.Portal.Props;
}): React.ReactElement {
  return (
    <AutocompletePrimitive.Portal {...portalProps}>
      <AutocompletePrimitive.Positioner
        align={align}
        alignOffset={alignOffset}
        anchor={anchor}
        className="z-50 select-none"
        data-slot="autocomplete-positioner"
        side={side}
        sideOffset={sideOffset}
      >
        <div
          className={cn(
            "relative flex max-h-72 min-w-[var(--anchor-width)] max-w-[var(--available-width)] origin-[var(--transform-origin)] flex-col overflow-hidden rounded-lg border border-border bg-popover text-popover-foreground shadow-md shadow-black/5 animate-in fade-in-0 zoom-in-95",
            className
          )}
        >
          <AutocompletePrimitive.Popup
            className="flex max-h-[min(var(--available-height,18rem),18rem)] flex-1 flex-col"
            data-slot="autocomplete-popup"
            {...props}
          >
            {children}
          </AutocompletePrimitive.Popup>
        </div>
      </AutocompletePrimitive.Positioner>
    </AutocompletePrimitive.Portal>
  );
}

export function AutocompleteItem({
  className,
  children,
  ...props
}: AutocompletePrimitive.Item.Props): React.ReactElement {
  return (
    <AutocompletePrimitive.Item
      className={cn(
        "relative flex cursor-pointer select-none items-center rounded-md px-2.5 py-1.5 text-sm outline-none transition-colors data-disabled:pointer-events-none data-disabled:opacity-50 data-highlighted:bg-accent data-highlighted:text-accent-foreground",
        className
      )}
      data-slot="autocomplete-item"
      {...props}
    >
      {children}
    </AutocompletePrimitive.Item>
  );
}

export function AutocompleteSeparator({
  className,
  ...props
}: AutocompletePrimitive.Separator.Props): React.ReactElement {
  return (
    <AutocompletePrimitive.Separator
      className={cn("mx-1 my-1 h-px bg-border", className)}
      data-slot="autocomplete-separator"
      {...props}
    />
  );
}

export function AutocompleteGroup({
  className,
  ...props
}: AutocompletePrimitive.Group.Props): React.ReactElement {
  return (
    <AutocompletePrimitive.Group
      className={cn("p-1", className)}
      data-slot="autocomplete-group"
      {...props}
    />
  );
}

export function AutocompleteGroupLabel({
  className,
  ...props
}: AutocompletePrimitive.GroupLabel.Props): React.ReactElement {
  return (
    <AutocompletePrimitive.GroupLabel
      className={cn(
        "px-2 py-1 text-xs font-semibold text-muted-foreground tracking-wider uppercase",
        className
      )}
      data-slot="autocomplete-group-label"
      {...props}
    />
  );
}

export function AutocompleteEmpty({
  className,
  ...props
}: AutocompletePrimitive.Empty.Props): React.ReactElement {
  return (
    <AutocompletePrimitive.Empty
      className={cn("p-3 text-center text-sm text-muted-foreground", className)}
      data-slot="autocomplete-empty"
      {...props}
    />
  );
}

export function AutocompleteRow({
  className,
  ...props
}: AutocompletePrimitive.Row.Props): React.ReactElement {
  return (
    <AutocompletePrimitive.Row
      className={className}
      data-slot="autocomplete-row"
      {...props}
    />
  );
}

export const AutocompleteValue: typeof AutocompletePrimitive.Value =
  AutocompletePrimitive.Value;

export function AutocompleteList({
  className,
  ...props
}: AutocompletePrimitive.List.Props): React.ReactElement {
  return (
    <ScrollArea className="max-h-60 overflow-y-auto">
      <AutocompletePrimitive.List
        className={cn("p-1", className)}
        data-slot="autocomplete-list"
        {...props}
      />
    </ScrollArea>
  );
}

export function AutocompleteClear({
  className,
  ...props
}: AutocompletePrimitive.Clear.Props): React.ReactElement {
  return (
    <AutocompletePrimitive.Clear
      className={cn(
        "inline-flex size-6 cursor-pointer items-center justify-center rounded-md text-muted-foreground hover:text-foreground transition-colors outline-none",
        className
      )}
      data-slot="autocomplete-clear"
      {...props}
    >
      <X className="size-3.5" />
    </AutocompletePrimitive.Clear>
  );
}

export function AutocompleteStatus({
  className,
  ...props
}: AutocompletePrimitive.Status.Props): React.ReactElement {
  return (
    <AutocompletePrimitive.Status
      className={cn("px-3 py-1.5 text-xs text-muted-foreground", className)}
      data-slot="autocomplete-status"
      {...props}
    />
  );
}

export const AutocompleteCollection: typeof AutocompletePrimitive.Collection =
  AutocompletePrimitive.Collection;

export function AutocompleteTrigger({
  className,
  children,
  ...props
}: AutocompletePrimitive.Trigger.Props): React.ReactElement {
  return (
    <AutocompletePrimitive.Trigger
      className={className}
      data-slot="autocomplete-trigger"
      {...props}
    >
      {children}
    </AutocompletePrimitive.Trigger>
  );
}

export const useAutocompleteFilter: typeof AutocompletePrimitive.useFilter =
  AutocompletePrimitive.useFilter;

export { AutocompletePrimitive };
