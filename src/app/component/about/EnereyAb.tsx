/* eslint-disable @next/next/no-img-element */
"use client";

// import Image from "next/image";
import { BadgeCheck } from "lucide-react";

const EnereyAb = () => {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-0">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* LEFT CONTENT */}
        <div>
          {/* Overline */}
          <p className="uppercase text-blue-600 font-semibold tracking-wide text-sm">
            Welcome to West VIC Energy
          </p>

          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2 leading-tight">
            Smarter Solar & Battery Solutions  Built for Victorian Homes
          </h2>

          {/* Description */}
          <p className="text-gray-600 mt-4 text-base leading-relaxed">
            At <span className="font-semibold text-gray-900">West VIC Energy</span>, we make switching
            to clean energy simple and affordable. From tailored solar designs and CEC-accredited
            installation to ongoing monitoring and support, we deliver systems that cut your bills,
            protect you from rising energy costs, and keep your home powered day and night.
            <br className="hidden sm:block" />
            <span className="font-medium text-gray-800">
              Transparent pricing, local expertise, and trusted workmanship—your energy future starts here.
            </span>
          </p>

          {/* Signature */}
          <div className="mt-6">
            <h4 className="text-lg font-bold text-gray-900">The West VIC Energy Team</h4>
            <p className="text-gray-500 text-sm">Your Local Solar & Battery Specialists</p>
          </div>

          {/* Call to Actions */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a
              href="/component/contact"
              className="inline-flex justify-center items-center rounded-full bg-blue-900 px-6 py-3 font-semibold text-white hover:bg-blue-800 transition"
              aria-label="Request a free solar quote from West VIC Energy"
            >
              Request a Free Quote
            </a>
            <a
              href="tel:+61 497 358 063"
              className="inline-flex justify-center items-center rounded-full bg-black px-6 py-3 font-semibold text-white hover:bg-gray-800 transition"
              aria-label="Call West VIC Energy on +61 497 358 063"
            >
              Call +61 497 358 063
            </a>
          </div>
        </div>


        {/* RIGHT IMAGES */}
        <div className="relative flex justify-center md:justify-end">
          {/* Large image block */}
          <div
            className="relative bg-gray-700 w-[80%] md:w-[30rem] h-48 md:h-72 rounded-xl overflow-hidden shadow"
            aria-hidden="true"
          >
            {/* Use local image if possible: /public/images/crew-main.jpg */}
            <img
              src="/2.jpg"
              alt="West VIC Energy installation crew on a rooftop"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Small overlay image */}
          <div
            className="absolute -bottom-18 left-2 md:left-10 bg-gray-300 w-40 md:w-56 h-44 md:h-68 rounded-xl overflow-hidden shadow"
            aria-hidden="true"
          >
            {/* Use local image if possible: /public/images/crew-secondary.jpg */}
            <img
              src="/1.jpg"
              alt="Close-up of solar panel installation"
              className="w-full h-full object-cover "
              loading="lazy"
            />
          </div>

          {/* Badge */}
          <div className="absolute -bottom-25 right-0 bg-yellow-400 text-blue-900 flex items-center gap-2 px-5 py-3 rounded-xl shadow-lg">
            <BadgeCheck size={22} />
            <div>
              <p className="text-base font-bold leading-tight">CEC-Accredited</p>
              <p className="text-sm leading-tight">Installers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnereyAb;
