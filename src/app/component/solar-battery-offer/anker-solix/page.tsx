/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Anker Solix Solar Batteries - Portable & Modular Energy Storage | SolarTech",
  description:
    "Explore Anker Solix portable and modular solar battery systems. Flexible, expandable energy storage solutions for homes and businesses.",
  keywords: "Anker Solix battery, portable energy storage, modular battery system, flexible solar storage",
}

export default function AnkerSolixPage() {
  const models = [
    {
      name: "Solix F1200",
      capacity: "1.28 kWh",
      portability: "Portable",
      expandable: "Up to 5.12 kWh",
      price: "From $1,500",
      features: ["Ultra Portable", "Fast Charging", "Multiple Outputs", "App Control"],
    },
    {
      name: "Solix F3800",
      capacity: "3.84 kWh",
      portability: "Semi-Portable",
      expandable: "Up to 15.36 kWh",
      price: "From $4,200",
      features: ["High Capacity", "Modular Design", "Home Integration", "Emergency Backup"],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-teal-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="text-3xl font-bold text-teal-600">Anker SOLIX</div>
              </div>
              <h1 className="text-5xl font-bold text-slate-900 mb-6 font-heading">Portable & Modular Energy Freedom</h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Anker Solix delivers flexible, portable energy storage solutions that adapt to your lifestyle. From
                compact portable units to expandable home systems, experience energy independence wherever you are.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-700 transition-colors">
                  Explore Solix
                </button>
                <button className="border-2 border-teal-600 text-teal-600 px-8 py-4 rounded-lg font-semibold hover:bg-teal-50 transition-colors">
                  Compare Models
                </button>
              </div>
            </div>
            <div>
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Anker Solix Portable Battery System"
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
            Flexible Energy Solutions
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 font-heading">Ultra Portable</h3>
              <p className="text-slate-600">
                Lightweight, compact design perfect for camping, RVs, and emergency backup power.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 font-heading">Modular Expansion</h3>
              <p className="text-slate-600">
                Start small and expand your system as your energy needs grow with modular battery packs.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 font-heading">Smart Control</h3>
              <p className="text-slate-600">
                Monitor and control your energy system remotely with the intuitive Anker app.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Models */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12 font-heading">Anker Solix Models</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {models.map((model, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 border-2 border-transparent hover:border-teal-200 transition-colors"
              >
                <h3 className="text-2xl font-bold text-slate-900 mb-4 font-heading">{model.name}</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Base Capacity:</span>
                    <span className="font-semibold">{model.capacity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Portability:</span>
                    <span className="font-semibold">{model.portability}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Expandable To:</span>
                    <span className="font-semibold">{model.expandable}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Starting Price:</span>
                    <span className="font-semibold text-teal-600">{model.price}</span>
                  </div>
                </div>
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {model.features.map((feature, idx) => (
                      <li key={idx} className="text-slate-600 flex items-center">
                        <svg className="w-4 h-4 text-teal-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
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
                <button className="w-full bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors">
                  Get {model.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 px-4 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 font-heading">Perfect For Every Lifestyle</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-2xl mb-2">🏕️</div>
              <div className="font-semibold mb-1">Camping</div>
              <div className="text-sm opacity-90">Portable power for outdoor adventures</div>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">🚐</div>
              <div className="font-semibold mb-1">RV Living</div>
              <div className="text-sm opacity-90">Reliable energy for mobile homes</div>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">🏠</div>
              <div className="font-semibold mb-1">Home Backup</div>
              <div className="text-sm opacity-90">Emergency power when you need it</div>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">⚡</div>
              <div className="font-semibold mb-1">Off-Grid</div>
              <div className="text-sm opacity-90">Complete energy independence</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 font-heading">Start Your Energy Journey</h2>
          <p className="text-xl mb-8 text-slate-300">
            Discover the freedom of portable, modular energy storage with Anker Solix.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-700 transition-colors">
              Shop Anker Solix
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
