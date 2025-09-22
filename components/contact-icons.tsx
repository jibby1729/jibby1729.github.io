import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export default function ContactIcons() {
  return (
    <div className="flex justify-center space-x-6 mt-4" suppressHydrationWarning>
      {/* CUSTOMIZE: Update with your actual email address */}
      <Link
        href="mailto:jibraniqbal.shah@mail.utoronto.ca" // CHANGE: Replace with your email (e.g., jibran.shah@mail.utoronto.ca)
        className="text-muted-foreground hover:text-foreground transition-colors duration-200"
        aria-label="Email"
      >
        <Mail className="w-6 h-6" />
      </Link>

      {/* CUSTOMIZE: Update with your actual GitHub username */}
      <Link
        href="https://github.com/jibby1729" // CHANGE: This appears to be your correct GitHub username
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-foreground transition-colors duration-200"
        aria-label="GitHub"
      >
        <Github className="w-6 h-6" />
      </Link>

      {/* CUSTOMIZE: Update with your actual LinkedIn profile URL */}
      <Link
        href="https://www.linkedin.com/in/jibran-iqbal-shah/" // CHANGE: Replace with your LinkedIn URL (e.g., https://linkedin.com/in/jibran-iqbal-shah)
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-foreground transition-colors duration-200"
        aria-label="LinkedIn"
      >
        <Linkedin className="w-6 h-6" />
      </Link>

      {/* CUSTOMIZE: To add more social icons:
          1. Import the icon from lucide-react at the top of this file
          2. Copy one of the Link blocks above and modify it
          3. Change the icon component and href URL
      */}
    </div>
  )
}
