import { NextResponse } from "next/server"
import { writeFile, readFile, mkdir } from "fs/promises"
import { existsSync } from "fs"
import path from "path"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validação básica
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Todos os campos são obrigatórios" }, { status: 400 })
    }

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Email inválido" }, { status: 400 })
    }

    // Criar diretório de dados se não existir
    const dataDir = path.join(process.cwd(), "data")
    if (!existsSync(dataDir)) {
      await mkdir(dataDir, { recursive: true })
    }

    const csvPath = path.join(dataDir, "contacts.csv")
    const timestamp = new Date().toISOString()

    // Criar linha CSV (escapando vírgulas e aspas)
    const escapeCsv = (str: string) => {
      if (str.includes(",") || str.includes('"') || str.includes("\n")) {
        return `"${str.replace(/"/g, '""')}"`
      }
      return str
    }

    const csvLine = `${escapeCsv(timestamp)},${escapeCsv(name)},${escapeCsv(email)},${escapeCsv(subject)},${escapeCsv(message)}\n`

    // Verificar se o arquivo existe
    let fileContent = ""
    if (existsSync(csvPath)) {
      fileContent = await readFile(csvPath, "utf-8")
    } else {
      // Adicionar cabeçalho se for novo arquivo
      fileContent = "Data/Hora,Nome,Email,Assunto,Mensagem\n"
    }

    // Adicionar nova linha
    fileContent += csvLine

    // Salvar arquivo
    await writeFile(csvPath, fileContent, "utf-8")

    return NextResponse.json(
      {
        success: true,
        message: "Mensagem enviada com sucesso! Entraremos em contato em breve.",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("[v0] Erro ao processar formulário:", error)
    return NextResponse.json({ error: "Erro ao processar sua mensagem. Tente novamente." }, { status: 500 })
  }
}
