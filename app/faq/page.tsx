import { publicMetadata } from "@/lib/seo/metadata"
import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { MarketingShell, PageIntro } from "@/components/marketing/shell"
import { FaqList } from "@/components/marketing/faq-list"
import { billingFaqs, marketing } from "@/config/marketing"

export const metadata = publicMetadata({
  path: "/faq",
  title: "FAQs",
  description:
    "Answers about FeedbackFlow, customer feedback, product roadmaps, plans, and billing.",
})

export default function FaqPage() {
  return (
    <MarketingShell>
      <section className="marketing-container public-page-section">
        <PageIntro
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          title="Good questions."
          accent="Clear answers."
        >
          Find answers about FeedbackFlow, customer feedback, product
          roadmaps, subscriptions, and billing.
        </PageIntro>

        <div className="faq-page-layout">
          <aside className="faq-page-sidebar">
            <nav aria-label="FAQ topics">
              <a href="#getting-started">
                Getting started <ArrowRight size={14} />
              </a>

              <a href="#plans-and-billing">
                Plans & billing <ArrowRight size={14} />
              </a>
            </nav>
          </aside>

          <div className="faq-groups">
            <section id="getting-started">
              <h2>Getting started</h2>
              <FaqList items={marketing.faqs} />
            </section>

            <section id="plans-and-billing">
              <h2>Plans & billing</h2>
              <FaqList items={billingFaqs} />
            </section>
          </div>
        </div>

        <div className="public-help-banner">
          <div>
            <h2>Still have something on your mind?</h2>

            <p>
              Tell us what you’re working on. We’ll help you find the next
              step.
            </p>
          </div>

          <Link
            href="/contact"
            className="marketing-button marketing-button-dark"
          >
            Get in touch <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </MarketingShell>
  )
}