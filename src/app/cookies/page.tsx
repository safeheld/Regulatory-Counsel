import { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Cookie policy for Regulatory Counsel (Compliance Counsel Limited).",
};

export default function CookiePolicyPage() {
  return (
    <>
      <PageHero title="Cookie Policy" />
      <section className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-navy max-w-none">
          <p className="text-sm text-gray-500 mb-8">Last updated: March 2026</p>

          <h2>1. What Are Cookies</h2>
          <p>
            Cookies are small text files that are placed on your device when you visit a website.
            They are widely used to make websites work more efficiently and to provide information
            to the site owner.
          </p>

          <h2>2. How We Use Cookies</h2>
          <p>
            Our website uses cookies for the purposes described below. By continuing to use our
            site, you consent to the use of cookies in accordance with this policy.
          </p>

          <h2>3. Types of Cookies We Use</h2>

          <h3>Essential Cookies</h3>
          <p>
            These cookies are necessary for the website to function and cannot be switched off.
            They are usually set in response to actions you take, such as setting your privacy
            preferences or filling in forms. Without these cookies, some parts of the site may
            not work properly.
          </p>
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Cookie</th>
                  <th>Purpose</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>cookie_consent</td>
                  <td>Stores your cookie consent preference</td>
                  <td>1 year</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Analytics Cookies</h3>
          <p>
            These cookies help us understand how visitors interact with our website by collecting
            and reporting information anonymously. This helps us improve the site and measure the
            effectiveness of our content.
          </p>
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Cookie</th>
                  <th>Purpose</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>_ga</td>
                  <td>Google Analytics &mdash; distinguishes unique users</td>
                  <td>2 years</td>
                </tr>
                <tr>
                  <td>_ga_*</td>
                  <td>Google Analytics &mdash; maintains session state</td>
                  <td>2 years</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Preference Cookies</h3>
          <p>
            These cookies allow the website to remember choices you make (such as your preferred
            language or region) and provide enhanced, personalised features.
          </p>
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Cookie</th>
                  <th>Purpose</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>locale</td>
                  <td>Stores preferred language or region</td>
                  <td>1 year</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>4. Third-Party Cookies</h2>
          <p>
            Some cookies are placed by third-party services that appear on our pages, such as
            Google Analytics and embedded Google Maps. We do not control these cookies. Please
            refer to the relevant third party&apos;s privacy policy for more information.
          </p>

          <h2>5. Managing Cookies</h2>
          <p>
            You can control and manage cookies through your browser settings. Most browsers allow
            you to refuse or delete cookies. The methods for doing so vary by browser &mdash;
            please consult your browser&apos;s help documentation for instructions.
          </p>
          <p>
            Please note that disabling cookies may affect the functionality of this and other
            websites you visit.
          </p>

          <h2>6. Changes to This Policy</h2>
          <p>
            We may update this cookie policy from time to time. Any changes will be posted on this
            page with an updated revision date.
          </p>

          <h2>7. Contact</h2>
          <p>
            If you have any questions about our use of cookies, please contact us at:
          </p>
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
