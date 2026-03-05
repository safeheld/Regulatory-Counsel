import { Metadata } from "next";
import Link from "next/link";
import ContactStrip from "@/components/ContactStrip";
import { getRecentPosts } from "@/lib/sanity";

export const metadata: Metadata = {
  title: "Regulatory Counsel | FCA & Global Fintech Licensing Experts",
  description:
    "We help payment institutions, e-money firms, crypto companies and banks get licensed and stay compliant across the UK, EU and internationally.",
};

const sectors = [
  {
    name: "Payment Institutions",
    href: "/payment-institutions",
    description:
      "FCA authorisation and ongoing compliance for authorised and registered payment institutions.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
      </svg>
    ),
  },
  {
    name: "Electronic Money Institutions",
    href: "/electronic-money-institutions",
    description:
      "End-to-end licensing and compliance support for authorised and small EMIs.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    name: "Cryptoassets & Digital Assets",
    href: "/cryptoassets",
    description:
      "FCA registration, MiCA authorisation and financial crime compliance for crypto firms.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
  },
  {
    name: "Banks",
    href: "/banks",
    description:
      "PRA and FCA compliance, regulatory reporting and governance for banking institutions.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
      </svg>
    ),
  },
  {
    name: "Money Services Businesses",
    href: "/money-services-businesses",
    description:
      "HMRC registration, AML compliance and risk management for MSBs.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
  },
];

const serviceItems = [
  {
    name: "Compliance Support",
    href: "/services/compliance",
    description: "Ongoing frameworks, monitoring and advisory for regulated firms.",
  },
  {
    name: "Financial Crime",
    href: "/services/financial-crime",
    description: "AML, CTF, sanctions screening and fraud prevention programmes.",
  },
  {
    name: "Compliance Audit",
    href: "/services/audit",
    description: "Independent reviews, gap analysis and remediation planning.",
  },
  {
    name: "Regulatory Reporting",
    href: "/services/reporting",
    description: "Accurate, timely reporting to the FCA and other authorities.",
  },
  {
    name: "Safeguarding",
    href: "/services/safeguarding",
    description: "Client funds safeguarding arrangements that meet regulatory standards.",
  },
  {
    name: "Become an Agent",
    href: "/services/become-an-agent",
    description: "Agent registration and due diligence for payment and e-money firms.",
  },
  {
    name: "Change of Control",
    href: "/services/change-of-control",
    description: "Notifications and applications for ownership and control changes.",
  },
  {
    name: "Variation of Permission",
    href: "/services/variation-of-permission",
    description: "Expanding or changing your FCA regulatory permissions.",
  },
  {
    name: "Training",
    href: "/services/compliance",
    description: "Regulatory and compliance training tailored to your team.",
  },
];

const testimonials = [
  {
    quote:
      "Their understanding of our regulatory requirements was exceptional. The application was submitted on time, fully documented, and approved without any FCA queries. We could not have done this without them.",
    attribution: "Chief Executive, UK Payment Institution",
  },
  {
    quote:
      "From initial consultation to final authorisation, the team managed every stage professionally. Their knowledge of FCA requirements and European licensing options saved us months of work.",
    attribution: "Head of Compliance, Authorised EMI",
  },
  {
    quote:
      "We approached them with a complex MiCA authorisation question. Within days we had a clear roadmap and practical advice we could act on immediately.",
    attribution: "Co-Founder, Crypto Asset Service Provider",
  },
];

const stats = [
  { value: "100+", label: "Licences Secured" },
  { value: "12+", label: "Years Experience" },
  { value: "15+", label: "Jurisdictions" },
  { value: "99%", label: "Success Rate" },
];

export const revalidate = 60;

export default async function Home() {
  const posts = await getRecentPosts();

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative bg-navy text-white overflow-hidden">
        {/* subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light/30 to-navy pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-36">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl xl:text-[3.5rem] font-bold leading-[1.15] mb-6">
              The Global Regulatory Partner for Fintech Firms
            </h1>
            <p className="text-xl lg:text-[1.35rem] text-gray-300 mb-10 leading-relaxed max-w-2xl">
              We help payment institutions, electronic money institutions, crypto companies, banks and money services businesses get licensed and stay compliant&nbsp;&mdash; across the UK, EU and internationally.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-5">
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-9 py-4 rounded font-semibold text-lg hover:bg-blue-700 transition-colors text-center"
              >
                Speak to an Expert
              </Link>
              <a
                href="#sectors"
                className="text-white/80 hover:text-white font-medium text-lg transition-colors flex items-center gap-2 py-4"
              >
                Our Sectors
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl lg:text-4xl font-bold text-navy">{stat.value}</p>
                <p className="text-sm text-gray-500 mt-1 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTORS GRID ── */}
      <section id="sectors" className="py-20 lg:py-24 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">Sectors We Serve</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We work with startups and growth-stage fintechs across five regulated sectors.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectors.map((sector) => (
              <Link
                key={sector.href}
                href={sector.href}
                className="bg-white p-8 rounded-lg border border-gray-200 hover:border-blue-600 hover:shadow-lg transition-all group"
              >
                <div className="text-navy mb-4 group-hover:text-blue-600 transition-colors">
                  {sector.icon}
                </div>
                <h3 className="text-xl font-semibold text-navy group-hover:text-blue-600 transition-colors mb-2">
                  {sector.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {sector.description}
                </p>
                <span className="text-blue-600 text-sm font-medium inline-flex items-center gap-1">
                  Learn more
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW WE WORK ── */}
      <section className="bg-navy text-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-14">How We Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
            {[
              {
                step: "1",
                title: "Assess",
                text: "We review your business model, target market and optimal jurisdiction.",
              },
              {
                step: "2",
                title: "Authorise",
                text: "We prepare and manage your application through to approval.",
              },
              {
                step: "3",
                title: "Comply",
                text: "We support your firm post-authorisation with ongoing compliance.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-14 h-14 rounded-full bg-blue-600 text-white text-2xl font-bold flex items-center justify-center mx-auto mb-5">
                  {item.step}
                </div>
                <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              End-to-end regulatory and compliance support tailored to your business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {serviceItems.map((service) => (
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

      {/* ── TESTIMONIALS ── */}
      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-navy text-center mb-14">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <figure key={i} className="bg-gray-50 rounded-lg p-8 border border-gray-100">
                <svg className="w-8 h-8 text-blue-600/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4.017v10H0z" />
                </svg>
                <blockquote className="text-gray-700 leading-relaxed mb-6">
                  &lsquo;{t.quote}&rsquo;
                </blockquote>
                <figcaption className="text-sm font-medium text-navy">
                  &mdash; {t.attribution}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── RECENT INSIGHTS ── */}
      <section className="py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy">Recent Insights</h2>
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
                  <span className="text-blue-600 text-sm font-medium">Read more &rarr;</span>
                </Link>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {["Regulatory Update", "Industry Analysis", "Compliance Guide"].map(
                (placeholder) => (
                  <div
                    key={placeholder}
                    className="bg-white rounded-lg border border-gray-200 p-8"
                  >
                    <div className="h-3 w-24 bg-gray-200 rounded mb-3" />
                    <div className="h-5 w-full bg-gray-100 rounded mb-2" />
                    <div className="h-5 w-3/4 bg-gray-100 rounded mb-4" />
                    <div className="h-3 w-full bg-gray-50 rounded mb-2" />
                    <div className="h-3 w-5/6 bg-gray-50 rounded mb-6" />
                    <p className="text-gray-500 text-sm italic">
                      {placeholder} &mdash; coming soon
                    </p>
                  </div>
                )
              )}
            </div>
          )}
        </div>
      </section>

      {/* ── CONTACT STRIP ── */}
      <ContactStrip />
    </>
  );
}
