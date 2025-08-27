export default function Contain30Kw() {
  return (
    <>
      <div className="bg-white p-6 md:p-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
          {/* Left Section */}
          <div>
            {/* Header */}
            <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">
              30kW Solar System
            </h1>
            <p className="text-sm text-gray-500 mb-4">
              Power Your Business & Save More with West Vic Energy
            </p>

            {/* Subheading */}
            <h2 className="text-lg font-semibold text-blue-500 mb-6">
              The Most Popular 30kW Solar Power Solution for Australian Businesses
            </h2>

            {/* Description */}
            <p className="text-gray-700 mb-8 leading-relaxed">
              West Vic Energy’s **30kW Solar System** is a powerful and reliable
              choice for small-to-medium businesses, schools, farms, and commercial
              properties with higher energy demands. Equipped with **premium
              Tier-1 solar panels** and a **high-efficiency inverter**, this system
              delivers exceptional performance and maximum savings.
              <br />
              <br />
              With professional installation from our **CEC-accredited solar
              experts**, you’ll enjoy seamless integration, long-term durability,
              and significant reductions in your electricity bills. Our
              Australian-backed warranties ensure peace of mind and lasting value.
            </p>
          </div>

          {/* Right Section */}
          <div>
            {/* Cards Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {/* Card 1 */}
              <div className="border border-amber-400 rounded-lg p-5 shadow-sm bg-amber-50">
                <h3 className="text-blue-900 font-semibold text-lg mb-2">
                  Big Energy Savings
                </h3>
                <p className="text-gray-600 text-sm">
                  Generate up to **120kWh of clean energy per day**, reducing
                  reliance on the grid and lowering your electricity costs.
                </p>
              </div>

              {/* Card 2 */}
              <div className="border border-blue-500 rounded-lg p-5 shadow-sm bg-blue-50">
                <h3 className="text-blue-900 font-semibold text-lg mb-2">
                  Future-Ready Solution
                </h3>
                <p className="text-gray-600 text-sm">
                  Designed for businesses with growing power needs. Easy
                  integration with **battery storage** and **EV charging stations**.
                </p>
              </div>

              {/* Card 3 */}
              <div className="border border-indigo-500 rounded-lg p-5 shadow-sm bg-indigo-50">
                <h3 className="text-blue-900 font-semibold text-lg mb-2">
                  Reduce Carbon Footprint
                </h3>
                <p className="text-gray-600 text-sm">
                  Installing a 30kW solar system can offset **over 45 tonnes of CO₂**
                  annually — helping Australia achieve a greener future.
                </p>
              </div>

              {/* Card 4 */}
              <div className="border border-purple-500 rounded-lg p-5 shadow-sm bg-purple-50">
                <h3 className="text-blue-900 font-semibold text-lg mb-2">
                  Quality You Can Trust
                </h3>
                <p className="text-gray-600 text-sm">
                  Backed by **West Vic Energy’s warranties** and **local support**, 
                  ensuring you enjoy reliable solar energy for decades.
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
