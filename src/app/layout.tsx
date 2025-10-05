import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
// import './globals.css'

export const metadata = {
  title: 'Amnesh Pal Portfolio',
  description: 'Web Developer Portfolio - Next.js + TailwindCSS',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
