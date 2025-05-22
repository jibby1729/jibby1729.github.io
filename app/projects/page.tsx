import Link from "next/link"
import { Github, FileText } from "lucide-react"

export default function Projects() {
  // CUSTOMIZE: Replace with your actual projects and expositions
  // For each project, create an object in this array with the following properties:
  // - title: The title of your project or exposition
  // - description: A detailed description of the project
  // - tags: An array of keywords/categories for the project
  // - github: URL to the GitHub repository (optional, remove if not applicable)
  // - driveLink: URL to a Google Drive document or other resource (optional)
  const projects = [
    {
      title: "Solvable Lie Algebra Web Symbolic Calculator in C++", // CHANGE: Replace with your project title
      description:
        "TODO: insert description", // CHANGE: Replace with your project description
      tags: ["C++", "JavaScript", "MATLAB"], // CHANGE: Replace with relevant tags
      github: "https://github.com/jibby1729/JosephRepkasSpecialMatrixCalculator", // CHANGE: Replace with your GitHub repo URL or remove if not applicable
    },
    {
      title: "Functional Analytic Proof of PNT", // CHANGE: Replace with your exposition title
      description:
        "Writeup of all the details of a functional analytic proof of PNT sketched out in Terry Tao's blog", // CHANGE: Replace with your exposition description
      tags: ["Pure Math", "LaTeX", "Academic Writing"], // CHANGE: Replace with relevant tags
      driveLink: "https://drive.google.com/drive/folders/1a9KCHCzP8l1DYxWZEd717bQauuOiuQD7?usp=sharing", // CHANGE: Replace with your Google Drive link
    },
    // CUSTOMIZE: Add more projects by copying the object structure above
    // To add a new project, copy one of the objects above and paste it here
    // Then update all the fields with the information for your new project
    // Make sure to add a comma after each object except the last one
  ]

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 pb-2 border-b border-gray-700">Projects & Expositions</h1>

      <div className="space-y-10">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-3">{project.title}</h2>

            <p className="text-gray-300 mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              {project.github && (
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-white transition-colors duration-200"
                >
                  <Github className="w-5 h-5 mr-2" />
                  GitHub Repository
                </Link>
              )}

              {project.driveLink && (
                <Link
                  href={project.driveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-white transition-colors duration-200"
                >
                  <FileText className="w-5 h-5 mr-2" />
                  View Document
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
    </div>
  )
}
