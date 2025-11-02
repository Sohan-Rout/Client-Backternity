"use client";
import { motion, useCycle } from "framer-motion";
import { useEffect } from "react";

const terminalLines = [
  { text: "$ npx backternity init", color: "text-emerald-400", delay: 0 },
  { text: "› Detecting framework...", color: "text-neutral-400", delay: 0.7 },
  { text: "✔ Found Express project", color: "text-neutral-400", delay: 1.6 },
  { text: "› Scanning registry for available components...", color: "text-neutral-400", delay: 2.4 },
  { text: "› Selected components: auth-jwt, database-mongodb, logger-winston", color: "text-neutral-400", delay: 3.3 },
  { text: "› Installing npm dependencies...", color: "text-neutral-400", delay: 4.3 },
  { text: "✔ Dependencies installed successfully", color: "text-emerald-400", delay: 5.3 },
  { text: "› Linking configuration and routes...", color: "text-neutral-400", delay: 6.1 },
  { text: "✔ backternity.config.json updated", color: "text-emerald-400", delay: 7 },
  { text: "› Running health checks...", color: "text-neutral-400", delay: 7.8 },
  { text: "✔ All systems ready", color: "text-emerald-400", delay: 8.6 },
  { text: "", color: "", delay: 9.3 },
  { text: "🎉 Project configured successfully!", color: "text-emerald-400", delay: 9.8 },
  { text: "→ Run `npm run dev` to start your modular backend", color: "text-neutral-500", delay: 10.5 },
];

export function TerminalDemo() {
  const [animationKey, cycleAnimationKey] = useCycle(0, 1);

  useEffect(() => {
    const totalDuration = 11.5 * 1000;
    const interval = setInterval(() => cycleAnimationKey(), totalDuration);
    return () => clearInterval(interval);
  }, [cycleAnimationKey]);

  return (
    <div className="relative mx-auto max-w-4xl rounded-xl overflow-hidden backdrop-blur-md border border-white/[0.05] bg-gradient-to-br from-background/60 to-background/40 shadow-[0_8px_40px_rgba(0,0,0,0.4)]">
      {/* Header */}
      <div className="relative flex items-center gap-2 px-4 py-2 border-b border-white/[0.05] bg-gradient-to-r from-black/60 via-black/40 to-black/30 backdrop-blur-sm overflow-hidden">
        {/* Sweep reflection */}
        <motion.div
          initial={{ x: "-120%" }}
          animate={{ x: "120%" }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatDelay: 8,
            ease: "easeInOut",
          }}
          className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none"
        />

        <span className="w-2.5 h-2.5 rounded-full bg-red-500/90" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/90" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-500/90" />
        <span className="ml-3 text-[11px] text-neutral-500 font-mono select-none">
          ~ backternity.cli
        </span>
      </div>

      {/* Terminal Content */}
      <div
        key={animationKey}
        className="p-5 font-mono text-[13px] leading-relaxed text-neutral-300 bg-gradient-to-br from-black/50 to-zinc-900/40"
      >
        {terminalLines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 3 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: line.delay, duration: 0.35, ease: "easeOut" }}
            className={`${line.color} whitespace-pre tracking-tight`}
          >
            {line.text}
            {i === terminalLines.length - 1 && (
              <motion.span
                className="inline-block w-1.5 bg-emerald-400/80 ml-1 rounded-sm"
                animate={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            )}
          </motion.div>
        ))}
      </div>

      {/* Subtle glow */}
      <motion.div
        initial={{ opacity: 0.1, scale: 0.9 }}
        animate={{ opacity: [0.1, 0.25, 0.1], scale: [0.9, 1.05, 0.9] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-[24rem] h-[6rem] bg-primary/30 blur-[100px] rounded-full"
      />
    </div>
  );
}
