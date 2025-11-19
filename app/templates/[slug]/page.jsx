import { templates } from '@/lib/templates-data';
import TemplateDetailClient from './template-detail-client';

export async function generateStaticParams() {
  return templates.map((template) => ({
    slug: template.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const template = templates.find((t) => t.slug === slug);
  
  if (!template) {
    return {
      title: 'Template Not Found | Backternity',
      description: 'The requested template could not be found.',
    };
  }

  const techStackNames = template.techStack?.map(t => t.name).join(', ') || '';
  const tagsString = template.tags?.join(', ') || '';

  return {
    title: `${template.title} - ${template.category} Template | Backternity`,
    description: `${template.description} Download this production-ready ${template.category.toLowerCase()} template with ${techStackNames}. Backend template for Express.js developers.`,
    keywords: [
      template.title.toLowerCase(),
      template.category.toLowerCase(),
      ...template.tags || [],
      'backend template',
      'express.js template',
      'production ready',
      'free backend template',
      'nodejs template',
      'backend boilerplate',
      techStackNames.toLowerCase()
    ],
    authors: [{ name: 'Sparsh Sharma', url: 'https://linkedin.com/in/sparshdev' }],
    creator: 'Sparsh Sharma',
    publisher: 'Backternity',
    alternates: {
      canonical: `https://backternity.dev/templates/${slug}`
    },
    openGraph: {
      title: `${template.title} - ${template.category} Template`,
      description: template.description,
      url: `https://backternity.dev/templates/${slug}`,
      siteName: 'Backternity',
      images: [
        {
          url: `https://backternity.dev/og-template-${slug}.png`,
          width: 1200,
          height: 630,
          alt: `${template.title} - Backend Template`,
        },
      ],
      locale: 'en_US',
      type: 'article',
      publishedTime: '2025-11-20T00:00:00.000Z',
      modifiedTime: new Date().toISOString(),
      authors: ['Sparsh Sharma'],
      tags: template.tags || [],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${template.title} - ${template.category} Template`,
      description: template.description,
      images: [`https://backternity.dev/og-template-${slug}.png`],
      creator: '@backternity',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    category: template.category,
    classification: 'Backend Development Template',
    other: {
      'article:tag': tagsString,
      'product:price:amount': template.price === 'Free' ? '0' : template.price,
      'product:price:currency': 'USD',
    },
  };
}

export default async function TemplateDetailPage({ params }) {
  return <TemplateDetailClient params={await params} />;
}