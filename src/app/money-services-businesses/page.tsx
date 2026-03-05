import { Metadata } from "next";
import { getPostsBySector } from "@/lib/sanity";
import SectorLayout from "@/components/SectorLayout";

export const metadata: Metadata = {
  title:
    "MSB Licence | Money Services Business Registration UK, Canada, US | Regulatory Counsel",
  description:
    "We help MSBs register with HMRC, FINTRAC, FinCEN and state MTL regulators. Expert AML programme build and licensing support globally.",
};

export const revalidate = 60;

export default async function MSBPage() {
  const posts = await getPostsBySector("money-services-businesses");

  return (
    <SectorLayout
      hero={{
        headline:
          "Money Services Business (MSB) Licensing Experts \u2014 UK, Canada, US & Australia",
        sub: "Money services businesses require registration with AML supervisory authorities across each jurisdiction they operate in. We support MSB registrations in the UK, Canada, USA and Australia, and build the compliance frameworks their registrations demand.",
      }}
      intro="Unlike payment institution licences, most MSB registrations do not require minimum capital and can be obtained relatively quickly \u2014 particularly in Canada (6\u20138 weeks via FINTRAC) and the UK. In the USA, state-by-state Money Transmitter Licences add complexity, with requirements varying significantly across 50 states."
      jurisdictions={[
        {
          country: "UK \u2014 HMRC MSB",
          regulator: "HM Revenue & Customs (HMRC)",
          minCapital: "None",
          timeline: "Ongoing supervised",
        },
        {
          country: "Canada",
          regulator: "FINTRAC",
          minCapital: "None",
          timeline: "6\u20138 weeks",
        },
        {
          country: "USA \u2014 FinCEN",
          regulator: "Financial Crimes Enforcement Network",
          minCapital: "None",
          timeline: "Immediate (online)",
        },
        {
          country: "USA \u2014 State MTL (varies)",
          regulator: "State banking regulators (50 states)",
          minCapital: "$5K\u2013$1M+ varies",
          timeline: "3\u201324 months/state",
        },
        {
          country: "Australia",
          regulator: "AUSTRAC",
          minCapital: "None",
          timeline: "4\u20138 weeks",
        },
        {
          country: "New Zealand",
          regulator: "Financial Intelligence Unit (FIU)",
          minCapital: "None",
          timeline: "2\u20134 weeks",
        },
      ]}
      jurisdictionDetails={[
        {
          title: "UK \u2014 HMRC MSB Registration",
          body: "In the UK, money services businesses must register with HMRC under the Money Laundering, Terrorist Financing and Transfer of Funds (Information on the Payer) Regulations 2017. HMRC acts as the AML/CFT supervisor for MSBs providing money transmission, currency exchange, cheque cashing or payment services that fall below the threshold for FCA authorisation. There is no capital requirement and no registration fee. However, HMRC conducts fit and proper assessments and requires firms to maintain a comprehensive AML/CFT compliance programme including risk assessments, customer due diligence procedures, transaction monitoring, suspicious activity reporting and staff training. We prepare the full registration, build the AML programme and support firms through HMRC supervision visits.",
        },
        {
          title: "Canada \u2014 FINTRAC Registration",
          body: "Canada\u2019s Financial Transactions and Reports Analysis Centre (FINTRAC) requires all money services businesses operating in Canada to register. This includes firms providing foreign exchange, money transfers, issuing or redeeming money orders, or dealing in virtual currencies. Registration is typically completed within 6\u20138 weeks with no capital requirement and no registration fee. However, registered MSBs must implement a full AML/ATF compliance programme including a compliance officer, written policies and procedures, risk assessment, know-your-client measures, record keeping, transaction reporting and a two-year training cycle. We handle the full FINTRAC registration process and build compliance programmes that meet FINTRAC examination standards.",
        },
        {
          title: "USA \u2014 FinCEN Registration & State Money Transmitter Licences",
          body: "In the United States, MSBs must register with FinCEN at the federal level \u2014 this is an immediate online process with no capital requirement. However, most money transmission activities also require state-level Money Transmitter Licences (MTLs) from each state in which the firm operates. State requirements vary significantly: surety bond amounts range from $5,000 to over $1 million, application timelines range from 3 to 24 months, and some states require audited financial statements, detailed business plans and background checks on all principals. We manage multi-state MTL applications, coordinate with the NMLS licensing system, and build BSA/AML compliance programmes that satisfy both federal and state requirements.",
        },
      ]}
      services={[
        {
          name: "AML Programme Build",
          href: "/services/financial-crime",
          description:
            "Full AML/CTF programme for your MSB operations and jurisdiction.",
        },
        {
          name: "Financial Crime",
          href: "/services/financial-crime",
          description:
            "Risk assessments, SAR procedures, HMRC/FINTRAC audit readiness.",
        },
        {
          name: "Compliance Audit",
          href: "/services/audit",
          description:
            "Annual AML audit and supervision readiness review.",
        },
        {
          name: "Regulatory Reporting",
          href: "/services/reporting",
          description:
            "HMRC SARs, FINTRAC transaction reports, FinCEN CTR/SAR filings.",
        },
        {
          name: "Compliance Support",
          href: "/services/compliance",
          description:
            "Ongoing policy maintenance and regulatory change updates.",
        },
        {
          name: "Training",
          href: "/services/compliance",
          description:
            "Annual AML/CTF staff training \u2014 required for all registered MSBs.",
        },
      ]}
      faqs={[
        {
          question:
            "Does my UK business need HMRC MSB registration?",
          answer:
            "Yes, if you provide money transmission, currency exchange, cheque cashing or payment services in the UK. HMRC registration is required under the Money Laundering Regulations.",
        },
        {
          question:
            "What is the difference between HMRC MSB registration and FCA authorisation?",
          answer:
            "HMRC registration covers AML supervision only. FCA authorisation is required to provide regulated payment services. Many firms need both.",
        },
        {
          question:
            "How long does Canada FINTRAC registration take?",
          answer:
            "Typically 6\u20138 weeks. There is no capital requirement and no registration fee.",
        },
        {
          question: "Do I need a licence in every US state?",
          answer:
            "For most money transmission activities, yes \u2014 state-level MTLs are required in addition to FinCEN registration. Requirements vary significantly by state.",
        },
        {
          question:
            "What must an AML compliance programme include?",
          answer:
            "A written AML policy, risk assessment, customer due diligence procedures, transaction monitoring, suspicious activity reporting, staff training, and an independent audit.",
        },
      ]}
      testimonial={{
        quote:
          "They registered our business with FINTRAC and built our entire AML programme in under four weeks. The process was smooth and we were operational on schedule.",
        attribution: "Operations Director, Canada MSB",
      }}
      posts={posts}
    />
  );
}
