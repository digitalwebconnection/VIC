"use client";

import { useState } from "react";

/** Allow typed dataLayer on window without any */
declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

const features = [
  {
    icon: "✔️",
    title: "Proven Quality Products:",
    description:
      "Quality of products and services is our highest priority. At West Vic Energy, we believe quality should never be compromised.",
  },
  {
    icon: "💰",
    title: "Competitive Pricing:",
    description:
      "We provide competitive pricing for the premium level of quality we deliver. Quality comes at a cost—and we ensure you get the best value for it.",
  },
  {
    icon: "💳",
    title: "Flexible Finance Options:",
    description:
      "Our flexible finance plans, including $0 upfront payment options, allow you to repay comfortably from the savings on your electricity bills.",
  },
  {
    icon: "⚙️",
    title: "Seamless Start To End Process:",
    description:
      "We make the solar journey easy, simple, and hassle-free by guiding our customers at every stage—from consultation to installation.",
  },
  {
    icon: "🎖️",
    title: "Unbeatable After-Sales Care:",
    description:
      "Our dedicated customer support team ensures all after-sales issues are resolved promptly, giving you complete peace of mind.",
  },
];

type OkState = { type: "success" | "error"; msg: string } | null;

interface Web3FormsResponse {
  success: boolean;
  message?: string;
  data?: { submission_id?: string };
  submission_id?: string; // some responses use root-level key
}

export default function WhyVic() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    postcode: "",
  });
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState<OkState>(null);

  // ❗ Put your Web3Forms access key here
  const WEB3FORMS_ACCESS_KEY = "YOUR_WEB3FORMS_ACCESS_KEY";

  const setF = (k: keyof typeof form, v: string) =>
    setForm((s) => ({ ...s, [k]: v }));

  const pushDL = (event: string, extra?: Record<string, unknown>) => {
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({
        event,
        formType: "why_vic",
        ...extra,
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setOk(null);

    if (!WEB3FORMS_ACCESS_KEY || WEB3FORMS_ACCESS_KEY.includes("YOUR_WEB3FORMS")) {
      setOk({
        type: "error",
        msg: "Missing Web3Forms access key. Please add it in the code.",
      });
      return;
    }

    setLoading(true);

    pushDL("lead_form_submission", {
      userName: form.name,
      userEmail: form.email,
      userPhone: form.phone,
      userPostcode: form.postcode,
    });

    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: "New Lead — Why Vic Form",
      from_name: "West VIC Energy",
      name: form.name,
      email: form.email,
      phone: form.phone,
      address: form.address,
      postcode: form.postcode,
      botcheck: "",
      ref_page: typeof window !== "undefined" ? window.location.href : "",
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await res.json()) as Web3FormsResponse;

      if (data?.success) {
        setOk({ type: "success", msg: "Thanks! We’ve received your details." });
        const submissionId = data.data?.submission_id ?? data.submission_id ?? "";
        pushDL("lead_form_success", { submissionId });
        setForm({ name: "", email: "", phone: "", address: "", postcode: "" });
      } else {
        throw new Error(data?.message || "Submission failed");
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Something went wrong";
      setOk({ type: "error", msg: message });
      pushDL("lead_form_error", { errorMessage: message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="bg-white flex items-center max-w-7xl mx-auto justify-center py-12 px-6">
        <div className="max-w-7xl w-full gap-10 items-center">
          {/* Left Side: Info */}
          <section className="py-12 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-15">
              {/* Left content */}
              <div className="md:col-span-2 space-y-6">
                <h2 className="text-4xl font-bold flex justify-center">
                  WHY WEST VIC ENERGY?
                </h2>
                
                <p className="text-lg text-gray-700">
                  West Vic Energy is a trusted solar power company serving{" "}
                  <span className="font-semibold">Victoria and Queensland</span>. 
                  We are committed to delivering quality solar products, professional 
                  installations, and reliable after-sales support. With hundreds of 
                  satisfied customers, we continue to raise the benchmark for 
                  excellence in the solar industry.
                </p>

                {/* Features */}
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="text-orange-500 text-2xl">{feature.icon}</div>
                      <div>
                        <h4 className="font-semibold text-gray-800 text-xl">
                          {feature.title}
                        </h4>
                        <p className="text-lg text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side: Form */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-8">
                  Straight from our desk, to your Inbox.
                </h3>

                {/* Alerts */}
                {ok && (
                  <div
                    className={`mb-4 rounded-md border px-4 py-3 text-sm ${
                      ok.type === "success"
                        ? "border-green-300 bg-green-50 text-green-800"
                        : "border-red-300 bg-red-50 text-red-800"
                    }`}
                  >
                    {ok.msg}
                  </div>
                )}

                <form className="space-y-4" onSubmit={handleSubmit}>
                  {/* Hidden honeypot (anti-bot) */}
                  <input
                    type="checkbox"
                    name="botcheck"
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <input
                    required
                    type="text"
                    placeholder="Your Full Name"
                    value={form.name}
                    onChange={(e) => setF("name", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                  />
                  <input
                    required
                    type="email"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={(e) => setF("email", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                  />
                  <input
                    required
                    type="text"
                    placeholder="Mobile Number"
                    value={form.phone}
                    onChange={(e) => setF("phone", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                  />
                  <input
                    required
                    type="text"
                    placeholder="Street Address"
                    value={form.address}
                    onChange={(e) => setF("address", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                  />
                  <input
                    required
                    type="text"
                    placeholder="Post Code"
                    value={form.postcode}
                    onChange={(e) => setF("postcode", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                  />

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-orange-300 to-yellow-400 text-black font-bold py-2 rounded-md hover:opacity-90 transition disabled:opacity-60"
                  >
                    {loading ? "Submitting..." : "Submit"}
                  </button>
                </form>

                <p className="mt-3 text-xs text-gray-500">
                  By submitting this form you agree to be contacted by our team.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
