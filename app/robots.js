export default function robots() {
  const domain = "https://backternity.dev";

  return {
    rules: [
      {
        userAgent: "*",        // Applies to all bots
        allow: "/",            // Allow crawling of everything
      },
    ],
    sitemap: `${domain}/sitemap.xml`,  // Explicit location of your sitemap
  };
}
