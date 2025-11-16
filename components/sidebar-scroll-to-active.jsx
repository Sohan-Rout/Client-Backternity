"use client";

import { useEffect, useRef } from "react";

export function SidebarScrollToActive({ activeSlug, children }) {
  const activeRef = useRef(null);

  // Scroll active tab into view when page loads or route changes
  useEffect(() => {
    if (activeRef.current) {
      const sidebarEl = activeRef.current.closest("[data-sidebar]");
      if (sidebarEl) {
        const rect = activeRef.current.getBoundingClientRect();
        const sidebarRect = sidebarEl.getBoundingClientRect();
        const offset = rect.top - sidebarRect.top - sidebarRect.height / 2;
        sidebarEl.scrollBy({ top: offset, behavior: "smooth" });
      }
    }
  }, [activeSlug]);

  return children(activeRef);
}
