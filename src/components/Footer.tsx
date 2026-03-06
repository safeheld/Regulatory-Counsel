import Link from "next/link";
import { sectors, services, contactInfo } from "@/lib/navigation";

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-5 tracking-[-0.01em]">
              Regulatory Counsel
            </h3>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Expert regulatory and compliance consulting for financial
              services firms across the UK.
            </p>
            <div className="space-y-3 text-sm text-white/60">
              <p>{contactInfo.address}</p>
              <p>
                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                  className="hover:text-white transition-colors"
                >
                  {contactInfo.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="hover:text-white transition-colors"
                >
                  {contactInfo.email}
                </a>
              </p>
            </div>
          </div>

          {/* Sectors */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.1em] text-white/40 mb-5">
              Sectors
            </h4>
            <ul className="space-y-3">
              {sectors.map((sector) => (
                <li key={sector.href}>
                  <Link
                    href={sector.href}
                    className="text-white/60 hover:text-white text-[14px] transition-colors"
                  >
                    {sector.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.1em] text-white/40 mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-white/60 hover:text-white text-[14px] transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.1em] text-white/40 mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-white/60 hover:text-white text-[14px] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/insights"
                  className="text-white/60 hover:text-white text-[14px] transition-colors"
                >
                  Insights
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white/60 hover:text-white text-[14px] transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-white/60 hover:text-white text-[14px] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-white/60 hover:text-white text-[14px] transition-colors"
                >
                  Terms of Business
                </Link>
              </li>
              <li>
                <Link
                  href="/cookies"
                  className="text-white/60 hover:text-white text-[14px] transition-colors"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[13px] text-white/30">
            <p>
              &copy; {new Date().getFullYear()} {contactInfo.company}. All
              rights reserved.
            </p>
            <p>{contactInfo.registration}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
