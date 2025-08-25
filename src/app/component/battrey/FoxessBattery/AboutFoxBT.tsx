// app/batteries/foxess/details/page.tsx
import { Battery, Cog, Wrench, Monitor } from "lucide-react";

export const metadata = {
    title: "Fox Ess Battery – Details",
    description:
        "Overview, specs, and features of Fox ESS modular batteries including LV/HV series, warranty, chemistry, maintenance, and 24/7 monitoring.",
};

export default function FoxEssDetailsPage() {
    return (
        <>
            <main className="min-h-screen bg-white max-w-7xl mx-auto text-gray-800">

                <div className="mx-auto max-w-7xl px-6 py-10 md:py-14">
                    <h1 className="text-4xl font-extrabold tracking-tight text-blue-900 md:text-5xl">
                        Fox Ess Battery
                    </h1>


                    <div className="mt-6 space-y-6 text-lg leading-8 text-gray-700">
                        <p>
                            FoxESS offers robust, high-performance battery systems that are
                            <strong> efficient, modular, well‑priced</strong>, and supported
                            with solid warranties. Technical specs and real‑world reviews show
                            they’re great for <strong>Australian homes</strong>, especially
                            when paired with local incentives. Potential trade‑offs include
                            some ecosystem lock‑in and dependency on Fox app/inverter
                            compatibility.
                        </p>


                        <p>
                            Fox ESS batteries are quickly gaining acceptance in the energy
                            storage market due to their cutting‑edge technology, high
                            efficiency, and user‑friendly design. One of the standout
                            advantages of Fox ESS batteries is their use of Lithium Iron
                            Phosphate (LiFePO4) chemistry. This solar storage battery type is
                            recognised for its brilliant safety, long lifespan, and sturdy
                            thermal stability, which ensures consistent and steadfast
                            performance over time.
                        </p>


                        <p>
                            These <strong>solar batteries</strong> are designed for high
                            efficiency, offering outstanding charge and discharge rates, often
                            with round‑trip efficiencies of over 90%. This means homeowners
                            and businesses can maximize the usage of their solar power
                            generation, suggestively reducing their requirement on grid
                            electricity and lowering their energy costs.
                        </p>


                        <p>
                            Another chief advantage is their modular design. Fox ESS
                            batteries are laidback to install and scale up, making them
                            appropriate for a diversity of applications—from small residential
                            systems to higher commercial setups. Users can add more solar
                            battery modules as their energy requirements grow, without
                            replacing the entire system. This flexibility adds long‑term value
                            and adaptableness.
                        </p>


                        <p>
                            The smart energy management system unified into Fox ESS batteries
                            permits users to monitor and control their energy storage in real
                            time through apps and online platforms. This gives larger
                            visibility into energy consumption, battery status, and overall
                            system performance. Progressive features such as time‑of‑use
                            optimization and remote diagnostics further improve the user
                        </p>
                    </div>
                </div>

                <div className="mt-10 grid gap-10 md:grid-cols-2 max-w-7xl mx-auto">
                    {/* 1. HV2600 Series */}
                    <article className="space-y-3">
                        <h2 className="text-2xl font-bold text-gray-900">
                            1. HV2600 Series (High‑Voltage Modular)
                        </h2>
                        <ul className="list-disc space-y-1 pl-6">
                            <li>
                                <span className="font-semibold">Type:</span> Stackable lithium battery modules
                            </li>
                            <li>
                                <span className="font-semibold">Capacity:</span> 2.56 kWh per module
                            </li>
                            <li>
                                <span className="font-semibold">Voltage:</span> High‑voltage (nominal 51.2V per module, series‑connected)
                            </li>
                            <li>
                                <span className="font-semibold">Scalability:</span> Up to 7 modules per system (≈17.9 kWh)
                            </li>
                            <li>
                                <span className="font-semibold">Best for:</span> Users who want flexibility and space‑efficient energy storage
                            </li>
                            <li>
                                <span className="font-semibold">Inverter Pairing:</span> H1/H3 Series Hybrid Inverters
                            </li>
                        </ul>
                        <ul className="space-y-1 pl-1">
                            <li>✅ <span className="font-semibold">Pros:</span> Modular, compact, high efficiency</li>
                            <li>🚫 <span className="font-semibold">Cons:</span> Indoor only (IP21), requires external BMS</li>
                        </ul>
                    </article>

                    {/* 3. EC Series */}
                    <article className="space-y-3">
                        <h2 className="text-2xl font-bold text-gray-900">3. EC Series (e.g., EC4800)</h2>
                        <ul className="list-disc space-y-1 pl-6">
                            <li>
                                <span className="font-semibold">Type:</span> Compact wall‑mount battery
                            </li>
                            <li>
                                <span className="font-semibold">Capacity:</span> 4.8 kWh
                            </li>
                            <li>
                                <span className="font-semibold">Enclosure:</span> Wall‑mountable, IP65
                            </li>
                            <li>
                                <span className="font-semibold">Target use:</span> Entry‑level or light solar storage users
                            </li>
                        </ul>
                        <ul className="space-y-1 pl-1">
                            <li>✅ <span className="font-semibold">Pros:</span> Simple, sleek, lower upfront cost</li>
                            <li>🚫 <span className="font-semibold">Cons:</span> Limited scalability compared to EP or HV series</li>
                        </ul>
                    </article>

                    {/* 2. EP Series */}
                    <article className="space-y-3">
                        <h2 className="text-2xl font-bold text-gray-900">2. EP Series (e.g., EP5, EP10, EP11)</h2>
                        <ul className="list-disc space-y-1 pl-6">
                            <li>
                                <span className="font-semibold">Type:</span> Standalone high‑voltage battery unit
                            </li>
                            <li>
                                <span className="font-semibold">Capacity:</span>
                                <ul className="mt-1 list-disc space-y-1 pl-6">
                                    <li>EP5: ~4.8 kWh usable</li>
                                    <li>EP11: ~9.3–10.4 kWh usable</li>
                                </ul>
                            </li>
                            <li>
                                <span className="font-semibold">Scalability:</span> Up to 4 units in parallel (max ≈41.6 kWh)
                            </li>
                            <li>
                                <span className="font-semibold">Enclosure:</span> IP65 (indoor/outdoor use), fanless cooling, optional heater
                            </li>
                            <li>
                                <span className="font-semibold">Best for:</span> Homes needing a larger, preassembled battery solution
                            </li>
                        </ul>
                        <ul className="space-y-1 pl-1">
                            <li>✅ <span className="font-semibold">Pros:</span> Weatherproof, easy setup, no rack or BMS box needed</li>
                            <li>🚫 <span className="font-semibold">Cons:</span> Less flexible than modular stacks</li>
                        </ul>
                    </article>

                    {/* 4. EQ Series */}
                    <article className="space-y-3">
                        <h2 className="text-2xl font-bold text-gray-900">
                            4. EQ Series (Newer Modular High‑Voltage Range)
                        </h2>
                        <ul className="list-disc space-y-1 pl-6">
                            <li>
                                <span className="font-semibold">Type:</span> Modular LiFePO₄ high‑voltage system
                            </li>
                            <li>
                                <span className="font-semibold">Models:</span>
                                <ul className="mt-1 list-disc space-y-1 pl-6">
                                    <li>EQ2900 (~2.9 kWh)</li>
                                    <li>EQ5000 (~5 kWh)</li>
                                    <li>EQ7000 (~6.6 kWh)</li>
                                </ul>
                            </li>
                            <li>
                                <span className="font-semibold">Scalability:</span> Up to 7–8 modules per stack
                            </li>
                            <li>
                                <span className="font-semibold">Control Unit Required:</span> MIRA BMS or similar
                            </li>
                            <li>
                                <span className="font-semibold">Best for:</span> Flexibly scaled residential or light‑commercial setups
                            </li>
                        </ul>
                        <ul className="space-y-1 pl-1">
                            <li>✅ <span className="font-semibold">Pros:</span> High voltage, scalable, newer design</li>
                            <li>🚫 <span className="font-semibold">Cons:</span> Requires BMS + rack + inverter coordination</li>
                        </ul>
                    </article>
                </div>
                {/* Features Section */}
                <div className="grid md:grid-cols-4 py-15 gap-10 text-center">
                    {/* Warranty */}
                    <div>
                        <Battery className="w-12 h-12 mx-auto text-amber-400 mb-4" />
                        <h4 className="font-bold">Warranty duration</h4>
                        <p className="text-gray-600 mt-2">
                            10 years (standard) or 5 years (selected series)
                        </p>
                    </div>

                    {/* Battery Type */}
                    <div>
                        <Cog className="w-12 h-12 mx-auto text-blue-600 mb-4" />
                        <h4 className="font-bold">Battery type</h4>
                        <p className="text-gray-600 mt-2">
                            Cobalt-free LiFePO₄ lithium-ion
                        </p>
                    </div>

                    {/* Low Maintenance */}
                    <div>
                        <Wrench className="w-12 h-12 mx-auto text-amber-400 mb-4" />
                        <h4 className="font-bold">Low Maintenance</h4>
                        <p className="text-gray-600 mt-2">
                            Low maintenance solar battery with high performance and affordable prices.
                        </p>
                    </div>

                    {/* Monitoring */}
                    <div>
                        <Monitor className="w-12 h-12 mx-auto text-blue-600 mb-4" />
                        <h4 className="font-bold">24/7 Monitoring</h4>
                        <p className="text-gray-600 mt-2">
                            A user-friendly interface allows for 24-hour monitoring to track real time data and performance.
                        </p>
                    </div>
                </div>

            </main>



        </>
    );
}
