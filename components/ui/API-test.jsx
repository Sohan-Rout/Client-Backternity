"use client";

import { useState } from "react";
import { Copy, Check, Play, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export default function ApiTestButton({ endpoint }) {
  const [open, setOpen] = useState(false);
  const [responseText, setResponseText] = useState(null);
  const [copied, setCopied] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    setLoading(true);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    try {
      // Use the sample response from the endpoint definition
      if (endpoint.sampleResponse) {
        setResponseText(JSON.stringify(endpoint.sampleResponse, null, 2));
      } else {
        setResponseText(JSON.stringify({ 
          success: true, 
          message: "Response simulated successfully",
          note: "This is a simulated response for demonstration purposes"
        }, null, 2));
      }
    } catch (err) {
      setResponseText(JSON.stringify({ error: err.message }, null, 2));
    }
    
    setLoading(false);
  };

  async function copy(text, id) {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(id);
      setTimeout(() => setCopied(null), 1200);
    } catch {}
  }

  return (
    <div className="w-full">
      {/* ROUTE HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full py-3 border-b border-white/5">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 flex-1">
          <div className="font-mono text-[13px] text-cyan-400">
            {endpoint.method}
            <span className="text-foreground ml-2">{endpoint.route}</span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            {endpoint.description}
          </p>
        </div>

        {/* Right-aligned button */}
        <div className="sm:ml-auto flex justify-end w-full sm:w-auto mt-2 sm:mt-0">
          <Button
            size="sm"
            variant="ghost"
            onClick={() => setOpen((v) => !v)}
            className="text-xs flex items-center gap-1 bg-accent/10 hover:bg-accent/20 text-accent border border-accent/20 h-6 px-3 ml-auto"
          >
            {open ? (
              <>
                <X size={12} />
                Close
              </>
            ) : (
              <>
                <Play size={12} />
                Test
              </>
            )}
          </Button>
        </div>
      </div>

      {/* COLLAPSIBLE AREA */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="panel"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="w-full mt-3 bg-gradient-to-b from-black/40 to-black/30 rounded-xl p-5 space-y-4 border border-white/10">
              {/* Request Body (Read-only) */}
              {endpoint.method !== "GET" && endpoint.sampleRequest && (
                <div>
                  <div className="text-xs text-muted-foreground mb-2 font-medium">
                    Request Body
                  </div>
                  <pre className="w-full bg-black/60 border border-white/10 rounded-lg font-mono text-xs text-foreground/90 p-3 max-h-52 overflow-auto whitespace-pre-wrap">
                    {JSON.stringify(endpoint.sampleRequest, null, 2)}
                  </pre>
                </div>
              )}

              {/* Buttons Row */}
              <div className="flex flex-wrap items-center gap-2">
                <Button
                  onClick={handleSend}
                  disabled={loading}
                  className="bg-emerald-500 hover:bg-emerald-600 text-white text-xs h-7 px-4"
                >
                  {loading ? "Simulating..." : "Send Request"}
                </Button>

                <Button
                  size="sm"
                  variant="ghost"
                  className="text-xs h-7 px-3 bg-white/5 hover:bg-white/10"
                  onClick={() => {
                    const snippet = `fetch("${endpoint.route}", {
  method: "${endpoint.method}",
  headers: { "Content-Type": "${endpoint.contentType || "application/json"}" },
  body: ${endpoint.method !== "GET" ? JSON.stringify(endpoint.sampleRequest || {}) : "undefined"}
}).then(r=>r.json()).then(console.log);`;
                    copy(snippet, "fetch");
                  }}
                >
                  {copied === "fetch" ? (
                    <Check size={12} className="text-emerald-400" />
                  ) : (
                    "Copy fetch snippet"
                  )}
                </Button>

                {responseText && (
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-xs h-7 px-3 bg-white/5 hover:bg-white/10"
                    onClick={() => setResponseText(null)}
                  >
                    Clear Response
                  </Button>
                )}
              </div>

              {/* Response */}
              {responseText && (
                <div>
                  <div className="text-xs text-muted-foreground mb-2 font-medium">
                    Response (Simulated)
                  </div>
                  <pre className="w-full bg-black/60 border border-white/10 rounded-lg p-3 text-xs font-mono text-emerald-300/90 max-h-52 overflow-auto whitespace-pre-wrap">
                    {responseText}
                  </pre>
                  <div className="flex gap-2 mt-2">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-xs h-7 px-3 bg-white/5 hover:bg-white/10"
                      onClick={() => copy(responseText, "resp")}
                    >
                      {copied === "resp" ? (
                        <Check size={12} className="text-emerald-400" />
                      ) : (
                        "Copy response"
                      )}
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}