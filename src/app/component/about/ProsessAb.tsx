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
    title: "Book Your Free Consultation",
    description:
      "Send us your latest electricity bill and address. Our experts will assess your energy use, roof suitability, and current plan to find the best solar solution for your home in Victoria.",
    icon: <Calendar size={32} className="text-[#1f5495]" />,
  },
  {
    id: 2,
    title: "Custom Design & Savings Plan",
    description:
      "Receive a tailored solar & battery design with estimated production, payback timeline, STC rebates, and Feed-in Tariff guidance—explained in simple, jargon-free language.",
    icon: <Calculator size={32} className="text-[#1f5495]" />,
  },
  {
    id: 3,
    title: "Professional Install & Ongoing Care",
    description:
      "Our CEC-accredited installers set up your system with smart monitoring and provide full handover. Plus, our dedicated support team ensures peace of mind long after installation.",
    icon: <BadgeCheck size={32} className="text-[#1f5495]" />,
  },
];

const ProsessAb = () => {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-0 text-center">
        {/* Tagline */}
        <p className="uppercase text-orange-500 font-semibold tracking-wide text-sm">
          Our Proven Process
        </p>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
          Solar Made Simple with West Vic Energy
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
            href="/component/contact"
            className="inline-flex justify-center items-center rounded-full bg-blue-900 px-6 py-3 font-semibold text-white hover:bg-orange-600 transition"
            aria-label="Request a free solar quote from West VIC Energy"
          >
            Request a Free Quote
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
          *Savings estimates are indicative only. Actual results vary depending on site conditions, retailer plans, and energy usage.
        </p>
      </div>
    </section>
  );
};

export default ProsessAb;
