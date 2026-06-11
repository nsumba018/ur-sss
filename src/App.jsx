import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Statistics from './sections/Statistics'
import About from './sections/About'
import Directorates from './sections/Directorates'
import FeaturedOpportunity from './sections/FeaturedOpportunity'
import Events from './sections/Events'
import Journey from './sections/Journey'
import Gallery from './sections/Gallery'
import Testimonials from './sections/Testimonials'
import Partners from './sections/Partners'
import Footer from './sections/Footer'

function App() {
  return (
    <div className="min-h-screen bg-ur-green-light">
      <Navbar />
      <main>
        <Hero />
        <Statistics />
        <About />
        <Directorates />
        <FeaturedOpportunity />
        <Events />
        <Journey />
        <Gallery />
        <Testimonials />
        <Partners />
      </main>
      <Footer />
    </div>
  )
}

export default App
