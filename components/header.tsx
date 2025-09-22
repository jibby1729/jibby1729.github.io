"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Header() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path ? "text-foreground border-b-2 border-red-500" : "text-muted-foreground hover:text-foreground"
  }

  return (
    <header className="bg-card shadow-md border-b">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          {/* CUSTOMIZE: Change the website title */}
          <Link href="/" className="text-xl font-bold text-foreground">
            Jibran Iqbal Shah {/* CHANGE: Already updated with your name */}
          </Link>
          <div className="flex space-x-8">
            {/* CUSTOMIZE: You can add or remove navigation links here */}
            {/* To add a new page: 
                1. Create a new file in the app directory (e.g., app/new-page/page.tsx)
                2. Add a new Link element here pointing to that page
            */}
            <Link href="/" className={`${isActive("/")} transition-colors duration-200`}>
              Home
            </Link>
            <Link href="/publications" className={`${isActive("/publications")} transition-colors duration-200`}>
              Publications
            </Link>
            <Link href="/projects" className={`${isActive("/projects")} transition-colors duration-200`}>
              Projects/Expositions
            </Link>
            <Link href="/cv" className={`${isActive("/cv")} transition-colors duration-200`}>
              CV
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
