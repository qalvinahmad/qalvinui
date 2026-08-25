"use client";

import * as React from "react";
import { useState } from "react";
import {
  CreditCard,
  ShieldCheck,
  Truck,
  CheckCircle2,
  Lock,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  ShoppingBag,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function InteractiveCheckout() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [cardNumber, setCardNumber] = useState("4242 •••• •••• 4242");
  const [cardHolder, setCardHolder] = useState("ALVIN AHMAD");
  const [expiry, setExpiry] = useState("08/29");
  const [cvv, setCvv] = useState("•••");
  const [coupon, setCoupon] = useState("");
  const [discountApplied, setDiscountApplied] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const basePrice = 129.0;
  const shipping = 0.0;
  const discount = discountApplied ? 25.0 : 0.0;
  const totalPrice = (basePrice - discount + shipping).toFixed(2);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (coupon.trim().toLowerCase() === "qalvin25" || coupon.trim().toLowerCase() === "discount") {
      setDiscountApplied(true);
    } else {
      setDiscountApplied(true);
    }
  };

  const handleCompleteOrder = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setStep(3);
    }, 1200);
  };

  return (
    <div className="w-full max-w-4xl mx-auto rounded-2xl border border-border/80 bg-card p-6 md:p-8 shadow-xl">
      {/* Stepper Header */}
      <div className="flex items-center justify-between border-b pb-6 mb-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground font-bold shadow-md">
            <ShoppingBag className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold tracking-tight">Express Checkout</h2>
            <p className="text-xs text-muted-foreground">Secure 256-bit encrypted checkout</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div
            className={cn(
              "flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold transition-all",
              step >= 1 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
            )}
          >
            1
          </div>
          <div className={cn("h-0.5 w-6", step >= 2 ? "bg-primary" : "bg-muted")} />
          <div
            className={cn(
              "flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold transition-all",
              step >= 2 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
            )}
          >
            2
          </div>
          <div className={cn("h-0.5 w-6", step >= 3 ? "bg-primary" : "bg-muted")} />
          <div
            className={cn(
              "flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold transition-all",
              step === 3 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
            )}
          >
            3
          </div>
        </div>
      </div>

      {step === 1 && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Form Side */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4">
              <h3 className="text-sm font-semibold flex items-center gap-2 text-foreground">
                <Truck className="h-4 w-4 text-primary" /> Shipping Details
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <Label htmlFor="firstName" className="text-xs">First Name</Label>
                  <Input id="firstName" defaultValue="Alvin" placeholder="First Name" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="lastName" className="text-xs">Last Name</Label>
                  <Input id="lastName" defaultValue="Ahmad" placeholder="Last Name" />
                </div>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="email" className="text-xs">Email Address</Label>
                <Input id="email" type="email" defaultValue="alvin@qalvinui.com" placeholder="you@domain.com" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="address" className="text-xs">Shipping Address</Label>
                <Input id="address" defaultValue="742 Evergreen Terrace, Suite 101" placeholder="Street address" />
              </div>
            </div>

            <div className="pt-2">
              <Button onClick={() => setStep(2)} className="w-full flex items-center justify-center gap-2">
                Continue to Payment <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Order Summary Side */}
          <div className="lg:col-span-5 space-y-6 bg-muted/20 p-5 rounded-xl border">
            <h3 className="text-sm font-semibold text-foreground">Order Summary</h3>
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                UI
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-xs text-foreground truncate">Qalvin UI Pro License</div>
                <div className="text-[11px] text-muted-foreground">Lifetime Access & Updates</div>
              </div>
              <div className="text-xs font-bold">${basePrice.toFixed(2)}</div>
            </div>

            <form onSubmit={handleApplyCoupon} className="flex gap-2 pt-2">
              <Input
                placeholder="Coupon code (try: QALVIN25)"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                className="h-8 text-xs"
              />
              <Button type="submit" size="sm" variant="secondary" className="h-8 text-xs">
                Apply
              </Button>
            </form>

            <div className="space-y-2 border-t pt-4 text-xs">
              <div className="flex justify-between text-muted-foreground">
                <span>Subtotal</span>
                <span>${basePrice.toFixed(2)}</span>
              </div>
              {discountApplied && (
                <div className="flex justify-between text-emerald-500 font-semibold">
                  <span>Discount (Promo)</span>
                  <span>-${discount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between text-muted-foreground">
                <span>Shipping</span>
                <span className="text-emerald-500 font-medium">Free</span>
              </div>
              <div className="flex justify-between font-bold text-sm text-foreground pt-2 border-t">
                <span>Total Amount</span>
                <span>${totalPrice}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Card Form */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4">
              <h3 className="text-sm font-semibold flex items-center gap-2 text-foreground">
                <CreditCard className="h-4 w-4 text-primary" /> Payment Method
              </h3>
              <div className="space-y-1.5">
                <Label htmlFor="cardHolder" className="text-xs">Cardholder Name</Label>
                <Input
                  id="cardHolder"
                  value={cardHolder}
                  onChange={(e) => setCardHolder(e.target.value.toUpperCase() || "CARDHOLDER NAME")}
                  placeholder="NAME ON CARD"
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="cardNumber" className="text-xs">Card Number</Label>
                <Input
                  id="cardNumber"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value || "•••• •••• •••• ••••")}
                  placeholder="1234 5678 9012 3456"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <Label htmlFor="expiry" className="text-xs">Expiry Date</Label>
                  <Input
                    id="expiry"
                    value={expiry}
                    onChange={(e) => setExpiry(e.target.value || "MM/YY")}
                    placeholder="MM/YY"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="cvv" className="text-xs">CVV / CVC</Label>
                  <Input
                    id="cvv"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value || "•••")}
                    placeholder="123"
                  />
                </div>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <Button variant="outline" onClick={() => setStep(1)} className="flex items-center gap-1">
                <ArrowLeft className="h-4 w-4" /> Back
              </Button>
              <Button
                onClick={handleCompleteOrder}
                disabled={isProcessing}
                className="flex-1 flex items-center justify-center gap-2"
              >
                {isProcessing ? (
                  "Processing Secure Payment..."
                ) : (
                  <>
                    <Lock className="h-4 w-4" /> Pay ${totalPrice}
                  </>
                )}
              </Button>
            </div>
          </div>

          {/* Interactive Live Credit Card Visualizer */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative h-48 w-full rounded-2xl bg-gradient-to-br from-slate-900 via-neutral-900 to-indigo-950 p-6 text-white shadow-2xl border border-white/10 flex flex-col justify-between overflow-hidden">
              <div className="absolute -right-8 -bottom-8 h-32 w-32 rounded-full bg-primary/20 blur-2xl" />
              <div className="flex justify-between items-center">
                <div className="h-8 w-11 rounded-md bg-amber-400/80 border border-amber-300 shadow-inner" />
                <Badge variant="outline" className="border-white/30 text-white/90 text-[10px] font-mono">
                  VISA
                </Badge>
              </div>

              <div className="font-mono text-base tracking-widest text-white/95 truncate">
                {cardNumber}
              </div>

              <div className="flex justify-between items-end text-xs">
                <div>
                  <div className="text-[9px] uppercase tracking-wider text-white/60">Card Holder</div>
                  <div className="font-semibold tracking-wide text-white/90 truncate max-w-[150px]">
                    {cardHolder}
                  </div>
                </div>
                <div>
                  <div className="text-[9px] uppercase tracking-wider text-white/60">Expires</div>
                  <div className="font-semibold font-mono text-white/90">{expiry}</div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <ShieldCheck className="h-4 w-4 text-emerald-500" />
              <span>Bank-level encryption with SSL verification</span>
            </div>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="flex flex-col items-center justify-center py-10 text-center space-y-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
            <CheckCircle2 className="h-10 w-10" />
          </div>
          <div className="space-y-1">
            <h3 className="text-2xl font-bold text-foreground">Payment Successful!</h3>
            <p className="text-xs text-muted-foreground max-w-sm">
              Your order #QALVIN-2026 has been confirmed. A receipt and license keys have been dispatched to your email.
            </p>
          </div>
          <div className="pt-4">
            <Button onClick={() => setStep(1)} variant="outline">
              Make Another Order
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
