export default function Publications() {
  // CUSTOMIZE: Replace with your actual publications
  // Format: title, authors, journal, year, doi, link
  const publications = [
    {
      title: "Example Publication Title 1", // CHANGE: Replace with your publication title
      authors: "Your Name, Co-author Name", // CHANGE: Replace with actual authors
      journal: "Journal of Example Studies", // CHANGE: Replace with actual journal
      year: 2023, // CHANGE: Replace with actual year
      doi: "10.1234/example.1234", // CHANGE: Replace with actual DOI
      link: "https://doi.org/10.1234/example.1234", // CHANGE: Replace with actual link
    },
    {
      title: "Example Publication Title 2", // CHANGE: Replace with your publication title
      authors: "Your Name, Co-author Name, Another Author", // CHANGE: Replace with actual authors
      journal: "International Conference on Example Research", // CHANGE: Replace with actual journal/conference
      year: 2022, // CHANGE: Replace with actual year
      doi: "10.1234/example.5678", // CHANGE: Replace with actual DOI
      link: "https://doi.org/10.1234/example.5678", // CHANGE: Replace with actual link
    },
    // CUSTOMIZE: Add more publications by copying the object structure above
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
    </div>
  )
}
