"use client";

import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import ComponentSidebar from "@/components/component-sidebar";

export function MobileSidebarButton({ components }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden fixed bottom-6 left-1/2 transform -translate-x-1/2 z-30">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <button
            className="bg-emerald-500 hover:bg-emerald-400 text-neutral-950 px-4 py-2 rounded-full text-sm font-medium shadow-lg transition-colors"
            aria-label="Open browse components sidebar"
          >
            Browse Components
          </button>
        </SheetTrigger>
        <SheetContent side="left" className="w-80 bg-neutral-950 border-neutral-800">
          <div className="mt-8">
            <ComponentSidebar components={components} />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
