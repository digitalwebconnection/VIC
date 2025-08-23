// app/growatt/page.tsx
// Next.js (App Router) + Tailwind CSS single page replicating the provided design
// Drop this file in a Next.js project with Tailwind configured. Visit /growatt to view.

import React from "react";

// Simple Check icon
const CheckIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5 text-blue-700"
        aria-hidden
    >
        <path
            fillRule="evenodd"
            d="M2.25 12a9.75 9.75 0 1119.5 0 9.75 9.75 0 01-19.5 0zm14.03-2.78a.75.75 0 10-1.06-1.06l-4.97 4.97-1.94-1.94a.75.75 0 00-1.06 1.06l2.47 2.47c.3.3.79.3 1.06 0l5.5-5.5z"
            clipRule="evenodd"
        />
    </svg>
);

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

const FeatureItem = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <li className="flex gap-3">
        <span className="mt-1.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-100">
            <CheckIcon />
        </span>
        <div>
            <p className="font-semibold text-gray-900 text-base sm:text-lg">{title}</p>
            <p className="text-gray-600 leading-7 text-sm sm:text-base">{children}</p>
        </div>
    </li>
);

export default function WhyGroBt() {
    return (
        <main className="min-h-screen bg-slate-100">
            <section className="mx-auto w-full max-w-7xl px-5 sm:px-0 py-12 sm:py-16">
                <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
                    Why Choose <span className="text-slate-900">Growatt Battery?</span>
                </h1>

                <ul className="mt-10 grid gap-6">
                    <FeatureItem title="Safety">
                        Thermally stable LiFePO₄, robust multi-layer protection systems
                    </FeatureItem>

                    <FeatureItem title="Modularity">
                        Easy expansion; mix and match modules; one-person installation
                    </FeatureItem>

                    <FeatureItem title="Performance">
                        High DoD, 6,000+ cycles, optimizer for balanced energy output
                    </FeatureItem>

                    <FeatureItem title="Durability">
                        IP65–66 rated, wide temp range, flame-retardant housing
                    </FeatureItem>

                    <FeatureItem title="Warranty">
                        10-year coverage with supported cycle/capacity guarantees
                    </FeatureItem>
                </ul>

                {/* Calls to action */}
                <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                    <a
                        href="#contact"
                        className="inline-flex items-center justify-center rounded-full bg-red-600 px-6 py-4 text-white font-semibold shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                    >
                        Get Expert Advice
                    </a>

                    <a
                        href="tel:1300285885"
                        className="inline-flex items-center gap-2 rounded-full border border-red-300 bg-white px-6 py-4 font-semibold text-red-600 hover:bg-red-50"
                    >
                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-red-100 text-red-600">
                            <PhoneIcon />
                        </span>
                        <span className="tracking-wide">1300 285 885</span>
                    </a>
                </div>
            </section>
        </main>
    );
}
