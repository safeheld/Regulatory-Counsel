import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import ContactStrip from "@/components/ContactStrip";
import { contactInfo } from "@/lib/navigation";

export const metadata: Metadata = {
  title: "Regulatory Counsel | FCA & Global Fintech Licensing Experts",
  description:
    "We help payment institutions, e-money firms, crypto companies and banks get licensed and stay compliant across the UK, EU and internationally.",
};

const stats = [
  { value: "100+", label: "Licences Secured" },
  { value: "12+", label: "Years Experience" },
  { value: "15+", label: "Jurisdictions" },
  { value: "99%", label: "Success Rate" },
];

const marqueeItems = [
  "FCA Authorisation",
  "MiCA CASP",
  "UAE VARA",
  "Singapore MAS",
  "Canada FINTRAC",
  "AML Frameworks",
  "PS25 Safeguarding",
  "EMI Licensing",
  "Crypto Registration",
  "FinCEN MSB",
];

const sectors = [
  {
    name: "Payment Institutions",
    href: "/payment-institutions",
    description: "FCA authorisation and ongoing compliance for authorised and registered payment institutions.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
      </svg>
    ),
  },
  {
    name: "Electronic Money Institutions",
    href: "/electronic-money-institutions",
    description: "End-to-end licensing and compliance support for authorised and small EMIs.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    name: "Cryptoassets & Digital Assets",
    href: "/cryptoassets",
    description: "FCA registration, MiCA authorisation and financial crime compliance for crypto firms.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
  },
  {
    name: "Banks",
    href: "/banks",
    description: "PRA and FCA compliance, regulatory reporting and governance for banking institutions.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
      </svg>
    ),
  },
  {
    name: "Money Services Businesses",
    href: "/money-services-businesses",
    description: "HMRC registration, AML compliance and risk management for MSBs.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
  },
];

const serviceItems = [
  { name: "Licensing & Authorisation", href: "/services/licensing", description: "FCA authorisation, MiCA licensing and global regulatory applications end to end." },
  { name: "Compliance Support", href: "/services/compliance", description: "Ongoing frameworks, monitoring and advisory for regulated firms." },
  { name: "Financial Crime", href: "/services/financial-crime", description: "AML, CTF, sanctions screening and fraud prevention programmes." },
  { name: "Compliance Audit", href: "/services/audit", description: "Independent reviews, gap analysis and remediation planning." },
  { name: "Regulatory Reporting", href: "/services/reporting", description: "Accurate, timely reporting to the FCA and other authorities." },
  { name: "Safeguarding PS25", href: "/services/safeguarding", description: "Client funds safeguarding arrangements that meet regulatory standards." },
  { name: "Become an Agent", href: "/services/become-an-agent", description: "Agent registration and due diligence for payment and e-money firms." },
  { name: "Change of Control", href: "/services/change-of-control", description: "Notifications and applications for ownership and control changes." },
  { name: "Variation of Permission", href: "/services/variation-of-permission", description: "Expanding or changing your FCA regulatory permissions." },
];

const testimonials = [
  {
    quote: "Their understanding of our regulatory requirements was exceptional. The application was submitted on time, fully documented, and approved without any FCA queries. We could not have done this without them.",
    attribution: "Chief Executive, UK Payment Institution",
  },
  {
    quote: "From initial consultation to final authorisation, the team managed every stage professionally. Their knowledge of FCA requirements and European licensing options saved us months of work.",
    attribution: "Head of Compliance, Authorised EMI",
  },
  {
    quote: "We approached them with a complex MiCA authorisation question. Within days we had a clear roadmap and practical advice we could act on immediately.",
    attribution: "Co-Founder, Crypto Asset Service Provider",
  },
];

const jurisdictions = [
  { flag: "\u{1F1EC}\u{1F1E7}", name: "United Kingdom", regulators: "FCA \u00B7 PRA" },
  { flag: "\u{1F1EA}\u{1F1FA}", name: "European Union", regulators: "MiCA \u00B7 PSD2" },
  { flag: "\u{1F1E6}\u{1F1EA}", name: "UAE", regulators: "VARA \u00B7 DFSA" },
  { flag: "\u{1F1F8}\u{1F1EC}", name: "Singapore", regulators: "MAS" },
  { flag: "\u{1F1E8}\u{1F1E6}", name: "Canada", regulators: "FINTRAC \u00B7 MSB" },
  { flag: "\u{1F1FA}\u{1F1F8}", name: "USA", regulators: "FinCEN \u00B7 State" },
  { flag: "\u{1F1E6}\u{1F1FA}", name: "Australia", regulators: "AUSTRAC" },
  { flag: "\u{1F30D}", name: "+8 More", regulators: "Global coverage" },
];

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
            {/* Left — Copy */}
            <div className="flex flex-col justify-center py-20 lg:py-28 lg:pr-16">
              <h1 className="text-navy tracking-[-0.02em] mb-8">
                Launch. <span className="italic text-gold">Regulate.</span> Grow.
              </h1>
              <p className="text-[17px] text-[#444] leading-[1.7] max-w-[520px] mb-10">
                We help entrepreneurs and businesses launch and operate regulated financial services, from licensing and compliance to full end-to-end regulatory support, across every major jurisdiction.
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <Link
                  href="/contact"
                  className="bg-navy text-white px-8 py-3.5 rounded text-[15px] font-semibold hover:bg-navy-light transition-colors"
                >
                  Speak to an Expert
                </Link>
                <a
                  href="#sectors"
                  className="text-gold text-[15px] font-medium flex items-center gap-2 py-3.5 hover:text-gold-light transition-colors group"
                >
                  Explore our sectors
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right — Photo */}
            <div className="hidden lg:block relative min-h-[600px]">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                alt="Professionals in a meeting"
                fill
                className="object-cover"
                sizes="50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <ScrollReveal>
        <section className="bg-navy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
            <div className="reveal grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {stats.map((stat) => (
                <div key={stat.label} className="reveal text-center">
                  <p className="font-serif text-[42px] font-bold text-gold leading-none">
                    {stat.value}
                  </p>
                  <p className="text-[14px] text-white mt-3 font-medium uppercase tracking-[0.05em]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ── GOLD MARQUEE ── */}
      <section className="bg-gold overflow-hidden">
        <div className="py-4">
          <div className="flex animate-marquee marquee-track whitespace-nowrap">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span
                key={i}
                className="text-navy text-[13px] font-semibold uppercase tracking-[0.15em] mx-6 inline-flex items-center gap-3"
              >
                {item}
                <span className="text-navy/40">&middot;</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO WE ARE ── */}
      <ScrollReveal>
        <section className="bg-white py-32 lg:py-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
              {/* Left — Sticky */}
              <div className="lg:sticky lg:top-32 lg:self-start">
                <span className="text-[12px] font-semibold uppercase tracking-[0.1em] text-gold mb-5 block">
                  Who We Are
                </span>
                <h2 className="text-navy mb-8">
                  Your regulatory partner from day one.
                </h2>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-6">
                  <Image
                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80"
                    alt="Office collaboration"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <Link
                  href="/about"
                  className="text-navy text-[15px] font-medium flex items-center gap-2 hover:text-gold transition-colors group"
                >
                  More about us
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              {/* Right — 3 Cards */}
              <div className="space-y-0 divide-y divide-[#E5E0D8]">
                {[
                  {
                    num: "01",
                    title: "Senior-led",
                    text: "Every engagement is led by a senior regulatory professional with direct FCA and global licensing experience. No junior hand-offs, no learning on the job.",
                  },
                  {
                    num: "02",
                    title: "Global reach",
                    text: "We operate across the UK, EU, UAE, Singapore, Canada, the US and beyond. One team, one relationship, every jurisdiction you need.",
                  },
                  {
                    num: "03",
                    title: "Commercial and founder-friendly",
                    text: "We understand that regulation is a means to an end. Our advice is practical, commercial and built around helping you launch faster and operate more efficiently.",
                  },
                ].map((card) => (
                  <div key={card.num} className="py-10 first:pt-0 last:pb-0">
                    <span className="font-serif text-[2rem] text-gold font-bold">
                      {card.num}
                    </span>
                    <h3 className="text-navy mt-2 mb-3">
                      {card.title}
                    </h3>
                    <p className="text-[16px] text-[#444] leading-[1.7]">
                      {card.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ── SECTORS ── */}
      <section id="sectors" className="bg-navy py-32 lg:py-40 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-16">
              <h2 className="text-white mb-5">
                Every regulated sector. Every major market.
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal stagger>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {sectors.map((sector) => (
                <Link
                  key={sector.href}
                  href={sector.href}
                  className="reveal group relative bg-white/[0.06] border border-white/[0.12] rounded-lg p-8 hover:bg-white/[0.10] hover:border-gold transition-all duration-250"
                >
                  <div className="text-white/40 mb-5 group-hover:text-gold transition-colors">
                    {sector.icon}
                  </div>
                  <h3 className="text-[16px] font-bold text-white mb-2 leading-tight">
                    {sector.name}
                  </h3>
                  <p className="text-[13px] text-white/[0.7] leading-relaxed mb-5">
                    {sector.description}
                  </p>
                  <span className="text-gold text-[14px] font-medium inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-250">
                    &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── STATEMENT BAND ── */}
      <section className="relative" style={{ padding: "120px 40px" }}>
        <Image
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&q=80"
          alt="Team working together"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[rgba(12,28,53,0.75)]" />
        <div className="relative max-w-[800px] mx-auto text-center">
          <ScrollReveal>
            <p className="font-serif italic text-[42px] text-white leading-[1.2]">
              &ldquo;Regulation is not the obstacle. It is your competitive advantage.&rdquo;
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="bg-cream py-32 lg:py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-2xl mb-16">
              <h2 className="text-navy mb-5">
                Everything you need to launch, operate and grow.
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal stagger>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {serviceItems.map((service) => (
                <Link
                  key={service.name}
                  href={service.href}
                  className="reveal group bg-white p-8 rounded-lg shadow-card hover:shadow-card-hover transition-all duration-250 relative overflow-hidden border-l-[3px] border-l-transparent hover:border-l-gold"
                >
                  <h3 className="font-serif text-[22px] font-bold text-navy group-hover:text-gold transition-colors mb-2">
                    {service.name}
                  </h3>
                  <p className="text-[15px] text-[#555] leading-[1.7] mb-4">
                    {service.description}
                  </p>
                  <span className="text-gold text-[14px] font-medium inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── HOW WE WORK ── */}
      <ScrollReveal>
        <section className="bg-white py-32 lg:py-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-navy text-center mb-20">
              How We Work
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
              {[
                { step: "01", title: "Assess", text: "We review your business model, target market and optimal jurisdiction to build a clear regulatory strategy." },
                { step: "02", title: "Authorise", text: "We prepare and manage your application through to approval, handling all regulator correspondence." },
                { step: "03", title: "Comply", text: "We support your firm post-authorisation with ongoing compliance frameworks, monitoring and reporting." },
              ].map((item) => (
                <div key={item.step} className="relative text-center">
                  <span className="block font-serif text-[160px] font-bold text-[#F0EDE8] leading-none absolute top-[-2rem] left-1/2 -translate-x-1/2 select-none pointer-events-none">
                    {item.step}
                  </span>
                  <div className="relative pt-16">
                    <h3 className="font-serif text-[24px] font-bold text-navy mb-3">
                      {item.title}
                    </h3>
                    <p className="text-[15px] text-[#555] leading-[1.7]">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ── TESTIMONIALS ── */}
      <section className="bg-cream py-32 lg:py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-navy text-center mb-16">
              What Our Clients Say
            </h2>
          </ScrollReveal>
          <ScrollReveal stagger>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((t, i) => (
                <figure key={i} className="reveal bg-white rounded-lg p-8">
                  <div className="h-[2px] w-10 bg-gold mb-4" />
                  <blockquote className="font-serif italic text-[20px] text-[#1A1A1A] leading-[1.5] mb-6">
                    &lsquo;{t.quote}&rsquo;
                  </blockquote>
                  <figcaption className="text-[14px] font-medium text-[#777] uppercase tracking-[0.05em]">
                    {t.attribution}
                  </figcaption>
                </figure>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── EDITORIAL PHOTO BAND ── */}
      <section className="relative h-[400px] w-full">
        <Image
          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1600&q=80"
          alt="Business meeting"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </section>

      {/* ── INSIGHTS ── */}
      <ScrollReveal>
        <section className="bg-white py-32 lg:py-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-14">
              <h2 className="text-navy">
                Latest Insights
              </h2>
              <Link
                href="/insights"
                className="text-navy text-[15px] font-medium hover:text-gold transition-colors flex items-center gap-2 group"
              >
                View all insights
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Hero insight card */}
              <Link
                href="/insights"
                className="group relative rounded-lg overflow-hidden min-h-[400px] lg:min-h-full flex items-end"
              >
                <Image
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80"
                  alt="Financial documents"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-[rgba(12,28,53,0.6)]" />
                <div className="relative p-8 lg:p-10">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-gold mb-3 block">
                    Regulatory Update
                  </span>
                  <h3 className="font-serif text-[1.6rem] lg:text-[2rem] font-bold text-white leading-tight mb-3">
                    FCA PS25 Safeguarding: What Payment &amp; E-Money Firms Need to Know
                  </h3>
                  <p className="text-[14px] text-white/60 leading-relaxed">
                    A practical guide to the new safeguarding requirements for authorised payment institutions and electronic money institutions.
                  </p>
                </div>
              </Link>

              {/* Two smaller cards stacked */}
              <div className="grid grid-cols-1 gap-6">
                <Link
                  href="/insights"
                  className="group bg-cream rounded-lg p-8 lg:p-10 hover:shadow-card transition-shadow duration-300"
                >
                  <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-gold mb-3 block">
                    Licensing Guide
                  </span>
                  <h3 className="font-serif text-[1.3rem] lg:text-[1.5rem] font-bold text-navy leading-tight mb-3 group-hover:text-gold transition-colors">
                    MiCA CASP Authorisation: The Complete Guide for Crypto Firms
                  </h3>
                  <p className="text-[15px] text-[#555] leading-relaxed">
                    Everything you need to know about obtaining a MiCA Crypto-Asset Service Provider licence in the European Union.
                  </p>
                </Link>

                <Link
                  href="/insights"
                  className="group bg-cream rounded-lg p-8 lg:p-10 hover:shadow-card transition-shadow duration-300"
                >
                  <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-gold mb-3 block">
                    International
                  </span>
                  <h3 className="font-serif text-[1.3rem] lg:text-[1.5rem] font-bold text-navy leading-tight mb-3 group-hover:text-gold transition-colors">
                    Canada MSB Registration: FINTRAC Requirements and Process
                  </h3>
                  <p className="text-[15px] text-[#555] leading-relaxed">
                    How to register as a Money Services Business in Canada and meet FINTRAC compliance obligations.
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ── JURISDICTIONS ── */}
      <section className="bg-navy py-32 lg:py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-white text-center mb-16">
              Global Reach
            </h2>
          </ScrollReveal>
          <ScrollReveal stagger>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-0">
              {jurisdictions.map((j, i) => (
                <div
                  key={j.name}
                  className={`reveal text-center p-6 ${
                    i < jurisdictions.length - 1 ? "border-r border-white/10" : ""
                  }`}
                >
                  <span className="text-[28px] block mb-2">{j.flag}</span>
                  <h3 className="text-[14px] font-bold text-white mb-1">{j.name}</h3>
                  <p className="text-[12px] text-white/60">{j.regulators}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA ── */}
      <ContactStrip />
    </>
  );
}
