"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"
import { SectionBackground } from "@/components/section-background"
import { useState } from "react"

export function Contact() {
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    try {
      await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      })
      setSuccess(true)
      event.target.reset()
    } catch (err) {
      setError(true)
    }
  }

  return (
    <section id="contact" className="py-6 sm:py-12 md:py-24 relative overflow-hidden bg-background dark:bg-background">
  <SectionBackground variant="dark" />
  <div className="container px-4 mx-auto max-w-7xl relative z-10">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-6 sm:mb-8 md:mb-16 space-y-2 sm:space-y-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-playfair font-bold text-foreground dark:text-foreground">
          Vamos Conversar?
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground dark:text-muted-foreground max-w-2xl mx-auto text-pretty">
          Estamos prontos para transformar suas ideias em resultados concretos
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-12">
        <div className="order-2 md:order-1 space-y-4 p-2 sm:p-4 md:p-0">
          <div className="space-y-4">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-sm sm:text-base text-foreground dark:text-foreground">Email</h3>
                <p className="text-muted-foreground dark:text-muted-foreground text-xs sm:text-sm">contato@ferreiracosseau.com</p>
              </div>
            </div>
            {/* Outros itens (Phone, MapPin) seguem o mesmo padrão */}
          </div>
        </div>
        <form name="contact" method="post" onSubmit={handleSubmit} className="order-1 md:order-2 space-y-3 sm:space-y-4 md:space-y-6">
          <input type="hidden" name="form-name" value="contact" />
          <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
            <label>
              Não preencha se for humano: <input name="bot-field" />
            </label>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 md:gap-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm sm:text-base text-foreground dark:text-foreground">Nome</label>
              <Input id="name" name="name" placeholder="Seu nome" className="w-full bg-input text-foreground dark:text-foreground border-border" />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm sm:text-base text-foreground dark:text-foreground">Email</label>
              <Input id="email" name="email" type="email" placeholder="seu@email.com" className="w-full bg-input text-foreground dark:text-foreground border-border" />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="subject" className="text-sm sm:text-base text-foreground dark:text-foreground">Assunto</label>
            <Input id="subject" name="subject" placeholder="Como podemos ajudar?" className="w-full bg-input text-foreground dark:text-foreground border-border" />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm sm:text-base text-foreground dark:text-foreground">Mensagem</label>
            <Textarea id="message" name="message" placeholder="Conte-nos mais sobre seu projeto..." rows={4} className="w-full bg-input text-foreground dark:text-foreground border-border" />
          </div>
          <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
            Enviar Mensagem
          </Button>
          {success && <p className="text-green-500 dark:text-green-400">Mensagem enviada com sucesso!</p>}
          {error && <p className="text-red-500 dark:text-red-400">Erro ao enviar. Tente novamente.</p>}
        </form>
      </div>
    </div>
  </div>
</section>
  )
}
