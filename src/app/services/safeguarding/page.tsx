import { Metadata } from "next";
import ServiceLayout from "@/components/ServiceLayout";

export const metadata: Metadata = {
  title: "Safeguarding Compliance | PS25 FCA Requirements | Regulatory Counsel",
  description:
    "Help with FCA PS25 safeguarding. Annual audits, frameworks, account setup. June 2026.",
};

function Content() {
  return (
    <div className="max-w-4xl">
      {/* PS25 Callout */}
      <div className="bg-blue-600 text-white rounded-lg p-6 mb-10">
        <div className="flex items-start gap-4">
          <svg className="w-8 h-8 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
          </svg>
          <div>
            <p className="text-xl font-bold mb-1">PS25 Deadline: June 2026</p>
            <p className="text-blue-100">
              The FCA&apos;s PS25 policy statement significantly strengthens safeguarding
              requirements for all payment institutions and electronic money institutions.
              Annual safeguarding audits become mandatory. Act now to ensure compliance.
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl lg:text-3xl font-bold text-navy mb-6">
        What We Do
      </h2>
      <p className="text-gray-700 text-lg leading-relaxed mb-10">
        Safeguarding is one of the most critical regulatory obligations for payment
        institutions and electronic money institutions. We help firms design, implement
        and maintain safeguarding arrangements that meet current FCA requirements and
        prepare for the enhanced obligations under PS25.
      </p>

      <div className="space-y-10 mb-10">
        <div>
          <h3 className="text-xl font-bold text-navy mb-3">PS25 &mdash; What Changes</h3>
          <p className="text-gray-700 leading-relaxed">
            From June 2026, PS25 introduces a statutory trust over safeguarded funds,
            mandatory annual safeguarding audits, enhanced reconciliation requirements,
            resolution pack obligations and strengthened record-keeping standards. Firms
            must demonstrate that client funds are protected at all times and can be
            returned promptly in the event of insolvency.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-navy mb-3">Annual Safeguarding Audit</h3>
          <p className="text-gray-700 leading-relaxed">
            PS25 makes annual independent safeguarding audits mandatory. We conduct
            safeguarding audits covering fund segregation, reconciliation processes,
            account arrangements, record keeping and compliance with the safeguarding
            regulations. Our audit reports meet the FCA&apos;s expected standard and
            provide clear remediation recommendations.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-navy mb-3">Safeguarding Framework Build</h3>
          <p className="text-gray-700 leading-relaxed">
            For firms establishing or upgrading their safeguarding arrangements, we design
            the complete framework: safeguarding policy, daily and periodic reconciliation
            procedures, account structure, record-keeping standards, internal controls and
            governance oversight. We ensure the framework meets both current requirements
            and PS25 obligations.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-navy mb-3">Safeguarding Account Introduction</h3>
          <p className="text-gray-700 leading-relaxed">
            We introduce firms to banks that offer designated safeguarding accounts with
            appropriate terms and acknowledgement letters. We support the account setup
            process and ensure the documentation meets FCA requirements.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-navy mb-3">Ongoing Monitoring</h3>
          <p className="text-gray-700 leading-relaxed">
            We provide ongoing safeguarding monitoring as part of our compliance retainer,
            including periodic review of reconciliation accuracy, account arrangements and
            emerging regulatory guidance.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function SafeguardingPage() {
  return (
    <ServiceLayout
      hero={{
        headline: "Safeguarding Compliance for Payment & E-Money Firms \u2014 PS25",
        sub: "We help payment institutions and EMIs design, audit and maintain safeguarding arrangements that meet FCA requirements \u2014 including the enhanced obligations under PS25 from June 2026.",
      }}
      content={<Content />}
      sectors={[
        { name: "Payment Institutions", href: "/payment-institutions" },
        { name: "Electronic Money Institutions", href: "/electronic-money-institutions" },
      ]}
      faqs={[
        { question: "What is safeguarding?", answer: "Safeguarding requires payment institutions and EMIs to protect client funds by holding them in segregated accounts at a credit institution or insuring them. This ensures client funds can be returned if the firm becomes insolvent." },
        { question: "What changes under PS25?", answer: "PS25 introduces a statutory trust over safeguarded funds, mandatory annual audits, enhanced reconciliation requirements, resolution pack obligations and stronger record-keeping standards. These take effect from June 2026." },
        { question: "Is an annual safeguarding audit now mandatory?", answer: "Yes, from June 2026 under PS25. All FCA-authorised payment institutions and electronic money institutions must have an annual independent safeguarding audit." },
        { question: "Do small payment institutions need to safeguard?", answer: "SPIs are not required to safeguard under current rules. However, firms approaching the volume threshold for full authorisation should prepare safeguarding arrangements in advance." },
        { question: "Can you help us open safeguarding accounts?", answer: "Yes. We introduce firms to banks offering designated safeguarding accounts and support the setup process, including appropriate acknowledgement letters." },
        { question: "How often should reconciliation be performed?", answer: "Daily reconciliation is best practice and will be strengthened under PS25. We help firms implement robust daily and periodic reconciliation processes." },
        { question: "What is a resolution pack?", answer: "Under PS25, firms must maintain a resolution pack containing all information needed to return client funds promptly in the event of insolvency. We design the pack structure and ensure it is maintained." },
      ]}
      relatedServices={[
        { name: "Compliance Audit", href: "/services/audit", description: "Independent compliance and safeguarding audits." },
        { name: "Regulatory Reporting", href: "/services/reporting", description: "PS25 safeguarding reporting obligations." },
        { name: "Licensing", href: "/services/licensing", description: "Safeguarding arrangements for new licence applications." },
      ]}
    />
  );
}
