'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const TemplateShowcaseItem = ({ template, index }) => {
  return (
    <div className="border-b border-slate-800 last:border-b-0">
      <div className="grid lg:grid-cols-[1fr_2fr] gap-8 lg:gap-16 py-16 lg:py-24">
        {/* Left Column: Info */}
        <div className="space-y-6 flex flex-col justify-center">
          <div className="space-y-4">
            <div>
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-2">
                {template.name}
              </h3>
              <p className="text-slate-500 font-medium">{template.tagline}</p>
            </div>
            
            <p className="text-slate-400 text-lg leading-relaxed">
              {template.description}
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-bold text-white">₹{template.price.toLocaleString()}</span>
              <span className="text-slate-500 text-sm">or included with Tailwind Plus</span>
            </div>

            <Link 
              href={`/templates/${template.id}`}
              className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors group"
            >
              Learn more
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Right Column: Preview Images */}
        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            {/* Large preview images in 2x2 grid */}
            {[1, 2].map((num) => (
              <Link
                key={num}
                href={`/templates/${template.id}`}
                className="group relative aspect-[4/3] bg-slate-900 border border-slate-800 rounded-lg overflow-hidden hover:border-emerald-500/50 transition-all hover:shadow-[0_0_20px_-5px_rgba(16,185,129,0.3)]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                  <div className="text-center space-y-2 opacity-50 group-hover:opacity-70 transition-opacity">
                    <div className="w-12 h-12 mx-auto rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center">
                      <span className="text-lg font-bold text-slate-600">{num}</span>
                    </div>
                    <div className="text-xs text-slate-600">Preview {num}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function TemplatesShowcase({ templates }) {
  return (
    <section className="relative bg-[#000000] overflow-hidden">
      {/* Background Grid */}
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Label */}
        <div className="py-12 border-b border-slate-800">
          <p className="text-slate-500 font-semibold tracking-wider text-sm uppercase">
            TEMPLATES
          </p>
        </div>

        {/* Templates List - Vertical Stack */}
        <div>
            
          {templates.map((template, index) => (
            <TemplateShowcaseItem 
              key={template.id} 
              template={template} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
