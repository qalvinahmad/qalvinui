"use client";

import React, { useState, useMemo } from "react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

export interface Signup01Props {
  className?: string;
  forceMode?: "desktop" | "tablet" | "mobile";
}

function calculatePasswordStrength(password: string): { score: number; label: string; color: string } {
  if (!password) return { score: 0, label: "Enter password", color: "bg-muted" };
  let points = 0;
  if (password.length >= 8) points++;
  if (/[0-9]/.test(password)) points++;
  if (/[A-Z]/.test(password)) points++;
  if (/[^A-Za-z0-9]/.test(password)) points++;

  switch (points) {
    case 1:
      return { score: 1, label: "Weak", color: "bg-rose-500" };
    case 2:
      return { score: 2, label: "Fair", color: "bg-amber-500" };
    case 3:
      return { score: 3, label: "Good", color: "bg-blue-500" };
    case 4:
      return { score: 4, label: "Strong", color: "bg-emerald-500" };
    default:
      return { score: 1, label: "Too short", color: "bg-rose-500" };
  }
}

export function Signup01({ className }: Signup01Props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ firstName?: string; email?: string; password?: string }>({});
  const [isLoading, setIsLoading] = useState(false);
  const [oauthLoading, setOauthLoading] = useState<"github" | "google" | null>(null);

  const strength = useMemo(() => calculatePasswordStrength(password), [password]);

  const validate = () => {
    const nextErrors: { firstName?: string; email?: string; password?: string } = {};
    if (!firstName.trim()) nextErrors.firstName = "First name is required";
    if (!email.trim()) {
      nextErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "Please enter a valid email address";
    }
    if (!password) {
      nextErrors.password = "Password is required";
    } else if (password.length < 8) {
      nextErrors.password = "Password must be at least 8 characters";
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      toast.error("Please fill in all required fields");
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast.success(`Account created for ${firstName} (${email})!`);
    }, 1200);
  };

  const handleOAuth = (provider: "github" | "google") => {
    setOauthLoading(provider);
    setTimeout(() => {
      setOauthLoading(null);
      toast.success(`Connected with ${provider === "github" ? "GitHub" : "Google"} OAuth!`);
    }, 1000);
  };

  return (
    <div className={cn("rounded-xl border bg-background shadow-sm overflow-hidden flex items-center justify-center p-6 sm:p-8", className)}>
      <div className="w-full max-w-md space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold tracking-tight">Create an account</h2>
          <p className="text-muted-foreground text-sm">Enter your details to get started</p>
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              disabled={oauthLoading !== null || isLoading}
              onClick={() => handleOAuth("github")}
              className="inline-flex items-center justify-center gap-2 rounded-md border bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors cursor-pointer disabled:opacity-50"
            >
              {oauthLoading === "github" ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                </svg>
              )}
              GitHub
            </button>
            <button
              type="button"
              disabled={oauthLoading !== null || isLoading}
              onClick={() => handleOAuth("google")}
              className="inline-flex items-center justify-center gap-2 rounded-md border bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors cursor-pointer disabled:opacity-50"
            >
              {oauthLoading === "google" ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="m15 9-6 6"/>
                  <path d="m9 9 6 6"/>
                </svg>
              )}
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
          <form onSubmit={handleSubmit} className="space-y-3" noValidate>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <label className="text-sm font-medium leading-none">First name</label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                    if (errors.firstName) setErrors((prev) => ({ ...prev, firstName: undefined }));
                  }}
                  placeholder="John"
                  className={cn(
                    "flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-colors",
                    errors.firstName && "border-destructive focus-visible:ring-destructive"
                  )}
                />
                {errors.firstName && <p className="text-xs text-destructive font-medium">{errors.firstName}</p>}
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium leading-none">Last name</label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Doe"
                  className="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-medium leading-none">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                }}
                placeholder="m@example.com"
                className={cn(
                  "flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-colors",
                  errors.email && "border-destructive focus-visible:ring-destructive"
                )}
              />
              {errors.email && <p className="text-xs text-destructive font-medium">{errors.email}</p>}
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-medium leading-none">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (errors.password) setErrors((prev) => ({ ...prev, password: undefined }));
                }}
                placeholder="••••••••"
                className={cn(
                  "flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-colors",
                  errors.password && "border-destructive focus-visible:ring-destructive"
                )}
              />
              {errors.password && <p className="text-xs text-destructive font-medium">{errors.password}</p>}
              
              {/* Dynamic strength bars */}
              <div className="flex gap-1.5 mt-2">
                {[1, 2, 3, 4].map((step) => (
                  <div
                    key={step}
                    className={cn(
                      "h-1.5 flex-1 rounded-full transition-all duration-300",
                      strength.score >= step ? strength.color : "bg-muted"
                    )}
                  />
                ))}
              </div>
              <p className="text-xs text-muted-foreground">
                Password strength:{" "}
                <span className="font-medium text-foreground">{strength.label}</span>
              </p>
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full cursor-pointer transition-colors disabled:opacity-50"
            >
              {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
              {isLoading ? "Creating Account..." : "Create Account"}
            </button>
          </form>
        </div>
        <p className="text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <button
            type="button"
            onClick={() => toast.info("Navigate to sign in page.")}
            className="underline underline-offset-4 hover:text-primary font-medium cursor-pointer"
          >
            Sign in
          </button>
        </p>
      </div>
    </div>
  );
}

export default Signup01;
