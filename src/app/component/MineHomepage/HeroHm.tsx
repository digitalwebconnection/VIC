"use client";

import { useEffect, useRef, useState } from "react";

type Slide = {
  src: string;
  cta?: { href: string; label: string };
  overlay?: string; // e.g., 'bg-black/40'
};

const SLIDES: Slide[] = [
  {
    src: "/images/mainhero.jpg",
    cta: { href: "/component/contact", label: "Request a Quote" },
    overlay: "bg-black/40",
  },
  {
    src: "/images/3.jpg",
    cta: { href: "/component/contact", label: "Get Free Consultation" },
    overlay: "bg-black/40",
  },
  {
    src: "/images/4.jpg",
    cta: { href: "/component/contact", label: "See Plans & Pricing" },
    overlay: "bg-black/40",
  },
];

const AUTOPLAY_MS = 4000;

export default function HeroHm() {
  const [idx, setIdx] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const hoveringRef = useRef(false);

  const next = () => setIdx((i) => (i + 1) % SLIDES.length);
  const prev = () => setIdx((i) => (i - 1 + SLIDES.length) % SLIDES.length);

  useEffect(() => {
    if (SLIDES.length <= 1) return;

    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(() => {
      if (!hoveringRef.current) {
        next();
      }
    }, AUTOPLAY_MS);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  return (
    <section
      className="relative overflow-hidden"
      onMouseEnter={() => {
        hoveringRef.current = true;
      }}
      onMouseLeave={() => {
        hoveringRef.current = false;
      }}
      aria-roledescription="carousel"
    >
      {/* Slides */}
      <div className="relative min-h-[380px] md:h-[70vh]">
        {SLIDES.map((s, i) => (
          <div
            key={s.src + i}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-700 ease-out ${
              i === idx ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            style={{ backgroundImage: `url('${s.src}')` }}
            role={i === idx ? "group" : undefined}
            aria-roledescription="slide"
            aria-label={`Slide ${i + 1} of ${SLIDES.length}`}
          >
            {s.overlay && <div className={`absolute inset-0 ${s.overlay}`} />}
            <div className="relative z-10 px-4 mx-auto max-w-7xl h-full flex items-end pb-16">
              {s.cta && (
                <a
                  href={s.cta.href}
                  className="inline-block bg-amber-400 text-white px-6 py-3 rounded-full font-semibold hover:bg-amber-500 transition shadow"
                >
                  {s.cta.label}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      {SLIDES.length > 1 && (
        <>
          <button
            type="button"
            onClick={prev}
            aria-label="Previous slide"
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 hover:bg-white shadow p-2"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="M15 6l-6 6 6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next slide"
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 hover:bg-white shadow p-2"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="M9 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </>
      )}

      {/* Dots */}
      {SLIDES.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2.5 rounded-full transition ${
                i === idx
                  ? "bg-white shadow ring-1 ring-black/10 w-6"
                  : "bg-white/60 hover:bg-white/80 w-2.5"
              }`}
              onClick={() => setIdx(i)}
            />
          ))}
        </div>
      )}
    </section>
  );
}
