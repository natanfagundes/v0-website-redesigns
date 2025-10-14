# Como Testar o Formulário de Contato

## Problema Atual
Os formulários não estão funcionando. Vamos diagnosticar e corrigir.

## Passo 1: Verificar o Google Apps Script

### 1.1 Abra sua planilha
https://docs.google.com/spreadsheets/d/1ano9JALhvo1qQdBrJuWOONYOL9e1GZS-nrJYF0QAe_Y/edit

### 1.2 Verifique se tem cabeçalhos
A primeira linha da planilha deve ter os seguintes cabeçalhos:
\`\`\`
Data | Nome | Email | Assunto | Mensagem
\`\`\`

Se não tiver, adicione manualmente.

### 1.3 Abra o Apps Script
- Clique em "Extensões" > "Apps Script"
- Copie TODO o código do arquivo `google-apps-script-COPIAR-PARA-PLANILHA.js`
- Cole no Apps Script (substitua tudo que estiver lá)
- Clique em "Salvar"

### 1.4 Teste o Script
- No Apps Script, selecione a função `testarScript` no menu dropdown
- Clique em "Executar"
- Autorize o script quando solicitado
- Verifique se uma linha de teste foi adicionada na planilha

### 1.5 Publique como Web App
- Clique em "Implantar" > "Nova implantação"
- Clique no ícone de engrenagem e escolha "Aplicativo da Web"
- Configure:
  - Descrição: "API de Contato"
  - Executar como: "Eu"
  - Quem tem acesso: "Qualquer pessoa"
- Clique em "Implantar"
- **COPIE A URL** (termina com /exec)

### 1.6 Atualize a URL no código
A URL atual no código é:
\`\`\`
https://script.google.com/macros/s/AKfycbwkkGsh6TPKOIP8zW4GNnv0-aKZdtZrjOVI7pKLeqd9hTjkR_80MXaPlEq62wPRTfl8/exec
\`\`\`

Se a URL que você copiou for diferente, me avise para eu atualizar no código.

## Passo 2: Testar o Formulário

### 2.1 Abra o site
Acesse o site e vá até a seção "Vamos Conversar?"

### 2.2 Preencha o formulário
- Nome: Teste
- Email: teste@exemplo.com
- Assunto: Teste de integração
- Mensagem: Testando o formulário

### 2.3 Envie
Clique em "Enviar Mensagem"

### 2.4 Verifique
- Se aparecer mensagem de sucesso: ✅ Funcionou!
- Se aparecer mensagem de erro: ❌ Veja o erro e me informe

### 2.5 Confirme na planilha
Abra a planilha e verifique se os dados foram salvos.

## Possíveis Problemas

### Erro 401 (Unauthorized)
- O script não está publicado como "Qualquer pessoa"
- Solução: Republique o script com acesso "Qualquer pessoa"

### Erro 403 (Forbidden)
- O script não tem permissão para escrever na planilha
- Solução: Execute a função `testarScript` e autorize o script

### Erro 404 (Not Found)
- A URL do script está incorreta
- Solução: Verifique se a URL no código está correta

### Timeout
- O script está demorando muito
- Solução: Verifique se a planilha não está muito grande

## Precisa de Ajuda?

Me envie:
1. A mensagem de erro que aparece no formulário
2. A URL do Google Apps Script que você copiou
3. Print da planilha mostrando se tem cabeçalhos
