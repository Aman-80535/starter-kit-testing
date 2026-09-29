import Link from "next/link"
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  CircleCheck,
  Clock3,
  MessageSquare,
  MessagesSquare,
  Lightbulb,
  ListChecks,
  Megaphone,
  Plus,
  Rocket,
  ThumbsUp,
  TrendingUp,
  Users,
} from "lucide-react"
import { Testimonials } from "@/components/marketing/testimonials"
import { IncludedFeatures } from "@/components/marketing/included-features"
import { MarketingShell } from "@/components/marketing/shell"
import { FaqList } from "@/components/marketing/faq-list"
import { Pricing } from "@/components/marketing/pricing"
import { getPublicPricing } from "@/lib/billing/public"
import { marketing } from "@/config/marketing"
import { site } from "@/config/site"
import { absoluteUrl, publicMetadata } from "@/lib/seo/metadata"
import { JsonLd } from "@/components/seo/json-ld"
import "./marketing.css"

export const dynamic = "force-dynamic"

export const metadata = publicMetadata({
  title: marketing.title,
  description: marketing.description,
  path: "/",
  markdown: "/index.md",
})

const feedbackItems = [
  {
    title: "Add dark mode to the dashboard",
    votes: 128,
    status: "Planned",
    statusClass: "bg-orange-100 text-orange-700 dark:bg-orange-950 dark:text-orange-300",
    icon: Lightbulb,
  },
  {
    title: "Export feedback as CSV",
    votes: 94,
    status: "In Progress",
    statusClass: "bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300",
    icon: TrendingUp,
  },
  {
    title: "Public roadmap",
    votes: 76,
    status: "Completed",
    statusClass: "bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300",
    icon: CircleCheck,
  },
]

export default async function Home() {
  const pricing = await getPublicPricing()

  return (
    <MarketingShell cookieConsent>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          "@id": absoluteUrl("/#website"),
          name: site.name,
          url: absoluteUrl("/"),
          description: marketing.description,
        }}
      />

      <main className="min-h-screen bg-background text-foreground">
        {/* Hero */}

        <section className="relative overflow-hidden border-b border-border">
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -right-32 top-32 h-80 w-80 rounded-full bg-orange-500/10 blur-3xl" />
          </div>

          <div className="mx-auto max-w-7xl px-6 pb-20 pt-24 md:px-8 md:pb-28 md:pt-32">
            <div className="mx-auto max-w-4xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                <Megaphone size={15} />
                Customer feedback, organized
              </div>

              <h1 className="mt-8 text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl">
                Turn customer feedback into
                <span className="block text-primary">
                  products people love.
                </span>
              </h1>

              <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
                FeedbackFlow helps product teams collect feedback, let
                customers vote, prioritize ideas, and keep everyone aligned
                with a clear product roadmap.
              </p>

              <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  href="/signup"
                  className="feedback-button inline-flex items-center justify-center gap-2 bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20"
                >
                  Start collecting feedback
                  <ArrowRight size={17} />
                </Link>

                <Link
                  href="#product-preview"
                  className="feedback-button inline-flex items-center justify-center gap-2 border border-border bg-card px-7 py-3.5 text-sm font-semibold text-foreground hover:bg-muted"
                >
                  See how it works
                  <ArrowUpRight size={17} />
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap justify-center gap-x-7 gap-y-3 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-2">
                  <Check size={15} className="text-primary" />
                  Collect customer ideas
                </span>

                <span className="inline-flex items-center gap-2">
                  <Check size={15} className="text-primary" />
                  Prioritize with votes
                </span>

                <span className="inline-flex items-center gap-2">
                  <Check size={15} className="text-primary" />
                  Share your roadmap
                </span>
              </div>
            </div>

            {/* Product preview */}

            <div
              id="product-preview"
              className="feedback-glow mx-auto mt-16 max-w-6xl overflow-hidden rounded-2xl border border-border bg-card"
            >
              <div className="flex items-center justify-between border-b border-border bg-muted/60 px-5 py-4">
                <div className="flex items-center gap-2">
                  <div className="feedback-brand-mark flex h-8 w-8 items-center justify-center rounded-lg text-sm font-bold">
                    F
                  </div>

                  <span className="feedback-brand text-lg">
                    FeedbackFlow
                  </span>
                </div>

                <div className="hidden items-center gap-2 text-xs text-muted-foreground sm:flex">
                  <span className="h-2 w-2 rounded-full bg-green-500" />
                  Workspace active
                </div>
              </div>

              <div className="grid md:grid-cols-[220px_1fr]">
                <aside className="hidden border-r border-border bg-muted/30 p-5 md:block">
                  <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Workspace
                  </p>

                  <div className="space-y-1">
                    <div className="flex items-center gap-3 rounded-lg bg-primary/10 px-3 py-2.5 text-sm font-semibold text-primary">
                      <MessageSquare size={16} />
                      Feedback
                    </div>

                    <div className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-muted-foreground">
                      <Rocket size={16} />
                      Roadmap
                    </div>

                    <div className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-muted-foreground">
                      <Users size={16} />
                      Customers
                    </div>

                    <div className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-muted-foreground">
                      <TrendingUp size={16} />
                      Insights
                    </div>
                  </div>

                  <div className="mt-8 border-t border-border pt-6">
                    <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      Roadmap
                    </p>

                    <div className="space-y-3 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Now</span>
                        <span className="font-semibold">4</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Next</span>
                        <span className="font-semibold">7</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">
                          Planned
                        </span>
                        <span className="font-semibold">12</span>
                      </div>
                    </div>
                  </div>
                </aside>

                <div className="p-6 md:p-8">
                  <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
                    <div>
                      <p className="text-sm font-medium text-primary">
                        Product feedback
                      </p>

                      <h2 className="mt-1 text-2xl font-bold tracking-tight">
                        What should we build next?
                      </h2>

                      <p className="mt-2 text-sm text-muted-foreground">
                        See what your customers are asking for.
                      </p>
                    </div>

                    <button className="feedback-button inline-flex items-center justify-center gap-2 self-start rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground">
                      <Plus size={16} />
                      Submit feedback
                    </button>
                  </div>

                  <div className="mt-7 space-y-3">
                    {feedbackItems.map((item) => {
                      const Icon = item.icon

                      return (
                        <div
                          key={item.title}
                          className="rounded-xl border border-border bg-background p-4 transition hover:border-primary/30 hover:shadow-sm"
                        >
                          <div className="flex gap-4">
                            <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary sm:flex">
                              <Icon size={18} />
                            </div>

                            <div className="min-w-0 flex-1">
                              <div className="flex flex-wrap items-center gap-2">
                                <h3 className="font-semibold">
                                  {item.title}
                                </h3>

                                <span
                                  className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${item.statusClass}`}
                                >
                                  {item.status}
                                </span>
                              </div>

                              <div className="mt-2 flex items-center gap-4 text-xs text-muted-foreground">
                                <span className="inline-flex items-center gap-1">
                                  <ThumbsUp size={13} />
                                  {item.votes} votes
                                </span>

                                <span>Product</span>
                              </div>
                            </div>

                            <div className="hidden items-center justify-center sm:flex">
                              <div className="rounded-lg border border-border px-3 py-2 text-center">
                                <ThumbsUp
                                  size={14}
                                  className="mx-auto text-muted-foreground"
                                />
                                <span className="mt-1 block text-xs font-semibold">
                                  {item.votes}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core value proposition */}

        <section className="border-b border-border bg-muted/30 px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                FeedbackFlow
              </span>

              <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
                One place for every customer idea.
              </h2>

              <p className="mt-5 leading-7 text-muted-foreground">
                Stop losing valuable product insights across emails, support
                tickets, spreadsheets, and chat messages.
              </p>
            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-3">
              <div className="feedback-card p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <MessagesSquare size={22} />
                </div>

                <h3 className="mt-6 text-xl font-bold">
                  Collect feedback
                </h3>

                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  Give customers a simple place to submit ideas, feature
                  requests, problems, and product suggestions.
                </p>
              </div>

              <div className="feedback-card p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <ThumbsUp size={22} />
                </div>

                <h3 className="mt-6 text-xl font-bold">
                  Let customers vote
                </h3>

                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  Turn scattered requests into measurable demand and quickly
                  see which ideas matter most to your customers.
                </p>
              </div>

              <div className="feedback-card p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <ListChecks size={22} />
                </div>

                <h3 className="mt-6 text-xl font-bold">
                  Prioritize your roadmap
                </h3>

                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  Move valuable ideas from review to planned, in progress, and
                  completed while keeping customers informed.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Workflow */}

        <section className="px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="grid items-center gap-14 lg:grid-cols-2">
              <div>
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                  Simple workflow
                </span>

                <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
                  From customer idea to shipped feature.
                </h2>

                <p className="mt-5 max-w-xl leading-7 text-muted-foreground">
                  FeedbackFlow gives your team a straightforward workflow for
                  turning customer requests into visible product progress.
                </p>

                <div className="mt-9 space-y-6">
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                      1
                    </div>

                    <div>
                      <h3 className="font-bold">Collect</h3>
                      <p className="mt-1 text-sm leading-6 text-muted-foreground">
                        Customers submit feedback and feature requests.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                      2
                    </div>

                    <div>
                      <h3 className="font-bold">Prioritize</h3>
                      <p className="mt-1 text-sm leading-6 text-muted-foreground">
                        Votes, categories, and priorities help your team decide
                        what matters.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                      3
                    </div>

                    <div>
                      <h3 className="font-bold">Deliver</h3>
                      <p className="mt-1 text-sm leading-6 text-muted-foreground">
                        Move requests through your workflow and communicate
                        progress with customers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="feedback-card p-6 md:p-8">
                <div className="flex items-center justify-between border-b border-border pb-5">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      Roadmap
                    </p>
                    <h3 className="mt-1 text-xl font-bold">
                      Product progress
                    </h3>
                  </div>

                  <Rocket className="text-primary" size={22} />
                </div>

                <div className="mt-7 grid gap-4">
                  <div className="rounded-xl border border-border bg-background p-5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                        Now
                      </span>
                      <span className="text-xs text-muted-foreground">
                        4 items
                      </span>
                    </div>

                    <div className="mt-4 space-y-3">
                      <div className="flex items-center gap-3">
                        <CircleCheck
                          size={17}
                          className="text-primary"
                        />
                        <span className="text-sm font-medium">
                          Feedback dashboard
                        </span>
                      </div>

                      <div className="flex items-center gap-3">
                        <CircleCheck
                          size={17}
                          className="text-primary"
                        />
                        <span className="text-sm font-medium">
                          Customer voting
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl border border-border bg-background p-5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                        Next
                      </span>
                      <span className="text-xs text-muted-foreground">
                        7 items
                      </span>
                    </div>

                    <div className="mt-4 flex items-center gap-3">
                      <Clock3 size={17} className="text-primary" />
                      <span className="text-sm font-medium">
                        Advanced feedback filters
                      </span>
                    </div>
                  </div>

                  <div className="rounded-xl border border-border bg-background p-5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Planned
                      </span>
                      <span className="text-xs text-muted-foreground">
                        12 items
                      </span>
                    </div>

                    <div className="mt-4 flex items-center gap-3">
                      <Lightbulb
                        size={17}
                        className="text-muted-foreground"
                      />
                      <span className="text-sm font-medium">
                        Customer segmentation
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature grid */}

        <section className="border-y border-border bg-muted/30 px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Built for product teams
              </span>

              <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
                Everything you need to manage feedback.
              </h2>

              <p className="mt-5 leading-7 text-muted-foreground">
                Keep customer voices, product decisions, and roadmap progress
                connected in one focused workspace.
              </p>
            </div>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <div className="feedback-card p-7">
                <MessageSquare className="text-primary" size={23} />
                <h3 className="mt-5 text-lg font-bold">
                  Feedback collection
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Capture product ideas and requests in one centralized place.
                </p>
              </div>

              <div className="feedback-card p-7">
                <ThumbsUp className="text-primary" size={23} />
                <h3 className="mt-5 text-lg font-bold">
                  Customer voting
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Let customers vote so your team can identify popular requests.
                </p>
              </div>

              <div className="feedback-card p-7">
                <ListChecks className="text-primary" size={23} />
                <h3 className="mt-5 text-lg font-bold">
                  Status management
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Track requests from Under Review to Completed.
                </p>
              </div>

              <div className="feedback-card p-7">
                <Rocket className="text-primary" size={23} />
                <h3 className="mt-5 text-lg font-bold">
                  Product roadmap
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Give customers visibility into what is coming next.
                </p>
              </div>

              <div className="feedback-card p-7">
                <MessagesSquare className="text-primary" size={23} />
                <h3 className="mt-5 text-lg font-bold">
                  Discussions
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Keep conversations around feedback connected to each request.
                </p>
              </div>

              <div className="feedback-card p-7">
                <TrendingUp className="text-primary" size={23} />
                <h3 className="mt-5 text-lg font-bold">
                  Feedback insights
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  See voting activity and feedback trends to support product
                  decisions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Included features from starter */}

        <IncludedFeatures />

        <Testimonials />

        {/* Pricing */}

        <section
          id="pricing"
          className="border-y border-border bg-muted/30 px-6 py-24"
          aria-labelledby="pricing-title"
        >
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Pricing
              </span>

              <h2
                id="pricing-title"
                className="mt-4 text-4xl font-bold tracking-tight md:text-5xl"
              >
                Simple plans for growing products.
              </h2>

              <p className="mt-5 leading-7 text-muted-foreground">
                Start collecting customer feedback and scale your workspace as
                your product grows.
              </p>
            </div>

            <div className="mt-12">
              <Pricing {...pricing} />
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
              >
                Explore pricing
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}

        <section className="px-6 py-24">
          <div className="feedback-gradient mx-auto max-w-6xl overflow-hidden rounded-3xl px-8 py-16 text-center md:px-16">
            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 rounded-full border border-orange-300/20 bg-orange-400/10 px-4 py-2 text-sm font-semibold text-orange-300">
                <Rocket size={15} />
                Build with your customers
              </span>

              <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-extrabold tracking-tight text-white md:text-5xl">
                Your next great feature could already be in your feedback.
              </h2>

              <p className="mx-auto mt-5 max-w-2xl leading-7 text-neutral-300">
                Give your customers a voice, give your team clarity, and turn
                feedback into a product roadmap everyone can understand.
              </p>

              <Link
                href="/signup"
                className="feedback-button mt-8 inline-flex items-center gap-2 bg-primary px-7 py-3.5 font-semibold text-primary-foreground"
              >
                Start with FeedbackFlow
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}

        <section
          id="faq"
          className="border-t border-border px-6 py-24"
          aria-labelledby="faq-title"
        >
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                FAQ
              </span>

              <h2
                id="faq-title"
                className="mt-4 text-4xl font-bold tracking-tight"
              >
                Questions about FeedbackFlow.
              </h2>

              <p className="mt-4 text-muted-foreground">
                Everything you need to know about collecting feedback and
                managing your product roadmap.
              </p>
            </div>

            <div className="mt-10">
              <FaqList
                items={[
                  {
                    question: "What is FeedbackFlow?",
                    answer:
                      "FeedbackFlow is a customer feedback management platform that helps teams collect, organize, vote on, prioritize, and discuss product feedback.",
                  },
                  {
                    question: "Can customers vote on feedback?",
                    answer:
                      "Yes. Customers can vote on feedback and feature requests, helping product teams understand which ideas have the strongest demand.",
                  },
                  {
                    question: "Can I share a product roadmap?",
                    answer:
                      "Yes. FeedbackFlow is designed around a simple roadmap workflow where requests can move through planned, in-progress, and completed stages.",
                  },
                  {
                    question: "Can my team discuss individual feedback?",
                    answer:
                      "Yes. Feedback discussions can stay connected to individual requests so product context does not get lost across different communication tools.",
                  },
                  {
                    question: "Can FeedbackFlow replace spreadsheets for feedback tracking?",
                    answer:
                      "FeedbackFlow is designed to centralize customer requests, votes, statuses, and roadmap progress instead of managing those details manually across spreadsheets.",
                  },
                ]}
              />
            </div>
          </div>
        </section>
      </main>
    </MarketingShell>
  )
}