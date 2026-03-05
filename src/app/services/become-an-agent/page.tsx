import { Metadata } from "next";
import ServiceLayout from "@/components/ServiceLayout";

export const metadata: Metadata = {
  title: "Become a Payment Agent | EMI Agent Registration | Regulatory Counsel",
  description:
    "Launch faster as an agent of an authorised payment institution or EMI.",
};

function Content() {
  return (
    <div className="max-w-4xl">
      <h2 className="text-2xl lg:text-3xl font-bold text-navy mb-6">
        What We Do
      </h2>
      <p className="text-gray-700 text-lg leading-relaxed mb-10">
        Operating as an agent of an authorised payment institution or electronic money
        institution is a legitimate and increasingly common route to market. It allows
        firms to begin providing payment services quickly while their own licence
        application is being processed &mdash; or as a permanent operating model.
      </p>

      <div className="space-y-10 mb-10">
        <div>
          <h3 className="text-xl font-bold text-navy mb-3">What Is a Payment Agent?</h3>
          <p className="text-gray-700 leading-relaxed">
            A payment agent provides payment services on behalf of an authorised principal
            firm. The principal holds the licence and is responsible for the agent&apos;s
            compliance. Agents are registered by the principal with the FCA and can provide
            payment services including money remittance, payment execution and account
            information services.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-navy mb-3">Who Should Use the Agent Route?</h3>
          <p className="text-gray-700 leading-relaxed">
            The agent model is ideal for firms that want to launch quickly without waiting
            for their own FCA authorisation, firms testing a business model before committing
            to a full licence, firms that prefer to operate under an established principal,
            and fintech startups that need to demonstrate traction to investors.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-navy mb-3">Our Principal Firm Network</h3>
          <p className="text-gray-700 leading-relaxed">
            We maintain relationships with authorised payment institutions and electronic
            money institutions that accept agents. We match firms with appropriate principals
            based on service type, jurisdiction, volume and operational requirements.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-navy mb-3">Agent to Own Licence Transition</h3>
          <p className="text-gray-700 leading-relaxed">
            For firms using the agent route as a stepping stone, we plan the transition
            to their own PI or EMI licence from day one. We ensure the agent arrangement
            is structured to facilitate a smooth handover and that compliance infrastructure
            is built to the standard required for independent authorisation.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-navy mb-3">Setting Up as a Principal Firm</h3>
          <p className="text-gray-700 leading-relaxed">
            For authorised firms looking to onboard agents, we provide agent due diligence
            frameworks, FCA notification support, agent monitoring programmes and compliance
            oversight arrangements.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function BecomeAnAgentPage() {
  return (
    <ServiceLayout
      hero={{
        headline: "Become a Payment or E-Money Agent",
        sub: "Launch faster by operating as an agent of an authorised payment institution or EMI. We connect you with principal firms and manage the registration process.",
      }}
      content={<Content />}
      sectors={[
        { name: "Payment Institutions", href: "/payment-institutions" },
        { name: "Electronic Money Institutions", href: "/electronic-money-institutions" },
        { name: "Cryptoassets & Digital Assets", href: "/cryptoassets" },
      ]}
      faqs={[
        { question: "How quickly can I launch as an agent?", answer: "Agent registration can be completed in 4\u20138 weeks once a principal firm agreement is in place. This is significantly faster than obtaining your own licence." },
        { question: "Do I need my own FCA authorisation to be an agent?", answer: "No. As an agent, you operate under the principal\u2019s authorisation. The principal is responsible for registering you with the FCA." },
        { question: "What services can an agent provide?", answer: "Agents can provide payment services including money remittance, payment execution, account information services and e-money distribution, depending on the principal\u2019s permissions." },
        { question: "Can I transition from agent to my own licence?", answer: "Yes. Many firms use the agent route as a launch strategy while their own PI or EMI application is processed. We plan this transition from the outset." },
        { question: "What are the costs of operating as an agent?", answer: "The principal firm will typically charge a setup fee and ongoing fees (fixed or per-transaction). There is no FCA application fee for agents. Contact us to discuss commercial arrangements." },
        { question: "Can I be an agent of multiple principals?", answer: "Technically possible, but uncommon. Most agents operate under a single principal. We advise on the best structure for your business model." },
      ]}
      relatedServices={[
        { name: "Licensing", href: "/services/licensing", description: "Full PI or EMI licence when you\u2019re ready." },
        { name: "Compliance Support", href: "/services/compliance", description: "Ongoing compliance for agent operations." },
        { name: "Financial Crime", href: "/services/financial-crime", description: "AML/CFT framework for agent activities." },
      ]}
    />
  );
}
