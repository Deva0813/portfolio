import { NavbarSection } from './components/NavbarSection/page'
import { AboutSection } from './sections/AboutSection/page'
import { HomeSection } from './sections/HomeSection/page'
import { TimelineSection } from './sections/TimelineSection/page'

export default function Home() {

  return (
    <main className='' >
      <NavbarSection />
      <HomeSection />
      <AboutSection />
      <TimelineSection />
    </main>
  )
}
