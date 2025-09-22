import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

// CUSTOMIZE: Update the metadata with your name and description
export const metadata: Metadata = {
  title: "Academic Portfolio | Jibran Iqbal Shah", // CHANGE: Already updated with your name
  description: "Academic portfolio for Jibran Iqbal Shah, a University of Toronto masters student", // CHANGE: Already updated with your name
  // CUSTOMIZE: Add favicon metadata (optional but recommended)
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* CUSTOMIZE: You can also add favicon links directly in the head if needed */}
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={`${inter.className} min-h-screen`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="container mx-auto px-4 py-8">{children}</main>
          <footer className="container mx-auto px-4 py-6 text-center text-muted-foreground text-sm">
            {/* CUSTOMIZE: Update the footer text if needed */}© {new Date().getFullYear()} - Jibran Iqbal Shah | Academic
            Portfolio
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}
