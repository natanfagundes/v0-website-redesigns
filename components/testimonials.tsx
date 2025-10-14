"use client"

import { Card } from "@/components/ui/card"
import { Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

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
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerPage = 3

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + itemsPerPage >= testimonials.length ? 0 : prev + itemsPerPage))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev - itemsPerPage < 0 ? Math.max(0, testimonials.length - itemsPerPage) : prev - itemsPerPage,
    )
  }

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + itemsPerPage)

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20 flex flex-col items-center">
      <div className="container px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 mx-auto">
            <Quote className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">O Que Nossos Clientes Dizem</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A confiança de grandes empresas que escolheram nossa assessoria jurídica para impulsionar seus negócios
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background"
            onClick={prevSlide}
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background"
            onClick={nextSlide}
            disabled={currentIndex + itemsPerPage >= testimonials.length}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Testimonials Carousel */}
          <div className="overflow-hidden flex justify-center">
            <div
              className="flex transition-transform duration-500 ease-in-out gap-8"
              style={{ transform: `translateX(-${(currentIndex / itemsPerPage) * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="flex-shrink-0 w-full md:w-[calc(33.333%-1.5rem)] p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card border-border/50"
                >
                  {/* Quote Icon */}
                  <div className="mb-6">
                    <Quote className="w-10 h-10 text-primary/20" />
                  </div>

                  {/* Quote Text */}
                  <blockquote className="text-lg leading-relaxed mb-8 text-foreground/90">
                    "{testimonial.quote}"
                  </blockquote>

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
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: Math.ceil(testimonials.length / itemsPerPage) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * itemsPerPage)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  Math.floor(currentIndex / itemsPerPage) === index
                    ? "bg-primary w-8"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
