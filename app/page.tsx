import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { InfiniteStatsCarousel } from "@/components/infinite-stats-carousel"
import { MethodSection } from "@/components/method-section"
import { ServicesShowcase } from "@/components/services-showcase"
import { About } from "@/components/about"
import { AboutUs } from "@/components/about-us"
import { ClientsCarousel } from "@/components/clients-carousel"
import { Testimonials } from "@/components/testimonials"
import { AboutYasmim } from "@/components/about-yasmim"
import { CTASection } from "@/components/cta-section"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      {/* Topo */}
      <Hero />
      {/* Faixa com as informações */}
      <InfiniteStatsCarousel />
      {/* Método */}
      <MethodSection />
      {/* Serviços */}
      <ServicesShowcase />
      {/* Bloco Institucional (Excelência em cada projeto) */}
      <About />
      {/* Missão e Valores */}
      <AboutUs />
      {/* Faixa com as logos de clientes */}
      <ClientsCarousel />
      <Testimonials />
      {/* Quem é a Yasmim */}
      <AboutYasmim />
      {/* Vamos impactar */}
      <CTASection />
      {/* Formulário */}
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
