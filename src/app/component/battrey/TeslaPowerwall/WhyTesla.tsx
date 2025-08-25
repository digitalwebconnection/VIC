import React from "react";


const Check: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden
    className={"h-5 w-5 text-blue-700 flex-shrink-0 " + (className || "")}
  >
    <path d="M2.25 12a9.75 9.75 0 1119.5 0 9.75 9.75 0 01-19.5 0zm14.03-2.78a.75.75 0 10-1.06-1.06l-4.97 4.97-1.94-1.94a.75.75 0 10-1.06 1.06l2.47 2.47a1.5 1.5 0 002.12 0l5.44-5.44z" />
  </svg>
);


const Bullet: React.FC<React.PropsWithChildren> = ({ children }) => (
  <li className="flex gap-3 text-gray-800 leading-relaxed">
    <Check />
    <span>{children}</span>
  </li>
);


export const metadata = {
  title: "Why Choose Tesla Solar Battery?",
  description:
    "High energy capacity, integrated inverter, smart app control, seamless Tesla ecosystem integration, and OTA updates.",
};

export default function WhyTesla() {
  return (
    <>
      <main className="bg-white text-gray-800">
        <section className="mx-auto max-w-7xl px-6 md:px-0 py-8 md:py-10">
          <div className="rounded-2xl bg-slate-100/80 p-6 md:p-9 ring-1 ring-slate-200 shadow-2xl">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-blue-900">Why Choose Tesla Solar Battery?</h1>

            <div className="mt-7 md:mt-8 space-y-6">
              <div className="space-y-1">
                <h3 className="text-xl md:text-2xl font-extrabold text-gray-900">High Energy Capacity &amp; Power Output</h3>
                <ul className="space-y-2">
                  <Bullet>
                    With about <strong>13.5 kWh</strong> usable storage and up to <strong>11.5 kW</strong> continuous power (Powerwall 3), Tesla batteries can power most household needs—even during outages.
                  </Bullet>
                </ul>
              </div>

              <div className="space-y-1">
                <h3 className="text-xl md:text-2xl font-extrabold text-gray-900">Integrated Inverter &amp; Easy Installation</h3>
                <ul className="space-y-2">
                  <Bullet>
                    Tesla Powerwall includes a built‑in inverter, simplifying installation and reducing extra equipment and costs.
                  </Bullet>
                </ul>
              </div>

              <div className="space-y-1">
                <h3 className="text-xl md:text-2xl font-extrabold text-gray-900">Smart Energy Management &amp; App Control</h3>
                <ul className="space-y-2">
                  <Bullet>
                    The Tesla app lets you monitor, control, and optimize energy usage in real time, helping you save money and maximize solar use.
                  </Bullet>
                </ul>
              </div>

              <div className="space-y-1">
                <h3 className="text-xl md:text-2xl font-extrabold text-gray-900">Seamless Integration with Tesla Ecosystem</h3>
                <ul className="space-y-2">
                  <Bullet>
                    Works smoothly with Tesla Solar Roof and EV chargers for a comprehensive, clean‑energy home solution.
                  </Bullet>
                </ul>
              </div>

              <div className="space-y-1">
                <h3 className="text-xl md:text-2xl font-extrabold text-gray-900">Regular Over‑the‑Air Software Updates</h3>
                <ul className="space-y-2">
                  <Bullet>
                    Keeps your system updated with new features and improvements automatically, future‑proofing your investment.
                  </Bullet>
                </ul>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm  focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
              >
                Get Expert Advice
              </a>

              <div className="inline-flex items-center gap-3 rounded-full border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-blue-900 shadow-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                  className="h-5 w-5"
                >
                  <path d="M2.25 5.25a2 2 0 012-2h3.108a2 2 0 011.94 1.515l.72 2.878a2 2 0 01-.5 1.923l-1.35 1.35a16.5 16.5 0 007.425 7.425l1.35-1.35a2 2 0 011.923-.5l2.878.72a2 2 0 011.515 1.94V19.75a2 2 0 01-2 2H18.75C10.41 21.75 2.25 13.59 2.25 5.25v0z" />
                </svg>
               <a href="tel:+61 497 358 063">   +61 497 358 063</a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
