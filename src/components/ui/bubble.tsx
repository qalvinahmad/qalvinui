import * as React from "react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export interface BubbleProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "incoming" | "outgoing";
  avatar?: string;
  sender?: string;
  timestamp?: string;
}

export function Bubble({
  className,
  variant = "incoming",
  avatar,
  sender,
  timestamp,
  children,
  ...props
}: BubbleProps) {
  const isOutgoing = variant === "outgoing";

  return (
    <div
      className={cn(
        "flex gap-3 max-w-[80%]",
        isOutgoing ? "ml-auto flex-row-reverse" : "mr-auto",
        className
      )}
      {...props}
    >
      {avatar && (
        <Avatar className="h-8 w-8 shrink-0 mt-0.5">
          <AvatarImage src={avatar} />
          <AvatarFallback>{sender ? sender[0] : "U"}</AvatarFallback>
        </Avatar>
      )}
      <div className={cn("flex flex-col gap-1", isOutgoing ? "items-end" : "items-start")}>
        {(sender || timestamp) && (
          <div className="flex items-center gap-2 text-[11px] text-muted-foreground px-1">
            {sender && <span className="font-semibold text-foreground">{sender}</span>}
            {timestamp && <span>{timestamp}</span>}
          </div>
        )}
        <div
          className={cn(
            "rounded-2xl px-4 py-2.5 text-sm shadow-xs",
            isOutgoing
              ? "bg-primary text-primary-foreground rounded-br-xs"
              : "bg-muted text-foreground rounded-bl-xs border border-border/50"
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
