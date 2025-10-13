'use client';
import Image from 'next/image';

export default function YasmimSection() {
  return (
    <section className="relative isolate overflow-hidden bg-white dark:bg-[#1a0000] text-gray-900 dark:text-white py-24 px-6 lg:px-20 transition-colors duration-500">
      {/* Fundo decorativo em degradê Winner */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-red-50/10 to-red-100/0 dark:via-red-900/10 dark:to-[#250000]/80"></div>

      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Lado esquerdo: imagem */}
        <div className="relative w-full flex justify-center">
          {/* Placeholder da imagem */}
          <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden ring-4 ring-red-700/40 shadow-2xl shadow-red-900/20">
            <Image
              src="/yasmim.jpg" // 🔁 substitua depois pela foto real
              alt="Yasmim Ferreira"
              fill
              className="object-cover"
            />
          </div>

          {/* Glow decorativo */}
          <div className="absolute -z-10 w-96 h-96 bg-red-600/30 rounded-full blur-3xl top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 dark:bg-red-700/40"></div>
        </div>

        {/* Lado direito: texto */}
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
            💼 Quem é <span className="text-red-700 dark:text-red-400">Yasmim Ferreira</span>
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-200">
            Yasmim Ferreira é uma especialista em <strong>Full Stack Marketing</strong> com uma visão 360º que une estratégia,
            aquisição, conversão, retenção e análise de dados. Sua atuação é guiada por um propósito claro: <strong>transformar marcas
            em negócios sustentáveis</strong>, com performance e propósito.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-200">
            Com sólida experiência em <strong>mídia paga, programática, CRO, UX/UI, SEO e automação</strong>, Yasmim atua na
            interseção entre dados e criatividade — conectando cada etapa do funil para gerar crescimento previsível e escalável.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-200">
            Para ela, o marketing é um ecossistema vivo, onde cada decisão deve conversar com o todo. Sua metodologia integra
            <strong> análise, experimentação e performance</strong> para construir estratégias que unem branding e resultado.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-200">
            Reconhecida por sua capacidade de unir visão estratégica e execução prática, Yasmim ajuda empresas a crescerem de forma
            estruturada, com posicionamento claro, inteligência de dados e experiências que convertem.
          </p>
        </div>
      </div>
    </section>
  );
}
