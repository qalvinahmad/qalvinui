"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface FormValues {
  [key: string]: FormDataEntryValue;
}

export interface FormProps
  extends Omit<React.FormHTMLAttributes<HTMLFormElement>, "onSubmit"> {
  onSubmit?: (values: FormValues, event: React.FormEvent<HTMLFormElement>) => void;
}

export function Form({ onSubmit, className, children, ...props }: FormProps) {
  const handleSubmit = React.useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const formEl = event.currentTarget;
      if (!formEl.checkValidity()) {
        formEl.reportValidity();
        return;
      }
      const values = Object.fromEntries(new FormData(formEl)) as FormValues;
      onSubmit?.(values, event);
    },
    [onSubmit]
  );

  return (
    <form noValidate onSubmit={handleSubmit} className={cn("space-y-4", className)} {...props}>
      {children}
    </form>
  );
}

export interface FormFieldProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "className" | "id"> {
  name: string;
  label?: string;
  description?: string;
  error?: string;
  className?: string;
}

export function FormField({
  name,
  label,
  description,
  error,
  className,
  ...props
}: FormFieldProps) {
  const id = React.useId();
  const messageId = React.useId();
  const invalid = Boolean(error);

  return (
    <div className={cn("space-y-2", className)}>
      {label ? (
        <label htmlFor={id} className="block text-xs font-medium leading-none text-foreground">
          {label}
          {props.required ? <span className="ml-0.5 text-destructive">*</span> : null}
        </label>
      ) : null}
      <input
        id={id}
        name={name}
        aria-invalid={invalid || undefined}
        aria-describedby={invalid ? messageId : undefined}
        className={cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors",
          "placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          "disabled:cursor-not-allowed disabled:opacity-50",
          invalid && "border-destructive focus-visible:ring-destructive"
        )}
        {...props}
      />
      {description && !invalid ? (
        <p className="text-xs text-muted-foreground">{description}</p>
      ) : null}
      {invalid && error ? (
        <p id={messageId} className="text-xs font-medium text-destructive" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export interface FormMessageProps {
  children?: React.ReactNode;
  className?: string;
}

export function FormMessage({ children, className }: FormMessageProps) {
  if (!children) return null;
  return (
    <p className={cn("text-xs font-medium text-destructive", className)} role="alert">
      {children}
    </p>
  );
}

export function FormActions({ className, children }: { className?: string; children?: React.ReactNode }) {
  return <div className={cn("flex items-center justify-end gap-3 pt-2", className)}>{children}</div>;
}

export default Form;
