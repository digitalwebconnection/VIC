"use client";
import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How many solar panels will I need for my home?",
    answer:
      "The number of solar panels depends on your energy consumption, roof size, and desired system capacity. A typical 5kW system requires 15-17 panels.",
  },
  {
    question: "What is the cost of installing a solar power system?",
    answer:
      "A 5kW solar system can cost between $3,000 and $4,800, depending on location, roof type, and chosen equipment.",
  },
  {
    question: "How much roof space is required for solar panels?",
    answer:
      "A standard 5kW solar system requires approximately 25–30 square meters of roof space.",
  },
  {
    question: "How long does installation take?",
    answer:
      "Installation usually takes 1–3 days for a standard residential system.",
  },
  {
    question: "How much energy will my solar system generate?",
    answer:
      "A 5kW solar system can generate roughly 20–22 kWh per day on average, depending on location and sunlight exposure.",
  },
];

export default function FaqsHm() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto my-20 p-5">
      <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">
        FAQs
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <motion.div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-4 bg-gray-50 hover:bg-gray-100 transition-colors text-left text-lg font-medium"
              >
                {faq.question}
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isOpen ? <FiChevronUp /> : <FiChevronDown />}
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="bg-white"
                  >
                    <div className="px-6 py-4 text-gray-700">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
