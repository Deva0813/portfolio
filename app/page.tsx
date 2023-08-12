import { NavbarSection } from './components/NavbarSection/page'
import { AboutSection } from './sections/AboutSection/page'
import { HomeSection } from './sections/HomeSection/page'

export default function Home() {

  return (
    <main className='' >
      <NavbarSection />
      <HomeSection />
      <AboutSection />
    </main>
  )
}
