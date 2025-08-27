// app/goodwe/details/page.tsx
// Next.js (App Router) + Tailwind CSS
// Updated with unique content and West Vic Energy branding

import React from "react";

const Dot = () => (
    <span className="inline-block h-1.5 w-1.5 rounded-full bg-gray-900 mt-2" />
);

const Bulleted: React.FC<
    React.PropsWithChildren<{ label: string }>
> = ({ label, children }) => (
    <li className="flex items-start gap-2">
        <Dot />
        <p className="leading-relaxed">
            <span className="font-semibold">{label}: </span>
            {children}
        </p>
    </li>
);

const Section: React.FC<{
    idx: number;
    title: string;
    items: React.ReactNode;
}> = ({ idx, title, items }) => (
    <div className="space-y-3">
        <h3 className="text-lg md:text-xl font-extrabold text-gray-900">
            {idx}. {title}
        </h3>
        <ul className="space-y-2 text-gray-800">{items}</ul>
    </div>
);

export const metadata = {
    title: "GoodWE Battery – West Vic Energy",
    description:
        "Discover GoodWE battery storage solutions with West Vic Energy. Store excess solar power, save more, and enjoy reliable backup energy.",
};

export default function AboutGoodBt() {
    return (
        <main className="bg-white text-gray-800">
            <section className="relative mx-auto max-w-7xl px-6 md:px-0 py-12 md:py-16">
                {/* Page Title */}
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-blue-900">
                    GoodWE Battery Solutions with{" "}
                    <span className="text-blue-800">West Vic Energy</span>
                </h1>

                {/* Subheading */}
                <p className="mt-4 text-lg md:text-xl font-semibold text-gray-900">
                    Take control of your energy bills by storing excess solar power with
                    advanced GoodWE battery storage systems installed by West Vic Energy.
                </p>

                {/* Quote */}
                <figure className="mt-6 md:mt-8">
                    <blockquote className="relative rounded-2xl bg-slate-50 p-6 md:p-8 leading-relaxed text-gray-700">
                        <span
                            className="absolute -top-5 left-6 text-6xl font-black text-blue-100 select-none"
                            aria-hidden
                        >
                            “
                        </span>
                        <p className="pl-0 md:pl-2">
                            GoodWE Lynx Home batteries, installed by West Vic Energy, provide
                            safe, intelligent, and flexible energy storage for homes and
                            businesses. With modular design, seamless backup, and
                            climate-resilient engineering, these batteries are the perfect
                            partner to GoodWE’s world-class inverters.
                        </p>
                        <span
                            className="absolute -bottom-8 right-6 text-6xl font-black text-blue-100 select-none"
                            aria-hidden
                        >
                            ”
                        </span>
                    </blockquote>
                </figure>

                {/* Section Title */}
                <h2 className="mt-10 text-2xl md:text-3xl font-extrabold text-gray-900">
                    GoodWE Battery Storage System in Victoria
                </h2>

                {/* Body Copy */}
                <div className="prose prose-slate max-w-none mt-4 md:mt-6">
                    <p>
                        At <strong>West Vic Energy</strong>, we provide{" "}
                        <strong>GoodWE batteries</strong> built on{" "}
                        <strong>Lithium Iron Phosphate (LiFePO₄)</strong> chemistry —
                        globally trusted for safety, thermal stability, and long lifespan.
                        These batteries are ideal for households looking to increase
                        self-consumption and businesses needing reliable energy storage.
                    </p>

                    <p>
                        The commercial BAT Series, supported by West Vic Energy, delivers
                        scalable capacity from 51 kWh up to 450 kWh, making it perfect for
                        industrial applications. With strong charge/discharge rates (0.9C /
                        1.1C), these systems ensure peak shaving, backup, and dynamic load
                        management are smooth and efficient.
                    </p>

                    <p>
                        Safety is at the core of GoodWE’s design. The BAT Series features{" "}
                        <strong>six layers of advanced protection</strong>, including
                        fire-suppression technology, humidity monitoring, and
                        automatic dehumidification. Their IP55 rating allows both indoor and
                        outdoor installation — tailored for Victoria’s climate.
                    </p>

                    <p>
                        Installation with West Vic Energy is simple thanks to{" "}
                        <strong>plug-and-play wiring</strong>, modular stacking, and
                        compatibility with hybrid inverters such as the GoodWE ET and ES G2
                        series. These inverters support UPS-level switching (&lt;10 ms),
                        making power outages virtually unnoticeable.
                    </p>

                    <p>
                        The complete GoodWE ecosystem integrates batteries, inverters, and
                        the SolarGo app for{" "}
                        <strong>24/7 remote monitoring and firmware updates</strong>. By
                        partnering with West Vic Energy, you ensure your system is
                        professionally installed, maintained, and future-ready.
                    </p>

                    <p>
                        Together, the{" "}
                        <a href="#" className="text-blue-700 hover:underline">
                            GoodWE battery
                        </a>{" "}
                        and inverter package gives you{" "}
                        <strong>reliable backup power, energy independence,</strong> and the
                        ability to save money by charging during off-peak hours and
                        discharging when electricity prices are highest.
                    </p>
                </div>
            </section>

            {/* Battery Series Section */}
            <main className="bg-white text-gray-900">
                <section className="max-w-7xl mx-auto px-6 md:px-0 py-12 md:py-16">
                    <div className="grid md:grid-cols-2 gap-10 md:gap-14">
                        <Section
                            idx={1}
                            title="Lynx Home U Series (Low Voltage – 48V)"
                            items={
                                <>
                                    <Bulleted label="Voltage">48V (Low voltage)</Bulleted>
                                    <Bulleted label="Capacity">5.4 kWh per module</Bulleted>
                                    <Bulleted label="Scalability">
                                        Up to 6 modules = 32.4 kWh
                                    </Bulleted>
                                    <Bulleted label="Best For">
                                        Residential homes with GoodWE ES/EM/SBP inverters
                                    </Bulleted>
                                    <Bulleted label="Features">
                                        Plug-and-play, IP65 outdoor rating, auto-reboot after
                                        shutdown
                                    </Bulleted>
                                </>
                            }
                        />

                        <Section
                            idx={2}
                            title="Lynx Home F Series (High Voltage)"
                            items={
                                <>
                                    <Bulleted label="Voltage">
                                        153–800V depending on configuration
                                    </Bulleted>
                                    <Bulleted label="Module Size">3.2 kWh</Bulleted>
                                    <Bulleted label="Scalability">
                                        9.6 – 28.8 kWh (up to 8 modules)
                                    </Bulleted>
                                    <Bulleted label="Best For">
                                        Homes & light commercial with GoodWE ET/BT inverters
                                    </Bulleted>
                                    <Bulleted label="Features">
                                        High round-trip efficiency, compact tower design
                                    </Bulleted>
                                </>
                            }
                        />

                        <Section
                            idx={3}
                            title="Lynx Home S Series (High Voltage)"
                            items={
                                <>
                                    <Bulleted label="Voltage">High voltage</Bulleted>
                                    <Bulleted label="Module Size">~2.56 kWh</Bulleted>
                                    <Bulleted label="Scalability">
                                        7.7 – 20.5 kWh (3–8 modules)
                                    </Bulleted>
                                    <Bulleted label="Best For">
                                        Flexible home storage with rapid charging
                                    </Bulleted>
                                    <Bulleted label="Features">
                                        1-hour rapid charging, sleek vertical stack
                                    </Bulleted>
                                </>
                            }
                        />

                        <Section
                            idx={4}
                            title="Lynx Commercial Series (For Businesses)"
                            items={
                                <>
                                    <Bulleted label="Voltage">High voltage (customised)</Bulleted>
                                    <Bulleted label="Capacity">
                                        50–230 kWh scalable towers
                                    </Bulleted>
                                    <Bulleted label="Best For">
                                        Businesses, schools & community energy storage
                                    </Bulleted>
                                    <Bulleted label="Features">
                                        Modular racks/towers, remote monitoring, scalable design
                                    </Bulleted>
                                </>
                            }
                        />
                    </div>

                    {/* Divider */}
                    <hr className="my-12 border-slate-200" />

                    {/* Bottom Features */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="flex flex-col items-start gap-3">
                            {/* Warranty icon */}
                            <svg viewBox="0 0 24 24" className="h-12 w-12 text-amber-400" fill="none" stroke="currentColor" strokeWidth="1.6">
                                <path d="M6 4h12a1 1 0 011 1v9.5a6.5 6.5 0 11-14 0V5a1 1 0 011-1z" />
                                <path d="M9 8h6M9 11h6M12 21a6.5 6.5 0 006.5-6.5" />
                            </svg>
                            <h4 className="text-lg font-bold">Warranty duration</h4>
                            <p className="text-gray-700">10 years (standard) or 5 years (selected series)</p>
                        </div>

                        <div className="flex flex-col items-start gap-3">
                            {/* Battery type icon */}
                            <svg viewBox="0 0 24 24" className="h-12 w-12 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.6">
                                <rect x="3" y="7" width="16" height="10" rx="2" />
                                <rect x="19" y="10" width="2" height="4" />
                                <path d="M6.5 17l3-5 2 3 2-4 2 6" />
                            </svg>
                            <h4 className="text-lg font-bold">Battery type</h4>
                            <p className="text-gray-700">Cobalt‑free LiFePO<sub>4</sub> lithium‑ion</p>
                        </div>

                        <div className="flex flex-col items-start gap-3">
                            {/* Low maintenance icon */}
                            <svg viewBox="0 0 24 24" className="h-12 w-12 text-amber-400" fill="none" stroke="currentColor" strokeWidth="1.6">
                                <circle cx="12" cy="12" r="9" />
                                <path d="M8 12h8M12 8v8" />
                            </svg>
                            <h4 className="text-lg font-bold">Low Maintenance</h4>
                            <p className="text-gray-700">Low maintenance solar battery with high performance and affordable prices.</p>
                        </div>

                        <div className="flex flex-col items-start gap-3">
                            {/* 24/7 monitoring icon */}
                            <svg viewBox="0 0 24 24" className="h-12 w-12 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.6">
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
