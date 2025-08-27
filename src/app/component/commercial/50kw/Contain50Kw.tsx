export default function Contain50Kw() {
    return (
        <>
            <div className="bg-white p-6 md:p-12">
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
                    <div>
                        {/* Header */}
                        <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">
                            50kW Solar System
                        </h1>
                        <p className="text-sm text-gray-500 mb-4">
                            Reliable Energy for Businesses & Large Properties
                        </p>

                        {/* Subheading */}
                        <h2 className="text-lg font-semibold text-blue-500 mb-6">
                            West Vic Energy – The Smart Choice for 50kW Solar in Australia
                        </h2>

                        {/* Description */}
                        <p className="text-gray-700 mb-8">
                            The <strong>50kW Solar System</strong> from <strong>West Vic Energy</strong> is the
                            perfect solar solution for medium to large businesses, schools, farms, and
                            commercial properties that want to reduce energy bills while promoting sustainability.
                            <br /><br />
                            This powerful system comes with <strong>Tier-1 Monocrystalline solar panels</strong> 
                            paired with a <strong>high-efficiency 50kW inverter</strong> to guarantee optimal 
                            performance and long-term durability. With expert installation by our 
                            <strong>CEC-accredited technicians</strong>, you’ll enjoy seamless energy 
                            production and maximum return on investment.
                            <br /><br />
                            By switching to a 50kW solar system, you’re not only reducing operational costs but 
                            also contributing to a cleaner and greener future for Australia.
                        </p>
                    </div>

                    {/* Right Side */}
                    <div>
                        {/* Cards Section */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                            {/* Card 1 */}
                            <div className="border border-amber-400 rounded-lg p-5 shadow-sm">
                                <h3 className="text-blue-900 font-semibold text-lg mb-2">
                                    Slash Your Power Bills
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    Generate up to 200kWh of clean energy daily and significantly reduce 
                                    your dependency on the grid.
                                </p>
                            </div>

                            {/* Card 2 */}
                            <div className="border border-blue-500 rounded-lg p-5 shadow-sm">
                                <h3 className="text-blue-900 font-semibold text-lg mb-2">
                                    Perfect for Businesses
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    Designed for offices, schools, farms, and medium-scale industries 
                                    with high energy consumption.
                                </p>
                            </div>

                            {/* Card 3 */}
                            <div className="border border-indigo-500 rounded-lg p-5 shadow-sm">
                                <h3 className="text-blue-900 font-semibold text-lg mb-2">
                                    Eco-Friendly Investment
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    Reduce your carbon footprint and contribute to a cleaner, 
                                    greener Australia for future generations.
                                </p>
                            </div>

                            {/* Card 4 */}
                            <div className="border border-purple-500 rounded-lg p-5 shadow-sm">
                                <h3 className="text-blue-900 font-semibold text-lg mb-2">
                                    Long-Term Reliability
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    Backed with product warranties and West Vic Energy’s trusted support 
                                    for peace of mind.
                                </p>
                            </div>
                        </div>

                        {/* Button */}
                        <button className="bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition">
                            Get Your Free Quote
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
