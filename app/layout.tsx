import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"

const inter = Inter({ subsets: ["latin"] })

// CUSTOMIZE: Update the metadata with your name and description
export const metadata: Metadata = {
  title: "Academic Portfolio | Jibran Iqbal Shah", // CHANGE: Already updated with your name
  description: "Jibran's Website", // CHANGE: Already updated with your name
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900 text-gray-100 min-h-screen`}>
        <Header />
        <main className="container mx-auto px-4 py-8">{children}</main>
        <footer className="container mx-auto px-4 py-6 text-center text-gray-400 text-sm">
          {/* CUSTOMIZE: Update the footer text if needed */}© {new Date().getFullYear()} - Jibran Iqbal Shah | Academic
          Portfolio
        </footer>
      </body>
    </html>
  )
}
