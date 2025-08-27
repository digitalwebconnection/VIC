// app/goodwe/why/page.tsx
// Next.js (App Router) + Tailwind CSS page for West Vic Energy – Why Choose GoodWe Battery?

import React from "react";

// Small check icon
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

const Group: React.FC<
  React.PropsWithChildren<{ title: string | React.ReactNode }>
> = ({ title, children }) => (
  <div className="space-y-3">
    <h3 className="text-xl md:text-2xl font-extrabold text-gray-900">
      {title}
    </h3>
    <ul className="space-y-2">{children}</ul>
  </div>
);

export const metadata = {
  title: "Why Choose GoodWe Battery? | West Vic Energy",
  description:
    "Discover why West Vic Energy recommends GoodWe batteries – modular storage, safe LiFePO4 chemistry, seamless inverter integration, IP65 outdoor rating, and smart monitoring.",
};

export default function WhyGoodBt() {
  return (
    <main className="bg-white text-gray-800">
      <section className="mx-auto max-w-7xl px-6 md:px-0 py-8 md:py-10">
        <div className="rounded-2xl bg-slate-100/80 p-6 md:p-9 ring-1 ring-slate-200 shadow-2xl">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-blue-900">
            Why Choose GoodWe Battery with West Vic Energy?
          </h1>
          <p className="mt-4 text-lg text-gray-700 max-w-3xl">
            At <strong>West Vic Energy</strong>, we believe every Australian
            family deserves reliable, future-proof energy storage. That’s why we
            recommend <strong>GoodWe batteries</strong> – a smart, safe and
            scalable choice for households and businesses who want to cut costs
            and gain energy independence.
          </p>

          <div className="mt-7 md:mt-8 space-y-7">
            <Group title="Modular & Scalable Storage">
              <Bullet>
                Start from just <strong>5.4 kWh</strong> and expand up to{" "}
                <strong>32.4 kWh</strong> (Lynx U) or even higher with the HV
                series.
              </Bullet>
              <Bullet>
                West Vic Energy helps you size your system to match your energy
                use – <strong>grow as your needs grow</strong>.
              </Bullet>
            </Group>

            <Group
              title={
                <span>
                  Safe & Long-Lasting (LiFePO<sub>4</sub> Chemistry)
                </span>
              }
            >
              <Bullet>
                Built with <strong>lithium iron phosphate (LFP)</strong> – the
                industry’s safest and most stable battery technology.
              </Bullet>
              <Bullet>
                Over <strong>6,000 charge cycles</strong>, delivering more than{" "}
                <strong>15 years</strong> of dependable use.
              </Bullet>
            </Group>

            <Group title="Seamless Integration with GoodWe Inverters">
              <Bullet>
                Engineered to work perfectly with GoodWe’s hybrid inverters (ES,
                EM, ET series).
              </Bullet>
              <Bullet>
                <strong>Ultra-fast backup switching (&lt;10 ms)</strong> – keep
                the lights on even during grid blackouts.
              </Bullet>
            </Group>

            <Group title="Outdoor-Ready & Hassle-Free Install">
              <Bullet>
                Rated <strong>IP65</strong> – install safely outdoors, in
                garages or utility spaces.
              </Bullet>
              <Bullet>
                West Vic Energy ensures a smooth setup with{" "}
                <strong>auto module recognition</strong> and{" "}
                <strong>auto-restart features</strong>.
              </Bullet>
            </Group>

            <Group title="Smart Monitoring & Support">
              <Bullet>
                Track your energy in real-time with the{" "}
                <strong>GoodWe SEMS App</strong>.
              </Bullet>
              <Bullet>
                Remote updates & diagnostics ={" "}
                <strong>fewer service visits, more peace of mind</strong>.
              </Bullet>
            </Group>
          </div>

          {/* CTAs */}
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
              +91 99740 61521
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
