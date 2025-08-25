// app/anker-solix/page.tsx (or replace your current file)
import Image from "next/image";
import { CheckCircle } from "lucide-react";

export const metadata = {
  title: "Anker Solix Solar Battery",
  description:
    "Anker Solix with advanced LiFePO₄ chemistry, modular scalability, fast recharge, all-weather robustness, and smart ecosystem integration.",
};

export default function HeroAnker() {
  return (
    <section className="relative w-full min-h-[520px] md:h-[560px] flex items-center justify-center text-white overflow-hidden">
      {/* Background + overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://www.solarminer.com.au/wp-content/uploads/2025/07/banner-bat-new.jpg"
          alt="Background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/10" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 md:px-25 flex flex-col md:flex-row items-center justify-between z-10">
        {/* Left: Text */}
        <div className="max-w-xl">
          {/* Title ribbon */}
          <span className="inline-block  px-4 py-2 rounded-md">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Anker Solix <span className="font-light">Solar Battery</span>
            </h1>
          </span>

          <ul className="space-y-3 my-6 text-lg">
            {[
              "Advanced LiFePO₄ Chemistry & Longevity",
              "Highly Modular & Scalable Systems",
              "High Power Output & Fast Recharge",
              "All-Weather Operation & Robust Build",
              "Smart Management & Ecosystem Integration",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <CheckCircle className="text-white" size={22} />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="flex gap-4">
            <a
              href="/docs/anker-solix-datasheet.pdf"
              className="bg-white text-red-600 font-semibold px-6 py-3 rounded-full shadow border-2 border-red-500 hover:bg-gray-100 transition"
            >
              Download Datasheet
            </a>
            <a
              href="#contact"
              className="bg-red-600 text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-red-700 transition"
            >
              Request a quote
            </a>
          </div>
        </div>

        {/* Right: Product image */}
        <div className="mt-10 md:mt-0 w-full md:w-auto">
          <Image
            src="https://www.solarminer.com.au/wp-content/uploads/2025/07/anker-img-n.png"
            alt="Anker Solix Battery"
            width={500}
            height={500}
            className="object-contain drop-shadow-2xl"
            priority
          />
        </div>
      </div>
    </section>
  );
}
