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

export const specsMetadata = {
    title: "Tesla Powerwall Specs | West Vic Energy",
    description: "Tesla Powerwall technical specifications by West Vic Energy.",
};

export const metadata = {
    title: "Tesla Powerwall Solar Battery | West Vic Energy",
    description:
        "Start storing your excess solar power and reducing your electricity bills with Tesla Powerwall, proudly offered by West Vic Energy.",
};

export default function AboutTesla() {
    return (
        <>
            <main className="bg-white text-gray-800">
                <section className="relative mx-auto max-w-7xl px-6 md:px-0 py-12 md:py-16">
                    {/* Page Title */}
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-blue-900">
                        Tesla Powerwall Solar Battery – Powered by West Vic Energy
                    </h1>

                    {/* Subheading */}
                    <p className="mt-4 text-lg md:text-xl font-semibold text-gray-900">
                        Store your excess solar energy, lower your electricity bills, and gain true energy independence with West Vic Energy.
                    </p>

                    {/* Quote */}
                    <figure className="mt-6 md:mt-8">
                        <blockquote className="relative rounded-2xl bg-slate-50 p-6 md:p-8 leading-relaxed text-gray-700">
                            <span className="absolute -top-5 left-6 text-6xl font-black text-blue-100 select-none" aria-hidden>
                                “
                            </span>
                            <p>
                                Tesla Powerwall 3 stands out for its high capacity, integrated solar inverter, smart energy management, over-the-air updates, and seamless integration with the Tesla ecosystem. With West Vic Energy, you get expert installation and ongoing support for long-term reliability.
                            </p>
                            <span className="absolute -bottom-8 right-6 text-6xl font-black text-blue-100 select-none" aria-hidden>
                                ”
                            </span>
                        </blockquote>
                    </figure>

                    {/* Body Copy */}
                    <div className="prose prose-slate max-w-none mt-6">
                        <p>
                            The <strong>Tesla Powerwall Solar Battery</strong>, offered by <strong>West Vic Energy</strong>, is one of the most advanced
                            and reliable <a href="#" className="text-blue-700 hover:underline">energy storage solutions</a> available for homes and small businesses.
                            It integrates with solar panels to store unused energy for later use—giving you power at night, during peak tariff times, or in blackouts.
                        </p>

                        <p>
                            Each unit provides <strong>13.5 kWh usable energy</strong> with scalable options—install up to 10 Powerwalls for higher capacity.
                            With round-trip efficiency up to <strong>92%</strong> and a durable LiFePO<sub>4</sub> chemistry, it’s built for safety and performance.
                        </p>

                        <p>
                            Backed by Tesla’s innovation and West Vic Energy’s trusted local expertise, you can count on seamless installation,
                            ongoing monitoring, and dedicated support.
                        </p>
                    </div>
                </section>

                {/* Comparison */}
                <main className="bg-white text-gray-900">
                    <section className="mx-auto max-w-7xl px-6 md:px-0 py-12 md:py-16">
                        <div className="grid md:grid-cols-2 gap-10 md:gap-14">
                            <Series title="Tesla Powerwall 2">
                                <Bulleted label="Usable capacity">~13.5 kWh</Bulleted>
                                <Bulleted label="Power output">5 kW continuous, 7 kW peak</Bulleted>
                                <Bulleted>Integrated inverter (AC-coupled system)</Bulleted>
                                <Bulleted>Backup power for homes during outages</Bulleted>
                                <Bulleted>Widely installed and proven technology</Bulleted>
                            </Series>

                            <Series title="Tesla Powerwall 3 (latest model)">
                                <Bulleted label="Usable capacity">~13.5 kWh</Bulleted>
                                <Bulleted label="Higher power output">11.5 kW continuous</Bulleted>
                                <Bulleted>Integrated solar inverter (streamlined installation)</Bulleted>
                                <Bulleted>Advanced software with over-the-air updates</Bulleted>
                                <Bulleted>Seamless integration with Tesla Solar Roof and EV chargers</Bulleted>
                            </Series>
                        </div>

                        {/* Divider */}
                        <hr className="my-12 border-slate-200" />

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
        </>
    );
}
