import Image from "next/image"
import ContactIcons from "@/components/contact-icons"

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex flex-col items-center text-center mb-12">
        {/* CUSTOMIZE: Replace with your actual profile photo */}
        {/* To update: Add your photo to the public folder and update the src path */}
        <div className="relative w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-gray-700">
          <Image
            src="/placeholder.svg?height=400&width=400" // CHANGE: Replace with "/your-photo.jpg"
            alt="Profile Photo" // CHANGE: Update alt text with your name
            fill
            className="object-cover"
            priority
          />
        </div>
        {/* CUSTOMIZE: Update with your name and title */}
        <h1 className="text-3xl font-bold mb-2">Your Name</h1> {/* CHANGE: Replace with your name */}
        <h2 className="text-xl text-gray-300 mb-4">Masters Student, University of Toronto</h2>{" "}
        {/* CHANGE: Update with your title/position */}
        <ContactIcons />
      </div>

      <div className="prose prose-invert max-w-none">
        {/* CUSTOMIZE: Update with your personal introduction */}
        <p className="text-lg">
          Welcome to my academic portfolio. I am currently a Masters student at the University of Toronto, focusing on
          [your research area]. I am passionate about [your interests] and am applying to PhD programs to further my
          research in this field.
        </p>

        {/* CUSTOMIZE: Update with additional information about yourself */}
        <p className="mt-4">
          On this site, you can explore my publications, research projects, and academic expositions. Feel free to reach
          out if you have any questions or would like to discuss potential collaborations.
        </p>
      </div>
    </div>
  )
}
