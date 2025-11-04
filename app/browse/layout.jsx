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
import { HeroHeader } from "@/components/header";


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

        {/* ===== HEADER ===== */}
        <HeroHeader/>

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
