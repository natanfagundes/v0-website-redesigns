"use client"

import Image from "next/image"

export function ClientsCarousel() {
  const clients = [
    { name: "Santander", logo: "/santander-bank-red-logo.jpg" },
    { name: "Zapsign", logo: "/zapsign-digital-signature-logo.jpg" },
    { name: "Bradesco", logo: "/bradesco-bank-logo.jpg" },
    { name: "Stellantis", logo: "/stellantis-automotive-logo.jpg" },
    { name: "Fiat", logo: "/fiat-car-brand-logo.jpg" },
    { name: "Jeep", logo: "/jeep-car-brand-logo.jpg" },
    { name: "RAM", logo: "/ram-trucks-logo.jpg" },
    { name: "Peugeot", logo: "/peugeot-lion-logo.jpg" },
    { name: "Citroen", logo: "/citroen-chevron-logo.jpg" },
    { name: "Vibra Residencial", logo: "/vibra-residencial-energy-logo.jpg" },
    { name: "REMAX", logo: "/remax-real-estate-balloon-logo.jpg" },
    { name: "Kaspersky", logo: "/kaspersky-security-logo.jpg" },
    { name: "Microsoft", logo: "/microsoft-four-squares-logo.jpg" },
    { name: "Grupo FN", logo: "/grupo-fn-logo.jpg" },
    { name: "Super Pro", logo: "/super-pro-ferramentas-tools-logo.jpg" },
    { name: "Ferramentas Kennedy", logo: "/ferramentas-kennedy-tools-logo.jpg" },
    { name: "Oncoclinicas", logo: "/oncoclinicas-healthcare-logo.jpg" },
    { name: "Toyota", logo: "/toyota-car-brand-logo.jpg" },
    { name: "Poliplac", logo: "/poliplac-logo.jpg" },
    { name: "Entreatto", logo: "/entreatto-logo.jpg" },
    { name: "OrthoDontic", logo: "/orthodontic-dental-logo.jpg" },
    { name: "OdontoCompany", logo: "/odontocompany-dental-logo.jpg" },
    { name: "CanalLike", logo: "/canallike-logo.jpg" },
    { name: "Faculdade UNIFAA", logo: "/faculdade-unifaa-university-logo.jpg" },
    { name: "Okena PetChef", logo: "/okena-petchef-pet-food-logo.jpg" },
    { name: "Surreal", logo: "/surreal-brand-logo.jpg" },
  ]

  const duplicatedClients = [...clients, ...clients, ...clients]

  return (
    <section className="py-16 bg-card border-y border-border overflow-hidden">
      <div className="container px-4 mx-auto mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center">Clientes que Confiam em Nós</h2>
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="flex animate-scroll-left">
          {duplicatedClients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center px-8 flex-shrink-0 min-w-[200px] h-24 bg-background/50 rounded-lg mx-2"
            >
              <Image
                src={client.logo || "/placeholder.svg"}
                alt={`${client.name} logo`}
                width={180}
                height={80}
                className="object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
