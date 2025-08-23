"use client"

import * as React from "react"
import Link from "next/link"
import { Sun, Battery, Home, Building2, Users, Phone, BookOpen, Menu, X, ChevronDown } from "lucide-react"

const batteryBrands = [
  { href: "/battery/growatt", label: "Growatt" },
  { href: "/battery/foxess", label: "Foxess" },
  { href: "/battery/goodwe", label: "GoodWE" },
  { href: "/battery/alpha-ess", label: "Alpha ESS" },
  { href: "/battery/tesla", label: "Tesla" },
  { href: "/battery/sungrow", label: "Sungrow" },
  { href: "/battery/anker-solix", label: "Anker Solix" },
]

const residentialSolar = [
  { href: "/residential/5kw", label: "5kW Solar" },
  { href: "/residential/6kw", label: "6.6kW Solar" },
  { href: "/residential/10kw", label: "10kW Solar" },
  { href: "/residential/hybrid", label: "Hybrid Solar System" },
]

const commercialSolar = [
  { href: "/commercial/20kw", label: "20kW Solar" },
  { href: "/commercial/30kw", label: "30kW Solar" },
  { href: "/commercial/50kw", label: "50kW Solar" },
]

function cn(...classes: (string | undefined | null | boolean)[]): string {
  return classes.filter(Boolean).join(" ")
}

const Button = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, children, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  ),
)
Button.displayName = "Button"

const DropdownMenu = ({
  trigger,
  children,
  isOpen,
  onToggle,
}: {
  trigger: React.ReactNode
  children: React.ReactNode
  isOpen: boolean
  onToggle: () => void
}) => {
  const dropdownRef = React.useRef<HTMLDivElement>(null)

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={(e) => {
          e.stopPropagation()
          onToggle()
        }}
        className="nav-item-professional flex items-center gap-2 font-heading"
      >
        {trigger}
        <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen && (
        <div
          className="absolute top-full left-0 mt-4 w-[520px] professional-dropdown z-50"
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      )}
    </div>
  )
}

const MobileMenu = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="fixed right-0 top-0 h-full w-80 professional-mobile-menu">
        <div className="professional-mobile-header flex items-center justify-between p-6">
          <div className="flex items-center gap-3">
            <div className="professional-logo">
              <Sun className="h-6 w-6 text-white" />
            </div>
            <span className="font-heading font-bold text-lg text-gray-900">SolarTech</span>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-red-50 rounded-lg transition-colors">
            <X className="h-5 w-5 text-gray-600" />
          </button>
        </div>
        <div className="p-6 space-y-6 overflow-y-auto">
          <div>
            <h3 className="font-heading font-semibold text-red-600 mb-3 flex items-center gap-2">
              <Battery className="h-4 w-4" />
              Solar Battery Offer
            </h3>
            <div className="space-y-2 ml-6">
              {batteryBrands.map((brand) => (
                <Link
                  key={brand.href}
                  href={brand.href}
                  className="block text-gray-600 hover:text-red-600 transition-colors"
                  onClick={onClose}
                >
                  {brand.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-red-600 mb-3 flex items-center gap-2">
              <Home className="h-4 w-4" />
              Residential Solar
            </h3>
            <div className="space-y-2 ml-6">
              {residentialSolar.map((system) => (
                <Link
                  key={system.href}
                  href={system.href}
                  className="block text-gray-600 hover:text-red-600 transition-colors"
                  onClick={onClose}
                >
                  {system.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-red-600 mb-3 flex items-center gap-2">
              <Building2 className="h-4 w-4" />
              Commercial Solar
            </h3>
            <div className="space-y-2 ml-6">
              {commercialSolar.map((system) => (
                <Link
                  key={system.href}
                  href={system.href}
                  className="block text-gray-600 hover:text-red-600 transition-colors"
                  onClick={onClose}
                >
                  {system.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="border-t pt-6 space-y-4">
            <Link
              href="/about"
              className="flex items-center gap-3 text-gray-700 hover:text-red-600 font-medium"
              onClick={onClose}
            >
              <Users className="h-5 w-5" />
              About Us
            </Link>
            <Link
              href="/blog"
              className="flex items-center gap-3 text-gray-700 hover:text-red-600 font-medium"
              onClick={onClose}
            >
              <BookOpen className="h-5 w-5" />
              Blog
            </Link>
            <Button className="professional-cta w-full">
              <Link href="/contact" className="flex items-center justify-center gap-2" onClick={onClose}>
                <Phone className="h-4 w-4" />
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

const ListItem = ({ title, href, children }: { title: string; href: string; children: React.ReactNode }) => {
  return (
    <Link
      href={href}
      className="professional-dropdown-item block select-none space-y-2 leading-none no-underline outline-none"
    >
      <div className="font-heading font-semibold text-gray-900 text-sm">{title}</div>
      <p className="line-clamp-2 text-xs leading-relaxed text-gray-600 font-medium">{children}</p>
    </Link>
  )
}

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [openDropdown, setOpenDropdown] = React.useState<string | null>(null)

  const handleDropdownToggle = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown)
  }

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      setOpenDropdown(null)
    }

    if (openDropdown) {
      document.addEventListener("click", handleClickOutside)
    }

    return () => document.removeEventListener("click", handleClickOutside)
  }, [openDropdown])

  return (
    <header className="sticky top-0 z-50 w-full professional-nav">
      <div className="container flex h-24 items-center justify-between px-6">
        <Link href="/" className="flex items-center space-x-4 group">
          <div className="professional-logo">
            <Sun className="h-10 w-10 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-2xl text-gray-900 group-hover:text-red-600 transition-colors">
              SolarTech
            </span>
            <span className="text-sm text-amber-600 font-medium tracking-wide">Empowering Your Energy Future</span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center space-x-2">
          <div className="flex items-center space-x-1">
            <DropdownMenu
              trigger={
                <>
                  <Battery className="h-4 w-4" />
                  Solar Battery Offer
                </>
              }
              isOpen={openDropdown === "battery"}
              onToggle={() => handleDropdownToggle("battery")}
            >
              <div className="grid grid-cols-2 gap-4">
                {batteryBrands.map((brand) => (
                  <ListItem key={brand.href} title={brand.label} href={brand.href}>
                    Premium {brand.label} battery solutions for reliable energy storage and backup power
                  </ListItem>
                ))}
              </div>
            </DropdownMenu>

            <DropdownMenu
              trigger={
                <>
                  <Home className="h-4 w-4" />
                  Residential Solar
                </>
              }
              isOpen={openDropdown === "residential"}
              onToggle={() => handleDropdownToggle("residential")}
            >
              <div className="grid grid-cols-2 gap-4">
                {residentialSolar.map((system) => (
                  <ListItem key={system.href} title={system.label} href={system.href}>
                    Perfect solar solution tailored for your home energy needs and savings
                  </ListItem>
                ))}
              </div>
            </DropdownMenu>

            <DropdownMenu
              trigger={
                <>
                  <Building2 className="h-4 w-4" />
                  Commercial Solar
                </>
              }
              isOpen={openDropdown === "commercial"}
              onToggle={() => handleDropdownToggle("commercial")}
            >
              <div className="space-y-3">
                {commercialSolar.map((system) => (
                  <ListItem key={system.href} title={system.label} href={system.href}>
                    Scalable solar solutions designed for business operations and cost reduction
                  </ListItem>
                ))}
              </div>
            </DropdownMenu>
          </div>

          <div className="flex items-center space-x-1 ml-8">
            <Link href="/about" className="nav-item-professional flex items-center gap-2">
              <Users className="h-4 w-4" />
              About Us
            </Link>
            <Link href="/blog" className="nav-item-professional flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Blog
            </Link>
            <Button className="professional-cta ml-4">
              <Link href="/contact" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Contact Us
              </Link>
            </Button>
          </div>
        </div>

        <Button className="lg:hidden p-2 hover:bg-red-50 rounded-lg" onClick={() => setIsOpen(true)}>
          <Menu className="h-6 w-6 text-gray-700" />
        </Button>

        <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    </header>
  )
}
