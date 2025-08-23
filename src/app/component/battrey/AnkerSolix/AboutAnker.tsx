import React from "react";

const Dot = () => (
    <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-gray-900" />
);

const Bulleted: React.FC<
    React.PropsWithChildren<{ label?: string }>
> = ({ label, children }) => (
    <li className="flex items-start gap-2">
        <Dot />
        <p className="leading-relaxed">
            {label ? <span className="font-semibold">{label}: </span> : null}
            {children}
        </p>
    </li>
);

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({
    title,
    children,
}) => (
    <div className="space-y-3">
        <h3 className="text-lg md:text-xl font-extrabold text-gray-900">{title}</h3>
        <ul className="space-y-2 text-gray-800">{children}</ul>
    </div>
);

export const metadata = {
    title: "Anker SOLIX – Specs & Series",
    description:
        "SOLIX X1 home energy system and SOLIX F-Series portable stations specs with warranty, chemistry, and monitoring.",
};

export default function AboutAnker() {
    return (
        <>
            <main className="bg-white text-gray-800">
                <section className="relative mx-auto max-w-7xl px-6 md:px-0 py-12 md:py-16">
                    {/* Page Title */}
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-blue-900">
                        Anker Solix Solar Battery
                    </h1>

                    {/* Subheading */}
                    <p className="mt-4 text-lg md:text-xl font-semibold text-gray-900">
                        Start storing your excess solar power and reducing your electricity bills further.
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
                            <p>
                                Anker SOLIX combines safety, power, scalability, and smart energy management in one cohesive package—backed by Anker’s reputation for quality tech. Whether you need full‑home backup, RV power, or outdoor reliability, SOLIX is a top contender in its class.
                            </p>
                            <span
                                className="absolute -bottom-8 right-6 text-6xl font-black text-blue-100 select-none"
                                aria-hidden
                            >
                                ”
                            </span>
                        </blockquote>
                    </figure>

                    {/* Body Copy */}
                    <div className="prose prose-slate max-w-none mt-6">
                        <p>
                            The Anker SOLIX Solar Battery lineup brings together forward‑thinking battery technology, smart design, and modular flexibility, providing compelling solutions across transportable and <a href="#" className="text-blue-700 hover:underline">home energy storage</a> use cases.
                        </p>

                        <p>
                            This is Anker’s full‑feature home battery solution. It supports scalable capacity from <strong>5 kWh</strong> up to <strong>180 kWh</strong> and output from <strong>3 to 36 kW</strong>, sized for residential and commercial energy requirements. It features Storm Guard mode to pre‑charge before outages, and rapid UPS switch in under <strong>20 ms</strong>.
                        </p>

                        <p>
                            It runs across extreme temperatures (<strong>−20 °C to 55 °C</strong>), has <strong>IP65/66</strong> and <strong>C5</strong> corrosion resistance, and includes smart module‑level optimization to avoid performance bottlenecks.
                        </p>

                        <p>
                            Anker Solix portable power stations are built around <strong>LiFePO<sub>4</sub></strong> (Lithium Iron Phosphate) battery chemistry, offering long lifespan (around <strong>3,000 cycles</strong>) and steadfast performance.
                        </p>

                        <p>
                            The <strong>SOLIX C300</strong> packs <strong>288 Wh</strong> of capacity, supports up to <strong>300 W</strong> continuous AC output (<strong>600 W</strong> surge), and recharges fully in about <strong>70 minutes</strong> via AC power. Solar recharging up to <strong>100 W</strong> input is supported via an <strong>XT‑60</strong> connector, making it perfect for off‑grid tools, camping, or emergency backup.
                        </p>
                    </div>
                </section>
                <main className="bg-white text-gray-900">
                    <section className="mx-auto max-w-7xl px-6 md:px-0 py-12 md:py-16">
                        {/* Top comparison grid */}
                        <div className="grid md:grid-cols-2 gap-10 md:gap-14">
                            <Section title="SOLIX X1 Home Energy System">
                                <Bulleted label="Modular design">
                                    Combines a power module (built-in hybrid inverter and controller) with
                                    <strong> 1–6 battery modules</strong> (each 5 kWh LFP), totaling
                                    <strong> 5–30 kWh per unit</strong>; up to <strong>180 kWh</strong> and{" "}
                                    <strong>36 kW</strong> with six units in parallel.
                                </Bulleted>
                                <Bulleted label="Power output">6 kW continuous per unit</Bulleted>
                                <Bulleted label="Backup & safety">
                                    &lt;20 ms switchover, “Storm Guard” mode anticipates outages, IP66/NEMA 4
                                    outdoor-rated
                                </Bulleted>
                                <Bulleted label="Features">
                                    LFP cells (~6,000-cycle lifespan), wide operating temperature (−20 °C to
                                    +55 °C), app monitoring, modular fault isolation
                                </Bulleted>
                                <Bulleted label="Warranty">
                                    10 years or total throughput per module
                                </Bulleted>
                            </Section>

                            <Section title="SOLIX F-Series Portable Power Stations">
                                <Bulleted>
                                    Includes <strong>F2000 (2,048 Wh)</strong> and{" "}
                                    <strong>F3800 (3,840 Wh)</strong> base units with <strong>6,000 W</strong>{" "}
                                    output, expandable up to <strong>26.9 kWh</strong> using BP3800 add-on
                                    packs
                                </Bulleted>
                                <Bulleted label="Fast recharge">
                                    up to <strong>2,400 W</strong> from solar, <strong>1.8 kW</strong> AC
                                    input → 0–80% in ~<strong>1.5 hours</strong>
                                </Bulleted>
                                <Bulleted label="Features">
                                    LFP chemistry, multiple AC/USB ports, EV/RV outlets (NEMA 14-50, L14-30),
                                    5-year warranty
                                </Bulleted>
                                <Bulleted label="Use cases">
                                    <strong>Portable</strong>, ideal for RV/off-grid living, emergency power,
                                    or mobile job sites.
                                </Bulleted>
                            </Section>
                        </div>

                        {/* Divider */}
                        <hr className="my-12 border-slate-200" />

                        {/* Bottom icon features */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="flex flex-col items-start gap-3">
                                {/* Warranty icon */}
                                <svg
                                    viewBox="0 0 24 24"
                                    className="h-12 w-12 text-red-600"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.6"
                                >
                                    <path d="M6 4h12a1 1 0 011 1v9.5a6.5 6.5 0 11-14 0V5a1 1 0 011-1z" />
                                    <path d="M9 8h6M9 11h6M12 21a6.5 6.5 0 006.5-6.5" />
                                </svg>
                                <h4 className="text-lg font-bold">Warranty duration</h4>
                                <p className="text-gray-700">
                                    10 years (standard) or 5 years (selected series)
                                </p>
                            </div>

                            <div className="flex flex-col items-start gap-3">
                                {/* Battery type icon */}
                                <svg
                                    viewBox="0 0 24 24"
                                    className="h-12 w-12 text-red-600"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.6"
                                >
                                    <rect x="3" y="7" width="16" height="10" rx="2" />
                                    <rect x="19" y="10" width="2" height="4" />
                                    <path d="M6.5 17l3-5 2 3 2-4 2 6" />
                                </svg>
                                <h4 className="text-lg font-bold">Battery type</h4>
                                <p className="text-gray-700">
                                    Cobalt-free LiFePO<sub>4</sub> lithium-ion
                                </p>
                            </div>

                            <div className="flex flex-col items-start gap-3">
                                {/* Low maintenance icon */}
                                <svg
                                    viewBox="0 0 24 24"
                                    className="h-12 w-12 text-red-600"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.6"
                                >
                                    <circle cx="12" cy="12" r="9" />
                                    <path d="M8 12h8M12 8v8" />
                                </svg>
                                <h4 className="text-lg font-bold">Low Maintenance</h4>
                                <p className="text-gray-700">
                                    Low maintenance solar battery with high performance and affordable prices.
                                </p>
                            </div>

                            <div className="flex flex-col items-start gap-3">
                                {/* Monitoring icon */}
                                <svg
                                    viewBox="0 0 24 24"
                                    className="h-12 w-12 text-red-600"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.6"
                                >
                                    <rect x="3" y="4" width="18" height="14" rx="2" />
                                    <path d="M7 18v2h10v-2M6 9h7m2 0h3M6 12h5m2 0h5M6 15h3m2 0h7" />
                                </svg>
                                <h4 className="text-lg font-bold">24/7 Monitoring</h4>
                                <p className="text-gray-700">
                                    A user-friendly interface allows for 24-hour monitoring to track real time
                                    data and performance.
                                </p>
                            </div>
                        </div>
                    </section>
                </main>
            </main>
        </>
    );
}
