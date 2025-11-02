"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Check, Copy } from "lucide-react";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";

/**
 * HoverCopy Component
 * 
 * Props:
 * - text (string): text to copy
 * - children (ReactNode): the element to wrap
 * - hint (string): tooltip or message to show on copy
 */
export default function HoverCopy({ text, children, hint = "Copy to clipboard" }) {
  const { copied, copy } = useCopyToClipboard();

  return (
    <div
      onClick={() => copy(text)}
      className="relative inline-flex items-center cursor-pointer select-none group transition"
    >
      {children}

      {/* Floating indicator */}
      <AnimatePresence>
        {copied && (
          <motion.span
            key="copied"
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: -12 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.15 }}
            className="absolute -top-5 right-0 bg-emerald-500/10 text-emerald-400 text-[11px] font-medium px-2 py-0.5 rounded-md border border-emerald-500/20"
          >
            Copied!
          </motion.span>
        )}
      </AnimatePresence>

      {/* Optional hover icon */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="absolute right-1 top-1 text-neutral-400 opacity-0 group-hover:opacity-100 transition-opacity"
      >
        {copied ? (
          <Check className="w-3.5 h-3.5 text-emerald-400" />
        ) : (
          <Copy className="w-3.5 h-3.5" />
        )}
      </motion.div>
    </div>
  );
}
