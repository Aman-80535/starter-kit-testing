/** Marketing copy. Pricing reads the shared application billing catalog. */

export const marketing = {
  title: "Turn customer feedback into products people love.",

  description:
    "FeedbackFlow helps product teams collect customer feedback, let users vote and discuss ideas, prioritize requests, and track them through a clear product roadmap.",

navigation: [
  { label: "Features", href: "/#features" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/faq" },
],

  faqs: [
    {
      question: "What is FeedbackFlow?",
      answer:
        "FeedbackFlow is a customer feedback management platform that helps teams collect, organize, prioritize, and discuss product feedback in one place.",
    },
    {
      question: "Can customers vote on feedback?",
      answer:
        "Yes. Customers can vote on feedback requests, helping your team understand which ideas are most important to your users.",
    },
    {
      question: "How does the product roadmap work?",
      answer:
        "FeedbackFlow lets teams organize prioritized feedback into roadmap stages such as Now, Next, and Planned, while tracking individual requests through statuses like Under Review, Planned, In Progress, and Completed.",
    },
    {
      question: "Can customers discuss feedback?",
      answer:
        "Yes. Feedback items can include discussions and comments so customers and product teams can provide additional context and keep conversations connected to each request.",
    },
    {
      question: "Can my team prioritize customer requests?",
      answer:
        "Yes. Teams can review feedback, consider customer votes and discussions, assign categories and priorities, and decide which requests should move into the product roadmap.",
    },
    {
      question: "Do I need a separate tool for roadmap management?",
      answer:
        "No. FeedbackFlow connects feedback collection and roadmap management so your team can move from customer requests to planned and completed work in the same product.",
    },
  ],
}

export const billingFaqs = [
  {
    question: "Is a subscription shared across workspaces?",
    answer:
      "Each workspace has its own subscription. Everyone in that workspace shares access, with no per-seat charges. If you create another workspace, its subscription is managed separately.",
  },
  {
    question: "Can I pay monthly or yearly?",
    answer:
      "Yes. Choose Monthly or Yearly to see the full charge for that billing period. Any annual savings are calculated from the current monthly and yearly prices.",
  },
  {
    question: "Can I change or cancel my plan?",
    answer:
      "Workspace owners and admins can manage their plan in Settings → Billing. Plan changes are confirmed in the Stripe customer portal. Cancellation takes effect at the end of your paid period, so you keep access until then.",
  },
  {
    question: "Do subscriptions include recurring AI credits?",
    answer:
      "No. The optional AI example gives each workspace 100 credits once. These are separate from billing and do not renew when a subscription is purchased or renewed.",
  },
  {
    question: "Does pricing include access to FeedbackFlow?",
    answer:
      "Yes. The workspace subscription provides access to the FeedbackFlow application according to the selected plan.",
  },
]