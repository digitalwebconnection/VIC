/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "GoodWE Solar Batteries - High-Performance Energy Storage | SolarTech",
  description:
    "Discover GoodWE's high-performance solar battery systems with intelligent energy management. Professional installation and comprehensive warranty.",
  keywords: "GoodWE battery, high performance energy storage, smart battery system, solar energy storage",
}

export default function Page() {
  const models = [
    {
      name: "Lynx Home F",
      capacity: "5.4 - 21.6 kWh",
      voltage: "51.2V",
      efficiency: "95%",
      price: "From $8,800",
      features: ["Modular Design", "Fire Safety", "Smart Energy Management"],
    },
    {
      name: "Lynx Home U",
      capacity: "5.4 - 32.4 kWh",
      voltage: "51.2V",
      efficiency: "95%",
      price: "From $9,500",
      features: ["Stackable", "High Capacity", "Advanced Monitoring"],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-slate-900 mb-6 font-heading">GoodWE Solar Batteries</h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                High-performance energy storage with intelligent management systems. GoodWE batteries deliver
                exceptional efficiency and safety with advanced fire protection technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
                  Get Quote
                </button>
                <button className="border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-orange-50 transition-colors">
                  Technical Specs
                </button>
              </div>
            </div>
            <div>
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="GoodWE Solar Battery System"
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
            GoodWE Performance Advantages
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 font-heading">Fire Safety</h3>
              <p className="text-slate-600">Advanced fire protection technology with multiple safety layers.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 font-heading">High Performance</h3>
              <p className="text-slate-600">95% efficiency with intelligent energy management algorithms.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 font-heading">Scalable System</h3>
              <p className="text-slate-600">Modular design allows easy expansion up to 32.4 kWh capacity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Models */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12 font-heading">GoodWE Battery Models</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {models.map((model, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4 font-heading">{model.name}</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Capacity:</span>
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
                    <span className="text-slate-600">Price:</span>
                    <span className="font-semibold text-orange-600">{model.price}</span>
                  </div>
                </div>
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {model.features.map((feature, idx) => (
                      <li key={idx} className="text-slate-600 flex items-center">
                        <svg className="w-4 h-4 text-orange-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
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
                <button className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
                  Get Quote for {model.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-orange-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 font-heading">Choose GoodWE for Superior Performance</h2>
          <p className="text-xl mb-8 opacity-90">
            Experience the perfect balance of performance, safety, and reliability with GoodWE batteries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Book Consultation
            </button>
            <Link
              href="/solar-battery-offer"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors"
            >
              Compare All Brands
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
