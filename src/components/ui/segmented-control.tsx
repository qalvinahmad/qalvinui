"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export type SegmentedControlSize = "default" | "lg" | "sm";

export const segmentedControlItemSizeClassNames: Record<
  SegmentedControlSize,
  string
> = {
  default: "h-8 px-3 text-sm",
  lg: "h-9.5 px-3.5 text-base",
  sm: "h-7 px-2.5 text-xs",
};

const SegmentedControlContext = React.createContext<{
  size: SegmentedControlSize;
  value?: string;
  onValueChange?: (val: string) => void;
}>({ size: "default" });

export interface SegmentedControlProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: SegmentedControlSize;
  value?: string;
  defaultValue?: string;
  onValueChange?: (val: string) => void;
}

export function SegmentedControl({
  className,
  children,
  size = "default",
  value: controlledValue,
  defaultValue,
  onValueChange,
  ...props
}: SegmentedControlProps): React.ReactElement {
  const [internalValue, setInternalValue] = React.useState(defaultValue || "");
  const value = controlledValue !== undefined ? controlledValue : internalValue;

  const handleValueChange = (val: string) => {
    if (controlledValue === undefined) {
      setInternalValue(val);
    }
    onValueChange?.(val);
  };

  return (
    <SegmentedControlContext.Provider
      value={{ size, value, onValueChange: handleValueChange }}
    >
      <div
        className={cn(
          "relative inline-flex items-center justify-center rounded-xl bg-muted/70 p-1 border border-border/50 text-muted-foreground",
          className
        )}
        data-size={size}
        data-slot="segmented-control"
        role="group"
        {...props}
      >
        {children}
      </div>
    </SegmentedControlContext.Provider>
  );
}

export interface SegmentedControlItemProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
  size?: SegmentedControlSize;
}

export function SegmentedControlItem({
  className,
  value,
  children,
  onClick,
  ...props
}: SegmentedControlItemProps): React.ReactElement {
  const context = React.useContext(SegmentedControlContext);
  const isSelected = context.value === value;
  const size = props.size || context.size;

  return (
    <button
      type="button"
      onClick={(e) => {
        context.onValueChange?.(value);
        onClick?.(e);
      }}
      data-state={isSelected ? "active" : "inactive"}
      className={cn(
        "relative inline-flex items-center justify-center whitespace-nowrap rounded-lg font-medium transition-all duration-200 outline-none cursor-pointer",
        segmentedControlItemSizeClassNames[size],
        isSelected
          ? "bg-background text-foreground shadow-xs font-semibold"
          : "hover:text-foreground text-muted-foreground",
        className
      )}
      data-slot="segmented-control-item"
      {...props}
    >
      {children}
    </button>
  );
}
