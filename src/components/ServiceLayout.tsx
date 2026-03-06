"use client";

import { useState } from "react";
import Link from "next/link";
import ContactStrip from "@/components/ContactStrip";
import { faqJsonLd } from "@/lib/jsonLd";

export interface WhatWeDoItem {
  title: string;
  description: string;
}

export interface SectorLink {
  name: string;
  href: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface RelatedService {
  name: string;
  href: string;
  description: string;
}

export interface ServicePageProps {
  hero: {
    headline: string;
    sub: string;
  };
  content: React.ReactNode;
  sectors: SectorLink[];
  faqs: FAQ[];
  relatedServices: RelatedService[];
}

function FAQItem({ faq, open, toggle }: { faq: FAQ; open: boolean; toggle: () => void }) {
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={toggle}
        className="w-full flex justify-between items-center py-6 text-left gap-4"
      >
        <span className="text-lg font-bold text-navy">{faq.question}</span>
        <svg
          className={`w-5 h-5 text-accent shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className={`overflow-hidden transition-all ${open ? "max-h-[600px] pb-6" : "max-h-0"}`}>
        <p className="text-gray-500 leading-relaxed text-body-lg">{faq.answer}</p>
      </div>
    </div>
  );
}

export default function ServiceLayout({
  hero,
  content,
  sectors,
  faqs,
  relatedServices,
}: ServicePageProps) {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }}
      />

      {/* ── 1. HERO ── */}
      <section className="bg-navy text-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-display-mobile lg:text-display mb-7">
              {hero.headline}
            </h1>
            <p className="text-lg lg:text-xl text-white/[0.6] leading-relaxed mb-10 max-w-[500px]">
              {hero.sub}
            </p>
            <Link
              href="/contact"
              className="inline-block bg-accent text-white px-8 py-4 rounded text-base font-semibold hover:bg-blue-700 transition-colors"
            >
              Speak to an Expert
            </Link>
          </div>
        </div>
      </section>

      {/* ── 2. WHAT WE DO (content slot) ── */}
      <section className="py-24 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {content}
        </div>
      </section>

      {/* ── 3. SECTORS WE SERVE ── */}
      <section className="py-24 lg:py-28 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-h2-mobile lg:text-h2 text-navy mb-10">
            Sectors We Serve
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {sectors.map((sector) => (
              <Link
                key={sector.href}
                href={sector.href}
                className="bg-white p-7 rounded-xl border-2 border-gray-200 hover:border-accent hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group flex items-center justify-between"
              >
                <span className="text-lg font-bold text-navy group-hover:text-accent transition-colors">
                  {sector.name}
                </span>
                <svg
                  className="w-5 h-5 text-accent shrink-0 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. FAQs ── */}
      <section className="py-24 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-h2-mobile lg:text-h2 text-navy mb-12">
            Frequently Asked Questions
          </h2>
          <div className="border-t border-gray-200">
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
                open={openFAQ === i}
                toggle={() => setOpenFAQ(openFAQ === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. RELATED SERVICES ── */}
      <section className="py-24 lg:py-28 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-h2-mobile lg:text-h2 text-navy mb-10">
            Related Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {relatedServices.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="bg-white p-7 rounded-lg border-l-[3px] border-l-accent shadow-card hover:shadow-card-hover transition-all duration-300 group"
              >
                <h3 className="text-lg font-bold text-navy group-hover:text-accent transition-colors mb-1.5">
                  {service.name}
                </h3>
                <p className="text-[14px] text-gray-500 leading-relaxed">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. CONTACT STRIP ── */}
      <ContactStrip />
    </>
  );
}
