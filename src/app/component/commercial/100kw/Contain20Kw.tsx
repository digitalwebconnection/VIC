export default function Contain100Kw() {
    return (
        <>
            <div className="bg-white p-6 md:p-12">
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
                    <div>
                        {/* Header */}
                        <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">
                            100kW Solar System
                        </h1>
                        <p className="text-sm text-gray-500 mb-4">
                            Powering Australian Businesses with Clean Energy – West Vic Energy
                        </p>

                        {/* Subheading */}
                        <h2 className="text-lg font-semibold text-blue-500 mb-6">
                            Reliable & High-Performance Solar Power for Commercial & Industrial Needs
                        </h2>

                        {/* Description */}
                        <p className="text-gray-700 mb-8 leading-relaxed">
                            West Vic Energy’s <span className="font-semibold">100kW Solar System</span> is the perfect solution for 
                            medium-to-large businesses, commercial properties, schools, farms, and manufacturing facilities 
                            looking to cut costs and embrace sustainability.  
                            <br /><br />
                            Equipped with top-quality Tier-1 solar panels and a robust inverter, our 100kW system 
                            ensures maximum efficiency and long-term performance. Installed by our CEC-certified 
                            technicians, this system provides consistent, clean, and renewable energy that significantly 
                            reduces electricity bills while helping businesses achieve their environmental goals. 
                            <br /><br />
                            With government incentives and rebates available across Australia, there has never been a 
                            better time to invest in a 100kW commercial solar solution.
                        </p>
                    </div>

                    <div>
                        {/* Cards Section */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                            {/* Card 1 */}
                            <div className="border border-amber-400 rounded-lg p-5 shadow-sm">
                                <h3 className="text-blue-900 font-semibold text-lg mb-2">
                                    Significant Bill Reductions
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    Slash your business electricity expenses with renewable solar power and reinvest the 
                                    savings back into growth.
                                </p>
                            </div>

                            {/* Card 2 */}
                            <div className="border border-blue-500 rounded-lg p-5 shadow-sm">
                                <h3 className="text-blue-900 font-semibold text-lg mb-2">
                                    Future-Proof Investment
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    Lock in energy independence and protect your business from rising electricity costs 
                                    for decades to come.
                                </p>
                            </div>

                            {/* Card 3 */}
                            <div className="border border-indigo-500 rounded-lg p-5 shadow-sm">
                                <h3 className="text-blue-900 font-semibold text-lg mb-2">
                                    Boost Sustainability Goals
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    Lower your carbon footprint and showcase your commitment to a greener future – 
                                    a powerful message for your clients and community.
                                </p>
                            </div>

                            {/* Card 4 */}
                            <div className="border border-purple-500 rounded-lg p-5 shadow-sm">
                                <h3 className="text-blue-900 font-semibold text-lg mb-2">
                                    Premium Installation by Experts
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    Installed by West Vic Energy’s CEC-certified professionals with a full performance 
                                    warranty for peace of mind.
                                </p>
                            </div>
                        </div>

                        {/* Button */}
                        <button className="bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition">
                            Get a Free Quote
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
