"use client";

import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { IconCheck, IconCopy } from "@tabler/icons-react";

export const CodeBlock = ({
  language,
  filename,
  code,
  highlightLines = [],
  tabs = [],
}) => {
  const [copied, setCopied] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState(0);

  const tabsExist = tabs.length > 0;

  const copyToClipboard = async (textToCopy) => {
    if (!textToCopy) return;
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  const activeCode = tabsExist ? tabs[activeTab].code : code;
  const activeLanguage = tabsExist
    ? tabs[activeTab].language || language
    : language;
  const activeHighlightLines = tabsExist
    ? tabs[activeTab].highlightLines || []
    : highlightLines;

  return (
    <div
      className="relative w-full rounded-lg border border-white/10 bg-black/40 backdrop-blur-sm font-mono text-sm transition-all duration-300 hover:border-emerald-500/30 cursor-pointer"
      onClick={() => copyToClipboard(activeCode)} // 👈 click anywhere to copy
    >
      {/* Header / Tabs */}
      <div className="flex flex-col gap-2 border-b border-white/10">
        {tabsExist && (
          <div className="flex overflow-x-auto px-3 py-2 bg-black/30 rounded-t-lg">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation(); // Prevent triggering copy
                  setActiveTab(index);
                }}
                className={`px-3 py-1 text-xs rounded-md transition-all duration-200 font-sans ${
                  activeTab === index
                    ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                    : "text-zinc-400 hover:text-zinc-200 hover:bg-white/5"
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        )}

        {!tabsExist && filename && (
          <div
            className="flex justify-between items-center px-3 py-2 bg-black/30 rounded-t-lg text-xs text-zinc-400"
            onClick={(e) => e.stopPropagation()} // prevent click to copy here
          >
            <div>{filename}</div>
            <button
              onClick={() => copyToClipboard(activeCode)}
              className="flex items-center gap-1 text-xs text-zinc-400 hover:text-zinc-200 transition-all"
            >
              {copied ? <IconCheck size={14} /> : <IconCopy size={14} />}
            </button>
          </div>
        )}
      </div>

      {/* Code Area */}
      <div className="overflow-hidden rounded-lg border border-white/10 bg-black/40 p-4">
        <SyntaxHighlighter
  language={activeLanguage}
  style={atomDark}
  customStyle={{
    margin: 0,
    padding: 0,
    background: "transparent",
    fontSize: "0.875rem", // text-sm
    whiteSpace: "pre-wrap",      // ✅ Wrap long lines
    wordBreak: "break-word",     // ✅ Break long words if needed
    overflowX: "visible",        // ✅ Remove horizontal scrollbar
  }}
  wrapLines={true}
  showLineNumbers={true}
  lineProps={(lineNumber) => ({
    style: {
      backgroundColor: activeHighlightLines.includes(lineNumber)
        ? "rgba(255,255,255,0.08)"
        : "transparent",
      display: "block",
      width: "100%",
      whiteSpace: "pre-wrap", // ✅ Ensures wrapping even inside lines
      wordBreak: "break-word",
    },
  })}
  PreTag="div"
>
  {String(activeCode)}
</SyntaxHighlighter>


        {/* Floating copy button for tabs */}
        {tabsExist && (
          <button
            onClick={(e) => {
              e.stopPropagation(); // avoid duplicate copy trigger
              copyToClipboard(activeCode);
            }}
            className="absolute top-3 right-3 flex items-center gap-1 text-xs text-zinc-400 hover:text-zinc-200 transition-all"
          >
            {copied ? <IconCheck size={14} /> : <IconCopy size={14} />}
          </button>
        )}

        {/* Copied feedback */}
        {copied && (
          <div className="absolute right-3 bottom-2 text-[11px] text-emerald-400 font-medium bg-emerald-500/10 border border-emerald-500/20 rounded-md px-2 py-0.5 animate-fade">
            Copied!
          </div>
        )}
      </div>
    </div>
  );
};
