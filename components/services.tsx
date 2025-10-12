"use client"

import { Card } from "@/components/ui/card"
import { Target, Share2, Palette, User } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

export function Services() {
  const services = [
    {
      icon: Target,
      title: "Tráfego Pago e Performance Digital",
      description:
        "Conecte sua marca às pessoas certas com estratégias de mídia orientadas por dados. Planejamos, otimizamos e gerenciamos campanhas em Google Ads, Meta Ads, TikTok Ads, LinkedIn e Programática, sempre com foco em ROAS, conversão e crescimento sustentável. Cada clique é uma oportunidade — e nós garantimos que ela seja bem aproveitada.",
    },
    {
      icon: Share2,
      title: "Social Media",
      subtitle: "Gestão Estratégica de Mídias Sociais",
      description:
        "Posicione sua marca com propósito e consistência. Desenvolvemos estratégias de conteúdo e calendário editorial que aumentam o engajamento, fortalecem a comunidade e traduzem a essência da marca em conversas autênticas e resultados reais. Mais do que curtidas — criamos relações de valor entre sua marca e o público.",
    },
    {
      icon: User,
      title: "UX — Experiência do Usuário",
      description:
        "Projetamos experiências digitais centradas nas pessoas. Combinamos pesquisa, dados e psicologia do consumidor para entender como seu público navega, decide e converte. O resultado são interfaces intuitivas e jornadas fluidas que aumentam retenção, satisfação e taxa de conversão.",
    },
    {
      icon: Palette,
      title: "UI — Design de Interface",
      description:
        "Estética com propósito, design que converte. Criamos interfaces modernas, funcionais e alinhadas à identidade da marca, priorizando clareza, acessibilidade e impacto visual. Cada detalhe é pensado para guiar o usuário com naturalidade, fortalecendo a percepção de valor e a performance do seu negócio.",
    },
  ]

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container px-4 relative z-10 max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-balance">Nossos Serviços</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Soluções completas para elevar sua presença no mercado
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <Card className="p-8 hover:border-primary/50 transition-all duration-300 group hover:scale-105 hover:shadow-xl h-full">
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold">{service.title}</h3>
                    {service.subtitle && <p className="text-lg text-muted-foreground mt-1">{service.subtitle}</p>}
                  </div>
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
