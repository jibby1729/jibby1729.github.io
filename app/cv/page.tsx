import Link from "next/link"
import { FileText } from "lucide-react"

export default function CV() {
  // CUSTOMIZE: Replace with your actual CV Google Drive link
  // To get the file ID: In Google Drive, right-click on your CV, select "Get link", and copy the ID from the URL
  // The ID is the part after /d/ and before /view
  const fileId = "17VyqNNC3vPoyX5q3GVTFmm13tSvI9ylQ" // CHANGE: Replace with your actual Google Drive file ID
  const cvLink = `https://drive.google.com/file/d/${fileId}/preview`
  const cvDownloadLink = `https://drive.google.com/uc?export=download&id=${fileId}`

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 pb-2 border-b border-gray-700">Curriculum Vitae</h1>

      <div className="bg-gray-800 p-6 rounded-lg shadow-md mb-8">
        {/* CUSTOMIZE: Update the description if needed */}
        <p className="text-gray-300 mb-6">
          Below you can view or download my current CV (as of 22/05/2025)
        </p>

        <div className="flex flex-wrap gap-4">
          <Link
            href={cvLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition-colors duration-200"
          >
            <FileText className="w-5 h-5 mr-2" />
            View CV Online
          </Link>

          <Link
            href={cvDownloadLink}
            className="inline-flex items-center bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md transition-colors duration-200"
          >
            <FileText className="w-5 h-5 mr-2" />
            Download CV
          </Link>
        </div>
      </div>

      <div className="bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">CV Preview</h2>

        <div className="w-full h-[600px] bg-gray-700 rounded-md overflow-hidden">
          <iframe src={cvLink} className="w-full h-full" title="CV Preview" allow="autoplay"></iframe>
        </div>
      </div>
    </div>
  )
}
