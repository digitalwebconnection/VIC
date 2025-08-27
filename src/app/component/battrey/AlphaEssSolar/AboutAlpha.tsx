import React from "react";

const Dot = () => (
  <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-gray-900" />
);

const Bulleted: React.FC<React.PropsWithChildren<{ label: string }>> = ({
  label,
  children,
}) => (
  <li className="flex items-start gap-2">
    <Dot />
    <p className="leading-relaxed">
      <span className="font-semibold">{label}: </span>
      {children}
    </p>
  </li>
);

const Series: React.FC<{
  idx: number;
  title: string;
  children: React.ReactNode;
}> = ({ idx, title, children }) => (
  <div className="space-y-3">
    <h3 className="text-lg md:text-xl font-extrabold text-gray-900">
      {idx}. {title}
    </h3>
    <ul className="space-y-2 text-gray-800">{children}</ul>
  </div>
);

export const metadata = {
  title: "Alpha ESS – Series Specs | West Vic Energy",
  description:
    "Alpha ESS Smile5, Smile-G3, Smile-M5 and Smile-P5 specifications, benefits, warranty, and installation details with West Vic Energy.",
};

export default function AboutAlpha() {
  return (
    <>
      <main className="bg-white text-gray-800">
        <section className="relative mx-auto max-w-7xl px-6 md:px-10 py-12 md:py-16">
          {/* Page Title */}
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-blue-900">
            Alpha ESS Solar Battery with West Vic Energy
          </h1>

          {/* Subheading */}
          <p className="mt-4 text-lg md:text-xl font-semibold text-gray-900">
            Store your solar energy smarter and reduce your electricity bills
            with West Vic Energy’s trusted Alpha ESS solutions.
          </p>

          {/* Intro Quote */}
          <figure className="mt-6 md:mt-8">
            <blockquote className="relative rounded-2xl bg-slate-50 p-6 md:p-8 leading-relaxed text-gray-700">
              <span
                className="absolute -top-5 left-6 text-6xl font-black text-blue-100 select-none"
                aria-hidden
              >
                “
              </span>
              <p>
                Alpha ESS’s Smile Series batteries, installed by{" "}
                <strong>West Vic Energy</strong>, provide the perfect balance of
                modularity, safety, smart inverter integration, and cost
                efficiency. The ideal solution for Australians seeking
                independence from rising energy costs.
              </p>
              <span
                className="absolute -bottom-8 right-6 text-6xl font-black text-blue-100 select-none"
                aria-hidden
              >
                ”
              </span>
            </blockquote>
          </figure>

          {/* Body Copy */}
          <div className="prose prose-slate max-w-none mt-6">
            <p>
              At <strong>West Vic Energy</strong>, we specialise in bringing the
              best solar battery technologies to Australian homes and
              businesses. Alpha ESS is a global leader in renewable storage, and
              together we deliver battery solutions that combine{" "}
              <strong>cutting-edge performance, safety, and affordability</strong>.
            </p>

            <p>
              Alpha ESS systems feature modular designs with capacity ranging
              from <strong>4 kWh up to 60 kWh</strong>. This makes them
              suitable for both small residential homes and larger commercial
              sites. With West Vic Energy, you can scale your storage as your
              energy needs evolve.
            </p>

            <h2>Why Choose Alpha ESS with West Vic Energy?</h2>
            <p>
              Our partnership ensures you get more than just a battery — you get
              a complete solution. Every installation comes with:
            </p>
            <ul className="list-disc pl-6">
              <li>CEC-accredited installers for peace of mind</li>
              <li>
                Expert local support from a trusted Australian-owned company
              </li>
              <li>Access to rebates and government incentives</li>
              <li>
                Future-ready systems that integrate with smart homes and EVs
              </li>
            </ul>

            <h2>Best Alpha ESS Batteries in Australia</h2>
            <p>
              Alpha ESS batteries deliver over <strong>90% efficiency</strong>{" "}
              and a remarkable cycle life of <strong>6,000+ cycles</strong>. With
              West Vic Energy’s professional setup, you can enjoy backup power
              during outages, seamless solar integration, and long-term savings.
            </p>
          </div>
        </section>

        {/* Top grid: four series */}
        <section className="mx-auto max-w-7xl px-6 md:px-0 py-12 md:py-16">
          <div className="grid md:grid-cols-2 gap-10 md:gap-14">
            <Series idx={1} title="SMILE5 Series">
              <Bulleted label="Battery Modules">
                <strong>2.9 – 13.3 kWh</strong> options.
              </Bulleted>
              <Bulleted label="System Capacity">
                Expandable up to <strong>80 kWh</strong>.
              </Bulleted>
              <Bulleted label="Inverter">5 kW single-phase hybrid.</Bulleted>
              <Bulleted label="Features">
                UPS backup, modular design, 24/7 monitoring via AlphaCloud.
              </Bulleted>
            </Series>

            <Series idx={2} title="SMILE-G3 Series">
              <Bulleted label="Battery Modules">
                <strong>4.0 kWh</strong> and <strong>10.1 kWh</strong>.
              </Bulleted>
              <Bulleted label="Capacity">
                Expandable up to <strong>60.5 kWh</strong>.
              </Bulleted>
              <Bulleted label="Inverter">Integrated hybrid inverter.</Bulleted>
              <Bulleted label="Features">
                Great for off-grid living, home energy management.
              </Bulleted>
            </Series>

            <Series idx={3} title="SMILE-M5 Series">
              <Bulleted label="Battery Modules">
                <strong>5 kWh</strong> per module.
              </Bulleted>
              <Bulleted label="Design">Stackable & modular.</Bulleted>
              <Bulleted label="Features">
                Fire suppression, <strong>200% overload</strong> capacity, quiet
                operation under 35 dB.
              </Bulleted>
            </Series>

            <Series idx={4} title="SMILE-P5 Series">
              <Bulleted label="Battery Modules">
                Configurable based on site needs.
              </Bulleted>
              <Bulleted label="Capacity">Expandable solutions.</Bulleted>
              <Bulleted label="Features">
                Tailored for commercial and large-scale applications.
              </Bulleted>
            </Series>
          </div>

          {/* Divider */}
          <hr className="my-12 border-slate-200" />

          {/* Bottom Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="flex flex-col items-start gap-3">
                            {/* Warranty icon */}
                            <svg viewBox="0 0 24 24" className="h-12 w-12 text-amber-400" fill="none" stroke="currentColor" strokeWidth="1.6">
                                <path d="M6 4h12a1 1 0 011 1v9.5a6.5 6.5 0 11-14 0V5a1 1 0 011-1z" />
                                <path d="M9 8h6M9 11h6M12 21a6.5 6.5 0 006.5-6.5" />
                            </svg>
                            <h4 className="text-lg font-bold">Warranty duration</h4>
                            <p className="text-gray-700">10 years (standard) or 5 years (selected series)</p>
                        </div>

                        <div className="flex flex-col items-start gap-3">
                            {/* Battery type icon */}
                            <svg viewBox="0 0 24 24" className="h-12 w-12 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.6">
                                <rect x="3" y="7" width="16" height="10" rx="2" />
                                <rect x="19" y="10" width="2" height="4" />
                                <path d="M6.5 17l3-5 2 3 2-4 2 6" />
                            </svg>
                            <h4 className="text-lg font-bold">Battery type</h4>
                            <p className="text-gray-700">Cobalt‑free LiFePO<sub>4</sub> lithium‑ion</p>
                        </div>

                        <div className="flex flex-col items-start gap-3">
                            {/* Low maintenance icon */}
                            <svg viewBox="0 0 24 24" className="h-12 w-12 text-amber-400" fill="none" stroke="currentColor" strokeWidth="1.6">
                                <circle cx="12" cy="12" r="9" />
                                <path d="M8 12h8M12 8v8" />
                            </svg>
                            <h4 className="text-lg font-bold">Low Maintenance</h4>
                            <p className="text-gray-700">Low maintenance solar battery with high performance and affordable prices.</p>
                        </div>

                        <div className="flex flex-col items-start gap-3">
                            {/* 24/7 monitoring icon */}
                            <svg viewBox="0 0 24 24" className="h-12 w-12 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.6">
                                <rect x="3" y="4" width="18" height="14" rx="2" />
                                <path d="M7 18v2h10v-2M6 9h7m2 0h3M6 12h5m2 0h5M6 15h3m2 0h7" />
                            </svg>
                            <h4 className="text-lg font-bold">24/7 Monitoring</h4>
                            <p className="text-gray-700">A user‑friendly interface allows for 24‑hour monitoring to track real‑time data and performance.</p>
                        </div>
                    </div>
        </section>
      </main>
    </>
  );
}
