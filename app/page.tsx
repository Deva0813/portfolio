import { NavbarSection } from '../components/NavbarSection/page'
import { AboutSection } from '../components/AboutSection/page'
import { HomeSection } from '../components/HomeSection/page'
import { TimelineSection } from '../components/TimelineSection/page'
import { CertificationSection } from '../components/CertificationSection/page'
import { ProjectSection } from '../components/ProjectSection/page'
import { ContactSection } from '../components/ContactSection/page'

export default function Home() {

  return (
    <main className='' >
      <NavbarSection />
      <HomeSection />
      <AboutSection />
      <TimelineSection />
      <CertificationSection />
      <ProjectSection />
      <ContactSection />
    </main>
  )
}
