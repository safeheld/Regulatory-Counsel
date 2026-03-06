import Link from "next/link";
import { contactInfo } from "@/lib/navigation";

export default function ContactStrip() {
  return (
    <section className="bg-navy py-24 lg:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-h2-mobile lg:text-h2 text-white mb-5">
          Ready to discuss your regulatory requirements?
        </h2>
        <p className="text-body-lg text-white/60 mb-10 max-w-xl mx-auto">
          Get in touch to discuss how we can support your regulatory and
          compliance needs.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-accent text-white px-8 py-4 rounded text-base font-semibold hover:bg-blue-700 transition-colors"
        >
          Speak to Our Team
        </Link>
        <p className="text-white/40 text-sm mt-8">
          <a
            href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
            className="hover:text-white/70 transition-colors"
          >
            {contactInfo.phone}
          </a>
          {"  "}|{"  "}
          <a
            href={`mailto:${contactInfo.email}`}
            className="hover:text-white/70 transition-colors"
          >
            {contactInfo.email}
          </a>
        </p>
      </div>
    </section>
  );
}
