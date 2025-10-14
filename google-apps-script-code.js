/**
 * INSTRUÇÕES DE USO:
 *
 * 1. Abra sua planilha: https://docs.google.com/spreadsheets/d/1ano9JALhvo1qQdBrJuWOONYOL9e1GZS-nrJYF0QAe_Y/edit
 * 2. Clique em "Extensões" > "Apps Script"
 * 3. Delete todo o código que aparecer
 * 4. Copie e cole TODO este código
 * 5. Clique em "Salvar" (ícone de disquete)
 * 6. Clique em "Implantar" > "Nova implantação"
 * 7. Clique no ícone de engrenagem ao lado de "Selecione o tipo"
 * 8. Escolha "Aplicativo da Web"
 * 9. Em "Executar como": selecione "Eu"
 * 10. Em "Quem tem acesso": selecione "Qualquer pessoa"
 * 11. Clique em "Implantar"
 * 12. Copie a URL que aparecer (algo como: https://script.google.com/macros/s/...)
 * 13. No v0, vá em "Vars" (barra lateral) e adicione:
 *     - Nome: GOOGLE_SCRIPT_URL
 *     - Valor: [cole a URL copiada]
 * 14. Pronto! Seu formulário agora está integrado com o Google Sheets
 */

// Importações necessárias
const { SpreadsheetApp, ContentService, Logger } = require("google-apps-script")

function doPost(e) {
  try {
    // Abre a planilha pelo ID
    const sheet = SpreadsheetApp.openById("1ano9JALhvo1qQdBrJuWOONYOL9e1GZS-nrJYF0QAe_Y").getActiveSheet()

    // Parse dos dados recebidos
    const data = JSON.parse(e.postData.contents)

    // Extrai os campos do formulário
    const timestamp = new Date()
    const nome = data.nome || ""
    const email = data.email || ""
    const assunto = data.assunto || ""
    const mensagem = data.mensagem || ""

    // Adiciona uma nova linha com os dados
    sheet.appendRow([timestamp, nome, email, assunto, mensagem])

    // Retorna sucesso
    return ContentService.createTextOutput(
      JSON.stringify({
        success: true,
        message: "Lead capturado com sucesso!",
      }),
    ).setMimeType(ContentService.MimeType.JSON)
  } catch (error) {
    // Retorna erro
    return ContentService.createTextOutput(
      JSON.stringify({
        success: false,
        message: "Erro ao capturar lead: " + error.toString(),
      }),
    ).setMimeType(ContentService.MimeType.JSON)
  }
}

// Função de teste (opcional)
function testarIntegracao() {
  const testData = {
    postData: {
      contents: JSON.stringify({
        nome: "Teste",
        email: "teste@exemplo.com",
        assunto: "Teste de integração",
        mensagem: "Esta é uma mensagem de teste",
      }),
    },
  }

  const resultado = doPost(testData)
  Logger.log(resultado.getContent())
}
