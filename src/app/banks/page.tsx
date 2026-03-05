import { Metadata } from "next";
import { getPostsBySector } from "@/lib/sanity";
import SectorLayout from "@/components/SectorLayout";

export const metadata: Metadata = {
  title: "Banking Licence | UK & EU Bank Authorisation | Regulatory Counsel",
  description:
    "Expert support for banking licence applications in the UK and EU. Challenger banks, neobanks and credit institutions \u2014 PRA/FCA and EU specialised bank.",
};

export const revalidate = 60;

export default async function BanksPage() {
  const posts = await getPostsBySector("banks");

  return (
    <SectorLayout
      hero={{
        headline: "Banking Licence & Regulatory Experts \u2014 UK & EU",
        sub: "Obtaining a banking licence is the most complex regulatory authorisation in financial services. We support challenger banks, neobanks and credit institutions through PRA/FCA dual-regulated authorisation in the UK and specialised bank licensing across the EU.",
      }}
      intro="In the UK, banks are dual-regulated by the Prudential Regulation Authority (PRA) and the Financial Conduct Authority (FCA). The process includes a mobilisation phase and requires substantial capital and governance infrastructure. Across the EU, Lithuania\u2019s Specialised Bank licence offers the most accessible route for fintech-oriented banking firms."
      jurisdictions={[
        {
          country: "UK \u2014 Credit Institution",
          regulator: "PRA + FCA (dual-regulated)",
          minCapital: "\u00A31M+ (mobilisation)",
          timeline: "12\u201336 months",
        },
        {
          country: "Lithuania \u2014 Specialised",
          regulator: "Bank of Lithuania",
          minCapital: "\u20AC1,000,000",
          timeline: "6\u201312 months",
        },
        {
          country: "Ireland",
          regulator: "Central Bank of Ireland",
          minCapital: "\u20AC5,000,000+",
          timeline: "12\u201324 months",
        },
        {
          country: "Malta",
          regulator: "Malta Financial Services Authority",
          minCapital: "\u20AC5,000,000+",
          timeline: "12\u201318 months",
        },
        {
          country: "Luxembourg",
          regulator: "Commission de Surveillance (CSSF)",
          minCapital: "\u20AC8,300,000+",
          timeline: "12\u201324 months",
        },
      ]}
      jurisdictionDetails={[
        {
          title: "UK \u2014 Credit Institution (PRA/FCA)",
          body: "UK banking authorisation is a dual-regulated process overseen by the PRA and the FCA. Applicants must demonstrate a credible business plan, robust governance framework, adequate capital resources, risk management capabilities and operational resilience. The PRA operates a two-stage process: firms first receive authorisation with restrictions (the mobilisation phase), during which they build out infrastructure, hire key personnel and prepare for launch. The mobilisation phase typically lasts 12 months. Minimum capital during mobilisation is \u00A31 million, with ongoing capital requirements calculated under the Internal Capital Adequacy Assessment Process (ICAAP). We prepare comprehensive application documentation, draft all required policies and frameworks, support board composition and SM&CR mapping, and manage regulator engagement throughout the process.",
        },
        {
          title: "Lithuania \u2014 Specialised Bank",
          body: "Lithuania\u2019s Specialised Bank licence, issued by the Bank of Lithuania, offers the most accessible EU banking route for fintech-oriented firms. It permits deposit-taking, lending and payment services within defined parameters. Minimum capital is EUR 1,000,000 \u2014 significantly lower than traditional EU credit institution requirements. The application process typically takes 6\u201312 months. A Lithuanian banking licence passports across all EEA member states. We support entity incorporation, licence application preparation, governance design, policy drafting and ongoing compliance with Bank of Lithuania requirements.",
        },
      ]}
      services={[
        {
          name: "Compliance Support",
          href: "/services/compliance",
          description:
            "SM&CR, ICAAP/ILAAP support, ongoing PRA/FCA compliance.",
        },
        {
          name: "Financial Crime",
          href: "/services/financial-crime",
          description:
            "AML/CFT, fraud risk and financial crime frameworks for banks.",
        },
        {
          name: "Compliance Audit",
          href: "/services/audit",
          description:
            "Independent regulatory audit covering PRA/FCA requirements.",
        },
        {
          name: "Regulatory Reporting",
          href: "/services/reporting",
          description:
            "PRA prudential reporting, FCA returns, capital adequacy reporting.",
        },
        {
          name: "Open Banking",
          href: "/services/compliance",
          description:
            "AIS, PIS and RAISP authorisation within banking licence scope.",
        },
        {
          name: "Variation of Permission",
          href: "/services/variation-of-permission",
          description:
            "Adding or amending regulated activities post-authorisation.",
        },
      ]}
      faqs={[
        {
          question:
            "What is the difference between a bank licence and an EMI licence?",
          answer:
            "A bank (credit institution) can accept deposits, make loans and offer a full range of financial services. An EMI can issue e-money and provide payment services but cannot accept deposits or make loans.",
        },
        {
          question:
            "What is the mobilisation phase for UK banking authorisation?",
          answer:
            "The PRA operates a mobilisation phase where firms receive authorisation with restrictions, allowing them to build out operations before going live. This typically lasts 12 months.",
        },
        {
          question:
            "How much capital is required to set up a bank in the UK?",
          answer:
            "The PRA requires a minimum of \u00A31 million during mobilisation, with additional capital requirements based on the business model and risk profile.",
        },
        {
          question:
            "What is the Lithuania Specialised Bank licence?",
          answer:
            "A banking licence issued by the Bank of Lithuania for firms offering limited banking services. Requires \u20AC1 million capital and typically takes 6\u201312 months. It passports across the EU.",
        },
        {
          question: "What is SM&CR?",
          answer:
            "The Senior Managers and Certification Regime requires banks to clearly allocate regulatory responsibilities to senior individuals and certify the fitness and propriety of key staff.",
        },
      ]}
      testimonial={{
        quote:
          "Their deep understanding of PRA and FCA requirements gave us confidence throughout our banking authorisation process. The quality of documentation they produced was outstanding.",
        attribution: "Chief Financial Officer, UK Challenger Bank",
      }}
      posts={posts}
    />
  );
}
