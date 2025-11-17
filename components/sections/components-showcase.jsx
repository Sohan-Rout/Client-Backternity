"use client";

import Link from "next/link";
import {
  ArrowRight,
  Code,
  Database,
  Shield,
  Cloud,
  Zap,
  Cog,
} from "lucide-react";

const componentCategories = [
  {
    title: "Authentication",
    description: "Secure user management and access control systems.",
    icon: Shield,
    count: "4 components",
    examples: ["JWT Authentication", "Multi-Factor Auth", "OAuth Integration"],
  },
  {
    title: "Database",
    description: "Database integrations and data management solutions.",
    icon: Database,
    count: "3 components",
    examples: ["MongoDB Setup", "PostgreSQL", "Prisma Integration"],
  },
  {
    title: "Storage",
    description: "File upload and cloud storage management.",
    icon: Cloud,
    count: "2 components",
    examples: ["AWS S3 Upload", "File Processing", "CDN Integration"],
  },
  {
    title: "Middleware",
    description: "Request handling, rate limiting, and CORS utilities.",
    icon: Cog,
    count: "3 components",
    examples: ["Rate Limiting", "CORS Setup", "Request Validation"],
  },
  {
    title: "Logging",
    description: "Monitoring, diagnostics, and performance tracking.",
    icon: Code,
    count: "2 components",
    examples: ["Winston Logger", "Error Tracking", "Performance Monitoring"],
  },
  {
    title: "Performance",
    description: "Optimization and background processing modules.",
    icon: Zap,
    count: "2 components",
    examples: ["Worker Threads", "Caching", "Job Queues"],
  },
];

export default function ComponentsShowcase() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28 md:py-32 bg-gradient-to-b from-[#001510] via-neutral-950 to-black text-neutral-100">
      {/* Ambient glow layers */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-10%] left-[15%] w-[40vw] h-[40vw] bg-emerald-600/10 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[10%] w-[35vw] h-[35vw] bg-emerald-500/10 blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-switzer-semibold text-white mb-5 tracking-tight leading-tight">
            Production-Ready{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-400 bg-clip-text text-transparent">
              Components
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-neutral-400 max-w-3xl mx-auto leading-relaxed font-switzer-light">
            Over 20 modular backend components designed for scalability,
            security, and speed. Built for developers who value simplicity and
            precision.
          </p>
        </div>

        {/* Component grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 mb-20 sm:mb-24"
        >
          {componentCategories.map((category, i) => {
            const Icon = category.icon;
            return (
              <div
                key={i}
                className="group relative p-5 sm:p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800/60 backdrop-blur-sm hover:border-emerald-500/25 hover:shadow-[0_0_25px_rgba(16,185,129,0.15)] transition-all duration-300"
              >
                {/* Emerald light sweep */}
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                <div className="flex items-center mb-4 relative z-10">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center mr-4 group-hover:bg-emerald-500/20 transition-colors">
                    <Icon className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-medium text-white text-base sm:text-lg leading-tight">
                      {category.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-500">
                      {category.count}
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-neutral-400 mb-4 leading-relaxed">
                  {category.description}
                </p>

                <ul className="space-y-2">
                  {category.examples.map((ex, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-xs sm:text-sm text-neutral-500 group-hover:text-neutral-300 transition-colors"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-3 opacity-70 group-hover:opacity-100" />
                      {ex}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div
          className="text-center"
        >
          <Link
            href="/browse"
            className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 text-neutral-950 font-switzer-medium shadow-[0_0_25px_rgba(16,185,129,0.3)] hover:shadow-[0_0_35px_rgba(16,185,129,0.4)] hover:from-emerald-400 hover:to-teal-300 transition-all text-sm sm:text-base"
          >
            Browse All Components
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
