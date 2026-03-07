import Link from "next/link";
import { contactInfo } from "@/lib/navigation";

export default function ContactStrip() {
  return (
    <section className="bg-navy py-32 lg:py-40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-[42px] font-bold text-white leading-[1.15] mb-6">
          Ready to launch your financial services business?
        </h2>
        <p className="text-[17px] text-white/70 leading-[1.7] mb-10 max-w-xl mx-auto">
          Get in touch to discuss how we can support your regulatory and
          compliance needs.
        </p>
        <Link
          href="/contact"
          className="inline-block border-2 border-gold text-gold px-10 py-4 rounded text-[15px] font-semibold hover:bg-gold hover:text-white transition-colors"
        >
          Speak to an Expert
        </Link>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 text-[14px] text-white/50">
          <a
            href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
            className="hover:text-white transition-colors"
          >
            {contactInfo.phone}
          </a>
          <span className="hidden sm:inline text-white/30">|</span>
          <a
            href={`mailto:${contactInfo.email}`}
            className="hover:text-white transition-colors"
          >
            {contactInfo.email}
          </a>
        </div>
      </div>
    </section>
  );
}
