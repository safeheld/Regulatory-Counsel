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
        className="w-full flex justify-between items-center py-5 text-left gap-4"
      >
        <span className="text-lg font-semibold text-navy">{faq.question}</span>
        <svg
          className={`w-5 h-5 text-navy shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all ${open ? "max-h-96 pb-5" : "max-h-0"}`}
      >
        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
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
      <section className="bg-navy text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-6">
              {hero.headline}
            </h1>
            <p className="text-lg lg:text-xl text-gray-300 leading-relaxed mb-8">
              {hero.sub}
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

      {/* ── 2. INTRO ── */}
      <section className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-700 text-lg leading-relaxed">{intro}</p>
        </div>
      </section>

      {/* ── 3. LICENSING — Jurisdiction Table ── */}
      <section className="pb-16 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-navy mb-8">
            Licensing Jurisdictions
          </h2>
          <div className="overflow-x-auto rounded-lg border border-gray-200">
            <table className="w-full min-w-[640px]">
              <thead>
                <tr className="bg-navy text-white text-left">
                  <th className="px-6 py-4 font-semibold text-sm">Country</th>
                  <th className="px-6 py-4 font-semibold text-sm">Regulator</th>
                  <th className="px-6 py-4 font-semibold text-sm">Min.&nbsp;Capital</th>
                  <th className="px-6 py-4 font-semibold text-sm">Timeline</th>
                </tr>
              </thead>
              <tbody>
                {jurisdictions.map((row, i) => (
                  <tr
                    key={row.country}
                    className={i % 2 === 0 ? "bg-white" : "bg-blue-50/50"}
                  >
                    <td className="px-6 py-4 font-medium text-navy text-sm">
                      {row.country}
                    </td>
                    <td className="px-6 py-4 text-gray-600 text-sm">{row.regulator}</td>
                    <td className="px-6 py-4 text-gray-600 text-sm">{row.minCapital}</td>
                    <td className="px-6 py-4 text-gray-600 text-sm">{row.timeline}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Jurisdiction detail sub-sections */}
          {jurisdictionDetails.length > 0 && (
            <div className="mt-14 space-y-12">
              {jurisdictionDetails.map((detail) => (
                <div key={detail.title}>
                  <h3 className="text-xl lg:text-2xl font-bold text-navy mb-4">
                    {detail.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{detail.body}</p>
                </div>
              ))}
            </div>
          )}

          {/* Optional extra licensing content (e.g. MiCA & Stablecoins) */}
          {extraLicensingContent}
        </div>
      </section>

      {/* ── 4. OTHER SERVICES ── */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-navy mb-10">
            Other Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service) => (
              <Link
                key={service.name}
                href={service.href}
                className="bg-white p-6 rounded-lg border-l-4 border-l-blue-600 border border-gray-200 hover:shadow-lg transition-all group"
              >
                <h3 className="text-lg font-bold text-navy group-hover:text-blue-600 transition-colors mb-1">
                  {service.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. FAQs ── */}
      <section className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-navy mb-10">
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
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <svg
            className="w-10 h-10 text-blue-600/30 mx-auto mb-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4.017v10H0z" />
          </svg>
          <blockquote className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-6 max-w-3xl mx-auto">
            &lsquo;{testimonial.quote}&rsquo;
          </blockquote>
          <p className="text-sm font-medium text-navy">
            &mdash; {testimonial.attribution}
          </p>
        </div>
      </section>

      {/* ── 7. RELATED INSIGHTS ── */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
            <h2 className="text-2xl lg:text-3xl font-bold text-navy">
              Related Insights
            </h2>
            <Link
              href="/insights"
              className="text-blue-600 font-medium hover:underline flex items-center gap-1"
            >
              View all
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
                  className="bg-white rounded-lg border border-gray-200 p-8 hover:shadow-lg hover:border-blue-600 transition-all group"
                >
                  {post.publishedAt && (
                    <time className="text-sm text-gray-400">
                      {new Date(post.publishedAt).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </time>
                  )}
                  <h3 className="text-lg font-bold text-navy group-hover:text-blue-600 transition-colors mt-1 mb-2">
                    {post.title}
                  </h3>
                  {post.excerpt && (
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>
                  )}
                  <span className="text-blue-600 text-sm font-medium">
                    Read more &rarr;
                  </span>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center">
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
