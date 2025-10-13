export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo and tagline */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-0">
              <div className="w-12 h-12 bg-primary" />
              <div className="w-12 h-12 bg-secondary" />
            </div>
            <p className="text-muted-foreground max-w-sm">
              Transformamos estratégias em resultados concretos com excelência e inovação.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Estratégia de Marketing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Performance Digital
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Gestão de Marca
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Inovação & Tecnologia
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Portfólio
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Ferreira & Cousseau. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
