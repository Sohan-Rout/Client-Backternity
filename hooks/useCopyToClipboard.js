"use client";

import { useState, useCallback } from "react";

/**
 * useCopyToClipboard Hook
 * 
 * Usage:
 * const { copied, copy } = useCopyToClipboard();
 * copy("text to copy");
 */
export function useCopyToClipboard(timeout = 1500) {
  const [copied, setCopied] = useState(false);

  const copy = useCallback(async (text) => {
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), timeout);
    } catch (err) {
      console.error("Copy failed:", err);
    }
  }, [timeout]);

  return { copied, copy };
}
