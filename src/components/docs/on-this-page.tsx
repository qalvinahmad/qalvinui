"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface HeadingItem {
  id: string;
  text: string;
  level: number;
}

export function OnThisPage() {
  const pathname = usePathname();
  const [headings, setHeadings] = useState<HeadingItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    // Collect all headings from main article content
    const findHeadings = () => {
      const mainEl = document.querySelector("main");
      if (!mainEl) return;

      const elements = Array.from(
        mainEl.querySelectorAll("h2, h3, [data-heading]")
      ) as HTMLElement[];

      const items: HeadingItem[] = [];

      elements.forEach((el, index) => {
        // Skip headings inside preview cards or code viewer blocks
        if (el.closest("[data-slot=preview]") || el.closest("pre")) return;

        let id = el.id;
        const text = el.textContent?.trim() || "";
        if (!text) return;

        if (!id) {
          id =
            text
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, "-")
              .replace(/(^-|-$)/g, "") || `heading-${index}`;
          el.id = id;
        }

        const level = el.tagName === "H3" ? 3 : 2;
        items.push({ id, text, level });
      });

      // If page has no h2/h3 (or minimal), provide sensible default sections
      if (items.length === 0) {
        if (pathname.includes("/components/") || pathname.includes("/ui/")) {
          items.push(
            { id: "overview", text: "Overview", level: 2 },
            { id: "installation", text: "Installation", level: 2 },
            { id: "usage", text: "Usage", level: 2 },
            { id: "examples", text: "Examples", level: 2 }
          );
        } else if (pathname.includes("/changelog")) {
          items.push(
            { id: "v2-1-0", text: "November 2026", level: 2 },
            { id: "v2-0-0", text: "November 2026 (v2.0)", level: 2 },
            { id: "v1-3-0", text: "March 2025", level: 2 },
            { id: "v1-0-0", text: "December 2024", level: 2 }
          );
        }
      }

      setHeadings(items);
      if (items.length > 0) {
        setActiveId(items[0].id);
      }
    };

    // Run on initial mount and after small delay for dynamic content
    findHeadings();
    const timeout = setTimeout(findHeadings, 400);

    return () => clearTimeout(timeout);
  }, [pathname]);

  // Track active heading on scroll
  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-80px 0% -60% 0%",
        threshold: 0.1,
      }
    );

    headings.forEach((heading) => {
      const el = document.getElementById(heading.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  const scrollToHeading = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveId(id);
      history.pushState(null, "", `#${id}`);
    }
  };

  if (headings.length === 0) return null;

  return (
    <div className="space-y-3 text-sm">
      <p className="font-semibold text-xs tracking-tight text-foreground uppercase">
        On This Page
      </p>
      <div className="border-l border-border/80 pl-0 space-y-1">
        {headings.map((heading) => {
          const isActive = activeId === heading.id;
          return (
            <a
              key={heading.id}
              href={`#${heading.id}`}
              onClick={(e) => scrollToHeading(heading.id, e)}
              className={cn(
                "block text-xs transition-colors py-1 leading-snug cursor-pointer",
                heading.level === 3 ? "pl-5 text-[11px]" : "pl-3",
                isActive
                  ? "border-l-2 border-foreground font-semibold text-foreground -ml-[2px]"
                  : "border-l-2 border-transparent text-muted-foreground hover:text-foreground -ml-[2px]"
              )}
            >
              {heading.text}
            </a>
          );
        })}
      </div>
    </div>
  );
}
