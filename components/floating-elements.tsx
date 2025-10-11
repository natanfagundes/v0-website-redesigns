"use client"

import { useEffect, useState } from "react"

export function FloatingElements() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating geometric shapes */}
      <div
        className="absolute top-1/4 left-1/4 w-20 h-20 border-2 border-primary/30 rotate-45 animate-float"
        style={{
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px) rotate(45deg)`,
        }}
      />
      <div
        className="absolute top-1/3 right-1/4 w-16 h-16 border-2 border-secondary/30 rounded-full animate-float-delayed"
        style={{
          transform: `translate(${-mousePosition.x * 0.015}px, ${mousePosition.y * 0.015}px)`,
        }}
      />
      <div
        className="absolute bottom-1/4 left-1/3 w-24 h-24 border-2 border-primary/20 animate-float-slow"
        style={{
          transform: `translate(${mousePosition.x * 0.01}px, ${-mousePosition.y * 0.01}px)`,
        }}
      />
      <div
        className="absolute bottom-1/3 right-1/3 w-12 h-12 bg-secondary/10 rounded-full animate-pulse-glow"
        style={{
          transform: `translate(${-mousePosition.x * 0.025}px, ${-mousePosition.y * 0.025}px)`,
        }}
      />

      {/* Animated lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        <line
          x1="10%"
          y1="20%"
          x2="90%"
          y2="80%"
          stroke="currentColor"
          strokeWidth="1"
          className="text-primary animate-draw-line"
        />
        <line
          x1="90%"
          y1="30%"
          x2="10%"
          y2="70%"
          stroke="currentColor"
          strokeWidth="1"
          className="text-secondary animate-draw-line-delayed"
        />
      </svg>

      {/* Particle dots */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-foreground/20 rounded-full animate-particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 10}s`,
          }}
        />
      ))}
    </div>
  )
}
