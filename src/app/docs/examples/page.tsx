export default function ExamplesPage() {
  return (
    <div className="mx-auto w-full min-w-0 max-w-3xl space-y-10">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Examples</h1>
        <p className="text-lg text-muted-foreground">
          Example implementations and use cases for Qalvin UI components.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Login Form</h2>
        <p className="text-muted-foreground">
          A complete login form with email and password fields:
        </p>
        <div className="rounded-lg border bg-muted/50 p-4 font-mono text-sm overflow-x-auto">
          <pre className="text-foreground/80">{`import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function LoginForm() {
  return (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>Login</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="m@example.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" />
          </div>
          <Button type="submit" className="w-full">Sign In</Button>
        </form>
      </CardContent>
    </Card>
  )
}`}</pre>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Dashboard Layout</h2>
        <p className="text-muted-foreground">
          A dashboard layout with sidebar navigation:
        </p>
        <div className="rounded-lg border bg-muted/50 p-4 font-mono text-sm overflow-x-auto">
          <pre className="text-foreground/80">{`import { Sidebar } from "@/components/ui/sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Dashboard() {
  return (
    <div className="flex min-h-screen">
      <Sidebar>
        <SidebarItem icon={Home} label="Dashboard" />
        <SidebarItem icon={Settings} label="Settings" />
        <SidebarItem icon={Users} label="Users" />
      </Sidebar>
      <main className="flex-1 p-8">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader>
              <CardTitle>Total Revenue</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$45,231.89</div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}`}</pre>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Data Table</h2>
        <p className="text-muted-foreground">
          A data table with sorting and filtering:
        </p>
        <div className="rounded-lg border bg-muted/50 p-4 font-mono text-sm overflow-x-auto">
          <pre className="text-foreground/80">{`import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export function DataTable({ data }) {
  const [filter, setFilter] = useState("")
  
  const filteredData = data.filter(row =>
    row.name.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div className="space-y-4">
      <Input
        placeholder="Search..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredData.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}`}</pre>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Settings Page</h2>
        <p className="text-muted-foreground">
          A settings page with form controls:
        </p>
        <div className="rounded-lg border bg-muted/50 p-4 font-mono text-sm overflow-x-auto">
          <pre className="text-foreground/80">{`import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Select } from "@/components/ui/select"

export function SettingsPage() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="email-notifications">Email notifications</Label>
            <Switch id="email-notifications" />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="push-notifications">Push notifications</Label>
            <Switch id="push-notifications" />
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Appearance</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Theme</Label>
            <Select options={["Light", "Dark", "System"]} />
          </div>
          <div className="space-y-2">
            <Label>Language</Label>
            <Select options={["English", "Spanish", "French"]} />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}`}</pre>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">More Examples</h2>
        <ul className="space-y-2 text-muted-foreground list-disc pl-6">
          <li><strong className="text-foreground font-semibold">E-commerce:</strong> Product cards, shopping cart, checkout flow</li>
          <li><strong className="text-foreground font-semibold">Blog:</strong> Article layout, comments, author profiles</li>
          <li><strong className="text-foreground font-semibold">SaaS:</strong> Pricing tables, feature comparisons, testimonials</li>
          <li><strong className="text-foreground font-semibold">Portfolio:</strong> Project showcases, galleries, contact forms</li>
        </ul>
      </div>
    </div>
  )
}
