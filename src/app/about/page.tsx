import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import ContactStrip from "@/components/ContactStrip";
import { contactInfo } from "@/lib/navigation";

export const metadata: Metadata = {
  title: "About Regulatory Counsel | Expert FCA & Global Regulatory Consultants",
  description:
    "Specialist fintech regulatory consulting firm. Senior-led. Founder-friendly. Globally connected. 100+ licences secured across 15+ jurisdictions.",
};

const values = [
  {
    title: "Senior-Led Delivery",
    text: "Your matter is handled by an experienced regulatory expert, not passed to a graduate trainee. Every engagement is led by a senior professional with direct FCA and global licensing authority experience.",
  },
  {
    title: "Global Reach",
    text: "We cover 15+ jurisdictions including UK FCA, EU MiCA, US MSB, Canada FINTRAC, UAE VARA, Singapore MAS and more. One team, one relationship, every jurisdiction you need.",
  },
  {
    title: "Proven Track Record",
    text: "100+ licences secured with a 99% application success rate. Our experience spans payment institutions, EMIs, crypto firms, banks and money services businesses across every major regulatory framework.",
  },
  {
    title: "Founder-Friendly",
    text: "We work with startups and growth-stage fintechs who need fast, practical, commercially-minded advice. We understand that regulation is a means to an end, not a barrier.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero with background image */}
      <section className="relative bg-navy text-white py-32 lg:py-44 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80"
          alt="Modern building"
          fill
          className="object-cover opacity-20"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-navy/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-white mb-8">
              Senior-led. <span className="italic text-gold">Founder-friendly.</span> Globally connected.
            </h1>
            <p className="text-[17px] text-white/60 leading-[1.7] mb-10 max-w-[560px]">
              Specialist regulatory consulting for payment institutions, EMIs, crypto firms,
              banks and money services businesses &mdash; across the UK, EU and internationally.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-gold text-white px-8 py-3.5 rounded text-[15px] font-semibold hover:bg-gold-light transition-colors"
            >
              Speak to an Expert
            </Link>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <ScrollReveal>
        <section className="bg-white py-32 lg:py-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div>
                <span className="text-[12px] font-semibold uppercase tracking-[0.1em] text-gold mb-5 block">
                  Our Story
                </span>
                <h2 className="text-navy mb-8">
                  Built for founders. Trusted by institutions.
                </h2>
                <div className="space-y-6 text-[16px] text-[#444] leading-[1.7]">
                  <p>
                    Founded by regulatory experts with deep roots in FCA authorisation and European
                    licensing, Regulatory Counsel was built on a simple principle: founders and growing
                    fintechs deserve the same level of regulatory expertise as the largest institutions
                    &mdash; delivered directly by senior specialists, not delegated to junior teams.
                  </p>
                  <p>
                    Our work spans EMI and PI authorisations, MiCA CASP applications, crypto VASP
                    registrations, MSB licensing across North America, and virtual asset licensing
                    across the Middle East and Asia. Every engagement is led by a senior expert with
                    direct regulatory authority expertise.
                  </p>
                  <p>
                    We have secured over 100 licences across 15+ jurisdictions with a 99% success rate.
                    Our clients range from pre-launch startups to established financial institutions
                    expanding into new markets and product lines.
                  </p>
                </div>
              </div>
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80"
                  alt="Team collaboration"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Why Choose Us */}
      <section className="py-32 lg:py-40 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-navy">
                Why Choose Us
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal stagger>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((v) => (
                <div key={v.title} className="reveal bg-white rounded-lg p-8 lg:p-10 shadow-card">
                  <h3 className="font-serif text-[22px] font-bold text-navy mb-4">
                    {v.title}
                  </h3>
                  <p className="text-[15px] text-[#555] leading-[1.7]">{v.text}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats */}
      <ScrollReveal>
        <section className="py-32 lg:py-40 bg-navy text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
              {[
                { value: "100+", label: "Licences Secured" },
                { value: "12+", label: "Years Experience" },
                { value: "15+", label: "Jurisdictions" },
                { value: "99%", label: "Success Rate" },
              ].map((stat) => (
                <div key={stat.label} className="reveal text-center">
                  <p className="font-serif text-[42px] font-bold text-gold leading-none">
                    {stat.value}
                  </p>
                  <p className="text-[14px] text-white mt-4 font-medium uppercase tracking-[0.05em]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Regulated & Professional */}
      <ScrollReveal>
        <section className="bg-white py-32 lg:py-40">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-navy mb-8">
              Regulated &amp; Professional
            </h2>
            <p className="text-[16px] text-[#444] leading-[1.7] max-w-2xl mx-auto">
              {contactInfo.company} is registered in England and Wales (No. 11642313).
              We operate from our London office at {contactInfo.address}. Our team brings
              together experienced regulatory professionals with backgrounds spanning the FCA,
              major law firms and leading financial institutions.
            </p>
          </div>
        </section>
      </ScrollReveal>

      <ContactStrip />
    </>
  );
}
