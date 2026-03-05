import { Metadata } from "next";
import ServiceLayout from "@/components/ServiceLayout";

export const metadata: Metadata = {
  title: "Compliance Support for Payment & EMI Firms | Regulatory Counsel",
  description:
    "Ongoing FCA compliance monitoring, policy review and regulatory support.",
};

const deliverables = [
  { title: "Compliance Monitoring", text: "We operate a structured compliance monitoring programme covering your regulatory obligations, FCA rules and internal policies. We identify breaches early and ensure they are remediated." },
  { title: "Policy & Procedure Review", text: "Annual review and update of all compliance policies and procedures \u2014 ensuring they reflect current FCA rules, regulatory guidance and your evolving business model." },
  { title: "Regulatory Change Tracking", text: "We monitor FCA consultations, policy statements and regulatory developments relevant to your firm, assess the impact and advise on required changes." },
  { title: "Board Reporting", text: "Quarterly compliance reports for your board covering regulatory obligations, monitoring findings, breaches, regulatory developments and recommended actions." },
  { title: "MLRO Support & Deputising", text: "We provide MLRO support services including acting as deputy MLRO, SAR oversight, annual MLRO reporting and liaison with the NCA." },
  { title: "Training", text: "Regulatory and compliance training tailored to your team \u2014 covering FCA requirements, AML/CFT obligations, consumer duty and firm-specific policies." },
];

function Content() {
  return (
    <div className="max-w-4xl">
      <h2 className="text-2xl lg:text-3xl font-bold text-navy mb-6">
        What We Do
      </h2>
      <p className="text-gray-700 text-lg leading-relaxed mb-10">
        We provide ongoing compliance support to FCA-regulated payment institutions,
        electronic money institutions and other financial services firms. Our service is
        delivered on a monthly retainer basis, giving your firm continuous access to senior
        compliance expertise without the cost of a full-time hire.
      </p>

      <div className="space-y-8 mb-10">
        {deliverables.map((d) => (
          <div key={d.title}>
            <h3 className="text-lg font-bold text-navy mb-2">{d.title}</h3>
            <p className="text-gray-700 leading-relaxed">{d.text}</p>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
        <h3 className="text-lg font-bold text-navy mb-2">Monthly Retainer</h3>
        <p className="text-gray-700 leading-relaxed">
          Our compliance support is delivered on a fixed monthly retainer. Contact us to
          discuss your firm&apos;s requirements and scope.
        </p>
      </div>
    </div>
  );
}

export default function CompliancePage() {
  return (
    <ServiceLayout
      hero={{
        headline: "Ongoing Compliance Support for Regulated Firms",
        sub: "Continuous compliance monitoring, policy review and regulatory advisory \u2014 delivered by senior consultants on a monthly retainer.",
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
        { question: "What does your compliance retainer include?", answer: "Compliance monitoring, policy reviews, regulatory change tracking, board reporting, MLRO support, training and ad-hoc regulatory advice. The scope is tailored to your firm." },
        { question: "Do you act as outsourced compliance officer?", answer: "We provide compliance support and MLRO deputising services. For firms that require an outsourced compliance function, we can scope a dedicated arrangement." },
        { question: "How often are policies reviewed?", answer: "We conduct a full policy review at least annually, with interim updates triggered by regulatory changes or material changes to your business." },
        { question: "Can you support firms outside the UK?", answer: "Yes. We support EU-authorised firms with their ongoing compliance obligations, particularly those licensed in Lithuania, Ireland and other EEA jurisdictions." },
        { question: "What is MLRO deputising?", answer: "We act as deputy Money Laundering Reporting Officer, providing cover during absences and supporting SAR review, annual MLRO reporting and NCA liaison." },
        { question: "Do you provide staff training?", answer: "Yes. We deliver tailored compliance and AML/CFT training for your team, covering FCA requirements, firm-specific policies and current regulatory themes." },
      ]}
      relatedServices={[
        { name: "Financial Crime", href: "/services/financial-crime", description: "AML/CFT frameworks, KYC and transaction monitoring." },
        { name: "Compliance Audit", href: "/services/audit", description: "Independent audit of your compliance framework." },
        { name: "Regulatory Reporting", href: "/services/reporting", description: "FCA returns and regulatory submissions." },
      ]}
    />
  );
}
