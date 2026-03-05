/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/consumer-credit",
        destination: "/",
        permanent: true,
      },
      {
        source: "/cryptocurrency",
        destination: "/cryptoassets",
        permanent: true,
      },
      {
        source: "/fca-authorisation",
        destination: "/services/licensing",
        permanent: true,
      },
      {
        source: "/training",
        destination: "/services/compliance",
        permanent: true,
      },
      {
        source: "/compliance",
        destination: "/services/compliance",
        permanent: true,
      },
      {
        source: "/audit",
        destination: "/services/audit",
        permanent: true,
      },
      {
        source: "/fca-reporting",
        destination: "/services/reporting",
        permanent: true,
      },
      {
        source: "/consumer-duty",
        destination: "/services/compliance",
        permanent: true,
      },
      {
        source: "/about-us",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/contact-us",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/post/:slug*",
        destination: "/insights/:slug*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
