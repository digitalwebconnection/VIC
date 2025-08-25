import React from "react";


const Dot = () => (
    <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-gray-900" />
);


const Bulleted: React.FC<React.PropsWithChildren<{ label: string }>> = ({ label, children }) => (
    <li className="flex items-start gap-2">
        <Dot />
        <p className="leading-relaxed">
            <span className="font-semibold">{label}: </span>
            {children}
        </p>
    </li>
);


const Series: React.FC<{ idx: number; title: string; children: React.ReactNode }> = ({ idx, title, children }) => (
    <div className="space-y-3">
        <h3 className="text-lg md:text-xl font-extrabold text-gray-900">
            {idx}. {title}
        </h3>
        <ul className="space-y-2 text-gray-800">{children}</ul>
    </div>
);


export const metadata = {
    title: "Alpha ESS – Series Specs",
    description:
        "Smile5, Smile‑G3, Smile‑M5 and Smile‑P5 specifications with warranty, chemistry, maintenance and monitoring highlights.",
};

export default function AboutAlpha() {
    return (
        <>
            <main className="bg-white text-gray-800">
                <section className="relative mx-auto max-w-7xl px-6 md:px-10 py-12 md:py-16">
                    {/* Page Title */}
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-blue-900">
                        Alpha Ess Solar Battery
                    </h1>

                    {/* Subheading */}
                    <p className="mt-4 text-lg md:text-xl font-semibold text-gray-900">
                        Start storing your excess solar power and reducing your electricity bills further.
                    </p>

                    {/* Intro Quote */}
                    <figure className="mt-6 md:mt-8">
                        <blockquote className="relative rounded-2xl bg-slate-50 p-6 md:p-8 leading-relaxed text-gray-700">
                            <span className="absolute -top-5 left-6 text-6xl font-black text-blue-100 select-none" aria-hidden>
                                “
                            </span>
                            <p>
                                Alpha ESS’s Smile5/Smile G3 series delivers a well‑balanced mix of modularity, safety, smart inverter integration, and cost‑effectiveness. Ideal for Australian homeowners seeking a reliable, expandable, and rebate‑eligible solar battery solution.
                            </p>
                            <span className="absolute -bottom-8 right-6 text-6xl font-black text-blue-100 select-none" aria-hidden>
                                ”
                            </span>
                        </blockquote>
                    </figure>

                    {/* Body Copy */}
                    <div className="prose prose-slate max-w-none mt-6">
                        <p>
                            Alpha ESS systems feature glossy, modular designs that allow capacity ranging from around <strong>4 kWh up to 60 kWh</strong> by connecting multiple battery modules in parallel. This flexibility supports both small residential setups and larger commercial applications and makes it easy to scale as energy needs evolve. The modular architecture streamlines installation and future expansion.
                        </p>

                        <p>
                            Alpha ESS is a well‑known brand in the energy storage industry, offering consistent and dependable <a href="#" className="text-blue-700 hover:underline">solar battery systems</a> suitable for both residential and commercial applications. A major advantage of Alpha ESS batteries is their use of <strong>Lithium Iron Phosphate (LiFePO<sub>4</sub>)</strong> technology. This chemistry is recognized for superior safety, long lifespan, and outstanding thermal stability, making it a trustworthy option for long‑term energy storage.
                        </p>

                        <h2>Best Alpha ESS batteries in Australia</h2>
                        <p>
                            Alpha ESS batteries are designed for high performance and energy efficiency, often delivering a round‑trip efficiency of over <strong>90%</strong>. This ensures the energy you store from your solar system is used effectively, helping reduce grid dependence and lower electricity bills.
                        </p>

                        <p>
                            The system integrates multi‑layer <strong>Battery Management System (BMS)</strong> protections such as overcharge/over‑discharge protection and short‑circuit prevention. Efficient operation is another strong point: Alpha ESS typically delivers ~<strong>95%</strong> round‑trip efficiency and a distinctive cycle life of <strong>6,000+ cycles</strong>, translating to over a decade of consistent use. The system supports swift switchover to backup power, typically within milliseconds, ensuring continuity during grid outages.
                        </p>

                        <p>
                            On warranty, Alpha ESS commonly offers a <strong>10‑year performance warranty</strong> or coverage for approximately <strong>6,000–10,000 cycles</strong> (depending on region and model).
                        </p>
                    </div>
                </section>
                <main className="bg-white text-gray-900">
                    <section className="mx-auto max-w-7xl px-6 md:px-0 py-12 md:py-16">
  

                        {/* Top grid: four series */}
                        <div className="grid md:grid-cols-2 gap-10 md:gap-14">
                            <Series idx={1} title="SMILE5 Series">
                                <Bulleted label="Battery Modules">Available in <strong>2.9 kWh</strong>, <strong>5.7 kWh</strong>, <strong>10.1 kWh</strong>, and <strong>13.3 kWh</strong> capacities.</Bulleted>
                                <Bulleted label="Total System Capacity">Expandable up to <strong>80 kWh</strong> by adding multiple modules.</Bulleted>
                                <Bulleted label="Inverter"><strong>5 kW</strong> single‑phase hybrid inverter.</Bulleted>
                                <Bulleted label="Coupling Options">Supports DC‑coupling, AC‑coupling, and hybrid‑coupling connections.</Bulleted>
                                <Bulleted label="Features">Fast response UPS ability, 24/7 monitoring via AlphaCloud, and modular design for scalability.</Bulleted>
                            </Series>

                            <Series idx={2} title="SMILE‑G3 Series">
                                <Bulleted label="Battery Modules">Includes <strong>4.0 kWh</strong> and <strong>10.1 kWh</strong> modules.</Bulleted>
                                <Bulleted label="Total System Capacity">Expandable up to <strong>60.5 kWh</strong>.</Bulleted>
                                <Bulleted label="Inverter">Integrated hybrid inverter.</Bulleted>
                                <Bulleted label="Features">Designed for off‑grid energy, solar PV integration, and home energy management.</Bulleted>
                            </Series>

                            <Series idx={3} title="SMILE‑M5 Series">
                                <Bulleted label="Battery Modules"><strong>5 kWh</strong> per module.</Bulleted>
                                <Bulleted label="Total System Capacity">Modular, stackable design allows for system expansion.</Bulleted>
                                <Bulleted label="Inverter"><strong>5 kW</strong> single‑phase hybrid inverter.</Bulleted>
                                <Bulleted label="Features">Built‑in fire suppression, quiet operation under <strong>35 dB</strong>, and <strong>200% peak overload</strong> capacity.</Bulleted>
                            </Series>

                            <Series idx={4} title="SMILE‑P5 Series">
                                <Bulleted label="Battery Modules">Information on specific capacities is limited.</Bulleted>
                                <Bulleted label="Total System Capacity">Details on expandability are not specified.</Bulleted>
                                <Bulleted label="Inverter">Not specified.</Bulleted>
                                <Bulleted label="Features">Specific features are not detailed in available resources.</Bulleted>
                            </Series>
                        </div>

                        {/* Divider */}
                        <hr className="my-12 border-slate-200" />

                        {/* Bottom icon features */}
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
                                {/* Monitoring icon */}
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
        </>
    );
}
