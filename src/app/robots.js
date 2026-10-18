export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/Section*"],
    },
    sitemap: "https://purecalisthenics.com/sitemap.xml",
  };
}
