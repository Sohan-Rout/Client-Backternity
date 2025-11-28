"use client";
import { FlipWords } from "./ui/flip-words";
import ColourfulText from "./ui/colourful-text";
import { BackgroundBeams } from "./ui/background-beams";

const words = ["Authentication", "data", "messaging"];
const cta = "Modular Backend. Minimal Effort.";

export default function Hero() {
  return (
    <main className="h-[100vh] flex items-center justify-center">
      <div className="flex justify-center items-center">
        <section></section>
        <section className="flex flex-col justify-center gap-4 items-center">
          <h1 className="text-4xl md:text-6xl text-center">
            <ColourfulText text={cta} />
          </h1>
          <div className="text-2xl text-neutral-400">
            Build scalable backends with one command.
            <FlipWords words={words} />
            that integrate in minutes.
          </div>
        </section>
      </div>
      <BackgroundBeams />
    </main>
  );
}
