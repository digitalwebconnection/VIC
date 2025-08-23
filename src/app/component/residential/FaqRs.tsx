"use client";
import { useState } from 'react';
import { XMarkIcon, PlusIcon } from '@heroicons/react/24/solid';

export default function FaqRs() {

    const [openIndex, setOpenIndex] = useState<number | null>(0); // 0 = first item open

    const faqs = [
        {
            question: "Why should I install solar panels at home?",
            answer:
                "Residential solar panels can lower your electricity bills, increase your home’s value, and reduce your carbon footprint. They also provide long-term energy independence."
        },
        {
            question: "How much can I save with residential solar?",
            answer:
                "Savings depend on your energy usage, system size, and local electricity rates. Most homeowners save 40–60% on their energy bills."
        },
        {
            question: "Do solar panels work during cloudy days or at night?",
            answer:
                "Yes, solar panels work on cloudy days but with reduced output. They don’t generate power at night, but you can use stored energy from batteries or the grid."
        },
        {
            question: "How long do residential solar panels last?",
            answer:
                "Most panels last 25–30 years with minimal performance loss over time."
        },
        {
            question: "What maintenance do solar panels need?",
            answer:
                "Residential solar systems need little maintenance—just occasional cleaning and periodic inspections to ensure peak performance."
        },
        {
            question: "Are there government incentives for home solar?",
            answer:
                "Yes, many areas offer tax credits, rebates, and subsidies for homeowners installing solar panels. Check your local regulations."
        },
        {
            question: "How long does it take to install solar panels?",
            answer:
                "For most homes, installation takes 1–3 days after permits and approvals are complete."
        },
        {
            question: "Will solar panels damage my roof?",
            answer:
                "No, when installed by professionals, solar panels do not damage your roof. They can even help protect the areas they cover."
        }
    ];


    const toggleFAQ = (index: number) => {
        setOpenIndex(index === openIndex ? null : index);
    };

    return (
        <>

            <div className=" bg-white py-12 px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-2xl font-bold text-center mb-8">FAQ</h2>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`rounded-lg overflow-hidden shadow-sm border transition-all duration-300 ${openIndex === index ? 'bg-blue-900 text-white' : 'bg-indigo-100 text-blue-900'
                                    }`}
                            >
                                <div
                                    onClick={() => toggleFAQ(index)}
                                    className="flex items-center justify-between cursor-pointer px-4 py-3"
                                >
                                    <h3 className="font-semibold">
                                        {openIndex === index && index === 0 ? (
                                            <span className="text-orange-400">Why should I install solar panels at home?</span>
                                        ) : (
                                            faq.question
                                        )}
                                    </h3>
                                    {openIndex === index ? (
                                        <XMarkIcon className="h-5 w-5 text-white" />
                                    ) : (
                                        <PlusIcon className="h-5 w-5 text-blue-900" />
                                    )}
                                </div>

                                {openIndex === index && (
                                    <div className="px-4 pb-4 text-sm leading-relaxed">
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}