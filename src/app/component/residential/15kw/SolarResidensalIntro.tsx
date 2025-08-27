export default function SolarResidentialIntro() {
  return (
    <>
      <div className="bg-white p-6 md:p-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Left Content */}
          <div>
            {/* Header */}
            <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">
              15kW Solar System
            </h1>
            <p className="text-sm text-gray-500 mb-4">
              Power Your Home with Clean, Reliable Energy from West Vic Energy
            </p>

            {/* Subheading */}
            <h2 className="text-lg font-semibold text-blue-500 mb-6">
              Premium 15kW Solar Power System – Perfect for Large Australian Homes
            </h2>

            {/* Description */}
            <p className="text-gray-700 mb-6">
              West Vic Energy’s <span className="font-semibold">15kW solar system</span> is designed for households 
              with higher energy demands, offering excellent savings while reducing your carbon footprint. 
              With advanced Tier-1 solar panels and a high-performance inverter, this package ensures 
              consistent power generation for years to come.
            </p>

            <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
              <li>
                <span className="font-semibold">40–45 Tier-1 solar panels</span> (up to 415W each) for maximum efficiency.
              </li>
              <li>
                <span className="font-semibold">Premium inverter</span> options from trusted brands for reliable performance.
              </li>
              <li>
                Generate <span className="font-semibold">60+ kWh per day</span> (average, depending on location & weather).
              </li>
              <li>
                Slash your electricity bills and achieve a faster ROI with government rebates.
              </li>
              <li>
                Backed by <span className="font-semibold">25-year panel performance warranty</span> and CEC-certified installation.
              </li>
            </ul>
          </div>

          {/* Right Content */}
          <div>
            {/* Cards Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {/* Card 1 */}
              <div className="border border-amber-400 rounded-lg p-5 shadow-sm">
                <h3 className="text-blue-900 font-semibold text-lg mb-2">
                  Massive Energy Savings
                </h3>
                <p className="text-gray-600 text-sm">
                  Save thousands annually by cutting down on rising electricity costs.
                </p>
              </div>

              {/* Card 2 */}
              <div className="border border-blue-500 rounded-lg p-5 shadow-sm">
                <h3 className="text-blue-900 font-semibold text-lg mb-2">
                  Eco-Friendly Living
                </h3>
                <p className="text-gray-600 text-sm">
                  Reduce carbon emissions and make your home more sustainable.
                </p>
              </div>

              {/* Card 3 */}
              <div className="border border-indigo-500 rounded-lg p-5 shadow-sm">
                <h3 className="text-blue-900 font-semibold text-lg mb-2">
                  Long-Term Warranty
                </h3>
                <p className="text-gray-600 text-sm">
                  25-year panel performance guarantee and trusted Australian support.
                </p>
              </div>

              {/* Card 4 */}
              <div className="border border-purple-500 rounded-lg p-5 shadow-sm">
                <h3 className="text-blue-900 font-semibold text-lg mb-2">
                  Installed by Experts
                </h3>
                <p className="text-gray-600 text-sm">
                  Installed by West Vic Energy’s CEC-accredited technicians for lasting performance.
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
  );
}
