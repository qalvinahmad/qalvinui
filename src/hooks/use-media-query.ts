"use client";

import { useEffect, useState } from "react";

/**
 * Custom hook to track whether a CSS media query matches the current viewport.
 * Fully SSR-safe and updates automatically on window resize.
 *
 * @param query - The CSS media query string (e.g. "(min-width: 768px)")
 * @param defaultValue - Initial value before mounting (default: false)
 * @returns boolean indicating if the media query matches
 *
 * @example
 * ```tsx
 * const isDesktop = useMediaQuery("(min-width: 1024px)");
 * const isDark = useMediaQuery("(prefers-color-scheme: dark)");
 * ```
 */
export function useMediaQuery(query: string, defaultValue = false): boolean {
  const [matches, setMatches] = useState<boolean>(defaultValue);

  useEffect(() => {
    if (typeof window === "undefined" || !("matchMedia" in window)) {
      return;
    }

    const mediaQueryList = window.matchMedia(query);
    setMatches(mediaQueryList.matches);

    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    if ("addEventListener" in mediaQueryList) {
      mediaQueryList.addEventListener("change", listener);
    } else {
      // Compatibility with older Safari / WebKit engines
      (mediaQueryList as unknown as { addListener: (cb: (e: MediaQueryListEvent) => void) => void }).addListener(listener);
    }

    return () => {
      if ("removeEventListener" in mediaQueryList) {
        mediaQueryList.removeEventListener("change", listener);
      } else {
        (mediaQueryList as unknown as { removeListener: (cb: (e: MediaQueryListEvent) => void) => void }).removeListener(listener);
      }
    };
  }, [query]);

  return matches;
}

export default useMediaQuery;
