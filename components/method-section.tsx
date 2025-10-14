"use client"

import { Card } from "@/components/ui/card"

export function MethodSection() {
  const steps = [
    {
      number: "01",
      icon: "💠",
      title: "Diagnóstico",
      description:
        "Análise profunda antes de qualquer movimento. Mergulhamos na performance atual, identificando gargalos e oportunidades com base em dados reais — mídia, funil, UX, CRO e maturidade digital. Entregamos um relatório executivo completo, com mapeamento de riscos e potenciais de escala.",
      result: "Clareza estratégica e visão de onde estão os pontos de ganho imediato e estrutural.",
      resultIcon: "🧭",
    },
    {
      number: "02",
      icon: "🧩",
      title: "Arquitetura",
      description:
        "Desenho técnico da estrutura que sustenta o crescimento. Criamos a base estratégica e operacional: segmentações, canais, funis, fluxos de automação e planos de mídia integrados. Tudo guiado por KPIs claros, modelagem de dados e governança de performance.",
      result: "Uma arquitetura de marketing escalável, conectada e eficiente.",
      resultIcon: "⚙️",
    },
    {
      number: "03",
      icon: "🚀",
      title: "Execução",
      description:
        "Da estratégia à operação com precisão. Transformamos o planejamento em ação: campanhas, automações, conteúdo, SEO e mídia programática operando em sinergia. Cada execução é mensurada e documentada dentro de uma rotina de acompanhamento contínuo.",
      result: "Performance em movimento com controle e previsibilidade.",
      resultIcon: "🎯",
    },
    {
      number: "04",
      icon: "📊",
      title: "Otimização",
      description:
        "Aprimoramento orientado por dados, não por suposição. Monitoramos, medimos e priorizamos o que realmente gera impacto. Com base em métricas e hipóteses validadas, otimizamos investimentos, criativos, jornadas e UX.",
      result: "Eficiência máxima e decisões embasadas.",
      resultIcon: "🔍",
    },
    {
      number: "05",
      icon: "🏗️",
      title: "Consolidação",
      description:
        "Crescimento que se mantém e evolui. Formalizamos aprendizados, criamos playbooks internos e conectamos marketing, vendas e dados em um único ecossistema. A operação deixa de depender de campanhas pontuais e passa a operar sob um modelo sustentável e previsível.",
      result: "Estrutura sólida, cultura de dados e expansão contínua.",
      resultIcon: "📈",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-[#8B1538] via-[#1a2b4a] to-[#8B1538] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />
      </div>

      <div className="container px-4 mx-auto relative z-10 flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-16 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
            O Método F&C de Escala Sustentável
          </h2>
          <p className="text-lg md:text-xl text-white/80 text-pretty">
            Uma estrutura desenvolvida para transformar operações em crescimento previsível, unindo estratégia, dados e
            experiência em um processo contínuo de evolução.
          </p>
        </div>

        {/* Steps Grid - 3 cards em cima, 2 centralizados embaixo */}
        <div className="w-full max-w-7xl mx-auto">
          {/* Primeira linha - 3 cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6 justify-items-center">
            {steps.slice(0, 3).map((step, index) => (
              <Card
                key={index}
                className="bg-white/10 backdrop-blur-sm border-white/20 p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-xl w-full max-w-md"
              >
                {/* Step number and icon */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-5xl">{step.icon}</span>
                  <span className="text-sm font-mono text-white/60">Etapa {step.number}</span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>

                {/* Description */}
                <p className="text-white/80 text-sm leading-relaxed mb-4">{step.description}</p>

                {/* Result */}
                <div className="pt-4 border-t border-white/20">
                  <div className="flex items-start gap-2">
                    <span className="text-xl flex-shrink-0">{step.resultIcon}</span>
                    <div>
                      <p className="text-xs font-semibold text-white/60 mb-1">Resultado esperado:</p>
                      <p className="text-sm text-white/90 font-medium">{step.result}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Segunda linha - 2 cards centralizados */}
          <div className="flex flex-wrap justify-center gap-6">
            {steps.slice(3, 5).map((step, index) => (
              <Card
                key={index + 3}
                className="bg-white/10 backdrop-blur-sm border-white/20 p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-xl w-full max-w-md"
              >
                {/* Step number and icon */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-5xl">{step.icon}</span>
                  <span className="text-sm font-mono text-white/60">Etapa {step.number}</span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>

                {/* Description */}
                <p className="text-white/80 text-sm leading-relaxed mb-4">{step.description}</p>

                {/* Result */}
                <div className="pt-4 border-t border-white/20">
                  <div className="flex items-start gap-2">
                    <span className="text-xl flex-shrink-0">{step.resultIcon}</span>
                    <div>
                      <p className="text-xs font-semibold text-white/60 mb-1">Resultado esperado:</p>
                      <p className="text-sm text-white/90 font-medium">{step.result}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
