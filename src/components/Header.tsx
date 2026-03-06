"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { sectors, services, contactInfo } from "@/lib/navigation";

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
    <>
      {/* ── Utility Bar ── */}
      <div className="bg-navy-deep text-white/70 text-[13px] hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-9">
          <div className="flex items-center gap-6">
            <a
              href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              {contactInfo.phone}
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              {contactInfo.email}
            </a>
          </div>
          <span className="text-white/40">{contactInfo.address}</span>
        </div>
      </div>

      {/* ── Main Nav ── */}
      <header
        className={`bg-white sticky top-0 z-50 transition-shadow duration-300 ${
          scrolled ? "shadow-nav" : ""
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-[72px]">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-navy tracking-[-0.01em]">
                Regulatory Counsel
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <Link
                href="/about"
                className="text-[15px] text-gray-500 hover:text-navy transition-colors"
              >
                About
              </Link>

              {/* Sectors Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setSectorsOpen(true)}
                onMouseLeave={() => setSectorsOpen(false)}
              >
                <button className="text-[15px] text-gray-500 hover:text-navy transition-colors flex items-center gap-1">
                  Sectors
                  <svg
                    className={`w-4 h-4 transition-transform ${sectorsOpen ? "rotate-180" : ""}`}
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
                        className="block px-5 py-2.5 text-[15px] text-gray-600 hover:bg-offwhite hover:text-navy transition-colors"
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
                <button className="text-[15px] text-gray-500 hover:text-navy transition-colors flex items-center gap-1">
                  Services
                  <svg
                    className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
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
                        className="block px-5 py-2.5 text-[15px] text-gray-600 hover:bg-offwhite hover:text-navy transition-colors"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/insights"
                className="text-[15px] text-gray-500 hover:text-navy transition-colors"
              >
                Insights
              </Link>

              <Link
                href="/contact"
                className="bg-navy text-white px-6 py-2.5 rounded text-[15px] font-medium hover:bg-navy-light transition-colors"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-gray-700"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileOpen && (
            <div className="lg:hidden pb-6 border-t border-gray-100">
              <div className="pt-4 space-y-1">
                <Link
                  href="/about"
                  className="block px-4 py-2.5 text-gray-700 hover:bg-offwhite font-medium"
                  onClick={() => setMobileOpen(false)}
                >
                  About
                </Link>

                {/* Mobile Sectors */}
                <div>
                  <button
                    className="w-full flex justify-between items-center px-4 py-2.5 text-gray-700 hover:bg-offwhite font-medium"
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
                          className="block px-4 py-2 text-gray-600 hover:text-navy"
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
                    className="w-full flex justify-between items-center px-4 py-2.5 text-gray-700 hover:bg-offwhite font-medium"
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
                          className="block px-4 py-2 text-gray-600 hover:text-navy"
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
                  className="block px-4 py-2.5 text-gray-700 hover:bg-offwhite font-medium"
                  onClick={() => setMobileOpen(false)}
                >
                  Insights
                </Link>

                <div className="px-4 pt-3">
                  <Link
                    href="/contact"
                    className="block bg-navy text-white px-6 py-3 rounded font-medium text-center hover:bg-navy-light transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}
