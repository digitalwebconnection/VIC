// app/sungrow/page.tsx
import Image from "next/image";
import { CheckCircle } from "lucide-react";

export const metadata = {
  title: "Sungrow Solar Battery",
  description:
    "Sungrow battery – high usable energy with LFP technology, modular & scalable design, strong charge/discharge, lightweight, and advanced EMS.",
};

export default function HeroSungrow() {
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
          {/* Title */}
          <span className="inline-block bg-blue-700 px-4 py-2 rounded-md">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Sungrow Solar Battery
            </h1>
          </span>

          <ul className="space-y-3 my-6 text-lg">
            {[
              "High Usable Energy with LFP Technology",
              "Modular and Scalable Design",
              "High Charging and Discharging Current",
              "Compact and Lightweight Design",
              "Advanced Energy Management System (EMS)",
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
              href="/docs/sungrow-datasheet.pdf"
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
            src="/images/sungrow-battery.png" // replace with your Sungrow battery image
            alt="Sungrow Solar Battery"
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
