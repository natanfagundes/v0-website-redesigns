"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"
import { SectionBackground } from "@/components/section-background"
import { useState } from "react";  // Adicione isso para gerenciar estado (opcional, para feedback)

export function Contact() {
  const [success, setSuccess] = useState(false);  // Opcional: para mostrar mensagem de sucesso
  const [error, setError] = useState(false);     // Opcional: para erro

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    try {
      await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });
      setSuccess(true);  // Mostre sucesso
      event.target.reset();  // Limpe o formulário
    } catch (err) {
      setError(true);  // Mostre erro
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      <SectionBackground variant="dark" />

      <div className="container px-4 mx-auto max-w-7xl relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-balance">Vamos Conversar?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Estamos prontos para transformar suas ideias em resultados concretos
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">contato@ferreiracosseau.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Telefone</h3>
                    <p className="text-muted-foreground">+55 (11) 9999-9999</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Localização</h3>
                    <p className="text-muted-foreground">São Paulo, Brasil</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form name="contact" method="post" onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="form-name" value="contact" />
              
              {/* Honeypot para spam (não mexa) */}
              <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                <label>
                  Não preencha se for humano: 
                  <input name="bot-field" />
                </label>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Nome
                  </label>
                  <Input id="name" name="name" placeholder="Seu nome" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" name="email" type="email" placeholder="seu@email.com" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Assunto
                </label>
                <Input id="subject" name="subject" placeholder="Como podemos ajudar?" />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Mensagem
                </label>
                <Textarea id="message" name="message" placeholder="Conte-nos mais sobre seu projeto..." rows={6} />
              </div>

              <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                Enviar Mensagem
              </Button>

              {success && <p>Mensagem enviada com sucesso!</p>}
              {error && <p>Erro ao enviar. Tente novamente.</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
