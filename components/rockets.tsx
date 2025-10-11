"use client"

import { useEffect, useState } from "react"

interface Rocket {
  id: number
  x: number
  delay: number
  duration: number
  color: "red" | "blue"
}

export function Rockets() {
  const [rockets, setRockets] = useState<Rocket[]>([])

  useEffect(() => {
    // Create initial rockets
    const initialRockets: Rocket[] = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 8 + Math.random() * 4,
      color: Math.random() > 0.5 ? "red" : "blue",
    }))
    setRockets(initialRockets)

    // Add new rockets periodically
    const interval = setInterval(() => {
      setRockets((prev) => {
        const newRocket: Rocket = {
          id: Date.now(),
          x: Math.random() * 100,
          delay: 0,
          duration: 8 + Math.random() * 4,
          color: Math.random() > 0.5 ? "red" : "blue",
        }
        return [...prev.slice(-5), newRocket]
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {rockets.map((rocket) => (
        <div
          key={rocket.id}
          className="absolute bottom-0 animate-rocket-fly"
          style={{
            left: `${rocket.x}%`,
            animationDelay: `${rocket.delay}s`,
            animationDuration: `${rocket.duration}s`,
          }}
        >
          {/* Rocket body */}
          <div className="relative">
            {/* Flame/trail */}
            <div
              className={`absolute -bottom-8 left-1/2 -translate-x-1/2 w-2 h-12 blur-sm animate-flame ${
                rocket.color === "red"
                  ? "bg-gradient-to-b from-primary/60 to-transparent"
                  : "bg-gradient-to-b from-secondary/60 to-transparent"
              }`}
            />
            <div
              className={`absolute -bottom-6 left-1/2 -translate-x-1/2 w-1 h-8 blur-[2px] animate-flame-inner ${
                rocket.color === "red"
                  ? "bg-gradient-to-b from-primary to-transparent"
                  : "bg-gradient-to-b from-secondary to-transparent"
              }`}
            />

            {/* Rocket SVG */}
            <svg
              width="24"
              height="32"
              viewBox="0 0 24 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-lg"
            >
              {/* Rocket body */}
              <path
                d="M12 2L18 12V24C18 25.1046 17.1046 26 16 26H8C6.89543 26 6 25.1046 6 24V12L12 2Z"
                fill={rocket.color === "red" ? "#8B1538" : "#1a2b4a"}
                stroke="white"
                strokeWidth="0.5"
              />
              {/* Window */}
              <circle cx="12" cy="14" r="3" fill="white" opacity="0.9" />
              <circle cx="12" cy="14" r="2" fill="#60a5fa" opacity="0.5" />
              {/* Fins */}
              <path d="M6 20L2 28L6 26V20Z" fill={rocket.color === "red" ? "#6B0F2A" : "#0f1729"} />
              <path d="M18 20L22 28L18 26V20Z" fill={rocket.color === "red" ? "#6B0F2A" : "#0f1729"} />
              {/* Nose cone highlight */}
              <path d="M12 2L10 8L12 10L14 8L12 2Z" fill="white" opacity="0.2" />
            </svg>

            {/* Sparkles */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2">
              <div className="w-1 h-1 bg-yellow-300 rounded-full animate-sparkle" />
            </div>
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 -ml-2">
              <div className="w-0.5 h-0.5 bg-orange-300 rounded-full animate-sparkle animation-delay-200" />
            </div>
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 ml-2">
              <div className="w-0.5 h-0.5 bg-yellow-200 rounded-full animate-sparkle animation-delay-400" />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
