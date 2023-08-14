import { NavbarSection } from '../components/NavbarSection/page'
import { AboutSection } from '../components/AboutSection/page'
import { HomeSection } from '../components/HomeSection/page'
import { TimelineSection } from '../components/TimelineSection/page'

export default function Home() {

  return (
    <main className='' >
      <NavbarSection />
      <HomeSection />
      <AboutSection />
      <TimelineSection />
      <div className="h-screen">hello</div>
    </main>
  )
}
