"use client";

import { useEffect, useState, useMemo } from "react";
import {
  Command,
  CommandInput,
  CommandList,
  CommandItem,
  CommandGroup,
  CommandEmpty,
} from "@/components/ui/command";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Search } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

// ✅ Import your central registry
import ComponentRegistry from "@/lib/registry";

/**
 * ✨ Backternity Command Palette (Dynamic)
 * - Automatically loads all components from registry.js
 * - Supports keyboard shortcut (Cmd/Ctrl + K)
 * - ESC to close
 * - Grouped by component type
 */
export default function SearchCommand() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  // 🔹 Toggle via keyboard shortcut (Cmd/Ctrl + K)
  useEffect(() => {
    const down = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      } else if (e.key === "Escape") {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", down);
    return () => window.removeEventListener("keydown", down);
  }, []);

  // 🔹 Build list of commands from registry
  const commands = useMemo(() => {
    return Object.entries(ComponentRegistry).map(([id, comp]) => ({
      id,
      label: comp.name,
      description: comp.description,
      type: comp.type || "other",
      version: comp.version,
      tags: comp.tags || [],
    }));
  }, []);

  // 🔹 Group by component type (auth, database, storage, etc.)
  const groupedCommands = useMemo(() => {
    const groups = {};
    for (const cmd of commands) {
      const group = cmd.type.toLowerCase();
      if (!groups[group]) groups[group] = [];
      groups[group].push(cmd);
    }
    return groups;
  }, [commands]);

  // 🔹 Navigate to component details page
  const handleSelect = (value) => {
    setOpen(false);
    router.push(`/browse/${value}`);
  };

  // 🔹 Mac vs Windows shortcut label
  const keyLabel =
    typeof window !== "undefined" && window.navigator.platform.includes("Mac")
      ? "⌘"
      : "Ctrl";

  // 🔹 Optional: Human-readable group labels
  const LABEL_MAP = {
    auth: "Authentication",
    database: "Database",
    middleware: "Middleware / Utilities",
    utility: "Middleware / Utilities",
    storage: "Storage",
    caching: "Caching",
    other: "Miscellaneous",
  };

  return (
    <>
      {/* 🔸 Trigger Button */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Open search command palette"
        className="flex items-center justify-between w-[300px] px-4 py-2 
          bg-card/70 text-foreground rounded-xl border border-border 
          shadow-sm hover:border-primary/50 hover:bg-card/80 
          transition-all duration-200"
      >
        <div className="flex items-center gap-2">
          <Search className="w-4 h-4 text-primary" />
          <span className="text-sm text-foreground">Search Components</span>
        </div>
        <kbd className="flex items-center gap-1 text-xs text-primary bg-secondary px-1.5 py-[2px] pt-1 rounded font-mono tracking-wide">
          {keyLabel} K
        </kbd>
      </button>

      {/* 🔸 Command Palette */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          className={cn(
            "p-0 max-w-xl rounded-lg border border-border/50",
            "shadow-2xl bg-card backdrop-blur-sm transition-all duration-200"
          )}
        >
          <VisuallyHidden>
            <DialogTitle>Search Components</DialogTitle>
          </VisuallyHidden>

          <Command className="rounded-lg">
            {/* Search Input */}
            <CommandInput
              placeholder="Search components..."
              className="bg-transparent text-foreground border-none px-6 py-4 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-0"
              autoFocus
            />

            {/* Results */}
            {/* Results */}
<CommandList
  className={cn(
    "max-h-[420px] overflow-y-auto px-2 pb-2",
    // Hide scrollbar (cross-browser)
    "[&::-webkit-scrollbar]:w-0 [&::-webkit-scrollbar]:h-0 scrollbar-none"
  )}
>
  <CommandEmpty className="px-6 py-8 text-sm text-muted-foreground text-center">
    No components found.
  </CommandEmpty>

  {Object.entries(groupedCommands).map(([groupName, items]) => (
    <CommandGroup
      key={groupName}
      heading={LABEL_MAP[groupName] || groupName}
      className="text-xs font-medium text-muted-foreground/80 mb-2 px-4 py-2"
    >
      {items.map((cmd) => (
        <CommandItem
          key={cmd.id}
          onSelect={() => handleSelect(cmd.id)}
          className={cn(
            "cursor-pointer px-2 py-3 mx-1 rounded-md text-foreground flex justify-between transition-all duration-150",
            "hover:bg-secondary/60 focus:bg-secondary/60 data-[selected=true]:bg-secondary/60",
            "border border-transparent hover:border-border/30"
          )}
        >
          <span className="flex flex-col gap-1 flex-1 min-w-0">
            <span className="font-medium text-white text-sm">{cmd.label}</span>
            <span className="text-xs text-muted-foreground line-clamp-1 leading-relaxed">
              {cmd.description}
            </span>
          </span>
          <span className="text-xs text-primary/60 font-mono ml-4 shrink-0 self-center">
            /browse/{cmd.id}
          </span>
        </CommandItem>
      ))}
    </CommandGroup>
  ))}
</CommandList>

          </Command>
        </DialogContent>
      </Dialog>
    </>
  );
}
