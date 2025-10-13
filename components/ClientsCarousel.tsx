'use client';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import styles from './ClientsCarousel.module.css';

const logos = [
  '/logos/santander.png',
  '/logos/zapsign.png',
  '/logos/bradesco.png',
  '/logos/stellantis.png',
  '/logos/fiat.png',
  '/logos/jeep.png',
  '/logos/ram.png',
  '/logos/remax.png',
  '/logos/microsoft.png',
  '/logos/kaspersky.png',
  '/logos/canalike.png',
  '/logos/animale.png',
  // adicione mais conforme precisar
];

export default function ClientsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Scroll automático (loop)
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let x = 0;
    const interval = setInterval(() => {
      x += 1;
      if (x >= el.scrollWidth / 2) x = 0;
      el.scrollLeft = x;
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.wrapper}>
      <h3 className={styles.title}>Empresas que já confiam no nosso trabalho</h3>
      <div className={styles.carousel} ref={scrollRef}>
        {[...logos, ...logos].map((src, i) => (
          <div className={styles.logo} key={i}>
            <Image src={src} alt="Logo cliente" width={120} height={60} />
          </div>
        ))}
      </div>
    </section>
  );
}
