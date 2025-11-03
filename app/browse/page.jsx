"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ComponentRegistry from "@/lib/registry";

/** 🔸 Reuse your existing Skeleton loader */
function ComponentSkeleton() {
  return (
    <div className="p-8 space-y-10 max-w-3xl animate-pulse">
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

      <div className="space-y-3">
        <div className="h-6 w-40 bg-white/10 rounded-md" />
        <div className="h-4 w-full bg-white/5 rounded-md" />
        <div className="h-4 w-5/6 bg-white/5 rounded-md" />
        <div className="h-4 w-3/4 bg-white/5 rounded-md" />
      </div>

      <div className="space-y-3">
        <div className="h-6 w-40 bg-white/10 rounded-md" />
        <div className="h-28 w-full bg-black/40 border border-white/10 rounded-lg" />
      </div>

      <div className="space-y-3">
        <div className="h-6 w-52 bg-white/10 rounded-md" />
        <div className="h-5 w-32 bg-white/5 rounded-md" />
        <div className="h-32 w-full bg-black/40 border border-white/10 rounded-lg" />
      </div>

      <div className="space-y-3">
        <div className="h-6 w-36 bg-white/10 rounded-md" />
        <div className="h-28 w-full bg-black/40 border border-white/10 rounded-lg" />
      </div>
    </div>
  );
}

/** 🔸 BrowseIndexPage with Skeleton + Delayed Redirect */
export default function BrowseIndexPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const firstComponent = Object.keys(ComponentRegistry)[0];
    const timeout = setTimeout(() => {
      router.push(`/browse/${firstComponent}`);
    }, 800); // Small delay for UX realism (0.8s)

    return () => clearTimeout(timeout);
  }, [router]);

  return <ComponentSkeleton />;
}
