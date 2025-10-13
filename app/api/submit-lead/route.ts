import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { nome, telefone, email, empresa, servicos } = body

    // Validate required fields
    if (!nome || !telefone || !email || !empresa || !servicos || servicos.length === 0) {
      return NextResponse.json({ error: "Todos os campos são obrigatórios" }, { status: 400 })
    }

    // Get the Google Apps Script Web App URL from environment variable
    const scriptUrl = process.env.GOOGLE_SCRIPT_URL

    if (!scriptUrl) {
      console.error("[v0] GOOGLE_SCRIPT_URL not configured")
      return NextResponse.json({ error: "Configuração do servidor incompleta" }, { status: 500 })
    }

    // Format services as comma-separated string
    const servicosFormatted = servicos.join(", ")

    // Send data to Google Apps Script
    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nome,
        telefone,
        email,
        empresa,
        servicos: servicosFormatted,
        timestamp: new Date().toISOString(),
      }),
    })

    if (!response.ok) {
      throw new Error("Falha ao enviar dados para o Google Sheets")
    }

    const result = await response.json()

    return NextResponse.json({ success: true, message: "Lead registrado com sucesso", data: result })
  } catch (error) {
    console.error("[v0] Error submitting lead:", error)
    return NextResponse.json({ error: "Erro ao processar solicitação" }, { status: 500 })
  }
}
