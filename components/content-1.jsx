"use client";
import { TerminalDemo } from "./ui/TerminalDemo";
import { motion } from "framer-motion";
import { Code2, Zap, Shield, Globe, Database, Lock, Activity, Layers } from "lucide-react";

export default function Content() {
  const architectureSteps = [
    {
      icon: Code2,
      title: "Choose Components",
      description: "Pick from our battle-tested backend modules",
      step: "01",
    },
    {
      icon: Zap,
      title: "Install Instantly",
      description: "One command to integrate seamlessly",
      step: "02",
    },
    {
      icon: Shield,
      title: "Deploy Securely",
      description: "Production-ready with built-in security",
      step: "03",
    },
  ];

  const capabilities = [
    { icon: Database, text: "Database Integration", desc: "MongoDB, PostgreSQL, Redis" },
    { icon: Lock, text: "Authentication", desc: "JWT, OAuth, MFA, Session" },
    { icon: Activity, text: "Real-time Features", desc: "WebSockets, SSE, Live updates" },
    { icon: Layers, text: "Middleware Stack", desc: "Logging, CORS, Rate limiting" },
    { icon: Globe, text: "API Management", desc: "REST, GraphQL, Documentation" },
    { icon: Shield, text: "Security First", desc: "Encryption, Validation, HTTPS" },
  ];

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Elegant background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-background/95 to-background/90">
        {/* Subtle geometric texture */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none'%3E%3Cg fill='%23ffffff'%3E%3Cpath opacity='0.3' d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        {/* Ambient motion glows */}
        <motion.div
          initial={{ opacity: 0.08, scale: 0.8 }}
          animate={{ opacity: [0.08, 0.18, 0.08], scale: [0.8, 1, 0.8] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-1/3 w-[28rem] h-[28rem] bg-primary/10 rounded-full blur-[120px]"
        />
        <motion.div
          initial={{ opacity: 0.05, scale: 1.1 }}
          animate={{ opacity: [0.05, 0.12, 0.05], scale: [1.1, 0.9, 1.1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/3 right-1/4 w-[22rem] h-[22rem] bg-primary/10 rounded-full blur-[100px]"
        />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/5 border border-primary/10 rounded-full mb-5 backdrop-blur-sm"
          >
            <Layers className="w-4 h-4 text-primary/80" />
            <span className="text-sm font-medium text-primary/80">Backend Architecture Reimagined</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl font-semibold text-foreground mb-5 tracking-tight"
          >
            Build Backends <span className="block text-primary font-bold">Beautifully & Effortlessly</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Transform your development workflow with modular, production-ready backend components.  
            Focus on innovation — not boilerplate.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Soft glows */}
            <div className="absolute -top-6 -right-6 w-28 h-28 bg-primary/5 rounded-full blur-2xl" />
            <div className="absolute -bottom-10 -left-10 w-36 h-36 bg-primary/5 rounded-full blur-3xl" />

            <div className="relative z-10 transform hover:scale-[1.015] transition-transform duration-500">
              <TerminalDemo />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-3">
                From Concept to Production <span className="text-primary font-semibold">in Minutes</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Backternity delivers enterprise-grade backend building blocks that integrate seamlessly into your stack.  
                Skip setup — ship faster.
              </p>
            </div>

            {/* Steps */}
            <div className="space-y-3">
              {architectureSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-4 p-3 rounded-lg hover:bg-muted/30 transition-all duration-200"
                >
                  <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-md">
                    <step.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">{step.title}</h4>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Capabilities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold text-foreground mb-3">Everything You Need, Simplified</h3>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Thoughtfully designed modules covering every layer of modern backend architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {capabilities.map((cap, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.08 }}
                className="group p-5 bg-card/60 border border-border/60 rounded-xl backdrop-blur-sm hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-primary/10 rounded-md group-hover:bg-primary/20 transition-all">
                    <cap.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1 group-hover:text-primary transition-colors">
                      {cap.text}
                    </h4>
                    <p className="text-sm text-muted-foreground">{cap.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
