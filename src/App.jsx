import './App.css'
import Nav from '@/components/Nav'
import Hero from '@/components/sections/Hero'
import PainPoints from '@/components/sections/PainPoints'
import Differentiator from '@/components/sections/Differentiator'
import ProcessTimeline from '@/components/sections/ProcessTimeline'
import Expert from '@/components/sections/Expert'
import Testimonials from '@/components/sections/Testimonials'
import FAQ from '@/components/sections/FAQ'
import FinalCTA from '@/components/sections/FinalCTA'
import Footer from '@/components/sections/Footer'

function App() {
  return (
    <div className="min-h-screen bg-deep-navy">
      <Nav />
      <main>
        <Hero />
        <PainPoints />
        <Differentiator />
        <ProcessTimeline />
        <Expert />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
