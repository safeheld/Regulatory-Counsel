import { Metadata } from "next";
import ServiceLayout from "@/components/ServiceLayout";

export const metadata: Metadata = {
  title: "Change of Control | FCA Application Support | Regulatory Counsel",
  description:
    "FCA Change of Control applications for acquisitions of regulated firms.",
};

function Content() {
  return (
    <div className="max-w-4xl">
      <h2 className="text-2xl lg:text-3xl font-bold text-navy mb-6">
        What We Do
      </h2>
      <p className="text-gray-700 text-lg leading-relaxed mb-10">
        A change of control application is required whenever a person or entity proposes
        to acquire or increase a qualifying holding in an FCA-regulated firm. We manage
        the full process from regulatory due diligence through to FCA approval.
      </p>

      <div className="space-y-10 mb-10">
        <div>
          <h3 className="text-xl font-bold text-navy mb-3">When Is a Change of Control Required?</h3>
          <p className="text-gray-700 leading-relaxed">
            An FCA change of control application (Section 178 notification) is required when
            a person proposes to acquire, increase or reduce a qualifying holding of 10% or
            more in a regulated firm. This includes direct and indirect holdings, and applies
            to both individual and corporate acquirers. The FCA has 60 working days to assess
            the application and may extend this if additional information is required.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-navy mb-3">FCA Process &amp; Documentation</h3>
          <p className="text-gray-700 leading-relaxed">
            We prepare and submit the Section 178 notification to the FCA, including all
            supporting documentation: corporate structure charts, source of funds evidence,
            business plans, financial projections, fit and proper assessments for new
            controllers, and any required regulatory business plans. We manage all FCA
            queries and liaison through to approval.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-navy mb-3">Regulatory Due Diligence (Buy-Side)</h3>
          <p className="text-gray-700 leading-relaxed">
            For acquirers, we conduct regulatory due diligence on the target firm &mdash;
            assessing its compliance position, regulatory history, outstanding obligations,
            pending enforcement matters, safeguarding arrangements and any potential
            liabilities that may affect the transaction or post-acquisition operations.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-navy mb-3">Regulatory Due Diligence (Sell-Side)</h3>
          <p className="text-gray-700 leading-relaxed">
            For firms being acquired, we prepare a regulatory vendor due diligence pack
            that presents the firm&apos;s compliance position clearly and identifies any
            matters that may require disclosure or remediation prior to completion.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-navy mb-3">Post-Acquisition Compliance</h3>
          <p className="text-gray-700 leading-relaxed">
            After completion, we support the transition &mdash; updating FCA records,
            revising governance arrangements, ensuring SM&amp;CR allocations are correct,
            updating compliance policies and managing any conditions attached to the
            FCA&apos;s approval.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ChangeOfControlPage() {
  return (
    <ServiceLayout
      hero={{
        headline: "Change of Control Applications for Regulated Firms",
        sub: "We manage FCA change of control applications for acquirers and target firms \u2014 from regulatory due diligence through to post-acquisition compliance.",
      }}
      content={<Content />}
      sectors={[
        { name: "Payment Institutions", href: "/payment-institutions" },
        { name: "Electronic Money Institutions", href: "/electronic-money-institutions" },
        { name: "Cryptoassets & Digital Assets", href: "/cryptoassets" },
        { name: "Banks", href: "/banks" },
      ]}
      faqs={[
        { question: "When is a change of control application required?", answer: "When any person or entity proposes to acquire, increase or reduce a qualifying holding of 10% or more in an FCA-regulated firm. This includes direct and indirect holdings." },
        { question: "How long does FCA assessment take?", answer: "The FCA has 60 working days from receipt of a complete application. This can be extended if additional information is requested." },
        { question: "Can we complete the acquisition before FCA approval?", answer: "No. Completing a change of control without FCA approval is a criminal offence. The notification must be submitted and approved before completion." },
        { question: "What documentation is required?", answer: "Corporate structure charts, source of funds evidence, business plans, financial projections, fit and proper assessments for new controllers and a regulatory business plan." },
        { question: "Do you support both buyers and sellers?", answer: "Yes. We provide regulatory due diligence for acquirers (buy-side) and vendor due diligence preparation for target firms (sell-side)." },
        { question: "What happens after FCA approval?", answer: "We update FCA records, revise governance arrangements, update SM&CR allocations, amend compliance policies and manage any conditions attached to the approval." },
      ]}
      relatedServices={[
        { name: "Compliance Audit", href: "/services/audit", description: "Regulatory due diligence and gap analysis." },
        { name: "Variation of Permission", href: "/services/variation-of-permission", description: "Amending permissions post-acquisition." },
        { name: "Compliance Support", href: "/services/compliance", description: "Post-acquisition compliance integration." },
      ]}
    />
  );
}
