"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

type FaqItem = {
  question: string;
  answer: string;
};

export default function FaqCs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // first item open

  const faqs: FaqItem[] = [
    {
      question: "Why choose solar for my business?",
      answer:
        "Solar power can lower your electricity bills, protect against energy price increases, and support sustainability goals.",
    },
    {
      question: "How much can I save with commercial solar panels?",
      answer:
        "Savings vary by location, energy usage, and system size, but most businesses reduce their energy costs by 40–70%.",
    },
    {
      question: "How long do commercial solar panels last?",
      answer:
        "Quality panels last 25–30 years with minimal performance loss. Inverters may need replacement after 10–15 years.",
    },
    {
      question: "Will solar work during cloudy days or at night?",
      answer:
        "Panels still generate some electricity on cloudy days, but not at night. Batteries can store energy for nighttime use.",
    },
    {
      question: "What maintenance is needed for a solar system?",
      answer:
        "Solar systems require minimal maintenance—mainly occasional cleaning and annual performance checks.",
    },
    {
      question: "Are there incentives for commercial solar?",
      answer:
        "Many regions offer tax credits, rebates, or grants to lower installation costs for businesses.",
    },
    {
      question: "How long does installation take?",
      answer:
        "Commercial installations usually take 1–3 months, depending on project size and permitting.",
    },
    {
      question: "Do I need to replace my roof before installing panels?",
      answer:
        "If your roof is old or damaged, it’s best to address that before installation to avoid extra costs later.",
    },
  ];

  const toggleFAQ = (index: number) =>
    setOpenIndex(index === openIndex ? null : index);

  return (
    <div className="bg-white px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-8 text-center text-2xl font-bold">FAQ</h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            return (
              <div
                key={index}
                className={`overflow-hidden rounded-lg border shadow-sm transition-all duration-300 ${
                  isOpen ? "bg-blue-900 text-white" : "bg-indigo-100 text-blue-900"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between px-4 py-3 text-left"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                >
                  <span className="font-semibold">
                    {isOpen && index === 0 ? (
                      <span className="text-orange-400">
                        Why choose solar for my business?
                      </span>
                    ) : (
                      faq.question
                    )}
                  </span>
                  {isOpen ? (
                    <Minus className="h-5 w-5" />
                  ) : (
                    <Plus className="h-5 w-5 text-blue-900" />
                  )}
                </button>

                {/* Smooth collapse/expand */}
                <div
                  id={panelId}
                  className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <div className="px-4 pb-4 text-sm leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
