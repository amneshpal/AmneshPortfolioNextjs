// 'use client'

// import Link from 'next/link'
// import { useState } from 'react'

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false)

//   const links = [
//     { name: 'Home', href: '#home-section' },
//     { name: 'About', href: '#about-section' },
//     { name: 'Resume', href: '#resume-section' },
//     { name: 'Projects', href: '#project-section' },
//     { name: 'Contact', href: '#contact-section' },
//   ]

//   return (
//     <nav className="fixed top-0 left-0 w-full bg-dark z-50 text-white shadow-md">
//       <div className="container mx-auto flex items-center justify-between p-4">
//         {/* Brand */}
//         <Link href="#home-section" className="text-primary font-bold text-xl">
//           Amnesh Pal
//         </Link>

//         {/* Desktop Links */}
//         <ul className="hidden md:flex space-x-6">
//           {links.map((link) => (
//             <li key={link.name}>
//               <Link href={link.href} className="hover:text-blue-500 transition">
//                 {link.name}
//               </Link>
//             </li>
//           ))}
//         </ul>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden">
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="focus:outline-none text-2xl text-primary"
//           >
//             &#9776; {/* Hamburger icon */}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-dark w-full px-4 pb-4">
//           <ul className="flex flex-col space-y-2">
//             {links.map((link) => (
//               <li key={link.name}>
//                 <Link
//                   href={link.href}
//                   className="block py-2 text-center hover:text-blue-500 transition"
//                   onClick={() => setIsOpen(false)} // close menu on click
//                 >
//                   {link.name}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </nav>
//   )
// }




'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('#home-section')

  const links = [
    { name: 'Home', href: '#home-section' },
    { name: 'About', href: '#about-section' },
    { name: 'Resume', href: '#resume-section' },
    { name: 'Projects', href: '#project-section' },
    { name: 'Contact', href: '#contact-section' },
  ]

  // Highlight active link on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100
      for (const link of links) {
        const section = document.querySelector(link.href)
        if (section) {
          const offsetTop = section.getBoundingClientRect().top + window.scrollY
          const offsetBottom = offsetTop + section.clientHeight
          if (scrollPos >= offsetTop && scrollPos < offsetBottom) {
            setActiveLink(link.href)
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/90 backdrop-blur-sm z-50 text-white shadow-md transition-all">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Brand */}
        <Link href="#home-section" className="text-blue-500 font-bold text-xl">
          Amnesh Pal
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className={`hover:text-blue-400 transition ${
                  activeLink === link.href ? 'text-blue-500 font-semibold' : ''
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none text-2xl text-blue-500"
          >
            {isOpen ? '✖' : '☰'} {/* X / Hamburger */}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black w-full px-4 pb-4 transition-all">
          <ul className="flex flex-col space-y-2">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`block py-2 text-center hover:text-blue-400 transition ${
                    activeLink === link.href ? 'text-blue-500 font-semibold' : ''
                  }`}
                  onClick={() => setIsOpen(false)} // close menu on click
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
