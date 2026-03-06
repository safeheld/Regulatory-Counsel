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
      <div
        className={`overflow-hidden transition-all ${open ? "max-h-96 pb-6" : "max-h-0"}`}
      >
        <p className="text-gray-500 leading-relaxed text-body-lg">{faq.answer}</p>
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

      {/* ── 2. INTRO ── */}
      <section className="py-24 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-500 text-body-lg">{intro}</p>
        </div>
      </section>

      {/* ── 3. LICENSING — Jurisdiction Table ── */}
      <section className="pb-24 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-h2-mobile lg:text-h2 text-navy mb-10">
            Licensing Jurisdictions
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
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
                    className={i % 2 === 0 ? "bg-white" : "bg-offwhite"}
                  >
                    <td className="px-6 py-4 font-medium text-navy text-sm">
                      {row.country}
                    </td>
                    <td className="px-6 py-4 text-gray-500 text-sm">{row.regulator}</td>
                    <td className="px-6 py-4 text-gray-500 text-sm">{row.minCapital}</td>
                    <td className="px-6 py-4 text-gray-500 text-sm">{row.timeline}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {jurisdictionDetails.length > 0 && (
            <div className="mt-16 space-y-14">
              {jurisdictionDetails.map((detail) => (
                <div key={detail.title}>
                  <h3 className="text-2xl font-bold text-navy mb-4">
                    {detail.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-body-lg">{detail.body}</p>
                </div>
              ))}
            </div>
          )}

          {extraLicensingContent}
        </div>
      </section>

      {/* ── 4. OTHER SERVICES ── */}
      <section className="py-24 lg:py-28 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-h2-mobile lg:text-h2 text-navy mb-12">
            Other Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service) => (
              <Link
                key={service.name}
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

      {/* ── 5. FAQs ── */}
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

      {/* ── 6. TESTIMONIAL ── */}
      <section className="py-24 lg:py-28 bg-offwhite">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <svg
            className="w-12 h-12 text-accent/20 mx-auto mb-8"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4.017v10H0z" />
          </svg>
          <blockquote className="text-xl lg:text-2xl text-navy italic leading-relaxed mb-8 max-w-3xl mx-auto">
            &lsquo;{testimonial.quote}&rsquo;
          </blockquote>
          <p className="text-[13px] font-medium text-gray-400 uppercase tracking-[0.05em]">
            &mdash; {testimonial.attribution}
          </p>
        </div>
      </section>

      {/* ── 7. RELATED INSIGHTS ── */}
      <section className="py-24 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-12">
            <h2 className="text-h2-mobile lg:text-h2 text-navy">
              Related Insights
            </h2>
            <Link
              href="/insights"
              className="text-accent text-[15px] font-medium hover:underline flex items-center gap-1.5"
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
                  className="group"
                >
                  <div className="h-48 rounded-xl bg-gradient-to-br from-navy/10 to-accent/10 mb-5" />
                  {post.publishedAt && (
                    <time className="text-[13px] text-gray-400 uppercase tracking-[0.05em]">
                      {new Date(post.publishedAt).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </time>
                  )}
                  <h3 className="text-xl font-bold text-navy group-hover:text-accent transition-colors mt-2 mb-3">
                    {post.title}
                  </h3>
                  {post.excerpt && (
                    <p className="text-[15px] text-gray-500 leading-relaxed line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>
                  )}
                  <span className="text-accent text-sm font-medium">
                    Read more &rarr;
                  </span>
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
