"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Mail, MapPin, User, X } from "lucide-react" // Lucide icons
import { useEffect, useRef, useState } from "react"

const LINKS = [
  // { href: "/", label: "Home" },
  { href: "/solar-blog", label: "Solar Blog" },
  { href: "/about", label: "About" },
]

// Dropdown items
const RESIDENTIAL_ITEMS = [
  { href: "/residential/5kw", label: "5kW Solar" },
  { href: "/residential/6kw", label: "6kW Solar" },
  { href: "/residential/7kw", label: "10kW Solar" },
  { href: "/residential/hybrid", label: "Hybrid Solar System" },
]

const COMMERCIAL_ITEMS = [
  { href: "/commercial/20kw", label: "20kW Solar" },
  { href: "/commercial/30kw", label: "30kW Solar" },
  { href: "/commercial/50kw", label: "50kW Solar" },
]

export default function Navbar() {
  const pathname = usePathname()

  // Global UI states
  const [mobileOpen, setMobileOpen] = useState(false)
  const [quoteOpen, setQuoteOpen] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  // Mobile accordions
  const [resMobOpen, setResMobOpen] = useState(false)
  const [comMobOpen, setComMobOpen] = useState(false)

  // Desktop dropdowns (new click behavior)
  const [resOpen, setResOpen] = useState(false)
  const [comOpen, setComOpen] = useState(false)

  // Refs
  const nameRef = useRef<HTMLInputElement | null>(null)
  const dialogRef = useRef<HTMLDivElement | null>(null)
  const resRef = useRef<HTMLDivElement | null>(null)
  const comRef = useRef<HTMLDivElement | null>(null)

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href))
  const startsWithAny = (bases: string[]) => bases.some((b) => pathname.startsWith(b))

  // ===== Global key handlers =====
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setQuoteOpen(false)
        setResOpen(false)
        setComOpen(false)
      }
    }
    if (quoteOpen || resOpen || comOpen) document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [quoteOpen, resOpen, comOpen])

  // Focus first input when quote modal opens
  useEffect(() => {
    if (quoteOpen) setTimeout(() => nameRef.current?.focus(), 50)
  }, [quoteOpen])

  // Prevent body scroll when modal open
  useEffect(() => {
    if (quoteOpen) {
      document.body.style.overflow = "hidden"
      return () => {
        document.body.style.overflow = ""
      }
    }
  }, [quoteOpen])

  // Close desktop dropdowns on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      const target = e.target as Node
      if (resOpen && resRef.current && !resRef.current.contains(target)) setResOpen(false)
      if (comOpen && comRef.current && !comRef.current.contains(target)) setComOpen(false)
    }
    if (resOpen || comOpen) document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [resOpen, comOpen])

  // Close dropdowns when route changes
  useEffect(() => {
    setResOpen(false)
    setComOpen(false)
    setMobileOpen(false)
    setResMobOpen(false)
    setComMobOpen(false)
  }, [pathname])

  async function handleQuoteSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const payload = Object.fromEntries(form.entries())
    try {
      setSubmitting(true)
      // TODO: replace with your real API
      await new Promise((r) => setTimeout(r, 900)) // demo delay
      setQuoteOpen(false)
      ;(e.currentTarget as HTMLFormElement).reset()
      alert("Thanks! Your request has been submitted.")
    } catch (err) {
      console.error(err)
      alert("Something went wrong. Please try again.")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <header className="sticky top-0 z-50">
      {/* Top blue bar */}
      <div className="w-full bg-[#1f5495] text-white text-sm">
        <div className="mx-auto max-w-7xl px-2 sm:px-4 py-2 md:py-3 lg:py-5 flex items-center justify-between gap-2 sm:gap-4">
          {/* Left socials */}
          <div className="flex items-center gap-5">
            <a href="#" className="flex items-center gap-2 hover:opacity-80">
              <FacebookSvg className="h-4 w-4" />
              <span className="hidden sm:inline">Facebook</span>
            </a>
            <a href="#" className="flex items-center gap-2 hover:opacity-80">
              <TwitterSvg className="h-4 w-4" />
              <span className="hidden sm:inline">Twitter</span>
            </a>
            <a href="#" className="flex items-center gap-2 hover:opacity-80">
              <InstagramSvg className="h-4 w-4" />
              <span className="hidden sm:inline">Linked In</span>
            </a>
          </div>

          {/* Center contact */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-full bg-yellow-400">
                <Mail className="h-4 w-4 text-[#1f5495]" />
              </span>
              <a href="mailto:bilgi@enginerji.com" className="hover:underline">
                bilgi@enginerji.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-full bg-yellow-400">
                <MapPin className="h-4 w-4 text-[#1f5495]" />
              </span>
              <span>12/7 new town, 245x Street, United State</span>
            </div>
          </div>

          {/* Right: mobile menu button */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              className="inline-flex items-center rounded-md bg-white/10 px-3 py-1 text-white hover:bg-white/20"
              onClick={() => setMobileOpen((s) => !s)}
            >
              {mobileOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>
      </div>

      {/* Bottom white rounded bar */}
      <div className="relative z-10 bg-transparent">
        <div className="mx-auto -mt-6 max-w-7xl px-4">
          <div className="flex items-center justify-between gap-2 sm:gap-4 lg:gap-20 rounded-full bg-white px-3 py-2 shadow-xl md:px-6">
            {/* Left: logo + nav links */}
            <div className="flex items-center gap-6 md:gap-9">
              {/* Logo only */}
              <Link href="/" className="flex items-center shrink-0" aria-label="Home">
                <div className="relative w-10 h-10 rounded-full bg-[#1f5495]/10 grid place-items-center">
                  <svg viewBox="0 0 64 64" className="w-7 h-7">
                    <circle cx="32" cy="32" r="16" fill="none" stroke="#20D67B" strokeWidth="3" />
                    <circle cx="32" cy="32" r="8" fill="#FF6A00" />
                  </svg>
                </div>
              </Link>

              {/* Navigation Links */}
              <nav className="hidden md:flex items-center">
                {/* Residential dropdown (CLICK) */}
                <div ref={resRef} className="relative">
                  <button
                    onClick={() => {
                      setResOpen((p) => !p)
                      setComOpen(false)
                    }}
                    className={[
                      "flex items-center gap-1 text-sm font-medium transition-colors rounded-full px-4 py-2",
                      startsWithAny(["/residential"])
                        ? "bg-yellow-400 text-[#1f5495]"
                        : "text-gray-700 hover:text-[#1f5495]",
                    ].join(" ")}
                    aria-haspopup="true"
                    aria-expanded={resOpen}
                    aria-controls="res-dd"
                  >
                    Residential
                    <ChevronDown className={`h-4 w-4 transition ${resOpen ? "rotate-180" : ""}`} />
                  </button>
                  {resOpen && (
                    <div
                      id="res-dd"
                      className="absolute left-0 top-full mt-2 w-64 rounded-2xl bg-white p-2 shadow-xl ring-1 ring-black/5"
                    >
                      {RESIDENTIAL_ITEMS.map((it) => (
                        <Link
                          key={it.href}
                          href={it.href}
                          className="block rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1f5495]"
                          onClick={() => setResOpen(false)}
                        >
                          {it.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Divider */}
                <span className="mx-3 hidden h-4 w-px bg-gray-300 md:inline-block" />

                {/* Commercial dropdown (CLICK) */}
                <div ref={comRef} className="relative">
                  <button
                    onClick={() => {
                      setComOpen((p) => !p)
                      setResOpen(false)
                    }}
                    className={[
                      "flex items-center gap-1 text-sm font-medium transition-colors rounded-full px-4 py-2",
                      startsWithAny(["/commercial"])
                        ? "bg-yellow-400 text-[#1f5495]"
                        : "text-gray-700 hover:text-[#1f5495]",
                    ].join(" ")}
                    aria-haspopup="true"
                    aria-expanded={comOpen}
                    aria-controls="com-dd"
                  >
                    Commercial
                    <ChevronDown className={`h-4 w-4 transition ${comOpen ? "rotate-180" : ""}`} />
                  </button>
                  {comOpen && (
                    <div
                      id="com-dd"
                      className="absolute left-0 top-full mt-2 w-72 rounded-2xl bg-white p-2 shadow-xl ring-1 ring-black/5"
                    >
                      {COMMERCIAL_ITEMS.map((it) => (
                        <Link
                          key={it.href}
                          href={it.href}
                          className="block rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1f5495]"
                          onClick={() => setComOpen(false)}
                        >
                          {it.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Divider */}
                <span className="mx-3 hidden h-4 w-px bg-gray-300 md:inline-block" />

                {/* Static links */}
                {LINKS.map((l, idx) => (
                  <div key={l.href} className="flex items-center">
                    <Link
                      href={l.href}
                      className={[
                        "text-sm font-medium transition-colors",
                        isActive(l.href)
                          ? "bg-yellow-400 text-[#1f5495] rounded-full px-4 py-2"
                          : "text-gray-700 hover:text-[#1f5495]",
                      ].join(" ")}
                    >
                      {l.label}
                    </Link>
                    {idx !== LINKS.length - 1 && (
                      <span className="mx-3 hidden h-4 w-px bg-gray-300 md:inline-block" />
                    )}
                  </div>
                ))}
              </nav>
            </div>

            {/* Right: CTA + Contact */}
            <div className="flex items-center gap-20">
              {/* Request a Quote CTA (wider) */}
              <button
                type="button"
                onClick={() => setQuoteOpen(true)}
                className="whitespace-nowrap rounded-full bg-yellow-400 px-4 py-2 text-sm font-semibold text-[#1f5495] hover:brightness-95 sm:px-6 sm:py-3 md:px-10 lg:px-12"
              >
                Request a Quote
              </button>

              {/* Contact */}
              <div className="hidden items-center gap-5 md:flex">
                <Link href="/contact" className="flex flex-col items-center">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-yellow-400">
                    <User className="h-6 w-6 text-[#1f5495]" />
                  </span>
                  <span className="mt-1 text-[12px] font-semibold text-[#1f5495]">Contact</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile dropdown (links + actions) */}
          {mobileOpen && (
            <div className="mt-2 rounded-2xl bg-white p-4 shadow-lg md:hidden">
              {/* Mobile Logo only */}
              <div className="flex items-center mb-4 pb-3 border-b border-gray-2 00">
                <div className="relative w-8 h-8 rounded-full bg-[#1f5495]/10 grid place-items-center">
                  <svg viewBox="0 0 64 64" className="w-5 h-5">
                    <circle cx="32" cy="32" r="16" fill="none" stroke="#20D67B" strokeWidth="3" />
                    <circle cx="32" cy="32" r="8" fill="#FF6A00" />
                  </svg>
                </div>
              </div>

              {/* Residential (mobile accordion) */}
              <button
                className="flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium text-[#1f5495] bg-yellow-50"
                onClick={() => setResMobOpen((s) => !s)}
              >
                Residential
                <ChevronDown className={`h-4 w-4 transition ${resMobOpen ? "rotate-180" : ""}`} />
              </button>
              {resMobOpen && (
                <div className="mt-1 mb-2 space-y-1 pl-3">
                  {RESIDENTIAL_ITEMS.map((it) => (
                    <Link
                      key={it.href}
                      href={it.href}
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {it.label}
                    </Link>
                  ))}
                </div>
              )}

              {/* Commercial (mobile accordion) */}
              <button
                className="mt-2 flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium text-[#1f5495] bg-yellow-50"
                onClick={() => setComMobOpen((s) => !s)}
              >
                Commercial
                <ChevronDown className={`h-4 w-4 transition ${comMobOpen ? "rotate-180" : ""}`} />
              </button>
              {comMobOpen && (
                <div className="mt-1 mb-2 space-y-1 pl-3">
                  {COMMERCIAL_ITEMS.map((it) => (
                    <Link
                      key={it.href}
                      href={it.href}
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {it.label}
                    </Link>
                  ))}
                </div>
              )}

              {/* Static links */}
              <nav className="mt-2 flex flex-col gap-2">
                {LINKS.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setMobileOpen(false)}
                    className={[
                      "rounded-md px-3 py-2 text-sm font-medium",
                      isActive(l.href) ? "bg-yellow-400 text-[#1f5495]" : "text-gray-700 hover:bg-gray-100",
                    ].join(" ")}
                  >
                    {l.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-3 h-px bg-gray-200" />

              <div className="mt-3 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => {
                    setMobileOpen(false)
                    setQuoteOpen(true)
                  }}
                  className="w-full rounded-full bg-yellow-400 px-6 py-3 text-sm font-semibold text-[#1f5495]"
                >
                  Request a Quote
                </button>

                <div className="hidden items-center gap-4">
                  <Link
                    href="/contact"
                    className="flex items-center gap-2 rounded-md px-2 py-1 text-sm text-[#1f5495] hover:bg-gray-100"
                    onClick={() => setMobileOpen(false)}
                  >
                    <span className="grid h-8 w-8 place-items-center rounded-md bg-yellow-400">
                      <User className="h-5 w-5 text-[#1f5495]" />
                    </span>
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* --- Modal: Request a Quote --- */}
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
            <p className="mt-1 text-sm text-gray-600">Fill the form and our team will contact you shortly.</p>

            <form className="mt-4 space-y-3" onSubmit={handleQuoteSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">Full Name</label>
                  <input
                    ref={nameRef}
                    name="name"
                    type="text"
                    required
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-[#1f5495]"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">Phone</label>
                  <input
                    name="phone"
                    type="tel"
                    required
                    pattern="^[0-9+\\-\\s()]{7,}$"
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-[#1f5495]"
                    placeholder="+1 555 123 4567"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">Email</label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-[#1f5495]"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">City</label>
                  <input
                    name="city"
                    type="text"
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-[#1f5495]"
                    placeholder="Your city"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">Service</label>
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
                  <option value="commercial-solar">Commercial/Industrial Solar</option>
                  <option value="battery-storage">Battery Storage</option>
                  <option value="ev-charging">EV Charging</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-[#1f5495]"
                  placeholder="Tell us a bit about your requirements…"
                />
              </div>

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
    </header>
  )
}

/** ---- simple social icon svgs to avoid extra packages ---- */
export function SocialBase({
  className,
  path,
}: {
  className?: string
  path: string
}) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d={path} />
    </svg>
  )
}

export function FacebookSvg({ className = "h-4 w-4" }) {
  return (
    <SocialBase
      className={className}
      path="M22 12.06C22 6.48 17.52 2 11.94 2S2 6.48 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34v7.03C18.34 21.24 22 17.08 22 12.06z"
    />
  )
}

export function TwitterSvg({ className = "h-4 w-4" }) {
  return (
    <SocialBase
      className={className}
      path="M22 5.92c-.8.36-1.66.6-2.56.71a4.47 4.47 0 0 0 1.97-2.46 8.9 8.9 0 0 1-2.82 1.08A4.46 4.46 0 0 0 12.1 9.3a12.65 12.65 0 0 1-9.2-4.67 4.46 4.46 0 0 0 1.38 5.95c-.7-.02-1.36-.21-1.94-.53v.05a4.46 4.46 0 0 0 3.57 4.37c-.33.09-.68.14-1.04.14-.25 0-.5-.02-.74-.07a4.47 4.47 0 0 0 4.17 3.1A8.95 8.95 0 0 1 2 19.54 12.63 12.63 0 0 0 8.84 21c7.56 0 11.69-6.26 11.69-11.69 0-.18-.01-.36-.02-.54A8.36 8.36 0 0 0 22 5.92z"
    />
  )
}

export function InstagramSvg({ className = "h-4 w-4" }) {
  return (
    <SocialBase
      className={className}
      path="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5zM18.25 6a1.25 1.25 0 1 1-1.25 1.25A1.25 1.25 0 0 1 18.25 6z"
    />
  )
}

/* Small inline chevron to avoid extra imports */
function ChevronDown({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className}>
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 011.06.02L10 11.085l3.71-3.855a.75.75 0 111.08 1.04l-4.24 4.41a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
        clipRule="evenodd"
      />
    </svg>
  )
}
