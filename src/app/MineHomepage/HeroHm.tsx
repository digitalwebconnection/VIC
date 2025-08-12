"use client";

export default function HeroHm() {
    return (
        <>
            <section
                className="relative bg-cover bg-center bg-no-repeat -mt-16"
                style={{
                    backgroundImage:
                        "url('https://media.istockphoto.com/id/1405880267/photo/two-engineers-installing-solar-panels-on-roof.jpg?s=612x612&w=0&k=20&c=OvQDbJaTnMM4jPfIA3y5vrO88i98NZJRahZtnYFZCq0=')",
                }}
                aria-label="West VIC Energy - Solar installation in Victoria"
            >
                <div className="absolute inset-0 bg-[#17185d]/50"></div>

                <div className="relative z-10 max-w-7xl px-4 mx-auto py-20">
                    <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                        Powering Victoria with <br /> Reliable Solar & Batteries
                    </h1>

                    <p className="text-sm text-gray-300 mt-4">
                        West VIC Energy delivers rooftop solar, battery storage, and ongoing support across Melbourne
                        and regional VIC—helping you lower energy bills and reduce your carbon footprint.
                    </p>

                    <button
                        className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition"
                        aria-label="Get a free solar quote from West VIC Energy"
                    >
                        Get a Free Quote
                    </button>
                    {/* Optional dots */}
                    {/* <div className="flex justify-center mt-8 space-x-2">
                        <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                        <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                        <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
                    </div> */}
                </div>
            </section>
        </>
    );
}
