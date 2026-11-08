import { Suspense } from "react";
import { StudioClient } from "./studio-client";

export const metadata = {
  title: "Studio — Qalvin UI",
  description:
    "Integrated Studio for Theme customizer, Optical Typography Typeset, and Production-Ready Templates.",
};

export default function CreatePage() {
  return (
    <Suspense
      fallback={
        <div className="container mx-auto px-4 py-16 text-center text-sm text-muted-foreground">
          Loading Qalvin UI Studio...
        </div>
      }
    >
      <StudioClient initialTab="components" />
    </Suspense>
  );
}
