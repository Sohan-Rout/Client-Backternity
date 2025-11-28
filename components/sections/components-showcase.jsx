"use client";
import { CardSpotlight } from "../ui/card-spotlight";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
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
    <section className="relative overflow-hidden py-20 sm:py-28 md:py-32 bg-neutral-950 text-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl py-2 sm:text-4xl md:text-5xl lg:text-6xl font-switzer-semibold bg-gradient-to-r from-[#f5f5f5] via-[#d4d4d4] via-50% to-[#8c8c8c] bg-clip-text text-transparent">
            Production-Ready Components
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-neutral-400 max-w-3xl mx-auto leading-relaxed font-switzer-light">
            Over 20 modular backend components designed for scalability,
            security, and speed. Built for developers who value simplicity and
            precision.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {componentCategories.map((item, index) => (
            <CardSpotlight
              key={index}
              className="flex flex-col justify-center items-center gap-4"
            >
              <HoverBorderGradient className="h-16 w-16 flex items-center justify-center bg-neutral-900 rounded-full">
                <item.icon className="w-6 h-6 text-emerald-400" />
              </HoverBorderGradient>
              <div className="flex flex-col items-center">
                <h3 className="text-lg font-switzer-medium text-white">
                  {item.title}
                </h3>
                <p className="text-neutral-400 text-center text-sm">{item.description}</p>
              </div>
              <ul className="text-neutral-300 text-xs space-y-1 max-w-full w-full">
                {item.examples.map((ex, i) => (
                  <li key={i}>• {ex}</li>
                ))}
              </ul>
              <p className="text-emerald-400 text-xs font-switzer-light pt-2">
                {item.count}
              </p>
            </CardSpotlight>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/browse"
            className="inline-flex items-center gap-2 mt-10 px-6 sm:px-7 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 text-neutral-950 font-switzer-medium shadow-[0_0_25px_rgba(16,185,129,0.3)] hover:shadow-[0_0_35px_rgba(16,185,129,0.4)] hover:from-emerald-400 hover:to-teal-300 transition-all text-sm sm:text-base"
          >
            Browse All Components
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
