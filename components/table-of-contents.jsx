"use client";

import { useState, useEffect } from "react";

export default function TableOfContents() {
  const sections = [
    { id: "overview", label: "Overview" },
    { id: "installation", label: "Installation" },
    { id: "command-details", label: "What This Command Does" },
    { id: "configuration", label: "Configuration" },
    { id: "frontend-usage", label: "Frontend Integration" },
    { id: "usage", label: "Usage" },
  ];

  const [active, setActive] = useState("overview");

  useEffect(() => {
    const handleScroll = () => {
      const offsets = sections
        .map((s) => {
          const el = document.getElementById(s.id);
          if (!el) return null;

          const rect = el.getBoundingClientRect();
          return {
            id: s.id,
            offset: Math.abs(rect.top - window.innerHeight * 0.15), // checks which is closest to 5% viewport height
          };
        })
        .filter(Boolean);

      if (offsets.length === 0) return;

      // Find the section closest to our desired view area
      const closest = offsets.reduce((a, b) =>
        a.offset < b.offset ? a : b
      );

      if (closest && closest.id !== active) {
        setActive(closest.id);
      }
    };

    // Run initially and on scroll
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [active]);

  const handleSmoothScroll = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;

    const yOffset = -100; // adjust for your sticky navbar height
    const y =
      el.getBoundingClientRect().top + window.scrollY + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <nav className="text-sm sticky top-[100px] select-none">
      <h3 className="text-xs font-semibold text-neutral-500 uppercase mb-3">
        On this page
      </h3>
      <ul className="space-y-1">
        {sections.map((s) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              onClick={(e) => handleSmoothScroll(e, s.id)}
              className={`block px-3 py-2 rounded-md transition-all duration-200 ${
                active === s.id
                  ? "text-emerald-400 font-medium scale-[1.01] trasition-all duration-200"
                  : "text-neutral-400 hover:text-white hover:bg-neutral-800/40"
              }`}
            >
              {s.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Promotional Card */}
      <div className="mt-6 p-4 bg-gradient-to-br from-emerald-950/40 to-emerald-900/20 border border-emerald-500/20 rounded-lg overflow-hidden">
        {/* Mock Browser/Terminal Window */}
        <div className="mb-4 bg-black/40 rounded-lg border border-white/5 overflow-hidden">
          {/* Browser Chrome */}
          <div className="flex items-center gap-1.5 px-3 py-2 bg-white/5 border-b border-white/5">
            <div className="w-2 h-2 rounded-full bg-red-500/60"></div>
            <div className="w-2 h-2 rounded-full bg-yellow-500/60"></div>
            <div className="w-2 h-2 rounded-full bg-green-500/60"></div>
          </div>
          {/* Mock Content */}
          <div className="p-3 space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-emerald-500/20 flex items-center justify-center">
                <svg className="w-2.5 h-2.5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="h-1.5 bg-white/10 rounded w-20"></div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-emerald-500/20 flex items-center justify-center">
                <svg className="w-2.5 h-2.5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="h-1.5 bg-white/10 rounded w-16"></div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-emerald-500/20 flex items-center justify-center">
                <svg className="w-2.5 h-2.5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="h-1.5 bg-white/10 rounded w-24"></div>
            </div>
          </div>
        </div>

        <h4 className="text-sm font-semibold text-white mb-2">
          Explore Complete Backend Templates
        </h4>
        <p className="text-xs text-neutral-400 mb-3 leading-relaxed">
          Production-ready modules with authentication, payments, file uploads & more.
        </p>
        <a
          href="/templates"
          className="inline-flex items-center text-xs font-medium text-emerald-400 hover:text-emerald-300 transition-colors group"
        >
          Browse Templates
          <svg className="w-3.5 h-3.5 ml-1 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>

    </nav>
  );
}
