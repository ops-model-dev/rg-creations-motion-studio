import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Reels } from './components/Reels'
import { Process } from './components/Process'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Toaster } from './components/ui/toaster'

export default function App() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <main role="main">
        <Hero />
        <Services />
        <Reels />
        <Process />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  )
}
