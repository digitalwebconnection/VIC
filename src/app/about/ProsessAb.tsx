"use client";

import { Calendar, Calculator, BadgeCheck } from "lucide-react";

const steps = [
    {
        id: 1,
        title: "Book a Free Consultation",
        description:
            "Our mission is to provide clear, high quality and affordable ecological advice and services to public.",
        icon: <Calendar size={32} className="text-green-600" />,
    },
    {
        id: 2,
        title: "Estimate the Calculation",
        description:
            "Our mission is to provide clear, high quality and affordable ecological advice and services to public.",
        icon: <Calculator size={32} className="text-green-600" />,
    },
    {
        id: 3,
        title: "Hire us for Your Projects",
        description:
            "Our mission is to provide clear, high quality and affordable ecological advice and services to public.",
        icon: <BadgeCheck size={32} className="text-green-600" />,
    },
];
const ProsessAb = () => {
    return (
        <>
            <section className="w-full bg-white py-16 mex-w-7xl mx-auto px-6 md:px-0">
                <div className="max-w-7xl mx-auto text-center">
                    {/* Tagline */}
                    <p className="uppercase text-orange-500 font-semibold tracking-wide text-sm">
                        Process and the solutions we can provide
                    </p>

                    {/* Heading */}
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                        What You Can Expect From Our <br /> Sustainability Consultants
                    </h2>

                    {/* Steps Grid */}
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                        {steps.map((step) => (
                            <div
                                key={step.id}
                                className="relative bg-white border rounded-2xl shadow-md px-6 py-8 text-left hover:shadow-lg transition duration-300"
                            >
                                {/* Number badge */}
                                <div className="absolute top-4 right-4 bg-green-600 text-white w-8 h-8 flex items-center justify-center rounded-full font-bold">
                                    {step.id}
                                </div>

                                {/* Title */}
                                <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>

                                {/* Description */}
                                <p className="text-gray-600 text-sm mt-2">{step.description}</p>

                                {/* Icon */}
                                <div className="mt-6">{step.icon}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </>
    )
}

export default ProsessAb