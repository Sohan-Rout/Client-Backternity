import ComponentRegistry from '@/lib/registry';
import GalleryRegistry from '@/lib/gallery-registry';

export default function sitemap() {
  const baseUrl = 'https://backternity.dev';
  const nowIso = new Date().toISOString();

  // Generate URLs for all components in the registry
  const componentUrls = Object.keys(ComponentRegistry).map((slug) => ({
    url: `${baseUrl}/browse/${slug}`,
    lastModified: nowIso,
    changefreq: 'weekly',
    priority: 0.8,
  }));

  // Generate URLs for all gallery projects
  const galleryUrls = Object.keys(GalleryRegistry).map((slug) => ({
    url: `${baseUrl}/gallery/${slug}`,
    lastModified: nowIso,
    changefreq: 'weekly',
    priority: 0.8,
  }));

  // Define static and important site-wide URLs
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: nowIso,
      changefreq: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/browse`,
      lastModified: nowIso,
      changefreq: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: nowIso,
      changefreq: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/playground`,
      lastModified: nowIso,
      changefreq: 'weekly',
      priority: 0.5,
    },
  ];

  // Merge static and dynamic URLs
  return [...staticRoutes, ...componentUrls, ...galleryUrls];
}
