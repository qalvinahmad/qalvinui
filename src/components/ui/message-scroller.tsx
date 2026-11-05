"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface MessageScrollerProps {
  autoScroll?: boolean;
  onScrollBottom?: () => void;
  className?: string;
  children?: React.ReactNode;
}

/**
 * Smooth auto-scrolling message container for chat interfaces.
 * Scrolls to the bottom whenever new messages are appended.
 */
export function MessageScroller({
  autoScroll = true,
  onScrollBottom,
  className,
  children,
}: MessageScrollerProps) {
  const viewportRef = React.useRef<HTMLDivElement>(null);
  const childCount = React.Children.count(children);

  React.useEffect(() => {
    if (!autoScroll) return;
    const viewport = viewportRef.current;
    if (!viewport) return;
    viewport.scrollTo({ top: viewport.scrollHeight, behavior: "smooth" });
  }, [autoScroll, childCount]);

  const handleScroll = React.useCallback(
    (event: React.UIEvent<HTMLDivElement>) => {
      if (!onScrollBottom) return;
      const viewport = event.currentTarget;
      const atBottom = viewport.scrollHeight - viewport.scrollTop - viewport.clientHeight < 24;
      if (atBottom) onScrollBottom();
    },
    [onScrollBottom]
  );

  return (
    <div
      ref={viewportRef}
      onScroll={handleScroll}
      className={cn(
        "w-full overflow-y-auto overscroll-contain [scrollbar-width:thin]",
        "flex flex-col gap-3",
        className
      )}
    >
      {children}
    </div>
  );
}

export default MessageScroller;
