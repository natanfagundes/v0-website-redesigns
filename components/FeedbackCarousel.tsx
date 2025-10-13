'use client';
import { useState } from 'react';

const feedbacks = [
  {
    name: 'João da Silva',
    company: 'Santander',
    text: 'Trabalhar com a Winner foi excelente! O resultado superou nossas expectativas.',
  },
  {
    name: 'Maria Oliveira',
    company: 'Microsoft',
    text: 'Equipe ágil e criativa, com ótimo atendimento e qualidade.',
  },
  {
    name: 'Rafaela Gomes',
    company: 'Animale',
    text: 'Conseguimos resultados reais em poucas semanas. Recomendo muito!',
  },
];

export default function FeedbackCarousel() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % feedbacks.length);
  const prev = () => setIndex((i) => (i - 1 + feedbacks.length) % feedbacks.length);

  const current = feedbacks[index];

  return (
    <section className="bg-gray-50 dark:bg-[#1a0000] py-20 text-center transition-colors">
      <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-10">
        O que nossos clientes dizem
      </h3>

      <div className="max-w-xl mx-auto bg-white dark:bg-[#2b0000] rounded-2xl shadow-lg p-8">
        <p className="text-gray-700 dark:text-gray-200 text-lg mb-6 italic">
          “{current.text}”
        </p>
        <span className="block font-semibold text-red-700 dark:text-red-400">
          {current.name}
        </span>
        <span className="block text-gray-500 dark:text-gray-400 text-sm">
          {current.company}
        </span>
      </div>

      <div className="flex justify-center gap-3 mt-8">
        <button
          onClick={prev}
          className="bg-red-700 dark:bg-red-600 text-white px-3 py-2 rounded-full hover:bg-red-800 dark:hover:bg-red-500 transition"
        >
          &lt;
        </button>
        <button
          onClick={next}
          className="bg-red-700 dark:bg-red-600 text-white px-3 py-2 rounded-full hover:bg-red-800 dark:hover:bg-red-500 transition"
        >
          &gt;
        </button>
      </div>
    </section>
  );
}
