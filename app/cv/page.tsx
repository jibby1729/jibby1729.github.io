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

  // CUSTOMIZE: If you prefer to host your CV directly in your repository:
  // 1. Add your CV PDF to the public folder (e.g., public/Jibran_Iqbal_Shah_CV.pdf)
  // 2. Comment out the Google Drive code above
  // 3. Uncomment and use the following code instead:
  /*
  const cvLink = "/Jibran_Iqbal_Shah_CV.pdf"
  const cvDownloadLink = "/Jibran_Iqbal_Shah_CV.pdf"
  */

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 pb-2 border-b border-gray-700">Curriculum Vitae</h1>

      <div className="bg-gray-800 p-6 rounded-lg shadow-md mb-8">
        {/* CUSTOMIZE: Update the description if needed */}
        <p className="text-gray-300 mb-6">
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
            className="inline-flex items-center bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md transition-colors duration-200"
          >
            <FileText className="w-5 h-5 mr-2" />
            Download CV
          </Link>
        </div>
      </div>

      <div className="bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">CV Preview</h2>

        {/* CUSTOMIZE: The iframe below displays your CV directly on the page */}
        {/* If you're using a locally hosted PDF instead of Google Drive:
            1. Replace the src attribute with your local PDF path
            2. You may need to adjust the height or other styling
        */}
        <div className="w-full h-[600px] bg-gray-700 rounded-md overflow-hidden">
          <iframe src={cvLink} className="w-full h-full" title="CV Preview" allow="autoplay"></iframe>
        </div>
      </div>
    </div>
  )
}
