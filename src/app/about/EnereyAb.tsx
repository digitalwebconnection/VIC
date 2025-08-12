/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import { BadgeCheck } from "lucide-react";


const EnereyAb = () => {
  return (
     <>
    <section className="w-full bg-white py-16 px-6 md:px-0">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 ">
        
        {/* LEFT CONTENT */}
        <div>
          <p className="uppercase text-orange-500 font-semibold tracking-wide text-sm">
            Welcome to Solar Power Save Energy
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 leading-tight">
            Energize Society <br /> Reliable Energy
          </h2>
          <p className="text-gray-600 mt-4 text-base leading-relaxed">
            Leading renewable energy solutions provider that is revolutionising 
            and redefining the way sustainable energy sources are harnessed 
            across the world. Present in 18 countries across Asia, Australia, 
            Europe Africa and the Americas, Veztaz is powering.
          </p>

          {/* Signature + Name */}
          <div className="mt-6">
            {/* Replace src with actual signature image if needed */}
            <Image
              src="/signature.png"
              alt="Signature"
              width={120}
              height={60}
              className="mb-2"
            />
            <h4 className="text-lg font-bold text-gray-900">Alines Jannie</h4>
            <p className="text-gray-500 text-sm">Director of Renewable Group</p>
          </div>
        </div>

        {/* RIGHT IMAGES */}
        <div className="relative flex justify-center md:justify-end">
          {/* Large Dark Rectangle */}
          <div className="bg-gray-700 w-[80%] h-40  mb-10 md:mb-0 md:w-126 md:h-72 rounded-lg"> <img src="https://t4.ftcdn.net/jpg/04/91/17/03/360_F_491170369_elLGyJJ3oHIVPMXRQKk8vJSa0bA2RPDO.jpg" alt=""  className=" rounded-lg"/> </div>

          {/* Small Light Rectangle */}
          <div className="bg-gray-400 w-34 h-38  md:w-48 md:h-58 rounded-lg absolute -bottom-3 left-0 md:left-12"> <img src="https://t4.ftcdn.net/jpg/04/91/17/03/360_F_491170369_elLGyJJ3oHIVPMXRQKk8vJSa0bA2RPDO.jpg" alt="" className="h-full rounded-lg"/> </div>

          {/* Green Experience Badge */}
          <div className="absolute -bottom-14 right-0 bg-yellow-400 text-blue flex items-center gap-2 px-5 py-3 rounded-xl shadow-lg">
            <BadgeCheck size={22} />
            <div>
              <p className="text-2xl font-bold">18+</p>
              <p className="text-sm">Years Experience</p>
            </div>
          </div>
        </div>

      </div>
    </section>
    </>
  )
}

export default EnereyAb