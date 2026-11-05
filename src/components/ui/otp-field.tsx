"use client";

import * as React from "react";
import { OTPField as OTPFieldPrimitive } from "@base-ui/react/otp-field";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

export function OTPField({
  className,
  size = "default",
  ...props
}: React.ComponentProps<typeof OTPFieldPrimitive.Root> & {
  size?: "default" | "lg";
}): React.ReactElement {
  return (
    <OTPFieldPrimitive.Root
      className={cn(
        "flex items-center gap-2 has-disabled:opacity-50",
        className
      )}
      data-size={size}
      data-slot="otp-field"
      {...props}
    />
  );
}

export function OTPFieldInput({
  className,
  ...props
}: React.ComponentProps<typeof OTPFieldPrimitive.Input>): React.ReactElement {
  return (
    <OTPFieldPrimitive.Input
      className={cn(
        "relative size-9 sm:size-10 rounded-lg border border-input bg-background text-center text-sm font-mono font-semibold text-foreground shadow-2xs outline-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/40 transition-colors",
        className
      )}
      data-slot="otp-field-input"
      spellCheck={false}
      {...props}
    />
  );
}

export function OTPFieldSeparator({
  className,
  ...props
}: React.ComponentProps<typeof Separator>): React.ReactElement {
  return (
    <OTPFieldPrimitive.Separator
      render={
        <Separator
          className={cn(
            "rounded-full bg-input h-0.5 w-2 sm:w-3",
            className
          )}
          orientation="horizontal"
          {...props}
        />
      }
    />
  );
}

export { OTPFieldPrimitive };
