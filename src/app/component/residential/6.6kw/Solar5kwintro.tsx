export default function Solar5Kwintro () {
    return (
        <>
            <div className="bg-white p-6 md:p-12">
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
                    <div>
                        {/* Header */}
                        <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">
                             6.6kw  Solar System
                        </h1>
                        <p className="text-sm text-gray-500 mb-4">
                            Save Money and Reduce Your Carbon Footprint
                        </p>

                        {/* Subheading */}
                        <h2 className="text-lg font-semibold text-blue-500 mb-6">
                            A Popular 6.6kw  Solar Power System Package for Queensland Households
                        </h2>

                        {/* Description */}
                        <p className="text-gray-700 mb-8">
                            The efficient  6.6kw  solar power system is an excellent residential
                            solution for homeowners in Queensland. It delivers strong performance
                            with a high-quality  6.6kw  inverter and 15 Monocrystalline Tier-1 solar
                            panels with a 330-watt power output each.
                            <br />
                            Our solar experts and CEC-certified technicians install and configure
                            this system on your rooftop with precision to ensure reliable power
                            output for many years.
                        </p>
                    </div>

                    <div>
                        {/* Cards Section */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                            {/* Card 1 */}
                            <div className="border border-amber-400 rounded-lg p-5 shadow-sm">
                                <h3 className="text-blue-900 font-semibold text-lg mb-2">
                                    Reduce your electricity bills
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    Save significantly on your energy expenses year after year.
                                </p>
                            </div>

                            {/* Card 2 */}
                            <div className="border border-blue-500 rounded-lg p-5 shadow-sm">
                                <h3 className="text-blue-900 font-semibold text-lg mb-2">
                                    Cleaner future for next generations
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    Help create a greener and healthier planet for your family.
                                </p>
                            </div>

                            {/* Card 3 */}
                            <div className="border border-indigo-500 rounded-lg p-5 shadow-sm">
                                <h3 className="text-blue-900 font-semibold text-lg mb-2">
                                    Reduce your carbon footprint
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    Minimize harmful emissions and protect the environment.
                                </p>
                            </div>

                            {/* Card 4 */}
                            <div className="border border-purple-500 rounded-lg p-5 shadow-sm">
                                <h3 className="text-blue-900 font-semibold text-lg mb-2">
                                    Enjoy your solar panels for decades
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    Long-lasting performance with minimal maintenance.
                                </p>
                            </div>
                        </div>

                        {/* Button */}
                        <button className="bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition">
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
