"use client";

export default function Solar10kwIntro() {
  const plans = [
    {
      title: "10.5kW Solar System",
      subtitle: "Medium to Large Family Home",
      savings: "Save up to $2,000–$3,500* annually",
      features: [
        "24 × 440W High-Efficiency N-Type Tier-1 Solar Panels",
        "8kW Smart Wi-Fi Inverter",
        "Installed by CEC-Accredited Licensed Electricians",
      ],
      highlight: false,
    },
    {
      title: "6.6kW Solar System",
      subtitle: "Standard Family Home",
      savings: "Save up to $1,000–$2,500* annually",
      features: [
        "15 × 440W High-Efficiency N-Type Tier-1 Solar Panels",
        "5kW Smart Wi-Fi Inverter",
        "Installed by CEC-Accredited Licensed Electricians",
      ],
      highlight: true, // Most popular
    },
    {
      title: "13.2kW Solar System",
      subtitle: "Larger Family Home",
      savings: "Save up to $3,000–$4,500* annually",
      features: [
        "30 × 440W High-Efficiency N-Type Tier-1 Solar Panels",
        "10kW Smart Wi-Fi Inverter",
        "Installed by CEC-Accredited Licensed Electricians",
      ],
      highlight: false,
    },
  ];

  return (
    <section className="py-12">
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Choose the best solar system for your home
        </h2>
        <p className="mt-2 text-gray-600">
          West VIC Energy packages sized for Victorian homes—quality hardware, expert install, real savings.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-4">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative border-2 rounded-lg px-8 py-10 shadow-xl bg-white cursor-pointer transform transition-transform duration-300 hover:scale-105 ${
              plan.highlight ? "border-blue-900" : "border-blue-900"
            }`}
          >
            {plan.highlight && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-900 text-white px-5 py-1.5 text-[10px] font-semibold rounded-full shadow">
                AUSTRALIA’S MOST POPULAR
              </div>
            )}

            <h3 className="text-xl font-bold text-center text-blue-800 mb-1">
              {plan.title}
            </h3>
            <p className="text-center text-gray-600 font-semibold">{plan.subtitle}</p>

            <div className="mt-4 bg-gray-100 text-black border border-blue-700 text-center py-3 text-lg font-semibold rounded">
              {plan.savings}
            </div>

            <ul className="mt-5 space-y-2 text-gray-700 text-sm">
              {plan.features.map((feature, i) => (
                <li key={i} className="leading-relaxed">• {feature}</li>
              ))}
            </ul>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href="/quote"
                className="w-full text-center bg-yellow-400 text-black font-semibold py-3 rounded hover:bg-orange-600 transition"
                aria-label="Request a free solar quote from West VIC Energy"
              >
                Request a Free Quote
              </a>
              <a
                href="tel:1300650747"
                className="w-full text-center bg-black text-white font-semibold py-3 rounded hover:bg-gray-800 transition"
                aria-label="Call West VIC Energy 1300 650 747"
              >
                Call +61 497 358 063
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 max-w-4xl mx-auto px-4 text-xs text-center text-gray-500">
        <p>
          *Savings are indicative only and based on typical Victorian conditions and usage. Actual outcomes depend on
          your location, roof orientation/pitch, shading, network export limits, tariff/FiT, and consumption patterns.
          Estimates align with Clean Energy Council guidance. For a tailored assessment, request a site-specific quote.
        </p>
      </div>
    </section>
  );
}
