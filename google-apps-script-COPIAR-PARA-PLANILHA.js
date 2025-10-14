/**
 * INSTRUÇÕES DE INSTALAÇÃO:
 *
 * 1. Abra sua planilha do Google Sheets:
 *    https://docs.google.com/spreadsheets/d/1ano9JALhvo1qQdBrJuWOONYOL9e1GZS-nrJYF0QAe_Y/edit
 *
 * 2. Clique em "Extensões" > "Apps Script"
 *
 * 3. Delete todo o código que aparecer e cole este código completo
 *
 * 4. Clique em "Salvar" (ícone de disquete)
 *
 * 5. Clique em "Executar" > "doPost" para testar (vai dar erro, mas é normal)
 *
 * 6. Clique em "Implantar" > "Nova implantação"
 *
 * 7. Clique no ícone de engrenagem ao lado de "Selecionar tipo" e escolha "Aplicativo da Web"
 *
 * 8. Configure:
 *    - Descrição: "API de Contato Ferreira Cousseau"
 *    - Executar como: "Eu (seu email)"
 *    - Quem tem acesso: "Qualquer pessoa"
 *
 * 9. Clique em "Implantar"
 *
 * 10. Copie a URL que aparecer (ela deve terminar com /exec)
 *
 * 11. IMPORTANTE: Se você já tinha uma implantação antiga, clique em "Gerenciar implantações"
 *     e ARQUIVE a antiga antes de criar a nova
 */

var Logger = console
var SpreadsheetApp = require("SpreadsheetApp")
var ContentService = require("ContentService")

function doPost(e) {
  try {
    // Log para debug
    Logger.log("Recebendo requisição POST")
    Logger.log("Conteúdo: " + e.postData.contents)

    // Pega a planilha ativa
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet()

    // Parse dos dados recebidos
    const data = JSON.parse(e.postData.contents)
    Logger.log("Dados parseados: " + JSON.stringify(data))

    // Extrai os campos
    const nome = data.nome || ""
    const email = data.email || ""
    const assunto = data.assunto || ""
    const mensagem = data.mensagem || ""
    const timestamp = data.timestamp || new Date().toISOString()

    // Verifica se os campos obrigatórios estão presentes
    if (!nome || !email || !assunto || !mensagem) {
      Logger.log("Campos obrigatórios faltando")
      return ContentService.createTextOutput(
        JSON.stringify({
          success: false,
          error: "Campos obrigatórios faltando",
        }),
      ).setMimeType(ContentService.MimeType.JSON)
    }

    // Adiciona uma nova linha na planilha
    sheet.appendRow([new Date(timestamp), nome, email, assunto, mensagem])

    Logger.log("Dados salvos com sucesso")

    // Retorna sucesso
    return ContentService.createTextOutput(
      JSON.stringify({
        success: true,
        message: "Dados salvos com sucesso",
      }),
    ).setMimeType(ContentService.MimeType.JSON)
  } catch (error) {
    Logger.log("Erro: " + error.toString())

    // Retorna erro
    return ContentService.createTextOutput(
      JSON.stringify({
        success: false,
        error: error.toString(),
      }),
    ).setMimeType(ContentService.MimeType.JSON)
  }
}

// Função de teste (opcional)
function testarScript() {
  const testData = {
    postData: {
      contents: JSON.stringify({
        nome: "Teste",
        email: "teste@exemplo.com",
        assunto: "Teste de integração",
        mensagem: "Esta é uma mensagem de teste",
        timestamp: new Date().toISOString(),
      }),
    },
  }

  const resultado = doPost(testData)
  Logger.log("Resultado do teste: " + resultado.getContent())
}
