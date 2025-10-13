"use client"

import { Button } from "@/components/ui/button"
import { SectionBackground } from "@/components/section-background"

export function CTASection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <SectionBackground variant="primary" />

      <div className="container px-4 mx-auto max-w-7xl relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 bg-card/30 backdrop-blur-md p-12 md:p-16 rounded-3xl border border-border">
          <h2 className="text-4xl md:text-6xl font-bold text-balance">Vamos acelerar seus resultados juntos?</h2>
          <Button size="lg" onClick={scrollToContact} className="text-lg px-8 group">
            <span className="mr-2">{"<<"}</span>
            FALE CONOSCO
            <span className="ml-2">{">>"}</span>
          </Button>
        </div>
      </div>
    </section>
  )
}
