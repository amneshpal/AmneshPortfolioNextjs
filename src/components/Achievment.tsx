// 'use client'

// import Link from 'next/link'

// export default function ContactAndCounters() {
//   const counters = [
//     { number: 20, label: 'Achievements' },
//     { number: 20, label: 'Projects' },
//     { number: 250, label: 'LeetCode problems', link: 'https://leetcode.com/u/Amnesh/' },
//     { number: 500, label: 'Cups of coffee', link: 'https://github.com/amneshpal' },
//   ]

//   const socialLinks = [
//     { icon: 'youtube', url: 'https://www.youtube.com/@amneshpal5757' },
//     { icon: 'linkedin', url: 'https://www.linkedin.com/in/amnesh-pal/' },
//     { icon: 'twitter', url: 'https://x.com/Amnesh_Pal_?t=J6sA0_QSMGKF9-ILfJiY8Q&s=08' },
//     { icon: 'instagram', url: 'https://www.instagram.com/amnesh_pal?igsh=ODZzOWJkd2xxZnlz' },
//   ]

//   return (
//     <section className="bg-gray-900 text-white">

//       {/* Counter Section */}
//       <div className="container mx-auto py-16 flex flex-wrap justify-center gap-8">
//         {counters.map((item, idx) => (
//           <div key={idx} className="flex flex-col items-center">
//             <strong className="text-4xl font-bold">{item.number}</strong>
//             {item.link ? (
//               <span>
//                 <a href={item.link} target="_blank" className="hover:underline">{item.label}</a>
//               </span>
//             ) : (
//               <span>{item.label}</span>
//             )}
//           </div>
//         ))}
//       </div>

//       {/* GitHub CTA Section */}
//       <div
//         className="py-20 bg-cover bg-center text-center"
//         style={{ backgroundImage: "url('/bg2.jpg')" }}
//       >
//         <h2 className="text-4xl font-bold">
//           More projects on <span className="text-blue-500">Github</span>
//         </h2>
//         <h4 className="mt-4 text-xl font-medium">I love to solve business problems & uncover hidden data stories</h4>
//         <Link href="https://github.com/amneshpal" target="_blank">
//           <button className="mt-6 px-8 py-3 bg-blue-600 rounded hover:bg-blue-700 transition">
//             GitHub
//           </button>
//         </Link>
//       </div>

//       {/* Contact Section */}
//       <section className="py-16" id="contact-section">
//         <div className="container mx-auto text-center">
//           <h1 className="text-6xl font-bold mb-2 text-blue-500">Contact</h1>
//           <p className="text-gray-300 mb-12">Below are the details to reach out to me!</p>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//             <div className="bg-gray-800 p-6 rounded shadow">
//               <h3 className="text-xl font-semibold mb-2">Address</h3>
//               <p>Gurgaon Haryana, India</p>
//             </div>
//             <div className="bg-gray-800 p-6 rounded shadow">
//               <h3 className="text-xl font-semibold mb-2">Contact Number</h3>
//               <p><a href="tel:+917668775454">+91 7668775454</a></p>
//               <p><a href="tel:+919634580406">+91 9634580406</a></p>
              
//             </div>
//             <div className="bg-gray-800 p-6 rounded shadow">
//               <h3 className="text-xl font-semibold mb-2">Email Address</h3>
//                <p><a href="mailto:amneshpal15@gmail.com">amneshpal15@gmail.com</a></p>
//               <p><a href="mailto:amneshpal016@gmail.com">amneshpal016@gmail.com</a></p>
             
//             </div>
//             <div className="bg-gray-800 p-6 rounded shadow">
//               <h3 className="text-xl font-semibold mb-2">Download Resume</h3>
//               <p>
//                 <a className="text-blue-500 hover:underline" href="/Amnesh_EX.pdf" download>
//                   resumelink
//                 </a>
//               </p>
//             </div>
//           </div>

//           {/* Google Form CTA */}
//           <div className="mt-12">
//             <h2 className="text-2xl font-semibold">
//               Have a <span>Question?</span>{' '}
//               <a
//                 href="https://docs.google.com/forms/d/e/1FAIpQLSc77_u0gfIfbDWEpHh1mfpOAPejkWx73jQwbRfAYzY_AMxMSQ/viewform?usp=sf_link"
//                 target="_blank"
//                 className="btn px-6 py-3 bg-blue-600 rounded hover:bg-blue-700 transition"
//               >
//                 Click Here
//               </a>
//             </h2>
//           </div>

//           {/* Social Links */}
//           <ul className="flex justify-center gap-6 mt-8">
//             {/* <li className="self-center">Find me on</li> */}
//             {socialLinks.map((link, idx) => (
//               <li key={idx}>
//                 <a href={link.url} target="_blank" className="text-white text-2xl hover:text-blue-500">
//                   <span className={`icon-${link.icon}`}></span>
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </section>



//       {/* Loader
//       <div id="ftco-loader" className="show fullscreen flex justify-center items-center">
//         <svg className="circular" width="48px" height="48px">
//           <circle className="path-bg" cx="24" cy="24" r="22" fill="none" strokeWidth="4" stroke="#eeeeee" />
//           <circle className="path" cx="24" cy="24" r="22" fill="none" strokeWidth="4" strokeMiterlimit="10" stroke="#F96D00" />
//         </svg>
//       </div> */}
//     </section>
//   )
// }







'use client'

import Link from 'next/link'

export default function ContactAndCounters() {
  const counters = [
    { number: 20, label: 'Achievements' },
    { number: 20, label: 'Projects' },
    { number: 250, label: 'LeetCode problems', link: 'https://leetcode.com/u/Amnesh/' },
    { number: 500, label: 'Cups of coffee', link: 'https://github.com/amneshpal' },
  ]

  const socialLinks = [
    { icon: 'youtube', url: 'https://www.youtube.com/@amneshpal5757' },
    { icon: 'linkedin', url: 'https://www.linkedin.com/in/amnesh-pal/' },
    { icon: 'twitter', url: 'https://x.com/Amnesh_Pal_?t=J6sA0_QSMGKF9-ILfJiY8Q&s=08' },
    { icon: 'instagram', url: 'https://www.instagram.com/amnesh_pal?igsh=ODZzOWJkd2xxZnlz' },
  ]

  return (
    <section className="bg-gray-900 text-white">

      {/* Counter Section */}
      <div className="container mx-auto px-4 sm:px-8 py-12 sm:py-16 flex flex-wrap justify-center gap-8">
        {counters.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center min-w-[120px]">
            <strong className="text-3xl sm:text-4xl font-bold">{item.number}</strong>
            {item.link ? (
              <span>
                <a href={item.link} target="_blank" className="hover:underline">{item.label}</a>
              </span>
            ) : (
              <span>{item.label}</span>
            )}
          </div>
        ))}
      </div>

      {/* GitHub CTA Section */}
      <div
        className="py-16 sm:py-20 px-4 sm:px-8 bg-cover bg-center text-center"
        style={{ backgroundImage: "url('/bg2.jpg')" }}
      >
        <h2 className="text-2xl sm:text-4xl font-bold">
          More projects on <span className="text-blue-500">Github</span>
        </h2>
        <h4 className="mt-3 sm:mt-4 text-base sm:text-xl font-medium">
          I love to solve business problems & uncover hidden data stories
        </h4>
        <Link href="https://github.com/amneshpal" target="_blank">
          <button className="mt-5 sm:mt-6 px-6 sm:px-8 py-2 sm:py-3 bg-blue-600 rounded hover:bg-blue-700 transition text-sm sm:text-base">
            GitHub
          </button>
        </Link>
      </div>

      {/* Contact Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-8" id="contact-section">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-2 text-blue-500">Contact</h1>
          <p className="text-gray-300 mb-10 sm:mb-12">Below are the details to reach out to me!</p>

          {/* Contact Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="bg-gray-800 p-6 rounded shadow">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Address</h3>
              <p>Gurgaon Haryana, India</p>
            </div>
            <div className="bg-gray-800 p-6 rounded shadow">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Contact Number</h3>
              <p><a href="tel:+917668775454">+91 7668775454</a></p>
              <p><a href="tel:+919634580406">+91 9634580406</a></p>
            </div>
            <div className="bg-gray-800 p-6 rounded shadow">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Email Address</h3>
              <p><a href="mailto:amneshpal15@gmail.com">amneshpal15@gmail.com</a></p>
              <p><a href="mailto:amneshpal016@gmail.com">amneshpal016@gmail.com</a></p>
            </div>
            <div className="bg-gray-800 p-6 rounded shadow">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Download Resume</h3>
              <p>
                <a className="text-blue-500 hover:underline" href="/Amnesh_EX.pdf" download>
                  resumelink
                </a>
              </p>
            </div>
          </div>

          {/* Google Form CTA */}
          <div className="mt-10 sm:mt-12">
            <h2 className="text-lg sm:text-2xl font-semibold leading-relaxed">
              Have a <span>Question?</span>{' '}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSc77_u0gfIfbDWEpHh1mfpOAPejkWx73jQwbRfAYzY_AMxMSQ/viewform?usp=sf_link"
                target="_blank"
                className="inline-block mt-4 sm:mt-0 px-5 sm:px-6 py-2 sm:py-3 bg-blue-600 rounded hover:bg-blue-700 transition text-sm sm:text-base"
              >
                Click Here
              </a>
            </h2>
          </div>

          {/* Social Links */}
          <ul className="flex justify-center gap-6 mt-8">
            {socialLinks.map((link, idx) => (
              <li key={idx}>
                <a href={link.url} target="_blank" className="text-white text-xl sm:text-2xl hover:text-blue-500">
                  <span className={`icon-${link.icon}`}></span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </section>
  )
}
