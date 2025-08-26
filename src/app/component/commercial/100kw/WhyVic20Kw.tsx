export default function WhyVic20Kw() {
    return(
             <>
            <div className=" bg-white flex items-center justify-center py-12 px-6">
                <div className="max-w-7xl w-full grid md:grid-cols-2 gap-15">
                    {/* Left Side: Info */}
                    <div className="max-w-4xl mx-auto">
                        {/* Salient Features */}
                        <h2 className="text-2xl font-bold mb-4 text-gray-900">
                            Salient Features of 100kw Solar System
                        </h2>
                        <ul className="list-none space-y-3 mb-8">
                            <li className="flex items-start">
                                <span className="text-green-500 mr-3 mt-1">✔</span>
                                Powerful solar panels & Inverter approved by CEC
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-500 mr-3 mt-1">✔</span>
                                Expert solar panel installation and maintenance support by CEC-certified technicians
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-500 mr-3 mt-1">✔</span>
                                First-grade monocrystalline solar panels, high-quality Wi-Fi enabled inverter, and components for best performance
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-500 mr-3 mt-1">✔</span>
                                Harsh weather-enduring system with excellent performance warranty
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-500 mr-3 mt-1">✔</span>
                                System configured by best 100kw Solar System installation and maintenance team in Queensland
                            </li>
                        </ul>

                        {/* Technical Specifications */}
                        <h2 className="text-2xl font-bold mb-4 text-gray-900">
                            Technical Specifications for 100kw Solar System
                        </h2>
                        <ul className="list-none space-y-3 mb-6">
                            <li className="flex items-start">
                                <span className="text-green-500 mr-3 mt-1">✔</span>
                                <strong>Solar Panels:</strong> 15×330 Watt High-quality Solar Panels (Tier-I)
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-500 mr-3 mt-1">✔</span>
                                <strong>Inverter:</strong> 100kw inverter manufactured by reputed companies & recommended by CEC-accredited technicians
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-500 mr-3 mt-1">✔</span>
                                <strong>Mounting & Electrical Kits:</strong> Mounting & Electrical kits as per Australian Standards
                            </li>
                        </ul>

                        {/* Call to Action */}
                    
                    </div>


                    {/* Right Side: Form */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">
                            Straight from our desk, to your Inbox.
                        </h3>

                        <form className="space-y-4 " >
                            <input
                                required
                                type="text"
                                placeholder="Your Full Name"
                                className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                            />
                            <input
                                required
                                type="email"
                                placeholder="Your Email"
                                className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                            />
                            <input
                                required
                                type="text"
                                placeholder="Mobile Number"
                                className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                            />
                            <input
                                required
                                type="text"
                                placeholder="Street Address"
                                className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                            />
                            <input
                                required
                                type="text"
                                placeholder="Post Code"
                                className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                            />

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-amber-400 to-yellow-400 text-black font-bold py-2 rounded-md hover:opacity-90 transition"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}