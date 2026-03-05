const http = require("http");

const BASE = "http://localhost:3461";

async function get(path) {
  return new Promise((resolve, reject) => {
    http.get(BASE + path, { headers: { "User-Agent": "Checklist" } }, (res) => {
      let body = "";
      res.on("data", (c) => (body += c));
      res.on("end", () => resolve({ status: res.statusCode, headers: res.headers, body }));
    }).on("error", reject);
  });
}

async function run() {
  const results = [];
  function check(name, pass) {
    results.push({ name, pass });
    console.log(pass ? "[PASS]" : "[FAIL]", name);
  }

  // 1. Redirects
  const redirects = [
    ["/consumer-credit", "/"],
    ["/cryptocurrency", "/cryptoassets"],
    ["/fca-authorisation", "/services/licensing"],
    ["/training", "/services/compliance"],
    ["/compliance", "/services/compliance"],
    ["/audit", "/services/audit"],
    ["/fca-reporting", "/services/reporting"],
    ["/consumer-duty", "/services/compliance"],
    ["/about-us", "/about"],
    ["/contact-us", "/contact"],
    ["/post/test-slug", "/insights/test-slug"],
  ];
  for (const [from, to] of redirects) {
    const res = await get(from);
    const loc = res.headers.location || "";
    check(`301 redirect: ${from} -> ${to}`, res.status === 308 && loc.endsWith(to));
  }

  // 2. Homepage H1
  const home = await get("/");
  check("Homepage loads (200)", home.status === 200);
  check("Homepage has <h1>", home.body.includes("<h1"));
  check("Organization JSON-LD on homepage", home.body.includes('"@type":"Organization"'));
  check("Canonical tag present", home.body.includes('rel="canonical"'));
  check("og:title present", home.body.includes('og:title'));
  check("twitter:card present", home.body.includes('twitter:card'));

  // 3. Sector page
  const sector = await get("/payment-institutions");
  check("Sector page loads (200)", sector.status === 200);
  check("Sector page has <h1>", sector.body.includes("<h1"));
  check("FAQPage JSON-LD on sector page", sector.body.includes('"@type":"FAQPage"'));

  // 4. Service page
  const service = await get("/services/licensing");
  check("Service page loads (200)", service.status === 200);
  check("FAQPage JSON-LD on service page", service.body.includes('"@type":"FAQPage"'));

  // 5. Contact page
  const contact = await get("/contact");
  check("Contact page loads (200)", contact.status === 200);
  check("Contact page has meta title", contact.body.includes("Contact Regulatory Counsel"));
  check("FAQPage JSON-LD on contact page", contact.body.includes('"@type":"FAQPage"'));

  // 6. Legal pages
  const privacy = await get("/privacy-policy");
  check("Privacy Policy loads (200)", privacy.status === 200);
  const terms = await get("/terms");
  check("Terms loads (200)", terms.status === 200);
  const cookies = await get("/cookies");
  check("Cookies loads (200)", cookies.status === 200);

  // 7. Sitemap
  const sitemap = await get("/sitemap.xml");
  check("Sitemap loads (200)", sitemap.status === 200);
  check("Sitemap has URLs", sitemap.body.includes("<loc>"));

  // 8. Robots.txt
  const robots = await get("/robots.txt");
  check("robots.txt loads (200)", robots.status === 200);
  check("robots.txt disallows /studio", robots.body.includes("Disallow: /studio"));
  check("robots.txt disallows /api/", robots.body.includes("Disallow: /api/"));
  check("robots.txt has sitemap", robots.body.includes("Sitemap:"));

  // 9. About page
  const about = await get("/about");
  check("About page loads (200)", about.status === 200);

  // 10. Insights page
  const insights = await get("/insights");
  check("Insights page loads (200)", insights.status === 200);

  // 11. Studio route
  const studio = await get("/studio");
  check("Studio route responds", studio.status === 200 || studio.status === 308);

  // 12. Footer company registration
  check("Footer has company registration", home.body.includes("11642313"));

  // 13. Cookie consent banner
  check("Cookie banner script present", home.body.includes("cookie_consent"));

  // Summary
  console.log("\n--- SUMMARY ---");
  const passed = results.filter((r) => r.pass).length;
  console.log(`${passed}/${results.length} checks passed`);
  const failed = results.filter((r) => !r.pass);
  if (failed.length > 0) {
    console.log("Failed:");
    failed.forEach((r) => console.log("  -", r.name));
  }
}

run().catch(console.error);
