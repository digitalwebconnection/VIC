"use client";

import { CheckCircle } from "lucide-react";

export default function BatteryProgram() {
  const info = [
    {
      title: "Launch date",
      text: "1 July 2025",
    },
    {
      title: "Funding pool",
      text: "$2.3 billion under the existing Small-scale Renewable Energy Scheme (SRES)",
    },
    {
      title: "Incentive",
      text: (
        <>
          - Up to $372 per usable kWh of battery capacity (actual ~$330–$344/kWh after fees) <br />
          - Applies to 5–100kWh nominal systems, but rebate capped at first 50kWh usable
        </>
      ),
    },
    {
      title: "Discount impact",
      text: "Approx. 30% off upfront cost, equating to ~$4,000 on a typical 11–13kWh system",
    },
    {
      title: "Who qualifies",
      text: "Homeowners, small businesses, and community facilities with CEC-approved, VPP-capable batteries installed by CEC-accredited installers paired with solar PV",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center py-12 px-6">
      <div className="max-w-7xl w-full">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          What is Cheaper Home Batteries Program
        </h1>

        {/* Info list */}
        <div className="space-y-6">
          {info.map((item, index) => (
            <div key={index} className="flex items-start space-x-3">
              <CheckCircle className="text-blue-600 w-6 h-6 flex-shrink-0 mt-1" />
              <p className="text-gray-800">
                <span className="font-semibold">{item.title}: </span>
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <p className="mt-10 text-gray-700">
          Get in touch with our <span className="font-semibold">Solar Battery Expert.</span>
        </p>

        {/* CTA */}
        <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
         
          <a
            href="tel:+61 497 358 063"
            className="flex items-center gap-2 border border-amber-400 text-blue-600 px-6 py-3 rounded-full text-lg font-semibold  transition"
          >
            📞+61 497 358 063
          </a>
        </div>
      </div>
    </div>
  );
}
