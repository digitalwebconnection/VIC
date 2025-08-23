/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import type React from "react"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10">
        {/* ===== Row 1: Brand + About + Newsletter ===== */}
        <div className="grid gap-10 lg:gap-14 md:grid-cols-3">
          {/* Brand + Socials */}
          <div>
            <Brand />
            <div className="mt-6 flex items-center gap-6 text-sm">
              <Social icon={<FbIcon />} label="Facebook" href="#" />
              <Social icon={<TwIcon />} label="Twitter" href="#" />
              <Social icon={<InIcon />} label="LinkedIn" href="#" />
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="text-lg font-extrabold mb-3">About West VIC Energy</h3>
            <p className="text-[15px] leading-7 text-white/85">
              West VIC Energy designs and installs quality rooftop solar and battery systems across Victoria. We focus
              on trusted Tier-1 products, neat workmanship, and responsive after-sales support—so you get reliable
              savings and a smooth experience end-to-end.
            </p>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-extrabold mb-3">Subscribe to our newsletter</h3>
            <p className="text-[15px] text-white/85">Get solar tips, rebates updates, and special offers.</p>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                // TODO: replace with your API call
                alert("Subscribed!")
              }}
              className="mt-5"
            >
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address…"
                  className="w-full rounded-full bg-transparent text-white placeholder-white/70 border border-white/35 px-5 pr-16 py-3 outline-none"
                  aria-label="Email address"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="absolute right-1 top-1 bottom-1 aspect-square rounded-full bg-yellow-400 grid place-items-center"
                >
                  <SendIcon />
                </button>
              </div>
            </form>
          </div>
        </div>



        {/* ===== Row 2: Contact Pills ===== */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <Pill icon={<PhoneIcon />} title="Phone" text={<a href="tel:+61497358063">+61 497 358 063</a>} />
          <Pill icon={<PinIcon />} title="Address" text={<span>19 Ferriman Way, Truganina VIC 3029</span>} />
          <Pill
            icon={<MailIcon />}
            title="Email"
            text={<a href="mailto:admin@westvicenergy.com.au">admin@westvicenergy.com.au</a>}
          />
        </div>

        {/* ===== Row 3: Bottom Bar ===== */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[13px] text-white/85">
          <p>© {year} West VIC Energy. All rights reserved.</p>
          <nav className="flex items-center gap-10">
            <a href="/privacy" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-white">
              Terms &amp; Conditions
            </a>
            <a href="/about" className="hover:text-white">
              About Us
            </a>
            <a href="/battery" className="hover:text-white">
              Battery
            </a>
          </nav>
        </div>
      </div>

      {/* sir ne bola line  */}
      <div className="py-2 bg-white">
        <div className="max-w-full mx-auto text-black flex flex-col md:flex-row items-center justify-around gap-5 text-center md:text-left">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <Image
              src="/logo.png"
              alt="Solar Miner"
              width={160}
              height={50}
              className="object-contain"
            />
            <Image
              src="/images/approved-seller.png"
              alt="Approved Seller"
              width={50}
              height={50}
              className="object-contain"
            />
          </div>

          {/* Text */}
          <p className="text-black text-lg  max-w-6xl">
            <span className="font-semibold">*</span>
            Performance figures are estimated based on CEC Guidelines and will
            vary from site to site. Please speak to a Solar Miner consultant to
            make an informed decision about your solar needs and potential cost
            savings.
          </p>
        </div>
      </div>

    </footer>



  )
}

/* ================= UI Bits ================= */
function Social({ icon, label, href = "#" }: { icon: React.ReactNode; label: string; href?: string }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 text-white/90 hover:text-white cursor-pointer"
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="w-4 h-4">{icon}</span>
      <span>{label}</span>
    </a>
  )
}

function Pill({ icon, title, text }: { icon: React.ReactNode; title: string; text: React.ReactNode }) {
  return (
    <div className="relative rounded-full bg-yellow-400 px-2 pl-20 py-2">
      <div className="absolute left-1 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-blue-900 grid place-items-center">
        <span className="w-6 h-6">{icon}</span>
      </div>
      <div className="font-extrabold text-black">{title}</div>
      <div className="text-black text-[15px]">{text}</div>
    </div>
  )
}

function Brand() {
  return (
    <div className="flex items-center gap-2">
      <div className="relative w-38 h-30 rounded-full grid place-items-center">
        <img src="/logo.png" alt="West VIC Energy Logo" className="w-30 h-24 object-cover" />
      </div>
      <div>
        <div className="text-2xl font-extrabold tracking-wide">
          WEST <span className="text-[#20D67B]">VIC</span> ENERGY
        </div>
        <div className="text-[18px] tracking-wide text-white/70">SOLAR • BATTERY</div>
      </div>
    </div>
  )
}

/* ================= Icons (inline SVG) ================= */
function FbIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 4.98 3.66 9.11 8.44 9.93v-7.02H7.9v-2.9h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.9h-2.34V22c4.78-.82 8.44-4.95 8.44-9.93z" />
    </svg>
  )
}

function TwIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 5.95c-.75.33-1.55.55-2.39.65a4.17 4.17 0 001.83-2.3 8.3 8.3 0 01-2.63 1 4.15 4.15 0 00-7.07 3.79A11.78 11.78 0 013 4.87a4.15 4.15 0 001.28 5.54 4.1 4.1 0 01-1.88-.52v.05a4.15 4.15 0 003.33 4.07c-.46.13-.95.2-1.46.07a4.16 4.16 0 003.87 2.88A8.33 8.33 0 012 19.55a11.76 11.76 0 006.36 1.86c7.64 0 11.82-6.33 11.82-11.82 0-.18 0-.36-.01-.54A8.44 8.44 0 0022 5.95z" />
    </svg>
  )
}

function InIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19 3A2.94 2.94 0 0122 6v12a2.94 2.94 0 01-3 3H5a2.94 2.94 0 01-3-3V6a2.94 2.94 0 013-3h14zm-9 6H7v9h3V9zm7 0h-3v1.7c.43-.85 1.53-1.8 3.1-1.7 2.56.12 2.9 1.68 2.9 3.86V18h-3v-4.4c0-1.05-.02-2.4-1.46-2.4-1.46 0-1.69 1.14-1.69 2.33V18h-3V9h3v1.23c.43-.73 1.49-1.73 3.05-1.73 1.44 0 2 .49 2 .49V9zM8.5 6.5A1.5 1.5 0 107 8a1.5 1.5 0 001.5-1.5z" />
    </svg>
  )
}

function SendIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 text-black/80" fill="currentColor" aria-hidden="true">
      <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="white" aria-hidden="true">
      <path d="M6.6 10.8a15.1 15.1 0 006.6 6.6l2.2-2.2a1 1 0 011.1-.24c1.2.49 2.6.76 4 .76a1 1 0 011 1V21a1 1 0 01-1 1C11.1 22 2 12.9 2 2a1 1 0 011-1h3.28a1 1 0 011 1c0 1.4.27 2.8.76 4a1 1 0 01-.24 1.1l-2.2 2.2z" />
    </svg>
  )
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="white" aria-hidden="true">
      <path d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="white" aria-hidden="true">
      <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  )
}
