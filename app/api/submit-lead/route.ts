import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    console.log("[v0] Received lead submission request")

    const body = await request.json()
    console.log("[v0] Request body:", body)

    const { nome, telefone, email, empresa, servicos } = body

    if (!nome || !telefone || !email || !empresa || !servicos || servicos.length === 0) {
      console.log("[v0] Validation failed - missing fields")
      return NextResponse.json({ error: "Todos os campos são obrigatórios" }, { status: 400 })
    }

    const scriptUrl =
      "https://script.google.com/macros/s/AKfycbwQ_lnnJrXWdTvJDLNF0maYSwwAqAwTJ0ns0ejpFR-J7Wh69BOb97FQ9xvjJeEv3T5r/exec"

    console.log("[v0] Using Google Script URL:", scriptUrl)

    const servicosFormatted = Array.isArray(servicos) ? servicos.join(", ") : servicos

    const payload = {
      nome,
      telefone,
      email,
      empresa,
      servicos: servicosFormatted,
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
        redirect: "manual", // Mudado para 'manual' para capturar redirects
        signal: controller.signal,
      })

      clearTimeout(timeoutId)

      console.log("[v0] Google Sheets response status:", response.status)
      console.log("[v0] Response URL:", response.url)

      if (response.status === 302 || response.status === 301) {
        const location = response.headers.get("location")
        console.log("[v0] Redirect detected to:", location)

        if (!location) {
          const htmlBody = await response.text()
          const urlMatch = htmlBody.match(/HREF="([^"]+)"/)

          if (urlMatch && urlMatch[1]) {
            const redirectUrl = urlMatch[1].replace(/&amp;/g, "&")
            console.log("[v0] Extracted redirect URL from HTML:", redirectUrl)

            const controller2 = new AbortController()
            const timeoutId2 = setTimeout(() => controller2.abort(), 10000)

            try {
              const redirectResponse = await fetch(redirectUrl, {
                method: "GET",
                signal: controller2.signal,
              })

              clearTimeout(timeoutId2)

              console.log("[v0] Redirect response status:", redirectResponse.status)

              const redirectText = await redirectResponse.text()
              console.log("[v0] Redirect response body:", redirectText.substring(0, 200))

              try {
                const result = JSON.parse(redirectText)
                console.log("[v0] Successfully parsed redirect response as JSON:", result)

                if (result.success) {
                  return NextResponse.json({
                    success: true,
                    message: "Lead registrado com sucesso!",
                    data: result,
                  })
                } else {
                  throw new Error(result.error || "Erro ao registrar lead")
                }
              } catch (parseError) {
                console.error("[v0] Redirect response is not JSON:", redirectText.substring(0, 500))

                if (redirectResponse.ok) {
                  return NextResponse.json({
                    success: true,
                    message: "Lead registrado com sucesso!",
                  })
                }

                throw new Error("Resposta do Google Sheets não é JSON válido")
              }
            } catch (redirectError: any) {
              clearTimeout(timeoutId2)
              if (redirectError.name === "AbortError") {
                throw new Error("Timeout ao processar redirect do Google Sheets")
              }
              throw redirectError
            }
          }
        }

        throw new Error("Não foi possível seguir o redirect do Google Apps Script. Verifique a configuração.")
      }

      const contentType = response.headers.get("content-type")
      console.log("[v0] Response Content-Type:", contentType)

      if (!response.ok) {
        const errorText = await response.text()
        console.error("[v0] Google Sheets error response:", errorText)
        throw new Error(`Falha ao enviar dados para o Google Sheets: ${response.status}`)
      }

      const responseText = await response.text()
      console.log("[v0] Response body:", responseText.substring(0, 200))

      try {
        const result = JSON.parse(responseText)
        console.log("[v0] Google Sheets success response:", result)

        return NextResponse.json({
          success: true,
          message: "Lead registrado com sucesso!",
          data: result,
        })
      } catch (parseError) {
        if (response.ok) {
          console.log("[v0] Response is not JSON but status is OK")
          return NextResponse.json({
            success: true,
            message: "Lead registrado com sucesso!",
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
    console.error("[v0] Error submitting lead:", error)
    return NextResponse.json(
      {
        error: "Erro ao processar solicitação",
        details: error.message || "Erro desconhecido",
      },
      { status: 500 },
    )
  }
}
