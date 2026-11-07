"use client";

import { useState, useMemo } from "react";
import { Search, Sparkles } from "lucide-react";
import { ComponentCard } from "@/components/ui/component-card";

const allUiComponents = [
  {
    "name": "Sticky Slides",
    "slug": "sticky-slides",
    "description": "Full-viewport sticky stacked presentation slides using pure CSS and Tailwind with gradient transitions.",
    "category": "Shaders & Backgrounds",
    "tag": "Scroll Deck"
  },
  {
    "name": "Thinking Orb",
    "slug": "thinking-orb",
    "description": "Multi-state particle orb visualizing AI reasoning, thinking, audio listening, and error states.",
    "category": "Shaders & Backgrounds",
    "tag": "AI Reasoning"
  },
  {
    "name": "Metal FX",
    "slug": "metal-fx",
    "description": "GPU shader materials with real-time chrome, gold, liquid mercury, and mouse-reactive lighting.",
    "category": "Shaders & Backgrounds",
    "tag": "WebGL Shaders"
  },
  {
    "name": "Image FX",
    "slug": "img-fx",
    "description": "Animated mosaic pixel reveal and gradient sweep shader transitions for AI image generation cards.",
    "category": "Media & Creative",
    "tag": "AI Generation"
  },
  {
    "name": "Border Beam",
    "slug": "border-beam",
    "description": "Multi-path animated laser beam with gradient pulse drivers for high-tech borders and cards.",
    "category": "Shaders & Backgrounds",
    "tag": "Motion Laser"
  },
  {
    "name": "Voice Glow",
    "slug": "voice-glow",
    "description": "Audio-reactive voice assistant aura and reactive ambient waveforms for speech-enabled interfaces.",
    "category": "Media & Creative",
    "tag": "Audio Reactive"
  },
  {
    "name": "Liquid Gooey",
    "slug": "liquid-gooey",
    "description": "Organic metaball fluid fusion, elastic morphing, and molten silhouette filters with real shadows.",
    "category": "Shaders & Backgrounds",
    "tag": "Fluid Physics"
  },
  {
    "name": "Dot Field",
    "slug": "dot-field",
    "description": "Interactive dot field background with magnetic particle repulsion.",
    "category": "Shaders & Backgrounds",
    "tag": "WebGL Physics"
  },
  {
    "name": "Background Paths",
    "slug": "background-paths",
    "description": "Elegant floating bezier paths with radiant light pulses.",
    "category": "Shaders & Backgrounds",
    "tag": "Motion SVG"
  },
  {
    "name": "Shape Hero",
    "slug": "shape-hero",
    "description": "Dynamic geometric abstract shapes background header.",
    "category": "Shaders & Backgrounds",
    "tag": "Header Visuals"
  },
  {
    "name": "Flow Field",
    "slug": "flow-field",
    "description": "Streamlines that part around cursor, swirl in its wake, and scatter on click.",
    "category": "Shaders & Backgrounds",
    "tag": "Fluid Particles"
  },
  {
    "name": "Topo Background",
    "slug": "topo-background",
    "description": "Topographical contour line elevation maps with elevation shifts.",
    "category": "Shaders & Backgrounds",
    "tag": "Contour Lines"
  },
  {
    "name": "Drape Background",
    "slug": "drape-background",
    "description": "Smooth cloth drape physics simulation with wind resistance.",
    "category": "Shaders & Backgrounds",
    "tag": "Cloth Physics"
  },
  {
    "name": "Caustics Background",
    "slug": "caustics-background",
    "description": "Realistic underwater light caustics refraction shader.",
    "category": "Shaders & Backgrounds",
    "tag": "Light Refraction"
  },
  {
    "name": "Card Flip",
    "slug": "card-flip",
    "description": "3D perspective card flip with front and back interactive faces.",
    "category": "Cards & Widgets",
    "tag": "3D Perspective"
  },
  {
    "name": "Card Stack",
    "slug": "card-stack",
    "description": "Swipeable and draggable stacked deck of cards with smooth physics.",
    "category": "Cards & Widgets",
    "tag": "Gestures"
  },
  {
    "name": "Liquid Glass Card",
    "slug": "liquid-glass-card",
    "description": "Glassmorphism music player card with spinning, scrubbable disc.",
    "category": "Cards & Widgets",
    "tag": "Glassmorphism"
  },
  {
    "name": "Apple Activity Card",
    "slug": "apple-activity-card",
    "description": "Apple Watch style concentric fitness rings with metric breakdown.",
    "category": "Cards & Widgets",
    "tag": "Fitness Rings"
  },
  {
    "name": "Bento Grid",
    "slug": "bento-grid",
    "description": "Asymmetric responsive bento grid showcase layout with interactive cards.",
    "category": "Cards & Widgets",
    "tag": "Showcase Layout"
  },
  {
    "name": "Currency Transfer",
    "slug": "currency-transfer",
    "description": "Real-time multi-currency exchange and transfer widget.",
    "category": "Cards & Widgets",
    "tag": "Fintech"
  },
  {
    "name": "Carousel Cards",
    "slug": "carousel-cards",
    "description": "Smooth horizontal snapping carousel cards.",
    "category": "Cards & Widgets",
    "tag": "Smooth Slider"
  },
  {
    "name": "Notification Stack",
    "slug": "notification-stack",
    "description": "Floating notification toast stack with collapsible view.",
    "category": "Cards & Widgets",
    "tag": "Toast Stacks"
  },
  {
    "name": "Liquid Gauge",
    "slug": "liquid-gauge",
    "description": "Water-level fluid wave progress and capacity gauge.",
    "category": "Cards & Widgets",
    "tag": "Wave Physics"
  },
  {
    "name": "Activity Terrain",
    "slug": "activity-terrain",
    "description": "3D wireframe terrain representing user activity data.",
    "category": "Cards & Widgets",
    "tag": "3D Wireframe"
  },
  {
    "name": "Receipt Printer",
    "slug": "receipt-printer",
    "description": "Animated tearable thermal receipt slip with itemized bill.",
    "category": "Cards & Widgets",
    "tag": "Skeuomorphic"
  },
  {
    "name": "Metric Card",
    "slug": "metric-card",
    "description": "Stat metric KPI card with sparkline trend indicator.",
    "category": "Cards & Widgets",
    "tag": "KPI Metric"
  },
  {
    "name": "Uptime Card",
    "slug": "uptime-card",
    "description": "High-availability system uptime monitor with latency bars.",
    "category": "Cards & Widgets",
    "tag": "Infrastructure"
  },
  {
    "name": "Spending Ring",
    "slug": "spending-ring",
    "description": "Segmented circular breakdown ring of monthly expenditures.",
    "category": "Cards & Widgets",
    "tag": "Finance Chart"
  },
  {
    "name": "Boarding Pass",
    "slug": "boarding-pass",
    "description": "Airline boarding pass card with barcode, gate info, and fold line.",
    "category": "Cards & Widgets",
    "tag": "Travel Widget"
  },
  {
    "name": "Morphic Navbar",
    "slug": "morphic-navbar",
    "description": "Floating morphing navigation bar with elastic indicator.",
    "category": "Navigation & Menus",
    "tag": "Elastic Nav"
  },
  {
    "name": "Toolbar",
    "slug": "toolbar",
    "description": "Compact macOS-style floating dock toolbar.",
    "category": "Navigation & Menus",
    "tag": "Dock UI"
  },
  {
    "name": "Profile Dropdown",
    "slug": "profile-dropdown",
    "description": "Rich avatar user profile menu with status and actions.",
    "category": "Navigation & Menus",
    "tag": "User Menu"
  },
  {
    "name": "Smooth Drawer",
    "slug": "smooth-drawer",
    "description": "Spring-animated bottom and side drawer panel.",
    "category": "Navigation & Menus",
    "tag": "Bottom Sheet"
  },
  {
    "name": "Marking Menu",
    "slug": "marking-menu",
    "description": "Radial circular marking pie menu for fast gestural selections.",
    "category": "Navigation & Menus",
    "tag": "Radial Gesture"
  },
  {
    "name": "Scroll Index",
    "slug": "scroll-index",
    "description": "Minimalist vertical section index indicator tracking scroll.",
    "category": "Navigation & Menus",
    "tag": "Scroll Tracker"
  },
  {
    "name": "Status Island",
    "slug": "status-island",
    "description": "Dynamic island notification pill with contextual status.",
    "category": "Navigation & Menus",
    "tag": "Dynamic Island"
  },
  {
    "name": "Stack Panel",
    "slug": "stack-panel",
    "description": "Multi-layer accordion stack panel with fluid layout shifts.",
    "category": "Navigation & Menus",
    "tag": "Fluid Accordion"
  },
  {
    "name": "File Upload",
    "slug": "file-upload",
    "description": "Drag-and-drop file upload zone with file preview and progress.",
    "category": "Pickers & Inputs",
    "tag": "Dropzone"
  },
  {
    "name": "Avatar Picker",
    "slug": "avatar-picker",
    "description": "Interactive user avatar selector with preset illustrations.",
    "category": "Pickers & Inputs",
    "tag": "Profile Customizer"
  },
  {
    "name": "Team Selector",
    "slug": "team-selector",
    "description": "Collaborative workspace and team member switcher.",
    "category": "Pickers & Inputs",
    "tag": "Workspace Switcher"
  },
  {
    "name": "Detent Dial",
    "slug": "detent-dial",
    "description": "Rotary stepped physical dial for precision adjustments.",
    "category": "Pickers & Inputs",
    "tag": "Physical Haptics"
  },
  {
    "name": "Wheel Picker",
    "slug": "wheel-picker",
    "description": "iOS-style 3D cylindrical drum wheel selector for numbers and dates.",
    "category": "Pickers & Inputs",
    "tag": "iOS Drum"
  },
  {
    "name": "Signature Pad",
    "slug": "signature-pad",
    "description": "Smooth vector canvas drawing pad for digital signatures.",
    "category": "Pickers & Inputs",
    "tag": "Canvas Drawing"
  },
  {
    "name": "Timezone Planner",
    "slug": "timezone-planner",
    "description": "World clock meeting planner across multiple timezones.",
    "category": "Pickers & Inputs",
    "tag": "Meeting Scheduler"
  },
  {
    "name": "Amount Pad",
    "slug": "amount-pad",
    "description": "Virtual financial numpad for sending money.",
    "category": "Pickers & Inputs",
    "tag": "Numpad"
  },
  {
    "name": "Seat Map",
    "slug": "seat-map",
    "description": "Interactive airplane and theater seating chart selector.",
    "category": "Pickers & Inputs",
    "tag": "Interactive Grid"
  },
  {
    "name": "Card Field",
    "slug": "card-field",
    "description": "Credit card input with auto-formatting, card brand detection, and 3D preview.",
    "category": "Pickers & Inputs",
    "tag": "Credit Card"
  },
  {
    "name": "Stay Picker",
    "slug": "stay-picker",
    "description": "Hotel date range check-in and check-out reservation calendar.",
    "category": "Pickers & Inputs",
    "tag": "Booking Calendar"
  },
  {
    "name": "Slot Picker",
    "slug": "slot-picker",
    "description": "Time slot scheduler for appointment booking.",
    "category": "Pickers & Inputs",
    "tag": "Appointment"
  },
  {
    "name": "Tip Selector",
    "slug": "tip-selector",
    "description": "Percentage and custom gratuity tip selector.",
    "category": "Pickers & Inputs",
    "tag": "Gratuity"
  },
  {
    "name": "Location Picker",
    "slug": "location-picker",
    "description": "Interactive map pin location selection card.",
    "category": "Pickers & Inputs",
    "tag": "Geocoding"
  },
  {
    "name": "AI Prompt",
    "slug": "ai-prompt",
    "description": "Multi-action generative AI prompt composer with autosizing textarea.",
    "category": "AI Interfaces",
    "tag": "Composer"
  },
  {
    "name": "AI Input Search",
    "slug": "ai-input-search",
    "description": "Smart search input with AI suggestion chips and keyboard shortcut.",
    "category": "AI Interfaces",
    "tag": "Smart Search"
  },
  {
    "name": "AI Loading",
    "slug": "ai-loading",
    "description": "Shimmering generative neural pulse animation during AI thought processing.",
    "category": "AI Interfaces",
    "tag": "Neural Pulse"
  },
  {
    "name": "AI Tool Approval",
    "slug": "ai-tool-approval",
    "description": "Interactive confirmation card for AI function/tool execution.",
    "category": "AI Interfaces",
    "tag": "Human-in-the-Loop"
  },
  {
    "name": "AI Context Meter",
    "slug": "ai-context-meter",
    "description": "Visual token window usage meter and model context tracker.",
    "category": "AI Interfaces",
    "tag": "Token Meter"
  },
  {
    "name": "AI Citations",
    "slug": "ai-citations",
    "description": "Interactive source citation badges with URL previews and footnotes.",
    "category": "AI Interfaces",
    "tag": "Fact Checking"
  },
  {
    "name": "AI Diff Review",
    "slug": "ai-diff-review",
    "description": "Side-by-side and unified git diff review card for AI code generation.",
    "category": "AI Interfaces",
    "tag": "Code Diff"
  },
  {
    "name": "AI Model Selector",
    "slug": "ai-model-selector",
    "description": "Dropdown selector for LLM model tiers.",
    "category": "AI Interfaces",
    "tag": "LLM Picker"
  },
  {
    "name": "AI Inline Edit",
    "slug": "ai-inline-edit",
    "description": "Floating inline AI rewriting toolbar for selected content.",
    "category": "AI Interfaces",
    "tag": "Floating Toolbar"
  },
  {
    "name": "AI Message Queue",
    "slug": "ai-message-queue",
    "description": "Real-time streaming message queue with token velocity tracker.",
    "category": "AI Interfaces",
    "tag": "Token Stream"
  },
  {
    "name": "AI Memory",
    "slug": "ai-memory",
    "description": "AI persistent facts and memory ledger with add and delete capabilities.",
    "category": "AI Interfaces",
    "tag": "Memory Ledger"
  },
  {
    "name": "AI Autocomplete",
    "slug": "ai-autocomplete",
    "description": "Smart ghost text tab completion inside inputs.",
    "category": "AI Interfaces",
    "tag": "Ghost Text"
  },
  {
    "name": "Clip Trimmer",
    "slug": "clip-trimmer",
    "description": "Video timeline scrubber with dual start and end handle trimmers.",
    "category": "Media & Creative",
    "tag": "Video Timeline"
  },
  {
    "name": "Synced Transcript",
    "slug": "synced-transcript",
    "description": "Audio podcast player with word-by-word synced karaoke transcript.",
    "category": "Media & Creative",
    "tag": "Karaoke Audio"
  },
  {
    "name": "Focal Point Picker",
    "slug": "focal-point-picker",
    "description": "Drag to reposition image crop center and focal point.",
    "category": "Media & Creative",
    "tag": "Image Crop"
  },
  {
    "name": "Photo Straighten",
    "slug": "photo-straighten",
    "description": "Rotating compass angle slider to straighten crooked photos.",
    "category": "Media & Creative",
    "tag": "Image Transform"
  },
  {
    "name": "Type Writer",
    "slug": "type-writer",
    "description": "Mechanical typewriter effect with cursor blinking.",
    "category": "Media & Creative",
    "tag": "Text Animation"
  },
  {
    "name": "Marker Text",
    "slug": "marker-text",
    "description": "Hand-drawn fluorescent highlighter sweep animation across text.",
    "category": "Media & Creative",
    "tag": "Highlighter"
  },
  {
    "name": "Particle Button",
    "slug": "particle-button",
    "description": "Confetti particle explosion trigger on click.",
    "category": "Buttons & Actions",
    "tag": "Confetti"
  },
  {
    "name": "Hold Button",
    "slug": "hold-button",
    "description": "Long-press radial progress button for destructive/critical confirmations.",
    "category": "Buttons & Actions",
    "tag": "Press & Hold"
  },
  {
    "name": "Command Button",
    "slug": "command-button",
    "description": "Keyboard shortcut badge button with press feedback.",
    "category": "Buttons & Actions",
    "tag": "Keybinding"
  },
  {
    "name": "Switch Button",
    "slug": "switch-button",
    "description": "Tactile multi-state sliding toggle button.",
    "category": "Buttons & Actions",
    "tag": "Tactile Toggle"
  },
  {
    "name": "Slide Text Button",
    "slug": "slide-text-button",
    "description": "Micro-interactive button with sliding replacement text on hover.",
    "category": "Buttons & Actions",
    "tag": "Hover Motion"
  },
  {
    "name": "Tear Button",
    "slug": "tear-button",
    "description": "Perforated paper rip animation button.",
    "category": "Buttons & Actions",
    "tag": "Paper Rip"
  },
  {
    "name": "Bell Button",
    "slug": "bell-button",
    "description": "Notification bell icon with physics ringing sway on alert.",
    "category": "Buttons & Actions",
    "tag": "Swaying Bell"
  },
  {
    "name": "Morph Popover",
    "slug": "morph-popover",
    "description": "Button that smoothly expands into an inline popover dialog.",
    "category": "Buttons & Actions",
    "tag": "Expand Modal"
  },
  {
    "name": "Undo Button",
    "slug": "undo-button",
    "description": "Toast action button with countdown timer pie ring.",
    "category": "Buttons & Actions",
    "tag": "Countdown Ring"
  },
  {
    "name": "Save Button",
    "slug": "save-button",
    "description": "Morphing state button: Idle -> Saving Spinner -> Checkmark Success.",
    "category": "Buttons & Actions",
    "tag": "Morphing State"
  },
  {
    "name": "Cart Button",
    "slug": "cart-button",
    "description": "Interactive e-commerce add-to-cart button that expands into a stepper.",
    "category": "Buttons & Actions",
    "tag": "Shopping Stepper"
  }
];

const CATEGORIES = [
  "All",
  "Shaders & Backgrounds",
  "Cards & Widgets",
  "Navigation & Menus",
  "Pickers & Inputs",
  "AI Interfaces",
  "Buttons & Actions",
  "Media & Creative"
];

export default function UiOverviewPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = useMemo(() => {
    return allUiComponents.filter((item) => {
      const matchesCategory =
        selectedCategory === "All" || item.category === selectedCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tag.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="pb-16">
      {/* Page Header */}
      <div className="space-y-3 pb-10 md:pb-12">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
          <Sparkles className="h-3.5 w-3.5" />
          <span>80+ Specialized UI & Creative Effects</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Specialized UI</h1>
        <p className="max-w-3xl text-base text-muted-foreground leading-relaxed sm:text-lg">
          Production-grade creative effects, WebGL shaders, animated widgets, AI prompt
          tools, and gesture-driven micro-interactions.
        </p>
      </div>

      {/* Filters */}
      <div className="pb-10 md:pb-12">
        <div className="relative max-w-md pb-4">
          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground opacity-60" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search specialized components..."
            aria-label="Search specialized UI components"
            className="w-full rounded-full border border-border/80 bg-muted/40 py-2.5 pl-11 pr-4 text-base md:text-sm transition-[border-color,background-color,box-shadow] duration-150 placeholder:text-muted-foreground focus:border-border focus:bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-1"
          />
        </div>

        <div className="flex flex-wrap gap-2" role="group" aria-label="Component category filters">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              aria-pressed={selectedCategory === cat}
              className={`cursor-pointer rounded-full px-3.5 py-1.5 text-xs font-medium transition-[color,background-color,border-color,transform] duration-150 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 active:scale-[0.96] motion-reduce:active:scale-100 ${
                selectedCategory === cat
                  ? "bg-foreground font-semibold text-background shadow-xs"
                  : "border border-border/80 text-muted-foreground hover:border-border hover:text-foreground"
              }`}
            >
              {cat}
              {cat === "All" && (
                <span className="ml-1.5 font-mono text-[11px] tabular-nums opacity-75">
                  {allUiComponents.length}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((item) => (
          <ComponentCard
            key={item.slug}
            name={item.name}
            description={item.description}
            tag={item.tag}
            href={`/docs/ui/${item.slug}`}
          />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="rounded-2xl border border-dashed border-border/80 bg-muted/20 py-16 text-center space-y-3">
          <p className="text-sm font-medium text-foreground">
            No components matched &ldquo;{searchQuery}&rdquo;
          </p>
          <p className="text-xs text-muted-foreground">
            Try searching for another keyword or reset the filters.
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("All");
            }}
            className="inline-flex items-center justify-center rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
