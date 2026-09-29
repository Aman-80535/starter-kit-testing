"use client";

import { Link } from "fumadocs-core/framework";
import {
  ArrowUp,
  Check,
  ChevronDown,
  CircleHelp,
  Clock3,
  FileText,
  Lightbulb,
  MessageCircle,
  Plus,
  Search,
  Sparkles,
  X,
} from "lucide-react";
import { useMemo, useState } from "react";

type Status = "Under Review" | "Planned" | "In Progress" | "Completed";

type Category = "Feature Request" | "UI / UX" | "Integration" | "Bug Report";

type Priority = "Low" | "Medium" | "High";

type Feedback = {
  id: number;
  title: string;
  description: string;
  category: Category;
  status: Status;
  priority: Priority;
  author: string;
  initials: string;
  date: string;
  votes: number;
  comments: number;
};

const initialFeedback: Feedback[] = [
  {
    id: 1,
    title: "Add dark mode support",
    description:
      "Give users a comfortable dark theme for the dashboard, especially when working late at night.",
    category: "UI / UX",
    status: "Planned",
    priority: "High",
    author: "Sarah Johnson",
    initials: "SJ",
    date: "Sep 25, 2026",
    votes: 32,
    comments: 8,
  },
  {
    id: 2,
    title: "Export reports to PDF",
    description:
      "Allow users to export project reports and analytics as PDF files for sharing with clients.",
    category: "Feature Request",
    status: "In Progress",
    priority: "High",
    author: "Michael Chen",
    initials: "MC",
    date: "Sep 24, 2026",
    votes: 24,
    comments: 5,
  },
  {
    id: 3,
    title: "Improve mobile dashboard",
    description:
      "The dashboard is difficult to navigate on mobile. Improve the responsive layout and navigation.",
    category: "UI / UX",
    status: "Under Review",
    priority: "Medium",
    author: "Emily Davis",
    initials: "ED",
    date: "Sep 23, 2026",
    votes: 18,
    comments: 4,
  },
  {
    id: 4,
    title: "Slack integration",
    description:
      "Send product updates and important feedback notifications directly to a Slack workspace.",
    category: "Integration",
    status: "Planned",
    priority: "Medium",
    author: "David Wilson",
    initials: "DW",
    date: "Sep 22, 2026",
    votes: 15,
    comments: 6,
  },
  {
    id: 5,
    title: "Fix notification settings",
    description:
      "Email notifications are still being sent after users disable them in account settings.",
    category: "Bug Report",
    status: "Completed",
    priority: "High",
    author: "Olivia Martin",
    initials: "OM",
    date: "Sep 20, 2026",
    votes: 12,
    comments: 3,
  },
  {
    id: 6,
    title: "Custom project labels",
    description:
      "Let workspace members create custom labels to organize feedback and product requests.",
    category: "Feature Request",
    status: "Under Review",
    priority: "Low",
    author: "James Taylor",
    initials: "JT",
    date: "Sep 19, 2026",
    votes: 9,
    comments: 2,
  },
];

const filters = [
  "All",
  "Under Review",
  "Planned",
  "In Progress",
  "Completed",
] as const;

const statusStyles: Record<Status, string> = {
  "Under Review": "bg-amber-50 text-amber-700 ring-amber-200",
  Planned: "bg-violet-50 text-violet-700 ring-violet-200",
  "In Progress": "bg-blue-50 text-blue-700 ring-blue-200",
  Completed: "bg-emerald-50 text-emerald-700 ring-emerald-200",
};

const priorityStyles: Record<Priority, string> = {
  Low: "text-slate-500",
  Medium: "text-amber-600",
  High: "text-rose-600",
};

export default function FeedbackPage() {
  const [feedback, setFeedback] = useState(initialFeedback);
  const [activeFilter, setActiveFilter] =
    useState<(typeof filters)[number]>("All");
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newCategory, setNewCategory] =
    useState<Category>("Feature Request");
  const [newPriority, setNewPriority] = useState<Priority>("Medium");

  const filteredFeedback = useMemo(() => {
    return feedback
      .filter((item) => {
        const matchesFilter =
          activeFilter === "All" || item.status === activeFilter;

        const searchValue = search.trim().toLowerCase();

        const matchesSearch =
          !searchValue ||
          item.title.toLowerCase().includes(searchValue) ||
          item.description.toLowerCase().includes(searchValue) ||
          item.category.toLowerCase().includes(searchValue);

        return matchesFilter && matchesSearch;
      })
      .sort((a, b) => b.votes - a.votes);
  }, [feedback, activeFilter, search]);

  const stats = [
    {
      label: "Total feedback",
      value: feedback.length,
      icon: MessageCircle,
      description: "All requests",
      color: "bg-violet-50 text-violet-600",
    },
    {
      label: "Under review",
      value: feedback.filter((f) => f.status === "Under Review").length,
      icon: Clock3,
      description: "Needs a decision",
      color: "bg-amber-50 text-amber-600",
    },
    {
      label: "Planned",
      value: feedback.filter((f) => f.status === "Planned").length,
      icon: Lightbulb,
      description: "On the roadmap",
      color: "bg-blue-50 text-blue-600",
    },
    {
      label: "Completed",
      value: feedback.filter((f) => f.status === "Completed").length,
      icon: Check,
      description: "Delivered to users",
      color: "bg-emerald-50 text-emerald-600",
    },
  ];

  function addFeedback() {
    if (!newTitle.trim() || !newDescription.trim()) return;

    const newItem: Feedback = {
      id: Date.now(),
      title: newTitle.trim(),
      description: newDescription.trim(),
      category: newCategory,
      status: "Under Review",
      priority: newPriority,
      author: "Jamie Davis",
      initials: "JD",
      date: "Just now",
      votes: 0,
      comments: 0,
    };

    setFeedback((prev) => [newItem, ...prev]);
    setNewTitle("");
    setNewDescription("");
    setNewCategory("Feature Request");
    setNewPriority("Medium");
    setShowForm(false);
    setActiveFilter("All");
    setSearch("");
  }

  function vote(id: number) {
    setFeedback((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, votes: item.votes + 1 } : item,
      ),
    );
  }

  return (
    <main className="min-h-screen bg-[#f7f8fc] text-slate-900">
      <div className="mx-auto max-w-7xl space-y-8 px-5 py-8 md:px-10">
        <header className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <div className="mb-3 flex items-center gap-2 text-sm text-slate-500">
              <Link href="/" className="transition hover:text-violet-600">
                Workspace
              </Link>
              <span>/</span>
              <span className="text-slate-700">Feedback</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-100 text-violet-600">
                <MessageCircle className="h-5 w-5" />
              </div>

              <div>
                <h1 className="text-3xl font-bold tracking-tight">
                  Feedback Board
                </h1>
                <p className="mt-1 text-sm text-slate-500">
                  Turn customer ideas into a product roadmap.
                </p>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setShowForm((value) => !value)}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-violet-700"
          >
            <Plus className="h-4 w-4" />
            Submit feedback
          </button>
        </header>

        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium text-slate-500">
                      {stat.label}
                    </p>
                    <p className="mt-3 text-3xl font-bold">{stat.value}</p>
                    <p className="mt-1 text-xs text-slate-400">
                      {stat.description}
                    </p>
                  </div>

                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${stat.color}`}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                </div>
              </div>
            );
          })}
        </section>

        {showForm && (
          <section className="rounded-2xl border border-violet-200 bg-white p-6 shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-violet-600">
                  New request
                </p>
                <h2 className="mt-1 text-lg font-semibold">
                  Share an idea with the team
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setShowForm(false)}
                aria-label="Close feedback form"
                className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="md:col-span-2">
                <label
                  htmlFor="feedback-title"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Title
                </label>
                <input
                  id="feedback-title"
                  value={newTitle}
                  onChange={(event) => setNewTitle(event.target.value)}
                  placeholder="What should we improve or build?"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
                />
              </div>

              <div className="md:col-span-2">
                <label
                  htmlFor="feedback-description"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Description
                </label>
                <textarea
                  id="feedback-description"
                  value={newDescription}
                  onChange={(event) =>
                    setNewDescription(event.target.value)
                  }
                  placeholder="Tell us more about the problem or idea..."
                  rows={4}
                  className="w-full resize-y rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
                />
              </div>

              <div>
                <label
                  htmlFor="feedback-category"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Category
                </label>
                <div className="relative">
                  <select
                    id="feedback-category"
                    value={newCategory}
                    onChange={(event) =>
                      setNewCategory(event.target.value as Category)
                    }
                    className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-4 py-3 pr-10 text-sm outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
                  >
                    <option>Feature Request</option>
                    <option>UI / UX</option>
                    <option>Integration</option>
                    <option>Bug Report</option>
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-4 top-3.5 h-4 w-4 text-slate-400" />
                </div>
              </div>

              <div>
                <label
                  htmlFor="feedback-priority"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Priority
                </label>
                <div className="relative">
                  <select
                    id="feedback-priority"
                    value={newPriority}
                    onChange={(event) =>
                      setNewPriority(event.target.value as Priority)
                    }
                    className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-4 py-3 pr-10 text-sm outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
                  >
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-4 top-3.5 h-4 w-4 text-slate-400" />
                </div>
              </div>

              <div className="flex flex-wrap gap-3 md:col-span-2">
                <button
                  type="button"
                  onClick={addFeedback}
                  disabled={!newTitle.trim() || !newDescription.trim()}
                  className="rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-700 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Submit request
                </button>

                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                >
                  Cancel
                </button>
              </div>
            </div>
          </section>
        )}

        <section className="space-y-5">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="relative w-full lg:max-w-md">
              <Search className="absolute left-4 top-3.5 h-4 w-4 text-slate-400" />
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search feedback, ideas, or categories..."
                className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-xl px-4 py-2.5 text-sm font-medium transition ${
                    activeFilter === filter
                      ? "bg-violet-600 text-white shadow-sm"
                      : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold">Product feedback</h2>
              <p className="mt-1 text-sm text-slate-500">
                Prioritize the ideas your users care about most.
              </p>
            </div>

            <div className="hidden items-center gap-2 text-sm text-slate-400 sm:flex">
              <Sparkles className="h-4 w-4" />
              Sorted by votes
            </div>
          </div>

          <div className="space-y-4">
            {filteredFeedback.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-violet-200 hover:shadow-md sm:p-6"
              >
                <div className="flex flex-col gap-5 sm:flex-row">
                  <div className="flex shrink-0 sm:flex-col">
                    <button
                      type="button"
                      onClick={() => vote(item.id)}
                      aria-label={`Vote for ${item.title}`}
                      className="flex min-w-16 flex-row items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:border-violet-300 hover:bg-violet-50 hover:text-violet-700 sm:flex-col sm:gap-1 sm:py-3"
                    >
                      <ArrowUp className="h-4 w-4 text-violet-600" />
                      <span>{item.votes}</span>
                    </button>
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
                        {item.category}
                      </span>

                      <span
                        className={`rounded-lg px-2.5 py-1 text-xs font-semibold ring-1 ring-inset ${statusStyles[item.status]}`}
                      >
                        {item.status}
                      </span>

                      <span
                        className={`ml-auto inline-flex items-center gap-1 text-xs font-medium ${priorityStyles[item.priority]}`}
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-current" />
                        {item.priority} priority
                      </span>
                    </div>

                    <h3 className="mt-3 text-lg font-semibold tracking-tight">
                      {item.title}
                    </h3>

                    <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-500">
                      {item.description}
                    </p>

                    <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-3 text-xs text-slate-500">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-100 font-semibold text-violet-700">
                        {item.initials}
                      </span>

                      <span className="font-medium text-slate-700">
                        {item.author}
                      </span>

                      <span>·</span>

                      <span>{item.date}</span>

                      <span className="hidden sm:inline">·</span>

                      <span className="inline-flex items-center gap-1.5">
                        <MessageCircle className="h-3.5 w-3.5" />
                        {item.comments}{" "}
                        {item.comments === 1 ? "comment" : "comments"}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))}

            {filteredFeedback.length === 0 && (
              <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-500">
                  <Search className="h-5 w-5" />
                </div>

                <h3 className="mt-4 font-semibold">No feedback found</h3>

                <p className="mx-auto mt-2 max-w-sm text-sm text-slate-500">
                  Try a different search term or choose another status filter.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setSearch("");
                    setActiveFilter("All");
                  }}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-violet-600 hover:underline"
                >
                  <X className="h-4 w-4" />
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </section>

        <section className="rounded-2xl border border-violet-100 bg-violet-50/60 p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-violet-600 shadow-sm">
              <CircleHelp className="h-5 w-5" />
            </div>

            <div>
              <h2 className="font-semibold text-slate-900">
                Help shape the roadmap
              </h2>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                Vote for the ideas that matter most. The team uses community
                feedback to decide what gets built next.
              </p>
            </div>
          </div>
        </section>

        <footer className="flex flex-col items-center justify-between gap-3 border-t border-slate-200 pt-5 text-xs text-slate-400 sm:flex-row">
          <span>FeedbackFlow · Product feedback workspace</span>

          <span className="inline-flex items-center gap-1.5">
            <FileText className="h-3.5 w-3.5" />
            Demo workspace
          </span>
        </footer>
      </div>
    </main>
  );
}