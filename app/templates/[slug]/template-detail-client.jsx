'use client';

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
import { templates } from '@/lib/templates-data';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Download } from 'lucide-react';
import ComponentViewer from '@/components/component-viewer';
import TemplateDownloadModal from '@/components/ui/template-download-modal';

export default function TemplateDetailClient({ params }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const slug = params.slug;
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

  // Structured Data for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: template.title,
    description: template.description,
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Node.js',
    softwareVersion: template.version,
    datePublished: '2025-11-20',
    dateModified: new Date().toISOString(),
    author: {
      '@type': 'Person',
      name: 'Sparsh Sharma',
      url: 'https://linkedin.com/in/sparshdev',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Backternity',
      url: 'https://backternity.dev',
      logo: {
        '@type': 'ImageObject',
        url: 'https://backternity.dev/logo.png',
      },
    },
    offers: {
      '@type': 'Offer',
      price: template.price === 'Free' ? '0' : template.price,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '124',
    },
    keywords: template.tags?.join(', '),
    programmingLanguage: 'JavaScript',
    url: `https://backternity.dev/templates/${template.slug}`,
  };

  // Breadcrumb Structured Data
  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://backternity.dev',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Templates',
        item: 'https://backternity.dev/templates',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: template.title,
        item: `https://backternity.dev/templates/${template.slug}`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />

      <div className="container mx-auto px-4">
        {/* Back Link with breadcrumb navigation */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <Link href="/templates" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Templates
          </Link>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content - Component Viewer */}
          <article className="lg:col-span-8 xl:col-span-9">
            <ComponentViewer component={componentData} />
          </article>

          {/* Sidebar - Actions & Quick Info */}
          <aside className="lg:col-span-4 xl:col-span-3 space-y-6" aria-label="Template information and download">
            <div className="sticky top-24">
              <div className="p-6 rounded-xl border border-white/10 bg-card/30 backdrop-blur-sm space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Get this Template</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Deploy this production-ready backend in minutes.
                  </p>
                  <Button 
                    onClick={() => setIsModalOpen(true)}
                    size="lg" 
                    className="w-full text-base font-semibold shadow-lg shadow-primary/20"
                  >
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
          </aside>
        </div>
      </div>

      {/* Download Modal */}
      <TemplateDownloadModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        template={template}
      />
    </div>
  );
}
