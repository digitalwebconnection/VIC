export default function Solaer10kwIntro() {
  return (
    <>
      <div className="bg-white p-6 md:p-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
          <div>
            {/* Header */}
            <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">
              13.2kW Solar System
            </h1>
            <p className="text-sm text-gray-500 mb-4">
              Save More, Live Green with West Vic Energy
            </p>

            {/* Subheading */}
            <h2 className="text-lg font-semibold text-blue-500 mb-6">
              The Most Popular 13.2kW Solar Package for Australian Homes
            </h2>

            {/* Description */}
            <p className="text-gray-700 mb-8">
              At <span className="font-bold">West Vic Energy</span>, our
              powerful 13.2kW solar system is the ideal choice for households
              looking to drastically reduce power bills while contributing to a
              sustainable future. Designed with premium{" "}
              <span className="font-semibold">Tier-1 solar panels</span> and a
              high-efficiency inverter, this package ensures maximum energy
              output for decades.
              <br />
              <br />
              Installed by{" "}
              <span className="font-semibold">CEC-accredited technicians</span>,
              your system will be configured to deliver optimal performance for
              your home. It’s a long-term investment that pays for itself by
              reducing reliance on the grid and protecting you from rising
              electricity costs.
            </p>
          </div>

          {/* Right Side: Benefits + CTA */}
          <div>
            {/* Cards Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {/* Card 1 */}
              <div className="border border-amber-400 rounded-lg p-5 shadow-sm">
                <h3 className="text-blue-900 font-semibold text-lg mb-2">
                  Slash Your Energy Bills
                </h3>
                <p className="text-gray-600 text-sm">
                  Cut electricity costs by up to 70% with clean solar energy.
                </p>
              </div>

              {/* Card 2 */}
              <div className="border border-blue-500 rounded-lg p-5 shadow-sm">
                <h3 className="text-blue-900 font-semibold text-lg mb-2">
                  Sustainable & Reliable Power
                </h3>
                <p className="text-gray-600 text-sm">
                  Generate consistent, renewable energy for your family and the
                  environment.
                </p>
              </div>

              {/* Card 3 */}
              <div className="border border-indigo-500 rounded-lg p-5 shadow-sm">
                <h3 className="text-blue-900 font-semibold text-lg mb-2">
                  Premium-Grade Components
                </h3>
                <p className="text-gray-600 text-sm">
                  Backed by long-term warranties for panels and inverters.
                </p>
              </div>

              {/* Card 4 */}
              <div className="border border-purple-500 rounded-lg p-5 shadow-sm">
                <h3 className="text-blue-900 font-semibold text-lg mb-2">
                  Expert Installation
                </h3>
                <p className="text-gray-600 text-sm">
                  Installed by West Vic Energy’s CEC-accredited solar experts.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <button className="bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition w-full">
              Get a Free Quote Today
            </button>
          </div>
        </div>
      </div>

    
    </>
  );
}
