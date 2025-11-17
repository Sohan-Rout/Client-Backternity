import { notFound } from "next/navigation";
import ComponentRegistry from "@/lib/registry";
import ComponentViewer from "@/components/component-viewer";

// Generate dynamic metadata for each component page
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const component = ComponentRegistry[slug];

  if (!component) {
    return {
      title: "Component Not Found - Backternity",
      description: "The requested backend component could not be found on Backternity.",
      robots: {
        index: false,
        follow: false,
        noarchive: true,
      }
    };
  }

  const name = component.name || slug;
  const type = component.type || "component";
  const short = component.description || "";

  // Keep description under Google snippet limits (~160 chars)
  const desc = short.length > 160 ? short.slice(0, 157) + "…" : short;

  // Generate comprehensive keywords based on component details
  const baseKeywords = [
    `${name}`,
    `${name} component`,
    `${name} backend`,
    `${name} implementation`,
    type,
    `${type} component`,
    ...(component.tags || []),
    slug,
    "express.js",
    "node.js backend",
    "backend component",
    "api development",
    "modular backend",
    "production ready",
    "backend template",
    "express middleware",
    "backend integration",
    "scalable backend",
    "backend architecture",
  ];

  return {
    title: `${name} – ${type[0].toUpperCase() + type.slice(1)} Component | Backternity`,
    description: desc,
    keywords: baseKeywords,
    authors: [{ name: "Sparsh Sharma", url: "https://linkedin.com/in/sparshdev" }],
    creator: "Sparsh Sharma",
    publisher: "Backternity",
    category: "Technology",
    openGraph: {
      title: `${name} - Backend Component`,
      description: desc,
      type: "article",
      url: `https://backternity.dev/browse/${slug}`,
      siteName: "Backternity",
      locale: "en_US",
      images: [
        {
          url: `/opengraph-image.png`,
          width: 1200,
          height: 630,
          alt: `${name} component preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${name} - Backend Component`,
      description: desc,
      images: [`/opengraph-image.png`],
      creator: "@backternity",
    },
    alternates: {
      canonical: `https://backternity.dev/browse/${slug}`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    }
  };
}

/** 🔸 Server Component Page */
export default async function ComponentSlugPage({ params }) {
  const { slug } = await params;
  const component = ComponentRegistry[slug];

  // Return 404 if component doesn't exist
  if (!component) {
    notFound();
  }

  return (
    <main className="p-4" role="main" aria-label={`${component.name || slug} backend component`}>
      <ComponentViewer component={component} componentKey={slug} />
    </main>
  );
}
