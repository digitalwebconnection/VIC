'use client';
import React from 'react';
import { useState } from "react";

export default function ContactCardTm ()  {

    const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    };

    return (
        <>
            <div className="mt-16 grid md:grid-cols-2 gap-10 items-center bg-[#20225A] rounded-lg p-20 relative max-w-7xl mx-auto mb-50">
                {/* Left Text */}
                <div className="text-white">
                    <p className="text-red-400 uppercase font-semibold tracking-wide">Request a Quote</p>
                    <h2 className="text-3xl font-bold mt-3 leading-snug">Talk About How We Can Help You Reduce Your Energy</h2>
                    <p className="text-gray-300 mt-4">
                        Costs and successfully manage your carbon emissions with investment-free solar technologies.
                    </p>
                </div>

                {/* Right Form */}
                <div className="bg-green-600 p-8 rounded-xl shadow-2xl shadow-black w-full max-w-md md:absolute md:right-10 md:top-1/2 md:-translate-y-1/2 mt-15">
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Complete Name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-300 outline-none"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-300 outline-none"
                            required
                        />
                        <input
                            type="text"
                            name="phone"
                            placeholder="Phone No"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-300 outline-none"
                        />
                        <textarea
                            name="message"
                            placeholder="Message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={3}

                            className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-300 outline-none"
                        ></textarea>
                        <button
                            type="submit"
                            className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>

        </>
    )
}
