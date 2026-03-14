import { MDXRemote } from "next-mdx-remote/rsc";

export default function BlogPostContent({ content }: { content: string }) {
  return (
    <div className="blog-prose">
      <MDXRemote source={content} />
    </div>
  );
}
