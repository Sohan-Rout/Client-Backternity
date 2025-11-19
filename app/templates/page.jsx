import { templates } from '@/lib/templates-data';
import TemplateListItem from '@/components/sections/template-list-item';
import { Terminal, Database, Server, Shield } from 'lucide-react';
import EmeraldGlowDivider from '@/components/ui/EmeraldGlowDivider';
import Link from 'next/link';

export const metadata = {
  title: 'Templates | Backternity',
  description: 'Production-ready backend templates for your next project.',
};

export default function TemplatesPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section - tall, bold, minimal */}
      <div className="relative min-h-[95vh] flex items-center bg-gradient-to-b from-black via-black to-emerald-950/20 overflow-hidden">
        {/* Grid Background - More visible */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b981_1px,transparent_1px),linear-gradient(to_bottom,#10b981_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-[0.08] pointer-events-none"></div>
        
        {/* Emerald glow at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-emerald-950/30 via-emerald-950/10 to-transparent pointer-events-none"></div>
        
        <div className="container mx-auto px-4 py-20 lg:py-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Large heading and content */}
            <div className="space-y-6">
              <p className="text-xs font-mono text-emerald-400 tracking-widest uppercase">
                Templates by the makers of Backternity
              </p>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1]">
                Modern backend modules,
                <br />
                <span className="text-white">crafted with </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                  Backternity.
                </span>
              </h1>

              <div className="flex items-center gap-6 py-4 flex-wrap">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                    <Server className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white font-semibold text-sm">Express</span>
                    <span className="text-xs text-muted-foreground">Backend</span>
                  </div>
                </div>
                <div className="w-px h-8 bg-white/10"></div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                    <Database className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white font-semibold text-sm">MongoDB</span>
                    <span className="text-xs text-muted-foreground">Database</span>
                  </div>
                </div>
                <div className="w-px h-8 bg-white/10"></div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                    <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.182c5.423 0 9.818 4.395 9.818 9.818 0 5.423-4.395 9.818-9.818 9.818-5.423 0-9.818-4.395-9.818-9.818 0-5.423 4.395-9.818 9.818-9.818zM7.09 8.727c-.545 0-.982.437-.982.982v4.582c0 .545.437.982.982.982h9.818c.545 0 .982-.437.982-.982V9.71c0-.545-.437-.982-.982-.982H7.091z"/>
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white font-semibold text-sm">Razorpay</span>
                    <span className="text-xs text-muted-foreground">Payments</span>
                  </div>
                </div>
                <div className="w-px h-8 bg-white/10"></div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                    <svg className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.94 14.033c-.28 0-.56.005-.839.019-.272.014-.544.033-.815.057-.265.023-.528.054-.79.093-.258.037-.514.082-.766.135a8.454 8.454 0 00-1.453.39 5.273 5.273 0 00-1.228.64c-.34.238-.61.53-.807.872-.196.338-.295.723-.295 1.148 0 .425.099.81.295 1.148.197.342.467.634.807.872.345.243.76.433 1.228.64a8.454 8.454 0 001.453.39c.252.053.508.098.766.135.262.039.525.07.79.093.27.024.543.043.815.057.28.014.559.019.839.019s.56-.005.839-.019c.272-.014.544-.033.815-.057.265-.023.528-.054.79-.093.258-.037.514-.082.766-.135a8.454 8.454 0 001.453-.39 5.273 5.273 0 001.228-.64c.34-.238.61-.53.807-.872.196-.338.295-.723.295-1.148 0-.425-.099-.81-.295-1.148-.197-.342-.467-.634-.807-.872a5.273 5.273 0 00-1.228-.64 8.454 8.454 0 00-1.453-.39 11.71 11.71 0 00-.766-.135 15.68 15.68 0 00-.79-.093 17.48 17.48 0 00-.815-.057c-.28-.014-.559-.019-.839-.019zm11.058 0c-.28 0-.559.005-.839.019-.272.014-.543.033-.815.057-.264.023-.527.054-.79.093-.258.037-.513.082-.765.135a8.454 8.454 0 00-1.453.39 5.273 5.273 0 00-1.228.64c-.34.238-.61.53-.807.872-.197.338-.295.723-.295 1.148 0 .425.098.81.295 1.148.197.342.467.634.807.872.345.243.76.433 1.228.64a8.454 8.454 0 001.453.39c.252.053.507.098.765.135.263.039.526.07.79.093.272.024.543.043.815.057.28.014.56.019.839.019.28 0 .56-.005.839-.019.272-.014.543-.033.815-.057.265-.023.528-.054.79-.093.258-.037.514-.082.766-.135a8.454 8.454 0 001.453-.39 5.273 5.273 0 001.228-.64c.34-.238.61-.53.807-.872.196-.338.295-.723.295-1.148 0-.425-.099-.81-.295-1.148-.197-.342-.467-.634-.807-.872a5.273 5.273 0 00-1.228-.64 8.454 8.454 0 00-1.453-.39 11.71 11.71 0 00-.766-.135 15.68 15.68 0 00-.79-.093 17.48 17.48 0 00-.815-.057c-.28-.014-.559-.019-.839-.019zM17.997 2.033c-3.084 0-5.936 1.173-8.062 3.09L6.94 8.118a11.01 11.01 0 013.055-2.005c1.064-.503 2.24-.78 3.467-.78 1.227 0 2.403.277 3.467.78a11.01 11.01 0 013.055 2.005l-2.995-2.995c-2.126-1.917-4.978-3.09-8.062-3.09z"/>
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white font-semibold text-sm">AWS S3</span>
                    <span className="text-xs text-muted-foreground">Storage</span>
                  </div>
                </div>
              </div>

              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                Visually-stunning, easy to customize backend modules built with Express and Node.js. The perfect starting point for your next project and the ultimate resource for scaling fast.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="#templates-list"
                  className="inline-flex items-center justify-center bg-white/5 hover:bg-white/10 text-white px-6 py-3.5 rounded-lg font-semibold transition-colors border border-white/10"
                >
                  Browse modules
                </Link>
                {/* <a
                  href="/pricing"
                  className="inline-flex items-center justify-center bg-emerald-500 hover:bg-emerald-400 text-black px-6 py-3.5 rounded-lg font-semibold transition-all shadow-[0_0_30px_-10px_rgba(16,185,129,0.6)]"
                >
                  Get everything
                  <span className="ml-2 bg-emerald-600/50 px-2 py-0.5 rounded text-xs border border-emerald-400/30">
                    PRO
                  </span>
                </a> */}
              </div>
            </div>

            {/* Right: Video showcase - square cropped */}
            <div className="relative hidden lg:block">
              <div className="relative w-full max-w-md mx-auto transform transition-transform duration-700 ease-out hover:scale-[1.02]">
                {/* Main video card - square aspect ratio */}
                <div className="relative aspect-square bg-slate-900/80 rounded-xl border border-white/10 shadow-2xl overflow-hidden">
                  {/* Browser chrome */}
                  <div className="h-8 bg-slate-800/80 border-b border-white/5 flex items-center px-4 gap-2 relative z-10">
                    <div className="w-2 h-2 rounded-full bg-red-500/40"></div>
                    <div className="w-2 h-2 rounded-full bg-amber-500/40"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500/40"></div>
                  </div>
                  
                  {/* Video content - cropped to square */}
                  <div className="absolute inset-0 top-8">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    >
                      <source src="/template.mp4" type="video/mp4" />
                    </video>
                  </div>
                  
                  {/* Subtle overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
                </div>

                {/* Background card for depth */}
                <div className="absolute top-6 -left-6 w-full h-full aspect-square bg-slate-800/30 rounded-xl border border-white/5 shadow-xl -z-10"></div>
                
                {/* Glow effect */}
                <div className="absolute -inset-4 bg-emerald-500/10 blur-3xl -z-20 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <EmeraldGlowDivider />

      {/* Listings Section */}
      <div id="templates-list" className="container mx-auto px-4 py-16 ">
        <div className="flex flex-col md:flex-row gap-12 border-t border-white/10">
          {/* Sidebar Label */}
          <div className="hidden md:block w-12 pt-8 border-x border-white/10">
            <div className="sticky top-32 text-xs font-mono text-muted-foreground uppercase tracking-widest [writing-mode:vertical-lr] rotate-180 ml-4">
              Latest Templates
            </div>
          </div>

          {/* Templates List */}
          <div className="flex-1">
            {templates.map((template) => (
              <TemplateListItem key={template.id} template={template} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
