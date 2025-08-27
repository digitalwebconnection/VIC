import Image from "next/image";

// tiny 1x1 transparent placeholder

export default function ReviewCs() {
   const testimonials = [
        {
            name: "Emily Johnson",
            title: "Homeowner – Ballarat",
            image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?fm=jpg&q=60&w=3000",
            text: "West Vic Energy made going solar so simple! The team explained everything clearly and I’ve already noticed huge savings on my electricity bills.",
        },
        {
            name: "Mark Wilson",
            title: "Small Business Owner – Geelong",
            image: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?fm=jpg&q=60&w=3000",
            text: "As a business owner, reducing overhead costs is vital. Their solar package was affordable and the installation was quick and professional.",
        },
        {
            name: "Sophie & Liam Carter",
            title: "Young Family – Melbourne",
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?fm=jpg&q=60&w=3000",
            text: "We wanted to lower our carbon footprint for our kids’ future. West Vic Energy delivered an easy, affordable solar solution that we love.",
        },
    ];

    return (
        <div className="bg-white">
            <div className="bg-blue-50 py-14 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <h5 className="text-sm font-semibold text-blue-900 uppercase mb-2">
                        Real Stories, Real Impact
                    </h5>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-10">
                        What Our Customers Say About West Vic Energy
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="relative bg-white p-6 rounded-lg shadow-md text-left hover:shadow-lg transition z-10"
                            >
                                <div className="absolute left-6 -bottom-2 w-4 h-4 bg-white rotate-45" />
                                <p className="text-gray-600 text-sm mb-6 italic">
                                    “{testimonial.text}”
                                </p>
                                <div className="flex items-center gap-3">
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        width={45}
                                        height={45}
                                        className="rounded-full object-cover"
                                    />
                                    <div>
                                        <p className="font-bold text-sm text-blue-900">{testimonial.name}</p>
                                        <p className="text-xs text-gray-500">{testimonial.title}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Dots */}
                    <div className="mt-8 flex justify-center gap-2">
                        {[0, 1, 2].map((i) => (
                            <span
                                key={i}
                                className={`w-2 h-2 rounded-full ${i === 0 ? "bg-blue-900" : "bg-gray-300"}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
