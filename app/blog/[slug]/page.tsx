import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import BlogPostContent from "./BlogPostContent";
import ReadingProgressBar from "@/components/ui/ReadingProgressBar";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  const ogImageUrl = `/blog/${params.slug}/opengraph-image`;
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      tags: post.tags,
      images: [{ url: ogImageUrl, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [ogImageUrl],
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <>
      <ReadingProgressBar />
    <div className="max-w-2xl mx-auto px-6 py-16 md:py-24">
      {/* Back link */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-muted text-sm hover:text-foreground transition-colors duration-200 mb-12"
      >
        <span aria-hidden="true">←</span> Back to blog
      </Link>

      {/* Header */}
      <header className="mb-12">
        <div className="flex flex-wrap items-center gap-3 mb-4">
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
        <h1 className="font-heading font-extrabold text-3xl md:text-4xl text-foreground mb-6 leading-tight">
          {post.title}
        </h1>
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
      </header>

      {/* MDX content */}
      <BlogPostContent content={post.content} />
    </div>
    </>
  );
}
