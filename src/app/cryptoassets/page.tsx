import { Metadata } from "next";
import { getPostsBySector } from "@/lib/sanity";
import SectorLayout from "@/components/SectorLayout";

export const metadata: Metadata = {
  title:
    "Crypto Licence & VASP Registration | FCA, MiCA, UAE & Global | Regulatory Counsel",
  description:
    "We help crypto firms obtain FCA cryptoasset registration, MiCA CASP authorisation, UAE VARA licence and global VASP registrations.",
};

export const revalidate = 60;

function MiCAStablecoinsContent() {
  return (
    <div className="mt-14 space-y-12">
      <div>
        <h3 className="text-xl lg:text-2xl font-bold text-navy mb-4">
          MiCA &amp; Stablecoins
        </h3>
      </div>

      <div>
        <h4 className="text-lg font-bold text-navy mb-3">
          MiCA CASP Authorisation
        </h4>
        <p className="text-gray-700 leading-relaxed">
          MiCA requires any firm providing crypto-asset services in the EU to
          hold a CASP authorisation. Services covered include exchange, custody,
          portfolio management, reception and transmission of orders, placing,
          transfer services and advice. A MiCA CASP authorisation passports
          across all EU27 member states. Lithuania, France, Ireland and
          Luxembourg are the most active national competent authorities.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-navy mb-3">
          E-Money Tokens (EMT) &mdash; Stablecoin Issuers
        </h4>
        <p className="text-gray-700 leading-relaxed">
          Firms issuing stablecoins pegged to a single fiat currency must obtain
          EMT issuer authorisation under MiCA, issued alongside an EMI licence
          in the chosen EU jurisdiction.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold text-navy mb-3">
          Asset-Referenced Tokens (ART)
        </h4>
        <p className="text-gray-700 leading-relaxed">
          ART issuers face the highest regulatory burden under MiCA. Full
          reserve asset management obligations apply. We advise on ART
          structuring, authorisation strategy and compliance.
        </p>
      </div>
    </div>
  );
}

export default async function CryptoPage() {
  const posts = await getPostsBySector("cryptoassets");

  return (
    <SectorLayout
      hero={{
        headline:
          "Cryptoasset & Digital Asset Regulatory Experts \u2014 UK, EU & International",
        sub: "Cryptoasset and digital asset firms require specific regulatory authorisation depending on their services and target markets. We support firms through FCA cryptoasset registration, MiCA CASP authorisation, UAE VARA licensing, Singapore MAS and VASP registrations globally.",
      }}
      intro="The regulatory framework for cryptoassets is evolving rapidly. In the UK, cryptoasset businesses engaged in exchange, custody or certain stablecoin activities must register with the FCA under the Money Laundering Regulations. Across the EU, MiCA \u2014 in force since December 2024 \u2014 requires crypto-asset service providers to obtain a CASP authorisation. Stablecoin issuers face additional obligations under MiCA\u2019s EMT and ART frameworks."
      jurisdictions={[
        {
          country: "UK \u2014 FCA Cryptoasset Reg",
          regulator: "Financial Conduct Authority",
          minCapital: "None (AML reg)",
          timeline: "3\u201312 months",
        },
        {
          country: "EU \u2014 MiCA CASP",
          regulator: "National competent authority (varies)",
          minCapital: "\u20AC50,000\u2013\u20AC150,000",
          timeline: "6\u201312 months",
        },
        {
          country: "UAE \u2014 VARA (Dubai)",
          regulator: "Virtual Assets Regulatory Authority",
          minCapital: "AED 300,000+",
          timeline: "6\u201312 months",
        },
        {
          country: "UAE \u2014 ADGM (Abu Dhabi)",
          regulator: "Financial Services Regulatory Authority",
          minCapital: "Varies by activity",
          timeline: "6\u20139 months",
        },
        {
          country: "Singapore",
          regulator: "Monetary Authority of Singapore (MAS)",
          minCapital: "SGD 250,000 (MPI)",
          timeline: "6\u201312 months",
        },
        {
          country: "Hong Kong \u2014 VASP",
          regulator: "Securities and Futures Commission",
          minCapital: "HKD 5,000,000",
          timeline: "6\u201312 months",
        },
        {
          country: "Cayman Islands",
          regulator: "CIMA",
          minCapital: "None",
          timeline: "3\u20136 months",
        },
        {
          country: "El Salvador",
          regulator: "BCR / CNAD",
          minCapital: "USD 50,000",
          timeline: "3\u20136 months",
        },
        {
          country: "Poland \u2014 VASP",
          regulator: "KNF",
          minCapital: "None (AML reg)",
          timeline: "1\u20133 months",
        },
        {
          country: "Lithuania \u2014 VASP",
          regulator: "Financial Crime Investigation Service",
          minCapital: "None (AML reg)",
          timeline: "1\u20132 months",
        },
      ]}
      jurisdictionDetails={[
        {
          title: "UK \u2014 FCA Cryptoasset Registration",
          body: "Cryptoasset businesses carrying on relevant activity in the UK must register with the FCA under the Money Laundering, Terrorist Financing and Transfer of Funds (Information on the Payer) Regulations 2017. Relevant activities include cryptoasset exchange, custody, peer-to-peer exchange and operating a cryptoasset ATM. Registration requires a comprehensive AML/CFT risk assessment, policies and procedures, fit and proper assessments for key personnel, and ongoing compliance obligations. The FCA has significantly tightened its assessment process \u2014 the rejection rate is high for unprepared applicants. We prepare the full application, draft all AML/CFT documentation and manage FCA engagement through to registration.",
        },
        {
          title: "EU \u2014 MiCA CASP Authorisation",
          body: "The Markets in Crypto-Assets Regulation (MiCA), in force since December 2024, requires any firm providing crypto-asset services in the EU to obtain a CASP authorisation from its home member state regulator. MiCA covers exchange services, custody and administration, transfer services, placing, reception and transmission of orders, portfolio management and advice. A CASP authorisation passports across all EU27 member states. Minimum capital ranges from EUR 50,000 to EUR 150,000 depending on service type. We support firms through the full CASP application process including regulatory strategy, jurisdiction selection, application preparation and regulator liaison.",
        },
        {
          title: "UAE \u2014 VARA Licence (Dubai)",
          body: "The Virtual Assets Regulatory Authority (VARA) licenses and supervises virtual asset service providers operating in or from the Emirate of Dubai. VARA offers licences across seven activity categories including exchange, broker-dealer, custody, lending, management and investment, and transfer and settlement. Minimum capital starts at AED 300,000 and varies by licence category. VARA operates a structured application process with clear milestones. We support firms through VARA licensing including entity setup in Dubai, licence application, compliance framework design and ongoing regulatory obligations.",
        },
      ]}
      extraLicensingContent={<MiCAStablecoinsContent />}
      services={[
        {
          name: "Compliance Support",
          href: "/services/compliance",
          description:
            "AML/CFT, crypto promotions compliance, regulatory change management.",
        },
        {
          name: "Financial Crime",
          href: "/services/financial-crime",
          description:
            "KYT, on-chain monitoring, AML frameworks, sanctions \u2014 crypto-specific.",
        },
        {
          name: "Compliance Audit",
          href: "/services/audit",
          description:
            "Independent audit against FCA, MiCA and FATF standards.",
        },
        {
          name: "MiCA Gap Analysis",
          href: "/services/compliance",
          description:
            "For firms transitioning from VASP registration to MiCA CASP.",
        },
        {
          name: "Regulatory Reporting",
          href: "/services/reporting",
          description:
            "MiCA obligations, FCA financial promotions, AML submissions.",
        },
        {
          name: "Become an Agent",
          href: "/services/become-an-agent",
          description:
            "Operating under an authorised principal while your CASP is processed.",
        },
      ]}
      faqs={[
        {
          question: "Does my crypto business need FCA registration?",
          answer:
            "Yes, if you carry on cryptoasset business in the UK including exchange, custody, peer-to-peer exchange, or operating a cryptoasset ATM.",
        },
        {
          question: "What is MiCA and does it affect my business?",
          answer:
            "MiCA is the EU\u2019s comprehensive crypto regulation in force since December 2024. Any firm providing crypto-asset services to EU customers requires a MiCA CASP authorisation \u2014 including firms based outside the EU.",
        },
        {
          question:
            "Which EU jurisdiction is best for a MiCA CASP licence?",
          answer:
            "Lithuania, Ireland and France are currently most active. Lithuania offers the fastest process with a fintech-friendly regulator.",
        },
        {
          question:
            "Do I need a licence to issue a stablecoin in the EU?",
          answer:
            "Yes. Stablecoin issuers require either EMT authorisation (single fiat peg) or ART authorisation (multi-asset basket) under MiCA.",
        },
        {
          question: "What is the VARA licence in Dubai?",
          answer:
            "VARA is the Virtual Assets Regulatory Authority in Dubai. It licenses and supervises virtual asset service providers operating in or from Dubai.",
        },
        {
          question: "How long does FCA crypto registration take?",
          answer:
            "The FCA has significantly tightened its crypto registration process. Applications typically take 6\u201312 months and the rejection rate is high for unprepared applicants.",
        },
      ]}
      testimonial={{
        quote:
          "We approached them with a complex MiCA authorisation question. Within days we had a clear roadmap and practical advice we could act on immediately.",
        attribution: "Co-Founder, Crypto Asset Service Provider",
      }}
      posts={posts}
    />
  );
}
