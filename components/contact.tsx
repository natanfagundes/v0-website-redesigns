"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { SectionBackground } from "@/components/section-background";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Enviando...");

    const res = await fetch("/api/form", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setStatus("Mensagem enviada com sucesso!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } else {
      setStatus("Erro ao enviar. Tente novamente.");
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
              {/* ...seu código dos ícones aqui... */}
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Nome</label>
                  <Input id="name" value={formData.name} onChange={handleChange} placeholder="Seu nome" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <Input id="email" type="email" value={formData.email} onChange={handleChange} placeholder="seu@email.com" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">Assunto</label>
                <Input id="subject" value={formData.subject} onChange={handleChange} placeholder="Como podemos ajudar?" />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Mensagem</label>
                <Textarea id="message" value={formData.message} onChange={handleChange} placeholder="Conte-nos mais sobre seu projeto..." rows={6} />
              </div>

              <Button size="lg" type="submit" className="w-full bg-primary hover:bg-primary/90">
                Enviar Mensagem
              </Button>

              {status && <p className="text-center text-sm text-muted-foreground">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
