"use client";

import { useRef, useState } from "react";
import { X } from "lucide-react";

export default function GetFreeCott() {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const dialogRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);

  const handleQuoteSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulate form submit delay
    setTimeout(() => {
      setSubmitting(false);
      setQuoteOpen(false);
      alert("Your request has been submitted!");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      {/* Trigger Button */}
      <button
        onClick={() => setQuoteOpen(true)}
        className="rounded-full bg-[#1f5495] px-6 py-3 text-white font-semibold hover:brightness-110"
      >
        Request a Quote
      </button>

      {/* Modal */}
      {quoteOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 px-4"
          aria-labelledby="quote-title"
          aria-modal="true"
          role="dialog"
          onClick={() => setQuoteOpen(false)}
        >
          <div
            ref={dialogRef}
            className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start justify-between">
              <h2 id="quote-title" className="text-xl font-bold text-[#1f5495]">
                Request a Quote
              </h2>
              <button
                onClick={() => setQuoteOpen(false)}
                className="rounded-full p-1.5 hover:bg-gray-100"
                aria-label="Close"
              >
                <X className="h-6 w-6 text-gray-600" />
              </button>
            </div>
            <p className="mt-1 text-sm text-gray-600">
              Fill the form and our team will contact you shortly.
            </p>

            {/* Form */}
            <form className="mt-4 space-y-3" onSubmit={handleQuoteSubmit}>
              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    ref={nameRef}
                    name="name"
                    type="text"
                    required
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-[#1f5495]"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Phone
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    required
                    pattern="^[0-9+\\-\\s()]{7,}$"
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-[#1f5495]"
                    placeholder="04xx xxx xxx"
                  />
                </div>
              </div>

              {/* Email & City */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-[#1f5495]"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    City/Suburb (VIC)
                  </label>
                  <input
                    name="city"
                    type="text"
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-[#1f5495]"
                    placeholder="Your suburb"
                  />
                </div>
              </div>

              {/* Service */}
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Service
                </label>
                <select
                  name="service"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-[#1f5495]"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option value="rooftop-solar">Rooftop Solar</option>
                  <option value="commercial-solar">
                    Commercial/Industrial Solar
                  </option>
                  <option value="battery-storage">Battery Storage</option>
                  <option value="ev-charging">EV Charging</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-[#1f5495]"
                  placeholder="Tell us a bit about your requirements…"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={submitting}
                className="mt-2 w-full rounded-full bg-[#1f5495] px-6 py-3 text-sm font-semibold text-white hover:brightness-110 disabled:opacity-60"
              >
                {submitting ? "Submitting..." : "Submit Request"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
