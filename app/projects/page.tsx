import Link from "next/link"
import { Github, FileText, BookOpen } from "lucide-react"
// import { getAllExpositions } from "@/lib/expositions"

export default function Projects() {
  // CUSTOMIZE: Replace with your actual projects
  // For each project, create an object in this array with the following properties:
  // - title: The title of your project
  // - description: A detailed description of the project
  // - tags: An array of keywords/categories for the project
  // - github: URL to the GitHub repository (optional, remove if not applicable)
  // - driveLink: URL to a Google Drive document or other resource (optional)
  const projects = [
    {
      title: "Solvable Lie Algebra Web Symbolic Calculator in C++", // CHANGE: Replace with your project title
      description:
        "A fast C++ based symbolic algebra calculator for Lie Algebra computations.", // CHANGE: Replace with your project description
      tags: ["C++", "JavaScript", "MATLAB"], // CHANGE: Replace with relevant tags
      github: "https://github.com/jibby1729/JosephRepkasSpecialMatrixCalculator", // CHANGE: Replace with your GitHub repo URL or remove if not applicable
    },
    {
      title: "Functional Analytic Proof of PNT", // CHANGE: Replace with your exposition title
      description:
        "Writeup of all the details of a functional analytic proof of the Prime Number Theorem sketched out in Terry Tao's blog", // CHANGE: Replace with your exposition description
      tags: ["Pure Math", "LaTeX", "Academic Writing"], // CHANGE: Replace with relevant tags
      driveLink: "https://drive.google.com/drive/folders/1a9KCHCzP8l1DYxWZEd717bQauuOiuQD7?usp=sharing", // CHANGE: Replace with your Google Drive link
    },
    // CUSTOMIZE: Add more projects by copying the object structure above
    // To add a new project, copy one of the objects above and paste it here
    // Then update all the fields with the information for your new project
    // Make sure to add a comma after each object except the last one
  ]

  // Get expositions from the data structure
  // const expositions = getAllExpositions()

  // Transform expositions to match the project structure
  // const expositionItems = expositions.map(exposition => ({
  //   title: exposition.title,
  //   description: exposition.description,
  //   tags: exposition.tags,
  //   expositionSlug: exposition.slug, // Internal link to exposition
  //   date: exposition.date,
  //   readTime: exposition.readTime
  // }))

  // Combine projects and expositions
  const allItems = [...projects] // Remove expositionItems from here

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 pb-2 border-b border-border">Projects & Expositions</h1>

      <div className="space-y-10">
        {allItems.map((item, index) => (
          <div key={index} className="bg-card p-6 rounded-lg shadow-md border">
            <h2 className="text-2xl font-semibold mb-3">{item.title}</h2>

            <p className="text-muted-foreground mb-4">{item.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {item.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              {(item as any).github && (
                <Link
                  href={(item as any).github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  <Github className="w-5 h-5 mr-2" />
                  GitHub Repository
                </Link>
              )}

              {(item as any).driveLink && (
                <Link
                  href={(item as any).driveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  <FileText className="w-5 h-5 mr-2" />
                  View Document
                </Link>
              )}

              {(item as any).expositionSlug && (
                <Link
                  href={`/expositions/${(item as any).expositionSlug}`}
                  className="flex items-center text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  <BookOpen className="w-5 h-5 mr-2" />
                  Read Exposition
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* CUSTOMIZE: To add different types of links or resources:
          1. Import the appropriate icon from lucide-react at the top of this file
          2. Add a new property to your project objects (e.g., videoLink, slideLink)
          3. Create a new conditional Link element similar to the github and driveLink ones
      */}
      
      {/* EXPOSITIONS: Internal expositions are automatically loaded from /lib/expositions.ts
          To add a new exposition:
          1. Add a new exposition object to the expositions array in /lib/expositions.ts
          2. It will automatically appear here with a "Read Exposition" link
      */}
    </div>
  )
}
