import Link from "next/link"
import Image from "next/image"
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Layers,
} from "lucide-react"
import { Testimonials } from "@/components/marketing/testimonials"
import { IncludedFeatures } from "@/components/marketing/included-features"
import { MarketingShell } from "@/components/marketing/shell"
import { FaqList } from "@/components/marketing/faq-list"
import { Pricing } from "@/components/marketing/pricing"
import { getPublicPricing } from "@/lib/billing/public"
import { ProductExplorer } from "@/components/marketing/product-explorer"
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
      {/* <section
        className="marketing-hero marketing-container"
        aria-labelledby="hero-title"
      >
        <div className="hero-copy">
          <a href="#product" className="hero-eyebrow">
            <span className="mini-brand" aria-hidden="true">
              f.
            </span>{" "}
            Next.js SaaS starter <ArrowRight size={12} />
          </a>
          <h1 id="hero-title">
            Build your SaaS.
            <br />
            <span>Skip the boilerplate.</span>
          </h1>
          <p>{marketing.description}</p>
          <div className="marketing-actions">
            <a className="marketing-button marketing-button-dark" href="#demo">
              Explore the demo <ArrowUpRight size={16} />
            </a>
            <a
              className="marketing-button marketing-button-light"
              href="#product"
            >
              See what’s inside <ArrowDown size={15} />
            </a>
          </div>
          <div className="hero-details">
            <span>
              <Code2 size={13} /> Customizable source code
            </span>
            <span>
              <Layers size={13} /> Your own service accounts
            </span>
          </div>
        </div>
        <ProductExplorer brand={site.name} />
        <div className="marketing-stack">
          <p>
            Built with Next.js, Supabase, Stripe, Resend, Vercel, and shadcn/ui.
          </p>
          <div>
            <span className="stack-next">Next.js</span>
            <span className="stack-supabase">
              <span aria-hidden="true">ϟ</span> Supabase
            </span>
            <span className="stack-stripe">stripe</span>
            <span className="stack-resend" role="img" aria-label="Resend">
              <Image
                src="/brands/resend-wordmark-black.svg"
                alt=""
                width={99}
                height={21}
                className="stack-resend-light"
              />
              <Image
                src="/brands/resend-wordmark-white.svg"
                alt=""
                width={99}
                height={21}
                className="stack-resend-dark"
              />
            </span>
            <span className="stack-vercel">
              <span aria-hidden="true">▲</span> Vercel
            </span>
            <span className="stack-shadcn">
              <span aria-hidden="true">╱╱</span> shadcn/ui
            </span>
          </div>
        </div>
      </section> */}


<div className="min-h-screen bg-white text-slate-900">

  {/* <header className="flex items-center justify-between px-8 py-5 border-b border-gray-100">
    <a href="#" className="text-2xl font-bold tracking-tight">
      Ship<span className="text-violet-600">&</span>Scale
    </a>

    <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
      <a href="#features" className="hover:text-violet-600">Features</a>
      <a href="#how-it-works" className="hover:text-violet-600">How it works</a>
      <a href="#pricing" className="hover:text-violet-600">Pricing</a>
      <a href="#faq" className="hover:text-violet-600">FAQ</a>
    </nav>

    <div className="flex items-center gap-4">
      <a href="/login" className="hidden sm:block text-sm font-medium">Sign in</a>
      <a href="/signup" className="rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white hover:bg-violet-700">
        Get started →
      </a>
    </div>
  </header> */}

  <section className="px-6 py-24 text-center md:py-32">
    <div className="mx-auto max-w-4xl">
      <span className="inline-flex items-center gap-2 rounded-full border border-violet-100 bg-violet-50 px-4 py-2 text-sm font-medium text-violet-700">
        ✨ Your SaaS journey starts here
      </span>

      <h1 className="mt-8 text-5xl font-extrabold leading-tight tracking-tight md:text-7xl">
        Launch your SaaS faster.
        <span className="text-violet-600">Focus on what matters.</span>
      </h1>

      <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-500">
        Everything you need to build, launch, and scale your SaaS product.
        Authentication, billing, dashboards, and AI features in one powerful starter kit.
      </p>

      <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
        <a href="/signup" className="rounded-xl bg-violet-600 px-8 py-4 font-semibold text-white shadow-lg shadow-violet-200 hover:bg-violet-700">
          Start building for free →
        </a>
        <a href="#features" className="rounded-xl border border-gray-200 px-8 py-4 font-semibold hover:bg-gray-50">
          Explore features
        </a>
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-500">
        <span>✓ Ready-to-use components</span>
        <span>✓ Developer friendly</span>
        <span>✓ Deploy in minutes</span>
      </div>
    </div>

    <div className="mx-auto mt-16 max-w-5xl overflow-hidden rounded-2xl border border-gray-200 bg-white text-left shadow-2xl shadow-violet-100">
      <div className="flex items-center gap-2 border-b border-gray-100 bg-gray-50 px-5 py-4">
        <span className="h-3 w-3 rounded-full bg-red-400"></span>
        <span className="h-3 w-3 rounded-full bg-yellow-400"></span>
        <span className="h-3 w-3 rounded-full bg-green-400"></span>
        <span className="ml-4 text-xs text-gray-400">app.shipandscale.dev/dashboard</span>
      </div>

      <div className="grid md:grid-cols-4">
        <aside className="hidden border-r border-gray-100 p-5 md:block">
          <div className="mb-8 font-bold text-violet-600">SaaS Dashboard</div>
          <div className="space-y-4 text-sm text-gray-500">
            <p className="rounded-lg bg-violet-50 p-3 font-medium text-violet-700">▦ Overview</p>
            <p className="p-3">◫ Analytics</p>
            <p className="p-3">♙ Customers</p>
            <p className="p-3">⚙ Settings</p>
          </div>
        </aside>

        <div className="p-6 md:col-span-3">
          <h3 className="text-xl font-bold">Welcome back, Alex 👋</h3>
          <p className="mt-1 text-sm text-gray-500">Here's what's happening with your business.</p>

          <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-3">
            <div className="rounded-xl border border-gray-100 p-4">
              <p className="text-xs text-gray-500">Total Revenue</p>
              <h4 className="mt-2 text-2xl font-bold">$24,500</h4>
              <p className="mt-2 text-xs text-green-600">↑ 12.5% this month</p>
            </div>
            <div className="rounded-xl border border-gray-100 p-4">
              <p className="text-xs text-gray-500">Active Users</p>
              <h4 className="mt-2 text-2xl font-bold">1,284</h4>
              <p className="mt-2 text-xs text-green-600">↑ 8.2% this month</p>
            </div>
            <div className="col-span-2 rounded-xl border border-gray-100 p-4 lg:col-span-1">
              <p className="text-xs text-gray-500">Conversion Rate</p>
              <h4 className="mt-2 text-2xl font-bold">4.8%</h4>
              <p className="mt-2 text-xs text-green-600">↑ 2.4% this month</p>
            </div>
          </div>

          <div className="mt-5 rounded-xl bg-violet-50 p-6">
            <p className="text-sm font-semibold text-violet-900">Your next big idea starts here.</p>
            <p className="mt-2 text-sm text-violet-700">Build features, manage customers, and grow your SaaS from one place.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="features" className="bg-gray-50 px-6 py-24">
    <div className="mx-auto max-w-6xl">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-sm font-semibold uppercase tracking-widest text-violet-600">Features</span>
        <h2 className="mt-4 text-4xl font-bold tracking-tight">Everything you need to ship</h2>
        <p className="mt-4 leading-7 text-gray-500">
          Skip repetitive setup and focus on building a product your customers love.
        </p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

        <div className="rounded-2xl border border-gray-100 bg-white p-8 transition hover:-translate-y-1 hover:shadow-lg">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100 text-2xl">🔐</div>
          <h3 className="mt-6 text-lg font-bold">Authentication</h3>
          <p className="mt-3 text-sm leading-6 text-gray-500">Secure sign-up, login, and user account management, ready to customize.</p>
        </div>

        <div className="rounded-2xl border border-gray-100 bg-white p-8 transition hover:-translate-y-1 hover:shadow-lg">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-2xl">💳</div>
          <h3 className="mt-6 text-lg font-bold">Billing & Subscriptions</h3>
          <p className="mt-3 text-sm leading-6 text-gray-500">Manage subscription plans, payments, and customer billing with Stripe integration.</p>
        </div>

        <div className="rounded-2xl border border-gray-100 bg-white p-8 transition hover:-translate-y-1 hover:shadow-lg">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-2xl">📊</div>
          <h3 className="mt-6 text-lg font-bold">Admin Dashboard</h3>
          <p className="mt-3 text-sm leading-6 text-gray-500">Monitor users, manage your application, and view important business metrics.</p>
        </div>

        <div className="rounded-2xl border border-gray-100 bg-white p-8 transition hover:-translate-y-1 hover:shadow-lg">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-2xl">🤖</div>
          <h3 className="mt-6 text-lg font-bold">AI Integration</h3>
          <p className="mt-3 text-sm leading-6 text-gray-500">Add AI-powered features to your application and create smarter workflows.</p>
        </div>

        <div className="rounded-2xl border border-gray-100 bg-white p-8 transition hover:-translate-y-1 hover:shadow-lg">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-100 text-2xl">✉️</div>
          <h3 className="mt-6 text-lg font-bold">Email Notifications</h3>
          <p className="mt-3 text-sm leading-6 text-gray-500">Send transactional emails, onboarding messages, and important updates.</p>
        </div>

        <div className="rounded-2xl border border-gray-100 bg-white p-8 transition hover:-translate-y-1 hover:shadow-lg">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 text-2xl">🚀</div>
          <h3 className="mt-6 text-lg font-bold">One-click Deployment</h3>
          <p className="mt-3 text-sm leading-6 text-gray-500">Deploy your application with a modern development stack and production-ready foundation.</p>
        </div>

      </div>
    </div>
  </section>

  <section id="how-it-works" className="px-6 py-24">
    <div className="mx-auto max-w-6xl">
      <div className="text-center">
        <span className="text-sm font-semibold uppercase tracking-widest text-violet-600">How it works</span>
        <h2 className="mt-4 text-4xl font-bold">From idea to launch in 3 steps</h2>
      </div>

      <div className="mt-14 grid gap-8 md:grid-cols-3">
        <div className="rounded-2xl border border-gray-100 p-8">
          <span className="text-4xl font-extrabold text-violet-200">01</span>
          <h3 className="mt-5 text-xl font-bold">Get the starter kit</h3>
          <p className="mt-3 text-sm leading-6 text-gray-500">Start with a prebuilt foundation and the core features your SaaS needs.</p>
        </div>

        <div className="rounded-2xl border border-gray-100 p-8">
          <span className="text-4xl font-extrabold text-violet-200">02</span>
          <h3 className="mt-5 text-xl font-bold">Customize your product</h3>
          <p className="mt-3 text-sm leading-6 text-gray-500">Make it your own by adding features, changing the design, and connecting services.</p>
        </div>

        <div className="rounded-2xl border border-gray-100 p-8">
          <span className="text-4xl font-extrabold text-violet-200">03</span>
          <h3 className="mt-5 text-xl font-bold">Launch and scale</h3>
          <p className="mt-3 text-sm leading-6 text-gray-500">Deploy your app, onboard customers, and continue improving your product.</p>
        </div>
      </div>
    </div>
  </section>

  <section id="pricing" className="bg-gray-50 px-6 py-24">
    <div className="mx-auto max-w-5xl">
      <div className="text-center">
        <span className="text-sm font-semibold uppercase tracking-widest text-violet-600">Pricing</span>
        <h2 className="mt-4 text-4xl font-bold">Simple plans for every stage</h2>
        <p className="mt-4 text-gray-500">Choose the plan that fits your product's needs.</p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-gray-200 bg-white p-8">
          <h3 className="text-xl font-bold">Starter</h3>
          <p className="mt-3 text-sm text-gray-500">For developers building their first SaaS.</p>
          <p className="mt-6 text-4xl font-extrabold">Free</p>
          <ul className="mt-8 space-y-4 text-sm text-gray-600">
            <li>✓ Core starter kit</li>
            <li>✓ Authentication setup</li>
            <li>✓ Dashboard components</li>
            <li>✓ Community support</li>
          </ul>
          <a href="/signup" className="mt-8 block rounded-xl border border-gray-200 px-5 py-3 text-center font-semibold hover:bg-gray-50">Get started</a>
        </div>

        <div className="relative rounded-2xl border-2 border-violet-600 bg-white p-8 shadow-xl shadow-violet-100">
          <span className="absolute right-6 top-6 rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-700">POPULAR</span>
          <h3 className="text-xl font-bold">Pro</h3>
          <p className="mt-3 text-sm text-gray-500">For teams ready to launch and scale.</p>
          <p className="mt-6 text-4xl font-extrabold">$49<span className="text-base font-normal text-gray-500">/month</span></p>
          <ul className="mt-8 space-y-4 text-sm text-gray-600">
            <li>✓ Everything in Starter</li>
            <li>✓ Advanced dashboard</li>
            <li>✓ Billing integration</li>
            <li>✓ AI feature foundation</li>
            <li>✓ Priority support</li>
          </ul>
          <a href="/signup" className="mt-8 block rounded-xl bg-violet-600 px-5 py-3 text-center font-semibold text-white hover:bg-violet-700">Choose Pro</a>
        </div>
      </div>
    </div>
  </section>

  <section className="px-6 py-24">
    <div className="mx-auto max-w-5xl rounded-3xl bg-violet-600 px-8 py-16 text-center text-white md:px-16">
      <h2 className="text-4xl font-extrabold tracking-tight">Ready to build something great?</h2>
      <p className="mx-auto mt-5 max-w-2xl leading-7 text-violet-100">
        Start with a solid foundation and turn your idea into a real product.
      </p>
      <a href="/signup" className="mt-8 inline-block rounded-xl bg-white px-8 py-4 font-semibold text-violet-700 hover:bg-violet-50">
        Start building today →
      </a>
    </div>
  </section>

  <section id="faq" className="px-6 py-20">
    <div className="mx-auto max-w-3xl">
      <h2 className="text-center text-3xl font-bold">Frequently asked questions</h2>

      <div className="mt-10 space-y-4">
        <details className="rounded-xl border border-gray-200 p-5">
          <summary className="cursor-pointer font-semibold">What is Ship & Scale?</summary>
          <p className="mt-4 text-sm leading-6 text-gray-500">Ship & Scale is a SaaS starter kit designed to help developers build and launch applications with reusable features and integrations.</p>
        </details>

        <details className="rounded-xl border border-gray-200 p-5">
          <summary className="cursor-pointer font-semibold">Can I customize the starter kit?</summary>
          <p className="mt-4 text-sm leading-6 text-gray-500">Yes. You can customize the design, add features, and adapt the application to your product requirements.</p>
        </details>

        <details className="rounded-xl border border-gray-200 p-5">
          <summary className="cursor-pointer font-semibold">Do I need coding experience?</summary>
          <p className="mt-4 text-sm leading-6 text-gray-500">Basic knowledge of web development and the project's technology stack will help you customize and extend the starter kit.</p>
        </details>
      </div>
    </div>
  </section>

  {/* <footer className="border-t border-gray-100 px-8 py-10">
    <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 md:flex-row">
      <a href="#" className="text-xl font-bold">
        Ship<span className="text-violet-600">&</span>Scale
      </a>

      <p className="text-sm text-gray-500">© 2026 Ship & Scale. All rights reserved.</p>

      <div className="flex gap-6 text-sm text-gray-500">
        <a href="#features" className="hover:text-violet-600">Features</a>
        <a href="#pricing" className="hover:text-violet-600">Pricing</a>
        <a href="#faq" className="hover:text-violet-600">FAQ</a>
      </div>
    </div>
  </footer> */}

</div>

      <IncludedFeatures />

      <Testimonials />

      <section
        id="pricing"
        className="marketing-section marketing-container marketing-pricing"
        aria-labelledby="pricing-title"
      >
        <div className="section-heading">
          <span className="marketing-eyebrow">WORKSPACE PRICING</span>
          <h2 id="pricing-title">
            A plan for your business.
            <br />
            <span>Room to make it yours.</span>
          </h2>
          <p>
            Simple monthly or yearly subscriptions, managed right inside your
            workspace.
          </p>
        </div>
        <Pricing {...pricing} />
        <Link
          href="/pricing"
          className="marketing-inline-link pricing-page-link"
        >
          Explore pricing <ArrowRight size={15} />
        </Link>
      </section>

      <section
        id="faq"
        className="marketing-section marketing-container marketing-faq"
        aria-labelledby="faq-title"
      >
        <div className="section-heading">
          <span className="marketing-eyebrow">FAQ</span>
          <h2 id="faq-title">
            Before you
            <br />
            <span>start building.</span>
          </h2>
          <p>What you get, what you need, and how customization works.</p>
          <Link className="marketing-inline-link" href="/faq">
            Explore all FAQs <ArrowUpRight size={14} />
          </Link>
        </div>
        <FaqList items={marketing.faqs} />
      </section>

      {/* <section
        className="marketing-closing marketing-container"
        aria-labelledby="closing-title"
      >
        <div className="closing-mark" aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
        <span className="marketing-eyebrow">BUILD YOUR SAAS</span>
        <h2 id="closing-title">
          Start with the starter.
          <br />
          <span>Build your product.</span>
        </h2>
        <p>
          Explore the authentication, workspace, and settings flows before you
          build on them.
        </p>
        <div className="marketing-actions">
          <a href="#demo" className="marketing-button marketing-button-dark">
            Explore the demo <ArrowUpRight size={16} />
          </a>
          <Link
            href="/docs"
            className="marketing-button marketing-button-light"
          >
            Read the docs <ArrowRight size={15} />
          </Link>
        </div>
      </section> */}
    </MarketingShell>
  )
}
