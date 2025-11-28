import HeroSection from "@/components/hero-section";
import Hero from "@/components/hero";
import Content from "@/components/content";
import EmeraldGlowDivider from "@/components/ui/EmeraldGlowDivider";
import ComponentsShowcase from "@/components/sections/components-showcase";
import Testimonials from "@/components/sections/testimonials";
import ContactUs from "@/components/sections/contact-us";

// Homepage-specific metadata (inherits from root layout)
export const metadata = {
  title: "Backternity | Build Scalable Backends with Modular Components",
  description:
    "Build production-ready backend systems in minutes with pre-built, modular components. 600+ weekly downloads, 100+ active users from 6+ countries. Authentication, databases, APIs, and more.",
  keywords: [
    "Backternity",
    "Backend Components",
    "Modular Backend",
    "Scalable Backend Development",
    "Backend-as-a-Service",
    "Node.js Backend",
    "Express Components",
    "Authentication Service",
    "API Development",
    "Microservices",
    "Backend Infrastructure",
    "Production-Ready Backend",
    "Backend Templates",
    "Plug and Play Backend",
    "Low-Code Backend",
    "Backend NPM Package",
    "MongoDB Integration",
    "JWT Authentication",
    "WebSocket Integration",
    "Rate Limiting",
    "Backend for Developers",
  ],
  openGraph: {
    title: "Backternity | Build Scalable Backends with Modular Components",
    description:
      "Build production-ready backend systems in minutes. 600+ weekly downloads, 100+ active users.",
    url: "https://backternity.dev",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Backternity Platform",
      },
    ],
  },
  robots: "index, follow",
};

export default function Home() {
  return (
    <div>
      <section className="font-grotesk">
        <Hero />
      </section>

      <section className="font-grotesk">
        <HeroSection />
      </section>

      <section>
        <EmeraldGlowDivider height={2} pulseSpeed={3} glowIntensity={0.5} />
      </section>

      <section id="features" className="font-grotesk">
        <Content />
      </section>

      <section>
        <EmeraldGlowDivider height={2} pulseSpeed={3} glowIntensity={0.5} />
      </section>

      <section id="solutions" className="font-grotesk">
        <ComponentsShowcase />
      </section>

      <section>
        <EmeraldGlowDivider height={2} pulseSpeed={3} glowIntensity={0.5} />
      </section>

      <section id="testimonials" className="font-grotesk">
        <Testimonials />
      </section>

      <section>
        <EmeraldGlowDivider height={2} pulseSpeed={3} glowIntensity={0.5} />
      </section>

      <section id="contact" className="font-grotesk  ">
        <ContactUs />
      </section>
    </div>
  );
}
