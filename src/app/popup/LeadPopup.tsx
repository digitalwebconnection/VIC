"use client";

import { useEffect, useMemo, useState } from "react";
import { X, User, Phone, Mail } from "lucide-react";

/* ---------- Types ---------- */

type Props = {
  delayMs?: number;     // default: 3000 ms
  snoozeDays?: number;  // default: 7 days
  title?: string;       // popup heading
};

type DataLayerEvent = Record<string, unknown>;

interface Web3FormsResponse {
  success: boolean;
  message?: string;
  data?: {
    submission_id?: string;
    [k: string]: unknown;
  };
  submission_id?: string; // sometimes provided at top-level
}

/* ---------- Helpers ---------- */

const pushDL = (payload: DataLayerEvent): void => {
  if (typeof window === "undefined") return;
  // Avoid global declaration conflicts by using a local shim
  const w = window as unknown as { dataLayer?: DataLayerEvent[] };
  w.dataLayer = w.dataLayer ?? [];
  w.dataLayer.push(payload);
};

/* ---------- Component ---------- */

export default function LeadPopup({
  delayMs = 3000,
  snoozeDays = 7,
  title = "Get a Free Solar Quote",
}: Props) {
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState<{ name: string; phone: string; email: string }>({
    name: "",
    phone: "",
    email: "",
  });

  const accessKey =
    process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "YOUR_WEB3FORMS_ACCESS_KEY";

  const snoozeKey = useMemo(() => "lead_popup_snoozed_until", []);

  useEffect(() => {
    try {
      const until = localStorage.getItem(snoozeKey);
      if (until && Number(until) > Date.now()) return; // still snoozed
    } catch {
      /* ignore storage errors */
    }
    const t: ReturnType<typeof setTimeout> = setTimeout(() => {
      setOpen(true);
      pushDL({ event: "lead_popup_shown", popup: "web3forms", title });
    }, delayMs);
    return () => clearTimeout(t);
  }, [delayMs, snoozeKey, title]);

  const close = (snooze = false) => {
    setOpen(false);
    if (snooze) {
      try {
        const until = Date.now() + snoozeDays * 24 * 60 * 60 * 1000;
        localStorage.setItem(snoozeKey, String(until));
      } catch {
        /* ignore storage errors */
      }
    }
  };

  const onChange =
    (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement>): void =>
      setForm((s) => ({ ...s, [k]: e.target.value }));

  const validate = (): string | null => {
    if (!form.name.trim()) return "Please enter your name";
    if (!/^\+?\d[\d\s\-()]{6,}$/.test(form.phone.trim()))
      return "Please enter a valid phone number";
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      return "Please enter a valid email";
    return null;
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const errMsg = validate();
    if (errMsg) {
      alert(errMsg);
      return;
    }

    pushDL({
      event: "lead_form_submission",
      formType: "popup",
      provider: "web3forms",
      userName: form.name,
      userPhone: form.phone,
      userEmail: form.email || undefined,
    });

    setSubmitting(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          subject: "New Lead from Popup",
          from_name: "Website",
          name: form.name,
          phone: form.phone,
          email: form.email,
          page_url: typeof window !== "undefined" ? window.location.href : "",
        }),
      });

      const data: Web3FormsResponse = await res.json();

      if (data.success) {
        const submissionId = data.data?.submission_id ?? data.submission_id;
        pushDL({
          event: "lead_form_success",
          formType: "popup",
          provider: "web3forms",
          submissionId,
        });
        setForm({ name: "", phone: "", email: "" });
        close(true); // snooze on success
        alert("Thanks! We’ll contact you shortly.");
      } else {
        throw new Error(data.message ?? "Submission failed");
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Unknown error";
      pushDL({
        event: "lead_form_error",
        formType: "popup",
        provider: "web3forms",
        errorMessage: message,
      });
      alert("Sorry, something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/45 backdrop-blur-sm p-4">
      <div className="w-full max-w-md rounded-2xl bg-white shadow-2xl border border-gray-200">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold">{title}</h3>
          <button
            aria-label="Close popup"
            className="p-2 rounded hover:bg-gray-100"
            onClick={() => close(true)}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <form className="p-4 space-y-3" onSubmit={onSubmit}>
          {/* Hidden fields for Web3Forms (not required but useful) */}
          <input type="hidden" name="access_key" value={accessKey} />
          <input type="hidden" name="subject" value="New Lead from Popup" />
          <input type="hidden" name="from_name" value="Website" />

          <label className="block text-sm">
            Name
            <div className="mt-1 flex items-center gap-2 rounded-lg border border-gray-300 px-3 py-2">
              <User className="w-4 h-4 opacity-70" />
              <input
                type="text"
                value={form.name}
                onChange={onChange("name")}
                placeholder="Your full name"
                className="w-full bg-transparent outline-none"
                required
              />
            </div>
          </label>

          <label className="block text-sm">
            Phone
            <div className="mt-1 flex items-center gap-2 rounded-lg border border-gray-300 px-3 py-2">
              <Phone className="w-4 h-4 opacity-70" />
              <input
                type="tel"
                value={form.phone}
                onChange={onChange("phone")}
                placeholder="+61 4xx xxx xxx"
                className="w-full bg-transparent outline-none"
                required
              />
            </div>
          </label>

          <label className="block text-sm">
            Email (optional)
            <div className="mt-1 flex items-center gap-2 rounded-lg border border-gray-300 px-3 py-2">
              <Mail className="w-4 h-4 opacity-70" />
              <input
                type="email"
                value={form.email}
                onChange={onChange("email")}
                placeholder="you@example.com"
                className="w-full bg-transparent outline-none"
              />
            </div>
          </label>

          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded-lg bg-black text-white font-semibold py-2.5 hover:bg-black/90 disabled:opacity-60"
          >
            {submitting ? "Submitting..." : "Get Free Consultation"}
          </button>

          <button
            type="button"
            className="w-full text-xs text-gray-500 hover:underline mt-1"
            onClick={() => close(true)}
          >
            Not now, remind me later
          </button>
        </form>
      </div>
    </div>
  );
}
