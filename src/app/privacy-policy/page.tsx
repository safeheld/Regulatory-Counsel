import { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Regulatory Counsel (Compliance Counsel Limited).",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero title="Privacy Policy" />
      <section className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-navy max-w-none">
          <p className="text-sm text-gray-500 mb-8">Last updated: March 2026</p>

          <h2>1. Introduction</h2>
          <p>
            Compliance Counsel Limited (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;),
            trading as Regulatory Counsel, is committed to protecting and respecting your privacy.
            This policy explains how we collect, use and protect your personal data in accordance
            with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
          </p>
          <p>
            Compliance Counsel Limited is registered in England and Wales (No. 11642313) with its
            registered office at 2 Frederick Street, London WC1X 0ND. We are the data controller
            for the personal data described in this policy.
          </p>

          <h2>2. Data We Collect</h2>
          <p>We may collect and process the following personal data:</p>
          <ul>
            <li><strong>Contact information:</strong> name, email address, telephone number, company name and postal address.</li>
            <li><strong>Enquiry details:</strong> information you provide when you contact us, including the nature of your enquiry and your business model.</li>
            <li><strong>Engagement data:</strong> information relating to our professional services, including documents, correspondence and regulatory submissions.</li>
            <li><strong>Website usage data:</strong> IP address, browser type, pages visited and time spent on our website, collected through cookies and analytics.</li>
          </ul>

          <h2>3. How We Use Your Data</h2>
          <p>We use your personal data for the following purposes:</p>
          <ul>
            <li>To respond to your enquiry and provide you with information about our services.</li>
            <li>To deliver our professional consulting services.</li>
            <li>To comply with our legal and regulatory obligations.</li>
            <li>To send you relevant industry insights and updates (with your consent).</li>
            <li>To improve our website and services.</li>
          </ul>

          <h2>4. Lawful Basis for Processing</h2>
          <p>We process your personal data on the following lawful bases:</p>
          <ul>
            <li><strong>Consent:</strong> where you have given us consent to contact you with insights and updates.</li>
            <li><strong>Contract:</strong> where processing is necessary for the performance of our engagement with you.</li>
            <li><strong>Legitimate interests:</strong> where processing is necessary for our legitimate business interests, such as responding to enquiries and improving our services.</li>
            <li><strong>Legal obligation:</strong> where we are required to process data to comply with a legal obligation.</li>
          </ul>

          <h2>5. Data Sharing</h2>
          <p>
            We do not sell your personal data. We may share your data with trusted service providers
            who assist us in operating our business (e.g. email providers, hosting services), and with
            regulatory authorities where required by law. All third parties are required to process
            your data in accordance with applicable data protection legislation.
          </p>

          <h2>6. Data Retention</h2>
          <p>
            We retain your personal data only for as long as necessary to fulfil the purposes for which
            it was collected. Engagement data is retained for a minimum of six years following the
            conclusion of our services, in line with our professional obligations.
          </p>

          <h2>7. Your Rights</h2>
          <p>Under UK GDPR, you have the right to:</p>
          <ul>
            <li>Access the personal data we hold about you.</li>
            <li>Request correction of inaccurate data.</li>
            <li>Request erasure of your data (where applicable).</li>
            <li>Object to or restrict processing.</li>
            <li>Data portability.</li>
            <li>Withdraw consent at any time.</li>
          </ul>
          <p>
            To exercise any of these rights, please contact us at{" "}
            <a href="mailto:info@regulatorycounsel.co.uk">info@regulatorycounsel.co.uk</a>.
          </p>

          <h2>8. Cookies</h2>
          <p>
            Our website uses cookies. Please see our{" "}
            <a href="/cookies">Cookie Policy</a> for details.
          </p>

          <h2>9. Contact</h2>
          <p>
            If you have any questions about this privacy policy or wish to exercise your data
            protection rights, please contact us at:
          </p>
          <p>
            Compliance Counsel Limited<br />
            2 Frederick Street, London WC1X 0ND<br />
            <a href="mailto:info@regulatorycounsel.co.uk">info@regulatorycounsel.co.uk</a><br />
            020 7873 2077
          </p>
          <p>
            You also have the right to lodge a complaint with the Information Commissioner&apos;s
            Office (ICO) at <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">ico.org.uk</a>.
          </p>
        </div>
      </section>
    </>
  );
}
