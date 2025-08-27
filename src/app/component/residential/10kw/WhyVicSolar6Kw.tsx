export default function WhyVicSolar10Kw() {
    return (
        <>
            <div className="bg-white flex items-center justify-center py-12 px-6">
                <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12">
                    
                    {/* Left Side: Info */}
                    <div className="max-w-4xl mx-auto">
                        {/* Title */}
                        <h2 className="text-3xl font-bold mb-4 text-gray-900">
                            10kW Solar Power System by <span className="text-amber-500">West Vic Energy</span>
                        </h2>
                        <p className="text-gray-600 mb-6">
                            Take control of your energy bills with our premium <strong>10kW solar system</strong>, 
                            designed for larger households and small businesses across Victoria. 
                            West Vic Energy ensures high performance, long-term savings, and unmatched customer support.
                        </p>

                        {/* Salient Features */}
                        <h3 className="text-2xl font-semibold mb-4 text-gray-900">Key Features</h3>
                        <ul className="list-none space-y-3 mb-8">
                            <li className="flex items-start">
                                <span className="text-green-500 mr-3 mt-1">✔</span>
                                CEC-approved solar panels & inverters ensuring maximum safety and efficiency
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-500 mr-3 mt-1">✔</span>
                                Expert installation by West Vic Energy’s CEC-accredited technicians
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-500 mr-3 mt-1">✔</span>
                                High-grade monocrystalline panels with Wi-Fi enabled smart inverter
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-500 mr-3 mt-1">✔</span>
                                Designed to withstand Victoria’s harsh weather conditions with 25+ years performance warranty
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-500 mr-3 mt-1">✔</span>
                                Maximize savings with up to <strong>$3,000–$4,500 annual energy reduction*</strong>
                            </li>
                        </ul>

                        {/* Technical Specs */}
                        <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                            Technical Specifications
                        </h3>
                        <ul className="list-none space-y-3 mb-6">
                            <li className="flex items-start">
                                <span className="text-green-500 mr-3 mt-1">✔</span>
                                <strong>Solar Panels:</strong> 24–28 × 415W Tier-1 Monocrystalline Panels
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-500 mr-3 mt-1">✔</span>
                                <strong>Inverter:</strong> Premium 10kW Inverter (Sungrow, Fronius or GoodWe – CEC Approved)
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-500 mr-3 mt-1">✔</span>
                                <strong>Mounting & Kits:</strong> Australian Standard compliant aluminum racking & wiring
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-500 mr-3 mt-1">✔</span>
                                <strong>Monitoring:</strong> Real-time performance tracking with mobile app
                            </li>
                        </ul>

                        {/* Why Choose Us */}
                        <h3 className="text-2xl font-semibold mb-4 text-gray-900">Why Choose West Vic Energy?</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>Over 10 years of experience in renewable energy solutions</li>
                            <li>Zero hidden costs – transparent pricing</li>
                            <li>Government rebate assistance & flexible finance options</li>
                            <li>Dedicated after-sales service & 10-year workmanship warranty</li>
                        </ul>
                    </div>

                    {/* Right Side: Form */}
                    <div className="bg-gray-50 h-145 py-10 shadow-lg rounded-xl p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">
                            Get Your Free Solar Quote Today
                        </h3>
                        <p className="text-sm text-gray-600 mb-6">
                            Fill out the form and our team at <strong>West Vic Energy</strong> will contact you 
                            within 24 hours to provide a customized solar proposal.
                        </p>

                        <form className="space-y-4">
                            <input
                                required
                                type="text"
                                placeholder="Your Full Name"
                                className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-amber-400"
                            />
                            <input
                                required
                                type="email"
                                placeholder="Your Email"
                                className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-amber-400"
                            />
                            <input
                                required
                                type="text"
                                placeholder="Mobile Number"
                                className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-amber-400"
                            />
                            <input
                                required
                                type="text"
                                placeholder="Street Address"
                                className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-amber-400"
                            />
                            <input
                                required
                                type="text"
                                placeholder="Post Code"
                                className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-amber-400"
                            />

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-amber-400 to-yellow-400 text-black font-bold py-3 rounded-md hover:opacity-90 transition"
                            >
                                Request Free Quote
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
