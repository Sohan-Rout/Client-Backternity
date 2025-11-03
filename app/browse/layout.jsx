"use client";

import { Spotlight } from "@/components/ui/spotlight-new";
import ComponentSidebar from "@/components/component-sidebar";
import TableOfContents from "@/components/table-of-contents";
import ComponentRegistry from "@/lib/registry";
import Link from "next/link";
import { FaProductHunt } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import SearchShortcut from "@/components/ui/search-command";
import { useEffect, useState } from "react";


export default function BrowseLayout({ children }) {
  const [scrolled, setScrolled] = useState(false);
  const components = Object.entries(ComponentRegistry);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
      <div className="min-h-screen bg-neutral-950 text-neutral-200">
        <Spotlight />
        <style>{`
          html, body {
            height: auto !important;
            overflow: visible !important;
          }
          .hide-scrollbar::-webkit-scrollbar { display: none; }
          .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `}</style>

        {/* ===== HEADER ===== */}
        <header>
          <nav
            className={cn(
              "fixed z-20 w-full border-b border-neutral-800 transition-all duration-150",
              scrolled ? "bg-black/20 backdrop-blur-2xl" : "backdrop-blur-2xl"
            )}
          >
            <div className="mx-auto max-w-6xl px-6 border-x border-neutral-800">
              <div className="relative flex flex-wrap items-center justify-between py-3 lg:py-4">
                {/* LEFT */}
                <div className="flex w-full items-center justify-between gap-8 lg:w-auto">
                  <div className="pr-8 border-r border-neutral-800">
                    <Link
                      href="/"
                      aria-label="Backternity Home"
                      className="flex items-center space-x-2 text-neutral-100 hover:text-emerald-400 transition-colors"
                    >
                      <h1 className="text-lg font-semibold">Backternity</h1>
                    </Link>
                  </div>

                  <ul className="hidden lg:flex gap-8 text-sm font-medium">
                    <li><Link href="#features" className="text-emerald-400 hover:text-emerald-300">Features</Link></li>
                    <li><Link href="#solutions" className="text-emerald-400 hover:text-emerald-300">Solutions</Link></li>
                    <li><Link href="#about" className="text-emerald-400 hover:text-emerald-300">About</Link></li>
                  </ul>
                </div>

                {/* RIGHT */}
                <div className="hidden lg:flex items-center gap-4">
                  <SearchShortcut />
                </div>
              </div>
            </div>
          </nav>
        </header>

        {/* ===== MAIN LAYOUT ===== */}
        <div className="mx-auto max-w-[70vw] pt-[100px] flex gap-8">
          {/* LEFT SIDEBAR */}
          <aside className="w-64 sticky top-[100px] self-start h-[calc(100vh-100px)] hide-scrollbar overflow-y-auto border-r border-white/5 pr-4">
            <ComponentSidebar components={components} />
          </aside>

          {/* MAIN CONTENT (scrolls with Lenis) */}
          <main className="flex-1 min-h-screen">
            {children}
          </main>

          {/* RIGHT SIDEBAR (TOC) */}
          <aside className="w-60 sticky top-[100px] self-start h-[calc(100vh-100px)] hidden lg:block border-l border-white/5 pl-4">
            <TableOfContents />
          </aside>
        </div>
      </div>
  );
}
