'use client'
import dynamic from 'next/dynamic'

// Import components
import Navigation from './components/Navigation'
import HeroSection from './components/sections/HeroSection'
import AboutSection from './components/sections/AboutSection'
import SkillsSection from './components/sections/SkillsSection'
import ProjectsSection from './components/sections/ProjectsSection'
import ContactSection from './components/sections/ContactSection'
import Footer from './components/Footer'
import SmoothScrollProvider from './components/SmoothScrollProvider'

// Dynamic imports for performance (client-side only effects)
const ParticleField = dynamic(
  () => import('./components/effects/ParticleField'),
  { ssr: false }
)

const GradientBlobs = dynamic(
  () => import('./components/effects/GradientBlobs'),
  { ssr: false }
)

/* const CustomCursor = dynamic(
  () => import('./components/effects/CustomCursor'),
  { ssr: false }
) */

export default function Home() {
  return (
    <SmoothScrollProvider>
      {/* Background effects layer */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <GradientBlobs />
        <ParticleField />
      </div>

      {/* Custom cursor (desktop only) */}
     {/*  <CustomCursor /> */}

      {/* Navigation */}
      <Navigation />

      {/* Main content */}
      <main className="relative z-10">
        {/* Hero Section - Full viewport height */}
        <HeroSection />

        {/* About Section */}
        <AboutSection />

        {/* Skills Section */}
        <SkillsSection />

        {/* Projects Section */}
        <ProjectsSection />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </SmoothScrollProvider>
  )
}
