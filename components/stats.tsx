"use client"

import { useEffect, useRef, useState } from "react"
import { ScrollReveal } from "@/components/scroll-reveal"

export function Stats() {
  const stats = [
    { number: 10, suffix: "+", label: "Anos de Experiência" },
    { number: 200, suffix: "+", label: "Projetos Entregues" },
    { number: 98, suffix: "%", label: "Satisfação dos Clientes" },
    { number: 50, suffix: "+", label: "Empresas Atendidas" },
  ]

  return (
    <section className="py-20 bg-card border-y border-border relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <StatCounter number={stat.number} suffix={stat.suffix} label={stat.label} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function StatCounter({ number, suffix, label }: { number: number; suffix: string; label: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          let start = 0
          const end = number
          const duration = 2000
          const increment = end / (duration / 16)

          const timer = setInterval(() => {
            start += increment
            if (start >= end) {
              setCount(end)
              clearInterval(timer)
            } else {
              setCount(Math.floor(start))
            }
          }, 16)

          return () => clearInterval(timer)
        }
      },
      { threshold: 0.5 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [number, hasAnimated])

  return (
    <div ref={ref} className="text-center space-y-2">
      <div className="text-4xl md:text-5xl font-bold text-primary font-mono">
        {count}
        {suffix}
      </div>
      <div className="text-sm md:text-base text-muted-foreground">{label}</div>
    </div>
  )
}
