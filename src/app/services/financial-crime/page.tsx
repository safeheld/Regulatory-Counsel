import { Metadata } from "next";
import ServiceLayout from "@/components/ServiceLayout";

export const metadata: Metadata = {
  title: "Financial Crime Compliance | AML, KYC, Sanctions | Regulatory Counsel",
  description:
    "AML/CFT, KYC/KYB, sanctions, transaction monitoring and fraud risk for regulated firms.",
};

const sections = [
  { title: "AML/CFT Framework", text: "We design and implement comprehensive AML/CFT frameworks tailored to your firm\u2019s risk profile, customer base and product set. This includes business-wide risk assessments, written policies and procedures, governance arrangements, record-keeping standards and regulatory reporting obligations." },
  { title: "KYC/KYB Programme", text: "We build customer and business due diligence programmes covering identity verification, enhanced due diligence for high-risk customers, PEP and sanctions screening, source of funds and source of wealth procedures, and ongoing monitoring requirements." },
  { title: "Sanctions Compliance", text: "We design sanctions compliance frameworks including real-time screening against OFSI, OFAC, EU and UN sanctions lists, alert handling procedures, escalation processes and regulatory reporting for sanctions matches." },
  { title: "Transaction Monitoring", text: "We help firms design and calibrate transaction monitoring rules, establish alert-handling workflows, reduce false positive rates and ensure suspicious activity is identified, investigated and reported in accordance with NCA requirements." },
  { title: "Fraud Risk & APP Fraud", text: "We advise on fraud risk frameworks including Authorised Push Payment (APP) fraud controls, confirmation of payee, fraud detection systems and the PSR\u2019s reimbursement requirements for payment firms." },
  { title: "Crypto Financial Crime (KYT)", text: "For cryptoasset firms, we build Know Your Transaction (KYT) frameworks, on-chain monitoring procedures, wallet screening, travel rule compliance and crypto-specific suspicious activity indicators." },
  { title: "AML Audit", text: "We conduct independent AML audits assessing your firm\u2019s compliance with the Money Laundering Regulations, FCA requirements and JMLSG guidance. Our audit reports identify gaps and provide actionable remediation recommendations." },
];

function Content() {
  return (
    <div className="max-w-4xl">
      <h2 className="text-2xl lg:text-3xl font-bold text-navy mb-6">
        What We Do
      </h2>
      <p className="text-gray-700 text-lg leading-relaxed mb-10">
        Financial crime compliance is a core regulatory requirement for every
        regulated firm. We build, review and strengthen financial crime frameworks
        covering AML/CFT, KYC/KYB, sanctions, transaction monitoring, fraud risk
        and crypto-specific controls.
      </p>

      <div className="space-y-10">
        {sections.map((s) => (
          <div key={s.title}>
            <h3 className="text-xl font-bold text-navy mb-3">{s.title}</h3>
            <p className="text-gray-700 leading-relaxed">{s.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function FinancialCrimePage() {
  return (
    <ServiceLayout
      hero={{
        headline: "Financial Crime Compliance for Regulated Firms",
        sub: "AML/CFT frameworks, KYC/KYB programmes, sanctions compliance, transaction monitoring, fraud risk and crypto-specific financial crime controls.",
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
        { question: "What does an AML framework include?", answer: "A business-wide risk assessment, written AML/CFT policies and procedures, customer due diligence processes, transaction monitoring, suspicious activity reporting, staff training, record keeping and an independent audit programme." },
        { question: "Do you build KYC/KYB programmes from scratch?", answer: "Yes. We design and document complete customer due diligence programmes tailored to your firm\u2019s products, customer types and risk appetite." },
        { question: "Can you help with crypto-specific financial crime?", answer: "Yes. We specialise in KYT (Know Your Transaction), on-chain monitoring, wallet screening, travel rule compliance and crypto-specific suspicious activity indicators." },
        { question: "What is an AML audit?", answer: "An independent assessment of your firm\u2019s AML/CFT controls against the Money Laundering Regulations, FCA rules and JMLSG guidance. It identifies gaps and provides remediation recommendations." },
        { question: "How often should an AML audit be conducted?", answer: "The FCA expects regulated firms to conduct an independent AML audit at appropriate intervals. For most firms, this means annually." },
        { question: "Do you support firms with SAR reporting?", answer: "Yes. We advise on suspicious activity identification, SAR drafting, NCA Defence Against Money Laundering (DAML) requests and consent regime procedures." },
        { question: "What are the APP fraud requirements for payment firms?", answer: "The PSR requires payment firms to reimburse APP fraud victims in most cases. We help firms implement confirmation of payee, fraud detection controls and compliant reimbursement procedures." },
      ]}
      relatedServices={[
        { name: "Compliance Audit", href: "/services/audit", description: "Independent compliance and AML audits." },
        { name: "Compliance Support", href: "/services/compliance", description: "Ongoing monitoring and regulatory advisory." },
        { name: "Regulatory Reporting", href: "/services/reporting", description: "SAR filing and regulatory crime reporting." },
      ]}
    />
  );
}
