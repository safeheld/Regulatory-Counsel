"use client";

import { useState } from "react";
import Link from "next/link";
import ContactStrip from "@/components/ContactStrip";
import { faqJsonLd } from "@/lib/jsonLd";

/* ── Types ── */

export interface JurisdictionRow {
  country: string;
  regulator: string;
  minCapital: string;
  timeline: string;
}

export interface JurisdictionDetail {
  title: string;
  body: string;
}

export interface ServiceCard {
  name: string;
  href: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Testimonial {
  quote: string;
  attribution: string;
}

export interface InsightPost {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  publishedAt?: string;
  sectorTags?: string[];
  serviceTags?: string[];
  featured?: boolean;
}

export interface SectorPageProps {
  hero: {
    headline: string;
    sub: string;
  };
  intro: string;
  jurisdictions: JurisdictionRow[];
  jurisdictionDetails: JurisdictionDetail[];
  extraLicensingContent?: React.ReactNode;
  services: ServiceCard[];
  faqs: FAQ[];
  testimonial: Testimonial;
  posts: InsightPost[];
}

/* ── FAQ Accordion Item ── */

function FAQItem({ faq, open, toggle }: { faq: FAQ; open: boolean; toggle: () => void }) {
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={toggle}
        className="w-full flex justify-between items-center py-7 text-left gap-4"
      >
        <span className="text-[17px] font-bold text-navy">{faq.question}</span>
        <svg
          className={`w-5 h-5 text-gold shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className={`overflow-hidden transition-all ${open ? "max-h-[600px] pb-7" : "max-h-0"}`}>
        <p className="text-gray-500 leading-[1.75] text-[16px]">{faq.answer}</p>
      </div>
    </div>
  );
}

/* ── Main Layout ── */

export default function SectorLayout({
  hero,
  intro,
  jurisdictions,
  jurisdictionDetails,
  extraLicensingContent,
  services,
  faqs,
  testimonial,
  posts,
}: SectorPageProps) {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }}
      />

      {/* ── 1. HERO ── */}
      <section className="bg-navy text-white py-28 lg:py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-serif text-[2.8rem] lg:text-[4rem] font-bold leading-[1.05] mb-8">
              {hero.headline}
            </h1>
            <p className="text-[17px] text-white/50 leading-[1.75] mb-12 max-w-[560px]">
              {hero.sub}
            </p>
            <Link
              href="/contact"
              className="inline-block bg-gold text-white px-9 py-4.5 rounded text-[15px] font-semibold hover:bg-gold-light transition-colors"
            >
              Speak to an Expert
            </Link>
          </div>
        </div>
      </section>

      {/* ── 2. INTRO ── */}
      <section className="py-32 lg:py-40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-500 text-[17px] leading-[1.8]">{intro}</p>
        </div>
      </section>

      {/* ── 3. LICENSING — Jurisdiction Table ── */}
      <section className="pb-32 lg:pb-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-[2rem] lg:text-[2.8rem] font-bold text-navy mb-14">
            Licensing Jurisdictions
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full min-w-[640px]">
              <thead>
                <tr className="bg-navy text-white text-left">
                  <th className="px-6 py-4 font-semibold text-[13px] uppercase tracking-[0.05em]">Country</th>
                  <th className="px-6 py-4 font-semibold text-[13px] uppercase tracking-[0.05em]">Regulator</th>
                  <th className="px-6 py-4 font-semibold text-[13px] uppercase tracking-[0.05em]">Min.&nbsp;Capital</th>
                  <th className="px-6 py-4 font-semibold text-[13px] uppercase tracking-[0.05em]">Timeline</th>
                </tr>
              </thead>
              <tbody>
                {jurisdictions.map((row, i) => (
                  <tr key={row.country} className={i % 2 === 0 ? "bg-white" : "bg-cream/50"}>
                    <td className="px-6 py-4 font-medium text-navy text-[14px]">{row.country}</td>
                    <td className="px-6 py-4 text-gray-500 text-[14px]">{row.regulator}</td>
                    <td className="px-6 py-4 text-gray-500 text-[14px]">{row.minCapital}</td>
                    <td className="px-6 py-4 text-gray-500 text-[14px]">{row.timeline}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {jurisdictionDetails.length > 0 && (
            <div className="mt-20 space-y-16">
              {jurisdictionDetails.map((detail) => (
                <div key={detail.title}>
                  <h3 className="font-serif text-[1.5rem] lg:text-[1.8rem] font-bold text-navy mb-5">
                    {detail.title}
                  </h3>
                  <p className="text-gray-500 leading-[1.75] text-[16px]">{detail.body}</p>
                </div>
              ))}
            </div>
          )}

          {extraLicensingContent}
        </div>
      </section>

      {/* ── 4. OTHER SERVICES ── */}
      <section className="py-32 lg:py-40 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-[2rem] lg:text-[2.8rem] font-bold text-navy mb-14">
            Other Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service) => (
              <Link
                key={service.name}
                href={service.href}
                className="group bg-white p-8 rounded-xl border border-transparent hover:border-gold/20 shadow-card hover:shadow-card-hover transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-transparent group-hover:bg-gold transition-colors duration-300" />
                <h3 className="text-[17px] font-bold text-navy group-hover:text-gold transition-colors mb-2">
                  {service.name}
                </h3>
                <p className="text-[15px] text-gray-500 leading-[1.7]">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. FAQs ── */}
      <section className="py-32 lg:py-40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-[2rem] lg:text-[2.8rem] font-bold text-navy mb-14">
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

      {/* ── 6. TESTIMONIAL ── */}
      <section className="py-32 lg:py-40 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="font-serif italic text-[1.4rem] lg:text-[1.8rem] text-navy leading-[1.5] mb-10 max-w-3xl mx-auto">
            &lsquo;{testimonial.quote}&rsquo;
          </blockquote>
          <div className="h-[2px] w-10 bg-gold mx-auto mb-5" />
          <p className="text-[13px] font-medium text-gray-400 uppercase tracking-[0.05em]">
            &mdash; {testimonial.attribution}
          </p>
        </div>
      </section>

      {/* ── 7. RELATED INSIGHTS ── */}
      <section className="py-32 lg:py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-14">
            <h2 className="font-serif text-[2rem] lg:text-[2.8rem] font-bold text-navy">
              Related Insights
            </h2>
            <Link
              href="/insights"
              className="text-navy text-[15px] font-medium hover:text-gold transition-colors flex items-center gap-2 group"
            >
              View all
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link
                  key={post._id}
                  href={`/insights/${post.slug.current}`}
                  className="group"
                >
                  <div className="h-48 rounded-xl bg-gradient-to-br from-navy/8 to-gold/8 mb-5" />
                  {post.publishedAt && (
                    <time className="text-[12px] text-gray-400 uppercase tracking-[0.08em]">
                      {new Date(post.publishedAt).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </time>
                  )}
                  <h3 className="text-[18px] font-bold text-navy group-hover:text-gold transition-colors mt-2 mb-3">
                    {post.title}
                  </h3>
                  {post.excerpt && (
                    <p className="text-[14px] text-gray-500 leading-[1.7] line-clamp-3">
                      {post.excerpt}
                    </p>
                  )}
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-gray-400 text-center">
              Insights for this sector coming soon.
            </p>
          )}
        </div>
      </section>

      {/* ── 8. CONTACT STRIP ── */}
      <ContactStrip />
    </>
  );
}
