// app/components/GrowattBatteryDetails.tsx
import { Battery, Cog, Wrench, Monitor } from "lucide-react";

export default function AboutGroBt() {
    return (
        <>
            <section className="py-16 px-6 md:px-20 bg-white text-gray-800">
                <div className="max-w-7xl mx-auto">

                    {/* Heading */}
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                        Growatt Battery Solutions – Powered by West Vic Energy
                    </h2>

                    {/* Subheading */}
                    <p className="text-lg font-semibold text-gray-900 mb-6">
                        At <span className="text-blue-700">West Vic Energy</span>, we provide reliable Growatt solar batteries so you can store excess energy, reduce your electricity bills, and enjoy true energy independence.
                    </p>

                    {/* Highlighted Quote */}
                    <blockquote className="text-xl italic text-gray-700 border-l-4 border-amber-400 pl-4 mb-10">
                        “Growatt is a global solar energy company from China, well-known for producing high-quality solar inverters and increasingly popular lithium battery storage systems. Their ARK battery line is designed to work seamlessly with Growatt hybrid inverters or be added to your existing solar setup — and West Vic Energy brings these trusted solutions directly to Australian homes.”
                    </blockquote>

                    {/* Paragraphs */}
                    <div className="space-y-6 text-base leading-relaxed">
                        <p>
                            Growatt batteries offer numerous noteworthy advantages, making them a popular choice for solar energy storage. One of the main benefits is their <span className="font-semibold">high efficiency</span>, ensuring maximum utilization of solar energy with minimal losses. Typically, Growatt batteries deliver a round-trip efficiency of over 90%, helping households store and use more of the energy they generate.
                        </p>

                        <p>
                            Another major advantage is the use of <span className="font-semibold">Lithium Iron Phosphate (LiFePO₄)</span> technology. This advanced chemistry is known for superior thermal stability, a longer lifespan, and enhanced safety compared to conventional lithium-ion batteries. With West Vic Energy installing Growatt batteries, you gain a reliable and safe solution built for long-term performance.
                        </p>

                        <p>
                            Growatt also excels in smart energy management. Their batteries come equipped with intelligent 
                            <span className="text-amber-400 font-medium"> battery management systems </span>
                            and monitoring platforms. These allow real-time performance tracking and remote control, giving West Vic Energy customers full visibility of their energy usage and the ability to optimise performance effortlessly.
                        </p>

                        <p>
                            Integration is seamless with Growatt’s hybrid and off-grid inverters, ensuring smooth compatibility. When paired with the right inverter, Growatt batteries also provide <span className="font-semibold">backup power during blackouts</span>, keeping essential appliances running — a must-have for Australian households that want uninterrupted power security.
                        </p>
                    </div>
                </div>
            </section>

            {/* Specs + Features */}
            <section className="py-16 px-6 md:px-20 bg-white text-gray-800">
                <div className="max-w-7xl mx-auto space-y-16">

                    {/* Specs Comparison */}
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* ARK LV */}
                        <div>
                            <h3 className="text-xl font-bold mb-4">1. ARK LV (Low Voltage)</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li><span className="font-semibold">Best for:</span> Homes with <span className="font-semibold">single-phase inverters</span></li>
                                <li><span className="font-semibold">Capacity:</span> Each module is <span className="font-semibold">2.56 kWh</span> (usable ~2.42 kWh)</li>
                                <li><span className="font-semibold">Expandable:</span> Up to <span className="font-semibold">10 units</span> (~25.6 kWh)</li>
                                <li><span className="font-semibold">Chemistry:</span> LiFePO₄ – safer and longer lifespan</li>
                                <li><span className="font-semibold">Depth of Discharge:</span> ~94.5%</li>
                                <li><span className="font-semibold">Cycle Life:</span> 6,000+ cycles</li>
                                <li><span className="font-semibold">IP Rating:</span> IP65 (weather resistant)</li>
                            </ul>
                        </div>

                        {/* ARK HV */}
                        <div>
                            <h3 className="text-xl font-bold mb-4">2. ARK HV (High Voltage)</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li><span className="font-semibold">Best for:</span> Three-phase systems or higher-voltage hybrid setups</li>
                                <li><span className="font-semibold">Capacity:</span> Modular design (5–25.6 kWh), higher voltage output</li>
                                <li><span className="font-semibold">Performance:</span> Greater efficiency with faster charge/discharge</li>
                                <li><span className="font-semibold">Compatible with:</span> Growatt <span className="font-semibold">SPH, MOD, MIN-XH</span> inverters</li>
                            </ul>
                        </div>
                    </div>

                    {/* Features Section */}
                    <div className="grid md:grid-cols-4 gap-10 text-center">
                        {/* Warranty */}
                        <div>
                            <Battery className="w-12 h-12 mx-auto text-amber-400 mb-4" />
                            <h4 className="font-bold">Warranty</h4>
                            <p className="text-gray-600 mt-2">
                                10 years (standard) or 5 years (selected series) — backed by West Vic Energy.
                            </p>
                        </div>

                        {/* Battery Type */}
                        <div>
                            <Cog className="w-12 h-12 mx-auto text-blue-600 mb-4" />
                            <h4 className="font-bold">Battery Type</h4>
                            <p className="text-gray-600 mt-2">
                                Cobalt-free LiFePO₄ lithium-ion for safety and longevity.
                            </p>
                        </div>

                        {/* Low Maintenance */}
                        <div>
                            <Wrench className="w-12 h-12 mx-auto text-amber-400 mb-4" />
                            <h4 className="font-bold">Low Maintenance</h4>
                            <p className="text-gray-600 mt-2">
                                High performance with minimal upkeep — designed for Australian homes.
                            </p>
                        </div>

                        {/* Monitoring */}
                        <div>
                            <Monitor className="w-12 h-12 mx-auto text-blue-600 mb-4" />
                            <h4 className="font-bold">24/7 Monitoring</h4>
                            <p className="text-gray-600 mt-2">
                                User-friendly app for real-time monitoring and performance tracking.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
