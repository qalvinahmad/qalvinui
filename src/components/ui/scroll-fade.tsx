"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface ScrollFadeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  fadeHeight?: number
  fadeColor?: string
}

function ScrollFade({ 
  children, 
  className, 
  fadeHeight = 40,
  fadeColor,
  ...props 
}: ScrollFadeProps) {
  const scrollRef = React.useRef<HTMLDivElement>(null)
  const [isAtTop, setIsAtTop] = React.useState(true)
  const [isAtBottom, setIsAtBottom] = React.useState(false)

  React.useEffect(() => {
    const scrollElement = scrollRef.current
    if (!scrollElement) return

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = scrollElement
      setIsAtTop(scrollTop === 0)
      setIsAtBottom(scrollTop + clientHeight >= scrollHeight - 1)
    }

    scrollElement.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => scrollElement.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className={cn("relative", className)} {...props}>
      {/* Top fade */}
      {!isAtTop && (
        <div 
          className="absolute top-0 left-0 right-0 z-10 pointer-events-none"
          style={{ 
            height: fadeHeight,
            background: fadeColor || "linear-gradient(to bottom, var(--background), transparent)"
          }}
        />
      )}
      
      {/* Scrollable content */}
      <div 
        ref={scrollRef}
        className="overflow-auto"
        style={{ maxHeight: "400px" }}
      >
        {children}
      </div>
      
      {/* Bottom fade */}
      {!isAtBottom && (
        <div 
          className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none"
          style={{ 
            height: fadeHeight,
            background: fadeColor || "linear-gradient(to top, var(--background), transparent)"
          }}
        />
      )}
    </div>
  )
}

export { ScrollFade }
