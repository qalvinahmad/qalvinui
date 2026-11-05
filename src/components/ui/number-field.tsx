"use client";

import * as React from "react";
import { NumberField as NumberFieldPrimitive } from "@base-ui/react/number-field";
import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";

export const NumberFieldContext: React.Context<{
  fieldId: string;
} | null> = React.createContext<{
  fieldId: string;
} | null>(null);

export function NumberField({
  id,
  className,
  size = "default",
  ...props
}: NumberFieldPrimitive.Root.Props & {
  size?: "sm" | "default" | "lg";
}): React.ReactElement {
  const generatedId = React.useId();
  const fieldId = id ?? generatedId;

  return (
    <NumberFieldContext.Provider value={{ fieldId }}>
      <NumberFieldPrimitive.Root
        className={cn("flex w-full flex-col items-start gap-1.5", className)}
        data-size={size}
        data-slot="number-field"
        id={fieldId}
        {...props}
      />
    </NumberFieldContext.Provider>
  );
}

export function NumberFieldGroup({
  className,
  ...props
}: NumberFieldPrimitive.Group.Props): React.ReactElement {
  return (
    <NumberFieldPrimitive.Group
      className={cn(
        "relative flex w-full items-center justify-between rounded-lg border border-input bg-background text-sm text-foreground shadow-2xs focus-within:border-ring focus-within:ring-2 focus-within:ring-ring/40 data-disabled:opacity-50",
        className
      )}
      data-slot="number-field-group"
      {...props}
    />
  );
}

export function NumberFieldDecrement({
  className,
  ...props
}: NumberFieldPrimitive.Decrement.Props): React.ReactElement {
  return (
    <NumberFieldPrimitive.Decrement
      className={cn(
        "flex size-8 shrink-0 cursor-pointer items-center justify-center rounded-s-md text-muted-foreground hover:bg-muted hover:text-foreground transition-colors",
        className
      )}
      data-slot="number-field-decrement"
      {...props}
    >
      <Minus className="size-3.5" />
    </NumberFieldPrimitive.Decrement>
  );
}

export function NumberFieldIncrement({
  className,
  ...props
}: NumberFieldPrimitive.Increment.Props): React.ReactElement {
  return (
    <NumberFieldPrimitive.Increment
      className={cn(
        "flex size-8 shrink-0 cursor-pointer items-center justify-center rounded-e-md text-muted-foreground hover:bg-muted hover:text-foreground transition-colors",
        className
      )}
      data-slot="number-field-increment"
      {...props}
    >
      <Plus className="size-3.5" />
    </NumberFieldPrimitive.Increment>
  );
}

export function NumberFieldInput({
  className,
  ...props
}: NumberFieldPrimitive.Input.Props): React.ReactElement {
  return (
    <NumberFieldPrimitive.Input
      className={cn(
        "h-8 w-full min-w-0 bg-transparent px-2 text-center text-sm tabular-nums outline-none",
        className
      )}
      data-slot="number-field-input"
      {...props}
    />
  );
}

export function NumberFieldScrubArea({
  className,
  label,
  ...props
}: NumberFieldPrimitive.ScrubArea.Props & {
  label: string;
}): React.ReactElement {
  const context = React.useContext(NumberFieldContext);

  if (!context) {
    throw new Error(
      "NumberFieldScrubArea must be used within a NumberField component for accessibility."
    );
  }

  return (
    <NumberFieldPrimitive.ScrubArea
      className={cn("flex cursor-ew-resize items-center gap-1", className)}
      data-slot="number-field-scrub-area"
      {...props}
    >
      <Label className="cursor-ew-resize text-xs font-medium" htmlFor={context.fieldId}>
        {label}
      </Label>
    </NumberFieldPrimitive.ScrubArea>
  );
}

export { NumberFieldPrimitive };
