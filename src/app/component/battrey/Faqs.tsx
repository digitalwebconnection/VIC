// app/components/FAQ.tsx

"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  { question: "What Is the Cheaper Home Batteries Program?", answer: "This program helps households reduce costs by subsidizing battery storage systems." },
  { question: "How Much Can You Save?", answer: "You can save up to $18,600 depending on eligibility and installation." },
  { question: "Eligibility Criteria?", answer: "Eligibility depends on location, existing solar setup, and government policies." },
  { question: "How to Apply?", answer: "You can apply through an approved provider. Call 1300 285 885 for details." },
  { question: "Important Considerations?", answer: "Ensure your solar setup is compatible and that you understand long-term savings." },
  { question: "What is a GoodWe Battery?", answer: "GoodWe batteries are high-quality energy storage solutions designed for homes." },
  { question: "Why should I Choose a GoodWe Battery?", answer: "They are reliable, efficient, and backed by strong warranties." },
  { question: "How long does a GoodWe Battery Last?", answer: "On average, GoodWe batteries last 10+ years with proper usage." },
  { question: "Can I use a GoodWe Battery during a Blackout?", answer: "Yes, GoodWe batteries provide backup power during outages." },
  { question: "How much Storage Capacity does a GoodWe Battery have?", answer: "They come in various sizes, typically ranging from 5kWh to 30kWh." },
  { question: "Will a GoodWe Battery help me save on Electricity Bills?", answer: "Yes, it allows you to store solar energy and reduce reliance on the grid." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-6 md:px-12 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Frequently <span className="text-blue-600">Asked</span> Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border rounded-xl shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left font-medium text-gray-800 hover:bg-gray-50"
              >
                {faq.question}
                {openIndex === index ? (
                  <Minus className="text-blue-600" size={20} />
                ) : (
                  <Plus className="text-blue-600" size={20} />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-600 text-sm">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
