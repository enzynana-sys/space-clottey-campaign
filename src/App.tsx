import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Pillars from './components/Pillars'
import About from './components/About'
import Gallery from './components/Gallery'
import Biodigester from './components/Biodigester'
import Jobs from './components/Jobs'
import Vision from './components/Vision'
import Volunteer from './components/Volunteer'
import Footer from './components/Footer'
import StickyWhatsApp from './components/StickyWhatsApp'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Pillars />
        <About />
        <Gallery />
        <Biodigester />
        <Jobs />
        <Vision />
        <Volunteer />
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  )
}
