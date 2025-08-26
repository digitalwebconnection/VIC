"use client";
import { Card, CardContent } from "../ui/card";
import { ArrowRight } from "lucide-react";
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

export default function BatteryPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-red-700 mb-10">
        🔋 Solar Battery Storage Solutions
      </h1>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
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
                  className="inline-flex items-center text-red-600 font-medium hover:underline"
                >
                  View details <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
