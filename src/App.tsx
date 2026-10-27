import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Showcase } from './components/Showcase'
import { Process } from './components/Process'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <main role="main">
        <Hero />
        <Services />
        <Showcase />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
