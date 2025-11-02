"use client";
import { useState } from "react";
import { CodeBlock } from "@/components/ui/code-block";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ExpandableCodeBlock({ code, filename, language = "javascript" }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="relative mt-4">
      <h3 className="text-sm font-semibold text-muted-foreground mb-2">
        Example
      </h3>

      <div
        className={`transition-all duration-300 overflow-hidden border border-white/10 rounded-lg ${
          expanded ? "max-h-[10000px]" : "max-h-[300px]"
        }`}
      >
        <CodeBlock
          language={language}
          filename={filename}
          tabs={[
            {
              name: filename,
              code,
              language,
            },
          ]}
        />
      </div>

      {/* Expand/Collapse button */}
      <div className="absolute bottom-0 left-10 right-0 flex justify-center bg-gradient-to-t from-emerald-900/90 via-emerald-700/40 to-transparent pt-2 pb-3">
        <Button
          variant="ghost"
          size="sm"
          className="text-sm text-muted-foreground bg-transparent hover:bg-transparent hover:text-accent w-full"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? (
            <>
              <ChevronUp className="w-4 h-4 mr-1" /> Show Less
            </>
          ) : (
            <>
              <ChevronDown className="w-4 h-4 mr-1" /> Show More
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
