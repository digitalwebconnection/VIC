// app/components/WhySolarBattery.tsx
import { FaBalanceScale, FaAward, FaHeadset, FaCogs } from "react-icons/fa";
import { MdSolarPower } from "react-icons/md";
import { GiSolarPower } from "react-icons/gi";

export default function SolarBattery() {
  return (
    <section className="relative bg-[#0A2A57] text-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose a Solar Battery with West Vic Energy?
          </h2>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto">
            At <span className="font-semibold">West Vic Energy</span>, we make
            solar battery storage simple, affordable, and future-ready. 
            By pairing your solar system with a battery, you can store excess 
            energy, reduce your reliance on the grid, and enjoy lower power bills 
            for years to come.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-center">
          <div className="flex flex-col items-center">
            <FaBalanceScale className="text-4xl mb-4 text-white" />
            <h3 className="font-semibold text-xl mb-2">Affordable & Transparent</h3>
            <p className="text-gray-300">
              Get the best value for your money with clear, upfront pricing
              and no hidden costs.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <FaAward className="text-4xl mb-4 text-white" />
            <h3 className="font-semibold text-xl mb-2">Trusted & Reliable</h3>
            <p className="text-gray-300">
              West Vic Energy is a trusted solar provider with a strong
              reputation across Victoria for quality and reliability.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <MdSolarPower className="text-4xl mb-4 text-white" />
            <h3 className="font-semibold text-xl mb-2">Smart Energy Solutions</h3>
            <p className="text-gray-300">
              Tailored solar + battery systems designed specifically for your
              household or business needs.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <FaCogs className="text-4xl mb-4 text-white" />
            <h3 className="font-semibold text-xl mb-2">Seamless Installation</h3>
            <p className="text-gray-300">
              From consultation to installation, our experts handle the
              entire process so you can sit back and relax.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <GiSolarPower className="text-4xl mb-4 text-white" />
            <h3 className="font-semibold text-xl mb-2">CEC Accredited Installers</h3>
            <p className="text-gray-300">
              We only use Clean Energy Council accredited installers for safe,
              compliant, and efficient systems.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <FaHeadset className="text-4xl mb-4 text-white" />
            <h3 className="font-semibold text-xl mb-2">Local Customer Support</h3>
            <p className="text-gray-300">
              Friendly and responsive support from a local Victorian team 
              that’s always here when you need us.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
