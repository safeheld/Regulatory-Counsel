import Link from "next/link";
import { contactInfo } from "@/lib/navigation";

export default function ContactStrip() {
  return (
    <section className="bg-blue-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Speak to Our Team
        </h2>
        <p className="text-lg text-white mb-8 max-w-2xl mx-auto">
          Get in touch to discuss how we can support your regulatory and
          compliance needs.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
          <Link
            href="/contact"
            className="bg-white text-navy px-8 py-3 rounded font-semibold hover:bg-gray-100 transition-colors"
          >
            Contact Us
          </Link>
          <a
            href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
            className="border-2 border-white text-white px-8 py-3 rounded font-semibold hover:bg-white/10 transition-colors"
          >
            {contactInfo.phone}
          </a>
        </div>
        <p className="text-white text-sm">
          <a
            href={`mailto:${contactInfo.email}`}
            className="underline"
          >
            {contactInfo.email}
          </a>
          {" "}  |  {contactInfo.address}
        </p>
      </div>
    </section>
  );
}
