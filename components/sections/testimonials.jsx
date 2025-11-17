"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote, Code2, Shield, TrendingUp, Linkedin } from "lucide-react";
import { IconBrandLinkedin } from "@tabler/icons-react";

const testimonials = [
  {
    name: "Harshit Malik",
    role: "Generative AI Engineer",
    company: "StatusNeo",
    image: "/harshit-malik.jpeg",
    linkedin: "https://www.linkedin.com/in/harshitmalik22/",
    content:
      "It has made the Backend game more easy and efficient for me",
    rating: 5,
  },
  {
    name: "Sparsh Sharma",
    role: "Founder",
    company: "Backternity",
    image: "/sparsh-sharma.png",
    linkedin: "https://linkedin.com/in/sparshdev",
    content:
      "Couldn't believe myself that I am using backternity for backend",
    rating: 5,
  },
];

const stats = [
  { label: "Weekly NPM Downloads", value: "600+" },
  { label: "Active Users", value: "100+" },
  { label: "Countries", value: "6+" },
  { label: "Backend Components", value: "15+" },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-20 sm:py-28 md:py-32 bg-gradient-to-b from-black via-neutral-950 to-[#001510] text-neutral-100"
    >


      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-switzer-semibold tracking-tight leading-tight text-white mb-4">
            Developers Who{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-400 bg-clip-text text-transparent">
              Trust Backternity
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed font-switzer-light">
            Real feedback from engineers building scalable systems with modular
            backend components.
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-20">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative border border-neutral-800/60 bg-neutral-900/50 rounded-2xl p-6 backdrop-blur-sm hover:border-emerald-500/25 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500 pointer-events-none" />

              <div className="relative mb-5">
                <Quote className="absolute -top-1 -left-1 w-5 h-5 text-emerald-400/20" />
                <p className="text-sm sm:text-base text-neutral-400 leading-relaxed pl-6 font-switzer-light">
                  “{t.content}”
                </p>
              </div>

              <div className="flex mb-3 relative z-10">
                {[...Array(t.rating)].map((_, j) => (
                  <Star
                    key={j}
                    className="w-3.5 h-3.5 text-emerald-400 fill-current opacity-80"
                  />
                ))}
              </div>

              <div className="flex items-center justify-between gap-3 relative z-10">
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  {t.image && (
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-emerald-500/20 flex-shrink-0"
                    />
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-white truncate">
                      {t.linkedin ? (
                        <a
                          href={t.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-emerald-400 transition-colors duration-200 cursor-pointer"
                        >
                          {t.name}
                        </a>
                      ) : (
                        t.name
                      )}
                    </div>
                    <div className="text-xs sm:text-sm text-neutral-400 truncate">
                      {t.role} —{" "}
                      <span className="text-emerald-400/80">{t.company}</span>
                    </div>
                  </div>
                </div>
                {t.linkedin && (
                  <a
                    href={t.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 p-2 rounded-lg border border-neutral-800/60 bg-neutral-900/50 hover:border-emerald-500/40 hover:bg-emerald-500/5 transition-all duration-200 group/linkedin cursor-pointer"
                  >
                    <IconBrandLinkedin className="w-5 h-5 sm:w-6 sm:h-6 text-neutral-400 group-hover/linkedin:text-emerald-400 transition-colors" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center border-t border-neutral-800/60 pt-12"
        >
          {stats.map((s, i) => (
            <div key={i} className="space-y-1">
              <div className="text-2xl sm:text-3xl font-switzer-semibold text-white">
                {s.value}
              </div>
              <div className="text-xs sm:text-sm text-neutral-400">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Trust Line */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 flex flex-wrap justify-center items-center gap-6 text-xs sm:text-sm text-neutral-500"
        >
          <div className="flex items-center gap-2">
            <Shield className="w-3.5 h-3.5 text-emerald-400/80" />
            <span>SOC 2 Certified</span>
          </div>
          <span className="hidden sm:block w-px h-4 bg-neutral-800" />
          <div className="flex items-center gap-2">
            <TrendingUp className="w-3.5 h-3.5 text-emerald-400/80" />
            <span>Increases developer productivity</span>
          </div>
          <span className="hidden sm:block w-px h-4 bg-neutral-800" />
          <div className="flex items-center gap-2">
            <Code2 className="w-3.5 h-3.5 text-emerald-400/80" />
            <span>Open to use</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
