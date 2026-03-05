import { Metadata } from "next";
import { getPostsBySector } from "@/lib/sanity";
import SectorLayout from "@/components/SectorLayout";

export const metadata: Metadata = {
  title:
    "EMI Licence | Electronic Money Institution Authorisation UK & EU | Regulatory Counsel",
  description:
    "Expert support for EMI licence applications across the UK FCA, Lithuania, Ireland and EU. Senior-led. Application preparation, policy drafting, regulator liaison.",
};

export const revalidate = 60;

export default async function EMIPage() {
  const posts = await getPostsBySector("emi");

  return (
    <SectorLayout
      hero={{
        headline:
          "Electronic Money Institution (EMI) Licensing Experts \u2014 UK & EU",
        sub: "An Electronic Money Institution licence is required to issue electronic money \u2014 including prepaid cards, e-wallets and IBAN accounts. We support AEMI and SEMI applications with the FCA and full authorisations across EU jurisdictions.",
      }}
      intro="EMIs operate under the Electronic Money Regulations 2011 in the UK and EMD2 across the EU. An EMI licence provides wider permissions than a Payment Institution licence \u2014 permitting the issuance of electronic money, maintenance of e-money accounts, and the full suite of payment services. The FCA authorises UK EMIs, with Authorised EMIs requiring \u00A3350,000 minimum capital. In the EU, Lithuania remains the most popular jurisdiction."
      jurisdictions={[
        {
          country: "UK \u2014 AEMI (FCA)",
          regulator: "Financial Conduct Authority",
          minCapital: "\u00A3350,000",
          timeline: "6\u201312 months",
        },
        {
          country: "UK \u2014 SEMI (FCA)",
          regulator: "Financial Conduct Authority",
          minCapital: "None",
          timeline: "3\u20136 months",
        },
        {
          country: "Lithuania",
          regulator: "Bank of Lithuania",
          minCapital: "\u20AC350,000",
          timeline: "3\u20136 months",
        },
        {
          country: "Ireland",
          regulator: "Central Bank of Ireland",
          minCapital: "\u20AC350,000",
          timeline: "6\u201312 months",
        },
        {
          country: "Poland",
          regulator: "KNF",
          minCapital: "\u20AC350,000",
          timeline: "6\u20139 months",
        },
        {
          country: "Netherlands",
          regulator: "De Nederlandsche Bank (DNB)",
          minCapital: "\u20AC350,000",
          timeline: "9\u201312 months",
        },
        {
          country: "Malta",
          regulator: "Malta Financial Services Authority",
          minCapital: "\u20AC350,000",
          timeline: "6\u20139 months",
        },
        {
          country: "Belgium",
          regulator: "National Bank of Belgium (NBB)",
          minCapital: "\u20AC350,000",
          timeline: "9\u201312 months",
        },
        {
          country: "Cyprus",
          regulator: "Central Bank of Cyprus",
          minCapital: "\u20AC350,000",
          timeline: "6\u20139 months",
        },
        {
          country: "Germany",
          regulator: "BaFin",
          minCapital: "\u20AC350,000",
          timeline: "12\u201318 months",
        },
      ]}
      jurisdictionDetails={[
        {
          title: "UK \u2014 Authorised Electronic Money Institution (AEMI)",
          body: "The FCA authorises Electronic Money Institutions under the Electronic Money Regulations 2011. An AEMI licence permits the issuance of electronic money, maintenance of e-money accounts (including prepaid cards, e-wallets and IBAN accounts) and the full range of payment services. Minimum initial capital is \u00A3350,000. Applications require a comprehensive business plan, programme of operations, governance and control framework, AML/CFT policies, safeguarding arrangements and financial projections. We prepare all application documentation, draft the required policies and procedures, and manage the FCA relationship through to authorisation.",
        },
        {
          title: "UK \u2014 Small Electronic Money Institution (SEMI)",
          body: "The SEMI registration is available to firms whose average outstanding electronic money does not exceed EUR 5 million. It offers a faster and lower-cost route to market than full AEMI authorisation, with no minimum capital requirement. SEMIs cannot passport into other jurisdictions. We support SEMI registrations as an effective launch strategy, including planning the transition to full AEMI authorisation as the business scales.",
        },
        {
          title: "Lithuania",
          body: "Lithuania is the leading EU jurisdiction for EMI licensing. The Bank of Lithuania operates a structured, transparent and fintech-friendly authorisation process, typically completing applications within 3\u20136 months. A Lithuanian EMI licence provides full EU passporting rights across all 30 EEA member states. Minimum capital is EUR 350,000. We support entity incorporation in Lithuania, licence application preparation, MLRO appointment, board composition and ongoing compliance obligations.",
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
          question:
            "What is the difference between an EMI and a Payment Institution?",
          answer:
            "An EMI can issue electronic money and maintain e-money accounts (e-wallets, prepaid cards, IBANs). A PI can only provide payment services \u2014 it cannot hold funds as e-money.",
        },
        {
          question: "What capital is required for a UK AEMI licence?",
          answer: "\u00A3350,000 minimum initial capital.",
        },
        {
          question: "How long does an FCA AEMI application take?",
          answer:
            "Typically 6\u201312 months from submission of a complete application.",
        },
        {
          question: "Can an EMI accept deposits like a bank?",
          answer:
            "No. EMIs cannot accept deposits. They issue electronic money which must be redeemable at par value at any time.",
        },
        {
          question: "What is a Small EMI (SEMI) and who is it for?",
          answer:
            "A SEMI is a simplified registration for firms whose average outstanding e-money does not exceed EUR 5 million. No minimum capital is required.",
        },
        {
          question: "Which EU jurisdiction is best for an EMI licence?",
          answer:
            "Lithuania is most popular due to its fast process (3\u20136 months), fintech-friendly regulator, and full EU passporting rights.",
        },
        {
          question: "What does PS25 mean for EMIs?",
          answer:
            "From June 2026, the FCA\u2019s PS25 policy statement significantly strengthens safeguarding requirements for EMIs. Annual safeguarding audits will be mandatory.",
        },
      ]}
      testimonial={{
        quote:
          "From initial consultation to final authorisation, the team managed every stage professionally. Their knowledge of FCA requirements and European licensing options saved us months of work.",
        attribution: "Head of Compliance, Authorised EMI",
      }}
      posts={posts}
    />
  );
}
