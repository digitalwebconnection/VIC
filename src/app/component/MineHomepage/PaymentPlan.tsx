"use client";

const steps = [
  {
    number: "01",
    title: "Hassle-Free Process",
    description:
      "Quick and simple Online Application with No Paperwork involved.",
  },
  {
    number: "02",
    title: "Fast Decisions",
    description:
      "Get decisions in minutes so you can start enjoying the benefits of solar from West Vic Energy as early as possible.",
  },
  {
    number: "03",
    title: "Repay from your savings",
    description:
      "Repayment starts only after your West Vic Energy system is installed. Your system pays for itself from the savings on your electricity bills.",
  },
];

export default function PaymentPlan() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">
         Solar Made Simple with Easy Payments
          <span className="text-black font-bold">
            {" "}
            {/* * $0 upfront option also available. */}
          </span>
        </h2>
        <p className="mt-4 text-lg text-blue-500 font-semibold text-center">
          Making solar, battery, and home improvements affordable for Victorians
          & Queenslanders with West Vic Energy
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-15">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group overflow-hidden h-94 shadow-md border transition-all duration-300 hover:shadow-xl"
            >
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage:
                    "url('https://media.istockphoto.com/id/1405880267/photo/two-engineers-installing-solar-panels-on-roof.jpg?s=612x612&w=0&k=20&c=OvQDbJaTnMM4jPfIA3y5vrO88i98NZJRahZtnYFZCq0=')",
                }}
              ></div>

              {/* White overlay that fades out on hover */}
              <div className="absolute inset-0 bg-gray-100 opacity-100 group-hover:opacity-0 hover:bg-[rgba(7,7,2,0.9)] transition-opacity duration-500"></div>

              {/* Content */}
              <div
                className="relative p-6 flex flex-col h-full text-gray-900 hover:text-white hover:bg-black/60"
                style={{ fontFamily: "Poppins", opacity: 0.9 }}
              >
                <div className="text-amber-400 text-xl font-semibold">Step</div>
                <div className="text-6xl ms-11 -mt-10 font-extrabold text-gray-200 select-none">
                  {step.number}
                </div>
                <h3 className="mt-6 text-2xl font-bold">{step.title}</h3>
                <p className="mt-4 text-lg">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
