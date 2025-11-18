import { ChevronRight } from "lucide-react";
import TemplatesShowcase from "@/components/sections/templates-showcase";
import { getAllTemplates } from "@/lib/templates-registry";

const page = () => {
  const templates = getAllTemplates();

  return (
    <>
      <section className="relative overflow-hidden bg-[#000000] min-h-screen flex items-center">
        {/* Grid Background Effect */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#60a5fa_1px,transparent_1px),linear-gradient(to_bottom,#60a5fa_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_50%_at_40%_0%,#000_70%,transparent_100%)] opacity-10 pointer-events-none"></div>

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            {/* Left Column: Content */}
            <div className="flex flex-col items-start text-left space-y-8">
              <div className="space-y-4">
                <p className="text-emerald-400 font-bold tracking-wider text-xs uppercase pl-1">
                  Modules by the makers of Backternity
                </p>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
                  Modern Backend <br />
                  Modules, crafted <br />
                  with{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                    Backternity.
                  </span>
                </h1>
              </div>

              {/* Tech Stack Badges */}
              <div className="flex items-center gap-6 border-y border-slate-800/60 py-6 w-full">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#1a202c] flex items-center justify-center p-2">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-full text-emerald-400"
                    >
                      <ellipse
                        cx="12"
                        cy="12"
                        rx="10"
                        ry="4.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        transform="rotate(-45 12 12)"
                      />
                      <ellipse
                        cx="12"
                        cy="12"
                        rx="10"
                        ry="4.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        transform="rotate(45 12 12)"
                      />
                      <ellipse
                        cx="12"
                        cy="12"
                        rx="10"
                        ry="4.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white font-semibold">React</span>
                    <span className="text-xs text-slate-500">Components</span>
                  </div>
                </div>
                <div className="w-px h-8 bg-slate-800"></div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-black border border-slate-800 flex items-center justify-center p-2 text-white font-bold text-xs">
                    N
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white font-semibold">Next.js</span>
                    <span className="text-xs text-slate-500">App Router</span>
                  </div>
                </div>
              </div>

              <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
                Visually-stunning, easy to customize backend modules built with
                React and Next.js. The perfect starting point for your next
                project and the ultimate resource for scaling fast.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <button className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-3.5 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 group">
                  Browse modules
                  <ChevronRight
                    size={16}
                    className="group-hover:translate-x-0.5 transition-transform"
                  />
                </button>
                <button className="bg-emerald-500 hover:bg-emerald-400 text-white px-6 py-3.5 rounded-lg font-semibold transition-all shadow-[0_0_30px_-10px_rgba(16,185,129,0.6)] flex items-center justify-center gap-2">
                  Get everything
                  <span className="bg-emerald-600/50 px-1.5 py-0.5 rounded text-xs border border-emerald-400/30">
                    PRO
                  </span>
                </button>
              </div>
            </div>

            {/* Right Column: Visual/Image Placeholder */}
            <div className="relative hidden lg:block perspective-1000">
              {/* Abstract geometric decoration meant to mimic the tilted cards in the screenshot */}
              <div className="relative w-full aspect-[4/3] transform rotate-y-12 rotate-x-6 scale-90 hover:scale-95 transition-transform duration-700 ease-out group">
                {/* Main Card (Top) */}
                <div className="absolute top-0 right-0 w-[90%] h-[90%] bg-slate-900 rounded-xl border border-slate-700 shadow-2xl overflow-hidden z-20 transition-transform group-hover:-translate-y-4">
                  {/* Fake UI Header */}
                  <div className="h-8 bg-slate-800 border-b border-slate-700 flex items-center px-4 gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
                  {/* Content Area */}
                  <div className="p-8 bg-gradient-to-br from-slate-900 to-slate-800 h-full flex flex-col justify-center items-center text-center">
                    <h3 className="text-3xl font-bold text-white mb-2">
                      Close every deal.
                    </h3>
                    <p className="text-slate-400 mb-6">
                      A snapshot of your entire sales pipeline.
                    </p>
                    <div className="w-full h-32 bg-slate-800/50 rounded-lg border border-slate-700/50 flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10"></div>
                      {/* Fake Chart */}
                      <div className="flex items-end gap-2 h-16">
                        <div className="w-4 bg-emerald-500/40 h-8 rounded-t"></div>
                        <div className="w-4 bg-emerald-500/60 h-12 rounded-t"></div>
                        <div className="w-4 bg-emerald-500/80 h-10 rounded-t"></div>
                        <div className="w-4 bg-emerald-500 h-14 rounded-t"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Background Card 1 (Left) */}
                <div className="absolute top-12 -left-4 w-[90%] h-[90%] bg-slate-800 rounded-xl border border-slate-700 shadow-xl -z-10 opacity-60 transform -translate-x-4 translate-y-4"></div>

                {/* Background Card 2 (Bottom) */}
                <div className="absolute -bottom-8 right-12 w-[80%] h-[80%] bg-emerald-900/20 rounded-xl border border-emerald-500/20 shadow-lg -z-20 backdrop-blur-sm"></div>

                {/* Glow effects */}
                <div className="absolute -inset-4 bg-emerald-500/20 blur-3xl -z-30 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Templates Showcase Section */}
      <TemplatesShowcase templates={templates} />
    </>
  );
};

export default page;
