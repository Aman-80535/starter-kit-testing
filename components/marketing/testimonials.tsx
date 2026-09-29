import {
  BarChart3,
  MessageSquare,
  Route,
  ThumbsUp,
} from "lucide-react"

const benefits = [
  {
    icon: MessageSquare,
    title: "One place for customer feedback",
    description:
      "Collect product ideas, feature requests, and customer problems without spreading feedback across different channels.",
  },
  {
    icon: ThumbsUp,
    title: "Understand what customers want",
    description:
      "Let customers vote on requests so your team can see which ideas are getting the most interest.",
  },
  {
    icon: Route,
    title: "Connect feedback to your roadmap",
    description:
      "Move valuable requests from review into planned work and keep progress visible through your product roadmap.",
  },
  {
    icon: BarChart3,
    title: "Make feedback actionable",
    description:
      "Use statuses, priorities, categories, votes, and discussions to turn customer input into clearer product decisions.",
  },
]

export function Testimonials() {
  return (
    <section
      id="why-feedbackflow"
      className="marketing-testimonials marketing-section marketing-container"
      aria-labelledby="why-feedbackflow-title"
    >
      <div className="section-heading">
        <span className="marketing-eyebrow">WHY FEEDBACKFLOW</span>

        <h2 id="why-feedbackflow-title">
          Turn customer input
          <br />
          <span>into product progress.</span>
        </h2>

        <p>
          FeedbackFlow connects customer feedback, voting, prioritization, and
          roadmap management so your team can make product decisions with
          clearer customer context.
        </p>
      </div>

      <div className="testimonial-grid">
        {benefits.map(({ icon: Icon, title, description }) => (
          <article className="testimonial-card" key={title}>
            <span className="testimonial-quote-mark" aria-hidden="true">
              <Icon size={22} />
            </span>

            <div>
              <h3 className="testimonial-headline">{title}</h3>

              <p className="testimonial-body">{description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}