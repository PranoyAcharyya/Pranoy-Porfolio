import { useState } from 'react'
import { ThemeProvider } from './hooks/useTheme'
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { ScrollProgress, CustomCursor } from './components/ScrollProgress'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Experience from './sections/Experience'
import Education from './sections/Education'
import Projects from './sections/Projects'
import Testimonials from './sections/Testimonials'
import Contact from './sections/Contact'
import SmoothScroll from './{components,sections,hooks,animations,assets,pages,utils}/SmoothScroll'
SmoothScroll

function PortfolioApp() {
  return (
    <div className="relative noise-overlay">
      <SmoothScroll/>
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        {/* <Testimonials /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  const [loaded, setLoaded] = useState(false)

  return (
    <ThemeProvider>
      {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}
      {loaded && <PortfolioApp />}
    </ThemeProvider>
  )
}
