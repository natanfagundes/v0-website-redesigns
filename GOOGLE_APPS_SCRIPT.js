// Cole este código no Google Apps Script
// Acesse: https://script.google.com/

function doPost(e) {
  try {
    // Log para debug
    const Logger = console // Declare Logger variable
    Logger.log("Received POST request")
    Logger.log("Request data: " + e.postData.contents)

    // Parse dos dados recebidos
    const data = JSON.parse(e.postData.contents)

    // ID da sua planilha (extraído da URL)
    const SPREADSHEET_ID = "1Q1AUuMms30UoHIMFu1CCUFVYY4mwRmT5Y0xRI7a2_6U"

    // Abre a planilha
    const SpreadsheetApp = google.sheets // Declare SpreadsheetApp variable
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID)
    const sheet = spreadsheet.getSheetByName("Leads") || spreadsheet.getSheets()[0]

    // Se a planilha estiver vazia, adiciona cabeçalhos
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Data/Hora", "Nome", "Telefone", "E-mail", "Empresa", "Serviços de Interesse"])
      sheet.getRange(1, 1, 1, 6).setFontWeight("bold")
    }

    // Formata a data/hora
    const timestamp = new Date(data.timestamp)
    const Utilities = google.utilities // Declare Utilities variable
    const formattedDate = Utilities.formatDate(timestamp, "America/Sao_Paulo", "dd/MM/yyyy HH:mm:ss")

    // Adiciona os dados na planilha
    sheet.appendRow([formattedDate, data.nome, data.telefone, data.email, data.empresa, data.servicos])

    Logger.log("Data added successfully")

    // Retorna sucesso
    const ContentService = google.content // Declare ContentService variable
    return ContentService.createTextOutput(
      JSON.stringify({
        success: true,
        message: "Lead registrado com sucesso",
        timestamp: formattedDate,
      }),
    ).setMimeType(ContentService.MimeType.JSON)
  } catch (error) {
    Logger.log("Error: " + error.toString())

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
function testDoPost() {
  const testData = {
    postData: {
      contents: JSON.stringify({
        nome: "Teste",
        telefone: "(11) 99999-9999",
        email: "teste@exemplo.com",
        empresa: "Empresa Teste",
        servicos: "SEO, Business Intelligence",
        timestamp: new Date().toISOString(),
      }),
    },
  }

  const result = doPost(testData)
  const Logger = console // Declare Logger variable
  Logger.log(result.getContent())
}
