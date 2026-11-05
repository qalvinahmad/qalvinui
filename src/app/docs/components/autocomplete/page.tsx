"use client";

import React, { useState, useMemo, useEffect, useId, Fragment } from "react";
import { Copy, Check, Code, Sparkles } from "lucide-react";
import {
  Autocomplete,
  AutocompleteCollection,
  AutocompleteEmpty,
  AutocompleteGroup,
  AutocompleteGroupLabel,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteList,
  AutocompletePopup,
  AutocompleteSeparator,
  AutocompleteStatus,
  useAutocompleteFilter,
} from "@/components/ui/autocomplete";
import { Label } from "@/components/ui/label";
import { Spinner } from "@/components/ui/spinner";
import { Button } from "@/components/ui/button";

// Basic fruit items
const fruitItems = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Orange", value: "orange" },
  { label: "Grape", value: "grape" },
  { label: "Strawberry", value: "strawberry" },
  { label: "Mango", value: "mango" },
  { label: "Pineapple", value: "pineapple" },
  { label: "Kiwi", value: "kiwi" },
  { label: "Peach", value: "peach" },
  { label: "Pear", value: "pear" },
];

// Grouped Tags Data
type Tag = { id: string; label: string; group: "Status" | "Priority" | "Team" };
type TagGroup = { value: string; items: Tag[] };

const tagsData: Tag[] = [
  { group: "Status", id: "s-open", label: "Open" },
  { group: "Status", id: "s-in-progress", label: "In progress" },
  { group: "Status", id: "s-blocked", label: "Blocked" },
  { group: "Status", id: "s-resolved", label: "Resolved" },
  { group: "Status", id: "s-closed", label: "Closed" },
  { group: "Priority", id: "p-low", label: "Low" },
  { group: "Priority", id: "p-medium", label: "Medium" },
  { group: "Priority", id: "p-high", label: "High" },
  { group: "Priority", id: "p-urgent", label: "Urgent" },
  { group: "Team", id: "t-design", label: "Design" },
  { group: "Team", id: "t-frontend", label: "Frontend" },
  { group: "Team", id: "t-backend", label: "Backend" },
  { group: "Team", id: "t-devops", label: "DevOps" },
  { group: "Team", id: "t-qa", label: "QA" },
  { group: "Team", id: "t-mobile", label: "Mobile" },
];

function groupTags(tags: Tag[]): TagGroup[] {
  const groups: Record<string, Tag[]> = {};
  for (const tag of tags) {
    if (!groups[tag.group]) groups[tag.group] = [];
    groups[tag.group]?.push(tag);
  }
  const order: Array<TagGroup["value"]> = ["Status", "Priority", "Team"];
  return order.map((value) => ({ items: groups[value] ?? [], value }));
}
const groupedTags: TagGroup[] = groupTags(tagsData);

// Tag list for limited results
type SimpleTag = { id: string; value: string };
const manyTags: SimpleTag[] = [
  { id: "lang-js", value: "JavaScript" },
  { id: "lang-ts", value: "TypeScript" },
  { id: "lang-py", value: "Python" },
  { id: "lang-java", value: "Java" },
  { id: "lang-csharp", value: "C#" },
  { id: "lang-cpp", value: "C++" },
  { id: "lang-c", value: "C" },
  { id: "lang-go", value: "Go" },
  { id: "lang-rust", value: "Rust" },
  { id: "lang-rb", value: "Ruby" },
  { id: "lang-php", value: "PHP" },
  { id: "lang-swift", value: "Swift" },
  { id: "lang-kotlin", value: "Kotlin" },
  { id: "lang-scala", value: "Scala" },
  { id: "lang-elixir", value: "Elixir" },
  { id: "lang-hs", value: "Haskell" },
  { id: "lang-dart", value: "Dart" },
];

// Async movies data
type Movie = { id: string; title: string; year: number };
const topMovies: Movie[] = [
  { id: "1", title: "The Shawshank Redemption", year: 1994 },
  { id: "2", title: "The Godfather", year: 1972 },
  { id: "3", title: "The Dark Knight", year: 2008 },
  { id: "4", title: "The Godfather Part II", year: 1974 },
  { id: "5", title: "12 Angry Men", year: 1957 },
  { id: "8", title: "Pulp Fiction", year: 1994 },
  { id: "11", title: "Forrest Gump", year: 1994 },
  { id: "14", title: "Inception", year: 2010 },
];

async function searchMovies(
  query: string,
  filter: (item: string, query: string) => boolean
): Promise<Movie[]> {
  await new Promise((resolve) => setTimeout(resolve, 400));
  return topMovies.filter(
    (movie) => filter(movie.title, query) || filter(movie.year.toString(), query)
  );
}

// Reusable Example Container with "Copy" and "View code"
function ExampleCard({
  title,
  description,
  code,
  children,
}: {
  title: string;
  description?: string;
  code: string;
  children: React.ReactNode;
}) {
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);

  const onCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-card overflow-hidden shadow-xs">
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 border-b border-border/60 bg-muted/20">
        <div>
          <h3 className="font-semibold text-base text-foreground tracking-tight">{title}</h3>
          {description && <p className="text-xs text-muted-foreground mt-0.5">{description}</p>}
        </div>
        <div className="flex items-center gap-2 self-start sm:self-center">
          <Button
            variant="ghost"
            size="sm"
            onClick={onCopy}
            className="h-8 text-xs gap-1.5 text-muted-foreground hover:text-foreground"
          >
            {copied ? <Check className="size-3.5 text-emerald-500" /> : <Copy className="size-3.5" />}
            <span>{copied ? "Copied" : "Copy"}</span>
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowCode(!showCode)}
            className="h-8 text-xs gap-1.5"
          >
            <Code className="size-3.5" />
            <span>{showCode ? "Hide code" : "View code"}</span>
          </Button>
        </div>
      </div>

      {/* Interactive Canvas */}
      <div className="p-6 sm:p-10 flex items-center justify-center min-h-[160px] bg-background">
        <div className="w-full max-w-xs">{children}</div>
      </div>

      {/* Code Drawer */}
      {showCode && (
        <div className="border-t border-border/80 bg-zinc-950 p-4 overflow-x-auto text-xs font-mono text-zinc-100">
          <pre>
            <code>{code}</code>
          </pre>
        </div>
      )}
    </div>
  );
}

export default function AutocompleteDocsPage() {
  const labelId = useId();

  // Limited results state
  const [limitValue, setLimitValue] = useState("");
  const limitCount = 7;
  const { contains: filterContains } = useAutocompleteFilter({ sensitivity: "base" });

  const totalLimitMatches = useMemo(() => {
    const trimmed = limitValue.trim();
    if (!trimmed) return manyTags.length;
    return manyTags.filter((t) => filterContains(t.value, trimmed)).length;
  }, [limitValue, filterContains]);
  const moreCount = Math.max(0, totalLimitMatches - limitCount);

  // Async movies state
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState<Movie[]>([]);

  useEffect(() => {
    if (!searchValue) {
      setSearchResults([]);
      setIsLoading(false);
      return;
    }
    setIsLoading(true);
    let ignore = false;
    const timer = setTimeout(async () => {
      try {
        const results = await searchMovies(searchValue, filterContains);
        if (!ignore) setSearchResults(results);
      } finally {
        if (!ignore) setIsLoading(false);
      }
    }, 300);
    return () => {
      clearTimeout(timer);
      ignore = true;
    };
  }, [searchValue, filterContains]);

  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-medium text-primary">
          <Sparkles className="size-3.5" />
          <span>New Component</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Autocomplete</h1>
        <p className="text-base sm:text-lg text-muted-foreground max-w-3xl leading-relaxed">
          An accessible text input component that suggests filtered options in a portal popup as users type. Supports single, multi-level grouping, auto-highlight, clear buttons, size variants, and asynchronous query loading.
        </p>
      </div>

      {/* CLI Installation */}
      <div className="rounded-xl border border-border bg-muted/30 p-4 space-y-2">
        <h3 className="font-semibold text-xs tracking-wider uppercase text-muted-foreground">Installation</h3>
        <div className="flex items-center justify-between rounded-lg bg-zinc-950 px-3.5 py-2.5 font-mono text-xs text-zinc-100">
          <code>pnpm dlx @alvinahmad/qalvinui add autocomplete</code>
          <button
            onClick={() => navigator.clipboard.writeText("pnpm dlx @alvinahmad/qalvinui add autocomplete")}
            className="text-zinc-400 hover:text-zinc-100"
          >
            <Copy className="size-3.5" />
          </button>
        </div>
      </div>

      {/* 11 Variants Grid */}
      <div className="space-y-8">
        {/* 1. Disabled autocomplete */}
        <ExampleCard
          title="Disabled autocomplete"
          description="Renders the input and interactive popup in an inaccessible disabled state."
          code={`<Autocomplete disabled items={items}>
  <AutocompleteInput
    aria-label="Search items"
    placeholder="Search items…"
  />
  <AutocompletePopup>
    <AutocompleteEmpty>No items found.</AutocompleteEmpty>
    <AutocompleteList>
      {(item) => (
        <AutocompleteItem key={item.value} value={item}>
          {item.label}
        </AutocompleteItem>
      )}
    </AutocompleteList>
  </AutocompletePopup>
</Autocomplete>`}
        >
          <Autocomplete disabled items={fruitItems}>
            <AutocompleteInput aria-label="Search items" placeholder="Search items…" />
            <AutocompletePopup>
              <AutocompleteEmpty>No items found.</AutocompleteEmpty>
              <AutocompleteList>
                {(item: { label: string; value: string }) => (
                  <AutocompleteItem key={item.value} value={item}>
                    {item.label}
                  </AutocompleteItem>
                )}
              </AutocompleteList>
            </AutocompletePopup>
          </Autocomplete>
        </ExampleCard>

        {/* 2. Small autocomplete */}
        <ExampleCard
          title="Small autocomplete"
          description="Compact input and dropdown dimensions suitable for tight toolbars and data tables."
          code={`<Autocomplete items={items}>
  <AutocompleteInput
    aria-label="Search items"
    placeholder="Search items…"
    size="sm"
  />
  <AutocompletePopup>
    <AutocompleteEmpty>No items found.</AutocompleteEmpty>
    <AutocompleteList>
      {(item) => (
        <AutocompleteItem key={item.value} value={item}>
          {item.label}
        </AutocompleteItem>
      )}
    </AutocompleteList>
  </AutocompletePopup>
</Autocomplete>`}
        >
          <Autocomplete items={fruitItems}>
            <AutocompleteInput aria-label="Search items" placeholder="Search items…" size="sm" />
            <AutocompletePopup>
              <AutocompleteEmpty>No items found.</AutocompleteEmpty>
              <AutocompleteList>
                {(item: { label: string; value: string }) => (
                  <AutocompleteItem key={item.value} value={item}>
                    {item.label}
                  </AutocompleteItem>
                )}
              </AutocompleteList>
            </AutocompletePopup>
          </Autocomplete>
        </ExampleCard>

        {/* 3. Large autocomplete */}
        <ExampleCard
          title="Large autocomplete"
          description="Expanded touch targets and prominent typography for prominent hero forms."
          code={`<Autocomplete items={items}>
  <AutocompleteInput
    aria-label="Search items"
    placeholder="Search items…"
    size="lg"
  />
  <AutocompletePopup>
    <AutocompleteEmpty>No items found.</AutocompleteEmpty>
    <AutocompleteList>
      {(item) => (
        <AutocompleteItem key={item.value} value={item}>
          {item.label}
        </AutocompleteItem>
      )}
    </AutocompleteList>
  </AutocompletePopup>
</Autocomplete>`}
        >
          <Autocomplete items={fruitItems}>
            <AutocompleteInput aria-label="Search items" placeholder="Search items…" size="lg" />
            <AutocompletePopup>
              <AutocompleteEmpty>No items found.</AutocompleteEmpty>
              <AutocompleteList>
                {(item: { label: string; value: string }) => (
                  <AutocompleteItem key={item.value} value={item}>
                    {item.label}
                  </AutocompleteItem>
                )}
              </AutocompleteList>
            </AutocompletePopup>
          </Autocomplete>
        </ExampleCard>

        {/* 4. Autocomplete with label */}
        <ExampleCard
          title="Autocomplete with label"
          description="Accessible field pairing using a descriptive htmlFor label element."
          code={`<Autocomplete items={items}>
  <div className="flex flex-col items-start gap-2">
    <Label htmlFor="fruit-select">Fruits</Label>
    <AutocompleteInput id="fruit-select" placeholder="Search items…" />
  </div>
  <AutocompletePopup>
    <AutocompleteEmpty>No items found.</AutocompleteEmpty>
    <AutocompleteList>
      {(item) => (
        <AutocompleteItem key={item.value} value={item}>
          {item.label}
        </AutocompleteItem>
      )}
    </AutocompleteList>
  </AutocompletePopup>
</Autocomplete>`}
        >
          <Autocomplete items={fruitItems}>
            <div className="flex flex-col items-start gap-2">
              <Label htmlFor={labelId}>Fruits</Label>
              <AutocompleteInput id={labelId} placeholder="Search items…" />
            </div>
            <AutocompletePopup>
              <AutocompleteEmpty>No items found.</AutocompleteEmpty>
              <AutocompleteList>
                {(item: { label: string; value: string }) => (
                  <AutocompleteItem key={item.value} value={item}>
                    {item.label}
                  </AutocompleteItem>
                )}
              </AutocompleteList>
            </AutocompletePopup>
          </Autocomplete>
        </ExampleCard>

        {/* 5. Autocomplete autofilling the input with the highlighted item */}
        <ExampleCard
          title="Autocomplete autofilling the input with the highlighted item"
          description="Using mode='both', arrow key navigation automatically reflects highlighted text in the input."
          code={`<Autocomplete items={items} mode="both">
  <AutocompleteInput
    aria-label="Search items"
    placeholder="Search items…"
  />
  <AutocompletePopup>
    <AutocompleteEmpty>No items found.</AutocompleteEmpty>
    <AutocompleteList>
      {(item) => (
        <AutocompleteItem key={item.value} value={item}>
          {item.label}
        </AutocompleteItem>
      )}
    </AutocompleteList>
  </AutocompletePopup>
</Autocomplete>`}
        >
          <Autocomplete items={fruitItems} mode="both">
            <AutocompleteInput aria-label="Search items" placeholder="Search items…" />
            <AutocompletePopup>
              <AutocompleteEmpty>No items found.</AutocompleteEmpty>
              <AutocompleteList>
                {(item: { label: string; value: string }) => (
                  <AutocompleteItem key={item.value} value={item}>
                    {item.label}
                  </AutocompleteItem>
                )}
              </AutocompleteList>
            </AutocompletePopup>
          </Autocomplete>
        </ExampleCard>

        {/* 6. Autocomplete auto highlighting the first option */}
        <ExampleCard
          title="Autocomplete auto highlighting the first option"
          description="Sets autoHighlight so pressing Enter instantly chooses the top suggestion."
          code={`<Autocomplete autoHighlight items={items}>
  <AutocompleteInput
    aria-label="Search items"
    placeholder="Search items…"
  />
  <AutocompletePopup>
    <AutocompleteEmpty>No items found.</AutocompleteEmpty>
    <AutocompleteList>
      {(item) => (
        <AutocompleteItem key={item.value} value={item}>
          {item.label}
        </AutocompleteItem>
      )}
    </AutocompleteList>
  </AutocompletePopup>
</Autocomplete>`}
        >
          <Autocomplete autoHighlight items={fruitItems}>
            <AutocompleteInput aria-label="Search items" placeholder="Search items…" />
            <AutocompletePopup>
              <AutocompleteEmpty>No items found.</AutocompleteEmpty>
              <AutocompleteList>
                {(item: { label: string; value: string }) => (
                  <AutocompleteItem key={item.value} value={item}>
                    {item.label}
                  </AutocompleteItem>
                )}
              </AutocompleteList>
            </AutocompletePopup>
          </Autocomplete>
        </ExampleCard>

        {/* 7. Autocomplete with clear button */}
        <ExampleCard
          title="Autocomplete with clear button"
          description="Embeds a clear button inside the trailing input slot to quickly reset values."
          code={`<Autocomplete items={items}>
  <AutocompleteInput
    aria-label="Search items"
    placeholder="Search items…"
    showClear
  />
  <AutocompletePopup>
    <AutocompleteEmpty>No items found.</AutocompleteEmpty>
    <AutocompleteList>
      {(item) => (
        <AutocompleteItem key={item.value} value={item}>
          {item.label}
        </AutocompleteItem>
      )}
    </AutocompleteList>
  </AutocompletePopup>
</Autocomplete>`}
        >
          <Autocomplete items={fruitItems}>
            <AutocompleteInput aria-label="Search items" placeholder="Search items…" showClear />
            <AutocompletePopup>
              <AutocompleteEmpty>No items found.</AutocompleteEmpty>
              <AutocompleteList>
                {(item: { label: string; value: string }) => (
                  <AutocompleteItem key={item.value} value={item}>
                    {item.label}
                  </AutocompleteItem>
                )}
              </AutocompleteList>
            </AutocompletePopup>
          </Autocomplete>
        </ExampleCard>

        {/* 8. Autocomplete with trigger and clear buttons */}
        <ExampleCard
          title="Autocomplete with trigger and clear buttons"
          description="Includes both an open dropdown chevron trigger and a quick clear reset icon."
          code={`<Autocomplete items={items}>
  <AutocompleteInput
    aria-label="Search items"
    placeholder="Search items…"
    showClear
    showTrigger
  />
  <AutocompletePopup>
    <AutocompleteEmpty>No items found.</AutocompleteEmpty>
    <AutocompleteList>
      {(item) => (
        <AutocompleteItem key={item.value} value={item}>
          {item.label}
        </AutocompleteItem>
      )}
    </AutocompleteList>
  </AutocompletePopup>
</Autocomplete>`}
        >
          <Autocomplete items={fruitItems}>
            <AutocompleteInput
              aria-label="Search items"
              placeholder="Search items…"
              showClear
              showTrigger
            />
            <AutocompletePopup>
              <AutocompleteEmpty>No items found.</AutocompleteEmpty>
              <AutocompleteList>
                {(item: { label: string; value: string }) => (
                  <AutocompleteItem key={item.value} value={item}>
                    {item.label}
                  </AutocompleteItem>
                )}
              </AutocompleteList>
            </AutocompletePopup>
          </Autocomplete>
        </ExampleCard>

        {/* 9. Autocomplete with grouped items */}
        <ExampleCard
          title="Autocomplete with grouped items"
          description="Categorizes option sets with section headers, sub-collections, and dividers."
          code={`<Autocomplete items={groupedTags}>
  <AutocompleteInput aria-label="Search tags" placeholder="e.g. feature" />
  <AutocompletePopup>
    <AutocompleteEmpty>No tags found.</AutocompleteEmpty>
    <AutocompleteList>
      {(group) => (
        <Fragment key={group.value}>
          <AutocompleteGroup items={group.items}>
            <AutocompleteGroupLabel>{group.value}</AutocompleteGroupLabel>
            <AutocompleteCollection>
              {(tag) => (
                <AutocompleteItem key={tag.id} value={tag}>
                  {tag.label}
                </AutocompleteItem>
              )}
            </AutocompleteCollection>
          </AutocompleteGroup>
          {group.value !== "Team" && <AutocompleteSeparator />}
        </Fragment>
      )}
    </AutocompleteList>
  </AutocompletePopup>
</Autocomplete>`}
        >
          <Autocomplete items={groupedTags}>
            <AutocompleteInput aria-label="Search tags" placeholder="e.g. feature" />
            <AutocompletePopup>
              <AutocompleteEmpty>No tags found.</AutocompleteEmpty>
              <AutocompleteList>
                {(group: TagGroup) => (
                  <Fragment key={group.value}>
                    <AutocompleteGroup items={group.items}>
                      <AutocompleteGroupLabel>{group.value}</AutocompleteGroupLabel>
                      <AutocompleteCollection>
                        {(tag: Tag) => (
                          <AutocompleteItem key={tag.id} value={tag}>
                            {tag.label}
                          </AutocompleteItem>
                        )}
                      </AutocompleteCollection>
                    </AutocompleteGroup>
                    {group.value !== "Team" && <AutocompleteSeparator />}
                  </Fragment>
                )}
              </AutocompleteList>
            </AutocompletePopup>
          </Autocomplete>
        </ExampleCard>

        {/* 10. Autocomplete with limited number of results */}
        <ExampleCard
          title="Autocomplete with limited number of results"
          description="Caps displayed suggestions and informs the user with an AutocompleteStatus badge."
          code={`<Autocomplete
  items={manyTags}
  limit={limit}
  onValueChange={setValue}
  value={value}
>
  <AutocompleteInput placeholder="e.g. feature" />
  <AutocompletePopup>
    <AutocompleteEmpty>No tags found.</AutocompleteEmpty>
    <AutocompleteList>
      {(tag) => (
        <AutocompleteItem key={tag.id} value={tag}>
          {tag.value}
        </AutocompleteItem>
      )}
    </AutocompleteList>
    {moreCount > 0 && (
      <AutocompleteStatus>
        +{moreCount} more (keep typing to narrow down)
      </AutocompleteStatus>
    )}
  </AutocompletePopup>
</Autocomplete>`}
        >
          <Autocomplete
            items={manyTags}
            limit={limitCount}
            onValueChange={setLimitValue}
            value={limitValue}
          >
            <AutocompleteInput placeholder="e.g. feature" />
            <AutocompletePopup>
              <AutocompleteEmpty>No tags found.</AutocompleteEmpty>
              <AutocompleteList>
                {(tag: SimpleTag) => (
                  <AutocompleteItem key={tag.id} value={tag}>
                    {tag.value}
                  </AutocompleteItem>
                )}
              </AutocompleteList>
              {moreCount > 0 && (
                <AutocompleteStatus>
                  +{moreCount} more (keep typing to narrow down)
                </AutocompleteStatus>
              )}
            </AutocompletePopup>
          </Autocomplete>
        </ExampleCard>

        {/* 11. Autocomplete with async items loading */}
        <ExampleCard
          title="Autocomplete with async items loading"
          description="Debounced asynchronous server simulation with live loading spinners and status updates."
          code={`<Autocomplete
  filter={null}
  items={searchResults}
  itemToStringValue={(item) => item.title}
  onValueChange={setSearchValue}
  value={searchValue}
>
  <AutocompleteInput placeholder="e.g. Pulp Fiction or 1994" />
  {searchValue && (
    <AutocompletePopup aria-busy={isLoading || undefined}>
      <AutocompleteStatus>
        {isLoading ? (
          <span className="flex items-center justify-between gap-2">
            Searching... <Spinner size="sm" />
          </span>
        ) : (
          \`\${searchResults.length} results found\`
        )}
      </AutocompleteStatus>
      <AutocompleteList>
        {(movie) => (
          <AutocompleteItem key={movie.id} value={movie}>
            <div className="flex flex-col gap-0.5">
              <span className="font-medium">{movie.title}</span>
              <span className="text-xs text-muted-foreground">{movie.year}</span>
            </div>
          </AutocompleteItem>
        )}
      </AutocompleteList>
    </AutocompletePopup>
  )}
</Autocomplete>`}
        >
          <Autocomplete
            filter={null}
            items={searchResults}
            itemToStringValue={(item: unknown) => (item as Movie).title}
            onValueChange={setSearchValue}
            value={searchValue}
          >
            <AutocompleteInput placeholder="e.g. Pulp Fiction or 1994" />
            {searchValue !== "" && (
              <AutocompletePopup aria-busy={isLoading || undefined}>
                <AutocompleteStatus>
                  {isLoading ? (
                    <span className="flex items-center justify-between gap-2 text-muted-foreground">
                      Searching IMDb...
                      <Spinner size="sm" />
                    </span>
                  ) : searchResults.length === 0 ? (
                    <span className="text-muted-foreground">
                      No movies found for "{searchValue}"
                    </span>
                  ) : (
                    <span>
                      {searchResults.length} result{searchResults.length === 1 ? "" : "s"} found
                    </span>
                  )}
                </AutocompleteStatus>
                <AutocompleteList>
                  {(movie: Movie) => (
                    <AutocompleteItem key={movie.id} value={movie}>
                      <div className="flex w-full flex-col gap-0.5">
                        <div className="font-medium text-foreground">{movie.title}</div>
                        <div className="text-muted-foreground text-xs">{movie.year}</div>
                      </div>
                    </AutocompleteItem>
                  )}
                </AutocompleteList>
              </AutocompletePopup>
            )}
          </Autocomplete>
        </ExampleCard>
      </div>
    </div>
  );
}
