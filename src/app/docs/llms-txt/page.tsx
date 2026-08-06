"use client";

export default function llmstxtPage() {
  return (
    <div className="mx-auto w-full min-w-0 max-w-3xl space-y-10">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">llms.txt</h1>
        <p className="text-lg text-muted-foreground">
          Providing context to LLMs.
        </p>
      </div>

      <div className="space-y-4">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Content for <strong>llms.txt</strong> will be available here. This page is currently under construction.
          </p>
        </div>
      </div>
    </div>
  );
}
