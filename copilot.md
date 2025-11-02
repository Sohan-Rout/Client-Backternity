# ⚡ Backternity

> **Registry-based backend component system for Express and Node.js developers**  
> Build scalable backend architectures in seconds — modular, framework-aware, and language-specific.

---

## 🧭 Overview

**Backternity** is a **CLI-powered backend component framework** that helps developers scaffold, install, and manage backend logic using prebuilt, registry-driven modules.  
It’s designed for **backend developers** who work with **Express.js**, **Node.js (native)**, or **vanilla JavaScript/TypeScript**, and want to build modern servers faster without boilerplate.

Backternity provides **ready-to-use backend components** — authentication, databases, middleware, services, and configuration — that can be instantly integrated into any project using a single command.

---

## 🧩 The Vision

Backend developers have long lacked the modular tooling ecosystem that frontend frameworks enjoy.  
**Backternity** changes that by providing a **backend component registry**, allowing developers to:

- 🚀 Add production-grade backend modules instantly  
- ⚙️ Choose framework (Express / Node.js) and language (JS / TS)  
- 🧩 Mix and match modules like Auth, Databases, Email, etc.  
- 🌍 Extend or publish your own reusable backend components  

---

## ⚙️ How It Works

### 1️⃣ Initialize your project
```bash
npx backternity init
```
Detects your backend framework and sets up configuration:
```json
{
  "framework": "express",
  "language": "javascript",
  "registry": "https://registry.backternity.dev"
}
```

### 2️⃣ Add components from the registry
```bash
npx backternity add auth-jwt
```

This scaffolds a complete backend feature:
```
/auth-jwt/
 ├─ routes/auth.js
 ├─ services/authService.js
 ├─ middleware/auth.js
 ├─ models/user.js
 └─ utils/response.js
```

The CLI automatically installs required dependencies (`express`, `jsonwebtoken`, etc.), updates the configuration, and ensures your component works instantly.

### 3️⃣ Manage or update components
```bash
npx backternity list
npx backternity search auth
npx backternity update auth-jwt
```

### 4️⃣ Database utilities
```bash
npx backternity db --check
npx backternity db --migrate
npx backternity db --seed
npx backternity db --reset
```
Run migrations, check health, or reset databases with built-in Prisma or Mongoose integrations.

---

## 🧠 Component Philosophy

Each Backternity component is stored in a **registry** as a JSON definition that describes its purpose, dependencies, and file structure.

Example: **`auth-jwt`**
```json
{
  "name": "auth-jwt",
  "type": "auth",
  "framework": "express",
  "language": "javascript",
  "files": [
    { "path": "routes/auth.js", "type": "route" },
    { "path": "services/authService.js", "type": "service" },
    { "path": "middleware/auth.js", "type": "middleware" },
    { "path": "models/user.js", "type": "model" },
    { "path": "utils/response.js", "type": "util" }
  ]
}
```

The CLI reads this schema and scaffolds your project accordingly — automatically respecting your folder structure and environment.

---

## 🏗️ Project Structure

Backternity uses **file-based scaffolding** that reflects common backend architecture conventions:

```
/routes
  ├─ auth.js
/services
  ├─ authService.js
/middleware
  ├─ auth.js
/models
  ├─ user.js
/utils
  ├─ response.js
```

This structure scales naturally with more components (e.g. `auth-oauth-github`, `database-mongodb`, `email-service`), keeping code organized and modular.

---

## 🔌 Supported Environments

| Category | Supported |
|-----------|------------|
| **Frameworks** | Express.js, Fastify, Node.js native |
| **Languages** | JavaScript, TypeScript |
| **Databases** | PostgreSQL (Prisma), MongoDB (Mongoose) |
| **Auth Modules** | JWT, OAuth (GitHub, Google), Multi-Factor Auth (OTP) |

Each registry version supports both JS and TS variants with separate folders and file templates.

---

## 🧰 Example Use Case

```bash
# 1. Initialize
npx backternity init

# 2. Add JWT authentication
npx backternity add auth-jwt

# 3. Add PostgreSQL
npx backternity add database-postgresql

# 4. Run database health check
npx backternity db --check
```

✅ Within minutes, you have:
- User authentication (JWT + refresh tokens)
- Database connection + Prisma schema
- API routes, middleware, and models ready to extend

---

## 🌐 The Registry

Each component (like `auth-jwt` or `auth-multi-factor`) lives in the Backternity registry as a **versioned JSON package** with:
- File paths  
- Dependencies  
- Metadata (framework, language, and structure)
- Optional variants (e.g. `--mongodb`, `--local-memory`)

You can even build **your own components** and publish them later via:
```bash
npx backternity publish
```

---

## 🧠 Example Components

| Component | Description |
|------------|-------------|
| **auth-jwt** | Simple JWT-based authentication for Express |
| **auth-multi-factor** | Email + OTP multi-factor authentication |
| **auth-oauth-github** | GitHub OAuth2 authentication |
| **database-postgresql** | PostgreSQL setup with Prisma and migrations |
| **database-mongodb** | MongoDB setup with Mongoose ODM |

Each one is modular and instantly installable.

---

## 🔮 Future Roadmap

- 🧩 **Custom Registry Hosting** – Private team registries and cloud syncing  
- 🧱 **Component Publishing** – `backternity publish` for sharing custom modules  
- ⚙️ **Component Variants** – e.g., `auth-jwt --mongodb` or `auth-jwt --local-memory`  
- 🧰 **Full-stack Bridge** – Connect backend modules to Next.js frontends  
- 🧑‍💻 **Template Registry** – Share complex setups (Auth + DB + Cache) as presets  

---

## 🧑‍💻 Built With

- **Node.js** (CLI Core)
- **TypeScript**
- **Commander.js**
- **@clack/prompts** + **picocolors**
- **fs-extra**
- **Zod**
- **Execa**
- **Prisma / Mongoose**

---

## 🧾 License

MIT © 2025 — Backternity Project  
Created with ❤️ for backend developers who value **structure**, **speed**, and **reusability**.

---

## ✨ Author’s Note

> “Backternity is built for backend developers — the ones who prefer structure over chaos, and automation over repetition.  
> Think of it as your personal backend registry — install, build, and scale your server in seconds.”

---
