"use client";

import { Home } from "lucide-react";
import Link from "next/link";

const HeroAb = () => {
  return (
     <>
            <section className="w-full -mt-22 ">
                {/* Top Section */}
                <div className="bg-[#1E215C] py-28 px-5 md:px-0  ">
                    <div className="max-w-7xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-bold text-white">About Us</h1>
                        <p className="text-gray-300 mt-3 max-w-xl">
                            Practical renewable energy technology that reduces costs <br /> and helps the environment
                        </p>
                    </div>
                </div>

                {/* Breadcrumb Section */}
                <div className="bg-transparent -mt-6 flex justify-center  max-w-7xl mx-auto">
                    <div className="bg-yellow-400 text-black text-lg flex items-center gap-2 px-6 py-2 rounded-full shadow-md w-full">
                        <Home size={16} />
                        <Link href="/" className="hover:underline">
                            Home
                        </Link>
                        <span className="mx-1">|</span>
                        <span>About Us</span>
                    </div>
                </div>
            </section>
        </>

  )
}

export default HeroAb