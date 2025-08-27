export default function Solar10kwIntro() {
    return (
        <div className="bg-white p-6 md:p-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
                {/* Left Section */}
                <div>
                    {/* Header */}
                    <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">
                        10kW Solar System
                    </h1>
                    <p className="text-sm text-gray-500 mb-4">
                        Big Power, Big Savings – Backed by West Vic Energy
                    </p>

                    {/* Subheading */}
                    <h2 className="text-lg font-semibold text-blue-500 mb-6">
                        The Most Popular 10kW Solar Power Package for Australian Households
                    </h2>

                    {/* Description */}
                    <p className="text-gray-700 mb-8">
                        A 10kW solar power system is perfect for medium to large households or 
                        small businesses in Australia looking to cut down on energy bills 
                        while taking control of their power usage. With high-efficiency Tier-1 
                        solar panels and a premium inverter, West Vic Energy ensures you get 
                        maximum performance and long-term reliability.
                        <br />
                        <br />
                        Our Clean Energy Council (CEC) accredited installers provide a 
                        hassle-free installation so you can start enjoying energy independence, 
                        reduced electricity costs, and a cleaner environment for generations to come.
                    </p>
                </div>

                {/* Right Section */}
                <div>
                    {/* Benefits Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                        {/* Card 1 */}
                        <div className="border border-amber-400 rounded-lg p-5 shadow-sm hover:shadow-md transition">
                            <h3 className="text-blue-900 font-semibold text-lg mb-2">
                                Slash Your Power Bills
                            </h3>
                            <p className="text-gray-600 text-sm">
                                Generate your own clean electricity and reduce dependence on 
                                rising grid energy prices.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="border border-blue-500 rounded-lg p-5 shadow-sm hover:shadow-md transition">
                            <h3 className="text-blue-900 font-semibold text-lg mb-2">
                                Future-Ready Energy
                            </h3>
                            <p className="text-gray-600 text-sm">
                                Pair your 10kW solar system with battery storage for round-the-clock 
                                renewable energy.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="border border-indigo-500 rounded-lg p-5 shadow-sm hover:shadow-md transition">
                            <h3 className="text-blue-900 font-semibold text-lg mb-2">
                                Reduce Carbon Footprint
                            </h3>
                            <p className="text-gray-600 text-sm">
                                Every 10kW system installed helps prevent tonnes of harmful CO₂ emissions 
                                every year.
                            </p>
                        </div>

                        {/* Card 4 */}
                        <div className="border border-purple-500 rounded-lg p-5 shadow-sm hover:shadow-md transition">
                            <h3 className="text-blue-900 font-semibold text-lg mb-2">
                                Invest in Your Property
                            </h3>
                            <p className="text-gray-600 text-sm">
                                Increase the value of your home while enjoying savings for years to come.
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
    );
}
