import { Metadata } from "next";
import ServiceLayout from "@/components/ServiceLayout";

export const metadata: Metadata = {
  title: "Regulatory Reporting | FCA Payment Services Returns | Regulatory Counsel",
  description:
    "FCA regulatory reporting \u2014 PSR001, PSR002, EMF001 and other payment returns.",
};

const reportingTypes = [
  { title: "FCA Payment Services Returns (PSR001, PSR002)", text: "We prepare and submit the FCA\u2019s payment services regulatory returns. PSR001 covers transaction volumes, complaint data and agent/distributor information. PSR002 covers safeguarding, capital adequacy and revenue data. We ensure returns are accurate, complete and submitted on time." },
  { title: "EMI Returns (EMF001)", text: "Electronic money institutions must submit EMF001 returns covering outstanding e-money, safeguarding data, capital adequacy and operational information. We prepare these returns and ensure compliance with reporting deadlines." },
  { title: "Capital Adequacy Reporting", text: "We calculate and report capital adequacy requirements for payment institutions and EMIs under the Payment Services Regulations and Electronic Money Regulations, including own funds calculations and Method A/B/C/D calculations." },
  { title: "Safeguarding Reporting (PS25)", text: "From June 2026, PS25 introduces enhanced safeguarding reporting obligations. We support firms with the new reporting requirements including safeguarding reconciliation data, resolution pack information and annual safeguarding audit submissions." },
  { title: "Annual Financial Crime Reporting", text: "We prepare annual financial crime data returns including REP-CRIM and other FCA submissions covering suspicious activity reports, fraud data and financial crime control information." },
  { title: "Reporting Retainer", text: "We offer a reporting retainer service covering all recurring FCA submissions. We track deadlines, prepare returns and manage submissions so your team can focus on operations." },
];

function Content() {
  return (
    <div className="max-w-4xl">
      <h2 className="text-2xl lg:text-3xl font-bold text-navy mb-6">
        What We Do
      </h2>
      <p className="text-gray-700 text-lg leading-relaxed mb-10">
        FCA-regulated payment institutions and electronic money institutions face
        multiple recurring reporting obligations. We prepare and submit all required
        returns accurately and on time &mdash; ensuring your firm meets its regulatory
        obligations without diverting internal resources.
      </p>

      <div className="space-y-10">
        {reportingTypes.map((r) => (
          <div key={r.title}>
            <h3 className="text-xl font-bold text-navy mb-3">{r.title}</h3>
            <p className="text-gray-700 leading-relaxed">{r.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ReportingPage() {
  return (
    <ServiceLayout
      hero={{
        headline: "Regulatory Reporting Support for Payment Firms & EMIs",
        sub: "Accurate, timely FCA regulatory reporting \u2014 PSR001, PSR002, EMF001, capital adequacy, safeguarding and financial crime returns.",
      }}
      content={<Content />}
      sectors={[
        { name: "Payment Institutions", href: "/payment-institutions" },
        { name: "Electronic Money Institutions", href: "/electronic-money-institutions" },
        { name: "Cryptoassets & Digital Assets", href: "/cryptoassets" },
      ]}
      faqs={[
        { question: "What FCA returns do payment institutions need to file?", answer: "Payment institutions must file PSR001 and PSR002 returns covering transaction volumes, safeguarding, capital adequacy, complaints and agent information. The frequency depends on firm size." },
        { question: "What returns do EMIs file?", answer: "EMIs file EMF001 returns covering outstanding e-money, safeguarding, capital adequacy and operational data, in addition to payment services returns if they also provide payment services." },
        { question: "How often are returns due?", answer: "Most returns are filed annually, with larger firms filing semi-annually or quarterly. We track all deadlines and ensure timely submission." },
        { question: "What happens if a return is filed late?", answer: "The FCA may take supervisory action for late or inaccurate reporting, including potential fines. Late filing is also a factor in FCA risk assessments of your firm." },
        { question: "Can you handle all our FCA reporting?", answer: "Yes. Our reporting retainer covers all recurring FCA submissions for payment and e-money firms, including new PS25 safeguarding reporting requirements." },
        { question: "What changes under PS25 for reporting?", answer: "PS25 introduces new safeguarding reporting obligations from June 2026, including resolution pack information and enhanced reconciliation reporting." },
      ]}
      relatedServices={[
        { name: "Compliance Support", href: "/services/compliance", description: "Ongoing regulatory compliance and monitoring." },
        { name: "Safeguarding", href: "/services/safeguarding", description: "PS25 safeguarding framework and reporting." },
        { name: "Compliance Audit", href: "/services/audit", description: "Independent audit of reporting accuracy." },
      ]}
    />
  );
}
