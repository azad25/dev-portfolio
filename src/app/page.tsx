import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Projects from '@/components/sections/Projects'
import Experience from '@/components/sections/Experience'
import Contact from '@/components/sections/Contact'
import TitleBlock from '@/components/blueprint/TitleBlock'
import DimensionLine from '@/components/blueprint/DimensionLine'

function Divider({ label }: { label: string }) {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <DimensionLine label={label} />
    </div>
  )
}

export default function Home() {
  return (
    <main>
      <Navbar />
      <TitleBlock />
      <Hero />
      <Divider label="SEC. A — PROFILE" />
      <About />
      <Divider label="SEC. B — COMPONENTS" />
      <Skills />
      <Divider label="SEC. C — DRAWINGS" />
      <Projects />
      <Divider label="SEC. D — HISTORY" />
      <Experience />
      <Divider label="SEC. E — CONTACT" />
      <Contact />
      <Footer />
    </main>
  )
}
