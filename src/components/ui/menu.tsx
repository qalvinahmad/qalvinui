"use client";

import * as React from "react";
import { Menu as MenuPrimitive } from "@base-ui/react/menu";
import { ChevronRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export const MenuCreateHandle: typeof MenuPrimitive.createHandle =
  MenuPrimitive.createHandle;

export const Menu: typeof MenuPrimitive.Root = MenuPrimitive.Root;
export const MenuPortal: typeof MenuPrimitive.Portal = MenuPrimitive.Portal;

export function MenuTrigger({
  className,
  children,
  ...props
}: MenuPrimitive.Trigger.Props): React.ReactElement {
  return (
    <MenuPrimitive.Trigger
      className={className}
      data-slot="menu-trigger"
      {...props}
    >
      {children}
    </MenuPrimitive.Trigger>
  );
}

export function MenuPopup({
  children,
  className,
  sideOffset = 4,
  align = "center",
  alignOffset,
  side = "bottom",
  anchor,
  portalProps,
  ...props
}: MenuPrimitive.Popup.Props & {
  align?: MenuPrimitive.Positioner.Props["align"];
  sideOffset?: MenuPrimitive.Positioner.Props["sideOffset"];
  alignOffset?: MenuPrimitive.Positioner.Props["alignOffset"];
  side?: MenuPrimitive.Positioner.Props["side"];
  anchor?: MenuPrimitive.Positioner.Props["anchor"];
  portalProps?: MenuPrimitive.Portal.Props;
}): React.ReactElement {
  return (
    <MenuPortal {...portalProps}>
      <MenuPrimitive.Positioner
        align={align}
        alignOffset={alignOffset}
        anchor={anchor}
        className="z-50"
        data-slot="menu-positioner"
        side={side}
        sideOffset={sideOffset}
      >
        <MenuPrimitive.Popup
          className={cn(
            "relative flex min-w-36 flex-col overflow-hidden rounded-xl border border-border bg-popover p-1 text-popover-foreground text-sm shadow-md shadow-black/5 animate-in fade-in-0 zoom-in-95",
            className
          )}
          data-slot="menu-popup"
          {...props}
        >
          {children}
        </MenuPrimitive.Popup>
      </MenuPrimitive.Positioner>
    </MenuPortal>
  );
}

export function MenuGroup(
  props: MenuPrimitive.Group.Props
): React.ReactElement {
  return <MenuPrimitive.Group data-slot="menu-group" {...props} />;
}

export function MenuItem({
  className,
  inset,
  variant = "default",
  ...props
}: MenuPrimitive.Item.Props & {
  inset?: boolean;
  variant?: "default" | "destructive";
}): React.ReactElement {
  return (
    <MenuPrimitive.Item
      className={cn(
        "relative flex cursor-pointer select-none items-center gap-2 rounded-md px-2.5 py-1.5 text-sm outline-none transition-colors data-disabled:pointer-events-none data-disabled:opacity-50 data-highlighted:bg-accent data-highlighted:text-accent-foreground",
        variant === "destructive" && "text-destructive data-highlighted:bg-destructive/10 data-highlighted:text-destructive",
        inset && "ps-8",
        className
      )}
      data-inset={inset}
      data-slot="menu-item"
      data-variant={variant}
      {...props}
    />
  );
}

export function MenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}: MenuPrimitive.CheckboxItem.Props): React.ReactElement {
  return (
    <MenuPrimitive.CheckboxItem
      checked={checked}
      className={cn(
        "relative flex cursor-pointer select-none items-center gap-2 rounded-md py-1.5 ps-8 pe-2.5 text-sm outline-none transition-colors data-disabled:pointer-events-none data-disabled:opacity-50 data-highlighted:bg-accent data-highlighted:text-accent-foreground",
        className
      )}
      data-slot="menu-checkbox-item"
      {...props}
    >
      <MenuPrimitive.CheckboxItemIndicator className="absolute left-2.5 flex size-3.5 items-center justify-center">
        <Check className="size-3.5" />
      </MenuPrimitive.CheckboxItemIndicator>
      {children}
    </MenuPrimitive.CheckboxItem>
  );
}

export function MenuRadioGroup(
  props: MenuPrimitive.RadioGroup.Props
): React.ReactElement {
  return <MenuPrimitive.RadioGroup data-slot="menu-radio-group" {...props} />;
}

export function MenuRadioItem({
  className,
  children,
  ...props
}: MenuPrimitive.RadioItem.Props): React.ReactElement {
  return (
    <MenuPrimitive.RadioItem
      className={cn(
        "relative flex cursor-pointer select-none items-center gap-2 rounded-md py-1.5 ps-8 pe-2.5 text-sm outline-none transition-colors data-disabled:pointer-events-none data-disabled:opacity-50 data-highlighted:bg-accent data-highlighted:text-accent-foreground",
        className
      )}
      data-slot="menu-radio-item"
      {...props}
    >
      <MenuPrimitive.RadioItemIndicator className="absolute left-2.5 flex size-2 items-center justify-center rounded-full bg-foreground" />
      {children}
    </MenuPrimitive.RadioItem>
  );
}

export function MenuGroupLabel({
  className,
  inset,
  ...props
}: MenuPrimitive.GroupLabel.Props & {
  inset?: boolean;
}): React.ReactElement {
  return (
    <MenuPrimitive.GroupLabel
      className={cn(
        "px-2.5 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider",
        inset && "ps-8",
        className
      )}
      data-inset={inset}
      data-slot="menu-label"
      {...props}
    />
  );
}

export function MenuSeparator({
  className,
  ...props
}: MenuPrimitive.Separator.Props): React.ReactElement {
  return (
    <MenuPrimitive.Separator
      className={cn("mx-1 my-1 h-px bg-border", className)}
      data-slot="menu-separator"
      {...props}
    />
  );
}

export function MenuShortcut({
  className,
  ...props
}: React.ComponentProps<"kbd">): React.ReactElement {
  return (
    <kbd
      className={cn(
        "ms-auto font-mono text-[10px] tracking-widest text-muted-foreground",
        className
      )}
      data-slot="menu-shortcut"
      {...props}
    />
  );
}

export function MenuSub(
  props: MenuPrimitive.SubmenuRoot.Props
): React.ReactElement {
  return <MenuPrimitive.SubmenuRoot data-slot="menu-sub" {...props} />;
}

export function MenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: MenuPrimitive.SubmenuTrigger.Props & {
  inset?: boolean;
}): React.ReactElement {
  return (
    <MenuPrimitive.SubmenuTrigger
      className={cn(
        "flex cursor-pointer select-none items-center gap-2 rounded-md px-2.5 py-1.5 text-sm outline-none transition-colors data-highlighted:bg-accent data-highlighted:text-accent-foreground",
        inset && "ps-8",
        className
      )}
      data-inset={inset}
      data-slot="menu-sub-trigger"
      {...props}
    >
      {children}
      <ChevronRight className="ms-auto size-3.5 opacity-80" />
    </MenuPrimitive.SubmenuTrigger>
  );
}

export function MenuSubPopup({
  className,
  sideOffset = 2,
  align = "start",
  ...props
}: MenuPrimitive.Popup.Props & {
  align?: MenuPrimitive.Positioner.Props["align"];
  sideOffset?: MenuPrimitive.Positioner.Props["sideOffset"];
}): React.ReactElement {
  return (
    <MenuPopup
      align={align}
      className={className}
      data-slot="menu-sub-content"
      side="right"
      sideOffset={sideOffset}
      {...props}
    />
  );
}

export {
  MenuPrimitive,
  MenuCreateHandle as DropdownMenuCreateHandle,
  Menu as DropdownMenu,
  MenuPortal as DropdownMenuPortal,
  MenuTrigger as DropdownMenuTrigger,
  MenuPopup as DropdownMenuContent,
  MenuGroup as DropdownMenuGroup,
  MenuItem as DropdownMenuItem,
  MenuCheckboxItem as DropdownMenuCheckboxItem,
  MenuRadioGroup as DropdownMenuRadioGroup,
  MenuRadioItem as DropdownMenuRadioItem,
  MenuGroupLabel as DropdownMenuLabel,
  MenuSeparator as DropdownMenuSeparator,
  MenuShortcut as DropdownMenuShortcut,
  MenuSub as DropdownMenuSub,
  MenuSubTrigger as DropdownMenuSubTrigger,
  MenuSubPopup as DropdownMenuSubContent,
};
