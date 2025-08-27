"use client";
import { FiPhone } from "react-icons/fi";

export default function System100kw() {
  const warrantyCards = [
    {
      title: "Performance Warranty on 100kw Solar System",
      desc: "Enjoy up to 25 years of reliable solar performance with West Vic Energy’s Tier-1 panels.",
      color: "bg-amber-400",
      text: "text-black",
    },
    {
      title: "Workmanship & Replacement Warranty",
      desc: "10-year workmanship & replacement warranty on all solar installations, handled by CEC-accredited experts.",
      color: "bg-sky-800",
      text: "text-white",
    },
    {
      title: "Product Warranty on 100kw Solar Panels",
      desc: "Premium-grade solar panels & inverters backed by industry-leading product warranties.",
      color: "bg-amber-400",
      text: "text-black",
    },
    {
      title: "Flexible 100kw Solar Packages",
      desc: "Custom-designed solar packages available to suit residential & commercial energy needs.",
      color: "bg-sky-800",
      text: "text-white",
    },
  ];

  return (
    <>
      <div className="max-w-7xl mx-auto my-12 px-6 md:px-0">
        <h2 className="text-center text-3xl font-bold mb-4 text-gray-900">
          Excellent Warranty Coverage with West Vic Energy
        </h2>
        <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">
          At <span className="font-semibold">West Vic Energy</span>, we ensure your 100kw Solar System is protected with
          strong warranties and backed by CEC-certified installers. Here’s what you get with our solar solutions:
        </p>

        {/* Warranty Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {warrantyCards.map((card, index) => (
            <div
              key={index}
              className={`${card.color} relative p-6 h-56 rounded-lg font-bold shadow-md ${card.text}`}
            >
              <p className="font-bold text-lg mb-2">{card.title}</p>
              <p className="text-sm font-semibold ">{card.desc}</p>
              {/* Decorative icons */}
              <div className="absolute top-2 right-5 opacity-20 text-7xl">🔆</div>
              <div className="absolute top-14 right-12 opacity-20 text-6xl">🔆</div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action Bar */}
      <div className="w-full bg-gradient-to-r from-amber-400 to-yellow-400 py-8 px-6 text-center">
        <h3 className="text-xl font-extrabold text-gray-900 mb-4">
          Switch to Clean Energy with West Vic Energy
        </h3>
        <p className="text-gray-800 mb-6">
          Book a <span className="font-bold">free 30-minute solar consultation</span> today and learn how a 100kw
          solar system can reduce your electricity bills by up to 70%.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button className="bg-sky-900 text-white px-6 py-3 font-semibold rounded hover:bg-sky-700 transition">
            Get A Free Quote
          </button>
          <a
            href="tel:+61 497 358 063"
            className="flex items-center bg-white text-sky-900 border border-sky-900 px-6 py-3 font-semibold rounded hover:bg-gray-100 transition"
          >
            <FiPhone className="mr-2" /> +61 497 358 063
          </a>
        </div>
      </div>
    </>
  );
}
