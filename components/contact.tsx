"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { SectionBackground } from "@/components/section-background";

export function Contact() {
  // Estado para armazenar os dados do formulário
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Estado para feedback ao usuário
  const [status, setStatus] = useState("");

  // Atualiza o estado quando o usuário digita
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Envia os dados pro backend
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Enviando...");

    try {
      const res = await fetch("/api/form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("Mensagem enviada com sucesso ✅");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("Erro ao enviar. Tente novamente.");
      }
    } catch (error) {
      setStatus("Erro de conexão. Verifique sua internet.");
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
            {/* Info */}
            <div className="space-y-8">
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

            {/* Formulário */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Nome</label>
                  <Input id="name" value={formData.name} onChange={handleChange} placeholder="Seu nome" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <Input id="email" type="email" value={formData.email} onChange={handleChange} placeholder="seu@email.com" required />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">Assunto</label>
                <Input id="subject" value={formData.subject} onChange={handleChange} placeholder="Como podemos ajudar?" required />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Mensagem</label>
                <Textarea id="message" value={formData.message} onChange={handleChange} placeholder="Conte-nos mais sobre seu projeto..." rows={6} required />
              </div>

              <Button size="lg" type="submit" className="w-full bg-primary hover:bg-primary/90">
                Enviar Mensagem
              </Button>

              {status && (
                <p className="text-center text-sm text-muted-foreground mt-4">{status}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
