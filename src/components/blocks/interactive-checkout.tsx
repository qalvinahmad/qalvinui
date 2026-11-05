"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Minus, Plus, ShoppingCart, X, CreditCard, CheckCircle2, Loader2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import NumberFlow from "@number-flow/react";
import { toast } from "sonner";

export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  color: string;
  badge?: string;
  svgColor?: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface InteractiveCheckoutProps {
  products?: Product[];
  className?: string;
  forceMode?: "desktop" | "tablet" | "mobile";
}

// Inline SVG sneaker illustration for instant zero-dependency rendering
function SneakerIllustration({ color = "#3b82f6" }: { color?: string }) {
  return (
    <div className="w-full h-full flex items-center justify-center bg-muted/40 rounded-lg p-2">
      <svg viewBox="0 0 100 60" className="w-full h-full max-h-16 drop-shadow-sm">
        <path
          d="M10,40 Q25,38 45,35 Q60,25 75,20 Q85,15 90,25 Q95,38 85,45 Q75,48 50,48 L15,48 Q10,48 10,40 Z"
          fill={color}
          opacity="0.85"
        />
        <path
          d="M12,48 L88,48 Q92,52 88,54 L12,54 Q8,52 12,48 Z"
          fill="#18181b"
        />
        <path
          d="M35,35 L45,20 L55,25 L48,37 Z"
          fill="#ffffff"
          opacity="0.9"
        />
        <circle cx="28" cy="44" r="2" fill="#ffffff" />
        <circle cx="38" cy="43" r="2" fill="#ffffff" />
        <circle cx="48" cy="42" r="2" fill="#ffffff" />
      </svg>
    </div>
  );
}

export const defaultProducts: Product[] = [
  {
    id: "1",
    name: "Air Max 90",
    price: 129.99,
    category: "Running",
    color: "Electric Blue",
    svgColor: "#2563eb",
  },
  {
    id: "2",
    name: "Ultra Boost",
    price: 179.99,
    category: "Performance",
    color: "Emerald Mint",
    svgColor: "#059669",
  },
  {
    id: "3",
    name: "Classic Trainer",
    price: 89.99,
    category: "Casual",
    color: "Sunset Orange",
    svgColor: "#ea580c",
  },
];

function InteractiveCheckout({
  products = defaultProducts,
  className,
}: InteractiveCheckoutProps) {
  const [items, setItems] = useState<CartItem[]>([
    { ...products[0], quantity: 1 },
    { ...products[1], quantity: 1 },
  ]);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState<"review" | "processing" | "success">("review");
  const [orderId, setOrderId] = useState("");

  const updateQuantity = (id: string, delta: number) => {
    setItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null)
    );
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const addItem = (product: Product) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    toast.success(`Added ${product.name} to cart`);
  };

  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const startCheckout = () => {
    if (items.length === 0) {
      toast.error("Your cart is empty");
      return;
    }
    setCheckoutStep("review");
    setIsCheckoutOpen(true);
  };

  const processPayment = () => {
    setCheckoutStep("processing");
    setTimeout(() => {
      setOrderId(`ORD-${Math.floor(100000 + Math.random() * 900000)}`);
      setCheckoutStep("success");
      setItems([]);
      toast.success("Order confirmed!");
    }, 1800);
  };

  return (
    <div className={cn("w-full max-w-4xl mx-auto p-4 sm:p-6", className)}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Products catalog list */}
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-lg tracking-tight">Available Gear</h3>
            <span className="text-xs text-muted-foreground">{products.length} products</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {products.map((prod) => (
              <div
                key={prod.id}
                className="border rounded-xl p-3 bg-card flex flex-col justify-between gap-3 shadow-2xs hover:border-foreground/40 transition-colors"
              >
                <div className="h-28 w-full rounded-lg overflow-hidden">
                  <SneakerIllustration color={prod.svgColor} />
                </div>
                <div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-sm">{prod.name}</h4>
                      <p className="text-xs text-muted-foreground">{prod.category} • {prod.color}</p>
                    </div>
                    <span className="font-mono text-sm font-semibold">${prod.price}</span>
                  </div>
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => addItem(prod)}
                  className="w-full gap-1.5 cursor-pointer"
                >
                  <Plus className="h-3.5 w-3.5" /> Add to Cart
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic Cart Summary */}
        <div className="border rounded-2xl p-5 bg-card flex flex-col justify-between shadow-xs h-fit space-y-4">
          <div className="flex items-center justify-between border-b pb-3">
            <div className="flex items-center gap-2">
              <ShoppingCart className="h-4 w-4 text-muted-foreground" />
              <h3 className="font-semibold text-sm">Order Summary</h3>
            </div>
            <span className="text-xs font-mono bg-muted px-2 py-0.5 rounded-full font-semibold">
              {items.reduce((acc, i) => acc + i.quantity, 0)} items
            </span>
          </div>

          <div className="space-y-3 min-h-[140px] max-h-64 overflow-y-auto pr-1">
            <AnimatePresence>
              {items.length === 0 ? (
                <p className="text-xs text-muted-foreground text-center py-8">
                  Your bag is empty. Add a product to get started.
                </p>
              ) : (
                items.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex items-center justify-between gap-3 border-b border-border/50 pb-2 text-xs"
                  >
                    <div className="flex-1 min-w-0">
                      <p className="font-medium truncate">{item.name}</p>
                      <p className="text-muted-foreground">${item.price}</p>
                    </div>
                    <div className="flex items-center gap-1.5 bg-muted/60 rounded-md p-0.5">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="h-5 w-5 flex items-center justify-center hover:bg-background rounded cursor-pointer"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="font-mono font-semibold px-1">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="h-5 w-5 flex items-center justify-center hover:bg-background rounded cursor-pointer"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-muted-foreground hover:text-destructive cursor-pointer p-1"
                    >
                      <X className="h-3.5 w-3.5" />
                    </button>
                  </motion.div>
                ))
              )}
            </AnimatePresence>
          </div>

          <div className="border-t pt-3 space-y-2">
            <div className="flex justify-between items-center text-sm">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="font-mono font-semibold">${totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-muted-foreground">Estimated Shipping</span>
              <span className="font-mono text-xs text-emerald-600 dark:text-emerald-400 font-semibold">FREE</span>
            </div>
            <div className="flex justify-between items-center text-base font-bold border-t pt-2">
              <span>Total</span>
              <span className="font-mono">${totalPrice.toFixed(2)}</span>
            </div>

            <Button
              onClick={startCheckout}
              disabled={items.length === 0}
              className="w-full gap-2 mt-2 cursor-pointer"
            >
              <CreditCard className="h-4 w-4" />
              Checkout Now
            </Button>
          </div>
        </div>
      </div>

      {/* Interactive Checkout Modal Flow */}
      {isCheckoutOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-full max-w-md rounded-2xl border bg-background p-6 shadow-xl space-y-6"
          >
            {checkoutStep === "review" && (
              <>
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-lg">Secure Checkout</h3>
                  <button
                    onClick={() => setIsCheckoutOpen(false)}
                    className="rounded-full p-1 text-muted-foreground hover:bg-muted cursor-pointer"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-semibold text-muted-foreground uppercase">Payment Method</label>
                  <div className="grid grid-cols-2 gap-3">
                    <button className="border-2 border-primary bg-primary/5 rounded-xl p-3 text-left font-medium text-xs flex flex-col gap-1 cursor-pointer">
                      <CreditCard className="h-4 w-4 text-primary" />
                      <span>Credit Card</span>
                      <span className="text-[10px] text-muted-foreground">•••• 4242</span>
                    </button>
                    <button className="border rounded-xl p-3 text-left font-medium text-xs flex flex-col gap-1 hover:bg-muted cursor-pointer">
                      <span className="font-bold text-sm"> Pay</span>
                      <span>Apple Pay</span>
                      <span className="text-[10px] text-muted-foreground">One-click</span>
                    </button>
                  </div>
                </div>

                <div className="p-3 bg-muted/40 rounded-xl space-y-1.5 text-xs">
                  <div className="flex justify-between font-semibold">
                    <span>Amount due</span>
                    <span className="font-mono text-sm">${totalPrice.toFixed(2)}</span>
                  </div>
                  <p className="text-[11px] text-muted-foreground">Includes complimentary express shipping and 30-day money back guarantee.</p>
                </div>

                <Button onClick={processPayment} className="w-full cursor-pointer gap-2">
                  Authorize & Pay <ArrowRight className="h-4 w-4" />
                </Button>
              </>
            )}

            {checkoutStep === "processing" && (
              <div className="py-12 flex flex-col items-center justify-center space-y-4 text-center">
                <Loader2 className="h-10 w-10 animate-spin text-primary" />
                <div>
                  <h4 className="font-semibold text-base">Processing Payment</h4>
                  <p className="text-xs text-muted-foreground mt-1">Contacting payment provider...</p>
                </div>
              </div>
            )}

            {checkoutStep === "success" && (
              <div className="py-6 flex flex-col items-center justify-center space-y-4 text-center">
                <div className="h-14 w-14 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <div>
                  <h4 className="font-bold text-xl">Payment Successful!</h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    Receipt sent to your email. Order reference:
                  </p>
                  <p className="font-mono font-bold text-sm mt-1 text-primary">{orderId}</p>
                </div>
                <Button
                  onClick={() => {
                    setIsCheckoutOpen(false);
                    setItems([
                      { ...products[0], quantity: 1 },
                      { ...products[1], quantity: 1 },
                    ]);
                  }}
                  className="w-full mt-4 cursor-pointer"
                >
                  Continue Shopping
                </Button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </div>
  );
}

function InteractiveCheckoutDemo() {
  return <InteractiveCheckout products={defaultProducts} />;
}

export { InteractiveCheckout, InteractiveCheckoutDemo };
export default InteractiveCheckout;
