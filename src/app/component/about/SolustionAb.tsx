"use client";

import Image from "next/image";
import { Battery, Building2, DollarSign, Leaf, Factory, Sun, Play, Phone } from "lucide-react";

const features = [
  {
    icon: DollarSign,
    title: "High Return On Investment",
    desc: "Right-sized systems, quality hardware, and smart tariffs help maximise long-term savings.",
  },
  {
    icon: Leaf,
    title: "Boost Green Credentials",
    desc: "Cut emissions and meet sustainability targets with on-site clean generation.",
  },
  {
    icon: Factory,
    title: "Industrial Solar Energy",
    desc: "Robust commercial & industrial designs for warehouses, factories, and agribusiness.",
  },
  {
    icon: Sun,
    title: "Scale With New Technologies",
    desc: "Battery storage and EV charging ready—expand when your needs grow.",
  },
];

const SolustionAb = () => {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Title */}
        <div className="text-center mb-12">
          <p className="uppercase text-blue-500 font-semibold tracking-wider text-sm mb-2">
            Solar Energy Solutions
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Produce Your Own Clean Energy & Protect the Environment
          </h2>
        </div>

        {/* Top row: side features + video */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10">
          {/* Left Feature */}
          <div className="flex-1">
            <div className="flex flex-col items-center text-center px-4">
              <div className="w-16 h-16 rounded-full border-2 border-green-600 flex items-center justify-center">
                <Battery className="text-green-600 w-8 h-8" />
              </div>
              <h3 className="mt-3 font-bold text-lg">Battery Storage Solutions</h3>
              <p className="text-gray-500 text-sm mt-1 leading-relaxed max-w-sm">
                Increase self-consumption, reduce grid reliance, and add backup capabilities (model-dependent).
              </p>
            </div>
          </div>

          {/* Center Video Placeholder */}
          <div className="relative flex-1 flex items-center justify-center">
            <div
              className="w-full max-w-[520px] h-[230px] bg-gray-700 rounded-lg flex items-center justify-center z-10 shadow-xl"
              role="img"
              aria-label="Solar installation video placeholder"
            >
              {/* <button
                className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-green-400"
                aria-label="Play video"
                type="button"
              >
                <Play className="text-white w-7 h-7" />
              </button> */}
              <img src="/CommercialSolar1.jpg" alt="" className="h-60 w-full" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center -z-10" aria-hidden="true">
              <div className="w-[480px] h-[250px] bg-blue-600 rounded-lg shadow-lg" />
            </div>
          </div>

          {/* Right Feature */}
          <div className="flex-1">
            <div className="flex flex-col items-center text-center px-4">
              <div className="w-16 h-16 rounded-full border-2 border-green-600 flex items-center justify-center">
                <Building2 className="text-green-600 w-8 h-8" />
              </div>
              <h3 className="mt-3 font-bold text-lg">Commercial Solar Energy</h3>
              <p className="text-gray-500 text-sm mt-1 leading-relaxed max-w-sm">
                End-to-end commercial installs with safety compliance, staging, and minimal downtime.
              </p>
            </div>
          </div>
        </div>

        {/* Feature grid */}
        <section className="py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full border-2 border-green-600 flex items-center justify-center mb-4">
                  <feature.icon className="text-green-600 w-10 h-10" />
                </div>
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-xs">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA banner */}
        <section className="relative my-16">
          <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 rounded-2xl flex flex-col lg:flex-row items-center justify-between p-8 lg:px-10 text-white overflow-hidden">
            {/* Left Content */}
            <div className="max-w-xl">
              <h2 className="text-2xl md:text-4xl font-bold leading-snug">
                Get in touch to discuss how we can help you
              </h2>
              <p className="text-blue-100 mt-2">
                We’re pleased to welcome home owners and businesses across Victoria.
              </p>

              <div className="flex items-center gap-4 mt-6 flex-wrap">
                <a
                  href="/quote"
                  className="bg-amber-400 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition"
                  aria-label="Request a free solar quote from West VIC Energy"
                >
                <a href="/component/contact">  Request a Free Quote</a> 
                </a>

                <a
                  href="tel:+61 497 358 063"
                  className="inline-flex items-center gap-2"
                  aria-label="Call West VIC Energy on +61 497 358 063"
                >
                  <span className="bg-green-600 w-9 h-9 flex items-center justify-center rounded-full">
                    <Phone className="w-5 h-5 text-white" />
                  </span>
                  <span className="font-medium">+61 497 358 063</span>
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative mt-8 lg:mt-0 w-full max-w-[500px] h-[360px] z-10">
              {/* If using this remote image, add its domain to next.config.js -> images.domains */}
              <Image
                src="https://epring.co/wp-content/uploads/2025/03/1.png"
                alt="Technician installing solar panels"
                width={500}
                height={800}
                className="object-contain w-full h-full relative z-10"
                priority={false}
              />
            </div>
          </div>

          {/* Underline accent */}
          <div className="absolute -bottom-2 left-0 right-0 h-4 bg-amber-400 rounded-b-2xl" aria-hidden="true" />
        </section>
      </div>
    </section>
  );
};

export default SolustionAb;
