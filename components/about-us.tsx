"use client"

import { SectionBackground } from "@/components/section-background"
import { Target, Eye, Heart } from "lucide-react"

export function AboutUs() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <SectionBackground variant="dark" />

      <div className="container px-4 mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16 space-y-4">
          <p className="text-sm text-primary font-mono">{"{ SOBRE NÓS }"}</p>
          <h2 className="text-4xl md:text-5xl font-bold">Sobre Nós</h2>
        </div>

        <div className="space-y-8 mb-16">
          <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-4xl mx-auto">
            Na The Ferreira & Cousseau, somos especialistas em mídia paga, programática e estratégias digitais que
            impulsionam negócios. Nosso compromisso é conectar marcas aos seus públicos-alvo de forma inteligente,
            eficaz e criativa, gerando resultados tangíveis e sustentáveis.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-4xl mx-auto">
            Com uma equipe experiente e apaixonada por inovação, utilizamos as melhores ferramentas e práticas do
            mercado para criar campanhas que vão além do alcance: elas convertem, engajam e fidelizam. Desde pequenos
            ajustes táticos até estratégias robustas e de longo prazo, estamos prontos para transformar desafios em
            oportunidades de crescimento.
          </p>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border space-y-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Target className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Missão</h3>
            <p className="text-muted-foreground leading-relaxed">
              Maximizar o potencial de cada cliente por meio de soluções digitais personalizadas e orientadas por
              resultados.
            </p>
          </div>

          <div className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border space-y-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Eye className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Visão</h3>
            <p className="text-muted-foreground leading-relaxed">
              Ser referência em estratégias de mídia que conectam pessoas e marcas, promovendo crescimento mútuo.
            </p>
          </div>

          <div className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border space-y-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Heart className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Valores</h3>
            <p className="text-muted-foreground leading-relaxed">
              Inovação, excelência, ética e parceria guiam cada decisão e ação que tomamos.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-card/50 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-border">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Por que escolher a The Ferreira & Cousseau?
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h4 className="font-semibold text-lg">Resultados mensuráveis</h4>
              <p className="text-muted-foreground">Cada ação é planejada com foco em KPIs claros.</p>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold text-lg">Expertise em mídia paga e programática</h4>
              <p className="text-muted-foreground">
                Utilizamos tecnologia de ponta para segmentar e impactar o público certo.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold text-lg">Soluções sob medida</h4>
              <p className="text-muted-foreground">Estratégias alinhadas às suas necessidades e objetivos.</p>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold text-lg">Parceria de longo prazo</h4>
              <p className="text-muted-foreground">
                Estamos aqui para ser a ponte entre o presente da sua marca e o futuro que você deseja construir.
              </p>
            </div>
          </div>

          <p className="text-center text-muted-foreground mt-8 text-lg">
            Seja para aumentar vendas, fortalecer sua marca ou engajar seu público, a The Ferreira & Cousseau está aqui
            para transformar seus objetivos em realidade.
          </p>
        </div>
      </div>
    </section>
  )
}
