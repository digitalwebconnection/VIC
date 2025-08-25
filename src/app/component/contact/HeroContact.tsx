"use client";
import { FaHome } from "react-icons/fa";

export default function HeroContact() {
  return (
    <div className=" bg-white -mt-22">
      {/* Header Section */}
      <div className="bg-[#1E215C] py-26 px-5 md:px-0  ">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Contact Us</h1>
          <p className="text-gray-300 mt-3 max-w-xl">
            Practical renewable energy technology that reduces costs <br /> and helps the environment
          </p>
        </div>
      </div>


      {/* Breadcrumb */}
      {/* <div className="max-w-7xl mx-auto ">
        <div className="flex -mt-6">
          <div className="bg-yellow-400 text-black w-full px-6 py-2 rounded-full shadow-md flex items-center space-x-3 text-lg">
            <FaHome className="w-5 h-5" />
            <span className="font-medium cursor-pointer hover:underline">Home</span>
            <span className="text-black">|</span>
            <span className="font-medium">Contact</span>
          </div>
        </div>
      </div> */}
    </div>




  )
}

