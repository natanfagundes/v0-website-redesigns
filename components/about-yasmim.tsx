"use client"

import { SectionBackground } from "@/components/section-background"
import Image from "next/image"

export function AboutYasmim() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <SectionBackground variant="light" />

      <div className="container px-4 mx-auto max-w-6xl relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <div className="flex justify-center">
            <div className="relative w-80 h-80 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/design-mode/yasmim.jpg.jpeg"
                alt="Yasmim Ferreira"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-sm text-primary font-mono">{"{ LIDERANÇA }"}</p>
              <h2 className="text-4xl md:text-5xl font-bold">💼 Quem é Yasmim Ferreira</h2>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Yasmim Ferreira é uma especialista em Full Stack Marketing com uma visão 360º que une estratégia,
                aquisição, conversão, retenção e análise de dados. Sua atuação é guiada por um propósito claro:
                transformar marcas em negócios sustentáveis, com performance e propósito.
              </p>

              <p>
                Com sólida experiência em mídia paga, programática, CRO, UX/UI, SEO e automação, Yasmim atua na
                interseção entre dados e criatividade — conectando cada etapa do funil para gerar crescimento previsível
                e escalável.
              </p>

              <p>
                Para ela, o marketing é um ecossistema vivo, onde cada decisão deve conversar com o todo. Sua
                metodologia integra análise, experimentação e performance para construir estratégias que unem branding e
                resultado.
              </p>

              <p>
                Reconhecida por sua capacidade de unir visão estratégica e execução prática, Yasmim ajuda empresas a
                crescerem de forma estruturada, com posicionamento claro, inteligência de dados e experiências que
                convertem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
