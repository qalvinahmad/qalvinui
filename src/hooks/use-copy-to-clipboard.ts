"use client";

import { useState, useCallback } from "react";

export interface UseCopyToClipboardOptions {
  timeout?: number;
  onSuccess?: (text: string) => void;
  onError?: (error: Error) => void;
}

export interface UseCopyToClipboardReturn {
  copiedText: string | null;
  isCopied: boolean;
  copy: (text: string) => Promise<boolean>;
  reset: () => void;
}

/**
 * Custom hook for copying text to the clipboard with status feedback,
 * automatic reset timeout, and fallback for non-secure contexts.
 *
 * @example
 * ```tsx
 * const { isCopied, copy } = useCopyToClipboard();
 * return (
 *   <button onClick={() => copy("pnpm dlx @alvinahmad/ui init")}>
 *     {isCopied ? "Copied!" : "Copy Command"}
 *   </button>
 * );
 * ```
 */
export function useCopyToClipboard(
  options: UseCopyToClipboardOptions = {}
): UseCopyToClipboardReturn {
  const { timeout = 2000, onSuccess, onError } = options;
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const copy = useCallback(
    async (text: string): Promise<boolean> => {
      if (!text) return false;

      try {
        if (typeof navigator !== "undefined" && navigator?.clipboard?.writeText) {
          await navigator.clipboard.writeText(text);
        } else if (typeof document !== "undefined") {
          // Fallback using temporary textarea
          const textarea = document.createElement("textarea");
          textarea.value = text;
          textarea.style.position = "fixed";
          textarea.style.left = "-9999px";
          textarea.style.top = "0";
          document.body.appendChild(textarea);
          textarea.focus();
          textarea.select();
          const successful = document.execCommand("copy");
          document.body.removeChild(textarea);
          if (!successful) {
            throw new Error("execCommand copy failed");
          }
        } else {
          throw new Error("Clipboard API unavailable in this environment");
        }

        setCopiedText(text);
        setIsCopied(true);
        onSuccess?.(text);

        setTimeout(() => {
          setIsCopied(false);
          setCopiedText(null);
        }, timeout);

        return true;
      } catch (err) {
        const error = err instanceof Error ? err : new Error(String(err));
        onError?.(error);
        setIsCopied(false);
        return false;
      }
    },
    [timeout, onSuccess, onError]
  );

  const reset = useCallback(() => {
    setIsCopied(false);
    setCopiedText(null);
  }, []);

  return { copiedText, isCopied, copy, reset };
}

export default useCopyToClipboard;
