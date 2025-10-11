import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request: Request) {
  const { name, email, subject, message } = await request.json();

  try {
    // Caminho onde o arquivo CSV será salvo
    const filePath = path.join(process.cwd(), "public", "form-data.csv");

    // Cabeçalho do CSV
    const header = "Nome,Email,Assunto,Mensagem\n";
    // Cria uma nova linha com os dados do formulário
    const line = `${name},${email},${subject},"${message?.replace(/"/g, "'")}"\n`;

    // Se o arquivo não existir, cria com o cabeçalho + primeira linha
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, header + line, "utf8");
    } else {
      // Se já existir, adiciona a nova linha no final
      fs.appendFileSync(filePath, line, "utf8");
    }

    // Retorna resposta de sucesso
    return NextResponse.json({ message: "Dados salvos com sucesso!" });
  } catch (error) {
    console.error("Erro ao salvar CSV:", error);
    return NextResponse.json({ error: "Erro ao salvar dados" }, { status: 500 });
  }
}
