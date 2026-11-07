"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/custom-tabs";
import { useState } from "react";
import { Check, Copy, RotateCcw } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Checkbox as AriaCheckbox } from "react-aria-components";
import * as RadixCheckbox from "@radix-ui/react-checkbox";
import { cn } from "@/lib/utils";

function CodeBlock({ code, language = "tsx" }: { code: string; language?: string }) {
  const [copied, setCopied] = useState(false);

  const onCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative rounded-lg border bg-muted/50 p-4 font-mono text-sm">
      <div className="absolute right-4 top-4">
        <button
          type="button"
          onClick={onCopy}
          aria-label={copied ? "Code copied to clipboard" : "Copy code"}
          className="flex h-8 w-8 items-center justify-center rounded-md border border-border bg-background text-muted-foreground transition-[color,background-color,transform] duration-150 hover:bg-muted hover:text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 active:scale-[0.96] motion-reduce:active:scale-100 cursor-pointer"
        >
          {copied ? <Check className="h-4 w-4 text-emerald-500" /> : <Copy className="h-4 w-4" />}
        </button>
      </div>
      <pre className="overflow-x-auto">
        <code className="text-foreground/80">{code}</code>
      </pre>
    </div>
  );
}

function CheckboxDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" defaultChecked />
      <Label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </Label>
    </div>
  );
}

/* --- Provider demos: one real implementation per library ------------------- */

function ReactAriaCheckboxDemo() {
  const [selected, setSelected] = useState(true);
  return (
    <AriaCheckbox
      isSelected={selected}
      onChange={setSelected}
      className={cn(
        "group flex cursor-pointer items-center gap-2.5 text-sm font-medium outline-none",
        "data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50"
      )}
    >
      <span
        className={cn(
          "relative flex size-5 shrink-0 items-center justify-center rounded-md border border-input bg-white transition-colors dark:bg-input/30",
          "group-data-[selected]:border-primary group-data-[selected]:bg-primary",
          "group-data-[focus-visible]:border-ring group-data-[focus-visible]:ring-3 group-data-[focus-visible]:ring-ring/50",
          "group-data-[hovered]:border-ring/60",
          "after:absolute after:-inset-x-2 after:-inset-y-2 after:content-['']"
        )}
      >
        <Check aria-hidden="true" className="hidden size-3.5 text-primary-foreground [stroke-width:3] group-data-[selected]:block" />
      </span>
      <span className="leading-none">Accept terms and conditions</span>
    </AriaCheckbox>
  );
}

function RadixCheckboxDemo() {
  const [checked, setChecked] = useState(true);
  return (
    <div className="flex items-center space-x-2">
      <RadixCheckbox.Root
        id="radix-terms"
        checked={checked}
        onCheckedChange={(v) => setChecked(Boolean(v))}
        className={cn(
          "peer relative flex size-5 shrink-0 items-center justify-center rounded-md border border-input bg-white outline-none transition-colors dark:bg-input/30",
          "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "after:absolute after:-inset-x-3 after:-inset-y-2",
          "data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
        )}
      >
        <RadixCheckbox.Indicator className="grid place-content-center">
          <Check aria-hidden="true" className="size-3.5 [stroke-width:3]" />
        </RadixCheckbox.Indicator>
      </RadixCheckbox.Root>
      <Label
        htmlFor="radix-terms"
        className="text-sm font-medium leading-none"
      >
        Accept terms and conditions
      </Label>
    </div>
  );
}

/* ---------------------------------------------------------------------------
 * ProgressCheckbox — shape variants (circle / box / squircle) with an optional
 * blue progress fill. Animates transform & opacity only, uses a strong
 * ease-out curve, and releases ~2x faster than it enters so unchecking
 * feels responsive. Safe under prefers-reduced-motion.
 * ------------------------------------------------------------------------- */

type CheckboxShape = "circle" | "box" | "squircle";

const RADIUS: Record<CheckboxShape, string> = {
  circle: "rounded-full",
  box: "rounded-md",
  squircle: "rounded-[38%]",
};

const SHAPE_LABEL: Record<CheckboxShape, string> = {
  circle: "Circle",
  box: "Box",
  squircle: "Squircle",
};

const EASE_OUT = "cubic-bezier(0.23, 1, 0.32, 1)";

interface ProgressCheckboxProps {
  checked: boolean;
  onCheckedChange?: (checked: boolean) => void;
  shape?: CheckboxShape;
  duration?: number;
  fill?: boolean;
  disabled?: boolean;
  id?: string;
  className?: string;
}

function ProgressCheckbox({
  checked,
  onCheckedChange,
  shape = "squircle",
  duration = 220,
  fill = true,
  disabled,
  id,
  className,
}: ProgressCheckboxProps) {
  // Release quicker than it settles: exit runs ~0.55x of the enter duration.
  const enter = Math.max(0, duration);
  const exit = Math.round(enter * 0.55);
  const current = checked ? enter : exit;
  const opacityDuration = Math.max(60, Math.round(current * 0.6));

  return (
    <button
      type="button"
      role="checkbox"
      id={id}
      aria-checked={checked}
      disabled={disabled}
      onClick={() => onCheckedChange?.(!checked)}
      className={cn(
        "peer relative flex size-5 shrink-0 cursor-pointer select-none items-center justify-center border outline-none",
        "transition-[background-color,border-color,border-radius,transform] motion-reduce:transition-none",
        "active:scale-[0.96] motion-reduce:active:scale-100",
        "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
        // Invisible padding so the small hit target is comfortable to press.
        "after:absolute after:-inset-2 after:content-['']",
        "disabled:cursor-not-allowed disabled:opacity-50",
        RADIUS[shape],
        checked
          ? fill
            ? "border-blue-500 bg-white dark:bg-zinc-950"
            : "border-blue-500 bg-blue-500"
          : "border-zinc-300 bg-white hover:border-zinc-400 dark:border-zinc-700 dark:bg-zinc-900 dark:hover:border-zinc-600",
        className
      )}
      style={{
        transitionDuration: `${current}ms, ${current}ms, 200ms, 150ms`,
        transitionTimingFunction: EASE_OUT,
      }}
    >
      {fill && (
        <span
          aria-hidden="true"
          className={cn(
            "absolute inset-0 origin-left rounded-[inherit] bg-blue-500",
            "transition-transform motion-reduce:transition-none"
          )}
          style={{
            transform: checked ? "scaleX(1)" : "scaleX(0)",
            transitionDuration: `${current}ms`,
            transitionTimingFunction: EASE_OUT,
          }}
        />
      )}
      <Check
        aria-hidden="true"
        className={cn(
          "relative z-10 size-3.5 text-white [stroke-width:3]",
          "transition-[transform,opacity] motion-reduce:transition-none"
        )}
        style={{
          // Never from zero — the icon keeps a visible silhouette mid-flight.
          transform: checked ? "scale(1)" : "scale(0.45)",
          opacity: checked ? 1 : 0,
          transitionDuration: `${current}ms, ${opacityDuration}ms`,
          transitionTimingFunction: EASE_OUT,
        }}
      />
    </button>
  );
}

/* --- Static variant cards ------------------------------------------------- */

function VariantCard({
  shape,
  label,
  description,
  fill = false,
}: {
  shape: CheckboxShape;
  label: string;
  description: string;
  fill?: boolean;
}) {
  const [checked, setChecked] = useState(true);
  const id = `variant-${shape}${fill ? "-fill" : ""}`;

  return (
    <label
      htmlFor={id}
      className="group flex cursor-pointer items-center gap-3 rounded-xl border bg-background p-4 sm:p-5 transition-colors hover:bg-muted/50"
    >
      <ProgressCheckbox
        id={id}
        checked={checked}
        onCheckedChange={setChecked}
        shape={shape}
        duration={220}
        fill={fill}
      />
      <div className="min-w-0">
        <p className="text-sm font-medium leading-none">{label}</p>
        <p className="mt-1 truncate text-xs text-muted-foreground">{description}</p>
      </div>
    </label>
  );
}

/* --- Playground ------------------------------------------------------------ */

function Playground() {
  const [shape, setShape] = useState<CheckboxShape>("squircle");
  const [duration, setDuration] = useState(220);
  const [fill, setFill] = useState(true);
  const [checked, setChecked] = useState(true);
  const [codeTab, setCodeTab] = useState<"component" | "usage">("usage");

  const replay = () => {
    setChecked(false);
    window.setTimeout(() => setChecked(true), Math.max(120, duration * 0.8));
  };

  const componentCode = `"use client"

import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

type CheckboxShape = "circle" | "box" | "squircle"

const RADIUS: Record<CheckboxShape, string> = {
  circle: "rounded-full",
  box: "rounded-md",
  squircle: "rounded-[38%]",
}

const EASE_OUT = "cubic-bezier(0.23, 1, 0.32, 1)"

interface ProgressCheckboxProps {
  checked: boolean
  onCheckedChange?: (checked: boolean) => void
  shape?: CheckboxShape
  duration?: number
  fill?: boolean
  disabled?: boolean
  id?: string
  className?: string
}

function ProgressCheckbox({
  checked,
  onCheckedChange,
  shape = "squircle",
  duration = 220,
  fill = true,
  disabled,
  id,
  className,
}: ProgressCheckboxProps) {
  // Release quicker than it settles: exit runs ~0.55x of the enter duration.
  const enter = Math.max(0, duration)
  const exit = Math.round(enter * 0.55)
  const current = checked ? enter : exit
  const opacityDuration = Math.max(60, Math.round(current * 0.6))

  return (
    <button
      type="button"
      role="checkbox"
      id={id}
      aria-checked={checked}
      disabled={disabled}
      onClick={() => onCheckedChange?.(!checked)}
      className={cn(
        "peer relative flex size-5 shrink-0 cursor-pointer select-none items-center justify-center border outline-none",
        "transition-[background-color,border-color,border-radius,transform] motion-reduce:transition-none",
        "active:scale-[0.96] motion-reduce:active:scale-100",
        "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
        "after:absolute after:-inset-2 after:content-['']",
        "disabled:cursor-not-allowed disabled:opacity-50",
        RADIUS[shape],
        checked
          ? fill
            ? "border-blue-500 bg-white dark:bg-zinc-950"
            : "border-blue-500 bg-blue-500"
          : "border-zinc-300 bg-white hover:border-zinc-400 dark:border-zinc-700 dark:bg-zinc-900 dark:hover:border-zinc-600",
        className
      )}
      style={{
        transitionDuration: \`\${current}ms, \${current}ms, 200ms, 150ms\`,
        transitionTimingFunction: EASE_OUT,
      }}
    >
      {fill && (
        <span
          aria-hidden="true"
          className={cn(
            "absolute inset-0 origin-left rounded-[inherit] bg-blue-500",
            "transition-transform motion-reduce:transition-none"
          )}
          style={{
            transform: checked ? "scaleX(1)" : "scaleX(0)",
            transitionDuration: \`\${current}ms\`,
            transitionTimingFunction: EASE_OUT,
          }}
        />
      )}
      <Check
        aria-hidden="true"
        className={cn(
          "relative z-10 size-3.5 text-white [stroke-width:3]",
          "transition-[transform,opacity] motion-reduce:transition-none"
        )}
        style={{
          transform: checked ? "scale(1)" : "scale(0.45)",
          opacity: checked ? 1 : 0,
          transitionDuration: \`\${current}ms, \${opacityDuration}ms\`,
          transitionTimingFunction: EASE_OUT,
        }}
      />
    </button>
  )
}

export { ProgressCheckbox }`;

  const usageCode = `import { useState } from "react"
import { ProgressCheckbox } from "@/components/ui/progress-checkbox"

export function Demo() {
  const [enabled, setEnabled] = useState(true)

  return (
    <ProgressCheckbox
      checked={enabled}
      onCheckedChange={setEnabled}
      shape="${shape}"
      duration={${duration}}${fill ? "\n      fill" : ""}
    />
  )
}`;

  return (
    <div className="overflow-hidden rounded-xl border bg-background">
      {/* Live preview */}
      <div className="flex min-h-[220px] flex-col items-center justify-center gap-5 bg-zinc-50/60 p-10 dark:bg-zinc-950/40">
        <div className="flex items-center gap-3">
          <ProgressCheckbox
            id="playground-checkbox"
            checked={checked}
            onCheckedChange={setChecked}
            shape={shape}
            duration={duration}
            fill={fill}
          />
          <Label
            htmlFor="playground-checkbox"
            className="cursor-pointer text-sm font-medium leading-none"
          >
            Enable email notifications
          </Label>
        </div>
        <button
          type="button"
          onClick={replay}
          className="inline-flex cursor-pointer items-center gap-1.5 rounded-md border bg-background px-2.5 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          <RotateCcw className="size-3.5" />
          Replay
        </button>
      </div>

      {/* Controls */}
      <div className="grid grid-cols-1 gap-6 border-t p-5 sm:grid-cols-3 sm:gap-4">
        <div className="space-y-2.5">
          <p className="text-xs font-semibold text-foreground">Shape</p>
          <div className="grid grid-cols-3 gap-1 rounded-lg bg-muted p-1">
            {(["circle", "box", "squircle"] as const).map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setShape(s)}
                className={cn(
                  "flex cursor-pointer items-center justify-center gap-1.5 rounded-md px-2 py-1.5 text-xs font-medium transition-all duration-150 hover:text-foreground",
                  shape === s
                    ? "bg-background text-foreground shadow-xs font-semibold"
                    : "text-muted-foreground hover:bg-background/50"
                )}
              >
                <span className={cn("size-3 shrink-0 border-2 border-current", RADIUS[s])} />
                {SHAPE_LABEL[s]}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-2.5">
          <div className="flex items-center justify-between">
            <p className="text-xs font-semibold text-foreground">Duration</p>
            <span className="rounded bg-muted px-1.5 py-0.5 font-mono text-[11px] text-muted-foreground">
              {duration}ms
            </span>
          </div>
          <Slider
            value={[duration]}
            onValueChange={(value: number | readonly number[]) => setDuration(Array.isArray(value) ? value[0] : value)}
            min={100}
            max={400}
            step={10}
            className="w-full"
          />
          <p className="text-[11px] text-muted-foreground">Enter 100–400ms · exit runs ~0.55×</p>
        </div>

        <div className="space-y-2.5">
          <p className="text-xs font-semibold text-foreground">Blue progress fill</p>
          <label
            htmlFor="playground-fill"
            className="flex cursor-pointer items-center gap-2.5 text-sm text-muted-foreground"
          >
            <ProgressCheckbox
              id="playground-fill"
              checked={fill}
              onCheckedChange={(v) => setFill(v)}
              shape="box"
              duration={150}
              fill={false}
            />
            <span className="leading-none">Animated sweep on check</span>
          </label>
          <p className="text-[11px] text-muted-foreground">Off = solid blue toggle</p>
        </div>
      </div>

      {/* Code */}
      <div className="border-t">
        <div className="flex items-center gap-5 border-b px-4">
          <button
            type="button"
            onClick={() => setCodeTab("usage")}
            className={cn(
              "cursor-pointer pb-2 pt-3 text-sm font-semibold transition-colors",
              codeTab === "usage"
                ? "border-b-2 border-foreground -mb-px"
                : "-mb-px border-b-2 border-transparent text-muted-foreground hover:text-foreground"
            )}
          >
            Usage
          </button>
          <button
            type="button"
            onClick={() => setCodeTab("component")}
            className={cn(
              "cursor-pointer pb-2 pt-3 text-sm font-semibold transition-colors",
              codeTab === "component"
                ? "border-b-2 border-foreground -mb-px"
                : "-mb-px border-b-2 border-transparent text-muted-foreground hover:text-foreground"
            )}
          >
            Component
          </button>
        </div>
        <div className="p-4">
          <CodeBlock code={codeTab === "usage" ? usageCode : componentCode} />
        </div>
      </div>
    </div>
  );
}

/* --- Page ------------------------------------------------------------------ */

export default function CheckboxDocPage() {
  const codeTsx = `import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export function CheckboxDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" defaultChecked />
      <Label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </Label>
    </div>
  )
}`;
  const codeTs = `import { Checkbox } from "@/components/ui/checkbox"
import type { VariantProps } from "class-variance-authority"

// Checkbox component props type
interface CheckboxProps {
  id?: string
  checked?: boolean
  defaultChecked?: boolean
  onCheckedChange?: (checked: boolean) => void
  disabled?: boolean
  className?: string
}

export type { CheckboxProps }`;
  const codeJsx = `import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

function CheckboxDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" defaultChecked />
      <Label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </Label>
    </div>
  )
}

export default CheckboxDemo`;
  const codeJs = `// Checkbox state management example
const checkbox = document.querySelector('[data-slot="checkbox"]')

if (checkbox) {
  checkbox.addEventListener('click', () => {
    const isChecked = checkbox.getAttribute('data-checked') === 'true'
    checkbox.setAttribute('data-checked', String(!isChecked))

    // Update visual state
    if (isChecked) {
      checkbox.classList.remove('bg-primary', 'text-primary-foreground', 'border-primary')
    } else {
      checkbox.classList.add('bg-primary', 'text-primary-foreground', 'border-primary')
    }
  })
}`;

  const manualSource = `"use client"

import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox"

import { cn } from "@/lib/utils"
import { CheckIcon } from "lucide-react"

function Checkbox({ className, ...props }: CheckboxPrimitive.Root.Props) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer relative flex size-4 shrink-0 items-center justify-center rounded-[4px] border border-input transition-colors outline-none group-has-disabled/field:opacity-50 group-has-[:focus-visible]/field-label:ring-0 group-has-[:focus-visible]/field-label:not-data-checked:border-input after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aria-invalid:aria-checked:border-primary dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground group-has-[:focus-visible]/field-label:data-checked:border-primary dark:data-checked:bg-primary",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="grid place-content-center text-current transition-none [&>svg]:size-3.5"
      >
        <CheckIcon
        />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }
`;
  const manualDeps = `npm i @base-ui/react clsx tailwind-merge class-variance-authority lucide-react`;

  const ariaSnippet = `// React Aria Components (react-aria-components)
import { Checkbox } from "react-aria-components"
import { useState } from "react"

export function AriaDemo() {
  const [selected, setSelected] = useState(true)

  return (
    <Checkbox isSelected={selected} onChange={setSelected} className="group">
      <span className="group-data-[selected]:bg-primary">…</span>
      <span>Accept terms and conditions</span>
    </Checkbox>
  )
}`;
  const radixSnippet = `// Radix UI (@radix-ui/react-checkbox)
import * as Checkbox from "@radix-ui/react-checkbox"
import { useState } from "react"

export function RadixDemo() {
  const [checked, setChecked] = useState(true)

  return (
    <Checkbox.Root
      checked={checked}
      onCheckedChange={(v) => setChecked(Boolean(v))}
      className="data-[state=checked]:bg-primary"
    >
      <Checkbox.Indicator>
        <Check />
      </Checkbox.Indicator>
    </Checkbox.Root>
  )
}`;



  return (
    <div className="mx-auto w-full min-w-0 max-w-3xl space-y-10">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Checkbox</h1>
        <p className="text-lg text-muted-foreground">
          A control that allows the user to toggle between checked and not checked.
        </p>
      </div>

      <div className="space-y-4">
        <Tabs defaultValue="base" className="w-full">
          <div className="border-b">
            <TabsList className="bg-transparent p-0 justify-start w-full gap-6">
              <TabsTrigger value="base" className="rounded-none border-b-2 border-transparent data-[state=active]:border-foreground bg-transparent px-0 pb-3 pt-2 font-semibold shadow-none">
                Base UI
              </TabsTrigger>
              <TabsTrigger value="react-aria" className="rounded-none border-b-2 border-transparent data-[state=active]:border-foreground bg-transparent px-0 pb-3 pt-2 font-semibold shadow-none">
                React Aria
              </TabsTrigger>
              <TabsTrigger value="radix" className="rounded-none border-b-2 border-transparent data-[state=active]:border-foreground bg-transparent px-0 pb-3 pt-2 font-semibold shadow-none">
                Radix UI
              </TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="base" className="mt-6 border rounded-lg overflow-hidden">
            <div className="flex min-h-[350px] w-full items-center justify-center p-10 bg-background">
              <CheckboxDemo />
            </div>
            <div className="border-t p-4">
              <CodeBlock code={`import { Checkbox } from "@/components/ui/checkbox"\n// @base-ui/react — the default Qalvin UI checkbox`} />
            </div>
          </TabsContent>
          <TabsContent value="react-aria" className="mt-6 border rounded-lg overflow-hidden">
            <div className="flex min-h-[350px] w-full items-center justify-center p-10 bg-background">
              <ReactAriaCheckboxDemo />
            </div>
            <div className="border-t p-4">
              <CodeBlock code={ariaSnippet} />
            </div>
          </TabsContent>
          <TabsContent value="radix" className="mt-6 border rounded-lg overflow-hidden">
            <div className="flex min-h-[350px] w-full items-center justify-center p-10 bg-background">
              <RadixCheckboxDemo />
            </div>
            <div className="border-t p-4">
              <CodeBlock code={radixSnippet} />
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">Variants</h2>
        <p className="text-muted-foreground">
          Shapes for every surface — and an animated blue progress fill that sweeps in on check.
        </p>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <VariantCard
            shape="circle"
            label="Circle"
            description="rounded-full — pill-friendly, pairs with avatars"
          />
          <VariantCard
            shape="box"
            label="Box"
            description="rounded-md — the classic checkbox"
          />
          <VariantCard
            shape="squircle"
            label="Squircle"
            description="continuous corners — iOS-like defaults"
          />
          <VariantCard
            shape="box"
            fill
            label="Progress fill"
            description="blue sweep on check, 220ms ease-out"
          />
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">Playground</h2>
        <p className="text-muted-foreground">
          Tune the shape, the duration in milliseconds, and the blue progress fill — the code follows along.
        </p>
        <Playground />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">Installation</h2>
        <Tabs defaultValue="command" className="w-full">
          <TabsList className="bg-muted p-1">
            <TabsTrigger value="command">Command</TabsTrigger>
            <TabsTrigger value="manual">Manual</TabsTrigger>
          </TabsList>
          <TabsContent value="command" className="mt-4">
            <Tabs defaultValue="pnpm" className="w-full">
              <div className="border-b">
                <TabsList className="bg-transparent p-0 justify-start w-full gap-6">
                  <TabsTrigger value="pnpm" className="rounded-none border-b-2 border-transparent data-[state=active]:border-foreground bg-transparent px-0 pb-3 pt-2 font-semibold shadow-none">pnpm</TabsTrigger>
                  <TabsTrigger value="npm" className="rounded-none border-b-2 border-transparent data-[state=active]:border-foreground bg-transparent px-0 pb-3 pt-2 font-semibold shadow-none">npm</TabsTrigger>
                  <TabsTrigger value="yarn" className="rounded-none border-b-2 border-transparent data-[state=active]:border-foreground bg-transparent px-0 pb-3 pt-2 font-semibold shadow-none">yarn</TabsTrigger>
                  <TabsTrigger value="bun" className="rounded-none border-b-2 border-transparent data-[state=active]:border-foreground bg-transparent px-0 pb-3 pt-2 font-semibold shadow-none">bun</TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="pnpm" className="mt-4"><CodeBlock code="pnpm dlx @alvinahmad/ui add checkbox" language="bash" /></TabsContent>
              <TabsContent value="npm" className="mt-4"><CodeBlock code="npx @alvinahmad/ui add checkbox" language="bash" /></TabsContent>
              <TabsContent value="yarn" className="mt-4"><CodeBlock code="npx @alvinahmad/ui add checkbox" language="bash" /></TabsContent>
              <TabsContent value="bun" className="mt-4"><CodeBlock code="bunx @alvinahmad/ui add checkbox" language="bash" /></TabsContent>
            </Tabs>
          </TabsContent>
          <TabsContent value="manual" className="mt-6 space-y-6">
            <div className="space-y-2">
              <p className="text-xs font-semibold text-foreground">1. Install the required dependencies:</p>
              <CodeBlock code={manualDeps} language="bash" />
            </div>
            <div className="space-y-2">
              <p className="text-xs font-semibold text-foreground">2. Copy and paste the following code into <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">components/ui/checkbox.tsx</code>:</p>
              <CodeBlock code={manualSource} language="tsx" />
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">Usage</h2>
        <Tabs defaultValue="tsx" className="w-full">
          <TabsList className="bg-muted p-1">
            <TabsTrigger value="tsx">.tsx</TabsTrigger>
            <TabsTrigger value="ts">.ts</TabsTrigger>
            <TabsTrigger value="jsx">.jsx</TabsTrigger>
            <TabsTrigger value="js">.js</TabsTrigger>
          </TabsList>
          <TabsContent value="tsx" className="mt-4">
            <CodeBlock code={codeTsx} language="tsx" />
          </TabsContent>
          <TabsContent value="ts" className="mt-4">
            <CodeBlock code={codeTs} language="ts" />
          </TabsContent>
          <TabsContent value="jsx" className="mt-4">
            <CodeBlock code={codeJsx} language="jsx" />
          </TabsContent>
          <TabsContent value="js" className="mt-4">
            <CodeBlock code={codeJs} language="js" />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
