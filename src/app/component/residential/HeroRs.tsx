import Image from "next/image";

export default function HeroRs() {
    return (
        <div className="relative justify-center">
            {/* Background Image with opacity */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/images/1.jpg"
                    alt="Background"
                    fill
                    className="object-cover opacity-80"
                    priority
                />
            </div>

            {/* Main content wrapper */}
            <div className="relative bg-blue py-10 md:py-20 px-4 sm:px-8 md:px-20">
                <div className="flex flex-col md:flex-row max-w-7xl mx-auto h-full min-h-[400px] md:min-h-[400px] gap-6 md:gap-100">
                    
                    {/* Left Card */}
                    <div className="w-full md:w-1/2 lg:w-1/3 bg-white rounded-lg shadow h-full lg:h-80 p-6 md:p-8 text-white flex flex-col justify-center">
                        <h2 className="text-xl sm:text-2xl md:text-3xl text-black font-bold">
                            Commercial Solar
                        </h2>

                        <ul className="mt-4 space-y-3">
                            {[
                                "Attractive ROI",
                                "Flexible and scalable solutions",
                                "Government incentives",
                                "Reduce carbon emissions",
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                    <span className="mt-1 h-5 w-5 flex items-center justify-center rounded-full bg-[#0a285f] text-white font-bold text-sm">
                                        ✓
                                    </span>
                                    <span className="text-black text-sm sm:text-base">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-6">
                            <button className="w-full bg-amber-400 hover:bg-blue-700 text-black font-semibold py-3 px-5 rounded-full shadow transition">
                                Request a quote
                            </button>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="w-full md:w-1/2 flex justify-center items-center mt-6 md:mt-0">
                        <Image
                            src="https://www.solarminer.com.au/wp-content/uploads/2025/07/batt-banner.png"
                            alt="Alpha ESS Battery"
                            width={400}
                            height={320}
                            className="object-contain drop-shadow-2xl w-full max-w-xs sm:max-w-sm md:max-w-md"
                            priority
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
