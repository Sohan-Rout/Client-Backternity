"use client";

import { useState } from "react";
import { Mail, MessageSquare, Send, CheckCircle, Github, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ContactUs() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        setError(result.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error('Form submission error:', err);
      setError('Network error. Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error when user starts typing
    if (error) setError("");
  };

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground mb-3">
            Get in touch
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            For partnerships, queries, or custom backend projects — we’re here to collaborate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="p-8 rounded-2xl border border-white/5 bg-card/40 backdrop-blur-sm hover:bg-card/60 transition-all duration-300">
            <div className="flex items-center mb-6">
              <MessageSquare className="w-5 h-5 text-primary/80 mr-3" />
              <h3 className="text-lg font-medium text-foreground">Send us a message</h3>
            </div>

            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-foreground mb-1">Message sent!</h4>
                <p className="text-sm text-muted-foreground">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <>
                {error && (
                  <div className="mb-4 p-3 rounded-md bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                    {error}
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm text-muted-foreground mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="bg-background/60 border-white/[0.05] focus:ring-1 focus:ring-primary/40"
                      disabled={isLoading}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm text-muted-foreground mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="bg-background/60 border-white/[0.05] focus:ring-1 focus:ring-primary/40"
                      disabled={isLoading}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm text-muted-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us how we can help..."
                      className="w-full px-3 py-2 rounded-md bg-background/60 border border-white/[0.05] text-foreground text-sm placeholder:text-muted-foreground focus:ring-1 focus:ring-primary/40 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={isLoading}
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full flex items-center justify-center gap-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </>
            )}
          </div>

          {/* Sidebar Info */}
          <div className="space-y-8">
            {/* Contact */}
            <div className="p-8 rounded-2xl border border-white/5 bg-card/40 backdrop-blur-sm hover:bg-card/60 transition-all">
              <h3 className="text-lg font-medium text-foreground mb-5">Reach us directly</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <div className="font-medium text-foreground mb-1">Email</div>
                  <p className="text-muted-foreground">team@backternity.dev</p>
                </div>
              </div>
            </div>

            {/* Socials */}

            {/* FAQ */}
            <div className="p-8 rounded-2xl border border-white/5 bg-card/40 backdrop-blur-sm hover:bg-card/60 transition-all">
              <h3 className="text-lg font-medium text-foreground mb-5">Quick Answers</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <div className="font-medium text-foreground mb-1">Are components free?</div>
                  <p className="text-muted-foreground">Yes — They are absolutely free to use</p>
                </div>
                <div>
                  <div className="font-medium text-foreground mb-1">Do you offer custom work?</div>
                  <p className="text-muted-foreground">
                    Absolutely — we build scalable backend components.
                  </p>
                </div>
                <div>
                  <div className="font-medium text-foreground mb-1">How often are updates released?</div>
                  <p className="text-muted-foreground">Monthly, with new improvements & features.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
