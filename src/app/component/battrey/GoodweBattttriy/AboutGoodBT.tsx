// app/goodwe/details/page.tsx
// Next.js (App Router) + Tailwind CSS
// Drop this file at /app/goodwe/details/page.tsx
// app/batteries/foxess/details/page.tsx
import { Battery, Cog, Wrench, Monitor } from "lucide-react";

import React from "react";


const Dot = () => (
    <span className="inline-block h-1.5 w-1.5 rounded-full bg-gray-900 mt-2" />
);


const Bulleted: React.FC<React.PropsWithChildren<{ label: string }>> = ({ label, children }) => (
    <li className="flex items-start gap-2">
        <Dot />
        <p className="leading-relaxed"><span className="font-semibold">{label}: </span>{children}</p>
    </li>
);


const Section: React.FC<{ idx: number; title: string; items: React.ReactNode }> = ({ idx, title, items }) => (
    <div className="space-y-3">
        <h3 className="text-lg md:text-xl font-extrabold text-gray-900">
            {idx}. {title}
        </h3>
        <ul className="space-y-2 text-gray-800">{items}</ul>
    </div>
);

export const metadata = {
    title: "GoodWE Battery",
    description:
        "Start storing your excess solar power and reducing your electricity bills further.",
};

export default function AboutGoodBt() {
    return (
        <main className="bg-white text-gray-800">
            <section className="relative mx-auto max-w-7xl px-6 md:px-0 py-12 md:py-16">
                {/* Page Title */}
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-blue-900">
                    GoodWE Battery
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
                        <p className="pl-0 md:pl-2">
                            GoodWe Lynx Home batteries offer versatility, safety, and intelligent control, whether you’re looking for a compact residential system or a commercial‑scale energy bank. Their plug‑and‑play modules, reliable backup, and climate‑resilient design make them an excellent complement to GoodWe’s inverters.
                        </p>
                        <span className="absolute -bottom-8 right-6 text-6xl font-black text-blue-100 select-none" aria-hidden>
                            ”
                        </span>
                    </blockquote>
                </figure>

                {/* Section Title */}
                <h2 className="mt-10 text-2xl md:text-3xl font-extrabold text-gray-900">
                    GoodWE Battery Storage System Victoria
                </h2>

                {/* Body Copy */}
                <div className="prose prose-slate max-w-none mt-4 md:mt-6">
                    <p>
                        GoodWe batteries use <strong>Lithium Iron Phosphate (LiFePO<sub>4</sub>)</strong> chemistry, well‑known for its safety, thermal stability, and long life span. Designed with high cycle stability, these batteries safeguard reliable performance over many years. For commercial and industrial applications, GoodWe offers the BAT Series, obtainable in 51 kWh, 56 kWh, up to 112 kWh capacities that support parallel connection of multiple units for system expansion up to 450 kWh. These GoodWe systems accommodate robust charging (0.9C) and discharging (1.1C), making them ideal for peak shaving and dynamic load management.
                    </p>

                    <p>
                        Protection is a top priority in GoodWe designs. The BAT Series integrates six layers of protection including aerosol‑based fire suppression at both module and cabinet levels, along with pack‑level humidity monitoring and automatic dehumidification to uphold optimal internal conditions. GoodWe’s Lynx C and BAT Cabinets offer IP55‑rated protection (and optional C4 corrosion resistance), permitting safe indoor or outdoor installation in varied climate zones.
                    </p>

                    <p>
                        Installation is streamlined through <strong>plug‑and‑play wiring</strong>, compact modular formats, and compatibility with GoodWe hybrid inverters such as the ET and ES G2 series. The ES G2 inverter, for example, supports UPS‑level switching (&lt;10 ms), high DC input current per MPPT (up to 16 A), and responsive plug‑and‑play design that reduces setup time.
                    </p>

                    <p>
                        GoodWe’s integrated ecosystem—including batteries, inverters, and their SolarGo app—delivers smooth installation and operation. Remote firmware updates and diagnostics are handled seamlessly because the proprietary BMS communicates directly with the inverter; monitoring through GoodWe’s SolarGo app simplifies setup and avoids compatibility issues often seen with third‑party systems.
                    </p>

                    <p>
                        The <a href="#" className="text-blue-700 hover:underline">solar battery</a> and inverter combination offers <strong>fast, reliable backup power</strong> during outages, switching to backup mode within milliseconds and powering everyday appliances like air conditioners and refrigerators. Users can also enhance energy usage by charging batteries during off‑peak hours and discharging during peak times to cut electricity costs.
                    </p>
                </div>
            </section>
            <main className="bg-white text-gray-900">
                <section className="max-w-7xl mx-auto px-6 md:px-0 py-12 md:py-16">
                    {/* <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-8">GoodWE Battery Series</h1> */}

                    {/* Top grid: four series */}
                    <div className="grid md:grid-cols-2 gap-10 md:gap-14">
                        <Section
                            idx={1}
                            title="Lynx Home U Series (Low Voltage – 48V)"
                            items={
                                <>
                                    <Bulleted label="Voltage">48V (Low voltage)</Bulleted>
                                    <Bulleted label="Capacity">5.4 kWh per module</Bulleted>
                                    <Bulleted label="Scalability">Up to 6 modules = 32.4 kWh</Bulleted>
                                    <Bulleted label="Use Case">Residential homes with GoodWe ES/EM/SBP inverters</Bulleted>
                                    <Bulleted label="Features">Plug‑and‑play, outdoor rated (IP65), auto‑reboot after shutdown</Bulleted>
                                </>
                            }
                        />

                        <Section
                            idx={2}
                            title="Lynx Home F Series (High Voltage – HV)"
                            items={
                                <>
                                    <Bulleted label="Voltage">153–800V depending on configuration</Bulleted>
                                    <Bulleted label="Module Size">3.2 kWh</Bulleted>
                                    <Bulleted label="Scalability">From 9.6 kWh to 28.8 kWh (up to 8 modules)</Bulleted>
                                    <Bulleted label="Use Case">Residential & light commercial; pairs with GoodWe ET/BT hybrid inverters</Bulleted>
                                    <Bulleted label="Features">High round‑trip efficiency, space‑saving tower design</Bulleted>
                                </>
                            }
                        />

                        <Section
                            idx={3}
                            title="Lynx Home S Series (High Voltage – HV)"
                            items={
                                <>
                                    <Bulleted label="Voltage">High voltage (exact depends on modules used)</Bulleted>
                                    <Bulleted label="Module Size">~2.56 kWh</Bulleted>
                                    <Bulleted label="Scalability">3 to 8 modules (~7.7 to 20.5 kWh)</Bulleted>
                                    <Bulleted label="Use Case">Flexible home storage, fast‑charging support</Bulleted>
                                    <Bulleted label="Features">1‑hour rapid charging capability, sleek vertical stack</Bulleted>
                                </>
                            }
                        />

                        <Section
                            idx={4}
                            title="Lynx Commercial Series (For Businesses)"
                            items={
                                <>
                                    <Bulleted label="Voltage">High voltage (customized)</Bulleted>
                                    <Bulleted label="Capacity">Typically 50–230 kWh (stacked towers)</Bulleted>
                                    <Bulleted label="Use Case">Commercial and industrial storage</Bulleted>
                                    <Bulleted label="Features">Rack/tower installation, scalable battery banks, remote monitoring</Bulleted>
                                </>
                            }
                        />
                    </div>

                    {/* Divider */}
                    <hr className="my-12 border-slate-200" />

                    {/* Bottom icons row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="flex flex-col items-start gap-3">
                            {/* Warranty icon */}
                            <svg viewBox="0 0 24 24" className="h-12 w-12 text-red-600" fill="none" stroke="currentColor" strokeWidth="1.6">
                                <path d="M6 4h12a1 1 0 011 1v9.5a6.5 6.5 0 11-14 0V5a1 1 0 011-1z" />
                                <path d="M9 8h6M9 11h6M12 21a6.5 6.5 0 006.5-6.5" />
                            </svg>
                            <h4 className="text-lg font-bold">Warranty duration</h4>
                            <p className="text-gray-700">10 years (standard) or 5 years (selected series)</p>
                        </div>

                        <div className="flex flex-col items-start gap-3">
                            {/* Battery type icon */}
                            <svg viewBox="0 0 24 24" className="h-12 w-12 text-red-600" fill="none" stroke="currentColor" strokeWidth="1.6">
                                <rect x="3" y="7" width="16" height="10" rx="2" />
                                <rect x="19" y="10" width="2" height="4" />
                                <path d="M6.5 17l3-5 2 3 2-4 2 6" />
                            </svg>
                            <h4 className="text-lg font-bold">Battery type</h4>
                            <p className="text-gray-700">Cobalt‑free LiFePO<sub>4</sub> lithium‑ion</p>
                        </div>

                        <div className="flex flex-col items-start gap-3">
                            {/* Low maintenance icon */}
                            <svg viewBox="0 0 24 24" className="h-12 w-12 text-red-600" fill="none" stroke="currentColor" strokeWidth="1.6">
                                <circle cx="12" cy="12" r="9" />
                                <path d="M8 12h8M12 8v8" />
                            </svg>
                            <h4 className="text-lg font-bold">Low Maintenance</h4>
                            <p className="text-gray-700">Low maintenance solar battery with high performance and affordable prices.</p>
                        </div>

                        <div className="flex flex-col items-start gap-3">
                            {/* 24/7 monitoring icon */}
                            <svg viewBox="0 0 24 24" className="h-12 w-12 text-red-600" fill="none" stroke="currentColor" strokeWidth="1.6">
                                <rect x="3" y="4" width="18" height="14" rx="2" />
                                <path d="M7 18v2h10v-2M6 9h7m2 0h3M6 12h5m2 0h5M6 15h3m2 0h7" />
                            </svg>
                            <h4 className="text-lg font-bold">24/7 Monitoring</h4>
                            <p className="text-gray-700">A user‑friendly interface allows for 24‑hour monitoring to track real‑time data and performance.</p>
                        </div>
                    </div>
                </section>
            </main>
        </main>
    );
}
