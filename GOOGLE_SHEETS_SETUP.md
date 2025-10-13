# Configuração do Google Sheets para Captura de Leads

## Passo 1: Criar o Google Apps Script

1. Abra sua planilha do Google Sheets: https://docs.google.com/spreadsheets/d/1Q1AUuMms30UoHIMFu1CCUFVYY4mwRmT5Y0xRI7a2_6U/edit

2. Clique em **Extensões** > **Apps Script**

3. Apague o código padrão e cole o seguinte código:

\`\`\`javascript
function doPost(e) {
  try {
    // Parse the incoming JSON data
    const data = JSON.parse(e.postData.contents);
    
    // Get the active spreadsheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Check if headers exist, if not create them
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Data/Hora', 'Nome', 'Telefone', 'E-mail', 'Empresa', 'Serviços de Interesse']);
    }
    
    // Append the new lead data
    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      data.nome || '',
      data.telefone || '',
      data.email || '',
      data.empresa || '',
      data.servicos || ''
    ]);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ success: true, message: 'Lead adicionado com sucesso' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
\`\`\`

4. Clique em **Salvar** (ícone de disquete)

5. Clique em **Implantar** > **Nova implantação**

6. Clique no ícone de engrenagem ⚙️ ao lado de "Selecionar tipo" e escolha **Aplicativo da Web**

7. Configure:
   - **Descrição**: "API de Captura de Leads"
   - **Executar como**: "Eu (seu email)"
   - **Quem tem acesso**: "Qualquer pessoa"

8. Clique em **Implantar**

9. **IMPORTANTE**: Copie a **URL do aplicativo da Web** que aparece (algo como: https://script.google.com/macros/s/XXXXX/exec)

## Passo 2: Configurar a Variável de Ambiente no Vercel

1. Acesse o painel do Vercel do seu projeto

2. Vá em **Settings** > **Environment Variables**

3. Adicione uma nova variável:
   - **Name**: `GOOGLE_SCRIPT_URL`
   - **Value**: Cole a URL do aplicativo da Web que você copiou no passo anterior
   - **Environment**: Selecione Production, Preview e Development

4. Clique em **Save**

5. Faça um novo deploy do projeto para aplicar as mudanças

## Passo 3: Testar a Integração

1. Acesse seu site publicado

2. Preencha o formulário de interesse em qualquer serviço

3. Clique em "Enviar Interesse"

4. Verifique se os dados aparecem na planilha do Google Sheets

## Estrutura da Planilha

A planilha terá as seguintes colunas:
- **Data/Hora**: Timestamp de quando o lead foi capturado
- **Nome**: Nome completo do lead
- **Telefone**: Telefone de contato
- **E-mail**: E-mail do lead
- **Empresa**: Nome da empresa
- **Serviços de Interesse**: Lista dos serviços selecionados

## Solução de Problemas

Se os dados não estiverem sendo salvos:

1. Verifique se a URL do Google Apps Script está correta na variável de ambiente
2. Certifique-se de que o script foi implantado com acesso "Qualquer pessoa"
3. Verifique os logs do Vercel para ver se há erros na API route
4. Teste o script diretamente no Google Apps Script usando o botão "Executar"
