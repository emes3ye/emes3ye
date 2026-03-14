import { MDXRemote } from "next-mdx-remote/rsc";

export default function NoteContent({ content }: { content: string }) {
  return (
    <div className="blog-prose">
      <MDXRemote source={content} />
    </div>
  );
}
