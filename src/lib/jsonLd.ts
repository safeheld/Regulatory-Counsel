const SITE_URL = "https://www.regulatorycounsel.co.uk";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Regulatory Counsel",
    url: SITE_URL,
    logo: `${SITE_URL}/og-image.png`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "020-7873-2077",
      email: "info@regulatorycounsel.co.uk",
      contactType: "customer service",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "2 Frederick Street",
      addressLocality: "London",
      postalCode: "WC1X 0ND",
      addressCountry: "GB",
    },
  };
}

export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function articleJsonLd({
  title,
  description,
  url,
  datePublished,
}: {
  title: string;
  description?: string;
  url: string;
  datePublished?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    ...(description && { description }),
    ...(datePublished && { datePublished }),
    url,
    publisher: {
      "@type": "Organization",
      name: "Regulatory Counsel",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/og-image.png`,
      },
    },
    author: {
      "@type": "Organization",
      name: "Regulatory Counsel",
    },
  };
}
