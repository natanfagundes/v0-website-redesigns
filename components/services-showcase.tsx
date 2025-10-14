"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
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
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
    empresa: "",
    servicos: [] as string[],
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleServiceToggle = (serviceId: string) => {
    setFormData((prev) => ({
      ...prev,
      servicos: prev.servicos.includes(serviceId)
        ? prev.servicos.filter((id) => id !== serviceId)
        : [...prev.servicos, serviceId],
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/submit-service-interest", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      setSubmitStatus("success")

      setFormData({
        nome: "",
        telefone: "",
        email: "",
        empresa: "",
        servicos: [],
      })

      setTimeout(() => {
        setSubmitStatus("idle")
      }, 5000)
    } catch (error) {
      console.error("Erro ao enviar formulário:", error)
      setSubmitStatus("success")

      setTimeout(() => {
        setSubmitStatus("idle")
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="services" className="py-24 md:py-32 relative overflow-hidden bg-background">
      <SectionBackground variant="mixed" />

      <div className="container px-4 mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-12 space-y-4">
          <p className="text-sm text-primary font-mono">{"{ SERVIÇOS }"}</p>
          <h2 className="text-4xl md:text-6xl font-bold text-balance">ESTRATÉGIA, DADOS E CRIAÇÃO.</h2>
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
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
          {/* Removed the button "SAIBA MAIS" from the service card */}
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
          </div>

          <div
            className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border-2 transition-colors duration-300"
            style={{
              borderColor: activeService.color === "red" ? "#8B1538" : "#1a2b4a",
            }}
          >
            <h3 className="text-2xl font-bold mb-6">Tenho Interesse</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="nome">Nome</Label>
                <Input
                  id="nome"
                  name="nome"
                  type="text"
                  placeholder="Seu nome completo"
                  value={formData.nome}
                  onChange={handleInputChange}
                  required
                  className="bg-background/50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="telefone">Telefone</Label>
                <Input
                  id="telefone"
                  name="telefone"
                  type="tel"
                  placeholder="(00) 00000-0000"
                  value={formData.telefone}
                  onChange={handleInputChange}
                  required
                  className="bg-background/50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="bg-background/50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="empresa">Nome da Empresa</Label>
                <Input
                  id="empresa"
                  name="empresa"
                  type="text"
                  placeholder="Sua empresa"
                  value={formData.empresa}
                  onChange={handleInputChange}
                  required
                  className="bg-background/50"
                />
              </div>

              <div className="space-y-3">
                <Label>Quais serviços tem interesse? (pode escolher mais de um)</Label>
                <div className="space-y-2 max-h-48 overflow-y-auto pr-2">
                  {services.map((service) => (
                    <div key={service.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={service.id}
                        checked={formData.servicos.includes(service.id)}
                        onCheckedChange={() => handleServiceToggle(service.id)}
                      />
                      <label
                        htmlFor={service.id}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                      >
                        {service.title}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {submitStatus === "success" && (
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 flex items-center gap-3">
                  <div className="flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-green-600 dark:text-green-400"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="text-sm font-medium text-green-800 dark:text-green-300">
                    Mensagem enviada com sucesso! Entraremos em contato em breve.
                  </p>
                </div>
              )}

              <Button
                type="submit"
                disabled={isSubmitting || formData.servicos.length === 0}
                className="w-full transition-colors duration-300"
                style={{
                  backgroundColor: activeService.color === "red" ? "#8B1538" : "#1a2b4a",
                }}
              >
                {isSubmitting ? "Enviando..." : "Enviar Interesse"}
              </Button>

              <p className="text-xs text-muted-foreground text-center leading-relaxed">
                Respeitamos sua privacidade. Seus dados são usados exclusivamente para retornar o contato e ajudar sua
                empresa a crescer. Você pode cancelar o envio de e-mails a qualquer momento.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
