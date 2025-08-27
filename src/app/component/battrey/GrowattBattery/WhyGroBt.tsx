// app/battery/page.tsx
// Next.js (App Router) + Tailwind CSS single page for West Vic Energy Battery Solutions

import React from "react";

// Check Icon
const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-5 w-5 text-amber-500"
    aria-hidden
  >
    <path
      fillRule="evenodd"
      d="M2.25 12a9.75 9.75 0 1119.5 0 9.75 9.75 0 01-19.5 0zm14.03-2.78a.75.75 0 10-1.06-1.06l-4.97 4.97-1.94-1.94a.75.75 0 00-1.06 1.06l2.47 2.47c.3.3.79.3 1.06 0l5.5-5.5z"
      clipRule="evenodd"
    />
  </svg>
);

// Phone Icon
const PhoneIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-5 w-5"
    aria-hidden
  >
    <path d="M2.25 3.75A1.5 1.5 0 013.75 2.25h3A1.5 1.5 0 018.25 3.75v2.5a1.5 1.5 0 01-.439 1.06l-1.29 1.29a1.5 1.5 0 000 2.12l8.75 8.75a1.5 1.5 0 002.12 0l1.29-1.29a1.5 1.5 0 011.06-.44h2.5a1.5 1.5 0 011.5 1.5v3a1.5 1.5 0 01-1.5 1.5H18A15.75 15.75 0 012.25 6.75v-3z" />
  </svg>
);

const FeatureItem = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <li className="flex gap-3">
    <span className="mt-1.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-amber-100">
      <CheckIcon />
    </span>
    <div>
      <p className="font-semibold text-gray-900 text-base sm:text-lg">{title}</p>
      <p className="text-gray-600 leading-7 text-sm sm:text-base">{children}</p>
    </div>
  </li>
);

export default function BatterySolutions() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="mx-auto w-full max-w-7xl px-5 sm:px-0 py-12 sm:py-16">
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
          Why Choose{" "}
          <span className="text-amber-500">West Vic Energy Batteries?</span>
        </h1>
        <p className="mt-4 max-w-2xl text-gray-600">
          Power your home or business with reliable, safe, and future-ready
          battery storage designed for Australian conditions.
        </p>

        <ul className="mt-10 grid gap-6">
          <FeatureItem title="Safe & Reliable">
            Advanced LiFePO₄ chemistry with multi-layer protection ensures
            long-term safety for your home and family.
          </FeatureItem>

          <FeatureItem title="Scalable Solutions">
            Start small and expand anytime with modular battery options to match
            your growing energy needs.
          </FeatureItem>

          <FeatureItem title="High Performance">
            Up to 6,000+ cycles, deep discharge capability, and consistent power
            delivery day and night.
          </FeatureItem>

          <FeatureItem title="Built for Australia">
            Rugged IP65-rated housing, fire-retardant materials, and wide
            operating temperature range.
          </FeatureItem>

          <FeatureItem title="Peace of Mind">
            Backed by a 10-year warranty and West Vic Energy’s trusted
            installation & support team.
          </FeatureItem>
        </ul>

        {/* CTA */}
        <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          <a
            href="/component/contact"
            className="inline-flex items-center justify-center rounded-full bg-amber-500 px-6 py-4 text-white font-semibold shadow-sm hover:bg-amber-600 transition"
          >
            Request Your Free Battery Quote
          </a>

          <a
            href="tel:+61 497 358 063"
            className="inline-flex items-center gap-2 rounded-full border border-amber-500 bg-white px-6 py-4 font-semibold text-amber-600 hover:bg-amber-50 transition"
          >
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-amber-100">
              <PhoneIcon />
            </span>
            <span>+61 497 358 063</span>
          </a>
        </div>
      </section>
    </main>
  );
}
