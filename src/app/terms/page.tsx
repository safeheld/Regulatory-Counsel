import { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Terms of Engagement",
  description: "Terms of engagement for Regulatory Counsel (Compliance Counsel Limited).",
};

export default function TermsPage() {
  return (
    <>
      <PageHero title="Terms of Engagement" />
      <section className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-navy max-w-none">
          <p className="text-sm text-gray-500 mb-8">Last updated: March 2026</p>

          <h2>1. Definitions</h2>
          <p>
            &ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo; and &ldquo;our&rdquo; refer
            to Compliance Counsel Limited, trading as Regulatory Counsel, registered in England and
            Wales (No. 11642313) with its registered office at 2 Frederick Street, London WC1X 0ND.
          </p>
          <p>
            &ldquo;Client&rdquo;, &ldquo;you&rdquo; and &ldquo;your&rdquo; refer to the person or
            entity engaging us for professional services.
          </p>
          <p>
            &ldquo;Services&rdquo; means the regulatory consulting, compliance advisory and related
            professional services described in our engagement letter or statement of work.
          </p>

          <h2>2. Scope of Services</h2>
          <p>
            The scope of our services will be set out in a separate engagement letter or statement of
            work agreed between us and the client. We will perform our services with reasonable skill
            and care in accordance with applicable professional standards.
          </p>
          <p>
            Our advice is provided for the specific matter described in the engagement and should not
            be relied upon for any other purpose without our prior written consent.
          </p>

          <h2>3. Client Obligations</h2>
          <p>The client agrees to:</p>
          <ul>
            <li>Provide complete, accurate and timely information and documentation as reasonably required for us to perform the services.</li>
            <li>Designate an authorised contact to act as the primary point of liaison.</li>
            <li>Inform us promptly of any material changes to the business, regulatory status or the matters on which we are advising.</li>
            <li>Pay our fees in accordance with the agreed terms.</li>
          </ul>

          <h2>4. Fees and Payment</h2>
          <p>
            Our fees will be agreed in advance and set out in the engagement letter. Unless otherwise
            stated, fees are quoted exclusive of VAT. We may charge for additional work outside the
            original scope, subject to prior agreement with the client.
          </p>
          <p>
            Invoices are payable within 14 days of the invoice date unless otherwise agreed in
            writing. We reserve the right to charge interest on overdue amounts at the rate of 4%
            above the Bank of England base rate.
          </p>

          <h2>5. Confidentiality</h2>
          <p>
            We will treat all information provided by the client as confidential and will not
            disclose it to third parties without the client&apos;s consent, except where required by
            law, regulation or a competent authority.
          </p>
          <p>
            This obligation of confidentiality will survive the termination of our engagement.
          </p>

          <h2>6. Intellectual Property</h2>
          <p>
            All intellectual property rights in materials, templates and methodologies developed by
            us remain our property. The client is granted a non-exclusive licence to use deliverables
            produced for them for their internal business purposes.
          </p>

          <h2>7. Limitation of Liability</h2>
          <p>
            Our liability for any loss or damage arising from or in connection with the services
            shall be limited to the fees paid by the client for the specific engagement giving rise
            to the claim, except where liability cannot be excluded or limited by law.
          </p>
          <p>
            We shall not be liable for any indirect, consequential or special loss, loss of profit,
            loss of business or loss of goodwill.
          </p>
          <p>
            Nothing in these terms excludes or limits our liability for death or personal injury
            caused by our negligence, fraud or fraudulent misrepresentation, or any other liability
            that cannot be excluded by law.
          </p>

          <h2>8. Regulatory Outcomes</h2>
          <p>
            While we will use our professional expertise to prepare applications and advise on
            regulatory matters, we cannot guarantee any particular regulatory outcome. Decisions on
            authorisation, registration, approval and enforcement are made solely by the relevant
            regulatory authority.
          </p>

          <h2>9. Termination</h2>
          <p>
            Either party may terminate the engagement by giving 30 days&apos; written notice. On
            termination, the client shall pay for all services performed and expenses incurred up to
            the date of termination.
          </p>
          <p>
            We may terminate the engagement immediately if the client fails to pay any amount due,
            provides materially misleading information, or if continuing the engagement would place
            us in breach of our professional or legal obligations.
          </p>

          <h2>10. Complaints</h2>
          <p>
            If you are dissatisfied with any aspect of our services, please contact us at{" "}
            <a href="mailto:info@regulatorycounsel.co.uk">info@regulatorycounsel.co.uk</a>. We
            will acknowledge your complaint within five business days and aim to resolve it within
            28 days.
          </p>

          <h2>11. Governing Law</h2>
          <p>
            These terms and any engagement between us shall be governed by and construed in
            accordance with the laws of England and Wales. The courts of England and Wales shall
            have exclusive jurisdiction in relation to any dispute arising from or in connection
            with these terms.
          </p>

          <h2>12. Contact</h2>
          <p>
            Compliance Counsel Limited<br />
            2 Frederick Street, London WC1X 0ND<br />
            <a href="mailto:info@regulatorycounsel.co.uk">info@regulatorycounsel.co.uk</a><br />
            020 7873 2077
          </p>
        </div>
      </section>
    </>
  );
}
