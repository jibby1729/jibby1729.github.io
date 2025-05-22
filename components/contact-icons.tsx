import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export default function ContactIcons() {
  return (
    <div className="flex justify-center space-x-6 mt-4">
      {/* CUSTOMIZE: Update with your actual email address */}
      <Link
        href="mailto:your.email@mail.utoronto.ca" // CHANGE: Replace with your email
        className="text-gray-300 hover:text-white transition-colors duration-200"
        aria-label="Email"
      >
        <Mail className="w-6 h-6" />
      </Link>

      {/* CUSTOMIZE: Update with your actual GitHub username */}
      <Link
        href="https://github.com/jibby1729" // CHANGE: Verify this is your correct GitHub username
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-300 hover:text-white transition-colors duration-200"
        aria-label="GitHub"
      >
        <Github className="w-6 h-6" />
      </Link>

      {/* CUSTOMIZE: Update with your actual LinkedIn profile URL */}
      <Link
        href="https://linkedin.com/in/yourusername" // CHANGE: Replace with your LinkedIn URL
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-300 hover:text-white transition-colors duration-200"
        aria-label="LinkedIn"
      >
        <Linkedin className="w-6 h-6" />
      </Link>
    </div>
  )
}
