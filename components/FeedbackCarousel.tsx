'use client';
import { useState } from 'react';
import styles from './FeedbackCarousel.module.css';

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

  return (
    <section className={styles.wrapper}>
      <h3 className={styles.title}>O que nossos clientes dizem</h3>
      <div className={styles.card}>
        <p className={styles.text}>“{feedbacks[index].text}”</p>
        <span className={styles.name}>{feedbacks[index].name}</span>
        <span className={styles.company}>{feedbacks[index].company}</span>
      </div>
      <div className={styles.controls}>
        <button onClick={prev}>&lt;</button>
        <button onClick={next}>&gt;</button>
      </div>
    </section>
  );
}
