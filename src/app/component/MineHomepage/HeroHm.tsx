"use client";
import Image from "next/image"; // (not used in A, but fine to keep)

export default function HeroHm() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat min-h-[380px]"
      style={{ backgroundImage: "url('/images/mainhero.jpg')" }}
    >
      {/* blue/black tint to “lower opacity” of the bg image */}
      <div className="absolute inset-0 bg-[#17185d]/60" />

      <div className="relative z-10  px-4 mx-auto max-w-7xl  pt-80">
        <a href="/component/contact" className="inline-block bg-amber-400 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition">
          Request a Quote
        </a>
      </div>
    </section>
  );
}
