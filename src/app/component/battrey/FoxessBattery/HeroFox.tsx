// app/foxess/page.tsx
import Image from "next/image";
import { CheckCircle } from "lucide-react";

export const metadata = {
  title: "Foxess Battery",
  description: "Modular & scalable battery with app monitoring and hybrid compatibility.",
};

export default function HeroFox() {
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
          {/* Blue ribbon title */}
          <span className="inline-block  px-4 py-2 rounded-md">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Foxess Battery
            </h1>
          </span>

          <ul className="space-y-3 my-6 text-lg">
            {[
              "Modular and Scalable",
              "High Efficiency",
              "All-in-One Options",
              "Smart Monitoring via App",
              "Hybrid Inverter Compatibility",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <CheckCircle className="text-blue-300" size={22} />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="flex gap-4">
            <a
              href="/docs/foxess-datasheet.pdf"
              className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow border-2 border-amber-500 hover:bg-gray-100 transition"
            >
              Download Datasheet
            </a>
            <a
              href="#contact"
              className="bg-amber-400 text-black font-semibold px-6 py-3 rounded-full shadow  transition"
            >
              Request a quote
            </a>
          </div>
        </div>

        {/* Right: Product image */}
        <div className="mt-10 md:mt-0 w-full md:w-auto">
          <Image
            src="https://www.solarminer.com.au/wp-content/uploads/2025/07/Foxess.png" // replace with your battery image
            alt="Foxess Battery"
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
