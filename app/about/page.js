import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="container px-4 md:px-6 py-12">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Us</h1>
          <p className="mt-4 text-gray-500 md:text-xl">Building the future of development</p>
        </div>
        <div className="mx-auto max-w-4xl mt-12">
          <div className="grid gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-500">
                We're on a mission to revolutionize software development by making it more accessible, efficient, and enjoyable for developers worldwide.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Story</h2>
              <p className="text-gray-500">
                Founded in 2024, we started with a simple idea: what if AI could help developers build better software faster? Today, we're helping thousands of developers and teams around the world ship better code.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Values</h2>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="rounded-lg border p-4">
                  <h3 className="font-bold mb-2">Innovation</h3>
                  <p className="text-sm text-gray-500">Pushing the boundaries of what's possible with AI and development</p>
                </div>
                <div className="rounded-lg border p-4">
                  <h3 className="font-bold mb-2">Quality</h3>
                  <p className="text-sm text-gray-500">Committed to delivering the highest quality tools and solutions</p>
                </div>
                <div className="rounded-lg border p-4">
                  <h3 className="font-bold mb-2">Community</h3>
                  <p className="text-sm text-gray-500">Building and supporting a thriving developer community</p>
                </div>
              </div>
            </div>
            <div className="text-center">
              <Button size="lg">Join Our Team</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

