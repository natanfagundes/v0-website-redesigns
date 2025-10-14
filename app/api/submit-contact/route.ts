import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    console.log("[v0] Received contact form submission")

    const body = await request.json()
    console.log("[v0] Request body:", body)

    const { nome, email, assunto, mensagem } = body

    if (!nome || !email || !assunto || !mensagem) {
      console.log("[v0] Validation failed - missing fields")
      return NextResponse.json({ error: "Todos os campos são obrigatórios" }, { status: 400 })
    }

    const scriptUrl =
      "https://script.google.com/macros/s/AKfycbzhFx2PJ5qFZGYRT9nrpISxf4ZLuk6-SvGFIhTxJ-S03Fvg7CYQaBtGt4ReX7_j34Fr/exec"

    console.log("[v0] Using contact form Google Script URL")

    const payload = {
      nome,
      email,
      assunto,
      mensagem,
      timestamp: new Date().toISOString(),
    }

    console.log("[v0] Payload to send:", payload)

    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 15000)

    try {
      const response = await fetch(scriptUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
        redirect: "follow",
        signal: controller.signal,
      })

      clearTimeout(timeoutId)

      console.log("[v0] Google Sheets response status:", response.status)

      if (!response.ok) {
        const errorText = await response.text()
        console.error("[v0] Google Sheets error response:", errorText)
        throw new Error(`Falha ao enviar dados para o Google Sheets: ${response.status}`)
      }

      const responseText = await response.text()
      console.log("[v0] Response body:", responseText)

      try {
        const result = JSON.parse(responseText)
        console.log("[v0] Google Sheets success response:", result)

        if (result.success) {
          return NextResponse.json({
            success: true,
            message: "Mensagem enviada com sucesso!",
          })
        } else {
          throw new Error(result.error || "Erro ao enviar mensagem")
        }
      } catch (parseError) {
        if (response.ok) {
          console.log("[v0] Response is not JSON but status is OK")
          return NextResponse.json({
            success: true,
            message: "Mensagem enviada com sucesso!",
          })
        }

        throw new Error("Resposta do Google Sheets não é JSON válido")
      }
    } catch (fetchError: any) {
      clearTimeout(timeoutId)

      if (fetchError.name === "AbortError") {
        console.error("[v0] Request timeout")
        throw new Error("Timeout ao conectar com Google Sheets")
      }

      throw fetchError
    }
  } catch (error: any) {
    console.error("[v0] Error submitting contact form:", error)
    return NextResponse.json(
      {
        error: "Erro ao processar solicitação",
        details: error.message || "Erro desconhecido",
      },
      { status: 500 },
    )
  }
}
