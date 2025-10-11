/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],  // Usa classe 'dark' no <html> pra controle manual ou sistema
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',  // Caminhos antigos, se usar
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',    // App Router do Next.js
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',  // Padrão, mas confirmamos
        'md': '768px',  // Ajuste se precisar
        'lg': '1024px',
      },
      colors: {
        'primary': '#8B0000',  // Exemplo da cor do botão no Contact
      },
    },
  },
  plugins: [],
}
