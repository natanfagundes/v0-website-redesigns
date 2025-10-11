"use client"

import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"
import { SectionBackground } from "@/components/section-background"

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-card relative overflow-hidden">
      <SectionBackground variant="secondary" />

      <div className="container px-4 mx-auto max-w-7xl relative z-10">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="space-y-8">
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-balance">Excelência em cada projeto</h2>

              <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                <ScrollReveal delay={100}>
                  <p>
                    Na <span className="text-foreground font-semibold">Ferreira & Cosseau</span>, acreditamos que
                    marketing de alta performance vai além de números e métricas. É sobre criar conexões autênticas e
                    gerar valor real para nossos clientes.
                  </p>
                </ScrollReveal>

                <ScrollReveal delay={200}>
                  <p>
                    Com uma equipe experiente e apaixonada por inovação, desenvolvemos estratégias personalizadas que
                    transformam desafios em oportunidades de crescimento sustentável.
                  </p>
                </ScrollReveal>

                <ScrollReveal delay={300}>
                  <p>
                    Nossa abordagem combina criatividade, dados e tecnologia para entregar resultados que superam
                    expectativas e impulsionam o sucesso dos nossos parceiros.
                  </p>
                </ScrollReveal>
              </div>

              <ScrollReveal delay={400}>
                <div className="pt-4">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 bg-transparent hover:scale-105 transition-transform"
                  >
                    Conheça Nossa História
                  </Button>
                </div>
              </ScrollReveal>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
