"use client";

import { Mail, Facebook } from "lucide-react";


const TeemExpoertAb = () => {
    return (
        <>
            <main className="w-full bg-white max-w-7xl mx-auto">
                {/* ================== OUR CREATIVE TEAM ================== */}
                <section className="py-16 px-6 md:px-20 text-center">
                    <p className="uppercase text-orange-500 font-semibold tracking-wide text-sm">
                        Our Creative Team
                    </p>
                    <h2 className="text-3xl md:text-5xl font-bold mt-2 text-gray-900">
                        Meet Our Experts
                    </h2>

                    {/* Experts Section */}
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 justify-items-center">
                        {/* Expert Card */}
                        <div className="flex flex-col items-center">
                            {/* Circle with image placeholder */}
                            <div className="relative">
                                <div className="absolute w-42 h-41 border-[10px] border-blue-400 rounded-full -ms-1  z-10 "
                                    style={{
                                        clipPath: "polygon(0 0%, 100% 0, 100% 70%, 0 40%)",
                                        transform: "rotate(190deg)",
                                    }}
                                ></div>
                                <div className="w-40 h-40 rounded-full bg-gray-700  z-0"></div>
                            </div>
                            <h3 className="text-xl font-bold mt-4">Thomas Walkar</h3>
                            <p className="text-orange-500 text-sm">Engineer Solutions</p>

                            {/* Email */}
                            <div className="flex items-center gap-2 mt-2 bg-gray-100 px-3 py-1 rounded-full">
                                <Mail size={16} className="text-orange-500" />
                                <span className="text-sm">info@example.com</span>
                            </div>

                            {/* Facebook */}
                            <div className="flex items-center gap-2 mt-2">
                                <Facebook size={16} />
                                <span className="text-sm">Facebook</span>
                            </div>
                        </div>

                        {/* Expert Card 2 */}
                        <div className="flex flex-col items-center">
                            <div className="relative">
                                <div className="absolute w-42 h-41 border-[10px] border-blue-400 rounded-full -ms-1  z-10 "
                                    style={{
                                        clipPath: "polygon(0 0%, 100% 0, 100% 70%, 0 40%)",
                                        transform: "rotate(190deg)",
                                    }}
                                ></div>
                                <div className="w-40 h-40 rounded-full bg-gray-700  z-0"></div>
                            </div>
                            <h3 className="text-xl font-bold mt-4">Willimes Jassi</h3>
                            <p className="text-orange-500 text-sm">Engineer Solutions</p>

                            {/* Email */}
                            <div className="flex items-center gap-2 mt-2 bg-gray-100 px-3 py-1 rounded-full">
                                <Mail size={16} className="text-orange-500" />
                                <span className="text-sm">info@example.com</span>
                            </div>

                            {/* Facebook */}
                            <div className="flex items-center gap-2 mt-2">
                                <Facebook size={16} />
                                <span className="text-sm">Facebook</span>
                            </div>
                        </div>
                    </div>

                    {/* Slider Dots */}
                    <div className="flex justify-center gap-2 mt-6">
                        <span className="w-3 h-3 rounded-full bg-gray-300"></span>
                        <span className="w-3 h-3 rounded-full bg-gray-300"></span>
                        <span className="w-3 h-3 rounded-full bg-orange-500"></span>
                        <span className="w-3 h-3 rounded-full bg-gray-300"></span>
                    </div>
                </section>

                {/* ================== COMPANY HISTORY ================== */}
                <section className="py-16 px-6 md:px-20 bg-white ">
                    <p className="uppercase text-orange-500 font-semibold tracking-wide text-sm">
                        Story of Solar Energy
                    </p>
                    <h2 className="text-3xl md:text-5xl font-bold mt-2 text-gray-900">
                        Company History
                    </h2>

                    <hr className="-mb-22 mt-30" />

                    {/* Timeline */}
                    <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-8">
                        {/* Year 2001 */}
                        <div>
                            <h3 className="text-blue-900 text-3xl font-bold">2001</h3>
                            <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
                            <h4 className="mt-4 text-lg font-bold">First Office Set Up By Stephen Barrett</h4>
                            <p className="text-gray-600 mt-2 text-sm">
                                leading renewable energy solutions provider that is revolutionising and redefining the way sustainable
                            </p>
                        </div>

                        {/* Year 2008 */}
                        <div>
                            <h3 className="text-blue-900 text-3xl font-bold">2008</h3>
                            <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
                            <h4 className="mt-4 text-lg font-bold">Larger Premises Secured In Long Ashton</h4>
                            <p className="text-gray-600 mt-2 text-sm">
                                leading renewable energy solutions provider that is revolutionising and redefining the way sustainable
                            </p>
                        </div>

                        {/* Year 2014 */}
                        <div>
                            <h3 className="text-blue-900 text-3xl font-bold">2014</h3>
                            <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
                            <h4 className="mt-4 text-lg font-bold">Government Renewable Energy Incentive</h4>
                            <p className="text-gray-600 mt-2 text-sm">
                                leading renewable energy solutions provider that is revolutionising and redefining the way sustainable
                            </p>
                        </div>

                        {/* Year 2018 */}
                        <div>
                            <h3 className="text-blue-900 text-3xl font-bold">2018</h3>
                            <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
                            <h4 className="mt-4 text-lg font-bold">‘Company Of The Year’ At The British</h4>
                            <p className="text-gray-600 mt-2 text-sm">
                                leading renewable energy solutions provider that is revolutionising and redefining the way sustainable
                            </p>
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    {/* <div className="flex justify-end gap-4 mt-8">
                        <button className="w-10 h-10 flex items-center justify-center rounded-full border border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition">
                            <ArrowLeft size={18} />
                        </button>
                        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-500 text-white hover:bg-orange-600 transition">
                            <ArrowRight size={18} />
                        </button>
                    </div> */}
                </section>
            </main>
        </>
    )
}

export default TeemExpoertAb