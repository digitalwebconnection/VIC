"use client";

import { CheckCircle } from "lucide-react";

export default function BatteryProgram() {
  const info = [
    {
      title: "Smarter Battery Solutions",
      text: "West Vic Energy provides next-generation solar battery storage systems that maximise energy independence, reduce bills, and give you greater control over your power usage.",
    },
    {
      title: "Generous Rebates & Incentives",
      text: (
        <>
          Eligible Victorians can claim government rebates of up to{" "}
          <span className="font-semibold">$4,000</span> on approved 11–13kWh
          solar battery systems — making it easier than ever to secure reliable
          clean energy for your home or business.
        </>
      ),
    },
    {
      title: "Save More, Live Better",
      text: "On average, households and small businesses save 30–40% upfront, while enjoying long-term bill reductions by storing solar energy instead of buying expensive grid power.",
    },
    {
      title: "Who Can Benefit?",
      text: "Homeowners, small businesses, and community organisations across Victoria can apply — provided installations are completed by our CEC-accredited experts at West Vic Energy.",
    },
    {
      title: "Why West Vic Energy?",
      text: "As a proudly Australian-owned company, West Vic Energy combines local knowledge with world-class technology to deliver trustworthy solar + battery solutions with ongoing customer-first support.",
    },
    {
      title: "Future-Ready Technology",
      text: "Every West Vic Energy battery installation is designed for tomorrow — integrating with smart home systems, EV charging, and upcoming grid advancements.",
    },
    {
      title: "Energy Security & Blackout Protection",
      text: "West Vic Energy batteries don’t just save you money — they keep your lights on during power outages, giving you peace of mind and reliable energy security.",
    },
    {
      title: "Sustainable & Community-Focused",
      text: "Choosing West Vic Energy means you’re supporting a cleaner environment and a company dedicated to building stronger, greener Victorian communities.",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center py-12 px-6">
      <div className="max-w-7xl w-full">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
          Cheaper Home Battery Program with{" "}
          <span className="text-blue-800">West Vic Energy</span>
        </h1>

        <p className="text-lg text-gray-700 text-center mb-10 max-w-3xl mx-auto">
          Take charge of your energy future with{" "}
          <span className="font-semibold text-blue-600">West Vic Energy</span>.
          Our affordable battery storage solutions help Victorian households and
          businesses reduce costs, improve sustainability, and gain independence
          from rising power prices.
        </p>

        {/* Info list */}
        <div className="space-y-6">
          {info.map((item, index) => (
            <div key={index} className="flex items-start space-x-3">
              <CheckCircle className="text-green-600 w-6 h-6 flex-shrink-0 mt-1" />
              <p className="text-gray-800">
                <span className="font-semibold">{item.title}: </span>
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-12 bg-white shadow-md rounded-2xl p-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Talk to West Vic Energy’s Solar Battery Experts
          </h2>
          <p className="text-gray-700 mb-6">
            Ready to unlock the full potential of solar? Contact{" "}
            <span className="font-semibold text-blue-600">West Vic Energy</span>{" "}
            today and discover how much you can save with smarter, cleaner
            energy.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="tel:+61 497 358 063"
              className="flex items-center gap-2 border border-amber-400 text-blue-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-amber-50 transition"
            >
              📞 +61 497 358 063
            </a>
            <a
              href="/contact"
              className="bg-blue-900 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition"
            >
              Get a Free Quote
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
