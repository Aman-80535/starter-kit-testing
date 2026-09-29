import {
  Check,
  ChevronDown,
  MessageSquare,
  MoreHorizontal,
  Plus,
  Target,
  ThumbsUp,
  ListChecks,
  BarChart3,
  CircleDot,
} from "lucide-react"
import type { ReactNode } from "react"

function ProductWindow({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <div className="included-window">
      <div className="included-window-bar">
        <span className="included-window-dots">
          <i />
          <i />
          <i />
        </span>
        <span>{title}</span>
        <MoreHorizontal size={16} />
      </div>
      {children}
    </div>
  )
}

function FeedbackVisual() {
  return (
    <ProductWindow title="Customer feedback">
      <div className="included-feedback">
        <div className="included-feedback-heading">
          <div>
            <strong>Feedback</strong>
            <small>Customer requests</small>
          </div>
          <button type="button">
            <Plus size={15} />
            New
          </button>
        </div>

        <div className="included-feedback-item">
          <span className="included-app-icon">
            <MessageSquare size={18} />
          </span>
          <div>
            <strong>Dark mode for reports</strong>
            <small>Better visibility for users working at night</small>
          </div>
          <span className="included-pill">18 votes</span>
        </div>

        <div className="included-feedback-item">
          <span className="included-app-icon">
            <CircleDot size={18} />
          </span>
          <div>
            <strong>Export analytics as CSV</strong>
            <small>Requested by multiple customers</small>
          </div>
          <span className="included-pill">12 votes</span>
        </div>

        <div className="included-feedback-item">
          <span className="included-app-icon">
            <Target size={18} />
          </span>
          <div>
            <strong>Custom notification settings</strong>
            <small>Control which updates customers receive</small>
          </div>
          <span className="included-pill">8 votes</span>
        </div>
      </div>

      <div className="included-window-footer">
        <MessageSquare size={14} /> All customer requests in one place
      </div>
    </ProductWindow>
  )
}

function VotingVisual() {
  return (
    <ProductWindow title="Feature request">
      <div className="included-voting">
        <div className="included-voting-card">
          <div>
            <span className="included-app-icon">
              <ThumbsUp size={18} />
            </span>
            <div>
              <strong>Advanced search</strong>
              <small>Search feedback across projects and categories</small>
            </div>
          </div>

          <button type="button" className="included-vote-button">
            <ThumbsUp size={15} />
            <strong>42</strong>
            votes
          </button>
        </div>

        <div className="included-voting-meta">
          <span>Productivity</span>
          <span>High priority</span>
        </div>

        <div className="included-voting-progress">
          <div>
            <span>Customer interest</span>
            <strong>High</strong>
          </div>
          <div className="included-progress-track">
            <span />
          </div>
        </div>

        <div className="included-voting-comment">
          <MessageSquare size={14} />
          8 customers are discussing this request
        </div>
      </div>
    </ProductWindow>
  )
}

function PrioritizationVisual() {
  return (
    <ProductWindow title="Review & prioritize">
      <div className="included-priority">
        <div className="included-priority-header">
          <div>
            <strong>Feedback review</strong>
            <small>Decide what moves forward</small>
          </div>
          <ChevronDown size={15} />
        </div>

        <div className="included-priority-item">
          <span className="included-priority-indicator" />
          <div>
            <strong>Advanced search</strong>
            <small>42 votes · Productivity</small>
          </div>
          <span className="included-priority-status">High</span>
        </div>

        <div className="included-priority-item">
          <span className="included-priority-indicator" />
          <div>
            <strong>CSV exports</strong>
            <small>27 votes · Analytics</small>
          </div>
          <span className="included-priority-status">Medium</span>
        </div>

        <div className="included-priority-item">
          <span className="included-priority-indicator" />
          <div>
            <strong>Custom notifications</strong>
            <small>18 votes · Settings</small>
          </div>
          <span className="included-priority-status">Low</span>
        </div>
      </div>

      <div className="included-window-footer">
        <ListChecks size={14} /> Turn feedback into actionable priorities
      </div>
    </ProductWindow>
  )
}

function RoadmapVisual() {
  return (
    <ProductWindow title="Product roadmap">
      <div className="included-roadmap">
        <div className="included-roadmap-column">
          <span className="included-roadmap-label">NOW</span>
          <div className="included-roadmap-card">
            <strong>Advanced search</strong>
            <small>In Progress</small>
          </div>
          <div className="included-roadmap-card">
            <strong>CSV exports</strong>
            <small>In Progress</small>
          </div>
        </div>

        <div className="included-roadmap-column">
          <span className="included-roadmap-label">NEXT</span>
          <div className="included-roadmap-card">
            <strong>Custom notifications</strong>
            <small>Planned</small>
          </div>
          <div className="included-roadmap-card">
            <strong>Team reports</strong>
            <small>Planned</small>
          </div>
        </div>

        <div className="included-roadmap-column">
          <span className="included-roadmap-label">PLANNED</span>
          <div className="included-roadmap-card">
            <strong>Mobile dashboard</strong>
            <small>Planned</small>
          </div>
        </div>
      </div>
    </ProductWindow>
  )
}

function DiscussionVisual() {
  return (
    <ProductWindow title="Feedback discussion">
      <div className="included-discussion">
        <div className="included-discussion-request">
          <span className="included-app-icon">
            <MessageSquare size={18} />
          </span>
          <div>
            <strong>Advanced search</strong>
            <small>42 votes · In Progress</small>
          </div>
        </div>

        <div className="included-comment">
          <span className="included-avatar">JD</span>
          <div>
            <strong>Jamie Davis</strong>
            <p>
              This would make finding older feedback much easier for our team.
            </p>
          </div>
        </div>

        <div className="included-comment">
          <span className="included-avatar">AL</span>
          <div>
            <strong>Alex Lee</strong>
            <p>
              Agreed. We are planning this for the next release.
            </p>
          </div>
        </div>

        <div className="included-comment-compose">
          <span>Add a comment...</span>
          <span className="included-send">
            <MessageSquare size={15} />
          </span>
        </div>
      </div>
    </ProductWindow>
  )
}

function InsightsVisual() {
  return (
    <ProductWindow title="Feedback insights">
      <div className="included-insights">
        <div className="included-insight-grid">
          <div className="included-insight-card">
            <small>Total feedback</small>
            <strong>248</strong>
            <span>+18% this month</span>
          </div>

          <div className="included-insight-card">
            <small>Total votes</small>
            <strong>1,482</strong>
            <span>+24% this month</span>
          </div>

          <div className="included-insight-card">
            <small>Completed</small>
            <strong>36</strong>
            <span>Requests delivered</span>
          </div>

          <div className="included-insight-card">
            <small>Under review</small>
            <strong>42</strong>
            <span>Requests awaiting review</span>
          </div>
        </div>

        <div className="included-insight-chart">
          <div>
            <span>Feedback activity</span>
            <BarChart3 size={17} />
          </div>

          <div className="included-chart-bars">
            <i style={{ height: "38%" }} />
            <i style={{ height: "52%" }} />
            <i style={{ height: "46%" }} />
            <i style={{ height: "68%" }} />
            <i style={{ height: "58%" }} />
            <i style={{ height: "82%" }} />
            <i style={{ height: "74%" }} />
          </div>
        </div>
      </div>
    </ProductWindow>
  )
}

const features = [
  {
    id: "feedback",
    title: "Collect customer feedback",
    description:
      "Give customers a simple way to share ideas, requests, and problems directly with your team.",
    bullets: [
      "Submit feature requests and product ideas",
      "Organize feedback with categories",
      "Keep customer requests in one central place",
    ],
    visual: FeedbackVisual,
    label:
      "Feedback dashboard showing customer requests, categories, and vote counts",
  },
  {
    id: "voting",
    title: "Let customers vote",
    description:
      "Let customers show which ideas matter most so your team can understand demand at a glance.",
    bullets: [
      "Upvote important feedback requests",
      "See customer interest through vote counts",
      "Identify highly requested improvements",
    ],
    visual: VotingVisual,
    label:
      "Feature request showing customer votes, priority, and discussion activity",
  },
  {
    id: "prioritization",
    title: "Review & prioritize",
    description:
      "Turn raw customer feedback into clear product decisions and actionable priorities.",
    bullets: [
      "Review incoming feedback",
      "Assign categories and priorities",
      "Move valuable requests into planned work",
    ],
    visual: PrioritizationVisual,
    label:
      "Feedback review screen showing requests with different priority levels",
  },
  {
    id: "roadmap",
    title: "Build a clear product roadmap",
    description:
      "Make product progress visible to both your team and your customers.",
    bullets: [
      "Organize work into Now, Next, and Planned",
      "Track requests from Under Review to Completed",
      "Give customers visibility into upcoming improvements",
    ],
    visual: RoadmapVisual,
    label:
      "Product roadmap organized into Now, Next, and Planned columns",
  },
  {
    id: "discussions",
    title: "Keep feedback conversations connected",
    description:
      "Keep customer discussions attached to the requests that started them.",
    bullets: [
      "Discuss individual feedback requests",
      "Add context and clarification",
      "Keep customer conversations organized",
    ],
    visual: DiscussionVisual,
    label:
      "Feedback discussion showing customer comments attached to a feature request",
  },
  {
    id: "insights",
    title: "Understand feedback trends",
    description:
      "Use feedback activity and customer votes to understand what your users are asking for.",
    bullets: [
      "Track feedback and voting activity",
      "Monitor requests by status and category",
      "Understand recurring customer needs",
    ],
    visual: InsightsVisual,
    label:
      "Feedback insights dashboard showing feedback, votes, completed requests, and activity",
  },
]

export function IncludedFeatures() {
  return (
    <section
      id="features"
      className="marketing-section marketing-container included-section"
      aria-labelledby="features-title"
    >
      <div className="section-heading">
        <span className="marketing-eyebrow">HOW FEEDBACKFLOW WORKS</span>

        <h2 id="features-title">
          From customer feedback
          <br />
          <span>to better product decisions.</span>
        </h2>

        <p>
          Collect requests, understand what customers care about, prioritize
          the right ideas, and keep everyone aligned with a clear product
          roadmap.
        </p>
      </div>

      <div className="included-features">
        {features.map(
          ({
            id,
            title,
            description,
            bullets,
            visual: Visual,
            label,
          }) => (
            <article
              key={id}
              className="included-row"
              aria-labelledby={`included-${id}`}
            >
              <div className="included-visual" role="img" aria-label={label}>
                <div aria-hidden="true">
                  <Visual />
                </div>
              </div>

              <div className="included-copy">
                <h3 id={`included-${id}`}>{title}</h3>

                <p>{description}</p>

                <ul className="included-bullets" role="list">
                  {bullets.map((bullet) => (
                    <li key={bullet}>
                      <Check size={16} aria-hidden="true" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          )
        )}
      </div>
    </section>
  )
}