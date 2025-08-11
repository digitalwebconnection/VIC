"use client";

import { useEffect, useState } from "react";

type Testimonial = {
    quote: string;
    name: string;
    role: string;
};

const TESTIMONIALS: Testimonial[] = [
    {
        quote:
            "Cut down on all your work by collaborating with our Launch Pad team to get the framework of your online business up and running in no time.",
        name: "Thomas Walkar",
        role: "sustainable energy owner",
    },
    { quote: "Energix transformed our rollout—shorter timelines and better ROI.", name: "Alisha Verma", role: "solar solutions architect" },
    { quote: "From consultation to commissioning, they delivered exactly as promised.", name: "Marco Silvestri", role: "eco-resort director" },
    { quote: "We cut our carbon footprint without blowing the budget.", name: "Grace Njoroge", role: "operations lead" },
    { quote: "Fast, friendly, and super knowledgeable. Using them for phase II.", name: "Yuta Nakamura", role: "plant manager" },
    { quote: "Top-notch service from feasibility study to final inspection.", name: "Isabella Sánchez", role: "infrastructure head" },
];
const CircalAb = () => {
    const [active, setActive] = useState(0);

    /* --- layout constants to mirror the screenshot --- */
    const DOTS: number = 6;         // exactly six nodes around the arc
    const START_DEG = -40;          // top-right
    const END_DEG = 40;             // bottom-right
    const BIG_SIZE = 550;           // dark circle size (px)
    // const RING_SIZE = 780;          // faint ring diameter (px)
    const RADIUS = 380;             // distance from center to dot centers (px)

    // autoplay like the mock’s carousel feel (optional)
    useEffect(() => {
        const id = setInterval(
            () => setActive((i) => (i + 1) % TESTIMONIALS.length),
            5000
        );
        return () => clearInterval(id);
    }, []);

    return (
        <section className="py-24 px-4 bg-white">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-30 items-center">
                {/* LEFT: circle + arc + dots */}
                <div className="relative flex justify-center lg:justify-end -ml-10 lg:-ml-20">
                    {/* big dark circle */}
                    <div
                        className="rounded-full bg-neutral-700"
                        style={{ width: BIG_SIZE, height: BIG_SIZE }}
                    />

                    {/* faint half-ring behind */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        {/* <div
              className="rounded-full border-[10px] border-black/5"
              style={{
                width: RING_SIZE,
                height: RING_SIZE,
                // show only the right half of the ring
                clipPath: "inset(0 0 0 50%)",
              }}
            /> */}
                    </div>

                    {/* dots on the right semicircle */}
                    {Array.from({ length: DOTS }).map((_, i) => {
                        const t = DOTS === 1 ? 0.5 : i / (DOTS - 1); // 0..1
                        const deg = START_DEG + t * (END_DEG - START_DEG);
                        const rad = (deg * Math.PI) / 180;
                        const x = Math.cos(rad) * RADIUS;
                        const y = Math.sin(rad) * RADIUS;

                        // which testimonial this dot maps to
                        const mappedIndex = i % TESTIMONIALS.length;
                        const isActive = mappedIndex === active;

                        const size = isActive ? 64 : 56; // 16 vs 14 tailwind (w-16/h-16 & w-14/h-14)

                        return (
                            <button
                                key={i}
                                onClick={() => setActive(mappedIndex)}
                                className={`absolute rounded-full transition
                  ${isActive ? "bg-orange-600" : "bg-neutral-500 hover:bg-neutral-400"}`}
                                style={{
                                    width: size,
                                    height: size,
                                    left: `calc(50% + ${x}px - ${size / 2}px)`,
                                    top: `calc(50% + ${y}px - ${size / 2}px)`,
                                }}
                                aria-label={`Show testimonial ${mappedIndex + 1}`}
                            />
                        );
                    })}
                </div>

                {/* RIGHT: text block */}
                <div>
                    <p className="text-[11px] sm:text-xs font-bold tracking-[0.18em] text-orange-500">
                        TESTIMONIALS
                    </p>
                    <div className="w-14 h-[3px] bg-orange-500 mt-2 mb-6" />
                    <h2 className="text-4xl sm:text-5xl font-extrabold mb-8">
                        Client’s Reviews
                    </h2>

                    <p className="text-gray-600 text-xl leading-relaxed mb-10 max-w-2xl">
                        {TESTIMONIALS[active].quote}
                    </p>

                    <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-full bg-blue-900 grid place-content-center text-white">
                            {/* quote mark */}
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17a4 4 0 01-4-4V5a2 2 0 012-2h5m7 14a4 4 0 01-4-4V5a2 2 0 012-2h5" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-2xl font-extrabold">{TESTIMONIALS[active].name}</p>
                            <p className="text-sm text-gray-500">{TESTIMONIALS[active].role}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CircalAb