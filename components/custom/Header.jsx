import React from 'react'
import SparklesText from '../ui/sparkles-text'
import { Github, Menu, Sparkles, Terminal, X } from 'lucide-react'
import Link from 'next/link'
import { Button } from '../ui/button'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'

function Header() {
  return (
    <div>
      {/* Announcement Banner */}
      <div className="relative bg-gradient-to-r from-blue-600 to-emerald-600 text-white overflow-hidden">
        <div className="container flex items-center gap-x-3 px-4 py-2 text-sm font-medium md:px-6">
          <Sparkles className="h-4 w-4 flex-shrink-0" />
          <div className="relative w-full overflow-hidden">
            <div className="animate-scroll whitespace-nowrap">
              Introducing AI-powered development. Start building faster today
              (Developed by Ashirbad Mandhata). The website is under development
              some of the Functionalities My not works Stay tuned we will be
              back Soon.
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
    </div>
  )
}

export default Header
