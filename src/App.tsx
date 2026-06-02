import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Ticker from './components/Ticker'
import About from './components/About'
import Biodigester from './components/Biodigester'
import Jobs from './components/Jobs'
import Vision from './components/Vision'
import Volunteer from './components/Volunteer'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <About />
        <Biodigester />
        <Jobs />
        <Vision />
        <Volunteer />
      </main>
      <Footer />
    </>
  )
}
