/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.regulatorycounsel.co.uk",
  generateRobotsTxt: true,
  exclude: ["/studio", "/studio/*", "/api/*"],
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: ["/studio", "/api/"] },
    ],
    additionalSitemaps: [],
  },
  transform: async (config, path) => {
    let priority = 0.5;
    let changefreq = "monthly";

    if (path === "/") {
      priority = 1.0;
      changefreq = "weekly";
    } else if (
      [
        "/payment-institutions",
        "/electronic-money-institutions",
        "/cryptoassets",
        "/banks",
        "/money-services-businesses",
      ].includes(path)
    ) {
      priority = 0.9;
      changefreq = "weekly";
    } else if (path.startsWith("/services/")) {
      priority = 0.8;
      changefreq = "monthly";
    } else if (path.startsWith("/insights/") && path !== "/insights") {
      priority = 0.7;
      changefreq = "weekly";
    } else if (path === "/insights") {
      priority = 0.8;
      changefreq = "daily";
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};
