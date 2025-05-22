import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"

const inter = Inter({ subsets: ["latin"] })

// CUSTOMIZE: Update the metadata with your name and description
export const metadata: Metadata = {
  title: "Academic Portfolio | Your Name", // CHANGE: Replace with your name
  description: "Academic portfolio for a University of Toronto masters student", // CHANGE: Update with your description
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900 text-gray-100 min-h-screen`}>
        <Header />
        <main className="container mx-auto px-4 py-8">{children}</main>
        <footer className="container mx-auto px-4 py-6 text-center text-gray-400 text-sm">
          {/* CUSTOMIZE: Update the footer text if needed */}© {new Date().getFullYear()} - Your Name | Academic
          Portfolio {/* CHANGE: Replace with your name */}
        </footer>
      </body>
    </html>
  )
}
