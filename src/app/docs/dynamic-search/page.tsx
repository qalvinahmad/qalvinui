export default function DynamicSearchPage() {
  return (
    <div className="mx-auto w-full min-w-0 max-w-3xl space-y-10">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Dynamic Search</h1>
        <p className="text-lg text-muted-foreground">
          Implement real-time search with debouncing and filtering.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Basic Search</h2>
        <p className="text-muted-foreground">
          A simple search input with real-time filtering:
        </p>
        <div className="rounded-lg border bg-muted/50 p-4 font-mono text-sm overflow-x-auto">
          <pre className="text-foreground/80">{`import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export function DynamicSearch({ items, onSearch }) {
  const [query, setQuery] = useState("")

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            onSearch?.(e.target.value)
          }}
          className="pl-10"
        />
      </div>
      <div className="space-y-2">
        {filteredItems.map((item) => (
          <div key={item.id} className="p-2 border rounded">
            {item.name}
          </div>
        ))}
      </div>
    </div>
  )
}`}</pre>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Search with Debounce</h2>
        <p className="text-muted-foreground">
          Optimized search with debouncing to reduce API calls:
        </p>
        <div className="rounded-lg border bg-muted/50 p-4 font-mono text-sm overflow-x-auto">
          <pre className="text-foreground/80">{`import { useState, useEffect, useCallback } from "react"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => clearTimeout(handler)
  }, [value, delay])

  return debouncedValue
}

export function DebouncedSearch() {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState([])
  const debouncedQuery = useDebounce(query, 300)

  useEffect(() => {
    if (debouncedQuery) {
      fetch(\`/api/search?q=\${debouncedQuery}\`)
        .then(res => res.json())
        .then(data => setResults(data))
    }
  }, [debouncedQuery])

  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search with debounce..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-10"
        />
      </div>
      <div className="space-y-2">
        {results.map((item) => (
          <div key={item.id} className="p-2 border rounded">
            {item.name}
          </div>
        ))}
      </div>
    </div>
  )
}`}</pre>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Command Palette</h2>
        <p className="text-muted-foreground">
          A command palette with search and keyboard navigation:
        </p>
        <div className="rounded-lg border bg-muted/50 p-4 font-mono text-sm overflow-x-auto">
          <pre className="text-foreground/80">{`import { useState, useEffect, useRef } from "react"
import { Input } from "@/components/ui/input"
import { Command, CommandGroup, CommandItem } from "@/components/ui/command"

export function CommandPalette({ open, onClose }) {
  const [query, setQuery] = useState("")
  const inputRef = useRef(null)

  useEffect(() => {
    if (open) {
      inputRef.current?.focus()
    }
  }, [open])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="fixed left-[50%] top-[20%] z-50 w-full max-w-lg translate-x-[-50%]">
        <Command>
          <Input
            ref={inputRef}
            placeholder="Type a command..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <CommandGroup heading="Suggestions">
            <CommandItem>Calendar</CommandItem>
            <CommandItem>Search Emoji</CommandItem>
            <CommandItem>Calculator</CommandItem>
          </CommandGroup>
        </Command>
      </div>
    </div>
  )
}`}</pre>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Features</h2>
        <ul className="space-y-2 text-muted-foreground list-disc pl-6">
          <li><strong className="text-foreground font-semibold">Debouncing:</strong> Reduce API calls by waiting for the user to stop typing</li>
          <li><strong className="text-foreground font-semibold">Keyboard Navigation:</strong> Navigate results with arrow keys and select with Enter</li>
          <li><strong className="text-foreground font-semibold">Loading States:</strong> Show loading indicators during search</li>
          <li><strong className="text-foreground font-semibold">Empty States:</strong> Display helpful messages when no results are found</li>
          <li><strong className="text-foreground font-semibold">Highlighting:</strong> Highlight matching text in search results</li>
        </ul>
      </div>
    </div>
  )
}
