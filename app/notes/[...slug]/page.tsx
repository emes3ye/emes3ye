import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getNoteCategories, getNoteBySlug, getAllNotes } from "@/lib/notes";
import NotesPageClient from "@/components/notes/NotesPageClient";
import NoteContent from "./NoteContent";

type Props = {
  params: { slug: string[] };
};

export async function generateStaticParams() {
  const notes = getAllNotes();
  return notes.map((note) => ({
    slug: note.slug.split("/"),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const [categorySlug, noteSlug] = params.slug;
  if (!categorySlug || !noteSlug) return {};
  const note = getNoteBySlug(categorySlug, noteSlug);
  if (!note) return {};
  return {
    title: `${note.title} — Notes`,
    description: note.description,
  };
}

export default function NoteSlugPage({ params }: Props) {
  const [categorySlug, noteSlug] = params.slug;
  if (!categorySlug || !noteSlug) notFound();

  const note = getNoteBySlug(categorySlug, noteSlug);
  if (!note) notFound();

  const categories = getNoteCategories();

  return (
    <NotesPageClient
      categories={categories}
      activeSlug={note.slug}
      noteTitle={note.title}
    >
      <header className="mb-10">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium uppercase tracking-widest text-muted">
            {note.categoryName}
          </span>
        </div>
        <h1 className="font-heading font-extrabold text-3xl md:text-4xl text-foreground mb-4 leading-tight">
          {note.title}
        </h1>
        {note.description && (
          <p className="text-muted text-lg leading-relaxed">{note.description}</p>
        )}
        {note.updatedAt && (
          <p className="text-xs text-muted mt-3">
            Updated{" "}
            <time dateTime={note.updatedAt}>
              {new Date(note.updatedAt).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
          </p>
        )}
      </header>

      <NoteContent content={note.content} />
    </NotesPageClient>
  );
}
