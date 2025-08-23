import React from "react";


const Dot = () => (
<span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-gray-900" />
);


const Bulleted: React.FC<React.PropsWithChildren<{ label?: string }>> = ({ label, children }) => (
<li className="flex items-start gap-2">
<Dot />
<p className="leading-relaxed">
{label ? <span className="font-semibold">{label}: </span> : null}
{children}
</p>
</li>
);


const Series: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
<div className="space-y-3">
<h3 className="text-lg md:text-xl font-extrabold text-gray-900">{title}</h3>
<ul className="space-y-2 text-gray-800">{children}</ul>
</div>
);


export const metadata = {
title: "Sungrow Solar Battery – Series Specs",
description:
"SBR (3.2 kWh modules) and SBH (5 kWh modules) specs plus warranty, chemistry, maintenance, and monitoring.",
};


export default function AboutSungrow() {
    return (
        <>
            <main className="bg-white text-gray-800">
                <section className="relative mx-auto max-w-7xl px-6 md:px-0 py-12 md:py-16">
                    {/* Page Title */}
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-blue-900">
                        Sungrow Solar Battery
                    </h1>

                    {/* Subheading */}
                    <p className="mt-4 text-lg md:text-xl font-semibold text-gray-900">
                        Start storing your excess solar power and reducing your electricity bills further.
                    </p>

                    {/* Quote */}
                    <figure className="mt-6 md:mt-8">
                        <blockquote className="relative rounded-2xl bg-slate-50 p-6 md:p-8 leading-relaxed text-gray-700">
                            <span className="absolute -top-5 left-6 text-6xl font-black text-blue-100 select-none" aria-hidden>
                                “
                            </span>
                            <p>
                                Sungrow Power Supply Co., Ltd. stands out as a trusted, innovative, and reliable partner in the renewable energy sector. With a broad portfolio of high‑quality inverters and batteries, cutting‑edge technology, and a global footprint, Sungrow empowers homeowners, businesses, and utilities to harness solar energy efficiently and sustainably.
                            </p>
                            <span className="absolute -bottom-8 right-6 text-6xl font-black text-blue-100 select-none" aria-hidden>
                                ”
                            </span>
                        </blockquote>
                    </figure>

                    {/* Body Copy */}
                    <div className="prose prose-slate max-w-none mt-6">
                        <p>
                            The Sungrow Solar Battery, particularly from its SBR and SBH series, offers a convincing mix of advanced technology, scalability, and cost‑efficiency for residential and small commercial solar energy systems.
                        </p>

                        <p>
                            First and foremost, Sungrow batteries use <strong>Lithium Iron Phosphate (LiFePO<sub>4</sub>)</strong> chemistry, which is fundamentally safer and thermally stable. This safeguards long cycle life—naturally over <strong>6,000 cycles</strong>—and strong overall system consistency.
                        </p>

                        <p>
                            The combination of high‑voltage DC‑coupling and nearly <strong>100% serviceable Depth of Discharge (DoD)</strong> lets you access almost all stored energy, maximizing productivity and avoiding energy waste.
                        </p>

                        <p>
                            Sungrow batteries are modular and mountable—from compact residential setups with <strong>6.4 kWh</strong> capacity to larger systems up to around <strong>25.6 kWh</strong> (SBR series) or <strong>40 kWh+</strong> (SBH series), scalable in parallel to match rising energy requirements.
                        </p>

                        <p>
                            This flexibility <a href="#" className="text-blue-700 hover:underline">solar battery storage</a> design makes them ideal for homeowners planning for future load increases, such as EV charging or new smart appliances.
                        </p>

                        <p>
                            Round‑trip efficiency of Sungrow units can exceed <strong>95%</strong>, meaning a high percentage of the stored energy is useable—translating to noteworthy electricity savings over time.
                        </p>

                        <p>
                            Safety is a chief focus, with multiple layers of protection, overcharge/over‑discharge safeguards, temperature control, fire‑resistant casing, and <strong>IP55‑rated</strong> enclosures for safe indoor or outdoor placement.
                        </p>
                    </div>
                </section>
 <main className="bg-white text-gray-900">
      <section className="mx-auto max-w-7xl px-6 md:px-0 py-12 md:py-16">
        {/* Top comparison grid */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-14">
          <Series title="SBR Series (High-Voltage, 3.2 kWh modules)">
            <Bulleted label="Module size">3.2 kWh usable each.</Bulleted>
            <Bulleted label="Capacity range">6.4 kWh (2 modules) to 25.6 kWh (8 modules).</Bulleted>
            <Bulleted label="Scalability">Up to 4 stacks in parallel → ~100 kWh total.</Bulleted>
            <Bulleted label="Specs">30 A continuous charge/discharge, 100% usable depth-of-discharge.</Bulleted>
            <Bulleted label="Use case">Ideal for typical residential homes seeking flexibility and growth.</Bulleted>
          </Series>

          <Series title="SBH Series (High-Voltage, 5 kWh modules)">
            <Bulleted label="Module size">5 kWh.</Bulleted>
            <Bulleted label="Capacity range">20 kWh (4 modules) to 40 kWh (8 modules).</Bulleted>
            <Bulleted label="Scalability">Up to 2 stacks in parallel → 20–160 kWh.</Bulleted>
            <Bulleted label="Specs">50 A current per module, full depth-of-discharge, IP55 rating, indoor/outdoor.</Bulleted>
            <Bulleted label="Use case">Best for larger homes or light commercial applications with higher energy needs.</Bulleted>
          </Series>
        </div>

        {/* Divider */}
        <hr className="my-12 border-slate-200" />

        {/* Bottom icon features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-start gap-3">
            {/* Warranty icon */}
            <svg viewBox="0 0 24 24" className="h-12 w-12 text-red-600" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M6 4h12a1 1 0 011 1v9.5a6.5 6.5 0 11-14 0V5a1 1 0 011-1z"/>
              <path d="M9 8h6M9 11h6M12 21a6.5 6.5 0 006.5-6.5"/>
            </svg>
            <h4 className="text-lg font-bold">Warranty duration</h4>
            <p className="text-gray-700">10 years (standard) or 5 years (selected series)</p>
          </div>

          <div className="flex flex-col items-start gap-3">
            {/* Battery type icon */}
            <svg viewBox="0 0 24 24" className="h-12 w-12 text-red-600" fill="none" stroke="currentColor" strokeWidth="1.6">
              <rect x="3" y="7" width="16" height="10" rx="2"/>
              <rect x="19" y="10" width="2" height="4"/>
              <path d="M6.5 17l3-5 2 3 2-4 2 6"/>
            </svg>
            <h4 className="text-lg font-bold">Battery type</h4>
            <p className="text-gray-700">Cobalt-free LiFePO<sub>4</sub> lithium-ion</p>
          </div>

          <div className="flex flex-col items-start gap-3">
            {/* Low maintenance icon */}
            <svg viewBox="0 0 24 24" className="h-12 w-12 text-red-600" fill="none" stroke="currentColor" strokeWidth="1.6">
              <circle cx="12" cy="12" r="9"/>
              <path d="M8 12h8M12 8v8"/>
            </svg>
            <h4 className="text-lg font-bold">Low Maintenance</h4>
            <p className="text-gray-700">Low maintenance solar battery with high performance and affordable prices.</p>
          </div>

          <div className="flex flex-col items-start gap-3">
            {/* Monitoring icon */}
            <svg viewBox="0 0 24 24" className="h-12 w-12 text-red-600" fill="none" stroke="currentColor" strokeWidth="1.6">
              <rect x="3" y="4" width="18" height="14" rx="2"/>
              <path d="M7 18v2h10v-2M6 9h7m2 0h3M6 12h5m2 0h5M6 15h3m2 0h7"/>
            </svg>
            <h4 className="text-lg font-bold">24/7 Monitoring</h4>
            <p className="text-gray-700">A user-friendly interface allows for 24-hour monitoring to track real-time data and performance.</p>
          </div>
        </div>
      </section>
    </main>

            </main>
        </>
    );
}
