import Link from "next/link";
import { sectors, services, contactInfo } from "@/lib/navigation";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Regulatory Counsel</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Expert regulatory and compliance consulting for financial
              services firms across the UK.
            </p>
            <div className="space-y-2 text-sm text-gray-300">
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
            <h4 className="font-semibold mb-4 text-lg">Sectors</h4>
            <ul className="space-y-2">
              {sectors.map((sector) => (
                <li key={sector.href}>
                  <Link
                    href={sector.href}
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                  >
                    {sector.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/insights"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  Insights
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  Terms of Business
                </Link>
              </li>
              <li>
                <Link
                  href="/cookies"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
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
