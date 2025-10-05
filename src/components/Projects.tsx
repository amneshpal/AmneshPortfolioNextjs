'use client'

export default function Projects() {
  const projects = [
    {
      title: 'Passioninternational 👉',
      description: 'Dedicated to bridging the gap between job seekers and recruiters across the globe. Our platform offers a wide range of opportunities, helping you find the best talent.',
      technologies: 'JavaScript, React.js, MongoDB',
      image: '/jobportal.png',
      github: 'https://github.com/amneshpal/passionInternational',
      liveDemo: 'https://passioninternational.onrender.com/',
      videoDemo: '#',
    },
    {
      title: 'Chat-React 👉',
      description: 'A real-time chat application that allows users to join chat rooms & send messages instantly using Socket.io, Node.js. Designed with Material UI. Users can join different chat rooms.',
      technologies: 'React.js, Node.js, Express, Socket.io',
      image: '/chat.png',
      github: 'https://github.com/amneshpal/ChatApp_backend',
      liveDemo: 'https://amneshchatapp.netlify.app/',
      videoDemo: 'https://youtu.be/GOXwmda9O9U',
    },
    {
      title: 'Amnesh_Calculator 👉 ❣',
      description: 'Interactive calculator using HTML, CSS, JavaScript, featuring light/dark mode toggle and basic arithmetic operations. Implemented error handling and responsive design.',
      technologies: 'HTML, CSS, JavaScript',
      image: '/calculator.jpg',
      github: 'https://github.com/amneshpal/Project_Calculator?tab=readme-ov-file',
      liveDemo: 'https://calculator-amnesh.netlify.app/',
      videoDemo: '#',
    },
    {
      title: 'AMAZON-CLONE (E-commerce) 👉',
      description: 'Full-stack e-commerce platform with product browsing, authentication, cart management, and Stripe payment integration. Used ReactJS, Next.js, Redux, and Supabase for backend. Deployed on Vercel.',
      technologies: 'ReactJS, Next.js, TypeScript, TailwindCSS, Supabase, Redux, Stripe',
      image: '/amazon.png',
      github: 'https://github.com/amneshpal/amazon_clone',
      liveDemo: 'https://amazon-clone-nu-khaki.vercel.app/',
      videoDemo: '#',
    },
    {
      title: 'Django Dynamic Website 👉',
      description: 'Developed a Django-based dynamic website to deliver personalized recommendations of financial products and services tailored to customer groups. Integrated front-end and back-end functionality for seamless UX.',
      technologies: 'Django, Python, HTML, CSS',
      image: '/django.png',
      github: 'https://github.com/amneshpal/djangogirlsblog',
      liveDemo: 'https://amneshpal0.pythonanywhere.com/',
      videoDemo: '#',
    },
    {
      title: 'Python-Flask News Website 👉',
      description: 'Using Python and Flask, with Jinja templating to render dynamic content. Implemented CRUD functionality for managing news articles and phpMyAdmin for database. Responsive UI with Tailwind CSS.',
      technologies: 'Python, Flask, JavaScript, Tailwind CSS',
      image: '/news.png',
      github: 'https://github.com/amneshpal',
      liveDemo: 'https://www.youtube.com/watch?v=AlcC31ukTKY',
      videoDemo: 'https://www.youtube.com/watch?v=AlcC31ukTKY',
    },
    // {
    //   title: 'Project 7 👉 Coming soon',
    //   description: 'Description of Project 7.',
    //   technologies: '',
    //   image: '/proj_4.jpg',
    //   github: 'https://github.com/amneshpal',
    //   liveDemo: '#',
    //   videoDemo: '#',
    // },
    // {
    //   title: 'Project 8 👉 Coming soon',
    //   description: 'Description of Project 8.',
    //   technologies: '',
    //   image: '/proj_4.jpg',
    //   github: 'https://github.com/amneshpal',
    //   liveDemo: '#',
    //   videoDemo: '#',
    // },
  ]

  return (
    <section id="project-section" className="min-h-screen px-8 py-16 bg-black-900 text-white">
      <div className="container mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-500">Projects</h2>
          <p className="mt-4 text-gray-300">Below are FullStack projects on Python, React.js, Next.js, Nest.js, Node.js and Django.</p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((proj, index) => (
            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${proj.image})` }}
              ></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  <a href={proj.github} target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">{proj.title}</a>
                </h3>
                <p className="text-gray-300 mb-2">{proj.description}</p>
                {proj.technologies && (
                  <p className="text-gray-400 text-sm mb-4">Technologies Used: {proj.technologies}</p>
                )}
                <div className="flex flex-wrap gap-2">
                  <a href={proj.github} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 transition text-sm">GitHub</a>
                  <a href={proj.liveDemo} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 transition text-sm">Live Demo</a>
                  <a href={proj.videoDemo} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 transition text-sm">Video Demo</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
