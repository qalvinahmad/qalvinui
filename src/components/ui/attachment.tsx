import * as React from "react";
import { cn } from "@/lib/utils";
import { Paperclip, FileText, Download, X } from "lucide-react";

export interface AttachmentProps extends React.HTMLAttributes<HTMLDivElement> {
  filename: string;
  size?: string;
  onRemove?: () => void;
  onDownload?: () => void;
}

export function Attachment({
  className,
  filename,
  size = "2.4 MB",
  onRemove,
  onDownload,
  ...props
}: AttachmentProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-3 rounded-xl border border-border bg-card p-3 shadow-xs text-xs font-medium text-foreground max-w-sm",
        className
      )}
      {...props}
    >
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
        <FileText className="h-5 w-5" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="truncate font-semibold text-foreground">{filename}</div>
        <div className="text-[11px] text-muted-foreground">{size}</div>
      </div>
      <div className="flex items-center gap-1">
        {onDownload && (
          <button
            onClick={onDownload}
            className="p-1 text-muted-foreground hover:text-foreground rounded"
            aria-label="Download attachment"
          >
            <Download className="h-4 w-4" />
          </button>
        )}
        {onRemove && (
          <button
            onClick={onRemove}
            className="p-1 text-muted-foreground hover:text-destructive rounded"
            aria-label="Remove attachment"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
}
