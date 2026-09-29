import { publicMetadata } from "@/lib/seo/metadata"
import Link from "next/link"
import { ArrowUpRight, MessagesSquare, Mail } from "lucide-react"
import { MarketingShell, PageIntro } from "@/components/marketing/shell"
import { ContactForm } from "@/components/marketing/contact-form"

export const dynamic = "force-dynamic"

export const metadata = publicMetadata({
  path: "/contact",
  title: "Contact",
  description:
    "Have a question about FeedbackFlow, your workspace, or billing? Get in touch.",
})

export default function ContactPage() {
  const ready = Boolean(
    process.env.CONTACT_TO_EMAIL &&
      process.env.RESEND_API_KEY &&
      process.env.RESEND_FROM_EMAIL
  )

  return (
    <MarketingShell>
      <section className="marketing-container public-page-section contact-page">
        <PageIntro
          eyebrow="CONTACT"
          title="Let’s talk about"
          accent="what you’re building."
        >
          Have a question, an idea, or need help with FeedbackFlow? Tell us
          what’s on your mind and we’ll get back to you.
        </PageIntro>

        <div className="contact-layout">
          <aside className="contact-aside">
            <div className="contact-lettermark" aria-hidden="true">
              <Mail size={30} strokeWidth={1.3} />
            </div>

            <h2>
              A conversation{" "}
              <br />
              starts here.
            </h2>

            <p>
              Share a little context so we can point you in the right
              direction. We’ll reply to the email you provide.
            </p>

            <div className="contact-resources">
              <Link href="/faq">
                <MessagesSquare size={19} />
                <span>
                  <strong>Have a quick question?</strong>
                  <small>
                    Explore our frequently asked questions.
                  </small>
                </span>
                <ArrowUpRight size={16} />
              </Link>
            </div>

            <span className="contact-aside-note">
              Your next step doesn’t have to be a guess.
            </span>
          </aside>

          <ContactForm ready={ready} />
        </div>
      </section>
    </MarketingShell>
  )
}