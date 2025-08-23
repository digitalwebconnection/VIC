"use client";

import { FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

export default function FromContact() {

    return (
        <>

            <div className="max-w-7xl mx-auto bg-white px-4 py-10 md:px-0">
                {/* Header */}
                <div className="text-center mb-10">
                    <p className="text-sm text-blue-700 font-semibold tracking-wide">
                        REQUEST A QUOTE
                    </p>
                    <h2 className="text-2xl md:text-5xl font-bold mt-2 leading-tight">
                        Talk About How We Can Help <br /> You Reduce Your Energy
                    </h2>
                </div>

                {/* Grid layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Left - Form */}
                    <div className="md:col-span-2 space-y-4">
                        <h3 className="font-bold text-sm uppercase">General Enquiry</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="Complete Name"
                                className="border rounded-full px-4 py-2 text-sm"
                            />
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="border rounded-full px-4 py-2 text-sm"
                            />
                            <input
                                type="number"
                                placeholder="Phone No"
                                className="border rounded-full px-4 py-2 text-sm"
                            />
                            <input
                                type="text"
                                placeholder="Post Code"
                                className="border rounded-full px-4 py-2 text-sm"
                            />
                            <input
                                type="text"
                                placeholder="Location?"
                                className="border rounded-full px-4 py-2 text-sm md:col-span-2"
                            />
                            <input
                                type="text"
                                placeholder="How did you hear of us?"
                                className="border rounded-full px-4 py-2 text-sm md:col-span-2"
                            />
                        </div>

                        <h3 className="font-bold text-sm uppercase mt-6">
                            I am interested in renewables for my
                        </h3>
                        <select className="border rounded-full px-4 py-2 text-sm w-full">
                            <option>Choose Service</option>
                            <option>Residential</option>
                            <option>Commercial</option>
                            <option>Industrial</option>
                        </select>

                        <textarea
                            placeholder="Your Message"
                            rows={5}
                            className="border rounded-2xl px-4 py-2 text-sm w-full"
                        ></textarea>

                        <button className="bg-yellow-400 text-black text-sm font-semibold px-6 py-2 rounded-full hover:bg-yellow-500 transition">
                            Send Message
                        </button>
                    </div>

                    {/* Right - Contact Info */}
                    <div className="space-y-4">
                        <h3 className="font-bold text-sm uppercase">Contact Information</h3>
                        <div className="bg-blue-600 text-white rounded-xl p-4 items-start space-y-4">
                            <div className="p-2 bg-white text-blue-800 rounded-full h-8 w-8  ">
                                <FaPhone />
                            </div>
                            <div>
                                <p className="font-bold">Phone No:</p>
                                <p className="text-sm">01234 525 407 - 01234 525 407</p>
                            </div>
                        </div>

                        <div className="bg-blue-600 text-white rounded-xl p-4  items-start space-y-4 ">
                            <div className="p-2 bg-white text-blue-800 rounded-full h-8 w-8 ">
                                <FaMapMarkerAlt />
                            </div>
                            <div>
                                <p className="font-bold">Location:</p>
                                <p className="text-sm">
                                    12/7 new town, 245x Town 1214 Street, United State
                                </p>
                            </div>
                        </div>

                        <div className="bg-blue-600 text-white rounded-xl p-4  items-start space-y-4">
                            <div className="p-2 bg-white text-blue-800 rounded-full h-8 w-8 ">
                                <FaEnvelope />
                            </div>
                            <div>
                                <p className="font-bold">Email Address:</p>
                                <p className="text-sm">username@domainname.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=" bg-white flex items-center justify-center py-10">
                    <div className="max-w-7xl w-full overflow-hidden rounded-2xl shadow-lg">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.231791613044!2d144.72228867569692!3d-37.85804617196448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad6891c1db39475%3A0x15f7271545973c73!2s9%20Ferriman%20Way%2C%20Truganina%20VIC%203029%2C%20Australia!5e1!3m2!1sen!2sin!4v1754998034062!5m2!1sen!2sin"
                            width="100%"
                            height="350"
                            // style={{ border: 0 }}    
                            allowFullScreen={false}
                            loading="lazy"
                        ></iframe>
                        {/* <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.999441126556!2d2.292292615674133!3d48.85837317928757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fddf86cdbf3%3A0x5b3fdded3ca38e78!2sEiffel%20Tower!5e0!3m2!1sen!2sin!4v1629191866112!5m2!1sen!2sin"
                            width="100%"
                            height="300"
                            // style={{ border: 0 }}    
                            allowFullScreen={false}
                            loading="lazy"
                        ></iframe> */}
                    </div>
                </div>
            </div>
        </>
    )
}