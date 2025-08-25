// app/fox-ess/page.tsx
// Next.js (App Router) + Tailwind CSS page replicating the provided design
// Drop this file into /app/fox-ess/page.tsx in your Next.js project
// Tailwind must be configured in the project.

import React from "react";

// Simple check-badge icon
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
          {/* Card-ish panel */}
          <div className="rounded-2xl bg-slate-100/80 p-6 md:p-10 ring-1 ring-slate-200">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-blue-900">
              Why Choose Fox Ess Battery?
            </h1>

            <ul className="mt-8 md:mt-10 space-y-6">
              <Bullet title="Modular & Scalable">
                Easily expand storage from 2.5 kWh to 40+ kWh as your energy needs grow.
              </Bullet>

              <Bullet title="Safe & Long‑Lasting">
                Uses LiFePO
                <sub className="align-baseline">4</sub>
                {" "}
                chemistry with a lifespan of 6,000+ cycles (15+ years).
              </Bullet>

              <Bullet title="High Efficiency">
                95–98% round‑trip efficiency for maximum solar savings.
              </Bullet>

              <Bullet title="Outdoor‑Ready (IP65)">
                Weatherproof, fanless design suitable for quiet, outdoor installs.
              </Bullet>

              <Bullet title="Great Value">
                More affordable than Tesla Powerwall, with similar performance and a 10‑year warranty.
              </Bullet>
            </ul>

            {/* CTA row */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm  focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
              >
               <a href="/component/contact">  Request a Free Quote</a> 
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
                <a href="tel:+61 497 358 063">   +61 497 358 063</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
