"use client";
import { useState } from 'react';
import { XMarkIcon, PlusIcon } from '@heroicons/react/24/solid';


export default function FaqCs() {
    const [openIndex, setOpenIndex] = useState<number | null>(0); // 0 = first item open

    const faqs = [
        {
            question: 'WHY?',
            answer:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        },
        { question: 'What?', answer: 'Answer to What?' },
        { question: 'What?', answer: 'Answer to What?' },
        { question: 'What?', answer: 'Answer to What?' },
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
                                            <span className="text-orange-400">WHY?</span>
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