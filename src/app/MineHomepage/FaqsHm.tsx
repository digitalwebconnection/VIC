"use client";
import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

type FAQ = { question: string; answer: string };

const faqs: FAQ[] = [
  {
    question: "How many solar panels will I need for my home?",
    answer:
      "It depends on your energy usage, roof size/orientation, and system size. As a guide, a 5 kW system typically uses ~12–14 panels with modern 370–415 W modules (up to ~15–17 if using lower-wattage panels). We’ll size it precisely from your bill and roof layout.",
  },
  {
    question: "What is the cost of installing a solar power system?",
    answer:
      "Indicative pricing in Victoria for a quality 5 kW residential system is ~A$3,000–A$5,500 after STCs. Final price varies with roof complexity, hardware brands, electrical upgrades, and regional travel. Get a tailored quote for exact figures.",
  },
  {
    question: "How much roof space is required for solar panels?",
    answer:
      "Allow roughly 20–30 m² for a 5 kW system, depending on panel wattage, tilt, spacing, and obstructions (vents, chimneys). We’ll design a layout to maximise production within your available space.",
  },
  {
    question: "How long does installation take?",
    answer:
      "Most standard residential installs are completed in 1 day (occasionally 2 if the job is complex or large). We’ll confirm the schedule during site check and keep you updated.",
  },
  {
    question: "How much energy will my solar system generate?",
    answer:
      "In Victoria, a 5 kW system can produce around 18–22 kWh/day on average across the year—higher in summer, lower in winter. Actual output depends on roof orientation, shade, and local conditions.",
  },
  {
    question: "What rebates or feed-in tariffs (FiTs) are available in Victoria?",
    answer:
      "Your price usually includes federal STC incentives. You may also be eligible for state programs when available. Feed-in tariffs are set by your retailer and plan. We’ll help you understand current options when we quote.",
  },
  {
    question: "Can I add a battery now or later?",
    answer:
      "Yes. We can install a battery with your solar or design the system ‘battery-ready’ so you can add storage later. Batteries help increase self-consumption and provide backup (model-dependent).",
  },
];

export default function FaqsHm() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto my-20 p-5" aria-label="Frequently Asked Questions">
      <h2 className="text-3xl font-bold mb-6 text-gray-900">FAQs</h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const open = openIndex === index;
          const panelId = `faq-panel-${index}`;
          const buttonId = `faq-button-${index}`;
          return (
            <div
              key={index}
              className="border border-gray-300 rounded-lg overflow-hidden transition-shadow duration-300"
            >
              <button
                id={buttonId}
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-4 bg-gray-100 hover:bg-gray-200 transition-colors text-left text-lg font-medium"
                aria-expanded={open}
                aria-controls={panelId}
              >
                {faq.question}
                {open ? <FiChevronUp aria-hidden /> : <FiChevronDown aria-hidden />}
              </button>

              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className={`px-6 bg-white transition-[max-height,opacity] duration-300 ease-in-out ${
                  open ? "py-4 opacity-100" : "max-h-0 overflow-hidden opacity-0"
                }`}
              >
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA row */}
      <div className="mt-8 flex flex-col sm:flex-row gap-3">
        <a
          href="/quote"
          className="inline-flex justify-center items-center rounded-full bg-yellow-400 px-6 py-3 font-semibold text-black hover:bg-orange-600  hover:text-white transition"
          aria-label="Request a free solar quote from West VIC Energy"
        >
          Get a Free Quote
        </a>
        <a
          href="tel:+61 497 358 063"
          className="inline-flex justify-center items-center rounded-full bg-black px-6 py-3 font-semibold text-white hover:bg-gray-800 transition"
          aria-label="Call West VIC Energy on 1300 650 747"
        >
          Call +61 497 358 063
        </a>
      </div>

      <p className="mt-3 text-xs text-gray-500">
        Figures are indicative only; your results will vary based on site conditions, usage patterns, and retailer plans.
      </p>
    </section>
  );
}
