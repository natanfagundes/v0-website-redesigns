# 🚀 Como Integrar o Formulário com Google Sheets

## Passo a Passo Simples

### 1️⃣ Abra sua Planilha do Google Sheets
Acesse: https://docs.google.com/spreadsheets/d/1ano9JALhvo1qQdBrJuWOONYOL9e1GZS-nrJYF0QAe_Y/edit

### 2️⃣ Prepare as Colunas da Planilha
Certifique-se de que a primeira linha (cabeçalho) tenha estas colunas:
- **A1**: Data/Hora
- **B1**: Nome
- **C1**: Email
- **D1**: Assunto
- **E1**: Mensagem

### 3️⃣ Abra o Editor de Scripts
1. Na planilha, clique em **Extensões** → **Apps Script**
2. Uma nova aba abrirá com o editor de código

### 4️⃣ Cole o Código
1. Delete todo o código que aparecer no editor
2. Abra o arquivo `google-apps-script-code.js` deste projeto
3. Copie TODO o código
4. Cole no editor do Apps Script
5. Clique em **Salvar** (ícone de disquete ou Ctrl+S)

### 5️⃣ Implante como Aplicativo Web
1. Clique em **Implantar** → **Nova implantação**
2. Clique no ícone de **engrenagem** ⚙️ ao lado de "Selecione o tipo"
3. Escolha **Aplicativo da Web**
4. Configure:
   - **Descrição**: "API de Captura de Leads"
   - **Executar como**: Selecione **Eu (seu email)**
   - **Quem tem acesso**: Selecione **Qualquer pessoa**
5. Clique em **Implantar**
6. Clique em **Autorizar acesso**
7. Escolha sua conta do Google
8. Clique em **Avançado** → **Acessar [nome do projeto] (não seguro)**
9. Clique em **Permitir**

### 6️⃣ Copie a URL Gerada
Após a implantação, você verá uma URL como:
\`\`\`
https://script.google.com/macros/s/AKfycbx.../exec
\`\`\`
**COPIE ESTA URL COMPLETA!**

### 7️⃣ Adicione a URL no v0
1. No v0, clique em **Vars** na barra lateral esquerda
2. Clique em **Add Variable**
3. Preencha:
   - **Key**: `GOOGLE_SCRIPT_URL`
   - **Value**: [cole a URL que você copiou]
4. Clique em **Save**

### 8️⃣ Teste o Formulário
1. Acesse seu site
2. Vá até a seção "Vamos Conversar?"
3. Preencha o formulário e clique em "Enviar Mensagem"
4. Verifique se os dados aparecem na planilha do Google Sheets

---

## ✅ Checklist de Verificação

- [ ] Planilha tem as colunas corretas (Data/Hora, Nome, Email, Assunto, Mensagem)
- [ ] Código do Apps Script foi colado e salvo
- [ ] Aplicativo Web foi implantado
- [ ] Permissões foram concedidas
- [ ] URL foi copiada corretamente
- [ ] Variável GOOGLE_SCRIPT_URL foi adicionada no v0
- [ ] Formulário foi testado e dados aparecem na planilha

---

## 🐛 Problemas Comuns

### "Erro ao enviar mensagem"
- Verifique se a variável `GOOGLE_SCRIPT_URL` está configurada corretamente no v0
- Certifique-se de que a URL termina com `/exec`
- Verifique se o Apps Script foi implantado com acesso "Qualquer pessoa"

### "Dados não aparecem na planilha"
- Verifique se o ID da planilha no código está correto: `1ano9JALhvo1qQdBrJuWOONYOL9e1GZS-nrJYF0QAe_Y`
- Certifique-se de que as colunas da planilha estão na ordem correta
- Teste a função `testarIntegracao()` no Apps Script

### "Erro de permissão"
- Certifique-se de que você autorizou o script a acessar sua planilha
- Verifique se você é o proprietário da planilha

---

## 📞 Precisa de Ajuda?

Se encontrar problemas, verifique:
1. Console do navegador (F12) para ver erros
2. Logs do Apps Script (Ver → Execuções)
3. Se a planilha está acessível e você tem permissões de edição
