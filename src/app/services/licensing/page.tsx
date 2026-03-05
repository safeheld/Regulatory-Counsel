import { Metadata } from "next";
import Link from "next/link";
import ServiceLayout from "@/components/ServiceLayout";

export const metadata: Metadata = {
  title: "Regulatory Licensing & Authorisation | FCA, MiCA, VASP, MSB | Regulatory Counsel",
  description:
    "End-to-end licensing support. FCA PI, EMI, cryptoasset, MiCA CASP, UAE VARA, MSB.",
};

const licenceTypes = [
  { name: "Payment Institutions (API/SPI)", href: "/payment-institutions" },
  { name: "Electronic Money Institutions (AEMI/SEMI)", href: "/electronic-money-institutions" },
  { name: "Cryptoasset Registration & MiCA CASP", href: "/cryptoassets" },
  { name: "Banking Licence (PRA/FCA)", href: "/banks" },
  { name: "Money Services Business Registration", href: "/money-services-businesses" },
];

function Content() {
  return (
    <div className="max-w-4xl">
      <h2 className="text-2xl lg:text-3xl font-bold text-navy mb-6">
        What We Do
      </h2>
      <p className="text-gray-700 text-lg leading-relaxed mb-8">
        We provide end-to-end licensing support for firms seeking regulatory authorisation
        across the UK, EU and internationally. From initial assessment through to final
        approval, we manage every stage of the process &mdash; ensuring applications are
        complete, compliant and submitted to the highest standard.
      </p>

      <h3 className="text-xl font-bold text-navy mb-4">Licence Types We Support</h3>
      <ul className="space-y-3 mb-10">
        {licenceTypes.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-blue-600 hover:underline font-medium">
              {l.name} &rarr;
            </Link>
          </li>
        ))}
      </ul>

      <h3 className="text-xl font-bold text-navy mb-4">Our Process</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {[
          { step: "1", title: "Assessment", text: "We review your business model, target markets and identify the optimal licence type and jurisdiction." },
          { step: "2", title: "Documentation", text: "We prepare the full application including business plan, programme of operations, policies, governance framework and financial projections." },
          { step: "3", title: "Submission", text: "We submit the application and manage all regulator correspondence, queries and information requests." },
          { step: "4", title: "Authorisation", text: "We support you through to final approval and ensure all conditions are met for a clean authorisation." },
        ].map((item) => (
          <div key={item.step} className="bg-gray-50 rounded-lg p-6">
            <div className="w-10 h-10 rounded-full bg-blue-600 text-white text-lg font-bold flex items-center justify-center mb-3">
              {item.step}
            </div>
            <h4 className="font-bold text-navy mb-2">{item.title}</h4>
            <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>

      <h3 className="text-xl font-bold text-navy mb-4">Why Our Applications Succeed</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Our success rate exceeds 99% because we do not submit applications until they are
        complete and meet the regulator&apos;s expectations. Every document is prepared to the
        standard expected by the assessing case officer. We anticipate FCA and European
        regulator queries and address them proactively in the application pack.
      </p>
      <p className="text-gray-700 leading-relaxed">
        A strong FCA application requires a credible business plan with realistic financial
        projections, a clear programme of operations, a robust governance framework with
        identified key personnel, comprehensive AML/CFT policies, and &mdash; for payment and
        e-money firms &mdash; detailed safeguarding arrangements. We prepare all of this as a
        single, cohesive application package.
      </p>
    </div>
  );
}

export default function LicensingPage() {
  return (
    <ServiceLayout
      hero={{
        headline: "Regulatory Licensing & Authorisation Experts",
        sub: "We guide firms through the full licensing process \u2014 from initial assessment and application preparation through to regulator approval. FCA, MiCA, VARA, FINTRAC and beyond.",
      }}
      content={<Content />}
      sectors={[
        { name: "Payment Institutions", href: "/payment-institutions" },
        { name: "Electronic Money Institutions", href: "/electronic-money-institutions" },
        { name: "Cryptoassets & Digital Assets", href: "/cryptoassets" },
        { name: "Banks", href: "/banks" },
        { name: "Money Services Businesses", href: "/money-services-businesses" },
      ]}
      faqs={[
        { question: "How long does FCA authorisation take?", answer: "It depends on the licence type. SPI and SEMI registrations typically take 3\u20136 months. Full API and AEMI authorisations take 6\u201312 months. Banking licences take 12\u201336 months." },
        { question: "What does your licensing service include?", answer: "Everything from initial assessment and jurisdiction selection through to business plan drafting, policy preparation, application submission, query management and regulator liaison through to approval." },
        { question: "Do you support EU and international licensing?", answer: "Yes. We support licensing in Lithuania, Ireland, Poland, Malta, UAE (VARA/ADGM), Singapore, Canada (FINTRAC) and other jurisdictions." },
        { question: "What is your success rate?", answer: "Our application success rate exceeds 99%. We achieve this by only submitting applications when they are fully complete and meet the regulator\u2019s expectations." },
        { question: "Can you help us choose the right jurisdiction?", answer: "Yes. Jurisdiction selection is a core part of our initial assessment. We consider your target markets, business model, capital position, timeline and long-term strategy." },
        { question: "Do we need to be incorporated before applying?", answer: "In most jurisdictions, yes. The FCA requires a UK-incorporated entity. EU regulators require incorporation in the relevant member state. We can support entity setup." },
      ]}
      relatedServices={[
        { name: "Compliance Support", href: "/services/compliance", description: "Ongoing compliance monitoring and advisory post-authorisation." },
        { name: "Financial Crime", href: "/services/financial-crime", description: "AML/CFT frameworks required for every licence application." },
        { name: "Safeguarding", href: "/services/safeguarding", description: "Safeguarding arrangements for PI and EMI applications." },
      ]}
    />
  );
}
