export const templates = [
  {
    id: 'auth-backend',
    slug: 'auth-backend',
    title: 'Enterprise Authentication Backend',
    description: 'Production-ready authentication backend with JWT tokens, MFA support, role-based access control, password reset flows, audit logging, rate limiting, and comprehensive security features.',
    price: 'Free',
    category: 'Authentication & Security',
    version: '1.0.0',
    downloadUrl: 'https://templates.backternity.dev/custom_templates/enterprise_authentication.zip',
    tags: ["authentication", "jwt", "mfa", "rbac", "security", "mongodb", "redis", "express", "typescript", "oauth", "totp", "argon2"],
    techStack: [
      { name: 'Express.js', icon: 'SiExpress' },
      { name: 'TypeScript', icon: 'SiTypescript' },
      { name: 'MongoDB', icon: 'SiMongodb' },
      { name: 'Mongoose', icon: 'SiMongodb' },
      { name: 'Redis', icon: 'SiRedis' },
      { name: 'JWT', icon: 'SiJsonwebtokens' },
      { name: 'Argon2', icon: 'SiAuth0' },
      { name: 'Docker', icon: 'SiDocker' },
    ],
    features: [
      {
        title: "JWT Authentication",
        description: "Secure access & refresh token system with automatic rotation and Redis blacklisting.",
        icon: "SiJsonwebtokens"
      },
      {
        title: "Multi-Factor Authentication",
        description: "TOTP-based 2FA with QR code setup and backup codes for enhanced security.",
        icon: "SiAuth0"
      },
      {
        title: "Role-Based Access Control",
        description: "Granular permission system with admin/user roles and middleware protection.",
        icon: "SiShield"
      }
    ],
    documentation: {
      overview: `A production-ready authentication backend built with Express.js and TypeScript.
Supports JWT access & refresh tokens with automatic rotation.
TOTP-based Multi-Factor Authentication with QR code generation.
Role-based access control (RBAC) with admin and user roles.
Comprehensive password security with Argon2 hashing.
Redis-powered rate limiting and token blacklisting.
Email verification and password reset flows.
Complete audit logging for security events.
MongoDB integration with Mongoose ODM.
OAuth2 ready (Google/GitHub integration stubs).
Comprehensive Swagger API documentation.
Docker containerization for easy deployment.
Built with security-first approach and production scalability.`,

      // installation: "npx backternity@latest add auth-backend",

      commandDetails: {
        purpose:
          "Sets up a complete enterprise-grade authentication system with JWT tokens, MFA, RBAC, security features, and audit logging.",
        creates: [
          "/src/config/env.ts – Environment configuration with Zod validation.",
          "/src/models/User.ts – User schema with roles, MFA settings, and security fields.",
          "/src/models/AuditLog.ts – Security audit logging for critical actions.",
          "/src/services/auth.service.ts – Core authentication logic (register, login, password management).",
          "/src/services/token.service.ts – JWT token generation, validation, and refresh mechanisms.",
          "/src/services/mfa.service.ts – TOTP setup, verification, and QR code generation.",
          "/src/services/email.service.ts – Email verification and password reset notifications.",
          "/src/services/audit.service.ts – Security event logging and tracking.",
          "/src/controllers/auth.controller.ts – Authentication endpoint handlers.",
          "/src/controllers/user.controller.ts – User management and profile operations.",
          "/src/middlewares/auth.middleware.ts – JWT token validation and user extraction.",
          "/src/middlewares/rbac.middleware.ts – Role-based access control enforcement.",
          "/src/middlewares/rateLimit.ts – Redis-backed rate limiting protection.",
          "/src/middlewares/validate.ts – Request validation using Zod schemas.",
          "/src/routes/auth.routes.ts – Complete authentication API routes with Swagger docs.",
          "/src/routes/user.routes.ts – User management routes with admin controls.",
          "/src/utils/logger.ts – Winston logging configuration.",
          "/.env.example – All required environment variables with descriptions.",
        ],
        modifies: [
          "server.ts – Database connections (MongoDB + Redis), middleware setup, route mounting.",
          "app.ts – Express configuration, Swagger setup, CORS, security headers.",
          ".env – Authentication secrets, database URLs, email configuration.",
          "package.json – Installs 20+ production dependencies (express, mongoose, redis, jwt, argon2, etc.).",
          "docker-compose.yml – Complete containerization with MongoDB and Redis services.",
          "Dockerfile – Production-ready Docker image configuration.",
        ],
      },

      configuration: `# Environment Variables Configuration

# Server Configuration
PORT=3000                        # Server port (default: 3000)
NODE_ENV=development            # Environment: development | production | test
BASE_URL=http://localhost:3000  # Application base URL for redirects

# Database Configuration
MONGO_URI=mongodb://localhost:27017/auth-db  # MongoDB connection string
REDIS_URL=redis://localhost:6379            # Redis connection string

# JWT Security Configuration
JWT_ACCESS_SECRET=your_super_secret_access_key_here    # Access token signing secret
JWT_REFRESH_SECRET=your_super_secret_refresh_key_here  # Refresh token signing secret
JWT_ACCESS_EXPIRY=15m                                  # Access token expiry (15 minutes)
JWT_REFRESH_EXPIRY=7d                                  # Refresh token expiry (7 days)

# Email Service Configuration (for verification & password reset)
SMTP_HOST=smtp.ethereal.email    # SMTP server hostname
SMTP_PORT=587                    # SMTP server port
SMTP_USER=your_smtp_username     # SMTP authentication username
SMTP_PASS=your_smtp_password     # SMTP authentication password
FROM_EMAIL=noreply@yourapp.com   # Sender email address

# Security Notes:
# - Use strong, unique secrets for JWT tokens (32+ characters)
# - Enable SSL/TLS for SMTP in production
# - Use environment-specific MongoDB/Redis instances
# - Set NODE_ENV=production for production deployments`,

      mongooseSchema: `# MongoDB Schemas (Mongoose ODM)
# These schemas are automatically created when you run the backend:

## User Schema (src/models/User.ts)
interface IUser {
  email: string;                    // Unique user email address
  passwordHash: string;             // Argon2 hashed password
  displayName?: string;             // Optional display name
  roles: string[];                  // User roles: ['user'] or ['user', 'admin']
  
  // Email Verification
  isEmailVerified: boolean;         // Email verification status
  emailVerificationToken?: string;  // Verification token
  emailVerificationExpiry?: Date;   // Token expiry time
  
  // Password Reset
  passwordResetToken?: string;      // Reset token
  passwordResetExpiry?: Date;       // Reset token expiry
  
  // Multi-Factor Authentication
  isMfaEnabled: boolean;            // MFA enabled status
  mfaSecret?: string;               // TOTP secret key
  mfaBackupCodes?: string[];        // Backup recovery codes
  
  // Security & Status
  isActive: boolean;                // Account active status
  lastLogin?: Date;                 // Last login timestamp
  loginAttempts: number;            // Failed login attempts counter
  lockUntil?: Date;                 // Account lock expiry
  
  createdAt: Date;                  // Account creation time
  updatedAt: Date;                  // Last modification time
}

## Audit Log Schema (src/models/AuditLog.ts)
interface IAuditLog {
  userId?: string;                  // User who performed the action
  action: string;                   // Action type (login, register, etc.)
  
  // Request Details
  ipAddress?: string;               // Client IP address
  userAgent?: string;               // Client user agent
  endpoint?: string;                // API endpoint accessed
  method?: string;                  // HTTP method used
  
  // Event Details
  details?: Record<string, any>;    // Additional event data
  success: boolean;                 // Action success status
  errorMessage?: string;            // Error message if failed
  
  createdAt: Date;                  // Event timestamp
}

# Indexes for Performance:
# - User.email (unique)
# - User.passwordResetToken
# - User.emailVerificationToken
# - AuditLog.userId
# - AuditLog.createdAt
# - AuditLog.action`,

      frontendUsage: {
        overview:
          "Here's an example of integrating the authentication system with a Next.js frontend using React hooks. All protected endpoints require Bearer token authentication with JWT tokens.",
        endpoints: [
          {
            route: "/auth/register",
            method: "POST",
            description: "Register a new user account with email and password.",
            contentType: "application/json",
            sampleRequest: {
              email: "user@example.com",
              password: "securePassword123",
              displayName: "John Doe"
            },
            sampleResponse: {
              message: "User registered successfully. Please check your email for verification.",
              user: {
                id: "clxxx123456789",
                email: "user@example.com",
                displayName: "John Doe"
              }
            }
          },
          {
            route: "/auth/login",
            method: "POST",
            description: "Login with email and password to receive JWT tokens.",
            contentType: "application/json",
            sampleRequest: {
              email: "user@example.com",
              password: "securePassword123"
            },
            sampleResponse: {
              user: {
                id: "clxxx123456789",
                email: "user@example.com",
                displayName: "John Doe",
                roles: ["user"]
              },
              accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
              refreshToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
            }
          },
          {
            route: "/auth/refresh",
            method: "POST",
            description: "Refresh expired access token using refresh token.",
            contentType: "application/json",
            cookies: "refreshToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
            sampleResponse: {
              accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
              user: {
                id: "clxxx123456789",
                email: "user@example.com"
              }
            }
          },
          {
            route: "/auth/verify-email",
            method: "POST",
            description: "Verify user email address using verification token.",
            contentType: "application/json",
            sampleRequest: {
              token: "verification_token_from_email"
            },
            sampleResponse: {
              message: "Email verified successfully"
            }
          },
          {
            route: "/auth/request-password-reset",
            method: "POST",
            description: "Request password reset email with reset token.",
            contentType: "application/json",
            sampleRequest: {
              email: "user@example.com"
            },
            sampleResponse: {
              message: "Password reset email sent successfully"
            }
          },
          {
            route: "/auth/reset-password",
            method: "POST",
            description: "Reset password using reset token from email.",
            contentType: "application/json",
            sampleRequest: {
              token: "reset_token_from_email",
              password: "newSecurePassword123"
            },
            sampleResponse: {
              message: "Password reset successfully"
            }
          },
          {
            route: "/auth/mfa/setup",
            method: "POST",
            description: "Setup Multi-Factor Authentication with TOTP (requires login).",
            contentType: "none",
            authRequired: true,
            sampleResponse: {
              qrCode: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...",
              secret: "JBSWY3DPEHPK3PXP",
              backupCodes: ["123456", "789012", "345678"]
            }
          },
          {
            route: "/auth/mfa/verify",
            method: "POST",
            description: "Verify and enable MFA setup using TOTP token.",
            contentType: "application/json",
            authRequired: true,
            sampleRequest: {
              token: "123456"
            },
            sampleResponse: {
              message: "MFA enabled successfully"
            }
          },
          {
            route: "/auth/mfa/authenticate",
            method: "POST",
            description: "Complete login with MFA token (after initial login).",
            contentType: "application/json",
            sampleRequest: {
              tempToken: "temporary_token_from_login",
              token: "123456"
            },
            sampleResponse: {
              user: {
                id: "clxxx123456789",
                email: "user@example.com"
              },
              accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
              refreshToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
            }
          },
          {
            route: "/users/profile",
            method: "GET",
            description: "Get current user profile information.",
            contentType: "none",
            authRequired: true,
            sampleResponse: {
              id: "clxxx123456789",
              email: "user@example.com",
              displayName: "John Doe",
              roles: ["user"],
              isEmailVerified: true,
              isMfaEnabled: false,
              isActive: true,
              createdAt: "2025-11-19T10:00:00.000Z"
            }
          },
          {
            route: "/users/profile",
            method: "PUT",
            description: "Update user profile information.",
            contentType: "application/json",
            authRequired: true,
            sampleRequest: {
              displayName: "Jane Doe"
            },
            sampleResponse: {
              message: "Profile updated successfully",
              user: {
                id: "clxxx123456789",
                email: "user@example.com",
                displayName: "Jane Doe"
              }
            }
          },
          {
            route: "/users",
            method: "GET",
            description: "List all users (Admin only).",
            contentType: "none",
            authRequired: true,
            adminOnly: true,
            sampleResponse: {
              users: [
                {
                  id: "clxxx123456789",
                  email: "user@example.com",
                  displayName: "John Doe",
                  roles: ["user"],
                  isActive: true,
                  createdAt: "2025-11-19T10:00:00.000Z"
                }
              ]
            }
          },
          {
            route: "/users/{id}/roles",
            method: "POST",
            description: "Assign roles to a user (Admin only).",
            contentType: "application/json",
            authRequired: true,
            adminOnly: true,
            sampleRequest: {
              roles: ["user", "admin"]
            },
            sampleResponse: {
              message: "Roles assigned successfully",
              user: {
                id: "clxxx123456789",
                email: "user@example.com",
                roles: ["user", "admin"]
              }
            }
          }
        ],
        example: `// app/components/AuthProvider.jsx
'use client';
import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    checkAuthStatus();
  }, []);

  async function checkAuthStatus() {
    const token = localStorage.getItem('accessToken');
    if (!token) {
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(\`\${API_BASE_URL}/users/profile\`, {
        headers: { Authorization: \`Bearer \${token}\` },
      });

      if (response.ok) {
        const userData = await response.json();
        setUser(userData);
        setAccessToken(token);
      } else {
        // Try to refresh token
        await refreshToken();
      }
    } catch (error) {
      console.error('Auth check failed:', error);
      localStorage.removeItem('accessToken');
    } finally {
      setLoading(false);
    }
  }

  async function refreshToken() {
    try {
      const response = await fetch(\`\${API_BASE_URL}/auth/refresh\`, {
        method: 'POST',
        credentials: 'include', // Include cookies for refresh token
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('accessToken', data.accessToken);
        setAccessToken(data.accessToken);
        setUser(data.user);
        return data.accessToken;
      } else {
        throw new Error('Token refresh failed');
      }
    } catch (error) {
      console.error('Token refresh failed:', error);
      localStorage.removeItem('accessToken');
      setUser(null);
      setAccessToken(null);
      return null;
    }
  }

  async function login(email, password) {
    try {
      const response = await fetch(\`\${API_BASE_URL}/auth/login\`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      // Check if MFA is required
      if (data.mfaRequired) {
        return { mfaRequired: true, tempToken: data.tempToken };
      }

      // Regular login success
      localStorage.setItem('accessToken', data.accessToken);
      setAccessToken(data.accessToken);
      setUser(data.user);
      return { success: true, user: data.user };
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  }

  async function authenticateMFA(tempToken, mfaToken) {
    try {
      const response = await fetch(\`\${API_BASE_URL}/auth/mfa/authenticate\`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ tempToken, token: mfaToken }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'MFA authentication failed');
      }

      localStorage.setItem('accessToken', data.accessToken);
      setAccessToken(data.accessToken);
      setUser(data.user);
      return { success: true, user: data.user };
    } catch (error) {
      console.error('MFA authentication failed:', error);
      throw error;
    }
  }

  async function register(email, password, displayName) {
    try {
      const response = await fetch(\`\${API_BASE_URL}/auth/register\`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, displayName }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Registration failed');
      }

      return { success: true, message: data.message };
    } catch (error) {
      console.error('Registration failed:', error);
      throw error;
    }
  }

  async function logout() {
    try {
      await fetch(\`\${API_BASE_URL}/auth/logout\`, {
        method: 'POST',
        credentials: 'include',
      });
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      localStorage.removeItem('accessToken');
      setAccessToken(null);
      setUser(null);
    }
  }

  async function setupMFA() {
    try {
      const response = await fetch(\`\${API_BASE_URL}/auth/mfa/setup\`, {
        method: 'POST',
        headers: { Authorization: \`Bearer \${accessToken}\` },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'MFA setup failed');
      }

      return data; // Returns { qrCode, secret, backupCodes }
    } catch (error) {
      console.error('MFA setup failed:', error);
      throw error;
    }
  }

  async function verifyMFA(token) {
    try {
      const response = await fetch(\`\${API_BASE_URL}/auth/mfa/verify\`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: \`Bearer \${accessToken}\`,
        },
        body: JSON.stringify({ token }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'MFA verification failed');
      }

      // Refresh user data to reflect MFA enabled status
      await checkAuthStatus();
      return { success: true };
    } catch (error) {
      console.error('MFA verification failed:', error);
      throw error;
    }
  }

  const value = {
    user,
    loading,
    accessToken,
    login,
    register,
    logout,
    setupMFA,
    verifyMFA,
    authenticateMFA,
    refreshToken,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

// app/components/LoginForm.jsx
'use client';
import { useState } from 'react';
import { useAuth } from './AuthProvider';

export default function LoginForm() {
  const { login, authenticateMFA } = useAuth();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [mfaData, setMfaData] = useState({ tempToken: '', mfaToken: '' });
  const [showMFA, setShowMFA] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleLogin(e) {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const result = await login(formData.email, formData.password);

      if (result.mfaRequired) {
        setMfaData({ tempToken: result.tempToken, mfaToken: '' });
        setShowMFA(true);
      } else {
        // Login success
        window.location.href = '/dashboard';
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleMFASubmit(e) {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await authenticateMFA(mfaData.tempToken, mfaData.mfaToken);
      window.location.href = '/dashboard';
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  if (showMFA) {
    return (
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6">Two-Factor Authentication</h2>
        <form onSubmit={handleMFASubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              Enter 6-digit code from your authenticator app
            </label>
            <input
              type="text"
              value={mfaData.mfaToken}
              onChange={(e) => setMfaData({ ...mfaData, mfaToken: e.target.value })}
              placeholder="123456"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              maxLength={6}
              required
            />
          </div>
          {error && (
            <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded">
              {error}
            </div>
          )}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 text-white font-semibold py-2 rounded-md"
          >
            {loading ? 'Verifying...' : 'Verify'}
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Login</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Password</label>
          <input
            type="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        {error && (
          <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 text-white font-semibold py-2 rounded-md"
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
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
  console.log(\`� Auth Backend running on port \${PORT}\`);
});`,

    },
  },
//     {
//     id: 'ai-image-backend',
//     slug: 'ai-image-backend',
//     title: 'AI Image Generation Backend',
//     description: 'Production-grade AI Image Generation API with Fal.AI integration, Clerk authentication, dual payment processing (Stripe + Razorpay), S3 storage, model training, and credit management system.',
//     price: 'Free',
//     category: 'AI & Media',
//     version: '1.0.0',
//     tags: ["ai", "image-generation", "fal-ai", "stripe", "razorpay", "clerk", "s3", "prisma", "payments", "webhooks"],
//     techStack: [
//       { name: 'Express.js', icon: 'SiExpress' },
//       { name: 'TypeScript', icon: 'SiTypescript' },
//       { name: 'Clerk Auth', icon: 'SiClerk' },
//       { name: 'Prisma ORM', icon: 'SiPrisma' },
//       { name: 'Stripe', icon: 'SiStripe' },
//       { name: 'Razorpay', icon: 'SiRazorpay' },
//       { name: 'AWS S3', icon: 'SiAmazon' },
//       { name: 'Fal.ai', icon: 'SiOpenai' },
//     ],
//     features: [
//       {
//         title: "Fal.AI Integration",
//         description: "Generate images using Flux LoRA models with custom training support.",
//         icon: "SiOpenai"
//       },
//       {
//         title: "Dual Payments",
//         description: "Process international payments with Stripe and local ones with Razorpay.",
//         icon: "SiStripe"
//       },
//       {
//         title: "Clerk Auth",
//         description: "Secure user authentication with JWT verification and webhook syncing.",
//         icon: "SiClerk"
//       }
//     ],
//     documentation: {
//       overview: `A production-ready backend for AI image generation applications using Fal.AI Flux LoRA models.
// Supports custom model training with user-provided datasets.
// Includes Clerk authentication with JWT verification.
// Dual payment processing (Stripe for international, Razorpay for India).
// Credit-based billing system with subscription management.
// S3 integration for storing training data.
// Complete webhook handlers for Fal.AI, Stripe, and Clerk.
// Transaction tracking and subscription management.
// Pack-based bulk image generation for efficiency.
// Built with scalability, security, and cost optimization in mind.`,

//       installation: "npx backternity@latest add image-generation",

//       commandDetails: {
//         purpose:
//           "Sets up a complete AI image generation backend with Fal.AI integration, authentication, payments, storage, and credit management.",
//         creates: [
//           "/src/middleware/auth.middleware.ts – Clerk JWT authentication with email extraction.",
//           "/src/models/BaseModel.ts – Base model class for AI operations.",
//           "/src/models/FalAIModel.ts – Fal.AI integration (training, generation, sync generation).",
//           "/src/services/payment.service.ts – Complete payment handling (Stripe + Razorpay), credit management.",
//           "/src/routes/payment.routes.ts – 10 payment endpoints (create, verify, credits, subscriptions, transactions).",
//           "/src/routes/webhook.routes.ts – Clerk webhook handler for user synchronization.",
//           "/src/types.d.ts – TypeScript type definitions for Express extensions.",
//           "/src/prisma.ts – Prisma client setup for database operations.",
//           "/.env.example – All 15 required environment variables with descriptions.",
//         ],
//         modifies: [
//           "server.js – Mounts /payment and /api/webhook routes, adds CORS configuration.",
//           ".env – Adds Fal.AI, Clerk, Stripe, Razorpay, and S3 credentials.",
//           "package.json – Installs 11 production dependencies (express, fal-ai, clerk, stripe, razorpay, prisma, etc.).",
//         ],
//       },

//       configuration: `# Environment Variables Configuration

// # Fal.AI Configuration
// FAL_KEY=""                    # Your Fal.AI API key for image generation
// WEBHOOK_BASE_URL=""           # Your public webhook URL (e.g., https://your-domain.com)

// # S3 Storage Configuration (for training data)
// S3_ACCESS_KEY=""              # AWS S3 access key
// S3_SECRET_KEY=""              # AWS S3 secret key
// BUCKET_NAME=""                # S3 bucket name for storing training datasets
// ENDPOINT=""                   # S3 endpoint URL

// # Clerk Authentication
// CLERK_JWT_PUBLIC_KEY=""       # Clerk JWT public key for token verification
// CLERK_ISSUER=""               # Clerk issuer URL (e.g., https://your-clerk-domain.com)
// SIGNING_SECRET=""             # Clerk signing secret for webhook verification

// # Payment Gateways
// STRIPE_SECRET_KEY=""          # Stripe secret key for international payments
// STRIPE_WEBHOOK_SECRET=""      # Stripe webhook secret for signature verification
// RAZORPAY_KEY_ID=""            # Razorpay key ID for Indian payments
// RAZORPAY_KEY_SECRET=""        # Razorpay key secret

// # Application Settings
// FRONTEND_URL=""               # Your frontend URL for payment redirects
// PORT=8080                     # Server port (default: 8080)

// # Database (Required: Prisma with PostgreSQL/MySQL)
// DATABASE_URL=""               # Prisma database connection string`,

//       prismaSchema: `# Prisma Schema (Required Models)
// # Add these models to your schema.prisma file:

// model User {
//   id              String   @id @default(cuid())
//   clerkId         String   @unique
//   email           String   @unique
//   name            String?
//   profilePicture  String?
//   createdAt       DateTime @default(now())
//   updatedAt       DateTime @updatedAt
// }

// model Model {
//   id              String   @id @default(cuid())
//   name            String
//   type            String
//   age             Int?
//   ethinicity      String?
//   eyeColor        String?
//   bald            Boolean?
//   userId          String
//   zipUrl          String
//   tensorPath      String?
//   thumbnail       String?
//   falAiRequestId  String   @unique
//   trainingStatus  String   @default("Pending")
//   open            Boolean  @default(false)
//   createdAt       DateTime @default(now())
//   updatedAt       DateTime @updatedAt
// }

// model OutputImages {
//   id             String   @id @default(cuid())
//   prompt         String
//   userId         String
//   modelId        String
//   imageUrl       String
//   falAiRequestId String   @unique
//   status         String   @default("Pending")
//   createdAt      DateTime @default(now())
//   updatedAt      DateTime @updatedAt
// }

// model UserCredit {
//   id        String   @id @default(cuid())
//   userId    String   @unique
//   amount    Int      @default(0)
//   createdAt DateTime @default(now())
//   updatedAt DateTime @updatedAt
// }

// enum PlanType {
//   basic
//   premium
// }

// model Subscription {
//   id         String   @id @default(cuid())
//   userId     String
//   plan       PlanType
//   paymentId  String
//   orderId    String   @unique
//   createdAt  DateTime @default(now())
//   updatedAt  DateTime @updatedAt
// }

// model Transaction {
//   id         String   @id @default(cuid())
//   userId     String
//   amount     Int
//   currency   String
//   paymentId  String
//   orderId    String
//   plan       PlanType
//   status     String
//   createdAt  DateTime @default(now())
//   updatedAt  DateTime @updatedAt
// }

// model Packs {
//   id          String   @id @default(cuid())
//   name        String
//   description String
//   thumbnail   String
//   createdAt   DateTime @default(now())
// }

// model PackPrompts {
//   id        String   @id @default(cuid())
//   packId    String
//   prompt    String
//   createdAt DateTime @default(now())
// }`,

//       frontendUsage: {
//         overview:
//           "Here's an example of integrating AI image generation with a Next.js frontend using React hooks and the Clerk authentication system. All endpoints require Bearer token authentication.",
//         endpoints: [
//           {
//             route: "/pre-signed-url",
//             method: "GET",
//             description: "Generate S3 pre-signed URL for uploading training data (ZIP file).",
//             contentType: "none",
//             sampleResponse: {
//               url: "https://s3.amazonaws.com/your-bucket/models/1234567890_0.123.zip?signature=...",
//               key: "models/1234567890_0.123.zip"
//             }
//           },
//           {
//             route: "/ai/training",
//             method: "POST",
//             description: "Submit a model training request with user-uploaded images.",
//             contentType: "application/json",
//             sampleRequest: {
//               zipUrl: "https://s3.amazonaws.com/your-bucket/training-data.zip",
//               name: "trigger_word",
//               type: "person",
//               age: 25,
//               ethinicity: "asian",
//               eyeColor: "brown",
//               bald: false
//             },
//             sampleResponse: {
//               modelId: "clxxx123456789"
//             }
//           },
//           {
//             route: "/ai/generate",
//             method: "POST",
//             description: "Generate a single AI image from a trained model (costs 1 credit).",
//             contentType: "application/json",
//             sampleRequest: {
//               modelId: "clxxx123456789",
//               prompt: "a photo of trigger_word in paris wearing a red dress"
//             },
//             sampleResponse: {
//               imageId: "clyyy987654321"
//             }
//           },
//           {
//             route: "/pack/generate",
//             method: "POST",
//             description: "Generate multiple images from a prompt pack (bulk generation).",
//             contentType: "application/json",
//             sampleRequest: {
//               packId: "clzzz111222333",
//               modelId: "clxxx123456789"
//             },
//             sampleResponse: {
//               images: ["clyyy001", "clyyy002", "clyyy003"]
//             }
//           },
//           {
//             route: "/models",
//             method: "GET",
//             description: "Get all AI models (both user's custom models and public models).",
//             contentType: "none",
//             sampleResponse: {
//               models: [
//                 {
//                   id: "clxxx123",
//                   name: "my_model",
//                   trainingStatus: "Generated",
//                   thumbnail: "https://fal.media/...",
//                   tensorPath: "https://..."
//                 }
//               ]
//             }
//           },
//           {
//             route: "/model/status/:modelId",
//             method: "GET",
//             description: "Check the training status of a specific model.",
//             contentType: "none",
//             sampleResponse: {
//               success: true,
//               model: {
//                 id: "clxxx123",
//                 name: "my_model",
//                 status: "Generated",
//                 thumbnail: "https://fal.media/...",
//                 createdAt: "2025-11-18T10:00:00Z",
//                 updatedAt: "2025-11-18T10:15:00Z"
//               }
//             }
//           },
//           {
//             route: "/image/bulk",
//             method: "GET",
//             description: "Get multiple generated images by IDs with pagination support.",
//             contentType: "none",
//             sampleResponse: {
//               images: [
//                 {
//                   id: "clyyy001",
//                   imageUrl: "https://fal.media/generated-image.jpg",
//                   prompt: "a photo of trigger_word in paris",
//                   status: "Generated",
//                   createdAt: "2025-11-18T10:20:00Z"
//                 }
//               ]
//             }
//           },
//           {
//             route: "/pack/bulk",
//             method: "GET",
//             description: "Get all available prompt packs for bulk generation.",
//             contentType: "none",
//             sampleResponse: {
//               packs: [
//                 {
//                   id: "pack1",
//                   name: "Professional Headshots",
//                   description: "Corporate style professional headshot prompts",
//                   thumbnail: "https://..."
//                 }
//               ]
//             }
//           },
//           {
//             route: "/payment/create",
//             method: "POST",
//             description: "Create a payment session for credit purchase (Stripe or Razorpay).",
//             contentType: "application/json",
//             sampleRequest: {
//               plan: "basic",
//               method: "stripe",
//               isAnnual: false
//             },
//             sampleResponse: {
//               sessionId: "cs_test_a1b2c3d4e5f6g7h8i9j0"
//             }
//           },
//           {
//             route: "/payment/stripe/verify",
//             method: "POST",
//             description: "Verify Stripe payment completion and add credits to account.",
//             contentType: "application/json",
//             sampleRequest: {
//               sessionId: "cs_test_a1b2c3d4e5f6g7h8i9j0"
//             },
//             sampleResponse: {
//               success: true
//             }
//           },
//           {
//             route: "/payment/razorpay/verify",
//             method: "POST",
//             description: "Verify Razorpay payment signature and add credits to account.",
//             contentType: "application/json",
//             sampleRequest: {
//               razorpay_payment_id: "pay_abc123xyz",
//               razorpay_order_id: "order_xyz789abc",
//               razorpay_signature: "1a2b3c4d5e6f...",
//               plan: "basic"
//             },
//             sampleResponse: {
//               success: true,
//               credits: 500,
//               subscription: {
//                 id: "sub_123",
//                 plan: "basic"
//               }
//             }
//           },
//           {
//             route: "/payment/credits",
//             method: "GET",
//             description: "Get user's current credit balance.",
//             contentType: "none",
//             sampleResponse: {
//               credits: 450,
//               lastUpdated: "2025-11-18T10:00:00Z"
//             }
//           },
//           {
//             route: "/payment/transactions",
//             method: "GET",
//             description: "Get all payment transactions for the authenticated user.",
//             contentType: "none",
//             sampleResponse: {
//               transactions: [
//                 {
//                   id: "txn_123",
//                   amount: 4000,
//                   currency: "INR",
//                   plan: "basic",
//                   status: "SUCCESS",
//                   createdAt: "2025-11-18T09:00:00Z"
//                 }
//               ]
//             }
//           }
//         ],
//         example: `// app/components/AIImageGenerator.jsx
// 'use client';
// import { useState, useEffect } from 'react';
// import { useAuth } from '@clerk/nextjs';

// const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';

// export default function AIImageGenerator() {
//   const { getToken } = useAuth();
//   const [modelId, setModelId] = useState('');
//   const [models, setModels] = useState([]);
//   const [prompt, setPrompt] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [imageUrl, setImageUrl] = useState('');
//   const [credits, setCredits] = useState(0);
//   const [error, setError] = useState(null);

//   // Fetch user's models and credits on mount
//   useEffect(() => {
//     loadInitialData();
//   }, []);

//   async function loadInitialData() {
//     try {
//       const token = await getToken();
      
//       // Fetch models
//       const modelsRes = await fetch(\`\${API_BASE_URL}/models\`, {
//         headers: { Authorization: \`Bearer \${token}\` },
//       });
//       const modelsData = await modelsRes.json();
//       setModels(modelsData.models || []);
//       if (modelsData.models?.length > 0) {
//         setModelId(modelsData.models[0].id);
//       }

//       // Fetch credits
//       const creditsRes = await fetch(\`\${API_BASE_URL}/payment/credits\`, {
//         headers: { Authorization: \`Bearer \${token}\` },
//       });
//       const creditsData = await creditsRes.json();
//       setCredits(creditsData.credits || 0);
//     } catch (err) {
//       console.error('Failed to load initial data:', err);
//     }
//   }

//   async function handleGenerate(e) {
//     e.preventDefault();
//     setError(null);

//     if (!prompt.trim()) {
//       setError('Please enter a prompt');
//       return;
//     }

//     if (!modelId) {
//       setError('Please select a model');
//       return;
//     }

//     if (credits < 1) {
//       setError('Insufficient credits. Please purchase more.');
//       return;
//     }

//     setLoading(true);
//     setImageUrl('');

//     try {
//       const token = await getToken();

//       // Generate image (costs 1 credit)
//       const generateRes = await fetch(\`\${API_BASE_URL}/ai/generate\`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: \`Bearer \${token}\`,
//         },
//         body: JSON.stringify({ modelId, prompt }),
//       });

//       const generateData = await generateRes.json();

//       if (!generateRes.ok) {
//         throw new Error(generateData.message || 'Generation failed');
//       }

//       const imageId = generateData.imageId;

//       // Poll for result (Fal.AI processes asynchronously)
//       const pollInterval = setInterval(async () => {
//         try {
//           const imageRes = await fetch(
//             \`\${API_BASE_URL}/image/bulk?ids[]=\${imageId}\`,
//             {
//               headers: { Authorization: \`Bearer \${token}\` },
//             }
//           );
//           const imageData = await imageRes.json();
//           const image = imageData.images?.[0];

//           if (image?.status === 'Generated') {
//             setImageUrl(image.imageUrl);
//             setLoading(false);
//             setCredits((prev) => prev - 1);
//             clearInterval(pollInterval);
//           } else if (image?.status === 'Failed') {
//             setError('Image generation failed. Please try again.');
//             setLoading(false);
//             clearInterval(pollInterval);
//           }
//         } catch (err) {
//           console.error('Polling error:', err);
//         }
//       }, 3000); // Check every 3 seconds

//       // Timeout after 2 minutes
//       setTimeout(() => {
//         clearInterval(pollInterval);
//         if (loading) {
//           setLoading(false);
//           setError('Generation timeout. Please check your history.');
//         }
//       }, 120000);
//     } catch (err) {
//       setError(err.message);
//       setLoading(false);
//     }
//   }

//   return (
//     <div className="max-w-2xl mx-auto p-6 bg-black/20 border border-white/10 rounded-xl text-white space-y-4">
//       <div className="flex justify-between items-center">
//         <h2 className="text-2xl font-bold">AI Image Generator</h2>
//         <div className="text-sm bg-emerald-500/20 border border-emerald-500/30 px-3 py-1 rounded-full">
//           Credits: <span className="font-bold">{credits}</span>
//         </div>
//       </div>

//       <form onSubmit={handleGenerate} className="space-y-4">
//         <div>
//           <label className="block text-sm font-medium mb-2">Select Model</label>
//           <select
//             value={modelId}
//             onChange={(e) => setModelId(e.target.value)}
//             className="w-full px-3 py-2 rounded-md bg-white/10 border border-white/20 focus:outline-none focus:border-emerald-500"
//             disabled={loading || models.length === 0}
//           >
//             {models.length === 0 ? (
//               <option>No models available</option>
//             ) : (
//               models.map((model) => (
//                 <option key={model.id} value={model.id}>
//                   {model.name} ({model.trainingStatus})
//                 </option>
//               ))
//             )}
//           </select>
//         </div>

//         <div>
//           <label className="block text-sm font-medium mb-2">Image Prompt</label>
//           <textarea
//             value={prompt}
//             onChange={(e) => setPrompt(e.target.value)}
//             placeholder="Describe the image you want to generate..."
//             className="w-full px-3 py-2 rounded-md bg-white/10 border border-white/20 focus:outline-none focus:border-emerald-500"
//             rows={4}
//             disabled={loading}
//             required
//           />
//           <p className="text-xs text-white/60 mt-1">
//             Use your model's trigger word in the prompt for best results
//           </p>
//         </div>

//         <button
//           type="submit"
//           disabled={loading || credits < 1 || !modelId}
//           className="w-full bg-emerald-500 hover:bg-emerald-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-md transition-colors"
//         >
//           {loading ? 'Generating...' : 'Generate Image (1 Credit)'}
//         </button>
//       </form>

//       {error && (
//         <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-300">
//           {error}
//         </div>
//       )}

//       {loading && (
//         <div className="text-center py-8">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-500 mx-auto"></div>
//           <p className="mt-4 text-white/70">AI is generating your image...</p>
//           <p className="text-sm text-white/50 mt-2">This usually takes 30-60 seconds</p>
//         </div>
//       )}

//       {imageUrl && (
//         <div className="mt-6 space-y-3">
//           <img
//             src={imageUrl}
//             alt="Generated"
//             className="w-full rounded-lg shadow-2xl border border-white/10"
//           />
//           <div className="flex gap-2">
//             <a
//               href={imageUrl}
//               download
//               className="flex-1 text-center bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium py-2 rounded-md transition-colors"
//             >
//               Download Image
//             </a>
//             <button
//               onClick={() => {
//                 setImageUrl('');
//                 setPrompt('');
//               }}
//               className="flex-1 bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/30 text-emerald-300 font-medium py-2 rounded-md transition-colors"
//             >
//               Generate Another
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }`,
//       },

//       usage: `// server.js - Main application setup
// import express from 'express';
// import cors from 'cors';
// import dotenv from 'dotenv';
// import { fal } from '@fal-ai/client';

// // Import routes
// import paymentRoutes from './routes/payment.routes';
// import { router as webhookRouter } from './routes/webhook.routes';
// import { authMiddleware } from './middleware/auth.middleware';
// import { FalAIModel } from './models/FalAIModel';
// import { prismaClient } from './prisma';

// dotenv.config();

// // Configure Fal.AI
// fal.config({
//   credentials: process.env.FAL_KEY,
// });

// const app = express();
// const PORT = process.env.PORT || 8080;

// // Middleware
// app.use(cors({
//   origin: ['http://localhost:3000', process.env.FRONTEND_URL],
//   credentials: true,
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//   allowedHeaders: ['Content-Type', 'Authorization'],
// }));
// app.use(express.json());

// // Initialize Fal.AI Model
// const falAiModel = new FalAIModel();

// // Routes (Protected with authMiddleware)
// app.use('/payment', authMiddleware, paymentRoutes);
// app.use('/api/webhook', webhookRouter); // Webhooks don't need auth

// // Image Generation Routes
// app.post('/ai/training', authMiddleware, async (req, res) => {
//   try {
//     const { zipUrl, name, type, age, ethinicity, eyeColor, bald } = req.body;
    
//     const { request_id } = await falAiModel.trainModel(zipUrl, name);
    
//     const model = await prismaClient.model.create({
//       data: {
//         name,
//         type,
//         age,
//         ethinicity,
//         eyeColor,
//         bald,
//         userId: req.userId!,
//         zipUrl,
//         falAiRequestId: request_id,
//       },
//     });
    
//     res.json({ modelId: model.id });
//   } catch (error) {
//     console.error('Training error:', error);
//     res.status(500).json({ message: 'Training failed' });
//   }
// });

// app.post('/ai/generate', authMiddleware, async (req, res) => {
//   try {
//     const { modelId, prompt } = req.body;
    
//     const model = await prismaClient.model.findUnique({
//       where: { id: modelId },
//     });
    
//     if (!model || !model.tensorPath) {
//       res.status(404).json({ message: 'Model not found' });
//       return;
//     }
    
//     // Check credits
//     const credits = await prismaClient.userCredit.findUnique({
//       where: { userId: req.userId! },
//     });
    
//     if ((credits?.amount ?? 0) < 1) {
//       res.status(402).json({ message: 'Insufficient credits' });
//       return;
//     }
    
//     const { request_id } = await falAiModel.generateImage(prompt, model.tensorPath);
    
//     const image = await prismaClient.outputImages.create({
//       data: {
//         prompt,
//         userId: req.userId!,
//         modelId,
//         imageUrl: '',
//         falAiRequestId: request_id,
//       },
//     });
    
//     // Deduct credit
//     await prismaClient.userCredit.update({
//       where: { userId: req.userId! },
//       data: { amount: { decrement: 1 } },
//     });
    
//     res.json({ imageId: image.id });
//   } catch (error) {
//     console.error('Generation error:', error);
//     res.status(500).json({ message: 'Generation failed' });
//   }
// });

// app.get('/models', authMiddleware, async (req, res) => {
//   const models = await prismaClient.model.findMany({
//     where: { userId: req.userId },
//   });
//   res.json({ models });
// });

// // Start server
// app.listen(PORT, () => {
//   console.log(\`🚀 AI Image Generation Backend running on port \${PORT}\`);
// });`,

//     },
//   }
];
