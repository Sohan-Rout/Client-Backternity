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
    </nav>
  );
}
