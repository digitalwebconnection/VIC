// app/batteries/foxess/details/page.tsx
import { Battery, Cog, Wrench, Monitor } from "lucide-react";

export const metadata = {
  title: "Fox ESS Battery – West Vic Energy",
  description:
    "Discover Fox ESS solar batteries with West Vic Energy. Learn about modular designs, long lifespan, safety features, warranty, and 24/7 monitoring for Australian homes.",
};

export default function FoxEssDetailsPage() {
  return (
    <>
      <main className="min-h-screen bg-white max-w-7xl mx-auto text-gray-800">
        {/* Hero Section */}
        <div className="mx-auto max-w-7xl px-6 py-10 md:py-14">
          <h1 className="text-4xl font-extrabold tracking-tight text-blue-900 md:text-5xl">
            Fox ESS Battery with West Vic Energy
          </h1>

          <div className="mt-6 space-y-6 text-lg leading-8 text-gray-700">
            <p>
              At <strong>West Vic Energy</strong>, we partner with Fox ESS to
              bring Australian households and businesses{" "}
              <strong>reliable, efficient, and future-ready solar batteries</strong>. 
              Built with advanced Lithium Iron Phosphate (LiFePO₄) technology, Fox ESS
              batteries are safe, long-lasting, and perfectly suited for our
              local climate.
            </p>

            <p>
              These batteries allow you to{" "}
              <strong>store excess solar energy</strong>, protect against
              blackouts, and reduce reliance on the grid. With round-trip
              efficiencies above 90%, they maximise your solar investment while
              keeping your power bills low.
            </p>

            <p>
              Fox ESS batteries stand out thanks to their{" "}
              <strong>modular, scalable design</strong>. Whether you need a
              simple entry-level solution or a large capacity system, you can
              easily expand as your energy needs grow. Perfect for both
              residential and light-commercial use.
            </p>

            <p>
              Combined with the Fox app and West Vic Energy’s professional
              installation, you’ll enjoy{" "}
              <strong>real-time monitoring, smart controls</strong>, and full
              visibility of your energy usage — giving you confidence and
              control over your power.
            </p>
          </div>
        </div>

        {/* Battery Models */}
        <div className="mt-10 grid gap-10 md:grid-cols-2 max-w-7xl mx-auto">
          {/* HV2600 Series */}
          <article className="space-y-3">
            <h2 className="text-2xl font-bold text-gray-900">
              1. HV2600 Series (High-Voltage Modular)
            </h2>
            <ul className="list-disc space-y-1 pl-6">
              <li>
                <span className="font-semibold">Type:</span> Stackable lithium
                battery modules
              </li>
              <li>
                <span className="font-semibold">Capacity:</span> 2.56 kWh per
                module
              </li>
              <li>
                <span className="font-semibold">Voltage:</span> High-voltage
                (51.2V nominal per module, series-connected)
              </li>
              <li>
                <span className="font-semibold">Scalability:</span> Up to 7
                modules per system (≈17.9 kWh)
              </li>
              <li>
                <span className="font-semibold">Best for:</span> Households
                looking for space-efficient, expandable storage
              </li>
              <li>
                <span className="font-semibold">Inverter Pairing:</span> H1/H3
                Series Hybrid Inverters
              </li>
            </ul>
            <ul className="space-y-1 pl-1">
              <li>
                ✅ <span className="font-semibold">Pros:</span> Modular, compact,
                high efficiency
              </li>
              <li>
                🚫 <span className="font-semibold">Cons:</span> Indoor only,
                requires external BMS
              </li>
            </ul>
          </article>

          {/* EP Series */}
          <article className="space-y-3">
            <h2 className="text-2xl font-bold text-gray-900">
              2. EP Series (e.g., EP5, EP10, EP11)
            </h2>
            <ul className="list-disc space-y-1 pl-6">
              <li>
                <span className="font-semibold">Type:</span> Standalone
                high-voltage battery
              </li>
              <li>
                <span className="font-semibold">Capacity:</span>
                <ul className="mt-1 list-disc space-y-1 pl-6">
                  <li>EP5: ~4.8 kWh usable</li>
                  <li>EP11: ~9.3–10.4 kWh usable</li>
                </ul>
              </li>
              <li>
                <span className="font-semibold">Scalability:</span> Up to 4
                units in parallel (≈41.6 kWh)
              </li>
              <li>
                <span className="font-semibold">Enclosure:</span> IP65 rated
                (indoor/outdoor), fanless cooling, optional heater
              </li>
              <li>
                <span className="font-semibold">Best for:</span> Larger homes
                needing preassembled storage
              </li>
            </ul>
            <ul className="space-y-1 pl-1">
              <li>
                ✅ <span className="font-semibold">Pros:</span> Weatherproof,
                easy install, no extra racks needed
              </li>
              <li>
                🚫 <span className="font-semibold">Cons:</span> Less flexible
                than modular
              </li>
            </ul>
          </article>

          {/* EC Series */}
          <article className="space-y-3">
            <h2 className="text-2xl font-bold text-gray-900">
              3. EC Series (e.g., EC4800)
            </h2>
            <ul className="list-disc space-y-1 pl-6">
              <li>
                <span className="font-semibold">Type:</span> Compact wall-mount
                battery
              </li>
              <li>
                <span className="font-semibold">Capacity:</span> 4.8 kWh
              </li>
              <li>
                <span className="font-semibold">Enclosure:</span> IP65,
                wall-mountable
              </li>
              <li>
                <span className="font-semibold">Best for:</span> Entry-level
                solar storage
              </li>
            </ul>
            <ul className="space-y-1 pl-1">
              <li>
                ✅ <span className="font-semibold">Pros:</span> Sleek, affordable
              </li>
              <li>
                🚫 <span className="font-semibold">Cons:</span> Limited
                scalability
              </li>
            </ul>
          </article>

          {/* EQ Series */}
          <article className="space-y-3">
            <h2 className="text-2xl font-bold text-gray-900">
              4. EQ Series (New Modular Range)
            </h2>
            <ul className="list-disc space-y-1 pl-6">
              <li>
                <span className="font-semibold">Type:</span> Modular LiFePO₄
                system
              </li>
              <li>
                <span className="font-semibold">Models:</span>
                <ul className="mt-1 list-disc space-y-1 pl-6">
                  <li>EQ2900 (~2.9 kWh)</li>
                  <li>EQ5000 (~5 kWh)</li>
                  <li>EQ7000 (~6.6 kWh)</li>
                </ul>
              </li>
              <li>
                <span className="font-semibold">Scalability:</span> Up to 7–8
                modules per stack
              </li>
              <li>
                <span className="font-semibold">Control Unit:</span> MIRA BMS or
                similar
              </li>
              <li>
                <span className="font-semibold">Best for:</span> Homes needing
                flexible high-voltage storage
              </li>
            </ul>
            <ul className="space-y-1 pl-1">
              <li>
                ✅ <span className="font-semibold">Pros:</span> New design,
                scalable, high performance
              </li>
              <li>
                🚫 <span className="font-semibold">Cons:</span> Needs BMS +
                inverter setup
              </li>
            </ul>
          </article>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-4 py-16 gap-10 text-center">
          {/* Warranty */}
          <div>
            <Battery className="w-12 h-12 mx-auto text-amber-400 mb-4" />
            <h4 className="font-bold">Long Warranty</h4>
            <p className="text-gray-600 mt-2">
              Backed by up to 10 years warranty — peace of mind from West Vic
              Energy & Fox ESS.
            </p>
          </div>

          {/* Battery Type */}
          <div>
            <Cog className="w-12 h-12 mx-auto text-blue-600 mb-4" />
            <h4 className="font-bold">Safe Chemistry</h4>
            <p className="text-gray-600 mt-2">
              Uses cobalt-free LiFePO₄ for stability, safety, and long lifespan.
            </p>
          </div>

          {/* Maintenance */}
          <div>
            <Wrench className="w-12 h-12 mx-auto text-amber-400 mb-4" />
            <h4 className="font-bold">Low Maintenance</h4>
            <p className="text-gray-600 mt-2">
              Designed for everyday reliability with minimal upkeep costs.
            </p>
          </div>

          {/* Monitoring */}
          <div>
            <Monitor className="w-12 h-12 mx-auto text-blue-600 mb-4" />
            <h4 className="font-bold">Smart Monitoring</h4>
            <p className="text-gray-600 mt-2">
              24/7 monitoring through the Fox app to track usage & performance
              in real time.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
