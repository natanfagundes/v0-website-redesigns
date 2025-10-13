# 🔧 Configuração Completa do Google Sheets - Guia Passo a Passo

## ⚠️ PROBLEMA ATUAL

O formulário está retornando erro **401 Unauthorized** porque o Google Apps Script ainda não foi configurado corretamente.

**Erro nos logs:**
\`\`\`
fetch to https://script.google.com/macros/s/AKfycby...exec failed with status 401
\`\`\`

Isso significa que o script não está acessível publicamente. Siga TODOS os passos abaixo para corrigir.

---

## 📋 PASSO 1: Abrir sua Planilha do Google Sheets

1. Acesse sua planilha: https://docs.google.com/spreadsheets/d/1Q1AUuMms30UoHIMFu1CCUFVYY4mwRmT5Y0xRI7a2_6U/edit
2. Certifique-se de que você está logado com a conta correta do Google

---

## 📋 PASSO 2: Preparar a Planilha

1. Na sua planilha, crie ou renomeie a primeira aba para **"Leads"** (exatamente assim, com L maiúsculo)
2. Na primeira linha (linha 1), adicione os seguintes cabeçalhos nas colunas:
   - **A1:** Data/Hora
   - **B1:** Nome
   - **C1:** Telefone
   - **D1:** E-mail
   - **E1:** Empresa
   - **F1:** Serviços de Interesse

3. Formate a primeira linha (deixe em negrito se quiser, mas não é obrigatório)

---

## 📋 PASSO 3: Criar o Google Apps Script

1. Na sua planilha, clique no menu **Extensões** → **Apps Script**
2. Uma nova aba vai abrir com o editor do Google Apps Script
3. **DELETE TODO O CÓDIGO** que aparecer no editor (geralmente tem uma função `myFunction()` vazia)
4. **COPIE E COLE** o código abaixo:

\`\`\`javascript
function doPost(e) {
  try {
    // Log para debug
    Logger.log('Recebendo requisição POST');
    Logger.log('Dados recebidos: ' + e.postData.contents);
    
    // Parse dos dados recebidos
    const data = JSON.parse(e.postData.contents);
    
    // Abre a planilha e a aba "Leads"
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Leads');
    
    if (!sheet) {
      throw new Error('Aba "Leads" não encontrada. Certifique-se de que existe uma aba com esse nome.');
    }
    
    // Prepara os dados para inserir
    const timestamp = new Date(data.timestamp || new Date());
    const nome = data.nome || '';
    const telefone = data.telefone || '';
    const email = data.email || '';
    const empresa = data.empresa || '';
    const servicos = data.servicos || '';
    
    // Adiciona uma nova linha com os dados
    sheet.appendRow([
      timestamp,
      nome,
      telefone,
      email,
      empresa,
      servicos
    ]);
    
    Logger.log('Dados inseridos com sucesso!');
    
    // Retorna sucesso
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: 'Lead registrado com sucesso!'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    Logger.log('Erro: ' + error.toString());
    
    // Retorna erro
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
  const testData = {
    postData: {
      contents: JSON.stringify({
        nome: 'Teste',
        telefone: '(11) 99999-9999',
        email: 'teste@exemplo.com',
        empresa: 'Empresa Teste',
        servicos: 'SEO, Business Intelligence',
        timestamp: new Date().toISOString()
      })
    }
  };
  
  const resultado = doPost(testData);
  Logger.log('Resultado do teste: ' + resultado.getContent());
}
\`\`\`

5. Clique no ícone de **disquete** (💾) ou pressione **Ctrl+S** (Cmd+S no Mac) para salvar
6. Dê um nome ao projeto, por exemplo: **"Ferreira Cosseau - Leads"**

---

## 📋 PASSO 4: Testar o Script (IMPORTANTE!)

Antes de publicar, vamos testar se está funcionando:

1. No editor do Apps Script, selecione a função **`testarScript`** no menu dropdown (onde está escrito "Selecionar função")
2. Clique no botão **▶️ Executar** (ou pressione Ctrl+R)
3. **PRIMEIRA VEZ:** Vai aparecer uma mensagem pedindo autorização:
   - Clique em **"Revisar permissões"**
   - Selecione sua conta do Google
   - Clique em **"Avançado"** (canto inferior esquerdo)
   - Clique em **"Ir para [nome do projeto] (não seguro)"**
   - Clique em **"Permitir"**
4. Após autorizar, clique em **▶️ Executar** novamente
5. Verifique se apareceu uma nova linha na sua planilha com os dados de teste
6. Se apareceu, **PARABÉNS!** O script está funcionando ✅

---

## 📋 PASSO 5: Publicar como Web App (CRÍTICO!)

**Este é o passo mais importante!** Se não fizer corretamente, vai continuar dando erro 401.

1. No editor do Apps Script, clique no botão **"Implantar"** (ou "Deploy") no canto superior direito
2. Selecione **"Nova implantação"** (ou "New deployment")
3. Clique no ícone de **engrenagem** ⚙️ ao lado de "Selecionar tipo"
4. Escolha **"Aplicativo da Web"** (ou "Web app")
5. Configure os seguintes campos:

   **ATENÇÃO: ESTAS CONFIGURAÇÕES SÃO CRÍTICAS!**
   
   - **Descrição:** "API para receber leads do site"
   - **Executar como:** **"Eu"** (ou "Me" / sua conta do Google)
   - **Quem tem acesso:** **"Qualquer pessoa"** (ou "Anyone" / "Anyone, even anonymous")
   
   ⚠️ **IMPORTANTE:** Se você não selecionar "Qualquer pessoa", o erro 401 vai continuar!

6. Clique em **"Implantar"** (ou "Deploy")
7. **COPIE A URL** que aparecer (algo como: `https://script.google.com/macros/s/AKfycby.../exec`)
8. Clique em **"Concluído"**

---

## 📋 PASSO 6: Configurar a Variável de Ambiente no v0

1. No v0, abra o **sidebar esquerdo** (ícone de três linhas)
2. Clique em **"Vars"** (Variáveis de Ambiente)
3. Clique em **"Add Variable"** ou **"Adicionar Variável"**
4. Configure:
   - **Nome:** `GOOGLE_SCRIPT_URL`
   - **Valor:** Cole a URL que você copiou no passo anterior
   - **Ambiente:** Production (ou todos os ambientes)
5. Clique em **"Save"** ou **"Salvar"**

---

## 📋 PASSO 7: Testar o Formulário

1. Volte para o site
2. Preencha o formulário com dados de teste
3. Clique em **"Enviar Interesse"**
4. Se tudo estiver correto, você verá a mensagem: **"Interesse enviado com sucesso!"**
5. Verifique sua planilha - deve aparecer uma nova linha com os dados

---

## 🔍 SOLUÇÃO DE PROBLEMAS

### ❌ Erro: "Response is not JSON" ou "Unexpected token '<'"

**Causa:** O Google Apps Script está retornando HTML em vez de JSON. Isso acontece quando:
- O script não foi publicado corretamente como Web App
- As permissões não estão configuradas como "Qualquer pessoa"
- A função `doPost` não está implementada corretamente
- O script tem algum erro de sintaxe

**Solução:**
1. Volte ao Apps Script e verifique se o código está EXATAMENTE como mostrado no Passo 3
2. Certifique-se de que a função se chama `doPost` (não `doGet` ou outro nome)
3. Execute a função `testarScript` para verificar se há erros
4. Verifique os logs: Menu **"Execuções"** → veja se há erros
5. Republique o script:
   - Clique em **"Implantar"** → **"Gerenciar implantações"**
   - Clique no ícone de **lápis** ✏️
   - Mude a versão para **"Nova versão"**
   - Verifique se **"Quem tem acesso"** está como **"Qualquer pessoa"**
   - Clique em **"Implantar"**
   - **COPIE A NOVA URL** e atualize no v0

### Erro 401 - Unauthorized

**Causa:** O formulário está retornando erro **401 Unauthorized** porque o Google Apps Script ainda não foi configurado corretamente.

**Solução:**
1. Volte ao Apps Script
2. Clique em **"Implantar"** → **"Gerenciar implantações"**
3. Clique no ícone de **lápis** ✏️ para editar
4. Verifique se **"Quem tem acesso"** está como **"Qualquer pessoa"**
5. Se não estiver, mude para "Qualquer pessoa"
6. Clique em **"Implantar"** novamente
7. **IMPORTANTE:** Uma nova URL será gerada! Copie a nova URL
8. Atualize a variável `GOOGLE_SCRIPT_URL` no v0 com a nova URL

### Erro 404 - Not Found

**Causa:** A URL está incorreta ou expirada.

**Solução:**
1. Volte ao Apps Script
2. Clique em **"Implantar"** → **"Gerenciar implantações"**
3. Copie a URL correta (coluna "URL do aplicativo da Web")
4. Atualize a variável `GOOGLE_SCRIPT_URL` no v0

### Dados não aparecem na planilha

**Causa:** A aba não se chama "Leads" ou os cabeçalhos estão errados.

**Solução:**
1. Verifique se a aba se chama exatamente **"Leads"** (com L maiúsculo)
2. Verifique se os cabeçalhos estão na linha 1
3. Execute a função `testarScript` novamente para verificar

### Erro de permissão ao executar o script

**Causa:** Você não autorizou o script a acessar sua planilha.

**Solução:**
1. Execute a função `testarScript` novamente
2. Siga o processo de autorização (Passo 4)
3. Certifique-se de clicar em "Permitir" no final

---

## 📞 SUPORTE

Se após seguir TODOS os passos acima o erro persistir:

1. Verifique os logs do Apps Script:
   - No editor, clique em **"Execuções"** (ou "Executions") no menu lateral
   - Veja se há erros registrados
   
2. Verifique os logs do v0:
   - Abra o console do navegador (F12)
   - Procure por mensagens com `[v0]`
   
3. Certifique-se de que:
   - ✅ A aba se chama "Leads"
   - ✅ O script foi salvo
   - ✅ O script foi testado com sucesso
   - ✅ O script foi publicado como "Qualquer pessoa"
   - ✅ A URL foi copiada corretamente
   - ✅ A variável de ambiente foi configurada no v0

---

## ✅ CHECKLIST FINAL

Antes de testar, confirme que você fez TUDO:

- [ ] Criei a aba "Leads" na planilha
- [ ] Adicionei os cabeçalhos na linha 1
- [ ] Copiei e colei o código do Apps Script
- [ ] Salvei o projeto do Apps Script
- [ ] Executei a função `testarScript` com sucesso
- [ ] Autorizei o script a acessar a planilha
- [ ] Publiquei o script como Web App
- [ ] Configurei "Quem tem acesso" como "Qualquer pessoa"
- [ ] Copiei a URL do deployment
- [ ] Adicionei a variável `GOOGLE_SCRIPT_URL` no v0
- [ ] Testei o formulário no site

Se você marcou TODOS os itens acima, o formulário deve funcionar perfeitamente! 🎉
\`\`\`

\`\`\`tsx file="" isHidden
