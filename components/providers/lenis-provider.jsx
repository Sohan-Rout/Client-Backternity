"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

/**
 * Wrap your layouts or root in this to enable smooth scrolling.
 */
export default function LenisProvider({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // custom smooth ease
      smooth: true,
      smoothTouch: false, // disable mobile momentum to avoid input lag
      direction: "vertical",
      gestureDirection: "vertical",
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // cleanup on unmount
    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
