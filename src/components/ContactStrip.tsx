import Link from "next/link";
import { contactInfo } from "@/lib/navigation";

export default function ContactStrip() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-[2rem] lg:text-[3rem] font-bold text-navy leading-[1.15] mb-6">
          Ready to launch your financial services business?
        </h2>
        <p className="text-[17px] text-gray-500 leading-relaxed mb-10 max-w-xl mx-auto">
          Get in touch to discuss how we can support your regulatory and
          compliance needs.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-navy text-white px-9 py-4 rounded text-[15px] font-semibold hover:bg-navy-light transition-colors"
        >
          Speak to an Expert
        </Link>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-[14px] text-gray-400">
          <a
            href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
            className="hover:text-navy transition-colors"
          >
            {contactInfo.phone}
          </a>
          <span className="hidden sm:inline text-gray-300">|</span>
          <a
            href={`mailto:${contactInfo.email}`}
            className="hover:text-navy transition-colors"
          >
            {contactInfo.email}
          </a>
        </div>
      </div>
    </section>
  );
}
