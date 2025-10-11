"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Code2 } from "lucide-react"
import { SectionBackground } from "@/components/section-background"

export function ServicesShowcase() {
  const services = [
    {
      id: "business-intelligence",
      title: "Business Intelligence",
      description:
        "Potencialize suas decisões com Business Intelligence (B.I). Por meio de inteligência e dashboards, oferecemos insights cruciais para o seu negócio. Monitorando os dados da sua empresa em tempo real, auxiliamos você a transformar informações em oportunidades.",
    },
    {
      id: "seo",
      title: "SEO",
      description:
        "Otimização para mecanismos de busca que coloca sua empresa no topo dos resultados do Google. Estratégias comprovadas para aumentar sua visibilidade online.",
    },
    {
      id: "gestao-comunidade",
      title: "Gestão de Comunidade",
      description:
        "Construa e engaje sua comunidade online com estratégias personalizadas que criam conexões autênticas com seu público.",
    },
    {
      id: "programatica",
      title: "Programática",
      description:
        "Publicidade programática inteligente que alcança seu público-alvo no momento certo, maximizando o retorno sobre investimento.",
    },
    {
      id: "crm-email",
      title: "CRM e E-mail Marketing",
      description:
        "Automatize e personalize sua comunicação com clientes através de estratégias avançadas de CRM e campanhas de e-mail marketing eficazes.",
    },
  ]

  const [activeService, setActiveService] = useState(services[0])

  return (
    <section id="services" className="py-24 md:py-32 relative overflow-hidden bg-background">
      <SectionBackground variant="mixed" />

      <div className="container px-4 mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-12 space-y-4">
          <p className="text-sm text-primary font-mono">{"{ SERVIÇOS }"}</p>
          <h2 className="text-4xl md:text-6xl font-bold text-balance">
            ESTRATÉGIA, <Code2 className="inline w-12 h-12 text-primary" />
            <br />
            DADOS E CRIAÇÃO.
          </h2>
        </div>

        {/* Service Tags */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveService(service)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeService.id === service.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-card hover:bg-card/80 text-foreground border border-border"
              }`}
            >
              {service.title}
            </button>
          ))}
        </div>

        {/* Service Content */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          <div className="space-y-6 bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border">
            <div className="text-xs text-primary font-mono">[1]</div>
            <h3 className="text-3xl font-bold uppercase">{activeService.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{activeService.description}</p>
            <Button variant="outline" className="group bg-transparent">
              <span className="mr-2">{"<<"}</span>
              SAIBA MAIS
              <span className="ml-2">{">>"}</span>
            </Button>
          </div>

          <div className="relative h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm border border-border">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-6xl opacity-20">📊</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
