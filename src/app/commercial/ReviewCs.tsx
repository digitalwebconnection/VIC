export default function ReviewCs(){
   const testimonials = [
        {
            name: "Grace Hall",
            title: "Founder",
            image: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29sYXJ8ZW58MHx8MHx8fDA%3D", // Place your image in public/users/
            text: "I was hesitant to switch to solar, but this company made it easy and affordable.",
        },
        {
            name: "Connor Walker",
            title: "Programmer",
            image: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29sYXJ8ZW58MHx8MHx8fDA%3D",
            text: "I've already seen a significant decrease in my energy bills since going solar with them.",
        },
        {
            name: "Kira Wood",
            title: "Customer",
            image: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29sYXJ8ZW58MHx8MHx8fDA%3D",
            text: "Their team was professional, knowledgeable, and provided excellent customer service.",
        },
    ];

 

    return (
        <div className="bg-white">
  

            {/* Testimonials Section */}
            <div className="bg-blue-50 py-14 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <h5 className="text-sm font-semibold text-blue-900 uppercase mb-2">Our Testimonials</h5>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-10">What Our Customers Says</h2>

                    <div className="grid md:grid-cols-3 gap-6">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="relative bg-white p-6 rounded-lg shadow-sm text-left z-10"
                            >
                                {/* Speech bubble tail */}
                                <div className="absolute left-6 -bottom-2 w-4 h-4 bg-white rotate-45" />

                                <p className="text-gray-600 text-sm mb-6">{testimonial.text}</p>

                                {/* User Info */}
                                <div className="flex items-center gap-3">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-10 h-10 rounded-full object-cover"
                                    />
                                    <div>
                                        <p className="font-bold text-sm text-blue-900">{testimonial.name}</p>
                                        <p className="text-xs text-gray-500">{testimonial.title}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Carousel dots */}
                    <div className="mt-8 flex justify-center gap-2">
                        {[0, 1, 2, 3, 4].map((i) => (
                            <span
                                key={i}
                                className={`w-2 h-2 rounded-full ${i === 0 ? "bg-blue-900" : "bg-gray-300"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}