export default function robots() {
  const domain = "https://backternity.dev";

  return {
    rules: [
      {
        userAgent: "*",        // Applies to all bots
        allow: "/",            // Allow crawling of everything
      },
      {
        userAgent: "GPTBot",   // OpenAI's web crawler
        allow: "/",            // Allow AI training (optional - set to disallow if you don't want)
      },
    ],
    sitemap: `${domain}/sitemap.xml`,  // Explicit location of your sitemap
  };
}
