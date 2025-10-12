import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { InfiniteStatsCarousel } from "@/components/infinite-stats-carousel"
import { ServicesShowcase } from "@/components/services-showcase"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { CTASection } from "@/components/cta-section"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <InfiniteStatsCarousel />
      <ServicesShowcase />
      <Services />
      <About />
      <CTASection />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
