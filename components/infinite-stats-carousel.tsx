"use client"

export function InfiniteStatsCarousel() {
  const stats = [
    { icon: "📅", number: "5 ANOS", label: "DE EXISTÊNCIA" },
    { icon: "👥", number: "+50", label: "CLIENTES ATIVOS" },
    { icon: "💰", number: "+10 MI", label: "DE FATURAMENTO EM ADS" },
  ]

  // Duplicate stats for seamless loop
  const duplicatedStats = [...stats, ...stats, ...stats]

  return (
    <section className="py-4 bg-card border-y border-border overflow-hidden">
      <div className="relative max-w-7xl mx-auto">
        <div className="flex animate-scroll-left">
          {duplicatedStats.map((stat, index) => (
            <div key={index} className="flex items-center gap-3 px-8 flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-xl">
                {stat.icon}
              </div>
              <div>
                <div className="text-xl font-bold text-primary">{stat.number}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
