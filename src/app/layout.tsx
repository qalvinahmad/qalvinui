import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Qalvin UI - Modern Design System & Components",
  description: "Next-gen accessible, highly customizable UI components built with React and Tailwind CSS.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
      { url: "/icons.png", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400..900&family=Fira+Code:wght@400..700&family=Geist+Mono:wght@400..700&family=Geist:wght@400..800&family=IBM+Plex+Mono:wght@400..700&family=Inter:wght@400..900&family=JetBrains+Mono:wght@400..800&family=Lato:wght@400..900&family=Lora:ital,wght@0,400..700;1,400..700&family=Merriweather:ital,wght@0,400..900;1,400..900&family=Montserrat:wght@400..900&family=Open+Sans:wght@400..800&family=Outfit:wght@400..900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Plus+Jakarta+Sans:wght@400..800&family=Poppins:wght@400..900&family=Roboto:wght@400..900&family=Source+Code+Pro:wght@400..900&family=Space+Grotesk:wght@400..700&family=Space+Mono:wght@400..700&family=Syne:wght@400..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${urbanist.variable} font-sans min-h-full flex flex-col bg-background text-foreground antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-background focus:text-foreground focus:ring-2 focus:ring-ring focus:shadow-md focus:rounded-md text-sm font-medium"
        >
          Skip to main content
        </a>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SiteHeader />
          <div id="main-content" className="flex-1">
            {children}
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
