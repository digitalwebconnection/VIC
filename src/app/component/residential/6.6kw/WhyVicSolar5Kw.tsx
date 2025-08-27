export default function WhyVicSolar6Kw() {
  return (
    <>
      <div className="bg-white flex items-center justify-center py-16 px-6">
        <div className="max-w-7xl w-full grid md:grid-cols-2 gap-16">
          {/* Left Side: Info */}
          <div className="max-w-4xl mx-auto">
            {/* Hero Title */}
            <h1 className="text-3xl font-extrabold mb-6 text-gray-900">
              West Vic Energy – 6.6kW Solar Power System
            </h1>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Our <strong>6.6kW Solar System</strong> is the most popular choice
              for Australian households. With high-performance solar panels and
              inverters, West Vic Energy ensures maximum savings on your energy
              bills while reducing your carbon footprint.
            </p>

            {/* Salient Features */}
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              Why Choose Our 6.6kW Solar Package?
            </h2>
            <ul className="list-none space-y-3 mb-8">
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✔</span>
                <span>
                  <strong>CEC-approved</strong> Tier-1 solar panels & inverters
                  for reliability and efficiency
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✔</span>
                <span>
                  Installed by <strong>CEC-accredited technicians</strong> with
                  full warranty support
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✔</span>
                <span>
                  <strong>Wi-Fi enabled inverter</strong> for real-time
                  monitoring of your energy production
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✔</span>
                <span>
                  Built to withstand <strong>Australian weather conditions</strong> with
                  long-term performance guarantees
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✔</span>
                <span>
                  <strong>Maximises energy savings</strong> for an average
                  Australian family household
                </span>
              </li>
            </ul>

            {/* Technical Specifications */}
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              Technical Specifications
            </h2>
            <ul className="list-none space-y-3 mb-6">
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✔</span>
                <strong>Solar Panels:</strong> 14 × 370W Tier-1 Panels (Monocrystalline)
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✔</span>
                <strong>Inverter:</strong> 6.6kW High-Efficiency, CEC Approved
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✔</span>
                <strong>Energy Output:</strong> Approx. 25–28 kWh/day (location dependent)
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✔</span>
                <strong>Mounting & Electrical:</strong> Australian standard
                compliant kits
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✔</span>
                <strong>Warranty:</strong> 25 years on panels, 10 years on
                inverter
              </li>
            </ul>

            {/* Extra Value Section */}
            <div className="bg-blue-50 border-l-4 border-blue-900 p-5 rounded-md mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Why 6.6kW is Right for You?
              </h3>
              <p className="text-gray-700">
                A 6.6kW system is perfect for medium-to-large households. It
                helps you cut down electricity costs by up to{" "}
                <strong>70% or more</strong>, provides a faster return on
                investment, and prepares you for future battery upgrades.
              </p>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="bg-gray-50 h-145 py-10 shadow-lg rounded-xl p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Get Your Free Solar Quote Today!
            </h3>
            <p className="text-gray-600 mb-6">
              Fill out the form below and one of our friendly solar consultants
              at <strong>West Vic Energy</strong> will contact you.
            </p>

            <form className="space-y-4">
              <input
                required
                type="text"
                placeholder="Your Full Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-green-400"
              />
              <input
                required
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-green-400"
              />
              <input
                required
                type="text"
                placeholder="Mobile Number"
                className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-green-400"
              />
              <input
                required
                type="text"
                placeholder="Street Address"
                className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-green-400"
              />
              <input
                required
                type="text"
                placeholder="Post Code"
                className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-green-400"
              />

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-950 to-blue-800 text-white font-semibold py-3 rounded-md hover:opacity-90 transition"
              >
                Get My Quote
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
