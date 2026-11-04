"use client";

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
                      <span className="font-semibold text-zinc-900 dark:text-zinc-100">${product.price}</span>
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
                          ${(item.price * item.quantity).toFixed(2)}
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

function InteractiveCheckoutDemo() {
  return <InteractiveCheckout products={defaultProducts} />;
}

export { InteractiveCheckout, InteractiveCheckoutDemo };
export default InteractiveCheckout;
