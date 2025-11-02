"use client";

import { useState } from "react";
import { Copy, Check, Terminal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Minimal CLI code snippet block with 2-color highlighting
 *
 * Cyan = command keywords
 * White = component/package name
 */
export default function CodeSnippet({ command, label = "CLI" }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      console.error("Copy failed");
    }
  };

  // Simple highlight: everything except last word = cyan, last = white
  const highlightCommand = (text = "") => {
    const words = text.trim().split(" ");
    if (words.length === 1) return `<span class='text-cyan-400'>${text}</span>`;
    const mainPart = words.slice(0, -1).join(" ");
    const lastPart = words[words.length - 1];
    return `<span class='text-cyan-400'>${mainPart}</span> <span class='text-white'>${lastPart}</span>`;
  };

  return (
    <div className="w-full rounded-lg border border-white/10 bg-neutral-950/80 backdrop-blur-sm hover:border-emerald-800 duration-300 overflow-hidden text-neutral-200 font-mono">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 text-xs text-neutral-400">
        <div className="flex items-center gap-2">
          <Terminal className="w-3.5 h-3.5 opacity-70" />
          <span className="tracking-wide">{label}</span>
        </div>

        <AnimatePresence mode="wait" initial={false}>
          {copied ? (
            <motion.span
              key="copied"
              initial={{ y: -5, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 5, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="text-emerald-500 flex items-center gap-1"
            >
              <Check className="w-3.5 h-3.5" />
              Copied
            </motion.span>
          ) : (
            <motion.button
              key="copy"
              onClick={handleCopy}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="flex items-center gap-1 text-neutral-500 hover:text-neutral-300 transition"
            >
              <Copy className="w-3.5 h-3.5" />
              Copy
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Code line */}
      <div
        className="cursor-pointer select-text px-4 py-3 text-sm leading-relaxed whitespace-nowrap overflow-x-auto"
        dangerouslySetInnerHTML={{ __html: highlightCommand(command) }}
        onClick={handleCopy}
      />
    </div>
  );
}
