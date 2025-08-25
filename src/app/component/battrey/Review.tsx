// app/components/Reviews.tsx
"use client";

import { FaStar } from "react-icons/fa";
import Image from "next/image";


const reviews = [
    {
        name: "sukhjinder singh",
        rating: 5,
        text: "I recently had the pleasure of working with Malcom at Solis Solar Company, and I can't recommend him highly enough! His professionalism and good manners truly made a difference during the entire process.",
    },
    {
        name: "Kumar R",
        rating: 5,
        text: "I recently needed assistance updating the control settings to enable my battery to charge from the grid during a specific 3-hour window when my energy provider offers free electricity.",
        response: "Hi Praveen, Thank you for sharing your positive feedback!",
    },
    {
        name: "Fred Barbaro",
        rating: 5,
        text: "Very good outcome all the way. Special mention - Brett was very helpful.",
        response: "Hi Fred, Thank you for your great feedback! We’re delighted to hear this.",
    },
    {
        name: "Richard Zhao",
        rating: 5,
        text: "I got 40kwh Growatt through Solar Miner. When installing the battery, electrician faced real problems as the battery pack needed 3m wide to install properly.",
        response: "Hi Richard, Thank you so much for your kind and detailed feedback.",
    },
];

export default function Reviews() {
    return (
        <>
            <section className="bg-[#f4f8fd] py-16 px-6 md:px-0">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row items-center justify-between mb-12">
                        <div className="mb-6 md:mb-0">
                            <h3 className="font-semibold text-blue-800">Excellent</h3>
                            <div className="flex items-center space-x-2">
                                <p className="text-lg font-bold text-blue-900">4.5</p>
                                <div className="flex text-orange-500">
                                    {[...Array(4)].map((_, i) => (
                                        <FaStar key={i} />
                                    ))}
                                    <FaStar className="opacity-70" />
                                </div>
                            </div>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-center md:text-cnter text-blue-900">
                            Every Review Has A Story,<br /> A Story of An Experience - Delivered
                        </h2>
                    </div>

                    {/* Review Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10 overflow-x-auto">
                        {reviews.map((review, index) => (
                            <div
                                key={index}
                                className="bg-white shadow-md rounded-lg p-5 text-gray-800"
                            >
                                <h3 className="font-semibold text-sm text-blue-900 mb-2">
                                    {review.name}
                                </h3>
                                <div className="flex text-orange-500 mb-3">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <FaStar key={i} />
                                    ))}
                                </div>
                                <p className="text-sm mb-2">{review.text}</p>
                                {review.response && (
                                    <p className="text-xs font-semibold text-gray-600">
                                        Response from the owner:{" "}
                                        <span className="font-normal">{review.response}</span>
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="flex justify-center">
                        <button   className="px-8 py-3 bg-white border border-amber-400 text-blue-600 font-semibold rounded-full shadow transition">
                            See all reviews
                        </button>
                    </div>
                </div>
            </section>
            <section className="bg-[#f4f8fd] py-12 px-6 md:px-12">
                <div className="max-w-6xl mx-auto bg-gray-200 rounded-2xl shadow-md flex flex-col md:flex-row items-center justify-between p-8 relative">
                    {/* Left Content */}
                    <div className="flex-1 space-y-20">
                        <div>
                            <p className="text-gray-600 font-medium">Power Your Home</p>
                            <h2 className="text-2xl md:text-3xl font-bold text-[#0a2a57]">
                                Secure Federal Battery Rebate
                            </h2>
                        </div>

                        {/* Save Badge */}
                        <div className=" flex gap-20">
                            <div className="relative inline-block shadow-lg">
                                <div className="absolute -left-6 -bottom-6 w-24 h-24 bg-yellow-400 rounded-full -z-10"></div>
                                <div className="border border-blue-400 rounded-xl shadow-lg bg-white px-6 py-4">
                                    <p className="text-amber-500 font-semibold text-center">
                                        Save up to
                                    </p>
                                    <p className="bg-[#0a2a57] text-white text-2xl font-bold rounded-lg px-4 py-2 text-center">
                                        $18,600*
                                    </p>
                                </div>
                            </div>

                            {/* Call Now Section */}
                            <div>
                                <p className="text-gray-600 font-semibold">
                                    Call Now and Learn
                                </p>
                                <p className="text-gray-500 text-sm mb-3">How Much You Can Save</p>
                                <button  className="bg-blue-800  text-white font-semibold px-6 py-3 rounded-full shadow-xl">
                                  <a href="tel:+61 497 358 063">  +61 497 358 063</a>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="flex-1 mt-10 md:mt-0 flex justify-center relative">
                        {/* Approved Seller Badge */}
                        <div className="absolute top-0 left-6 md:left-10 -translate-y-6">
                            <div className="bg-blue-100 text-blue-900 rounded-full border-4 border-white shadow px-4 py-2 text-sm font-semibold">
                                ✅ Approved Seller
                            </div>
                        </div>
                        {/* Solar Panels + Battery (replace with your images) */}
                        {/* <Image
                            src="/solar-panels.png" // Replace with actual panel image
                            alt="Solar Panels"
                            width={220}
                            height={220}
                            className="mr-4"
                        /> */}
                        <Image
                            src="https://www.solarminer.com.au/wp-content/uploads/2023/07/sbs-img.png" // Replace with actual battery image
                            alt="Battery"
                            width={380}
                            height={150}
                        />
                    </div>
                </div>
            </section>
        </>
    );
}
