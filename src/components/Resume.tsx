'use client'

import Link from 'next/link'

export default function ResumeSection() {
  return (
    <section
      id="resume-section"
      className="min-h-auto md:min-h-screen px-4 sm:px-8 py-12 md:py-16 bg-gray-900 text-white flex flex-col justify-center"
    >
      <div className="container mx-auto text-center">

        {/* Section Heading */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-500 mb-2">Resume</h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">Resume</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            With almost 1 year of training experience in web development and software engineering,
            I am confident I will be an excellent fit for the next Software Engineer role.
          </p>
        </div>

        {/* Download Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-6 md:mt-10">
          <Link href="/Amnesh_EX.pdf" target="_blank" download>
            <button className="w-full sm:w-auto px-8 py-4 bg-blue-600 rounded hover:bg-blue-700 transition text-white font-semibold">
              Download Resume
            </button>
          </Link>
          <Link href="/amneshcoverletter.pdf" target="_blank" download>
            <button className="w-full sm:w-auto px-8 py-4 bg-blue-600 rounded hover:bg-blue-700 transition text-white font-semibold">
              Download Cover Letter
            </button>
          </Link>
        </div>

      </div>
    </section>
  )
}
