/**
 * Sticky Full Page Slides - TypeScript Utility & HTML Renderer
 */

export interface SlideData {
  id?: string | number;
  title: string;
  subtitle?: string;
  bgGradient: string;
  textColor?: string;
}

export const STICKY_SLIDES_CONFIG: SlideData[] = [
  {
    id: 1,
    title: "The First slide",
    subtitle: "Scroll Down for next slide",
    bgGradient: "from-green-200 to-blue-200",
    textColor: "text-slate-900",
  },
  {
    id: 2,
    title: "The Second slide",
    subtitle: "Scroll Down for next slide",
    bgGradient: "from-indigo-800 to-purple-800",
    textColor: "text-white",
  },
  {
    id: 3,
    title: "The Third slide",
    subtitle: "Scroll Down",
    bgGradient: "from-purple-800 to-pink-800",
    textColor: "text-white",
  },
  {
    id: 4,
    title: "The Fourth slide",
    subtitle: "End of full page slides",
    bgGradient: "from-blue-200 to-indigo-100",
    textColor: "text-slate-900",
  },
];

export interface RenderSlidesOptions {
  slides?: SlideData[];
  heightClass?: string;
  containerClass?: string;
}

/**
 * Generate standard HTML string with Tailwind CSS classes for Sticky Slides
 */
export function renderStickySlidesHtml(options: RenderSlidesOptions = {}): string {
  const slides = options.slides || STICKY_SLIDES_CONFIG;
  const heightClass = options.heightClass || "h-screen";
  const containerClass = options.containerClass || "relative";

  const slidesHtml = slides
    .map(
      (slide) => `  <div class="sticky top-0 ${heightClass} flex flex-col items-center justify-center bg-gradient-to-b ${slide.bgGradient} ${slide.textColor || "text-black"}">
    <h2 class="text-4xl font-bold">${slide.title}</h2>
    ${slide.subtitle ? `<p class="mt-2">${slide.subtitle}</p>` : ""}
  </div>`
    )
    .join("\n");

  return `<div class="${containerClass}">\n${slidesHtml}\n</div>`;
}
