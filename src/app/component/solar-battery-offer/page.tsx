/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Solar Battery Offer - Premium Energy Storage Solutions | SolarTech",
  description:
    "Discover premium solar battery systems from leading brands like Tesla, Growatt, Foxess, and more. Professional installation, competitive pricing, and expert support.",
  keywords: "solar battery, energy storage, Tesla Powerwall, Growatt battery, solar backup power, home battery system",
}

export default function SolarBatteryOfferPage() {
  const brands = [
    {
      name: "Tesla",
      slug: "tesla",
      image: "/placeholder.svg?height=200&width=300",
      description: "Industry-leading Powerwall technology with seamless integration",
      capacity: "13.5 kWh",
      warranty: "10 years",
      price: "From $15,000",
    },
    {
      name: "Growatt",
      slug: "growatt",
      image: "/placeholder.svg?height=200&width=300",
      description: "Reliable and cost-effective energy storage solutions",
      capacity: "5.12 - 25.6 kWh",
      warranty: "10 years",
      price: "From $8,500",
    },
    {
      name: "Foxess",
      slug: "foxess",
      image: "/placeholder.svg?height=200&width=300",
      description: "Advanced lithium battery technology with smart monitoring",
      capacity: "5.12 - 20.48 kWh",
      warranty: "10 years",
      price: "From $9,200",
    },
    {
      name: "GoodWE",
      slug: "goodwe",
      image: "/placeholder.svg?height=200&width=300",
      description: "High-performance batteries with intelligent energy management",
      capacity: "5.4 - 21.6 kWh",
      warranty: "10 years",
      price: "From $8,800",
    },
    {
      name: "Alpha ESS",
      slug: "alpha-ess",
      image: "/placeholder.svg?height=200&width=300",
      description: "Premium energy storage with advanced safety features",
      capacity: "5.7 - 22.8 kWh",
      warranty: "10 years",
      price: "From $10,500",
    },
    {
      name: "Sungrow",
      slug: "sungrow",
      image: "/placeholder.svg?height=200&width=300",
      description: "Commercial-grade batteries for large-scale applications",
      capacity: "25 - 100 kWh",
      warranty: "10 years",
      price: "From $25,000",
    },
    {
      name: "Anker Solix",
      slug: "anker-solix",
      image: "/placeholder.svg?height=200&width=300",
      description: "Portable and modular battery solutions for flexibility",
      capacity: "1.6 - 15 kWh",
      warranty: "5 years",
      price: "From $1,500",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-slate-900 mb-6 font-heading">Premium Solar Battery Solutions</h1>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Store your solar energy and achieve true energy independence with our premium battery systems from
            world-leading manufacturers. Professional installation and lifetime support included.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors">
              Get Free Quote
            </button>
            <button className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-red-50 transition-colors">
              Compare Batteries
            </button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12 font-heading">
            Why Choose Solar Battery Storage?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 font-heading">Energy Independence</h3>
              <p className="text-slate-600">
                Store excess solar energy and use it when you need it most, reducing reliance on the grid.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 font-heading">Cost Savings</h3>
              <p className="text-slate-600">
                Reduce electricity bills by up to 90% and protect against rising energy costs.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 font-heading">Backup Power</h3>
              <p className="text-slate-600">
                Keep your home powered during outages with reliable backup energy storage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Showcase */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12 font-heading">
            Choose from Premium Battery Brands
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brands.map((brand) => (
              <Link
                key={brand.slug}
                href={`/solar-battery-offer/${brand.slug}`}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 group"
              >
                <img
                  src={brand.image || "/placeholder.svg"}
                  alt={`${brand.name} solar battery`}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-red-600 transition-colors font-heading">
                  {brand.name}
                </h3>
                <p className="text-slate-600 mb-4">{brand.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Capacity:</span>
                    <span className="font-semibold">{brand.capacity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Warranty:</span>
                    <span className="font-semibold">{brand.warranty}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Starting Price:</span>
                    <span className="font-semibold text-red-600">{brand.price}</span>
                  </div>
                </div>
                <div className="mt-4 text-red-600 font-semibold group-hover:underline">Learn More →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 font-heading">Ready to Power Your Home with Solar Batteries?</h2>
          <p className="text-xl mb-8 opacity-90">
            Get a personalized quote and discover which battery system is perfect for your home.
          </p>
          <button className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Get Your Free Assessment
          </button>
        </div>
      </section>
    </div>
  )
}
