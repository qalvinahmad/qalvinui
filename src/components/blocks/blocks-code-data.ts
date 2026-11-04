import { FileTab } from "./block-code-viewer";

export const checkoutFiles: FileTab[] = [
  {
    name: "interactive-checkout.tsx",
    path: "src/components/blocks/interactive-checkout.tsx",
    description: "Full component implementation with animated cart, dynamic item counters, and fully responsive layout.",
    code: `"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Minus, Plus, ShoppingCart, X, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";
import NumberFlow from "@number-flow/react";

export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  color: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface InteractiveCheckoutProps {
  products?: Product[];
  className?: string;
  forceMode?: "desktop" | "tablet" | "mobile";
}

export const defaultProducts: Product[] = [
  {
    id: "1",
    name: "Air Max 90",
    price: 129.99,
    category: "Running",
    image:
      "https://ferf1mheo22r9ira.public.blob.vercel-storage.com/shoes-d2GWFGnVlkkUneRD3x2xDbUVHO1qMp",
    color: "Black/White",
  },
  {
    id: "2",
    name: "Ultra Boost",
    price: 179.99,
    category: "Performance",
    image:
      "https://ferf1mheo22r9ira.public.blob.vercel-storage.com/shoes-d2GWFGnVlkkUneRD3x2xDbUVHO1qMp",
    color: "Grey/Blue",
  },
  {
    id: "3",
    name: "Classic Trainer",
    price: 89.99,
    category: "Casual",
    image:
      "https://ferf1mheo22r9ira.public.blob.vercel-storage.com/shoes-d2GWFGnVlkkUneRD3x2xDbUVHO1qMp",
    color: "White/Red",
  },
];

function InteractiveCheckout({
  products = defaultProducts,
  className,
  forceMode,
}: InteractiveCheckoutProps) {
  const [cart, setCart] = useState<CartItem[]>([]);

  const isMobile = forceMode === "mobile";
  const isDesktop = forceMode === "desktop";

  const addToCart = (product: Product) => {
    setCart((currentCart) => {
      const existingItem = currentCart.find((item) => item.id === product.id);
      if (existingItem) {
        return currentCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...currentCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== productId)
    );
  };

  const updateQuantity = (productId: string, delta: number) => {
    setCart((currentCart) =>
      currentCart.map((item) => {
        if (item.id === productId) {
          const newQuantity = item.quantity + delta;
          return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
        }
        return item;
      })
    );
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className={cn("@container w-full max-w-4xl mx-auto", className)}>
      <div
        className={cn(
          "flex gap-6",
          isMobile
            ? "flex-col"
            : isDesktop
            ? "flex-col md:flex-row"
            : "flex-col @[720px]:flex-row"
        )}
      >
        {/* Products List */}
        <div className="flex-1 space-y-3 min-w-0">
          {products.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className={cn(
                "group",
                "p-3.5 sm:p-4 rounded-xl",
                "bg-white dark:bg-zinc-900",
                "border border-zinc-200 dark:border-zinc-800",
                "hover:border-zinc-300 dark:hover:border-zinc-700",
                "transition-all duration-200"
              )}
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0 flex-1">
                  <div
                    className={cn(
                      "relative w-12 h-12 rounded-lg overflow-hidden shrink-0",
                      "bg-zinc-100 dark:bg-zinc-800",
                      "transition-colors duration-200",
                      "group-hover:bg-zinc-200 dark:group-hover:bg-zinc-700"
                    )}
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100 truncate max-w-[120px] sm:max-w-none">
                        {product.name}
                      </h3>
                      <span className="px-2 py-0.5 text-[10px] sm:text-xs rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 shrink-0">
                        {product.category}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-0.5">
                      <span className="font-semibold text-zinc-900 dark:text-zinc-100">\${product.price}</span>
                      <span>•</span>
                      <span className="truncate">{product.color}</span>
                    </div>
                  </div>
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => addToCart(product)}
                  className="gap-1.5 shrink-0"
                >
                  <Plus className="w-3.5 h-3.5" />
                  Add
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cart */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className={cn(
            "flex flex-col",
            "p-4 rounded-xl",
            "bg-white dark:bg-zinc-900",
            "border border-zinc-200 dark:border-zinc-800",
            isMobile
              ? "w-full min-w-0"
              : isDesktop
              ? "w-full md:w-80 md:sticky md:top-4 max-h-[32rem]"
              : "w-full @[720px]:w-80 @[720px]:sticky @[720px]:top-4 max-h-[32rem]"
          )}
        >
          <div className="flex items-center gap-2 mb-3">
            <ShoppingCart className="w-4 h-4 text-zinc-500" />
            <h2 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
              Cart ({totalItems})
            </h2>
          </div>

          <motion.div
            className={cn(
              "flex-1 overflow-y-auto",
              "min-h-0",
              "-mx-2 px-2 sm:-mx-4 sm:px-4",
              "space-y-3"
            )}
          >
            {cart.length === 0 ? (
              <div className="py-8 text-center text-xs text-muted-foreground">
                Your cart is empty. Add items to checkout.
              </div>
            ) : (
              <AnimatePresence initial={false} mode="popLayout">
                {cart.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{
                      opacity: { duration: 0.2 },
                      layout: { duration: 0.2 },
                    }}
                    className={cn(
                      "flex items-center gap-3",
                      "p-2.5 rounded-lg",
                      "bg-zinc-50 dark:bg-zinc-800/50",
                      "mb-3"
                    )}
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100 truncate">
                          {item.name}
                        </span>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => removeFromCart(item.id)}
                          className="p-1 rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-700 cursor-pointer shrink-0"
                        >
                          <X className="w-3 h-3 text-zinc-400" />
                        </motion.button>
                      </div>
                      <div className="flex items-center justify-between mt-1.5 gap-2">
                        <div className="flex items-center gap-1 shrink-0">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => updateQuantity(item.id, -1)}
                            className="p-1 rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-700 cursor-pointer"
                          >
                            <Minus className="w-3 h-3" />
                          </motion.button>
                          <motion.span
                            layout
                            className="text-xs text-zinc-600 dark:text-zinc-400 w-4 text-center font-medium"
                          >
                            {item.quantity}
                          </motion.span>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => updateQuantity(item.id, 1)}
                            className="p-1 rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-700 cursor-pointer"
                          >
                            <Plus className="w-3 h-3" />
                          </motion.button>
                        </div>
                        <motion.span
                          layout
                          className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 shrink-0"
                        >
                          \${(item.price * item.quantity).toFixed(2)}
                        </motion.span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            )}
          </motion.div>

          <motion.div
            layout
            className={cn(
              "pt-3 mt-3",
              "border-t border-zinc-200 dark:border-zinc-800",
              "bg-white dark:bg-zinc-900"
            )}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                Total
              </span>
              <motion.span
                layout
                className="text-sm font-semibold text-zinc-900 dark:text-zinc-100"
              >
                <NumberFlow value={totalPrice} />
              </motion.span>
            </div>
            <Button size="sm" className="w-full gap-2 cursor-pointer">
              <CreditCard className="w-4 h-4" />
              Checkout
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export { InteractiveCheckout };
export default InteractiveCheckout;`,
  },
  {
    name: "demo.tsx",
    path: "src/app/checkout-example.tsx",
    description: "Example page showing how to import and use the InteractiveCheckout component.",
    code: `import { InteractiveCheckout, Product } from "@/components/blocks/interactive-checkout";

const sampleProducts: Product[] = [
  {
    id: "1",
    name: "Air Max 90",
    price: 129.99,
    category: "Running",
    image: "https://ferf1mheo22r9ira.public.blob.vercel-storage.com/shoes-d2GWFGnVlkkUneRD3x2xDbUVHO1qMp",
    color: "Black/White",
  },
  {
    id: "2",
    name: "Ultra Boost",
    price: 179.99,
    category: "Performance",
    image: "https://ferf1mheo22r9ira.public.blob.vercel-storage.com/shoes-d2GWFGnVlkkUneRD3x2xDbUVHO1qMp",
    color: "Grey/Blue",
  },
  {
    id: "3",
    name: "Classic Trainer",
    price: 89.99,
    category: "Casual",
    image: "https://ferf1mheo22r9ira.public.blob.vercel-storage.com/shoes-d2GWFGnVlkkUneRD3x2xDbUVHO1qMp",
    color: "White/Red",
  },
];

export default function CheckoutPage() {
  return (
    <div className="min-h-screen p-6 md:p-12 bg-zinc-50 dark:bg-zinc-950">
      <InteractiveCheckout products={sampleProducts} />
    </div>
  );
}`,
  },
  {
    name: "button.tsx",
    path: "src/components/ui/button.tsx",
    description: "Required button component used inside InteractiveCheckout.",
    code: `import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/80",
        outline:
          "border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        ghost:
          "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-8 gap-1.5 px-2.5",
        xs: "h-6 gap-1 rounded-md px-2 text-xs",
        sm: "h-7 gap-1 rounded-md px-2.5 text-[0.8rem]",
        lg: "h-9 gap-1.5 px-2.5",
        icon: "size-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };`,
  },
  {
    name: "Install & Tailwind",
    path: "Terminal & tailwind.config.ts",
    description: "Dependencies and Tailwind CSS setup for interactive checkout.",
    code: `### 1. Install Dependencies

npm install @number-flow/react framer-motion lucide-react @base-ui/react class-variance-authority clsx tailwind-merge

# Or with pnpm:
pnpm add @number-flow/react framer-motion lucide-react @base-ui/react class-variance-authority clsx tailwind-merge

# Or with yarn:
yarn add @number-flow/react framer-motion lucide-react @base-ui/react class-variance-authority clsx tailwind-merge

---

### 2. Add Helper Utility (src/lib/utils.ts)

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

---

### 3. Tailwind CSS Support

This block uses modern responsive layout and CSS Container Queries (@container, @[720px]:flex-row).
- Tailwind v4: Works natively out of the box!
- Tailwind v3: Add @tailwindcss/container-queries plugin if you want container-query based responsiveness:
  npm install -D @tailwindcss/container-queries`,
  },
];

export const shiningTextFiles: FileTab[] = [
  {
    name: "shining-text.tsx",
    path: "src/components/ui/shining-text.tsx",
    description: "Component providing an animated gradient shimmer/sweep text effect.",
    code: `"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface ShiningTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  duration?: number;
  shimmerColor?: string;
  className?: string;
}

export function ShiningText({
  children,
  duration = 3,
  shimmerColor,
  className,
  ...props
}: ShiningTextProps) {
  const dynamicStyle: React.CSSProperties = {
    animationDuration: \`\${duration}s\`,
    ...(shimmerColor
      ? {
          backgroundImage: \`linear-gradient(110deg, #64748b 40%, \${shimmerColor} 50%, #64748b 60%)\`,
        }
      : {}),
    ...props.style,
  };

  return (
    <span
      className={cn(
        "inline-block bg-[length:250%_100%] bg-clip-text text-transparent animate-[shining-sweep_3s_linear_infinite]",
        "bg-[linear-gradient(110deg,#64748b,45%,#0f172a,55%,#64748b)] dark:bg-[linear-gradient(110deg,#71717a,45%,#ffffff,55%,#71717a)]",
        className
      )}
      style={dynamicStyle}
      {...props}
    >
      {children}
    </span>
  );
}

export default ShiningText;`,
  },
  {
    name: "demo.tsx",
    path: "src/app/shining-text-example.tsx",
    description: "Usage examples for ShiningText animation.",
    code: `import { ShiningText } from "@/components/ui/shining-text";

export default function Example() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
        Next Generation <ShiningText duration={3}>User Interface</ShiningText>
      </h1>

      <p className="text-xl text-muted-foreground">
        Crafted with <ShiningText shimmerColor="#38bdf8" duration={2.5}>Tailwind CSS</ShiningText> and React.
      </p>
    </div>
  );
}`,
  },
  {
    name: "globals.css",
    path: "src/app/globals.css",
    description: "Keyframe animation for the shining sweep effect.",
    code: `/* Add to your globals.css or Tailwind config: */

@keyframes shining-sweep {
  0% {
    background-position: 200% center;
  }
  100% {
    background-position: -200% center;
  }
}`,
  },
  {
    name: "Install",
    path: "Terminal",
    description: "Dependencies needed for Shining Text.",
    code: `npm install lucide-react clsx tailwind-merge`,
  },
];

export const dashboardFiles: FileTab[] = [
  {
    name: "dashboard-01.tsx",
    path: "src/components/blocks/dashboard-01.tsx",
    description: "Complete modern dashboard layout with responsive sidebar, KPI cards, and document feed.",
    code: `"use client";

import React from "react";
import { LayoutDashboard, RotateCw, PieChart, FileText, Users } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Dashboard01Props {
  className?: string;
  forceMode?: "desktop" | "tablet" | "mobile";
}

export function Dashboard01({ className, forceMode }: Dashboard01Props) {
  const isMobile = forceMode === "mobile";

  return (
    <div
      className={cn(
        "rounded-xl border bg-background shadow-sm overflow-hidden flex min-h-[480px]",
        isMobile ? "flex-col" : "flex-col md:flex-row",
        className
      )}
    >
      {/* Sidebar */}
      <div
        className={cn(
          "border-r bg-muted/20 p-4 flex flex-col gap-6",
          isMobile ? "w-full border-b border-r-0" : "w-full md:w-64"
        )}
      >
        <div className="flex items-center gap-2 font-semibold">
          <div className="h-6 w-6 rounded-full border border-foreground flex items-center justify-center">
            <div className="h-3 w-3 rounded-full bg-foreground" />
          </div>
          Acme Inc.
        </div>
        <button className="w-full rounded-md bg-foreground text-background py-2 text-sm font-medium flex items-center justify-between px-3 cursor-pointer hover:bg-foreground/90 transition-colors">
          Quick Create <span className="h-4 w-4 bg-background/20 rounded flex items-center justify-center text-[10px]">+</span>
        </button>
        <nav className="flex flex-col gap-1 text-sm font-medium text-muted-foreground">
          <a href="#" className="flex items-center gap-2 text-foreground bg-muted p-2 rounded-md">
            <LayoutDashboard className="h-4 w-4" /> Dashboard
          </a>
          <a href="#" className="flex items-center gap-2 p-2 hover:text-foreground hover:bg-muted/50 rounded-md">
            <RotateCw className="h-4 w-4" /> Lifecycle
          </a>
          <a href="#" className="flex items-center gap-2 p-2 hover:text-foreground hover:bg-muted/50 rounded-md">
            <PieChart className="h-4 w-4" /> Analytics
          </a>
          <a href="#" className="flex items-center gap-2 p-2 hover:text-foreground hover:bg-muted/50 rounded-md">
            <FileText className="h-4 w-4" /> Projects
          </a>
          <a href="#" className="flex items-center gap-2 p-2 hover:text-foreground hover:bg-muted/50 rounded-md">
            <Users className="h-4 w-4" /> Team
          </a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 flex flex-col gap-6 bg-muted/5">
        <div className="flex items-center justify-between border-b pb-4">
          <div className="flex items-center gap-4 text-sm font-medium">
            <span className="flex items-center gap-2">
              <FileText className="h-4 w-4" /> Documents
            </span>
          </div>
          <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">Q1 2026</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-card p-5 shadow-xs flex flex-col gap-3">
            <div className="flex justify-between items-center text-sm">
              <span className="text-muted-foreground">Total Revenue</span>
              <span className="text-emerald-500 font-semibold text-xs">+12.5%</span>
            </div>
            <div className="text-2xl md:text-3xl font-bold">\\$1,250.00</div>
          </div>
          <div className="rounded-xl border bg-card p-5 shadow-xs flex flex-col gap-3">
            <div className="flex justify-between items-center text-sm">
              <span className="text-muted-foreground">New Customers</span>
              <span className="text-rose-500 font-semibold text-xs">-2.4%</span>
            </div>
            <div className="text-2xl md:text-3xl font-bold">1,234</div>
          </div>
          <div className="rounded-xl border bg-card p-5 shadow-xs flex flex-col gap-3">
            <div className="flex justify-between items-center text-sm">
              <span className="text-muted-foreground">Active Accounts</span>
              <span className="text-emerald-500 font-semibold text-xs">+18.2%</span>
            </div>
            <div className="text-2xl md:text-3xl font-bold">45,678</div>
          </div>
          <div className="rounded-xl border bg-card p-5 shadow-xs flex flex-col gap-3">
            <div className="flex justify-between items-center text-sm">
              <span className="text-muted-foreground">Growth Rate</span>
              <span className="text-emerald-500 font-semibold text-xs">+4.5%</span>
            </div>
            <div className="text-2xl md:text-3xl font-bold">4.5%</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard01;`,
  },
  {
    name: "demo.tsx",
    path: "src/app/dashboard-example.tsx",
    description: "Rendering the Dashboard01 component.",
    code: `import { Dashboard01 } from "@/components/blocks/dashboard-01";

export default function Page() {
  return (
    <div className="p-8">
      <Dashboard01 />
    </div>
  );
}`,
  },
  {
    name: "Install",
    path: "Terminal",
    description: "Install dependencies.",
    code: `npm install lucide-react clsx tailwind-merge`,
  },
];

export const sidebarFiles: FileTab[] = [
  {
    name: "sidebar-07.tsx",
    path: "src/components/blocks/sidebar-07.tsx",
    description: "Collapsed icon sidebar with navigation controls and content workspace.",
    code: `"use client";

import React from "react";
import { LayoutDashboard, Users, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Sidebar07Props {
  className?: string;
  forceMode?: "desktop" | "tablet" | "mobile";
}

export function Sidebar07({ className, forceMode }: Sidebar07Props) {
  const isMobile = forceMode === "mobile";

  return (
    <div
      className={cn(
        "rounded-xl border bg-background shadow-sm overflow-hidden flex min-h-[400px]",
        isMobile ? "flex-col" : "flex-row",
        className
      )}
    >
      <div
        className={cn(
          "border-r bg-muted/10 p-4 flex items-center gap-6",
          isMobile
            ? "w-full border-b border-r-0 flex-row justify-between"
            : "w-16 flex-col"
        )}
      >
        <div className="h-8 w-8 rounded-full border border-foreground flex items-center justify-center bg-foreground text-background font-bold text-xs shrink-0">
          A
        </div>
        <nav className={cn("flex gap-4 text-muted-foreground", isMobile ? "flex-row" : "flex-col")}>
          <button className="p-2 rounded-md bg-muted text-foreground cursor-pointer hover:bg-muted/80 transition-colors">
            <LayoutDashboard className="h-5 w-5" />
          </button>
          <button className="p-2 rounded-md hover:bg-muted hover:text-foreground cursor-pointer transition-colors">
            <Users className="h-5 w-5" />
          </button>
          <button className="p-2 rounded-md hover:bg-muted hover:text-foreground cursor-pointer transition-colors">
            <Settings className="h-5 w-5" />
          </button>
        </nav>
      </div>
      <div className="flex-1 p-6 flex flex-col gap-4 bg-muted/5">
        <div className="flex gap-4">
          <div className="h-32 flex-1 rounded-xl border bg-card/60" />
          <div className="h-32 flex-1 rounded-xl border bg-card/60" />
          <div className="h-32 flex-1 rounded-xl border bg-card/60 hidden sm:block" />
        </div>
        <div className="flex-1 rounded-xl border bg-card/60 min-h-[140px]" />
      </div>
    </div>
  );
}

export default Sidebar07;`,
  },
  {
    name: "Install",
    path: "Terminal",
    description: "Dependencies for Sidebar 07.",
    code: `npm install lucide-react clsx tailwind-merge`,
  },
];

export const loginFiles: FileTab[] = [
  {
    name: "login-01.tsx",
    path: "src/components/blocks/login-01.tsx",
    description: "Complete sign-in form with OAuth providers, validation styling, and responsive layout.",
    code: `"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface Login01Props {
  className?: string;
  forceMode?: "desktop" | "tablet" | "mobile";
}

export function Login01({ className }: Login01Props) {
  return (
    <div className={cn("rounded-xl border bg-background shadow-sm overflow-hidden flex items-center justify-center p-6 sm:p-8", className)}>
      <div className="w-full max-w-md space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold tracking-tight">Welcome back</h2>
          <p className="text-muted-foreground text-sm">Sign in to your account to continue</p>
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <button className="inline-flex items-center justify-center gap-2 rounded-md border bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors cursor-pointer">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
              </svg>
              GitHub
            </button>
            <button className="inline-flex items-center justify-center gap-2 rounded-md border bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors cursor-pointer">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="m15 9-6 6"/>
                <path d="m9 9 6 6"/>
              </svg>
              Google
            </button>
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
            </div>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
            <div className="space-y-2">
              <label className="text-sm font-medium leading-none">Email</label>
              <input
                type="email"
                placeholder="m@example.com"
                className="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium leading-none">Password</label>
                <a href="#" className="text-xs text-muted-foreground hover:text-primary underline underline-offset-4">Forgot password?</a>
              </div>
              <input
                type="password"
                placeholder="••••••••"
                className="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full cursor-pointer transition-colors"
            >
              Sign In
            </button>
          </form>
        </div>
        <p className="text-center text-sm text-muted-foreground">
          Don&apos;t have an account?{" "}
          <a href="#" className="underline underline-offset-4 hover:text-primary font-medium">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login01;`,
  },
  {
    name: "Install",
    path: "Terminal",
    description: "Install dependencies.",
    code: `npm install clsx tailwind-merge`,
  },
];

export const signupFiles: FileTab[] = [
  {
    name: "signup-01.tsx",
    path: "src/components/blocks/signup-01.tsx",
    description: "Complete sign-up registration form with first/last name grid, OAuth, and password strength meter.",
    code: `"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface Signup01Props {
  className?: string;
  forceMode?: "desktop" | "tablet" | "mobile";
}

export function Signup01({ className }: Signup01Props) {
  return (
    <div className={cn("rounded-xl border bg-background shadow-sm overflow-hidden flex items-center justify-center p-6 sm:p-8", className)}>
      <div className="w-full max-w-md space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold tracking-tight">Create an account</h2>
          <p className="text-muted-foreground text-sm">Enter your details to get started</p>
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <button className="inline-flex items-center justify-center gap-2 rounded-md border bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors cursor-pointer">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
              </svg>
              GitHub
            </button>
            <button className="inline-flex items-center justify-center gap-2 rounded-md border bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors cursor-pointer">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="m15 9-6 6"/>
                <path d="m9 9 6 6"/>
              </svg>
              Google
            </button>
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
            </div>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <label className="text-sm font-medium leading-none">First name</label>
                <input
                  type="text"
                  placeholder="John"
                  className="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium leading-none">Last name</label>
                <input
                  type="text"
                  placeholder="Doe"
                  className="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium leading-none">Email</label>
              <input
                type="email"
                placeholder="m@example.com"
                className="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium leading-none">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
              <div className="flex gap-1 mt-2">
                <div className="h-1 flex-1 rounded-full bg-emerald-500" />
                <div className="h-1 flex-1 rounded-full bg-emerald-500" />
                <div className="h-1 flex-1 rounded-full bg-emerald-500" />
                <div className="h-1 flex-1 rounded-full bg-muted" />
              </div>
              <p className="text-xs text-muted-foreground">Password strength: Strong</p>
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full cursor-pointer transition-colors"
            >
              Create Account
            </button>
          </form>
        </div>
        <p className="text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <a href="#" className="underline underline-offset-4 hover:text-primary font-medium">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}

export default Signup01;`,
  },
  {
    name: "Install",
    path: "Terminal",
    description: "Install dependencies.",
    code: `npm install clsx tailwind-merge`,
  },
];


export const thinkingOrbFiles: FileTab[] = [
  {
    name: "thinking-orb.tsx",
    path: "src/components/ui/thinking-orb.tsx",
    description: "Canvas-based animated thought-orb indicator for AI and agent UIs.",
    code: `"use client";

import React, { useEffect, useRef } from "react";
import { resolvePreset } from "./thinking-orb/presets";
import { MODE_DRAWS } from "./thinking-orb/engine/registry";
import { useReducedMotion, useResolvedDark } from "./thinking-orb/theme";
import type { ThinkingOrbProps } from "./thinking-orb/types";

export function ThinkingOrb({
  state = "working",
  size = 64,
  theme = "auto",
  speed = 1,
  paused = false,
  style,
  ...rest
}: ThinkingOrbProps) {
  const ref = useRef<HTMLCanvasElement | null>(null);
  const dark = useResolvedDark(theme, ref);
  const reduced = useReducedMotion();

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const dpr = Math.min(2, (typeof devicePixelRatio !== "undefined" && devicePixelRatio) || 1);
    canvas.width = Math.round(size * dpr);
    canvas.height = Math.round(size * dpr);
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const { mode, speed: baseSpeed, opts } = resolvePreset(state, size);
    const draw = MODE_DRAWS[mode];
    const effSpeed = baseSpeed * speed;

    let animId: number;
    let start = performance.now();

    function render(now: number) {
      if (!ctx || !canvas) return;
      const t = ((now - start) / 1000) * effSpeed;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      draw(ctx, t, canvas.width, canvas.height, dark, opts);
      if (!paused && !reduced) {
        animId = requestAnimationFrame(render);
      }
    }

    animId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animId);
  }, [state, size, dark, speed, paused, reduced]);

  return (
    <canvas
      ref={ref}
      style={{ width: size, height: size, ...style }}
      {...rest}
    />
  );
}

export default ThinkingOrb;`,
  },
  {
    name: "demo.tsx",
    path: "src/app/thinking-orb-demo.tsx",
    description: "Usage of ThinkingOrb in an AI Assistant UI.",
    code: `import { ThinkingOrb } from "@/components/ui/thinking-orb";

export default function AgentStatus() {
  return (
    <div className="flex items-center gap-3 p-4 rounded-xl border bg-card">
      <ThinkingOrb state="working" size={48} speed={1} />
      <div>
        <h4 className="text-sm font-semibold">Gemini Agent</h4>
        <p className="text-xs text-muted-foreground">Reasoning over tools & codebase…</p>
      </div>
    </div>
  );
}`,
  },
  {
    name: "Install",
    path: "Terminal",
    description: "ThinkingOrb uses pure HTML5 canvas without external 3D libraries.",
    code: `npx @alvinahmad/ui add thinking-orb

# Dependencies: Pure React & Canvas (0 runtime dependencies!)`,
  },
];

export const metalFxFiles: FileTab[] = [
  {
    name: "metal-fx.tsx",
    path: "src/components/ui/metal-fx.tsx",
    description: "WebGL liquid metallic shader effect for buttons and components.",
    code: `"use client";

import { forwardRef } from "react";
import { MetalFx } from "./metal-fx/MetalFx";
import type { MetalFxProps } from "./metal-fx/types";

export { MetalFx };
export default MetalFx;`,
  },
  {
    name: "demo.tsx",
    path: "src/app/metal-button-demo.tsx",
    description: "Applying liquid gold / silver metallic shaders to call-to-action buttons.",
    code: `import { MetalFx } from "@/components/ui/metal-fx";

export default function MetalButtonDemo() {
  return (
    <div className="flex gap-4">
      <MetalFx preset="gold" strength={1}>
        <button className="h-11 px-6 rounded-xl font-medium text-sm text-white bg-zinc-900 border border-white/20 shadow-lg">
          Upgrade to Pro
        </button>
      </MetalFx>

      <MetalFx preset="silver" strength={0.8}>
        <button className="h-11 px-6 rounded-xl font-medium text-sm text-zinc-100 bg-zinc-900 border border-white/20 shadow-md">
          Enterprise Access
        </button>
      </MetalFx>
    </div>
  );
}`,
  },
  {
    name: "Install",
    path: "Terminal",
    description: "Install MetalFx shader effect.",
    code: `npx @alvinahmad/ui add metal-fx

# Native WebGL shader (Runs on all modern browsers with hardware acceleration)`,
  },
];

export const humanAtlasFiles: FileTab[] = [
  {
    name: "human-atlas-block.tsx",
    path: "src/components/blocks/human-atlas-block.tsx",
    description: "Interactive 3D Human Anatomy Studio template and block.",
    code: `"use client";

import React, { useState } from "react";
import { Layers, Activity, Eye, Compass, Info, ArrowUpRight } from "lucide-react";

export function HumanAtlasBlock() {
  return (
    <div className="rounded-3xl border bg-zinc-950 text-zinc-100 p-8 shadow-2xl">
      <div className="flex items-center gap-2 mb-4">
        <Activity className="w-5 h-5 text-emerald-400" />
        <h3 className="text-xl font-bold">3D Human Anatomy Atlas</h3>
      </div>
      <p className="text-sm text-zinc-400">
        WebGL 3D Studio featuring multi-layer anatomical dissection (skeletal, muscular, vascular, organs).
      </p>
    </div>
  );
}`,
  },
  {
    name: "Install & Setup",
    path: "Terminal",
    description: "Dependencies for 3D Three.js rendering.",
    code: `npm install three @types/three lucide-react

# Template features:
# - GLTF / GLB binary mesh parsing
# - Raycasting organ coordinate selection
# - Anatomical layer toggle & exploded view mode`,
  },
];
