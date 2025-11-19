/**
 * Backternity Gallery Registry
 *
 * Complete backend projects and bundles ready to deploy.
 * These are full-featured, production-ready applications that can be installed as complete systems.
 */

const GalleryRegistry = {
  "image-generation-backend": {
    name: "AI Image Generation Backend",
    description:
      "Production-grade AI Image Generation API with Fal.AI integration, Clerk authentication, dual payment processing (Stripe + Razorpay), S3 storage, model training, and credit management system.",
    type: "ai-project",
    version: "1.0.0",
    tags: ["ai", "image-generation", "fal-ai", "stripe", "razorpay", "clerk", "s3", "prisma", "payments", "webhooks"],
    
    documentation: {
      overview: `A production-ready backend for AI image generation applications using Fal.AI Flux LoRA models.
Supports custom model training with user-provided datasets.
Includes Clerk authentication with JWT verification.
Dual payment processing (Stripe for international, Razorpay for India).
Credit-based billing system with subscription management.
S3 integration for storing training data.
Complete webhook handlers for Fal.AI, Stripe, and Clerk.
Transaction tracking and subscription management.
Pack-based bulk image generation for efficiency.
Built with scalability, security, and cost optimization in mind.`,

      installation: "npx backternity@latest add image-generation",

      commandDetails: {
        purpose:
          "Sets up a complete AI image generation backend with Fal.AI integration, authentication, payments, storage, and credit management.",
        creates: [
          "/src/middleware/auth.middleware.ts – Clerk JWT authentication with email extraction.",
          "/src/models/BaseModel.ts – Base model class for AI operations.",
          "/src/models/FalAIModel.ts – Fal.AI integration (training, generation, sync generation).",
          "/src/services/payment.service.ts – Complete payment handling (Stripe + Razorpay), credit management.",
          "/src/routes/payment.routes.ts – 10 payment endpoints (create, verify, credits, subscriptions, transactions).",
          "/src/routes/webhook.routes.ts – Clerk webhook handler for user synchronization.",
          "/src/types.d.ts – TypeScript type definitions for Express extensions.",
          "/src/prisma.ts – Prisma client setup for database operations.",
          "/.env.example – All 15 required environment variables with descriptions.",
        ],
        modifies: [
          "server.js – Mounts /payment and /api/webhook routes, adds CORS configuration.",
          ".env – Adds Fal.AI, Clerk, Stripe, Razorpay, and S3 credentials.",
          "package.json – Installs 11 production dependencies (express, fal-ai, clerk, stripe, razorpay, prisma, etc.).",
        ],
      },

      configuration: `# Environment Variables Configuration

# Fal.AI Configuration
FAL_KEY=""                    # Your Fal.AI API key for image generation
WEBHOOK_BASE_URL=""           # Your public webhook URL (e.g., https://your-domain.com)

# S3 Storage Configuration (for training data)
S3_ACCESS_KEY=""              # AWS S3 access key
S3_SECRET_KEY=""              # AWS S3 secret key
BUCKET_NAME=""                # S3 bucket name for storing training datasets
ENDPOINT=""                   # S3 endpoint URL

# Clerk Authentication
CLERK_JWT_PUBLIC_KEY=""       # Clerk JWT public key for token verification
CLERK_ISSUER=""               # Clerk issuer URL (e.g., https://your-clerk-domain.com)
SIGNING_SECRET=""             # Clerk signing secret for webhook verification

# Payment Gateways
STRIPE_SECRET_KEY=""          # Stripe secret key for international payments
STRIPE_WEBHOOK_SECRET=""      # Stripe webhook secret for signature verification
RAZORPAY_KEY_ID=""            # Razorpay key ID for Indian payments
RAZORPAY_KEY_SECRET=""        # Razorpay key secret

# Application Settings
FRONTEND_URL=""               # Your frontend URL for payment redirects
PORT=8080                     # Server port (default: 8080)

# Database (Required: Prisma with PostgreSQL/MySQL)
DATABASE_URL=""               # Prisma database connection string`,

      prismaSchema: `# Prisma Schema (Required Models)
# Add these models to your schema.prisma file:

model User {
  id              String   @id @default(cuid())
  clerkId         String   @unique
  email           String   @unique
  name            String?
  profilePicture  String?
  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt
}

model Model {
  id              String   @id @default(cuid())
  name            String
  type            String
  age             Int?
  ethinicity      String?
  eyeColor        String?
  bald            Boolean?
  userId          String
  zipUrl          String
  tensorPath      String?
  thumbnail       String?
  falAiRequestId  String   @unique
  trainingStatus  String   @default("Pending")
  open            Boolean  @default(false)
  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt
}

model OutputImages {
  id             String   @id @default(cuid())
  prompt         String
  userId         String
  modelId        String
  imageUrl       String
  falAiRequestId String   @unique
  status         String   @default("Pending")
  createdAt      DateTime @default(now())
  updatedAt      DateTime @updatedAt
}

model UserCredit {
  id        String   @id @default(cuid())
  userId    String   @unique
  amount    Int      @default(0)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

enum PlanType {
  basic
  premium
}

model Subscription {
  id         String   @id @default(cuid())
  userId     String
  plan       PlanType
  paymentId  String
  orderId    String   @unique
  createdAt  DateTime @default(now())
  updatedAt  DateTime @updatedAt
}

model Transaction {
  id         String   @id @default(cuid())
  userId     String
  amount     Int
  currency   String
  paymentId  String
  orderId    String
  plan       PlanType
  status     String
  createdAt  DateTime @default(now())
  updatedAt  DateTime @updatedAt
}

model Packs {
  id          String   @id @default(cuid())
  name        String
  description String
  thumbnail   String
  createdAt   DateTime @default(now())
}

model PackPrompts {
  id        String   @id @default(cuid())
  packId    String
  prompt    String
  createdAt DateTime @default(now())
}`,

      frontendUsage: {
        overview:
          "Here's an example of integrating AI image generation with a Next.js frontend using React hooks and the Clerk authentication system. All endpoints require Bearer token authentication.",
        endpoints: [
          {
            route: "/pre-signed-url",
            method: "GET",
            description: "Generate S3 pre-signed URL for uploading training data (ZIP file).",
            contentType: "none",
            sampleResponse: {
              url: "https://s3.amazonaws.com/your-bucket/models/1234567890_0.123.zip?signature=...",
              key: "models/1234567890_0.123.zip"
            }
          },
          {
            route: "/ai/training",
            method: "POST",
            description: "Submit a model training request with user-uploaded images.",
            contentType: "application/json",
            sampleRequest: {
              zipUrl: "https://s3.amazonaws.com/your-bucket/training-data.zip",
              name: "trigger_word",
              type: "person",
              age: 25,
              ethinicity: "asian",
              eyeColor: "brown",
              bald: false
            },
            sampleResponse: {
              modelId: "clxxx123456789"
            }
          },
          {
            route: "/ai/generate",
            method: "POST",
            description: "Generate a single AI image from a trained model (costs 1 credit).",
            contentType: "application/json",
            sampleRequest: {
              modelId: "clxxx123456789",
              prompt: "a photo of trigger_word in paris wearing a red dress"
            },
            sampleResponse: {
              imageId: "clyyy987654321"
            }
          },
          {
            route: "/pack/generate",
            method: "POST",
            description: "Generate multiple images from a prompt pack (bulk generation).",
            contentType: "application/json",
            sampleRequest: {
              packId: "clzzz111222333",
              modelId: "clxxx123456789"
            },
            sampleResponse: {
              images: ["clyyy001", "clyyy002", "clyyy003"]
            }
          },
          {
            route: "/models",
            method: "GET",
            description: "Get all AI models (both user's custom models and public models).",
            contentType: "none",
            sampleResponse: {
              models: [
                {
                  id: "clxxx123",
                  name: "my_model",
                  trainingStatus: "Generated",
                  thumbnail: "https://fal.media/...",
                  tensorPath: "https://..."
                }
              ]
            }
          },
          {
            route: "/model/status/:modelId",
            method: "GET",
            description: "Check the training status of a specific model.",
            contentType: "none",
            sampleResponse: {
              success: true,
              model: {
                id: "clxxx123",
                name: "my_model",
                status: "Generated",
                thumbnail: "https://fal.media/...",
                createdAt: "2025-11-18T10:00:00Z",
                updatedAt: "2025-11-18T10:15:00Z"
              }
            }
          },
          {
            route: "/image/bulk",
            method: "GET",
            description: "Get multiple generated images by IDs with pagination support.",
            contentType: "none",
            sampleResponse: {
              images: [
                {
                  id: "clyyy001",
                  imageUrl: "https://fal.media/generated-image.jpg",
                  prompt: "a photo of trigger_word in paris",
                  status: "Generated",
                  createdAt: "2025-11-18T10:20:00Z"
                }
              ]
            }
          },
          {
            route: "/pack/bulk",
            method: "GET",
            description: "Get all available prompt packs for bulk generation.",
            contentType: "none",
            sampleResponse: {
              packs: [
                {
                  id: "pack1",
                  name: "Professional Headshots",
                  description: "Corporate style professional headshot prompts",
                  thumbnail: "https://..."
                }
              ]
            }
          },
          {
            route: "/payment/create",
            method: "POST",
            description: "Create a payment session for credit purchase (Stripe or Razorpay).",
            contentType: "application/json",
            sampleRequest: {
              plan: "basic",
              method: "stripe",
              isAnnual: false
            },
            sampleResponse: {
              sessionId: "cs_test_a1b2c3d4e5f6g7h8i9j0"
            }
          },
          {
            route: "/payment/stripe/verify",
            method: "POST",
            description: "Verify Stripe payment completion and add credits to account.",
            contentType: "application/json",
            sampleRequest: {
              sessionId: "cs_test_a1b2c3d4e5f6g7h8i9j0"
            },
            sampleResponse: {
              success: true
            }
          },
          {
            route: "/payment/razorpay/verify",
            method: "POST",
            description: "Verify Razorpay payment signature and add credits to account.",
            contentType: "application/json",
            sampleRequest: {
              razorpay_payment_id: "pay_abc123xyz",
              razorpay_order_id: "order_xyz789abc",
              razorpay_signature: "1a2b3c4d5e6f...",
              plan: "basic"
            },
            sampleResponse: {
              success: true,
              credits: 500,
              subscription: {
                id: "sub_123",
                plan: "basic"
              }
            }
          },
          {
            route: "/payment/credits",
            method: "GET",
            description: "Get user's current credit balance.",
            contentType: "none",
            sampleResponse: {
              credits: 450,
              lastUpdated: "2025-11-18T10:00:00Z"
            }
          },
          {
            route: "/payment/transactions",
            method: "GET",
            description: "Get all payment transactions for the authenticated user.",
            contentType: "none",
            sampleResponse: {
              transactions: [
                {
                  id: "txn_123",
                  amount: 4000,
                  currency: "INR",
                  plan: "basic",
                  status: "SUCCESS",
                  createdAt: "2025-11-18T09:00:00Z"
                }
              ]
            }
          }
        ],
        example: `// app/components/AIImageGenerator.jsx
'use client';
import { useState, useEffect } from 'react';
import { useAuth } from '@clerk/nextjs';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';

export default function AIImageGenerator() {
  const { getToken } = useAuth();
  const [modelId, setModelId] = useState('');
  const [models, setModels] = useState([]);
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [credits, setCredits] = useState(0);
  const [error, setError] = useState(null);

  // Fetch user's models and credits on mount
  useEffect(() => {
    loadInitialData();
  }, []);

  async function loadInitialData() {
    try {
      const token = await getToken();
      
      // Fetch models
      const modelsRes = await fetch(\`\${API_BASE_URL}/models\`, {
        headers: { Authorization: \`Bearer \${token}\` },
      });
      const modelsData = await modelsRes.json();
      setModels(modelsData.models || []);
      if (modelsData.models?.length > 0) {
        setModelId(modelsData.models[0].id);
      }

      // Fetch credits
      const creditsRes = await fetch(\`\${API_BASE_URL}/payment/credits\`, {
        headers: { Authorization: \`Bearer \${token}\` },
      });
      const creditsData = await creditsRes.json();
      setCredits(creditsData.credits || 0);
    } catch (err) {
      console.error('Failed to load initial data:', err);
    }
  }

  async function handleGenerate(e) {
    e.preventDefault();
    setError(null);

    if (!prompt.trim()) {
      setError('Please enter a prompt');
      return;
    }

    if (!modelId) {
      setError('Please select a model');
      return;
    }

    if (credits < 1) {
      setError('Insufficient credits. Please purchase more.');
      return;
    }

    setLoading(true);
    setImageUrl('');

    try {
      const token = await getToken();

      // Generate image (costs 1 credit)
      const generateRes = await fetch(\`\${API_BASE_URL}/ai/generate\`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: \`Bearer \${token}\`,
        },
        body: JSON.stringify({ modelId, prompt }),
      });

      const generateData = await generateRes.json();

      if (!generateRes.ok) {
        throw new Error(generateData.message || 'Generation failed');
      }

      const imageId = generateData.imageId;

      // Poll for result (Fal.AI processes asynchronously)
      const pollInterval = setInterval(async () => {
        try {
          const imageRes = await fetch(
            \`\${API_BASE_URL}/image/bulk?ids[]=\${imageId}\`,
            {
              headers: { Authorization: \`Bearer \${token}\` },
            }
          );
          const imageData = await imageRes.json();
          const image = imageData.images?.[0];

          if (image?.status === 'Generated') {
            setImageUrl(image.imageUrl);
            setLoading(false);
            setCredits((prev) => prev - 1);
            clearInterval(pollInterval);
          } else if (image?.status === 'Failed') {
            setError('Image generation failed. Please try again.');
            setLoading(false);
            clearInterval(pollInterval);
          }
        } catch (err) {
          console.error('Polling error:', err);
        }
      }, 3000); // Check every 3 seconds

      // Timeout after 2 minutes
      setTimeout(() => {
        clearInterval(pollInterval);
        if (loading) {
          setLoading(false);
          setError('Generation timeout. Please check your history.');
        }
      }, 120000);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-black/20 border border-white/10 rounded-xl text-white space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">AI Image Generator</h2>
        <div className="text-sm bg-emerald-500/20 border border-emerald-500/30 px-3 py-1 rounded-full">
          Credits: <span className="font-bold">{credits}</span>
        </div>
      </div>

      <form onSubmit={handleGenerate} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Select Model</label>
          <select
            value={modelId}
            onChange={(e) => setModelId(e.target.value)}
            className="w-full px-3 py-2 rounded-md bg-white/10 border border-white/20 focus:outline-none focus:border-emerald-500"
            disabled={loading || models.length === 0}
          >
            {models.length === 0 ? (
              <option>No models available</option>
            ) : (
              models.map((model) => (
                <option key={model.id} value={model.id}>
                  {model.name} ({model.trainingStatus})
                </option>
              ))
            )}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Image Prompt</label>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe the image you want to generate..."
            className="w-full px-3 py-2 rounded-md bg-white/10 border border-white/20 focus:outline-none focus:border-emerald-500"
            rows={4}
            disabled={loading}
            required
          />
          <p className="text-xs text-white/60 mt-1">
            Use your model's trigger word in the prompt for best results
          </p>
        </div>

        <button
          type="submit"
          disabled={loading || credits < 1 || !modelId}
          className="w-full bg-emerald-500 hover:bg-emerald-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-md transition-colors"
        >
          {loading ? 'Generating...' : 'Generate Image (1 Credit)'}
        </button>
      </form>

      {error && (
        <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-300">
          {error}
        </div>
      )}

      {loading && (
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-500 mx-auto"></div>
          <p className="mt-4 text-white/70">AI is generating your image...</p>
          <p className="text-sm text-white/50 mt-2">This usually takes 30-60 seconds</p>
        </div>
      )}

      {imageUrl && (
        <div className="mt-6 space-y-3">
          <img
            src={imageUrl}
            alt="Generated"
            className="w-full rounded-lg shadow-2xl border border-white/10"
          />
          <div className="flex gap-2">
            <a
              href={imageUrl}
              download
              className="flex-1 text-center bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium py-2 rounded-md transition-colors"
            >
              Download Image
            </a>
            <button
              onClick={() => {
                setImageUrl('');
                setPrompt('');
              }}
              className="flex-1 bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/30 text-emerald-300 font-medium py-2 rounded-md transition-colors"
            >
              Generate Another
            </button>
          </div>
        </div>
      )}
    </div>
  );
}`,
      },

      usage: `// server.js - Main application setup
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { fal } from '@fal-ai/client';

// Import routes
import paymentRoutes from './routes/payment.routes';
import { router as webhookRouter } from './routes/webhook.routes';
import { authMiddleware } from './middleware/auth.middleware';
import { FalAIModel } from './models/FalAIModel';
import { prismaClient } from './prisma';

dotenv.config();

// Configure Fal.AI
fal.config({
  credentials: process.env.FAL_KEY,
});

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors({
  origin: ['http://localhost:3000', process.env.FRONTEND_URL],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(express.json());

// Initialize Fal.AI Model
const falAiModel = new FalAIModel();

// Routes (Protected with authMiddleware)
app.use('/payment', authMiddleware, paymentRoutes);
app.use('/api/webhook', webhookRouter); // Webhooks don't need auth

// Image Generation Routes
app.post('/ai/training', authMiddleware, async (req, res) => {
  try {
    const { zipUrl, name, type, age, ethinicity, eyeColor, bald } = req.body;
    
    const { request_id } = await falAiModel.trainModel(zipUrl, name);
    
    const model = await prismaClient.model.create({
      data: {
        name,
        type,
        age,
        ethinicity,
        eyeColor,
        bald,
        userId: req.userId!,
        zipUrl,
        falAiRequestId: request_id,
      },
    });
    
    res.json({ modelId: model.id });
  } catch (error) {
    console.error('Training error:', error);
    res.status(500).json({ message: 'Training failed' });
  }
});

app.post('/ai/generate', authMiddleware, async (req, res) => {
  try {
    const { modelId, prompt } = req.body;
    
    const model = await prismaClient.model.findUnique({
      where: { id: modelId },
    });
    
    if (!model || !model.tensorPath) {
      res.status(404).json({ message: 'Model not found' });
      return;
    }
    
    // Check credits
    const credits = await prismaClient.userCredit.findUnique({
      where: { userId: req.userId! },
    });
    
    if ((credits?.amount ?? 0) < 1) {
      res.status(402).json({ message: 'Insufficient credits' });
      return;
    }
    
    const { request_id } = await falAiModel.generateImage(prompt, model.tensorPath);
    
    const image = await prismaClient.outputImages.create({
      data: {
        prompt,
        userId: req.userId!,
        modelId,
        imageUrl: '',
        falAiRequestId: request_id,
      },
    });
    
    // Deduct credit
    await prismaClient.userCredit.update({
      where: { userId: req.userId! },
      data: { amount: { decrement: 1 } },
    });
    
    res.json({ imageId: image.id });
  } catch (error) {
    console.error('Generation error:', error);
    res.status(500).json({ message: 'Generation failed' });
  }
});

app.get('/models', authMiddleware, async (req, res) => {
  const models = await prismaClient.model.findMany({
    where: { userId: req.userId },
  });
  res.json({ models });
});

// Start server
app.listen(PORT, () => {
  console.log(\`🚀 AI Image Generation Backend running on port \${PORT}\`);
});`,

    },
  },
};

export default GalleryRegistry;
  