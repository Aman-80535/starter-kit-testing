
"use client";

import { Link } from "fumadocs-core/framework";
import { useMemo, useState } from "react";

type Status =
  | "Under Review"
  | "Planned"
  | "In Progress"
  | "Completed";

type Feedback = {
  id: number;
  title: string;
  description: string;
  category: string;
  status: Status;
  author: string;
  initials: string;
  date: string;
  votes: number;
};

const initialFeedback: Feedback[] = [
  {
    id: 1,
    title: "Add dark mode support",
    description:
      "It would be great to have a dark theme for the dashboard, especially when working late at night.",
    category: "UI / UX",
    status: "Planned",
    author: "Sarah Johnson",
    initials: "SJ",
    date: "Sep 25, 2026",
    votes: 32,
  },
  {
    id: 2,
    title: "Export reports to PDF",
    description:
      "Allow users to export their project reports and analytics as PDF files for sharing with clients.",
    category: "Feature Request",
    status: "In Progress",
    author: "Michael Chen",
    initials: "MC",
    date: "Sep 24, 2026",
    votes: 24,
  },
  {
    id: 3,
    title: "Improve mobile dashboard",
    description:
      "The dashboard is difficult to navigate on mobile. Please improve the responsive layout and navigation.",
    category: "UI / UX",
    status: "Under Review",
    author: "Emily Davis",
    initials: "ED",
    date: "Sep 23, 2026",
    votes: 18,
  },
  {
    id: 4,
    title: "Slack integration",
    description:
      "Send project updates and notifications directly to our Slack workspace.",
    category: "Integration",
    status: "Planned",
    author: "David Wilson",
    initials: "DW",
    date: "Sep 22, 2026",
    votes: 15,
  },
  {
    id: 5,
    title: "Fix notification settings",
    description:
      "Email notifications are still being sent even after disabling them in account settings.",
    category: "Bug Report",
    status: "Completed",
    author: "Olivia Martin",
    initials: "OM",
    date: "Sep 20, 2026",
    votes: 12,
  },
  {
    id: 6,
    title: "Custom project labels",
    description:
      "Let workspace members create custom labels to organize projects and feedback.",
    category: "Feature Request",
    status: "Under Review",
    author: "James Taylor",
    initials: "JT",
    date: "Sep 19, 2026",
    votes: 9,
  },
];

const filters = [
  "All",
  "Under Review",
  "Planned",
  "In Progress",
  "Completed",
];

const statusStyles: Record<Status, string> = {
  "Under Review": "bg-amber-50 text-amber-700",
  Planned: "bg-violet-50 text-violet-700",
  "In Progress": "bg-blue-50 text-blue-700",
  Completed: "bg-emerald-50 text-emerald-700",
};

export default function FeedbackPage() {
  const [feedback, setFeedback] = useState(initialFeedback);
  const [activeFilter, setActiveFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");

  const filteredFeedback = useMemo(() => {
    return feedback.filter((item) => {
      const matchesFilter =
        activeFilter === "All" || item.status === activeFilter;

      const matchesSearch =
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase());

      return matchesFilter && matchesSearch;
    });
  }, [feedback, activeFilter, search]);

  const stats = [
    {
      label: "Total feedback",
      value: feedback.length,
      icon: "◫",
      color: "bg-violet-50 text-violet-600",
    },
    {
      label: "Under review",
      value: feedback.filter((f) => f.status === "Under Review").length,
      icon: "◷",
      color: "bg-amber-50 text-amber-600",
    },
    {
      label: "Planned",
      value: feedback.filter((f) => f.status === "Planned").length,
      icon: "▤",
      color: "bg-blue-50 text-blue-600",
    },
    {
      label: "Completed",
      value: feedback.filter((f) => f.status === "Completed").length,
      icon: "✓",
      color: "bg-emerald-50 text-emerald-600",
    },
  ];

  function addFeedback() {
    if (!newTitle.trim() || !newDescription.trim()) return;

    const newItem: Feedback = {
      id: Date.now(),
      title: newTitle,
      description: newDescription,
      category: "Feature Request",
      status: "Under Review",
      author: "Jamie Davis",
      initials: "JD",
      date: "Just now",
      votes: 0,
    };

    setFeedback((prev) => [newItem, ...prev]);
    setNewTitle("");
    setNewDescription("");
    setShowForm(false);
    setActiveFilter("All");
    setSearch("");
  }

  function vote(id: number) {
    setFeedback((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, votes: item.votes + 1 } : item
      )
    );
  }

  return (
    <main className="min-h-screen bg-[#f8f9fc] text-slate-900">
      <div className="mx-auto max-w-7xl space-y-8 px-5 py-8 md:px-10">

        {/* Header */}
        <header className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <div>
            <div className="mb-2 text-sm text-slate-500">
              <Link href="/" className="hover:underline">
                Workspace
              </Link>{""}
              / Feedback
            </div>
            <h1 className="text-3xl font-bold tracking-tight">
              Client Feedback
            </h1>
            <p className="mt-2 text-sm text-slate-500">
              Collect ideas, track requests, and build what matters to your clients.
            </p>
          </div>

          <button
            onClick={() => setShowForm(!showForm)}
            className="rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-violet-700"
          >
            + Submit feedback
          </button>
        </header>

        {/* Stats */}
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-slate-500">
                  {stat.label}
                </p>
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-xl text-xl ${stat.color}`}
                >
                  {stat.icon}
                </span>
              </div>
              <p className="mt-4 text-3xl font-bold">{stat.value}</p>
            </div>
          ))}
        </section>

        {/* New feedback form */}
        {showForm && (
          <section className="rounded-2xl border border-violet-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold">Submit new feedback</h2>
            <div className="mt-5 space-y-4">
              <input
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                placeholder="Feedback title"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-violet-500"
              />
              <textarea
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
                placeholder="Describe your feedback..."
                rows={4}
                className="w-full resize-y rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-violet-500"
              />
              <div className="flex gap-3">
                <button
                  onClick={addFeedback}
                  className="rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white hover:bg-violet-700"
                >
                  Submit feedback
                </button>
                <button
                  onClick={() => setShowForm(false)}
                  className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-medium hover:bg-slate-50"
                >
                  Cancel
                </button>
              </div>
            </div>
          </section>
        )}

        {/* Search and filters */}
        <section className="space-y-5">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="relative w-full lg:max-w-sm">
              <span className="absolute left-4 top-3 text-slate-400">
                ⌕
              </span>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search feedback..."
                className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm outline-none focus:border-violet-500"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-xl px-4 py-2.5 text-sm font-medium transition ${
                    activeFilter === filter
                      ? "bg-violet-600 text-white"
                      : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Feedback list */}
          <div className="space-y-4">
            {filteredFeedback.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-violet-200 hover:shadow-md sm:p-6"
              >
                <div className="flex flex-col gap-5 sm:flex-row">
                  {/* Vote button */}
                  <div className="flex shrink-0 sm:flex-col">
                    <button
                      onClick={() => vote(item.id)}
                      aria-label={`Vote for ${item.title}`}
                      className="flex min-w-16 flex-row items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-700 hover:border-violet-300 hover:bg-violet-50 sm:flex-col sm:gap-1 sm:py-3"
                    >
                      <span className="text-lg text-violet-600">▲</span>
                      <span>{item.votes}</span>
                    </button>
                  </div>

                  {/* Main content */}
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
                        {item.category}
                      </span>
                      <span
                        className={`rounded-lg px-2.5 py-1 text-xs font-semibold ${statusStyles[item.status]}`}
                      >
                        {item.status}
                      </span>
                    </div>

                    <h2 className="mt-3 text-lg font-semibold tracking-tight">
                      {item.title}
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {item.description}
                    </p>

                    <div className="mt-5 flex flex-wrap items-center gap-3 text-xs text-slate-500">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-100 font-semibold text-violet-700">
                        {item.initials}
                      </span>
                      <span className="font-medium text-slate-700">
                        {item.author}
                      </span>
                      <span>·</span>
                      <span>{item.date}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}

            {filteredFeedback.length === 0 && (
              <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
                <div className="text-3xl">⌕</div>
                <h3 className="mt-3 font-semibold">No feedback found</h3>
                <p className="mt-2 text-sm text-slate-500">
                  Try a different search or select another status.
                </p>
                <button
                  onClick={() => {
                    setSearch("");
                    setActiveFilter("All");
                  }}
                  className="mt-4 text-sm font-semibold text-violet-600 hover:underline"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-slate-200 pt-5 text-center text-xs text-slate-400">
          Client Feedback Board · Demo workspace · Static sample data
        </footer>
      </div>
    </main>
  );
}