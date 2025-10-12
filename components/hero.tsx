"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"
import { FloatingElements } from "./floating-elements"
import { Rockets } from "./rockets"

export function Hero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToServices = () => {
    const element = document.getElementById("services")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card animate-gradient-shift" />

      <FloatingElements />
      <Rockets />

      <div
        className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-blob-float"
        style={{ transform: `translate(${scrollY * 0.2}px, ${scrollY * 0.3}px)` }}
      />
      <div
        className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl animate-blob-float-delayed"
        style={{ transform: `translate(${-scrollY * 0.15}px, ${-scrollY * 0.25}px)` }}
      />
      <div
        className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-blob-float-slow"
        style={{ transform: `translate(${-scrollY * 0.1}px, ${scrollY * 0.2}px)` }}
      />

      <div className="absolute inset-0 opacity-5" style={{ transform: `translateY(${scrollY * 0.3}px)` }}>
        <div
          className="absolute inset-0 animate-grid-move"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="container relative z-10 px-4 py-20">
        <div className="flex flex-col items-center text-center space-y-8 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-balance leading-tight animate-fade-in-up">
            <span className="block text-foreground">Marketing & Serviços</span>
            <span className="block text-primary mt-2">de Alta Performance</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl text-pretty leading-relaxed animate-fade-in-up animation-delay-200">
            Transformamos estratégias em resultados concretos com excelência e inovação
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in-up animation-delay-400">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 hover:scale-105 transition-transform"
            >
              Fale Conosco
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              onClick={scrollToServices}
              variant="outline"
              className="text-lg px-8 py-6 border-2 bg-transparent hover:scale-105 transition-transform"
            >
              Nossos Serviços
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
