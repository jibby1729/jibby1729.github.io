import Link from "next/link"
import { FileText } from "lucide-react"

export default function CV() {
  // CUSTOMIZE: Replace with your actual CV Google Drive link
  // To get the file ID from Google Drive:
  // 1. Upload your CV to Google Drive
  // 2. Right-click on the file and select "Get link"
  // 3. Make sure the link is set to "Anyone with the link can view"
  // 4. Copy the ID from the URL - it's the long string between /d/ and /view
  //    Example: In https://drive.google.com/file/d/1a2b3c4d5e6f7g8h9i0j/view
  //             The ID is 1a2b3c4d5e6f7g8h9i0j
  const fileId = "17VyqNNC3vPoyX5q3GVTFmm13tSvI9ylQ" // CHANGE: Replace with your actual Google Drive file ID
  const cvLink = `https://drive.google.com/file/d/${fileId}/preview`
  const cvDownloadLink = `https://drive.google.com/uc?export=download&id=${fileId}`



  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 pb-2 border-b border-border">Curriculum Vitae</h1>

      <div className="bg-card p-6 rounded-lg shadow-md mb-8 border">
        {/* CUSTOMIZE: Update the description if needed */}
        <p className="text-muted-foreground mb-6">
          Below you can view or download my CV (as of 22/05/2025).
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
            className="inline-flex items-center bg-secondary hover:bg-secondary/80 text-secondary-foreground px-4 py-2 rounded-md transition-colors duration-200"
          >
            <FileText className="w-5 h-5 mr-2" />
            Download CV
          </Link>
        </div>
      </div>

      <div className="bg-card p-6 rounded-lg shadow-md border">
        <h2 className="text-xl font-semibold mb-4">CV Preview</h2>

        {/* CUSTOMIZE: The iframe below displays your CV directly on the page */}
        {/* If you're using a locally hosted PDF instead of Google Drive:
            1. Replace the src attribute with your local PDF path
            2. You may need to adjust the height or other styling
        */}
        <div className="w-full h-[600px] bg-muted rounded-md overflow-hidden">
          <iframe src={cvLink} className="w-full h-full" title="CV Preview" allow="autoplay"></iframe>
        </div>
      </div>
    </div>
  )
}
