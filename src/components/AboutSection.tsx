// 'use client'

// import Image from 'next/image'

// export default function AboutSection() {
//   const skills = [
//     { name: 'Python', value: 95 },
//     { name: 'SQL', value: 90 },
//     { name: 'JavaScript', value: 85 },
//     { name: 'React.js', value: 80 },
//     { name: 'Node.js', value: 75 },
//     { name: 'Nest.js', value: 70 },
//     { name: 'Next.js', value: 65 },
//   ]

//   const aboutInfo = [
//     { label: 'Profile', value: 'Engineer & Developer' },
//     { label: 'Domain', value: 'Retail, Ecommerce, BFSI & Digital Marketing' },
//     { label: 'Education', value: "Master's of Computer Application (MCA)" },
//     { label: 'Language', value: 'English, Hindi' },
//     { label: 'Skills', value: 'C++ || Python || SQL || JavaScript || Node.js || Nest.js || React.js || Next.js' },
//     { label: 'Other Skills', value: "Cloud, AWS DSA, API's, Git, Flask, Django, TypeScript & Express.js" },
//     { label: 'Interest', value: 'Traveling, Photography, Teaching' },
//   ]

//   return (
//     <section id="about-section" className="min-h-screen flex flex-col lg:flex-row items-center px-8 py-16 bg-black text-white">
      
//       {/* Left: Profile Image + Basic Info */}
//       <div className="lg:w-5/12 flex flex-col items-center lg:items-start mb-12 lg:mb-0 space-y-6">
//         <div className="flex flex-row items-center space-x-6">
//           {/* Profile Image */}
//           <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-lg flex-shrink-0">
//             <Image
//               src="/amnesh2.jpeg"
//               alt="Amnesh Pal"
//               fill
//               sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
//               className="object-cover"
//             />
//             <div className="absolute inset-0 bg-black opacity-30 rounded-full"></div>
//           </div>

//           {/* Basic Info */}
//           <div className="space-y-2 text-left max-w-xs">
//             <p><span className="font-semibold">Name: </span> Amnesh Pal</p>
//             <p><span className="font-semibold">Job Role: </span> Backend Developer</p>
//             <p><span className="font-semibold">Experience: </span> 1.6 Year</p>
//             <p><span className="font-semibold">Address: </span> Gurgaon, Haryana, India</p>
//           </div>
//         </div>

//         {/* Skills */}
//         <div className="w-full max-w-xs space-y-3 mt-4">
//           <h3 className="text-lg font-semibold">Skills</h3>
//           {skills.map((skill) => (
//             <div key={skill.name} className="space-y-1">
//               <div className="flex justify-between">
//                 <span>{skill.name}</span>
//                 <span>{skill.value}%</span>
//               </div>
//               <div className="w-full bg-gray-700 rounded-full h-2">
//                 <div
//                   className="bg-blue-600 h-2 rounded-full"
//                   style={{ width: `${skill.value}%` }}
//                 ></div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Right: About Me + Detailed Info */}
//       <div className="lg:w-7/12 lg:pl-12 space-y-6">
//         <h2 className="text-4xl font-bold text-blue-500">About Me</h2>
//         <p>
//           With over 1 year of comprehensive experience in the field of Web Development, accompanied by a Master's degree in engineering.
//           || Crafting Innovative Solutions to Complex Problems || Full Stack, & Specializing in Python.
//           Demonstrated success in leading impactful projects and providing effective mentorship.
//         </p>

//         {/* Detailed About Info */}
//         <ul className="space-y-2">
//           {aboutInfo.map((item) => (
//             <li key={item.label} className="flex justify-between border-b border-gray-700 pb-1">
//               <span className="font-semibold">{item.label}:</span>
//               <span>{item.value}</span>
//             </li>
//           ))}
//         </ul>

// <br/><br/><br/>

//         {/* Counter + LinkedIn Button */}
//         <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
//           <div className="text-2xl font-bold">
//             <span className="text-blue-500">15+</span> Projects completed
//           </div>
//           <a
//             href="https://www.linkedin.com/in/amnesh-pal/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="px-6 py-3 bg-blue-600 rounded hover:bg-blue-700 transition"
//           >
//             LinkedIn
//           </a>
//         </div>
//       </div>
//     </section>
//   )
// }



'use client'

import Image from 'next/image'

export default function AboutSection() {
  const skills = [
    { name: 'Python', value: 95 },
    { name: 'SQL', value: 90 },
    { name: 'JavaScript', value: 85 },
    { name: 'React.js', value: 80 },
    { name: 'Node.js', value: 75 },
    { name: 'Nest.js', value: 70 },
    { name: 'Next.js', value: 65 },
  ]

  const aboutInfo = [
    { label: 'Profile', value: 'Engineer & Developer' },
    { label: 'Domain', value: 'Retail, Ecommerce, BFSI & Digital Marketing' },
    { label: 'Education', value: "Master's of Computer Application (MCA)" },
    { label: 'Language', value: 'English, Hindi' },
    { label: 'Skills', value: 'C++ || Python || SQL || JavaScript || Node.js || Nest.js || React.js || Next.js' },
    { label: 'Other Skills', value: "Cloud, AWS DSA, API's, Git, Flask, Django, TypeScript & Express.js" },
    { label: 'Interest', value: 'Traveling, Photography, Teaching' },
  ]

  return (
    <section
      id="about-section"
      className="min-h-screen flex flex-col lg:flex-row items-center px-4 sm:px-8 py-12 sm:py-16 bg-black text-white"
    >
      {/* Left: Profile Image + Basic Info */}
      <div className="w-full lg:w-5/12 flex flex-col items-center lg:items-start mb-10 lg:mb-0 space-y-6">
        <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-6 space-y-6 sm:space-y-0">
          {/* Profile Image */}
          <div className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg flex-shrink-0">
            <Image
              src="/amnesh2.jpeg"
              alt="Amnesh Pal"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-30 rounded-full"></div>
          </div>

          {/* Basic Info */}
          <div className="space-y-2 text-center sm:text-left max-w-xs">
            <p><span className="font-semibold">Name: </span> Amnesh Pal</p>
            <p><span className="font-semibold">Job Role: </span> Backend Developer</p>
            <p><span className="font-semibold">Experience: </span> 1.6 Year</p>
            <p><span className="font-semibold">Address: </span> Gurgaon, Haryana, India</p>
          </div>
        </div>

        {/* Skills */}
        <div className="w-full max-w-md space-y-3 mt-6 px-2 sm:px-0">
          <h3 className="text-lg font-semibold">Skills</h3>
          {skills.map((skill) => (
            <div key={skill.name} className="space-y-1">
              <div className="flex justify-between text-sm sm:text-base">
                <span>{skill.name}</span>
                <span>{skill.value}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: `${skill.value}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right: About Me + Detailed Info */}
      <div className="w-full lg:w-7/12 lg:pl-12 space-y-6 text-center lg:text-left">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-500">About Me</h2>
        <p className="text-sm sm:text-base leading-relaxed">
          With over 1 year of comprehensive experience in the field of Web Development, accompanied by a Master's degree in engineering.
          || Crafting Innovative Solutions to Complex Problems || Full Stack, & Specializing in Python.
          Demonstrated success in leading impactful projects and providing effective mentorship.
        </p>

        {/* Detailed About Info */}
        <ul className="space-y-2 text-sm sm:text-base">
          {aboutInfo.map((item) => (
            <li key={item.label} className="flex flex-col sm:flex-row sm:justify-between border-b border-gray-700 pb-1">
              <span className="font-semibold">{item.label}:</span>
              <span>{item.value}</span>
            </li>
          ))}
        </ul>

        {/* Counter + LinkedIn Button */}
        <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-lg sm:text-2xl font-bold">
            <span className="text-blue-500">15+</span> Projects completed
          </div>
          <a
            href="https://www.linkedin.com/in/amnesh-pal/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 sm:px-6 sm:py-3 bg-blue-600 rounded hover:bg-blue-700 transition text-sm sm:text-base"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
