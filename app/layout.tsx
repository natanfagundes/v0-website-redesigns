import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Ferreira & Cosseau | Marketing & Serviços de Alta Performance",
  description: "Transformamos estratégias em resultados concretos com excelência e inovação",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${GeistSans.variable} ${playfair.variable}`} suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"  // Segue o tema do SO (mobile detecta Claro/Escuro)
          enableSystem={true}
          disableTransitionOnChange
        >
          <Suspense fallback={<div className="flex justify-center items-center h-screen">Carregando...</div>}>
            {children}
          </Suspense>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
