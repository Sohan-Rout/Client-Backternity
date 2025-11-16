"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { SidebarScrollToActive } from "./sidebar-scroll-to-active";

export default function ComponentSidebar({ components }) {
  const pathname = usePathname();
  const activeSlug = pathname.split("/").pop();

  const grouped = components.reduce((acc, [slug, comp]) => {
    const type = comp.type?.toLowerCase() || "other";
    if (!acc[type]) acc[type] = [];
    acc[type].push([slug, comp]);
    return acc;
  }, {});

  const typeOrder = [
    "auth",
    "database",
    "middleware",
    "storage",
    "utility",
    "realtime",
    "payment",
    "ai",
    "caching",
    "bundles",
  ];

  return (
    <SidebarScrollToActive activeSlug={activeSlug}>
      {(activeRef) => (
        <div
          data-sidebar
          className="text-sm space-y-8 py-10 pr-2 overflow-y-auto no-scrollbar max-h-[calc(100vh-4rem)] overscroll-contain"
        >
          {/* Sidebar Title */}
          <div className="px-3 mb-6">
            <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Components
              </span>
              <span className="text-xs text-neutral-500 font-normal mt-[2px]">
                Registry
              </span>
            </h2>
            <div className="h-[2px] w-10 bg-emerald-500/50 rounded-full mt-2" />
          </div>

          {typeOrder.map((type) => {
            const list = grouped[type];
            if (!list) return null;

            return (
              <div key={type}>
                <p className="uppercase text-xs text-neutral-500 font-semibold mb-3 px-3">
                  {type}
                </p>

                <div className="space-y-1">
                  {list.map(([slug, comp]) => {
                    const isActive = slug === activeSlug;

                    return (
                      <Link
                        key={slug}
                        href={`/browse/${slug}`}
                        ref={isActive ? activeRef : null}
                        className={`block px-3 py-2 rounded-md transition-colors ${
                          isActive
                            ? "text-emerald-400 bg-emerald-500/10 font-medium"
                            : "text-neutral-300 hover:text-white hover:bg-neutral-800/40"
                        }`}
                      >
                        {comp.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </SidebarScrollToActive>
  );
}
