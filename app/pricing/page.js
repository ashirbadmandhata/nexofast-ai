import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
// import { BorderBeam } from "@/components/ui/border-beam";

export default function PricingPage() {
  const features = {
    free: [
      "Up to 3 projects",
      "Basic templates",
      "Community support",
      "1GB storage",
      "Basic analytics",
    ],
    pro: [
      "Unlimited projects",
      "Premium templates",
      "Priority support",
      "10GB storage",
      "Advanced analytics",
      "Custom domains",
      "Team collaboration",
      "API access",
    ],
    enterprise: [
      "Everything in Pro",
      "Unlimited storage",
      "24/7 phone support",
      "Custom integrations",
      "Enterprise security",
      "SLA guarantee",
      "Dedicated success manager",
      "Custom contracts",
    ],
  };

  return (
    <div className="flex min-h-screen flex-col">
      <div className="container px-4 md:px-6 py-12">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Simple, transparent pricing
          </h1>
          <p className="mt-4 text-muted-foreground md:text-xl">
            Choose the plan that's right for you
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8 mt-12">
          {/* Free Plan */}
          <div className="relative flex flex-col rounded-2xl border bg-card p-6 shadow-lg transition-shadow hover:shadow-xl">
            <div className="mb-4">
              <h3 className="text-xl font-bold">Free</h3>
              <p className="text-sm text-muted-foreground">
                Perfect for side projects
              </p>
            </div>
            <div className="mb-4 flex items-baseline">
              <span className="text-4xl font-bold">$0</span>
              <span className="text-sm text-muted-foreground ml-1">/month</span>
            </div>
            <ul className="mb-8 space-y-3 text-sm">
              {features.free.map((feature, i) => (
                <li key={i} className="flex items-center">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Button className="mt-auto" variant="outline">
              Get Started
            </Button>
          </div>

          {/* Pro Plan */}
          <div className="relative flex flex-col rounded-2xl border-2 border-primary bg-card p-6 shadow-lg transition-shadow hover:shadow-xl">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2">
              <span className="inline-block rounded-full bg-primary px-4 py-1 text-xs font-semibold uppercase tracking-wider text-primary-foreground">
                Most Popular
              </span>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-bold">Pro</h3>
              <p className="text-sm text-muted-foreground">
                Perfect for growing teams
              </p>
            </div>
            <div className="mb-4 flex items-baseline">
              <span className="text-4xl font-bold">$29</span>
              <span className="text-sm text-muted-foreground ml-1">/month</span>
            </div>
            <ul className="mb-8 space-y-3 text-sm">
              {features.pro.map((feature, i) => (
                <li key={i} className="flex items-center">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Button className="mt-auto bg-primary text-primary-foreground hover:bg-primary/90">
              Get Started
            </Button>
            {/* <BorderBeam size={250} duration={12} delay={9} /> */}
          </div>

          {/* Enterprise Plan */}
          <div className="relative flex flex-col rounded-2xl border bg-card p-6 shadow-lg transition-shadow hover:shadow-xl">
            <div className="mb-4">
              <h3 className="text-xl font-bold">Enterprise</h3>
              <p className="text-sm text-muted-foreground">
                Custom solutions for large teams
              </p>
            </div>
            <div className="mb-4 flex items-baseline">
              <span className="text-4xl font-bold">Custom</span>
            </div>
            <ul className="mb-8 space-y-3 text-sm">
              {features.enterprise.map((feature, i) => (
                <li key={i} className="flex items-center">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Button className="mt-auto" variant="outline">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
