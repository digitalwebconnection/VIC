// app/components/FeaturesClassic.tsx
"use client";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

const features = [
  {
    title: "CEC-Accredited Installation",
    description:
      "Installed by Clean Energy Council–accredited electricians with AS/NZS 5033 & 4777 compliance, grid paperwork handled end-to-end.",
    img: "/CommercialSolar1.jpg",
  },
  {
    title: "Government Rebates & STCs",
    description:
      "We optimise federal STC incentives and eligible state programs (VIC/NSW/QLD) to lower your upfront cost from day one.",
    img: "/CommercialSolar4.jpg",
  },
  {
    title: "Heat-Ready Performance",
    description:
      "High-temp-rated panels & inverters with strong coefficients to maintain output through Australian summers.",
    img: "/CommercialSolar2.jpg",
  },
  {
    title: "Cyclone & Bushfire Standards",
    description:
      "Wind-rated mounting and BAL-aware cabling practices for coastal, regional, and bushfire-prone zones.",
    img: "/CommercialSolar3.jpg",
  },
    
];

// Type-safe variants (no string ease)
const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.085, delayChildren: 0.08 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18, scale: 0.995 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] }, // ✅ cubic-bezier easing
  },
};

export default function FeaturesClassic() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="py-20 bg-[#FAFAF8]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Overline */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-xs tracking-[0.2em] uppercase text-slate-500"
        >
          Trusted Solar for Australia
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mt-3 text-4xl md:text-5xl font-serif font-semibold text-slate-900 text-center"
        >
          Considered Features. Classic Engineering.
        </motion.h2>

        {/* Divider */}
        <div className="mx-auto mt-6 mb-12 h-px w-28 bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7"
        >
          {features.map((feature, i) => (
            <motion.article
              key={i}
              variants={item}
              whileHover={prefersReducedMotion ? {} : { y: -4 }} // hover lift
              className="group bg-white/90 backdrop-blur-[1px] border border-slate-200 rounded-2xl p-6 shadow-[0_1px_2px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-all"
            >
              {/* Media */}
              <div className="flex justify-center">
                <motion.img
                  src={feature.img}
                  alt={feature.title}
                  className="w-20 h-20 rounded-full object-cover ring-1 ring-slate-200 shadow-sm"
                  animate={prefersReducedMotion ? {} : { y: [0, -3, 0] }}
                  transition={
                    prefersReducedMotion
                      ? {}
                      : { duration: 4.5, repeat: Infinity, ease: [0.45, 0, 0.55, 1] }
                  }
                />
              </div>

              {/* Content */}
              <h3 className="mt-5 text-lg font-semibold text-slate-900 text-center">
                {feature.title}
              </h3>
              <p className="mt-2 text-[15px] leading-6 text-slate-600 text-center">
                {feature.description}
              </p>

              {/* Button */}
              <div className="mt-5 flex justify-center">
                <motion.a
                  href="#contact"
                  aria-label={`Read more about ${feature.title}`}
                  whileHover={{ scale: 1.02 }}
                  className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-800 hover:bg-slate-900 hover:text-white transition-colors"
                >
                  Read more <ArrowRight className="h-4 w-4" />
                </motion.a>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Trust line */}
        <p className="mt-12 text-center text-sm text-slate-500">
          Fully insured workmanship • Tier-1 panels • Transparent quotes
        </p>
      </div>
    </section>
  );
}
