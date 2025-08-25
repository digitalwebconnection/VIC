"use client";

import Image from "next/image";
import { useKeenSlider, KeenSliderInstance } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const brands = [
  "https://www.solarminer.com.au/wp-content/uploads/2025/04/CS-LOGO-RED-RGB-NEW-2024-W-TAG-2-1-1.png",
    "https://www.solarminer.com.au/wp-content/uploads/2025/04/logo-4-2.png",
    "https://www.solarminer.com.au/wp-content/uploads/2021/08/jinko.svg",
    "https://www.solarminer.com.au/wp-content/uploads/2025/04/logo1-1.png",
    "https://www.solarminer.com.au/wp-content/uploads/2021/08/sma.svg",
    "https://www.solarminer.com.au/wp-content/uploads/2022/05/solax.jpg",
    "https://www.solarminer.com.au/wp-content/uploads/2025/04/logo.f95f405-1-3.png",
    "https://www.solarminer.com.au/wp-content/uploads/2025/04/logo-3.png",
    "https://www.solarminer.com.au/wp-content/uploads/2025/04/193fe702daebc6a9150499b58b35273e-1.png",
    "https://www.solarminer.com.au/wp-content/uploads/2021/08/growatt.svg",
    "https://www.solarminer.com.au/wp-content/uploads/2022/05/Goodwe.jpg",
    "https://www.solarminer.com.au/wp-content/uploads/2022/05/solis.jpg",
];

// Typed autoplay plugin
function AutoPlay(interval = 1500) {
  return (slider: KeenSliderInstance) => {
    let timeout: ReturnType<typeof setTimeout> | null = null;
    let mouseOver = false;

    function clearNextTimeout() {
      if (timeout) clearTimeout(timeout);
    }
    function nextTimeout() {
      clearNextTimeout();
      if (mouseOver) return;
      timeout = setTimeout(() => slider.next(), interval);
    }

    slider.on("created", () => {
      slider.container.addEventListener("mouseover", () => {
        mouseOver = true;
        clearNextTimeout();
      });
      slider.container.addEventListener("mouseout", () => {
        mouseOver = false;
        nextTimeout();
      });

      const onVisibility = () => {
        if (document.hidden) clearNextTimeout();
        else nextTimeout();
      };
      document.addEventListener("visibilitychange", onVisibility);

      slider.on("destroyed", () => {
        document.removeEventListener("visibilitychange", onVisibility);
        clearNextTimeout();
      });

      nextTimeout();
    });

    slider.on("dragStarted", clearNextTimeout);
    slider.on("animationEnded", nextTimeout);
    slider.on("updated", nextTimeout);
  };
}

export default function CompnyRuninBeltCs() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      renderMode: "performance",
      slides: { perView: 5, spacing: 0 },
      breakpoints: {
        "(max-width: 1024px)": { slides: { perView: 4 } },
        "(max-width: 768px)": { slides: { perView: 3 } },
        "(max-width: 480px)": { slides: { perView: 2 } },
      },
    },
    [AutoPlay(1500)]
  );

  return (
    <section className="bg-white py-12 text-center">
      <h2 className="mb-2 text-3xl font-bold">Confused between so many brands?</h2>
      <p className="mb-6 font-semibold text-cyan-600">
        Don&apos;t Worry!! We only carry brands with good reputation. Because your family
        deserves the best!!
      </p>
      <h3 className="mb-8 text-xl font-semibold text-blue-600">
        Solar Panel Brands &amp; Inverter Brands We Carry…
      </h3>

      <div ref={sliderRef} className="keen-slider mx-auto max-w-7xl">
        {brands.map((src, index) => (
          <div
            key={index}
            className="keen-slider__slide relative flex h-20 w-40 items-center justify-center sm:h-24 sm:w-48"
            aria-label={`Brand logo ${index + 1}`}
          >
            <Image
              src={src}
              alt={`Brand ${index + 1}`}
              fill
              sizes="(max-width: 640px) 96px, 160px"
              className="object-contain grayscale transition-all duration-300 hover:grayscale-0"
              unoptimized
              loading="lazy"
              decoding="async"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
