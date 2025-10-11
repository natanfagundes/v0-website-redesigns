export function Contact() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      });
      if (response.ok) {
        setSuccess(true);
        event.target.reset();
      } else {
        throw new Error('Erro no envio');
      }
    } catch (err) {
      setError(true);
      console.error(err);
    }
  };

  return (
    <section id="contact" className="py-6 sm:py-12 md:py-24 bg-background dark:bg-background">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="max-w-6xl mx-auto text-center mb-6 sm:mb-8 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground dark:text-foreground">Vamos Conversar?</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">Estamos prontos para transformar suas ideias em resultados concretos</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div className="space-y-4 p-2 sm:p-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-primary/10 flex items-center justify-center">
                <Mail className="w-4 h-4 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-sm text-foreground dark:text-foreground">Email</h3>
                <p className="text-gray-600 dark:text-gray-300 text-xs">contato@ferreiracosseau.com</p>
              </div>
            </div>
            {/* Repita pra Phone e MapPin com mesmo padrão */}
          </div>
          <form name="contact" method="post" onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
            <input type="hidden" name="form-name" value="contact" />
            <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
              <label><input name="bot-field" /></label>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm text-foreground dark:text-foreground">Nome</label>
                <Input id="name" name="name" placeholder="Seu nome" className="w-full" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm text-foreground dark:text-foreground">Email</label>
                <Input id="email" name="email" type="email" placeholder="seu@email.com" className="w-full" />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm text-foreground dark:text-foreground">Assunto</label>
              <Input id="subject" name="subject" placeholder="Como podemos ajudar?" className="w-full" />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm text-foreground dark:text-foreground">Mensagem</label>
              <Textarea id="message" name="message" placeholder="Conte-nos mais..." rows={4} className="w-full" />
            </div>
            <Button type="submit" size="lg" className="w-full bg-primary text-white hover:bg-primary/90">Enviar Mensagem</Button>
            {success && <p className="text-green-500 dark:text-green-400">Mensagem enviada com sucesso!</p>}
            {error && <p className="text-red-500 dark:text-red-400">Erro ao enviar. Tente novamente.</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
