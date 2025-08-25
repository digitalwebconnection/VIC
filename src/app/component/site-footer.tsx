/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t bg-white ">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="text-xl font-bold"><img src="/logo.png" alt="" className="w-50" /></div>
            <p className="mt-3 text-sm text-gray-600">
              West Vic Energy
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <div className="text-sm font-semibold uppercase tracking-wide text-gray-900">
              Quick Links
            </div>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link></li>
              <li><Link href="/services" className="text-gray-600 hover:text-gray-900">Services</Link></li>
              <li><Link href="/pricing" className="text-gray-600 hover:text-gray-900">Pricing</Link></li>
              <li><Link href="/about" className="text-gray-600 hover:text-gray-900">About</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-sm font-semibold uppercase tracking-wide text-gray-900">
              Contact
            </div>
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4" aria-hidden="true" />
                <a href="tel:+61 497 358 063" className="hover:text-gray-900">
                  +61 497 358 063
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4" aria-hidden="true" />
                <a href="mailto:info@example.com" className="hover:text-gray-900">
                 admin@westvicenergy.com.au 
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4" aria-hidden="true" />
                <span>19 ferriman way, truganina vic 3029</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <div className="text-sm font-semibold uppercase tracking-wide text-gray-900">
              Follow
            </div>
            <div className="mt-3 flex gap-3">
              <Link aria-label="Facebook" href="#" className="rounded-lg border p-2 text-gray-700 hover:bg-gray-50">
                <Facebook className="h-4 w-4" />
              </Link>
              <Link aria-label="Instagram" href="#" className="rounded-lg border p-2 text-gray-700 hover:bg-gray-50">
                <Instagram className="h-4 w-4" />
              </Link>
              <Link aria-label="LinkedIn" href="#" className="rounded-lg border p-2 text-gray-700 hover:bg-gray-50">
                <Linkedin className="h-4 w-4" />
              </Link>
              <Link aria-label="Twitter" href="#" className="rounded-lg border p-2 text-gray-700 hover:bg-gray-50">
                <Twitter className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 border-y-2  py-6 text-center text-sm text-gray-600 flex items-center justify-around">
          <div>
            <img src="https://www.solarminer.com.au/wp-content/uploads/2023/10/sv-img-new.png" alt="" />
          </div>

          <div className="text-xl">
            © {year} west vic energy. All rights reserved.</div>
        </div>
        <div className="  py-6 text-center text-sm text-gray-600 gap-10 flex items-center justify-around">
          <div>
            <img src="/logo.png" alt=""  className="w-100"/>
          </div>
          <div>
            <img src="https://b799436.smushcdn.com/799436/wp-content/uploads/2017/12/netcc-logo-approved-seller.png?lossy=1&strip=1&webp=1" alt="" className="w-120" />
          </div>
          <div className="text-lg text-start">
            *Performance figures are estimated based on CEC Guidelines and will vary from site to site. Please speak to an west vic energy to make an informed decision about your solar needs and potential cost savings.</div>
        </div>
      </div>
    </footer>
  );
}
