"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Send, Paperclip, Smile } from "lucide-react";

export interface ComposerProps extends React.FormHTMLAttributes<HTMLFormElement> {
  onSendMessage?: (text: string) => void;
  placeholder?: string;
  disabled?: boolean;
}

export function Composer({
  className,
  onSendMessage,
  placeholder = "Write a message...",
  disabled = false,
  children,
  onSubmit,
  ...props
}: ComposerProps): React.ReactElement {
  const [text, setText] = React.useState("");

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!text.trim() || disabled) return;
    onSendMessage?.(text.trim());
    onSubmit?.(e);
    setText("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "relative flex flex-col rounded-2xl border border-input bg-background p-2.5 shadow-xs transition-shadow focus-within:border-ring focus-within:ring-2 focus-within:ring-ring/30",
        disabled && "opacity-50 pointer-events-none",
        className
      )}
      data-slot="composer"
      {...props}
    >
      {children || (
        <>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSubmit(e as unknown as React.SubmitEvent<HTMLFormElement>);
              }
            }}
            placeholder={placeholder}
            rows={2}
            className="w-full resize-none bg-transparent px-2 py-1 text-sm outline-none placeholder:text-muted-foreground"
          />
          <div className="flex items-center justify-between pt-2 border-t border-border/50">
            <div className="flex items-center gap-1 text-muted-foreground">
              <Button type="button" variant="ghost" size="icon" className="size-7 rounded-lg">
                <Paperclip className="size-4" />
              </Button>
              <Button type="button" variant="ghost" size="icon" className="size-7 rounded-lg">
                <Smile className="size-4" />
              </Button>
            </div>
            <Button
              type="submit"
              size="sm"
              disabled={!text.trim() || disabled}
              className="h-8 gap-1.5 rounded-lg px-3"
            >
              <span>Send</span>
              <Send className="size-3.5" />
            </Button>
          </div>
        </>
      )}
    </form>
  );
}

export function ComposerInput({
  className,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>): React.ReactElement {
  return (
    <textarea
      className={cn(
        "w-full resize-none bg-transparent px-2 py-1.5 text-sm outline-none placeholder:text-muted-foreground",
        className
      )}
      data-slot="composer-input"
      {...props}
    />
  );
}

export function ComposerActions({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>): React.ReactElement {
  return (
    <div
      className={cn("flex items-center justify-between gap-2 pt-2 border-t border-border/60", className)}
      data-slot="composer-actions"
      {...props}
    >
      {children}
    </div>
  );
}

export function getComposerText(el: HTMLTextAreaElement | null): string {
  return el?.value || "";
}
