"use client";

import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

export const groupVariants = cva(
  "flex w-fit *:focus-visible:z-10 has-[>[data-slot=group]]:gap-2",
  {
    defaultVariants: {
      orientation: "horizontal",
    },
    variants: {
      orientation: {
        horizontal:
          "flex-row items-center *:data-slot:has-[~[data-slot]]:rounded-e-none *:data-slot:has-[~[data-slot]]:border-e-0 *:[[data-slot]~[data-slot]]:rounded-s-none *:[[data-slot]~[data-slot]]:border-s-0",
        vertical:
          "flex-col *:data-slot:has-[~[data-slot]]:rounded-b-none *:data-slot:has-[~[data-slot]]:border-b-0 *:[[data-slot]~[data-slot]]:rounded-t-none *:[[data-slot]~[data-slot]]:border-t-0",
      },
    },
  }
);

export function Group({
  className,
  orientation = "horizontal",
  children,
  ...props
}: {
  className?: string;
  orientation?: VariantProps<typeof groupVariants>["orientation"];
  children: React.ReactNode;
} & React.ComponentProps<"div">): React.ReactElement {
  return (
    <div
      className={cn(groupVariants({ orientation }), className)}
      data-orientation={orientation}
      data-slot="group"
      role="group"
      {...props}
    >
      {children}
    </div>
  );
}

export function GroupText({
  className,
  children,
  ...props
}: React.ComponentProps<"div">): React.ReactElement {
  return (
    <div
      className={cn(
        "relative inline-flex items-center gap-2 whitespace-nowrap rounded-lg border border-input bg-muted px-3 text-sm text-muted-foreground shadow-2xs",
        className
      )}
      data-slot="group-text"
      {...props}
    >
      {children}
    </div>
  );
}

export function GroupSeparator({
  className,
  orientation = "vertical",
  ...props
}: {
  className?: string;
} & React.ComponentProps<typeof Separator>): React.ReactElement {
  return (
    <Separator
      className={cn("pointer-events-none relative z-10 bg-input", className)}
      orientation={orientation}
      {...props}
    />
  );
}

export {
  Group as ButtonGroup,
  GroupText as ButtonGroupText,
  GroupSeparator as ButtonGroupSeparator,
};
