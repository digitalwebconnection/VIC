"use client";

import React, { useRef } from "react";
import { useKeenSlider, KeenSliderInstance } from "keen-slider/react";
import Image from "next/image";
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

export default function CompnyRuninBelt() {
    const timer = useRef<NodeJS.Timeout | null>(null);

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
        created: (instance) => {
            startAutoSlide(instance);
        },
        dragStarted: () => {
            if (timer.current) clearInterval(timer.current);
        },
        animationEnded: (instance) => {
            startAutoSlide(instance);
        },
        updated: (instance) => {
            startAutoSlide(instance);
        },
    });

    function startAutoSlide(instance: KeenSliderInstance) {
        if (timer.current) clearInterval(timer.current);
        timer.current = setInterval(() => {
            instance.next();
        }, 1500);
    }

    return (
        <section className="py-12 bg-white text-center">
            <h2 className="text-3xl font-bold mb-2">
                Confused between so many brands?
            </h2>
            <p className="text-cyan-600 font-semibold mb-6">
                Don&apos;t Worry!! We only carry brands with good reputation.
                Because your family deserves the best!!
            </p>
            <h3 className="text-orange-600 text-xl font-semibold mb-8">
                Solar Panel Brands &amp; Inverter Brands We Carry…
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
                            className="grayscale hover:grayscale-0 transition-all duration-400 object-contain"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
