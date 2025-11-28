import { FlipWords } from "./ui/flip-words";

const words = ["Authentication", "data", "messaging"]
export default function Hero() {
  return (
    <main className="flex justify-center items-center h-[100vh]">
      <section className="flex flex-col justify-center gap-4 items-center">
        <h1 className="text-4xl md:text-6xl text-center">
          Modular Backend. Minimal Effort.
        </h1>
        <div className="text-xl text-neutral-400">
          Build scalable backends with one command. 
          <FlipWords words={words}/>that integrate in minutes.
        </div>
      </section>
    </main>
  );
}
