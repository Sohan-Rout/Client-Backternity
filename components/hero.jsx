"use client";
import { FlipWords } from "./ui/flip-words";
import ColourfulText from "./ui/colourful-text";
import { BackgroundBeams } from "./ui/background-beams";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { ShinyButton } from "./ui/shiny-button";
import CodeShowcase from "./ui/hero/code-showcase";

const words = ["Authentication", "data", "messaging"];
const cta = "Modular Backend. Minimal Effort.";

export default function Hero() {
  return (
    <main className="h-[100vh] flex items-center justify-center bg-neutral-950">
      <BackgroundBeams className="pointer-events-none" />
      <div className="flex flex-col justify-center items-center gap-8">
        <section>
          <HoverBorderGradient className="flex gap-2 justify-center items-center">
            <div className="bg-blue-500 w-2 h-2 rounded-full animate-pulse"/>
            <a className="text-sm" href={"./templates"}>What's New : Check Our Templates</a>
          </HoverBorderGradient>
        </section>
        <section className="flex flex-col justify-center gap-4 items-center px-12">
          <h1 className="text-4xl md:text-6xl text-center">
            <ColourfulText text={cta} />
          </h1>
          <div className="text-xl text-center text-neutral-400 md:text-2xl">
            Build scalable backends with one command.
            <FlipWords words={words} />
            that integrate in minutes.
          </div>
        </section>
        <section className="w-120 min-w-120 max-w-120 shrink-0">
          <CodeShowcase />
        </section>
        <section className="flex flex-col md:flex-row gap-4">
          <ShinyButton onClick={() => (window.location.href = "./browse/auth-jwt")} className="bg-emerald-500/50 w-60 border border-emerald-500">
            <span className="text-white">View Components</span>
          </ShinyButton>
          <ShinyButton onClick={() => (window.location.href = "./templates")} className="bg-neutral-900 border w-60">
            <span className="text-white">View Templates</span>
          </ShinyButton>
        </section>
      </div>
    </main>
  );
}
