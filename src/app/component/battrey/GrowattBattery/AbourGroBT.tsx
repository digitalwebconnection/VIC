// app/components/GrowattBatteryDetails.tsx
import { Battery, Cog, Wrench, Monitor } from "lucide-react";

export default function AboutGroBt() {
    return (
        <>
            <section className="py-16 px-6 md:px-20 bg-white text-gray-800">
                <div className="max-w-7xl mx-auto">

                    {/* Heading */}
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                        Growatt Battery
                    </h2>

                    {/* Subheading */}
                    <p className="text-lg font-semibold text-gray-900 mb-6">
                        Start storing your excess solar power and reducing your electricity bills further.
                    </p>

                    {/* Highlighted Quote */}
                    <blockquote className="text-xl italic text-gray-700 border-l-4 border-red-500 pl-4 mb-10">
                        “Growatt is a global solar energy company from China, known for producing solar inverters and increasingly popular lithium battery storage systems. Their battery line is branded ARK, and it’s designed to work seamlessly with Growatt hybrid inverters or be added to an existing solar setup.”
                    </blockquote>

                    {/* Paragraphs */}
                    <div className="space-y-6 text-base leading-relaxed">
                        <p>
                            Growatt batteries offer numerous noteworthy advantages, making them a widespread choice for solar energy storage. One of the chief benefits is their high competence, which ensures thoroughgoing utilization of solar energy with minimal losses. These batteries naturally deliver a round-trip efficiency of over 90%, allowing homeowners to store and use additional energy they generate.
                        </p>

                        <p>
                            Another significant advantage is the use of <span className="font-semibold">Lithium Iron Phosphate (LiFePO4)</span> technology. This chemistry is recognized for its greater thermal stability, longer life span, and sophisticated security compared to traditional lithium-ion batteries. As a result, Growatt batteries offer consistent performance over time and reduce the risk of overheating or combustion.
                        </p>

                        <p>
                            Growatt also outshines in smart energy management. Their solar batteries come with intelligent
                            <span className="text-red-600 font-medium"> battery management systems </span>
                            and are maintained by monitoring platforms. These tools offer real-time performance tracking and remote control, enabling users to monitor their energy usage and optimize system performance naturally.
                        </p>

                        <p>
                            Integration is unified with Growatt’s own range of hybrid and off-grid inverters, ensuring compatibility and smooth operation. Furthermore, when paired with a suitable inverter, Growatt batteries can deliver backup power during grid outages, keeping crucial appliances running without interruption.
                        </p>
                    </div>
                </div>
            </section>
            <section className="py-16 px-6 md:px-20 bg-white text-gray-800">
                <div className="max-w-7xl mx-auto space-y-16">

                    {/* Specs Comparison */}
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* ARK LV */}
                        <div>
                            <h3 className="text-xl font-bold mb-4">1. ARK LV (Low Voltage)</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li>
                                    <span className="font-semibold">Best for:</span> Homes with{" "}
                                    <span className="font-semibold">single-phase inverters</span>
                                </li>
                                <li>
                                    <span className="font-semibold">Capacity:</span> Each module is{" "}
                                    <span className="font-semibold">2.56 kWh</span> (usable ~2.42 kWh)
                                </li>
                                <li>
                                    <span className="font-semibold">Expandable:</span> Up to{" "}
                                    <span className="font-semibold">10 units</span> (~25.6 kWh)
                                </li>
                                <li>
                                    <span className="font-semibold">Chemistry:</span> Lithium Iron Phosphate (LiFePO₄) – safer and longer lifespan
                                </li>
                                <li>
                                    <span className="font-semibold">Depth of Discharge:</span> ~94.5%
                                </li>
                                <li>
                                    <span className="font-semibold">Cycle Life:</span> 6,000+ cycles
                                </li>
                                <li>
                                    <span className="font-semibold">IP Rating:</span> IP65 (weather resistant)
                                </li>
                            </ul>
                        </div>

                        {/* ARK HV */}
                        <div>
                            <h3 className="text-xl font-bold mb-4">2. ARK HV (High Voltage)</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li>
                                    <span className="font-semibold">Best for:</span> Three-phase systems or higher-voltage hybrid setups
                                </li>
                                <li>
                                    <span className="font-semibold">Capacity:</span> Similar modularity (5–25.6 kWh), but higher voltage
                                </li>
                                <li>
                                    <span className="font-semibold">Higher efficiency</span> and charge/discharge speeds
                                </li>
                                <li>
                                    <span className="font-semibold">Used with:</span> Growatt{" "}
                                    <span className="font-semibold">SPH, MOD, MIN-XH</span> inverters
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Features Section */}
                    <div className="grid md:grid-cols-4 gap-10 text-center">
                        {/* Warranty */}
                        <div>
                            <Battery className="w-12 h-12 mx-auto text-red-500 mb-4" />
                            <h4 className="font-bold">Warranty duration</h4>
                            <p className="text-gray-600 mt-2">
                                10 years (standard) or 5 years (selected series)
                            </p>
                        </div>

                        {/* Battery Type */}
                        <div>
                            <Cog className="w-12 h-12 mx-auto text-red-500 mb-4" />
                            <h4 className="font-bold">Battery type</h4>
                            <p className="text-gray-600 mt-2">
                                Cobalt-free LiFePO₄ lithium-ion
                            </p>
                        </div>

                        {/* Low Maintenance */}
                        <div>
                            <Wrench className="w-12 h-12 mx-auto text-red-500 mb-4" />
                            <h4 className="font-bold">Low Maintenance</h4>
                            <p className="text-gray-600 mt-2">
                                Low maintenance solar battery with high performance and affordable prices.
                            </p>
                        </div>

                        {/* Monitoring */}
                        <div>
                            <Monitor className="w-12 h-12 mx-auto text-red-500 mb-4" />
                            <h4 className="font-bold">24/7 Monitoring</h4>
                            <p className="text-gray-600 mt-2">
                                A user-friendly interface allows for 24-hour monitoring to track real time data and performance.
                            </p>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}
