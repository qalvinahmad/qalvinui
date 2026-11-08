"use client";

import { useState } from "react";
import {
  LayoutDashboard,
  BarChart3,
  Users,
  ShoppingCart,
  Settings,
  Bell,
  Search,
  ArrowUpRight,
  ArrowDownRight,
  TrendingUp,
  MoreVertical,
  Plus,
  Filter,
  Download,
  CheckCircle2,
  Clock,
  AlertCircle,
  Eye,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TemplateProps {
  primaryColor?: string;
  fontFamily?: string;
}

export function AdminDashboardTemplate({
  primaryColor = "#2563eb",
  fontFamily,
}: TemplateProps) {
  const [activeTab, setActiveTab] = useState("all");
  const [chartRange, setChartRange] = useState("30D");

  const orders = [
    {
      id: "ORD-9421",
      customer: "Olivia Martin",
      email: "olivia.martin@email.com",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
      status: "Completed",
      date: "Oct 24, 2026",
      amount: "$1,999.00",
      method: "Credit Card",
    },
    {
      id: "ORD-9420",
      customer: "Jackson Lee",
      email: "jackson.lee@email.com",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
      status: "Processing",
      date: "Oct 24, 2026",
      amount: "$39.00",
      method: "PayPal",
    },
    {
      id: "ORD-9419",
      customer: "Isabella Nguyen",
      email: "isabella.nguyen@email.com",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100",
      status: "Completed",
      date: "Oct 23, 2026",
      amount: "$299.00",
      method: "Stripe",
    },
    {
      id: "ORD-9418",
      customer: "William Kim",
      email: "will@email.com",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
      status: "Pending",
      date: "Oct 22, 2026",
      amount: "$99.00",
      method: "Bank Transfer",
    },
    {
      id: "ORD-9417",
      customer: "Sofia Davis",
      email: "sofia.davis@email.com",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100",
      status: "Refunded",
      date: "Oct 21, 2026",
      amount: "$450.00",
      method: "Credit Card",
    },
  ];

  const filteredOrders = activeTab === "all"
    ? orders
    : orders.filter((o) => o.status.toLowerCase() === activeTab);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Completed":
        return <Badge className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20 font-medium">Completed</Badge>;
      case "Processing":
        return <Badge className="bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20 font-medium">Processing</Badge>;
      case "Pending":
        return <Badge className="bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20 font-medium">Pending</Badge>;
      default:
        return <Badge variant="outline" className="text-muted-foreground font-medium">{status}</Badge>;
    }
  };

  return (
    <div
      className="flex min-h-[850px] w-full bg-muted/20 text-foreground transition-colors"
      style={fontFamily ? { fontFamily } : undefined}
    >
      {/* Sidebar */}
      <aside className="hidden lg:flex w-64 shrink-0 flex-col border-r border-border/70 bg-card p-5">
        <div className="flex items-center gap-2.5 px-2 pb-6 border-b border-border/50">
          <div
            className="size-8 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-xs"
            style={{ backgroundColor: primaryColor }}
          >
            Q
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm leading-none">Qalvin Admin</span>
            <span className="text-[11px] text-muted-foreground mt-0.5">Enterprise v2.0</span>
          </div>
        </div>

        <nav className="mt-6 flex flex-col gap-1">
          <span className="px-2 text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-1">
            General
          </span>
          <button
            type="button"
            className="flex items-center gap-3 rounded-xl px-3 py-2 text-xs font-semibold text-white shadow-xs"
            style={{ backgroundColor: primaryColor }}
          >
            <LayoutDashboard className="size-4" /> Overview
          </button>
          <button
            type="button"
            className="flex items-center gap-3 rounded-xl px-3 py-2 text-xs font-medium text-muted-foreground hover:bg-muted/60 hover:text-foreground transition-colors"
          >
            <BarChart3 className="size-4" /> Analytics
          </button>
          <button
            type="button"
            className="flex items-center gap-3 rounded-xl px-3 py-2 text-xs font-medium text-muted-foreground hover:bg-muted/60 hover:text-foreground transition-colors"
          >
            <ShoppingCart className="size-4" /> Orders
            <Badge variant="secondary" className="ml-auto text-[10px] h-4 px-1.5">12</Badge>
          </button>
          <button
            type="button"
            className="flex items-center gap-3 rounded-xl px-3 py-2 text-xs font-medium text-muted-foreground hover:bg-muted/60 hover:text-foreground transition-colors"
          >
            <Users className="size-4" /> Customers
          </button>

          <span className="mt-6 px-2 text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-1">
            Configuration
          </span>
          <button
            type="button"
            className="flex items-center gap-3 rounded-xl px-3 py-2 text-xs font-medium text-muted-foreground hover:bg-muted/60 hover:text-foreground transition-colors"
          >
            <Settings className="size-4" /> Settings
          </button>
        </nav>

        {/* User profile footer */}
        <div className="mt-auto pt-4 border-t border-border/50 flex items-center gap-3 px-2">
          <Avatar className="size-8">
            <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100" />
            <AvatarFallback>AD</AvatarFallback>
          </Avatar>
          <div className="flex flex-col min-w-0">
            <span className="text-xs font-semibold truncate">Alvin Ahmad</span>
            <span className="text-[10px] text-muted-foreground truncate">admin@qalvinui.com</span>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        {/* Top bar */}
        <header className="h-16 border-b border-border/70 bg-card/60 backdrop-blur-md px-6 flex items-center justify-between gap-4 sticky top-0 z-10">
          <div className="flex items-center gap-3 flex-1 max-w-md">
            <div className="relative w-full">
              <Search className="size-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search orders, invoices, customers..."
                className="w-full h-9 pl-9 pr-4 rounded-xl border border-border/70 bg-background text-xs outline-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-muted-foreground"
              />
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <Button variant="outline" size="icon" className="size-9 rounded-xl">
              <Bell className="size-4" />
            </Button>
            <Button
              size="sm"
              className="h-9 px-3.5 rounded-xl font-medium text-white shadow-xs"
              style={{ backgroundColor: primaryColor }}
            >
              <Plus className="size-4 mr-1.5" /> New Order
            </Button>
          </div>
        </header>

        {/* Dashboard Body */}
        <main className="p-6 md:p-8 space-y-6 flex-1">
          {/* Header intro */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Executive Dashboard</h1>
              <p className="text-xs text-muted-foreground mt-0.5">
                Real-time financial performance and customer order activity.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="h-8 rounded-lg text-xs gap-1.5">
                <Filter className="size-3.5" /> Filter
              </Button>
              <Button variant="outline" size="sm" className="h-8 rounded-lg text-xs gap-1.5">
                <Download className="size-3.5" /> Export Report
              </Button>
            </div>
          </div>

          {/* 4 KPI Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="border-border/70 p-5 shadow-2xs">
              <div className="flex items-center justify-between text-muted-foreground">
                <span className="text-xs font-medium">Total Revenue</span>
                <span className="p-1.5 rounded-md bg-muted"><TrendingUp className="size-4" /></span>
              </div>
              <div className="mt-3 text-2xl font-bold tracking-tight">$128,430.00</div>
              <div className="mt-1 flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                <ArrowUpRight className="size-3.5" /> +14.2% vs last month
              </div>
            </Card>

            <Card className="border-border/70 p-5 shadow-2xs">
              <div className="flex items-center justify-between text-muted-foreground">
                <span className="text-xs font-medium">Total Customers</span>
                <span className="p-1.5 rounded-md bg-muted"><Users className="size-4" /></span>
              </div>
              <div className="mt-3 text-2xl font-bold tracking-tight">4,290</div>
              <div className="mt-1 flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                <ArrowUpRight className="size-3.5" /> +8.1% vs last month
              </div>
            </Card>

            <Card className="border-border/70 p-5 shadow-2xs">
              <div className="flex items-center justify-between text-muted-foreground">
                <span className="text-xs font-medium">Conversion Rate</span>
                <span className="p-1.5 rounded-md bg-muted"><BarChart3 className="size-4" /></span>
              </div>
              <div className="mt-3 text-2xl font-bold tracking-tight">3.42%</div>
              <div className="mt-1 flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                <ArrowUpRight className="size-3.5" /> +0.6% vs last week
              </div>
            </Card>

            <Card className="border-border/70 p-5 shadow-2xs">
              <div className="flex items-center justify-between text-muted-foreground">
                <span className="text-xs font-medium">System Uptime</span>
                <span className="p-1.5 rounded-md bg-muted"><CheckCircle2 className="size-4" /></span>
              </div>
              <div className="mt-3 text-2xl font-bold tracking-tight">99.98%</div>
              <div className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
                All 18 service nodes operational
              </div>
            </Card>
          </div>

          {/* Chart + Summary Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="border-border/70 p-6 lg:col-span-2 shadow-2xs">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/50 pb-4">
                <div>
                  <CardTitle className="text-base font-bold">Revenue Dynamics</CardTitle>
                  <CardDescription className="text-xs">Comparison between net sales and processing volume</CardDescription>
                </div>
                <div className="inline-flex rounded-lg border border-border/80 bg-muted/40 p-1">
                  {["7D", "30D", "90D"].map((r) => (
                    <button
                      key={r}
                      type="button"
                      onClick={() => setChartRange(r)}
                      className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all ${
                        chartRange === r
                          ? "bg-background text-foreground shadow-2xs"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>

              {/* Visual simulated bar chart */}
              <div className="mt-6 flex h-48 items-end gap-3 pt-4 px-2">
                {[65, 40, 80, 55, 90, 75, 85, 95, 70, 88, 60, 92].map((height, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-2 group cursor-pointer">
                    <div
                      className="w-full rounded-t-md transition-all group-hover:opacity-85 shadow-2xs"
                      style={{
                        height: `${height}%`,
                        backgroundColor: i === 11 ? primaryColor : "var(--muted-foreground)",
                        opacity: i === 11 ? 1 : 0.25,
                      }}
                    />
                    <span className="text-[10px] text-muted-foreground font-mono">
                      {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][i]}
                    </span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Quick Activity Card */}
            <Card className="border-border/70 p-6 shadow-2xs flex flex-col justify-between">
              <div>
                <CardTitle className="text-base font-bold">Recent System Events</CardTitle>
                <CardDescription className="text-xs">Automated audit notifications</CardDescription>

                <div className="mt-4 space-y-3.5">
                  <div className="flex items-start gap-3 text-xs">
                    <div className="size-2 rounded-full mt-1.5 bg-emerald-500" />
                    <div>
                      <span className="font-semibold text-foreground">Stripe webhook confirmed</span>
                      <p className="text-muted-foreground text-[11px]">Payout $12,400 routed to Chase account</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-xs">
                    <div className="size-2 rounded-full mt-1.5 bg-blue-500" />
                    <div>
                      <span className="font-semibold text-foreground">New API Key created</span>
                      <p className="text-muted-foreground text-[11px]">By admin@qalvinui.com for production</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-xs">
                    <div className="size-2 rounded-full mt-1.5 bg-amber-500" />
                    <div>
                      <span className="font-semibold text-foreground">Database backup completed</span>
                      <p className="text-muted-foreground text-[11px]">42.8 GB compressed to S3 bucket</p>
                    </div>
                  </div>
                </div>
              </div>

              <Button variant="outline" className="mt-6 w-full text-xs font-semibold">
                View Audit Trail
              </Button>
            </Card>
          </div>

          {/* Orders Table */}
          <Card className="border-border/70 shadow-2xs overflow-hidden">
            <div className="p-5 border-b border-border/60 flex flex-wrap items-center justify-between gap-4">
              <div>
                <CardTitle className="text-base font-bold">Recent Orders</CardTitle>
                <CardDescription className="text-xs">Showing latest customer transactions and payment status</CardDescription>
              </div>

              {/* Table Tabs */}
              <div className="inline-flex rounded-lg border border-border/80 bg-muted/40 p-1">
                {["all", "completed", "processing", "pending"].map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setActiveTab(t)}
                    className={`px-3 py-1 text-xs font-medium rounded-md capitalize transition-all ${
                      activeTab === t
                        ? "bg-background text-foreground shadow-2xs"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <Table>
              <TableHeader>
                <TableRow className="bg-muted/30">
                  <TableHead className="w-[120px] text-xs">Order ID</TableHead>
                  <TableHead className="text-xs">Customer</TableHead>
                  <TableHead className="text-xs">Status</TableHead>
                  <TableHead className="text-xs">Date</TableHead>
                  <TableHead className="text-xs">Payment</TableHead>
                  <TableHead className="text-right text-xs">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredOrders.map((order) => (
                  <TableRow key={order.id} className="hover:bg-muted/40 transition-colors">
                    <TableCell className="font-mono text-xs font-semibold">{order.id}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2.5">
                        <Avatar className="size-7">
                          <AvatarImage src={order.avatar} />
                          <AvatarFallback>{order.customer.slice(0, 2)}</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                          <span className="text-xs font-semibold text-foreground">{order.customer}</span>
                          <span className="text-[10px] text-muted-foreground">{order.email}</span>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{getStatusBadge(order.status)}</TableCell>
                    <TableCell className="text-xs text-muted-foreground">{order.date}</TableCell>
                    <TableCell className="text-xs text-muted-foreground">{order.method}</TableCell>
                    <TableCell className="text-right font-semibold text-xs text-foreground">{order.amount}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </main>
      </div>
    </div>
  );
}
