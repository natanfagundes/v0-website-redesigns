'use client';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

// Marque as logos que são originalmente escuras:
const logos = [
  { src: '/logos/santander.png', dark: false },
  { src: '/logos/zapsign.png', dark: true },
  { src: '/logos/bradesco.png', dark: false },
  { src: '/logos/stellantis.png', dark: true },
  { src: '/logos/fiat.png', dark: false },
  { src: '/logos/jeep.png', dark: false },
  { src: '/logos/ram.png', dark: false },
  { src: '/logos/remax.png', dark: false },
  { src: '/logos/microsoft.png', dark: false },
  { src: '/logos/kaspersky.png', dark: true },
  { src: '/logos/canalike.png', dark: true },
  { src: '/logos/animale.png', dark: false },
];

export default function ClientsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animationFrame: number;
    let scrollX = 0;
    const speed = 0.6; // velocidade da animação

    const animate = () => {
      if (el.scrollWidth > 0) {
        scrollX += speed;
        if (scrollX >= el.scrollWidth / 2) scrollX = 0;
        el.scrollLeft = scrollX;
      }
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section className="relative overflow-hidden py-12 bg-white dark:bg-[#250000] transition-colors">
      {/* Título */}
      <div className="text-center mb-8">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
          Empresas que já confiam no nosso trabalho
        </h3>
      </div>

      {/* Carrossel */}
      <div
        ref={scrollRef}
        className="flex gap-12 overflow-hidden w-full justify-start whitespace-nowrap px-8"
      >
        {[...logos, ...logos].map(({ src, dark }, i) => (
          <div
            key={i}
            className="flex-shrink-0 opacity-80 hover:opacity-100 transition"
          >
            <Image
              src={src}
              alt="Logo cliente"
              width={120}
              height={60}
              className={`object-contain select-none transition duration-300 ${
                dark ? 'dark:brightness-[3] dark:contrast-[0.9]' : ''
              }`}
              priority
            />
          </div>
        ))}
      </div>

      {/* Gradientes laterais */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white dark:from-[#250000] to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white dark:from-[#250000] to-transparent pointer-events-none" />
    </section>
  );
}
