"use client"

import { Card } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "A assessoria jurídica da Yasmim foi fundamental para estruturarmos nossos contratos de forma segura e eficiente. Profissionalismo e expertise incomparáveis.",
    author: "Carlos Mendes",
    role: "Diretor Jurídico",
    company: "Santander Brasil",
    logo: "/santander.jpg",
  },
  {
    quote:
      "Compliance nunca foi tão simples. A consultoria transformou completamente nossa abordagem de gestão de riscos e conformidade regulatória.",
    author: "Ana Paula Silva",
    role: "Head de Compliance",
    company: "Bradesco",
    logo: "/bradesco.jpg",
  },
  {
    quote:
      "Contratos internacionais complexos resolvidos com clareza e precisão. A expertise em direito empresarial fez toda a diferença nos nossos negócios.",
    author: "Roberto Ferreira",
    role: "VP de Operações",
    company: "Stellantis",
    logo: "/stellantis.jpg",
  },
  {
    quote:
      "Consultoria estratégica que vai além do jurídico. Entende profundamente o negócio e oferece soluções práticas e eficazes.",
    author: "Mariana Costa",
    role: "Gerente de Contratos",
    company: "Microsoft Brasil",
    logo: "/microsoft.jpg",
  },
  {
    quote:
      "A parceria com o escritório elevou nosso padrão de governança corporativa. Assessoria completa e sempre disponível.",
    author: "João Santos",
    role: "Diretor Executivo",
    company: "Jeep Brasil",
    logo: "/jeep.jpg",
  },
  {
    quote:
      "Excelência técnica aliada a um atendimento humanizado. Resolveram questões complexas com agilidade e segurança jurídica.",
    author: "Patricia Oliveira",
    role: "Coordenadora Jurídica",
    company: "RE/MAX",
    logo: "/remax.jpg",
  },
]

export function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
            <Quote className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">O Que Nossos Clientes Dizem</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A confiança de grandes empresas que escolheram nossa assessoria jurídica para impulsionar seus negócios
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card border-border/50"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="w-10 h-10 text-primary/20" />
              </div>

              {/* Quote Text */}
              <blockquote className="text-lg leading-relaxed mb-8 text-foreground/90">"{testimonial.quote}"</blockquote>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-border/50">
                <div className="flex-1">
                  <div className="font-semibold text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  <div className="text-sm font-medium text-primary mt-1">{testimonial.company}</div>
                </div>
                {/* Company Logo */}
                <div className="w-16 h-16 rounded-lg bg-muted/50 flex items-center justify-center overflow-hidden">
                  <img
                    src={testimonial.logo || "/placeholder.svg"}
                    alt={`${testimonial.company} logo`}
                    className="w-full h-full object-contain opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Junte-se a empresas que confiam em nossa expertise jurídica
          </p>
          <div className="flex flex-wrap justify-center gap-4 opacity-60">
            {testimonials.slice(0, 6).map((t, i) => (
              <div key={i} className="w-20 h-20 rounded-lg bg-muted/30 flex items-center justify-center">
                <img
                  src={t.logo || "/placeholder.svg"}
                  alt={`${t.company} logo`}
                  className="w-full h-full object-contain p-2"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
