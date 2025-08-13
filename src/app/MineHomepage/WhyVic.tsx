"use client";
import Image from "next/image";

const features = [
  {
    icon: "✔️",
    title: "Proven Quality Products",
    description:
      "Product and install quality are non-negotiable. We specify trusted Tier-1 panels and reputable inverters only.",
  },
  {
    icon: "💰",
    title: "Competitive, Transparent Pricing",
    description:
      "Fair pricing for premium gear and workmanship—no bait-and-switch. Clear inclusions and exclusions up front.",
  },
  {
    icon: "💳",
    title: "Flexible Finance Options",
    description:
      "$0 upfront options available so you can pay it off from the savings on your energy bills.",
  },
  {
    icon: "⚙️",
    title: "Seamless End-to-End Process",
    description:
      "From design and approvals to installation and aftercare—we handle it all and keep you updated at every step.",
  },
  {
    icon: "🎖️",
    title: "Reliable After-Sales Support",
    description:
      "Dedicated customer care team for warranty queries, monitoring help, and service requests—fast turnaround.",
  },
];

export default function WhyVic() {
  return (
    <div className="bg-white flex items-center justify-center py-12 px-6">
      <div className="max-w-7xl w-full">
        <section className="py-12 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Left content */}
            <div className="md:col-span-2 space-y-6">
              <h2 className="text-4xl font-bold">
                Why <span className="text-[#1f5495]">West VIC Energy</span>?
              </h2>

              <Image
                src="/WhyWestVICEnergy.jpg"
                alt="Why choose West VIC Energy"
                width={308}
                height={288}
                className="w-210 h-90 object-cover rounded-lg shadow-lg"
                priority
              />

              <p className="text-lg text-gray-700">
                West VIC Energy is a Victoria-based solar and battery specialist focused on quality gear,
                compliant installs, and long-term support. Our team delivers neat workmanship, clear
                communication, and real savings for homes and businesses across Melbourne and regional VIC.
              </p>

              {/* Features */}
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="text-orange-500 text-2xl leading-none">{feature.icon}</div>
                    <div>
                      <h3 className="font-semibold text-gray-800 text-xl">{feature.title}</h3>
                      <p className="text-lg text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side: Form */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Straight from our desk to your inbox
              </h3>

              <form className="space-y-4"  onSubmit={(e) => e.preventDefault()}>
                <label className="block">
                  <span className="mb-1 block text-sm font-medium text-gray-700">Full Name</span>
                  <input
                    required
                    name="name"
                    type="text"
                    placeholder="John Smith"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                  />
                </label>

                <label className="block">
                  <span className="mb-1 block text-sm font-medium text-gray-700">Email</span>
                  <input
                    required
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                  />
                </label>

                <label className="block">
                  <span className="mb-1 block text-sm font-medium text-gray-700">Mobile Number</span>
                  <input
                    required
                    name="phone"
                    type="tel"
                    placeholder="04xx xxx xxx"
                    pattern="^[0-9+\-\s()]{7,}$"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                  />
                </label>

                <label className="block">
                  <span className="mb-1 block text-sm font-medium text-gray-700">Street Address</span>
                  <input
                    required
                    name="street"
                    type="text"
                    placeholder="123 Example St"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                  />
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <label className="block">
                    <span className="mb-1 block text-sm font-medium text-gray-700">Suburb</span>
                    <input
                      name="suburb"
                      type="text"
                      placeholder="Your suburb"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-1 block text-sm font-medium text-gray-700">Postcode</span>
                    <input
                      required
                      name="postcode"
                      type="text"
                      placeholder="3000"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                    />
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-400 to-yellow-400 text-white font-semibold py-3 rounded-md hover:opacity-90 transition"
                  aria-label="Submit enquiry to West VIC Energy"
                >
                  Submit
                </button>

                <p className="text-xs text-gray-500">
                  By submitting, you agree to be contacted by West VIC Energy about solar, batteries, or related services.
                </p>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
