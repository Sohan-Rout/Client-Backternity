"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import ComponentRegistry from "@/lib/registry";
import ComponentViewer from "@/components/component-viewer";


/** 🔸 Skeleton loader mimicking ComponentViewer structure */
function ComponentSkeleton() {
  return (
    <div className="p-8 space-y-10 max-w-3xl animate-pulse">
      {/* HEADER */}
      <div className="space-y-4">
        <div className="h-8 w-2/3 bg-white/10 rounded-md" />
        <div className="h-4 w-full bg-white/5 rounded-md" />
        <div className="h-4 w-5/6 bg-white/5 rounded-md" />
        <div className="flex gap-2 mt-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="h-5 w-16 bg-white/5 rounded-full" />
          ))}
        </div>
      </div>

      {/* OVERVIEW SECTION */}
      <div className="space-y-3">
        <div className="h-6 w-40 bg-white/10 rounded-md" />
        <div className="h-4 w-full bg-white/5 rounded-md" />
        <div className="h-4 w-5/6 bg-white/5 rounded-md" />
        <div className="h-4 w-3/4 bg-white/5 rounded-md" />
      </div>

      {/* INSTALLATION / CODEBLOCK SECTION */}
      <div className="space-y-3">
        <div className="h-6 w-40 bg-white/10 rounded-md" />
        <div className="h-28 w-full bg-black/40 border border-white/10 rounded-lg" />
      </div>

      {/* COMMAND DETAILS TABLE SECTION */}
      <div className="space-y-3">
        <div className="h-6 w-52 bg-white/10 rounded-md" />
        <div className="h-5 w-32 bg-white/5 rounded-md" />
        <div className="h-32 w-full bg-black/40 border border-white/10 rounded-lg" />
      </div>

      {/* CONFIGURATION SECTION */}
      <div className="space-y-3">
        <div className="h-6 w-36 bg-white/10 rounded-md" />
        <div className="h-28 w-full bg-black/40 border border-white/10 rounded-lg" />
      </div>

      {/* FRONTEND USAGE SECTION */}
      <div className="space-y-3">
        <div className="h-6 w-56 bg-white/10 rounded-md" />
        <div className="h-4 w-2/3 bg-white/5 rounded-md" />
        <div className="h-4 w-3/4 bg-white/5 rounded-md" />
        <div className="h-4 w-4/5 bg-white/5 rounded-md" />
        <div className="h-28 w-full bg-black/40 border border-white/10 rounded-lg" />
      </div>
    </div>
  );
}

/** 🔸 Component Page with Skeleton */
export default function ComponentSlugPage() {
  const params = useParams();
  const slug = params?.slug;
  const [loading, setLoading] = useState(true);
  const [component, setComponent] = useState(null);

  useEffect(() => {
    // Simulate async data loading (helps during transitions)
    setLoading(true);
    const timeout = setTimeout(() => {
      setComponent(ComponentRegistry[slug]);
      setLoading(false);
    }, 400); // small delay for UX realism

    return () => clearTimeout(timeout);
  }, [slug]);

  if (loading) {
    return <ComponentSkeleton />;
  }

  if (!component) {
    return (
      <div className="text-neutral-400 text-center mt-10">
        Component not found.
      </div>
    );
  }

  return (
    <div className="p-4">
      <ComponentViewer component={component} componentKey={slug} />
    </div>
  );
}
