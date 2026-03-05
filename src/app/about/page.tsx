import { Metadata } from "next";
import Link from "next/link";
import ContactStrip from "@/components/ContactStrip";
import { contactInfo } from "@/lib/navigation";

export const metadata: Metadata = {
  title: "About Regulatory Counsel | Expert FCA & Global Regulatory Consultants",
  description:
    "Specialist fintech regulatory consulting firm. Senior-led. 100+ licences secured.",
};

const values = [
  {
    title: "Senior-Led Delivery",
    text: "Your matter is handled by an experienced regulatory expert, not passed to a graduate trainee.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    title: "Global Reach",
    text: "We cover 15+ jurisdictions including UK FCA, EU MiCA, US MSB, Canada, UAE, Singapore and more.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    title: "Proven Track Record",
    text: "100+ licences secured with a 99% application success rate.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
  },
  {
    title: "Founder-Friendly",
    text: "We work with startups and growth-stage fintechs who need fast, practical, commercially-minded advice.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-6">
              Expert-Led Regulatory Counsel, Built for Fintech
            </h1>
            <p className="text-lg lg:text-xl text-gray-300 leading-relaxed mb-8">
              Specialist regulatory consulting for payment institutions, EMIs, crypto firms,
              banks and money services businesses &mdash; across the UK, EU and internationally.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-blue-600 text-white px-9 py-4 rounded font-semibold text-lg hover:bg-blue-700 transition-colors"
            >
              Speak to an Expert
            </Link>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-navy mb-6">Our Story</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Founded by regulatory experts with deep roots in FCA authorisation and European
            licensing, Regulatory Counsel was built on a simple principle: founders and growing
            fintechs deserve the same level of regulatory expertise as the largest institutions
            &mdash; delivered directly by senior specialists, not delegated to junior teams.
            Our work spans EMI and PI authorisations, MiCA CASP applications, crypto VASP
            registrations, MSB licensing across North America, and virtual asset licensing
            across the Middle East and Asia. Every engagement is led by a senior expert with
            direct regulatory authority expertise.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-navy mb-10 text-center">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((v) => (
              <div key={v.title} className="flex gap-5">
                <div className="w-14 h-14 bg-navy/10 rounded-full flex items-center justify-center shrink-0 text-navy">
                  {v.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy mb-1">{v.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{v.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regulated & Professional */}
      <section className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-navy mb-6">
            Regulated &amp; Professional
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            {contactInfo.company} is registered in England and Wales (No. 11642313).
            We operate from our London office at {contactInfo.address}.
          </p>
        </div>
      </section>

      <ContactStrip />
    </>
  );
}
