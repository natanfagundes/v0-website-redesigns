import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    console.log("[v0] Dados recebidos do formulário de serviços:", body)

    const { nome, telefone, email, empresa, servicos } = body

    if (!nome || !telefone || !email || !empresa || !servicos) {
      return NextResponse.json({ error: "Todos os campos são obrigatórios" }, { status: 400 })
    }

    const GOOGLE_SCRIPT_URL =
      "https://script.google.com/macros/s/AKfycbxBENqHaRJDRDBQANxQb_V2xU-czBOmySz8mFPi6P_4WaXJmorDgsYjI8ZgytabyfSu/exec"

    const payload = {
      nome,
      telefone,
      email,
      empresa,
      servicos: Array.isArray(servicos) ? servicos.join(", ") : servicos,
      timestamp: new Date().toISOString(),
    }

    console.log("[v0] Enviando para Google Sheets:", payload)

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })

    console.log("[v0] Status da resposta do Google:", response.status)

    if (!response.ok) {
      const errorText = await response.text()
      console.error("[v0] Erro do Google Apps Script:", errorText)
      throw new Error(`Erro ao enviar para Google Sheets: ${response.status}`)
    }

    const result = await response.json()
    console.log("[v0] Resposta do Google Sheets:", result)

    return NextResponse.json({ success: true, message: "Interesse enviado com sucesso!" })
  } catch (error) {
    console.error("[v0] Erro ao processar solicitação:", error)
    return NextResponse.json({ error: "Erro ao processar solicitação. Tente novamente." }, { status: 500 })
  }
}
