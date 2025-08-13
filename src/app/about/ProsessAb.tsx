"use client";

import { Calendar, Calculator, BadgeCheck } from "lucide-react";
import { JSX } from "react";

type Step = {
  id: number;
  title: string;
  description: string;
  icon: JSX.Element;
};

const steps: Step[] = [
  {
    id: 1,
    title: "Book a Free Consultation",
    description:
      "Share a recent bill and your address. We’ll review your usage, roof, and retailer plan to see what suits your home in VIC.",
    icon: <Calendar size={32} className="text-[#1f5495]" />,
  },
  {
    id: 2,
    title: "Tailored System & Savings",
    description:
      "Get a custom design with STC incentives, estimated production, payback, and tariff/FiT guidance—no pressure, no jargon.",
    icon: <Calculator size={32} className="text-[#1f5495]" />,
  },
  {
    id: 3,
    title: "Install & Ongoing Support",
    description:
      "CEC-accredited install, smart monitoring setup, and after-sales care. We’re here long after the switch-on.",
    icon: <BadgeCheck size={32} className="text-[#1f5495]" />,
  },
];

const ProsessAb = () => {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-0 text-center">
        {/* Tagline */}
        <p className="uppercase text-orange-500 font-semibold tracking-wide text-sm">
          Our process & how we help
        </p>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
          What to expect with West VIC Energy
        </h2>

        {/* Steps Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <article
              key={step.id}
              className="relative bg-white border rounded-2xl shadow-md px-6 py-8 text-left hover:shadow-lg hover:-translate-y-0.5 transition duration-300"
              aria-label={`Step ${step.id}: ${step.title}`}
            >
              {/* Number badge */}
              <div
                className="absolute top-4 right-4 bg-yellow-400 text-black w-8 h-8 flex items-center justify-center rounded-full font-bold"
                aria-hidden="true"
              >
                {step.id}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>

              {/* Description */}
              <p className="text-gray-600 text-sm mt-2">{step.description}</p>

              {/* Icon */}
              <div className="mt-6" aria-hidden="true">
                {step.icon}
              </div>
            </article>
          ))}
        </div>

        {/* CTA row */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
          <a
            href="/quote"
            className="inline-flex justify-center items-center rounded-full bg-blue-900 px-6 py-3 font-semibold text-white hover:bg-orange-600 transition"
            aria-label="Request a free solar quote from West VIC Energy"
          >
            Get a Free Quote
          </a>
          <a
            href="tel:+61 497 358 063"
            className="inline-flex justify-center items-center rounded-full bg-black px-6 py-3 font-semibold text-white hover:bg-gray-800 transition"
            aria-label="Call West VIC Energy on +61 497 358 063"
          >
            Call +61 497 358 063
          </a>
        </div>

        <p className="mt-3 text-xs text-gray-500">
          Estimates are indicative only; actual outcomes depend on site conditions, retailer plans, and usage.
        </p>
      </div>
    </section>
  );
};

export default ProsessAb;
