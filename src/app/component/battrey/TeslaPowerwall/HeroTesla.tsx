// app/tesla-powerwall/page.tsx
import Image from "next/image";
import { CheckCircle } from "lucide-react";

export const metadata = {
  title: "Tesla Powerwall Solar Battery",
  description:
    "Tesla Powerwall hero: high capacity & power output, integrated inverter, smart energy management, OTA updates, and seamless Tesla ecosystem integration.",
};

export default function HeroTeslaPowerwall() {
  return (
    <section className="relative w-full min-h-[520px] md:h-[560px] flex items-center justify-center text-white overflow-hidden">
      {/* Background + overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/1.jpg" // replace with your background image
          alt="Background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/70" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between z-10">
        {/* Left: Text */}
        <div className="max-w-xl">
          <span className="inline-block bg-blue-700 px-4 py-2 rounded-md">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Tesla Powerwall Solar Battery
            </h1>
          </span>

          <ul className="space-y-3 my-6 text-lg">
            {[
              "High Capacity and Power Output",
              "Integrated Solar Inverter",
              "Smart Energy Management",
              "Over-the-Air Updates",
              "Seamless Integration with Tesla Ecosystem",
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
              href="/docs/tesla-powerwall-datasheet.pdf"
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
            src="/images/tesla-powerwall.png" // replace with your Powerwall image
            alt="Tesla Powerwall"
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
