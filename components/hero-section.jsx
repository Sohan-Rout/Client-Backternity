"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TextEffect } from "@/components/ui/text-effect";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { HeroHeader } from "./header";
import { IoCopyOutline } from "react-icons/io5";
import { IoCopy } from "react-icons/io5";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { gsap } from "gsap";

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

// Separate component for the copy functionality to avoid hooks conditional call
function CommandCopy() {
  const [copied, setCopied] = useState(false);
  const command = "npx backternity@latest init";
  
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (e) {
      console.error("Failed to copy:", e);
    }
  };

  return (
    <AnimatedGroup
      variants={{
        container: {
          visible: {
            transition: {
              staggerChildren: 0.05,
              delayChildren: 0.75,
            },
          },
        },
        ...transitionVariants,
      }}
      className="mt-6 flex-row items-center gap-2"
    >
      <div
        className="mb-6 bg-neutral-900 text-neutral-200 rounded-xl p-4 w-full max-w-md shadow-lg"
      >
        <div className="flex items-center justify-between mb-3 border-b border-neutral-700 pb-2">
          <h2 className="font-semibold text-sm text-neutral-100">
            ~ package
          </h2>

          <button
            type="button"
            className="text-xs flex items-center gap-1 px-3 py-1 rounded-lg transition"
            onClick={handleCopy}
          >
            <AnimatePresence mode="wait">
              {copied ? (
                <motion.span
                  key="copied"
                  initial={{ y: -5, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 6, opacity: 0 }}
                  transition={{ duration: 0.1 }}
                  className="text-emerald-500 flex items-center gap-1"
                >
                  Copied!
                </motion.span>
              ) : (
                <motion.span
                  key="copy"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.1 }}
                  className="flex items-center gap-1 py-2 text-neutral-400"
                >
                  {""}
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>

        <code
          onClick={handleCopy}
          className="flex cursor-pointer justify-between font-mono text-sm bg-neutral-950 rounded-lg p-3 text-emerald-500 whitespace-pre-wrap"
        >
          {command}
          <span>{copied ? <IoCopy /> : <IoCopyOutline />}</span>
        </code>
      </div>
      <div className="flex items-center gap-2 mt-6">
        <div className="border rounded-full">
          <Button asChild size="lg" className="px-6 text-base rounded-full">
            <Link
              href="browse"
              className="text-neutral-200 hover:text-neutral-500 hover:bg-neutral-200 duration-300"
            >
              <span className="text-nowrap">
                Browser Components
              </span>
            </Link>
          </Button>
        </div>
        <Button
          asChild
          size="lg"
          className="bg-neutral-200 hover:bg-neutral-300 duration-300 rounded-full"
        >
          <Link href="docs">
            <span className="text-nowrap text-black">
              Documentation
            </span>
          </Link>
        </Button>
      </div>
    </AnimatedGroup>
  );
}

export default function HeroSection() {
  // Blue color options only
  const colorOptions = [
    "bg-emerald-500",
    "bg-neutral-950",
    "bg-neutral-800",
    "bg-neutral-900",
    "bg-neutral-950",
    "bg-emerald-500",
  ];
  
  const [gridColors, setGridColors] = useState([]);
  const [isMounted, setIsMounted] = useState(false);
  const gridRef = useRef(null);

  // Initialize only on client side
  useEffect(() => {
    setIsMounted(true);
    // Initialize grid colors
    setGridColors(
      Array.from({ length: 24 }).map(
        () => colorOptions[Math.floor(Math.random() * colorOptions.length)]
      )
    );

    // GSAP animation
    if (gridRef.current) {
      gsap.from(gridRef.current.children, {
        opacity: 0,
        scale: 0,
        stagger: 0.05,
        duration: 0.5,
        ease: "back.out(1.7)",
      });
    }
  }, []);

  // Color change interval - only run on client
  useEffect(() => {
    if (!isMounted) return;

    const interval = setInterval(() => {
      setGridColors(prev =>
        prev.map(
          () => colorOptions[Math.floor(Math.random() * colorOptions.length)]
        )
      );
    }, 1000);
    
    return () => clearInterval(interval);
  }, [isMounted]);

  return (
    <>
      <HeroHeader />
      <main className="overflow-hidden">
       
        <section className="h-[100vh] flex items-center">
          <div className="mx-auto max-w-6xl px-6 w-full flex flex-col md:flex-row items-center md:items-start gap-12">
            {/* Left Column: Texts and command box */}
            <div className="flex-1">
              <div className="sm:mx-auto lg:mr-auto lg:mt-0">
                <TextEffect
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  as="h1"
                  className="mt-8 max-w-3xl text-balance text-5xl font-medium md:text-6xl lg:mt-16 text-neutral-200"
                >
                  Modular Backend .
                </TextEffect>
                <TextEffect
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  as="h1"
                  className="mt-2 max-w-3xl text-balance text-5xl font-medium md:text-6xl text-emerald-500"
                >
                  Minimal Effort .
                </TextEffect>
                <TextEffect
                  per="line"
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  delay={0.5}
                  as="p"
                  className="mt-10 max-w-2xl text-pretty text-lg text-neutral-300"
                >
                  Backend infrastructure, solved. Authentication, data, and
                  messaging that integrate in minutes so you can ship features,
                  not plumbing.
                </TextEffect>

                <CommandCopy />
              </div>
            </div>
            
            {/* Right Column: Color Grid */}
            <div className="mt-16 flex-1 flex justify-center items-center">
              <div ref={gridRef} className="grid grid-cols-4 gap-2 w-full max-w-sm">
                {isMounted && gridColors.map((color, i) => (
                  <motion.div
                    key={i}
                    className={`w-full h-16 rounded-lg ${color}`}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                ))}
                {/* Fallback for SSR */}
                {!isMounted && 
                  Array.from({ length: 24 }).map((_, i) => (
                    <div key={i} className="w-full h-16 rounded-lg bg-blue-500" />
                  ))
                }
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}