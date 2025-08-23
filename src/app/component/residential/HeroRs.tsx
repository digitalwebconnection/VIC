import Image from "next/image";

export default function HeroRs() {
    const images = [
        "/ResidentalSolar1.jpg",
        "/ResidentalSolar2.jpg",
        "/ResidentalSolar3.jpg",
        "/ResidentalSolar4.jpg",
    ];

    return (
        <div className="relative justify-center -mt-20">
            <div className="bg-[#1E215C] pt-26 py-45 px-5 md:px-0 z-0">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-white">Residental Solar</h1>
                    <p className="text-gray-300 mt-3 max-w-xl">
                        Practical renewable energy technology that reduces costs <br /> and helps the environment
                    </p>
                </div>
            </div>

            {/* Image Cards */}
            <div className="max-w-7xl mx-auto -mt-5 md:-mt-25">
                <div className="relative grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 gap-6 z-10">
                    {images.map((src, index) => (
                        <div
                            key={index}
                            className="border-1 md:border-4 border-white hover:border-blue-500 rounded-lg overflow-hidden shadow-lg w-15 md:w-full"
                        >
                            <Image
                                src={src}
                                alt={`Solar ${index + 1}`}
                                width={300}
                                height={200}
                                className="md:w-full md:h-50 h-10 w-15 object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
