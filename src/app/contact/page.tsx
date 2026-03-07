"use client";

import { useState, FormEvent } from "react";
import { contactInfo } from "@/lib/navigation";
import { faqJsonLd } from "@/lib/jsonLd";

const inputClass =
  "w-full px-5 py-3.5 border border-[#E5E0D8] rounded-lg focus:ring-2 focus:ring-gold/30 focus:border-gold outline-none transition-colors text-[15px]";

const interests = [
  "FCA Licensing",
  "EMI/PI Authorisation",
  "Cryptoassets / MiCA",
  "Compliance Support",
  "Financial Crime",
  "Safeguarding PS25",
  "Other",
];

const faqs = [
  {
    q: "How quickly do you respond?",
    a: "We aim to respond to all enquiries within 24 hours on business days. For urgent matters, we can often arrange a same-day call to discuss your requirements and provide initial guidance.",
  },
  {
    q: "Is the initial consultation free?",
    a: "Yes. We offer a free initial consultation to understand your requirements, assess your regulatory position and advise on next steps. This typically takes 30-45 minutes and covers your business model, target jurisdictions and recommended approach.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes. We support firms across 15+ jurisdictions including the UK, EU, UAE, Canada, Singapore, the US and Australia. Many of our clients are international businesses seeking to enter regulated markets or expand their existing regulatory footprint.",
  },
  {
    q: "What should I prepare for the first call?",
    a: "A brief description of your business model, the financial services you plan to offer, your target market and customers, your preferred jurisdiction for licensing, and any existing regulatory permissions or applications. The more detail you can provide, the more specific our initial advice will be.",
  },
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
      <section className="bg-navy text-white py-28 lg:py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-white mb-6">
            Speak with a Regulatory Expert
          </h1>
          <p className="text-[17px] text-white/50 max-w-2xl leading-[1.7]">
            Get in touch to discuss your licensing, compliance or regulatory needs. Free
            initial consultation.
          </p>
        </div>
      </section>

      {/* Form + Details */}
      <section className="bg-white py-32 lg:py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-20">
            {/* Left — Form (3 cols) */}
            <div className="lg:col-span-3">
              {status === "sent" && (
                <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-5 mb-8">
                  Thank you for your enquiry. We will respond within 24 hours on business days.
                </div>
              )}
              {status === "error" && (
                <div className="bg-red-50 border border-red-200 text-red-800 rounded-lg p-5 mb-8">
                  Something went wrong. Please try again or email us directly at{" "}
                  <a href={`mailto:${contactInfo.email}`} className="underline">
                    {contactInfo.email}
                  </a>.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot */}
                <div className="hidden" aria-hidden="true">
                  <input type="text" name="_honey" tabIndex={-1} autoComplete="off" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-[14px] font-medium text-navy mb-2">
                      Full Name *
                    </label>
                    <input type="text" id="name" name="name" className={inputClass} required />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-[14px] font-medium text-navy mb-2">
                      Company Name *
                    </label>
                    <input type="text" id="company" name="company" className={inputClass} required />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-[14px] font-medium text-navy mb-2">
                      Email *
                    </label>
                    <input type="email" id="email" name="email" className={inputClass} required />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-[14px] font-medium text-navy mb-2">
                      Phone
                    </label>
                    <input type="tel" id="phone" name="phone" className={inputClass} />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="country" className="block text-[14px] font-medium text-navy mb-2">
                      Country of Operation
                    </label>
                    <input type="text" id="country" name="country" className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="interest" className="block text-[14px] font-medium text-navy mb-2">
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
                  <label htmlFor="message" className="block text-[14px] font-medium text-navy mb-2">
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
                  className="bg-navy text-white px-10 py-3.5 rounded font-semibold text-[15px] hover:bg-navy-light transition-colors disabled:opacity-50"
                >
                  {status === "sending" ? "Sending..." : "Send Enquiry"}
                </button>
              </form>
            </div>

            {/* Right — Details (2 cols) */}
            <div className="lg:col-span-2">
              <div className="space-y-8 mb-12">
                <div>
                  <h3 className="font-serif text-[1.2rem] font-bold text-navy mb-2">Email</h3>
                  <a href={`mailto:${contactInfo.email}`} className="text-gold hover:text-gold-light transition-colors text-[15px]">
                    {contactInfo.email}
                  </a>
                </div>
                <div>
                  <h3 className="font-serif text-[1.2rem] font-bold text-navy mb-2">Phone</h3>
                  <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`} className="text-gold hover:text-gold-light transition-colors text-[15px]">
                    {contactInfo.phone}
                  </a>
                </div>
                <div>
                  <h3 className="font-serif text-[1.2rem] font-bold text-navy mb-2">Address</h3>
                  <p className="text-[#555] text-[15px] leading-[1.7]">{contactInfo.address}</p>
                </div>
                <div>
                  <h3 className="font-serif text-[1.2rem] font-bold text-navy mb-2">Hours</h3>
                  <p className="text-[#555] text-[15px]">Monday&ndash;Friday, 9am&ndash;6pm GMT</p>
                </div>
              </div>

              {/* Google Maps */}
              <div className="rounded-lg overflow-hidden border border-[#E5E0D8]">
                <iframe
                  title="Regulatory Counsel office location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.1!2d-0.1195!3d51.5265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b558b975b65%3A0x1234567890abcdef!2s2+Frederick+Street%2C+London+WC1X+0ND!5e0!3m2!1sen!2suk!4v1700000000000"
                  width="100%"
                  height="280"
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
      <section className="py-32 lg:py-40 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-navy mb-16 text-center">
            Common Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white rounded-lg p-8 lg:p-10 shadow-card">
                <h3 className="font-serif text-[22px] font-bold text-navy mb-3">{faq.q}</h3>
                <p className="text-[#555] text-[15px] leading-[1.7]">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
