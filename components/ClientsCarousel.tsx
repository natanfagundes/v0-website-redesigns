'use client';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

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
  '/logos/animale.png',
];

export default function ClientsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Animação de rolagem contínua
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
    <section className="bg-white dark:bg-[#250000] py-12 relative overflow-hidden">
      <div className="text-center mb-8">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
          Empresas que já confiam no nosso trabalho
        </h3>
      </div>

      <div
        className="flex gap-12 overflow-hidden scroll-smooth w-full justify-center px-6"
        ref={scrollRef}
      >
        {[...logos, ...logos].map((src, i) => (
          <div key={i} className="flex-shrink-0 opacity-80 hover:opacity-100 transition">
            <Image
              src={src}
              alt="Logo cliente"
              width={120}
              height={60}
              className="object-contain dark:invert"
            />
          </div>
        ))}
      </div>

      {/* Gradiente de borda lateral para um efeito visual suave */}
      <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white dark:from-[#250000] to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white dark:from-[#250000] to-transparent pointer-events-none" />
    </section>
  );
}
