"use client";
import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * Shine Border
 *
 * An animated background border effect component with configurable properties.
 */
export function ShineBorder({
  borderWidth = 1,
  duration = 14,
  shineColor = ["#CFFAEA", "#9FECD3", "#5CD4A6", "#34B48A"],
  className,
  style,
  ...props
}) {
  return (
    <>
      <div
        style={
          {
            "--border-width": `${borderWidth}px`,
            "--duration": `${duration}s`,

            backgroundImage: `radial-gradient(
              circle,
              transparent,
              ${Array.isArray(shineColor) ? shineColor.join(",") : shineColor},
              transparent
            )`,

            backgroundSize: "300% 300%",
            mask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
            WebkitMask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            padding: "var(--border-width)",
            ...style
          }
        }
        className={cn(
          "motion-safe:animate-shine pointer-events-none absolute inset-0 size-full rounded-[inherit] will-change-[background-position]",
          className
        )}
        {...props} />
      <style>
        {`
          @keyframes shine {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>
    </>
  );
}
