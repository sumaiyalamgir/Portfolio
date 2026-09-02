import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Work from './components/Work'
import About from './components/About'
import Skills from './components/Skills'
import Education from './components/Education'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Work />
        <About />
        <Skills />
        <Education />
      </main>
      <Footer />
    </>
  )
}

export default App
