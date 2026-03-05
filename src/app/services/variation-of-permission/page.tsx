import { Metadata } from "next";
import ServiceLayout from "@/components/ServiceLayout";

export const metadata: Metadata = {
  title: "Variation of Permission | FCA VoP Application | Regulatory Counsel",
  description:
    "FCA Variation of Permission \u2014 adding, amending or removing regulated activities.",
};

function Content() {
  return (
    <div className="max-w-4xl">
      <h2 className="text-2xl lg:text-3xl font-bold text-navy mb-6">
        What We Do
      </h2>
      <p className="text-gray-700 text-lg leading-relaxed mb-10">
        A Variation of Permission (VoP) application is required when an FCA-authorised
        firm needs to add, amend or remove regulated activities from its permission
        profile. We manage the full application process from assessment through to
        FCA approval.
      </p>

      <div className="space-y-10 mb-10">
        <div>
          <h3 className="text-xl font-bold text-navy mb-3">What Triggers a VoP?</h3>
          <p className="text-gray-700 leading-relaxed">
            A Variation of Permission is required when a firm wants to add new regulated
            activities (e.g. adding AIS/PIS to an existing PI licence), remove activities
            it no longer provides, change limitations or requirements attached to its
            permissions, or expand into new service categories. VoP applications are also
            common when SPIs transition to API status or when firms expand from payment
            services into e-money issuance.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-navy mb-3">Common Scenarios</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Adding Account Information Services (AIS) or Payment Initiation Services (PIS)</li>
            <li>Transitioning from SPI to Authorised Payment Institution (API)</li>
            <li>Expanding from PI to EMI authorisation</li>
            <li>Adding new payment service types to an existing licence</li>
            <li>Removing activities that are no longer provided</li>
            <li>Changing or removing limitations and requirements</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-navy mb-3">Application &amp; FCA Liaison</h3>
          <p className="text-gray-700 leading-relaxed">
            We prepare the VoP application form, supporting documentation and any
            updated regulatory submissions required. This may include revised business
            plans, updated programme of operations, additional governance arrangements,
            updated capital calculations and new or revised policies. We manage all FCA
            correspondence and queries through to approval.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-navy mb-3">Timelines</h3>
          <p className="text-gray-700 leading-relaxed">
            VoP application timelines vary depending on complexity. Simple variations
            (e.g. removing an activity) can be processed within weeks. More complex
            variations (e.g. adding new regulated activities or transitioning licence
            type) typically take 3&ndash;6 months. We provide a realistic timeline
            assessment at the outset and keep you informed throughout.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function VariationOfPermissionPage() {
  return (
    <ServiceLayout
      hero={{
        headline: "Variation of Permission (VoP) Applications",
        sub: "Adding, amending or removing FCA-regulated activities. We manage VoP applications from assessment through to approval.",
      }}
      content={<Content />}
      sectors={[
        { name: "Payment Institutions", href: "/payment-institutions" },
        { name: "Electronic Money Institutions", href: "/electronic-money-institutions" },
        { name: "Cryptoassets & Digital Assets", href: "/cryptoassets" },
        { name: "Banks", href: "/banks" },
      ]}
      faqs={[
        { question: "What is a Variation of Permission?", answer: "A VoP is an application to the FCA to add, amend or remove regulated activities from a firm\u2019s permission profile. It is required whenever a firm\u2019s regulated activities change." },
        { question: "How long does a VoP application take?", answer: "Simple variations can be processed in weeks. Complex variations (adding new activities, changing licence type) typically take 3\u20136 months." },
        { question: "Do I need a VoP to add open banking services?", answer: "Yes. Adding AIS (Account Information Services) or PIS (Payment Initiation Services) to an existing PI or EMI licence requires a VoP application." },
        { question: "Can an SPI transition to an API via VoP?", answer: "The transition from SPI to API is technically a new authorisation application rather than a VoP, but we manage the process seamlessly and ensure continuity of operations." },
        { question: "What documentation is required?", answer: "This depends on the variation. Adding new activities typically requires an updated business plan, programme of operations, governance arrangements, capital calculations and relevant policies." },
        { question: "Can you remove permissions we no longer need?", answer: "Yes. We manage applications to cancel or remove regulated activities, ensuring the FCA records accurately reflect your current operations." },
      ]}
      relatedServices={[
        { name: "Licensing", href: "/services/licensing", description: "New licence applications and authorisations." },
        { name: "Compliance Support", href: "/services/compliance", description: "Ongoing compliance for expanded permissions." },
        { name: "Change of Control", href: "/services/change-of-control", description: "Ownership changes requiring FCA approval." },
      ]}
    />
  );
}
