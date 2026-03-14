import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  readingTime: number;
  content: string;
};

function calcReadingTime(content: string): number {
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

export function getAllPosts(): Omit<Post, "content">[] {
  const files = fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));

  return files
    .map((filename) => {
      const raw = fs.readFileSync(path.join(BLOG_DIR, filename), "utf-8");
      const { data, content } = matter(raw);
      return {
        slug: data.slug || filename.replace(/\.(mdx|md)$/, ""),
        title: data.title || "Untitled",
        date: data.date || "",
        excerpt: data.excerpt || "",
        tags: data.tags || [],
        readingTime: calcReadingTime(content),
      };
    })
    .filter((p) => p.date)
    .sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getPostBySlug(slug: string): Post | null {
  const files = fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));

  for (const filename of files) {
    const raw = fs.readFileSync(path.join(BLOG_DIR, filename), "utf-8");
    const { data, content } = matter(raw);
    const postSlug = data.slug || filename.replace(/\.(mdx|md)$/, "");
    if (postSlug === slug) {
      return {
        slug: postSlug,
        title: data.title || "Untitled",
        date: data.date || "",
        excerpt: data.excerpt || "",
        tags: data.tags || [],
        readingTime: calcReadingTime(content),
        content,
      };
    }
  }
  return null;
}
