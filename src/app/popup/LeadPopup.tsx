// src/app/popup/LeadPopup.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import { X, User, Phone, Mail } from "lucide-react";

type Props = {
  delayMs?: number;
  snoozeDays?: number;
  title?: string;
  debug?: boolean; // set true to ignore snooze/localStorage while testing
};

export default function LeadPopup({
  delayMs = 3000,
  snoozeDays = 7,
  title = "Get a Free Solar Quote",
  debug = false,
}: Props) {
  const [open, setOpen] = useState(false);
  const timerRef = useRef<number | null>(null);
  const snoozeKey = "lead_popup_snoozed_until";

  // schedule popup (respects snooze in localStorage unless debug=true)
  useEffect(() => {
    if (typeof window === "undefined") return;

    if (!debug) {
      try {
        const until = Number(localStorage.getItem(snoozeKey) || "0");
        if (until > Date.now()) {
          console.debug("[LeadPopup] snoozed until", new Date(until).toISOString());
          return; // still snoozed
        }
      } catch (e) {
        console.debug("[LeadPopup] localStorage read error", e);
      }
    } else {
      console.debug("[LeadPopup] debug=true -> ignoring snooze");
    }

    timerRef.current = window.setTimeout(() => {
      setOpen(true);
      console.debug("[LeadPopup] opened after delay");
    }, delayMs);

    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, [delayMs, debug]);

  // prevent background scroll while open
  useEffect(() => {
    const original = typeof document !== "undefined" ? document.body.style.overflow : "";
    if (open && typeof document !== "undefined") document.body.style.overflow = "hidden";
    return () => {
      if (typeof document !== "undefined") document.body.style.overflow = original;
    };
  }, [open]);

  const close = (snooze = false) => {
    setOpen(false);
    if (snooze && typeof window !== "undefined") {
      try {
        const until = Date.now() + snoozeDays * 24 * 60 * 60 * 1000;
        localStorage.setItem(snoozeKey, String(until));
        console.debug("[LeadPopup] snoozed until", new Date(until).toISOString());
      } catch (e) {
        console.debug("[LeadPopup] localStorage write error", e);
      }
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      {/* overlay (click to snooze) */}
      <div className="absolute inset-0 bg-black/60" onClick={() => close(true)} />

      {/* modal */}
      <div className="relative w-[92vw] max-w-md rounded-2xl bg-white shadow-2xl border border-gray-200">
        {/* header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="text-lg font-semibold">{title}</h3>
          <button onClick={() => close(true)} aria-label="Close" className="p-2 rounded hover:bg-gray-100">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* form (demo) */}
        <form
          className="p-4 space-y-3"
          onSubmit={(e) => {
            e.preventDefault();
            // replace with real submit logic / API call
            alert("Submitted (demo). Replace with your real submit)");
            close(true);
          }}
        >
          <label className="block text-sm">
            Name
            <div className="mt-1 flex items-center gap-2 rounded-lg border px-3 py-2">
              <User className="w-4 h-4 opacity-70" />
              <input name="name" className="w-full bg-transparent outline-none" placeholder="Your full name" required />
            </div>
          </label>

          <label className="block text-sm">
            Phone
            <div className="mt-1 flex items-center gap-2 rounded-lg border px-3 py-2">
              <Phone className="w-4 h-4 opacity-70" />
              <input name="phone" type="tel" className="w-full bg-transparent outline-none" placeholder="+61 xxx xxx xxx" required />
            </div>
          </label>

          <label className="block text-sm">
            Email (optional)
            <div className="mt-1 flex items-center gap-2 rounded-lg border px-3 py-2">
              <Mail className="w-4 h-4 opacity-70" />
              <input name="email" type="email" className="w-full bg-transparent outline-none" placeholder="you@example.com" />
            </div>
          </label>

          <button type="submit" className="w-full rounded-lg bg-black text-white font-semibold py-2.5">
            Get Free Consultation
          </button>

          <button type="button" className="w-full text-xs text-gray-500 hover:underline mt-1" onClick={() => close(true)}>
            Not now, remind me later
          </button>
        </form>
      </div>
    </div>
  );
}
