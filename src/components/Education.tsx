// 'use client'

// export default function Education() {
//   const education = [
//     {
//       period: '2022 – 2024',
//       degree: "Master's of Computer Application (MCA)",
//       institution: 'Dr. A.P.J. Abdul Kalam Technical University (UPTU)',
//       grade: 'First class distinction.',
//     },
//     {
//       period: '2019 – 2022',
//       degree: "Bachelor's of Computer Application (BCA)",
//       institution: 'M.M Modi College',
//       grade: 'First class distinction.',
//     },
//     {
//       period: '2018 – 2019',
//       degree: 'Higher Secondary',
//       institution: 'Dr. K.N Modi College',
//       grade: 'First class distinction.',
//     },
//     {
//       period: '2016 – 2017',
//       degree: 'Secondary School',
//       institution: 'Dr. K.N Modi College',
//       grade: 'First class distinction.',
//     },
//   ]

//   return (
//     <section id="education" className="min-h-screen px-8 py-16 bg-black-900 text-white">
//       <div className="container mx-auto">
        
//         {/* Section Title */}
//         <h2 className="text-4xl font-bold text-blue-500 mb-12">Education</h2>

//         {/* Education Items */}
//         <div className="grid md:grid-cols-2 gap-8">
//           {education.map((edu, index) => (
//             <div
//               key={index}
//               className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition"
//             >
//               <span className="text-blue-500 font-semibold">{edu.period}</span>
//               <h3 className="text-xl font-semibold mt-2">{edu.degree}</h3>
//               <span className="block text-gray-400">{edu.institution}</span>
//               <p className="mt-4 text-gray-300">{edu.grade}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }



'use client'

export default function Education() {
  const education = [
    {
      period: '2022 – 2024',
      degree: "Master's of Computer Application (MCA)",
      institution: 'Dr. A.P.J. Abdul Kalam Technical University (UPTU)',
      grade: 'First class distinction.',
    },
    {
      period: '2019 – 2022',
      degree: "Bachelor's of Computer Application (BCA)",
      institution: 'M.M Modi College',
      grade: 'First class distinction.',
    },
    {
      period: '2018 – 2019',
      degree: 'Higher Secondary',
      institution: 'Dr. K.N Modi College',
      grade: 'First class distinction.',
    },
    {
      period: '2016 – 2017',
      degree: 'Secondary School',
      institution: 'Dr. K.N Modi College',
      grade: 'First class distinction.',
    },
  ]

  return (
    <section
      id="education"
      className="px-4 sm:px-8 py-12 md:py-16 bg-black text-white flex flex-col justify-center"
    >
      <div className="container mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-500 mb-12 text-center">
          Education
        </h2>

        {/* Timeline */}
        <div className="relative md:border-l md:border-blue-600 md:ml-4">
          {education.map((edu, index) => (
            <div key={index} className="mb-12 md:mb-16 relative md:ml-6">
              {/* Circle marker */}
              <span className="absolute md:-left-3 top-2 md:top-6 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 ring-4 ring-black"></span>

              {/* Card */}
              <div className="p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-[1.02]">
                <span className="text-blue-400 font-semibold">{edu.period}</span>
                <h3 className="text-xl sm:text-2xl font-semibold mt-2">{edu.degree}</h3>
                <span className="block text-gray-400">{edu.institution}</span>
                <p className="mt-4 text-gray-300">{edu.grade}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
