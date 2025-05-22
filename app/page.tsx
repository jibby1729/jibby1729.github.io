import Image from "next/image"
import ContactIcons from "@/components/contact-icons"

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex flex-col items-center text-center mb-12">
        {/* CUSTOMIZE: Replace with your actual profile photo */}
        {/* To update your profile photo:
            1. Add your photo to the public folder (e.g., public/jibran-photo.jpg)
            2. Update the src path below to point to your photo
            3. Make sure the photo is square or crop it to be square for best results
        */}
        <div className="relative w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-gray-700">
          <Image
            src="/placeholder.svg?height=400&width=400" // CHANGE: Replace with "/jibran-photo.jpg" or similar
            alt="Jibran Iqbal Shah" // CHANGE: Already updated with your name
            fill
            className="object-cover"
            priority
          />
        </div>
        {/* CUSTOMIZE: Update with your name and title */}
        <h1 className="text-3xl font-bold mb-2">Jibran Iqbal Shah</h1> {/* CHANGE: Already updated with your name */}
        <h2 className="text-xl text-gray-300 mb-4">Masters Student, University of Toronto</h2>{" "}
        {/* CHANGE: Update with your specific program/department if needed */}
        <ContactIcons />
      </div>

      <div className="prose prose-invert max-w-none">
        {/* CUSTOMIZE: Update with your personal introduction */}
        {/* This is the main content of your home page. Replace the placeholder text with:
            1. Your research focus and interests
            2. Your academic background
            3. Your career goals (e.g., PhD programs you're interested in)
            4. Any other personal information you want to share
        */}
        <p className="text-lg">
          Welcome to my website. I am an incoming Masters student in the ECE department at the University of Toronto. As an Undergraduate, I studied Mathematics and Computer Science at the University of Toronto. For the summer, I am working under the supervision of Florian Shkurti as part of the RVL Lab on uncertainty calibration in perception based motion planners. Previously, I worked as a Summer Research Intern at the Fields Institute, working under the supervision of Asif Zaman on research in Probability Theory. 
        </p>

        {/* CUSTOMIZE: Update with additional information about yourself */}
        {/* You can add multiple paragraphs, lists, or other content here */}
        <p className="mt-4">
          On this site, you can explore my publications/preprints, projects, and academic expositions. Feel free to reach
          out (preferably by emailing me) if you have any questions or would like to discuss potential collaborations.
        </p>

        {/* CUSTOMIZE: To add more sections to your home page:
            1. Create new div elements with appropriate headings
            2. Add your content within these sections
            3. Use Tailwind classes for styling (e.g., mt-8, mb-4, etc.)
        */}
      </div>
    </div>
  )
}
