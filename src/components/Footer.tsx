// 'use client'
// export default function Footer() {
//   return (
//     <footer className="bg-dark py-8 mt-16 text-center">
//       <p className="text-gray-400 mb-2">© 2025 Amnesh Pal | Built with Next.js + TailwindCSS</p>
//       <div className="flex justify-center space-x-4">
//         <a href="#" className="text-primary hover:underline">GitHub</a>
//         <a href="#" className="text-primary hover:underline">LinkedIn</a>
//         <a href="#" className="text-primary hover:underline">YouTube</a>
//       </div>
//     </footer>
//   )
// }




'use client'
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-8 mt-16">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left - Copyright */}
        <p className="text-sm mb-4 md:mb-0 text-center md:text-left">
          © {new Date().getFullYear()} <span className="text-white font-semibold">Amnesh Pal</span> | Built with <span className="text-blue-500">Next.js</span> + <span className="text-sky-400">TailwindCSS</span>
        </p>

        {/* Right - Social Links */}
        <div className="flex space-x-6">
          <a href="https://github.com/amneshpal" target="_blank" rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors">
            <FaGithub size={22} />
          </a>
          <a href="https://www.linkedin.com/in/amnesh-pal/" target="_blank" rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition-colors">
            <FaLinkedin size={22} />
          </a>
          <a href="https://www.youtube.com/@amneshpal5757" target="_blank" rel="noopener noreferrer"
            className="text-gray-400 hover:text-red-500 transition-colors">
            <FaYoutube size={22} />
          </a>
        </div>
      </div>
    </footer>
  )
}
