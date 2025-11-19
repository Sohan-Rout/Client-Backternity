import { notFound } from 'next/navigation';
import Link from 'next/link';
import { templates } from '@/lib/templates-data';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Download } from 'lucide-react';
import ComponentViewer from '@/components/component-viewer';

export async function generateStaticParams() {
  return templates.map((template) => ({
    slug: template.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const template = templates.find((t) => t.slug === slug);
  
  if (!template) {
    return { title: 'Template Not Found' };
  }

  return {
    title: `${template.title} | Backternity Templates`,
    description: template.description,
  };
}

export default async function TemplateDetailPage({ params }) {
  const { slug } = await params;
  const template = templates.find((t) => t.slug === slug);

  if (!template) {
    notFound();
  }

  // Adapt template data to ComponentViewer format
  const componentData = {
    ...template,
    name: template.title,
    type: template.category,
  };

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Back Link */}
        <Link href="/templates" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Templates
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content - Component Viewer */}
          <div className="lg:col-span-8 xl:col-span-9">
            <ComponentViewer component={componentData} />
          </div>

          {/* Sidebar - Actions & Quick Info */}
          <div className="lg:col-span-4 xl:col-span-3 space-y-6">
            <div className="sticky top-24">
              <div className="p-6 rounded-xl border border-white/10 bg-card/30 backdrop-blur-sm space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Get this Template</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Deploy this production-ready backend in minutes.
                  </p>
                  <Button size="lg" className="w-full text-base font-semibold shadow-lg shadow-primary/20">
                    <Download className="w-5 h-5 mr-2" />
                    Download Template
                  </Button>
                </div>

                <div className="space-y-4 pt-4 border-t border-white/10">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground text-sm">Price</span>
                    <span className="font-semibold text-emerald-400">{template.price}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground text-sm">Version</span>
                    <span className="font-mono text-sm">{template.version}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground text-sm">Category</span>
                    <span className="text-sm">{template.category}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground text-sm">Last Updated</span>
                    <span className="text-sm">Nov 2025</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <h4 className="font-medium mb-3 text-sm">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {template.techStack?.map((tech) => (
                      <div key={tech.name} className="text-xs px-2 py-1 rounded bg-secondary/50 text-muted-foreground border border-white/5">
                        {tech.name}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}