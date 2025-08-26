import Image from "next/image";

export default function HeroRs() {
    // const images = [
    //     "/ResidentalSolar1.jpg",
    //     "/ResidentalSolar2.jpg",
    //     "/ResidentalSolar3.jpg",
    //     "/ResidentalSolar4.jpg",
    // ];

    return (
        <div className="relative justify-center">
            {/* Background Image with opacity */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/images/1.jpg" // your background image
                    alt="Background"
                    fill
                    className="object-cover opacity-80" // controls opacity
                    priority
                />
            </div>

            {/* Main content wrapper */}
            <div className="relative bg-blue/50 py-15 px-5 md:px-20">
                <div className="flex max-w-7xl mx-auto h-80 justify-around gap-100">

                    {/* Left Card */}
                    <div className="flex-1/2 bg-white rounded-lg shadow p-6 max-w-md text-white">
                        <h2 className="text-2xl md:text-3xl text-black font-bold">
                            Residential Solar
                        </h2>

                        <ul className="mt-4 space-y-3">
                            {[
                                "ZERO deposit installation",
                                "Easy payment options available",
                                "5 years workmanship warranty",
                                "100% Australian owned and operated",
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                    <span className="mt-1 h-5 w-5 flex items-center justify-center rounded-full bg-[#0a285f] text-white font-bold text-sm">
                                        ✓
                                    </span>
                                    <span className="text-black">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-6">
                            <button className="w-full bg-amber-400 hover:bg-blue-700  text-black font-semibold py-3 px-5 rounded-full shadow transition">
                                Request a quote
                            </button>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="flex-1/2 mt-10 md:mt-0 w-full md:w-auto">
                        <Image
                            src="https://www.solarminer.com.au/wp-content/uploads/2025/07/batt-banner.png"
                            alt="Alpha ESS Battery"
                            width={360}
                            height={320}
                            className="object-contain drop-shadow-2xl"
                            priority
                        />
                    </div>
                </div>
            </div>
        </div>

    );
}
