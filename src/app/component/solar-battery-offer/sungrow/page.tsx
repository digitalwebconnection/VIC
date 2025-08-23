import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Sungrow Solar Batteries - Commercial Grade Energy Storage | SolarTech",
  description:
    "Discover Sungrow's commercial-grade solar battery systems for large-scale applications. Industrial strength, high capacity, and proven reliability.",
  keywords: "Sungrow battery, commercial energy storage, industrial battery system, large scale solar storage",
}

export default function SungrowPage() {
  const models = [
    {
      name: "PowerStack",
      capacity: "25 - 100 kWh",
      voltage: "1000V DC",
      efficiency: "94.5%",
      price: "From $25,000",
      features: ["Modular Design", "IP54 Protection", "Remote Monitoring", "25-Year Design Life"],
    },
    {
      name: "ST2236UX",
      capacity: "50 - 200 kWh",
      voltage: "1000V DC",
      efficiency: "95%",
      price: "From $45,000",
      features: ["High Capacity", "Advanced Cooling", "Grid Services", "Commercial Warranty"],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="text-3xl font-bold text-indigo-600">SUNGROW</div>
              </div>
              <h1 className="text-5xl font-bold text-slate-900 mb-6 font-heading">Commercial Grade Energy Storage</h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Sungrow delivers industrial-strength solar battery solutions for commercial and utility-scale
                applications. Proven reliability, high capacity, and advanced grid integration for demanding energy
                storage requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
                  Get Commercial Quote
                </button>
                <button className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-50 transition-colors">
                  Technical Specifications
                </button>
              </div>
            </div>
            <div>
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Sungrow Commercial Battery System"
                className="w-full rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12 font-heading">
            Industrial Strength Performance
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 font-heading">Large Scale</h3>
              <p className="text-slate-600">
                High-capacity systems designed for commercial buildings, industrial facilities, and utility projects.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 font-heading">Proven Reliability</h3>
              <p className="text-slate-600">
                25-year design life with rigorous testing and proven performance in demanding environments.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 font-heading">Grid Integration</h3>
              <p className="text-slate-600">
                Advanced grid services including frequency regulation, peak shaving, and demand response.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Models */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12 font-heading">
            Commercial Battery Systems
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {models.map((model, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 border-2 border-transparent hover:border-indigo-200 transition-colors"
              >
                <h3 className="text-2xl font-bold text-slate-900 mb-4 font-heading">{model.name}</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Capacity Range:</span>
                    <span className="font-semibold">{model.capacity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Voltage:</span>
                    <span className="font-semibold">{model.voltage}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Efficiency:</span>
                    <span className="font-semibold">{model.efficiency}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Starting Price:</span>
                    <span className="font-semibold text-indigo-600">{model.price}</span>
                  </div>
                </div>
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Commercial Features:</h4>
                  <ul className="space-y-1">
                    {model.features.map((feature, idx) => (
                      <li key={idx} className="text-slate-600 flex items-center">
                        <svg className="w-4 h-4 text-indigo-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
                  Request Commercial Quote
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Benefits */}
      <section className="py-16 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 font-heading">Commercial Advantages</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-lg">Year Design Life</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">200+</div>
              <div className="text-lg">kWh Max Capacity</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-lg">System Efficiency</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-lg">Technical Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 font-heading">Scale Your Energy Storage</h2>
          <p className="text-xl mb-8 text-slate-300">
            Partner with Sungrow for commercial-grade energy storage solutions that deliver results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
              Schedule Commercial Consultation
            </button>
            <Link
              href="/solar-battery-offer"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-colors"
            >
              Compare All Brands
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
