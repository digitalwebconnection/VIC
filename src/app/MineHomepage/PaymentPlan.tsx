"use client";

const steps = [
  {
    number: "01",
    title: "Hassle-Free Process",
    description:
      "Quick, simple online application with no paperwork. We guide you end-to-end.",
    img: "/FlexiblePaymentPlans1.jpg"
  },
  {
    number: "02",
    title: "Fast Decisions",
    description:
      "Get a decision in minutes so you can start enjoying solar benefits sooner.",
    img: "/FlexiblPaymentPlans2.jpg"
  },
  {
    number: "03",
    title: "Repay From Savings",
    description:
      "Repayments begin after install. Let your system pay for itself from bill savings.",
    img: "/FlexiblePaymentPlans3.jpg"
  },
];

export default function PaymentPlan() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">
          Flexible Payment Plans{" "}
          <span className="font-bold">— $0 upfront available*</span>
        </h2>
        <p className="mt-4 text-lg text-teal-600 font-semibold text-center">
          Making solar, batteries, and home upgrades affordable for Victorians
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="relative group overflow-hidden h-96 shadow-md border transition-all duration-300 hover:shadow-xl rounded-lg"
              aria-label={`${step.title}`}
            >
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage:
                    `url(${step.img || "/images/solar-installation.jpg"})`,
                }}
                role="img"
                aria-label="Solar installation on a residential roof"
              />

              {/* Overlay (soft > dark on hover) */}
              <div className="absolute inset-0 bg-white group-hover:bg-black/50 transition-colors duration-500" />

              {/* Content */}
              <div className="relative p-6 flex flex-col h-full text-gray-900 group-hover:text-white">
                <div className="text-teal-800 group-hover:text-teal-300 text-sm font-semibold uppercase tracking-wider">
                  Step
                </div>
                <div className="text-6xl ml-11 -mt-6 font-extrabold text-gray-300/80 select-none group-hover:text-white/30">
                  {step.number}
                </div>
                <h3 className="mt-6 text-2xl font-bold">{step.title}</h3>
                <p className="mt-4 text-base leading-relaxed">{step.description}</p>
                <div className="mt-auto pt-6">
                  <a
                    href="/quote"
                    className="inline-flex items-center justify-center rounded-full bg-yellow-400 px-5 py-2.5 font-semibold text-black hover:bg-orange-600 hover:text-white transition"
                    aria-label="Check $0 upfront eligibility"
                  >
                    Check Eligibility
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Optional CTA strip */}
        <div className="mt-10 rounded-lg bg-blue-900 text-white px-6 py-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-base md:text-lg font-semibold text-center md:text-left">
            Ready to go solar with $0 upfront? Get a quick assessment today.
          </p>
          <div className="mt-4 md:mt-0 flex gap-3">
            <a
              href="/quote"
              className="rounded-full bg-white text-blue-900 px-5 py-2 font-semibold hover:bg-gray-100 transition"
            >
              Get a Free Quote
            </a>
            <a
              href="tel:+61 497 358 063"
              className="rounded-full bg-black text-white px-5 py-2 font-semibold hover:bg-gray-800 transition"
            >
              Call +61 497 358 063
            </a>
          </div>
        </div>

        <p className="mt-4 text-xs text-gray-500 text-center">
          *Finance subject to approval and eligibility. Terms and conditions apply.
        </p>
      </div>
    </section>
  );
}
