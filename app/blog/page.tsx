import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Thoughts on halal finance, technology, entrepreneurship, and personal growth.",
  openGraph: {
    title: "Blog — Shafiul Islam",
    description:
      "Thoughts on halal finance, technology, entrepreneurship, and personal growth.",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
      <div className="mb-16">
        <h1 className="font-heading font-extrabold text-4xl md:text-6xl text-foreground mb-4">
          Blog
        </h1>
        <p className="text-muted text-xl">
          On halal finance, technology, entrepreneurship, and personal growth.
        </p>
      </div>

      <div className="divide-y divide-black/5">
        {posts.map((post) => (
          <article key={post.slug} className="py-10 group">
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <time dateTime={post.date} className="text-xs text-muted font-medium tracking-wide uppercase">
                {new Date(post.date).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </time>
              <span className="text-muted/40 text-xs">·</span>
              <span className="text-xs text-muted">{post.readingTime} min read</span>
            </div>

            <h2 className="font-heading font-bold text-xl md:text-2xl text-foreground mb-3 group-hover:text-accent transition-colors duration-200">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>

            <p className="text-muted text-sm leading-relaxed mb-4">
              {post.excerpt}
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-full bg-foreground/5 text-xs text-muted font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href={`/blog/${post.slug}`}
                className="text-accent font-heading font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all duration-200 ml-auto"
              >
                Read <span aria-hidden="true">→</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
