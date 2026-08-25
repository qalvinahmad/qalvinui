import * as React from "react";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";

export interface FieldProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  helperText?: string;
  error?: string;
  required?: boolean;
}

export function Field({
  className,
  label,
  helperText,
  error,
  required,
  children,
  ...props
}: FieldProps) {
  return (
    <div className={cn("grid gap-1.5 w-full", className)} {...props}>
      {label && (
        <Label className="text-xs font-semibold text-foreground flex items-center gap-1">
          {label}
          {required && <span className="text-destructive">*</span>}
        </Label>
      )}
      {children}
      {error ? (
        <p className="text-[11px] font-medium text-destructive">{error}</p>
      ) : helperText ? (
        <p className="text-[11px] text-muted-foreground">{helperText}</p>
      ) : null}
    </div>
  );
}
