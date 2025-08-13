"use client";

export default function BackMap() {
  return (
    <section className="relative my-20" aria-label="Australia coverage banner">
      <div
        className="relative bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url('/images/au-map.jpg')",
        }}
        role="img"
        aria-label="Map of Australia showing regions and capitals"
      >
        {/* Dark overlay (doesn't affect content) */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 md:px-0 py-20 md:py-24 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Text */}
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-4xl font-bold leading-tight">
                Make the right move—save more on power bills
              </h2>
              <p className="mt-4 text-lg font-semibold">
                Talk to West VIC Energy before your next electricity bill arrives.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="/quote"
                className="bg-white rounded-2xl text-black font-semibold px-3 py-3 shadow-md hover:bg-gray-100 transition"
                aria-label="Request a free solar quote from West VIC Energy"
              >
                Request a Free Quote
              </a>
              <a
                href="tel:+61 497 358 063"
                className="bg-blue-900 rounded-2xl text-white font-semibold px-8 py-3 shadow-md hover:bg-orange-600 transition"
                aria-label="Call West VIC Energy on 1300 650 747"
              >
                Call +61 497 358 063
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
