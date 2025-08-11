"use client"

import type React from "react"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#070E8B] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10">
        {/* ===== Row 1: Brand + About + Newsletter ===== */}
        <div className="grid gap-10 lg:gap-14 md:grid-cols-3">
          {/* Brand + Socials */}
          <div>
            <Brand />
            <div className="mt-6 flex items-center gap-6 text-sm">
              <Social icon={<FbIcon />} label="Facebook" />
              <Social icon={<TwIcon />} label="Twitter" />
              <Social icon={<InIcon />} label="Linked In" />
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="text-lg font-extrabold mb-3">About Energix</h3>
            <p className="text-[15px] leading-7 text-white/85">
              Solar energy&apos;s exceptional synergies with energy storage, electric vehicles and smart grids means the
              industry works on the frontline of technology and system change to deliver.
            </p>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-extrabold mb-3">Subscribe To Our Newsletter.</h3>
            <p className="text-[15px] text-white/85">Subscribe email and get recent news and updates</p>
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
                  placeholder="Enter Your Email Address..."
                  className="w-full rounded-full bg-transparent text-white placeholder-white/70
                             border border-white/35 px-5 pr-16 py-3 outline-none"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="absolute right-1 top-1 bottom-1 aspect-square rounded-full
                             bg-[#FF6A00] grid place-items-center"
                >
                  <SendIcon />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* ===== Row 2: Contact Pills ===== */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <Pill icon={<PhoneIcon />} title="Phone No:" text="01234 525 407  -  01234 525 407" />
          <Pill icon={<PinIcon />} title="Address:" text="12/7 new town, 245x Town 1214 Street, United State" />
          <Pill icon={<MailIcon />} title="Email Address:" text="username@domainname.com" />
        </div>

        {/* ===== Row 3: Bottom Bar ===== */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[13px] text-white/85">
          <p>© Copyright Energix {year}. All Right Reserved.</p>
          <nav className="flex items-center gap-10">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-white">
              About Us
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

/* ================= UI Bits ================= */
function Social({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <span className="inline-flex items-center gap-2 text-white/90 hover:text-white cursor-pointer">
      <span className="w-4 h-4">{icon}</span>
      <span>{label}</span>
    </span>
  )
}

function Pill({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="relative rounded-full bg-[#1FA75B] px-6 pl-20 py-5">
      <div className="absolute left-3 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-[#FF6A00] grid place-items-center">
        <span className="w-6 h-6">{icon}</span>
      </div>
      <div className="font-extrabold">{title}</div>
      <div className="text-white/95 text-[15px]">{text}</div>
    </div>
  )
}

function Brand() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative w-14 h-14 rounded-full bg-white/10 grid place-items-center">
        {/* simple ring-dot logo */}
        <svg viewBox="0 0 64 64" className="w-9 h-9">
          <circle cx="32" cy="32" r="20" fill="none" stroke="#20D67B" strokeWidth="4" />
          <circle cx="32" cy="32" r="10" fill="#FF6A00" />
        </svg>
      </div>
      <div>
        <div className="text-2xl font-extrabold tracking-wide">
          ENER<span className="text-[#20D67B]">GIX</span>
        </div>
        <div className="text-[11px] tracking-wide text-white/70">RENEWABLE TECHNOLOGY</div>
      </div>
    </div>
  )
}

/* ================= Icons (inline SVG) ================= */
function FbIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 4.98 3.66 9.11 8.44 9.93v-7.02H7.9v-2.9h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.9h-2.34V22c4.78-.82 8.44-4.95 8.44-9.93z" />
    </svg>
  )
}

function TwIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 5.95c-.75.33-1.55.55-2.39.65a4.17 4.17 0 001.83-2.3 8.3 8.3 0 01-2.63 1 4.15 4.15 0 00-7.07 3.79A11.78 11.78 0 013 4.87a4.15 4.15 0 001.28 5.54 4.1 4.1 0 01-1.88-.52v.05a4.15 4.15 0 003.33 4.07c-.46.13-.95.2-1.46.07a4.16 4.16 0 003.87 2.88A8.33 8.33 0 012 19.55a11.76 11.76 0 006.36 1.86c7.64 0 11.82-6.33 11.82-11.82 0-.18 0-.36-.01-.54A8.44 8.44 0 0022 5.95z" />
    </svg>
  )
}

function InIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3A2.94 2.94 0 0122 6v12a2.94 2.94 0 01-3 3H5a2.94 2.94 0 01-3-3V6a2.94 2.94 0 013-3h14zm-9 6H7v9h3V9zm7 0h-3v1.7c.43-.85 1.53-1.8 3.1-1.7 2.56.12 2.9 1.68 2.9 3.86V18h-3v-4.4c0-1.05-.02-2.4-1.46-2.4-1.46 0-1.69 1.14-1.69 2.33V18h-3V9h3v1.23c.43-.73 1.49-1.73 3.05-1.73 1.44 0 2 .49 2 .49V9zM8.5 6.5A1.5 1.5 0 107 8a1.5 1.5 0 001.5-1.5z" />
    </svg>
  )
}

function SendIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="currentColor">
      <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="white">
      <path d="M6.6 10.8a15.1 15.1 0 006.6 6.6l2.2-2.2a1 1 0 011.1-.24c1.2.49 2.6.76 4 .76a1 1 0 011 1V21a1 1 0 01-1 1C11.1 22 2 12.9 2 2a1 1 0 011-1h3.28a1 1 0 011 1c0 1.4.27 2.8.76 4a1 1 0 01-.24 1.1l-2.2 2.2z" />
    </svg>
  )
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="white">
      <path d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="white">
      <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  )
}
