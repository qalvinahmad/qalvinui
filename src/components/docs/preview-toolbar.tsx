"use client";

import { useEffect, useRef } from "react";

/**
 * PreviewKit — injects a small Replay / Fullscreen toolbar into every demo
 * stage across the docs pages, in the style of live previews.
 *
 * Stages are plain `div`s rendered inline by each doc page (~160 pages, no
 * shared preview component), so this client kit runs mounted from the docs
 * layout: a MutationObserver finds stages as pages mount (including client
 * navigation between routes) and decorates them once each.
 *
 * Stage selectors (verified against the repo):
 *  - /docs/components/* pages: preview stages carry `min-h-[350px]` (76 files)
 *  - /docs/ui/* pages: preview stages carry `bg-card/40` (80 files, one each)
 *
 * Styling and fullscreen overrides live in globals.css under `.qalvin-*`.
 */

const STAGE_SELECTOR = 'div[class*="min-h-[350px]"], div[class*="bg-card/40"]';

const ICON: Record<string, string> = {
  replay: '<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>',
  expand: '<path d="M15 3h6v6"/><path d="m21 3-7 7"/><path d="m3 21 7-7"/><path d="M9 21H3v-6"/>',
  minimize: '<path d="m14 10 7-7"/><path d="M20 10h-6V4"/><path d="m3 21 7-7"/><path d="M4 14h6v6"/>',
};

function svg(name: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16" aria-hidden="true">${ICON[name]}</svg>`;
}

interface StageRef {
  stage: HTMLElement;
  fsBtn: HTMLButtonElement;
}

function setFsButton(btn: HTMLButtonElement, active: boolean) {
  btn.innerHTML = svg(active ? "minimize" : "expand");
  const label = active ? "Exit fullscreen" : "Fullscreen";
  btn.title = label;
  btn.setAttribute("aria-label", label);
}

export function PreviewKit() {
  const refs = useRef<Map<HTMLElement, StageRef>>(new Map());

  useEffect(() => {
    const cleanups: Array<() => void> = [];

    const decorate = (stage: HTMLElement) => {
      if (stage.dataset.qalvinStage) return;
      stage.dataset.qalvinStage = "1";
      stage.classList.add("qalvin-stage");
      // future-proof hook: on-this-page skips headings inside previews
      if (!stage.hasAttribute("data-slot")) stage.setAttribute("data-slot", "preview");

      const bar = document.createElement("div");
      bar.className = "qalvin-toolbar";
      bar.setAttribute("role", "group");
      bar.setAttribute("aria-label", "Preview actions");

      const replay = document.createElement("button");
      replay.type = "button";
      replay.title = "Replay animation";
      replay.setAttribute("aria-label", "Replay animation");
      replay.innerHTML = svg("replay");
      replay.addEventListener("click", () => {
        stage.dispatchEvent(new CustomEvent("qalvin:replay", { bubbles: true }));
        // CSS animations restart from zero when forced off and back on.
        stage.classList.add("qalvin-replay");
        void stage.offsetWidth;
        requestAnimationFrame(() => stage.classList.remove("qalvin-replay"));
      });
      bar.appendChild(replay);

      const fsBtn = document.createElement("button");
      fsBtn.type = "button";
      fsBtn.innerHTML = svg("expand");
      setFsButton(fsBtn, false);
      fsBtn.addEventListener("click", () => {
        if (document.fullscreenElement === stage) {
          document.exitFullscreen().catch(() => {});
        } else {
          stage.requestFullscreen?.().catch(() => {});
        }
      });
      bar.appendChild(fsBtn);

      stage.appendChild(bar);
      refs.current.set(stage, { stage, fsBtn });
    };

    const scan = () => {
      document.querySelectorAll<HTMLElement>(STAGE_SELECTOR).forEach(decorate);
    };

    let queued = false;
    const schedule = () => {
      if (queued) return;
      queued = true;
      requestAnimationFrame(() => {
        queued = false;
        scan();
      });
    };

    const observer = new MutationObserver(schedule);
    observer.observe(document.body, { childList: true, subtree: true });

    const onFullscreenChange = () => {
      const activeEl = document.fullscreenElement;
      refs.current.forEach(({ stage, fsBtn }) => {
        const active = activeEl === stage;
        setFsButton(fsBtn, active);
        stage.classList.toggle("qalvin-fs", active);
      });
    };
    document.addEventListener("fullscreenchange", onFullscreenChange);

    scan();
    // late-mounted stages (tabs, lazy code-splits) after a tick
    const t = window.setTimeout(scan, 250);
    cleanups.push(() => window.clearTimeout(t));

    cleanups.push(() => {
      observer.disconnect();
      document.removeEventListener("fullscreenchange", onFullscreenChange);
      refs.current.clear();
    });

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
