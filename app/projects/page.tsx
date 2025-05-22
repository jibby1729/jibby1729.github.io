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
      title: "Research Project 1", // CHANGE: Replace with your project title
      description:
        "This is a detailed description of the first research project. It includes the methodology, findings, and implications of the research. The project focused on [specific area] and contributed to the field by [specific contribution].", // CHANGE: Replace with your project description
      tags: ["Machine Learning", "Data Analysis", "Research"], // CHANGE: Replace with relevant tags
      github: "https://github.com/jibby1729/project1", // CHANGE: Replace with your GitHub repo URL or remove if not applicable
      driveLink: "https://drive.google.com/file/d/example1", // CHANGE: Replace with your Google Drive link or remove if not applicable
    },
    {
      title: "Academic Exposition on Topic X", // CHANGE: Replace with your exposition title
      description:
        "An in-depth exposition on Topic X, exploring the theoretical foundations and practical applications. This work synthesizes current research and proposes new directions for investigation.", // CHANGE: Replace with your exposition description
      tags: ["Theory", "Literature Review", "Academic Writing"], // CHANGE: Replace with relevant tags
      driveLink: "https://drive.google.com/file/d/example2", // CHANGE: Replace with your Google Drive link
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
