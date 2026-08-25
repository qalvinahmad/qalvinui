"use client"

import * as React from "react"
import { DayPicker } from "react-day-picker"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-4 bg-card rounded-2xl border border-border shadow-sm inline-block", className)}
      classNames={{
        months: "flex flex-col sm:flex-row gap-4",
        month: "space-y-4",
        month_caption: "flex justify-center pt-1 relative items-center mb-2",
        caption_label: "text-sm font-semibold text-foreground",
        nav: "space-x-1 flex items-center",
        button_previous: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-70 hover:opacity-100 absolute left-1 top-0 rounded-lg"
        ),
        button_next: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-70 hover:opacity-100 absolute right-1 top-0 rounded-lg"
        ),
        month_grid: "w-full border-collapse space-y-1",
        weekdays: "flex justify-between mb-2",
        weekday:
          "text-muted-foreground rounded-md w-9 font-medium text-[0.8rem] text-center",
        week: "flex w-full mt-1 justify-between gap-1",
        day: "h-9 w-9 p-0 font-normal text-center text-sm rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        day_button: "h-9 w-9 p-0 font-normal rounded-lg flex items-center justify-center w-full h-full",
        selected:
          "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground font-semibold rounded-lg",
        today: "bg-muted text-foreground font-bold border border-border/80",
        outside:
          "day-outside text-muted-foreground opacity-40 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
        disabled: "text-muted-foreground opacity-30 cursor-not-allowed",
        range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground rounded-none",
        hidden: "invisible",
        ...classNames,
      }}
      components={{
        Chevron: ({ orientation }) => {
          if (orientation === "left") {
            return <ChevronLeft className="h-4 w-4" />
          }
          return <ChevronRight className="h-4 w-4" />
        },
      }}
      {...props}
    />
  )
}
Calendar.displayName = "Calendar"

export { Calendar }
