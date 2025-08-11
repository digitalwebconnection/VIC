"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { useKeenSlider, KeenSliderInstance } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const brands = [
  "https://www.logoai.com/uploads/output/2022/01/08/357140277b9b048420b583ec1ca7040f.jpg",
  "https://www.logoai.com/uploads/output/2022/01/08/357140277b9b048420b583ec1ca7040f.jpg",
  "https://www.logoai.com/uploads/output/2022/01/08/357140277b9b048420b583ec1ca7040f.jpg",
  "https://www.logoai.com/uploads/output/2022/01/08/357140277b9b048420b583ec1ca7040f.jpg",
  "https://www.logoai.com/uploads/output/2022/01/08/357140277b9b048420b583ec1ca7040f.jpg",
  "https://www.logoai.com/uploads/output/2022/01/08/357140277b9b048420b583ec1ca7040f.jpg",
  "https://www.logoai.com/uploads/output/2022/01/08/357140277b9b048420b583ec1ca7040f.jpg",
  "https://www.logoai.com/uploads/output/2022/01/08/357140277b9b048420b583ec1ca7040f.jpg",
];

export default function BrandRunningBelt() {
  const timer = useRef<number | null>(null);

  const startAutoSlide = (instance: KeenSliderInstance) => {
    if (timer.current) clearInterval(timer.current);
    timer.current = window.setInterval(() => {
      instance.next();
    }, 1500);
  };

  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 5,
      spacing: 0,
    },
    breakpoints: {
      "(max-width: 768px)": {
        slides: {
          perView: 3,
          spacing: 0,
        },
      },
      "(max-width: 480px)": {
        slides: {
          perView: 2,
          spacing: 0,
        },
      },
    },
    created: startAutoSlide,
    dragStarted: () => timer.current && clearInterval(timer.current),
    animationEnded: startAutoSlide,
    updated: startAutoSlide,
  });

  return (
    <section className="py-12 bg-white text-center">
      <h2 className="text-3xl font-bold mb-2">
        Confused between so many brands?
      </h2>
      <p className="text-cyan-600 font-semibold mb-6">
        Don&apos;t worry! We only carry brands with good reputations because your
        family deserves the best.
      </p>
      <h3 className="text-orange-600 text-xl font-semibold mb-8">
        Solar Panel Brands and Inverter Brands We Carry…
      </h3>

      <div ref={sliderRef} className="keen-slider max-w-7xl mx-auto">
        {brands.map((src, index) => (
          <div
            key={index}
            className="keen-slider__slide flex items-center justify-center"
          >
            <Image
              src={src}
              alt={`Brand ${index + 1}`}
              width={150}
              height={80}
              className="h-20 w-auto grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
