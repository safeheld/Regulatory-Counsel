import { Metadata } from "next";
import ServiceLayout from "@/components/ServiceLayout";

export const metadata: Metadata = {
  title: "Compliance Audit & Gap Analysis | FCA Regulated Firms | Regulatory Counsel",
  description:
    "Independent compliance audits and gap analysis. Identify regulatory risks early.",
};

const auditTypes = [
  { title: "Full Compliance Audit", text: "A comprehensive review of your firm\u2019s compliance with FCA rules, the Payment Services Regulations, Electronic Money Regulations and any conditions of authorisation. We assess governance, policies, procedures, monitoring, reporting and record keeping against regulatory expectations." },
  { title: "AML Audit", text: "An independent assessment of your AML/CFT framework against the Money Laundering Regulations, FCA requirements and JMLSG guidance. Covers risk assessment, CDD, EDD, transaction monitoring, SAR reporting, training and governance." },
  { title: "Safeguarding Audit (PS25)", text: "From June 2026, annual safeguarding audits become mandatory under PS25 for all payment institutions and electronic money institutions. We conduct independent safeguarding audits covering segregation of funds, reconciliation, account arrangements and regulatory compliance." },
  { title: "Post-Authorisation Review", text: "A focused review conducted 6\u201312 months after authorisation to ensure your firm has implemented all commitments made in the application and is meeting its ongoing regulatory obligations." },
  { title: "Regulatory Due Diligence", text: "For firms acquiring or investing in regulated businesses, we provide regulatory due diligence assessing the target\u2019s compliance position, regulatory history, outstanding obligations and potential liabilities." },
];

function Content() {
  return (
    <div className="max-w-4xl">
      <h2 className="text-2xl lg:text-3xl font-bold text-navy mb-6">
        What We Do
      </h2>
      <p className="text-gray-700 text-lg leading-relaxed mb-10">
        We conduct independent compliance audits and gap analysis for FCA-regulated
        payment institutions, electronic money institutions, cryptoasset firms and
        other financial services businesses. Our audits identify regulatory risks
        early and provide clear, actionable remediation recommendations.
      </p>

      <div className="space-y-10 mb-10">
        {auditTypes.map((a) => (
          <div key={a.title}>
            <h3 className="text-xl font-bold text-navy mb-3">{a.title}</h3>
            <p className="text-gray-700 leading-relaxed">{a.text}</p>
          </div>
        ))}
      </div>

      <h3 className="text-xl font-bold text-navy mb-4">Deliverables</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Detailed audit report with findings categorised by severity</li>
        <li>Regulatory gap analysis with specific rule references</li>
        <li>Prioritised remediation plan with recommended timelines</li>
        <li>Executive summary suitable for board presentation</li>
        <li>Follow-up review to confirm remediation completion</li>
      </ul>
    </div>
  );
}

export default function AuditPage() {
  return (
    <ServiceLayout
      hero={{
        headline: "Compliance Audit & Regulatory Gap Analysis",
        sub: "Independent compliance audits for FCA-regulated firms. We identify regulatory gaps, assess risk and provide clear remediation roadmaps.",
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
        { question: "How often should we conduct a compliance audit?", answer: "The FCA expects firms to conduct regular independent reviews. For most payment and e-money firms, an annual compliance audit is appropriate. AML audits should also be conducted annually." },
        { question: "Is a safeguarding audit mandatory?", answer: "From June 2026, under PS25, annual safeguarding audits will be mandatory for all FCA-authorised payment institutions and electronic money institutions." },
        { question: "What does a compliance audit cover?", answer: "Governance and oversight, policies and procedures, compliance monitoring, regulatory reporting, financial crime controls, safeguarding, complaints handling, record keeping and any conditions of authorisation." },
        { question: "How long does an audit take?", answer: "A typical compliance audit takes 2\u20134 weeks from document request to final report, depending on the size and complexity of the firm." },
        { question: "Can you conduct audits for acquisition due diligence?", answer: "Yes. We provide regulatory due diligence for both buy-side and sell-side, assessing the target\u2019s compliance position and identifying potential regulatory liabilities." },
        { question: "What happens after the audit?", answer: "We deliver a detailed report with prioritised findings and remediation recommendations. We can also support the remediation process and conduct a follow-up review." },
      ]}
      relatedServices={[
        { name: "Compliance Support", href: "/services/compliance", description: "Ongoing compliance monitoring between audits." },
        { name: "Financial Crime", href: "/services/financial-crime", description: "AML/CFT framework build and independent AML audit." },
        { name: "Safeguarding", href: "/services/safeguarding", description: "PS25 safeguarding framework and annual audit." },
      ]}
    />
  );
}
