"use client";
import { FiPhone } from "react-icons/fi";

export default function System5Kwcardes() {
    const warrantyCards = [
        {
            title: "Performance Warranty on 5kW Solar System",
            color: "bg-orange-500",
        },
        {
            title: "Workmanship & Replacement Warranty for 5kW Solar System Panels",
            color: "bg-sky-500",
        },
        {
            title: "Product Warranty on 5kW Inverters",
            color: "bg-orange-500",
        },
        {
            title: "5kW Solar System Packages Available On-Demand",
            color: "bg-sky-500",
        },
    ];

    return (
        <>
            <div className="max-w-full mx-auto my-10">
                <h2 className="text-center text-2xl font-bold mb-8 text-gray-900">
                    Excellent Warranty Coverage on 5kW Solar Power System
                </h2>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {warrantyCards.map((card, index) => (
                        <div
                            key={index}
                            className={`${card.color} relative p-8 h-48 rounded shadow-md text-white`}
                        >
                            <p className="font-semibold text-xl">{card.title}</p>
                            {/* Optional background icon */}
                            <div className="absolute top-2 right-5 opacity-20 text-8xl">🔹</div>
                            <div className="absolute top-15 right-20 opacity-40 text-7xl">🔹</div>
                            <div className="absolute top-20 right-0 opacity-30 text-8xl">🔹</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Call to Action Bar */}
            <div className="flex flex-col sm:flex-row justify-end items-center gap-2 w-full">
                <button className="absolute z-0 bg-orange-500 w-full text-white px-6 py-3 font-semibold rounded hover:bg-orange-600 transition">
                    Get A Free 30-Minute Consultation
                </button>
                 <div className="flex items-center justify-center w-full sm:w-auto me-70  my-10  pe-0 md:pe-90">
                   <a
                            href="tel:+61 497 358 063"
                            className="flex items-center z-10 relative md:-mb-0 -mb-40  h-15 px-15 bg-sky-500 text-white py-4 font-semibold rounded hover:bg-sky-600 transition"
                        >
                            <FiPhone className="mr-2" />
                            +61 497 358 063
                        </a>
                </div>
            </div>
        </>
    );
}
