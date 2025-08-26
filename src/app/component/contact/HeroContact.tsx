"use client";
import { FaHome } from "react-icons/fa";

export default function HeroContact() {
  return (
    <div className=" bg-white -mt-22">
      {/* Header Section */}
      
      <section
                className="relative bg-cover bg-center bg-no-repeat min-h-[480px]"
                style={{ backgroundImage: "url('/images/2.jpg')" }}
            >
                {/* blue/black tint to “lower opacity” of the bg image */}
                <div className="absolute inset-0 bg-[#17185d]/60" />

                <div className="relative pt-55 px-5 md:px-20   ">
                    <div className="max-w-7xl mx-auto ">
                        <h1 className="text-4xl md:text-5xl font-bold text-amber-400">Contact Us</h1>
                        <p className="text-white mt-3 max-w-xl">
                            Practical renewable energy technology that reduces costs <br /> and helps the environment
                        </p>
                    </div>
                </div>
      </section>
    </div>




  )
}

