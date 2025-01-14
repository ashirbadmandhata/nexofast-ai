"use client"
import React, { useState } from 'react'
import { BorderBeam } from "@/components/ui/border-beam";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";
import { cn } from "@/lib/utils";
import DotPattern from "@/components/ui/dot-pattern";
import Lookup from "@/data/Lookup";

import Colors from "@/data/Colors";
import { ArrowRight, ChevronRight } from 'lucide-react';

function Hero() {

  const [userInput, setUserInput] = useState()  //Hero section text field



  return (
    <div>
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
                  Powered by- WebMastry developers
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
            <div className="rounded-xl border bg-card/50 backdrop-blur-sm p-4 shadow-2xl ring-1 ring-white/10">
              <div className="relative flex gap-2" style={{backgroundColor:Colors.BACKGROUND}}>
                <textarea
                  onChange={(event) => setUserInput(event.target.value)}
                  placeholder={Lookup.INPUT_PLACEHOLDER}
                  className="w-full h-32 max-h-56 px-4 py-2 text-lg text-white bg-transparent border border-gray-700 rounded-sm focus:border-green-500 focus:ring-1 focus:ring-blue-500 outline-none resize-none transition-all"
                />

                {userInput && <div className="absolute right-3 top-1/2 -translate-y-1/2">
                  <button className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-500 hover:bg-blue-600 transition-all">
                    <ArrowRight className="h-5 w-5 text-white" />
                  </button>
                </div>}
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
      
    </div>
  )
}

export default Hero
