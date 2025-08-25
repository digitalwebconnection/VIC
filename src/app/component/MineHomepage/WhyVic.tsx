/* eslint-disable @next/next/no-img-element */

"use client";
const features = [
    {
        icon: "✔️",
        title: "Proven Quality Products:",
        description: "Quality of products, as well as services, are of top-most importance to us. We believe quality can’t be compromised at any cost.",
    },
    {
        icon: "💰",
        title: "Competitive Pricing:",
        description: "We aim to be competitive in our prices for the level of quality we deliver. Quality comes at a cost and there is no substitute for it.",
    },
    {
        icon: "💳",
        title: "Flexible Finance Options:",
        description: "We have flexible finance options available for our customers with $0 upfront so you can repay from your savings on your electricity bills.",
    },
    {
        icon: "⚙️",
        title: "Seamless Start To End Process:",
        description: "We offer seamless start to end process experience for our customers which makes solar system purchase easy, simple & quicker by holding their hand at every stage.",
    },
    {
        icon: "🎖️",
        title: "Unbeatable After Sales Care:",
        description: "We have a dedicated team of customer service which takes care of all the after-sales issues and aim to resolve it as soon as possible.",
    },
];

export default function WhyVic() {

    return (
        <>
            <div className=" bg-white flex items-center max-w-7xl mx-auto justify-center py-12 px-6">
                <div className="max-w-7xl w-full  gap-10 items-center">
                    
                    {/* Left Side: Info */}
                    <section className="py-12 bg-white">
                        <div className=" grid grid-cols-1 md:grid-cols-3 gap-15">
                            {/* Left content */}
                            <div className="md:col-span-2 space-y-6">
                                <h2 className="text-4xl  font-bold flex justify-center">WHY WEST VLC ENERGEY?</h2>
                                <img
                                    src="/product-review-badge.png" // Replace with your image path
                                    alt="Product Review Winner"
                                    className="w-72"
                                />
                                <p className="text-lg text-gray-700">
                                    Smart House Solar is 2021 & 2022 Product Review Award Winner Solar Power Company serving in the whole of Queensland and New South Wales.
                                    We have rated 4.8 Stars out of 5 by more than 400+ Queenslanders for enhancing the satisfaction levels of our customers with quality products,
                                    installations, and prompt after-sales service.
                                </p>

                                {/* Features */}
                                <div className="space-y-4">
                                    {features.map((feature, index) => (
                                        <div key={index} className="flex items-start space-x-3">
                                            <div className="text-orange-500 text-2xl">{feature.icon}</div>
                                            <div>
                                                <h4 className="font-semibold text-gray-800 text-xl">{feature.title}</h4>
                                                <p className="text-lg text-gray-600">{feature.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right Side: Form */}
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-8">
                                    Straight from our desk, to your Inbox.
                                </h3>

                                <form className="space-y-4 " >
                                    <input
                                        required
                                        type="text"
                                        placeholder="Your Full Name"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                                    />
                                    <input
                                        required
                                        type="email"
                                        placeholder="Your Email"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                                    />
                                    <input
                                        required
                                        type="text"
                                        placeholder="Mobile Number"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                                    />
                                    <input
                                        required
                                        type="text"
                                        placeholder="Street Address"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                                    />
                                    <input
                                        required
                                        type="text"
                                        placeholder="Post Code"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                                    />

                                    <button
                                        type="submit"
                                        className="w-full bg-gradient-to-r from-orange-300 to-yellow-400 text-black font-bold py-2 rounded-md hover:opacity-90 transition"
                                    >
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                    </section>
                </div>
          </div>
        </>
    )
}