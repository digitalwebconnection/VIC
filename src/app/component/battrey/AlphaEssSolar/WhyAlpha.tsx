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

const Header: React.FC<React.PropsWithChildren> = ({ children }) => (
  <h3 className="text-xl md:text-2xl font-extrabold text-gray-900">{children}</h3>
);

export const metadata = {
  title: "Why West Vic Energy Recommends Alpha ESS Batteries",
  description:
    "Backed by West Vic Energy’s expertise, Alpha ESS batteries offer safe LiFePO4 chemistry, smart energy management, reliable backup, and scalable power solutions.",
};

export default function WhyAlpha() {
  return (
    <main className="bg-white text-gray-800">
      <section className="mx-auto max-w-7xl px-6 md:px-0 py-8 md:py-10">
        <div className="rounded-2xl bg-slate-100/80 p-6 md:p-9 ring-1 ring-slate-200 shadow-2xl">
          {/* Heading */}
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-blue-900">
            Why Choose Alpha ESS Solar Battery with West Vic Energy?
          </h1>

          {/* Content */}
          <div className="mt-7 md:mt-8 space-y-7">
            <div className="space-y-2">
              <Header>Safe & Reliable LiFePO<sub>4</sub> Chemistry</Header>
              <ul className="space-y-2">
                <Bullet>
                  Lithium iron phosphate (LiFePO<sub>4</sub>) batteries offer excellent safety, thermal stability, and long lifespan.
                </Bullet>
                <Bullet>
                  Peace of mind with low fire risk and reliable energy storage—perfect for Australian conditions.
                </Bullet>
              </ul>
            </div>

            <div className="space-y-2">
              <Header>Modular, Scalable & Future-Ready</Header>
              <ul className="space-y-2">
                <Bullet>
                  Start with a smaller system and expand as your energy needs grow.  
                </Bullet>
                <Bullet>
                  Flexible design lets households and businesses upgrade capacity without replacing the full system.
                </Bullet>
              </ul>
            </div>

            <div className="space-y-2">
              <Header>Backup Power for Blackouts</Header>
              <ul className="space-y-2">
                <Bullet>
                  Integrated hybrid inverter with seamless backup power (switches in under 20ms).  
                </Bullet>
                <Bullet>
                  Stay powered during grid outages—essential for rural and regional Victoria.
                </Bullet>
              </ul>
            </div>

            <div className="space-y-2">
              <Header>Smart Monitoring & Energy Control</Header>
              <ul className="space-y-2">
                <Bullet>
                  Track your usage in real time with the AlphaCloud app.  
                </Bullet>
                <Bullet>
                  Optimize solar generation, battery charge/discharge, and grid imports for maximum savings.  
                </Bullet>
              </ul>
            </div>

            <div className="space-y-2">
              <Header>Trusted by West Vic Energy Customers</Header>
              <ul className="space-y-2">
                <Bullet>
                  Thousands of Alpha ESS systems installed globally, supported by West Vic Energy’s local expertise.  
                </Bullet>
                <Bullet>
                  Strong product warranties, on-ground support, and proven performance for Australian homes & businesses.  
                </Bullet>
              </ul>
            </div>

            <div className="space-y-2">
              <Header>Sustainable & Cost-Effective</Header>
              <ul className="space-y-2">
                <Bullet>
                  Store excess solar and use it at night—cutting bills and reducing reliance on the grid.  
                </Bullet>
                <Bullet>
                  West Vic Energy ensures professional installation tailored to your energy goals.  
                </Bullet>
              </ul>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="/component/contact"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
            >
              Request a Free Quote
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
              <a href="tel:+61 497 358 063">+61 497 358 063</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
