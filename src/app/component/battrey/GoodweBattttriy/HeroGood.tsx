// app/goodwe/page.tsx
import Image from "next/image";
import { CheckCircle } from "lucide-react";

export const metadata = {
  title: "GoodWE Battery",
  description:
    "GoodWE modular battery with safe chemistry, outdoor-ready design, remote diagnostics, and seamless integration.",
};

export default function HeroGoodWE() {
  return (
    <section className="relative w-full min-h-[520px] md:h-[560px] flex items-center justify-center text-white overflow-hidden">
      {/* Background + overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://www.solarminer.com.au/wp-content/uploads/2025/07/banner-bat-new.jpg" // replace with your background image
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
          {/* Title */}
          <span className="inline-block  px-4 py-2 rounded-md">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              GoodWE Battery
            </h1>
          </span>

          <ul className="space-y-3 my-6 text-lg">
            {[
              "Modularity",
              "Safe, reliable chemistry",
              "Tough outdoor-ready design",
              "Easy remote updates & diagnostics",
              "Seamless integration",
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
              href="/docs/goodwe-datasheet.pdf"
              className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow border-2 border-amber-400 hover:bg-gray-100 transition"
            >
              Download Datasheet
            </a>
            <a
              href="#contact"
              className="bg-amber-400 text-black font-semibold px-6 py-3 rounded-full shadow transition"
            >
              Request a quote
            </a>
          </div>
        </div>

        {/* Right: Product image */}
        <div className="mt-10 md:mt-0 w-full md:w-auto">
          <Image
            src="https://www.solarminer.com.au/wp-content/uploads/2025/07/goodwe.png" // replace with your battery image
            alt="GoodWE Battery"
            width={460}
            height={520}
            className="object-contain drop-shadow-2xl"
            priority
          />
        </div>
      </div>
    </section>
  );
}
