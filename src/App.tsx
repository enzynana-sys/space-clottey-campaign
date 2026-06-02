import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StatsRow from './components/StatsRow'
import About from './components/About'
import VisionCards from './components/VisionCards'
import Pillars from './components/Pillars'
import Biodigester from './components/Biodigester'
import Jobs from './components/Jobs'
import Gallery from './components/Gallery'
import VisionAgenda from './components/VisionAgenda'
import Volunteer from './components/Volunteer'
import Footer from './components/Footer'
import StickyWhatsApp from './components/StickyWhatsApp'

export default function App() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <StatsRow />
        <About />
        <VisionCards />
        <Pillars />
        <Biodigester />
        <Jobs />
        <Gallery />
        <VisionAgenda />
        <Volunteer />
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  )
}
