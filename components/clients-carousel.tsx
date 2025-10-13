"use client"

import Image from "next/image"

export function ClientsCarousel() {
  const clients = [
    { name: "Santander", logo: "/santander.png" },
    { name: "Zapsign", logo: "/zapsign.png" },
    { name: "Bradesco", logo: "/bradesco.png" },
    { name: "Stellantis", logo: "/stellantis.png" },
    { name: "Jeep", logo: "/jeep.png" },
    { name: "RAM", logo: "/ram.png" },
    { name: "Microsoft", logo: "/microsoft.png" },
    { name: "REMAX", logo: "/remax.png" },
    { name: "Animale", logo: "/animale.png" },
    { name: "Citroën", logo: "/citroen.png" },
    { name: "Peugeot", logo: "/peugeot.png" },
    { name: "OnoClicas", logo: "/onoclicas.png" },
    { name: "Odonto Company", logo: "/odonto.png" },
    { name: "Faculdade", logo: "/faculdade.png" },
    { name: "Kaspersky", logo: "/kaspersky.png" },
  ]

  const duplicatedClients = [...clients, ...clients]

  return (
    <section className="py-16 bg-card border-y border-border overflow-hidden">
      <div className="container px-4 mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center">Marcas que já fizeram parte da nossa história</h2>
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="flex animate-scroll-infinite">
          {duplicatedClients.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="flex items-center justify-center px-8 flex-shrink-0 min-w-[200px] h-24 bg-background/50 rounded-lg mx-2"
            >
              <Image
                src={client.logo || "/placeholder.svg"}
                alt={`${client.name} logo`}
                width={180}
                height={80}
                className="object-contain opacity-80 hover:opacity-100 transition-opacity dark:brightness-90"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
