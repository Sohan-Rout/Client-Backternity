import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Check, ChevronLeft, ExternalLink, Download, Play, Code2, Zap, Shield } from 'lucide-react';
import { getTemplateBySlug, getAllTemplates } from '@/lib/templates-registry';

export async function generateStaticParams() {
  const templates = getAllTemplates();
  return templates.map((template) => ({
    slug: template.id,
  }));
}

export async function generateMetadata({ params }) {
  const template = getTemplateBySlug(params.slug);
  
  if (!template) {
    return {
      title: 'Template Not Found',
    };
  }

  return {
    title: `${template.name} - ${template.tagline} | Backternity`,
    description: template.description,
  };
}

export default function TemplateDetailPage({ params }) {
  const template = getTemplateBySlug(params.slug);

  if (!template) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#000000]">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#60a5fa_1px,transparent_1px),linear-gradient(to_bottom,#60a5fa_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-5 pointer-events-none"></div>
      
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="border-b border-slate-800 bg-black/50 backdrop-blur-sm sticky top-0 z-50">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link 
              href="/templates"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
            >
              <ChevronLeft size={20} />
              <span>Back to Templates</span>
            </Link>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="py-12 lg:py-20">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left: Content */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs px-3 py-1 rounded-full font-medium">
                      {template.category}
                    </span>
                    <span className="text-slate-500 text-sm">v{template.version}</span>
                  </div>
                  
                  <h1 className="text-5xl lg:text-6xl font-extrabold text-white">
                    {template.name}
                  </h1>
                  
                  <p className="text-xl text-slate-400">
                    {template.tagline}
                  </p>
                </div>

                <p className="text-lg text-slate-300 leading-relaxed">
                  {template.longDescription}
                </p>

                {/* Pricing & CTA */}
                <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 space-y-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-white">₹{template.price.toLocaleString()}</span>
                    <span className="text-slate-500">one-time payment</span>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button className="flex-1 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold py-4 px-6 rounded-lg transition-all shadow-[0_0_30px_-10px_rgba(16,185,129,0.6)] flex items-center justify-center gap-2">
                      <Download size={20} />
                      Purchase Template
                    </button>
                    <button className="flex-1 bg-slate-800 hover:bg-slate-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors flex items-center justify-center gap-2">
                      <Play size={20} />
                      Live Preview
                    </button>
                  </div>

                  <div className="pt-4 border-t border-slate-800">
                    <p className="text-sm text-slate-400 text-center">
                      or get it free with{' '}
                      <Link href="/pricing" className="text-emerald-400 hover:text-emerald-300 font-semibold">
                        Backternity Plus
                      </Link>
                    </p>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-slate-900/30 border border-slate-800 rounded-lg">
                    <div className="flex justify-center mb-2">
                      <Code2 className="text-emerald-400" size={24} />
                    </div>
                    <div className="text-2xl font-bold text-white">{template.techStack.length}</div>
                    <div className="text-xs text-slate-500">Technologies</div>
                  </div>
                  <div className="text-center p-4 bg-slate-900/30 border border-slate-800 rounded-lg">
                    <div className="flex justify-center mb-2">
                      <Zap className="text-emerald-400" size={24} />
                    </div>
                    <div className="text-2xl font-bold text-white">{template.features.length}</div>
                    <div className="text-xs text-slate-500">Features</div>
                  </div>
                  <div className="text-center p-4 bg-slate-900/30 border border-slate-800 rounded-lg">
                    <div className="flex justify-center mb-2">
                      <Shield className="text-emerald-400" size={24} />
                    </div>
                    <div className="text-2xl font-bold text-white">6mo</div>
                    <div className="text-xs text-slate-500">Updates</div>
                  </div>
                </div>
              </div>

              {/* Right: Preview */}
              <div className="lg:sticky lg:top-24">
                <div className="relative aspect-[4/3] bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-2xl">
                  {/* Browser Chrome */}
                  <div className="h-10 bg-slate-800 border-b border-slate-700 flex items-center px-4 gap-2">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="flex-1 flex justify-center">
                      <div className="bg-slate-900 px-4 py-1 rounded-md text-xs text-slate-400">
                        {template.demoUrl}
                      </div>
                    </div>
                  </div>
                  
                  {/* Preview Content */}
                  <div className="p-8 bg-gradient-to-br from-slate-900 to-slate-800 h-full flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="w-24 h-24 mx-auto rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center">
                        <span className="text-4xl font-bold text-emerald-400">{template.name[0]}</span>
                      </div>
                      <div className="text-white font-semibold text-xl">{template.name}</div>
                      <div className="text-slate-400 text-sm">Template Preview</div>
                    </div>
                  </div>
                  
                  {/* Overlay Badge */}
                  <div className="absolute top-16 right-6">
                    <div className="bg-emerald-500/20 backdrop-blur-sm border border-emerald-500/30 text-emerald-300 text-xs px-3 py-2 rounded-lg font-medium flex items-center gap-2">
                      <ExternalLink size={14} />
                      Click to view live demo
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 border-t border-slate-800">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">What's Included</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Features List */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Features</h3>
                  <div className="space-y-3">
                    {template.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="flex-shrink-0 mt-0.5">
                          <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
                            <Check size={12} className="text-emerald-400" />
                          </div>
                        </div>
                        <span className="text-slate-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* What You Get */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Package Includes</h3>
                  <div className="space-y-3">
                    {template.included.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="flex-shrink-0 mt-0.5">
                          <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
                            <Check size={12} className="text-emerald-400" />
                          </div>
                        </div>
                        <span className="text-slate-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="py-16 border-t border-slate-800">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Tech Stack</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {template.techStack.map((tech, idx) => (
                <div 
                  key={idx}
                  className="bg-slate-900/50 border border-slate-800 rounded-lg p-6 text-center hover:border-emerald-500/50 transition-colors"
                >
                  <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-slate-800 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-slate-700"></div>
                  </div>
                  <div className="text-white font-semibold">{tech.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Documentation Preview */}
        <section className="py-16 border-t border-slate-800">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Quick Start</h2>
            
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8 space-y-6">
              <div className="prose prose-invert max-w-none">
                <h3 className="text-xl font-semibold text-white mb-4">Installation</h3>
                <div className="bg-black/50 border border-slate-700 rounded-lg p-4 font-mono text-sm text-emerald-400">
                  {template.installation}
                </div>
              </div>

              {template.documentation?.quickStart && (
                <div className="prose prose-invert max-w-none">
                  <pre className="bg-black/50 border border-slate-700 rounded-lg p-6 overflow-x-auto">
                    <code className="text-slate-300 text-sm">
                      {template.documentation.quickStart}
                    </code>
                  </pre>
                </div>
              )}

              <div className="pt-4 border-t border-slate-800">
                <p className="text-slate-400 text-sm">
                  Complete documentation included with purchase, covering setup, customization, deployment, and more.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 border-t border-slate-800">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-emerald-900/20 to-teal-900/20 border border-emerald-500/30 rounded-2xl p-12 text-center space-y-6">
              <h2 className="text-4xl font-bold text-white">Ready to Get Started?</h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Purchase {template.name} now and start building your project today. Includes lifetime access and 6 months of updates.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="bg-emerald-500 hover:bg-emerald-400 text-white font-semibold py-4 px-8 rounded-lg transition-all shadow-[0_0_30px_-10px_rgba(16,185,129,0.6)] flex items-center gap-2">
                  <Download size={20} />
                  Purchase for ₹{template.price.toLocaleString()}
                </button>
                <Link 
                  href="/templates"
                  className="bg-slate-800 hover:bg-slate-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors"
                >
                  Browse More Templates
                </Link>
              </div>

              <div className="pt-6">
                <p className="text-sm text-slate-400">
                  Need all templates?{' '}
                  <Link href="/pricing" className="text-emerald-400 hover:text-emerald-300 font-semibold">
                    Get Backternity Plus
                  </Link>
                  {' '}and save big.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
