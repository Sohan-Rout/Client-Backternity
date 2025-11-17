"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, Settings, Key, Database, Copy, Check } from "lucide-react";
import { HeroHeader } from "./header";
import MeshGradientBackground from "./ui/MeshGradient";

// FeatureCard with semantic tags and aria-labels
const FeatureCard = ({ title, description, icon: Icon, delay }) => (
  <motion.article // article for standalone content block
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay, duration: 0.6, ease: "easeOut" }}
    className="group relative overflow-hidden rounded-2xl bg-neutral-900/40 backdrop-blur-sm border border-neutral-800/50 p-4 sm:p-6 hover:border-emerald-500/30 transition-all duration-300"
    aria-label={`${title} feature`}
  >
    <div className="relative z-10">
      <div className="text-emerald-400 mb-3 sm:mb-4" aria-hidden="true">
        <Icon size={26} className="sm:w-8 sm:h-8" />
      </div>
      <h3 className="text-[15px] sm:text-lg font-switzer-semibold text-neutral-100 mb-1 sm:mb-2 leading-snug">
        {title}
      </h3>
      <p className="text-[13px] sm:text-[15px] text-neutral-400 leading-relaxed font-switzer-light">
        {description}
      </p>
    </div>
    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  </motion.article>
);

// CodeShowcase remains largely same with minor aria roles
const CodeShowcase = () => {
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
    <motion.div
      role="region"
      aria-label="Command line interface code examples"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.0, duration: 0.5 }}
      className="rounded-2xl bg-neutral-900/60 backdrop-blur-md border border-neutral-800/50 p-4 sm:p-6 overflow-hidden"
    >
      <div className="flex flex-wrap gap-2 mb-3 sm:mb-4" role="tablist">
        {examples.map((ex, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={activeTab === i}
            aria-controls={`tabpanel-${i}`}
            id={`tab-${i}`}
            onClick={() => setActiveTab(i)}
            className={`px-3 py-1.5 rounded-lg text-xs font-switzer-medium transition-all duration-200 ${
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
        className="relative font-mono text-xs sm:text-sm text-emerald-400 bg-neutral-950/50 rounded-lg p-3 sm:p-4 break-all cursor-pointer hover:bg-neutral-950/70 transition-colors group"
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
    </motion.div>
  );
};

export default function HeroSection() {
  const [copied, setCopied] = useState(false);
  const [notifyEmail, setNotifyEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleNotifySubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/subscribe-notifications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: notifyEmail }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "🎉 Subscribed! Check your email.",
        });
        setNotifyEmail("");
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Failed to subscribe",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Network error. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <section
      aria-label="Hero section highlighting modular backend features and quick start commands"
      className="relative min-h-screen bg-neutral-950 text-neutral-100 overflow-hidden"
    >
      <MeshGradientBackground aria-hidden="true" />
      <HeroHeader />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-10 sm:py-16 lg:py-18 flex items-center min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 sm:py-10 md:py-10 w-full items-center">
          {/* LEFT: Main Content */}
          <div className="space-y-6 lg:space-y-6 py-8">
            {/* Badge - Use meaningful labels */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 backdrop-blur-sm"
              aria-label="Latest feature announcement"
              role="note"
            >
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-emerald-400 text-sm font-switzer-medium">
                What's new
              </span>
            </motion.div>

            {/* Link to featured component */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2"
            >
              <a
                href="/browse/socket-io"
                className="text-sm font-switzer-light flex items-center gap-1 hover:gap-2 duration-100 transition-all text-neutral-300 hover:text-white"
              >
                Socket-IO
                <span>
                  <MoveRight size={16} aria-hidden="true" />
                </span>
              </a>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <h1 className="text-5xl lg:text-7xl font-switzer-bold tracking-tight leading-tight">
                <span className="text-neutral-100">Modular Backend.</span>
                <br />
                <span className="bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-400 bg-clip-text text-transparent">
                  Minimal Effort.
                </span>
              </h1>
              <p className="text-lg lg:text-xl text-neutral-400 max-w-xl leading-relaxed font-switzer-light">
                Build scalable backends with one command. Authentication, data,
                and messaging that integrate in minutes.
              </p>
            </motion.div>

            {/* Call To Action */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4"
            >
              {/* Command strip - interactive with copy */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="relative w-full sm:w-[55vw] sm:-ml-6 lg:-mx-[60vw] mb-8 sm:mb-12 lg:left-[80%] lg:right-[50%]"
                onClick={() => copyToClipboard("npx backternity@latest init")}
                role="button"
                tabIndex={0}
                aria-label="Copy backternity init command to clipboard"
                onKeyPress={(e) => {
                  if (e.key === "Enter" || e.key === " ")
                    copyToClipboard("npx backternity@latest init");
                }}
              >
                <div className="relative backdrop-blur-[1px] border-[1px] overflow-hidden rounded-full border-emerald-500/60 shadow-[0_0_15px_rgba(16,185,129,0.15)] group cursor-pointer hover:border-emerald-500/40 hover:shadow-[0_0_25px_rgba(16,185,129,0.25)] transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/10 to-emerald-400/30 animate-pulse"></div>
                  <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-start sm:justify-center">
                    <div className="flex items-center gap-2 sm:gap-3 relative z-10 sm:ml-[380px]">
                      <span
                        className="text-neutral-500 text-xs sm:text-sm"
                        aria-hidden="true"
                      >
                        ▲
                      </span>
                      <code className="font-mono text-xs sm:text-sm text-neutral-300 group-hover:text-emerald-300 transition-colors break-all">
                        npx backternity@latest init
                      </code>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          copyToClipboard("npx backternity@latest init");
                        }}
                        className="ml-1 sm:ml-2 text-neutral-500 hover:text-emerald-400 transition-colors"
                        aria-label="Copy to clipboard"
                      >
                        {copied ? <Check size={14} /> : <Copy size={14} />}
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>

              <div className="flex flex-wrap">
                <motion.a
                  href="/browse/auth-jwt"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-3 rounded-full bg-emerald-500 text-neutral-950 font-switzer-semibold shadow-lg shadow-emerald-500/25 hover:bg-emerald-400 transition-colors text-center"
                >
                  Browse Components
                </motion.a>
              </div>
              {/* Trust indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-wrap gap-6 text-sm text-neutral-500 font-switzer-light pt-6"
              >
                {["Development Ready", "Extendable", "Developer Friendly"].map(
                  (item) => (
                    <div key={item} className="flex items-center gap-2">
                      <svg
                        className="w-5 h-5 text-emerald-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{item}</span>
                    </div>
                  )
                )}
              </motion.div>
            </motion.div>
          </div>

          {/* RIGHT Side: Feature Cards and Code Example */}
          <section
            aria-label="Core features overview"
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-10 lg:mt-0"
          >
            <div className="col-span-1 sm:col-span-2"></div>
            <FeatureCard
              icon={Key}
              title="Auth Modules"
              description="Plug in ready-to-use authentication systems — JWT, OAuth, and session-based auth with minimal setup."
              delay={0.4}
            />
            <FeatureCard
              icon={Database}
              title="Database Connectors"
              description="Integrate MongoDB, PostgreSQL, or any supported database instantly with typed models and prebuilt CRUD operations."
              delay={0.4}
            />

            {/* Notification subscription card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
              className="col-span-1 sm:col-span-2 group relative overflow-hidden rounded-2xl bg-neutral-900/40 backdrop-blur-sm border border-neutral-800/50 p-4 sm:p-6 hover:border-emerald-500/30 transition-all duration-300"
            >
              <div className="relative z-10 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-[15px] sm:text-lg font-switzer-semibold text-neutral-100 leading-snug">
                    Stay Updated
                  </h3>
                  <p className="text-[13px] sm:text-[15px] text-neutral-400 leading-relaxed font-switzer-light">
                    Get notified when new components are released
                  </p>
                </div>

                <form
                  onSubmit={handleNotifySubmit}
                  className="flex gap-2 flex-wrap items-center"
                >
                  <input
                    type="email"
                    value={notifyEmail}
                    onChange={(e) => setNotifyEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    disabled={isSubmitting}
                    className="flex-1 min-w-[180px] px-4 py-2.5 rounded-full bg-neutral-950/50 border border-neutral-800/50 text-neutral-100 placeholder:text-neutral-500 font-switzer-light text-sm focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Email address for component notifications"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-5 py-2.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-switzer-semibold hover:bg-emerald-500/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap text-sm"
                  >
                    {isSubmitting ? "..." : "Notify Me"}
                  </button>
                </form>

                {/* Status message */}
                {submitStatus && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className={`text-xs sm:text-sm font-switzer-light px-3 py-2 rounded-lg inline-block ${
                      submitStatus.type === "success"
                        ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30"
                        : "bg-red-500/10 text-red-400 border border-red-500/30"
                    }`}
                    role="alert"
                  >
                    {submitStatus.message}
                  </motion.div>
                )}
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>

            <div className="col-span-1 sm:col-span-2">
              <CodeShowcase />
            </div>
          </section>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 text-neutral-600"
        aria-hidden="true"
      >
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </section>
  );
}
