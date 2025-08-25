// app/components/GrowattBattery.tsx

import Image from "next/image";
import { CheckCircle } from "lucide-react";

export default function HeroGro() {
  return (
    <section className="relative w-full h-[500px] flex items-center justify-center text-white">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://www.solarminer.com.au/wp-content/uploads/2025/07/banner-bat-new.jpg" // replace with your background image
          alt="Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/20"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto  px-6 md:px-25 flex flex-col md:flex-row items-center justify-between z-10">
        
        {/* Left Text Section */}
        <div className="max-w-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Growatt Battery
          </h2>
          <ul className="space-y-3 mb-6 text-lg">
            {[
              "Modular and Scalable",
              "High Efficiency",
              "All-in-One Options",
              "Smart Monitoring via App",
              "Hybrid Inverter Compatibility",
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <CheckCircle className="text-blue-300" size={22} />
                {item}
              </li>
            ))}
          </ul>

          {/* Buttons */}
          <div className="flex gap-4">
            <a
              href="#"
              className="bg-white text-red-600 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition"
            >
              Download Datasheet
            </a>
            <a
              href="#"
              className="bg-red-600 text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-red-700 transition"
            >
              Request a quote
            </a>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="mt-8 md:mt-0">
          <Image
            src="https://www.solarminer.com.au/wp-content/uploads/2025/07/battery-grow.png" // replace with battery image
            alt="Growatt Battery"
            width={250}
            height={400}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
