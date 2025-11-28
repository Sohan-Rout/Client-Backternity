import { useState, useRef, useEffect } from "react";
import { Copy, Check } from "lucide-react";
import { ShineBorder } from "../shine-border";
import { motion, AnimatePresence } from "framer-motion";

export default function CodeShowcase(){
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const overlayRef = useRef(null);
  const cardRef = useRef(null);
  const examples = [
    { label: "Init", code: "npx backternity@latest init" },
  ];

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setShowOverlay(true);
      setCopied(true);
      setTimeout(() => {
        setShowOverlay(false);
        setCopied(false);
      }, 900);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div ref={cardRef}
      role="region"
      aria-label="Command line interface code examples"
      className="shrink-0 w-120 rounded-md bg-neutral-900/60 backdrop-blur-md border border-neutral-800/50 overflow-hidden"
    >
      <ShineBorder />
      <AnimatePresence>
        {showOverlay && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute inset-0 flex items-center justify-center rounded-xl z-50 bg-neutral-900/80 pointer-events-none"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="w-8 h-8 rounded-full bg-emerald-500/30 border border-emerald-400 flex items-center justify-center"
            >
              <Check size={16} className="text-emerald-300" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <div
        id={`tabpanel-${activeTab}`}
        role="tabpanel"
        aria-labelledby={`tab-${activeTab}`}
        tabIndex={0}
        className="relative font-mono text-xs sm:text-sm text-emerald-400 bg-neutral-950/50 rounded-lg p-2.5 sm:p-3 break-normal cursor-pointer hover:bg-neutral-950/70 transition-colors group"
        onClick={() => copyToClipboard(examples[activeTab].code)}
      >
        <div className="flex items-center justify-between">
          <span className="select-none">{examples[activeTab].code}</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              copyToClipboard(examples[activeTab].code);
            }}
            aria-label={copied ? "Copied" : "Copy to clipboard"}
            className="ml-2 text-neutral-500 hover:text-emerald-400 transition-colors opacity-0 group-hover:opacity-100"
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
          </button>
        </div>
      </div>
    </div>
  );
};