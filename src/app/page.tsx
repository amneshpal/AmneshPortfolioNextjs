import Hero from '@/components/Hero'
import AboutSection from '@/components/AboutSection'
import Experience from '@/components/Experience'
// import ProjectsSection from '@/components/ProjectsSection'
// import ContactForm from '@/components/ContactForm'
import Education from '@/components/Education'
import Projects from '@/components/Projects'
import Resume from '@/components/Resume'
import Achievment from '@/components/Achievment'
export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <Experience />
      <Education />
      <Projects/>
      <Resume/>
      {/* <ProjectsSection /> */}
      {/* <ContactForm /> */}
      <Achievment/>
    </>
  )
}
