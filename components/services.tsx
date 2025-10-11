"use client"

import { Card } from "@/components/ui/card"
import { Target, TrendingUp, Users, Zap } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

export function Services() {
  const services = [
    {
      icon: Target,
      title: "Estratégia de Marketing",
      description:
        "Desenvolvemos estratégias personalizadas que conectam sua marca ao público certo, no momento certo.",
    },
    {
      icon: TrendingUp,
      title: "Performance Digital",
      description: "Otimizamos campanhas para maximizar ROI e gerar resultados mensuráveis para seu negócio.",
    },
    {
      icon: Users,
      title: "Gestão de Marca",
      description: "Construímos e fortalecemos a identidade da sua marca no mercado com consistência e impacto.",
    },
    {
      icon: Zap,
      title: "Inovação & Tecnologia",
      description: "Implementamos soluções tecnológicas de ponta para impulsionar seu crescimento digital.",
    },
  ]

  return (
    <section id="services" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-balance">Nossos Serviços</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Soluções completas para elevar sua presença no mercado
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <Card className="p-8 hover:border-primary/50 transition-all duration-300 group hover:scale-105 hover:shadow-xl h-full">
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
