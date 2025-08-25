"use client";

import { useEffect, useState } from "react";

type Props = { delayMs?: number };

export default function PopupLeadForm({ delayMs = 3000 }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // don't show again if dismissed (per browser)
    if (typeof window === "undefined") return;
    if (localStorage.getItem("leadPopupDismissed") === "1") return;

    const t = setTimeout(() => setOpen(true), delayMs);
    return () => clearTimeout(t);
  }, [delayMs]);

  // prevent background scroll when open
  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = original; };
  }, [open]);

  const close = () => {
    setOpen(false);
    try { localStorage.setItem("leadPopupDismissed", "1"); } catch {}
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: send to your API
    close();
  };

  if (!open) return null;

  return (
    <div
      aria-modal
      role="dialog"
      className="fixed inset-0 z-[1000] flex items-center justify-center"
    >
      {/* overlay */}
      <button
        aria-label="Close popup"
        onClick={close}
        className="absolute inset-0 bg-black/60"
      />
      {/* modal */}
      <div className="relative w-[92vw] max-w-md rounded-2xl bg-white p-6 shadow-2xl">
        <button
          onClick={close}
          aria-label="Close"
          className="absolute right-3 top-3 rounded-full border border-gray-200 px-2 py-1 text-gray-600 hover:bg-gray-100"
        >
          ✕
        </button>

        <h3 className="mb-2 text-xl font-semibold">Get a Free Solar Quote</h3>
        <p className="mb-4 text-sm text-gray-600">
          Share your details and our team will call you back.
        </p>

        <form onSubmit={submit} className="space-y-3">
          <div>
            <label className="mb-1 block text-sm font-medium">Full Name</label>
            <input
              required
              name="name"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-black"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium">Phone</label>
            <input
              required
              name="phone"
              inputMode="tel"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-black"
              placeholder="XXXXX XXXXX"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium">Email (optional)</label>
            <input
              type="email"
              name="email"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-black"
              placeholder="you@example.com"
            />
          </div>
          <button
            type="submit"
            className="mt-2 w-full rounded-xl bg-black px-4 py-2 font-medium text-white hover:opacity-90"
          >
            Request Callback
          </button>
        </form>
        <p className="mt-3 text-xs text-gray-500">
          By continuing, you agree to be contacted by West VIC Energy.
        </p>
      </div>
    </div>
  );
}
