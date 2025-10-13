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
      color: "red",
      description:
        "Potencialize suas decisões com inteligência de dados em tempo real. Desenvolvemos dashboards estratégicos que transformam informações em insights acionáveis, guiando seu negócio rumo a decisões mais assertivas e oportunidades de crescimento.",
    },
    {
      id: "seo",
      title: "SEO",
      color: "blue",
      description:
        "SEO que transforma presença em relevância. Aparecer é fácil. Ser lembrado é estratégia. Com táticas de SEO personalizadas, impulsionamos sua marca ao topo das buscas e garantimos visibilidade real e duradoura.",
    },
    {
      id: "gestao-comunidade",
      title: "Gestão de Comunidade",
      color: "red",
      description:
        "Construímos comunidades engajadas e estratégicas com base em dados e comportamento real. Através de conteúdo e interação inteligente, aumentamos retenção, fidelização e valor de marca.",
    },
    {
      id: "programatica",
      title: "Mídia Programática",
      color: "blue",
      description:
        "Alcance o público certo, no momento certo. Com tecnologia, dados e segmentação inteligente, entregamos campanhas de alta performance que maximizam o retorno sobre investimento e fortalecem a presença da sua marca.",
    },
    {
      id: "crm-email",
      title: "CRM e E-mail Marketing",
      color: "red",
      description:
        "Automatize e personalize sua comunicação com precisão. Desenvolvemos estratégias de relacionamento inteligentes que fortalecem o vínculo entre marca e cliente, gerando engajamento, fidelização e aumento de conversões.",
    },
    {
      id: "trafego-pago",
      title: "Tráfego Pago e Performance Digital",
      color: "blue",
      description:
        "Conecte sua marca às pessoas certas com estratégias de mídia orientadas por dados. Planejamos, otimizamos e gerenciamos campanhas em Google Ads, Meta Ads, TikTok Ads, LinkedIn e Programática, sempre com foco em ROAS, conversão e crescimento sustentável. Cada clique é uma oportunidade — e nós garantimos que ela seja bem aproveitada.",
    },
    {
      id: "social-media",
      title: "Gestão Estratégica de Mídias Sociais",
      color: "red",
      description:
        "Posicione sua marca com propósito e consistência. Desenvolvemos estratégias de conteúdo e calendário editorial que aumentam o engajamento, fortalecem a comunidade e traduzem a essência da marca em conversas autênticas e resultados reais. Mais do que curtidas — criamos relações de valor entre sua marca e o público.",
    },
    {
      id: "ux",
      title: "UX — Experiência do Usuário",
      color: "blue",
      description:
        "Projetamos experiências digitais centradas nas pessoas. Combinamos pesquisa, dados e psicologia do consumidor para entender como seu público navega, decide e converte. O resultado são interfaces intuitivas e jornadas fluidas que aumentam retenção, satisfação e taxa de conversão.",
    },
    {
      id: "ui",
      title: "UI — Design de Interface",
      color: "red",
      description:
        "Estética com propósito, design que converte. Criamos interfaces modernas, funcionais e alinhadas à identidade da marca, priorizando clareza, acessibilidade e impacto visual. Cada detalhe é pensado para guiar o usuário com naturalidade, fortalecendo a percepção de valor e a performance do seu negócio.",
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
