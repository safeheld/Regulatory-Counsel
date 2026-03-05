"use client";

import { useState, FormEvent } from "react";
import { contactInfo } from "@/lib/navigation";
import { faqJsonLd } from "@/lib/jsonLd";

const inputClass =
  "w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none";

const interests = [
  "Licensing",
  "Compliance Support",
  "Financial Crime",
  "Audit",
  "Regulatory Reporting",
  "Safeguarding",
  "Other",
];

const faqs = [
  { q: "How quickly do you respond?", a: "Within 24 hours on business days." },
  { q: "Is the initial consultation free?", a: "Yes. We offer a free initial consultation to understand your requirements and advise on next steps." },
  { q: "Do you work with international clients?", a: "Yes. We support firms across 15+ jurisdictions including UK, EU, UAE, Canada, Singapore and the US." },
  { q: "What should I prepare for the first call?", a: "A brief description of your business model, target market, the services you plan to offer and your preferred jurisdiction." },
];

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const fd = new FormData(form);
    const data = {
      name: fd.get("name"),
      company: fd.get("company"),
      email: fd.get("email"),
      phone: fd.get("phone"),
      country: fd.get("country"),
      interest: fd.get("interest"),
      message: fd.get("message"),
      _honey: fd.get("_honey"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs.map(f => ({ question: f.q, answer: f.a })))) }}
      />
      {/* Hero */}
      <section className="bg-navy text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-4">
            Speak with a Regulatory Expert
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            Get in touch to discuss your licensing, compliance or regulatory needs. Free
            initial consultation.
          </p>
        </div>
      </section>

      {/* Form + Details */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Left — Form (3 cols) */}
            <div className="lg:col-span-3">
              {status === "sent" && (
                <div className="bg-green-50 border border-green-200 text-green-800 rounded p-4 mb-6">
                  Thank you for your enquiry. We will respond within 24 hours on business days.
                </div>
              )}
              {status === "error" && (
                <div className="bg-red-50 border border-red-200 text-red-800 rounded p-4 mb-6">
                  Something went wrong. Please try again or email us directly at{" "}
                  <a href={`mailto:${contactInfo.email}`} className="underline">
                    {contactInfo.email}
                  </a>.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Honeypot */}
                <div className="hidden" aria-hidden="true">
                  <input type="text" name="_honey" tabIndex={-1} autoComplete="off" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input type="text" id="name" name="name" className={inputClass} required />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      Company Name *
                    </label>
                    <input type="text" id="company" name="company" className={inputClass} required />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input type="email" id="email" name="email" className={inputClass} required />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone
                    </label>
                    <input type="tel" id="phone" name="phone" className={inputClass} />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                      Country of Operation
                    </label>
                    <input type="text" id="country" name="country" className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">
                      Area of Interest
                    </label>
                    <select id="interest" name="interest" className={inputClass}>
                      <option value="">Select...</option>
                      {interests.map((i) => (
                        <option key={i} value={i}>{i}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className={`${inputClass} resize-y`}
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="bg-navy text-white px-8 py-3.5 rounded font-semibold hover:bg-navy-light transition-colors disabled:opacity-50"
                >
                  {status === "sending" ? "Sending..." : "Send Enquiry"}
                </button>
              </form>
            </div>

            {/* Right — Details (2 cols) */}
            <div className="lg:col-span-2">
              <div className="space-y-6 mb-10">
                <div>
                  <h3 className="font-semibold text-navy mb-1">Email</h3>
                  <a href={`mailto:${contactInfo.email}`} className="text-blue-600 hover:underline">
                    {contactInfo.email}
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold text-navy mb-1">Phone</h3>
                  <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`} className="text-blue-600 hover:underline">
                    {contactInfo.phone}
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold text-navy mb-1">Address</h3>
                  <p className="text-gray-600">{contactInfo.address}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-navy mb-1">Hours</h3>
                  <p className="text-gray-600">Monday&ndash;Friday, 9am&ndash;6pm GMT</p>
                </div>
              </div>

              {/* Google Maps */}
              <div className="rounded-lg overflow-hidden border border-gray-200">
                <iframe
                  title="Regulatory Counsel office location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.1!2d-0.1195!3d51.5265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b558b975b65%3A0x1234567890abcdef!2s2+Frederick+Street%2C+London+WC1X+0ND!5e0!3m2!1sen!2suk!4v1700000000000"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy mb-8">Common Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="font-semibold text-navy mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
