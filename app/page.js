"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Hero from "@/components/custom/Hero";

export default function Home() {
  const steps = [
    {
      title: "Describe Your Project",
      description: "Tell us what you want to build using natural language",
      icon: "💭",
    },
    {
      title: "Review & Customize",
      description: "Get instant code generation and customize as needed",
      icon: "✨",
    },
    {
      title: "Deploy & Ship",
      description: "Deploy your project with one click and ship to production",
      icon: "🚀",
    },
  ];

  const currentYear = new Date().getFullYear(); //Footer year

  const onGenerate = () => {};

  return (
    <div className="flex min-h-screen flex-col">
      <Hero />

      <main className="flex-1">
        {/* Steps Guide */}
        <section className="w-full py-12 md:py-24 bg-secondary/50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter">
                How it works
              </h2>
              <p className="text-muted-foreground mt-2">
                Follow these simple steps to get started
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="relative flex flex-col items-center text-center p-6 rounded-lg border bg-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                  {index < steps.length - 1 && (
                    <ArrowRight className="hidden md:block absolute -right-6 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full bg-background py-8 mt-16 border-t">
          <div className="container mx-auto text-center space-y-4">
            <p className="text-sm text-muted-foreground">
              Empowering solutions for the future.
            </p>
            <div className="pt-4 text-sm text-muted-foreground">
              © {currentYear} NexoFast. All rights reserved.
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
