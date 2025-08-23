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
            Why install solar battery with Solar Miner?
          </h2>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto">
            We will claim the SolarVIC Battery Loan on your behalf and offer you
            the upfront cost of installing a solar battery after SolarVIC Battery
            Loan. Installing a battery can help a typical household save up to{" "}
            <span className="font-semibold">$640 a year.*</span>
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-center">
          <div className="flex flex-col items-center">
            <FaBalanceScale className="text-4xl mb-4 text-white" />
            <h3 className="font-semibold text-xl mb-2">Competitive Pricing</h3>
            <p className="text-gray-300">
              Affordable Pricing with Best Value for Investment.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <FaAward className="text-4xl mb-4 text-white" />
            <h3 className="font-semibold text-xl mb-2">
              Highest Reviewed Award Winner
            </h3>
            <p className="text-gray-300">
              Customer satisfaction is a priority. Top quality service
              guaranteed.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <MdSolarPower className="text-4xl mb-4 text-white" />
            <h3 className="font-semibold text-xl mb-2">
              Customized Solar Solutions
            </h3>
            <p className="text-gray-300">
              Solar solutions that make sense, customized for your property.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <FaCogs className="text-4xl mb-4 text-white" />
            <h3 className="font-semibold text-xl mb-2">
              Hassle free SolarVIC Battery Loan application process
            </h3>
            <p className="text-gray-300">
              Start to End Hassle Free process with quality installation.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <GiSolarPower className="text-4xl mb-4 text-white" />
            <h3 className="font-semibold text-xl mb-2">
              CEC Accredited Installers
            </h3>
            <p className="text-gray-300">
              Quality solar installation with CEC accredited installers.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <FaHeadset className="text-4xl mb-4 text-white" />
            <h3 className="font-semibold text-xl mb-2">
              Exceptional Customer Support
            </h3>
            <p className="text-gray-300">
              Prompt and Hassle-free customer service 24/7.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
