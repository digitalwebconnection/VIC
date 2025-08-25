import React from "react";

const Check: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={"h-5 w-5 text-blue-700 flex-shrink-0 " + (className || "")}
    aria-hidden
  >
    <path d="M2.25 12a9.75 9.75 0 1119.5 0 9.75 9.75 0 01-19.5 0zm14.03-2.78a.75.75 0 10-1.06-1.06l-4.97 4.97-1.94-1.94a.75.75 0 10-1.06 1.06l2.47 2.47a1.5 1.5 0 002.12 0l5.44-5.44z" />
  </svg>
);

const Bullet: React.FC<
  React.PropsWithChildren<{ note?: string }>
> = ({ children, note }) => (
  <li className="flex gap-3 text-gray-800 leading-relaxed">
    <Check />
    <div>
      <span>{children}</span>
      {note ? (
        <p className="mt-1 pl-6 text-[15px] text-gray-600">{note}</p>
      ) : null}
    </div>
  </li>
);

export const metadata = {
  title: "Why Choose Anker Solix Solar Battery?",
  description:
    "Fast charging & <20 ms switchover, safe LiFePO₄ chemistry, modular scalability, all-weather design, and smart energy optimization.",
};



export default function WhyAnker() {
  return (
    <>
      <main className="bg-white text-gray-800">
        <section className="mx-auto max-w-7xl px-6 md:px-0 py-8 md:py-10">
          <div className="rounded-2xl bg-slate-100/80 p-6 md:p-8 ring-1 ring-slate-200 shadow-2xl">
            <h1 className="text-[28px] md:text-4xl font-extrabold tracking-tight text-red-600">
              Why Choose Anker Solix Solar Battery?
            </h1>

            {/* Group 1 */}
            <div className="mt-6">
              <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                High Performance &amp; Fast Charging
              </h3>
              <ul className="mt-2 space-y-3">
                <Bullet>Up to <strong>6 kW continuous output</strong> (per X1 unit)</Bullet>
                <Bullet>
                  <span>&lt;<strong>20 ms</strong> switchover time</span>
                  note= during power outages&quot;
                </Bullet>
                <Bullet
                  note="This ensures you have reliable energy when you need it most."
                >
                  Fast recharging via solar or AC power
                </Bullet>

              </ul>
            </div>

            {/* Group 2 */}
            <div className="mt-7">
              <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                Safe &amp; Long-Lasting LFP Battery Chemistry
              </h3>
              <p className="mt-1 text-gray-700">
                Anker SOLIX uses <strong>Lithium Iron Phosphate (LiFePO₄)</strong>{" "}
                batteries—offering:
              </p>
              <ul className="mt-2 space-y-3">
                <Bullet>Up to <strong>6,000 charge cycles</strong></Bullet>
                <Bullet>Lower fire risk</Bullet>
                <Bullet note="This means a safer, more durable system for long-term energy use.">
                  Excellent <strong>thermal stability</strong>
                </Bullet>
              </ul>
            </div>

            {/* Group 3 */}
            <div className="mt-7">
              <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                Highly Modular &amp; Scalable
              </h3>
              <p className="mt-1 text-gray-700">
                The <strong>SOLIX X1 Home System</strong> can grow with your needs:
              </p>
              <ul className="mt-2 space-y-3">
                <Bullet>
                  Start with <strong>5–30 kWh</strong>, scale up to{" "}
                  <strong>180 kWh</strong>
                </Bullet>
                <Bullet>Mix new and old battery modules (future-proofed design)</Bullet>
                <Bullet>Ideal for small homes to large buildings</Bullet>
              </ul>
            </div>

            {/* Group 4 */}
            <div className="mt-7">
              <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                All-Weather &amp; Outdoor Ready
              </h3>
              <ul className="mt-2 space-y-3">
                <Bullet>
                  <strong>IP66-rated:</strong> Resists dust, rain, and harsh conditions
                </Bullet>
                <Bullet>
                  Operates from <strong>−20 °C to +55 °C</strong>
                </Bullet>
                <Bullet>
                  Perfect for both <strong>indoor and outdoor</strong> installations
                </Bullet>
              </ul>
            </div>

            {/* Group 5 */}
            <div className="mt-7">
              <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                Smart Monitoring &amp; Energy Optimization
              </h3>
              <ul className="mt-2 space-y-3">
                <Bullet>
                  Control via the <strong>Anker SOLIX app</strong>
                </Bullet>
                <Bullet>
                  Features like <strong>Storm Guard</strong>, off-grid mode, and
                  time-of-use scheduling
                </Bullet>
                <Bullet>
                  Integrates with <strong>solar panels, EV chargers, and more</strong>
                </Bullet>
              </ul>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-red-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
              >
                Get Expert Advice
              </a>

              <div className="inline-flex items-center gap-3 rounded-full border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-blue-900 shadow-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                  aria-hidden
                >
                  <path d="M2.25 5.25a2 2 0 012-2h3.108a2 2 0 011.94 1.515l.72 2.878a2 2 0 01-.5 1.923l-1.35 1.35a16.5 16.5 0 007.425 7.425l1.35-1.35a2 2 0 011.923-.5l2.878.72a2 2 0 011.515 1.94V19.75a2 2 0 01-2 2H18.75C10.41 21.75 2.25 13.59 2.25 5.25v0z" />
                </svg>
              +91 99740 61521
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
