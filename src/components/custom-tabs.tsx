"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface TabsContextValue {
  activeTab: string;
  setActiveTab: (value: string) => void;
}

const TabsContext = React.createContext<TabsContextValue | undefined>(undefined);

function useTabs() {
  const context = React.useContext(TabsContext);
  if (!context) {
    throw new Error("Tabs components must be used within a Tabs provider");
  }
  return context;
}

interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultValue?: string;
}

export function Tabs({ defaultValue, children, className, ...props }: TabsProps) {
  const [activeTab, setActiveTab] = React.useState(defaultValue || "");

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className={cn("w-full", className)} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  );
}

export function TabsList({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function TabsTrigger({
  value,
  children,
  className,
  ...props
}: any) {
  const { activeTab, setActiveTab } = useTabs();
  const isActive = activeTab === value;
  
  return (
    <button
      type="button"
      role="tab"
      aria-selected={isActive}
      data-state={isActive ? "active" : "inactive"}
      onClick={() => setActiveTab(value)}
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-xs font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
        isActive 
          ? "bg-background text-foreground shadow-xs font-semibold data-[state=active]:border-foreground" 
          : "text-muted-foreground hover:text-foreground hover:bg-muted/50",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export function TabsContent({ value, children, className, ...props }: any) {
  const { activeTab } = useTabs();
  const isActive = activeTab === value;
  
  if (!isActive) return null;
  return (
    <div
      role="tabpanel"
      data-state={isActive ? "active" : "inactive"}
      className={cn(
        "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 animate-in fade-in-50 duration-200",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
