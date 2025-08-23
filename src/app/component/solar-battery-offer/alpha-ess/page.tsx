/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Alpha ESS Solar Batteries - Premium Energy Storage with Advanced Safety | SolarTech",
  description:
    "Discover Alpha ESS premium solar battery systems with advanced safety features, intelligent energy management, and superior performance.",
  keywords:
    "Alpha ESS battery, premium energy storage, advanced safety battery, smart energy management, luxury solar battery",
}

export default function AlphaESSPage() {
  const models = [
    {
      name: "SMILE-Hi10",
      capacity: "10.1 kWh",
      voltage: "51.2V",
      efficiency: "95%",
      price: "From $12,500",
      features: ["Advanced BMS", "Fire Safety", "Smart Monitoring", "Modular Design"],
    },
    {
      name: "SMILE-B3",
      capacity: "5.7 - 22.8 kWh",
      voltage: "51.2V",
      efficiency: "95%",
      price: "From $10,500",
      features: ["Stackable", "Premium Safety", "AI Optimization", "Remote Management"],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="text-3xl font-bold text-purple-600">Alpha ESS</div>
              </div>
              <h1 className="text-5xl font-bold text-slate-900 mb-6 font-heading">Premium Energy Storage Excellence</h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Alpha ESS delivers premium solar battery solutions with industry-leading safety features, intelligent
                energy management, and exceptional build quality. Experience the pinnacle of energy storage technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                  Get Premium Quote
                </button>
                <button className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
                  Technical Details
                </button>
              </div>
            </div>
            <div>
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Alpha ESS Solar Battery System"
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
            Advanced Safety & Intelligence
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 font-heading">Advanced Safety</h3>
              <p className="text-slate-600">
                Multi-layer safety protection with advanced BMS and fire prevention technology.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 font-heading">AI Optimization</h3>
              <p className="text-slate-600">
                Intelligent energy management with AI-powered optimization for maximum efficiency.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 font-heading">Premium Quality</h3>
              <p className="text-slate-600">
                Exceptional build quality with premium materials and rigorous testing standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Models */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12 font-heading">Alpha ESS Premium Models</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {models.map((model, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 border-2 border-transparent hover:border-purple-200 transition-colors"
              >
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
                    <span className="text-slate-600">Premium Price:</span>
                    <span className="font-semibold text-purple-600">{model.price}</span>
                  </div>
                </div>
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Premium Features:</h4>
                  <ul className="space-y-1">
                    {model.features.map((feature, idx) => (
                      <li key={idx} className="text-slate-600 flex items-center">
                        <svg className="w-4 h-4 text-purple-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
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
                <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                  Get Premium Quote for {model.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Benefits */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 font-heading">Premium Service & Support</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-lg">Years Warranty</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-lg">Premium Support</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-lg">Round-trip Efficiency</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 font-heading">Experience Premium Energy Storage</h2>
          <p className="text-xl mb-8 text-slate-300">
            Join discerning homeowners who choose Alpha ESS for uncompromising quality and performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
              Request Premium Consultation
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
