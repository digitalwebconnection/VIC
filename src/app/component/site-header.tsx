// src/components/site-header.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, useCallback } from "react";
import {
  Menu,
  X,
  Phone,
  ChevronDown,
  ArrowRight,
  SunMedium,
  Battery,
  Mail,
  MapPin,
} from "lucide-react";

type NavItem = { name: string; href: string };

const NAV: NavItem[] = [
  { name: "About", href: "/component/about" },
  { name: "Contact", href: "/component/contact" },
];

const COMMERCIAL = [
  { name: "30kW Solar System", href: "/component/commercial/30kw", desc: "Balanced capacity for shops, clinics, and offices." },
  { name: "50kW Solar System", href: "/component/commercial/50kw", desc: "Great for showrooms & medium facilities with higher demand." },
  { name: "100kW Solar System", href: "/component/commercial/100kw", desc: "Ideal for small businesses with moderate daytime load." },
];

const RESIDENTIAL = [
  { name: "6.6kW Solar System", href: "/component/residential/6.6kw", desc: "Perfect for small homes with efficient appliances." },
  { name: "10kW Solar System", href: "/component/residential/10kw", desc: "Extra headroom for ACs and higher daytime use." },
  { name: "13.2kW Solar System", href: "/component/residential/13.2kw", desc: "Spacious homes with multiple ACs & devices." },
  { name: "15kw Solar System", href: "/component/residential/15kw", desc: "Grid + battery backup for uninterrupted power." },
];

const BATTERY = [
  { name: "Growatt", href: "/component/battrey/GrowattBattery", desc: "Reliable solar battery storage for homes & businesses." },
  { name: "FoxESS", href: "/component/battrey/FoxessBattery", desc: "Efficient energy storage with advanced tech." },
  { name: "GoodWE", href: "/component/battrey/GoodweBattttriy", desc: "Trusted solar batteries with global presence." },
  { name: "Alpha Ess", href: "/component/battrey/AlphaEssSolar", desc: "Innovative storage with smart management." },
  { name: "Tesla", href: "/component/battrey/TeslaPowerwall", desc: "Premium Powerwall batteries for modern homes." },
  { name: "Sungrow", href: "/component/battrey/Sungrow", desc: "Durable and efficient battery solutions." },
  { name: "Anker Solix", href: "/component/battrey/AnkerSolix", desc: "Portable and powerful storage for flexible use." },
];

// Helper: NAV items except Contact (we’ll place Contact later)
const NAV_WITHOUT_CONTACT = NAV.filter((n) => n.name.toLowerCase() !== "contact");
const CONTACT_ITEM = NAV.find((n) => n.name.toLowerCase() === "contact");

export default function SiteHeader() {
  const pathname = usePathname();
  const [openCommercial, setOpenCommercial] = useState(false);
  const [openResidential, setOpenResidential] = useState(false);
  const [openBattery, setOpenBattery] = useState(false);
  const [openMobile, setOpenMobile] = useState(false);
  const [openCommercialMobile, setOpenCommercialMobile] = useState(false);
  const [openResidentialMobile, setOpenResidentialMobile] = useState(false);
  const [openBatteryMobile, setOpenBatteryMobile] = useState(false);

  const commercialRef = useRef<HTMLLIElement | null>(null);
  const residentialRef = useRef<HTMLLIElement | null>(null);
  const batteryRef = useRef<HTMLLIElement | null>(null);

  const isActive = useCallback(
    (href: string) => (href === "/" ? pathname === "/" : pathname?.startsWith(href)),
    [pathname]
  );

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      const target = e.target as Node;
      if (!commercialRef.current?.contains(target)) setOpenCommercial(false);
      if (!residentialRef.current?.contains(target)) setOpenResidential(false);
      if (!batteryRef.current?.contains(target)) setOpenBattery(false);
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpenCommercial(false);
        setOpenResidential(false);
        setOpenBattery(false);
        setOpenMobile(false);
        setOpenCommercialMobile(false);
        setOpenResidentialMobile(false);
        setOpenBatteryMobile(false);
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    setOpenCommercial(false);
    setOpenResidential(false);
    setOpenBattery(false);
    setOpenMobile(false);
    setOpenCommercialMobile(false);
    setOpenResidentialMobile(false);
    setOpenBatteryMobile(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50  bg-white/80 backdrop-blur">
      <div className="border-b">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-xs text-gray-600">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1">
              <Mail className="h-3.5 w-3.5" />
              admin@westvicenergy.com.au
            </span>
            <span className="hidden items-center gap-1 sm:inline-flex">
              <MapPin className="h-3.5 w-3.5" />
              19 ferriman way, truganina vic 3029
            </span>
          </div>
        </div>
      </div>

      <nav aria-label="Main" className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <Link href="/" className="inline-flex items-center gap-2" aria-label="Home">
            <Image src="/logo.png" alt="Company Logo" width={120} height={40} priority />
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center gap-6 lg:flex">
            {NAV_WITHOUT_CONTACT.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={
                    "inline-flex items-center text-sm font-medium transition me-12" +
                    (isActive(item.href) ? "text-black" : "text-gray-600 hover:text-gray-900")
                  }
                >
                  {item.name}
                </Link>
              </li>
            ))}

            {/* Dropdowns */}
            <li className="relative" ref={residentialRef}>
              <Dropdown
                title="Residential"
                items={RESIDENTIAL}
                open={openResidential}
                setOpen={setOpenResidential}
                otherClose={[setOpenCommercial, setOpenBattery]}
                active={pathname?.startsWith("/component/residential") || pathname?.startsWith("/residential")}
              />
            </li>

            <li className="relative" ref={commercialRef}>
              <Dropdown
                title="Commercial"
                items={COMMERCIAL}
                open={openCommercial}
                setOpen={setOpenCommercial}
                otherClose={[setOpenResidential, setOpenBattery]}
                active={pathname?.startsWith("/component/commercial")}
              />
            </li>

            <li className="relative" ref={batteryRef}>
              <Dropdown
                title="Solar Battery Offer"
                parentHref="/component/battrey"
                items={BATTERY}
                open={openBattery}
                setOpen={setOpenBattery}
                otherClose={[setOpenCommercial, setOpenResidential]}
                active={pathname?.startsWith("/component/battrey")}
                icon="battery"
              />
            </li>

            {CONTACT_ITEM && (
              <li>
                <Link
                  href={CONTACT_ITEM.href}
                  className={
                    "inline-flex items-center text-sm font-medium transition " +
                    (isActive(CONTACT_ITEM.href) ? "text-black" : "text-gray-600 hover:text-gray-900")
                  }
                >
                  {CONTACT_ITEM.name}
                </Link>
              </li>
            )}
          </ul>

          {/* Right CTAs */}
          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/component/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-black px-3.5 py-2 text-sm font-semibold text-white hover:bg-black/90"
            >
              Get a Quote
            </Link>
            <a
              href="tel:+61 497 358 063"
              className="inline-flex items-center gap-2 rounded-xl border px-3.5 py-2 text-sm font-semibold hover:bg-gray-50"
            >
              <Phone className="h-4 w-4" /> Call
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpenMobile((v) => !v)}
            className="inline-flex items-center rounded-xl p-2 text-gray-700 hover:bg-gray-100 lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={openMobile}
          >
            {openMobile ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile drawer */}
        {openMobile && (
          <div className="lg:hidden">
            <ul className="mt-2 flex flex-col gap-1 pb-4">
              {NAV_WITHOUT_CONTACT.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpenMobile(false)}
                    className={
                      "block rounded-lg px-3 py-2 text-sm font-medium transition " +
                      (isActive(item.href) ? "bg-gray-100 text-gray-900" : "text-gray-700 hover:bg-gray-50")
                    }
                  >
                    {item.name}
                  </Link>
                </li>
              ))}

              <MobileSection
                title="Commercial"
                open={openCommercialMobile}
                setOpen={setOpenCommercialMobile}
                items={COMMERCIAL}
                onNavigate={() => setOpenMobile(false)}
              />

              <MobileSection
                title="Residential"
                open={openResidentialMobile}
                setOpen={setOpenResidentialMobile}
                items={RESIDENTIAL}
                onNavigate={() => setOpenMobile(false)}
              />

              <MobileSection
                title="Solar Battery Offer"
                open={openBatteryMobile}
                setOpen={setOpenBatteryMobile}
                items={BATTERY}
                onNavigate={() => setOpenMobile(false)}
              />

              {CONTACT_ITEM && (
                <li className="mt-1">
                  <Link
                    href={CONTACT_ITEM.href}
                    onClick={() => setOpenMobile(false)}
                    className={
                      "block rounded-lg px-3 py-2 text-sm font-medium transition " +
                      (isActive(CONTACT_ITEM.href) ? "bg-gray-100 text-gray-900" : "text-gray-700 hover:bg-gray-50")
                    }
                  >
                    {CONTACT_ITEM.name}
                  </Link>
                </li>
              )}

              <li className="mt-2 flex gap-2 px-1">
                <Link
                  href="/component/contact"
                  onClick={() => setOpenMobile(false)}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-black px-3 py-2 text-sm font-semibold text-white hover:bg-black/90"
                >
                  Get a Quote
                </Link>
                <a
                  href="tel:+61 497 358 063"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border px-3 py-2 text-sm font-semibold hover:bg-gray-50"
                >
                  <Phone className="h-4 w-4" /> Call
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
    </header>
  );
}

/* ----------------- Reusable components ----------------- */

type DropdownItem = { name: string; href: string; desc: string };

function Dropdown({
  title,
  items,
  open,
  setOpen,
  otherClose,
  active,
  icon,
  parentHref,
}: {
  title: string;
  items: DropdownItem[];
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  otherClose: React.Dispatch<React.SetStateAction<boolean>>[];
  active?: boolean;
  icon?: "battery";
  parentHref?: string;
}) {
  return (
    <>
      <div className="inline-flex items-center gap-1">
        {parentHref ? (
          <Link
            href={parentHref}
            className={
              "inline-flex items-center text-sm font-medium transition " +
              (active ? "text-black" : "text-gray-600 hover:text-gray-900")
            }
            aria-label={title}
          >
            {title}
          </Link>
        ) : (
          <span
            className={
              "inline-flex items-center text-sm font-medium " +
              (active ? "text-black" : "text-gray-600")
            }
          >
            {title}
          </span>
        )}

        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setOpen((v) => !v);
            otherClose.forEach((fn) => fn(false));
          }}
          className="inline-flex items-center rounded-lg px-1.5 py-1 hover:bg-gray-100"
          aria-haspopup="menu"
          aria-expanded={open}
          aria-label={`Toggle ${title} menu`}
        >
          <ChevronDown className={"h-4 w-4 transition-transform " + (open ? "rotate-180" : "")} />
        </button>
      </div>

      {open && (
        <div
          role="menu"
          className="absolute left-1/2 top-full mt-3 w-[720px] -translate-x-1/2 rounded-2xl border bg-white shadow-xl z-50"
        >
          <div className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 border-l border-t bg-white" />
          <div className="grid gap-2 p-3 sm:grid-cols-3">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                role="menuitem"
                className="group rounded-xl border p-4 transition hover:border-gray-300 hover:bg-gray-50 focus:outline-none"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex rounded-lg border p-2">
                    {icon === "battery" ? <Battery className="h-4 w-4" /> : <SunMedium className="h-4 w-4" />}
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">{item.name}</div>
                    <p className="mt-1 text-xs text-gray-600">{item.desc}</p>
                    <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-gray-800 transition group-hover:translate-x-0.5">
                      View details <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="flex items-center justify-between border-t px-4 py-3 text-xs text-gray-600">
            <span>
              Have questions?{" "}
              <Link href="/component/contact" className="font-medium text-gray-900 underline">
                Talk to an expert
              </Link>
            </span>
            <a href="tel:+61 497 358 063" className="rounded-lg border px-3 py-1.5 font-semibold hover:bg-gray-50">
              Call +61 497 358 063
            </a>
          </div>
        </div>
      )}
    </>
  );
}

function MobileSection({
  title,
  open,
  setOpen,
  items,
  onNavigate,
}: {
  title: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  items: DropdownItem[];
  onNavigate: () => void;
}) {
  return (
    <li className="mt-1">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm font-medium text-gray-700 hover:bg-gray-50"
        aria-expanded={open}
      >
        <span>{title}</span>
        <ChevronDown className={"h-4 w-4 transition-transform " + (open ? "rotate-180" : "")} />
      </button>
      {open && (
        <ul className="mt-1 space-y-1 pl-3">
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={onNavigate}
                className="block rounded-lg px-3 py-2 text-sm hover:bg-gray-50"
              >
                <div className="font-medium">{item.name}</div>
                <div className="text-xs text-gray-600">{item.desc}</div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
