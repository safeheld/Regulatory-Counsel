import { Metadata } from "next";
import { getPostsBySector } from "@/lib/sanity";
import SectorLayout from "@/components/SectorLayout";

export const metadata: Metadata = {
  title: "Payment Institution Licence | FCA & EU Authorisation | Regulatory Counsel",
  description:
    "We help firms obtain Payment Institution licences across the UK, EU and internationally. FCA API, SPI, Lithuania, Ireland, Poland and more.",
};

export const revalidate = 60;

export default async function PaymentInstitutionsPage() {
  const posts = await getPostsBySector("payment-institutions");

  return (
    <SectorLayout
      hero={{
        headline:
          "Payment Institution Licensing Experts \u2014 UK, EU & International",
        sub: "A Payment Institution licence is required by any firm providing payment services including money remittance, payment processing, card issuing and open banking. We support firms from pre-application through to full FCA authorisation and European licensing across all major jurisdictions.",
      }}
      intro="Payment Institutions operate under the Payment Services Regulations 2017 in the UK and PSD2 across the EU. Firms must hold an Authorised Payment Institution (API) or Small Payment Institution (SPI) registration from the FCA, or equivalent authorisation from a European regulator. With a single EU licence \u2014 typically obtained in Lithuania, Ireland or Poland \u2014 firms can passport services across all EEA member states."
      jurisdictions={[
        {
          country: "UK \u2014 API (FCA)",
          regulator: "Financial Conduct Authority",
          minCapital: "\u00A320,000\u2013\u00A3125,000",
          timeline: "6\u201312 months",
        },
        {
          country: "UK \u2014 SPI (FCA)",
          regulator: "Financial Conduct Authority",
          minCapital: "None",
          timeline: "3\u20136 months",
        },
        {
          country: "Lithuania",
          regulator: "Bank of Lithuania",
          minCapital: "\u20AC20,000\u2013\u20AC125,000",
          timeline: "3\u20136 months",
        },
        {
          country: "Ireland",
          regulator: "Central Bank of Ireland",
          minCapital: "\u20AC20,000\u2013\u20AC125,000",
          timeline: "6\u201312 months",
        },
        {
          country: "Poland",
          regulator: "Polish Financial Supervision Authority (KNF)",
          minCapital: "\u20AC20,000\u2013\u20AC125,000",
          timeline: "6\u201312 months",
        },
        {
          country: "Netherlands",
          regulator: "De Nederlandsche Bank (DNB)",
          minCapital: "\u20AC20,000\u2013\u20AC125,000",
          timeline: "9\u201312 months",
        },
        {
          country: "Germany",
          regulator: "BaFin",
          minCapital: "\u20AC20,000\u2013\u20AC125,000",
          timeline: "12\u201318 months",
        },
        {
          country: "Malta",
          regulator: "Malta Financial Services Authority (MFSA)",
          minCapital: "\u20AC20,000\u2013\u20AC125,000",
          timeline: "6\u20139 months",
        },
        {
          country: "Belgium",
          regulator: "National Bank of Belgium (NBB)",
          minCapital: "\u20AC20,000\u2013\u20AC125,000",
          timeline: "9\u201312 months",
        },
        {
          country: "Canada",
          regulator: "FINTRAC",
          minCapital: "None",
          timeline: "6\u20138 weeks",
        },
      ]}
      jurisdictionDetails={[
        {
          title: "UK \u2014 Authorised Payment Institution (API)",
          body: "The FCA authorises Payment Institutions under the Payment Services Regulations 2017. An API licence permits the full range of payment services including money remittance, payment processing, card issuing, open banking (AIS/PIS) and e-money agent services. Minimum capital is \u00A320,000\u2013\u00A3125,000 depending on activity. Applications require a detailed business plan, programme of operations, governance framework, AML/CFT policies and safeguarding arrangements. We prepare the full application documentation, draft all required policies, manage FCA queries, and liaise with the case officer through to approval.",
        },
        {
          title: "UK \u2014 Small Payment Institution (SPI)",
          body: "The SPI registration is available to firms with average monthly payment transactions not exceeding EUR 3 million. Faster and lower cost than full API authorisation with no minimum capital requirement. SPIs cannot provide AIS or PIS services. We support SPI registrations as a fast route to market, including transition to API once volume thresholds are exceeded.",
        },
        {
          title: "Lithuania",
          body: "Lithuania is the most popular EU jurisdiction for fintech licensing. The Bank of Lithuania operates a structured and fintech-friendly process, typically completing applications in 3\u20136 months. A Lithuanian PI licence passports across all 30 EEA member states. Capital requirement is EUR 20,000\u2013125,000. We support entity incorporation, licence application, MLRO appointment and ongoing compliance.",
        },
      ]}
      services={[
        {
          name: "Compliance Support",
          href: "/services/compliance",
          description:
            "Ongoing monitoring, policy review and regulatory change management.",
        },
        {
          name: "Financial Crime",
          href: "/services/financial-crime",
          description:
            "AML/CFT framework, KYC/KYB, sanctions and transaction monitoring.",
        },
        {
          name: "Compliance Audit",
          href: "/services/audit",
          description:
            "Independent audit of compliance systems against FCA requirements.",
        },
        {
          name: "Regulatory Reporting",
          href: "/services/reporting",
          description:
            "Preparation and submission of PSR001, PSR002 and FCA returns.",
        },
        {
          name: "Safeguarding",
          href: "/services/safeguarding",
          description:
            "PS25-compliant framework, annual audit and account arrangements.",
        },
        {
          name: "Become an Agent",
          href: "/services/become-an-agent",
          description: "Faster route to market under a principal licence.",
        },
      ]}
      faqs={[
        {
          question: "What is the difference between an API and SPI?",
          answer:
            "An Authorised Payment Institution (API) can provide the full range of payment services with no transaction volume limit. A Small Payment Institution (SPI) is limited to average monthly transactions of EUR 3 million and cannot provide AIS or PIS services.",
        },
        {
          question:
            "How long does FCA payment institution authorisation take?",
          answer:
            "The FCA aims to assess complete API applications within 3 months. In practice, most applications take 6\u201312 months depending on complexity and how quickly the applicant responds to FCA queries.",
        },
        {
          question:
            "Can a UK payment institution passport into the EU post-Brexit?",
          answer:
            "No. Since Brexit, UK licences do not passport into the EU. Firms requiring EU market access need a separate EU licence \u2014 typically obtained in Lithuania, Ireland or Poland.",
        },
        {
          question:
            "What capital is required for a payment institution licence in Lithuania?",
          answer:
            "EUR 20,000\u2013125,000 depending on the payment services provided.",
        },
        {
          question:
            "Do I need a UK company to apply for FCA authorisation?",
          answer:
            "Yes. The FCA requires applicants to be incorporated in the UK.",
        },
        {
          question:
            "What is safeguarding and does it apply to my firm?",
          answer:
            "Safeguarding requires payment firms to protect client funds by holding them in segregated accounts or insuring them. It applies to all FCA-authorised payment institutions and will be significantly strengthened under PS25 from June 2026.",
        },
        {
          question:
            "Can I use the agent route before I have my own licence?",
          answer:
            "Yes. Operating as an agent of an authorised principal is a legitimate and common route to market while your own application is being processed.",
        },
      ]}
      testimonial={{
        quote:
          "The team handled our FCA authorisation from start to finish. Every document was prepared correctly first time and the application went through without any FCA queries. We launched on schedule.",
        attribution: "Chief Executive, Authorised Payment Institution",
      }}
      posts={posts}
    />
  );
}
