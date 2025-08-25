"use client";

export default function BackMapCs() {
    return (
        <>
            <div className="relative text-center my-20">
                {/* Background with fixed image */}
                <div
                    className="back-banner bg-cover bg-center bg-fixed"
                    style={{
                        backgroundImage:
                            "url(https://www.mapsofindia.com/world-map/australia/australia-regions-and-capital-map.jpg)",
                    }}
                >
                    {/* Overlay */}
                    <div className="opacity  bg-opacity-80 py-20 md:py-24" style={{
                        backgroundColor: "#000000",
                        opacity: 0.6,
                    }}>
                        {/* Content */}
                        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-0 text-white">
                            {/* Text Section */}
                            <div className="text-center md:text-left mb-8 md:mb-0">
                                <h1 className="text-2xl md:text-4xl font-bold leading-tight">
                                    The Right Decision at The Right Time Can Save You <br />
                                    Lots of Money!
                                </h1>
                                <p className="mt-4 text-lg font-semibold">
                                    Speak To Us Before You Receive Your Next Electricity Bill.
                                </p>
                            </div>

                            {/* Button Section */}
                            <div>
                                <button className="bg-white rounded-2xl text-black font-semibold px-10 py-4 shadow-md hover:bg-gray-200 transition">
                                <a href="/component/contact">  Request a Free Quote</a> 
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}