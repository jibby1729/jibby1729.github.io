export default function Publications() {
  // CUSTOMIZE: Replace with your actual publications
  // Format: title, authors, journal, year, doi, link
  // For each publication, create an object in this array with the following properties:
  // - title: The title of your publication
  // - authors: All authors (including yourself)
  // - journal: The journal or conference name
  // - year: Publication year
  // - doi: Digital Object Identifier (if available)
  // - link: URL to the publication (can be DOI link, journal page, or PDF)
  const publications = [
    {
      title: "Fourier Analysis and the closed form for the Zeta Function at even positive integers", // CHANGE: Replace with your publication title
      authors: "Jibran Iqbal Shah", // CHANGE: Replace with actual authors, keeping your name first
      journal: "arXiv Preprint", // CHANGE: Replace with actual journal
      year: 2020, // CHANGE: Replace with actual year
      link: "https://arxiv.org/abs/2012.00603", // CHANGE: Replace with actual link
    },
    // CUSTOMIZE: Add more publications by copying the object structure above
    // To add a new publication, copy one of the objects above and paste it here
    // Then update all the fields with the information for your new publication
    // Make sure to add a comma after each object except the last one
  ]

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 pb-2 border-b border-gray-700">Publications</h1>

      <div className="space-y-8">
        {publications.map((pub, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">
              <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-400 hover:text-red-300 transition-colors duration-200"
              >
                {pub.title}
              </a>
            </h2>
            <p className="text-gray-300 mb-2">{pub.authors}</p>
            <p className="text-gray-400 mb-2">
              {pub.journal}, {pub.year}
            </p>
            <p className="text-gray-400">DOI: {pub.doi}</p>
          </div>
        ))}

        {publications.length === 0 && <p className="text-gray-400 italic">Publications will be listed here.</p>}
      </div>

      {/* CUSTOMIZE: To change the layout or style of publications:
          1. Modify the div with className="bg-gray-800 p-6 rounded-lg shadow-md"
          2. Adjust the spacing, colors, or arrangement of elements
          3. Add additional fields if needed (e.g., abstract, citation count, etc.)
      */}
    </div>
  )
}
