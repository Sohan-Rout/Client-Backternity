import { BrowseClientWrapper } from "@/components/browse-client-wrapper";
import Script from "next/script";

// Enhanced and expanded SEO metadata
export const metadata = {
  title: "Browse Backend Components | Backternity",
  description:
    "Explore 15+ production-ready backend components for Express.js, authentication, databases, storage, and more. Build scalable APIs quickly with modular tools and reusable code blocks designed for enterprise-grade reliability.",
  keywords: [
    "backend components",
    "browse backend solutions",
    "express components",
    "node.js",
    "authentication",
    "database integration",
    "api generator",
    "api toolkit",
    "microservices",
    "modular backend",
    "reusable components",
    "express middleware",
    "jwt authentication",
    "mongodb integration",
    "postgresql",
    "websocket implementation",
    "rate limiting",
    "api security",
    "api design",
    "production-ready backend",
    "serverless",
    "cloud backend",
    "fast api development",
    "backend orchestration",
    "backend component library"
  ],
  authors: [{ name: "Sparsh Sharma", url: "https://linkedin.com/in/sparshdev" }],
  creator: "Sparsh Sharma",
  publisher: "Backternity",
  alternates: {
    canonical: "https://backternity.dev/browse" // Use absolute for canonical links
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
  },
  openGraph: {
    title: "Browse Backend Components - Backternity",
    description: "Discover 15+ ready-to-use backend components for rapid API development and scalable infrastructure.",
    type: "website",
    url: "https://backternity.dev/browse",
    siteName: "Backternity",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Backternity Component Library"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Browse Components - Backternity",
    description: "Explore ready-made backend modules designed for speed, security, and reliability.",
    images: ["/api/og?section=browse"]
  }
};

// Structured data for the browse page
const browseSchemaData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Backternity Backend Component Library",
  description: "Explore production-ready, modular backend components for Express, databases, auth, and scalable API development.",
  url: "https://backternity.dev/browse",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "JWT Authentication",
      url: "https://backternity.dev/browse/auth-jwt",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "MongoDB Database",
      url: "https://backternity.dev/browse/database-mongodb",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "PostgreSQL with Prisma",
      url: "https://backternity.dev/browse/postgresql-prisma-express-js",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "AWS S3 Upload",
      url: "https://backternity.dev/browse/aws-s3-upload",
    },
    {
      "@type": "ListItem",
      position: 5,
      name: "Razorpay Payment Gateway",
      url: "https://backternity.dev/browse/razorpay-gateway-express-js",
    },
    {
      "@type": "ListItem",
      position: 6,
      name: "Rate Limiter",
      url: "https://backternity.dev/browse/rate-limiter",
    },
    {
      "@type": "ListItem",
      position: 7,
      name: "Winston Logger",
      url: "https://backternity.dev/browse/logger-winston",
    },
    {
      "@type": "ListItem",
      position: 8,
      name: "Redis Cache",
      url: "https://backternity.dev/browse/cache-redis",
    }
  ]
};

// Use semantic HTML, main regions, and accessibility features
export default function BrowseLayout({ children }) {
  return (
    <>
      {/* Structured data (JSON-LD) for product library */}
      <Script
        id="browse-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(browseSchemaData)
        }}
      />
      
      {/* Accessibility: Add semantic main container */}
      <BrowseClientWrapper>
        {children}
      </BrowseClientWrapper>
    </>
  );
}
