import Link from "next/link";
import Image from "next/image";
import {
  Github,
  BarChart3,
  Star,
  GitPullRequest,
  Tag,
  CheckCircle2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { AuthButton } from "@/components/ui/auth-button";

function GetStartedButton() {
  return (
    <Button
      variant="outline"
      size="lg"
      className="bg-primary text-primary-foreground hover:text-white hover:bg-secondary-foreground"
    >
      Get Started
    </Button>
  );
}

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-16 items-center justify-between px-6 md:px-8 lg:px-12">
          <div className="flex items-center gap-2">
            <Github className="h-6 w-6" />
            <span className="text-xl font-bold">Dandi</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#features"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Pricing
            </Link>
            <Link
              href="#faq"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              FAQ
            </Link>
            <Link href="/dashboard">
              <Button
                variant="outline"
                size="sm"
                className="border-primary/20 hover:border-primary/40 transition-colors"
              >
                Dashboard
              </Button>
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <AuthButton />
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-24 md:py-32 bg-gradient-to-b from-background to-background/80">
          <div className="px-6 md:px-8 lg:px-12">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
                    Analyze GitHub Repositories
                  </div>
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground">
                    Unlock the power of GitHub repositories
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Get valuable insights, summaries, and analytics for any open
                    source GitHub repository with Dandi.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="#features">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-primary/20 hover:border-primary/40 transition-colors"
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[350px] w-full overflow-hidden rounded-lg border bg-background p-2 shadow-xl">
                  <Image
                    src="https://placehold.co/1920x1080?text=Dashboard+Preview"
                    width={800}
                    height={600}
                    alt="Dashboard preview"
                    className="object-cover"
                    unoptimized
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="features"
          className="bg-gradient-to-b from-muted/50 to-muted py-24"
        >
          <div className="px-6 md:px-8 lg:px-12">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
                  Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground">
                  Everything you need to analyze GitHub repositories
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Dandi provides comprehensive insights and analytics for any
                  open source GitHub repository.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-8 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Repository Summaries</h3>
                <p className="text-center text-muted-foreground">
                  Get concise summaries of repositories to quickly understand
                  their purpose and structure.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-8 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Star Analytics</h3>
                <p className="text-center text-muted-foreground">
                  Track star growth and patterns to understand repository
                  popularity over time.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-8 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <GitPullRequest className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">PR Insights</h3>
                <p className="text-center text-muted-foreground">
                  Stay updated on important pull requests and understand their
                  impact on the project.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-8 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <Tag className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Version Tracking</h3>
                <p className="text-center text-muted-foreground">
                  Monitor version updates and releases to keep up with project
                  changes.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-8 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <Github className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Cool Facts</h3>
                <p className="text-center text-muted-foreground">
                  Discover interesting facts and statistics about repositories
                  that might surprise you.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-8 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Custom Reports</h3>
                <p className="text-center text-muted-foreground">
                  Generate custom reports tailored to your specific needs and
                  interests.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="py-24">
          <div className="px-6 md:px-8 lg:px-12">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Simple, transparent pricing
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Start for free, upgrade when you need more features.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              {/* Free Tier */}
              <div className="flex flex-col rounded-lg border bg-background p-8 shadow-sm">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Free</h3>
                  <p className="text-muted-foreground">
                    Perfect for getting started
                  </p>
                </div>
                <div className="mt-4 flex items-baseline text-3xl font-bold">
                  $0
                  <span className="ml-1 text-sm font-normal text-muted-foreground">
                    /month
                  </span>
                </div>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                    <span>5 repositories</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                    <span>Basic analytics</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                    <span>Daily updates</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                    <span>Community support</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <GetStartedButton />
                </div>
              </div>
              {/* Pro Tier */}
              <div className="flex flex-col rounded-lg border bg-background p-8 shadow-sm ring-2 ring-primary">
                <div className="space-y-2">
                  <div className="inline-block rounded-full bg-primary px-3 py-1 text-xs text-primary-foreground">
                    Popular
                  </div>
                  <h3 className="text-2xl font-bold">Pro</h3>
                  <p className="text-muted-foreground">
                    For individuals and small teams
                  </p>
                </div>
                <div className="mt-4 flex items-baseline text-3xl font-bold">
                  $19
                  <span className="ml-1 text-sm font-normal text-muted-foreground">
                    /month
                  </span>
                </div>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                    <span>25 repositories</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                    <span>Advanced analytics</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                    <span>Hourly updates</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                    <span>Email reports</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                    <span>Priority support</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <GetStartedButton />
                </div>
              </div>
              {/* Enterprise Tier */}
              <div className="flex flex-col rounded-lg border bg-background p-8 shadow-sm">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Enterprise</h3>
                  <p className="text-muted-foreground">
                    For organizations and large teams
                  </p>
                </div>
                <div className="mt-4 flex items-baseline text-3xl font-bold">
                  $99
                  <span className="ml-1 text-sm font-normal text-muted-foreground">
                    /month
                  </span>
                </div>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                    <span>Unlimited repositories</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                    <span>Custom analytics</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                    <span>Real-time updates</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                    <span>API access</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                    <span>Custom reports</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                    <span>Dedicated support</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <GetStartedButton />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-background to-muted/50 py-24">
          <div className="px-6 md:px-8 lg:px-12">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex items-center justify-center">
                <div className="relative h-[350px] w-full overflow-hidden rounded-lg border bg-gradient-to-br from-background via-muted to-background p-2 shadow-xl">
                  <Image
                    src="https://placehold.co/1920x1080?text=Dashboard+Preview"
                    width={800}
                    height={600}
                    alt="Analytics dashboard"
                    className="object-cover rounded-md"
                    unoptimized
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground">
                    Make better decisions with data-driven insights
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Dandi helps you understand GitHub repositories at a deeper
                    level, enabling you to make informed decisions about which
                    projects to use, contribute to, or invest in.
                  </p>
                </div>
                <ul className="grid gap-2 py-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Track repository growth and activity</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Identify trending projects early</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Stay updated on critical changes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Discover hidden gems in the open source world</span>
                  </li>
                </ul>
                <div>
                  <GetStartedButton />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="py-24">
          <div className="px-6 md:px-8 lg:px-12">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Frequently Asked Questions
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Got questions? We&apos;ve got answers.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <h3 className="text-xl font-bold">
                  How does Dandi access repository data?
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Dandi uses the GitHub API to access public repository data. We
                  never store your code, only metadata and analytics about
                  repositories.
                </p>
              </div>
              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <h3 className="text-xl font-bold">
                  Can I analyze private repositories?
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Yes, with our Pro and Enterprise plans, you can connect your
                  GitHub account to analyze private repositories that you have
                  access to.
                </p>
              </div>
              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <h3 className="text-xl font-bold">
                  How often is the data updated?
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Free tier data is updated daily. Pro tier gets hourly updates,
                  and Enterprise tier can access real-time updates for critical
                  repositories.
                </p>
              </div>
              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <h3 className="text-xl font-bold">
                  Can I export the analytics data?
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Yes, Pro and Enterprise plans allow you to export data in
                  various formats including CSV, JSON, and PDF reports.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-primary text-primary-foreground py-24">
          <div className="px-6 md:px-8 lg:px-12">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Ready to get started?
                </h2>
                <p className="max-w-[600px] md:text-xl opacity-90">
                  Join thousands of developers and teams who use Dandi to make
                  better decisions about open source software.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <input type="email" placeholder="Email" />
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary-foreground/20 hover:border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
                  >
                    Contact Sales
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-background">
        <div className="flex flex-col gap-8 py-10 md:py-16 px-6 md:px-8 lg:px-12">
          <div className="flex flex-col gap-6 md:flex-row md:justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Github className="h-6 w-6" />
                <span className="text-xl font-bold">Dandi</span>
              </div>
              <p className="max-w-[350px] text-sm text-muted-foreground">
                Unlock the power of GitHub repositories with data-driven
                insights and analytics.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
              <div className="space-y-3">
                <h4 className="text-sm font-medium">Product</h4>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="#features"
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#pricing"
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      Roadmap
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="text-sm font-medium">Company</h4>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      Careers
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="text-sm font-medium">Legal</h4>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      Privacy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      Terms
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      Cookie Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Dandi. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <span className="sr-only">GitHub</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
