"use client";

import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Github,
  Terminal,
  Sparkles,
  ArrowRight,
  X,
  Menu,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { BorderBeam } from "@/components/ui/border-beam";
import SparklesText from "@/components/ui/sparkles-text";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";
import { cn } from "@/lib/utils";
import DotPattern from "@/components/ui/dot-pattern";

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

  const currentYear = new Date().getFullYear();

  return (
    <div className="flex min-h-screen flex-col">
      {/* Announcement Banner */}
      <div className="relative bg-gradient-to-r from-blue-600 to-emerald-600 text-white overflow-hidden">
        <div className="container flex items-center gap-x-3 px-4 py-2 text-sm font-medium md:px-6">
          <Sparkles className="h-4 w-4 flex-shrink-0" />
          <div className="relative w-full overflow-hidden">
            <div className="animate-scroll whitespace-nowrap">
              Introducing AI-powered development. Start building faster today
              (Developed by Ashirbad Mandhata). The website is under development some of the Functionalities My not works Stay tuned we will be back Soon.
            </div>
          </div>
          <X className="absolute right-4 h-4 w-4 cursor-pointer opacity-70 hover:opacity-100" />
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 mr-6">
              <Terminal className="h-6 w-6" />
              {/* <span className="font-bold inline-block">Nexofast.</span> */}
              <SparklesText text="Nexofast." />
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link
                href="/about"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </Link>
              <Link
                href="/docs"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Documentation
              </Link>
              <Link
                href="/pricing"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Pricing
              </Link>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-4">
              <Button
                variant="ghost"
                className="text-muted-foreground hover:text-foreground"
              >
                Sign In
              </Button>
              {/* <ShimmerButton className='text-white'>
                Sign-up
              </ShimmerButton> */}
              <Button>Get Started</Button>
            </div>
            <Link href="https://github.com" className="hidden md:block">
              <Github className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
            </Link>

            {/* Mobile Nav */}
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col space-y-4 mt-6">
                  <Link href="/about" className="text-lg font-medium">
                    About
                  </Link>
                  <Link href="/docs" className="text-lg font-medium">
                    Documentation
                  </Link>
                  <Link href="/pricing" className="text-lg font-medium">
                    Pricing
                  </Link>
                  <hr className="my-4" />
                  <Button variant="ghost" className="w-full justify-start">
                    Sign In
                  </Button>
                  <Button className="w-full">Get Started</Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-16 md:py-32 lg:py-40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6 text-center">
              <AnimatedGradientText>
                🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "}
                <span
                  className={cn(
                    `inline animate-gradient bg-gradient-to-r from-[#3b82f6] via-[#10b981] to-[#3b82f6] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
                  )}
                >
                  Introducing to NexoFast-AI
                </span>
                <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
              </AnimatedGradientText>
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl/none">
                  What do you want to{" "}
                  <span className="gradient-text">build</span>?
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-l">
                  Prompt, run, edit, and deploy full-stack web apps.
                </p>
              </div>
            </div>
          </div>
          <DotPattern
            className={cn(
              "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
            )}
          />
        </section>

        {/* Text Field Area */}
        <section className="container px-4 md:px-6 relative z-10 -mt-5 md:-mt-16 lg:-mt-20 mb-12 md:mb-20">
          <div className="mx-auto max-w-3xl">
            <div className="rounded-xl border bg-card/50 backdrop-blur-sm p-6 shadow-2xl ring-1 ring-white/10">
              <div className="flex flex-col space-y-4">
                <div className="relative">
                  <Input
                    placeholder="How can I help you build today?"
                    className="h-14 px-4 text-lg bg-background/50 border-0 focus-visible:ring-2 focus-visible:ring-blue-500 transition-all rounded-lg"
                  />
                  <Button
                    size="icon"
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-blue-500 hover:bg-blue-600 rounded-full"
                  >
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </div>
              </div>
              <BorderBeam size={250} duration={12} delay={9} />
            </div>

            {/* Suggestions */}
            <div className="mt-6 flex flex-wrap gap-2 justify-center">
              <button className="suggestion-chip">
                Create a landing page{" "}
              </button>
              <button className="suggestion-chip">
                Build an authentication system
              </button>
              <button className="suggestion-chip">Design a dashboard</button>
              <button className="suggestion-chip">Set up a database</button>
            </div>
          </div>
        </section>

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
            <div className="flex justify-center items-center space-x-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Privacy Policy
              </a>
              <span className="text-muted-foreground">|</span>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Terms of Service
              </a>
              <span className="text-muted-foreground">|</span>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Contact Us
              </a>
            </div>
            <div className="pt-4 text-sm text-muted-foreground">
              © {currentYear} NexoFast. All rights reserved.
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
