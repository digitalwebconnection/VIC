"use client";
import { Card, CardContent } from "../ui/card";
import { ArrowRight, BatteryCharging, ShieldCheck, Sun, Zap } from "lucide-react";
import Link from "next/link";

const BATTERIES = [
  {
    name: "Growatt",
    href: "/component/battrey/GrowattBattery",
    desc: "Reliable solar battery storage for homes & businesses.",
  },
  {
    name: "FoxESS",
    href: "/component/battrey/FoxessBattery",
    desc: "Efficient energy storage with advanced tech.",
  },
  {
    name: "GoodWE",
    href: "/component/battrey/GoodweBattttriy",
    desc: "Trusted solar batteries with global presence.",
  },
  {
    name: "Alpha Ess",
    href: "/component/battrey/AlphaEssSolar",
    desc: "Innovative storage with smart management.",
  },
  {
    name: "Tesla",
    href: "/component/battrey/TeslaPowerwall",
    desc: "Premium Powerwall batteries for modern homes.",
  },
  {
    name: "Sungrow",
    href: "/component/battrey/Sungrow",
    desc: "Durable and efficient battery solutions.",
  },
  {
    name: "Anker Solix",
    href: "/component/battrey/AnkerSolix",
    desc: "Portable and powerful storage for flexible use.",
  },
];

const BENEFITS = [
  {
    title: "Energy Independence",
    desc: "Store excess solar power and reduce reliance on the grid.",
    icon: <Zap className="h-6 w-6 text-red-600" />,
  },
  {
    title: "Backup Power",
    desc: "Keep your home running during blackouts & outages.",
    icon: <BatteryCharging className="h-6 w-6 text-red-600" />,
  },
  {
    title: "Save More Money",
    desc: "Use stored energy at night and lower your electricity bills.",
    icon: <Sun className="h-6 w-6 text-red-600" />,
  },
  {
    title: "Future-Ready",
    desc: "Smart battery tech that grows with your solar system.",
    icon: <ShieldCheck className="h-6 w-6 text-red-600" />,
  },
];

export default function BatteryPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      {/* Intro */}
      <h1 className="text-4xl font-bold text-center text-blue-900 mb-4">
        🔋 Solar Battery Storage Solutions
      </h1>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
        At <span className="font-semibold text-blue-700">West Vic Energy</span>,
        we provide advanced solar battery systems that let you store excess
        solar power, cut electricity bills, and enjoy reliable backup energy.
      </p>

      {/* Battery Grid */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6 mb-16">
        {BATTERIES.map((batt, idx) => (
          <Card
            key={idx}
            className="border rounded-2xl shadow-md hover:shadow-lg transition-all"
          >
            <CardContent className="p-6 flex flex-col justify-between h-full">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  {batt.name}
                </h2>
                <p className="text-gray-600 text-sm mt-2">{batt.desc}</p>
              </div>
              <div className="mt-4">
                <Link
                  href={batt.href}
                  className="inline-flex items-center text-blue-600 font-medium hover:underline"
                >
                  View details <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Benefits Section */}
      <div className="bg-gray-50 rounded-2xl p-8 mb-16">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-6">
          Why Choose Solar Battery Storage?
        </h2>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
          {BENEFITS.map((benefit, i) => (
            <div
              key={i}
              className="text-center bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <div className="flex justify-center mb-3">{benefit.icon}</div>
              <h3 className="font-semibold text-lg text-gray-900">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-sm mt-2">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Ready to Power Your Home with Smart Battery Storage?
        </h2>
        <p className="text-gray-600 mb-6">
          Talk to our solar experts today and find the perfect battery solution
          for your energy needs.
        </p>
        <Link
          href="/contact"
          className="bg-blue-900 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
        >
          Get a Free Quote
        </Link>
      </div>
    </section>
  );
}
