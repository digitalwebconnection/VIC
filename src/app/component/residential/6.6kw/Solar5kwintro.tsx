export default function Solar6KwIntro() {
  return (
    <div className="bg-white p-6 md:p-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
        {/* Left Section */}
        <div>
          {/* Header */}
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">
            6.6kW Solar System by West Vic Energy
          </h1>
          <p className="text-sm text-gray-500 mb-4">
            Power Your Home with Smarter, Cleaner & Affordable Solar Energy
          </p>

          {/* Subheading */}
          <h2 className="text-lg font-semibold text-blue-500 mb-6">
            The Most Popular Residential Solar Package for Australian Households
          </h2>

          {/* Description */}
          <p className="text-gray-700 mb-8 leading-relaxed">
            West Vic Energy’s 6.6kW solar power system is one of the most
            cost-effective and reliable solutions for families across Australia.
            It comes with a high-performance 6.6kW inverter and 15 premium
            Tier-1 monocrystalline solar panels, each with a 440W output. <br />
            <br />
            Installed by our CEC-accredited technicians, this system ensures
            maximum efficiency, durability, and long-term savings. Whether you
            want to cut down on electricity bills or take a step towards
            sustainability, this package is designed to deliver reliable power
            for decades.
          </p>

          {/* Extra content */}
          <ul className="list-disc list-inside text-gray-700 mb-8">
            <li>Perfect size for small to medium Australian households</li>
            <li>Average annual savings: up to $1,500 – $2,500 on electricity bills</li>
            <li>Optional battery storage for energy independence</li>
            <li>Backed by West Vic Energy’s trusted service & support</li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          {/* Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {/* Card 1 */}
            <div className="border border-amber-400 rounded-lg p-5 shadow-sm">
              <h3 className="text-blue-900 font-semibold text-lg mb-2">
                Lower Energy Bills
              </h3>
              <p className="text-gray-600 text-sm">
                Slash your electricity costs and enjoy lifetime savings.
              </p>
            </div>

            {/* Card 2 */}
            <div className="border border-blue-500 rounded-lg p-5 shadow-sm">
              <h3 className="text-blue-900 font-semibold text-lg mb-2">
                Sustainable & Clean Energy
              </h3>
              <p className="text-gray-600 text-sm">
                Protect the planet with zero-emission solar power.
              </p>
            </div>

            {/* Card 3 */}
            <div className="border border-indigo-500 rounded-lg p-5 shadow-sm">
              <h3 className="text-blue-900 font-semibold text-lg mb-2">
                Energy Independence
              </h3>
              <p className="text-gray-600 text-sm">
                Add battery storage to power your home day and night.
              </p>
            </div>

            {/* Card 4 */}
            <div className="border border-purple-500 rounded-lg p-5 shadow-sm">
              <h3 className="text-blue-900 font-semibold text-lg mb-2">
                Reliable for Decades
              </h3>
              <p className="text-gray-600 text-sm">
                Long-lasting solar panels with up to 25-year warranty.
              </p>
            </div>
          </div>

          {/* Button */}
          <button className="bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition w-full md:w-auto">
            Get a Free Quote
          </button>
        </div>
      </div>
    </div>
  );
}
