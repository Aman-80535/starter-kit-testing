import { publicMetadata } from "@/lib/seo/metadata"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { MarketingShell, PageIntro } from "@/components/marketing/shell"
import { Pricing } from "@/components/marketing/pricing"
import { FaqList } from "@/components/marketing/faq-list"
import { getPublicPricing } from "@/lib/billing/public"
import { billingFaqs } from "@/config/marketing"

export const dynamic = "force-dynamic"

export const metadata = publicMetadata({
  path: "/pricing",
  title: "Pricing",
  description:
    "Explore monthly and yearly workspace subscriptions. Simple pricing, no per-seat charges.",
})

export default async function PricingPage() {
  const pricing = await getPublicPricing()
  return (
    <MarketingShell>
     <section className="marketing-container public-page-section">
  <PageIntro
    eyebrow="PRICING"
    title="Simple pricing."
    accent="Built for product teams."
  >
    Choose a plan that fits your team. Collect customer feedback, prioritize
    requests, and manage your product roadmap in one place.
  </PageIntro>

  <Pricing {...pricing} />

  <p className="public-pricing-context">
    Choose the plan that fits your team and start turning customer feedback
    into better product decisions.
  </p>
</section>
      <section className="marketing-container marketing-section marketing-faq">
        <div className="section-heading">
          <span className="marketing-eyebrow">THE DETAILS</span>
          <h2>
            A little clarity.
            <br />
            <span>Before you commit.</span>
          </h2>
          <p>Answers to the most common billing questions.</p>
          <Link href="/contact" className="marketing-inline-link">
            Talk to us <ArrowUpRight size={15} />
          </Link>
        </div>
        <FaqList items={billingFaqs} />
      </section>
    </MarketingShell>
  )
}
