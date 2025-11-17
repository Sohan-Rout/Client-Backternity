import Link from "next/link";
import ComponentRegistry from "@/lib/registry";

export const metadata = {
  title: "Browse All Components - Backternity",
  description:
    "Explore our complete collection of backend components including authentication, databases, storage solutions, and more for Express.js applications. Modular, scalable, production-ready backend building blocks.",
  keywords: [
    "backend components",
    "express",
    "authentication components",
    "database connectors",
    "storage solutions",
    "scalable backend",
    "production ready backend",
    "api modules",
    "node.js microservices",
    "backend-as-a-service"
  ],
  alternates: {
    canonical: "https://backternity.dev/browse"
  },
  robots: {
    index: true,
    follow: true,
  }
};

// Category configuration
const categoryConfig = {
  auth: {
    title: "Authentication",
    description: "Secure authentication systems with JWT, OAuth, and session management",
  },
  database: {
    title: "Database",
    description: "Database integrations for MongoDB, PostgreSQL, and more",
  },
  payment: {
    title: "Payments",
    description: "Payment processing with Stripe, PayPal, and other providers",
  },
  middleware: {
    title: "Middleware",
    description: "Rate limiting, CORS, compression, and other Express middleware",
  },
  utility: {
    title: "Utilities",
    description: "Email services, file uploads, logging, and helper functions",
  },
  storage: {
    title: "Storage",
    description: "File storage solutions for local, S3, and cloud providers",
  },
  bundles: {
    title: "Component Bundles",
    description: "Complete backend solutions with multiple integrated components",
  },
};

export default function BrowseIndexPage() {
  // Group components by type
  const componentsByType = {};
  
  Object.entries(ComponentRegistry).forEach(([slug, component]) => {
    const type = component.type || 'other';
    if (!componentsByType[type]) {
      componentsByType[type] = [];
    }
    componentsByType[type].push({ slug, ...component });
  });

  return (
    <main className="min-h-screen text-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Browse{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-400 bg-clip-text text-transparent">
              Components
            </span>
          </h1>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            Explore our collection of production-ready backend components. Click on a category to see all available components.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(componentsByType).map(([type, components]) => {
            const config = categoryConfig[type] || {
              title: type.charAt(0).toUpperCase() + type.slice(1),
              description: `${components.length} components available`,
            };
            
            const firstComponent = components[0];

            return (
              <Link
                key={type}
                href={`/browse/${firstComponent.slug}`}
                className="group relative overflow-hidden rounded-2xl border border-neutral-800/60 bg-neutral-900/30 p-6 backdrop-blur-sm hover:border-emerald-500/40 transition-all duration-300 hover:shadow-[0_0_40px_rgba(16,185,129,0.15)]"
              >
                {/* Content */}
                <div className="relative z-10">
                  {/* Title & Description */}
                  <h2 className="text-xl font-semibold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                    {config.title}
                  </h2>
                  <p className="text-sm text-neutral-400 mb-4">
                    {config.description}
                  </p>

                  {/* Component Count */}
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-emerald-400 font-medium">
                      {components.length} {components.length === 1 ? 'Component' : 'Components'}
                    </span>
                    <span className="text-neutral-500 group-hover:text-emerald-400 transition-colors">
                      View all →
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 pt-12 border-t border-neutral-800/60">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-emerald-400 mb-2">
                {Object.keys(ComponentRegistry).length}+
              </div>
              <div className="text-sm text-neutral-400">Total Components</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-400 mb-2">
                {Object.keys(componentsByType).length}
              </div>
              <div className="text-sm text-neutral-400">Categories</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-400 mb-2">600+</div>
              <div className="text-sm text-neutral-400">Weekly Downloads</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-400 mb-2">100+</div>
              <div className="text-sm text-neutral-400">Active Users</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
