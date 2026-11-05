"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface MessageProps {
  name: string;
  time?: string;
  avatarSrc?: string;
  avatarFallback?: string;
  actionLabel?: string;
  onAction?: () => void;
  className?: string;
  children?: React.ReactNode;
}

export interface MessageGroupProps {
  className?: string;
  children?: React.ReactNode;
}

export function MessageAvatar({
  src,
  fallback,
  className,
}: {
  src?: string;
  fallback?: string;
  className?: string;
}) {
  const initials = (fallback || "")
    .split(" ")
    .map((part) => part.charAt(0))
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      className={cn(
        "flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full border bg-muted",
        className
      )}
    >
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt="" className="h-full w-full object-cover" />
      ) : (
        <span className="text-[10px] font-bold text-muted-foreground">{initials}</span>
      )}
    </div>
  );
}

export function Message({
  name,
  time,
  avatarSrc,
  avatarFallback,
  actionLabel,
  onAction,
  className,
  children,
}: MessageProps) {
  return (
    <div
      className={cn(
        "flex max-w-sm items-start gap-3 rounded-xl border bg-card p-4 shadow-sm transition-colors hover:border-ring/30",
        className
      )}
    >
      <MessageAvatar src={avatarSrc} fallback={avatarFallback} />
      <div className="min-w-0 flex-1 space-y-1">
        <div className="flex items-center justify-between gap-2">
          <span className="truncate text-xs font-semibold text-foreground">{name}</span>
          {time ? <span className="shrink-0 text-[10px] text-muted-foreground">{time}</span> : null}
        </div>
        {children ? (
          <p className="text-xs leading-relaxed text-muted-foreground">{children}</p>
        ) : null}
        {onAction || actionLabel ? (
          <button
            type="button"
            onClick={onAction}
            className={cn(
              "text-[11px] font-medium text-primary underline-offset-4 hover:underline",
              !onAction && "pointer-events-none opacity-60"
            )}
          >
            {actionLabel ?? "View"}
          </button>
        ) : null}
      </div>
    </div>
  );
}

export function MessageGroup({ className, children }: MessageGroupProps) {
  return <div className={cn("flex flex-col gap-2", className)}>{children}</div>;
}

export default Message;
