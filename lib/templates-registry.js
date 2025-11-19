/**
 * Backternity Templates Registry
 * 
 * Full backend module templates ready to deploy.
 */

import GalleryRegistry from './gallery-registry.js';

const TemplatesRegistry = {
  "image-generation-backend": {
    id: "image-generation-backend",
    name: "AI Image Generation Backend",
    tagline: "Complete AI image generation system",
    description: "Production-grade AI Image Generation API with Fal.AI integration, Clerk authentication, dual payment processing (Stripe + Razorpay), S3 storage, model training, and credit management system.",
    longDescription: "A complete, production-ready backend for AI image generation applications using Fal.AI Flux LoRA models. Includes everything you need: custom model training, authentication, dual payment gateways, credit management, S3 storage, and comprehensive webhook handlers. Built with scalability, security, and cost optimization in mind.",
    price: 2800,
    type: "ai-backend",
    category: "AI & Machine Learning",
    version: "1.0.0",
    demoUrl: "https://image-gen-demo.backternity.com",
    tags: ["ai", "image-generation", "fal-ai", "stripe", "razorpay", "clerk", "s3", "prisma", "payments", "webhooks"],
    
    features: [
      "Fal.AI Flux LoRA integration",
      "Custom model training with datasets",
      "Clerk JWT authentication",
      "Dual payment processing (Stripe + Razorpay)",
      "Credit-based billing system",
      "S3 storage integration",
      "Complete webhook handlers",
      "Transaction tracking",
      "Subscription management",
      "Pack-based bulk generation",
      "Prisma database integration",
      "TypeScript support"
    ],
    
    techStack: [
      { name: "Node.js", icon: "nodejs" },
      { name: "Express", icon: "express" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Fal.AI", icon: "ai" },
      { name: "Clerk", icon: "clerk" },
      { name: "Stripe", icon: "stripe" },
      { name: "Razorpay", icon: "razorpay" },
      { name: "Prisma", icon: "prisma" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "AWS S3", icon: "aws" }
    ],
    
    screenshots: [
      "/gallery/image-gen/preview-1.jpg",
      "/gallery/image-gen/preview-2.jpg",
      "/gallery/image-gen/preview-3.jpg",
      "/gallery/image-gen/preview-4.jpg"
    ],
    
    included: [
      "Complete source code",
      "13 API endpoints",
      "Authentication middleware",
      "Payment service layer",
      "Webhook handlers",
      "Prisma schema",
      "TypeScript types",
      "Environment setup",
      "Full documentation",
      "6 months of updates",
      "Priority email support"
    ],
    
    installation: "npx backternity@latest add image-generation",
    
    // Import full documentation from gallery registry
    documentation: GalleryRegistry["image-generation-backend"].documentation
  }
};

export default TemplatesRegistry;

// Helper function to get all templates
export function getAllTemplates() {
  return Object.values(TemplatesRegistry);
}

// Helper function to get template by slug
export function getTemplateBySlug(slug) {
  return TemplatesRegistry[slug] || null;
}

// Helper function to get templates by category
export function getTemplatesByCategory(category) {
  return Object.values(TemplatesRegistry).filter(
    template => template.category === category
  );
}

// Helper function to get all categories
export function getAllCategories() {
  const categories = new Set();
  Object.values(TemplatesRegistry).forEach(template => {
    categories.add(template.category);
  });
  return Array.from(categories);
}
