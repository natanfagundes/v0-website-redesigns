"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection("hero")}>
            <Image src="/logo.png" alt="Ferreira & Cousseau" width={50} height={50} className="object-contain" />
            <span className="text-xl font-bold text-foreground hidden sm:block">Ferreira & Cousseau</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("services")}
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              Contato
            </button>
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="text-foreground/80 hover:text-primary transition-colors p-2 rounded-lg hover:bg-muted"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            )}
            <Button onClick={() => scrollToSection("contact")} className="bg-primary hover:bg-primary/90">
              Fale Conosco
            </Button>
          </div>

          <div className="md:hidden flex items-center gap-3">
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="text-foreground/80 hover:text-primary transition-colors p-2 rounded-lg hover:bg-muted"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            )}
            <button className="text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border">
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left text-foreground/80 hover:text-primary transition-colors py-2"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left text-foreground/80 hover:text-primary transition-colors py-2"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left text-foreground/80 hover:text-primary transition-colors py-2"
            >
              Contato
            </button>
            <Button onClick={() => scrollToSection("contact")} className="w-full bg-primary hover:bg-primary/90">
              Fale Conosco
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}
