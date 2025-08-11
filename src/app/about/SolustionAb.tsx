"use client";
import { Battery, Building2, DollarSign, Leaf, Factory, Sun, Play } from "lucide-react";
import Image from "next/image";
import { Phone } from "lucide-react";

const features = [
    {
        icon: DollarSign,
        title: "High Return On Investment",
        desc: "We fully utilise the latest corporate renewable energy technology to generate significant energy.",
    },
    {
        icon: Leaf,
        title: "Boost Green Credentials",
        desc: "We fully utilise the latest corporate renewable energy technology to generate significant energy.",
    },
    {
        icon: Factory,
        title: "Industrial Solar Energy",
        desc: "We fully utilise the latest corporate renewable energy technology to generate significant energy.",
    },
    {
        icon: Sun,
        title: "Scale With New Technologies",
        desc: "We fully utilise the latest corporate renewable energy technology to generate significant energy.",
    },
];
const SolustionAb = () => {
    return (
        <>
            <section className=" py-16">
                <div className="container mx-auto max-w-7xl">
                    {/* Section Title */}
                    <div className="text-center mb-12">
                        <p className="uppercase text-orange-500 font-semibold tracking-wider text-sm mb-2">
                            Solutions of Solar Energy
                        </p>
                        <h2 className="text-4xl md:text-5xl font-bold">
                            Produce Your Own Clean Save <br /> Ourthe Environment
                        </h2>
                    </div>

                    <div className=" flex gap-6 items-center">
                        {/* Left Features */}
                        <div className="space-y-12">
                            <div className="flex flex-col items-center text-center px-4">
                                <div className="w-16 h-16 rounded-full border-2 border-green-600 flex items-center justify-center">
                                    <div className="text-green-600 w-8 h-8 flex  justify-center items-center" > <Battery /></div>
                                </div>
                                <h3 className="mt-3 font-bold text-lg">Battery Storage Solutions</h3>
                                <p className="text-gray-500 text-sm mt-1 leading-relaxed">
                                    We fully utilise the latest corporate renewable energy technology to generate significant energy.
                                </p>
                            </div>

                        </div>

                        {/* Center Video Placeholder */}
                        <div className="flex justify-center relative">
                            <div className="w-[500px] h-[230px] bg-gray-700 rounded-lg flex items-center justify-center  z-10 shadow-gray-500/50 ">
                                {/* Play Button */}
                                <div className="w-14 h-14 rounded-full bg-green-600 flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
                                    <Play className="text-white w-7 h-7" />
                                </div>
                            </div>
                            <div className="absolute w-[480px] h-[250px] bg-green-600 rounded-lg shadow-4xl  z-0"></div>
                        </div>

                        {/* Right Features */}
                        <div className="space-y-12">

                            <div className="flex flex-col items-center text-center px-4">
                                <div className="w-16 h-16 rounded-full border-2 border-green-600 flex items-center justify-center">
                                    <div className="text-green-600 w-8 h-8 flex  justify-center items-center" > <Building2 /></div>
                                </div>
                                <h3 className="mt-3 font-bold text-lg">Commercial Solar Energy</h3>
                                <p className="text-gray-500 text-sm mt-1 leading-relaxed">
                                    We fully utilise the latest corporate renewable energy technology to generate significant energy.
                                </p>
                            </div>
                        </div>
                    </div>


                    <section className=" py-16 ">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
                            {features.map((feature, index) => (
                                <div key={index} className="flex flex-col items-center">
                                    {/* Icon */}
                                    <div className="w-20 h-20 rounded-full border-2 border-green-600 flex items-center justify-center mb-4">
                                        <feature.icon className="text-green-600 w-10 h-10" />
                                    </div>

                                    {/* Title */}
                                    <h3 className="font-bold text-lg mb-2">{feature.title}</h3>

                                    {/* Description */}
                                    <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                                        {feature.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="relative bg-white  max-w-7xl mx-auto my-30 z-0">
                        <div className="bg-gradient-to-r from-blue-900 to-white rounded-2xl flex flex-col lg:flex-row items-center justify-between p-10 relative ">
                            {/* Left Content */}
                            <div className="text-white max-w-lg">
                                <h2 className="text-3xl md:text-4xl font-bold leading-snug">
                                    Get In Touch To Discuss <br /> How We Can Help You!
                                </h2>
                                <p className="text-gray-200 mt-2">
                                    Were pleased to be welcoming customers to join us.
                                </p>

                                {/* Buttons */}
                                <div className="flex items-center gap-4 mt-6 flex-wrap">
                                    <button className="bg-amber-400 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition">
                                        Request a Quote
                                    </button>

                                    <div className="flex items-center text-white gap-2">
                                        <div className="bg-green-600 w-9 h-9 flex items-center justify-center rounded-full ">
                                            <Phone className="w-5 h-5 text-white" />
                                        </div>
                                        <span className="font-medium">Phone : 01234 525 407</span>
                                    </div>
                                </div>
                            </div>

                            {/* Right Image */}
                            <div className="-mt-66 lg:-mt-46  w-[500px] h-[400px] z-10">
                                <Image
                                    src="https://www.amperesolar.com.au/wp-content/uploads/2024/06/arista-square-1.png"
                                    alt="Solar Worker"
                                    width={500}   // ✅ required
                                    height={600}  // ✅ required
                                    className="object-contain z-10"
                                />
                            </div>
                        </div>
                        {/* Green underline */}
                        <div className="absolute bottom-0 left-0 right-0 h-5   bg-amber-400 rounded-b-2xl z-0"></div>
                    </section>

                </div>
            </section>
        </>
    )
}

export default SolustionAb