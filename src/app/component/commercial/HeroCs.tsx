import Image from "next/image";

export default function HeroCs() {
    const images = [
        "/CommercialSolar1.jpg",
        "/CommercialSolar2.jpg",
        "/CommercialSolar3.jpg",
        "/CommercialSolar4.jpg",
    ];

    return (
        <div className="relative justify-center ">
            {/* Hero Section */}
            <div className="bg-[#1E215C] pt-25 pb-35 px-5 md:px-0 z-0">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-white">
                        Commercial Solar
                    </h1>
                    <p className="text-gray-300 mt-3 max-w-xl">
                        Practical renewable energy technology that reduces costs <br /> 
                        and helps the environment
                    </p>
                </div>
            </div>

            {/* Image Cards */}
            <div className="max-w-7xl mx-auto -mt-5 md:-mt-25">
                <div className="relative grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-6 z-10">
                    {images.map((src, index) => (
                        <div
                            key={index}
                            className="relative border-1 md:border-4 border-white hover:border-blue-500 rounded-lg overflow-hidden shadow-lg w-full aspect-[4/3]"
                        >
                            <Image
                                src={src}
                                alt={`Solar ${index + 1}`}
                                fill
                                sizes="(max-width: 768px) 50vw, 25vw"
                                className="object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
