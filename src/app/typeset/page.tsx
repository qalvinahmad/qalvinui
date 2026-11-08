import { Suspense } from "react";
import { StudioClient } from "@/app/create/studio-client";

export const metadata = {
  title: "Typeset & Typography — Qalvin UI",
  description:
    "Interactive typography studio for pairing font scales, measure, line-height, and paragraph flow.",
};

export default function TypesetPage() {
  return (
    <Suspense
      fallback={
        <div className="container mx-auto px-4 py-16 text-center text-sm text-muted-foreground">
          Loading Typography Studio...
        </div>
      }
    >
      <StudioClient initialTab="typeset" />
    </Suspense>
  );
}
