export default function Page() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Typeset</h1>
        <p className="text-lg text-muted-foreground">
          Typography utilities for creating beautiful, readable text layouts.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Font Sizes</h2>
        <p className="text-muted-foreground">
          Qalvin UI provides a comprehensive set of font sizes using Tailwind CSS classes:
        </p>
        <div className="rounded-lg border p-4 space-y-4">
          <div className="flex items-center gap-4">
            <span className="text-xs text-muted-foreground w-20">text-xs</span>
            <span className="text-xs">The quick brown fox</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs text-muted-foreground w-20">text-sm</span>
            <span className="text-sm">The quick brown fox</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs text-muted-foreground w-20">text-base</span>
            <span className="text-base">The quick brown fox</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs text-muted-foreground w-20">text-lg</span>
            <span className="text-lg">The quick brown fox</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs text-muted-foreground w-20">text-xl</span>
            <span className="text-xl">The quick brown fox</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs text-muted-foreground w-20">text-2xl</span>
            <span className="text-2xl">The quick brown fox</span>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Font Weights</h2>
        <p className="text-muted-foreground">
          Control the weight of your text with these utility classes:
        </p>
        <div className="rounded-lg border p-4 space-y-4">
          <div className="flex items-center gap-4">
            <span className="text-xs text-muted-foreground w-24">font-normal</span>
            <span className="font-normal">The quick brown fox</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs text-muted-foreground w-24">font-medium</span>
            <span className="font-medium">The quick brown fox</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs text-muted-foreground w-24">font-semibold</span>
            <span className="font-semibold">The quick brown fox</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs text-muted-foreground w-24">font-bold</span>
            <span className="font-bold">The quick brown fox</span>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Line Heights</h2>
        <p className="text-muted-foreground">
          Adjust line height for better readability:
        </p>
        <div className="rounded-lg border p-4 space-y-4">
          <div className="flex items-center gap-4">
            <span className="text-xs text-muted-foreground w-20">leading-none</span>
            <span className="leading-none">The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs text-muted-foreground w-20">leading-normal</span>
            <span className="leading-normal">The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs text-muted-foreground w-20">leading-relaxed</span>
            <span className="leading-relaxed">The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.</span>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Text Alignment</h2>
        <p className="text-muted-foreground">
          Align text horizontally with these utilities:
        </p>
        <div className="rounded-lg border p-4 space-y-4">
          <div className="text-left border p-2 rounded">
            <span className="text-xs text-muted-foreground">text-left</span>
            <p>The quick brown fox jumps over the lazy dog.</p>
          </div>
          <div className="text-center border p-2 rounded">
            <span className="text-xs text-muted-foreground">text-center</span>
            <p>The quick brown fox jumps over the lazy dog.</p>
          </div>
          <div className="text-right border p-2 rounded">
            <span className="text-xs text-muted-foreground">text-right</span>
            <p>The quick brown fox jumps over the lazy dog.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
