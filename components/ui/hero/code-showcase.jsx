import { useState } from "react";
import { Copy } from "lucide-react";
import { ShineBorder } from "../shine-border";

export default function CodeShowcase(){
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);
  const examples = [
    { label: "Init", code: "npx backternity@latest init" },
    { label: "Auth", code: "npx backternity@latest add auth-jwt" },
    { label: "Database", code: "npx backternity@latest add mongodb-database" },
    { label: "Realtime", code: "npx backternity@latest add sse-realtime" },
  ];

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div
      role="region"
      aria-label="Command line interface code examples"
      className="shrink-0 w-120 min-w-120 max-w-120 rounded-xl bg-neutral-900/60 backdrop-blur-md border border-neutral-800/50 p-3 sm:p-4 overflow-hidden"
    >
      <ShineBorder />
      <div className="flex flex-wrap gap-1.5 mb-2 sm:mb-3" role="tablist">
        {examples.map((ex, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={activeTab === i}
            aria-controls={`tabpanel-${i}`}
            id={`tab-${i}`}
            onClick={() => setActiveTab(i)}
            className={`px-2.5 py-1 rounded-lg text-xs font-switzer-medium transition-all duration-200 ${
              activeTab === i
                ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                : "text-neutral-500 hover:text-neutral-300"
            }`}
          >
            {ex.label}
          </button>
        ))}
      </div>
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

        {copied && (
          <div
            role="alert"
            className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs text-emerald-400 font-medium bg-emerald-500/10 border border-emerald-500/20 rounded-md px-2 py-1 animate-fade"
          >
            Copied!
          </div>
        )}
      </div>
    </div>
  );
};