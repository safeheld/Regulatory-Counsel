"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { sectors, services } from "@/lib/navigation";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [sectorsOpen, setSectorsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileSectorsOpen, setMobileSectorsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`bg-white sticky top-0 z-50 transition-shadow duration-300 ${
        scrolled ? "shadow-nav" : ""
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 lg:h-[88px]">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-tight">
            <span className="font-serif text-[22px] lg:text-[26px] font-bold text-navy tracking-[-0.01em]">
              Regulatory Counsel
            </span>
            <span className="text-[11px] lg:text-[12px] text-gold font-medium tracking-[0.12em] uppercase -mt-0.5">
              Global Regulatory Advisory
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-9">
            {/* Sectors Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setSectorsOpen(true)}
              onMouseLeave={() => setSectorsOpen(false)}
            >
              <button className="text-[15px] text-gray-600 hover:text-navy transition-colors flex items-center gap-1 py-2">
                Sectors
                <svg
                  className={`w-3.5 h-3.5 transition-transform ${sectorsOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {sectorsOpen && (
                <div className="absolute top-full left-0 w-72 bg-white rounded-lg shadow-card-hover border border-gray-100 py-2 mt-0">
                  {sectors.map((sector) => (
                    <Link
                      key={sector.href}
                      href={sector.href}
                      className="block px-5 py-2.5 text-[15px] text-gray-600 hover:bg-cream hover:text-navy transition-colors"
                    >
                      {sector.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="text-[15px] text-gray-600 hover:text-navy transition-colors flex items-center gap-1 py-2">
                Services
                <svg
                  className={`w-3.5 h-3.5 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 w-72 bg-white rounded-lg shadow-card-hover border border-gray-100 py-2 mt-0">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-5 py-2.5 text-[15px] text-gray-600 hover:bg-cream hover:text-navy transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/insights"
              className="text-[15px] text-gray-600 hover:text-navy transition-colors"
            >
              Insights
            </Link>

            <Link
              href="/about"
              className="text-[15px] text-gray-600 hover:text-navy transition-colors"
            >
              About
            </Link>

            <Link
              href="/contact"
              className="bg-navy text-white px-7 py-3 rounded text-[14px] font-medium hover:bg-navy-light transition-colors"
            >
              Speak to an Expert
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-navy"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileOpen && (
          <div className="lg:hidden pb-8 border-t border-gray-100">
            <div className="pt-4 space-y-1">
              {/* Mobile Sectors */}
              <div>
                <button
                  className="w-full flex justify-between items-center px-4 py-3 text-navy hover:bg-cream/50 font-medium"
                  onClick={() => setMobileSectorsOpen(!mobileSectorsOpen)}
                >
                  Sectors
                  <svg
                    className={`w-4 h-4 transition-transform ${mobileSectorsOpen ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {mobileSectorsOpen && (
                  <div className="pl-4">
                    {sectors.map((sector) => (
                      <Link
                        key={sector.href}
                        href={sector.href}
                        className="block px-4 py-2 text-gray-600 hover:text-navy text-[15px]"
                        onClick={() => setMobileOpen(false)}
                      >
                        {sector.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Services */}
              <div>
                <button
                  className="w-full flex justify-between items-center px-4 py-3 text-navy hover:bg-cream/50 font-medium"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                >
                  Services
                  <svg
                    className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {mobileServicesOpen && (
                  <div className="pl-4">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block px-4 py-2 text-gray-600 hover:text-navy text-[15px]"
                        onClick={() => setMobileOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/insights"
                className="block px-4 py-3 text-navy hover:bg-cream/50 font-medium"
                onClick={() => setMobileOpen(false)}
              >
                Insights
              </Link>

              <Link
                href="/about"
                className="block px-4 py-3 text-navy hover:bg-cream/50 font-medium"
                onClick={() => setMobileOpen(false)}
              >
                About
              </Link>

              <div className="px-4 pt-4">
                <Link
                  href="/contact"
                  className="block bg-navy text-white px-6 py-3.5 rounded font-medium text-center hover:bg-navy-light transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  Speak to an Expert
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
