"use client";

import Link from "next/link";
import { useInView } from "@/hooks/useInView";

const posts = [
  {
    date: "March 10, 2026",
    title: "How I Built My Website While I Slept",
    excerpt:
      "Using agentic AI to ship a full personal brand site overnight — and what I learned from it.",
  },
  {
    date: "March 5, 2026",
    title: "Why Halal Investing Is the Future",
    excerpt:
      "The financial world is waking up to ethical investing. Here's why halal principles lead the way.",
  },
  {
    date: "February 28, 2026",
    title: "Faith, Fitness & Focus: My Daily Routine",
    excerpt:
      "How I structure my mornings to stay grounded, productive, and aligned with my values.",
  },
];

export default function BlogPreview() {
  const { ref, inView } = useInView();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="max-w-6xl mx-auto px-6 py-24 md:py-32"
    >
      <div className="mb-12">
        <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-foreground mb-3">
          Thoughts &amp; Insights
        </h2>
        <p className="text-muted">
          On halal finance, technology, entrepreneurship, and personal growth.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {posts.map((post, i) => (
          <article
            key={i}
            className={`flex flex-col gap-3 transition-all duration-700 ease-out ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: inView ? `${i * 100}ms` : "0ms" }}
          >
            <time className="text-xs text-muted font-medium tracking-wide uppercase">
              {post.date}
            </time>
            <h3 className="font-heading font-bold text-lg text-foreground leading-snug">
              {post.title}
            </h3>
            <p className="text-muted text-sm leading-relaxed flex-1">
              {post.excerpt}
            </p>
            <Link
              href="/blog"
              className="text-accent font-heading font-semibold text-sm hover:gap-2 inline-flex items-center gap-1 transition-all duration-200 w-fit"
            >
              Read <span aria-hidden="true">→</span>
            </Link>
          </article>
        ))}
      </div>

      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-accent font-heading font-semibold text-sm hover:gap-3 transition-all duration-200"
      >
        View all posts <span aria-hidden="true">→</span>
      </Link>
    </section>
  );
}
