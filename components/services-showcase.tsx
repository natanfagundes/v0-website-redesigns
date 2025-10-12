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
      color: "red", // vermelho bordô
      description:
        "Potencialize suas decisões com Business Intelligence (B.I). Por meio de inteligência e dashboards, oferecemos insights cruciais para o seu negócio. Monitorando os dados da sua empresa em tempo real, auxiliamos você a transformar informações em oportunidades.",
    },
    {
      id: "seo",
      title: "SEO",
      color: "blue", // azul navy
      description:
        "Otimização para mecanismos de busca que coloca sua empresa no topo dos resultados do Google. Estratégias comprovadas para aumentar sua visibilidade online.",
    },
    {
      id: "gestao-comunidade",
      title: "Gestão de Comunidade",
      color: "red", // vermelho bordô
      description:
        "Construa e engaje sua comunidade online com estratégias personalizadas que criam conexões autênticas com seu público.",
    },
    {
      id: "programatica",
      title: "Programática",
      color: "blue", // azul navy
      description:
        "Publicidade programática inteligente que alcança seu público-alvo no momento certo, maximizando o retorno sobre investimento.",
    },
    {
      id: "crm-email",
      title: "CRM e E-mail Marketing",
      color: "red", // vermelho bordô
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
          {services.map((service) => {
            const isActive = activeService.id === service.id
            const colorClass =
              service.color === "red"
                ? "bg-[#8B1538] hover:bg-[#8B1538]/90 text-white"
                : "bg-[#1a2b4a] hover:bg-[#1a2b4a]/90 text-white"

            return (
              <button
                key={service.id}
                onClick={() => setActiveService(service)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  isActive ? colorClass : "bg-card hover:bg-card/80 text-foreground border border-border"
                }`}
              >
                {service.title}
              </button>
            )
          })}
        </div>

        {/* Service Content */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          <div
            className="space-y-6 bg-card/50 backdrop-blur-sm p-8 rounded-2xl border-2 transition-colors duration-300"
            style={{
              borderColor: activeService.color === "red" ? "#8B1538" : "#1a2b4a",
            }}
          >
            <div
              className="text-xs font-mono font-bold"
              style={{ color: activeService.color === "red" ? "#8B1538" : "#1a2b4a" }}
            >
              [1]
            </div>
            <h3 className="text-3xl font-bold uppercase">{activeService.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{activeService.description}</p>
            <Button
              variant="outline"
              className="group bg-transparent transition-colors duration-300"
              style={{
                borderColor: activeService.color === "red" ? "#8B1538" : "#1a2b4a",
                color: activeService.color === "red" ? "#8B1538" : "#1a2b4a",
              }}
            >
              <span className="mr-2">{"<<"}</span>
              SAIBA MAIS
              <span className="ml-2">{">>"}</span>
            </Button>
          </div>

          <div
            className="relative h-96 rounded-2xl overflow-hidden backdrop-blur-sm border-2 transition-all duration-300"
            style={{
              borderColor: activeService.color === "red" ? "#8B1538" : "#1a2b4a",
              background:
                activeService.color === "red"
                  ? "linear-gradient(to bottom right, rgba(139, 21, 56, 0.2), rgba(139, 21, 56, 0.05))"
                  : "linear-gradient(to bottom right, rgba(26, 43, 74, 0.2), rgba(26, 43, 74, 0.05))",
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-6xl opacity-20">📊</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
