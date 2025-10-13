# 🚀 Como Configurar o Google Sheets para Receber Leads

## ⚠️ PROBLEMA ATUAL

O formulário está tentando enviar dados, mas o Google Apps Script está retornando HTML em vez de JSON. Isso significa que o script não está configurado corretamente.

## ✅ SOLUÇÃO RÁPIDA (5 minutos)

### Passo 1: Abra sua Planilha do Google Sheets

Acesse: https://docs.google.com/spreadsheets/d/1Q1AUuMms30UoHIMFu1CCUFVYY4mwRmT5Y0xRI7a2_6U/edit

### Passo 2: Crie as Colunas (se ainda não existirem)

Na primeira linha da planilha, adicione estas colunas:

| Data/Hora | Nome | Telefone | E-mail | Empresa | Serviços |
|-----------|------|----------|--------|---------|----------|

### Passo 3: Abra o Editor de Scripts

1. Na planilha, clique em **Extensões** → **Apps Script**
2. Isso abrirá uma nova aba com o editor de código

### Passo 4: Cole este Código EXATO

**APAGUE TODO O CÓDIGO** que estiver lá e cole este código:

\`\`\`javascript
function doPost(e) {
  try {
    // Log para debug
    Logger.log('Recebendo dados: ' + e.postData.contents);
    
    // Parse dos dados recebidos
    var data = JSON.parse(e.postData.contents);
    
    // Abre a planilha (use o ID da sua planilha)
    var sheet = SpreadsheetApp.openById('1Q1AUuMms30UoHIMFu1CCUFVYY4mwRmT5Y0xRI7a2_6U').getActiveSheet();
    
    // Prepara os dados para inserir
    var timestamp = new Date();
    var servicos = data.services.join(', '); // Junta os serviços com vírgula
    
    // Adiciona uma nova linha com os dados
    sheet.appendRow([
      timestamp,
      data.name,
      data.phone,
      data.email,
      data.company,
      servicos
    ]);
    
    // Retorna sucesso em JSON
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: 'Lead salvo com sucesso!'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Em caso de erro, retorna o erro em JSON
    Logger.log('Erro: ' + error.toString());
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        error: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Função de teste (opcional)
function testarScript() {
  var testData = {
    postData: {
      contents: JSON.stringify({
        name: "Teste",
        phone: "(11) 99999-9999",
        email: "teste@exemplo.com",
        company: "Empresa Teste",
        services: ["SEO", "Gestão de Comunidade"]
      })
    }
  };
  
  var result = doPost(testData);
  Logger.log('Resultado do teste: ' + result.getContent());
}
\`\`\`

### Passo 5: Salve o Projeto

1. Clique no ícone de **disquete** 💾 ou pressione `Ctrl+S` (Windows) / `Cmd+S` (Mac)
2. Dê um nome ao projeto, por exemplo: "Ferreira Cosseau - Leads"

### Passo 6: PUBLIQUE o Script (MUITO IMPORTANTE!)

1. Clique em **Implantar** → **Nova implantação**
2. Clique no ícone de **engrenagem** ⚙️ ao lado de "Selecione o tipo"
3. Selecione **Aplicativo da Web**
4. Configure assim:
   - **Descrição**: "API para receber leads do site"
   - **Executar como**: **Eu** (sua conta do Google)
   - **Quem tem acesso**: **Qualquer pessoa** ⚠️ IMPORTANTE!
5. Clique em **Implantar**
6. Clique em **Autorizar acesso**
7. Escolha sua conta do Google
8. Clique em **Avançado** → **Acessar [nome do projeto] (não seguro)**
9. Clique em **Permitir**

### Passo 7: Copie a URL

Após a implantação, você verá uma **URL da Web App**. Ela será algo como:

\`\`\`
https://script.google.com/macros/s/AKfycby.../exec
\`\`\`

**COPIE ESTA URL COMPLETA!**

### Passo 8: Atualize a URL no Código

A URL atual no código é:
\`\`\`
https://script.google.com/macros/s/AKfycbyzuQ_nBHO9NNETBXypD02vH-jyC9XmygJBqBZWUdAseW3pFLYESUzJuD_o6uCfD327/exec
\`\`\`

Se a URL que você copiou for diferente, me avise para eu atualizar no código!

---

## 🧪 TESTE SE ESTÁ FUNCIONANDO

### Opção 1: Teste no Apps Script

1. No editor do Apps Script, selecione a função `testarScript` no menu dropdown
2. Clique em **Executar**
3. Verifique se uma nova linha foi adicionada na planilha

### Opção 2: Teste com cURL (Terminal)

\`\`\`bash
curl -X POST "SUA_URL_AQUI" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Teste cURL",
    "phone": "(11) 99999-9999",
    "email": "teste@exemplo.com",
    "company": "Empresa Teste",
    "services": ["SEO", "Business Intelligence"]
  }'
\`\`\`

Você deve receber uma resposta JSON:
\`\`\`json
{"success":true,"message":"Lead salvo com sucesso!"}
\`\`\`

---

## ❌ PROBLEMAS COMUNS

### Erro: "Response is not JSON"
**Causa**: O script não está publicado corretamente ou as permissões estão erradas.
**Solução**: Repita o Passo 6, garantindo que "Quem tem acesso" está como "Qualquer pessoa".

### Erro: "Authorization required"
**Causa**: Você não autorizou o script a acessar sua planilha.
**Solução**: Repita o Passo 6, autorizando o acesso quando solicitado.

### Erro: "Script function not found: doPost"
**Causa**: O código não foi salvo corretamente.
**Solução**: Verifique se o código está exatamente como no Passo 4 e salve novamente.

### Os dados não aparecem na planilha
**Causa**: O ID da planilha no código está errado.
**Solução**: Verifique se o ID no código (`1Q1AUuMms30UoHIMFu1CCUFVYY4mwRmT5Y0xRI7a2_6U`) corresponde ao ID da sua planilha (está na URL da planilha).

---

## 📞 PRECISA DE AJUDA?

Se após seguir todos os passos ainda não funcionar:

1. Verifique os logs no Apps Script: **Execuções** (menu lateral esquerdo)
2. Teste a função `testarScript` para ver se o erro está no script ou na comunicação
3. Verifique se a URL que você está usando é a URL da **implantação mais recente**

---

## ✨ PRONTO!

Depois de configurar corretamente, o formulário do site começará a enviar os leads automaticamente para sua planilha do Google Sheets!
