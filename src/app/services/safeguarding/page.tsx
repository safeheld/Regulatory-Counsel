import { Metadata } from "next";
import ServiceLayout from "@/components/ServiceLayout";

export const metadata: Metadata = {
  title: "Safeguarding Compliance | PS25 FCA Requirements | Regulatory Counsel",
  description:
    "Expert help with FCA PS25 safeguarding compliance. Annual audits, framework design, resolution packs, reconciliation. Deadline June 2026.",
};

function Content() {
  return (
    <div className="max-w-4xl">
      {/* PS25 Urgent Banner */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl p-8 lg:p-10 mb-14 shadow-card">
        <div className="flex items-start gap-5">
          <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center shrink-0">
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
            </svg>
          </div>
          <div>
            <p className="font-serif text-[1.5rem] lg:text-[1.8rem] font-bold mb-3">PS25 Deadline: June 2026</p>
            <p className="text-white/90 text-[16px] leading-[1.75] mb-4">
              The FCA&apos;s PS25 policy statement represents the most significant change to
              safeguarding requirements since the Payment Services Regulations 2017. All
              authorised payment institutions and electronic money institutions must comply
              by June 2026. Firms that fail to prepare risk enforcement action, client fund
              shortfalls and potential loss of authorisation.
            </p>
            <p className="text-white/80 text-[15px] font-semibold">
              Do not wait. Start your PS25 preparation now.
            </p>
          </div>
        </div>
      </div>

      <h2 className="font-serif text-[2rem] lg:text-[2.8rem] font-bold text-navy mb-8">
        What We Do
      </h2>
      <p className="text-gray-500 text-[16px] leading-[1.8] mb-14">
        Safeguarding is one of the most critical regulatory obligations for payment
        institutions and electronic money institutions. We help firms design, implement
        and maintain safeguarding arrangements that meet current FCA requirements and
        prepare for the enhanced obligations under PS25. Our team has conducted
        safeguarding reviews for firms holding from under &pound;1 million to over
        &pound;500 million in client funds.
      </p>

      <div className="space-y-12 mb-14">
        <div>
          <h3 className="font-serif text-[1.4rem] lg:text-[1.7rem] font-bold text-navy mb-4">Who Is Affected</h3>
          <p className="text-gray-500 text-[16px] leading-[1.8]">
            PS25 applies to all FCA-authorised payment institutions (APIs) and electronic money
            institutions (EMIs) that hold client funds. This includes firms that safeguard via
            segregation in a credit institution, insurance or guarantee arrangements, and firms
            using a combination of methods. Small payment institutions (SPIs) are not currently
            required to safeguard, but firms approaching the volume threshold for full authorisation
            should begin preparing safeguarding arrangements in advance to avoid disruption.
          </p>
        </div>

        <div>
          <h3 className="font-serif text-[1.4rem] lg:text-[1.7rem] font-bold text-navy mb-4">PS25 &mdash; What Changes</h3>
          <p className="text-gray-500 text-[16px] leading-[1.8]">
            From June 2026, PS25 introduces a statutory trust over safeguarded funds,
            mandatory annual safeguarding audits, enhanced daily and periodic reconciliation requirements,
            resolution pack obligations and strengthened record-keeping standards. Firms
            must demonstrate that client funds are protected at all times and can be
            returned promptly in the event of insolvency. The statutory trust means that
            safeguarded funds will be held on trust for clients as a matter of law, providing
            stronger protection than the current regulatory requirement alone.
          </p>
        </div>

        <div>
          <h3 className="font-serif text-[1.4rem] lg:text-[1.7rem] font-bold text-navy mb-4">Annual Safeguarding Audit</h3>
          <p className="text-gray-500 text-[16px] leading-[1.8]">
            PS25 makes annual independent safeguarding audits mandatory for the first time. We conduct
            comprehensive safeguarding audits covering fund segregation, reconciliation processes,
            account arrangements, record keeping, governance oversight and compliance with the safeguarding
            regulations. Our audit reports meet the FCA&apos;s expected standard and
            provide clear, prioritised remediation recommendations with implementation timelines.
          </p>
        </div>

        <div>
          <h3 className="font-serif text-[1.4rem] lg:text-[1.7rem] font-bold text-navy mb-4">Resolution Pack</h3>
          <p className="text-gray-500 text-[16px] leading-[1.8]">
            Under PS25, firms must maintain a resolution pack containing all information needed
            to return client funds promptly in the event of insolvency. This includes a complete
            record of safeguarded funds, account details, reconciliation records and client
            entitlements. We design the pack structure, establish the maintenance procedures and
            ensure the pack remains current and ready for use at all times.
          </p>
        </div>

        <div>
          <h3 className="font-serif text-[1.4rem] lg:text-[1.7rem] font-bold text-navy mb-4">Safeguarding Framework Build</h3>
          <p className="text-gray-500 text-[16px] leading-[1.8]">
            For firms establishing or upgrading their safeguarding arrangements, we design
            the complete framework: safeguarding policy, daily and periodic reconciliation
            procedures, account structure, record-keeping standards, internal controls and
            governance oversight. We ensure the framework meets both current requirements
            and PS25 obligations so firms do not need to rebuild their arrangements in 2026.
          </p>
        </div>

        <div>
          <h3 className="font-serif text-[1.4rem] lg:text-[1.7rem] font-bold text-navy mb-4">Monthly Reconciliation Support</h3>
          <p className="text-gray-500 text-[16px] leading-[1.8]">
            Daily reconciliation is best practice and will be strengthened under PS25. We help firms
            implement robust daily and periodic reconciliation processes, review reconciliation
            accuracy on an ongoing basis, and investigate and resolve discrepancies. For firms on
            our compliance retainer, we provide monthly reconciliation reviews as standard.
          </p>
        </div>

        <div>
          <h3 className="font-serif text-[1.4rem] lg:text-[1.7rem] font-bold text-navy mb-4">Safeguarding Account Introduction</h3>
          <p className="text-gray-500 text-[16px] leading-[1.8]">
            We introduce firms to banks that offer designated safeguarding accounts with
            appropriate terms and acknowledgement letters. We support the account setup
            process and ensure the documentation meets FCA requirements, including the
            correct trust acknowledgement wording and notification provisions.
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
        { question: "What is safeguarding?", answer: "Safeguarding requires payment institutions and EMIs to protect client funds by holding them in segregated accounts at a credit institution, or by insuring them under an appropriate policy. The purpose is to ensure client funds can be returned promptly if the firm becomes insolvent. This is one of the most important regulatory obligations for any firm that holds or transmits client money." },
        { question: "What changes under PS25?", answer: "PS25 introduces a statutory trust over safeguarded funds, mandatory annual independent audits, enhanced daily reconciliation requirements, resolution pack obligations and stronger record-keeping standards. The statutory trust is the most significant change, meaning safeguarded funds will be held on trust for clients as a matter of law. These changes take effect from June 2026." },
        { question: "Is an annual safeguarding audit now mandatory?", answer: "Yes, from June 2026 under PS25. All FCA-authorised payment institutions and electronic money institutions must have an annual independent safeguarding audit. The audit must assess the adequacy of the firm's safeguarding arrangements, reconciliation accuracy and compliance with the regulations. We conduct these audits and provide clear, actionable reports." },
        { question: "Do small payment institutions need to safeguard?", answer: "SPIs are not required to safeguard under current rules, as they benefit from an exemption based on their lower transaction volumes. However, firms approaching the transaction volume threshold for full FCA authorisation should prepare safeguarding arrangements well in advance to avoid disruption when they transition to authorised status." },
        { question: "Can you help us open safeguarding accounts?", answer: "Yes. We introduce firms to banks offering designated safeguarding accounts with appropriate terms and trust acknowledgement letters. We support the entire account setup process, review the documentation to ensure it meets FCA requirements, and advise on the correct account structure for your business model and transaction flows." },
        { question: "How often should reconciliation be performed?", answer: "Daily reconciliation is best practice and will be a strengthened requirement under PS25. We help firms implement robust daily reconciliation processes that compare internal records against bank statements, identify and investigate discrepancies promptly, and maintain a clear audit trail. For firms on our compliance retainer, we provide monthly reconciliation reviews." },
        { question: "What is a resolution pack?", answer: "Under PS25, firms must maintain a resolution pack containing all information needed to return client funds promptly in the event of insolvency. This includes a complete record of safeguarded funds, the accounts in which they are held, reconciliation records, client entitlements and contact details. We design the pack structure and establish procedures to keep it current at all times." },
      ]}
      relatedServices={[
        { name: "Compliance Audit", href: "/services/audit", description: "Independent compliance and safeguarding audits for regulated firms." },
        { name: "Regulatory Reporting", href: "/services/reporting", description: "PS25 safeguarding reporting obligations and FCA returns." },
        { name: "Licensing", href: "/services/licensing", description: "Safeguarding arrangements built into new licence applications." },
      ]}
    />
  );
}
