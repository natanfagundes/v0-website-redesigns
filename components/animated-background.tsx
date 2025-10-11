"use client"

export function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-blob" />
      <div className="absolute top-40 right-20 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
      <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-primary/15 rounded-full blur-3xl animate-blob animation-delay-4000" />
      <div className="absolute bottom-40 right-1/4 w-96 h-96 bg-secondary/15 rounded-full blur-3xl animate-blob animation-delay-6000" />
    </div>
  )
}
