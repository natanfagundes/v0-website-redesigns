# Configuração do Google Sheets para Captura de Leads

## Passo 1: Criar o Google Apps Script

1. Abra sua planilha do Google Sheets: https://docs.google.com/spreadsheets/d/1ano9JALhvo1qQdBrJuWOONYOL9e1GZS-nrJYF0QAe_Y/edit

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
      sheet.appendRow(['Data/Hora', 'Nome', 'Email', 'Assunto', 'Mensagem']);
    }
    
    // Append the new lead data
    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      data.nome || '',
      data.email || '',
      data.assunto || '',
      data.mensagem || ''
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
   - **Descrição**: "API de Captura de Leads - Ferreira & Cosseau"
   - **Executar como**: "Eu (seu email)"
   - **Quem tem acesso**: "Qualquer pessoa"

8. Clique em **Implantar**

9. **IMPORTANTE**: Copie a **URL do aplicativo da Web** que aparece (algo como: https://script.google.com/macros/s/XXXXX/exec)

## Passo 2: Configurar a Variável de Ambiente

A variável de ambiente `GOOGLE_SCRIPT_URL` já está configurada no projeto. Você precisa atualizar o valor dela com a URL do seu Google Apps Script:

1. Acesse a seção **Vars** no sidebar do v0 (ou no painel do Vercel)

2. Atualize a variável `GOOGLE_SCRIPT_URL` com a URL que você copiou no Passo 1

3. A URL deve ter o formato: `https://script.google.com/macros/s/XXXXX/exec`

## Passo 3: Testar a Integração

1. Acesse seu site publicado

2. Role até a seção "Vamos Conversar?"

3. Preencha o formulário com:
   - Nome
   - Email
   - Assunto
   - Mensagem

4. Clique em "Enviar Mensagem"

5. Verifique se os dados aparecem na planilha do Google Sheets

## Estrutura da Planilha

A planilha terá as seguintes colunas:
- **Data/Hora**: Timestamp de quando o lead foi capturado
- **Nome**: Nome completo do lead
- **Email**: E-mail do lead
- **Assunto**: Assunto da mensagem
- **Mensagem**: Mensagem completa do lead

## Solução de Problemas

Se os dados não estiverem sendo salvos:

1. Verifique se a URL do Google Apps Script está correta na variável de ambiente `GOOGLE_SCRIPT_URL`
2. Certifique-se de que o script foi implantado com acesso "Qualquer pessoa"
3. Verifique se você autorizou o script a acessar sua planilha (primeira execução)
4. Teste o formulário e verifique os logs do console do navegador (F12)
5. Verifique se a planilha está acessível e não está protegida

## Link da Planilha

Sua planilha de leads: https://docs.google.com/spreadsheets/d/1ano9JALhvo1qQdBrJuWOONYOL9e1GZS-nrJYF0QAe_Y/edit
