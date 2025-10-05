// 'use client'

// export default function Experience() {
//   const experiences = [
//     {
//       period: 'Sept 2025 – Present',
//       role: 'Backend Developer @ Uproi Pvt Ltd',
//       details: [
//         'Designed and implemented RESTful APIs using Node.js and Express.',
//         'Optimized MongoDB queries and database performance.',
//         'Collaborated with frontend team to integrate APIs with React.js apps.',
//         'Implemented authentication, authorization, and role-based access control.',
//       ],
//     },
//     {
//       period: 'June 2025 – Sept 2025',
//       role: 'Node.js Developer @ Vega6 Webware Technologies Pvt. Ltd.',
//       details: [
//         'Developed server-side logic and APIs for multiple client projects.',
//         'Worked on microservices architecture and modular backend design.',
//         'Integrated third-party APIs and payment gateways.',
//         'Wrote unit tests to ensure code quality and reliability.',
//       ],
//     },
//     {
//       period: 'March 2024 – June 2025',
//       role: 'Backend Developer @ Compact India Pvt. Ltd. [Contract]',
//       details: [
//         'Built scalable backend systems with Node.js and MongoDB.',
//         'Migrated legacy PHP modules to Node.js microservices.',
//         'Implemented data validation, error handling, and API documentation.',
//         'Collaborated with UI/UX team to deliver responsive web applications.',
//       ],
//     },
//     {
//       period: 'April 2023 – March 2024',
//       role: 'Health Renewal Specialist @ PolicyBazaar',
//       details: [
//         'Managed client portfolios and ensured timely policy renewals.',
//         'Provided support for customers regarding insurance claims and queries.',
//         'Processed documentation and maintained compliance standards.',
//         'Achieved high customer satisfaction and retention rates.',
//       ],
//     },
//   ]

//   return (
//     <section id="resume" className="min-h-screen px-8 py-16 bg-black text-white">
//       <div className="container mx-auto">
//         <h2 className="text-4xl font-bold text-blue-500 mb-12">Experience</h2>

//         <div className="flex flex-col space-y-12">
//           {experiences.map((exp, index) => (
//             <div key={index} className="flex flex-col lg:flex-row items-start lg:items-center">
              
//               {/* Left: Timeline Dot + Period */}
//               <div className="lg:w-1/4 flex flex-col items-start lg:items-end mb-4 lg:mb-0 pr-6">
//                 <div className="flex items-center">
//                   <div className="w-4 h-4 bg-blue-500 rounded-full mr-2 lg:mr-0 lg:ml-2"></div>
//                   <p className="text-gray-400 text-sm">{exp.period}</p>
//                 </div>
//               </div>

//               {/* Right: Role + Details */}
//               <div className="lg:w-3/4 border-l-2 border-blue-500 pl-6 lg:pl-12 space-y-2">
//                 <h3 className="text-xl font-semibold text-blue-400">{exp.role}</h3>
//                 <ul className="list-disc list-inside text-gray-300">
//                   {exp.details.map((item, idx) => (
//                     <li key={idx}>{item}</li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }



'use client'

export default function Experience() {
  const experiences = [
    {
      period: 'Sept 2025 – Present',
      role: 'Backend Developer',
      company: 'Uproi Pvt Ltd',
      details: [
        'Designed and implemented RESTful APIs using Node.js and Express.',
        'Optimized MongoDB queries and database performance.',
        'Collaborated with frontend team to integrate APIs with React.js apps.',
        'Implemented authentication, authorization, and role-based access control.',
      ],
    },
    {
      period: 'June 2025 – Sept 2025',
      role: 'Node.js Developer',
      company: 'Vega6 Webware Technologies Pvt. Ltd.',
      details: [
        'Developed server-side logic and APIs for multiple client projects.',
        'Worked on microservices architecture and modular backend design.',
        'Integrated third-party APIs and payment gateways.',
        'Wrote unit tests to ensure code quality and reliability.',
      ],
    },
    {
      period: 'March 2024 – June 2025',
      role: 'Backend Developer [Contract]',
      company: 'Compact India Pvt. Ltd.',
      details: [
        'Built scalable backend systems with Node.js and MongoDB.',
        'Migrated legacy PHP modules to Node.js microservices.',
        'Implemented data validation, error handling, and API documentation.',
        'Collaborated with UI/UX team to deliver responsive web applications.',
      ],
    },
    {
      period: 'April 2023 – March 2024',
      role: 'Health Renewal Specialist',
      company: 'PolicyBazaar',
      details: [
        'Managed client portfolios and ensured timely policy renewals.',
        'Provided support for customers regarding insurance claims and queries.',
        'Processed documentation and maintained compliance standards.',
        'Achieved high customer satisfaction and retention rates.',
      ],
    },
  ]

  return (
    <section id="experience" className="min-h-screen px-8 py-16 bg-black text-white">
      <div className="container mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-blue-500 mb-12 text-center">Experience</h2>

        {/* Timeline */}
        <div className="relative border-l border-blue-600 ml-4">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-12 ml-6 group">
              {/* Timeline Dot */}
              <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 ring-4 ring-black"></span>

              {/* Card */}
              <div className="p-6 bg-gray-800 rounded-lg shadow-md transition-transform transform group-hover:scale-[1.02]">
                <span className="text-blue-400 font-semibold">{exp.period}</span>
                <h3 className="text-xl font-semibold mt-2">
                  {exp.role} <span className="text-gray-400"> @ {exp.company}</span>
                </h3>
                <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
                  {exp.details.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
