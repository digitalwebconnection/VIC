// app/fox-ess/page.tsx
// Next.js (App Router) + Tailwind CSS
// Updated content for West Vic Energy

import React from "react";

// Check icon
const CheckBadge: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden
    className={"h-6 w-6 text-blue-700 flex-shrink-0 " + (className || "")}
  >
    <path d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.03 12.28l-2.97-2.97a.75.75 0 10-1.06 1.06l3.5 3.5a.75.75 0 001.06 0l6.5-6.5a.75.75 0 10-1.06-1.06l-5.97 5.97z" />
  </svg>
);

const Bullet: React.FC<React.PropsWithChildren<{ title: string }>> = ({ title, children }) => (
  <li className="flex gap-4">
    <CheckBadge />
    <div>
      <p className="text-lg font-semibold text-gray-900">{title}</p>
      {children && (
        <p className="mt-1 text-gray-700 leading-relaxed">{children}</p>
      )}
    </div>
  </li>
);

export default function WhyFoxBt() {
  return (
    <main className="bg-white text-gray-800">
      <section className="w-full">
        <div className="mx-auto max-w-7xl px-6 md:px-0 py-12 md:py-16">
          {/* Panel */}
          <div className="rounded-2xl bg-slate-100/80 p-6 md:p-10 ring-1 ring-slate-200">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-blue-900">
              Why West Vic Energy Recommends Fox ESS Batteries
            </h1>

            <p className="mt-4 text-lg text-gray-700 max-w-3xl">
              At <span className="font-semibold text-blue-800">West Vic Energy</span>, 
              we only install solutions that deliver **long-term value, reliability, and savings**.  
              Fox ESS batteries are a perfect match for Australian homes looking to get the 
              most out of their solar investment.
            </p>

            <ul className="mt-8 md:mt-10 space-y-6">
              <Bullet title="Expandable for Any Home Size">
                Start small with 2.5 kWh and easily scale up to over 40 kWh as your family’s energy needs grow.
              </Bullet>

              <Bullet title="Safe & Proven Technology">
                Built with LiFePO<sub className="align-baseline">4</sub> chemistry, ensuring safer performance 
                and 6,000+ life cycles — that’s 15+ years of dependable energy storage.
              </Bullet>

              <Bullet title="Maximise Your Solar Savings">
                With up to 98% round-trip efficiency, you keep more of the solar energy you generate.  
              </Bullet>

              <Bullet title="Built for Australian Conditions">
                IP65 weatherproof design, fanless and quiet — perfect for both indoor and outdoor installations.
              </Bullet>

              <Bullet title="Affordable Peace of Mind">
                Backed by a 10-year warranty and lower upfront cost compared to alternatives like Tesla Powerwall.
              </Bullet>
            </ul>

            {/* CTA row */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="/component/contact"
                className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm  focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                Request a Free Quote
              </a>

              <div className="inline-flex items-center gap-3 rounded-full border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-blue-900 shadow-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                  className="h-5 w-5"
                >
                  <path d="M2.25 5.25a2 2 0 012-2h3.108a2 2 0 011.94 1.515l.72 2.878a2 2 0 01-.5 1.923l-1.35 1.35a16.5 16.5 0 007.425 7.425l1.35-1.35a2 2 0 011.923-.5l2.878.72a2 2 0 011.515 1.94V19.75a2 2 0 01-2 2H18.75C10.41 21.75 2.25 13.59 2.25 5.25v0z" />
                </svg>
                <a href="tel:+61 497 358 063">+61 497 358 063</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
