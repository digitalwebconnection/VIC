"use client";

import { useEffect, useMemo, useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "West VIC Energy made switching to solar straightforward—clear quote, neat install, and great communication.",
    name: "Thomas Walker",
    role: "Homeowner, Melton VIC",
  },
  {
    quote:
      "Our rollout finished ahead of schedule and the bills are already down. Couldn’t ask for more.",
    name: "Alisha Verma",
    role: "Small Business Owner, Geelong VIC",
  },
  {
    quote:
      "From consultation to commissioning, the team delivered exactly what was promised.",
    name: "Marco Silvestri",
    role: "Eco-Resort Director",
  },
  {
    quote:
      "We cut our carbon footprint without blowing the budget. Professional and responsive support.",
    name: "Grace Njoroge",
    role: "Operations Lead",
  },
  {
    quote:
      "Fast, friendly, and super knowledgeable. We’re coming back to add a battery next.",
    name: "Yuta Nakamura",
    role: "Plant Manager",
  },
  {
    quote:
      "Top-notch service—from feasibility to final inspection. Monitoring app setup was a bonus.",
    name: "Isabella Sánchez",
    role: "Infrastructure Head",
  },
];

export default function CircalAb() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  // --- layout constants (tweak if needed) ---
const DOTS: number = 6;
const START_DEG: number = -40;
const END_DEG: number = 40;
const BIG_SIZE: number = 550;
const RADIUS: number = 380;

  // Respect reduced motion
  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
  }, []);

  // Autoplay
  useEffect(() => {
    if (prefersReducedMotion || paused) return;
    const id = setInterval(
      () => setActive((i) => (i + 1) % TESTIMONIALS.length),
      5000
    );
    return () => clearInterval(id);
  }, [prefersReducedMotion, paused]);

  // Keyboard support for dots (Left/Right)
  const onKeyNav = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowRight") {
      setActive((i) => (i + 1) % TESTIMONIALS.length);
    } else if (e.key === "ArrowLeft") {
      setActive((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    }
  };

  return (
    <section
      className="py-24 px-4 bg-white"
      aria-label="Customer testimonials"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT: circle + arc + dots */}
        <div className="relative flex justify-center lg:justify-end -ml-10 lg:-ml-20">
          {/* big dark circle */}
          <div
            className="rounded-full bg-neutral-700"
            style={{ width: BIG_SIZE, height: BIG_SIZE }}
            aria-hidden="true"
          />

          {/* dots on the right semicircle */}
          {Array.from({ length: DOTS }).map((_, i) => {
            const t = DOTS === 1 ? 0.5 : i / (DOTS - 1); // 0..1
            const deg = START_DEG + t * (END_DEG - START_DEG);
            const rad = (deg * Math.PI) / 180;
            const x = Math.cos(rad) * RADIUS;
            const y = Math.sin(rad) * RADIUS;

            const mappedIndex = i % TESTIMONIALS.length;
            const isActive = mappedIndex === active;
            const size = isActive ? 64 : 56; // px

            return (
              <button
                key={i}
                onClick={() => setActive(mappedIndex)}
                className={`absolute rounded-full transition focus:outline-none focus:ring-2 focus:ring-orange-400
                  ${isActive ? "bg-orange-600" : "bg-neutral-500 hover:bg-neutral-400"}`}
                style={{
                  width: size,
                  height: size,
                  left: `calc(50% + ${x}px - ${size / 2}px)`,
                  top: `calc(50% + ${y}px - ${size / 2}px)`,
                }}
                aria-label={`Show testimonial ${mappedIndex + 1} of ${TESTIMONIALS.length}`}
                aria-pressed={isActive}
                title={TESTIMONIALS[mappedIndex].name}
              />
            );
          })}

          {/* Invisible keyboard nav layer */}
          <div
            className="absolute inset-0"
            role="group"
            aria-label="Testimonial navigation"
            tabIndex={0}
            onKeyDown={onKeyNav}
          />
        </div>

        {/* RIGHT: text block */}
        <div>
          <p className="text-[11px] sm:text-xs font-bold tracking-[0.18em] text-orange-500">
            TESTIMONIALS
          </p>
          <div className="w-14 h-[3px] bg-orange-500 mt-2 mb-6" />
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-8">
            Client Reviews
          </h2>

          <p
            className="text-gray-600 text-xl leading-relaxed mb-10 max-w-2xl"
            aria-live="polite"
          >
            {TESTIMONIALS[active].quote}
          </p>

          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-blue-900 grid place-content-center text-white">
              {/* quote mark */}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-7 h-7"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 17a4 4 0 01-4-4V5a2 2 0 012-2h5m7 14a4 4 0 01-4-4V5a2 2 0 012-2h5"
                />
              </svg>
            </div>
            <div>
              <p className="text-2xl font-extrabold">
                {TESTIMONIALS[active].name}
              </p>
              <p className="text-sm text-gray-500">
                {TESTIMONIALS[active].role}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
